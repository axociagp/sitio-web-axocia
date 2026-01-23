import React, { useState, useEffect, useRef } from 'react';
import { Activity, ArrowRight, Network, Database, Users, GitBranch, LayoutGrid, Globe, Bot, BookOpen, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Box, Cpu, TrendingUp, Check, X, Scan, Zap, BarChart } from 'lucide-react';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';

export default function QueHacemos() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, normalizedX: 0 });
  const [scrollVelocity, setScrollVelocity] = useState(0);

  // Refs
  const kineticRef = useRef(null);
  const definitionRef = useRef(null);
  const modelRef = useRef(null);
  const systemsRef = useRef(null);
  const stagesRef = useRef(null);
  const componentsRef = useRef(null);
  const contrastRef = useRef(null);
  const closingRef = useRef(null);

  // Visibility States
  const [definitionVisible, setDefinitionVisible] = useState(false);
  const [modelVisible, setModelVisible] = useState(false);
  const [systemsVisible, setSystemsVisible] = useState(false);
  const [stagesVisible, setStagesVisible] = useState(false);
  const [componentsVisible, setComponentsVisible] = useState(false);
  const [contrastVisible, setContrastVisible] = useState(false);
  const [closingVisible, setClosingVisible] = useState(false);

  // LENIS & MOUSE TRACKING
  useEffect(() => {
    // Only init logic, scroll handled by App.tsx global Lenis mostly, 
    // but we keep velocity tracking for kinetic text
    if (typeof window !== 'undefined' && window.innerWidth > 768) {
       // We rely on the global lenis instance if accessible or just standard scroll for velocity if needed
       // For this component, we'll just track basic scroll for the skew effect to keep it simple and performant
       const handleScroll = () => {
         setScrollVelocity(window.scrollY * 0.05);
       };
       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === definitionRef.current && entry.isIntersecting) setDefinitionVisible(true);
          if (entry.target === modelRef.current && entry.isIntersecting) setModelVisible(true);
          if (entry.target === systemsRef.current && entry.isIntersecting) setSystemsVisible(true);
          if (entry.target === stagesRef.current && entry.isIntersecting) setStagesVisible(true);
          if (entry.target === componentsRef.current && entry.isIntersecting) setComponentsVisible(true);
          if (entry.target === contrastRef.current && entry.isIntersecting) setContrastVisible(true);
          if (entry.target === closingRef.current && entry.isIntersecting) setClosingVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    const refs = [
      definitionRef.current, modelRef.current, systemsRef.current,
      stagesRef.current, componentsRef.current, contrastRef.current, closingRef.current
    ];
    refs.forEach(ref => { if (ref) observer.observe(ref); });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      refs.forEach(ref => { if (ref) observer.unobserve(ref); });
    };
  }, []);

  // DATA
  const systemsData = [
    { 
      title: "Sistema de Orden", 
      tag: "ESTABILIZACIÓN",
      desc: "Cuando el negocio no tiene claridad de lo que está pasando.",
      sub: "Centralizar información. Ver la realidad sin ruido. Eliminar el caos.",
      icon: Scan,
      number: "01",
      color: "from-blue-500/20 to-purple-500/20",
      accent: "text-blue-400"
    },
    { 
      title: "Sistema de Operación", 
      tag: "CONSISTENCIA",
      desc: "Cuando el negocio depende demasiado de personas clave.",
      sub: "Automatizar flujos. Estandarizar la entrega. Reducir fricción humana.",
      icon: Zap,
      number: "02",
      color: "from-[#6C5CE7]/30 to-pink-500/20",
      accent: "text-[#6C5CE7]"
    },
    { 
      title: "Sistema de Crecimiento", 
      tag: "ESCALABILIDAD",
      desc: "Cuando el negocio funciona bien y quiere aumentar volumen.",
      sub: "Escalar sin romper. Aumentar capacidad. Multiplicar resultados.",
      icon: BarChart,
      number: "03",
      color: "from-emerald-500/20 to-cyan-500/20",
      accent: "text-emerald-400"
    }
  ];

  const stagesData = [
    { title: "Atracción.", desc: "Cómo te descubren." },
    { title: "Incorporación.", desc: "Qué ocurre cuando alguien hace contacto." },
    { title: "Entrega.", desc: "Cómo se cumple lo prometido." },
    { title: "Relación.", desc: "Cómo se sostiene el vínculo en el tiempo." },
    { title: "Latencia.", desc: "Qué pasa cuando el cliente se vuelve inactivo." }
  ];

  const componentsData = [
    { cat: "Operativos.", items: "CRM, flujos de seguimiento, sistema de citas.", icon: Cpu },
    { cat: "Estructurales.", items: "Integraciones, seguridad, control de accesos.", icon: LayoutGrid },
    { cat: "Captación.", items: "Sitio web, landing pages, campañas.", icon: Globe },
    { cat: "Inteligencia.", items: "Dashboards y métricas clave.", icon: Activity },
    { cat: "Comunicación.", items: "WhatsApp integrado, respuestas automáticas, IA conversacional.", icon: Bot },
    { cat: "Conocimiento.", items: "Procesos, documentación y capacitación.", icon: BookOpen }
  ];

  // Helper for Bento Grid Glow
  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="relative w-full bg-white font-sans selection:bg-[#6C5CE7] selection:text-white text-black overflow-x-hidden">
      <SEO 
        title="Qué Hacemos" 
        description="Infraestructura Digital ≠ Herramientas. Conoce nuestros 3 sistemas de intervención: Orden, Operación y Crecimiento. Arquitectura de procesos para negocios."
      />

      {/* ==================================================================================== */}
      {/* 1. HERO: KINETIC TYPOGRAPHY */}
      {/* ==================================================================================== */}
      <section ref={kineticRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-white text-black border-b border-black/10">
        <div className="absolute inset-0 flex flex-col justify-between py-12 opacity-[0.03] pointer-events-none select-none overflow-hidden z-0">
          <div className="transition-transform duration-100 ease-linear h-full flex flex-col justify-between" style={{ transform: `skewX(${scrollVelocity * 0.5}deg)` }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} className="whitespace-nowrap font-space-grotesk font-bold text-[18vh] leading-none uppercase transition-transform duration-300 ease-out will-change-transform" style={{ transform: `translateX(${i % 2 === 0 ? (mousePosition.normalizedX * -20) : (mousePosition.normalizedX * 20)}px)` }}>
                INFRAESTRUCTURA DIGITAL ORDEN CONTROL SISTEMA INFRAESTRUCTURA DIGITAL ORDEN CONTROL SISTEMA 
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 px-6 md:px-16 w-full max-w-[1800px] mx-auto h-full flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8 md:mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="font-space-grotesk text-[#6C5CE7] font-bold">01.</span>
            <div className="h-[1px] w-12 bg-black/20"></div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7] font-semibold">MARCO DE INTERVENCIÓN</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7 relative perspective-1000 z-30 pr-12 lg:pr-16 overflow-visible">
              <TextReveal visible={mounted} className="mb-[-1vw] lg:mb-[-2vw] relative z-20 overflow-visible">
                <h1 className="font-space-grotesk font-bold text-[16vw] lg:text-[10.5rem] leading-[0.8] tracking-tighter uppercase text-black transform transition-transform duration-500 hover:scale-[1.01] origin-left whitespace-nowrap"> Qué </h1>
              </TextReveal>
              <div className="relative z-10 overflow-visible">
                <h1 className="absolute top-0 left-1 font-space-grotesk font-bold text-[16vw] lg:text-[10.5rem] leading-[0.8] tracking-tighter uppercase text-[#6C5CE7]/10 blur-sm select-none pointer-events-none transform translate-y-2 whitespace-nowrap"> Hacemos. </h1>
                <TextReveal visible={mounted} delay="150ms" className="overflow-visible">
                  <h1 className="font-space-grotesk font-bold text-[16vw] lg:text-[10.5rem] leading-[0.8] tracking-tighter uppercase text-[#6C5CE7] pb-2 whitespace-nowrap"> Hacemos. </h1>
                </TextReveal>
              </div>
            </div>
            <div className="lg:col-span-5 pb-4 lg:pb-8 relative z-20">
              <TextReveal visible={mounted} delay="400ms">
                <h2 className="font-space-grotesk text-2xl md:text-3xl font-medium leading-[1.1] mb-8 text-black max-w-md"> Diseñamos la infraestructura que permite que la operación del negocio funcione con orden y continuidad. </h2>
              </TextReveal>
              <div className="overflow-hidden mb-8">
                <div className={`h-[2px] w-full bg-black transform origin-left transition-transform duration-1000 ease-out ${mounted ? 'scale-x-100' : 'scale-x-0'}`} style={{ transitionDelay: '500ms' }}></div>
              </div>
              <TextReveal visible={mounted} delay="550ms">
                <p className="font-jakarta text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-md"> No trabajamos sobre acciones ni servicios aislados. </p>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================================================== */}
      {/* 2. DEFINICIÓN OPERATIVA */}
      {/* ==================================================================================== */}
      <section ref={definitionRef} className="relative w-full bg-[#F5F5F7] py-32 px-6 border-t border-black/10 overflow-hidden">
        {/* Abstract Background Shapes for Depth */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-b from-gray-200 to-transparent rounded-full blur-[100px] opacity-40 pointer-events-none animate-float"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
             <div className={`transition-all duration-1000 ${definitionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                 <div className="flex items-center gap-4 mb-8">
                   <span className="font-space-grotesk text-[#6C5CE7] font-bold">02.</span>
                   <div className="h-[1px] w-12 bg-black/20"></div>
                   <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">DEFINICIÓN</span>
                 </div>
                 <TextReveal visible={definitionVisible}>
                   <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[1.0] mb-12">Infraestructura <br/><span className="text-[#6C5CE7]">≠</span> Herramientas.</h2>
                 </TextReveal>
                 <div className="border-l border-black pl-8 py-2">
                   <p className="font-jakarta text-xl text-gray-600 leading-relaxed max-w-lg">Para nosotros, la infraestructura digital no son herramientas ni software suelto.</p>
                 </div>
             </div>
          </div>
          
          <div className="lg:col-span-7 relative min-h-[600px] bg-white border border-black p-8 md:p-16 flex items-center justify-center shadow-2xl overflow-hidden group">
             {/* Blueprint Grid inside card */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             
             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-black/10 transition-transform duration-[1.5s] ease-in-out ${definitionVisible ? 'scale-x-100' : 'scale-x-0 origin-left'}`}></div>
                <div className={`absolute left-1/2 top-0 h-full w-[1px] bg-black/10 transition-transform duration-[1.5s] ease-in-out ${definitionVisible ? 'scale-y-100' : 'scale-y-0 origin-top'}`}></div>
             </div>

             <div className="grid grid-cols-2 gap-16 md:gap-24 relative z-10">
                {[{i:Users, t:"Personas"}, {i:GitBranch, t:"Procesos"}, {i:Database, t:"Información"}, {i:Activity, t:"Decisiones"}].map((item, idx) => (
                  <div key={idx} className={`flex flex-col items-center gap-6 transition-all duration-700 ${definitionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${500 + (idx*100)}ms` }}>
                     <div className="w-20 h-20 bg-gray-50 border border-black/10 flex items-center justify-center rounded-sm text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white transition-colors duration-500 shadow-sm">
                        <item.i size={32} strokeWidth={1.5} />
                     </div>
                     <span className="font-space-grotesk font-bold text-sm uppercase tracking-widest">{item.t}</span>
                  </div>
                ))}
                
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#6C5CE7] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(108,92,231,0.4)] transition-all duration-1000 delay-1000 z-20 ${definitionVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                    <Network className="text-white animate-pulse-slow" size={48} strokeWidth={1.5} />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ==================================================================================== */}
      {/* 3. MODELO DE INTERVENCIÓN (Blueprint Style) */}
      {/* ==================================================================================== */}
      <section ref={modelRef} className="relative w-full bg-white text-black py-32 border-b border-black/10">
          <div className="max-w-[1600px] mx-auto px-6">
             <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 transition-all duration-1000 ${modelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div>
                   <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl mb-6 leading-[1.0] tracking-tight">El modelo de intervención.</h2>
                   <p className="font-jakarta text-xl text-gray-600 leading-relaxed max-w-xl mt-8">
                      Nuestro trabajo se basa en una estructura clara y repetible. No intervenimos por herramientas ni por pedidos aislados.
                   </p>
                </div>
                <div className="flex flex-col justify-end">
                   <p className="font-space-grotesk text-2xl font-medium border-l-[3px] border-[#6C5CE7] pl-8 py-2 text-gray-800">
                     "Todo lo que hacemos se organiza en tres niveles."
                   </p>
                </div>
             </div>

             <div className="grid grid-cols-1 gap-0 border-t border-black">
                {[{num:"I", t:"Sistema", d:"Define el nivel de madurez del negocio y el tipo de intervención que necesita."}, {num:"II", t:"Etapas", d:"Identifican en qué momentos del recorrido del cliente existe fricción operativa."}, {num:"III", t:"Componentes", d:"Son las piezas concretas que se construyen para resolver ese punto específico."}].map((level, idx) => (
                  <div key={idx} className={`group relative border-b border-black py-16 transition-all duration-1000 ${modelVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 + (idx * 150)}ms` }}>
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10 px-4 md:px-8">
                        <div className="flex items-baseline gap-12">
                           <span className="font-space-grotesk font-bold text-7xl text-gray-200 group-hover:text-[#6C5CE7] transition-colors duration-500 w-24">{level.num}</span>
                           <h3 className="font-space-grotesk font-bold text-4xl md:text-6xl">{level.t}</h3>
                        </div>
                        <div className="flex items-center gap-6">
                           <p className="font-jakarta text-gray-500 text-lg max-w-lg md:text-right group-hover:text-black transition-colors">
                              {level.d}
                           </p>
                           <ArrowRight className="hidden md:block opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-[#6C5CE7]" />
                        </div>
                     </div>
                     <div className="absolute inset-0 bg-gray-50 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] -z-0"></div>
                  </div>
                ))}
             </div>

             <div className={`mt-24 flex flex-col md:flex-row justify-between items-start md:items-center border-l border-gray-200 pl-8 transition-all duration-1000 delay-500 ${modelVisible ? 'opacity-100' : 'opacity-0'}`}>
                <p className="font-jakarta text-gray-600 max-w-3xl text-lg leading-relaxed">
                   Esta estructura nos permite intervenir con criterio, sin improvisar ni saturar la operación.
                   <br/><strong className="text-black font-semibold">Nada se implementa sin contexto. Nada se construye sin una razón clara.</strong>
                </p>
             </div>
          </div>
      </section>

      {/* ==================================================================================== */}
      {/* 4. LOS SISTEMAS DE INTERVENCIÓN (Improved Holographic Cards) */}
      {/* ==================================================================================== */}
      <section ref={systemsRef} className="relative w-full bg-[#030303] text-white py-32 px-6 overflow-hidden">
        {/* Ambient background noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
        
        <div className="max-w-[1400px] mx-auto mb-24 md:mb-32 relative z-10">
            <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${systemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="font-space-grotesk text-[#6C5CE7] font-bold">03.</span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">EL MÉTODO</span>
            </div>

            <div className="max-w-6xl">
              <TextReveal visible={systemsVisible} delay="200ms">
                <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tighter">
                  Los sistemas de
                </h2>
              </TextReveal>
              <TextReveal visible={systemsVisible} delay="300ms">
                <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-8xl text-[#6C5CE7] leading-[1.0] tracking-tighter">
                  intervención.
                </h2>
              </TextReveal>
               <div className={`mt-12 max-w-2xl font-jakarta text-xl text-gray-400 leading-relaxed transition-all duration-1000 delay-500 ${systemsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <p>Todo negocio necesita un tipo de sistema distinto según su momento operativo. No se puede intervenir todo al mismo tiempo ni mezclar niveles.</p>
               </div>
            </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-0 pb-32 relative z-10">
             {systemsData.map((sys, idx) => (
                <div 
                   key={idx} 
                   className={`sticky top-24 md:top-32 w-full border border-white/10 rounded-xl p-8 md:p-16 overflow-hidden group transition-all duration-700 hover:border-white/20`}
                   style={{ 
                      backgroundColor: '#080808',
                      top: `${120 + (idx * 20)}px`,
                      zIndex: idx,
                      boxShadow: '0 0 50px -10px rgba(0,0,0,0.8)'
                   }}
                >
                   {/* Dynamic Gradient Background on Hover */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${sys.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`}></div>
                   
                   {/* Grid Pattern Overlay */}
                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none"></div>

                   {/* Scanning Line Animation */}
                   <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-[1.5s] ease-in-out delay-100 pointer-events-none z-20"></div>

                   {/* Giant Background Number */}
                   <div className="absolute -right-4 -bottom-16 text-[12rem] md:text-[16rem] font-space-grotesk font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 select-none leading-none pointer-events-none">
                      {sys.number}
                   </div>
                   
                   <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 relative z-10">
                      
                      {/* Icon Container */}
                      <div className="relative">
                         <div className={`w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-black/50 group-hover:backdrop-blur-md group-hover:border-white/20 group-hover:scale-110 transition-all duration-500 shadow-2xl`}>
                            <sys.icon size={36} className={`${sys.accent} transition-colors duration-300`} />
                         </div>
                         {/* Decoration dots */}
                         <div className="absolute -top-1 -right-1 w-2 h-2 bg-white/20 rounded-full"></div>
                         <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/20 rounded-full"></div>
                      </div>

                      <div className="flex-1 pt-2">
                         <div className="flex items-center gap-4 mb-4">
                            <span className={`font-jakarta text-[10px] tracking-[0.3em] font-bold uppercase py-1 px-3 rounded-full border border-white/10 bg-white/5 ${sys.accent}`}>
                               {sys.tag}
                            </span>
                         </div>
                         <h3 className="font-space-grotesk font-bold text-3xl md:text-5xl text-white mb-6 group-hover:text-white transition-colors drop-shadow-lg">
                           {sys.title}
                         </h3>
                         <div className="h-[1px] w-12 bg-white/20 mb-6 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-white/40 group-hover:to-transparent transition-all duration-700"></div>
                         
                         <p className="font-jakarta text-xl text-gray-200 font-medium mb-4">{sys.desc}</p>
                         <p className="font-jakarta text-gray-400 leading-relaxed max-w-lg text-lg group-hover:text-gray-300 transition-colors">
                           {sys.sub}
                         </p>

                         {/* Action Arrow appearing on hover */}
                         <div className="mt-8 flex items-center gap-2 text-white/40 group-hover:text-white transition-colors duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <span className="font-space-grotesk text-sm uppercase tracking-widest">Explorar fase</span>
                            <ArrowRight size={16} />
                         </div>
                      </div>
                   </div>
                </div>
             ))}

             <div className="mt-32 text-center">
               <p className="font-space-grotesk text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
                  "Un negocio solo puede estar en un sistema a la vez.<br/>
                  <span className="text-[#6C5CE7] drop-shadow-[0_0_15px_rgba(108,92,231,0.5)]">Ese sistema define qué se construye y qué no.</span>"
               </p>
            </div>
        </div>
      </section>

      {/* ==================================================================================== */}
      {/* 5. ETAPAS DEL CLIENTE (SVG Draw Scroll) */}
      {/* ==================================================================================== */}
      <section ref={stagesRef} className="relative w-full bg-white text-black py-32 border-b border-black/10">
         <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
               <div className={`sticky top-32 transition-all duration-1000 ${stagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">04.</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">RECORRIDO</span>
                  </div>
                  <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl leading-[1.05] mb-8">
                     Etapas del cliente.
                  </h2>
                  <div className="space-y-6 font-jakarta text-lg text-gray-600 leading-relaxed mb-12">
                     <p>Dentro de cada sistema, intervenimos momentos concretos del recorrido del cliente.</p>
                     <p>No son un funnel de marketing ni un proceso rígido; son etapas reales de la operación.</p>
                  </div>
                  <div className="p-8 bg-[#F8F9FA] border-l-[3px] border-[#6C5CE7]">
                     <p className="font-jakarta text-xs text-gray-400 font-bold uppercase tracking-widest mb-3">Nota Importante</p>
                     <p className="font-space-grotesk text-xl font-medium leading-relaxed">
                        No todas las etapas están rotas.<br/>
                        <span className="text-[#6C5CE7]">Solo intervenimos las que lo necesitan.</span>
                     </p>
                  </div>
               </div>
            </div>

            <div className="lg:col-span-7 relative">
               {/* SVG Connecting Line */}
               <svg className="absolute left-[27px] top-0 bottom-0 w-[2px] h-full overflow-visible hidden md:block" preserveAspectRatio="none">
                  <line 
                    x1="1" y1="0" x2="1" y2="100%" 
                    stroke="#E5E7EB" strokeWidth="2" 
                  />
                  <line 
                    x1="1" y1="0" x2="1" y2="100%" 
                    stroke="#6C5CE7" strokeWidth="2" 
                    className={`transition-all duration-[2000ms] ease-out origin-top ${stagesVisible ? 'scale-y-100' : 'scale-y-0'}`} 
                  />
               </svg>
               
               <div className="flex flex-col gap-16 md:gap-24 py-8">
                  {stagesData.map((stage, idx) => (
                     <div 
                        key={idx} 
                        className={`relative pl-0 md:pl-20 transition-all duration-1000 ${stagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                        style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                     >
                        {/* Interactive Dot */}
                        <div className="hidden md:flex absolute left-0 top-1 w-14 h-14 bg-white border border-gray-200 rounded-full items-center justify-center z-10 shadow-sm group hover:border-[#6C5CE7] hover:scale-110 transition-all duration-300">
                           <span className="font-space-grotesk font-bold text-sm text-[#6C5CE7]">0{idx + 1}</span>
                        </div>
                        
                        <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl mb-3">{stage.title}</h3>
                        <p className="font-jakarta text-xl text-gray-500 font-light">{stage.desc}</p>
                     </div>
                  ))}
               </div>
            </div>

         </div>
      </section>

      {/* ==================================================================================== */}
      {/* 6. COMPONENTES (Bento Grid with Glow) */}
      {/* ==================================================================================== */}
      <section ref={componentsRef} className="relative w-full bg-[#050505] text-white py-32 px-6 overflow-hidden">
         {/* Background Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

         <div className="max-w-[1600px] mx-auto relative z-10">
            <div className={`mb-24 text-center max-w-4xl mx-auto transition-all duration-1000 ${componentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
               <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl mb-6 leading-tight">Componentes de infraestructura.</h2>
               <p className="font-jakarta text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                  Para resolver esas fricciones, construimos componentes de infraestructura, seleccionados según el sistema y la etapa.
               </p>
            </div>

            <div 
               className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${componentsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
                {componentsData.map((cat, index) => (
                    <div 
                        key={index} 
                        className={`relative bg-[#0A0A0A] border border-white/10 p-10 rounded-sm overflow-hidden group ${index === 0 || index === 1 ? 'lg:col-span-2' : ''}`}
                        onMouseMove={handleMouseMoveCard}
                    >
                        {/* Mouse Glow Effect */}
                        <div 
                          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                          style={{
                            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(108, 92, 231, 0.15), transparent 40%)`
                          }}
                        />
                        <div 
                           className="absolute inset-0 border border-[#6C5CE7] opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10 pointer-events-none"
                        ></div>

                        <div className="relative z-20">
                           <div className="flex items-start justify-between mb-8">
                              <cat.icon size={32} className="text-gray-600 group-hover:text-[#6C5CE7] transition-colors duration-500" />
                              <div className="h-[1px] flex-1 bg-white/10 mx-6 mt-4"></div>
                           </div>
                           <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-white group-hover:text-[#6C5CE7] transition-colors">{cat.cat}</h3>
                           <p className="font-jakarta text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">
                              {cat.items}
                           </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`mt-24 text-center transition-all duration-1000 delay-500 ${componentsVisible ? 'opacity-100' : 'opacity-0'}`}>
               <div className="inline-block border border-white/10 px-8 py-6 bg-white/5 backdrop-blur-sm rounded-sm">
                  <p className="font-space-grotesk text-lg text-gray-500 uppercase tracking-widest mb-2">
                     Integridad del sistema
                  </p>
                  <p className="text-white text-xl md:text-2xl font-bold leading-tight">
                     Los componentes no se venden por separado.<br/>
                     <span className="text-[#6C5CE7]">Son los ladrillos que construyen el sistema correcto.</span>
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* ==================================================================================== */}
      {/* 7. CONTRAST SECTION: Qué hacemos vs Qué no hacemos */}
      {/* ==================================================================================== */}
      <section ref={contrastRef} className="relative w-full bg-white text-black py-32 md:py-48 px-6 border-b border-black/10 overflow-hidden">
        <div className="max-w-[1600px] mx-auto relative z-10">
           
           <div className={`mb-24 transition-all duration-1000 ${contrastVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center gap-4 mb-8">
                 <span className="font-space-grotesk text-[#6C5CE7] font-bold">05.</span>
                 <div className="h-[1px] w-12 bg-black/20"></div>
                 <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">CLARIDAD</span>
              </div>
              <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-none">Qué hacemos y qué no hacemos.</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
              {/* Divider for Desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/10"></div>

              {/* Qué hacemos */}
              <div className={`transition-all duration-1000 delay-200 ${contrastVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                 <h3 className="font-space-grotesk font-bold text-3xl mb-12 flex items-center gap-4 text-[#6C5CE7]">
                    <span className="w-8 h-8 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7]"><Check size={18} strokeWidth={3} /></span>
                    Qué hacemos
                 </h3>
                 <div className="space-y-12">
                    <div className="group">
                       <h4 className="font-space-grotesk font-bold text-2xl mb-3 group-hover:text-[#6C5CE7] transition-colors">Infraestructura completa.</h4>
                       <p className="font-jakarta text-xl text-gray-600 leading-relaxed">Diseñamos e implementamos infraestructura digital de negocio. Intervenimos la operación para que funcione con orden, consistencia y continuidad.</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100"></div>
                    <div className="group">
                       <h4 className="font-space-grotesk font-bold text-2xl mb-3 group-hover:text-[#6C5CE7] transition-colors">Diagnóstico y contexto.</h4>
                       <p className="font-jakarta text-xl text-gray-600 leading-relaxed">Trabajamos a partir de diagnóstico. Construimos sistemas coherentes con el momento real del negocio y los acompañamos en el tiempo.</p>
                    </div>
                 </div>
              </div>

              {/* Qué no hacemos */}
              <div className={`transition-all duration-1000 delay-400 ${contrastVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                 <h3 className="font-space-grotesk font-bold text-3xl mb-12 flex items-center gap-4 text-gray-400">
                    <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400"><X size={18} strokeWidth={3} /></span>
                    Qué no hacemos
                 </h3>
                 <div className="space-y-12">
                    <div className="group">
                       <h4 className="font-space-grotesk font-bold text-2xl mb-3 text-gray-400 group-hover:text-black transition-colors">Piezas sueltas.</h4>
                       <p className="font-jakarta text-xl text-gray-500 leading-relaxed font-light">No vendemos servicios sueltos ni herramientas por separado. No operamos desde la urgencia ni la improvisación.</p>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100"></div>
                    <div className="group">
                       <h4 className="font-space-grotesk font-bold text-2xl mb-3 text-gray-400 group-hover:text-black transition-colors">Promesas vacías.</h4>
                       <p className="font-jakarta text-xl text-gray-500 leading-relaxed font-light">No prometemos resultados comerciales mágicos ni forzamos implementaciones que rompan el sistema actual.</p>
                    </div>
                 </div>
              </div>
           </div>

           {/* BIG TAGLINE */}
           <div className="mt-32 md:mt-48 text-center">
              <div className={`transition-all duration-1000 delay-500 ${contrastVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                 <h2 className="font-space-grotesk font-bold text-5xl md:text-8xl leading-[0.9] tracking-tighter">
                    Nuestro trabajo no es acelerar.<br/>
                    <span className="text-[#6C5CE7]">Es sostener.</span>
                 </h2>
              </div>
           </div>
        </div>
      </section>

      {/* ==================================================================================== */}
      {/* 8. CLOSING SECTION (Cierre) */}
      {/* ==================================================================================== */}
      <section ref={closingRef} className="relative w-full bg-[#FAFAFA] text-black py-32 px-6 flex flex-col items-center justify-center">
         <div className="max-w-4xl mx-auto text-center">
            
            <div className={`transition-all duration-1000 ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
               <p className="font-space-grotesk text-2xl md:text-4xl font-medium leading-tight mb-12 text-gray-800">
                  "Cuando la operación está bien estructurada, el negocio deja de depender de la urgencia diaria. Las decisiones se toman con claridad y el sistema puede sostenerse en el tiempo."
               </p>
               
               <p className="font-jakarta text-lg text-gray-500 mb-16">
                  Si este enfoque tiene sentido para tu empresa, el siguiente paso es entender cómo lo llevamos a la práctica.
               </p>

               <a 
                  href="#" 
                  className="group relative inline-flex items-center gap-4 bg-black text-white px-10 py-6 overflow-hidden transition-all duration-300 hover:px-14 shadow-xl hover:shadow-2xl"
               >
                  <span className="relative z-10 font-space-grotesk font-bold text-xl uppercase tracking-widest group-hover:text-[#6C5CE7] transition-colors">Solicitar Diagnóstico</span>
                  <div className="relative z-10 p-1 bg-white/10 rounded-full group-hover:bg-[#6C5CE7] group-hover:text-white transition-all duration-300">
                     <ArrowRight size={20} />
                  </div>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
               </a>
            </div>

         </div>
      </section>

      <footer className="relative w-full bg-black text-white pt-24 pb-8 px-0 border-t border-white/10">
         <div className="w-full border-b border-white/10">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-4">
               <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                  <span className="font-mono text-xs text-gray-500">ESTADO DEL SISTEMA</span>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                     <span className="font-mono text-sm text-[#6C5CE7]">OPERATIVO</span>
                  </div>
               </div>
               <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                  <span className="font-mono text-xs text-gray-500">UBICACIÓN</span>
                  <div className="flex items-center gap-2">
                     <MapPin size={14} className="text-gray-400" />
                     <span className="font-mono text-sm">Ciudad de Guatemala</span>
                  </div>
               </div>
               <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                  <span className="font-mono text-xs text-gray-500">CONTACTO</span>
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-2">
                        <Mail size={14} className="text-[#6C5CE7]" />
                        <span className="font-mono text-sm group-hover:text-[#6C5CE7] transition-colors">contacto@axocia.com</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <Phone size={14} className="text-[#6C5CE7]" />
                        <span className="font-mono text-sm group-hover:text-[#6C5CE7] transition-colors">+502 4318 1439</span>
                     </div>
                  </div>
                  <div className="flex gap-4 pt-2 border-t border-white/10 mt-1">
                     <a href="#" className="text-gray-400 hover:text-[#6C5CE7] transition-colors"><Linkedin size={16} /></a>
                     <a href="#" className="text-gray-400 hover:text-[#6C5CE7] transition-colors"><Instagram size={16} /></a>
                     <a href="#" className="text-gray-400 hover:text-[#6C5CE7] transition-colors"><Facebook size={16} /></a>
                  </div>
               </div>
               <div className="p-8 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                  <span className="font-mono text-xs text-gray-500">LEGAL</span>
                  <div className="flex flex-col gap-1">
                     <span className="font-mono text-xs text-gray-400">© 2026 AXOCIA Sistemas.</span>
                     <span className="font-mono text-[10px] text-gray-600">Todos los derechos reservados.</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-8 flex justify-between items-end">
            <div className="flex flex-col">
               <img src="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d89224e42b9fb10c5e8a1.png" alt="AXOCIA Logo" className="w-[200px] md:w-[350px] object-contain select-none" />
            </div>
         </div>
      </footer>
      
    </div>
  );
}