import { reportLead } from '../src/lib/notion';

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;
        const response = await reportLead(data);
        res.status(200).json({ success: true, id: response?.id });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit lead' });
    }
}
