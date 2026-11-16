# Auditoria do site: Luma Estilo (16/11/2026)

Escopo: catálogo (20 produtos), categorias, frete, SEO, links e todas as páginas públicas.
Legenda: ✅ corrigido e testado · 🟥 crítico (pendente) · 🟧 importante (pendente) · 🟨 melhoria

## ✅ Corrigido pela API e testado no site ao vivo
| # | Problema | O que foi feito | Teste |
|---|---|---|---|
| 1 | Nenhum produto tinha título e descrição de SEO | Título "Produto \| Luma Estilo" e descrição de busca nos 17 produtos visíveis | Página ao vivo mostra o novo `<title>` e a meta description ✅ |
| 2 | Descrições com código de fornecedor ("HH 2024", "SLTNX", "ZR") e frases como "conforme o cadastro" e "confirme as medidas antes da compra" | Descrições reescritas: benefício, como usar, tamanhos P–GG, WhatsApp para dúvidas de tamanho, direito de arrependimento de 7 dias. Sem inventar composição nem medida | Página ao vivo ✅ |
| 3 | Links com código de fornecedor e cor errada (ex.: blusa vermelha com "preta" no link) e com acento | 17 links novos e limpos (ex.: `/product-page/jaqueta-bomber-feminina`) | ✅ |
| 4 | Links antigos podiam quebrar (Google, Instagram, WhatsApp) | 17 redirecionamentos 301 do link antigo para o novo | Testado com e sem acento: abre o produto novo ✅ |
| 5 | Nomes imprecisos | "Camisa Vintage" virou **Blusa Vintage Manga Bufante** (a peça é blusa); Couro Litchi sem cor virou **- Preta**; Calça de Lã sem cor virou **- Cinza** | ✅ |
| 6 | Categoria "Camisetas" visível com os 2 produtos ocultos (página vazia) | Categoria ocultada | `/category/camisetas` não aparece mais ✅ |
| 7 | Descrição da home no Google citava "vestidos e conjuntos" (que a loja não vende) e o rascunho de SEO nunca tinha sido publicado | Novo título e descrição da home publicados, incluindo Facebook/WhatsApp (og) e X (twitter) | Página ao vivo ✅ |
| 8 | Títulos em inglês: "Cart Page", "Thank You Page" | Viraram "Carrinho", "Pedido confirmado", "Resultados da busca" | ✅ |

## 🟥 Crítico: resolver esta semana (no editor ou decisão do dono)
| # | Problema | Risco | Como resolver |
|---|---|---|---|
| C1 | **Site anuncia "Frete grátis para todo o Brasil", mas o checkout cobra R$19,90 abaixo de R$199** | Propaganda enganosa (CDC art. 30 e 37), reclamação e chargeback | Decidir: (a) trocar o texto para **"Frete grátis acima de R$199"** (recomendado) ou (b) zerar o frete para todos (custo seu). Claude altera o frete pela API se escolher (b) |
| C2 | **Termos e Condições** é 100% texto de modelo do Wix ("Sou uma seção de Atendimento ao cliente...") | Passa amadorismo e não tem valor legal | Colar o texto de `textos-legais.md` |
| C3 | **Política de Cookies** é o artigo-modelo do Wix ("como redigir seus próprios documentos") | LGPD | Colar o texto de `textos-legais.md` |
| C4 | Sem **Política de Privacidade** | LGPD (Lei 13.709/2018) exige | Criar a página com o texto pronto |
| C5 | Sem **Política de Trocas e Devoluções** (o link do rodapé leva para a home) | CDC art. 49 e Decreto 7.962/2013 | Criar a página com o texto pronto |
| C6 | **CNPJ/razão social não aparecem** no site | Decreto 7.962/2013 obriga e-commerce a mostrar | Pôr no rodapé: razão social, CNPJ, endereço, e-mail e telefone |
| C7 | Ícones de redes sociais levam para **as contas do Wix** (facebook.com/WixPortugues, instagram.com/wix, twitter.com/WixBR, YouTube do Wix) | Cliente sai da loja para o Wix | Editor → rodapé → Barra de redes sociais → trocar pelos perfis da Luma (ou apagar os que não existem) |
| C8 | "Ligue" no topo abre **(11) 3456-7890** (número de modelo) | Cliente liga para número errado | Trocar o link para `https://wa.me/5547989193790` |

