'use client'; // ESTA LÍNEA ES LA QUE ACTIVA EL CLIC EN VERCEL

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link, useLocation } from './Router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const { pathname } = useLocation();

    // Fix para asegurar que el código solo corre en el navegador
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {/* HEADER CON CONTRASTE AUTOMÁTICO */}
            <header className="fixed top-0 left-0 w-full z-[9999] p-6 mix-blend-difference">
                <nav className="flex justify-between items-center max-w-7xl mx-auto">
                    {/* LOGO - Se volverá negro sobre blanco automáticamente */}
                    <Link to="/" onClick={() => setIsOpen(false)} className="text-white font-bold text-2xl tracking-tighter">
                        AXOCIA
                    </Link>

                    {/* BOTÓN HAMBURGUESA - Usamos text-white para que el blend mode funcione */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[10000] text-white focus:outline-none"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </nav>
            </header>

            {/* MENÚ DESPLEGABLE (OVERLAY) */}
            <div className={`fixed inset-0 bg-black z-[9998] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <ul className="text-white text-center space-y-8">
                    {[
                        { name: 'Inicio', path: '/' },
                        { name: 'Qué hacemos', path: '/que-hacemos' },
                        { name: 'Cómo trabajamos', path: '/como-trabajamos' },
                        { name: 'Diagnóstico', path: '/diagnostico' },
                        { name: 'Recursos', path: '/recursos' }
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl md:text-6xl font-light hover:italic transition-all tracking-tight block"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
