import type { CSSProperties } from "react";

// Pompom rosa peludo. Com `chain`, vira chaveiro pendurado e balança.
// Precisa do filtro <PompomFilter /> em algum lugar da página.
export function Pompom({
  size = "5rem",
  chain = false,
  className = "",
  style,
}: {
  size?: string;
  chain?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`pompom ${chain ? "pompom--chain" : ""} ${className}`}
      style={{ "--size": size, ...style } as CSSProperties}
      aria-hidden="true"
    >
      {chain && <span className="pompom__chain" />}
      <span className="pompom__ball" />
    </span>
  );
}

// filtro que desfia a borda da bolinha para parecer pelo
export function PompomFilter() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <filter id="pompom-pelo" x="-40%" y="-40%" width="180%" height="180%">
        {/* 1) desfia a bolinha */}
        <feTurbulence type="turbulence" baseFrequency="0.9" numOctaves="4" seed="2" result="ruido" />
        <feDisplacementMap in="SourceGraphic" in2="ruido" scale="34" xChannelSelector="R" yChannelSelector="G" result="desfiado" />
        {/* 2) fiozinhos claros por cima, só dentro do pompom */}
        <feTurbulence type="fractalNoise" baseFrequency="2.2" numOctaves="1" seed="9" result="fino" />
        <feColorMatrix in="fino" type="matrix" values="0 0 0 0 1  0 0 0 0 0.86  0 0 0 0 0.94  0 0 0 0.75 -0.38" result="fios" />
        <feComposite in="fios" in2="desfiado" operator="in" result="fiosDentro" />
        <feMerge>
          <feMergeNode in="desfiado" />
          <feMergeNode in="fiosDentro" />
        </feMerge>
      </filter>
    </svg>
  );
}
