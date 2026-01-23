import { useState, useEffect, useRef, useCallback } from 'react';

// Configuration
const WS_URL = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.0-flash-exp"; // Using the flash-exp as requested/standard for low latency

interface UseMultimodalLiveProps {
    apiKey: string;
    systemInstruction?: string;
}

export function useMultimodalLive({ apiKey, systemInstruction }: UseMultimodalLiveProps) {
    const [connected, setConnected] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const wsRef = useRef<WebSocket | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const mediaStreamRef = useRef<MediaStream | null>(null);
    const processorRef = useRef<ScriptProcessorNode | null>(null);

    // Initial Connection
    const connect = useCallback(() => {
        if (!apiKey) return;

        const url = `${WS_URL}?key=${apiKey}`;
        const ws = new WebSocket(url);

        ws.onopen = () => {
            setConnected(true);
            setLogs(p => [...p, "Conectado a Gemini."]);

            // Send Setup Message
            const setupMsg = {
                setup: {
                    model: MODEL,
                    generation_config: {
                        response_modalities: ["AUDIO", "TEXT"],
                        speech_config: {
                            voice_config: {
                                prebuilt_voice_config: {
                                    voice_name: "Aoede" // Female, Neutral-ish
                                }
                            }
                        }
                    },
                    system_instruction: {
                        parts: [{ text: systemInstruction || "Eres un asistente útil." }]
                    }
                }
            };
            ws.send(JSON.stringify(setupMsg));
        };

        ws.onmessage = async (event) => {
            let data;
            if (event.data instanceof Blob) {
                data = JSON.parse(await event.data.text());
            } else {
                data = JSON.parse(event.data);
            }

            // Handle Server Content (Audio/Text)
            if (data.serverContent) {
                if (data.serverContent.modelTurn) {
                    const parts = data.serverContent.modelTurn.parts;
                    for (const part of parts) {
                        if (part.text) {
                            setLogs(p => [...p, `AI: ${part.text}`]);
                        }
                        if (part.inlineData) {
                            // Play Audio (Base64)
                            playAudioChunk(part.inlineData.data);
                        }
                    }
                }
            }
        };

        ws.onclose = () => {
            setConnected(false);
            setLogs(p => [...p, "Desconectado."]);
        };

        ws.onerror = (e) => {
            console.error(e);
            setLogs(p => [...p, "Error en conexión."]);
        };

        wsRef.current = ws;
    }, [apiKey, systemInstruction]);

    const disconnect = useCallback(() => {
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }
        stopRecording();
        setConnected(false);
    }, []);

    // Audio Input Logic
    const startRecording = async () => {
        if (!wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

        try {
            audioContextRef.current = new window.AudioContext({ sampleRate: 16000 });
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaStreamRef.current = stream;

            const source = audioContextRef.current.createMediaStreamSource(stream);
            // Verify processor support, else use AudioWorklet (simplified here for brevity)
            const processor = audioContextRef.current.createScriptProcessor(512, 1, 1);

            processor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                // Convert Float32 to PCM 16-bit Base64
                const pcmData = floatTo16BitPCM(inputData);
                const base64Data = arrayBufferToBase64(pcmData);

                wsRef.current?.send(JSON.stringify({
                    realtime_input: {
                        media_chunks: [{
                            mime_type: "audio/pcm",
                            data: base64Data
                        }]
                    }
                }));
            };

            source.connect(processor);
            processor.connect(audioContextRef.current.destination);

            processorRef.current = processor;
            setIsListening(true);
        } catch (err) {
            console.error("Error accessing microphone:", err);
        }
    };

    const stopRecording = () => {
        if (processorRef.current) {
            processorRef.current.disconnect();
            processorRef.current = null;
        }
        if (mediaStreamRef.current) {
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
            mediaStreamRef.current = null;
        }
        if (audioContextRef.current) {
            audioContextRef.current.close();
        }
        setIsListening(false);
    };

    // Helper: Play Audio
    const playAudioChunk = (base64String: string) => {
        // This is a naive implementation. Ideally use a queue and an AudioWorklet for smooth playback.
        // For prototype, we decdoe and play.
        const binaryString = window.atob(base64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }

        // Assuming 24kHz output from Gemini mostly
        // Use a separate context for playback if needed or reuse
        const context = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });

        // Create buffer (needs proper decoding if generic PCm, but Gemini sends PCM)
        // Actually Gemini sends raw PCM 16-bit 24kHz usually.
        // decoding manually from Int16 to Float32
        const float32 = new Float32Array(bytes.length / 2);
        const dataView = new DataView(bytes.buffer);
        for (let i = 0; i < bytes.length / 2; i++) {
            const int16 = dataView.getInt16(i * 2, true); // Little endian
            float32[i] = int16 >= 0x8000 ? -(0x10000 - int16) / 0x8000 : int16 / 0x7FFF;
        }

        const buffer = context.createBuffer(1, float32.length, 24000);
        buffer.getChannelData(0).set(float32);

        const source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);
        source.start();
    };

    // Helper: Utils
    function floatTo16BitPCM(output: Float32Array) {
        const buffer = new ArrayBuffer(output.length * 2);
        const view = new DataView(buffer);
        for (let i = 0; i < output.length; i++) {
            const s = Math.max(-1, Math.min(1, output[i]));
            view.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
        return buffer;
    }

    function arrayBufferToBase64(buffer: ArrayBuffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    return {
        connect,
        disconnect,
        startRecording,
        stopRecording,
        connected,
        isListening,
        logs,
        sendText: (text: string) => {
            wsRef.current?.send(JSON.stringify({
                client_content: {
                    turns: [{ role: "user", parts: [{ text }] }],
                    turn_complete: true
                }
            }));
            setLogs(p => [...p, `User: ${text}`]);
        }
    };
}
