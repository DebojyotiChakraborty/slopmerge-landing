"use client";

import { useRef, useState } from "react";
import type { CSSProperties } from "react";
import StickerText from "./StickerText";
import { play } from "@/lib/sound";

type WordmarkProps = {
  /** Base font size in px. */
  size?: number;
  /** Stacked (two lines) vs inline. */
  stack?: boolean;
  /** Override stroke width; defaults to max(5, size × 0.13). */
  sw?: number | null;
  /** Override the default wiggle-on-click behavior. */
  onClick?: () => void;
  className?: string;
};

/** "Slop" (purple) + "Merge" (gold), both stroked. Wiggles + blips on click. */
export default function Wordmark({
  size = 56,
  stack = true,
  sw = null,
  onClick,
  className = "",
}: WordmarkProps) {
  const stroke = sw ?? Math.max(5, size * 0.13);
  const [w, setW] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  const fire = () => {
    setW(true);
    play("drop");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setW(false), 500);
  };

  const wrapStyle = {
    flexDirection: stack ? "column" : "row",
    gap: stack ? size * 0.02 : size * 0.18,
    lineHeight: 0.9,
    animation: w ? "wiggle .45s ease" : undefined,
  } as CSSProperties;

  return (
    <div
      onClick={onClick ?? fire}
      className={`inline-flex cursor-pointer items-center ${className}`}
      style={wrapStyle}
    >
      <StickerText fill="var(--brainrot)" sw={stroke} size={size}>
        Slop
      </StickerText>
      <StickerText
        fill="var(--merge)"
        sw={stroke}
        size={size}
        style={{ marginTop: stack ? -size * 0.12 : 0 }}
      >
        Merge
      </StickerText>
    </div>
  );
}
