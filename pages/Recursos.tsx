import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Hash, Tag, Clock, Share2, Filter, Grid, List, Search, Command, ChevronRight, CornerRightDown } from 'lucide-react';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';
import { Link } from '../App'; // Hook into custom router

export default function Recursos() {
   const [mounted, setMounted] = useState(false);
   const [activeArticle, setActiveArticle] = useState(0);
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const [scrollY, setScrollY] = useState(0);
   const [articles, setArticles] = useState<any[]>([]);
   const [loading, setLoading] = useState(true);

   // Section Refs
   const heroRef = useRef(null);

   useEffect(() => {
      setMounted(true);

      // Fetch articles from Notion API
      fetch('/api/posts')
         .then(res => res.json())
         .then(data => {
            const formatted = data.map((post: any, idx: number) => ({
               ...post,
               image: post.coverImage,
               readTime: "5 MIN", // Estimate or default
               code: `AX_SYS_${String(idx + 1).padStart(2, '0')}`, // Generate pseudo-code
            }));
            setArticles(formatted);
            setLoading(false);
         })
         .catch(err => {
            console.error(err);
            setLoading(false);
         });

      const handleScroll = () => {
         setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6C5CE7] selection:text-white overflow-x-hidden">
         <SEO
            title="Recursos"
            description="Archivo Central AXOCIA. Artículos sobre infraestructura digital, arquitectura de procesos y criterio técnico. Sin relleno."
         />

         {/* GLOBAL BACKGROUND NOISE */}
         <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none mix-blend-soft-light z-0"></div>

         {/* ==================================================================================== */}
         {/* 1. HERO SECTION: "THE ARCHIVE" (Kinetic & Architectural) */}
         {/* ==================================================================================== */}
         <section ref={heroRef} className="relative w-full min-h-[100dvh] flex flex-col justify-end overflow-hidden border-b border-white/10 z-10 bg-[#050505]">

            {/* Animated Grid Floor */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none perspective-1000">
               <div
                  className="absolute inset-0 bg-[linear-gradient(rgba(108,92,231,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(108,92,231,0.1)_1px,transparent_1px)] bg-[size:100px_100px] transform origin-bottom"
                  style={{ transform: `rotateX(45deg) translateY(${scrollY * 0.2}px)` }}
               ></div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6C5CE7] rounded-full blur-[200px] opacity-[0.08] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center py-32 md:py-0">

               {/* Top Bar: System Status */}
               <div className={`absolute top-28 md:top-40 left-6 md:left-12 flex items-center justify-between w-[calc(100%-3rem)] md:w-[calc(100%-6rem)] border-b border-white/10 pb-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                  <div className="flex items-center gap-4">
                     <div className="flex gap-1">
                        <div className="w-1 h-3 bg-[#6C5CE7]"></div>
                        <div className="w-1 h-3 bg-[#6C5CE7]/50"></div>
                        <div className="w-1 h-3 bg-[#6C5CE7]/20"></div>
                     </div>
                     <span className="font-mono text-xs text-[#6C5CE7] tracking-widest uppercase">/ ARCHIVO_CENTRAL</span>
                  </div>
                  <div className="hidden md:flex items-center gap-8 font-mono text-xs text-gray-500">
                     <span>ESTADO: ONLINE</span>
                     <span>ENCRIPTACIÓN: AES-256</span>
                     <span>ACCESO: PÚBLICO</span>
                  </div>
               </div>

               {/* Main Typographic Composition */}
               <div className="relative mt-20">
                  {/* Background Big Text (Parallax) */}
                  <div
                     className="absolute top-1/2 left-0 -translate-y-1/2 w-full font-space-grotesk font-bold text-[20vw] leading-none text-white/[0.03] whitespace-nowrap pointer-events-none select-none"
                     style={{ transform: `translateY(-50%) translateX(${-scrollY * 0.2}px)` }}
                  >
                     KNOWLEDGE BASE AXOCIA
                  </div>

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                     <div className="lg:col-span-9">
                        <div className="overflow-hidden">
                           <h1 className={`font-space-grotesk font-bold text-[14vw] lg:text-[11rem] leading-[0.85] tracking-tighter text-white transform transition-transform duration-1000 cubic-bezier(0.2, 1, 0.3, 1) ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                              RECURSOS
                           </h1>
                        </div>
                        <div className="overflow-hidden">
                           <div className={`flex items-center gap-6 transform transition-transform duration-1000 delay-100 cubic-bezier(0.2, 1, 0.3, 1) ${mounted ? 'translate-y-0' : 'translate-y-full'}`}>
                              <h1 className="font-space-grotesk font-bold text-[14vw] lg:text-[11rem] leading-[0.85] tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                                 DE SISTEMA
                              </h1>
                              <div className="hidden lg:block w-32 h-32 border border-[#6C5CE7] rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                 <CornerRightDown size={48} className="text-[#6C5CE7]" />
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="lg:col-span-3 pb-4">
                        <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                           <p className="font-space-grotesk text-2xl text-white font-medium mb-6">
                              Sistemas que sostienen negocios.
                           </p>
                           <p className="font-jakarta text-gray-500 text-lg leading-relaxed mb-8 border-l border-[#6C5CE7] pl-4">
                              Artículos sobre infraestructura digital, arquitectura de procesos y criterio técnico. Sin relleno.
                           </p>

                           <div className="flex items-center gap-3 text-xs font-mono text-[#6C5CE7] uppercase tracking-widest animate-pulse">
                              <div className="w-2 h-2 bg-[#6C5CE7] rounded-full"></div>
                              <span>Scroll para explorar</span>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>

               {/* Marquee Ticker at Bottom */}
               <div className="absolute bottom-0 left-0 w-full border-t border-white/10 py-3 overflow-hidden bg-[#0A0A0A]">
                  <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-xs font-mono text-gray-500 uppercase tracking-[0.2em]">
                     <span>// Última actualización: 12:45 PM</span>
                     <span>// Nuevos protocolos disponibles</span>
                     <span>// Ingeniería de Resultados</span>
                     <span>// Arquitectura Digital</span>
                     <span>// Control Operativo</span>
                     <span>// Escalabilidad Sostenible</span>
                     <span>// Última actualización: 12:45 PM</span>
                     <span>// Nuevos protocolos disponibles</span>
                  </div>
               </div>
            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 2. MAIN CONTENT (Split Screen Archive) */}
         {/* ==================================================================================== */}
         <section className="relative w-full z-10 bg-[#050505]">
            <div className="max-w-[1800px] mx-auto">
               <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">

                  {/* LEFT: THE INDEX (Scrollable) */}
                  <div className="lg:col-span-6 lg:border-r border-white/10 bg-[#050505] relative z-20">

                     {/* Filters / Toolbar */}
                     <div className="sticky top-0 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 px-6 md:px-12 py-6 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                           <div className="w-2 h-2 bg-[#6C5CE7]"></div>
                           <span>FILTRAR: TODO</span>
                        </div>
                        <div className="flex items-center gap-6">
                           <span className="text-xs font-mono text-gray-600 uppercase">[ {articles.length} ENTRADAS ]</span>
                        </div>
                     </div>

                     {/* Article List */}
                     <div className="flex flex-col">
                        {loading && <div className="p-12 text-center text-gray-500 font-mono">CARGANDO RECURSOS...</div>}
                        {articles.length === 0 && !loading && <div className="p-12 text-center text-gray-500 font-mono">NO HAY RECURSOS DISPONIBLES</div>}

                        {articles.map((article, index) => (
                           <article
                              key={index}
                              className="group relative border-b border-white/10 p-8 md:p-16 transition-all duration-300 hover:bg-[#0A0A0A] cursor-pointer overflow-hidden"
                              onMouseEnter={() => {
                                 setHoveredIndex(index);
                                 setActiveArticle(index);
                              }}
                              onMouseLeave={() => setHoveredIndex(null)}
                           >
                              {/* Hover Background Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-[#6C5CE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                              {/* Active Indicator Line */}
                              <div className={`absolute left-0 top-0 bottom-0 w-[4px] bg-[#6C5CE7] transform transition-transform duration-300 ${hoveredIndex === index ? 'scale-y-100' : 'scale-y-0 origin-top'}`}></div>

                              <div className="flex flex-col gap-6 relative z-10">

                                 {/* Tech Meta */}
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-500">
                                       <span className="text-[#6C5CE7] font-bold bg-[#6C5CE7]/10 px-2 py-1 rounded-sm">{article.code}</span>
                                       <span className="group-hover:text-white transition-colors">{article.category}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
                                       <Clock size={12} />
                                       <span>{article.readTime}</span>
                                    </div>
                                 </div>

                                 {/* MOBILE IMAGE (Visible only on mobile) */}
                                 <div className="lg:hidden w-full aspect-video overflow-hidden border border-white/10 relative">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
                                 </div>

                                 {/* Title */}
                                 <h3 className="font-space-grotesk font-bold text-3xl md:text-5xl text-white leading-[1.05] group-hover:text-[#6C5CE7] transition-colors duration-300 max-w-xl">
                                    {article.title}
                                 </h3>

                                 {/* Excerpt (Visible on Hover/Active) */}
                                 <div className={`overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'max-h-48 opacity-100 mt-2' : 'max-h-24 opacity-60 md:max-h-0 md:opacity-0'}`}>
                                    <p className="font-jakarta text-lg text-gray-400 leading-relaxed max-w-lg mb-6">
                                       {article.excerpt}
                                    </p>

                                    <div className="inline-flex items-center gap-3 text-white font-mono text-xs uppercase tracking-widest border border-white/20 px-4 py-3 hover:bg-white hover:text-black transition-colors duration-300">
                                       <Link to={`/recursos/${article.slug}`}>Leer Protocolo</Link>
                                       <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                 </div>

                              </div>
                           </article>
                        ))}
                     </div>

                     {/* Footer of List */}
                     <div className="p-12 md:p-16 flex justify-center border-t border-white/10 bg-[#080808]">
                        <button className="px-8 py-4 border border-white/20 hover:border-[#6C5CE7] hover:text-[#6C5CE7] transition-all duration-300 font-mono text-sm uppercase tracking-widest flex items-center gap-3">
                           <div className="w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse"></div>
                           <span>Cargar Archivos Antiguos</span>
                        </button>
                     </div>

                  </div>

                  {/* RIGHT: THE VIEWPORT (Sticky Visual - Desktop Only) */}
                  <div className="hidden lg:block lg:col-span-6 relative h-screen sticky top-0 bg-[#030303] overflow-hidden border-l border-white/5">

                     {/* Visual Container */}
                     <div className="absolute inset-0 flex items-center justify-center p-16">
                        <div className="relative w-full h-full max-h-[800px] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">

                           {/* HUD Overlay */}
                           <div className="absolute inset-0 z-30 pointer-events-none">
                              <div className="absolute top-4 left-4 flex gap-2">
                                 <div className="w-2 h-2 bg-white/20"></div>
                                 <div className="w-2 h-2 bg-white/20"></div>
                              </div>
                              <div className="absolute top-4 right-4 font-mono text-[10px] text-gray-500">
                                 VIEWPORT_CAM_01
                              </div>
                              <div className="absolute bottom-4 left-4 w-32 h-[1px] bg-white/20"></div>
                              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/20"></div>

                              {/* Crosshair */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 rounded-full flex items-center justify-center">
                                 <div className="w-1 h-1 bg-white/50"></div>
                              </div>
                           </div>

                           {/* Images */}
                           {articles.map((article, index) => (
                              <div
                                 key={index}
                                 className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] transform ${activeArticle === index ? 'opacity-100' : 'opacity-0'}`}
                              >
                                 {/* Glitch/Scanline Effect Container */}
                                 <div className="relative w-full h-full">
                                    <img
                                       src={article.image}
                                       alt={article.title}
                                       className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${activeArticle === index ? 'scale-100 grayscale-0' : 'scale-110 grayscale'}`}
                                    />

                                    {/* Scanline */}
                                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-[#6C5CE7]/50 shadow-[0_0_20px_#6C5CE7] animate-[scan_3s_ease-in-out_infinite] ${activeArticle === index ? 'opacity-100' : 'opacity-0'}`}></div>

                                    {/* Purple Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
                                 </div>
                              </div>
                           ))}

                           {/* Floating Metadata (Sticky info inside the image) */}
                           {articles.length > 0 && articles[activeArticle] && (
                              <div className="absolute bottom-12 left-12 z-40">
                                 <div className="overflow-hidden">
                                    <h2 className="font-space-grotesk font-bold text-6xl text-white leading-none tracking-tighter mix-blend-difference">
                                       {articles[activeArticle].category}
                                    </h2>
                                 </div>
                                 <div className="mt-6 flex items-center gap-6 text-xs font-mono text-white/80 uppercase tracking-widest mix-blend-difference">
                                    <div className="flex items-center gap-2">
                                       <Hash size={12} />
                                       <span>ID: {articles[activeArticle].code}</span>
                                    </div>
                                    <div className="w-8 h-[1px] bg-white/50"></div>
                                    <span>ESTADO: VERIFICADO</span>
                                 </div>
                              </div>
                           )}

                        </div>
                     </div>

                  </div>

               </div>
            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 3. NEWSLETTER / CTA (Terminal Style) */}
         {/* ==================================================================================== */}
         <section className="relative w-full bg-[#050505] py-32 px-6 border-t border-white/10 z-10">
            <div className="max-w-4xl mx-auto">

               <div className="bg-[#0A0A0A] border border-white/10 p-8 md:p-12 relative overflow-hidden">
                  {/* Terminal dots */}
                  <div className="flex gap-2 mb-8">
                     <div className="w-3 h-3 rounded-full bg-white/20"></div>
                     <div className="w-3 h-3 rounded-full bg-white/10"></div>
                     <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                     <div>
                        <h2 className="font-space-grotesk font-bold text-3xl md:text-4xl text-white mb-4">
                           Acceso al Sistema.
                        </h2>
                        <p className="font-jakarta text-gray-400 mb-8 leading-relaxed">
                           Recibe criterio técnico, análisis de sistemas y perspectivas quincenales. Sin ruido.
                        </p>

                        <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
                           <span className="flex items-center gap-1"><div className="w-2 h-2 bg-green-500 rounded-full"></div> SEGURO</span>
                           <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> ENCRIPTADO</span>
                        </div>
                     </div>

                     <div>
                        <form className="flex flex-col gap-4">
                           <div className="relative group">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[#6C5CE7] text-sm">root@user:~$</span>
                              <input
                                 type="email"
                                 placeholder="ingresar_correo..."
                                 className="w-full bg-black border border-white/20 text-white pl-32 pr-4 py-4 font-mono text-sm focus:outline-none focus:border-[#6C5CE7] transition-colors placeholder:text-gray-700"
                              />
                           </div>
                           <button className="w-full bg-white text-black py-4 font-space-grotesk font-bold uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                              <span>Ejecutar Suscripción</span>
                              <ChevronRight size={16} />
                           </button>
                        </form>
                     </div>
                  </div>

                  {/* Background grid visual */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
               </div>

            </div>
         </section>

         {/* FOOTER (Simplified) */}
         <footer className="w-full bg-black py-8 border-t border-white/10 flex justify-between px-12 items-center">
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">© 2026 AXOCIA | RECURSOS</p>
            <p className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">V.3.1.0</p>
         </footer>

      </div>
   );
}