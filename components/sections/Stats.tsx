import Container from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";

const STATS = [
  { v: 5, l: "modes" },
  { v: 13, l: "per mode" },
  { v: 65, l: "legends" },
];

export default function Stats() {
  return (
    <section
      aria-label="SlopMerge by the numbers"
      className="py-[clamp(24px,4vw,46px)]"
      style={{ background: "linear-gradient(180deg,#CFD8EE,var(--lav))" }}
    >
      <Container className="grid grid-cols-3 gap-[clamp(12px,2vw,22px)]">
        {STATS.map((s) => (
          <div
            key={s.l}
            className="card px-2 py-[clamp(20px,3vw,34px)] text-center"
            style={{ background: "var(--merge)", borderColor: "#9A7320" }}
          >
            <div
              className="font-display text-[clamp(40px,6vw,64px)] leading-none"
              style={{ color: "#5A4209" }}
            >
              <CountUp to={s.v} dur={1500} />
            </div>
            <div
              className="mt-[6px] text-[13px] font-bold uppercase tracking-[.08em]"
              style={{ color: "#7A5C12" }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
