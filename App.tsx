import React, { useEffect, Suspense } from 'react';
import { AIWidget } from './components/AIWidget';
import { NavigationMenu } from './components/NavigationMenu'; // Updated Component
import { Router, useLocation } from '@/src/lib/router';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const QueHacemos = React.lazy(() => import('./pages/QueHacemos'));
const ComoTrabajamos = React.lazy(() => import('./pages/ComoTrabajamos'));
const Diagnostico = React.lazy(() => import('./pages/Diagnostico'));
const Recursos = React.lazy(() => import('./pages/Recursos'));
const RecursoDetalle = React.lazy(() => import('./pages/RecursoDetalle'));

// Loading Fallback
const PageLoader = () => (
  <div className="w-full h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#6C5CE7] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Routes Logic
function Routes({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const routes = React.Children.toArray(children);

  let match = routes.find((child) => React.isValidElement(child) && child.props.path === pathname) as React.ReactElement | undefined;

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Layout Wrapper
function Layout() {
  // Lenis Init
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
      <NavigationMenu />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/que-hacemos" element={<QueHacemos />} />
            <Route path="/como-trabajamos" element={<ComoTrabajamos />} />
            <Route path="/diagnostico" element={<Diagnostico />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/recursos/:slug" element={<RecursoDetalle />} />
          </Routes>
        </Suspense>
      </main>
      <AIWidget />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout />
    </Router>
  );
}