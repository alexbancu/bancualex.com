# Project: bancualex.com

Personal brand website for Alex Bancu — software engineer, coach, writer.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 with Turbopack
- **Node:** v22+ required (use `nvm use 22`)
- **Styling:** Tailwind CSS v4 with `@theme inline` tokens in `globals.css`
- **Fonts:** Lora (display/headings) + Inter (body) via `next/font/google`
- **Colors:** Slate & Green palette (brand: `#1a5c2e`)
- **Blog:** MDX files in `content/blog/`, parsed by `src/lib/blog.ts`
- **Hosting:** Vercel (auto-deploys from `main` branch)
- **Analytics:** Ahrefs (script in `layout.tsx`)

## Blog SEO Guardrails

These rules protect search rankings on published content. Breaking them can lose indexed pages, rankings, and traffic.

### NEVER do these without explicit user approval:

1. **Never change a published blog post's URL slug.** The slug in the filename (`content/blog/[slug].mdx`) is the canonical URL. Changing it breaks Google's index, loses backlinks, and drops rankings. If a slug must change, create a 301 redirect.

2. **Never remove or rewrite a published post's title (`title` in frontmatter).** The title is optimized for a target keyword. Changing it can lose rankings for that keyword. Always ask before modifying.

3. **Never remove or rewrite a published post's meta description (`description` in frontmatter).** It's written for CTR optimization with the target keyword included.

4. **Never remove H2 headings from published posts.** H2s target secondary keywords and may be serving as featured snippets. Changing heading text changes what Google thinks the section is about.

5. **Never remove internal links from published posts.** Internal links pass PageRank and help Google discover pages. Every link was placed intentionally.

6. **Never remove the coaching CTA from blog posts.** The CTA at the bottom of `blog/[slug]/page.tsx` converts readers to coaching page visits. It stays.

7. **Never remove or change canonical URLs** (`alternates.canonical` in page metadata).

8. **Never change the `date` field on published posts** unless the post content is substantially updated (and user requests it).

### When creating new blog posts:

- **Always check `docs/keyword-research.md` and `docs/keyword-clusters.md`** for target keywords before writing.
- **Follow the SEO checklist in `docs/seo/blog-post-seo-guide.md`.**
- **Match the tone and format** of existing posts in `content/blog/`.
- **Include target keyword in:** title, description, slug, H1, and at least one H2.
- **Add 3-5 internal links:** link to other blog posts and the coaching page.
- **Keep meta descriptions under 155 characters** with the target keyword.
- **Keep title tags under 60 characters** (including " | Alex Bancu" suffix added by the template).
- **Update the hub page** (`src/app/page.tsx`) latest post card to point to the new post.

### When editing published posts:

- Fixing typos: fine.
- Improving a sentence: fine, but don't change sentences that contain target keywords in H1/H2/H3.
- Adding content: fine. More depth generally helps rankings.
- Removing content: ask first. Removing sections can lose featured snippet eligibility.

## Writing Style

- **Use `docs/` writing guides:** anti-ai-slop rules and Scott Adams writing style and blog post formatting standards.
- **No idioms.** Alex specifically avoids idiomatic expressions.
- **No AI slop.** No "unlock your potential," "game-changer," "it's not X, it's Y" patterns. See anti-ai-slop guide.
- **Short sentences.** One thought per sentence. Scott Adams style.
- **Active voice.** Subject before verb.
- **Specific over vague.** Real numbers, real research, real examples.

## Blog Post Formatting Standards

These formatting rules apply to all blog posts. Based on research into what drives readability, engagement, and SEO performance.

### Structure & Scannability

- **Use bullet or numbered lists** for any section with 3+ parallel items. Bold-lead paragraphs are acceptable for 2-3 items, but 4+ should be a list.
- **"What helps" sections** should always use numbered lists or bullet lists. This is the section readers scan for most.
- **Bold key phrases** to help scanners grab main ideas. Use bold for concept names, statistics, and actionable takeaways. Keep the pattern consistent within each post.
- **Keep paragraphs to 2-4 sentences max.** One idea per paragraph.
- **Add a Key Takeaways section** for posts over 1,500 words. Place it after the intro (before the first H2) as 3-4 bullet points.

### Table of Contents

- **Add a TOC for posts with 6+ H2 sections.** Renders as a linked list of H2s between the intro and the first H2. Helps readers jump to what they came for (especially from search). Skip for posts with fewer than 6 H2s.

### Visual Rhythm Breakers

- **Use PullQuote component** for 1-2 standout insights per post. Reserve for statistics or quotes that would make someone stop scrolling.
- **Use comparison tables** when contrasting two things (e.g., burnout vs laziness signals). Tables scan faster than two prose paragraphs.
- **One visual per long post** (1,500+ words) if possible. Diagrams, timelines, or comparison tables count.

### Components Available

- `<PullQuote>` — Styled pull quote for standout insights
- `<Annotation>` — Inline annotation/tooltip
- Internal links use standard markdown: `[text](/path)`

### Formatting Patterns to Follow

- **Signal comparison sections:** Use bullet lists or tables, not prose paragraphs.
- **Multi-step advice sections:** Use numbered lists.
- **Research citations:** Inline with the text. Name the researcher, institution, and finding. No footnotes.
- **Phase/stage structures:** Use H2 per phase with consistent sub-structure (description, trap, what helps).

## Design System

- **Colors defined in `src/app/globals.css`** under `@theme inline`. Palette is Slate & Green.
- **Hub page (`src/app/page.tsx`)** uses bento grid layout with inline `<style>` tag.
- **Coaching page** is a conversion/sales page. No navigation links at top. Only a subtle home link in the footer.
- **Design picker at `/design`** is an internal tool, not public-facing.

## Key Directories

```
src/app/page.tsx          — Hub (bento grid homepage)
src/app/coaching/page.tsx — Coaching sales page
src/app/blog/page.tsx     — Blog index
src/app/blog/[slug]/      — Blog post template
src/components/           — Coaching page components
content/blog/             — MDX blog posts
docs/                     — Research, keyword data, guides
docs/seo/                 — SEO guides and checklists
public/images/            — Static images
```

## Deployment

Push to `main` triggers Vercel auto-deploy. No manual deploy needed.
Dev server: `nvm use 22 && npx next dev -p 3099`
