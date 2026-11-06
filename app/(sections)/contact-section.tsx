import { ArrowUpRight } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";

export default function ContactSection() {
  return (
    <section id="contato" className="section">
      <Neon kind="coqueiro" className="neon--flicker" style={{ right: "1.5%", bottom: "0", width: "16rem" }} />
      <Neon kind="coqueiro" style={{ right: "15%", bottom: "0", width: "10.5rem", transform: "scaleX(-1)" }} />
      <Sparkle className="flash flash--white" style={{ top: "4rem", right: "11%", width: "1.6rem" }} />
      <Sparkle className="flash flash--pink" style={{ top: "7rem", right: "22%", width: "2.4rem" }} />
      <div className="wrap">
        <p className="label">Lado B · Pedidos</p>
        <h2 className="display requests__title">
          Tem uma ideia?
          <br />
          <em className="chrome">Manda pra mim.</em>
          <Sparkle className="flash-inline flash--white" />
        </h2>

        <a className="requests__mail" href={`mailto:${SITE.email}`}>
          {SITE.email}
          <ArrowUpRight aria-hidden="true" />
        </a>

        <ul className="requests__links">
          <li>
            <a className="btn btn--ghost" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="btn btn--ghost" href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="btn btn--ghost" href={SITE.cv} download>
              Currículo
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
