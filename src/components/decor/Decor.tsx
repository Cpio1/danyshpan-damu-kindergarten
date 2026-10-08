/**
 * Балаларға арналған шағын декоративті SVG эмблемалар.
 * Барлығы aria-hidden — экран оқу құралдары оларды елемейді.
 */

type DecorProps = { className?: string };

const base = { "aria-hidden": true, focusable: false } as const;

export function Sun({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 64 64" className={className}>
      <g stroke="#D4AF37" strokeWidth="3" strokeLinecap="round">
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1="32"
            y1="5"
            x2="32"
            y2="12"
            transform={`rotate(${i * 45} 32 32)`}
          />
        ))}
      </g>
      <circle cx="32" cy="32" r="14" fill="#F0D98A" stroke="#D4AF37" strokeWidth="3" />
      <circle cx="27" cy="30" r="1.6" fill="#355B32" />
      <circle cx="37" cy="30" r="1.6" fill="#355B32" />
      <path d="M27 36c2.8 2.6 7.2 2.6 10 0" stroke="#355B32" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Cloud({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 96 56" className={className}>
      <path
        d="M24 50h50a16 16 0 0 0 1.5-31.9A22 22 0 0 0 33.4 14 15 15 0 0 0 24 50Z"
        fill="#FFFFFF"
        stroke="#A8C686"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function Star({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path
        d="M12 1.8l2.9 6.4 7 .7-5.3 4.7 1.6 6.9L12 16.9l-6.2 3.6 1.6-6.9L2.1 8.9l7-.7L12 1.8Z"
        fill="#D4AF37"
        stroke="#D4AF37"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className}>
      <path d="M12 0c1 6.5 5.5 11 12 12-6.5 1-11 5.5-12 12-1-6.5-5.5-11-12-12C6.5 11 11 6.5 12 0Z" fill="#D4AF37" />
    </svg>
  );
}

export function Leaf({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <path d="M6 34C6 16 18 6 36 4c0 18-10 30-30 30Z" fill="#A8C686" />
      <path d="M8 32C16 22 24 15 32 9" stroke="#527A45" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function Flower({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={className}>
      <g fill="#F0D98A" stroke="#D4AF37" strokeWidth="1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <ellipse key={i} cx="20" cy="10" rx="6" ry="8" transform={`rotate(${i * 72} 20 20)`} />
        ))}
      </g>
      <circle cx="20" cy="20" r="5" fill="#527A45" />
    </svg>
  );
}

export function Balloon({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 32 64" className={className}>
      <path d="M16 40c-1 6 3 10 0 16s2 6 0 8" stroke="#527A45" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="18" rx="13" ry="16" fill="#A8C686" />
      <path d="M13 34h6l-3 5Z" fill="#527A45" />
      <ellipse cx="11" cy="12" rx="3" ry="5" fill="#FFFFFF" opacity="0.55" />
    </svg>
  );
}

export function Rainbow({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 80 44" className={className} fill="none" strokeLinecap="round">
      <path d="M6 40a34 34 0 0 1 68 0" stroke="#D4AF37" strokeWidth="6" />
      <path d="M15 40a25 25 0 0 1 50 0" stroke="#A8C686" strokeWidth="6" />
      <path d="M24 40a16 16 0 0 1 32 0" stroke="#527A45" strokeWidth="6" />
    </svg>
  );
}

export function Pencil({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 64 20" className={className}>
      <rect x="10" y="3" width="42" height="14" rx="3" fill="#F0D98A" stroke="#D4AF37" strokeWidth="1.5" />
      <rect x="4" y="3" width="10" height="14" rx="3" fill="#A8C686" />
      <path d="M52 3l10 7-10 7Z" fill="#FFFDF5" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M58.5 7.6 62 10l-3.5 2.4Z" fill="#355B32" />
    </svg>
  );
}

export function Blocks({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 56 52" className={className}>
      <rect x="4" y="26" width="22" height="22" rx="5" fill="#A8C686" />
      <rect x="30" y="26" width="22" height="22" rx="5" fill="#F0D98A" />
      <rect x="17" y="3" width="22" height="22" rx="5" fill="#527A45" transform="rotate(8 28 14)" />
      <text x="15" y="42" textAnchor="middle" fontSize="12" fontWeight="800" fill="#355B32" fontFamily="sans-serif">А</text>
      <text x="41" y="42" textAnchor="middle" fontSize="12" fontWeight="800" fill="#355B32" fontFamily="sans-serif">Ә</text>
    </svg>
  );
}

export function Squiggle({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 120 12" className={className} fill="none">
      <path
        d="M2 6c8-6 12 6 20 0s12 6 20 0 12 6 20 0 12 6 20 0 12 6 20 0 12 6 16 0"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Секциялар арасындағы толқынды өту. `fill` — келесі секцияның түсі. */
export function Wave({ fill, flip = false, className = "" }: { fill: string; flip?: boolean; className?: string }) {
  return (
    <svg
      {...base}
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`block h-10 w-full sm:h-14 ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        d="M0 46c120-26 240-38 360-30s240 40 360 42 240-26 360-34 240 6 360 20v36H0Z"
        fill={fill}
      />
    </svg>
  );
}

export function InstagramIcon({ className }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.6" cy="6.4" r="0.6" fill="currentColor" />
    </svg>
  );
}
