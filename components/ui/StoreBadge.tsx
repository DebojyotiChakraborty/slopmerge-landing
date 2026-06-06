"use client";

import type { CSSProperties } from "react";
import { play } from "@/lib/sound";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

function AppleGlyph() {
  return (
    <svg width="22" height="24" viewBox="0 0 22 24" fill="#fff" aria-hidden="true">
      <path d="M15.8 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.8-2-1.6-.2-3.1.9-3.9.9s-2.1-.9-3.4-.9C3.2 6.7 1.4 8.2 1.4 11.2c0 1.7.6 3.5 1.4 4.7.7 1.1 1.6 2.3 2.7 2.3 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7 1.9-1.1 2.6-2.2c.5-.8.8-1.6 1-2-.1 0-2.7-1-2.7-4.1zM13.4 4.7c.6-.7 1-1.7.9-2.7-.9 0-2 .6-2.6 1.3-.6.6-1.1 1.6-1 2.6 1 .1 2-.5 2.7-1.2z" />
    </svg>
  );
}

function PlayGlyph() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
      <path d="M1 1.5 12.5 11 1 20.5z" fill="#34D17F" />
      <path d="M1 1.5 9 9l3.5-2.5z" fill="#FF5A5A" />
      <path d="M1 20.5 9 13l3.5 2.5z" fill="#FFC53D" />
      <path d="M12.5 11 16 8.8 19 11l-3 2.2z" fill="#2FA7FF" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="#fff"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="ml-auto opacity-80"
    >
      <path d="M6 3l6 6-6 6" />
    </svg>
  );
}

type StoreBadgeProps = {
  store?: "apple" | "google";
  /** "badge" = compact pill (hero/footer); "row" = full-width store row (dialog). */
  variant?: "badge" | "row";
  className?: string;
};

export default function StoreBadge({
  store = "apple",
  variant = "badge",
  className = "",
}: StoreBadgeProps) {
  const apple = store === "apple";
  const url = apple ? APP_STORE_URL : PLAY_STORE_URL;
  const row = variant === "row";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        play("drop");
        if (url === "#") e.preventDefault(); // placeholder — see lib/links.ts
      }}
      aria-label={apple ? "Download on the App Store" : "Get it on Google Play"}
      className={[
        "inline-flex cursor-pointer items-center gap-[10px] bg-[#16111f] text-left text-white no-underline",
        "rounded-[14px] border-[2.5px] border-[color:var(--stroke)]",
        "shadow-[0_4px_0_#0c0913,0_8px_14px_rgba(46,30,100,.3)] transition-transform duration-[70ms]",
        "active:translate-y-[3px] active:shadow-[0_1px_0_#0c0913,0_3px_8px_rgba(46,30,100,.3)]",
        "focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-white",
        row ? "w-full justify-start px-[18px] py-[13px]" : "px-[15px] py-[9px]",
        className,
      ].join(" ")}
    >
      {apple ? <AppleGlyph /> : <PlayGlyph />}
      <span className="flex flex-col">
        <span className="text-[9px] uppercase leading-none tracking-[.12em] opacity-[.78]">
          {apple ? "Download on the" : "Get it on"}
        </span>
        <span
          className="mt-[2px] font-bold leading-[1.1]"
          style={{ fontSize: row ? 18 : 16 }}
        >
          {apple ? "App Store" : "Google Play"}
        </span>
      </span>
      {row && <Chevron />}
    </a>
  );
}

export function StoreBadges({
  dir = "row",
  gap = 10,
  justify = "center",
  className = "",
}: {
  dir?: "row" | "column";
  gap?: number;
  justify?: CSSProperties["justifyContent"];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap ${className}`}
      style={{ flexDirection: dir, gap, justifyContent: justify }}
    >
      <StoreBadge store="apple" />
      <StoreBadge store="google" />
    </div>
  );
}
