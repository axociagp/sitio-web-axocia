export interface ContentBlock {
    id: string;
    type: 'paragraph' | 'heading_1' | 'heading_2' | 'heading_3' | 'bulleted_list_item' | 'image' | 'table';
    content?: string;
    url?: string;
    caption?: string;
    rows?: string[][];
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    coverImage: string;
    excerpt: string;
    date: string;
    readTime: string;
    code: string;
    metaTitle: string;
    metaDescription: string;
    content: ContentBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: "1",
        title: "Cómo organizar la información de clientes sin caos ni herramientas de más",
        slug: "como-organizar-informacion-de-clientes",
        category: "OPERACIONES",
        coverImage: "https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/69851e4ae169f06f47634991.png",
        excerpt: "Aprende cómo organizar la información de clientes con una sola fuente de verdad, menos herramientas y un sistema que evita errores y pérdida de datos.",
        date: "2024-02-05",
        readTime: "5 MIN",
        code: "AX_SYS_01",
        metaTitle: "Cómo organizar la información de clientes sin caos ni herramientas de más",
        metaDescription: "Aprende cómo organizar la información de clientes con una sola fuente de verdad, menos herramientas y un sistema que evita errores y pérdida de datos.",
        content: [
            { id: "b1", type: "paragraph", content: "Organizar la información de clientes consiste en centralizar todos los datos en una sola fuente de verdad, definir cómo entran, cómo se actualizan y cómo se usan, evitando duplicados, búsquedas manuales y dependencia de personas." },
            { id: "b2", type: "paragraph", content: "No se trata de usar más herramientas, sino de diseñar un sistema donde la información fluya de forma clara." },
            { id: "b3", type: "paragraph", content: "En la práctica, muchas empresas creen que tienen este problema resuelto porque usan múltiples aplicaciones. La realidad suele ser la contraria: WhatsApp, Excel, correo y distintas plataformas guardan fragmentos de información que nunca se conectan entre sí." },
            { id: "b4", type: "paragraph", content: "El resultado no es control, es fricción operativa." },
            { id: "b5", type: "heading_2", content: "Por qué la mayoría de las empresas no sabe dónde está la información de sus clientes" },
            { id: "b6", type: "heading_3", content: "El síntoma: datos repartidos entre WhatsApp, Excel, correo y apps" },
            { id: "b7", type: "paragraph", content: "Es común ver operaciones donde la información vive en demasiados lugares a la vez. Un mensaje clave está en WhatsApp, el historial en un Excel con varias versiones, la cotización en el correo y el seguimiento en una herramienta que nadie abre del todo." },
            { id: "b8", type: "paragraph", content: "En estos escenarios, cada herramienta guarda una parte de la verdad, pero ninguna contiene la historia completa del cliente." },
            { id: "b9", type: "heading_3", content: "El costo oculto de buscar información cliente por cliente" },
            { id: "b10", type: "paragraph", content: "Cuando necesitas saber algo básico —último pedido, estado, monto o responsable— el proceso implica revisar varias pantallas. En muchos casos, encontrar esa información toma entre 3 y 5 minutos." },
            { id: "b11", type: "paragraph", content: "Ese tiempo, repetido durante el día y multiplicado por el equipo, se traduce en pérdida de foco, errores operativos y dependencia de personas clave." },
            { id: "b12", type: "heading_2", content: "Herramientas no son el problema: el verdadero error al organizar clientes" },
            { id: "b13", type: "heading_3", content: "Qué pasa cuando cada herramienta guarda “una parte de la verdad”" },
            { id: "b14", type: "paragraph", content: "El error más común es pensar que el problema se soluciona agregando una nueva herramienta. En la práctica, esto solo crea otra isla de información." },
            { id: "b15", type: "paragraph", content: "La única integración real termina siendo una persona saltando entre pantallas." },
            { id: "b16", type: "heading_3", content: "La falsa sensación de control que dan los CRM y plantillas" },
            { id: "b17", type: "paragraph", content: "Un CRM mal implementado no organiza la información de clientes: la fragmenta con mejor interfaz." },
            { id: "b18", type: "paragraph", content: "Lo mismo ocurre con plantillas copiadas sin entender el flujo real del negocio." },
            { id: "b19", type: "heading_2", content: "¿Qué significa realmente organizar la información de clientes?" },
            { id: "b20", type: "paragraph", content: "Organizar la información de clientes no es ordenar datos. Es diseñar un sistema." },
            { id: "b21", type: "heading_3", content: "Diferencia entre ordenar datos y diseñar un sistema" },
            { id: "b22", type: "paragraph", content: "Ordenar datos es crear campos. Diseñar un sistema implica decidir dónde vive la información, cómo entra, quién la actualiza y cómo se usa después." },
            { id: "b23", type: "heading_3", content: "La importancia de una sola fuente de verdad" },
            { id: "b24", type: "paragraph", content: "Toda operación funcional tiene una fuente única de verdad. Sin ella, el sistema termina viviendo en la cabeza de una persona." },
            { id: "b25", type: "heading_2", content: "Los 4 principios para organizar información de clientes que sí funcionan" },
            { id: "b26", type: "bulleted_list_item", content: "Una sola fuente de verdad" },
            { id: "b27", type: "bulleted_list_item", content: "Flujo claro de datos" },
            { id: "b28", type: "bulleted_list_item", content: "Memoria del sistema, no de las personas" },
            { id: "b29", type: "bulleted_list_item", content: "Pocas interfaces para reducir fricción" },
            { id: "b30", type: "heading_2", content: "Cómo organizar la información de clientes paso a paso" },
            { id: "b31", type: "bulleted_list_item", content: "Define qué datos mínimos necesitas de cada cliente" },
            { id: "b32", type: "bulleted_list_item", content: "Decide dónde vivirá esa información" },
            { id: "b33", type: "bulleted_list_item", content: "Establece cómo entra y quién la actualiza" },
            { id: "b34", type: "bulleted_list_item", content: "Diseña el flujo antes de conectar herramientas" },
            { id: "b35", type: "heading_2", content: "¿Excel, CRM, Notion o WhatsApp? Cuándo usar cada uno" },
            {
                id: "b36", type: "table", rows: [
                    ["Herramienta", "Cuándo funciona", "Cuándo falla"],
                    ["Excel", "Pocos clientes", "Versiones duplicadas"],
                    ["CRM", "Equipos y volumen", "Sin arquitectura"],
                    ["Notion", "Documentación", "Base de datos viva"],
                    ["WhatsApp", "Comunicación", "Almacenamiento"]
                ]
            },
            { id: "b37", type: "heading_2", content: "Resultados reales de organizar bien la información de clientes" },
            { id: "b38", type: "paragraph", content: "Cuando existe arquitectura:" },
            { id: "b39", type: "bulleted_list_item", content: "El tiempo de búsqueda baja de minutos a segundos" },
            { id: "b40", type: "bulleted_list_item", content: "Disminuye la dependencia de personas clave" },
            { id: "b41", type: "bulleted_list_item", content: "Mejora el seguimiento y la operación" },
            { id: "b42", type: "heading_2", content: "Antes de buscar otra herramienta, hazte esta pregunta" },
            { id: "b43", type: "paragraph", content: "¿Tengo claro cómo fluye la información en mi operación?" },
            { id: "b44", type: "heading_2", content: "Preguntas frecuentes sobre cómo organizar información de clientes" },
            { id: "b45", type: "heading_3", content: "¿Necesito un CRM para organizar mis clientes?" },
            { id: "b46", type: "paragraph", content: "No necesariamente. Primero define el flujo de información." },
            { id: "b47", type: "heading_3", content: "¿Cómo evito información duplicada?" },
            { id: "b48", type: "paragraph", content: "Centralizando la fuente de verdad." },
            { id: "b49", type: "heading_3", content: "¿Qué pasa si ya uso muchas herramientas?" },
            { id: "b50", type: "paragraph", content: "El primer paso es reducir y conectar, no agregar." },
            { id: "b51", type: "heading_2", content: "Conclusión" },
            { id: "b52", type: "paragraph", content: "Organizar la información de clientes no es un problema tecnológico, es un problema de diseño. Las empresas que lo entienden dejan de perseguir herramientas y construyen infraestructura." }
        ]
    }
];
