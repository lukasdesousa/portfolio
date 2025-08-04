import type { Metadata } from "next";
import { Jost, Montserrat } from "next/font/google";
import "@/global.css"

const jost = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lukas S.",
  description: "Criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${jost.variable} ${montSerrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
