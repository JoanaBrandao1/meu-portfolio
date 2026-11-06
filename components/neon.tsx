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
  <filter id="neon-glow" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" x="-200" y="-200" width="600" height="600">
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
    // cifrão de dinheiro: S com duas listras, tubo laranja e contorno verde
    const S = "M46 24C46 14 38 10 30 10 20 10 13 16 13 25 13 35 22 38 30 41 39 44 47 48 47 58 47 69 39 74 30 74 20 74 12 68 12 58";
    const bars = "M25 0V10M35 0V10M25 74V92M35 74V92";
    return (
      <svg className={`neon ${className}`} viewBox="-14 -12 88 116" style={style} aria-hidden="true">
        <defs>
          {glow}
          {/* recorta o meio de um traço grosso, sobrando só as duas bordas = contorno */}
          <mask id="cifrao-contorno" maskUnits="userSpaceOnUse" x="-14" y="-12" width="88" height="116">
            <rect x="-14" y="-12" width="88" height="116" fill="#fff" />
            <path d={S + bars} fill="none" stroke="#000" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
        </defs>
        <g filter="url(#neon-glow)">
          <path d={S + bars} className="neon__green-outline" mask="url(#cifrao-contorno)" />
          <Tube tone="amber" d={S} />
          <Tube tone="amber" d={bars} />
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
