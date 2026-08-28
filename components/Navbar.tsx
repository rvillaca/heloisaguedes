"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["/", "Início"],
  ["/sobre", "Sobre"],
  ["/atendimentos", "Atendimentos"],
  ["/teleconsulta", "Teleconsulta"],
  ["/contato", "Contato"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container navInner">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Página inicial">
          <span className="brandMark">HG</span>
          <span>
            <strong>Dra. Heloísa Guedes</strong>
            <small>MÉDICA · CRM-PR 65271</small>
          </span>
        </Link>

        <nav className="desktopNav" aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>

        <a className="button buttonSmall desktopCta" href="https://wa.me/5544998565990?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helo%C3%ADsa." target="_blank" rel="noreferrer">
          Agendar consulta
        </a>

        <button className="menuButton" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <div className="mobileNav container">
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a className="button" href="https://wa.me/5544998565990?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Helo%C3%ADsa." target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
