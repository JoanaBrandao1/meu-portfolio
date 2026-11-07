import type { ComponentProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { EXTERNAL, SITE, SOCIAL_LINKS } from "@/lib/constants";
import { Neon } from "@/components/neon";
import { Sparkle } from "@/components/sparkle";

const buttons: (ComponentProps<"a"> & { label: string })[] = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, ...EXTERNAL },
  { label: "GitHub", href: SOCIAL_LINKS.github, ...EXTERNAL },
  { label: "Currículo", href: SITE.cv, download: true },
];

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

        <p className="requests__sub">
          Freela, vaga ou aquela ideia de app que nunca saiu do papel: me chama.
        </p>

        <a className="requests__mail" href={`mailto:${SITE.email}`}>
          {SITE.email}
          <ArrowUpRight aria-hidden="true" />
        </a>

        <ul className="requests__links">
          {buttons.map(({ label, ...link }) => (
            <li key={label}>
              <a className="btn btn--ghost" {...link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
