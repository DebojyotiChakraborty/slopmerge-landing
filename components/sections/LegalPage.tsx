import Link from "next/link";
import Container from "@/components/ui/Container";
import { chunkyBase, chunkySize, chunkyStyle } from "@/components/ui/chunky";
import { LAST_UPDATED, type LegalDoc } from "@/lib/legal";

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
            <p className="mb-[26px] text-[16px] leading-[1.65] text-[rgba(46,30,100,.8)]">
              {doc.intro}
            </p>

            <div className="grid gap-[22px]">
              {doc.sections.map((s) => (
                <section key={s.h}>
                  <h2 className="mb-[6px] font-display text-[19px] leading-tight text-ink">
                    {s.h}
                  </h2>
                  <p className="text-[14.5px] leading-[1.65] text-[rgba(46,30,100,.74)]">
                    {s.p}
                  </p>
                </section>
              ))}
            </div>

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
