import React, { useState, useEffect, useRef } from 'react';
import {
   ArrowDown, Zap, CircleDashed, Terminal, Eye, Layout, ShieldAlert, Activity,
   Infinity, CheckCircle2, Target, Users, Scale, SearchCode, AlertTriangle,
   Crosshair, FileSearch, PenTool, Layers, GitBranch, Box, Ruler, Power, Play,
   HardDrive, Server, MessageSquare, FileText, Radio, Wifi, Lock, ShieldCheck,
   Ban, ArrowRight, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Anchor,
   Compass, Columns, Calendar, Settings, BarChart3, Check, XCircle
} from 'lucide-react';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';
import { Link } from '../src/lib/router';

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

   const sectionsRef = useRef<(HTMLElement | null)[]>([]);

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
      <div className="w-full bg-[#FFFFFF] min-h-screen text-black font-sans selection:bg-[#6C5CE7] selection:text-white">
         <SEO
            title="Cómo Trabajamos"
            description="Primero entender, luego intervenir. Proceso de ingeniería: Análisis, Definición, Diseño e Implementación. Infraestructura clara, operativa y sostenible."
         />

         {/* HERO SECTION - UNCHANGED */}
         <section className="relative w-full h-[100vh] flex flex-col justify-center overflow-hidden border-b border-black/10 bg-[#050505] text-white">

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
                           <h1 className="font-space-grotesk font-bold text-[10vw] lg:text-[7rem] xl:text-[9rem] leading-[0.8] tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>
                              CÓMO
                           </h1>
                        </TextReveal>

                        {/* Connecting Line Animation */}
                        <div className={`hidden lg:block absolute left-[2%] top-[55%] w-[120px] h-[120px] xl:w-[150px] xl:h-[150px] border-l border-b border-[#6C5CE7] rounded-bl-3xl z-0 transition-all duration-[1.5s] ease-in-out delay-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-75 origin-top-right'}`}></div>

                        <div className="lg:ml-24">
                           <TextReveal visible={mounted} delay="400ms">
                              {/* Adjusted sizing specifically for TRABAJAMOS to fit 8 cols */}
                              <h1 className="font-space-grotesk font-bold text-[10vw] lg:text-[6rem] xl:text-[8rem] leading-[0.8] tracking-tighter text-white whitespace-nowrap">
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

         {/* SECTION 1: PRINCIPIOS OPERATIVOS - UNCHANGED */}
         <section ref={principlesRef} className="relative w-full bg-[#050505] py-32 border-b border-white/10 z-20 text-white">
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

                           <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-none mb-8">
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

         {/* SECTION 2: ANTES DE EMPEZAR - REDESIGNED */}
         <section ref={preworkRef} className="relative w-full bg-white text-black py-32 z-30">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5 left-[50%] hidden lg:block"></div>
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                  {/* Left: Sticky Context */}
                  <div className="relative">
                     <div className="sticky top-32">
                        <div className={`transition-all duration-1000 ${preworkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                           <div className="flex items-center gap-4 mb-8">
                              <span className="font-space-grotesk text-[#6C5CE7] font-bold">04.</span>
                              <div className="h-[1px] w-12 bg-black/20"></div>
                              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">ALINEACIÓN</span>
                           </div>
                           <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[1.0] mb-8">
                              Antes de <br /><span className="text-[#6C5CE7]">empezar.</span>
                           </h2>
                           <p className="font-jakarta text-2xl font-light text-gray-600 mb-12 max-w-md">
                              Este trabajo requiere contexto, información y participación activa.
                           </p>
                           <div className="hidden lg:block">
                              <div className="p-8 border border-black/10 bg-gray-50 backdrop-blur-sm max-w-md">
                                 <div className="flex items-center gap-4 mb-4">
                                    <div className="w-3 h-3 bg-[#6C5CE7]"></div>
                                    <span className="font-space-grotesk font-bold uppercase tracking-widest text-sm">Estado Requerido</span>
                                 </div>
                                 <p className="font-jakarta text-gray-500">"El proceso funciona cuando ambas partes están alineadas desde el inicio."</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: The Checklist */}
                  <div className="relative pt-12 lg:pt-32">
                     <div className="space-y-16">
                        {[
                           { title: "Entendemos cómo opera hoy.", desc: "Antes de intervenir, analizamos la realidad actual del negocio. Identificamos flujos, nudos y dependencias críticas.", icon: Target },
                           { title: "Identificamos quién ejecuta.", desc: "Claridad total sobre la estructura de decisión. Quién define, quién aprueba y quién opera el sistema día a día.", icon: Users },
                           { title: "Alineamos alcance.", desc: "Sin sorpresas. Definimos expectativas, tiempos de entrega y límites del proyecto antes de escribir una línea de código.", icon: Scale },
                           { title: "No trabajamos sobre supuestos.", desc: "Validamos cada hipótesis con datos reales de la operación. La infraestructura se construye sobre hechos, no sobre deseos.", icon: Crosshair }
                        ].map((item, idx) => (
                           <div
                              key={idx}
                              className={`relative pl-8 border-l-2 border-black/10 transition-all duration-1000 group ${preworkVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                              style={{ transitionDelay: `${200 + (idx * 150)}ms` }}
                           >
                              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-black/20 group-hover:border-[#6C5CE7] group-hover:bg-[#6C5CE7] transition-all duration-300"></div>
                              <h3 className="font-space-grotesk font-bold text-3xl mb-4 group-hover:text-[#6C5CE7] transition-colors">{item.title}</h3>
                              <p className="font-jakarta text-lg text-gray-600 leading-relaxed max-w-lg">{item.desc}</p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 3: DIAGNÓSTICO (Analysis/Audit Mode) - REDESIGNED */}
         <section ref={diagnosisRef} className="relative w-full bg-[#050505] text-white py-32 border-b border-white/5 z-30 overflow-hidden">
            {/* Background Technical Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30 pointer-events-none"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                  <div className="lg:col-span-12 mb-12">
                     <div className={`flex flex-col items-start gap-4 transition-all duration-1000 ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4">
                           <span className="font-space-grotesk text-[#6C5CE7] font-bold">05.</span>
                           <div className="h-[1px] w-12 bg-white/20"></div>
                           <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE I</span>
                        </div>
                        <TextReveal visible={diagnosisVisible}>
                           <h2 className="font-space-grotesk font-bold text-6xl md:text-8xl leading-none tracking-tight">DIAGNÓSTICO</h2>
                        </TextReveal>
                        <div className="w-full h-[1px] bg-white/10 mt-8 mb-8"></div>
                     </div>
                  </div>

                  {/* Left: Definition */}
                  <div className={`lg:col-span-5 transition-all duration-1000 delay-200 ${diagnosisVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}>
                     <p className="font-space-grotesk text-3xl font-light leading-tight text-white mb-8">
                        El <span className="text-[#6C5CE7] font-bold">diagnóstico</span> es el punto de partida innegociable. No es una auditoría comercial; es una radiografía estructural.
                     </p>
                     <div className="p-8 border border-white/10 bg-white/5">
                        <h4 className="font-space-grotesk font-bold text-xl mb-4 text-[#6C5CE7] uppercase tracking-widest">Identificamos</h4>
                        <ul className="space-y-4 font-jakarta text-gray-400">
                           <li className="flex items-start gap-3">
                              <span className="text-[#6C5CE7] mt-1">/</span>
                              <span>El sistema operativo real del negocio.</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-[#6C5CE7] mt-1">/</span>
                              <span>Puntos de fricción crítica en el flujo del cliente.</span>
                           </li>
                           <li className="flex items-start gap-3">
                              <span className="text-[#6C5CE7] mt-1">/</span>
                              <span>Qué debe intervenirse ahora y qué puede esperar.</span>
                           </li>
                        </ul>
                     </div>
                  </div>

                  {/* Right: Radar/Analysis Visuals */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className={`bg-[#0A0A0A] p-8 border border-white/10 hover:border-[#6C5CE7] transition-colors duration-500 group ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
                        <FileSearch className="text-gray-500 group-hover:text-[#6C5CE7] mb-6 transition-colors" size={32} strokeWidth={1} />
                        <h3 className="font-space-grotesk font-bold text-2xl mb-2 text-white">Análisis de Estructura</h3>
                        <p className="font-jakarta text-sm text-gray-500">Evaluamos la jerarquía de datos y dependencias actuales.</p>
                     </div>
                     <div className={`bg-[#0A0A0A] p-8 border border-white/10 hover:border-[#6C5CE7] transition-colors duration-500 group ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '500ms' }}>
                        <Crosshair className="text-gray-500 group-hover:text-[#6C5CE7] mb-6 transition-colors" size={32} strokeWidth={1} />
                        <h3 className="font-space-grotesk font-bold text-2xl mb-2 text-white">Mapeo de Fricción</h3>
                        <p className="font-jakarta text-sm text-gray-500">Localización exacta de dónde se pierde eficiencia o clientes.</p>
                     </div>
                     <div className={`bg-[#0A0A0A] p-8 border border-white/10 hover:border-[#6C5CE7] transition-colors duration-500 group md:col-span-2 ${diagnosisVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
                        <div className="flex justify-between items-start">
                           <div>
                              <Terminal className="text-gray-500 group-hover:text-[#6C5CE7] mb-6 transition-colors" size={32} strokeWidth={1} />
                              <h3 className="font-space-grotesk font-bold text-2xl mb-2 text-white">Definición de Viabilidad</h3>
                              <p className="font-jakarta text-sm text-gray-500">Es el espacio donde se define si tiene sentido construir un sistema y en qué nivel hacerlo.</p>
                           </div>
                           <div className="hidden md:block">
                              <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center animate-spin-slow group-hover:border-[#6C5CE7]/30">
                                 <div className="w-16 h-16 border border-dashed border-gray-600 rounded-full"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECTION 4: DISEÑO (Architectural/Blueprint Mode) - REDESIGNED */}
         <section ref={designRef} className="relative w-full bg-white text-black py-32 z-30">
            {/* Blueprint Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(#E5E5E5_1px,transparent_1px),linear-gradient(90deg,#E5E5E5_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                  {/* Column 1: Header */}
                  <div className={`lg:col-span-4 transition-all duration-1000 ${designVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                     <div className="sticky top-32">
                        <div className="flex items-center gap-4 mb-8">
                           <span className="font-space-grotesk text-[#6C5CE7] font-bold">06.</span>
                           <div className="h-[1px] w-12 bg-black/20"></div>
                           <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE II</span>
                        </div>
                        <h2 className="font-space-grotesk font-bold text-6xl leading-[0.9] text-black mb-8">
                           DISEÑO DEL <br />SISTEMA.
                        </h2>
                        <p className="font-jakarta text-xl text-gray-600 mb-8 border-l-2 border-[#6C5CE7] pl-6">
                           Con el diagnóstico claro, diseñamos la arquitectura exacta que el negocio necesita.
                        </p>
                        <div className="flex gap-2">
                           <div className="px-4 py-2 border border-black/10 bg-white shadow-sm font-mono text-xs text-gray-500 uppercase">Input: Diagnóstico</div>
                           <div className="px-4 py-2 border border-black/10 bg-black text-white shadow-sm font-mono text-xs uppercase">Output: Planos</div>
                        </div>
                     </div>
                  </div>

                  {/* Column 2: The Blueprint Content */}
                  <div className="lg:col-span-8">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Card A */}
                        <div className={`bg-white p-10 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-1000 delay-200 ${designVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                           <Ruler size={40} className="text-black mb-6" strokeWidth={1} />
                           <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-[#6C5CE7]">Definición del Sistema</h3>
                           <p className="font-jakarta text-gray-600 mb-6">Determinamos si el enfoque debe ser de Orden, de Operación o de Crecimiento según la etapa del negocio.</p>
                           <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                           <span className="font-mono text-xs text-gray-400 uppercase">Intervención por etapas</span>
                        </div>

                        {/* Card B */}
                        <div className={`bg-white p-10 border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-1000 delay-400 ${designVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                           <Layers size={40} className="text-black mb-6" strokeWidth={1} />
                           <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-[#6C5CE7]">Componentes Funcionales</h3>
                           <p className="font-jakarta text-gray-600 mb-6">Selección precisa de herramientas y su función específica dentro del conjunto.</p>
                           <div className="w-full h-[1px] bg-gray-100 mb-4"></div>
                           <span className="font-mono text-xs text-gray-400 uppercase">Sin catálogo, a la medida</span>
                        </div>

                        {/* Large Statement */}
                        <div className={`md:col-span-2 mt-12 p-12 bg-[#F8F9FA] border-l-4 border-black transition-all duration-1000 delay-600 ${designVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                           <h3 className="font-space-grotesk font-bold text-3xl md:text-4xl text-black leading-tight">
                              "No diseñamos por catálogo ni por moda. El sistema se construye a la medida de la realidad operativa."
                           </h3>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECTION 5: IMPLEMENTACIÓN (Build/Terminal Mode) - REDESIGNED */}
         <section ref={implementationRef} className="relative w-full bg-[#080808] text-white py-32 border-b border-white/5 z-30">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 section-grid">
                  {/* Left: Header */}
                  <div>
                     <div className={`mb-16 transition-all duration-1000 ${implementationVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="flex items-center gap-4 mb-8">
                           <span className="font-space-grotesk text-[#6C5CE7] font-bold">07.</span>
                           <div className="h-[1px] w-12 bg-white/20"></div>
                           <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">FASE III</span>
                        </div>
                        <h2 className="font-space-grotesk font-bold text-6xl md:text-8xl leading-none text-white mb-8">
                           IMPLE-<br /><span className="text-gray-600">MENTACIÓN.</span>
                        </h2>
                        <p className="font-jakarta text-xl text-gray-400 max-w-lg">
                           Construimos el sistema y lo dejamos funcionando en la operación real del negocio.
                        </p>
                     </div>
                  </div>

                  {/* Right: Terminal Steps */}
                  <div className="flex flex-col gap-0 border border-white/10 bg-[#0C0C0C]">
                     <div className="flex items-center gap-2 p-4 border-b border-white/10 bg-[#151515]">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <div className="ml-4 font-mono text-xs text-gray-500">root@axocia-deploy:~</div>
                     </div>

                     <div className="p-8 space-y-8">
                        {[
                           { cmd: "install_components", label: "Despliegue de Componentes", desc: "Instalación de herramientas definidas en el diseño." },
                           { cmd: "config_logic", label: "Lógica Operativa", desc: "Configuración de flujos entre personas y procesos." },
                           { cmd: "init_system", label: "Base Operativa", desc: "Sistema listo para usarse desde el día uno." }
                        ].map((item, i) => (
                           <div key={i} className={`flex gap-6 transition-all duration-500 group ${implementationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: `${200 + (i * 150)}ms` }}>
                              <div className="font-mono text-[#6C5CE7] pt-1">{`>`}</div>
                              <div>
                                 <div className="font-mono text-sm text-[#6C5CE7] mb-1 opacity-70">{item.cmd}</div>
                                 <h4 className="font-space-grotesk font-bold text-2xl text-white mb-2 group-hover:text-[#6C5CE7] transition-colors">{item.label}</h4>
                                 <p className="font-jakarta text-gray-500">{item.desc}</p>
                              </div>
                           </div>
                        ))}

                        <div className={`mt-8 pt-8 border-t border-white/10 transition-all delay-1000 ${implementationVisible ? 'opacity-100' : 'opacity-0'}`}>
                           <div className="flex items-center gap-2 text-green-500">
                              <CheckCircle2 size={16} />
                              <span className="font-mono text-xs uppercase tracking-widest">Integración Completada</span>
                           </div>
                           <p className="font-jakarta text-sm text-gray-500 mt-2">
                              "La implementación no se entrega como proyecto terminado. Se integra como parte activa del día a día."
                           </p>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* SECTION 6: ACOMPAÑAMIENTO - REDESIGNED */}
         <section className="relative w-full bg-white text-black py-32 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
               <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24">
                  <div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7] mb-4 block">POST-IMPLEMENTACIÓN</span>
                     <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-tight">
                        Acompañamiento <br />Continuo.
                     </h2>
                  </div>
                  <div className="max-w-md">
                     <p className="font-jakarta text-xl font-medium text-gray-600 border-l-2 border-black pl-6">
                        "El objetivo no es soportar herramientas. Es cuidar la salud del sistema a lo largo del tiempo."
                     </p>
                  </div>
               </div>

               {/* Cycle Animation Items */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-black">
                  {[
                     { icon: Settings, title: "Ajustes", desc: "Calibración fina sobre el sistema en operación real." },
                     { icon: ShieldCheck, title: "Correcciones", desc: "Solución inmediata cuando el uso revela fricciones." },
                     { icon: Activity, title: "Optimización", desc: "Mejora progresiva conforme cambia la complejidad." }
                  ].map((item, i) => (
                     <div key={i} className="group border-r border-black last:border-r-0 p-12 hover:bg-[#F8F9FA] transition-colors duration-300">
                        <item.icon size={48} className="mb-8 text-black group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
                        <h3 className="font-space-grotesk font-bold text-3xl mb-4 group-hover:text-[#6C5CE7] transition-colors">{item.title}</h3>
                        <p className="font-jakarta text-gray-600 text-lg">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* SECTION 7: RITMO - REDESIGNED */}
         <section ref={rhythmRef} className="relative w-full bg-white text-black py-32 border-b border-gray-100">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
               <div className={`transition-all duration-1000 ${rhythmVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <h2 className="font-space-grotesk font-bold text-9xl md:text-[12rem] text-gray-100 leading-[0.8] select-none">RITMO</h2>
                  <div className="relative -mt-12 md:-mt-24 z-10">
                     <h3 className="font-space-grotesk font-bold text-4xl md:text-6xl text-black mb-12">Y Comunicación.</h3>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white border border-gray-200 p-8 shadow-sm">
                           <div className="text-[#6C5CE7] font-bold text-xl mb-4">01.</div>
                           <h4 className="font-space-grotesk font-bold text-2xl mb-2">Reuniones Claras</h4>
                           <p className="font-jakarta text-gray-500">Con objetivos concretos. Nada de "juntas" sin propósito.</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 shadow-sm">
                           <div className="text-[#6C5CE7] font-bold text-xl mb-4">02.</div>
                           <h4 className="font-space-grotesk font-bold text-2xl mb-2">Canales Definidos</h4>
                           <p className="font-jakarta text-gray-500">La comunicación fluye por vías oficiales, no por mensajes sueltos.</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-8 shadow-sm">
                           <div className="text-[#6C5CE7] font-bold text-xl mb-4">03.</div>
                           <h4 className="font-space-grotesk font-bold text-2xl mb-2">Decisiones Visibles</h4>
                           <p className="font-jakarta text-gray-500">Todo documentado. Cero urgencias artificiales.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 8: LÍMITES - REDESIGNED */}
         <section ref={limitsRef} className="relative w-full bg-[#1A1A1A] text-white py-32 px-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-transparent to-red-500 opacity-50"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
               <div className={`flex flex-col items-center text-center transition-all duration-1000 ${limitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <Ban size={64} className="text-white mb-8 opacity-20" strokeWidth={1} />
                  <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl mb-12">Límites del Proceso.</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left max-w-4xl mx-auto">
                     <div className="space-y-8">
                        <h3 className="font-space-grotesk font-bold text-2xl text-gray-400 border-b border-gray-700 pb-4">Lo que NO hacemos (Límites)</h3>
                        <ul className="space-y-4 font-jakarta text-lg">
                           <li className="flex items-start gap-4">
                              <span className="text-red-500 font-bold">×</span>
                              <span className="text-gray-300">No evaluamos cambios por urgencia.</span>
                           </li>
                           <li className="flex items-start gap-4">
                              <span className="text-red-500 font-bold">×</span>
                              <span className="text-gray-300">No creamos excepciones que rompan la lógica.</span>
                           </li>
                           <li className="flex items-start gap-4">
                              <span className="text-red-500 font-bold">×</span>
                              <span className="text-gray-300">El alcance se define desde el diagnóstico.</span>
                           </li>
                        </ul>
                     </div>

                     <div className="space-y-8">
                        <h3 className="font-space-grotesk font-bold text-2xl text-gray-400 border-b border-gray-700 pb-4">Por qué existen</h3>
                        <p className="font-jakarta text-xl leading-relaxed text-white">
                           "Estos límites no frenan el avance. Protegen la coherencia y la continuidad del sistema."
                        </p>
                        <div className="p-4 border border-white/20 bg-white/5 mt-4">
                           <span className="font-mono text-xs uppercase tracking-widest text-green-400">ESTADO: PROTEGIDO</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* SECTION 9: CTA - REDESIGNED */}
         <section ref={ctaRef} className="relative w-full bg-[#050505] text-white py-48 px-6 flex flex-col items-center justify-center">
            <div className={`text-center max-w-5xl transition-all duration-1000 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
               <div className="mb-12">
                  <span className="font-space-grotesk font-bold text-[#6C5CE7] text-xl mb-4 block">PUENTE AL DIAGNÓSTICO</span>
                  <h2 className="font-space-grotesk font-bold text-5xl md:text-8xl leading-none mb-8">
                     ¿Tiene sentido <br /> construir?
                  </h2>
                  <p className="font-jakarta text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                     Si sientes que este enfoque encaja, el siguiente paso es entender el estado real de tu operación.
                  </p>
               </div>

               <Link to="/diagnostico" className="group relative inline-flex items-center justify-center gap-4 px-16 py-8 bg-white text-black font-space-grotesk font-bold text-2xl uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-500">
                  <div className="absolute inset-0 bg-[#6C5CE7] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0"></div>
                  <span className="relative z-10">Solicitar Diagnóstico</span>
                  <ArrowRight size={28} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
               </Link>
            </div>
         </section>

         {/* FOOTER - UNCHANGED (Matches Home) */}
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
                        <div className="flex items-center gap-2"><Phone size={14} className="text-[#6C5CE7]" /><a href="https://wa.me/message/ASOF25HZH5MGL1" target="_blank" rel="noopener noreferrer" className="font-mono text-sm group-hover:text-[#6C5CE7] transition-colors">+502 4318 1439</a></div>
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