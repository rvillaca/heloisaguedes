import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atendimentos",
  description: "Conheça as principais demandas avaliadas em consulta médica generalista com a Dra. Heloísa Geovana Guedes.",
};

const services = [
  ["Consulta médica geral", "Avaliação de sintomas, histórico, exame físico, hipóteses diagnósticas e plano de investigação ou tratamento.", "ADULTOS E IDOSOS"],
  ["Bem-estar e saúde do idoso", "Acompanhamento global, funcionalidade, risco de quedas, nutrição, cognição, sono e revisão de medicações.", "CUIDADO INTEGRAL"],
  ["Saúde mental integrada", "Acolhimento de sintomas emocionais e acompanhamento clínico geral de pacientes em tratamento psiquiátrico, inclusive monitorização metabólica quando pertinente.", "COORDENAÇÃO DE CUIDADO"],
  ["Hipertensão arterial", "Acompanhamento de pressão arterial, adesão, fatores de risco, exames e prevenção de complicações cardiovasculares.", "DOENÇAS CRÔNICAS"],
  ["Diabetes e pré-diabetes", "Avaliação de controle glicêmico, fatores de risco, exames de rotina e estratégias de cuidado longitudinal.", "SAÚDE METABÓLICA"],
  ["Colesterol e risco cardiovascular", "Avaliação de perfil lipídico, hábitos, histórico familiar e outros fatores que influenciam o risco cardiovascular.", "PREVENÇÃO"],
  ["Check-up e prevenção", "Revisão de vacinas, rastreamentos e exames indicados conforme idade, história clínica e fatores de risco.", "PREVENÇÃO"],
  ["Queixas respiratórias", "Tosse, sintomas gripais, falta de ar, alergias respiratórias e acompanhamento clínico após quadros agudos.", "QUEIXAS COMUNS"],
  ["Queixas gastrointestinais", "Dor abdominal, refluxo, alterações do hábito intestinal, náuseas e outros sintomas digestivos comuns.", "QUEIXAS COMUNS"],
  ["Sintomas urinários", "Avaliação inicial de ardência, aumento da frequência urinária, desconforto e outras queixas do trato urinário.", "QUEIXAS COMUNS"],
  ["Cefaleias e dores comuns", "Avaliação inicial de dores de cabeça, dores musculares e articulares, com investigação de sinais de alerta.", "AVALIAÇÃO CLÍNICA"],
  ["Tireoide e alterações metabólicas", "Avaliação de exames e sintomas relacionados a alterações tireoidianas e metabólicas dentro do escopo clínico geral.", "ACOMPANHAMENTO"],
  ["Interpretação e seguimento de exames", "Contextualização dos resultados com sintomas, histórico e tratamentos em uso — evitando analisar números de forma isolada.", "RETORNO E ACOMPANHAMENTO"],
  ["Pós-alta e pós-pronto atendimento", "Revisão de evolução, prescrições, exames e necessidade de continuidade do tratamento ou encaminhamento.", "CONTINUIDADE"],
  ["Coordenação do cuidado", "Organização do acompanhamento quando diferentes especialistas ou profissionais participam do tratamento.", "VISÃO INTEGRAL"],
];

export default function AtendimentosPage() {
  return (
    <>
      <section className="pageHero"><div className="container pageHeroGrid"><div><span className="eyebrow">ATENDIMENTOS</span><h1>Cuidado clínico para diferentes momentos.</h1><p>O atendimento generalista pode ser a porta de entrada para sintomas novos, prevenção, controle de doenças crônicas e organização de tratamentos já em andamento.</p></div><p className="notice">As informações abaixo descrevem tipos de demandas que podem ser avaliadas em consulta. O diagnóstico e a conduta dependem da avaliação individual de cada paciente.</p></div></section>
      <section className="section softSection"><div className="container"><div className="serviceList">{services.map(([title,text,tag])=><article className="serviceItem" key={title}><h3>{title}</h3><p>{text}</p><small>{tag}</small></article>)}</div></div></section>
    </>
  );
}
