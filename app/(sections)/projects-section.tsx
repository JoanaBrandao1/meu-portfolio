import { EXTERNAL, PROJECTS, SOCIAL_LINKS, TRACKLIST_SIZE } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";
import { CoverCarousel } from "@/components/cover-carousel";
import { Pompom } from "@/components/pompom";

export default function ProjectsSection() {
  const released = PROJECTS.length;
  const inStudio = Math.max(TRACKLIST_SIZE - released, 0);

  return (
    <section id="faixas" className="section">
      <Neon kind="coqueiro" style={{ left: "-2.5rem", bottom: "0.5rem", width: "13rem" }} />
      <Sparkle className="flash flash--lime" style={{ top: "4rem", left: "3%", width: "1.8rem" }} />
      <Sparkle className="flash flash--pink" style={{ top: "5rem", right: "5%", width: "2.6rem" }} />

      {/* pompons */}
      <Pompom size="11.5rem" style={{ top: "1rem", right: "13%", rotate: "-12deg" }} />
      <Pompom size="7rem" style={{ top: "9rem", right: "5%", rotate: "20deg" }} />
      <Pompom size="8rem" shape="coracao" chain style={{ top: "0", left: "8%" }} />
      <Pompom size="10rem" shape="coracao" className="deco--desktop" style={{ bottom: "3rem", right: "3%", rotate: "10deg" }} />

      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Faixas</p>
            {/* mesmo visual do logo JB: Gloock cromada, contorno escuro e estrela limão */}
            <h2 className="glam-title">
              <span className="glam-title__text">Projetos</span>
              <Sparkle chunky className="glam-title__star" />
            </h2>
          </div>
          <p className="label">
            {released} {released === 1 ? "lançada" : "lançadas"} · {inStudio} em estúdio
          </p>
        </header>

        <CoverCarousel projects={PROJECTS} total={TRACKLIST_SIZE} />

        <p className="carousel__note">
          As primeiras faixas saem em breve. Enquanto isso, os rascunhos ficam no{" "}
          <a href={SOCIAL_LINKS.github} {...EXTERNAL}>
            meu GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
