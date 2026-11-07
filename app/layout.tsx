import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Pacifico, Shrikhand, VT323 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";
import "./playlist.css";

// Archivo tem eixo de largura: condensada nos títulos, normal no texto.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// fonte de visor de LCD, para o Discman
const lcd = VT323({
  variable: "--font-lcd",
  subsets: ["latin"],
  weight: "400",
});

// título "Sobre mim": grossa, inclinada e com pontas, no clima das capas Y2K
const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  subsets: ["latin"],
  weight: "400",
});

// letra cursiva da plaquinha de neon "disponível"
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Joana Brandão · Engenheira da computação e desenvolvedora full-stack",
  description:
    "Portfólio de Joana Brandão, engenheira da computação formada pela UFRPE e desenvolvedora full-stack. Sites, apps, jogos e sistemas com React, React Native, Next.js, NestJS, Flutter e PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${plexMono.variable} ${lcd.variable} ${shrikhand.variable} ${pacifico.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
