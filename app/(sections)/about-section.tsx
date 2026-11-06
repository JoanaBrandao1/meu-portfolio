
import { SITE } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";
import { WavyTitle } from "@/components/wavy-title";
import { Butterfly, Disc, Gem, HeartSticker } from "@/components/deco";

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
      {/* fundo: neon, CD, borboletas, adesivo de oncinha, strass e brilhos */}
      <Neon kind="cifrao" className="neon--flicker" style={{ right: "1.5%", bottom: "2rem", width: "10.5rem", rotate: "8deg" }} />
      <Neon kind="coracao" className="neon--flicker deco--desktop" style={{ top: "9rem", right: "6%", width: "6rem", rotate: "10deg" }} />
      <Disc className="deco--desktop" style={{ left: "-4.5rem", bottom: "1.5rem", width: "14rem" }} />
      <Butterfly tone="lime" className="deco--float deco--desktop" style={{ bottom: "4.5rem", left: "46%", width: "3.6rem", rotate: "18deg" }} />
      <HeartSticker className="deco--desktop" style={{ bottom: "3rem", left: "24%", width: "5rem", rotate: "-12deg" }} />

      <Gem tone="pink" size="1.1rem" className="deco--desktop" style={{ top: "11rem", right: "30%" }} />
      <Gem tone="clear" size="0.85rem" style={{ top: "3rem", left: "42%" }} />
      <Gem tone="clear" size="1.2rem" className="deco--desktop" style={{ top: "16rem", right: "3.5%" }} />
      <Gem tone="lime" size="0.9rem" className="deco--desktop" style={{ bottom: "10rem", right: "24%" }} />
      <Gem tone="pink" size="1.3rem" className="deco--desktop" style={{ bottom: "2.5rem", left: "38%" }} />

      <Sparkle className="flash flash--pink" style={{ top: "3.5rem", right: "7%", width: "2.4rem" }} />
      <Sparkle className="flash flash--white" style={{ top: "6.5rem", right: "12%", width: "1.2rem" }} />
      <Sparkle className="flash flash--lime" style={{ top: "2.5rem", right: "27%", width: "1.7rem" }} />
      <Sparkle className="flash flash--white deco--desktop" style={{ bottom: "7rem", left: "33%", width: "1.4rem" }} />
      <Sparkle className="flash flash--pink deco--desktop" style={{ bottom: "13rem", right: "6%", width: "1.6rem" }} />

      <div className="wrap">
        <header className="section-head section-head--tight">
          <div className="about__title">
            <p className="label">Lado A · Encarte</p>
            <WavyTitle text="Sobre mim" />
            {/* pousada no fim do título; a posição acompanha o esticamento (--title-stretch em playlist.css) */}
            <Butterfly
              tone="pink"
              className="deco--float"
              style={{ left: "var(--butterfly-x)", top: "var(--butterfly-y)", marginLeft: "0.5rem", width: "clamp(2.6rem, 6vw, 4.4rem)", rotate: "-14deg" }}
            />
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

          {/* contracapa do álbum: lombada de oncinha e a ficha técnica no verso */}
          <aside className="backcover" aria-label="Ficha técnica">
            <div className="backcover__spine" aria-hidden="true">
              <span>
                {SITE.name} · Vol. 1
              </span>
            </div>

            <div className="backcover__body">
              <p className="label backcover__title">Ficha técnica</p>
              <dl className="credits">
                {credits.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="backcover__foot" aria-hidden="true">
                <span className="backcover__sticker">Brilho explícito</span>
                <span className="backcover__barcode" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
