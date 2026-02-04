import React, { useState, useEffect, useRef } from 'react';
import {
   ArrowDown, ScanLine, X, Check, ArrowRight, MapPin, Mail, Phone, Linkedin, Instagram, Facebook,
   Activity, Binary, AlertTriangle, ChevronRight, ChevronLeft, Circle, Grip, Layers, GitCommit,
   GitPullRequest, Box, Hash, AlignLeft, Power, GitMerge, UserX, BatteryWarning, CheckCircle2,
   Ban, ArrowRightCircle, ClipboardCheck, Terminal, Fingerprint, Search, ShieldAlert, Cpu, AlertOctagon,
   FileWarning, Siren, LayoutDashboard
} from 'lucide-react';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';

// --- DATA ---

const QUESTIONS = {
   system: [
      {
         id: 'sys_order',
         question: 'ORDEN: ¿Dónde está la información de tu negocio?',
         options: [
            'Sistema centralizado y organizado',
            'Hojas de cálculo y documentos conectados',
            'Múltiples lugares (WhatsApp, correos, cuadernos)',
            'En mi cabeza'
         ]
      },
      {
         id: 'sys_ops',
         question: 'OPERACIÓN: Si te vas de vacaciones una semana sin revisar nada, ¿qué pasa?',
         options: [
            'El negocio sigue operando normalmente',
            'Algunas cosas siguen, pero se acumulan pendientes',
            'La operación se detiene casi por completo',
            'Nunca me he ido sin estar pendiente'
         ]
      },
      {
         id: 'sys_growth',
         question: 'CRECIMIENTO: ¿Cómo consigues clientes nuevos actualmente?',
         options: [
            'Campañas activas que traen clientes constantemente',
            'Principalmente referidos y recomendaciones',
            'Contactos y relaciones construidas con los años',
            'Tengo dificultad para conseguir clientes nuevos'
         ]
      },
   ],
   phases: [
      {
         id: 'phase_attraction',
         question: 'ATRACCIÓN: ¿Cómo te encuentran tus clientes potenciales?',
         options: [
            'Presencia clara y medible en Google/Redes',
            'Presencia digital básica pero no mido origen',
            'Dependo de referidos y boca a boca',
            'No sé cómo me encuentran'
         ]
      },
      {
         id: 'phase_onboarding',
         question: 'INCORPORACIÓN: Cuando alguien te contacta por primera vez, ¿qué pasa?',
         options: [
            'Respuesta inmediata y seguimiento automático',
            'Respondemos rápido manualmente, seguimiento irregular',
            'A veces respondemos rápido, a veces se nos pasa',
            'Muchos contactos quedan sin respuesta'
         ]
      },
      {
         id: 'phase_delivery',
         question: 'ENTREGA: ¿Qué tan confiable es tu cumplimiento?',
         options: [
            'Proceso claro, cliente sabe qué esperar',
            'Proceso definido pero a veces hay improvisación',
            'Inconsistente, cada caso es diferente',
            'Caótico, hay confusión y quejas frecuentes'
         ]
      },
      {
         id: 'phase_relation',
         question: 'RELACIÓN: Después de que un cliente compra, ¿qué pasa?',
         options: [
            'Seguimiento sistemático y estrategia de fidelización',
            'Algo de seguimiento pero no sistemático',
            'Casi no hay contacto después de la venta',
            'Compran una vez y desaparecen'
         ]
      },
      {
         id: 'phase_latency',
         question: 'LATENCIA: ¿Sabes quiénes son tus clientes inactivos?',
         options: [
            'Tengo identificados los inactivos y estrategia',
            'Sé más o menos quiénes son pero no tengo estrategia',
            'No sé con exactitud quiénes dejaron de comprar',
            'Pierdo clientes sin darme cuenta'
         ]
      }
   ],
   urgency: [
      {
         id: 'urgency_status',
         question: '¿Cuál de estas situaciones describe mejor tu realidad actual?',
         options: [
            'Ya perdí clientes o dinero por desorganización',
            'No he perdido clientes aún, pero siento que estoy cerca',
            'Sé que debería mejorar, pero funciona "más o menos"',
            'Solo estoy explorando, no tengo un problema urgente'
         ]
      }
   ]
};

