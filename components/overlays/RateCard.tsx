"use client";

import { useState } from "react";
import FloatChar from "@/components/ui/FloatChar";
import ChunkyButton from "@/components/ui/ChunkyButton";
import { charSrc } from "@/lib/characters";
import { play } from "@/lib/sound";
import Modal from "./Modal";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill={filled ? "var(--merge)" : "#E2DCF2"}
      stroke="var(--stroke)"
      strokeWidth="1.4"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6 6.6.6-5 4.3 1.6 6.5L12 16.9 5.9 19.9 7.5 13.4l-5-4.3 6.6-.6z" />
    </svg>
  );
}

/** Inner content — lives only while open so star/sent state resets each time. */
function RateBody({ onClose }: { onClose: () => void }) {
  const [stars, setStars] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <div className="card w-[330px] max-w-[86vw] bg-white p-[22px_20px_24px] text-center">
      <FloatChar
        src={charSrc("Ballerina Cappuccina")}
        size={76}
        dur={4}
        tap={false}
        className="mx-auto mb-[-4px]"
      />
      <div className="mt-[6px] font-display text-[24px] text-ink">
        enjoying the slop?
      </div>
      <p className="mb-[14px] mt-[6px] text-[13.5px] text-[rgba(46,30,100,.7)]">
        {sent
          ? "you’re a real one. thank you! 🫶"
          : "Drop us a rating — it helps the game cook."}
      </p>

      {!sent && (
        <div className="mb-[18px] flex justify-center gap-[6px]">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              aria-pressed={n <= stars}
              onClick={() => {
                setStars(n);
                play("drop");
              }}
              className="cursor-pointer border-none bg-transparent p-[2px] transition-transform duration-100"
              style={{ transform: n <= stars ? "scale(1.12)" : "scale(1)" }}
            >
              <Star filled={n <= stars} />
            </button>
          ))}
        </div>
      )}

      <div className="flex justify-center gap-[10px]">
        {!sent ? (
          <ChunkyButton
            theme="green"
            className="flex-1"
            disabled={stars === 0}
            style={stars === 0 ? { opacity: 0.55, cursor: "not-allowed" } : undefined}
            onClick={() => {
              if (stars) {
                setSent(true);
                play("merge");
              }
            }}
          >
            Send it
          </ChunkyButton>
        ) : (
          <ChunkyButton theme="purple" className="flex-1" onClick={onClose}>
            You’re welcome
          </ChunkyButton>
        )}
        {!sent && (
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-chunk border-[3px] border-tile-stroke bg-white px-4 font-sans text-[14px] font-bold text-ink"
          >
            Later
          </button>
        )}
      </div>
    </div>
  );
}

/** Footer "Rate SlopMerge" modal — same pop animation as the download dialog. */
export default function RateCard({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Modal open={open} onClose={onClose} ariaLabel="Rate SlopMerge">
      <RateBody onClose={onClose} />
    </Modal>
  );
}
