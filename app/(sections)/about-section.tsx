

import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";
import { WavyTitle } from "@/components/wavy-title";

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
      <Neon kind="cifrao" className="neon--flicker" style={{ right: "1.5%", bottom: "2rem", width: "10.5rem", rotate: "8deg" }} />
      <Sparkle className="flash flash--pink" style={{ top: "3.5rem", right: "7%", width: "2.4rem" }} />
      <Sparkle className="flash flash--white" style={{ top: "6.5rem", right: "12%", width: "1.2rem" }} />
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Encarte</p>
            <WavyTitle text="Sobre mim" />
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

          <div className="fur-card">
            {/* filtro que bagunça a borda da estampa para parecer pelo */}
            <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
              <filter id="pelo" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="3" />
                <feDisplacementMap in="SourceGraphic" scale="14" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>
            <div className="fur-card__fur" aria-hidden="true" />

            <div className="fur-card__inner">
              <p className="label fur-card__title">Ficha técnica</p>
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
        </div>
      </div>
    </section>
  );
}
