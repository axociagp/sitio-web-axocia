import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  faqs?: { question: string, answer: string }[];
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical, keywords = [], faqs = [] }) => {
  const siteName = "AXOCIA | Ingeniería de Resultados";
  const fullTitle = title === "Inicio" ? siteName : `${title} | AXOCIA`;
  const baseUrl = "https://axocia.com"; // Replace with production URL
  const currentUrl = canonical || baseUrl;

  // Base Keywords + Strategy Keywords
  const baseKeywords = [
    // Core Concepts
    "Infraestructura Digital de Negocios",
    "Sistemas de Orden Operación Crecimiento",
    "Transformación Digital Guatemala",
    "Automatización de procesos B2B",
    "Consultoría de negocios Centroamérica",
    "Implementación de CRM GoHighLevel",
    "Desarrollo de Software a medida",
    "Agentes de IA conversacionales",
    "Digitalización de empresas familiares",

    // Interception Keywords (Problem Aware)
    "Mi negocio depende de mi",
    "Caos operativo empresarial",
    "Perdida de seguimiento de clientes",
    "Desorden administrativo pymes",
    "Empleados no siguen instrucciones",
    "Cliente fantasma",

    // Pain Points
    "Ventas sin seguimiento",
    "CRM mal implementado",
    "Excel lento y desactualizado",
    "Procesos manuales repetitivos",
    "Falta de visibilidad financiera",

    ...keywords
  ].join(", ");

  // Schema: Organization & LocalBusiness
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AXOCIA",
    "url": baseUrl,
    "logo": "https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d89224e42b9fb10c5e8a1.png",
    "description": "Firma de ingeniería de resultados especializada en infraestructura digital y sistemas de negocio.",
    "sameAs": [
      "https://linkedin.com/company/axocia",
      "https://instagram.com/axocia",
      "https://facebook.com/axocia"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Guatemala City",
      "addressCountry": "GT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+502-4318-1439",
      "contactType": "sales",
      "areaServed": ["GT", "SV", "HN", "CR", "PA", "MX"],
      "availableLanguage": ["es", "en"]
    }
  };

  // Schema: Services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Infraestructura Digital de Negocio",
    "provider": {
      "@type": "Organization",
      "name": "AXOCIA"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Guatemala"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sistemas de Intervención",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema de Orden",
            "description": "Centralización de información, CRM y eliminación de caos administrativo."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema de Operación",
            "description": "Automatización de flujos, estandarización de entrega y manuales operativos."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistema de Crecimiento",
            "description": "Escalamiento de capacidad, reactivación de base de datos y multiplicación de resultados."
          }
        }
      ]
    }
  };

  const defaultFaqs = [
    {
      question: "¿Qué es la Infraestructura Digital?",
      answer: "Es el conjunto de activos digitales (CRM, automatizaciones, bases de datos) que permiten a un negocio operar, vender y entregar sin depender del esfuerzo manual constante."
    },
    {
      question: "¿Implementan CRMs como HubSpot o Salesforce?",
      answer: "Sí, pero no como técnicos, sino como ingenieros de proceso. La herramienta es secundaria al diseño del flujo de datos."
    }
  ];

  const faqItems = faqs.length > 0 ? faqs : defaultFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={baseKeywords} />
      <link rel="canonical" href={currentUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AXOCIA Systems" />

      {/* Geo-Targeting */}
      <meta name="geo.region" content="GT" />
      <meta name="geo.placename" content="Ciudad de Guatemala" />
      <meta name="geo.position" content="14.6349;-90.5069" />
      <meta name="ICBM" content="14.6349, -90.5069" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="AXOCIA" />
      <meta property="og:image" content="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d89224e42b9fb10c5e8a1.png" />
      <meta property="og:locale" content="es_GT" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/696d89224e42b9fb10c5e8a1.png" />

      {/* JSON-LD Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};