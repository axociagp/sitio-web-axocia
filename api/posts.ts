import { getResources, getPostBySlug } from '../src/lib/notion';

export default async function handler(req: any, res: any) {
    const { slug } = req.query;

    try {
        if (slug) {
            const post = await getPostBySlug(slug as string);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            return res.status(200).json(post);
        }

        const posts = await getResources();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch resources' });
    }
}
