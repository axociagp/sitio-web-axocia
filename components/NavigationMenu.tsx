import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
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
        { label: "Inicio", path: "/" },
        { label: "Qué hacemos", path: "/que-hacemos" },
        { label: "Cómo trabajamos", path: "/como-trabajamos" },
        { label: "Diagnóstico", path: "/diagnostico" },
        { label: "Recursos", path: "/recursos" },
    ];

    return (
        <>
            {/* 
          GLOBAL NAVIGATION BUTTON 
          Z-Index: 10000 (Very High)
          Blend Mode: Difference (Inverts colors based on background)
          Structure: Parent fixed container with blend mode -> White elements inside.
          Result: 
            - On White BG: Elements become Black.
            - On Black BG: Elements become White. 
      */}
            <div className="fixed top-8 right-8 md:top-12 md:right-12 z-[10000] mix-blend-difference">
                <button
                    onClick={() => setIsOpen(true)}
                    className={`group flex items-center gap-3 focus:outline-none transition-all duration-300 cursor-pointer ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                    aria-label="Abrir Menú"
                >
                    <span className="hidden md:block font-jakarta text-[10px] tracking-[0.2em] uppercase font-bold text-white group-hover:tracking-[0.3em] transition-all duration-300">
                        Menu
                    </span>
                    <div className="p-2 bg-white text-black transition-transform duration-300 shadow-lg group-hover:scale-105">
                        <Menu size={18} strokeWidth={1.5} />
                    </div>
                </button>
            </div>

            {/* OVERLAY (Background Dim) */}
            <div
                className={`fixed inset-0 z-[10001] bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* DRAWER PANEL */}
            <div
                className={`fixed top-0 right-0 z-[10002] h-full w-full md:w-[480px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex-none flex justify-between items-center px-8 py-8 md:px-12 md:py-10 border-b border-gray-100">
                    <span className="font-jakarta text-[9px] tracking-[0.2em] uppercase text-gray-400">
                        Navegación
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="group flex items-center gap-2 hover:opacity-70 transition-opacity"
                        aria-label="Cerrar Menú"
                    >
                        <span className="font-jakarta text-[9px] tracking-[0.2em] uppercase text-black hidden sm:block">Cerrar</span>
                        <X size={20} strokeWidth={1} className="text-black" />
                    </button>
                </div>

                <nav className="flex-1 flex flex-col justify-center px-8 md:px-12 py-8 overflow-y-auto">
                    <ul className="flex flex-col gap-0">
                        {menuItems.map((item, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-none">
                                <Link
                                    to={item.path}
                                    className="group flex items-center justify-between py-5 md:py-6 w-full text-left"
                                >
                                    <div className="flex items-baseline gap-6">
                                        <span className="font-jakarta text-[10px] text-gray-300 font-medium w-4 group-hover:text-[#6C5CE7] transition-colors">
                                            0{index + 1}
                                        </span>
                                        <span className="font-space-grotesk font-medium text-xl md:text-2xl text-[#1A1A1B] group-hover:translate-x-2 transition-transform duration-300 ease-out">
                                            {item.label}
                                        </span>
                                    </div>
                                    <ArrowUpRight
                                        size={18}
                                        strokeWidth={1}
                                        className="text-gray-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#6C5CE7] transition-all duration-300"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex-none px-8 py-8 md:px-12 md:py-10 bg-[#F8F9FA] border-t border-gray-100">
                    <Link
                        to="/diagnostico"
                        className="group block w-full text-left"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-space-grotesk font-bold text-lg md:text-xl text-black group-hover:text-[#6C5CE7] transition-colors">
                                Solicitar diagnóstico
                            </span>
                            <ArrowRight size={20} strokeWidth={1.5} className="text-black group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="font-jakarta text-[10px] text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition-colors">
                            Iniciar evaluación de infraestructura digital
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
}
