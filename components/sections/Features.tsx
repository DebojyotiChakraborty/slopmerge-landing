import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";
import FloatChar from "@/components/ui/FloatChar";
import { charSrc } from "@/lib/characters";

const FEATS = [
  {
    e: "5 modes · 65 legends",
    t: "Collect the lineup",
    b: "Five chaotic modes, 13 fresh legends each — 65 to fuse, evolve and collect, from Tralalero Tralala to Bombardiro Crocodilo.",
    img: "Bombardiro Crocodilo",
  },
  {
    e: "physics-based",
    t: "Drop. Merge. Repeat.",
    b: "Real physics drops, juicy pops, and combo chains that hit different. One-handed, instant-play, zero learning curve.",
    img: "Trippi Trippi",
  },
  {
    e: "coins & power-ups",
    t: "Claw back from doom",
    b: "Earn coins as you merge, then spend them on revives, shakes and pops to rescue a stack that’s seconds from toppling.",
    img: "Okay Punch Kid",
  },
  {
    e: "leaderboard",
    t: "Beat your best",
    b: "Every run is logged with score, date and time. Climb your own ladder and flex those high scores.",
    img: "Sigma Capybro",
  },
  {
    e: "juicy feedback",
    t: "Sounds you can feel",
    b: "Soft thud on drop, pop on merge, rising pitch on combos, plus spoken character callouts and haptics tuned for max satisfaction.",
    img: "Chimpanzini Bananini",
  },
  {
    e: "instant play",
    t: "Pick up, put down",
    b: "No tutorials, no accounts, no wifi. Boot it up, drop a few, beat your score — short sessions, endless replays.",
    img: "Skibidi Popolini",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="py-[clamp(48px,7vw,92px)]"
      style={{ background: "#CFD8EE" }}
    >
      <Container>
        <SectionHead
          eyebrow="the goods"
          eyebrowColor="var(--brainrot)"
          title="why it slaps"
          titleId="features-title"
        />
        <div className="grid grid-cols-1 gap-[22px] min-[640px]:grid-cols-2 min-[1000px]:grid-cols-3">
          {FEATS.map((f, i) => (
            <div key={f.t} className="card flex flex-col items-start p-6">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-[22px] border-[3px] border-tile-stroke bg-lav shadow-[0_5px_0_rgba(67,55,126,.2)]">
                <FloatChar
                  src={charSrc(f.img)}
                  size={84}
                  r={i % 2 ? 9 : -9}
                  dur={4.2 + i * 0.25}
                  delay={i * 0.15}
                />
              </div>
              <div className="mb-[5px] text-[11px] font-bold uppercase tracking-[.14em] text-tile">
                {f.e}
              </div>
              <h3 className="font-display text-[24px] leading-[1.04] text-ink">{f.t}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.55] text-[rgba(46,30,100,.72)]">
                {f.b}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
