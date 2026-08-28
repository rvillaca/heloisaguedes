"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = `Olá, meu nome é ${name || "[nome]"}. Gostaria de agendar uma consulta com a Dra. Heloísa.${reason ? ` Motivo do contato: ${reason}` : ""}`;
    window.open(`https://wa.me/5544998565990?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <label>Seu nome<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Como podemos te chamar?" /></label>
      <label>Motivo do contato<textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Conte brevemente como podemos ajudar" rows={4}/></label>
      <button className="button" type="submit">Continuar no WhatsApp</button>
      <small>Nenhum dado é armazenado neste site. A mensagem será aberta diretamente no WhatsApp.</small>
    </form>
  );
}
