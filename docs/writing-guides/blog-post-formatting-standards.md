---
name: blog-post-formatting-standards
description: Formatting rules for all blog posts. Covers structure, scannability, visual rhythm, and available components. Use when writing or editing any blog post to ensure consistent formatting.
---

# Blog Post Formatting Standards

These formatting rules apply to all blog posts. Based on research into what drives readability, engagement, and SEO performance.

## Structure & Scannability

- **Use bullet or numbered lists** for any section with 3+ parallel items. Bold-lead paragraphs are acceptable for 2-3 items, but 4+ should be a list.
- **"What helps" sections** should always use numbered lists or bullet lists. This is the section readers scan for most.
- **Bold key phrases** to help scanners grab main ideas. Use bold for concept names, statistics, and actionable takeaways. Keep the pattern consistent within each post.
- **Keep paragraphs to 2-4 sentences max.** One idea per paragraph.
- **Add a Key Takeaways section** for posts over 1,500 words. Place it after the intro (before the first H2) as 3-4 bullet points.

## Table of Contents

- **TOC is auto-generated** by the `TableOfContents` component in the blog template (`blog/[slug]/page.tsx`). It extracts H2s from the post content and renders them as a sidebar and mobile TOC. **Do not add a manual TOC in the MDX file.**

## Visual Rhythm Breakers

- **Use PullQuote component** for 1-2 standout insights per post. Reserve for statistics or quotes that would make someone stop scrolling.
- **Use comparison tables** when contrasting two things (e.g., burnout vs laziness signals). Tables scan faster than two prose paragraphs.
- **One visual per long post** (1,500+ words) if possible. Diagrams, timelines, or comparison tables count.

## Components Available

- `<PullQuote>` — Styled pull quote for standout insights
- `<Annotation>` — Inline annotation/tooltip
- Internal links use standard markdown: `[text](/path)`

## Formatting Patterns to Follow

- **Signal comparison sections:** Use bullet lists or tables, not prose paragraphs.
- **Multi-step advice sections:** Use numbered lists.
- **Research citations:** Inline with the text. Name the researcher, institution, and finding. No footnotes.
- **Phase/stage structures:** Use H2 per phase with consistent sub-structure (description, trap, what helps).
