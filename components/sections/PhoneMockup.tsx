"use client";

import Wordmark from "@/components/ui/Wordmark";
import MergeToy from "@/components/game/MergeToy";

/** Tilted phone frame running the wordmark + interactive merge box. */
export default function PhoneMockup() {
  return (
    <div
      className="relative z-[3] w-[clamp(252px,30vw,308px)] rounded-[42px] bg-[#0e0b16] p-[11px] shadow-[0_30px_60px_rgba(46,30,100,.45),inset_0_0_0_2px_rgba(255,255,255,.08)]"
      style={{ transform: "rotate(3deg)" }}
    >
      <div className="absolute left-1/2 top-[9px] z-[5] h-[22px] w-[96px] -translate-x-1/2 rounded-b-[14px] bg-[#0e0b16]" />
      <div
        className="relative overflow-hidden rounded-[33px] px-[12px] pb-[14px] pt-[30px]"
        style={{ background: "linear-gradient(180deg,var(--sky-top),var(--lav))" }}
      >
        <div className="mb-2 text-center">
          <Wordmark size={30} />
        </div>
        <MergeToy height={236} />
      </div>
    </div>
  );
}
