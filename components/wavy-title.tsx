import { Sparkle } from "./sparkle";

// Título com as letras em onda, cromado rosa-choque, e uma estrela no lugar do espaço.
export function WavyTitle({ text }: { text: string }) {
  const words = text.split(" ");
  const letters = words.join("").length;
  let index = 0;

  return (
    <h2 className="wavy" aria-label={text}>
      {words.map((word, w) => (
        <span key={w} className="wavy__word" aria-hidden="true">
          {w > 0 && <Sparkle className="wavy__star" />}
          {[...word].map((char) => {
            // onda suave: sobe no começo e desce no fim, como uma faixa ao vento
            const t = index / Math.max(letters - 1, 1);
            const y = Math.sin(t * Math.PI * 1.6 - 0.3) * -0.12;
            const r = Math.cos(t * Math.PI * 1.6 - 0.3) * -6;
            index++;
            return (
              <span key={index} className="wavy__char" style={{ translate: `0 ${y.toFixed(3)}em`, rotate: `${r.toFixed(1)}deg` }}>
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </h2>
  );
}
