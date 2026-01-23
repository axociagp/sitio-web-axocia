import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import QueHacemos from './pages/QueHacemos';
import ComoTrabajamos from './pages/ComoTrabajamos';
import Diagnostico from './pages/Diagnostico';
import Recursos from './pages/Recursos';
import { Menu, X, ArrowUpRight, ArrowRight } from 'lucide-react';
import { AIWidget } from './components/AIWidget';

// --- Custom Router Implementation to replace missing react-router-dom ---
const RouterContext = React.createContext<{ pathname: string; push: (path: string) => void } | null>(null);

function Router({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const push = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPathname(newPath);
    window.scrollTo(0, 0);
  };

  return <RouterContext.Provider value={{ pathname, push }}>{children}</RouterContext.Provider>;
}

function useLocation() {
  const ctx = React.useContext(RouterContext);
  return { pathname: ctx ? ctx.pathname : window.location.pathname };
}

export function Link({ to, children, className, ...props }: any) {
  const ctx = React.useContext(RouterContext);
  const handleClick = (e: React.MouseEvent) => {
    if (ctx) {
      e.preventDefault();
      ctx.push(to);
    }
  };
  return <a href={to} onClick={handleClick} className={className} {...props}>{children}</a>;
}

import RecursoDetalle from './pages/RecursoDetalle';

function Routes({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const routes = React.Children.toArray(children);

  // 1. Exact Match
  let match = routes.find((child) => React.isValidElement(child) && child.props.path === pathname) as React.ReactElement | undefined;

  // 2. Dynamic Match (Simple /recursos/:slug)
  if (!match) {
    if (pathname.startsWith('/recursos/') && pathname.split('/').length > 2) {
      // Find the route that handles /recursos/:slug
      match = routes.find((child) => React.isValidElement(child) && child.props.path === '/recursos/:slug') as React.ReactElement | undefined;
    }
  }

  return match ? <>{match.props.element}</> : null;
}

function Route({ path, element }: { path: string; element: React.ReactNode }) {
  return null;
}
// -------------------------------------------------------------------

// Scroll to top component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // LENIS SMOOTH SCROLL INIT
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js";
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        const lenis = new window.Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          smoothTouch: false,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      };
      document.body.appendChild(script);
      return () => {
        if (document.body.contains(script)) document.body.removeChild(script);
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const menuItems = [
    { label: "Inicio", path: "/" },
    { label: "Qué hacemos", path: "/que-hacemos" },
    { label: "Cómo trabajamos", path: "/como-trabajamos" },
    { label: "Diagnóstico", path: "/diagnostico" },
    { label: "Recursos", path: "/recursos" },
  ];

  return (
    <>
      {/* GLOBAL NAVIGATION BUTTON - Dynamic Contrast Fix */}
      <div className="fixed top-8 right-8 md:top-12 md:right-12 z-[9999] mix-blend-difference">
        <button
          onClick={() => {
            console.log("Menu clicked");
            setIsMenuOpen(true);
          }}
          className={`group flex items-center gap-3 focus:outline-none transition-all duration-300 ${isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
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

      {/* DRAWER MENU */}
      <div
        className={`fixed inset-0 z-[10000] bg-black/20 backdrop-blur-[2px] transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-[10001] h-full w-full md:w-[480px] bg-white shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex-none flex justify-between items-center px-8 py-8 md:px-12 md:py-10 border-b border-gray-100">
          <span className="font-jakarta text-[9px] tracking-[0.2em] uppercase text-gray-400">
            Navegación
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
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

      {/* PAGE CONTENT */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/que-hacemos" element={<QueHacemos />} />
          <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/recursos/:slug" element={<RecursoDetalle />} />
        </Routes>
      </main>

      {/* AI ASSISTANT */}
      <AIWidget />
    </>
  );
}