import type { Metadata } from "next";
import { Montserrat, Signika } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const signika = Signika({
  variable: "--font-signika",
  subsets: ["latin"],
  weight: ["700"],
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
      className={`${montserrat.variable} ${signika.variable} dark antialiased`}
    >
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4X4JMQH');`}
        </Script>
      </head>
      <body className="min-h-screen bg-background text-foreground font-[family-name:var(--font-montserrat)] grain-overlay">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4X4JMQH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
