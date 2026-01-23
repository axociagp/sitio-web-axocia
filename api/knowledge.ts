import { getKnowledgeBaseContext } from '../src/lib/knowledge';

export default async function handler(req: any, res: any) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const context = await getKnowledgeBaseContext();
        res.status(200).json({ context });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch knowledge context' });
    }
}
