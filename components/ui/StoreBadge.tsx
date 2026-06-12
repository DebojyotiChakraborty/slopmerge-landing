"use client";

import type { CSSProperties } from "react";
import { play } from "@/lib/sound";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/links";

/* MingCute apple-fill */
function AppleGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="m13.064 6.685l.745-.306c.605-.24 1.387-.485 2.31-.33c1.891.318 3.195 1.339 3.972 2.693c.3.522.058 1.21-.502 1.429a2.501 2.501 0 0 0 .133 4.706c.518.17.81.745.64 1.263c-.442 1.342-1.078 2.581-1.831 3.581c-.744.988-1.652 1.808-2.663 2.209c-.66.26-1.368.163-2.045-.005l-.402-.107l-.597-.173c-.271-.079-.55-.147-.824-.147c-.275 0-.553.068-.824.147l-.597.173l-.402.107c-.677.168-1.386.266-2.045.005c-1.273-.504-2.396-1.68-3.245-3.067a13.5 13.5 0 0 1-1.784-4.986c-.227-1.554-.104-3.299.615-4.775c.74-1.521 2.096-2.705 4.163-3.053c.84-.141 1.562.048 2.14.265l.331.13l.584.241c.4.157.715.249 1.064.249c.348 0 .664-.092 1.064-.249m-1.296-3.917c.976-.977 2.475-1.061 2.828-.707c.354.353.27 1.852-.707 2.828c-.976.976-2.475 1.06-2.828.707c-.354-.353-.27-1.852.707-2.828" />
    </svg>
  );
}

/* MingCute google-play-fill */
function PlayGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path d="m12 13.414l2.947 2.947l-9.697 5.598a1.49 1.49 0 0 1-1.568-.041l-.108-.078zm-9-9L10.586 12L3 19.586zm13.74 4.26l3.51 2.027c1 .577 1 2.02 0 2.598l-3.51 2.027L13.414 12zM5.25 2.041l9.697 5.598L12 10.586L3.574 2.159a1.49 1.49 0 0 1 1.676-.118" />
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
