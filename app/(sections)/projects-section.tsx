import { ArrowUpRight } from "lucide-react";
import { PROJECTS, SOCIAL_LINKS, TRACKLIST_SIZE } from "@/lib/constants";

const pad = (n: number) => String(n).padStart(2, "0");

export default function ProjectsSection() {
  const released = PROJECTS.length;
  const inStudio = Math.max(TRACKLIST_SIZE - released, 0);

  return (
    <section id="faixas" className="section">
      <div className="wrap">
        <header className="section-head">
          <div>
            <p className="label">Lado A · Faixas</p>
            <h2 className="display">Projetos</h2>
          </div>
          <p className="label">
            {released} {released === 1 ? "lançada" : "lançadas"} · {inStudio} em estúdio
          </p>
        </header>

        <ol className="tracks">
          {PROJECTS.map((project, i) => (
            <li key={project.title} className="track">
              <span className="track__n">{pad(i + 1)}</span>
              <div>
                <h3 className="track__title">{project.title}</h3>
                <p className="track__desc">{project.description}</p>
                <p className="label track__stack">{project.stack.join(" · ")}</p>
              </div>
              <div style={{ display: "flex", gap: "1.25rem" }}>
                {project.href && (
                  <a className="track__link" href={project.href} target="_blank" rel="noopener noreferrer">
                    Ver site <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {project.repo && (
                  <a className="track__link" href={project.repo} target="_blank" rel="noopener noreferrer">
                    Código <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            </li>
          ))}

          {Array.from({ length: inStudio }, (_, i) => (
            <li key={`soon-${i}`} className="track track--soon">
              <span className="track__n">{pad(released + i + 1)}</span>
              <div>
                <h3 className="track__title">Faixa em gravação</h3>
              </div>
              {i === 0 ? <span className="rec">Gravando</span> : <span className="label">Em breve</span>}
            </li>
          ))}
        </ol>

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
