
import { SITE } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";
import { WavyTitle } from "@/components/wavy-title";
import { Butterfly, Disc, Gem, HeartSticker } from "@/components/deco";

// ficha técnica do "álbum": o card ao lado do texto
const credits = [
  { label: "Produção", value: "Joana Brandão" },
  { label: "Formação", value: "Engenharia da Computação, UFRPE" },
  { label: "Front-end", value: "React, Next.js" },
  { label: "Mobile", value: "React Native, Flutter" },
  { label: "Back-end", value: "NestJS, PostgreSQL" },
  { label: "Linguagens", value: "JavaScript, TypeScript" },
  { label: "Gêneros", value: "Web, apps, jogos e sistemas" },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="section">
      {/* fundo: neon, CD, borboletas, adesivo de oncinha, strass e brilhos */}
      <Neon kind="cifrao" className="neon--flicker" style={{ right: "1.5%", bottom: "2rem", width: "10.5rem", rotate: "8deg" }} />
      <Neon kind="coracao" className="neon--flicker deco--desktop deco--wide" style={{ top: "6.5rem", right: "2.5%", width: "10rem", rotate: "10deg" }} />
      <Disc className="deco--desktop deco--wide" style={{ left: "-5rem", top: "3.5rem", width: "14rem" }} />
      <HeartSticker className="deco--desktop" style={{ bottom: "2rem", left: "24%", width: "8.5rem", rotate: "-12deg" }} />

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
              Sou engenheira da computação formada pela UFRPE e trabalho com
              desenvolvimento de software. Meu foco é o full-stack: gosto de
              entender o sistema inteiro, da modelagem do banco até a interface
              que a pessoa usa.
            </p>
            <p>
              Mas não quero ficar num gênero só. Faço sites, apps, jogos e
              sistemas, e topo projeto que me tire da zona de conforto. Este site
              é o meu primeiro álbum, e as faixas estão saindo do estúdio agora.
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
