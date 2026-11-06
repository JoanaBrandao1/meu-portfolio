// Tudo o que é "conteúdo" do site fica aqui, para você editar sem mexer nos componentes.

export const SITE = {
  name: "Joana Brandão",
  role: "Desenvolvedora front-end",
  email: "joanab.dev@gmail.com",
  cv: "/files/curriculo-joana-brandao.pdf",
  year: 2026,
};

export const SOCIAL_LINKS = {
  github: "https://github.com/JoanaBrandao1",
  linkedin: "https://www.linkedin.com/in/joana-beatriz-brandao/",
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  /** link do site no ar (opcional) */
  href?: string;
  /** link do repositório (opcional) */
  repo?: string;
};

// Quando terminar um projeto, adicione aqui. Ele vira uma "faixa" na seção de projetos.
// Exemplo:
// {
//   title: "Nome do projeto",
//   description: "Uma ou duas frases: o que é e qual problema resolve.",
//   stack: ["Next.js", "TypeScript"],
//   href: "https://...",
//   repo: "https://github.com/JoanaBrandao1/...",
// },
export const PROJECTS: Project[] = [];

// Quantas faixas aparecem no total. As que ainda não têm projeto aparecem como "em gravação".
export const TRACKLIST_SIZE = 4;
