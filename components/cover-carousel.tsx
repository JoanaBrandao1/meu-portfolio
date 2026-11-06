"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/lib/constants";

type Slide = { project?: Project; n: number };

const pad = (n: number) => String(n).padStart(2, "0");

// Posição de cada capa no "coverflow": a do meio de frente, as outras viradas para os lados.
function placement(offset: number): CSSProperties {
  const distance = Math.min(Math.abs(offset), 3);
  const side = Math.sign(offset);
  return {
    "--x": `${offset * 62}%`,
    "--ry": `${side * -32}deg`,
    "--s": 1 - Math.min(distance, 2) * 0.17,
    "--dim": distance === 0 ? 1 : 0.62,
    zIndex: 10 - distance,
    opacity: distance > 2 ? 0 : 1,
  } as CSSProperties;
}

export function CoverCarousel({ projects, total }: { projects: Project[]; total: number }) {
  const count = Math.max(total, projects.length);
  const slides: Slide[] = Array.from({ length: count }, (_, i) => ({ project: projects[i], n: i + 1 }));
  // começa na segunda capa, para ter capa dos dois lados
  const [active, setActive] = useState(Math.min(1, count - 1));
  const startX = useRef<number | null>(null);

  const go = (i: number) => setActive(Math.max(0, Math.min(count - 1, i)));

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") go(active - 1);
    if (e.key === "ArrowRight") go(active + 1);
  };

  // arrastar com o dedo no celular
  const onDown = (e: PointerEvent) => (startX.current = e.clientX);
  const onUp = (e: PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 40) go(active + (dx < 0 ? 1 : -1));
    startX.current = null;
  };

  const current = slides[active];

  return (
    <div className="carousel" role="region" aria-roledescription="carrossel" aria-label="Projetos" tabIndex={0} onKeyDown={onKey}>
      <div className="carousel__stage" onPointerDown={onDown} onPointerUp={onUp}>
        {slides.map((slide, i) => {
          const offset = i - active;
          const p = slide.project;
          return (
            <button
              key={slide.n}
              type="button"
              className="cover-card"
              data-active={offset === 0}
              style={placement(offset)}
              onClick={() => go(i)}
              aria-label={`${p ? p.title : `Faixa ${pad(slide.n)}, em gravação`}${offset === 0 ? " (selecionada)" : ""}`}
              aria-current={offset === 0}
              tabIndex={Math.abs(offset) > 2 ? -1 : 0}
            >
              <span className="cover-card__cd" aria-hidden="true" />
              <span
                className="cover-card__sleeve"
                data-variant={(slide.n - 1) % 4}
                style={p?.cover ? { backgroundImage: `url(${p.cover})`, backgroundSize: "cover" } : undefined}
              >
                <span className="cover-card__top">
                  <span>Joana Brandão</span>
                  <span>Faixa {pad(slide.n)}</span>
                </span>

                {p?.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="cover-card__logo" src={p.logo} alt="" />
                ) : (
                  <span className="cover-card__big">{p ? p.title : pad(slide.n)}</span>
                )}

                {p ? null : <span className="cover-card__tag">Em gravação</span>}
              </span>
            </button>
          );
        })}
      </div>

      <div className="carousel__bar">
        <button type="button" className="carousel__arrow" onClick={() => go(active - 1)} disabled={active === 0} aria-label="Capa anterior">
          <ChevronLeft aria-hidden="true" />
        </button>

        <div className="carousel__info" aria-live="polite">
          <p className="label carousel__n">Faixa {pad(current.n)}</p>
          {current.project ? (
            <>
              <h3 className="carousel__title">{current.project.title}</h3>
              <p className="carousel__desc">{current.project.description}</p>
              <p className="label">{current.project.stack.join(" · ")}</p>
              <p className="carousel__links">
                {current.project.href && (
                  <a className="track__link" href={current.project.href} target="_blank" rel="noopener noreferrer">
                    Ver site <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
                {current.project.repo && (
                  <a className="track__link" href={current.project.repo} target="_blank" rel="noopener noreferrer">
                    Código <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )}
              </p>
            </>
          ) : (
            <>
              <h3 className="carousel__title carousel__title--soon">Em gravação</h3>
              <p className="rec">Gravando</p>
            </>
          )}
        </div>

        <button type="button" className="carousel__arrow" onClick={() => go(active + 1)} disabled={active === count - 1} aria-label="Próxima capa">
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="carousel__dots" aria-hidden="true">
        {slides.map((slide, i) => (
          <span key={slide.n} data-on={i === active} />
        ))}
      </div>
    </div>
  );
}
