"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubLink, LinkedinLink, EmailLink } from "@/app/links";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-background shadow-lg z-50">
      <nav className="w-full flex items-center justify-between px-8 py-4">
        <span className="pl-20 font-bold">
          <Image alt="Logo" src="/icons/Iconejbmaius.png" width={50} height={50} />
        </span>

        <div className="flex items-center pr-20">
          <div className="flex gap-6">
            <Link href="#about">Sobre</Link>
            <Link href="#projects">Projetos</Link>
            <Link href="#contact">Contato</Link>
          </div>

          <div className="ml-8 flex items-center gap-2">
            <GithubLink />
            <LinkedinLink />
            <EmailLink/>
          </div>
        </div>
      </nav>
    </header>
  );
}
