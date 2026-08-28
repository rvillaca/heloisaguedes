import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <div className="footerBrand">Dra. Heloísa Geovana Guedes</div>
          <p className="footerCrm">MÉDICA · CRM-PR 65271</p>
          <p>Atendimento médico generalista presencial e por teleconsulta, com cuidado individualizado e coordenação de saúde.</p>
        </div>
        <div>
          <h3>Navegação</h3>
          <Link href="/sobre">Sobre</Link>
          <Link href="/atendimentos">Atendimentos</Link>
          <Link href="/teleconsulta">Teleconsulta</Link>
        </div>
        <div>
          <h3>Contato</h3>
          <a href="https://www.instagram.com/draheloisaguedes" target="_blank" rel="noreferrer"><Instagram size={17}/> @draheloisaguedes</a>
          <a href="https://www.google.com/maps/search/?api=1&query=Rua+Marechal+Deodoro+da+Fonseca+261+Sao+Jose+dos+Pinhais" target="_blank" rel="noreferrer"><MapPin size={17}/> Metropolimed · São José dos Pinhais</a>
        </div>
      </div>
      <div className="container footerBottom">
        <span>© {new Date().getFullYear()} Dra. Heloísa Geovana Guedes.</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
