import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllSlugs, getNextPost } from "@/lib/blog";
import SubstackSubscribe from "@/components/SubstackSubscribe";
import ReadingProgress from "@/components/ReadingProgress";
import StickyPostHeader from "@/components/StickyPostHeader";
import PullQuote from "@/components/PullQuote";
import Annotation from "@/components/Annotation";

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
    openGraph: { url: `/blog/${slug}` },
  };
}

const mdxComponents = { PullQuote, Annotation };

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const nextPost = getNextPost(slug);

  return (
    <>
      <ReadingProgress />
      <StickyPostHeader title={post.title} />
      <main className="min-h-screen bg-background px-6 py-20 md:py-28">
        <article className="max-w-2xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-brand transition-colors inline-block mb-10"
          >
            &larr; All posts
          </Link>

          <header className="mb-10">
            <time className="text-sm text-muted block mb-2">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              {post.description}
            </p>
          </header>

          <div className="prose prose-lg prose-gray max-w-none [&>h2]:heading-tight [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:text-foreground [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:heading-tight [&>h3]:text-xl [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:text-muted [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ol]:text-muted [&>ol]:leading-relaxed [&>ol]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-brand [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted [&>strong]:text-foreground [&>p>strong]:text-foreground">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          {/* Newsletter — soft CTA */}
          <div className="mt-12 pt-6 border-t border-gray-100 text-center">
            <p className="text-sm text-muted mb-3">
              I write a few times per month about clarity, decisions, and getting unstuck.
            </p>
            <SubstackSubscribe />
          </div>

          {/* Coaching — primary CTA */}
          <div className="mt-16 pt-12 border-t border-gray-100 text-center">
            <h2 className="heading-tight text-2xl md:text-3xl text-foreground mb-3">
              Feeling stuck?
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              If this resonated, read about how I work with people like you.
            </p>
            <Link
              href="/coaching"
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-semibold rounded-[0.875rem] w-44 h-12 text-sm transition-colors"
            >
              Learn about coaching
            </Link>
          </div>

          {/* Next post */}
          {nextPost && nextPost.slug !== slug && (
            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-mid mb-3">
                Keep reading
              </p>
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group block"
              >
                <h3 className="heading-tight text-xl text-foreground group-hover:text-brand transition-colors mb-1">
                  {nextPost.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {nextPost.description}
                </p>
              </Link>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="text-sm text-muted hover:text-brand transition-colors"
            >
              &larr; All posts
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
