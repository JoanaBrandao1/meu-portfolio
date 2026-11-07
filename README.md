# Portfólio · Joana Brandão

Meu portfólio pessoal, com tema de player de música e clima baddie anos 2000: oncinha, strass, verde-limão, CD, Discman e letra cromada com glitter. O início é o "tocando agora", o sobre é o encarte, os projetos são as faixas e o contato é o lado B.

Feito com Next.js, TypeScript e Tailwind CSS.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde mexer

- **Textos, links e projetos:** `lib/constants.ts` (inclui `EXTERNAL`, os atributos de link que abre em outra aba). Para adicionar um projeto, coloque um item em `PROJECTS`, e ele vira uma capa no carrossel. Coloque a logo em `public/projetos/` e aponte em `logo`.
- **Texto do "Sobre":** `app/(sections)/about-section.tsx`
- **Visual do tema:** `app/playlist.css`. As cores ficam em `app/globals.css` (`--pink`, `--pink-secondary`, `--baby-pink`, `--background`, `--foreground`).
- **Estampas:** as oncinhas (clássica, rosa da capa e as tom sobre tom do fundo, nude e noite) e o glitter ficam em `public/patterns/`, gerados por `scripts/oncinha.py` (`python3 scripts/oncinha.py public/patterns`). Mude as cores no fim do script.
- **Letreiros de neon e brilhos:** `components/neon.tsx` (cifrão, coqueiro, coração, estrela de lâmpadas) e `components/sparkle.tsx` (estrela de flash). Para mudar de lugar, ajuste o `style` de cada um nas seções.
- **Peças de fundo do "Sobre mim":** `components/deco.tsx` (também define `DecoProps`, as props comuns de toda decoração) (borboleta, adesivo de coração de oncinha, strass e CD). As formas são máscaras em `public/patterns/` (`borboleta.svg`, `coracao.svg`) e o preenchimento é CSS em `app/playlist.css`.
- **Carrossel de capas e pompons:** `components/cover-carousel.tsx` e `components/pompom.tsx`.
- **Discman (player do início):** `components/discman.tsx`.
- **Ícones da topbar (GitHub, LinkedIn, email):** `app/links/social-links.tsx`. Para adicionar ou trocar um, edite a lista `LINKS` nesse arquivo.
- **Logo (aba do navegador e topbar):** `app/icon.svg` (ícone da aba), `app/favicon.ico` e `app/apple-icon.png` (versões em imagem) e `public/logo-jb.svg` (topbar). As letras JB são da fonte Gloock (licença OFL) convertidas em desenho.
- **Currículo:** substitua `public/files/curriculo-joana-brandao.pdf` mantendo o mesmo nome.

## Classes úteis

- `deco--desktop`: esconde a peça no celular (até 860px).
- `deco--wide`: esconde a peça em telas com menos de 1366px.
- `gel-round`: botão redondo de gel rosa.
- `flash flash--pink | flash--white | flash--lime`: estrela de flash com brilho.
