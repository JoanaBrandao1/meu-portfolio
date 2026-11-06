

import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";

// Este texto é um rascunho. Reescreva com as suas palavras: é o que mais deixa o site com a sua cara.

const credits = [
  { label: "Produção", value: "Joana Brandão" },
  { label: "Instrumentos", value: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
  { label: "Também toca", value: "C# e Unity, Haskell" },
  { label: "Em estúdio", value: "Os primeiros projetos do portfólio" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section">
      <Neon kind="cifrao" className="neon--flicker" style={{ right: "3%", bottom: "3rem", width: "7rem", rotate: "8deg" }} />
      <Sparkle className="flash flash--pink" style={{ top: "3.5rem", right: "7%", width: "2.4rem" }} />
      <Sparkle className="flash flash--white" style={{ top: "6.5rem", right: "12%", width: "1.2rem" }} />
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Encarte</p>
            <h2 className="display">
              Sobre mim
              <Sparkle className="flash-inline flash--lime" />
            </h2>
          </div>
        </header>

        <div className="notes__grid">
          <div className="notes__text">
            <p>
              Sou desenvolvedora front-end. Comecei com joguinhos no navegador e
              um primeiro jogo na Unity, e foi aí que entendi que gosto mesmo é da
              parte que a pessoa vê e clica.
            </p>
            <p>
              Hoje estudo React e Next.js e tento fazer interfaces que funcionem
              bem e que não pareçam todas iguais. Este site é o meu primeiro
              álbum, e ele ainda está sendo gravado.
            </p>
          </div>

          <dl className="credits">
            {credits.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
