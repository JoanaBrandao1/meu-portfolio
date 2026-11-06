"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine, Pause, Play } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Sparkle } from "@/components/sparkle";
import { Neon } from "@/components/neon";

const DURATION = 197; // 3:17, a "duração" da faixa de abertura
const SEGMENTS = 18; // quadradinhos da barra no visor

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
      <Neon
        kind="estrela"
        className="neon--flicker"
        style={{ left: "-0.5rem", bottom: "1rem", width: "11rem", rotate: "-10deg" }}
      />

      <div className="wrap np__grid">
        <div className="np__text">
          <Sparkle className="flash flash--white" style={{ top: "1.6rem", left: "21rem", width: "1.5rem" }} />
          <Sparkle className="flash flash--lime" style={{ bottom: "1.2rem", right: "6%", width: "2rem" }} />
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
            <em className="chrome">Brandão</em>
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
            <div className="cd" aria-hidden="true" />
            <Sparkle className="sparkle--a" />
            <Sparkle className="sparkle--b" />
            <Sparkle className="sparkle--c" />
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

          <Sparkle className="flash flash--pink" style={{ bottom: "-1.6rem", left: "-1.8rem", width: "2.2rem" }} />
          <div className="discman">
            <button
              type="button"
              className="discman__play"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pausar" : "Tocar"}
            >
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
            </button>

            <div className="lcd" role="group" aria-label={`Faixa 00, ${formatTime(elapsed)} de ${formatTime(DURATION)}`}>
              <div className="lcd__row">
                <span>{playing ? "▶" : "❚❚"} 00</span>
                <span className="lcd__title">Olá, eu sou a Joana</span>
              </div>
              <div className="lcd__row">
                <span>{formatTime(elapsed)}</span>
                <span className="lcd__bar" aria-hidden="true">
                  {Array.from({ length: SEGMENTS }, (_, i) => (
                    <i key={i} data-on={i < Math.round((elapsed / DURATION) * SEGMENTS)} />
                  ))}
                </span>
                <span>{formatTime(DURATION)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
