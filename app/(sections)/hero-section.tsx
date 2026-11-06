"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine, Pause, Play } from "lucide-react";
import { SITE } from "@/lib/constants";

const DURATION = 197; // 3:17, a "duração" da faixa de abertura

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

export default function HeroSection() {
  const [playing, setPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(42);

  // quem pediu "menos movimento" no sistema começa com o disco parado
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setElapsed((t) => (t + 1) % DURATION), 1000);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section id="inicio" className="np" data-playing={playing}>
      <div className="wrap np__grid">
        <div>
          <p className="label np__now">
            <span className="eq" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            {playing ? "Tocando agora" : "Pausado"}
          </p>

          <h1 className="display np__title">
            Joana
            <br />
            <em>Brandão</em>
          </h1>

          <p className="np__lead">
            <strong>{SITE.role}.</strong> Gosto de interface que tem
            personalidade: cor, ritmo e um detalhe que faz a pessoa sorrir.
          </p>

          <div className="np__actions">
            <a className="btn btn--solid" href={SITE.cv} download>
              <ArrowDownToLine aria-hidden="true" />
              Baixar CV
            </a>
            <a className="btn btn--ghost" href="#faixas">
              <ArrowDown aria-hidden="true" />
              Ver as faixas
            </a>
          </div>

          <p className="label np__status">Disponível para novos projetos</p>
        </div>

        <div className="np__art">
          <div className="cover">
            <div className="record" aria-hidden="true" />
            <div className="sleeve">
              <div className="sleeve__title">
                <span>{SITE.name}</span>
                <span>Vol. 1</span>
              </div>
              <Image
                src="/images/imagem-joana-Photoroom.png"
                alt="Joana dançando de fone de ouvido"
                width={1024}
                height={1024}
                sizes="(max-width: 860px) 24rem, 30rem"
                priority
              />
              <span className="sleeve__sticker">Edição de estreia</span>
            </div>
          </div>

          <div className="player">
            <button
              type="button"
              className="player__btn"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pausar" : "Tocar"}
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>

            <div className="player__meta">
              <b>Olá, eu sou a Joana</b>
              <span className="label">Faixa 00</span>
            </div>

            <div className="player__bar">
              <span className="player__time">{formatTime(elapsed)}</span>
              <div className="player__track">
                <div
                  className="player__fill"
                  style={{
                    width: `${(elapsed / DURATION) * 100}%`,
                    // quando a faixa recomeça, a barra volta sem animar
                    transition: elapsed === 0 ? "none" : undefined,
                  }}
                />
              </div>
              <span className="player__time">{formatTime(DURATION)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
