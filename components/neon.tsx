import type { CSSProperties } from "react";

// Letreiros de neon para o fundo: cifrão, coqueiro e estrela de lâmpadas.
// São só decoração (aria-hidden) e ficam atrás do conteúdo.

type Kind = "cifrao" | "coqueiro" | "estrela";

// pontos da estrela de lâmpadas, calculados uma vez
const STAR = (() => {
  const cx = 100;
  const cy = 102;
  const corners: [number, number][] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? 92 : 38;
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    corners.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  const bulbs: [number, number][] = [];
  corners.forEach(([x1, y1], i) => {
    const [x2, y2] = corners[(i + 1) % corners.length];
    for (let k = 0; k < 5; k++) {
      bulbs.push([x1 + ((x2 - x1) * k) / 5, y1 + ((y2 - y1) * k) / 5]);
    }
  });
  const outline = corners.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  return { outline, bulbs };
})();

const glow = (
  <filter id="neon-glow" x="-40%" y="-40%" width="180%" height="180%">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="perto" />
    <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="longe" />
    <feMerge>
      <feMergeNode in="longe" />
      <feMergeNode in="perto" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

function Tube({ d, tone }: { d: string; tone: "amber" | "lime" | "pink" }) {
  return (
    <>
      <path d={d} className={`neon__tube neon__${tone}`} />
      <path d={d} className="neon__core" />
    </>
  );
}

export function Neon({
  kind,
  className = "",
  style,
}: {
  kind: Kind;
  className?: string;
  style?: CSSProperties;
}) {
  if (kind === "cifrao") {
    return (
      <svg className={`neon ${className}`} viewBox="-10 -6 80 112" style={style} aria-hidden="true">
        <defs>{glow}</defs>
        <g filter="url(#neon-glow)">
          <Tube tone="amber" d="M44 24C44 15 37 12 30 12 21 12 15 17 15 25 15 34 23 37 30 40 38 43 46 47 46 57 46 67 38 72 30 72 21 72 14 67 14 58" />
          <Tube tone="amber" d="M30 2V12M30 72V96" />
        </g>
      </svg>
    );
  }

  if (kind === "coqueiro") {
    const leaves = [
      "M64 62C48 44 22 44 6 64 24 54 44 54 64 62Z",
      "M64 62C52 36 34 24 14 26 34 34 50 44 64 62Z",
      "M64 62C62 38 70 18 86 8 78 26 72 42 64 62Z",
      "M64 62C80 38 100 32 116 38 98 42 82 48 64 62Z",
      "M64 62C84 54 104 62 114 82 98 70 82 66 64 62Z",
    ];
    const rings = [180, 162, 144, 126, 108, 90, 76].map((y, i) => {
      const left = 51 + i * 1.1;
      const right = 65 + i * 0.7;
      return `M${left} ${y}Q${(left + right) / 2} ${y - 4} ${right} ${y}`;
    });
    return (
      <svg className={`neon ${className}`} viewBox="-8 -6 136 212" style={style} aria-hidden="true">
        <defs>{glow}</defs>
        <g filter="url(#neon-glow)">
          <Tube tone="amber" d="M50 196C49 150 51 104 59 66M66 196C65 150 66 104 70 66" />
          <Tube tone="amber" d={rings.join("")} />
          {leaves.map((d) => (
            <Tube key={d} tone="lime" d={d} />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg className={`neon ${className}`} viewBox="-6 -6 212 206" style={style} aria-hidden="true">
      <defs>{glow}</defs>
      <g filter="url(#neon-glow)">
        <polygon points={STAR.outline} className="neon__tube neon__amber" />
        {STAR.bulbs.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="4" className="neon__bulb" />
        ))}
      </g>
    </svg>
  );
}