export default function Diagnostico() {
   const [mounted, setMounted] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

   // Section Refs for Observer
   const sec1Ref = useRef(null); // Qué es
   const sec2Ref = useRef(null); // Desorden (Growth Trap)
   const sec3Ref = useRef(null); // Patrones
   const sec4Ref = useRef(null); // Riesgos
   const sec5Ref = useRef(null); // Qué evalúa
   const sec6Ref = useRef(null); // Contexto
   const sec7Ref = useRef(null); // Paso Siguiente

   const [sec1Visible, setSec1Visible] = useState(false);
   const [sec2Visible, setSec2Visible] = useState(false);
   const [sec3Visible, setSec3Visible] = useState(false);
   const [sec4Visible, setSec4Visible] = useState(false);
   const [sec5Visible, setSec5Visible] = useState(false);
   const [sec6Visible, setSec6Visible] = useState(false);
   const [sec7Visible, setSec7Visible] = useState(false);

   // Form State
   const [formStarted, setFormStarted] = useState(false);
   const [formStep, setFormStep] = useState(0);
   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
   const [formData, setFormData] = useState({
      name: '', phone: '', email: '', company: '', industry: '',
      answers: {} as Record<string, string>
   });
   const [processingLog, setProcessingLog] = useState<string[]>([]);
   const [submissionError, setSubmissionError] = useState<string | null>(null);

   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      setMounted(true);

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.target === sec1Ref.current && entry.isIntersecting) setSec1Visible(true);
               if (entry.target === sec2Ref.current && entry.isIntersecting) setSec2Visible(true);
               if (entry.target === sec3Ref.current && entry.isIntersecting) setSec3Visible(true);
               if (entry.target === sec4Ref.current && entry.isIntersecting) setSec4Visible(true);
               if (entry.target === sec5Ref.current && entry.isIntersecting) setSec5Visible(true);
               if (entry.target === sec6Ref.current && entry.isIntersecting) setSec6Visible(true);
               if (entry.target === sec7Ref.current && entry.isIntersecting) setSec7Visible(true);
            });
         },
         { threshold: 0.15 }
      );

      [sec1Ref, sec2Ref, sec3Ref, sec4Ref, sec5Ref, sec6Ref, sec7Ref].forEach(ref => {
         if (ref.current) observer.observe(ref.current);
      });

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         observer.disconnect();
      };
   }, []);

   // Form Logic
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleOptionSelect = (questionId: string, option: string) => {
      setFormData(prev => ({
         ...prev,
         answers: { ...prev.answers, [questionId]: option }
      }));
      setTimeout(() => {
         if (formStep === 1) {
            if (currentQuestionIndex < QUESTIONS.system.length - 1) setCurrentQuestionIndex(prev => prev + 1);
            else { setFormStep(2); setCurrentQuestionIndex(0); }
         } else if (formStep === 2) {
            if (currentQuestionIndex < QUESTIONS.phases.length - 1) setCurrentQuestionIndex(prev => prev + 1);
            else { setFormStep(3); setCurrentQuestionIndex(0); }
         } else if (formStep === 3) {
            setFormStep(4); startProcessingSimulation();
         }
      }, 400);
   };

   const startProcessingSimulation = async () => {
      const logs = [
         "Conectando con servidor...",
         "Validando respuestas...",
         "Analizando estructura operativa...",
         "Mapeando recorrido del cliente...",
         "Generando matriz de priorización...",
         "Enviando datos al sistema..."
      ];

      // Animate logs
      for (let i = 0; i < logs.length; i++) {
         setProcessingLog(prev => [...prev, logs[i]]);
         await new Promise(r => setTimeout(r, 800));
      }

      try {
         const res = await fetch('/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
         });

         if (!res.ok) throw new Error("Error submit");

         setProcessingLog(prev => [...prev, "Reporte generado exitosamente."]);
         setTimeout(() => setFormStep(5), 1000);
      } catch (e) {
         setSubmissionError("Error al enviar el diagnóstico. Por favor intenta de nuevo.");
         setProcessingLog(prev => [...prev, "Error de conexión."]);
         // Allow retry after delay?
         setTimeout(() => setFormStep(4), 1000); // Re-show log or error state? Actually user logic ends here. 
         // Better to just show error.
      }
   };

   const submitContact = () => {
      // Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[0-9]{8,15}$/; // Basic validation

      if (!formData.name) return;
      if (!emailRegex.test(formData.email)) {
         alert("Por favor ingresa un email válido."); // We should use a better UI, but for now this blocks it.
         return;
      }
      if (!phoneRegex.test(formData.phone)) {
         alert("Por favor ingresa un teléfono válido (8-15 dígitos).");
         return;
      }

      setFormStep(1);
   };

   const getCurrentQuestion = () => {
      if (formStep === 1) return QUESTIONS.system[currentQuestionIndex];
      if (formStep === 2) return QUESTIONS.phases[currentQuestionIndex];
      if (formStep === 3) return QUESTIONS.urgency[0];
      return null;
   };

   return (
      <div className="w-full bg-[#050505] min-h-screen text-white font-sans selection:bg-[#6C5CE7] selection:text-white overflow-hidden">
         <SEO
            title="Diagnóstico"
            description="Análisis de Sistema. Una lectura técnica del estado actual del negocio para identificar puntos de quiebre y fricción operativa."
         />

         {/* GLOBAL NOISE OVERLAY */}
         <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light z-50"></div>

         {/* ==================================================================================== */}
         {/* 0. HERO (TECH/KINETIC) */}
         {/* ==================================================================================== */}
         <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden border-b border-white/10 bg-[#050505] z-0">

            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6C5CE7] opacity-[0.08] blur-[150px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 h-full flex flex-col justify-center">

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-8 relative z-20">
                     {/* Decorative Header Lines */}
                     <div className="flex items-center gap-4 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                        <span className="font-space-grotesk text-[#6C5CE7] font-bold">01.</span>
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7] font-semibold">ANÁLISIS DE SISTEMA</span>
                     </div>

                     <TextReveal visible={mounted} delay="200ms">
                        <h1 className="font-space-grotesk font-bold text-[10vw] lg:text-[6rem] xl:text-[7rem] leading-[0.85] tracking-tighter mb-2 text-white">
                           DIAGNÓSTICO
                        </h1>
                     </TextReveal>
                     <TextReveal visible={mounted} delay="400ms">
                        <h1 className="font-space-grotesk font-bold text-[10vw] lg:text-[6rem] xl:text-[7rem] leading-[0.85] tracking-tighter text-transparent stroke-white" style={{ WebkitTextStroke: '1px #6C5CE7' }}>
                           DE INFRAESTRUCTURA
                        </h1>
                     </TextReveal>

                     <div className={`mt-12 max-w-2xl border-l-[1px] border-[#6C5CE7] pl-8 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <p className="font-jakarta text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                           Una lectura técnica del estado actual del negocio para identificar <span className="text-white font-medium">puntos de quiebre</span>, <span className="text-white font-medium">fricción operativa</span> y <span className="text-white font-medium">potencial de escalabilidad</span>.
                        </p>
                     </div>
                  </div>

                  {/* Right: Technical Animation */}
                  <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
                     <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-[1.5s] delay-500 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                        {/* Scanning Line */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6C5CE7]/10 to-transparent w-full h-[2px] animate-[scan_3s_ease-in-out_infinite]"></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-32 h-32 bg-[#0A0A0A] rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_rgba(108,92,231,0.1)]">
                              <ScanLine size={40} className="text-[#6C5CE7] animate-pulse" strokeWidth={1} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Scroll Indicator */}
               <div className={`absolute bottom-12 left-6 flex flex-col gap-2 transition-opacity duration-1000 delay-[1200ms] ${mounted ? 'opacity-50' : 'opacity-0'}`}>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest writing-mode-vertical">Desplazar</span>
                  <div className="h-12 w-[1px] bg-gradient-to-b from-[#6C5CE7] to-transparent"></div>
               </div>
            </div>
         </section>

         {/* START OF STICKY / SCROLL SECTION */}
         <div className="relative z-10 bg-white text-black">

            {/* ==================================================================================== */}
            {/* 1. DEFINICIÓN (Blueprint) - Sticky Header */}
            {/* ==================================================================================== */}
            <section ref={sec1Ref} className="sticky top-0 min-h-screen bg-[#F5F5F7] border-b border-black/10 flex items-center overflow-hidden z-0">
               {/* Blueprint Grid */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

               <div className="max-w-[1600px] mx-auto w-full px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start h-full">

                     {/* Left: Sticky Context */}
                     <div className="lg:col-span-5 pt-12 lg:pt-0">
                        <div className={`transition-all duration-1000 ${sec1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                           <div className="flex items-center gap-4 mb-8">
                              <span className="font-space-grotesk text-[#6C5CE7] font-bold">01.</span>
                              <div className="h-[1px] w-12 bg-black/20"></div>
                              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">DEFINICIÓN</span>
                           </div>

                           <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[0.9] mb-12 text-black tracking-tight">
                              Entender antes <br /> de intervenir.
                           </h2>

                           <div className="relative p-8 border border-black/10 bg-white/50 backdrop-blur-sm shadow-sm">
                              {/* Corner Marks */}
                              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black"></div>
                              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black"></div>
                              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black"></div>
                              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black"></div>

                              <p className="font-jakarta text-lg text-gray-700 leading-relaxed">
                                 El diagnóstico es el plano inicial. Sirve para identificar la <strong className="text-black">madurez</strong> del sistema, los <strong className="text-black">puntos de fricción</strong> y la <strong className="text-black">ruta crítica</strong> de intervención.
                              </p>
                           </div>
                        </div>
                     </div>

                     {/* Right: The List (Staggered) */}
                     <div className="lg:col-span-7 flex flex-col gap-6 pb-24 lg:pb-0">
                        {[
                           { i: Binary, t: "Nivel de Madurez", d: "¿El negocio opera con sistemas reales o depende de la memoria y el esfuerzo heroico de personas clave?" },
                           { i: Activity, t: "Puntos de Fricción", d: "¿Dónde se pierden clientes? ¿Dónde se rompe la comunicación? ¿Dónde se pierde dinero por desorden?" },
                           { i: Layers, t: "Arquitectura Necesaria", d: "¿Qué tipo de sistema necesita el negocio HOY (Orden, Operación o Crecimiento) para avanzar al siguiente nivel?" }
                        ].map((item, idx) => (
                           <div key={idx} className={`bg-white p-12 border border-black/5 shadow-xl transition-all duration-1000 hover:border-[#6C5CE7]/30 group relative overflow-hidden ${sec1Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`} style={{ transitionDelay: `${200 + (idx * 200)}ms` }}>
                              <div className="absolute top-0 left-0 w-[2px] h-full bg-[#6C5CE7] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                              <div className="flex items-start justify-between mb-6">
                                 <item.i className="text-gray-400 group-hover:text-[#6C5CE7] transition-colors" size={32} />
                                 <span className="font-mono text-xs text-gray-300">OBJ_0{idx + 1}</span>
                              </div>
                              <h3 className="font-space-grotesk font-bold text-3xl mb-4 text-black group-hover:text-[#6C5CE7] transition-colors">{item.t}</h3>
                              <p className="font-jakarta text-gray-600 leading-relaxed text-lg">
                                 {item.d}
                              </p>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </section>

            {/* ==================================================================================== */}
            {/* 2. LA TRAMPA DEL CRECIMIENTO (Formerly Entropía) - Sticky Layer Overlap */}
            {/* ==================================================================================== */}
            <section ref={sec2Ref} className="sticky top-0 min-h-screen bg-white border-b border-black/10 flex items-center z-10 overflow-hidden shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
               <div className="max-w-[1600px] mx-auto w-full px-6">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 h-full items-center">

                     {/* Left: The Logic */}
                     <div className="lg:col-span-5">
                        <div className={`transition-all duration-1000 ${sec2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                           <div className="flex items-center gap-4 mb-8">
                              <span className="font-space-grotesk text-[#6C5CE7] font-bold">02.</span>
                              <div className="h-[1px] w-12 bg-black/20"></div>
                              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">CAUSA RAÍZ</span>
                           </div>
                           <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl text-black leading-[0.9] mb-8">
                              La Trampa del <br /><span className="text-[#6C5CE7]">Crecimiento.</span>
                           </h2>
                           <div className="space-y-6">
                              <p className="font-jakarta text-xl text-gray-500 leading-relaxed">
                                 Más ventas no siempre significan más control. A veces, significan más caos.
                              </p>
                              <div className="bg-gray-50 p-6 border-l-[3px] border-[#6C5CE7]">
                                 <p className="font-space-grotesk font-bold text-lg text-black">
                                    "El negocio crece más rápido de lo que el sistema puede soportar."
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Right: Visual Decay Steps */}
                     <div className="lg:col-span-7">
                        <div className="relative">
                           {/* Connecting Line */}
                           <div className={`absolute left-[28px] top-8 bottom-8 w-[2px] bg-gray-100 transition-all duration-[1.5s] ease-in-out ${sec2Visible ? 'scale-y-100' : 'scale-y-0 origin-top'}`}></div>

                           <div className="space-y-12">
                              {[
                                 { title: "Expansión sin Estructura", desc: "Vendes más, contratas más, pero los procesos siguen siendo manuales y orales.", icon: Box },
                                 { title: "El Punto de Quiebre", desc: "La complejidad supera tu capacidad de supervisión. Empiezan los errores y las quejas.", icon: GitPullRequest },
                                 { title: "El Dueño Operativo", desc: "Para compensar el caos, el fundador tiene que volver a operar, convirtiéndose en el cuello de botella.", icon: UserX }
                              ].map((item, idx) => (
                                 <div key={idx} className={`relative flex gap-8 transition-all duration-1000 ${sec2Visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: `${200 + (idx * 200)}ms` }}>
                                    <div className="flex-shrink-0 w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center relative z-10 shadow-sm group-hover:border-[#6C5CE7] transition-colors">
                                       <item.icon size={24} className="text-gray-400" />
                                    </div>
                                    <div className="pt-2">
                                       <h3 className="font-space-grotesk font-bold text-2xl text-black mb-2">{item.title}</h3>
                                       <p className="font-jakarta text-lg text-gray-500 leading-relaxed max-w-xl">{item.desc}</p>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </div>
         {/* END OF STICKY SECTION */}

         {/* ==================================================================================== */}
         {/* 3. PATRONES (Dark Mode - Radar/Scanner) - Overlaps the White Sections */}
         {/* ==================================================================================== */}
         <section ref={sec3Ref} className="relative w-full bg-[#050505] text-white py-32 px-6 overflow-hidden z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
            {/* Radar Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
               <div className="w-[800px] h-[800px] border border-[#6C5CE7] rounded-full animate-[ping_10s_linear_infinite]"></div>
               <div className="w-[600px] h-[600px] border border-[#6C5CE7] rounded-full animate-[ping_10s_linear_infinite_2s]"></div>
            </div>

            <div className="max-w-[1600px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

               <div className={`transition-all duration-1000 ${sec3Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">03.</span>
                     <div className="h-[1px] w-12 bg-white/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">VISIÓN SISTÉMICA</span>
                  </div>

                  <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[0.9] mb-8 text-white">
                     Patrones, no <br /> problemas.
                  </h2>

                  <div className="space-y-8 border-l border-white/10 pl-8">
                     <p className="font-jakarta text-xl text-gray-400 leading-relaxed">
                        Lo que parece un problema aislado (un cliente enojado, un error de envío) suele ser el síntoma de un patrón roto en el sistema.
                     </p>
                     <p className="font-space-grotesk text-2xl text-white font-medium">
                        "Donde hay repetición, hay un sistema mal diseñado."
                     </p>
                  </div>
               </div>

               {/* Radar Visual - PURPLE ACCENTS ONLY */}
               <div className={`relative bg-[#0F0F0F] border border-white/10 p-2 rounded-full w-full aspect-square max-w-[500px] mx-auto transition-all duration-1000 delay-300 ${sec3Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute inset-0 rounded-full border border-white/5"></div>
                  <div className="absolute inset-[25%] rounded-full border border-white/5"></div>
                  <div className="absolute inset-[50%] rounded-full border border-white/5"></div>
                  <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white/5 -translate-x-1/2"></div>
                  <div className="absolute top-1/2 left-1/2 h-full w-[1px] bg-white/5 -translate-y-1/2"></div>

                  {/* Blips - PURPLE */}
                  <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse shadow-[0_0_10px_#6C5CE7]"></div>
                  <div className="absolute top-[70%] left-[40%] w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse shadow-[0_0_10px_#6C5CE7] delay-700"></div>
                  <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse shadow-[0_0_10px_#6C5CE7] delay-500"></div>

                  {/* Scanning Line */}
                  <div className="absolute top-1/2 left-1/2 w-[50%] h-[2px] bg-gradient-to-r from-[#6C5CE7] to-transparent origin-left animate-[spin_4s_linear_infinite]"></div>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[#6C5CE7] bg-[#0A0A0A] px-2 py-1 border border-[#6C5CE7]/30">
                     ANÁLISIS DE PATRONES
                  </div>
               </div>

            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 4. RIESGOS (Technical Logs / Kernel Panic Style) */}
         {/* ==================================================================================== */}
         <section ref={sec4Ref} className="relative w-full bg-[#F5F5F7] text-black py-32 px-6 z-30">
            <div className="max-w-[1400px] mx-auto text-center">

               <div className={`mb-16 transition-all duration-1000 ${sec4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

                  {/* Tag */}
                  <div className="flex items-center justify-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">04.</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">RIESGOS CRÍTICOS</span>
                  </div>

                  <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-black leading-tight mb-8">
                     Intervenir sin diagnóstico <br /> <span className="text-transparent stroke-black" style={{ WebkitTextStroke: '1px black' }}>empeora el problema.</span>
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                     { t: "01", sub: "Complejidad Exponencial", d: "Más herramientas sin proceso aumentan el ruido, no la eficiencia." },
                     { t: "02", sub: "Dependencia Crítica", d: "El negocio se vuelve rehén de quien lo opera manualmente." },
                     { t: "03", sub: "Desgaste de Recursos", d: "Se quema tiempo y dinero en soluciones 'parche' que no escalan." }
                  ].map((item, idx) => (
                     <div key={idx} className={`bg-white border-l-4 border-gray-300 p-8 text-left hover:border-[#6C5CE7] transition-all duration-500 group shadow-sm ${sec4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 + (idx * 100)}ms` }}>
                        <div className="flex items-center gap-2 mb-4 text-gray-400 group-hover:text-[#6C5CE7] transition-colors">
                           <AlertOctagon size={16} />
                           <span className="font-mono text-xs uppercase tracking-widest">Alerta de Riesgo</span>
                        </div>
                        <h3 className="text-sm font-bold text-black mb-1 group-hover:text-[#6C5CE7] transition-colors font-space-grotesk text-2xl">{item.t}</h3>
                        <h4 className="font-space-grotesk font-bold text-xl text-black mb-4">{item.sub}</h4>
                        <p className="font-jakarta text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 group-hover:border-[#6C5CE7]/20 transition-colors">
                           {item.d}
                        </p>
                     </div>
                  ))}
               </div>

               <div className="mt-16 inline-flex items-center gap-2 px-4 py-2 bg-[#E1E1E6] rounded-sm font-mono text-xs text-gray-600">
                  <ShieldAlert size={12} />
                  <span>RIESGO: ALTO</span>
               </div>

            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 5. QUÉ EVALÚA (Technical Blueprint Grid) */}
         {/* ==================================================================================== */}
         <section ref={sec5Ref} className="relative w-full bg-[#050505] text-white py-32 px-6 overflow-hidden z-30">
            {/* Blueprint Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="max-w-[1600px] mx-auto relative z-10">
               <div className={`flex flex-col md:flex-row justify-between items-end mb-24 transition-all duration-1000 ${sec5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div>
                     <div className="flex items-center gap-4 mb-6">
                        <span className="font-space-grotesk text-[#6C5CE7] font-bold">05.</span>
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">ALCANCE TÉCNICO</span>
                     </div>
                     <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[0.9]">
                        Qué evalúa el diagnóstico.
                     </h2>
                  </div>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                  {/* Level 1: System */}
                  <div className={`bg-[#0A0A0A] border border-white/10 p-10 relative group hover:border-[#6C5CE7]/50 transition-colors duration-500 ${sec5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute top-4 right-4 text-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Binary size={20} />
                     </div>
                     <h3 className="font-space-grotesk font-bold text-3xl mb-2 text-white relative z-10">01. Sistema</h3>
                     <div className="w-full h-[1px] bg-white/10 mb-6 relative z-10"></div>
                     <ul className="space-y-4 font-jakarta text-gray-400 relative z-10">
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Orden</span> <span className="text-gray-600">Claridad</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Operación</span> <span className="text-gray-600">Consistencia</span></li>
                        <li className="flex justify-between border-b border-white/5 pb-2"><span>Crecimiento</span> <span className="text-gray-600">Escala</span></li>
                     </ul>
                  </div>

                  {/* Level 2: Phases */}
                  <div className={`bg-[#0A0A0A] border border-white/10 p-10 relative group hover:border-[#6C5CE7]/50 transition-colors duration-500 delay-200 ${sec5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute top-4 right-4 text-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity">
                        <GitCommit size={20} />
                     </div>
                     <h3 className="font-space-grotesk font-bold text-3xl mb-2 text-white relative z-10">02. Fases</h3>
                     <div className="w-full h-[1px] bg-white/10 mb-6 relative z-10"></div>
                     <div className="space-y-2 relative z-10">
                        {["Atracción", "Incorporación", "Entrega", "Relación", "Latencia"].map((item, i) => (
                           <div key={i} className="flex items-center gap-3">
                              <div className="w-1 h-1 bg-[#6C5CE7] rounded-full"></div>
                              <span className="font-jakarta text-gray-400">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Level 3: Structure */}
                  <div className={`bg-[#0A0A0A] border border-white/10 p-10 relative group hover:border-[#6C5CE7]/50 transition-colors duration-500 delay-400 ${sec5Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                     <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     <div className="absolute top-4 right-4 text-[#6C5CE7] opacity-0 group-hover:opacity-100 transition-opacity">
                        <Layers size={20} />
                     </div>
                     <h3 className="font-space-grotesk font-bold text-3xl mb-2 text-white relative z-10">03. Estructura</h3>
                     <div className="w-full h-[1px] bg-white/10 mb-6 relative z-10"></div>
                     <div className="flex flex-wrap gap-2 relative z-10">
                        {["Datos", "Comunicación", "Procesos", "Decisiones", "Equipo"].map((tag, i) => (
                           <span key={i} className="px-3 py-1 border border-white/20 bg-white/5 text-xs font-mono text-gray-300">
                              {tag.toUpperCase()}
                           </span>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 6. CUÁNDO TIENE SENTIDO (Split Logic Gate) */}
         {/* ==================================================================================== */}
         <section ref={sec6Ref} className="relative w-full bg-white text-black border-b border-black/10 z-30">
            <div className="grid grid-cols-1 lg:grid-cols-2">

               {/* Positive */}
               <div className={`p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-black/10 transition-all duration-1000 group hover:bg-[#F5F5F7] ${sec6Visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="font-space-grotesk text-[#6C5CE7] font-bold">06.</span>
                     <div className="h-[1px] w-12 bg-black/20"></div>
                     <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">CRITERIO</span>
                  </div>

                  <div className="flex items-center gap-4 mb-8">
                     <CheckCircle2 className="text-[#6C5CE7]" size={32} />
                     <h3 className="font-space-grotesk font-bold text-3xl">Tiene sentido cuando:</h3>
                  </div>
                  <ul className="space-y-6">
                     {[
                        "El negocio ya está operando y generando ingresos.",
                        "La operación empieza a sentirse pesada o caótica.",
                        "Existe apertura a reestructurar la forma de trabajo.",
                        "Se busca construir un activo a largo plazo."
                     ].map((t, i) => (
                        <li key={i} className="flex gap-4 items-start">
                           <div className="w-1.5 h-1.5 bg-[#6C5CE7] mt-2.5 rounded-full"></div>
                           <span className="font-jakarta text-xl text-gray-700">{t}</span>
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Negative - Dimmed initially, clearer on hover */}
               <div className={`p-16 lg:p-24 bg-gray-50 transition-all duration-500 opacity-60 hover:opacity-100 ${sec6Visible ? 'translate-x-0' : 'translate-x-8'}`}>
                  <div className="flex items-center gap-4 mb-8 opacity-0">
                     <span className="font-space-grotesk font-bold">00.</span>
                  </div>
                  <div className="flex items-center gap-4 mb-8">
                     <Ban className="text-gray-400" size={32} />
                     <h3 className="font-space-grotesk font-bold text-3xl text-gray-500">No tiene sentido cuando:</h3>
                  </div>
                  <ul className="space-y-6">
                     {[
                        "El negocio es solo una idea sin validación.",
                        "Se busca una 'solución mágica' rápida.",
                        "No hay disposición a invertir tiempo en orden.",
                        "Se buscan servicios aislados (solo web, solo ads)."
                     ].map((t, i) => (
                        <li key={i} className="flex gap-4 items-start">
                           <div className="w-1.5 h-1.5 bg-gray-300 mt-2.5 rounded-full"></div>
                           <span className="font-jakarta text-xl text-gray-400">{t}</span>
                        </li>
                     ))}
                  </ul>
               </div>

            </div>
         </section>

         {/* ==================================================================================== */}
         {/* 7. PASO SIGUIENTE (Interactive Terminal Engine) */}
         {/* ==================================================================================== */}
         <section ref={sec7Ref} id="evaluation-engine" className="relative w-full bg-[#050505] py-32 px-6 border-t border-white/10 min-h-screen flex flex-col justify-center z-30">

            <div className="flex items-center justify-center gap-4 mb-12 opacity-50">
               <span className="font-space-grotesk text-[#6C5CE7] font-bold">07.</span>
               <div className="h-[1px] w-12 bg-white/20"></div>
               <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-[#6C5CE7]">INICIO</span>
            </div>

            {/* Background Terminal Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

            <div className="max-w-[1200px] mx-auto w-full relative z-10">

               {/* INTRO MODE */}
               {!formStarted ? (
                  <div className={`flex flex-col items-center text-center transition-all duration-1000 ${sec7Visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                     <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center border border-white/10 mb-8 animate-pulse-slow">
                        <LayoutDashboard size={32} className="text-[#6C5CE7]" />
                     </div>

                     <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl text-white mb-6">
                        Iniciar Evaluación.
                     </h2>
                     <p className="font-jakarta text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                        Esta herramienta ejecuta un diagnóstico preliminar basado en tus inputs. No es un formulario de contacto estándar; es el primer paso de ingeniería.
                     </p>

                     <button
                        onClick={() => setFormStarted(true)}
                        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black overflow-hidden hover:bg-[#6C5CE7] hover:text-white transition-colors duration-300"
                     >
                        <span className="font-space-grotesk font-bold text-xl uppercase tracking-widest relative z-10">Ejecutar Diagnóstico</span>
                        <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                     </button>

                  </div>
               ) : (
                  /* FORM MODE (CLI STYLE) */
                  <div className="w-full max-w-3xl mx-auto bg-[#0A0A0A] border border-white/10 p-6 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-700 animate-in fade-in zoom-in-95">

                     {/* Decorative Scan Line */}
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-[#6C5CE7] animate-[scan_2s_linear_infinite] shadow-[0_0_15px_rgba(108,92,231,0.5)]"></div>

                     {/* Header */}
                     <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2 text-gray-400">
                           <span className="font-space-grotesk font-bold text-white">AXOCIA | Diagnóstico</span>
                        </div>
                        <div className="flex gap-1">
                           <div className="w-3 h-3 rounded-full bg-white/10"></div>
                           <div className="w-3 h-3 rounded-full bg-white/10"></div>
                        </div>
                     </div>

                     {/* STEP 0: CONTACT (CLI INPUTS) */}
                     {formStep === 0 && (
                        <div className="space-y-8 animate-in slide-in-from-bottom-4 fade-in duration-500">
                           <h3 className="font-space-grotesk font-bold text-2xl text-white mb-6">Datos de Contacto</h3>

                           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {['name', 'email', 'phone', 'company', 'industry'].map((field) => (
                                 <div key={field} className="relative group">
                                    <label className="block font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-[#6C5CE7] transition-colors">
                                       {field === 'name' ? 'Nombre y Apellido' : field === 'email' ? 'Correo Electrónico' : field === 'phone' ? 'Teléfono' : field === 'company' ? 'Nombre de la Empresa' : 'Sector o Industria'}
                                    </label>
                                    <input
                                       type={field === 'email' ? 'email' : 'text'}
                                       name={field}
                                       value={formData[field as keyof typeof formData] as string}
                                       onChange={handleInputChange}
                                       className="w-full bg-transparent border-b border-white/20 py-2 text-white font-space-grotesk text-xl focus:outline-none focus:border-[#6C5CE7] transition-colors placeholder-white/5"
                                       placeholder="Input..."
                                    />
                                 </div>
                              ))}
                           </div>

                           <div className="pt-8 flex justify-end">
                              <button
                                 onClick={submitContact}
                                 disabled={!formData.name || !formData.email}
                                 className="font-mono text-sm text-black bg-white px-6 py-3 hover:bg-[#6C5CE7] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                              >
                                 <span>CONFIRMAR DATOS</span>
                                 <ChevronRight size={14} />
                              </button>
                           </div>
                        </div>
                     )}

                     {/* QUESTIONS (CLI SELECTION) */}
                     {(formStep === 1 || formStep === 2 || formStep === 3) && getCurrentQuestion() && (
                        <div key={getCurrentQuestion().id} className="animate-in slide-in-from-bottom-4 fade-in duration-500">
                           <div className="font-mono text-[#6C5CE7] mb-6">BLOQUE: {getCurrentQuestion().id.toUpperCase()}</div>

                           <h3 className="font-space-grotesk font-bold text-2xl md:text-4xl text-white mb-12 leading-tight">
                              {getCurrentQuestion().question}
                           </h3>

                           <div className="space-y-4">
                              {getCurrentQuestion().options.map((option, idx) => (
                                 <button
                                    key={idx}
                                    onClick={() => handleOptionSelect(getCurrentQuestion().id, option)}
                                    className="w-full text-left p-4 border border-white/10 hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/10 transition-all duration-200 group flex items-center gap-4"
                                 >
                                    <span className="font-mono text-xs text-gray-500 group-hover:text-[#6C5CE7]">[{idx}]</span>
                                    <span className="font-jakarta text-lg text-gray-300 group-hover:text-white">{option}</span>
                                 </button>
                              ))}
                           </div>
                        </div>
                     )}

                     {/* PROCESSING (TERMINAL LOGS) */}
                     {formStep === 4 && (
                        <div className="font-mono text-sm text-gray-400 space-y-2 h-[300px] overflow-y-auto p-4 bg-black/50 border border-white/5">
                           {processingLog.map((log, idx) => (
                              <p key={idx} className="animate-in slide-in-from-left-2 fade-in">
                                 {log}
                              </p>
                           ))}
                           <div className="w-2 h-4 bg-white animate-pulse inline-block"></div>
                        </div>
                     )}

                     {/* SUCCESS */}
                     {formStep === 5 && (
                        <div className="text-center py-16 animate-in fade-in zoom-in-95 duration-700 max-w-2xl mx-auto border border-white/10 bg-white/5 backdrop-blur-sm p-12">
                           <div className="flex items-center justify-center gap-4 mb-8">
                              <div className="w-2 h-2 bg-[#6C5CE7] rounded-full animate-pulse"></div>
                              <span className="font-mono text-xs tracking-[0.3em] text-[#6C5CE7] uppercase">Sistema Actualizado</span>
                           </div>

                           <h3 className="font-space-grotesk font-bold text-5xl md:text-6xl text-white mb-8 tracking-tight">
                              Reporte Enviado.
                           </h3>

                           <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8"></div>

                           <p className="font-jakarta text-lg text-gray-400 leading-relaxed mb-12">
                              Hemos recibido tus datos de estructura. Un consultor sénior de <span className="text-white">AXOCIA</span> analizará tu diagnóstico y te contactará a <span className="text-white border-b border-white/20">{formData.email}</span> en las próximas 24 horas hábiles.
                           </p>

                           <button
                              onClick={() => window.location.href = '/'}
                              className="group flex items-center gap-2 mx-auto font-mono text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                           >
                              <span>[ Retornar al Sistema ]</span>
                              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                           </button>
                        </div>
                     )}

                  </div>
               )}

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