import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Zap, CircleDashed, Terminal, Eye, Layout, ShieldAlert, Activity, Infinity, CheckCircle2, Target, Users, Scale, SearchCode, AlertTriangle, Crosshair, FileSearch, PenTool, Layers, GitBranch, Box, Ruler, Power, Play, HardDrive, Server, MessageSquare, FileText, Radio, Wifi, Lock, ShieldCheck, Ban, ArrowRight, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Anchor, Compass, Columns, Calendar } from 'lucide-react';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';

export default function ComoTrabajamos() {
   const [mounted, setMounted] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   // Section Refs & States
   const principlesRef = useRef(null);
   const [principlesVisible, setPrinciplesVisible] = useState(false);

   const preworkRef = useRef(null);
   const [preworkVisible, setPreworkVisible] = useState(false);

   const diagnosisRef = useRef(null);
   const [diagnosisVisible, setDiagnosisVisible] = useState(false);

   const designRef = useRef(null);
   const [designVisible, setDesignVisible] = useState(false);

   const implementationRef = useRef(null);
   const [implementationVisible, setImplementationVisible] = useState(false);

   const rhythmRef = useRef(null);
   const [rhythmVisible, setRhythmVisible] = useState(false);

   const limitsRef = useRef(null);
   const [limitsVisible, setLimitsVisible] = useState(false);

   const ctaRef = useRef(null);
   const [ctaVisible, setCtaVisible] = useState(false);

   // Grid interaction logic & Observers
   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      setMounted(true);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.target === principlesRef.current && entry.isIntersecting) setPrinciplesVisible(true);
               if (entry.target === preworkRef.current && entry.isIntersecting) setPreworkVisible(true);
               if (entry.target === diagnosisRef.current && entry.isIntersecting) setDiagnosisVisible(true);
               if (entry.target === designRef.current && entry.isIntersecting) setDesignVisible(true);
               if (entry.target === implementationRef.current && entry.isIntersecting) setImplementationVisible(true);
               if (entry.target === rhythmRef.current && entry.isIntersecting) setRhythmVisible(true);
               if (entry.target === limitsRef.current && entry.isIntersecting) setLimitsVisible(true);
               if (entry.target === ctaRef.current && entry.isIntersecting) setCtaVisible(true);
            });
         },
         { threshold: 0.15 }
      );

      if (principlesRef.current) observer.observe(principlesRef.current);
      if (preworkRef.current) observer.observe(preworkRef.current);
      if (diagnosisRef.current) observer.observe(diagnosisRef.current);
      if (designRef.current) observer.observe(designRef.current);
      if (implementationRef.current) observer.observe(implementationRef.current);
      if (rhythmRef.current) observer.observe(rhythmRef.current);
      if (limitsRef.current) observer.observe(limitsRef.current);
      if (ctaRef.current) observer.observe(ctaRef.current);

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         if (principlesRef.current) observer.unobserve(principlesRef.current);
         if (preworkRef.current) observer.unobserve(preworkRef.current);
         if (diagnosisRef.current) observer.unobserve(diagnosisRef.current);
         if (designRef.current) observer.unobserve(designRef.current);
         if (implementationRef.current) observer.unobserve(implementationRef.current);
         if (rhythmRef.current) observer.unobserve(rhythmRef.current);
         if (limitsRef.current) observer.unobserve(limitsRef.current);
         if (ctaRef.current) observer.unobserve(ctaRef.current);
      };
   }, []);

   const principlesData = [
      {
         id: "01",
         cmd: "entender_contexto",
         title: "Primero entender, luego intervenir.",
         desc: "No diseñamos ni construimos nada sin comprender cómo funciona el negocio en la realidad.",
         icon: Eye
      },
      {
         id: "02",
         cmd: "iniciar_solucion",
         title: "El sistema define la solución.",
         desc: "No partimos de herramientas ni de servicios. Partimos del sistema que el negocio necesita en este momento.",
         icon: Layout
      },
      {
         id: "03",
         cmd: "evitar_friccion",
         title: "No todo se toca.",
         desc: "Solo intervenimos lo que está generando fricción. Lo que funciona, se respeta.",
         icon: ShieldAlert
      },
      {
         id: "04",
         cmd: "validar_operacion",
         title: "La operación manda.",
         desc: "Cada decisión se valida contra el día a día del negocio, no contra una idea teórica.",
         icon: Activity
      },
      {
         id: "05",
         cmd: "asegurar_continuidad",
         title: "La infraestructura se sostiene.",
         desc: "Diseñamos pensando en continuidad, no en soluciones temporales.",
         icon: Infinity
      }
   ];

   return (
      <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6C5CE7] selection:text-white">
         <SEO
            title="Cómo Trabajamos"
            description="Primero entender, luego intervenir. Proceso de ingeniería: Análisis, Definición, Diseño e Implementación. Infraestructura clara, operativa y sostenible."
         />

         {/* HERO SECTION */}
         <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden border-b border-white/10">

            {/* 1. Interactive Background Grid */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
               <div
                  className="absolute inset-0"
                  style={{
                     backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                     backgroundSize: '40px 40px',
                     // Increased opacity/visibility of the mask slightly
                     maskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 45%)`,
                     WebkitMaskImage: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 60%)`
                  }}
               ></div>
               {/* Static base grid (fainter) */}
               <div className="absolute inset-0 opacity-30 bg-[size:40px_40px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
            </div>

            {/* 2. Abstract Ambient Light */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#6C5CE7] rounded-full blur-[180px] opacity-10 animate-pulse-slow pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

               {/* Top Tag */}
               <div className={`absolute top-24 md:top-32 left-6 md:left-12 flex items-center gap-4 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                  <span className="font-space-grotesk text-[#6C5CE7] font-bold">02.</span>
                  <div className="h-[1px] w-12 bg-white/20"></div>
                  <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7] font-semibold">PROCESO DE INGENIERÍA</span>
               </div>

               {/* Main Content Layout */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

                  {/* Left: Giant Typography */}
                  <div className="lg:col-span-8 relative">
                     <div className="relative z-20">
                        <TextReveal visible={mounted} delay="200ms">
                           <h1 className="font-space-grotesk font-bold text-[13vw] lg:text-[9rem] xl:text-[11rem] leading-[0.8] tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                              CÓMO
                           </h1>
                        </TextReveal>

                        {/* Connecting Line Animation */}
                        <div className={`hidden lg:block absolute left-[2%] top-[55%] w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] border-l border-b border-[#6C5CE7] rounded-bl-3xl z-0 transition-all duration-[1.5s] ease-in-out delay-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75 origin-top-right'}`}></div>

                        <div className="lg:ml-24">
                           <TextReveal visible={mounted} delay="400ms">
                              {/* Adjusted sizing specifically for TRABAJAMOS to fit 8 cols */}
                              <h1 className="font-space-grotesk font-bold text-[13vw] lg:text-[8rem] xl:text-[10rem] leading-[0.8] tracking-tighter text-white whitespace-nowrap">
                                 TRABAJAMOS
                              </h1>
                           </TextReveal>
                        </div>
                     </div>
                  </div>

                  {/* Right: Text Blocks */}
                  <div className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-12 relative">

                     {/* Vertical Line decoration */}
                     <div className={`hidden lg:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#6C5CE7] to-transparent transition-all duration-1000 delay-1000 ${mounted ? 'opacity-50 scale-y-100' : 'opacity-0 scale-y-0'}`}></div>

                     <div className="space-y-12">
                        {/* Block 1 */}
                        <div className={`transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                           <div className="flex items-center gap-3 mb-4 text-[#6C5CE7]">
                              <CircleDashed className="animate-spin-slow" size={20} />
                              <span className="font-mono text-xs tracking-widest uppercase">Fase 0: Análisis</span>
                           </div>
                           <h3 className="font-space-grotesk text-2xl md:text-3xl font-medium leading-tight mb-4">
                              Nuestro trabajo no empieza ejecutando.
                              <span className="text-gray-500 block mt-2">Empieza entendiendo el sistema del negocio.</span>
                           </h3>
                        </div>

                        <div className={`w-full h-[1px] bg-white/10 transition-all duration-1000 delay-900 ${mounted ? 'scale-x-100' : 'scale-x-0 origin-left'}`}></div>

                        {/* Block 2 */}
                        <div className={`transition-all duration-1000 delay-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                           <div className="flex items-center gap-3 mb-4 text-gray-500">
                              <Zap size={20} />
                              <span className="font-mono text-xs tracking-widest uppercase">Objetivo</span>
                           </div>
                           <p className="font-jakarta text-lg text-gray-400 leading-relaxed max-w-md">
                              Cada paso del proceso existe para construir infraestructura <span className="text-white">clara</span>, <span className="text-white">operativa</span> y <span className="text-white">sostenible</span> en el tiempo.
                           </p>
                        </div>
                     </div>

                  </div>
               </div>

               {/* Bottom Scroll Indicator */}
               <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1500ms] ${mounted ? 'opacity-50' : 'opacity-0'}`}>
                  <span className="font-jakarta text-[10px] uppercase tracking-widest text-gray-500">Desplazar</span>
                  <ArrowDown size={16} className="text-white animate-bounce" />
               </div>
            </div>
         </section>

         {/* SECTION 1: PRINCIPIOS OPERATIVOS */}
         <section ref={principlesRef} className="relative w-full bg-[#050505] py-32 border-b border-white/10 z-20">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                  {/* Left Column: Sticky Title & Context */}
                  <div className="lg:col-span-5 relative">
                     <div className="sticky top-32">
                        <div className={`transition-all duration-1000 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                           <div className="flex items-center gap-4 mb-8">
                              <span className="font-space-grotesk text-[#6C5CE7] font-bold">03.</span>
                              <div className="h-[1px] w-12 bg-white/20"></div>
                              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">LÓGICA CENTRAL</span>
                           </div>

                           <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl leading-[1.1] mb-8">
                              Principios operativos <br /> de trabajo.
                           </h2>

                           <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm mb-8">
                              <div className="flex items-start gap-4 mb-4">
                                 <Terminal size={20} className="text-[#6C5CE7] mt-1" />
                                 <p className="font-mono text-xs text-[#6C5CE7] leading-relaxed">
                                    {'>'} VERIFICACIÓN: COMPLETADA<br />
                                    {'>'} CARGANDO PROTOCOLOS...
                                 </p>
                              </div>
                              <p className="font-jakarta text-lg text-gray-400 leading-relaxed">
                                 Nuestro proceso se rige por principios claros que guían cada decisión técnica y operativa.
                              </p>
                           </div>

                           {/* Animated System Status Graphic */}
                           <div className="flex gap-2 items-center">
                              <div className="flex gap-1">
                                 {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="w-1 h-3 bg-[#6C5CE7] animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></div>
                                 ))}
                              </div>
                              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Ejecutando</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right Column: The List */}
                  <div className="lg:col-span-7">
                     <div className="flex flex-col">
                        {principlesData.map((item, idx) => (
                           <div
                              key={idx}
                              className={`group relative border-b border-white/10 py-12 transition-all duration-700 ${principlesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                              style={{ transitionDelay: `${200 + (idx * 100)}ms` }}
                           >
                              {/* Hover Background Glow */}
                              <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-0 translate-x-[-1rem] w-[calc(100%+2rem)]"></div>

                              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                                 {/* Meta Info */}
                                 <div className="flex-shrink-0 flex md:flex-col items-center md:items-start gap-4 md:w-32">
                                    <span className="font-mono text-2xl text-gray-600 group-hover:text-[#6C5CE7] transition-colors">
                                       {item.id}
                                    </span>
                                    <div className="hidden md:block w-[1px] h-12 bg-white/10 group-hover:bg-[#6C5CE7] transition-colors duration-500"></div>
                                    <item.icon size={24} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                                 </div>

                                 {/* Content */}
                                 <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-x-4 group-hover:translate-x-0">
                                       <span className="text-[#6C5CE7] font-mono text-xs">{`> ejecutando: ${item.cmd}`}</span>
                                    </div>

                                    <h3 className="font-space-grotesk font-bold text-2xl md:text-4xl mb-4 group-hover:text-[#6C5CE7] transition-colors duration-300">
                                       {item.title}
                                    </h3>

                                    <p className="font-jakarta text-lg text-gray-500 group-hover:text-gray-300 transition-colors duration-300 max-w-lg leading-relaxed">
                                       {item.desc}
                                    </p>
                                 </div>

                                 {/* Hover Indicator */}
                                 <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 text-[#6C5CE7]">
                                    <CheckCircle2 size={24} />
                                 </div>

                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECTION 2: ANTES DE EMPEZAR (Pre-Work / Alignment) */}
         <section ref={preworkRef} className="relative w-full bg-white text-black py-32 z-30">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">

               {/* Header */}
               <div className={`mb-24 transition-all duration-1000 ${preworkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">04.</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">ALINEACIÓN</span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                     <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[1.0] tracking-tight">
                        Antes de <br /><span className="text-[#6C5CE7]">empezar.</span>
                     </h2>
                     <div className="pb-2">
                        <p className="font-jakarta text-xl text-gray-600 leading-relaxed font-medium">
                           Este trabajo requiere contexto, información y participación activa.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Main Content Grid */}
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                  {/* Left: Scan/Sync Metaphor */}
                  <div className="lg:col-span-5 relative">
                     <div className={`bg-[#F5F5F7] rounded-sm p-12 border border-gray-200 relative overflow-hidden transition-all duration-1000 delay-200 ${preworkVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>

                        {/* Radar Animation */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-10 pointer-events-none">
                           <div className="w-full h-full border border-black/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                           <div className="absolute top-[10%] left-[10%] w-[80%] h-[80%] border border-black/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        </div>
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_1px,rgba(255,255,255,0.5)_1px)] bg-[size:100%_4px] opacity-50 pointer-events-none"></div>

                        <div className="relative z-10">
                           <Layout size={48} className="text-[#6C5CE7] mb-8" strokeWidth={1.5} />
                           <h3 className="font-space-grotesk font-bold text-3xl mb-4">Sincronización de expectativas.</h3>
                           <p className="font-jakarta text-gray-500 leading-relaxed mb-8">
                              El proceso funciona cuando ambas partes están alineadas desde el inicio.
                           </p>
                           <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="font-jakarta text-xs font-bold uppercase tracking-widest text-gray-400">Listo para alinear</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Checklist */}
                  <div className="lg:col-span-7">
                     <div className="flex flex-col gap-0 border-l border-black/10">
                        {[
                           { title: "Entendemos cómo opera hoy.", text: "Analizamos la realidad actual del negocio, no la ideal.", icon: Target },
                           { title: "Identificamos quién ejecuta.", text: "Claridad total sobre quién toma decisiones y quién las implementa.", icon: Users },
                           { title: "Alineamos alcance.", text: "Definimos expectativas, tiempos y entregables antes de escribir una línea de código.", icon: Scale }
                        ].map((item, idx) => (
                           <div
                              key={idx}
                              className={`group relative pl-12 py-12 border-b border-black/10 last:border-b-0 transition-all duration-1000 ${preworkVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                              style={{ transitionDelay: `${400 + (idx * 150)}ms` }}
                           >
                              {/* Active Indicator Line */}
                              <div className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-[#6C5CE7] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                              {/* Icon Bubble */}
                              <div className="absolute left-[-20px] top-12 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:text-[#6C5CE7] group-hover:border-[#6C5CE7] transition-all duration-300 z-10">
                                 <item.icon size={18} />
                              </div>

                              <h3 className="font-space-grotesk font-bold text-2xl md:text-3xl mb-3 text-black group-hover:text-[#6C5CE7] transition-colors">
                                 {item.title}
                              </h3>
                              <p className="font-jakarta text-lg text-gray-500 max-w-lg leading-relaxed group-hover:text-gray-700 transition-colors">
                                 {item.text}
                              </p>
                           </div>
                        ))}
                     </div>

                     <div className={`mt-16 pl-12 transition-all duration-1000 delay-1000 ${preworkVisible ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="font-space-grotesk text-2xl md:text-3xl font-medium text-black">
                           "No trabajamos sobre supuestos."
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECTION 3: FASE 1 - DIAGNÓSTICO (Analysis/Audit Theme) */}
         <section ref={diagnosisRef} className="relative w-full bg-[#050505] text-white py-32 border-b border-white/10 z-30">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
               <div className={`mb-16 transition-all duration-1000 ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">05.</span>
                     <div className="h-[1px] w-12 bg-white/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE I</span>
                  </div>
                  <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-tight">Diagnóstico <br /> e Inmersión.</h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {[
                     { title: "Auditoría de Herramientas", desc: "Inventario total de software, accesos y desconexiones.", icon: FileSearch },
                     { title: "Mapeo de Flujos", desc: "Diagramación visual de cómo se mueve la información hoy.", icon: Crosshair },
                     { title: "Entrevistas Operativas", desc: "Conversaciones con el equipo para identificar puntos de dolor reales.", icon: MessageSquare }
                  ].map((item, i) => (
                     <div key={i} className={`p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 * i}ms` }}>
                        <item.icon size={32} className="text-[#6C5CE7] mb-6" />
                        <h3 className="font-space-grotesk font-bold text-2xl mb-4">{item.title}</h3>
                        <p className="font-jakarta text-gray-400 leading-relaxed">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 4: FASE 2 - DISEÑO (Blueprint Theme) */}
         <section ref={designRef} className="relative w-full bg-white text-black py-32 border-b border-black/10 z-30">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
               <div className={`flex flex-col md:flex-row justify-between items-end mb-16 transition-all duration-1000 ${designVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div>
                     <div className="flex items-center gap-4 mb-8">
                        <span className="font-space-grotesk text-[#6C5CE7] font-bold">06.</span>
                        <div className="h-[1px] w-12 bg-black/20"></div>
                        <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE II</span>
                     </div>
                     <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-tight">Arquitectura <br /> y Diseño.</h2>
                  </div>
                  <div className="pb-4">
                     <p className="font-jakarta text-xl font-medium text-gray-600 max-w-md text-right">
                        No construimos sin planos. Diseñamos la solución completa antes de ejecutar.
                     </p>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className={`border-l-2 border-[#6C5CE7] pl-8 py-4 transition-all duration-1000 delay-200 ${designVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                     <Ruler size={40} className="text-black mb-6" strokeWidth={1.5} />
                     <h3 className="font-space-grotesk font-bold text-3xl mb-4">Planos del Sistema</h3>
                     <p className="font-jakarta text-lg text-gray-600 leading-relaxed">
                        Entregamos diagramas técnicos que explican qué se va a construir, cómo se conecta y qué problemas resuelve específicamente.
                     </p>
                  </div>
                  <div className={`border-l-2 border-gray-200 pl-8 py-4 transition-all duration-1000 delay-400 ${designVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                     <Compass size={40} className="text-black mb-6" strokeWidth={1.5} />
                     <h3 className="font-space-grotesk font-bold text-3xl mb-4">Selección de Tecnología</h3>
                     <p className="font-jakarta text-lg text-gray-600 leading-relaxed">
                        Definimos el stack tecnológico exacto. No vendemos software por vender; elegimos lo que el sistema necesita.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 5: FASE 3 - IMPLEMENTACIÓN (Build/Code Theme) */}
         <section ref={implementationRef} className="relative w-full bg-[#080808] text-white py-32 border-b border-white/10 z-30">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
               <div className={`mb-16 transition-all duration-1000 ${implementationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">07.</span>
                     <div className="h-[1px] w-12 bg-white/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE III</span>
                  </div>
                  <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-tight text-white">Construcción <br /> e Implementación.</h2>
               </div>

               <div className="relative border-l border-white/10 pl-8 md:pl-16 space-y-16">
                  {[
                     { t: "Configuración Base", d: "Setup de servidores, bases de datos y cuentas maestras.", i: Server },
                     { t: "Desarrollo de Flujos", d: "Programación de automatizaciones y conexiones entre herramientas.", i: GitBranch },
                     { t: "Integración de IA", d: "Implementación de agentes y lógica de procesamiento de datos.", i: HardDrive },
                     { t: "Pruebas de Estrés", d: "Validación del sistema bajo carga real antes del lanzamiento.", i: Activity }
                  ].map((step, idx) => (
                     <div key={idx} className={`relative transition-all duration-1000 ${implementationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${idx * 150}ms` }}>
                        <div className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 bg-[#080808] border border-[#6C5CE7] rounded-full"></div>
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                           <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                              <step.i size={24} className="text-[#6C5CE7]" />
                           </div>
                           <div>
                              <h3 className="font-space-grotesk font-bold text-2xl text-white mb-2">{step.t}</h3>
                              <p className="font-jakarta text-gray-400 max-w-lg">{step.d}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 6: FASE 4 - RITMO (Continuity Theme) */}
         <section ref={rhythmRef} className="relative w-full bg-white text-black py-32 z-30">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
               <div className={`transition-all duration-1000 ${rhythmVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className="inline-flex items-center gap-4 mb-8 justify-center">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">08.</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE IV</span>
                  </div>
                  <h2 className="font-space-grotesk font-bold text-5xl md:text-8xl leading-none mb-8">Ritmo y <br /> Continuidad.</h2>
                  <p className="font-jakarta text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                     El sistema no se "termina", evoluciona. Establecemos rutinas de revisión, optimización y ajuste para asegurar que la infraestructura crezca con el negocio.
                  </p>
                  <div className="flex justify-center gap-8 text-black">
                     <div className="flex flex-col items-center gap-2">
                        <Calendar size={32} strokeWidth={1.5} />
                        <span className="font-mono text-sm uppercase">Revisiones Semanales</span>
                     </div>
                     <div className="w-[1px] h-12 bg-gray-200"></div>
                     <div className="flex flex-col items-center gap-2">
                        <Activity size={32} strokeWidth={1.5} />
                        <span className="font-mono text-sm uppercase">Optimización Constante</span>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 7: LÍMITES (Scope/Boundaries) */}
         <section ref={limitsRef} className="relative w-full bg-[#1A1A1A] text-white py-24 px-6 border-t border-b border-white/5 z-30">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
               <div className={`flex-1 transition-all duration-1000 ${limitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-4 text-red-400">
                     <Ban size={24} />
                     <h3 className="font-space-grotesk font-bold text-2xl uppercase">Límites del Sistema</h3>
                  </div>
                  <p className="font-jakarta text-gray-400 leading-relaxed text-lg">
                     No somos empleados de tiempo completo. No gestionamos personal interno. No hacemos "micro-management". Somos arquitectos de infraestructura, no gerentes operativos.
                  </p>
               </div>
               <div className={`w-full h-[1px] md:w-[1px] md:h-32 bg-white/10`}></div>
               <div className={`flex-1 transition-all duration-1000 delay-200 ${limitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-4 text-green-400">
                     <ShieldCheck size={24} />
                     <h3 className="font-space-grotesk font-bold text-2xl uppercase">Garantía de Orden</h3>
                  </div>
                  <p className="font-jakarta text-gray-400 leading-relaxed text-lg">
                     Garantizamos que la infraestructura entregada funciona, está documentada y es propiedad 100% del cliente. Sin cajas negras.
                  </p>
               </div>
            </div>
         </section>

         {/* SECTION 8: CTA */}
         <section ref={ctaRef} className="relative w-full bg-[#050505] text-white py-32 px-6 flex flex-col items-center justify-center z-30">
            <div className={`text-center max-w-4xl transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
               <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl mb-12">
                  ¿Listo para <span className="text-[#6C5CE7]">construir</span>?
               </h2>
               <a href="#/diagnostico" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-space-grotesk font-bold text-xl uppercase tracking-widest hover:bg-[#6C5CE7] hover:text-white transition-all duration-300 group">
                  <span>Iniciar Diagnóstico</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
         </section>

         {/* FOOTER */}
         <footer className="relative w-full bg-black text-white pt-24 pb-8 px-0 border-t border-white/10 z-30">
            <div className="w-full border-b border-white/10">
               <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-4">
                  <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                     <span className="font-mono text-xs text-gray-500">ESTADO DEL SISTEMA</span>
                     <div className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div><span className="font-mono text-sm text-[#6C5CE7]">OPERATIVO</span></div>
                  </div>
                  <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                     <span className="font-mono text-xs text-gray-500">UBICACIÓN</span>
                     <div className="flex items-center gap-2"><MapPin size={14} className="text-gray-400" /><span className="font-mono text-sm">Ciudad de Guatemala</span></div>
                  </div>
                  <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                     <span className="font-mono text-xs text-gray-500">CONTACTO</span>
                     <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2"><Mail size={14} className="text-[#6C5CE7]" /><span className="font-mono text-sm group-hover:text-[#6C5CE7] transition-colors">contacto@axocia.com</span></div>
                        <div className="flex items-center gap-2"><Phone size={14} className="text-[#6C5CE7]" /><span className="font-mono text-sm group-hover:text-[#6C5CE7] transition-colors">+502 4318 1439</span></div>
                     </div>
                  </div>
                  <div className="p-8 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
                     <span className="font-mono text-xs text-gray-500">LEGAL</span>
                     <div className="flex flex-col gap-1"><span className="font-mono text-xs text-gray-400">© 2026 AXOCIA Sistemas.</span></div>
                  </div>
               </div>
            </div>
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 pt-8 flex justify-between items-end">
               <div className="flex flex-col"><img src="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d89224e42b9fb10c5e8a1.png" alt="AXOCIA Logo" className="w-[200px] md:w-[350px] object-contain select-none" /></div>
            </div>
         </footer>

      </div>
   );
}