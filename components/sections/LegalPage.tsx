import Link from "next/link";
import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { chunkyBase, chunkySize, chunkyStyle } from "@/components/ui/chunky";
import { LAST_UPDATED, type LegalBlock, type LegalDoc } from "@/lib/legal";

const linkCls =
  "font-semibold text-ink underline decoration-tile-stroke/40 underline-offset-2 transition-colors hover:decoration-tile-stroke";

/** Internal routes use next/link; external URLs open in a new tab. */
function Anchor({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={linkCls}>
        {children}
      </Link>
    );
  }
  const mailto = href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={linkCls}
      {...(mailto ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

// Lightweight inline markup: **bold**, *italic*, `code`, [label](href),
// bare URLs, and emails. Bold/italic/link inner text is rendered recursively.
const INLINE =
  /\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s)]+)|([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

function renderInline(text: string): ReactNode[] {
  const re = new RegExp(INLINE.source, "g"); // own lastIndex (safe to recurse)
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(
        <strong key={key++} className="font-bold text-ink">
          {renderInline(m[1])}
        </strong>,
      );
    } else if (m[2] !== undefined) {
      out.push(<em key={key++}>{renderInline(m[2])}</em>);
    } else if (m[3] !== undefined) {
      out.push(
        <code
          key={key++}
          className="rounded-[5px] bg-tile-stroke/10 px-[5px] py-[1px] font-mono text-[.85em] text-ink"
        >
          {m[3]}
        </code>,
      );
    } else if (m[4] !== undefined) {
      out.push(
        <Anchor key={key++} href={m[5]}>
          {renderInline(m[4])}
        </Anchor>,
      );
    } else if (m[6] !== undefined) {
      // Bare URL — keep trailing sentence punctuation out of the link.
      let url = m[6];
      const trail = url.match(/[.,;:]+$/)?.[0] ?? "";
      if (trail) url = url.slice(0, -trail.length);
      out.push(
        <Anchor key={key++} href={url}>
          {url}
        </Anchor>,
      );
      if (trail) out.push(trail);
    } else if (m[7] !== undefined) {
      out.push(
        <Anchor key={key++} href={`mailto:${m[7]}`}>
          {m[7]}
        </Anchor>,
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Blocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-[10px] break-words">
      {blocks.map((b, i) => {
        if (b.type === "h3") {
          return (
            <h3
              key={i}
              className="pt-[6px] font-display text-[15.5px] leading-tight text-ink"
            >
              {renderInline(b.text)}
            </h3>
          );
        }
        if (b.type === "ul") {
          return (
            <ul
              key={i}
              className="list-disc space-y-[6px] pl-[22px] text-[14.5px] leading-[1.6] text-[rgba(46,30,100,.74)] marker:text-tile-stroke"
            >
              {b.items.map((it, j) => (
                <li key={j}>{renderInline(it)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p
            key={i}
            className="text-[14.5px] leading-[1.65] text-[rgba(46,30,100,.74)]"
          >
            {renderInline(b.text)}
          </p>
        );
      })}
    </div>
  );
}

/**
 * Full-page legal document, styled like the reference overlay card. Server
 * component — pure content for SEO + shareable URLs.
 */
export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main className="min-h-screen bg-lav py-[clamp(16px,4vw,56px)]">
      <Container>
        <article className="mx-auto max-w-[820px] overflow-hidden rounded-modal border-4 border-tile-stroke bg-white shadow-[0_30px_70px_rgba(46,30,100,.5)]">
          {/* sticky header */}
          <div className="sticky top-0 z-[2] flex items-center gap-[14px] border-b-[3px] border-tile-stroke bg-lav px-[clamp(20px,4vw,40px)] py-4">
            <h1 className="font-display text-[clamp(24px,3vw,34px)] text-ink">
              {doc.title}
            </h1>
            <div className="ml-auto flex items-center gap-[14px]">
              <span className="hidden text-[13px] font-semibold text-[rgba(46,30,100,.6)] min-[640px]:inline">
                Updated {LAST_UPDATED}
              </span>
              <Link
                href="/"
                aria-label="back to game"
                className="flex h-[38px] w-[38px] items-center justify-center rounded-[12px] border-[2.5px] border-tile-stroke bg-white text-[19px] leading-none text-ink no-underline shadow-[0_3px_0_rgba(67,55,126,.25)]"
              >
                ×
              </Link>
            </div>
          </div>

          {/* body */}
          <div className="px-[clamp(24px,4vw,44px)] py-[clamp(24px,4vw,44px)]">
            {/* intro — slightly larger lead text */}
            <div className="[&_p]:text-[15.5px] [&_p]:leading-[1.7] [&_p]:text-[rgba(46,30,100,.82)]">
              <Blocks blocks={doc.intro} />
            </div>

            <hr className="my-[26px] border-t border-tile-stroke/15" />

            <div className="space-y-[26px]">
              {doc.sections.map((s) => (
                <section key={s.h}>
                  <h2 className="mb-[8px] font-display text-[19px] leading-tight text-ink">
                    {s.h}
                  </h2>
                  <Blocks blocks={s.blocks} />
                </section>
              ))}
            </div>

            {doc.footer && (
              <p className="mt-[28px] border-t border-tile-stroke/15 pt-[18px] text-[12.5px] italic leading-[1.6] text-[rgba(46,30,100,.55)]">
                {renderInline(doc.footer)}
              </p>
            )}

            <div className="mt-8 text-center">
              <Link
                href="/"
                className={`${chunkyBase} ${chunkySize("md")}`}
                style={chunkyStyle("purple")}
              >
                Back to game
              </Link>
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
}
