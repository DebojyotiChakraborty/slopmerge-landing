import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import { ALLCH } from "@/lib/characters";

const EDGE_FADE =
  "linear-gradient(90deg,transparent,#000 5%,#000 95%,transparent)";

/**
 * Auto-scrolling roster strip. Server-rendered (pure CSS animation, no JS) —
 * the array is doubled so the -50% translate loops seamlessly. Marquee runs at
 * 40s on desktop, 22s on small screens.
 */
export default function CharacterMarquee() {
  const row = [...ALLCH, ...ALLCH];
  return (
    <section
      id="roster"
      aria-labelledby="roster-title"
      className="overflow-hidden bg-lav py-[clamp(48px,7vw,92px)]"
    >
      <Container>
        <SectionHead
          eyebrow="the roster"
          eyebrowColor="var(--green-deep)"
          title="meet the brainrot"
          titleId="roster-title"
          sub="65 certified legends across five modes. Here’s a taste."
        />
      </Container>

      <div style={{ maskImage: EDGE_FADE, WebkitMaskImage: EDGE_FADE }}>
        <div className="flex w-max animate-marquee gap-[22px] max-[640px]:[animation-duration:22s]">
          {row.map((c, i) => (
            <div
              key={i}
              className="relative h-[clamp(84px,9vw,116px)] w-[clamp(84px,9vw,116px)] flex-[0_0_auto] [filter:drop-shadow(0_8px_8px_rgba(46,30,100,.2))]"
            >
              <Image src={c.img} alt="" fill sizes="116px" className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
