"use client";

import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { StoreBadges } from "@/components/ui/StoreBadge";
import Container from "@/components/ui/Container";
import { useOverlay } from "@/components/overlays/OverlayProvider";
import { play } from "@/lib/sound";

const linkCls =
  "block cursor-pointer border-none bg-transparent p-0 py-[5px] text-left font-sans text-[15px] font-semibold text-white no-underline opacity-90 hover:underline hover:opacity-100 hover:[text-underline-offset:3px]";

const headCls =
  "mb-[14px] mt-0 font-sans text-[12px] font-bold uppercase tracking-[.14em] text-white/55";

export default function Footer() {
  const { openRate } = useOverlay();
  return (
    <footer className="bg-ink pb-9 pt-[clamp(44px,6vw,72px)] text-white">
      <Container>
        <div className="grid grid-cols-1 gap-[34px] min-[760px]:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Wordmark size={40} />
            <p className="mt-4 max-w-[30ch] text-[14px] leading-[1.6] text-white/60">
              A physics-based merge game stuffed with certified Italian brainrot.
              Drop, fuse, repeat.
            </p>
          </div>

          {/* game */}
          <div>
            <h4 className={headCls}>Game</h4>
            <a className={linkCls} href="#features">
              Features
            </a>
            <a className={linkCls} href="#roster">
              Characters
            </a>
            <a className={linkCls} href="#get">
              Download
            </a>
          </div>

          {/* legal */}
          <div>
            <h4 className={headCls}>Legal</h4>
            <Link className={linkCls} href="/privacy" onClick={() => play("drop")}>
              Privacy Policy
            </Link>
            <Link className={linkCls} href="/terms" onClick={() => play("drop")}>
              Terms of Use
            </Link>
            <button
              type="button"
              className={linkCls}
              onClick={() => {
                play("drop");
                openRate();
              }}
            >
              Rate SlopMerge
            </button>
          </div>

          {/* get it */}
          <div>
            <h4 className={headCls}>Get it</h4>
            <StoreBadges dir="column" justify="flex-start" />
          </div>
        </div>

        <div className="mt-[clamp(34px,5vw,52px)] flex flex-wrap items-center justify-between gap-[10px] border-t border-white/[.14] pt-6 text-[13px] text-white/50">
          <span>© 2026 SlopMerge. All slop reserved.</span>
          <span>Made with Flutter by Debojyoti Chakraborty.</span>
        </div>
      </Container>
    </footer>
  );
}
