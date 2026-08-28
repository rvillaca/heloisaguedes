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
            <p>Dra. Heloísa Geovana Guedes é formada em Medicina pela Faculdade Pequeno Príncipe. Em São José dos Pinhais, realiza atendimento ambulatorial na Metropolimed e também atua na UPA Afonso Pena.</p>
            <p>A vivência em diferentes cenários assistenciais contribui para uma abordagem prática e abrangente: reconhecer prioridades, investigar com critério, acompanhar condições crônicas e identificar o momento certo de envolver outras especialidades.</p>
            <div className="checkList"><span><CheckCircle2/> Consulta centrada na pessoa</span><span><CheckCircle2/> Uso criterioso de exames</span><span><CheckCircle2/> Continuidade do acompanhamento</span><span><CheckCircle2/> Coordenação com outros profissionais</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contentGrid">
          <div className="stickyLabel"><span className="eyebrow">FORMA DE CUIDAR</span><h2>Além da queixa principal.</h2></div>
          <div className="richText">
            <p>Uma consulta clínica pode começar por um sintoma específico, mas frequentemente revela outros fatores importantes: qualidade do sono, saúde emocional, medicamentos em uso, alimentação, mobilidade, risco cardiovascular e contexto familiar.</p>
            <p>Por isso, a proposta é organizar as informações de forma clara e estabelecer prioridades junto com o paciente. Quando uma condição pode ser manejada no acompanhamento generalista, o cuidado segue de forma longitudinal. Quando há necessidade de avaliação especializada, o encaminhamento é indicado de maneira direcionada.</p>
            <div className="infoPanel"><h3>Áreas de maior afinidade no atendimento</h3><p>Bem-estar do idoso, dor crônica, saúde clínica de pacientes em acompanhamento psiquiátrico, hipertensão arterial, diabetes, alterações metabólicas, prevenção e acompanhamento geral de adultos.</p></div>
          </div>
        </div>
      </section>

      <section className="section roseSection">
        <div className="container"><PhotoPlaceholder variant="wide" src="/images/foto-atendimento.jpeg" alt="Dra. Heloísa Guedes durante atendimento médico" /></div>
      </section>
    </>
  );
}
