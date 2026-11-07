import Image from "next/image";
import Link from "next/link";
import { SocialLinks, Theme } from "@/app/links";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#faixas", label: "Faixas" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="topbar">
      <nav className="wrap topbar__inner" aria-label="Principal">
        <Link href="#inicio" className="mark" aria-label="Início">
          {/* o mesmo logo do ícone da aba (app/icon.svg) */}
          <Image src="/logo-jb.svg" alt="" width={64} height={64} priority />
        </Link>

        <div className="topbar__nav">
          <div className="topbar__links">
            {links.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <span>0{i + 1}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="topbar__icons">
            <SocialLinks className="hide-sm" />
            <Theme />
          </div>
        </div>
      </nav>
    </header>
  );
}
