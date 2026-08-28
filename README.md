# Site — Dra. Heloísa Geovana Guedes

Site institucional responsivo em Next.js + TypeScript, preparado para deploy na Vercel.

## Dados já configurados
- Dra. Heloísa Geovana Guedes
- MÉDICA · CRM-PR 65271
- Atendimento presencial: Metropolimed, Rua Marechal Deodoro da Fonseca, 261, Centro, São José dos Pinhais - PR
- WhatsApp: (44) 9 9856-5990
- Instagram: @draheloisaguedes
- Agenda externa: Medprev
- Atendimento particular, Medprev, presencial e teleconsulta

## Fotos a inserir antes de publicar
O layout mostra placeholders propositalmente explícitos. Quando as fotos estiverem prontas, sugere-se salvar em `public/images/`:

1. `heloisa-hero.jpg`
   - Retrato vertical principal
   - Luz natural, fundo limpo, roupa neutra ou jaleco
   - Recomenda-se 1600 × 2000 px ou maior

2. `heloisa-sobre.jpg`
   - Foto natural no consultório, preferencialmente sentada ou em situação profissional
   - Recomenda-se 1200 × 1500 px ou maior

3. `heloisa-consultorio.jpg`
   - Foto horizontal da médica em ambiente clínico
   - Não identificar pacientes
   - Recomenda-se 1800 × 1000 px ou maior

Depois, substitua os componentes `<PhotoPlaceholder />` em `app/page.tsx` e `app/sobre/page.tsx` por `next/image`.

## Executar localmente
```bash
npm install
npm run dev
```
Abra `http://localhost:3000`.

## Build de produção
```bash
npm run build
npm run start
```

## Deploy na Vercel
1. Suba a pasta para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Framework preset: Next.js.
4. Deploy.
5. Adicione o domínio desejado em Project > Settings > Domains.

## Importante antes do deploy
O domínio usado nos metadados atualmente é `https://draheloisaguedes.com.br`. Se o domínio final for outro, altere:
- `app/layout.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

## Privacidade
O formulário não envia dados para servidor próprio. Ele apenas cria uma mensagem e abre o WhatsApp.
