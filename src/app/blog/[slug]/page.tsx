import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { marked } from "marked";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://claws.fr/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://claws.fr/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Claws"],
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "Claws", url: "https://claws.fr" },
    publisher: { "@type": "Organization", name: "Claws", url: "https://claws.fr" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://claws.fr/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
    inLanguage: "fr-FR",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="nav-bar">
        <a href="/" className="nav-logo">Claws</a>
        <div className="nav-links">
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/#contact" className="nav-cta">Contact →</a>
        </div>
      </nav>

      <main className="article-page">
        <a href="/blog" className="back-link">← Retour au blog</a>

        <header className="article-header">
          <p className="article-category">{post.category}</p>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">
            <span>{new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime} de lecture</span>
          </div>
        </header>

        <div
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="article-cta">
          <h3>Vous souhaitez un agent IA pour votre entreprise ?</h3>
          <p>
            Claws installe, configure et maintient vos agents IA autonomes OpenClaw. Installation en 48h, support francophone, données 100 % locales.
          </p>
          <a href="/#contact" className="btn-primary">Discutons →</a>
        </div>
      </main>

      <footer className="footer">
        <p className="footer-copy">© 2025 Claws — Paris</p>
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="mailto:contact@claws.fr">contact@claws.fr</a>
        </div>
      </footer>
    </>
  );
}
