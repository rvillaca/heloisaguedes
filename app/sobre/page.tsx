import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória e a forma de cuidar da Dra. Heloísa Geovana Guedes, médica em São José dos Pinhais, CRM-PR 65271.",
};

export default function SobrePage() {
  return (
    <>
      <section className="pageHero">
        <div className="container pageHeroGrid">
          <div><span className="eyebrow">SOBRE</span><h1>Dra. Heloísa Geovana Guedes</h1><p>Médica com atuação generalista, dedicada a um cuidado que integra sintomas, histórico, rotina, prevenção e objetivos de saúde.</p></div>
          <div className="doctorId"><strong>MÉDICA</strong><span>CRM-PR 65271</span></div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container aboutGrid">
          <PhotoPlaceholder variant="portrait" src="/images/foto-secao-sobre.jpeg" alt="Dra. Heloísa Guedes" />
          <div className="aboutCopy">
            <span className="eyebrow">TRAJETÓRIA</span><h2>Uma prática baseada em escuta e raciocínio clínico.</h2>
            <p>Dra. Heloísa Geovana Guedes é formada em Medicina pela Faculdade Pequeno Príncipe.</p>
            <div className="checkList"><span><CheckCircle2/> Consulta centrada na pessoa</span><span><CheckCircle2/> Uso criterioso de exames</span><span><CheckCircle2/> Continuidade do acompanhamento</span><span><CheckCircle2/> Coordenação com outros profissionais</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contentGrid">
          <div className="stickyLabel"><span className="eyebrow">FORMA DE CUIDAR</span><h2>Além da queixa principal.</h2></div>
          <div className="richText">
            <p>Uma consulta pode começar com um sintoma, mas também considera aspectos como sono, emoções, medicamentos, alimentação e rotina. Médica e paciente organizam juntos as prioridades e decidem se o cuidado pode continuar no acompanhamento geral ou se é necessário encaminhamento para um especialista.</p>
          </div>
        </div>
      </section>

      <section className="section roseSection">
        <div className="container"><PhotoPlaceholder variant="wide" src="/images/foto-atendimento.jpeg" alt="Dra. Heloísa Guedes durante atendimento médico" /></div>
      </section>
    </>
  );
}
