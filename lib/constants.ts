// Tudo o que é "conteúdo" do site fica aqui, para você editar sem mexer nos componentes.

export const SITE = {
  name: "Joana Brandão",
  role: "Engenheira da computação · Desenvolvedora full-stack",
  email: "joanab.dev@gmail.com",
  cv: "/files/curriculo-joana-brandao.pdf",
  year: new Date().getFullYear(),
};

export const SOCIAL_LINKS = {
  github: "https://github.com/JoanaBrandao1",
  linkedin: "https://www.linkedin.com/in/joana-beatriz-brandao/",
};

// atributos de link que abre em outra aba (usado em todos os links externos)
export const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

export type Project = {
  title: string;
  description: string;
  stack: string[];
  /** link do site no ar (opcional) */
  href?: string;
  /** link do repositório (opcional) */
  repo?: string;
  /** logo do projeto, aparece no meio da capa (ex.: "/projetos/meu-app-logo.png") */
  logo?: string;
  /** imagem de fundo da capa, se quiser uma arte própria (opcional) */
  cover?: string;
};

// Quando terminar um projeto, adicione aqui. Ele vira uma capa no carrossel da seção de projetos.
// Exemplo:
// {
//   title: "Nome do projeto",
//   description: "Uma ou duas frases: o que é e qual problema resolve.",
//   stack: ["Next.js", "TypeScript"],
//   href: "https://...",
//   repo: "https://github.com/JoanaBrandao1/...",
//   logo: "/projetos/nome-do-projeto.png",
// },
export const PROJECTS: Project[] = [];

// Quantas capas aparecem no total. As que ainda não têm projeto aparecem como "em gravação".
export const TRACKLIST_SIZE = 4;
