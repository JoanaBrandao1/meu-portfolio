import type { CSSProperties } from "react";

// Peças de fundo (só decoração, aria-hidden). As formas vêm de máscaras em public/patterns
// e o preenchimento (glitter, oncinha) é CSS, então dá para trocar as cores em playlist.css.

// props de toda peça de decoração (também usadas por Neon, Pompom e Sparkle)
export type DecoProps = { className?: string; style?: CSSProperties };

// borboleta de clipe de cabelo, com glitter
export function Butterfly({ className = "", style }: DecoProps) {
  return (
    <span className={`butterfly ${className}`} style={style} aria-hidden="true">
      <span className="butterfly__fill" />
    </span>
  );
}

// coração de oncinha com borda branca, como um adesivo
export function HeartSticker({ className = "", style }: DecoProps) {
  return (
    <span className={`heart-sticker ${className}`} style={style} aria-hidden="true">
      <span className="heart-sticker__fill" />
    </span>
  );
}

// pedra de strass solta
export function Gem({ tone = "clear", size = "1rem", className = "", style }: DecoProps & { tone?: "clear" | "pink" | "lime"; size?: string }) {
  return <span className={`gem gem--${tone} ${className}`} style={{ "--s": size, ...style } as CSSProperties} aria-hidden="true" />;
}

// CD iridescente de enfeite, girando devagar
export function Disc({ className = "", style }: DecoProps) {
  return <span className={`cd disc ${className}`} style={style} aria-hidden="true" />;
}
