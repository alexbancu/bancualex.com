import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs, getNextPost, extractH2s, slugify } from "@/lib/blog";
import SubstackSubscribe from "@/components/SubstackSubscribe";
import ReadingProgress from "@/components/ReadingProgress";
import StickyPostHeader from "@/components/StickyPostHeader";
import TableOfContents from "@/components/TableOfContents";
import PullQuote from "@/components/PullQuote";
import Annotation from "@/components/Annotation";
import ThemeToggle from "@/components/ThemeToggle";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Alex Bancu`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      url: `/blog/${slug}`,
      title: `${post.title} | Alex Bancu`,
      description: post.description,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Alex Bancu"],
    },
  };
}

function MdxH2({ children }: { children?: React.ReactNode }) {
  const text = typeof children === "string" ? children : String(children ?? "");
  const id = slugify(text);
  return <h2 id={id}>{children}</h2>;
}

const mdxComponents = { PullQuote, Annotation, h2: MdxH2 };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const nextPost = getNextPost(slug);
  const headings = extractH2s(post.content);
  const showToc = headings.length >= 6;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Alex Bancu",
      url: "https://bancualex.com",
    },
    publisher: {
      "@type": "Person",
      name: "Alex Bancu",
      url: "https://bancualex.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bancualex.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />
      <StickyPostHeader title={post.title} readingTime={post.readingTime} />
      <main className="paper-texture min-h-screen bg-background px-6 py-20 md:py-28">
        <div className="relative max-w-2xl mx-auto">
          <div>
            <div className="animate-fade-up flex items-center justify-between mb-10">
              <Link
                href="/blog"
                className="no-underline text-sm text-muted hover:text-brand transition-colors"
              >
                &larr; All posts
              </Link>
              <ThemeToggle />
            </div>

            <header className="animate-fade-up animate-delay-100 mb-12">
              <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-6">
                {post.description}
              </p>

              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/images/eu.jpg"
                  alt="Alex Bancu"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="flex items-center gap-1.5 text-sm text-muted flex-wrap">
                  <span className="font-medium text-foreground">Alex Bancu</span>
                  <span aria-hidden="true">&middot;</span>
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-10 h-0.5 bg-brand/40 rounded-full" />
              </div>
            </header>
          </div>

          {/* Mobile TOC: collapsible inline */}
          {showToc && (
            <div className="animate-fade-up animate-delay-200 xl:hidden">
              <TableOfContents items={headings} variant="mobile" />
            </div>
          )}

          <div>
            <article className="relative z-10">
              {/* Prose */}
              <div className="animate-fade-up animate-delay-200 prose-dropcap prose-blog prose prose-lg prose-gray max-w-none [&>h2]:heading-tight [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:text-foreground [&>h2]:mt-20 [&>h2]:mb-6 [&>h2]:relative [&>h2]:pt-7 [&>h2]:before:content-[''] [&>h2]:before:absolute [&>h2]:before:top-0 [&>h2]:before:left-0 [&>h2]:before:w-8 [&>h2]:before:h-0.5 [&>h2]:before:bg-brand/50 [&>h2]:before:rounded-full [&>h3]:heading-tight [&>h3]:text-xl [&>h3]:text-foreground [&>h3]:mt-10 [&>h3]:mb-3 [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mb-6 [&_ul]:text-muted [&_ul]:leading-relaxed [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:text-muted [&_ol]:leading-relaxed [&_ol]:mb-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-2 [&>blockquote]:border-l-[3px] [&>blockquote]:border-brand [&>blockquote]:bg-brand-light/40 [&>blockquote]:rounded-r-lg [&>blockquote]:pl-6 [&>blockquote]:pr-5 [&>blockquote]:py-4 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-foreground [&>blockquote_p]:text-foreground [&>blockquote_p]:mb-0 [&_strong]:text-foreground [&_strong]:font-semibold">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>

              {/* Newsletter */}
              <div className="mt-16 pt-8 border-t border-surface text-center">
                <p className="text-sm text-muted mb-3">
                  I write a few times per month about clarity, decisions, and getting unstuck.
                </p>
                <SubstackSubscribe />
              </div>

              {/* Coaching CTA */}
              <div className="mt-14 bg-surface rounded-2xl p-8 md:p-10 text-center">
                <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
                  Feeling stuck?
                </h2>
                <p className="text-muted mb-8 leading-relaxed max-w-md mx-auto">
                  If this resonated, read about how I work with people like you.
                </p>
                <Link
                  href="/coaching"
                  className="no-underline inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-semibold rounded-[0.875rem] w-44 h-12 text-sm transition-colors"
                >
                  Learn about coaching
                </Link>
              </div>

              {/* Next post */}
              {nextPost && nextPost.slug !== slug && (
                <div className="mt-14">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase text-mid mb-4">
                    Keep reading
                  </p>
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="no-underline group block bg-surface/50 hover:bg-surface rounded-xl p-5 md:p-6 transition-all duration-300 hover:shadow-[0_2px_20px_rgba(26,92,46,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="heading-tight text-xl text-foreground group-hover:text-brand transition-colors duration-300 mb-1.5">
                          {nextPost.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed mb-2">
                          {nextPost.description}
                        </p>
                        <span className="text-sm text-mid">{nextPost.readingTime} min read</span>
                      </div>
                      <svg
                        className="mt-1 w-5 h-5 text-mid shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-surface">
                <Link
                  href="/blog"
                  className="no-underline text-sm text-muted hover:text-brand transition-colors"
                >
                  &larr; All posts
                </Link>
              </div>
            </article>

          </div>

          {/* Desktop TOC: fixed right sidebar */}
          {showToc && (
            <div className="hidden xl:block fixed top-[40%] -translate-y-1/2 z-30 animate-fade-up animate-delay-200" style={{ right: "calc(50% - 336px - 14rem - 2rem)" }}>
              <TableOfContents items={headings} variant="sidebar" />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
