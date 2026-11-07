import { Sparkle } from "./sparkle";

const items = ["Joana Brandão", "Vol. 1", "Full-stack", "Engenharia da Computação", "Web", "Apps", "Jogos", "Tocando agora"];

// Faixa de oncinha com texto passando. O conteúdo aparece duas vezes para o loop não ter emenda.
export function Marquee() {
  return (
    <div className="band" aria-hidden="true">
      <div className="band__track">
        {[0, 1].map((copy) => (
          <span className="band__group" key={copy}>
            {items.map((item) => (
              <span className="band__item" key={item}>
                {item}
                <Sparkle />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
