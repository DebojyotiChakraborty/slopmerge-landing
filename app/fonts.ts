import localFont from "next/font/local";

// ChangaOne — heavy rounded display face. Used ONLY for the stroked display type:
// wordmark, hero h1, section h2s, card titles, big stat numbers.
export const changaOne = localFont({
  src: "../public/fonts/ChangaOne-Regular.ttf",
  variable: "--font-changa",
  weight: "400",
  display: "swap",
});

// Space Grotesk — variable body face for everything else.
export const spaceGrotesk = localFont({
  src: "../public/fonts/SpaceGrotesk-Variable.ttf",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});
