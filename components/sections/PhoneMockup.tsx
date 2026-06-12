import ShotReel from "@/components/ui/ShotReel";

/**
 * Tilted dark phone bezel showing the real in-game screenshot reel.
 * The screenshots carry their own status bar / dynamic island, so the
 * bezel draws no notch. Smaller and tilted the other way below 980px.
 */
export default function PhoneMockup() {
  return (
    <div className="relative z-[3] w-[212px] -rotate-3 rounded-[31px] bg-[#0e0b16] p-[8px] shadow-[0_30px_60px_rgba(46,30,100,.45),inset_0_0_0_2px_rgba(255,255,255,.08)] min-[980px]:w-[clamp(252px,30vw,308px)] min-[980px]:rotate-3 min-[980px]:rounded-[42px] min-[980px]:p-[11px]">
      <ShotReel className="rounded-[24px] min-[980px]:rounded-[33px]" />
    </div>
  );
}
