import { ArrowUpRight } from "lucide-react";
import { SITE, SOCIAL_LINKS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contato" className="section">
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
