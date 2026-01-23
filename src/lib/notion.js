import { Client } from "@notionhq/client";

/**
 * AXOCIA NOTION INTEGRATION LAYER
 * 
 * NOTA DE SEGURIDAD PARA IMPLEMENTACIÓN:
 * En un entorno de producción (Vercel), estas funciones deben ser llamadas 
 * desde una Serverless Function (API Route) para no exponer la NOTION_API_KEY 
 * en el cliente.
 * 
 * Para Antigravity / Desarrollo Local, usar variables de entorno.
 */

// Initialize Client (Server-side usage only recommened)
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const DATABASES = {
  LEADS: process.env.NOTION_LEADS_DB_ID,
  RESOURCES: process.env.NOTION_RESOURCES_DB_ID,
};

/**
 * Envia los datos del diagnóstico a la base de datos de Notion.
 */
export const submitDiagnosis = async (data) => {
  if (!process.env.NOTION_API_KEY) {
    console.warn("AXOCIA SYSTEM: Notion API Key not found. Running in simulation mode.");
    return { success: true, mode: 'simulation' };
  }

  try {
    const response = await notion.pages.create({
      parent: { database_id: DATABASES.LEADS },
      properties: {
        "Nombre": {
          title: [
            {
              text: {
                content: data.name,
              },
            },
          ],
        },
        "Empresa": {
          rich_text: [
            {
              text: {
                content: data.company || "N/A",
              },
            },
          ],
        },
        "Email": {
          email: data.email,
        },
        "Estado Sistema": {
          select: {
            name: "Pendiente Análisis",
          },
        },
        "Score": {
          number: calculateScore(data.answers),
        }
      },
    });
    return response;
  } catch (error) {
    console.error("AXOCIA SYSTEM ERROR: Failed to sync with Notion.", error);
    throw error;
  }
};

/**
 * Obtiene los artículos/recursos desde Notion para la página de Recursos.
 */
export const getResources = async () => {
  if (!process.env.NOTION_API_KEY) return [];

  try {
    const response = await notion.databases.query({
      database_id: DATABASES.RESOURCES,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
    return response.results;
  } catch (error) {
    console.error("AXOCIA SYSTEM ERROR: Failed to fetch resources.", error);
    return [];
  }
};

// Helper simple para score
function calculateScore(answers) {
  // Logic placeholder based on diagnostic answers
  return 0; 
}