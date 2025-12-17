export default function AboutSection() {
  return (
    <section id="about" className="py-20 flex flex-col justify-center min-h-screen">
      <div className="container mx-auto px-8 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-12 text-foreground">
          Sobre <span className="text-pink">Mim</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl leading-relaxed text-pink-foreground/70">
            Sou uma desenvolvedora apaixonada por tecnologia e design, com foco em criar
            soluções digitais que fazem a diferença. Combino conhecimento técnico sólido
            com sensibilidade estética para entregar produtos excepcionais.
          </p>
        </div>
      </div>
    </section>
  );
}