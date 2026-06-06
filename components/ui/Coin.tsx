import Image from "next/image";

/** The merge-toy coin/score glyph. */
export default function Coin({ size = 22 }: { size?: number }) {
  return (
    <Image
      src="/img/coin-asset.png"
      alt=""
      width={size}
      height={size}
      style={{ objectFit: "contain", verticalAlign: "middle" }}
    />
  );
}
