import type { Metadata } from "next";
import LegalPage from "@/components/sections/LegalPage";
import { PRIVACY } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy — SlopMerge",
  description:
    "How SlopMerge handles your data: offline-first, on-device storage, no account, no selling your data.",
};

export default function Page() {
  return <LegalPage doc={PRIVACY} />;
}
