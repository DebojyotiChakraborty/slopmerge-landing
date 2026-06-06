type SectionHeadProps = {
  /** Pill eyebrow text (uppercase, tracked). */
  eyebrow: string;
  /** Eyebrow text + border color. */
  eyebrowColor?: string;
  /** ChangaOne h2 below the eyebrow. */
  title: string;
  /** id for aria-labelledby on the parent section. */
  titleId?: string;
  /** Optional sub-line under the title. */
  sub?: string;
};

/** Centered section header: pill eyebrow + ChangaOne h2 (+ optional sub). */
export default function SectionHead({
  eyebrow,
  eyebrowColor = "var(--tile)",
  title,
  titleId,
  sub,
}: SectionHeadProps) {
  return (
    <div className="mx-auto mb-[clamp(30px,4vw,52px)] max-w-[680px] text-center">
      <span
        className="inline-block rounded-full border-[2.5px] border-current bg-white px-[14px] py-[6px] text-[13px] font-bold uppercase tracking-[.16em]"
        style={{ color: eyebrowColor }}
      >
        {eyebrow}
      </span>
      <h2
        id={titleId}
        className="mt-[10px] font-display text-[clamp(30px,4.4vw,52px)] leading-none text-ink"
      >
        {title}
      </h2>
      {sub && (
        <p className="mt-3 text-[16px] text-[rgba(46,30,100,.7)]">{sub}</p>
      )}
    </div>
  );
}
