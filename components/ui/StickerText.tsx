import type { CSSProperties, ElementType, ReactNode } from "react";

type StickerTextProps = {
  children: ReactNode;
  /** Fill color (white, brainrot, merge, …). */
  fill?: string;
  /** Stroke width in px. Scales roughly with size (~size × 0.12). */
  sw?: number;
  /** Numeric px (auto-derives the hard text-shadow) or any CSS length string. */
  size?: number | string;
  /** Rendered element (defaults to span). */
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

/**
 * Stroked "sticker" display text — ChangaOne with -webkit-text-stroke + a hard
 * drop shadow. The `.sticker` utility (globals.css) carries the un-expressible
 * bits; per-instance stroke width comes through the `--sw` custom property.
 */
export default function StickerText({
  children,
  fill = "#fff",
  sw = 6,
  size = 44,
  as: Tag = "span",
  className = "",
  style,
}: StickerTextProps) {
  const autoShadow =
    typeof size === "number"
      ? `0 ${Math.max(2, size * 0.06)}px 0 rgba(67,55,126,.32)`
      : undefined;

  const composed = {
    color: fill,
    fontSize: size,
    textShadow: autoShadow,
    "--sw": `${sw}px`,
    ...style,
  } as CSSProperties;

  return (
    <Tag className={`sticker ${className}`.trim()} style={composed}>
      {children}
    </Tag>
  );
}
