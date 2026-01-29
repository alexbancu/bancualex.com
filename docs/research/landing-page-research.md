# Landing Page Research & Coaching Page Audit

## Sources

1. [involve.me — 11 Landing Page Best Practices (2026)](https://www.involve.me/blog/landing-page-best-practices)
2. [Leadfeeder — 12 Landing Page Best Practices (2026)](https://www.leadfeeder.com/blog/landing-pages-convert/)
3. [ThunderClap — 10 Best Landing Page Designs (2026)](https://www.thethunderclap.com/blog/best-landing-page-designs)

---

## Key Frameworks

### ThunderClap's CLEAR Framework

| Letter | Meaning | What it checks |
|--------|---------|----------------|
| C | Clarity | Benefit-driven headline, one-sentence value prop, no jargon, single hero CTA |
| L | Layout | F/Z-pattern scanning, hero imagery, short forms, reduced clutter |
| E | Emotion | Trust signals (logos, testimonials, badges), urgency/aspiration, relatable imagery |
| A | Action | One primary CTA repeated down the page, benefit-driven CTA copy, soft actions for hesitant visitors |
| R | Relevance | Ad-to-page message match, persona segmentation, mobile optimization, fast load |

### Leadfeeder's Essential Elements

- Engaging hero image showcasing use cases
- Clear main heading for immediate comprehension
- Compelling value proposition highlighting what you get
- Trust-building social proof (testimonials, case studies, logos, badges)
- Strong CTA directing next steps
- Unique selling point communication

### involve.me's Top Conversion Killers

- Navigation menus (only 16% of landing pages remove them; those that do see 16-28% higher conversions)
- Slow page speed (53% of mobile users leave after 3 seconds)
- Multiple competing CTAs
- Stock photography instead of authentic visuals

---

## Current Coaching Page Audit

### Page Structure (Current Order)

1. Hero (headline + CTA)
2. ProblemStatement
3. Symptoms
4. Services ("What we work on")
5. About (Alex's story)
6. Testimonials (Senja embed)
7. Process ("How it works")
8. CTA Section
9. FAQ
10. CTA Section (duplicated)
11. Footer

### CLEAR Framework Score

**Clarity: 7/10**
- Headline is strong and specific: "The overthinking isn't the problem. It's a smoke signal."
- Sub-headline clearly states who it's for
- Single CTA in hero ("Book a Call") — good
- Issue: No explicit outcome/transformation stated. What do people GET from coaching? The page is strong on describing the problem but vague on the result.

**Layout: 6/10**
- Clean, minimal design with good spacing
- No navigation menu — great (matches best practice)
- Issue: No hero image or visual element at all. The entire page is text-heavy. Every research source emphasizes visuals.
- Issue: The hero section is 85vh of mostly whitespace with centered text. Feels empty on desktop.
- Issue: Max-width is 2xl (672px) on most sections — narrow. The About section goes to 3xl. Inconsistent.

**Emotion: 5/10**
- Testimonials exist (Senja embed) — good
- Alex's story is personal and relatable — good
- Issue: No trust badges, no "30+ clients" in the hero area, no logos, no specific results/outcomes from past clients
- Issue: The "30+ people" stat is buried in the About section, paragraph 3. Should be more prominent.
- Issue: No urgency element (limited spots, booking window, etc.)
- Issue: No photo of Alex in the hero or above-the-fold area. His photo is buried in the About section.

**Action: 6/10**
- CTA is clear: "Book a Call" / "Book a free call"
- CTA appears in hero and twice more (CTASection used twice)
- Issue: CTA copy is generic. "Book a Call" doesn't communicate benefit. Better: something that speaks to the outcome.
- Issue: No soft action for hesitant visitors. No email signup, no "read a case study first," no free resource.
- Issue: CTASection is literally duplicated (same component rendered twice). Feels redundant.

**Relevance: 7/10**
- Clear persona targeting (tech people who overthink)
- Mobile responsive
- Issue: No page-speed optimization data checked
- Issue: No segmentation (the page speaks to everyone the same way)

### Overall CLEAR Score: 6.2/10

---

## Suggested Changes (Priority Order)

### High Impact

1. **Add a transformation statement to the hero.** The page is heavy on "here's what's wrong" but light on "here's what you get." Add one line about the outcome — something concrete. What did past clients experience? Not a promise. An honest description of what shifts. Example direction (rewrite in your voice): something about decisions getting easier, the fog lifting, getting energy back.

2. **Move Alex's photo to the hero or just below it.** Coaching is deeply personal. People want to see who they're talking to before they scroll. The About section is too far down. Consider a small profile photo near the sub-headline or in a short "Who am I" line right after the hero.

3. **Surface social proof earlier.** The "30+ people" stat and testimonials are buried. Add a short proof line near the hero: a one-line client quote, or "30+ engineers and founders coached" as a subtle trust signal above the fold.

4. **Add a soft CTA for people who aren't ready.** Not everyone will book a call on first visit. Offer something lower-commitment: a blog post link, a free resource, or an email list. "Not ready to talk? Read how I think about getting unstuck →" pointing to the blog.

### Medium Impact

5. **Remove the duplicate CTASection.** Having the exact same component twice (before FAQ and after FAQ) feels like padding. Keep one CTA after the FAQ. Or make them different — one emotional, one practical.

6. **Add specificity to the CTA copy.** "Book a Call" is generic. The sub-text "30 minutes. Free. We talk about what's actually going on." is better but it's in the CTASection, not the hero. Consider making the hero CTA more descriptive, or add the "30 min, free" context near the hero button.

7. **Break up the text wall in ProblemStatement.** It's one long paragraph. The content is good but scanners will skip it. Break into 2-3 shorter paragraphs, or pull out the strongest line as a standalone.

8. **Add visual variety.** The page is entirely text on light backgrounds, alternating between white and a subtle surface color. Consider: a subtle illustration, an icon set for the Symptoms section, or a different visual treatment for the Process steps.

### Lower Impact

9. **Reconsider the Symptoms section heading.** "These are smoke signals" only makes sense if the reader absorbed the hero headline's metaphor. If they scrolled fast, this heading means nothing on its own. Consider making it standalone-clear.

10. **Tighten the FAQ.** Four questions is good. But "What if I'm not sure?" and "Who is this for?" could be stronger. "What if I'm not sure?" answer basically repeats the CTA. Consider replacing with a question that addresses a real objection (price, time commitment, what if it doesn't work).

11. **Footer link goes to bancualex.com (hub) not back to coaching.** The personal website link in the footer takes people away from the coaching page. Consider whether you want that.

---

## Anti-AI Slop Check on Current Copy

The copy is mostly good — personal, direct, no corporate jargon. A few patterns to watch:

- **"It's a smoke signal"** — strong metaphor, but it's used THREE times (hero, problem statement heading, problem statement body). Once or twice max. By the third time it feels like a crutch.
- **Services list** reads slightly listicle-AI: six items all starting with verbs, all roughly the same rhythm and length. Vary the structure. Make some longer, some shorter. Not everything needs to be parallel.
- **"You don't need more information. You need to feel what you've been avoiding."** — This is the binary contrast pattern ("not X, but Y"). It's the CTA headline. It works once, but the page already uses this pattern in the hero ("isn't the problem. It's a smoke signal"). Two binary contrasts as section headlines is the limit.
- **Process section** is clean and honest. Good.
- **FAQ answers** are strong. Conversational. Real.

---

## Key Stats from Research

| Stat | Source |
|------|--------|
| 53% of mobile users abandon sites loading >3s | involve.me |
| Pages without navigation convert 16-28% better | involve.me |
| Video can lift conversions up to 86% | involve.me |
| Only 16% of landing pages remove navigation | involve.me |
| ConsultAdd saw 60% conversion lift from CLEAR redesign | ThunderClap |
| Storylane got 36% more impressions + 30% more demo requests | ThunderClap |
