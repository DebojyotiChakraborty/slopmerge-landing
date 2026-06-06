"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const EASE_BACK = "cubic-bezier(.34,1.56,.64,1)";

type ModalChildren = ReactNode | ((mounted: boolean) => ReactNode);

type ModalProps = {
  open: boolean;
  onClose: () => void;
  /** Accessible name (use when there's no visible title element to point at). */
  ariaLabel?: string;
  /** id of the visible title element, when present. */
  labelledBy?: string;
  /** Fired once when the modal opens (e.g. play a sound). */
  onOpen?: () => void;
  /** Panel content. Receives `mounted` so children can stagger their own pop. */
  children: ModalChildren;
};

/**
 * Game-style modal shell: backdrop fade + panel scale(0→1) on easeOutBack.
 * Handles focus trap, Esc, body scroll-lock, and return-focus to the trigger.
 */
export default function Modal({
  open,
  onClose,
  ariaLabel,
  labelledBy,
  onOpen,
  children,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  const focusables = useCallback((root: HTMLElement) => {
    return Array.from(
      root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => el.offsetParent !== null);
  }, []);

  // open: stash trigger, play sound, animate in, lock scroll.
  // cleanup (on close/unmount): reset, restore scroll, return focus.
  useEffect(() => {
    if (!open) return;
    triggerRef.current = document.activeElement;
    onOpen?.();
    const raf = requestAnimationFrame(() => setMounted(true));
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(raf);
      setMounted(false);
      document.body.style.overflow = prevOverflow;
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    };
    // onOpen is intentionally excluded — only react to open changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Esc to close + Tab focus trap.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const f = focusables(panelRef.current);
        if (f.length === 0) {
          e.preventDefault();
          return;
        }
        const first = f[0];
        const last = f[f.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose, focusables]);

  // Move focus into the panel once it's mounted.
  useEffect(() => {
    if (!mounted || !panelRef.current) return;
    const f = focusables(panelRef.current);
    (f[0] ?? panelRef.current).focus();
  }, [mounted, focusables]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-5">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-[rgba(46,30,100,.55)] transition-opacity duration-200"
        style={{ opacity: mounted ? 1 : 0 }}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className="relative outline-none"
        style={{
          transform: mounted ? "scale(1)" : "scale(0)",
          transition: `transform .5s ${EASE_BACK}`,
          transformOrigin: "center",
        }}
      >
        {typeof children === "function" ? children(mounted) : children}
      </div>
    </div>
  );
}
