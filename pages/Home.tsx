import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, CheckCircle2, MapPin, Mail, Phone, Linkedin, Instagram, Facebook, Monitor, Server, Shield, Zap, Database, Globe, Layers, Cpu,
  XCircle, Settings, BarChart3, Check, AlertCircle
} from 'lucide-react';
import { Link } from '../src/lib/router';
import { TextReveal } from '../components/TextReveal';
import { SEO } from '../components/SEO';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Scroll visibility states
  const [section2Visible, setSection2Visible] = useState(false);
  const [section3Visible, setSection3Visible] = useState(false);
  const [section4Visible, setSection4Visible] = useState(false);
  const [sectionProfileVisible, setSectionProfileVisible] = useState(false);
  const [sectionContinuityVisible, setSectionContinuityVisible] = useState(false);
  const [sectionDistinctionVisible, setSectionDistinctionVisible] = useState(false);
  const [sectionContextVisible, setSectionContextVisible] = useState(false);
  const [sectionFooterVisible, setSectionFooterVisible] = useState(false);

  // Refs
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const sectionProfileRef = useRef(null);
  const sectionContinuityRef = useRef(null);
  const sectionDistinctionRef = useRef(null);
  const sectionContextRef = useRef(null);
  const sectionFooterRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'problem' && entry.isIntersecting) setSection2Visible(true);
          if (entry.target.id === 'system-view' && entry.isIntersecting) setSection3Visible(true);
          if (entry.target.id === 'methodology' && entry.isIntersecting) setSection4Visible(true);
          if (entry.target.id === 'profile' && entry.isIntersecting) setSectionProfileVisible(true);
          if (entry.target.id === 'continuity' && entry.isIntersecting) setSectionContinuityVisible(true);
          if (entry.target.id === 'distinction' && entry.isIntersecting) setSectionDistinctionVisible(true);
          if (entry.target.id === 'context' && entry.isIntersecting) setSectionContextVisible(true);
          if (entry.target.id === 'footer-cta' && entry.isIntersecting) setSectionFooterVisible(true);
        });
      },
      { threshold: 0.15 }
    );

    const refs = [
      section2Ref, section3Ref, section4Ref, sectionProfileRef,
      sectionContinuityRef, sectionDistinctionRef, sectionContextRef, sectionFooterRef
    ];

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <SEO
        title="Inicio"
        description="Infraestructura Digital de Negocio. Diseñamos sistemas que ordenan, operan y sostienen empresas en el día a día. Ingeniería de Resultados."
      />

      {/* 1. HERO */}
      <section className="relative z-10 h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center bg-white">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale opacity-90 contrast-110"
            src="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d2530d403b74e07f487f8.mp4"
          />
          <div className="absolute inset-0 bg-white/30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center p-4">
          <TextReveal visible={mounted} className="mb-6">
            <h1 className="font-space-grotesk text-black leading-none select-none relative drop-shadow-sm">
              <span className="font-bold text-[13vw] md:text-[9rem] tracking-tight">AXO</span>
              <span className="font-light text-[13vw] md:text-[9rem] tracking-tight ml-[-0.04em]">CIA</span>
              <span className="text-warm-purple text-[13vw] md:text-[9rem] font-bold">.</span>
            </h1>
          </TextReveal>

          <div className={`transform transition-all duration-1000 delay-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${mounted ? 'translate-y-0 opacity-60' : 'translate-y-8 opacity-0'}`}>
            <div className="w-12 h-[1px] bg-black mb-8 mx-auto"></div>
          </div>

          <TextReveal visible={mounted} delay="500ms" className="mb-6">
            <p className="font-jakarta font-semibold text-[10px] md:text-sm tracking-[0.5em] uppercase text-black">
              Infraestructura Digital de Negocio
            </p>
          </TextReveal>

          <TextReveal visible={mounted} delay="700ms">
            <p className="font-jakarta font-normal text-xs md:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed px-4">
              Diseñamos sistemas que ordenan, operan y sostienen empresas en el día a día.
            </p>
          </TextReveal>

          <div className={`absolute bottom-8 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1200ms] ${mounted ? 'opacity-40' : 'opacity-0'}`}>
            <div className="w-[1px] bg-black h-12 origin-top animate-[grow_2s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* 2. EL PROBLEMA REAL (Sticky) */}
      <section
        id="problem"
        ref={section2Ref}
        className="sticky top-0 z-0 min-h-screen w-full bg-onyx-black text-white py-32 px-6 md:px-16 flex flex-col justify-center overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-purple rounded-full blur-[150px] opacity-[0.08] pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className={`mb-16 md:mb-24 max-w-sm transition-all duration-1000 ease-out ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-space-grotesk text-warm-purple font-bold">01.</span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">REALIDAD</span>
            </div>
            <p className="font-jakarta text-gray-400 text-sm md:text-base leading-relaxed">
              La mayoría de los negocios no fallan por falta de clientes.
            </p>
          </div>

          <div className="relative z-10 max-w-6xl">
            <TextReveal visible={section2Visible} delay="200ms">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-white">
                Fallan porque su <span className="text-warm-purple opacity-90">estructura</span> no
              </h2>
            </TextReveal>
            <TextReveal visible={section2Visible} delay="300ms">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-white">
                evoluciona al ritmo de su
              </h2>
            </TextReveal>
            <TextReveal visible={section2Visible} delay="400ms">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-warm-purple opacity-90">
                complejidad.
              </h2>
            </TextReveal>
          </div>

          <div className={`mt-16 md:mt-24 flex justify-end transition-all duration-1000 delay-400 ease-out ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="max-w-md md:border-l border-white/20 md:pl-8">
              <p className="font-jakarta text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                Cuando el sistema no existe, la operación se sostiene únicamente con <span className="text-white font-medium">urgencia</span> y <span className="text-white font-medium">dependencia</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LECTURA DEL NEGOCIO (Card Stack) */}
      <section
        id="system-view"
        ref={section3Ref}
        className="relative z-20 w-full flex justify-center -mt-[35vh] pointer-events-none"
      >
        <div className="w-[95%] md:w-[96%] bg-white rounded-t-none md:rounded-t-sm shadow-2xl pointer-events-auto border-t border-black">
          <div className="relative">

            {/* Layer 1: Negation */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center z-10">
              <div className="max-w-5xl w-full px-6 md:px-16 flex flex-col gap-12">
                <div className="flex items-center gap-4">
                  <span className="font-space-grotesk text-warm-purple font-bold">02.</span>
                  <div className="h-[1px] w-12 bg-gray-200"></div>
                  <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">PERSPECTIVA</span>
                </div>

                <div className="relative pl-12 py-4">
                  <div className="absolute left-0 top-8 bottom-0 w-[1px] bg-gray-200"></div>
                  <div className="absolute left-0 top-1 -translate-x-1/2 bg-white z-0">
                    <XCircle className="text-gray-300" size={24} />
                  </div>
                  <h3 className="font-space-grotesk text-3xl md:text-5xl lg:text-6xl text-gray-300 font-light leading-tight max-w-4xl">
                    No vemos el negocio como áreas separadas ni como herramientas sueltas.
                  </h3>
                </div>
              </div>
            </div>

            {/* Layer 2: Affirmation */}
            <div className="relative z-20 h-screen w-full flex flex-col justify-center items-center bg-transparent pointer-events-none">
              <div className="max-w-5xl w-full px-6 md:px-16 flex flex-col gap-12">
                {/* Spacer matching above to align perfectly */}
                <div className="flex items-center gap-4 opacity-0">
                  <span className="font-space-grotesk text-gray-300 font-bold">02.</span>
                  <div className="h-[1px] w-12 bg-gray-200"></div>
                  <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">PERSPECTIVA</span>
                </div>

                <div className="relative pl-12 py-4">
                  <div className="absolute left-0 top-8 bottom-0 w-[2px] bg-warm-purple"></div>
                  <div className="absolute left-0 top-1 -translate-x-1/2 z-20">
                    <CheckCircle2 className="text-warm-purple bg-white rounded-full" size={24} />
                  </div>
                  <div className="relative bg-white z-10 pr-4 -ml-1 pl-1">
                    <TextReveal visible={section3Visible} delay="200ms">
                      <h3 className="font-space-grotesk text-3xl md:text-5xl lg:text-6xl text-black font-bold leading-tight max-w-4xl">
                        Lo vemos como un <span className="text-warm-purple">sistema vivo</span> que necesita orden para poder operar y sostenerse.
                      </h3>
                    </TextReveal>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA */}
      <section
        id="methodology"
        ref={section4Ref}
        className="relative w-full bg-white text-black py-20 md:py-32 px-6"
      >
        <div className="max-w-[1400px] mx-auto mb-24 md:mb-32">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-1000 ${section4Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="font-space-grotesk text-warm-purple font-bold">03.</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">EL MÉTODO</span>
          </div>

          <div className="max-w-6xl">
            <TextReveal visible={section4Visible} delay="200ms">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tighter">
                Construimos infraestructura
              </h2>
            </TextReveal>
            <TextReveal visible={section4Visible} delay="300ms">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-7xl lg:text-8xl text-white leading-[1.0] tracking-tighter">
                digital en tres fases críticas.
              </h2>
            </TextReveal>
          </div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-0 md:gap-0 pb-32">

          {/* Card 1 */}
          <div className="sticky top-24 md:top-32 w-full bg-mercury-gray border-b border-black rounded-none p-8 md:p-12 shadow-2xl overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <span className="font-space-grotesk font-bold text-6xl md:text-7xl text-gray-200 group-hover:text-warm-purple/20 transition-colors">01</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Layers size={20} className="text-warm-purple" />
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-4xl text-black">ORDEN</h3>
                </div>
                <p className="font-jakarta text-lg md:text-xl text-black font-medium mb-4">Entender qué está pasando en el negocio.</p>
                <p className="font-jakarta text-gray-600 leading-relaxed max-w-lg">Centralizar información, clarificar procesos y ver la realidad sin ruido.</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky top-32 md:top-40 w-full bg-slate-divider border-b border-black rounded-none p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <span className="font-space-grotesk font-bold text-6xl md:text-7xl text-gray-300 group-hover:text-warm-purple/20 transition-colors">02</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Settings size={20} className="text-warm-purple" />
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-4xl text-black">OPERACIÓN</h3>
                </div>
                <p className="font-jakarta text-lg md:text-xl text-black font-medium mb-4">Hacer que el negocio funcione de forma consistente.</p>
                <p className="font-jakarta text-gray-600 leading-relaxed max-w-lg">Reducir dependencia humana y convertir claridad en ejecución diaria.</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky top-40 md:top-48 w-full bg-white rounded-none p-8 md:p-12 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden group">
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <span className="font-space-grotesk font-bold text-6xl md:text-7xl text-gray-200 group-hover:text-warm-purple/20 transition-colors">03</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <BarChart3 size={20} className="text-warm-purple" />
                  <h3 className="font-space-grotesk font-bold text-2xl md:text-4xl text-black">CRECIMIENTO</h3>
                </div>
                <p className="font-jakarta text-lg md:text-xl text-black font-medium mb-4">Aumentar sin romper el sistema.</p>
                <p className="font-jakarta text-gray-600 leading-relaxed max-w-lg">Escalar solo cuando la estructura puede sostenerlo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PERFIL (Sticky) */}
      <section id="profile" ref={sectionProfileRef} className="sticky top-0 z-0 w-full bg-mercury-gray py-32 px-6 md:px-12 flex justify-center text-black min-h-screen items-center">
        <div className={`max-w-[1400px] w-full border-t border-black/10 transition-all duration-1000 ${sectionProfileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          <div className="flex flex-col gap-8 mb-12 border-b border-black/10 pb-8">
            <div className="flex items-center gap-4">
              <span className="font-space-grotesk text-warm-purple font-bold">04.</span>
              <div className="h-[1px] w-12 bg-black/20"></div>
              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">PERFIL</span>
            </div>
            <TextReveal visible={sectionProfileVisible}>
              <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl leading-tight">A quién atendemos.</h2>
            </TextReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Col 1 */}
            <div className="border-b lg:border-b-0 lg:border-r border-black/10 py-12 lg:pr-12 flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warm-purple rounded-full"></div>
                <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple font-bold">Compatible</span>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Check className="text-warm-purple mt-1 flex-shrink-0" size={20} />
                  <p className="font-space-grotesk text-2xl md:text-3xl font-medium leading-tight">Trabajamos con empresas que ya están operando.</p>
                </div>
                <div className="pl-9 space-y-4">
                  <p className="font-jakarta text-gray-600 text-lg leading-relaxed">Negocios que ya venden, tienen clientes y una operación activa.</p>
                  <p className="font-jakarta text-gray-600 text-lg leading-relaxed">Empresas que necesitan orden, control y continuidad para sostener lo que ya existe.</p>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div className="py-12 lg:pl-12 flex flex-col gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">No Compatible</span>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <AlertCircle className="text-gray-400 mt-1 flex-shrink-0" size={20} />
                  <p className="font-space-grotesk text-2xl md:text-3xl font-medium text-gray-500 leading-tight">No intervenimos en fase conceptual.</p>
                </div>
                <div className="pl-9">
                  <p className="font-jakarta text-gray-500 text-lg leading-relaxed">No trabajamos con negocios que aún no están operando ni con iniciativas sin una operación real.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-black/10 py-6 flex justify-between items-center mt-12">
            <span className="font-jakarta text-xs text-gray-400">System Requirement Specification</span>
            <span className="font-jakarta text-xs text-gray-400">V. 2026.1</span>
          </div>

        </div>
      </section>

      {/* 6. CONTINUIDAD */}
      <section id="continuity" ref={sectionContinuityRef} className="relative z-30 w-full flex justify-center -mt-[20vh] pointer-events-none">
        <div className={`w-[95%] md:w-[96%] bg-onyx-black rounded-sm p-8 md:p-16 text-white shadow-2xl flex flex-col md:flex-row gap-16 md:gap-24 items-center overflow-hidden pointer-events-auto transition-all duration-1000 ${sectionContinuityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="w-full md:w-5/12 h-[500px] md:h-[700px] relative overflow-hidden rounded-sm group cursor-none md:cursor-default animate-float">
            <div className="absolute inset-0 bg-warm-purple/20 z-10 mix-blend-overlay transition-opacity duration-700 ease-in-out group-hover:opacity-0"></div>
            <img
              src="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d6d6bb34b64bb9198b120.png"
              alt="Abstract Tech"
              className="w-full h-full object-cover grayscale brightness-90 contrast-125 transform scale-110 group-hover:scale-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
            />
            <div className="absolute inset-0 border border-white/10 rounded-sm z-20 transition-all duration-500 group-hover:border-warm-purple/50 group-hover:inset-4"></div>
          </div>

          <div className="w-full md:w-7/12 flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <span className="font-space-grotesk text-warm-purple font-bold">05.</span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">EVOLUCIÓN</span>
            </div>
            <TextReveal visible={sectionContinuityVisible}>
              <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl leading-[1.1] text-white">Infraestructura viva.</h2>
            </TextReveal>
            <div className="space-y-8">
              <p className="font-jakarta text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-xl">
                Trabajamos a partir de diagnóstico. Diseñamos el sistema, lo implementamos y lo acompañamos en el tiempo.
              </p>
              <div className="h-[1px] w-full bg-white/10"></div>
              <div className="flex flex-col gap-2">
                <p className="font-space-grotesk text-2xl text-white font-medium">No entregamos proyectos cerrados.</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-purple opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-purple"></span>
                  </span>
                  <p className="font-jakarta text-gray-400 text-sm md:text-base">La infraestructura es un sistema vivo que se ajusta y evoluciona.</p>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <button className="group flex items-center gap-4 text-white hover:text-warm-purple transition-colors">
                <span className="font-space-grotesk font-bold text-xl border-b border-white/30 group-hover:border-warm-purple pb-1">Solicitar Diagnóstico</span>
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="w-full bg-white h-32 md:h-48 relative z-10"></div>

      {/* 7. DISTINCION */}
      <section id="distinction" ref={sectionDistinctionRef} className="relative w-full bg-onyx-black py-32 overflow-hidden flex flex-col justify-center min-h-[80vh]">
        <div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-10 pointer-events-none select-none">
          <div className="whitespace-nowrap animate-marquee">
            <span className="font-space-grotesk text-[10vw] font-bold text-white mx-8">AGENCIA</span>
            <span className="font-space-grotesk text-[10vw] font-bold text-white line-through decoration-warm-purple decoration-4 mx-8">AGENCIA</span>
            <span className="font-space-grotesk text-[10vw] font-bold text-transparent stroke-white mx-8" style={{ WebkitTextStroke: '2px white' }}>NO SERVICIOS</span>
          </div>
          <div className="whitespace-nowrap animate-marquee-reverse">
            <span className="font-space-grotesk text-[10vw] font-bold text-transparent stroke-white mx-8" style={{ WebkitTextStroke: '2px white' }}>INFRAESTRUCTURA</span>
            <span className="font-space-grotesk text-[10vw] font-bold text-white mx-8">SISTEMAS</span>
            <span className="font-space-grotesk text-[10vw] font-bold text-transparent stroke-white mx-8" style={{ WebkitTextStroke: '2px white' }}>ORDEN</span>
          </div>
        </div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${sectionDistinctionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="font-space-grotesk text-warm-purple font-bold">06.</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">DISTINCIÓN</span>
          </div>
          <div className="mb-8">
            <TextReveal visible={sectionDistinctionVisible} delay="200ms" className="flex justify-center">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-white leading-tight">No somos una agencia.</h2>
            </TextReveal>
            <TextReveal visible={sectionDistinctionVisible} delay="400ms" className="flex justify-center">
              <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-warm-purple leading-tight">Somos arquitectos de sistemas.</h2>
            </TextReveal>
          </div>
          <p className="font-jakarta text-xl text-gray-300 leading-relaxed mb-12">
            No ejecutamos piezas aisladas. Diseñamos e implementamos infraestructura digital que conecta operación, atención y seguimiento.
          </p>
          <div className="inline-flex items-center gap-3 border border-white/20 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-warm-purple rounded-full animate-pulse"></div>
            <span className="font-jakarta text-sm text-white uppercase tracking-widest">Tecnología como medio, no como fin</span>
          </div>
        </div>
      </section>

      {/* 8. CONTEXTO */}
      <section id="context" ref={sectionContextRef} className="relative w-full bg-white py-32 px-6 md:px-12 flex justify-center text-black border-b border-gray-100">
        <div className={`max-w-4xl w-full flex flex-col items-center text-center transition-all duration-1000 ${sectionContextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="w-[1px] h-24 bg-warm-purple mb-8"></div>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-space-grotesk text-warm-purple font-bold">07.</span>
            <div className="h-[1px] w-12 bg-gray-200"></div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">CONTEXTO</span>
          </div>
          <TextReveal visible={sectionContextVisible}>
            <h2 className="font-space-grotesk font-bold text-4xl md:text-6xl text-black mb-8 leading-tight">El momento del negocio.</h2>
          </TextReveal>
          <p className="font-jakarta text-xl text-gray-500 font-medium mb-12 max-w-2xl">Antes de avanzar, es importante el contexto.</p>
          <p className="font-jakarta text-lg text-gray-800 leading-relaxed mb-8 max-w-2xl">Este enfoque tiene sentido cuando el negocio ya está operando, hay equipo activo y la complejidad empieza a sentirse en el día a día.</p>
          <div className="relative py-8">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-warm-purple"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-warm-purple"></div>
            <TextReveal visible={sectionContextVisible} delay="300ms">
              <p className="font-space-grotesk text-3xl md:text-5xl font-bold leading-tight text-warm-purple max-w-3xl">“Primero entender. Luego hacer funcionar. Solo después crecer.”</p>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* 9. FOOTER CTA */}
      <section id="footer-cta" ref={sectionFooterRef} className="relative w-full bg-onyx-black text-white py-32 px-6 md:px-16 flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>
        <div className={`relative z-10 max-w-5xl mx-auto w-full flex flex-col gap-16 transition-all duration-1000 ${sectionFooterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex items-center gap-4">
            <span className="font-space-grotesk text-warm-purple font-bold text-xl">09.</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="font-jakarta text-xs uppercase tracking-[0.2em] text-warm-purple">ACCESO</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-end">
            <div className="flex flex-col gap-8">
              <TextReveal visible={sectionFooterVisible}>
                <h2 className="font-space-grotesk font-bold text-5xl md:text-7xl leading-[0.9]">Acceso al diagnóstico.</h2>
              </TextReveal>
              <p className="font-jakarta text-xl text-gray-400 leading-relaxed max-w-md">Si después de todo lo anterior sientes que tu negocio necesita orden y estructura, el siguiente paso es conversar.</p>

              <div className="flex flex-col gap-3 mt-8">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warm-purple opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-warm-purple"></span>
                  </div>
                  <p className="font-space-grotesk font-bold text-xl text-white tracking-wide">Sesión de exploración estratégica.</p>
                </div>
                <p className="font-jakarta text-sm md:text-base text-gray-500 pl-7 leading-relaxed max-w-sm">Analizamos la madurez de tu infraestructura actual y definimos la ruta crítica de intervención.</p>
              </div>
            </div>
            <div className="w-full">
              <Link to="/diagnostico" className="group relative w-full block bg-white text-black py-8 md:py-12 px-8 overflow-hidden hover:bg-warm-purple transition-colors duration-500">
                <div className="flex justify-between items-center relative z-10">
                  <span className="font-space-grotesk font-bold text-2xl md:text-4xl uppercase tracking-tighter group-hover:text-white transition-colors">Solicitar Diagnóstico</span>
                  <ArrowRight className="w-8 h-8 md:w-12 md:h-12 transform group-hover:rotate-45 group-hover:text-white transition-all duration-300" />
                </div>
                <div className="absolute inset-0 bg-warm-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="relative w-full bg-[#050505] text-white py-20 md:py-32 px-6 border-b border-white/5">
        <div className="w-full border-b border-white/10">
          <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-4">
            <div className="p-8 border-r border-white/10 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
              <span className="font-mono text-xs text-gray-500">ESTADO DEL SISTEMA</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm text-warm-purple">OPERATIVO</span>
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
                  <Mail size={14} className="text-warm-purple" />
                  <span className="font-mono text-sm group-hover:text-warm-purple transition-colors">contacto@axocia.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-warm-purple" />
                  <a href="https://wa.me/message/ASOF25HZH5MGL1" target="_blank" rel="noopener noreferrer" className="font-mono text-sm group-hover:text-warm-purple transition-colors">+502 4318 1439</a>
                </div>
              </div>
              <div className="flex gap-4 pt-2 border-t border-white/10 mt-1">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-warm-purple transition-colors"><Linkedin size={16} /></a>
                <a href="https://www.instagram.com/axociamarketing/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-warm-purple transition-colors"><Instagram size={16} /></a>
                <a href="https://www.facebook.com/profile.php?id=61564977518960" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-warm-purple transition-colors"><Facebook size={16} /></a>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4 group hover:bg-white/5 transition-colors">
              <span className="font-mono text-xs text-gray-500">LEGAL</span>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-xs text-gray-400">© 2026 AXOCIA Systems.</span>
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
      </section>

    </div>
  );
}