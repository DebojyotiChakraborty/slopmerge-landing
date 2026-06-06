import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import FloatChar from "@/components/ui/FloatChar";
import { charSrc } from "@/lib/characters";

const HOOKS = [
  { t: "DROP IT", d: "Aim, release, let physics do the rest.", img: "Tung Tung Tung Sahur" },
  { t: "MERGE IT", d: "Two matches fuse into something bigger.", img: "Chimpanzini Bananini" },
  { t: "DON'T OVERFLOW", d: "Breach the top and it’s game over, buddy.", img: "Tralalero Tralala" },
];

export default function HowItWorks() {
  return (
    <section
      aria-labelledby="how-title"
      className="py-[clamp(48px,7vw,92px)]"
      style={{ background: "linear-gradient(180deg,var(--lav),#CFD8EE)" }}
    >
      <Container>
        <SectionHead eyebrow="how it works" title="three taps to chaos" titleId="how-title" />
        <div className="grid grid-cols-1 gap-[14px] min-[720px]:grid-cols-3 min-[720px]:gap-5">
          {HOOKS.map((h, i) => (
            <div
              key={h.t}
              className="card flex items-center gap-[14px] px-4 py-[14px] text-left min-[720px]:flex-col min-[720px]:items-stretch min-[720px]:px-6 min-[720px]:py-[26px] min-[720px]:text-center"
            >
              <FloatChar
                src={charSrc(h.img)}
                size={92}
                r={i % 2 ? 8 : -8}
                dur={4 + i * 0.4}
                delay={i * 0.2}
                className="!size-[58px] shrink-0 min-[720px]:mx-auto min-[720px]:mb-3 min-[720px]:!size-[92px]"
              />
              <div>
                <h3 className="font-display text-[21px] leading-none text-ink min-[720px]:text-[26px]">
                  {h.t}
                </h3>
                <p className="mt-[3px] text-[13.5px] text-[rgba(46,30,100,.72)] min-[720px]:mt-[6px] min-[720px]:text-[15px]">
                  {h.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
