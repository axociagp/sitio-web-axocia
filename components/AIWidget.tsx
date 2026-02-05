import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Activity, Terminal } from 'lucide-react';

// Config
// Use the provided key or fallback safely. Note: In a real app, use import.meta.env.VITE_GEMINI_API_KEY
// Config
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "AIzaSyBOrwCqU7MR4xf4N1MXlsg4aQ859ge1dD0";

export function AIWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [context, setContext] = useState<string>("");
    const [inputValue, setInputValue] = useState("");
    const [logs, setLogs] = useState<string[]>(["AI: Hola, ¿tienes alguna duda?"]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Fetch Context on Mount
    useEffect(() => {
        fetch('/api/knowledge')
            .then(res => res.json())
            .then(data => setContext(data.context || ""))
            .catch(err => console.log("Context fetch ignored:", err));
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMsg = inputValue;
        setInputValue("");
        setLogs(prev => [...prev, `User: ${userMsg}`]);
        setIsLoading(true);

        try {
            if (!API_KEY || API_KEY.startsWith("YOUR_")) {
                throw new Error("Clave API no configurada.");
            }

            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Eres el Asistente de Infraestructura de Axocia. Tono: Profesional, directo, experto en sistemas.
                            CONTEXTO: ${context}
                            HISTORIAL RECIENTE: ${logs.slice(-5).join('\n')}
                            USUARIO: ${userMsg}
                            INSTRUCCIONES: Responde breve y profesionalmente.`
                        }]
                    }]
                })
            });

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error?.message || `HTTP ${response.status}`);
            }

            const data = await response.json();
            const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;

            if (!aiResponse) throw new Error('Sin respuesta del modelo.');

            setLogs(prev => [...prev, `AI: ${aiResponse}`]);
        } catch (error) {
            console.error("Gemini Error:", error);
            setLogs(prev => [...prev, `AI: Error: ${(error as Error).message}`]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // Container: Fixed TOP-RIGHT, below the menu button (which is top-8 right-8)
        // Menu is ~50px height. So top-24 should be safe.
        <div className="fixed top-24 right-8 z-[8000] flex flex-col items-end font-sans">

            {/* WIDGET WINDOW */}
            <div className={`
                mb-4 w-[300px] h-[400px] bg-[#0A0A0A] border border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]
                flex flex-col origin-top-right
                ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none absolute'}
            `}>

                {/* Header */}
                <div className="h-10 border-b border-white/10 flex justify-between items-center px-4 bg-white/5 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="font-mono text-[9px] tracking-widest text-[#6C5CE7]">AXOCIA_AI</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                        <X size={14} />
                    </button>
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">
                    {logs.map((log, i) => {
                        const isUser = log.startsWith("User:");
                        const text = log.replace(/^(User:|AI:)/, '').trim();
                        return (
                            <div key={i} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-2.5 text-xs font-jakarta leading-relaxed border ${isUser
                                    ? 'bg-white/10 border-white/20 text-white'
                                    : 'bg-[#6C5CE7]/10 border-[#6C5CE7]/30 text-gray-200'
                                    }`}>
                                    {text}
                                </div>
                            </div>
                        );
                    })}
                    {isLoading && (
                        <div className="flex justify-start">
                            <div className="bg-[#6C5CE7]/10 border border-[#6C5CE7]/30 p-2 text-xs text-gray-400 animate-pulse">
                                ...
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="h-12 bg-[#0A0A0A] border-t border-white/10 flex items-center px-3 gap-2 shrink-0">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu duda..."
                        className="flex-1 bg-transparent border-none text-white font-mono text-xs focus:outline-none placeholder-gray-700"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="p-2 text-[#6C5CE7] hover:text-white transition-colors disabled:opacity-50">
                        <Send size={16} />
                    </button>
                </div>
            </div>

            {/* FLOATING TRIGGER BUTTON (Visible when closed) */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-12 h-12 bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(108,92,231,0.2)]
                    hover:bg-[#6C5CE7] hover:text-white transition-all duration-300
                    ${isOpen ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}
                `}
            >
                <MessageSquare size={20} />
            </button>
        </div>
    );
}
