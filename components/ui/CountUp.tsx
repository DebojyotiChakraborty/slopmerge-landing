"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  to: number;
  /** Duration in ms. */
  dur?: number;
  prefix?: string;
  suffix?: string;
  start?: number;
};

/**
 * Counts from `start` to `to` with an ease-out-cubic curve when scrolled into
 * view (IntersectionObserver, fires once). Honors reduced-motion by jumping
 * straight to the final value.
 */
export default function CountUp({
  to,
  dur = 1600,
  prefix = "",
  suffix = "",
  start = 0,
}: CountUpProps) {
  const [v, setV] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let t0: number | null = null;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setV(to); // honor reduced-motion: snap to the final value, no tween
          return;
        }
        const step = (t: number) => {
          if (t0 === null) t0 = t;
          const p = Math.min(1, (t - t0) / dur);
          setV(Math.round(start + (to - start) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, dur, start]);

  return (
    <span ref={ref}>
      {prefix}
      {v.toLocaleString()}
      {suffix}
    </span>
  );
}
