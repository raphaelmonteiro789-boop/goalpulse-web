# Redesign da home: Luma Estilo no padrão dos grandes varejistas

Análise de 16/11/2026. Referências: C&A, Riachuelo e Zara (prints em `referencias/`).
Prévia da nova home: `luma-home-desktop.jpg` e `luma-home-mobile.jpg` (código em `home.html`).

> Copiamos a **estrutura e a lógica de venda**, nunca a marca (logo, cor, slogan ou foto) dessas lojas.

## O que cada referência ensina

| Loja | O que pegar |
|---|---|
| **C&A** | Faixa preta no topo com **contagem regressiva**; faixa "todo o site · frete grátis · por tempo limitado"; banner com o número da oferta enorme (30%/35%) e **cupom em pílula** (VEMBLACK); faixa de benefícios com ícones; categorias grandes com "a partir de R$29,99". |
| **Riachuelo** | Faixa fina de cupom (RETIRA10); "**Esquenta** Black Friday" antes da data; banner dividido (foto + oferta 40% em vermelho + cupom + botão preto); faixa de serviços (trocas, retirada); vitrine "Novidades"; mosaico de 3 temas. |
| **Zara** | Minimalismo: muito espaço em branco, tipografia forte, quase sem texto. É o que dá cara de marca premium. |

## Diagnóstico da home atual da Luma

**O que já está bom:** logo bonito (lilás), banner "Descubra o look perfeito" com fotos de modelo, vitrine "Mais vendidos", fonte com serifa elegante.

**O que está fraco ou quebrado:**
1. Faixa do topo cinza e apagada, com erro de digitação: "Frete gratuito **para para** todo brasil".
2. Menu com só 2 itens (Início, Todos os Produtos). Faltam categorias e Black Friday.
3. Banner principal sem oferta, sem preço e sem urgência.
4. Faixa de benefícios com só 2 itens (Segurança, Garantia).
5. Mosaico de categorias cortado nas bordas e com **botões verdes** fora da identidade da marca.
6. Produtos sem preço promocional, parcelamento ou selo de desconto.
7. **Redes sociais do rodapé apontam para as contas do Wix** (facebook.com/WixPortugues, instagram.com/wix etc.), não para a Luma.
8. O "Ligue" do topo abre o número de modelo **(11) 3456-7890**, não o WhatsApp da loja.
9. Textos de modelo esquecidos: "Sou um parágrafo. Clique aqui para adicionar e editar seu texto…", "Join the Club", "Sign Up", "Let's Chat!".
10. Links do rodapé (Contato, Central de Ajuda, Sobre, Entregas e devoluções, FAQ) levam todos para a home.
11. A descrição do Google fala em "vestidos, blusas e conjuntos", que a loja não vende.
12. Depoimentos sem nome e sem foto: troque por avaliações reais (cliente e foto), ou retire.
13. Banner "Tem dúvidas?" usa foto de fone de ouvido e notebook, sem relação com moda.

## Nova estrutura da home (ordem)

1. **Faixa preta** com contagem regressiva + frete grátis
2. **Cabeçalho:** logo · menu (Black Friday em destaque · Novidades · Jaquetas e Casacos · Calças · Camisas · Jeans · Ofertas) · busca · conta · sacola
3. **Faixa clara:** todo o site · até 30% OFF · por tempo limitado
4. **Banner principal** fundo branco: "Black Friday" + **30%** em vinho + cupom **BLACKLUMA** + botão "Comprar agora" + 3 peças
5. **Faixa de benefícios** (5 ícones): frete grátis · 6x sem juros · % no Pix · troca em 7 dias · WhatsApp
6. **Categorias** (4): Jaquetas · Calças de Lã · Camisas · Jeans, com o "a partir de R$" de cada uma
7. **Mais vendidos** com selo -30%, preço cheio riscado, preço novo e parcelamento
8. **Faixa vinho de desconto progressivo:** 10% levando 2 · 15% levando 3 · frete grátis
9. **Avaliações reais** de clientes
10. **Lista VIP no WhatsApp**
11. **Rodapé** com links certos, redes sociais da Luma, CNPJ, formas de pagamento

## Identidade visual

| Item | Valor |
|---|---|
| Cor principal (preço, botão, selo) | Vinho `#8E4E66` |
| Cor do logo | Lilás `#7A5C9C` |
| Fundo de faixas | Off-white `#F7F3F1` |
| Texto | Quase preto `#1D1A1B` |
| Títulos | Playfair Display (serifa) |
| Textos e botões | Inter (sem serifa) |
| Botão WhatsApp | Verde `#25D366`, só no WhatsApp |

> Os preços, o cupom e os percentuais da prévia são **exemplos**. A oferta final é definida pela Empreendedora (custo e margem).

## Como aplicar no Wix

O site usa o **Wix Editor**, então layout, banner e menu se mudam no editor.

**Pelo editor (computador):**
1. Faixa do topo: corrigir o texto, fundo `#1D1A1B`, texto branco.
2. Menu: Páginas → criar páginas ou categorias da loja e adicionar ao menu.
3. Banner: trocar a imagem do slideshow pela arte nova (1920×700 no computador, 1080×1350 no celular).
4. Faixa de benefícios: duplicar o bloco e completar os 5 itens.
5. Categorias: trocar os botões verdes por vinho `#8E4E66`.
6. Rodapé: corrigir os links das redes sociais, o telefone e os links de página.
7. Apagar os textos de modelo (chat, "Join the Club", "Sou um parágrafo").

**O que o Claude faz pela API (com aprovação):**
- Corrigir títulos e descrições de SEO e os links dos produtos (tirar "sltnx", "hh").
- Criar o cupom BLACKLUMA e os descontos (progressivo, por categoria).
- Ativar o controle de estoque.
- Enviar banners e artes para a mídia do Wix.
