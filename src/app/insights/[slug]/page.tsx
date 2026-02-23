import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { SITE_CONFIG } from "@/lib/constants";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/lib/structured-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const nextPost = BLOG_POSTS[(postIndex + 1) % BLOG_POSTS.length];
  const prevPost = BLOG_POSTS[(postIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length];

  const categoryColors: Record<string, string> = {
    "Industry Analysis": "bg-blue-50 text-blue-700 border-blue-200",
    Compliance: "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Market Insights": "bg-amber-50 text-amber-700 border-amber-200",
    Sustainability: "bg-green-50 text-green-700 border-green-200",
    Technical: "bg-purple-50 text-purple-700 border-purple-200",
  };

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        url={`/insights/${post.slug}`}
        datePublished={post.date}
      />
      <BreadcrumbJsonLd items={[
        { name: "Home", href: "/" },
        { name: "Insights", href: "/insights" },
        { name: post.title, href: `/insights/${post.slug}` },
      ]} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/15 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-amber-400 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-amber-400 truncate max-w-[300px]">{post.title}</span>
          </nav>
          <div className="max-w-3xl">
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-6 ${categoryColors[post.category] || "bg-slate-50 text-slate-700 border-slate-200"}`}>
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">{post.description}</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
              <span className="flex items-center gap-1.5">By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:text-slate-800 prose-li:text-slate-600 prose-ul:my-4 prose-ol:my-4">
              {post.content.split("\n").map((line, i) => {
                const trimmed = line.trim();
                if (!trimmed) return null;
                if (trimmed.startsWith("## ")) return <h2 key={i}>{trimmed.replace("## ", "")}</h2>;
                if (trimmed.startsWith("### ")) return <h3 key={i}>{trimmed.replace("### ", "")}</h3>;
                if (trimmed.startsWith("---")) return <hr key={i} className="my-10 border-slate-200" />;
                if (trimmed.startsWith("- **")) {
                  const match = trimmed.match(/^- \*\*(.+?)\*\*\s*[—–-]\s*(.+)$/);
                  if (match) return <div key={i} className="flex items-start gap-3 my-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" /><p className="my-0"><strong>{match[1]}</strong> — {match[2]}</p></div>;
                  const match2 = trimmed.match(/^- \*\*(.+?)\*\*\s*(.*)$/);
                  if (match2) return <div key={i} className="flex items-start gap-3 my-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" /><p className="my-0"><strong>{match2[1]}</strong> {match2[2]}</p></div>;
                }
                if (trimmed.startsWith("- ")) return <div key={i} className="flex items-start gap-3 my-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0" /><p className="my-0">{trimmed.replace("- ", "")}</p></div>;
                if (/^\d+\./.test(trimmed)) return <div key={i} className="flex items-start gap-3 my-2"><span className="text-amber-600 font-bold shrink-0">{trimmed.match(/^(\d+)\./)?.[1]}.</span><p className="my-0">{trimmed.replace(/^\d+\.\s*/, "")}</p></div>;
                if (trimmed.startsWith("*") && trimmed.endsWith("*") && !trimmed.startsWith("**")) return <p key={i} className="text-sm text-slate-500 italic mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200">{trimmed.replace(/^\*|\*$/g, "")}</p>;
                return <p key={i}>{trimmed}</p>;
              })}
            </article>

            {/* Share Buttons — Item #19 */}
            <div className="mt-12 flex items-center gap-4 pt-8 border-t border-slate-200">
              <span className="text-sm font-semibold text-slate-500">Share:</span>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_CONFIG.url}/insights/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-[#0A66C2] text-white px-3 py-1.5 rounded-lg hover:bg-[#004182] transition-colors"
                aria-label="Share on LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_CONFIG.url}/insights/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-800 text-white px-3 py-1.5 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="Share on X/Twitter"
              >
                X / Twitter
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`Read this article from Integrity Global Trade: ${SITE_CONFIG.url}/insights/${post.slug}`)}`}
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors border border-slate-200"
                aria-label="Share via Email"
              >
                Email
              </a>
            </div>

            {/* Trust CTA */}
            <div className="mt-16 bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-8 w-8 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Trade with Confidence</h3>
                  <p className="text-slate-600 mb-4">
                    Integrity Global Trade & Commodities Corp delivers ethically sourced metals with
                    full KYC/AML compliance, chain-of-custody documentation, and over $3 billion in
                    closed contract volume.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">
                    Request a Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200">
              <Link href={`/insights/${prevPost.slug}`} className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors max-w-[45%]">
                <ArrowLeft className="h-4 w-4 shrink-0" /><span className="text-sm truncate">{prevPost.title}</span>
              </Link>
              <Link href={`/insights/${nextPost.slug}`} className="flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors max-w-[45%] text-right">
                <span className="text-sm truncate">{nextPost.title}</span><ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
