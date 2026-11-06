import { Sticker } from "@/components/sticker";

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
      <div className="deco" aria-hidden="true">
        <Sticker kind="daisy" className="sticker--float" style={{ top: "4.5rem", right: "7%", width: "4.25rem" }} />
        <Sticker kind="star" tone="gold" style={{ top: "10rem", right: "15%", width: "2.4rem", rotate: "14deg" }} />
        <Sticker kind="heart" tone="aqua" style={{ bottom: "3rem", left: "2.5%", width: "2.1rem", rotate: "-12deg" }} />
      </div>
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Encarte</p>
            <h2 className="display">Sobre mim</h2>
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
