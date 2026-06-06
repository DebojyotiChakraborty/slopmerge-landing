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
        <div className="grid grid-cols-1 gap-5 min-[720px]:grid-cols-3">
          {HOOKS.map((h, i) => (
            <div key={h.t} className="card px-6 py-[26px] text-center">
              <FloatChar
                src={charSrc(h.img)}
                size={92}
                r={i % 2 ? 8 : -8}
                dur={4 + i * 0.4}
                delay={i * 0.2}
                className="mx-auto mb-3"
              />
              <h3 className="font-display text-[26px] text-ink">{h.t}</h3>
              <p className="mt-[6px] text-[15px] text-[rgba(46,30,100,.72)]">{h.d}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