## 🟧 Importante
| # | Problema | Como resolver |
|---|---|---|
| I1 | Links do rodapé (Contato, Central de Ajuda, Sobre, Entregas e devoluções, FAQ) levam para a home | Ligar cada um à página certa (criar as que faltam) |
| I2 | Textos de modelo: "Sou um parágrafo. Clique aqui...", "Join the Club", "Sign Up", "Let's Chat!" | Traduzir/editar no editor ("Receba nossas ofertas", "Cadastrar", "Fale com a gente") |
| I3 | Erro de digitação na faixa do topo: "Frete gratuito **para para** todo brasil" | Corrigir junto com C1 |
| I4 | Termos lista "PayPal, Boleto" e o rodapé mostra outros métodos | Deixar só os meios realmente ativos no Wix Pagamentos |
| I5 | Estoque sem controle de quantidade (tudo "em estoque") | Informar as quantidades reais por tamanho; Claude ativa o controle pela API |
| I6 | Nenhuma variante tem SKU (código interno) | Claude cria SKUs padrão (ex.: LUMA-JAQBOM-P) com aprovação |
| I7 | Nome do site aparece como **"LOJA LUMA"** em compartilhamentos (og:site_name dos produtos) | Painel → Configurações → Informações do site → nome "Luma Estilo" |
| I8 | Depoimentos da home sem nome nem foto | Trocar por avaliações reais (app Wix Reviews) ou retirar |
| I9 | Banner "Tem dúvidas?" usa foto de fone de ouvido/notebook | Trocar por foto de moda ou pelo atendimento |
| I10 | App **Wix Hotels** instalado sem uso | Remover em Painel → Apps |

## 🟨 Melhorias
- Jaqueta Feminina com Zíper (sem cor no nome): confirmar a cor e renomear.
- Jaquetas com Zíper Preta e Vermelha têm só 1 foto: subir pelo menos 4 (frente, costas, detalhe, no corpo).
- Criar tabela de medidas e linkar em todos os produtos (reduz troca).
- Produtos ocultos: **Camiseta Disney Plus Size (2)**, com risco de direito autoral (marca Disney sem licença comprovada): recomendado **apagar**. Calça Jeans ZR duplicada: apagar.
- Categorias ocultas e vazias prontas para o verão: Verão 2026/2027, Vestidos, Shorts e Bermudas, Saias, Conjuntos, Moda Praia, Macacões, Fitness. Ativar quando houver produto.
- A região "International" do frete (inativa) tem opção chamada "Free shipping" em inglês. Sem efeito hoje.

## Testes realizados
- 17 produtos: leitura pela API depois da alteração (nome, link, revisão).
- Página nova (`/product-page/jaqueta-bomber-feminina`): título, meta description, descrição e links dos produtos relacionados já com os links novos.
- Links antigos `jaqueta-sltnx-feminina-com-zíper-preta` (com acento) e `camisa-preta-vintage-mulheres-hh-vermelho` → 301 para o produto novo.
- Home: `<title>`, description, og e twitter novos no ar.
- `/category/camisetas`: não aparece mais.

## Rodada 2 (16/11/2026): regras definidas pelo Labamba
| # | Item | Status |
|---|---|---|
| R1 | Frete grátis **acima de R$250** (antes R$199); abaixo: R$19,90 | ✅ Alterado no checkout e testado pela API |
| R2 | Tamanhos **P, M, G, GG e XG** em todas as roupas | ✅ XG criado nos 17 produtos, com estoque liberado; descrições e SEO atualizados ("P ao XG"). Testado ao vivo |
| R3 | **Seletor duplicado "Tamanhos"** (sobra do fornecedor, com tamanhos americanos e "libras", obrigatório) em 16 produtos | ✅ Removido. Agora a página tem só "Tamanho" P–XG. Testado ao vivo |
| R4 | Produtos com marca de terceiros (direito autoral) | ✅ Apagados: Camiseta Disney Plus Size (2) e Calça Jeans "ZR" duplicada. Catálogo: 17 produtos, nenhum com marca |
| R5 | Pagamento: crédito, débito, Pix e boleto | 🟧 Ativar no painel (Configurações → Aceitar pagamentos). Textos legais já atualizados |
| R6 | WhatsApp Business (47) 98919-3790 | ✅ Nas descrições dos produtos · 🟧 Trocar no botão "Ligue" do editor: https://wa.me/5547989193790 |
| R7 | Faixa do topo | 🟧 Trocar no editor para "Frete grátis acima de R$250" (evita propaganda enganosa) |
