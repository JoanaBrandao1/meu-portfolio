import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronsLeftRight, Database, Globe, GraduationCap, Palette } from "lucide-react";

export default function AboutSection() {
  const skills = [
    
    // colocar aqui as habilidades:

    {
      category: "Frontend",
      icon: <ChevronsLeftRight/>,
      techs: ["React", "TypeScript", "Tailwind"],
    },
    // {
    //   category: "Backend",
    //   icon: <Database/>,
    //   techs: ["Node.js", "Python", "PostgreSQL"],
    // },
    {
      category: "Design",
      icon: <Palette />,
      techs: ["Figma", "Adobe XD", "UI/UX"],
    },
    {
      category: "DevOps",
      icon: <Globe/>,
      techs: ["AWS", "Docker", "Git"],
    },
  ];

  const education = [
    {
      title: "Bacharelado em Engenharia da Computação",
      institution: "Universidade Federal Rural de Pernambuco",
      year: "2020 - 2026",
    },
    {
      title: "Técnico em Desenvolvimento de Sistemas",
      institution: "Escola Técnica Estadual Advogado José David Gil Rodrigues",
      year: "2017 - 2019",
    },
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google UX Design Certificate",
    "React Advanced Patterns",
  ];

  return (
    <section id="about" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto', padding: '' }}>
        {/* Elemento visual decorativo */}
        <div className="container mx-auto px-8 relative z-10">
          <h2 className="text-6xl md:text-7xl font-bold mb-10 text-foreground text-center">
            Sobre <span className="text-pink">Mim</span>
          </h2>
          <div className="mx-70 mb-12 text-center">
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              Sou uma desenvolvedora apaixonada por tecnologia e design, com foco em criar
              soluções digitais que fazem a diferença. Combino conhecimento técnico sólido
              com sensibilidade estética para entregar produtos excepcionais.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Coluna Esquerda - Descrição e Habilidades */}

            <div>


              {/* Habilidades Técnicas */}
              <div>
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <span className="text-pink"><ChevronsLeftRight/></span> Habilidades Técnicas
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {skills.map((skill) => (
                    <Card
                      key={skill.category}
                      className="border-border hover:border-pink/50 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:shadow-lg cursor-pointer bg-white/5"
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <span className="text-pink text-2xl">{skill.icon}</span>
                          {skill.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {skill.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 rounded-full bg-pink/20 text-pink text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna Direita - Formação e Certificações */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="text-pink text-2xl"><GraduationCap/></span> Formação Acadêmica
              </h3>

              <div className="space-y-6 mb-12">
                {education.map((edu, idx) => (
                  <Card key={idx} className="border-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-white/5">
                    <CardHeader>
                      <CardTitle className="text-xl">{edu.title}</CardTitle>
                      <CardDescription className="text-base">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-pink font-medium">{edu.year}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certificações */}
              <Card className="border-border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer bg-white/5">
                <CardHeader>
                  <CardTitle className="text-xl">Certificações</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-pink mt-1 text-lg">•</span>
                        <span className="text-base">{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Efeito de blur gradual na parte inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-50"
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'
        }}
      />
    </section>
  );
}