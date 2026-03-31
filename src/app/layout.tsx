import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Merkai — Sistema de Conversão Inteligente",
  description:
    "Estruturamos sua operação comercial para parar de perder leads e vender com mais eficiência. Tráfego, automação e IA integrados.",
  openGraph: {
    title: "Merkai — Sistema de Conversão Inteligente",
    description:
      "Estruturamos sua operação comercial para parar de perder leads e vender com mais eficiência.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${syne.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-[family-name:var(--font-dm-sans)] grain-overlay">
        {children}
      </body>
    </html>
  );
}
