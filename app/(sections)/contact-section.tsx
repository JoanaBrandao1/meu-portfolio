import { ArrowUpRight } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Sticker } from "@/components/sticker";

export default function ContactSection() {
  return (
    <section id="contato" className="section">
      <div className="deco" aria-hidden="true">
        <Sticker kind="butterfly" className="sticker--float" style={{ top: "4rem", right: "7%", width: "7rem", rotate: "8deg" }} />
        <Sticker kind="heart" tone="lilac" style={{ top: "12.5rem", right: "21%", width: "2.4rem", rotate: "-10deg" }} />
        <Sticker kind="star" tone="aqua" style={{ bottom: "3.5rem", right: "4%", width: "3rem", rotate: "-8deg" }} />
      </div>
      <div className="wrap">
        <p className="label">Lado B · Pedidos</p>
        <h2 className="display requests__title">
          Tem uma ideia?
          <br />
          <em className="chrome">Manda pra mim.</em>
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
