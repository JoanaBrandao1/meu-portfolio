import type { CSSProperties, ReactNode } from "react";

// Adesivos brilhantes, com o mesmo acabamento de gel dos botões.
// Os formatos são os mesmos do papel de parede (scripts/papel-de-parede.py).

type Kind = "heart" | "star" | "butterfly" | "daisy";
type Tone = "pink" | "gold" | "lilac" | "aqua";

const TONES: Record<Tone, [string, string, string]> = {
  pink: ["#ffc2cf", "#e07b8d", "#a8384d"],
  gold: ["#fff3b0", "#f3c64f", "#b8841f"],
  lilac: ["#f1e6ff", "#c4a3ff", "#7f5ac9"],
  aqua: ["#e3f9ff", "#8fd9f2", "#3f9ab8"],
};

const star = (() => {
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 11.5 : 4.9;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    pts.push(`${(12 + r * Math.cos(a)).toFixed(2)},${(12.8 + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
})();

const wingTop = "M23 17C17 3 5 1 3.5 9 2.5 15 11 19.5 23 19.5Z";
const wingBottom = "M23 21C14 21 7 25 9 32 11 38 19 33 23 23.5Z";

function shape(kind: Kind, fill: string, dark: string): { viewBox: string; body: ReactNode; shine: ReactNode } {
  switch (kind) {
    case "heart":
      return {
        viewBox: "0 0 24 24",
        body: <path fill={fill} d="M12 21C12 21 3 15 3 8.8 3 5.6 5.4 3.5 8 3.5 9.9 3.5 11.2 4.6 12 6 12.8 4.6 14.1 3.5 16 3.5 18.6 3.5 21 5.6 21 8.8 21 15 12 21 12 21Z" />,
        shine: <ellipse cx="7.6" cy="7.6" rx="2.6" ry="1.3" transform="rotate(-40 7.6 7.6)" />,
      };
    case "star":
      return {
        viewBox: "0 0 24 24",
        body: <polygon fill={fill} points={star} strokeLinejoin="round" />,
        shine: <ellipse cx="10.3" cy="9.6" rx="2" ry="0.9" transform="rotate(-25 10.3 9.6)" />,
      };
    case "daisy":
      return {
        viewBox: "0 0 24 24",
        body: (
          <>
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <ellipse key={deg} fill={fill} cx="12" cy="6.2" rx="3.4" ry="5" transform={`rotate(${deg} 12 12)`} />
            ))}
            <circle cx="12" cy="12" r="3.4" fill="#f3c64f" />
          </>
        ),
        shine: <ellipse cx="10.9" cy="10.9" rx="1.3" ry="0.7" transform="rotate(-35 10.9 10.9)" />,
      };
    case "butterfly":
      return {
        viewBox: "0 0 48 40",
        body: (
          <>
            <g fill={fill}>
              <path d={wingTop} />
              <path d={wingBottom} />
              <g transform="translate(48 0) scale(-1 1)">
                <path d={wingTop} />
                <path d={wingBottom} />
              </g>
            </g>
            <rect x="22.4" y="13" width="3.2" height="19" rx="1.6" fill={dark} stroke="none" />
            <path d="M23.4 13.5C22 8 19.5 6 17 5M24.6 13.5C26 8 28.5 6 31 5" fill="none" />
          </>
        ),
        shine: (
          <>
            <ellipse cx="11" cy="8.5" rx="4.2" ry="1.5" transform="rotate(-20 11 8.5)" />
            <ellipse cx="37" cy="8.5" rx="4.2" ry="1.5" transform="rotate(20 37 8.5)" />
          </>
        ),
      };
  }
}

export function Sticker({
  kind,
  tone = "pink",
  className = "",
  style,
}: {
  kind: Kind;
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  const [light, mid, dark] = TONES[tone];
  const id = `gel-${tone}`;
  const { viewBox, body, shine } = shape(kind, `url(#${id})`, dark);

  return (
    <svg className={`sticker ${className}`} viewBox={viewBox} style={style} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="0.55" stopColor={mid} />
          <stop offset="1" stopColor={dark} />
        </linearGradient>
      </defs>
      <g stroke={dark} strokeWidth="0.7">{body}</g>
      <g fill="#fff" opacity="0.75">{shine}</g>
    </svg>
  );
}
