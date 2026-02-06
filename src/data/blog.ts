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
    faqs?: { question: string, answer: string }[];
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
            { id: "b17", type: "paragraph", content: "Un CRM mal implementado no organiza la información de clientes: la fragmenta con mejor interfaz. Una <a href='/implementacion-crm-guatemala'>implementación de CRM bien diseñada</a> parte de entender el flujo operativo antes de configurar la herramienta." },
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
    },
    {
        id: "2",
        title: "Implementación de CRM en Guatemala: cuando el sistema funciona incluso sin las personas clave",
        slug: "implementacion-crm-guatemala",
        category: "SISTEMAS",
        coverImage: "https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/69861cd203c9d50ef5d5a37f.png",
        excerpt: "Implementamos CRM en Guatemala como infraestructura operativa, eliminando dependencia de personas clave y logrando adopción real del equipo.",
        date: "2024-02-06",
        readTime: "6 MIN",
        code: "AX_CRM_GT",
        metaTitle: "Implementación de CRM en Guatemala | Sistemas que sí se adoptan",
        metaDescription: "Implementamos CRM en Guatemala como infraestructura operativa, eliminando dependencia de personas clave y logrando adopción real del equipo.",
        faqs: [
            {
                question: "¿Cuánto tiempo toma implementar un CRM?",
                answer: "Semanas, no días. Depende de la complejidad del negocio."
            },
            {
                question: "¿Qué CRM es mejor?",
                answer: "El que se adapta a la operación, no al revés."
            },
            {
                question: "¿El CRM reemplaza procesos?",
                answer: "No. Los ordena y los soporta."
            },
            {
                question: "¿Qué pasa si mi equipo no lo adopta?",
                answer: "Es un problema de implementación, no de personas."
            }
        ],
        content: [
            { id: "c1", type: "paragraph", content: "La implementación de un CRM en Guatemala suele empezar con una buena intención: ordenar clientes, mejorar seguimiento y profesionalizar la operación. Sin embargo, en la práctica, muchos CRM terminan abandonados, subutilizados o convertidos en una tarea administrativa que el equipo evita." },
            { id: "c2", type: "paragraph", content: "El problema no es el software." },
            { id: "c3", type: "paragraph", content: "El problema es cómo se implementa." },
            { id: "c4", type: "paragraph", content: "Un CRM bien implementado no es una herramienta más. Es una infraestructura operativa que permite que la empresa funcione de forma consistente, incluso cuando las personas clave no están disponibles." },
            { id: "c5", type: "heading_2", content: "Por qué la mayoría de las implementaciones de CRM fracasan en las empresas guatemaltecas" },
            { id: "c6", type: "heading_3", content: "El CRM visto como una herramienta aislada" },
            { id: "c7", type: "paragraph", content: "Uno de los errores más comunes es adoptar el CRM como si fuera una aplicación independiente: se compra la licencia, se configura lo básico y se le pide al equipo que \"lo use\"." },
            { id: "c8", type: "paragraph", content: "Cuando el CRM no está conectado al flujo real de trabajo, se percibe como algo externo, opcional y prescindible. El resultado casi siempre es el mismo: baja adopción." },
            { id: "c9", type: "heading_3", content: "Resistencia del equipo y reaprendizaje mal gestionado" },
            { id: "c10", type: "paragraph", content: "Un CRM implica una nueva forma de trabajar. Muchas implementaciones no preparan al equipo para ese reaprendizaje." },
            { id: "c11", type: "paragraph", content: "Desde la experiencia, el equipo no rechaza el CRM por flojera, sino porque lo ve como una barrera: más campos que llenar, más pasos, más control." },
            { id: "c12", type: "heading_3", content: "Cuando el CRM se convierte en trabajo extra" },
            { id: "c13", type: "paragraph", content: "Si el CRM no ahorra tiempo desde el inicio, se transforma en carga administrativa. Cuando eso ocurre, el abandono es cuestión de meses." },
            { id: "c14", type: "heading_2", content: "El problema real que una implementación de CRM sí debe resolver" },
            { id: "c15", type: "paragraph", content: "La mayoría de empresas cree que busca un CRM para \"organizar mejor a sus clientes\". El problema real es la dependencia operativa de personas específicas." },
            { id: "c16", type: "heading_3", content: "Dependencia operativa invisible" },
            { id: "c17", type: "paragraph", content: "En muchas organizaciones, el conocimiento crítico vive en la cabeza de una o dos personas: historial de clientes, acuerdos, problemas y contexto real." },
            { id: "c18", type: "paragraph", content: "Cuando esa persona falta, la operación se degrada." },
            { id: "c19", type: "heading_3", content: "El costo de que el conocimiento viva en personas" },
            { id: "c20", type: "paragraph", content: "Consultar personas en lugar de sistemas hace que el negocio sea frágil, difícil de escalar y lento para delegar." },
            { id: "c21", type: "heading_2", content: "CRM como herramienta vs CRM como infraestructura operativa" },
            { id: "c22", type: "heading_3", content: "Señales claras de un CRM mal implementado" },
            { id: "c23", type: "bulleted_list_item", content: "Uso intermitente" },
            { id: "c24", type: "bulleted_list_item", content: "Datos incompletos" },
            { id: "c25", type: "bulleted_list_item", content: "Sistemas paralelos" },
            { id: "c26", type: "bulleted_list_item", content: "Dependencia de personas clave" },
            { id: "c27", type: "heading_3", content: "Qué cambia cuando el CRM es memoria del sistema" },
            { id: "c28", type: "paragraph", content: "El CRM se convierte en una memoria operativa persistente accesible para todo el equipo." },
            { id: "c29", type: "heading_3", content: "Por qué la adopción deja de ser opcional" },
            { id: "c30", type: "paragraph", content: "Cuando el CRM es el único camino eficiente, nadie quiere operar fuera de él." },
            { id: "c31", type: "heading_2", content: "Cómo implementamos un CRM para que el equipo sí lo use" },
            { id: "c32", type: "heading_3", content: "Diseño del flujo antes de tocar la herramienta" },
            { id: "c33", type: "paragraph", content: "Primero se mapea cómo fluye la información en la operación real. Esto implica definir <a href='/como-organizar-informacion-de-clientes'>cómo organizar la información de clientes</a> desde la arquitectura, antes de configurar campos o pantallas en el CRM." },
            { id: "c34", type: "heading_3", content: "Automatización de captura de información" },
            { id: "c35", type: "paragraph", content: "La información entra al sistema sin depender de la memoria humana." },
            { id: "c36", type: "heading_3", content: "Capacitación enfocada en ahorro de trabajo" },
            { id: "c37", type: "paragraph", content: "El CRM se presenta como una forma de reducir fricción, no de aumentar control." },
            { id: "c38", type: "heading_3", content: "El CRM como único camino operativo" },
            { id: "c39", type: "paragraph", content: "Operar fuera del sistema deja de tener sentido práctico." },
            { id: "c40", type: "heading_2", content: "Qué incluye una implementación de CRM bien hecha" },
            { id: "c41", type: "bulleted_list_item", content: "Diagnóstico de dependencias operativas" },
            { id: "c42", type: "bulleted_list_item", content: "Diseño de arquitectura de información" },
            { id: "c43", type: "bulleted_list_item", content: "Configuración del CRM según procesos reales" },
            { id: "c44", type: "bulleted_list_item", content: "Capacitación y acompañamiento" },
            { id: "c45", type: "heading_2", content: "Resultados reales de una implementación de CRM correcta" },
            { id: "c46", type: "bulleted_list_item", content: "Continuidad operativa sin personas clave" },
            { id: "c47", type: "bulleted_list_item", content: "Menos errores y retrabajo" },
            { id: "c48", type: "bulleted_list_item", content: "Mejor seguimiento y control" },
            { id: "c49", type: "heading_2", content: "¿Para qué tipo de empresas funciona esta implementación de CRM en Guatemala?" },
            { id: "c50", type: "bulleted_list_item", content: "Empresas con equipos comerciales u operativos" },
            { id: "c51", type: "bulleted_list_item", content: "Negocios dependientes de personas clave" },
            { id: "c52", type: "bulleted_list_item", content: "Empresas en crecimiento que necesitan orden" },
            { id: "c53", type: "heading_2", content: "Antes de implementar un CRM, hazte estas preguntas" },
            { id: "c54", type: "bulleted_list_item", content: "¿Quién tiene la información crítica hoy?" },
            { id: "c55", type: "bulleted_list_item", content: "¿Qué pasa si esa persona no está?" },
            { id: "c56", type: "bulleted_list_item", content: "¿Dónde vive la memoria del negocio?" },
            { id: "c57", type: "heading_2", content: "Preguntas frecuentes sobre implementación de CRM en Guatemala" },
            { id: "c58", type: "heading_3", content: "¿Cuánto tiempo toma implementar un CRM?" },
            { id: "c59", type: "paragraph", content: "Semanas, no días. Depende de la complejidad del negocio." },
            { id: "c60", type: "heading_3", content: "¿Qué CRM es mejor?" },
            { id: "c61", type: "paragraph", content: "El que se adapta a la operación, no al revés." },
            { id: "c62", type: "heading_3", content: "¿El CRM reemplaza procesos?" },
            { id: "c63", type: "paragraph", content: "No. Los ordena y los soporta." },
            { id: "c64", type: "heading_3", content: "¿Qué pasa si mi equipo no lo adopta?" },
            { id: "c65", type: "paragraph", content: "Es un problema de implementación, no de personas." },
            { id: "c66", type: "heading_2", content: "Implementar un CRM no es instalar software" },
            { id: "c67", type: "paragraph", content: "Es construir una infraestructura de memoria operativa que permite que la empresa funcione sin depender de individuos específicos." },
            { id: "c68", type: "heading_2", content: "Hablemos de tu operación antes de hablar de herramientas" }
        ]
    },
    {
        id: "3",
        title: "Agentes de IA para empresas en Guatemala: qué son realmente y cómo funcionan en la práctica",
        slug: "agentes-ia-empresas-guatemala",
        category: "TECNOLOGÍA",
        coverImage: "https://storage.googleapis.com/msgsndr/fd2AxJxWWVbf4eQL4y5S/media/69866fa92dd985ca319238ad.png",
        excerpt: "Agentes de IA para empresas en Guatemala explicados sin humo: reglas, orquestación, RAG y límites reales para implementarlos correctamente.",
        date: "2024-02-06",
        readTime: "8 MIN",
        code: "AX_AI_GT",
        metaTitle: "Agentes de IA para empresas en Guatemala | Cómo funcionan realmente",
        metaDescription: "Agentes de IA para empresas en Guatemala explicados sin humo: reglas, orquestación, RAG y límites reales para implementarlos correctamente.",
        faqs: [
            {
                question: "¿Un agente de IA toma decisiones solo?",
                answer: "No. Ejecuta reglas predefinidas usando lenguaje natural como interfaz. La autonomía es aparente, no real."
            },
            {
                question: "¿En qué se diferencia de un chatbot?",
                answer: "Un chatbot responde preguntas. Un agente puede ejecutar acciones, consultar bases de datos y aplicar lógica condicional."
            },
            {
                question: "¿Qué puede y qué no puede hacer un agente de IA?",
                answer: "Puede automatizar tareas repetitivas con reglas claras. No puede inventar procesos ni reemplazar decisiones estratégicas."
            },
            {
                question: "¿Qué necesita una empresa antes de implementar uno?",
                answer: "Procesos definidos, información organizada y claridad sobre qué quiere automatizar."
            }
        ],
        content: [
            { id: "d1", type: "paragraph", content: "Los agentes de IA para empresas en Guatemala se han vuelto un tema recurrente en conversaciones sobre eficiencia, automatización y transformación digital. Sin embargo, gran parte de lo que se dice alrededor de ellos está envuelto en una narrativa confusa: se presentan como entidades autónomas que \"piensan\", \"deciden\" y \"aprenden solas\"." },
            { id: "d2", type: "paragraph", content: "En la práctica, esa percepción es técnicamente incorrecta y suele generar expectativas irreales que terminan en implementaciones fallidas." },
            { id: "d3", type: "paragraph", content: "Un agente de IA bien diseñado no es magia, ni reemplaza procesos inexistentes. Es un sistema cuidadosamente orquestado que, cuando se implementa correctamente, puede convertirse en una pieza clave de la infraestructura operativa de una empresa." },
            { id: "d4", type: "heading_2", content: "Qué es un agente de IA en el contexto empresarial" },
            { id: "d5", type: "paragraph", content: "Un agente de IA empresarial no es una inteligencia autónoma. Técnicamente, es la combinación de tres elementos muy concretos:" },
            { id: "d6", type: "paragraph", content: "Orquestación programada + reglas condicionales + un modelo de lenguaje (LLM) como interfaz" },
            { id: "d7", type: "paragraph", content: "Esta distinción es clave. El agente no decide por sí mismo; ejecuta lo que fue diseñado para ejecutar, usando lenguaje natural como medio de interacción." },
            { id: "d8", type: "heading_3", content: "La definición técnica: orquestación, reglas y lenguaje natural" },
            { id: "d9", type: "paragraph", content: "En empresas reales, un agente de IA funciona como una capa de automatización que interpreta intención, aplica reglas explícitas, consulta información predefinida y ejecuta acciones autorizadas." },
            { id: "d10", type: "heading_2", content: "Por qué los agentes de IA no son autónomos (aunque lo parezcan)" },
            { id: "d11", type: "heading_3", content: "La ilusión de inteligencia y por qué confunde a las empresas" },
            { id: "d12", type: "paragraph", content: "La fluidez del lenguaje crea la sensación de razonamiento. En realidad, no existe autonomía ni juicio: existe aplicación de reglas sobre lenguaje natural." },
            { id: "d13", type: "heading_2", content: "Los tres componentes fundamentales de un agente de IA" },
            { id: "d14", type: "heading_3", content: "Reglas y lógica condicional: el verdadero cerebro del agente" },
            { id: "d15", type: "paragraph", content: "El comportamiento del agente está determinado por reglas escritas explícitamente. Si la pregunta es X, hacer Y. Si el cliente tiene estado Z, responder de forma W. Estas reglas son el verdadero motor de decisión." },
            { id: "d16", type: "heading_3", content: "LLM: la interfaz de lenguaje, no el decisor" },
            { id: "d17", type: "paragraph", content: "El modelo de lenguaje (LLM) permite que el agente entienda y genere texto natural. Pero no es quien \"decide\": solo traduce entre lenguaje humano y lógica programada." },
            { id: "d18", type: "heading_3", content: "Orquestación: la parte más importante y menos visible" },
            { id: "d19", type: "paragraph", content: "La orquestación conecta todo: recibe la entrada, evalúa condiciones, consulta bases de datos, ejecuta acciones y devuelve respuestas. Sin orquestación, el LLM es solo texto bonito sin impacto operativo." },
            { id: "d20", type: "heading_2", content: "Cómo funciona un agente de IA paso a paso (ejemplo real)" },
            { id: "d21", type: "heading_3", content: "Qué ocurre cuando un cliente pregunta por precios" },
            { id: "d22", type: "paragraph", content: "1. El cliente escribe: \"¿Cuánto cuesta el servicio premium?\"" },
            { id: "d23", type: "paragraph", content: "2. El orquestador identifica la intención: consulta de precio." },
            { id: "d24", type: "paragraph", content: "3. Aplica regla: si es consulta de precio, buscar en base de conocimiento." },
            { id: "d25", type: "paragraph", content: "4. RAG recupera el fragmento relevante de la documentación." },
            { id: "d26", type: "paragraph", content: "5. El LLM genera una respuesta natural usando esa información." },
            { id: "d27", type: "paragraph", content: "6. El agente responde con el precio correcto." },
            { id: "d28", type: "paragraph", content: "Nada de esto es \"inteligencia\". Es diseño de sistema." },
            { id: "d29", type: "heading_2", content: "RAG: cómo un agente de IA \"conoce\" tu negocio" },
            { id: "d30", type: "heading_3", content: "Por qué la base de conocimiento importa más que la IA" },
            { id: "d31", type: "paragraph", content: "RAG (Retrieval-Augmented Generation) es la técnica que permite al agente consultar información específica de tu empresa. Precios, procesos, políticas, productos. Sin esta base de conocimiento, el agente solo puede inventar. Y eso es exactamente lo que no quieres." },
            { id: "d32", type: "paragraph", content: "Para que un agente funcione bien, primero necesitas tener clara la <a href='/como-organizar-informacion-de-clientes'>organización de la información de clientes</a> y los datos operativos que alimentarán al sistema." },
            { id: "d33", type: "heading_2", content: "Guardrails: por qué limitar un agente lo hace más seguro y útil" },
            { id: "d34", type: "paragraph", content: "Un agente sin límites es un riesgo. Puede inventar información, prometer cosas que no puedes cumplir o salirse del contexto. Los guardrails son restricciones explícitas que mantienen al agente dentro de lo permitido." },
            { id: "d35", type: "paragraph", content: "Un agente con buenos guardrails genera confianza. Uno sin ellos, genera problemas." },
            { id: "d36", type: "heading_2", content: "Riesgos reales de agentes de IA mal diseñados" },
            { id: "d37", type: "bulleted_list_item", content: "Respuestas incorrectas o inventadas (alucinaciones)" },
            { id: "d38", type: "bulleted_list_item", content: "Compromisos que la empresa no puede cumplir" },
            { id: "d39", type: "bulleted_list_item", content: "Filtración de información sensible" },
            { id: "d40", type: "bulleted_list_item", content: "Experiencia de usuario frustrante" },
            { id: "d41", type: "bulleted_list_item", content: "Dependencia de un sistema que nadie entiende" },
            { id: "d42", type: "heading_2", content: "Cuándo tiene sentido implementar agentes de IA en una empresa" },
            { id: "d43", type: "heading_3", content: "Señales de que tu empresa está lista" },
            { id: "d44", type: "bulleted_list_item", content: "Procesos definidos y documentados" },
            { id: "d45", type: "bulleted_list_item", content: "Información centralizada y accesible" },
            { id: "d46", type: "bulleted_list_item", content: "Tareas repetitivas que consumen tiempo del equipo" },
            { id: "d47", type: "bulleted_list_item", content: "Claridad sobre qué quieres automatizar" },
            { id: "d48", type: "paragraph", content: "Si no tienes procesos, el agente no tiene nada que ejecutar. Implementar un agente sin infraestructura operativa es como ponerle motor a un carro sin volante." },
            { id: "d49", type: "heading_2", content: "Errores comunes al implementar agentes de IA en empresas" },
            { id: "d50", type: "heading_3", content: "Pensar que la IA reemplaza procesos inexistentes" },
            { id: "d51", type: "paragraph", content: "El error más común es esperar que la IA \"resuelva\" un problema operativo que ni siquiera está definido. El agente no crea orden. Ejecuta orden que ya existe." },
            { id: "d52", type: "paragraph", content: "Por eso, antes de pensar en agentes, muchas empresas necesitan primero una <a href='/implementacion-crm-guatemala'>implementación de CRM bien diseñada</a> que ordene la operación base." },
            { id: "d53", type: "heading_2", content: "Agentes de IA para empresas en Guatemala: el enfoque correcto" },
            { id: "d54", type: "paragraph", content: "En Guatemala, el mercado está en una etapa temprana de adopción. Esto crea oportunidades, pero también riesgos. Muchas empresas están siendo vendidas con promesas de \"IA autónoma\" que no corresponden a la realidad técnica." },
            { id: "d55", type: "paragraph", content: "El enfoque correcto es entender que un agente de IA es una pieza de infraestructura, no una solución mágica. Funciona cuando está bien diseñado, bien alimentado y bien limitado." },
            { id: "d56", type: "heading_2", content: "Preguntas frecuentes sobre agentes de IA empresariales" },
            { id: "d57", type: "heading_3", content: "¿Un agente de IA toma decisiones solo?" },
            { id: "d58", type: "paragraph", content: "No. Ejecuta reglas predefinidas usando lenguaje natural como interfaz. La autonomía es aparente, no real." },
            { id: "d59", type: "heading_3", content: "¿En qué se diferencia de un chatbot?" },
            { id: "d60", type: "paragraph", content: "Un chatbot responde preguntas. Un agente puede ejecutar acciones, consultar bases de datos y aplicar lógica condicional." },
            { id: "d61", type: "heading_3", content: "¿Qué puede y qué no puede hacer un agente de IA?" },
            { id: "d62", type: "paragraph", content: "Puede automatizar tareas repetitivas con reglas claras. No puede inventar procesos ni reemplazar decisiones estratégicas." },
            { id: "d63", type: "heading_3", content: "¿Qué necesita una empresa antes de implementar uno?" },
            { id: "d64", type: "paragraph", content: "Procesos definidos, información organizada y claridad sobre qué quiere automatizar." },
            { id: "d65", type: "heading_2", content: "Implementar agentes de IA no es adoptar tecnología, es diseñar sistemas" },
            { id: "d66", type: "paragraph", content: "La diferencia entre una implementación exitosa y una fallida no está en el modelo de IA que uses. Está en cómo diseñas el sistema que lo rodea: reglas claras, información estructurada, límites definidos y orquestación robusta." },
            { id: "d67", type: "paragraph", content: "Eso es lo que realmente funciona." }
        ]
    }
];
