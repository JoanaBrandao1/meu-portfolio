# Portfólio · Joana Brandão

Meu portfólio pessoal, com tema de player de música e clima anos 2000: oncinha, CD, Discman e letra cromada. O início é o "tocando agora", o sobre é o encarte, os projetos são as faixas e o contato é o lado B.

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
- **Estampa de oncinha:** os SVGs em `public/patterns/` são gerados por `scripts/oncinha.py` (`python3 scripts/oncinha.py public/patterns`). Mude as cores no fim do script.
- **Símbolos do fundo:** `public/patterns/simbolos.svg`, gerado por `scripts/papel-de-parede.py`. A intensidade fica em `--simbolos-opacity` no `app/playlist.css`.
- **Adesivos brilhantes:** componente `components/sticker.tsx` (coração, estrela, borboleta, margarida, em rosa, dourado, lilás ou azul). Para mudar de lugar, ajuste o `style` de cada adesivo nas seções.
- **Currículo:** substitua `public/files/curriculo-joana-brandao.pdf` mantendo o mesmo nome.
