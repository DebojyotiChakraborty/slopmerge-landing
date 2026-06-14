// Client-only toast bus. Mirrors lib/sound.ts: a tiny imperative helper any
// component can fire from an event handler (`showToast("…")`, like `play("…")`),
// with a single subscriber — the root <Toast/> — that renders the message.

export type ToastListener = (message: string) => void;

let listener: ToastListener | null = null;

/** Register the renderer. Returns an unsubscribe. Used by <Toast/>. */
export function onToast(fn: ToastListener): () => void {
  listener = fn;
  return () => {
    if (listener === fn) listener = null;
  };
}

/** Pop a transient toast. No-op if the renderer isn't mounted yet. */
export function showToast(message: string): void {
  listener?.(message);
}
