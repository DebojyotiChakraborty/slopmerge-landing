"use client";

import Wordmark from "@/components/ui/Wordmark";
import SoundToggle from "@/components/ui/SoundToggle";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Container from "@/components/ui/Container";
import { useOverlay } from "@/components/overlays/OverlayProvider";

const linkCls =
  "text-[15px] font-bold tracking-[.01em] text-ink no-underline opacity-85 transition hover:-translate-y-px hover:opacity-100";

export default function Nav() {
  const { openDownload } = useOverlay();
  return (
    <nav className="sticky top-0 z-40 border-b-[3px] border-tile-stroke bg-[rgba(184,168,240,.88)] shadow-[0_3px_0_rgba(67,55,126,.12)] backdrop-blur-[12px]">
      <Container className="flex h-[68px] items-center justify-between">
        <a href="#top" className="no-underline">
          <Wordmark size={26} stack={false} onClick={() => {}} />
        </a>

        <div className="hidden items-center gap-[28px] min-[860px]:flex">
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

        <div className="flex items-center gap-[10px] min-[860px]:gap-[14px]">
          <SoundToggle />
          <ChunkyButton theme="green" size="sm" onClick={openDownload}>
            Play Free
          </ChunkyButton>
        </div>
      </Container>
    </nav>
  );
}
