import React, { useEffect } from 'react';
import Home from './pages/Home';
import QueHacemos from './pages/QueHacemos';
import ComoTrabajamos from './pages/ComoTrabajamos';
import Diagnostico from './pages/Diagnostico';
import Recursos from './pages/Recursos';
import RecursoDetalle from './pages/RecursoDetalle';
import { AIWidget } from './components/AIWidget';
import { Router, useLocation } from './src/lib/router';
import { NavigationMenu } from './components/NavigationMenu';

// Routes Logic
function Routes({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const routes = React.Children.toArray(children);

  // 1. Exact Match
  let match = routes.find((child) => React.isValidElement(child) && child.props.path === pathname) as React.ReactElement | undefined;

  // 2. Dynamic Match (Simple /recursos/:slug)
  if (!match) {
    if (pathname.startsWith('/recursos/') && pathname.split('/').length > 2) {
      match = routes.find((child) => React.isValidElement(child) && child.props.path === '/recursos/:slug') as React.ReactElement | undefined;
    }
  }

  return match ? <>{match.props.element}</> : null;
}

function Route({ path, element }: { path: string; element: React.ReactNode }) {
  return null;
}

// Scroll to top
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

  return (
    <>
      {/* NEW ISOLATED NAVIGATION COMPONENT */}
      <NavigationMenu />

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