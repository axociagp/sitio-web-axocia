import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
});

export const getKnowledgeBaseContext = async () => {
    const pageId = process.env.NOTION_KNOWLEDGE_BASE_ID;
    if (!pageId) {
        throw new Error("NOTION_KNOWLEDGE_BASE_ID not set");
    }

    try {
        // Fetch blocks from the page
        const blocks = await notion.blocks.children.list({
            block_id: pageId,
            page_size: 100 // Adjust if knowledge base is huge, maybe need pagination
        });

        let contextText = "";

        for (const block of blocks.results) {
            // @ts-ignore
            if (block.type === 'paragraph' && block.paragraph.rich_text.length > 0) {
                // @ts-ignore
                contextText += block.paragraph.rich_text.map(t => t.plain_text).join("") + "\n\n";
            }
            // @ts-ignore
            else if (block.type === 'heading_1' && block.heading_1.rich_text.length > 0) {
                // @ts-ignore
                contextText += "# " + block.heading_1.rich_text.map(t => t.plain_text).join("") + "\n";
            }
            // @ts-ignore
            else if (block.type === 'heading_2' && block.heading_2.rich_text.length > 0) {
                // @ts-ignore
                contextText += "## " + block.heading_2.rich_text.map(t => t.plain_text).join("") + "\n";
            }
            // @ts-ignore
            else if (block.type === 'heading_3' && block.heading_3.rich_text.length > 0) {
                // @ts-ignore
                contextText += "### " + block.heading_3.rich_text.map(t => t.plain_text).join("") + "\n";
            }
            // @ts-ignore
            else if (block.type === 'bulleted_list_item' && block.bulleted_list_item.rich_text.length > 0) {
                // @ts-ignore
                contextText += "- " + block.bulleted_list_item.rich_text.map(t => t.plain_text).join("") + "\n";
            }
            // @ts-ignore
            else if (block.type === 'numbered_list_item' && block.numbered_list_item.rich_text.length > 0) {
                // @ts-ignore
                contextText += "1. " + block.numbered_list_item.rich_text.map(t => t.plain_text).join("") + "\n";
            }
        }

        return contextText;

    } catch (error) {
        console.error("Error fetching knowledge base:", error);
        return "Error loading knowledge base.";
    }
};
