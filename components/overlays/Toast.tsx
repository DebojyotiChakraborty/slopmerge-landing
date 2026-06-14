"use client";

import { useEffect, useState } from "react";
import { onToast } from "@/lib/toast";

const EASE_BACK = "cubic-bezier(.34,1.56,.64,1)"; // bouncy overshoot ≈ spring bounce
const VISIBLE_MS = 2200; // dwell before auto-dismiss
const EXIT_MS = 300; // drop-out duration

/**
 * Root-level toast: a pill that springs up from below with an overshoot bounce
 * (the Skiper "type: spring" feel, done in CSS) and drops back out. Subscribes
 * to the lib/toast bus, so any component can `showToast("…")`. A new toast
 * mid-show restarts the animation, so repeat taps re-pop.
 */
export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    let hideT = 0;
    let clearT = 0;
    let raf = 0;
    const unsub = onToast((msg) => {
      window.clearTimeout(hideT);
      window.clearTimeout(clearT);
      cancelAnimationFrame(raf);
      setMessage(msg);
      setShown(false); // start from below…
      raf = requestAnimationFrame(() => setShown(true)); // …then spring up
      hideT = window.setTimeout(() => setShown(false), VISIBLE_MS);
      clearT = window.setTimeout(() => setMessage(null), VISIBLE_MS + EXIT_MS);
    });
    return () => {
      unsub();
      window.clearTimeout(hideT);
      window.clearTimeout(clearT);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (message === null) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-[28px] z-[100] flex justify-center px-4"
      role="status"
      aria-live="polite"
    >
      <div
        className="inline-flex items-center gap-2 rounded-full border-[3px] border-white bg-ink px-[22px] py-[13px] font-display text-[17px] leading-none tracking-[.01em] text-white shadow-[0_5px_0_#0c0913,0_12px_24px_rgba(46,30,100,.45)]"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown
            ? "translateY(0) scale(1)"
            : "translateY(150%) scale(.8)",
          transition: shown
            ? `transform .55s ${EASE_BACK}, opacity .2s ease`
            : `transform ${EXIT_MS}ms cubic-bezier(.4,0,1,1), opacity .22s ease`,
        }}
      >
        <span aria-hidden="true" className="text-[18px] leading-none">
          ⏳
        </span>
        <span className="pt-[2px]">{message}</span>
      </div>
    </div>
  );
}
