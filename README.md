# M Promotora de Crédito — site

Site institucional e de captação de leads da **M Promotora de Crédito** — correspondente
bancário em Volta Redonda/RJ (crédito consignado INSS/CLT/servidores, portabilidade, refin,
antecipação de FGTS, cartão benefício e proteção veicular via parceria SaveCar Brasil).

Todo caminho da página converte para o WhatsApp `wa.me/5524988181891` com mensagem contextual.

## Estrutura

| Arquivo | O que é |
|---|---|
| `index.html` | Home — HTML estático autocontido (só Google Fonts externo). |
| `<slug>/index.html` | Página de produto, uma por rota indexável: `portabilidade-inss`, `emprestimo-novo-inss`, `refinanciamento`, `consignado-clt`, `antecipacao-fgts`, `cartao-beneficio`. |
| `logo.jpg`, `savecar-promo.jpg` | Imagens. |
| `robots.txt`, `sitemap.xml` | SEO. |
| `Dockerfile`, `docker-compose.yml` | Deploy (nginx). |
| `.github/workflows/deploy.yml` | `push` → build na VPS → `mpromotora.turboconversa.online`. |

Design: navy `#0C1B38` + verde WhatsApp `#17A05B` + dourado `#E0A64A`; Manrope + IBM Plex Mono.
Redesign feito no Claude Design e reconstruído aqui como HTML de produção (o protótipo em canvas
não é indexável). Spec completa e pendências de conteúdo (logo real, foto da fachada, arte
SaveCar, validação dos números publicados) no handoff de design.

## Rodar local

Qualquer servidor estático na raiz, ex.: `python -m http.server 8000`.

## Pendências

- Logo real em PNG/SVG (hoje `logo.jpg` como monograma).
- Foto real da fachada/equipe na seção de contato.
- Números promocionais (taxa a partir de, prazo máximo, 24h, +10 mil clientes) foram removidos em 04/10/2026. Só republicar com comprovação e com o disclaimer de correspondente bancário no rodapé.


<!-- Security scan triggered at 2026-10-07 11:53:03 -->

<!-- Security scan triggered at 2026-10-07 14:36:00 -->