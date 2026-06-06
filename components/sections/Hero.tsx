"use client";

import type { CSSProperties } from "react";
import FloatChar from "@/components/ui/FloatChar";
import ChunkyButton from "@/components/ui/ChunkyButton";
import Container from "@/components/ui/Container";
import PhoneMockup from "./PhoneMockup";
import { useOverlay } from "@/components/overlays/OverlayProvider";
import { charSrc } from "@/lib/characters";
import { TRAILER_URL } from "@/lib/links";

const SCATTER = [
  { n: "Chimpanzini Bananini", s: 78, x: "4%", y: "6%", r: -12, d: 5 },
  { n: "Ballerina Cappuccina", s: 70, x: "80%", y: "2%", r: 11, d: 4.6 },
  { n: "Cappuccino Assassino", s: 62, x: "84%", y: "70%", r: -9, d: 5.4 },
  { n: "Trippi Trippi", s: 60, x: "-2%", y: "72%", r: 13, d: 4.3 },
];

const STARS: [number, number][] = [
  [8, 22],
  [92, 30],
  [50, 12],
  [70, 82],
  [24, 88],
  [88, 60],
];

const HERO_GRADIENT =
  "linear-gradient(150deg, var(--brainrot) 0%, #B58CF0 34%, var(--lav) 66%, var(--merge) 132%)";

export default function Hero() {
  const { openDownload } = useOverlay();

  return (
    <header
      id="top"
      className="relative overflow-hidden"
      style={{ background: HERO_GRADIENT }}
    >
      {STARS.map(([x, y], i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute z-[1] text-[16px] text-white [text-shadow:0_0_8px_#fff]"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            animation: `twinkle ${1.5 + i * 0.3}s ease-in-out infinite`,
          }}
        >
          ✦
        </span>
      ))}

      <Container className="relative z-[2] grid grid-cols-1 items-center gap-9 py-[clamp(36px,6vw,76px)] pb-[clamp(48px,7vw,84px)] min-[980px]:grid-cols-[1.04fr_.96fr] min-[980px]:gap-6">
        {/* left: copy + CTAs */}
        <div className="text-center min-[980px]:text-left">
          <h1
            className="m-0 inline-block font-display text-[clamp(52px,8.4vw,104px)] text-white"
            style={{
              lineHeight: 0.92,
              paintOrder: "stroke fill",
              WebkitTextStroke: "clamp(6px,1.1vw,11px) var(--stroke)",
              textShadow: "0 6px 0 rgba(67,55,126,.3)",
              transform: "rotate(-3deg)",
            }}
          >
            MERGE
            <br />
            <span style={{ color: "var(--merge)" }}>THE SLOP</span>
          </h1>

          <p className="mx-auto mt-[18px] max-w-[30ch] text-[clamp(17px,2vw,22px)] font-bold text-white [text-shadow:0_2px_0_rgba(67,55,126,.38)] min-[980px]:mx-0">
            two of the same? they fuse. simple, addictive, completely unhinged.
          </p>
          <p className="mx-auto mt-[10px] max-w-[34ch] text-[clamp(14px,1.5vw,17px)] font-semibold text-white/95 [text-shadow:0_1px_0_rgba(67,55,126,.32)] min-[980px]:mx-0">
            bored out of your skull? it’s the funnest way to kill time — free,
            offline, and dangerously replayable.
          </p>

          <div className="mt-[26px] flex flex-wrap justify-center gap-[14px] min-[980px]:justify-start">
            <ChunkyButton theme="gold" size="lg" onClick={openDownload}>
              Play Now
            </ChunkyButton>
            <ChunkyButton
              theme="purple"
              size="lg"
              onClick={() => {
                // TODO(user): wire the real "Watch It Cook" trailer in lib/links.ts
                if (TRAILER_URL !== "#")
                  window.open(TRAILER_URL, "_blank", "noopener");
              }}
            >
              Watch It Cook
            </ChunkyButton>
          </div>
        </div>

        {/* right: floating chars + tilted phone */}
        <div className="relative flex min-h-[360px] items-center justify-center">
          {SCATTER.map((c, i) => (
            <FloatChar
              key={c.n}
              src={charSrc(c.n)}
              size={c.s}
              r={c.r}
              dur={c.d}
              delay={i * 0.3}
              priority
              className="absolute z-[1]"
              style={{ left: c.x, top: c.y } as CSSProperties}
            />
          ))}
          <PhoneMockup />
        </div>
      </Container>
    </header>
  );
}
