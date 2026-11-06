# Portfólio · Joana Brandão

Meu portfólio pessoal, com tema de player de música: o início é o "tocando agora", o sobre é o encarte, os projetos são as faixas e o contato é o lado B.

Feito com Next.js, TypeScript e Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde mexer

- **Textos, links e projetos:** `lib/constants.ts`. Para adicionar um projeto, coloque um item em `PROJECTS`, e ele aparece como uma nova faixa.
- **Texto do "Sobre":** `app/(sections)/about-section.tsx`
- **Visual do tema:** `app/playlist.css`. As cores ficam em `app/globals.css` (`--pink`, `--pink-secondary`, `--baby-pink`, `--background`, `--foreground`).
- **Currículo:** substitua `public/files/curriculo-joana-brandao.pdf` mantendo o mesmo nome.
