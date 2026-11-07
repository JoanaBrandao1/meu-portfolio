// Estrela de flash de 8 pontas (o brilho de câmera das fotos de 2000).
import type { DecoProps } from "./deco";

// versão fina (brilhos) e versão cheia (a mesma estrela do logo JB)
const THIN = "M12.00 0.00L12.65 10.43L17.09 6.91L13.57 11.35L24.00 12.00L13.57 12.65L17.09 17.09L12.65 13.57L12.00 24.00L11.35 13.57L6.91 17.09L10.43 12.65L0.00 12.00L10.43 11.35L6.91 6.91L11.35 10.43Z";
const CHUNKY = "M12.00 0.50L13.11 9.32L16.67 7.33L14.68 10.89L23.50 12.00L14.68 13.11L16.67 16.67L13.11 14.68L12.00 23.50L10.89 14.68L7.33 16.67L9.32 13.11L0.50 12.00L9.32 10.89L7.33 7.33L10.89 9.32Z";

export function Sparkle({
  className = "",
  style,
  chunky = false,
}: DecoProps & { chunky?: boolean }) {
  return (
    <svg className={`sparkle ${className}`} viewBox="0 0 24 24" style={style} aria-hidden="true">
      <path d={chunky ? CHUNKY : THIN} />
    </svg>
  );
}
