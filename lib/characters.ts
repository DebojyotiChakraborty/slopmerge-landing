// Character roster + game modes. Ported from sm-kit.jsx.
// Facts (do not "improve"): 5 modes × 13 = 65 characters total. Only a 26-char
// representative subset ships as art; the dev swaps in the full set later.

export type Character = {
  name: string;
  img: string;
  tint?: string;
  mode?: number;
};

/** "Tralalero Tralala" -> "tralalero-tralala" (matches public/characters/<slug>.png). */
export const slug = (name: string): string =>
  name.toLowerCase().replace(/\s+/g, "-");

/** Public path to a character sticker PNG. */
export const charSrc = (name: string): string => `/characters/${slug(name)}.png`;

/**
 * Merge-evolution chain for the playable MergeToy (small → big, 7 tiers).
 * Order is significant: tier N fuses into tier N+1.
 */
export const ROSTER: Character[] = [
  { name: "Chimpanzini Bananini", img: charSrc("Chimpanzini Bananini"), tint: "#E7D24A" },
  { name: "Trippi Trippi", img: charSrc("Trippi Trippi"), tint: "#F2A0B0" },
  { name: "Cappuccino Assassino", img: charSrc("Cappuccino Assassino"), tint: "#9A6B4A" },
  { name: "Ballerina Cappuccina", img: charSrc("Ballerina Cappuccina"), tint: "#F4A8C8" },
  { name: "Tung Tung Tung Sahur", img: charSrc("Tung Tung Tung Sahur"), tint: "#C68A3A" },
  { name: "Tralalero Tralala", img: charSrc("Tralalero Tralala"), tint: "#7FA8C9" },
  { name: "Bombardiro Crocodilo", img: charSrc("Bombardiro Crocodilo"), tint: "#6E8A5A" },
];

/** Bonus characters used for extra marquee variety. */
export const EXTRA: Character[] = [
  { name: "Bobrito Bandito", img: charSrc("Bobrito Bandito"), tint: "#B98A5A" },
  { name: "Glorbo Fruttodrillo", img: charSrc("Glorbo Fruttodrillo"), tint: "#7BBE6A" },
  { name: "Lirili Larila", img: charSrc("Lirili Larila"), tint: "#D9B48A" },
];

/**
 * The 5 game modes (Mode 1 = original/default).
 * TODO(user): mode names 2–5 are placeholders invented for the landing page —
 * confirm the real in-game mode names with the team before shipping.
 */
export const MODES = [
  {
    mode: 1,
    name: "Italian Brainrot",
    chars: [
      "Tralalero Tralala",
      "Tung Tung Tung Sahur",
      "Bombardiro Crocodilo",
      "Ballerina Cappuccina",
      "Chimpanzini Bananini",
    ],
  },
  {
    mode: 2,
    name: "Critter Contraptions",
    chars: ["Toasterino Flamingo", "Telefonino Delfino", "Lavandino Pinguino", "Gelattino Gattino"],
  },
  {
    mode: 3,
    name: "Ultra Beasts",
    chars: ["Rizzasaurus Flex", "Sigma Capybro", "Goobzilla Supreme", "Turbo Shrimpo"],
  },
  {
    mode: 4,
    name: "Snack Squad",
    chars: ["Bananino Sneakini", "Strawberrina Dramatica", "Okay Punch Kid", "Capybarino Dungiveafino"],
  },
  {
    mode: 5,
    name: "Cosmic Slop",
    chars: ["Skibidi Popolini", "Giraffa Satellita", "Glorpo Cucumbini", "Vaccini Lunarini"],
  },
] as const;

/** Every mode character flattened with its mode number. */
const CROSS: Character[] = MODES.flatMap((m) =>
  m.chars.map((name) => ({ name, img: charSrc(name), mode: m.mode })),
);

/** Deduped union of all available character art — drives the marquee. */
export const ALLCH: Character[] = [...ROSTER, ...EXTRA, ...CROSS].filter(
  (c, i, a) => a.findIndex((x) => x.name === c.name) === i,
);
