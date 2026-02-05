import React, { useEffect, useState } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Link } from '@/src/lib/router';
import { SEO } from '../components/SEO';
import { BLOG_POSTS, ContentBlock } from '@/src/data/blog';

// Minimal block renderer
const BlockRenderer = ({ block }: { block: ContentBlock }) => {
    if (!block) return null;
    const { type, content, url, caption, rows } = block;

    switch (type) {
        case "heading_1":
            return <h1 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-8 mt-12 text-white">{content}</h1>;
        case "heading_2":
            return <h2 className="font-space-grotesk text-3xl md:text-4xl font-bold mb-6 mt-10 text-white">{content}</h2>;
        case "heading_3":
            return <h3 className="font-space-grotesk text-2xl md:text-3xl font-bold mb-4 mt-8 text-white">{content}</h3>;
        case "paragraph":
            return <p className="font-jakarta text-gray-300 text-lg leading-relaxed mb-6">{content}</p>;
        case "bulleted_list_item":
            return <li className="font-jakarta text-gray-300 text-lg leading-relaxed mb-2 ml-4 list-disc">{content}</li>;
        case "image":
            return (
                <figure className="my-12">
                    <img src={url} alt={caption || "Article image"} className="w-full h-auto rounded-sm border border-white/10" />
                    {caption && <figcaption className="text-center text-gray-500 font-mono text-xs mt-2">{caption}</figcaption>}
                </figure>
            );
        case "table":
            return (
                <div className="my-10 overflow-x-auto border border-white/10 rounded-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10">
                                {rows?.[0].map((cell, i) => (
                                    <th key={i} className="p-4 font-mono text-xs uppercase tracking-widest text-[#6C5CE7]">{cell}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows?.slice(1).map((row, i) => (
                                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                                    {row.map((cell, j) => (
                                        <td key={j} className="p-4 font-jakarta text-sm text-gray-300">{cell}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        default:
            return null;
    }
};

export default function RecursoDetalle() {
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const parts = window.location.pathname.split('/').filter(Boolean);
        const cleanSlug = parts[parts.length - 1];

        if (cleanSlug) {
            const foundPost = BLOG_POSTS.find(p => p.slug.toLowerCase() === cleanSlug.toLowerCase());
            if (foundPost) {
                setPost(foundPost);
            }
            setLoading(false);
        } else {
            setLoading(false);
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

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#6C5CE7] selection:text-white pb-32">
            <SEO
                title={post.metaTitle || post.title}
                description={post.metaDescription || post.excerpt}
            />

            {/* Simple Header */}
            <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
                <Link to="/recursos" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest">
                    <ArrowLeft size={14} />
                    <span>Volver al Archivo</span>
                </Link>
                <div className="text-xs font-mono text-[#6C5CE7] tracking-widest uppercase">{post.category} / {post.slug.toUpperCase()}</div>
            </header>

            <article className="max-w-4xl mx-auto pt-40 px-6">
                {/* Article Header */}
                <div className="mb-16">
                    <div className="flex gap-4 text-xs font-mono text-gray-500 mb-8 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2"><Calendar size={12} /> {new Date(post.date).toLocaleDateString()}</div>
                        <div className="flex items-center gap-2"><Clock size={12} /> {post.readTime} LECTURA</div>
                    </div>
                    {/* H1 - Requerido por SEO */}
                    <h1 className="font-space-grotesk font-bold text-4xl md:text-6xl leading-[1.1] mb-8">{post.title}</h1>
                </div>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="w-full aspect-video mb-20 overflow-hidden border border-white/10">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none">
                    {post.content.map((block: ContentBlock) => (
                        <BlockRenderer key={block.id} block={block} />
                    ))}
                </div>
            </article>

        </div>
    );
}
