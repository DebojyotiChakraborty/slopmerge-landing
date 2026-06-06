"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { SFX, play } from "@/lib/sound";

function SpeakerOn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path
        d="M16 8c1.5 1 1.5 7 0 8"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerOff() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path
        d="M17 9l4 6M21 9l-4 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Toggles the global SFX flag. Plays a confirmation blip when re-enabling. */
export default function SoundToggle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  const [on, setOn] = useState(SFX.on);
  return (
    <button
      type="button"
      aria-label={on ? "mute sound" : "unmute sound"}
      aria-pressed={on}
      onClick={() => {
        SFX.on = !SFX.on;
        setOn(SFX.on);
        if (SFX.on) play("merge");
      }}
      className={`inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-[12px] border-[2.5px] border-tile-stroke bg-white text-ink shadow-[0_3px_0_rgba(67,55,126,.25)] ${className}`}
      style={style}
    >
      {on ? <SpeakerOn /> : <SpeakerOff />}
    </button>
  );
}
