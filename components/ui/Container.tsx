import type { ReactNode } from "react";

/** Page container — max-width 1180px with fluid side padding. */
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-[clamp(20px,5vw,52px)] ${className}`}
    >
      {children}
    </div>
  );
}
