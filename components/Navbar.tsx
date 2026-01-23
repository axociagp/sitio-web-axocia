import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// Asegúrate de que la ruta a Router sea correcta. Si el archivo está en la misma carpeta es './Router'
import { Link, useLocation } from './Router';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Esto asegura que el código solo se ejecute en el navegador
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {/* Header con mezcla de color automática */}
            <header className="fixed top-0 left-0 w-full z-[9999] p-6 mix-blend-difference">
                <nav className="flex justify-between items-center max-w-7xl mx-auto text-white">
                    <Link to="/" onClick={() => setIsOpen(false)} className="font-bold text-2xl tracking-tighter">
                        AXOCIA
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-[10000] focus:outline-none hover:opacity-70 transition-opacity"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </nav>
            </header>

            {/* Menú Overlay */}
            <div className={`fixed inset-0 bg-black z-[9998] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <nav className="text-white text-center space-y-8">
                    {[
                        { name: 'Inicio', path: '/' },
                        { name: 'Qué hacemos', path: '/que-hacemos' },
                        { name: 'Cómo trabajamos', path: '/como-trabajamos' },
                        { name: 'Diagnóstico', path: '/diagnostico' },
                        { name: 'Recursos', path: '/recursos' }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="text-4xl md:text-6xl font-light hover:italic block tracking-tight"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
