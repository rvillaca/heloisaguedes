import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://heloisaguedes.vercel.app"),
  title: {
    default: "Dra. Heloísa Geovana Guedes | Médica em São José dos Pinhais",
    template: "%s | Dra. Heloísa Guedes",
  },
  description: "Atendimento médico generalista presencial em São José dos Pinhais e por teleconsulta. Prevenção, acompanhamento clínico, saúde do idoso, dor crônica, hipertensão, diabetes e cuidado integral.",
  keywords: ["médica São José dos Pinhais", "clínico geral São José dos Pinhais", "consulta médica", "teleconsulta", "Medprev", "Heloísa Geovana Guedes"],
  openGraph: {
    title: "Dra. Heloísa Geovana Guedes | Médica",
    description: "Cuidado médico próximo, individualizado e baseado em evidências.",
    type: "website",
    locale: "pt_BR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dra. Heloísa Geovana Guedes",
  description: "Médica, CRM-PR 65271. Atendimento médico generalista presencial e por teleconsulta.",
  telephone: "+55 44 99856-5990",
  url: "https://heloisaguedes.vercel.app",
  sameAs: ["https://www.instagram.com/draheloisaguedes"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Marechal Deodoro da Fonseca, 261",
    addressLocality: "São José dos Pinhais",
    addressRegion: "PR",
    postalCode: "83005-350",
    addressCountry: "BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
