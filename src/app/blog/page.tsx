import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Alex Bancu",
  description:
    "Writing about overthinking, emotional clarity, and what it takes to get unstuck. For engineers, founders, and creatives.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto">
        <p className="font-sub text-sm font-medium tracking-[0.2em] uppercase text-brand mb-4">
          Blog
        </p>
        <h1 className="heading-tight text-3xl md:text-4xl text-foreground mb-4">
          Writing
        </h1>
        <p className="text-lg text-muted mb-4 leading-relaxed">
          On overthinking, emotional clarity, and getting unstuck.
        </p>
        <p className="text-base text-muted mb-12 leading-relaxed">
          I write about the things most people think about but rarely say out loud — feeling stuck despite success, making decisions when everything feels uncertain, and learning to trust yourself again. These posts come from my own experience as a software engineer, dad, and someone who overthinks everything.
        </p>

        {posts.length === 0 ? (
          <p className="text-muted">No posts yet.</p>
        ) : (
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <time className="text-sm text-muted block mb-1">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="heading-tight text-xl md:text-2xl text-foreground group-hover:text-brand transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-muted leading-relaxed">
                    {post.description}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-gray-100">
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
