import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import Script from "next/script";
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4X4JMQH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-T4X4JMQH"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
