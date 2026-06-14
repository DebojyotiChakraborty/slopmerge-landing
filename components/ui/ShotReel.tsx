"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SHOTS = [
  "/screens/gameplay.webp",
  "/screens/modes.webp",
  "/screens/home.webp",
];

type ShotReelProps = {
  /** Border radius in px (use `className` instead for responsive radii). */
  radius?: number;
  className?: string;
};

/**
 * Real in-game screenshot reel. Crossfades gameplay → modes → home every 3s,
 * pauses while hovered, no indicators or controls. Honors reduced-motion by
 * never advancing past the first shot. The screenshots already include the
 * iOS status bar, so no notch overlay belongs on top of this.
 */
export default function ShotReel({ radius, className = "" }: ShotReelProps) {
  const [active, setActive] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) return; // stay on the first shot, fully visible

    const id = window.setInterval(() => {
      if (!paused.current) setActive((i) => (i + 1) % SHOTS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      className={`relative w-full overflow-hidden bg-black ${className}`}
      style={{ aspectRatio: "1320 / 2868", borderRadius: radius }}
    >
      {SHOTS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="SlopMerge gameplay"
          width={1320}
          height={2868}
          sizes="(min-width: 980px) 286px, 200px"
          preload={i === 0}
          draggable={false}
          className="absolute inset-0 h-full w-full select-none object-cover"
          style={{
            opacity: i === active ? 1 : 0,
            transition: "opacity .7s ease",
          }}
        />
      ))}
    </div>
  );
}
