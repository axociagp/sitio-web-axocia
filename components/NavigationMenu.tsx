import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight, CornerDownRight, Terminal } from 'lucide-react';
import { Link, useLocation } from '../src/lib/router';

export function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const menuItems = [
        { label: "Inicio", path: "/", desc: "Infraestructura Digital" },
        { label: "Qué hacemos", path: "/que-hacemos", desc: "El Ecosistema" },
        { label: "Cómo trabajamos", path: "/como-trabajamos", desc: "Metodología e Ingeniería" },
        { label: "Recursos", path: "/recursos", desc: "Knowledge Base" },
    ];

    return (
        <>
            {/* 
                TRIGGER BUTTON 
                Fixed top-right. Mixed blend mode ensures visibility on white/black.
            */}
            <button
                onClick={() => setIsOpen(true)}
                className={`fixed top-8 right-8 z-[9000] mix-blend-difference flex items-center gap-3 group focus:outline-none transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                aria-label="Abrir Menú"
            >
                <div className="flex flex-col items-end">
                    <span className="font-space-grotesk font-bold text-sm text-white leading-none tracking-widest group-hover:tracking-[0.2em] transition-all">MENU</span>
                    <span className="font-mono text-[9px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">OPEN.NAV</span>
                </div>
                <div className="p-3 border border-white/50 bg-white text-black transition-all duration-300 group-hover:bg-[#6C5CE7] group-hover:border-[#6C5CE7] group-hover:text-white rounded-none shadow-[4px_4px_0px_white]">
                    <Menu size={20} strokeWidth={1.5} />
                </div>
            </button>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 z-[9001] bg-black/40 backdrop-blur-[4px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* DRAWER PANEL */}
            <div
                className={`fixed top-0 right-0 z-[9002] h-[100dvh] w-full md:w-[600px] bg-white text-black shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

                {/* Header */}
                <div className="flex-none flex justify-between items-start px-8 py-8 md:px-12 md:py-10 border-b border-black/5 relative z-10">
                    <div className="flex flex-col gap-1">
                        <span className="font-space-grotesk font-bold text-2xl tracking-tight">AXOCIA</span>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#6C5CE7] rounded-full animate-pulse"></div>
                            <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">System Online</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="group flex flex-col items-center gap-2"
                        aria-label="Cerrar Menú"
                    >
                        <div className="p-2 border border-black/10 transition-colors group-hover:border-[#6C5CE7] group-hover:text-[#6C5CE7]">
                            <X size={24} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-gray-400 group-hover:text-[#6C5CE7] transition-colors">Close</span>
                    </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 px-8 md:px-12 py-12 overflow-y-auto relative z-10">
                    <ul className="flex flex-col gap-2">
                        {menuItems.map((item, index) => (
                            <li key={index} className="group border-b border-black/5 last:border-none">
                                <Link
                                    to={item.path}
                                    className="flex items-center justify-between py-6 w-full text-left"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="font-mono text-xs text-gray-300 font-medium w-6 group-hover:text-[#6C5CE7] transition-colors">
                                            0{index + 1}
                                        </span>
                                        <div className="flex flex-col group-hover:translate-x-2 transition-transform duration-300">
                                            <span className="font-space-grotesk font-bold text-3xl md:text-5xl text-black group-hover:text-transparent group-hover:stroke-black group-hover:text-stroke transition-all duration-300" style={{ WebkitTextStroke: '1px black' }}>
                                                {item.label}
                                            </span>
                                            <span className="font-jakarta text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto uppercase tracking-widest mt-1">
                                                {item.desc}
                                            </span>
                                        </div>
                                    </div>

                                    <CornerDownRight
                                        size={24}
                                        strokeWidth={1}
                                        className="text-[#6C5CE7] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Footer / CTA */}
                <div className="flex-none bg-[#F5F5F7] border-t border-black/5 p-8 md:p-12 relative z-10 group overflow-hidden">
                    <Link to="/diagnostico" className="block relative w-full h-full">
                        <div className="flex justify-between items-end relative z-10">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <Terminal size={14} className="text-[#6C5CE7]" />
                                    <span className="font-mono text-[9px] uppercase tracking-widest text-gray-500">Paso Siguiente</span>
                                </div>
                                <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl text-black mb-1">
                                    Solicitar Diagnóstico
                                </h3>
                                <p className="font-jakarta text-sm text-gray-500">Iniciar evaluación de infraestructura.</p>
                            </div>
                            <div className="w-12 h-12 border border-black/10 rounded-full flex items-center justify-center bg-white group-hover:bg-[#6C5CE7] group-hover:border-[#6C5CE7] transition-colors duration-300">
                                <ArrowRight size={20} className="text-black group-hover:text-white transition-colors" />
                            </div>
                        </div>

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none"></div>
                    </Link>
                </div>
            </div>
        </>
    );
}
