import type { ReactNode } from "react";

// Bracketed label with a rolling-text hover, e.g. [ LET'S TALK ].
// Matches the original's duplicated-text slide-up effect.
export default function RollLink({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`roll-link text-base font-semibold uppercase tracking-[-0.02em] ${className}`}
    >
      <span>[</span>
      <span className="roll-mask">
        <span className="roll-inner">
          {children}
          <span className="roll-copy">{children}</span>
        </span>
      </span>
      <span>]</span>
    </a>
  );
}
