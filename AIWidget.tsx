import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, MessageSquare, X, Send, Activity, Terminal } from 'lucide-react';
import { useMultimodalLive } from '../src/hooks/useMultimodalLive';

export function AIWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [context, setContext] = useState<string>("");
    const [inputValue, setInputValue] = useState("");

    // Inactivity Timer
    const lastActivityRef = useRef(Date.now());

    // Config
    const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyBOrwCqU7MR4xf4N1MXlsg4aQ859ge1dD0"; // Fallback or loaded safely? 
    // Ideally we shouldn't expose key on client, but for this demo request it was provided. 
    // In strict prod, we'd proxy. But user asked to use THIS key.

    // Fetch Context on Mount
    useEffect(() => {
        fetch('/api/knowledge')
            .then(res => res.json())
            .then(data => setContext(data.context || ""))
            .catch(err => console.error(err));

        // Activity Monitor
        const interval = setInterval(() => {
            if (isOpen && Date.now() - lastActivityRef.current > 60000) {
                // Auto close/disconnect
                handleDisconnect(); // Close connection
                setIsOpen(false);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [isOpen]);

    const {
        connect, disconnect, startRecording, stopRecording,
        connected, isListening, logs, sendText
    } = useMultimodalLive({
        apiKey: API_KEY,
        systemInstruction: `Eres el Asistente de Infraestructura de Axocia. Tono: Profesional, directo, experto en sistemas.
        
        BASE DE CONOCIMIENTOS:
        ${context}
        
        INSTRUCCIONES:
        1. Responde preguntas basadas SOLO en la Base de Conocimientos.
        2. Si no sabes, di que no forma parte de la infraestructura actual y ofrece alternativa.
        3. Sé conciso. Estilo suizo.`
    });

    const handleOpen = () => {
        setIsOpen(true);
        connect();
        lastActivityRef.current = Date.now();
    };

    const handleDisconnect = () => {
        disconnect();
        setIsOpen(false);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        sendText(inputValue);
        setInputValue("");
        lastActivityRef.current = Date.now();
    };

    const toggleMic = () => {
        if (isListening) stopRecording();
        else startRecording();
        lastActivityRef.current = Date.now();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">

            {/* WIDGET WINDOW */}
            <div className={`
                mb-4 w-[350px] md:w-[400px] bg-[#0A0A0A] border border-white/20 shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                ${isOpen ? 'opacity-100 translate-y-0 h-[600px] pointer-events-auto' : 'opacity-0 translate-y-12 h-0 pointer-events-none'}
            `}>

                {/* Header */}
                <div className="h-12 border-b border-white/10 flex justify-between items-center px-4 bg-white/5 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        <span className="font-mono text-[10px] tracking-widest text-[#6C5CE7]">AXOCIA_AI_CORE</span>
                    </div>
                    <button onClick={handleDisconnect} className="text-gray-500 hover:text-white transition-colors">
                        <X size={16} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="h-[480px] overflow-y-auto p-4 space-y-4 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
                    {logs.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-gray-600 opacity-50">
                            <Terminal size={32} className="mb-4 text-[#6C5CE7]" />
                            <p className="font-mono text-xs text-center">SISTEMA LISTO.<br />ESCUCHANDO...</p>
                        </div>
                    )}
                    {logs.map((log, i) => {
                        const isUser = log.startsWith("User:");
                        const text = log.replace(/^(User:|AI:)/, '').trim();
                        return (
                            <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 text-sm font-jakarta leading-relaxed border ${isUser
                                    ? 'bg-white/10 border-white/20 text-white'
                                    : 'bg-[#6C5CE7]/10 border-[#6C5CE7]/30 text-gray-200'
                                    }`}>
                                    {text}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Input Area */}
                <div className="absolute bottom-0 w-full h-16 bg-[#0A0A0A] border-t border-white/10 flex items-center px-4 gap-2">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Comando..."
                            className="w-full bg-transparent border-none text-white font-mono text-sm focus:outline-none placeholder-gray-700"
                        />
                    </div>

                    <button onClick={toggleMic} className={`p-2 transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-white'}`}>
                        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                    </button>

                    <button onClick={handleSend} className="p-2 text-[#6C5CE7] hover:text-white transition-colors">
                        <Send size={18} />
                    </button>
                </div>
            </div>

            {/* FLOATING TRIGGER BUTTON */}
            <button
                onClick={isOpen ? handleDisconnect : handleOpen}
                className={`
                    group relative w-14 h-14 bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(108,92,231,0.3)]
                    hover:bg-[#6C5CE7] hover:text-white transition-all duration-300
                    ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}
                `}
            >
                <Activity size={24} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* Close Button (When Open - replaces Trigger) */}
            <button
                onClick={handleDisconnect}
                className={`
                    absolute bottom-0 right-0 w-14 h-14 bg-[#0A0A0A] border border-white/20 text-white flex items-center justify-center
                    hover:border-red-500 hover:text-red-500 transition-all duration-300
                    ${isOpen ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}
                `}
            >
                <X size={24} />
            </button>

        </div>
    );
}
