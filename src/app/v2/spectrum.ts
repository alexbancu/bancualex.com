// The V2 homepage runs on one axis: code (t = 0) to people (t = 1).
// Every colour and every letterform on the page is a function of a position on it.

// Cobalt to amber, walking the hue wheel through violet, magenta and coral.
const FROM = { l: 0.5, c: 0.2, h: 266 };
const TO = { l: 0.77, c: 0.16, h: 68 + 360 };

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export function colorAt(t: number, lightness?: number): string {
  const l = lightness ?? mix(FROM.l, TO.l, t);
  const c = mix(FROM.c, TO.c, t);
  const h = mix(FROM.h, TO.h, t) % 360;
  return `oklch(${l.toFixed(3)} ${c.toFixed(3)} ${h.toFixed(1)})`;
}

// Same hue, dark enough to read as text on the light card surface.
// Warm hues go muddy brown when darkened as far as blue, so they stay lighter.
export const inkAt = (t: number) => colorAt(t, 0.44 + 0.1 * t);

// Recursive's axes: MONO (monospace), CASL (casual), slnt (slant).
// Code end = Mono Linear. People end = Sans Casual, slanted far enough
// (slnt <= -14) for CRSV 0.5 to switch in the cursive letterforms.
export function axesAt(t: number) {
  return {
    mono: clamp01(1 - 2 * t),
    casl: t,
    slnt: -15 * clamp01((t - 0.5) / 0.35),
  };
}

export function variationAt(t: number): string {
  const { mono, casl, slnt } = axesAt(t);
  return `"MONO" ${mono.toFixed(3)}, "CASL" ${casl.toFixed(3)}, "slnt" ${slnt.toFixed(2)}, "CRSV" 0.5`;
}

// Doors sit at the centre of equal desktop columns, so the dial thumb
// lands exactly above a card. Change the count when a door is added or removed.
export const DOOR_COUNT = 3;
export const doorAt = (index: number) => (index + 0.5) / DOOR_COUNT;

// 1 when the dial sits on a door, 0 once it is a full door-width away.
export const nearness = (t: number, p: number) => clamp01(1 - Math.abs(t - p) * DOOR_COUNT);

export function trackGradient(): string {
  const stops = Array.from({ length: 9 }, (_, i) => colorAt(i / 8));
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}
