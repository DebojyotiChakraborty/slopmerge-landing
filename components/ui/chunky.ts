import type { CSSProperties } from "react";

// Shared chunky-button styling. Lives in a plain (non-"use client") module so
// both the client <ChunkyButton> and server-rendered links (e.g. the legal
// "Back to game" link) can reuse the exact same recipe.

export type ChunkyTheme = "green" | "gold" | "purple" | "pink";
export type ChunkySize = "sm" | "md" | "lg";

const THEMES: Record<
  ChunkyTheme,
  { face: string; edge: string; bstroke: string; text: string }
> = {
  green: { face: "var(--green)", edge: "var(--green-deep)", bstroke: "var(--green-stroke)", text: "#fff" },
  purple: { face: "var(--tile)", edge: "#5E45A8", bstroke: "var(--tile-stroke)", text: "#fff" },
  gold: { face: "var(--merge)", edge: "var(--merge-deep)", bstroke: "#9A7320", text: "#5A4209" },
  pink: { face: "#F47AB0", edge: "#D9518F", bstroke: "#9E2E63", text: "#fff" },
};

const SIZES: Record<ChunkySize, string> = {
  sm: "px-[18px] py-[11px] text-[14px]",
  md: "px-[26px] py-[15px] text-[17px]",
  lg: "px-[34px] py-[18px] text-[21px]",
};

export const chunkyBase = [
  "relative inline-flex cursor-pointer select-none items-center justify-center rounded-chunk border-[3px]",
  "border-[color:var(--bstroke)] bg-[var(--face)] font-sans font-bold uppercase leading-none tracking-[.04em] no-underline",
  "shadow-[0_6px_0_var(--edge),0_12px_18px_rgba(46,30,100,.28),inset_0_2px_0_rgba(255,255,255,.32)]",
  "transition-[transform,box-shadow] duration-[70ms] ease-out",
  "active:translate-y-[5px] active:shadow-[0_1px_0_var(--edge),0_4px_8px_rgba(46,30,100,.25),inset_0_2px_0_rgba(255,255,255,.3)]",
  "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-white",
].join(" ");

export const chunkySize = (size: ChunkySize): string => SIZES[size];

export const chunkyStyle = (
  theme: ChunkyTheme,
  extra?: CSSProperties,
): CSSProperties => {
  const t = THEMES[theme];
  return {
    color: t.text,
    "--face": t.face,
    "--edge": t.edge,
    "--bstroke": t.bstroke,
    ...extra,
  } as CSSProperties;
};
