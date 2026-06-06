"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import DownloadDialog from "./DownloadDialog";
import RateCard from "./RateCard";

type OverlayApi = {
  openDownload: () => void;
  closeDownload: () => void;
  openRate: () => void;
  closeRate: () => void;
};

const OverlayContext = createContext<OverlayApi | null>(null);

/** Access the shared download/rate modal openers from any client component. */
export function useOverlay(): OverlayApi {
  const ctx = useContext(OverlayContext);
  if (!ctx) {
    throw new Error("useOverlay must be used within <OverlayProvider>");
  }
  return ctx;
}

/**
 * Owns the only shared overlay state on the page and renders the Download and
 * Rate modals once, at the root. Sections open them via useOverlay().
 */
export default function OverlayProvider({ children }: { children: ReactNode }) {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [rateOpen, setRateOpen] = useState(false);

  const api = useMemo<OverlayApi>(
    () => ({
      openDownload: () => setDownloadOpen(true),
      closeDownload: () => setDownloadOpen(false),
      openRate: () => setRateOpen(true),
      closeRate: () => setRateOpen(false),
    }),
    [],
  );

  return (
    <OverlayContext.Provider value={api}>
      {children}
      <DownloadDialog open={downloadOpen} onClose={api.closeDownload} />
      <RateCard open={rateOpen} onClose={api.closeRate} />
    </OverlayContext.Provider>
  );
}
