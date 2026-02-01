import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Blog | Alex Bancu",
  description:
    "Writing about overthinking, emotional clarity, and making decisions. For engineers, founders, and creatives.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Blog | Alex Bancu",
    description:
      "Writing about overthinking, emotional clarity, and making decisions. For engineers, founders, and creatives.",
    type: "website",
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-background px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        {/* Intro section with visual separation */}
        <div className="mb-14 pb-10 border-b border-surface animate-fade-up">
          <div className="flex items-center justify-between mb-4">
            <p className="font-sub text-sm font-medium tracking-[0.2em] uppercase text-brand">
              Blog
            </p>
            <ThemeToggle />
          </div>
          <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
            Writing
          </h1>
          <p className="text-lg text-muted mb-4 leading-relaxed">
            On overthinking, emotional clarity, and getting unstuck.
          </p>
          <p className="text-base text-muted leading-relaxed">
            I spent years stuck in my own head. Overthinking career moves,
            second-guessing decisions, wondering why I had everything on paper
            but still felt off. I started writing to make sense of it. Some of
            it landed with other people.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <>
            {/* Featured latest post */}
            {featured && (
              <article className="animate-fade-up animate-delay-100">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group block bg-surface rounded-2xl p-6 md:p-8 -mx-2 md:-mx-4 mb-12 transition-all duration-300 hover:shadow-[0_2px_20px_rgba(26,92,46,0.08)] hover:bg-surface/80"
                >
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <time>
                      {new Date(featured.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{featured.readingTime} min read</span>
                  </div>
                  <h2 className="heading-tight text-2xl md:text-3xl text-foreground group-hover:text-brand transition-colors duration-300 mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    {featured.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-brand opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    Read post
                    <svg
                      className="ml-1 w-4 h-4"
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
                  </span>
                </Link>
              </article>
            )}

            {/* Remaining posts */}
            {rest.length > 0 && (
              <div className="space-y-2">
                {rest.map((post, i) => (
                  <article
                    key={post.slug}
                    className={`animate-fade-up animate-delay-${(i + 2) * 100}`}
                    style={{ animationDelay: `${(i + 2) * 0.1}s` }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block rounded-xl px-4 py-5 -mx-4 transition-all duration-300 hover:bg-surface/60"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted mb-1.5">
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
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="heading-tight text-xl md:text-2xl text-foreground group-hover:text-brand transition-colors duration-300 mb-1.5">
                            {post.title}
                          </h2>
                          <p className="text-muted leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        <svg
                          className="mt-1.5 w-5 h-5 text-mid shrink-0 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand"
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
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-16 pt-8 border-t border-surface animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <Link
            href="/"
            className="text-sm text-muted hover:text-brand transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
