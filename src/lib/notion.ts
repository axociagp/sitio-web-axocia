import { Client } from '@notionhq/client';

declare const process: {
  env: {
    NOTION_API_KEY: string;
    NOTION_LEADS_DATABASE_ID: string;
    NOTION_BLOG_DATABASE_ID: string;
  }
};

// Initialize Notion Client
// Env variables must be set in Vercel or .env.local
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const reportLead = async (data: any) => {
  if (!process.env.NOTION_LEADS_DATABASE_ID) {
    console.error("NOTION_LEADS_DATABASE_ID is not set");
    return;
  }

  try {
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_LEADS_DATABASE_ID,
      },
      properties: {
        "Prospecto": {
          title: [
            { text: { content: data.name || "Sin Nombre" } }
          ]
        },
        "Email": {
          email: data.email
        },
        "Teléfono": {
          phone_number: data.phone
        },
        "Empresa": {
          rich_text: [
            { text: { content: data.company || "" } }
          ]
        },
        "Industria": {
          rich_text: [
            { text: { content: data.industry || "" } }
          ]
        },
        // SISTEMA Columns
        "Orden": {
          rich_text: [{ text: { content: data.answers['sys_order'] || "" } }]
        },
        "Operación": {
          rich_text: [{ text: { content: data.answers['sys_ops'] || "" } }]
        },
        "Crecimiento": {
          rich_text: [{ text: { content: data.answers['sys_growth'] || "" } }]
        },
        // FASE Columns
        "Atracción": {
          rich_text: [{ text: { content: data.answers['phase_attraction'] || "" } }]
        },
        "Incorporación": {
          rich_text: [{ text: { content: data.answers['phase_onboarding'] || "" } }]
        },
        "Entrega": {
          rich_text: [{ text: { content: data.answers['phase_delivery'] || "" } }]
        },
        "Relación": {
          rich_text: [{ text: { content: data.answers['phase_relation'] || "" } }]
        },
        "Latencia": {
          rich_text: [{ text: { content: data.answers['phase_latency'] || "" } }]
        },
        // URGENCIA
        "Urgencia": {
          rich_text: [{ text: { content: data.answers['urgency_status'] || "" } }]
        }
      },
    });
    return response;
  } catch (error) {
    console.error("Error creating lead in Notion:", error);
    throw error;
  }
};

// Map Notion properties to friendly interface
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  excerpt: string;
  date: string;
}

export const getResources = async (): Promise<BlogPost[]> => {
  if (!process.env.NOTION_BLOG_DATABASE_ID) {
    console.warn("NOTION_BLOG_DATABASE_ID is not set, returning empty list");
    return [];
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Estado",
        select: {
          equals: "Publicado",
        },
      },
      sorts: [
        {
          property: "Fecha de Publicación",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        id: page.id,
        title: props["Título del Artículo"]?.title[0]?.plain_text || "Sin Título",
        slug: props["Slug"]?.rich_text[0]?.plain_text || "",
        category: props["Categoría"]?.select?.name || "General",
        coverImage: props["Portada"]?.files[0]?.file?.url || props["Portada"]?.files[0]?.external?.url || "",
        excerpt: props["Extracto"]?.rich_text[0]?.plain_text || "",
        date: page.created_time, // Fallback if specific date column isn't parsed yet, usually 'Fecha de Publicación' is a date property
      };
    });
  } catch (error) {
    console.error("Error fetching resources from Notion:", error);
    return [];
  }
};

export const getPageContent = async (pageId: string) => {
  try {
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });
    return blocks.results;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return [];
  }
};

export const getPostBySlug = async (slug: string) => {
  if (!process.env.NOTION_BLOG_DATABASE_ID) return null;

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    });

    if (response.results.length === 0) return null;
    const page = response.results[0];
    const content = await getPageContent(page.id);

    return {
      page,
      content
    };
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
};
