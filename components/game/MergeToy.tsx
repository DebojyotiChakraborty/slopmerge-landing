"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { ROSTER } from "@/lib/characters";
import { play } from "@/lib/sound";
import Coin from "@/components/ui/Coin";
import ChunkyButton from "@/components/ui/ChunkyButton";

type Ball = { id: number; tier: number; anim: "in" | "merge" };

const TIERS = ROSTER;
const MAXLEN = 6;

/** Ball diameter for a given tier (tier 0 = 30px → tier 6 = 72px). */
const sizeFor = (t: number) => 30 + t * 7;

/**
 * Interactive drop & merge toy. Tap Drop to add the previewed tier to the bin;
 * two adjacent matching tiers chain-merge into the next tier up (with a pop and
 * coins). Overstack past MAXLEN → STACK OVERFLOW!, shake, and auto-reset.
 * Reducer ported 1:1 from sm-kit.jsx.
 */
export default function MergeToy({ height = 300 }: { height?: number }) {
  const [bin, setBin] = useState<Ball[]>([]);
  // Start deterministic (tier 0) so SSR and client hydrate identically, then
  // randomize the first preview after mount to keep the variety of the original.
  const [next, setNext] = useState(0);
  const [score, setScore] = useState(0);
  const [, setBest] = useState(0);
  const [over, setOver] = useState(false);
  const idRef = useRef(1);

  useEffect(() => {
    const id = requestAnimationFrame(() => setNext(Math.floor(Math.random() * 3)));
    return () => cancelAnimationFrame(id);
  }, []);

  const drop = useCallback(() => {
    if (over) return;
    play("drop");
    setBin((prev) => {
      const arr: Ball[] = [...prev, { id: idRef.current++, tier: next, anim: "in" }];

      // chain-merge from the right
      let merged = false;
      let gained = 0;
      let i = arr.length - 1;
      while (i > 0 && arr[i].tier === arr[i - 1].tier && arr[i].tier < TIERS.length - 1) {
        const t = arr[i].tier;
        arr.splice(i - 1, 2, { id: idRef.current++, tier: t + 1, anim: "merge" });
        gained += (t + 2) * 2;
        merged = true;
        i = arr.length - 1;
      }

      if (merged) {
        window.setTimeout(() => play("merge"), 120);
        setScore((s) => {
          const ns = s + gained;
          setBest((b) => Math.max(b, ns));
          return ns;
        });
      }

      if (arr.length > MAXLEN) {
        setOver(true);
        window.setTimeout(() => {
          setBin([]);
          setScore(0);
          setOver(false);
        }, 1400);
      }

      return arr;
    });
    setNext(Math.floor(Math.random() * 3));
  }, [next, over]);

  const reset = () => {
    play("drop");
    setBin([]);
    setScore(0);
    setOver(false);
  };

  return (
    <div className="card w-full p-[14px]" style={{ background: "var(--lav)" }}>
      {/* header: score + next */}
      <div className="mb-[10px] flex items-center justify-between">
        <div className="flex items-center gap-[7px]">
          <Coin size={22} />
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              color: "#fff",
              WebkitTextStroke: "3px var(--tile-stroke)",
              paintOrder: "stroke fill",
            }}
          >
            {score}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[.1em] text-ink opacity-70">
            NEXT
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border-[2.5px] border-tile-stroke bg-white shadow-[inset_0_-2px_0_rgba(67,55,126,.12)]">
            <Image
              src={TIERS[next].img}
              alt=""
              width={30}
              height={30}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* the box / bin */}
      <div
        className="relative overflow-hidden rounded-chunk border-[3px] border-tile-stroke"
        style={{
          height,
          background:
            "linear-gradient(180deg, rgba(138,107,210,.30), rgba(138,107,210,.55))",
          boxShadow: "inset 0 8px 18px rgba(67,55,126,.28)",
          animation: over ? "overflow-shake .3s ease 2" : undefined,
        }}
      >
        {/* danger line */}
        <div className="pointer-events-none absolute inset-x-0 top-[30px] border-t-2 border-dashed border-white/50" />

        {/* stacked balls (bottom-aligned, wrapping) */}
        <div className="absolute inset-0 flex flex-wrap content-end justify-center gap-[6px] px-[12px] py-[10px]">
          {bin.map((b) => {
            const sz = sizeFor(b.tier);
            return (
              <div
                key={b.id}
                style={{
                  width: sz,
                  height: sz,
                  animation:
                    b.anim === "merge"
                      ? "merge-flash .4s ease"
                      : "pop .35s cubic-bezier(.2,1.4,.5,1)",
                  filter: "drop-shadow(0 4px 4px rgba(46,30,100,.3))",
                }}
              >
                <Image
                  src={TIERS[b.tier].img}
                  alt=""
                  width={sz}
                  height={sz}
                  className="h-full w-full object-contain"
                />
              </div>
            );
          })}
        </div>

        {bin.length === 0 && !over && (
          <div className="absolute inset-0 flex items-center justify-center text-[13px] font-bold tracking-[.06em] text-white opacity-85 [text-shadow:0_2px_4px_rgba(67,55,126,.5)]">
            tap DROP to merge →
          </div>
        )}

        {over && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="sticker text-center"
              style={
                { color: "#FF6A8E", fontSize: 26, "--sw": "5px" } as CSSProperties
              }
            >
              STACK
              <br />
              OVERFLOW!
            </span>
          </div>
        )}
      </div>

      {/* controls */}
      <div className="mt-[12px] flex gap-[10px]">
        <ChunkyButton theme="green" onClick={drop} className="flex-1">
          Drop
        </ChunkyButton>
        <button
          type="button"
          onClick={reset}
          aria-label="reset"
          className="w-[52px] cursor-pointer rounded-chunk border-[3px] border-tile-stroke bg-white text-[18px] text-ink shadow-[0_5px_0_rgba(67,55,126,.25)]"
        >
          ↺
        </button>
      </div>
    </div>
  );
}
