// Client-only SFX helper. Mirrors the prototype's window-attached SFX/play.
// Audio is constructed lazily inside play(), so importing this module never
// touches a browser API — it is only ever *called* from user-gesture handlers,
// which keeps us compliant with browser autoplay policy (no autoplay, ever).

export type Sfx = "drop" | "merge";

export const SFX = { on: true };

export function play(name: Sfx): void {
  if (!SFX.on) return;
  try {
    const a = new Audio(`/audio/${name}.mp3`);
    a.volume = name === "merge" ? 0.5 : 0.4;
    a.play().catch(() => {});
  } catch {
    /* no-op — sound is a pure enhancement */
  }
}
