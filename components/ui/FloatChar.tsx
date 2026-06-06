"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import { play } from "@/lib/sound";

type FloatCharProps = {
  src: string;
  /** Square size in px. */
  size?: number;
  /** Base rotation in degrees (alternate sign between neighbors). */
  r?: number;
  /** Bob duration in seconds. */
  dur?: number;
  /** Bob delay in seconds. */
  delay?: number;
  /** Whether tapping wiggles + plays a sound (decorative easter egg). */
  tap?: boolean;
  onPop?: () => void;
  /** Set for above-the-fold art to avoid pop-in. */
  priority?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Bobbing character sticker. The wrapper runs the `bob` loop (with a slight
 * rotation via --r/--r2); an inner layer handles the tap wiggle so the two
 * animations compose cleanly.
 */
export default function FloatChar({
  src,
  size = 90,
  r = 0,
  dur = 4,
  delay = 0,
  tap = true,
  onPop,
  priority = false,
  className = "",
  style,
}: FloatCharProps) {
  const [wig, setWig] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const pop = () => {
    play("drop");
    setWig(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setWig(false), 400);
    onPop?.();
  };

  const wrapStyle = {
    width: size,
    height: size,
    animation: `bob ${dur}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    filter: "drop-shadow(0 10px 10px rgba(46,30,100,.25))",
    "--r": `${r}deg`,
    "--r2": `${r * 0.4}deg`,
    ...style,
  } as CSSProperties;

  return (
    <div className={`will-change-transform ${className}`} style={wrapStyle}>
      <div
        onClick={tap ? pop : undefined}
        className={tap ? "h-full w-full cursor-pointer" : "h-full w-full"}
        style={{ animation: wig ? "wiggle .4s ease" : undefined }}
      >
        <Image
          src={src}
          alt=""
          width={size}
          height={size}
          priority={priority}
          draggable={false}
          className="h-full w-full select-none object-contain"
        />
      </div>
    </div>
  );
}
