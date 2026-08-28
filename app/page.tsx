import Link from "next/link";
import { Activity, ArrowRight, Brain, CheckCircle2, HeartPulse, Instagram, MapPin, MessageCircle, MonitorSmartphone, ShieldCheck, Stethoscope, UsersRound } from "lucide-react";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

const care = [
  { icon: UsersRound, title: "Bem-estar do idoso", text: "Acompanhamento global de saúde, funcionalidade, prevenção de quedas, revisão de medicações e atenção às necessidades que surgem com o envelhecimento." },
  { icon: Activity, title: "Dor crônica", text: "Avaliação clínica da dor persistente, investigação de fatores associados, revisão de tratamentos em uso e coordenação com outras áreas quando necessário." },
  { icon: Brain, title: "Saúde mental integrada", text: "Acolhimento de queixas emocionais e acompanhamento da saúde clínica de pacientes em tratamento psiquiátrico, com encaminhamento especializado quando indicado." },
  { icon: HeartPulse, title: "Hipertensão e diabetes", text: "Acompanhamento de doenças crônicas, metas terapêuticas, exames de controle, prevenção de complicações e orientação de hábitos de vida." },
  { icon: ShieldCheck, title: "Prevenção e check-up", text: "Avaliação de fatores de risco, revisão do histórico de saúde e solicitação criteriosa de exames conforme idade, sintomas e contexto clínico." },
  { icon: Stethoscope, title: "Queixas clínicas em geral", text: "Avaliação de sintomas respiratórios, gastrointestinais, urinários, cefaleias, dores comuns, alterações metabólicas e outras demandas da prática generalista." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero sectionOverflow">
        <div className="heroGlow heroGlowOne"/><div className="heroGlow heroGlowTwo"/>
        <div className="container heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">ATENDIMENTO MÉDICO GENERALISTA · SÃO JOSÉ DOS PINHAIS</span>
            <h1>Saúde cuidada com <em>escuta, proximidade</em> e visão integral.</h1>
            <p className="heroLead">Dra. Heloísa Geovana Guedes acompanha adultos e idosos em diferentes momentos da vida, unindo prevenção, investigação clínica e cuidado contínuo.</p>
            <div className="doctorId"><strong>Dra. Heloísa Geovana Guedes</strong><span>MÉDICA · CRM-PR 65271</span></div>
            <div className="heroActions">
              <a className="button" href="https://wa.me/5544998565990?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helo%C3%ADsa." target="_blank" rel="noreferrer"><MessageCircle size={18}/> Agendar pelo WhatsApp</a>
              <a className="button buttonGhost" href="https://medprev.online/profissionais/heloisa-geovana-guedes-9a89c7d04d6a29639893b5265aeaea40/" target="_blank" rel="noreferrer">Ver horários <ArrowRight size={17}/></a>
            </div>
            <div className="heroMeta"><span><MapPin size={16}/> Presencial em São José dos Pinhais</span><span><MonitorSmartphone size={16}/> Teleconsulta</span></div>
          </div>
          <div className="heroVisual">
            <PhotoPlaceholder variant="hero" src="/images/foto-principal.jpeg" alt="Dra. Heloísa Geovana Guedes" priority />
            <div className="floatingCard"><span className="floatingIcon">✦</span><div><strong>Cuidado que conecta os pontos</strong><small>Sintomas, histórico, rotina e objetivos de saúde.</small></div></div>
          </div>
        </div>
      </section>

      <section className="trustStrip">
        <div className="container trustGrid">
          <div><strong>Particular e Medprev</strong><span>Opções de atendimento</span></div>
          <div><strong>Presencial + online</strong><span>Mais flexibilidade para cuidar da saúde</span></div>
          <div><strong>Metropolimed</strong><span>Centro · São José dos Pinhais</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionHeading splitHeading">
            <div><span className="eyebrow">CUIDADO INTEGRAL</span><h2>Um primeiro olhar amplo para a sua saúde.</h2></div>
            <p>Nem toda queixa começa com uma especialidade definida. O atendimento médico generalista permite avaliar o quadro como um todo, iniciar a investigação e coordenar o cuidado quando outros profissionais precisam participar.</p>
          </div>
          <div className="careGrid">
            {care.map(({ icon: Icon, title, text }) => <article className="careCard" key={title}><div className="iconBox"><Icon size={24}/></div><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="centerAction"><Link className="textLink" href="/atendimentos">Conhecer todos os atendimentos <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="section softSection">
        <div className="container aboutGrid">
          <PhotoPlaceholder variant="portrait" src="/images/foto-secao-sobre.jpeg" alt="Dra. Heloísa Guedes em ambiente profissional" />
          <div className="aboutCopy">
            <span className="eyebrow">SOBRE A DRA. HELOÍSA</span>
            <h2>Ciência no raciocínio. Humanidade na consulta.</h2>
            <p>Heloísa Geovana Guedes é médica formada pela Faculdade Pequeno Príncipe e atua em São José dos Pinhais. Além do atendimento ambulatorial na Metropolimed, integra a assistência da UPA Afonso Pena.</p>
            <p>Sua prática valoriza uma anamnese detalhada, compreensão do contexto de cada paciente, prevenção e acompanhamento longitudinal — especialmente em situações em que diferentes problemas de saúde se sobrepõem.</p>
            <div className="checkList"><span><CheckCircle2/> Atendimento individualizado</span><span><CheckCircle2/> Decisões compartilhadas</span><span><CheckCircle2/> Encaminhamento quando necessário</span></div>
            <Link className="button buttonGhost" href="/sobre">Conheça a trajetória</Link>
          </div>
        </div>
      </section>

      <section className="section roseSection">
        <div className="container statementCard">
          <div><span className="eyebrow">QUANDO PROCURAR</span><h2>“Não sei qual especialista procurar.”</h2></div>
          <div><p>Essa também é uma razão válida para marcar uma consulta. O atendimento generalista pode ser a porta de entrada para organizar sintomas, histórico, exames e prioridades, definindo o próximo passo de forma mais clara.</p><Link href="/atendimentos" className="textLink">Veja como a consulta pode ajudar <ArrowRight size={16}/></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container locationGrid">
          <div className="locationCopy">
            <span className="eyebrow">ATENDIMENTO PRESENCIAL</span><h2>Metropolimed</h2>
            <p className="largeText">Rua Marechal Deodoro da Fonseca, 261<br/>Centro · São José dos Pinhais - PR<br/>CEP 83005-350</p>
            <div className="heroActions"><a className="button" href="https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Deodoro+da+Fonseca+261+Sao+Jose+dos+Pinhais" target="_blank" rel="noreferrer"><MapPin size={18}/> Como chegar</a><a className="button buttonGhost" href="https://medprev.online/profissionais/heloisa-geovana-guedes-9a89c7d04d6a29639893b5265aeaea40/" target="_blank" rel="noreferrer">Agendar pela Medprev</a></div>
          </div>
          <div className="mapFrame"><iframe title="Mapa da Metropolimed" loading="lazy" src="https://www.google.com/maps?q=Rua%20Marechal%20Deodoro%20da%20Fonseca%20261%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais&output=embed" referrerPolicy="no-referrer-when-downgrade"/></div>
        </div>
      </section>

      <section className="section darkSection">
        <div className="container ctaGrid">
          <div><span className="eyebrow lightEyebrow">AGENDAMENTO</span><h2>Seu cuidado pode começar por uma boa conversa.</h2><p>Escolha a forma mais conveniente para verificar disponibilidade e marcar sua consulta.</p></div>
          <div className="ctaActions"><a className="button buttonLight" href="https://wa.me/5544998565990" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a><a className="button buttonOutlineLight" href="https://medprev.online/profissionais/heloisa-geovana-guedes-9a89c7d04d6a29639893b5265aeaea40/" target="_blank" rel="noreferrer">Medprev</a><a className="button buttonOutlineLight" href="https://www.instagram.com/draheloisaguedes" target="_blank" rel="noreferrer"><Instagram/> Instagram</a></div>
        </div>
      </section>
    </>
  );
}
