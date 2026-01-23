import React, { useState, useEffect, useContext, createContext } from 'react';

// Context
const RouterContext = createContext<{ pathname: string; push: (path: string) => void } | null>(null);

// Router Provider
export function Router({ children }: { children: React.ReactNode }) {
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

// Hooks
export function useLocation() {
    const ctx = useContext(RouterContext);
    return { pathname: ctx ? ctx.pathname : window.location.pathname };
}

// Link Component
export function Link({ to, children, className, ...props }: any) {
    const ctx = useContext(RouterContext);
    const handleClick = (e: React.MouseEvent) => {
        if (ctx) {
            e.preventDefault();
            ctx.push(to);
        }
    };
    return <a href={to} onClick={handleClick} className={className} {...props}>{children}</a>;
}
