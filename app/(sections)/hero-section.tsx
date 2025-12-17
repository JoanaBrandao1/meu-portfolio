"use client";

import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center text-left px-8 ">
      <div className="justify-around flex flex-row">
        <div >
          <span className="uppercase font-bold tracking-widest text-baby-pink mb-4">
            Desenvolvedora Front-end
          </span>

          <h1 className="text-7xl md:text-7xl font-bold leading-tight">
            Olá! Me chamo
            <br />
            <span className="text-pink">Joana Brandão</span>
          </h1>

          <p className="text-pink-foreground/60 mt-6 max-w-lg text-xl">
            Transformo ideias em experiências digitais elegantes e funcionais.
            Apaixonada por código limpo e design intuitivo.
          </p>
          <Button variant="pink" className='rounded-full mt-8 px-10 py-6 !text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,114,182,0.6)] hover:scale-105'>
            <a href="/files/Currículo joana 2024.pdf" target="_blank" rel="noopener noreferrer" className='flex flex-row items-center gap-2'>
              <ArrowDownToLine /> <div>Baixar CV</div>
            </a>
          </Button>
          <div className='flex items-center gap-2 mt-4'>
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-pink opacity-75 animate-ping"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-pink"></span>
            </div>

            <div className='text-pink'>Disponível para novos projetos</div>
          </div>
        </div>
        <div className="relative justify-center hidden md:flex ">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[420px] h-[420px] rounded-full bg-pink/60 blur-3xl" />
            <div className="w-[380px] h-[380px] rounded-full bg-pink border-10 border-white" />
          </div>
          <Image alt="Logo" src="/images/imagem-joana-Photoroom.png" width={500} height={500} className="relative z-10 pt-10" />
        </div>
      </div>
    </section>
  );
}
