"use client";

import { useEffect, useState, useCallback } from "react";

interface TocItem {
  text: string;
  slug: string;
}

export default function TableOfContents({
  items,
  variant = "auto",
}: {
  items: TocItem[];
  variant?: "auto" | "sidebar" | "mobile";
}) {
  const [activeSlug, setActiveSlug] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const updateVisibility = useCallback(() => {
    // Hide sidebar TOC when past the last heading's section
    const lastHeading = items.length > 0 ? document.getElementById(items[items.length - 1].slug) : null;
    if (lastHeading) {
      const rect = lastHeading.getBoundingClientRect();
      // Hide when the last heading is well above the viewport (user scrolled past article)
      setSidebarVisible(rect.top > -window.innerHeight);
    }
  }, [items]);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.slug))
      .filter(Boolean) as HTMLElement[];

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );

    headings.forEach((el) => observer.observe(el));

    // Also track scroll for visibility
    if (variant === "sidebar") {
      window.addEventListener("scroll", updateVisibility, { passive: true });
      updateVisibility();
    }

    return () => {
      observer.disconnect();
      if (variant === "sidebar") {
        window.removeEventListener("scroll", updateVisibility);
      }
    };
  }, [items, variant, updateVisibility]);

  function handleClick(slug: string) {
    setMobileOpen(false);
    const el = document.getElementById(slug);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  const showSidebar = variant === "auto" || variant === "sidebar";
  const showMobile = variant === "auto" || variant === "mobile";

  return (
    <>
      {/* Desktop: sticky sidebar */}
      {showSidebar && (
        <nav
          aria-label="Table of contents"
          className={`w-56 shrink-0 ${variant === "auto" ? "hidden lg:block sticky top-24" : ""}`}
          style={
            variant === "sidebar"
              ? {
                  opacity: sidebarVisible ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  pointerEvents: sidebarVisible ? "auto" : "none",
                }
              : undefined
          }
        >
          <p className="text-[0.65rem] font-medium tracking-[0.15em] uppercase text-mid mb-3">
            In this post
          </p>
          <ul className="list-none p-0 m-0 space-y-0.5 border-l border-surface">
            {items.map((item) => (
              <li key={item.slug}>
                <button
                  onClick={() => handleClick(item.slug)}
                  className={`block w-full text-left text-[0.8rem] leading-snug pl-3 py-1 border-l-2 -ml-px transition-all duration-200 ${
                    activeSlug === item.slug
                      ? "border-brand text-brand font-medium"
                      : "border-transparent text-mid hover:text-muted hover:border-mid/30"
                  }`}
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Mobile/Tablet: collapsible inline */}
      {showMobile && (
        <div className={variant === "auto" ? "lg:hidden my-8" : "my-8"}>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center gap-2 text-sm text-muted hover:text-brand transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${mobileOpen ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[0.65rem] font-medium tracking-[0.15em] uppercase">
              In this post ({items.length} sections)
            </span>
          </button>
          {mobileOpen && (
            <ul className="list-none p-0 m-0 mt-3 ml-1 space-y-1.5 border-l border-surface">
              {items.map((item) => (
                <li key={item.slug}>
                  <button
                    onClick={() => handleClick(item.slug)}
                    className="block w-full text-left text-sm text-muted hover:text-brand pl-3 py-0.5 transition-colors"
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}
