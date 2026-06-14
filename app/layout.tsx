import type { Metadata, Viewport } from "next";
import { changaOne, spaceGrotesk } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.slopmerge.fun"),
  title: "SlopMerge — merge the slop",
  description:
    "A physics-based merge game stuffed with certified Italian brainrot. Two of the same? They fuse. Free, offline, and dangerously replayable. 5 modes, 65 legends.",
  applicationName: "SlopMerge",
  authors: [{ name: "Debojyoti Chakraborty" }],
  keywords: [
    "SlopMerge",
    "merge game",
    "Italian brainrot",
    "physics puzzle",
    "mobile game",
  ],
  openGraph: {
    title: "SlopMerge — merge the slop",
    description:
      "two of the same? they fuse. simple, addictive, completely unhinged. free, offline, dangerously replayable.",
    url: "https://www.slopmerge.fun",
    siteName: "SlopMerge",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1024,
        height: 500,
        alt: "SlopMerge — merge the Italian brainrot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SlopMerge — merge the slop",
    description:
      "two of the same? they fuse. simple, addictive, completely unhinged. free, offline, dangerously replayable.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#b8a8f0",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${changaOne.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
