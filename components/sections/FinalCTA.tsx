"use client";

import type { CSSProperties } from "react";
import FloatChar from "@/components/ui/FloatChar";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Container from "@/components/ui/Container";
import { useOverlay } from "@/components/overlays/OverlayProvider";
import { charSrc } from "@/lib/characters";

export default function FinalCTA() {
  const { openDownload } = useOverlay();
  return (
    <section
      id="get"
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-[clamp(48px,7vw,92px)] text-center"
      style={{
        background: "linear-gradient(160deg,var(--brainrot),#A77BE8 58%,var(--tile))",
      }}
    >
      <FloatChar
        src={charSrc("Glorbo Fruttodrillo")}
        size={92}
        r={-14}
        dur={4.4}
        className="absolute bottom-[12%] left-[6%] z-[1]"
      />
      <FloatChar
        src={charSrc("Goobzilla Supreme")}
        size={86}
        r={12}
        dur={5}
        className="absolute right-[7%] top-[14%] z-[1]"
      />

      <Container className="relative z-[2]">
        <h2
          id="cta-title"
          className="sticker text-[clamp(34px,5.2vw,64px)]"
          style={
            {
              color: "#fff",
              "--sw": "7px",
              textShadow: "0 5px 0 rgba(67,55,126,.32)",
            } as CSSProperties
          }
        >
          ready to merge?
        </h2>
        <p className="mx-auto mb-[26px] mt-[18px] max-w-[30ch] text-[clamp(15px,1.8vw,20px)] font-bold text-white [text-shadow:0_2px_0_rgba(67,55,126,.35)]">
          Free. Offline. Dangerously fun and addictive. Get the slop.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[14px]">
          <ChunkyButton theme="gold" size="lg" onClick={openDownload}>
            Play Now
          </ChunkyButton>
        </div>
      </Container>
    </section>
  );
}
