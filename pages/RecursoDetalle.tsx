import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link } from '../App';
import { SEO } from '../components/SEO';

// Minimal block renderer
const BlockRenderer = ({ block }: { block: any }) => {
    if (!block) return null;
    const { type } = block;
    const value = block[type];
    const text = value?.rich_text?.[0]?.plain_text || "";

    switch (type) {
        case "heading_1":
            return <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8 mt-12 text-white">{text}</h1>;
        case "heading_2":
            return <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-6 mt-10 text-white">{text}</h2>;
        case "heading_3":
            return <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold mb-4 mt-8 text-white">{text}</h3>;
        case "paragraph":
            return <p className="font-jakarta text-gray-300 text-lg leading-relaxed mb-6">{text}</p>;
        case "bulleted_list_item":
            return <li className="font-jakarta text-gray-300 text-lg leading-relaxed mb-2 ml-4 list-disc">{text}</li>;
        case "image":
            const src = value.file?.url || value.external?.url;
            const caption = value.caption?.[0]?.plain_text;
            return (
                <figure className="my-12">
                    <img src={src} alt={caption || "Article image"} className="w-full h-auto rounded-sm border border-white/10" />
                    {caption && <figcaption className="text-center text-gray-500 font-mono text-xs mt-2">{caption}</figcaption>}
                </figure>
            );
        default:
            return null;
    }
};

export default function RecursoDetalle() {
    const [post, setPost] = useState<any>(null);
    const [content, setContent] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        // Basic slug extraction from URL
        const parts = window.location.pathname.split('/');
        const cleanSlug = parts[parts.length - 1];
        setSlug(cleanSlug);

        if (cleanSlug) {
            fetch(`/api/posts?slug=${cleanSlug}`)
                .then(res => res.json())
                .then(data => {
                    setPost(data.page);
                    setContent(data.content);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-[#6C5CE7] border-t-transparent rounded-full animate-spin"></div>
                    <div>CARGANDO DATOS...</div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono">
                <div className="text-center">
                    <h1 className="text-4xl mb-4">404</h1>
                    <p>PROTOCOLO NO ENCONTRADO</p>
                    <Link to="/recursos" className="mt-8 inline-block text-[#6C5CE7] hover:underline">VOLVER AL ARCHIVO</Link>
                </div>
            </div>
        );
    }

    const props = post.properties;
    const title = props["Título del Artículo"]?.title[0]?.plain_text || "Sin Título";
    const category = props["Categoría"]?.select?.name || "General";
    const date = post.created_time || "2025";
    const coverImage = props["Portada"]?.files[0]?.file?.url || props["Portada"]?.files[0]?.external?.url || "";

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#6C5CE7] selection:text-white pb-32">
            <SEO title={title} description={`Artículo sobre ${category}`} />

            {/* Simple Header */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
                <Link to="/recursos" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
                    <ArrowLeft size={14} />
                    <span>Volver al Archivo</span>
                </Link>
                <div className="text-xs font-mono text-[#6C5CE7] tracking-widest uppercase">{category} / {slug.toUpperCase()}</div>
            </header>

            <article className="max-w-4xl mx-auto pt-40 px-6">
                {/* Article Header */}
                <div className="mb-16">
                    <div className="flex gap-4 text-xs font-mono text-gray-500 mb-8 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2"><Calendar size={12} /> {new Date(date).toLocaleDateString()}</div>
                        <div className="flex items-center gap-2"><Clock size={12} /> 5 MIN LECTURA</div>
                    </div>
                    <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl leading-[1.1] mb-8">{title}</h1>
                </div>

                {/* Cover Image */}
                {coverImage && (
                    <div className="w-full aspect-video mb-20 overflow-hidden border border-white/10">
                        <img src={coverImage} alt={title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    {content.map((block) => (
                        <BlockRenderer key={block.id} block={block} />
                    ))}
                </div>
            </article>

        </div>
    );
}
