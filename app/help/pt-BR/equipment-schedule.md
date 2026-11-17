---
title: Criar uma tabela de equipamentos e exportar CSV
summary: Transforme as etiquetas de itens de um desenho de serviço de alimentação em uma tabela de equipamentos, filtre-a, vá até cada item na sua folha e baixe-a como CSV.
keywords: equipamento, tabela, serviço de alimentação, cozinha, etiquetas de itens, kcl, atributos, lista de materiais, csv, planilha, exportação, extração de dados
from: e3faa1c8
---

## O que você vai fazer

Leia a lista de equipamentos de um desenho de cozinha ou de serviço de alimentação, confira-a, encontre cada item na planta e baixe-a como arquivo de planilha.

Isso funciona em desenhos cujas etiquetas de equipamento trazem seus dados como atributos de bloco, como fazem bibliotecas de projeto de cozinha como a KCL: cada etiqueta contém o número do item (`KCL-ITEM`), a quantidade, a categoria, o fabricante, o modelo, os dados elétricos e hidráulicos, e as observações. Outros desenhos não têm a aba {{ui:Equipment}}.

## Passos

1. Abra o desenho, de preferência a partir da pasta do projeto, para que os desenhos vinculados também sejam carregados.
2. Clique na aba {{ui:Equipment}} acima do desenho. O rótulo dela mostra quantos itens estão em folhas, por exemplo "Equipamentos (88)".
3. Leia a tabela: **Item**, **Qtd**, **Equipamento**, **Fabricante**, **Modelo**, **Elétrica**, **Hidráulica** e **Onde**.
4. Escolha o que listar no menu acima da tabela: **Todas as folhas**, uma folha, **Em nenhuma folha** ou **Tudo etiquetado no desenho**. Cada opção mostra sua contagem.
5. Digite na caixa de filtro ("Filtrar: categoria, fabricante, modelo…") para reduzir a lista, por exemplo `geladeira` ou `208`.
6. Clique no nome da folha de um item na coluna **Onde**.
7. Veja o desenho: o BimCraft muda para essa folha, aproxima a visualização do item e desenha um anel ao redor dele. A linha de status diz "Item *n*, *categoria* está circulado em *folha*."
8. Clique em {{ui:Equipment}} para voltar à tabela.
9. Clique em {{ui:Download CSV}}.

## O que você deve ver

- Um arquivo chamado "*nome do desenho* equipment.csv" (com o nome da folha entre colchetes quando você listou uma só folha) na sua pasta de downloads. Ele abre no Excel, Numbers, LibreOffice ou Google Sheets.
- A linha de status: "Baixado *nome do arquivo* (*n* itens)."

O CSV tem estas colunas: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (quantas etiquetas). Ele baixa exatamente as linhas que a tabela mostra, depois do menu e do filtro.

## Como a tabela é criada

- Ela é lida **das próprias etiquetas**, não da tabela de equipamentos desenhada na folha. A nota acima da tabela diz quantas etiquetas foram lidas.
- Uma linha é um número de item com um conjunto de dados. Sua quantidade é a **soma** das suas etiquetas, do jeito que uma tabela impressa conta: prateleiras etiquetadas "5" em um lugar e "3" em outro somam 8, mostrado como "5 + 3".
- **Onde** lista as folhas que mostram cada item, calculado a partir do que as viewports de cada folha mostram, que é o que sai na impressão. "Somente modelo" significa que nenhuma folha o mostra.
- **Número usado duas vezes** marca um número de item em dois equipamentos diferentes. A linha tem uma marca âmbar.
- Etiquetas que nenhuma folha mostra ficam separadas em **Em nenhuma folha**. Elas costumam sobrar de plantas anteriores ou de outras obras, e nunca são misturadas em **Todas as folhas**.
- **Elétrica** mostra amperes, kW, HP, volts, fase, conexão e tomada, como estiverem etiquetados. **Hidráulica** mostra os tamanhos de conexão: CW água fria, HW água quente, DD dreno direto, ID dreno indireto, e gás. Outros campos da etiqueta ainda não são mostrados.

## Erros comuns

- **Não há a aba {{ui:Equipment}}.** O desenho não tem etiquetas `KCL-ITEM`, ou seus equipamentos são desenhados sem dados. Não há o que ler.
- **As contagens diferem da tabela impressa.** Uma tabela impressa pode listar números sobressalentes ou usar nomes mais curtos que as etiquetas. Confie nas etiquetas para o que está colocado; confira as diferenças com o projetista.
- **Ao abrir o CSV aparecem caracteres estranhos.** O arquivo é UTF-8. Abra-o pelo comando de importação da sua planilha e escolha UTF-8 se o programa perguntar.
- **Uma célula começa com um apóstrofo.** Valores que começam com `=`, `+`, `-` ou `@` recebem um `'` no início, para que as planilhas não os executem como fórmulas.
- **{{key:F}} e {{key:P}} não fazem nada.** Eles funcionam no desenho, não na tabela. Clique antes em uma aba de folha.
