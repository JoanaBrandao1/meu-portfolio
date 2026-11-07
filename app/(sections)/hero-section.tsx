"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Sparkle } from "@/components/sparkle";
import { Neon } from "@/components/neon";
import { Discman } from "@/components/discman";

export default function HeroSection() {
  const [playing, setPlaying] = useState(true);

  // quem pediu "menos movimento" no sistema começa com o disco parado
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlaying(false);
    }
  }, []);

  return (
    <section id="inicio" className="np" data-playing={playing}>
      <Neon
        kind="estrela"
        className="neon--flicker"
        style={{ left: "-5rem", bottom: "-4.5rem", width: "18rem", rotate: "-10deg" }}
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
            <strong>
              {/* cada parte do cargo fica inteira na linha (evita quebrar "full-stack" no hífen) */}
              {SITE.role.split(" · ").map((part, i) => (
                <Fragment key={part}>
                  {i > 0 && " · "}
                  <span style={{ whiteSpace: "nowrap" }}>{part}</span>
                </Fragment>
              ))}
              .
            </strong>{" "}
            Faço sites, apps, jogos e sistemas,
            do banco de dados até o último detalhe da tela.
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

          <p className="open-sign">
            <span className="open-sign__dot" aria-hidden="true" />
            <span className="open-sign__script">disponível</span>
            <span className="open-sign__small">para freelas e vagas</span>
          </p>
        </div>

        <div className="np__art">
          <div className="cover">
            <div className="cd" aria-hidden="true" />
            <Sparkle className="flash flash--pink" style={{ top: "-7%", left: "-8%", width: "3.2rem" }} />
            <Sparkle className="flash flash--white" style={{ top: "9%", left: "-12%", width: "1.3rem" }} />
            <Sparkle className="flash flash--lime" style={{ bottom: "-8%", right: "-24%", width: "2.4rem" }} />
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
          <Discman playing={playing} onToggle={() => setPlaying((p) => !p)} />
        </div>
      </div>
    </section>
  );
}
