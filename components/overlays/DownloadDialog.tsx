"use client";

import StickerText from "@/components/ui/StickerText";
import FloatChar from "@/components/ui/FloatChar";
import StoreBadge from "@/components/ui/StoreBadge";
import { charSrc } from "@/lib/characters";
import { play } from "@/lib/sound";
import Modal from "./Modal";

const EASE_BACK = "cubic-bezier(.34,1.56,.64,1)";

/** Game-style store dialog: pops in with overshoot, title trails ~180ms. */
export default function DownloadDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} ariaLabel="Get SlopMerge" onOpen={() => play("merge")}>
      {(mounted) => (
        <div className="relative w-[330px] max-w-[86vw] rounded-modal border-4 border-white bg-lav p-[22px_20px_24px] shadow-[0_0_0_3px_var(--tile-stroke),0_22px_50px_rgba(46,30,100,.5)]">
          <button
            type="button"
            onClick={onClose}
            aria-label="close"
            className="absolute right-3 top-3 flex h-[34px] w-[34px] items-center justify-center rounded-[11px] border-[2.5px] border-tile-stroke bg-white text-[17px] leading-none text-ink shadow-[0_3px_0_rgba(67,55,126,.25)]"
          >
            ×
          </button>

          <FloatChar
            src={charSrc("Tralalero Tralala")}
            size={70}
            r={-10}
            dur={4}
            tap={false}
            className="absolute left-1/2 top-[-44px] -ml-[35px]"
          />

          <div
            className="pt-[22px] text-center"
            style={{
              transform: mounted ? "scale(1)" : "scale(0)",
              transition: `transform .5s ${EASE_BACK} .18s`,
              transformOrigin: "center",
            }}
          >
            <StickerText fill="#fff" sw={5} size={30}>
              Get SlopMerge
            </StickerText>
          </div>

          <p className="mx-auto mb-[18px] mt-[10px] max-w-[240px] text-center text-[14px] font-semibold text-ink">
            Free, offline, and ready to fuse. Pick your store — the slop awaits.
          </p>

          <div className="flex flex-col gap-3">
            <StoreBadge store="apple" variant="row" />
            <StoreBadge store="google" variant="row" />
          </div>

          <div className="mt-4 text-center text-[11px] font-bold uppercase tracking-[.08em] text-[rgba(46,30,100,.6)]">
            no account · no wifi · no chill
          </div>
        </div>
      )}
    </Modal>
  );
}
