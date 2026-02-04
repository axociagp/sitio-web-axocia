import { useState, useRef, useCallback } from 'react';

// Configuration
const WS_URL = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent";
const MODEL = "models/gemini-2.0-flash-exp"; 

interface UseMultimodalLiveProps {
    apiKey: string;
    systemInstruction?: string;
}

export function useMultimodalLive({ apiKey, systemInstruction }: UseMultimodalLiveProps) {
    const [connected, setConnected] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const wsRef = useRef<WebSocket | null>(null);

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
                        response_modalities: ["TEXT"], // Changed to TEXT only
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

            // Handle Server Content (Text only)
            if (data.serverContent) {
                if (data.serverContent.modelTurn) {
                    const parts = data.serverContent.modelTurn.parts;
                    for (const part of parts) {
                        if (part.text) {
                            setLogs(p => [...p, `AI: ${part.text}`]);
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
        setConnected(false);
    }, []);

    return {
        connect,
        disconnect,
        connected,
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
