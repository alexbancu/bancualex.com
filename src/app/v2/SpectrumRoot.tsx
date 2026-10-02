"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { axesAt, colorAt, nearness } from "./spectrum";

const DRIFT_PERIOD = 16000; // one full code -> people -> code sweep, in ms
const DRIFT_DELAY = 1400; // let the load sequence finish before the dial moves
const RESUME_AFTER = 3000; // idle time before the drift picks up again
const EASE = 0.085; // how fast t chases its target each frame

/**
 * Owns the page-wide dial value `t` and writes it into CSS custom properties.
 * Everything else on the page is server-rendered markup that reads those
 * properties, so this component never re-renders: one rAF loop, no React state.
 */
export default function SpectrumRoot({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const track = root?.querySelector<HTMLElement>("[data-track]");
    const range = root?.querySelector<HTMLInputElement>("[data-range]");
    const hero = root?.querySelector<HTMLElement>("[data-hero]");
    if (!root || !track || !range || !hero) return;

    const doors = Array.from(root.querySelectorAll<HTMLElement>("[data-p]"), (el) => ({
      el,
      p: Number(el.dataset.p),
      name: el.dataset.name ?? "",
    }));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let t = reduced ? 0.5 : 0;
    let target = t;
    let mode: "drift" | "held" | "released" = reduced ? "held" : "drift";
    let driftFrom = performance.now() + DRIFT_DELAY;
    let phase = 0;
    let releasedAt = 0;
    let dragging = false;
    let frame = 0;
    let label = "";

    const paint = () => {
      const { mono, casl, slnt } = axesAt(t);
      const s = root.style;
      s.setProperty("--t", t.toFixed(4));
      s.setProperty("--mono", mono.toFixed(3));
      s.setProperty("--casl", casl.toFixed(3));
      s.setProperty("--slnt", slnt.toFixed(2));
      s.setProperty("--accent", colorAt(t));

      let closest = doors[0];
      for (const d of doors) {
        d.el.style.setProperty("--near", nearness(t, d.p).toFixed(3));
        if (Math.abs(t - d.p) < Math.abs(t - closest.p)) closest = d;
      }
      if (!dragging) range.value = String(Math.round(t * 1000));
      if (closest && closest.name !== label) {
        label = closest.name;
        range.setAttribute("aria-valuetext", label);
      }
    };

    const loop = (now: number) => {
      frame = 0;
      if (mode === "released" && !reduced && now - releasedAt > RESUME_AFTER) {
        // Pick the sweep up from wherever the dial was left, heading for the far end.
        const a = Math.acos(1 - 2 * t);
        phase = t > 0.5 ? 2 * Math.PI - a : a;
        driftFrom = now;
        mode = "drift";
      }
      if (mode === "drift" && now >= driftFrom) {
        const turns = (now - driftFrom) / DRIFT_PERIOD;
        target = 0.5 - 0.5 * Math.cos(phase + turns * 2 * Math.PI);
      }
      t += (target - t) * (reduced ? 1 : EASE);
      paint();

      const settled = Math.abs(target - t) < 0.0005;
      const waiting = mode === "drift" || (mode === "released" && !reduced);
      if (waiting || !settled) frame = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const hold = (value: number) => {
      mode = "held";
      target = Math.min(1, Math.max(0, value));
      wake();
    };
    const release = () => {
      if (mode !== "held") return;
      mode = "released";
      releasedAt = performance.now();
      wake();
    };

    const ac = new AbortController();
    const opts = { signal: ac.signal };

    // Mouse over the hero steers the dial: the name follows the pointer.
    hero.addEventListener(
      "pointermove",
      (e) => {
        if (e.pointerType !== "mouse") return;
        const r = track.getBoundingClientRect();
        hold((e.clientX - r.left) / r.width);
      },
      opts,
    );
    hero.addEventListener("pointerleave", release, opts);

    range.addEventListener("input", () => hold(Number(range.value) / 1000), opts);
    range.addEventListener("pointerdown", () => (dragging = true), opts);
    range.addEventListener("pointerup", () => (dragging = false), opts);
    range.addEventListener("blur", release, opts);

    // Pointing at (or tabbing to) a door slides the dial onto it.
    for (const d of doors) {
      d.el.addEventListener(
        "pointerenter",
        (e) => e.pointerType === "mouse" && hold(d.p),
        opts,
      );
      d.el.addEventListener("pointerleave", release, opts);
      d.el.addEventListener("focusin", () => hold(d.p), opts);
      d.el.addEventListener("focusout", release, opts);
    }

    paint();
    wake();

    return () => {
      ac.abort();
      cancelAnimationFrame(frame);
    };
  }, []);

  const { mono, casl, slnt } = axesAt(0);
  const initial = {
    "--t": 0,
    "--mono": mono,
    "--casl": casl,
    "--slnt": slnt,
    "--accent": colorAt(0),
  } as CSSProperties;

  return (
    <div ref={ref} className={`v2 ${className ?? ""}`} style={initial}>
      {children}
    </div>
  );
}
