// Estrela de flash de 8 pontas (o brilho de câmera das fotos de 2000).
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg className={`sparkle ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.00 0.00L12.65 10.43L17.09 6.91L13.57 11.35L24.00 12.00L13.57 12.65L17.09 17.09L12.65 13.57L12.00 24.00L11.35 13.57L6.91 17.09L10.43 12.65L0.00 12.00L10.43 11.35L6.91 6.91L11.35 10.43Z" />
    </svg>
  );
}
