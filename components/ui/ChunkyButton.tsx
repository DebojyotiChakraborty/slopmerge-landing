"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import { play } from "@/lib/sound";
import {
  chunkyBase,
  chunkySize,
  chunkyStyle,
  type ChunkySize,
  type ChunkyTheme,
} from "./chunky";

type ChunkyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  theme?: ChunkyTheme;
  size?: ChunkySize;
};

/**
 * Chunky 3D pressable button. The solid face sits on a darker bottom "edge"
 * (hard box-shadow) and physically depresses on :active. Theme colors ride in
 * on CSS vars so the layered shadow can reference them. Plays a drop sound.
 */
export default function ChunkyButton({
  children,
  theme = "green",
  size = "md",
  onClick,
  style,
  className = "",
  ...rest
}: ChunkyButtonProps) {
  return (
    <button
      onClick={(e) => {
        play("drop");
        onClick?.(e);
      }}
      style={chunkyStyle(theme, style ?? undefined)}
      className={`${chunkyBase} ${chunkySize(size)} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
