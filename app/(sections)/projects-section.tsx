import { PROJECTS, SOCIAL_LINKS, TRACKLIST_SIZE } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";
import { CoverCarousel } from "@/components/cover-carousel";
import { Pompom, PompomFilter } from "@/components/pompom";

export default function ProjectsSection() {
  const released = PROJECTS.length;
  const inStudio = Math.max(TRACKLIST_SIZE - released, 0);

  return (
    <section id="faixas" className="section">
      <PompomFilter />
      <Neon kind="coqueiro" style={{ left: "-2.5rem", bottom: "0.5rem", width: "13rem" }} />
      <Sparkle className="flash flash--lime" style={{ top: "4rem", left: "3%", width: "1.8rem" }} />
      <Sparkle className="flash flash--pink" style={{ top: "5rem", right: "5%", width: "2.6rem" }} />

      {/* pompons */}
      <Pompom size="6.5rem" style={{ top: "2.5rem", right: "13%" }} />
      <Pompom size="4rem" style={{ top: "6.5rem", right: "9%" }} />
      <Pompom size="4.5rem" chain style={{ top: "0", left: "8%" }} />
      <Pompom size="5.5rem" className="pompom--desktop" style={{ bottom: "3rem", right: "4%" }} />

      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Faixas</p>
            <h2 className="display">
              Projetos
              <Sparkle className="flash-inline flash--pink" />
            </h2>
          </div>
          <p className="label">
            {released} {released === 1 ? "lançada" : "lançadas"} · {inStudio} em estúdio
          </p>
        </header>

        <CoverCarousel projects={PROJECTS} total={TRACKLIST_SIZE} />

        <p className="tracks__note">
          As primeiras faixas saem em breve. Enquanto isso, os rascunhos ficam no{" "}
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
            meu GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
