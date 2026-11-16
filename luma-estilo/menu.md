# Menu do site: Luma Estilo (base: C&A e Riachuelo)

## Estrutura do menu
```
Novidades
Look Feminino ▾
   Blusas e Camisas
   Jaquetas e Casacos
   Moletons            (em breve)
   Calças
   Jeans
   Roupas Sociais
Roupa de Verão ▾      (em breve: Vestidos · Shorts e Bermudas · Saias · Conjuntos · Moda Praia)
Calçados ▾            (em breve: Sapatos · Chinelos e Sandálias, numeração 33 a 40)
Acessórios            (em breve)
Moda Íntima           (em breve)
Ofertas
```
Regra: um item do menu só aparece quando a categoria tiver pelo menos 1 produto. Item que abre página vazia faz a cliente sair do site.

## Categorias na loja (Wix Stores): status em 16/11/2026
| Categoria | Produtos | Visível | Observação |
|---|---|---|---|
| Blusas e Camisas | 4 | ✅ | |
| Jaquetas e Casacos | 7 | ✅ | |
| Calças | 7 | ✅ | inclui o jeans |
| **Jeans** | 1 | ✅ | criada |
| **Roupas Sociais** | 9 | ✅ | criada: casaco britânico, 5 calças de lã, 3 blusas vintage |
| Troca de Estação | 13 | ✅ | pode virar "Ofertas" |
| **Moletons** | 0 | oculta | criada, aguardando produto |
| **Sapatos** | 0 | oculta | criada (33 a 40) |
| **Chinelos e Sandálias** | 0 | oculta | criada (33/34 a 39/40) |
| **Acessórios** | 0 | oculta | criada |
| **Moda Íntima** | 0 | oculta | criada |
| Vestidos, Shorts e Bermudas, Saias, Conjuntos, Moda Praia, Macacões, Fitness, Verão 2026/2027 | 0 | ocultas | prontas para a coleção de verão |

## ⚠️ Pré-requisito: Página de categoria
Hoje `/category/...` dá 404 e `/loja/...` mostra todos os produtos. Falta a **Página de categoria** do Wix Stores.
Editor → **Adicionar (+)** → **Loja** → **Página de categoria** → adicionar. Depois disso, cada categoria ganha a própria página.

## Passo a passo do menu (editor, no computador)
1. **Site → Menus e páginas → Menu do site**.
2. **+ Adicionar item de menu → Link** para cada categoria (Link → Página de categoria → escolha a categoria).
3. Crie os "pais" (Look Feminino, Roupa de Verão, Calçados) como **Título de dropdown** e arraste as categorias para baixo deles (submenu).
4. Ordem: Novidades · Look Feminino · Roupa de Verão · Calçados · Acessórios · Moda Íntima · Ofertas.
5. Por enquanto, deixe **ocultos** os itens marcados "em breve" (ícone de olho).

## Barra do menu no celular (parte de cima)
Hoje: Login · Sobre · Contato · Central de Ajuda · Ligue · Favoritos, com Sobre/Contato/Central levando para a home e "Ligue" chamando o número de modelo.
Ajuste no **editor de celular**:
- Manter: **Login** e **Favoritos**.
- Trocar "Ligue (47) 989193790" por **"💬 Fale no WhatsApp"** → link `https://wa.me/5547989193790`.
- **Sobre / Contato / Central de Ajuda**: ligar à página certa ou **apagar** da barra (o WhatsApp já faz o papel de contato).
- Itens do menu com o mesmo espaçamento e fonte, e o item ativo na cor da marca (vinho #8E4E66).
