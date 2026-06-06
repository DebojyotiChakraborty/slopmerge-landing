import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { TERMS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use — SlopMerge",
  description:
    "The terms for playing SlopMerge — license, acceptable use, virtual items, and disclaimers.",
};

export default function Page() {
  return <LegalPage doc={TERMS} />;
}
