---
title: Criar um mapa de equipamento e exportar CSV
summary: Transformar as etiquetas de itens de um desenho de restauração num mapa de equipamento, filtrá-lo, ir a cada item na sua folha e transferi-lo em CSV.
keywords: equipamento, mapa de equipamento, restauração, cozinha, etiquetas de item, kcl, atributos, lista de materiais, bom, csv, folha de cálculo, exportação, extração de dados
from: e3faa1c8
---

## O que vai fazer

Ler a lista de equipamento de um desenho de cozinha ou de restauração, verificá-la, encontrar cada item na planta e transferi-la como ficheiro de folha de cálculo.

Isto funciona em desenhos cujas etiquetas de equipamento trazem os seus dados como atributos de bloco, como as bibliotecas de projeto de cozinhas tipo KCL: cada etiqueta tem o número do item (`KCL-ITEM`), a quantidade, a categoria, o fabricante, o modelo, os dados elétricos e de canalização, e as observações. Outros desenhos não têm separador {{ui:Equipment}}.

## Passos

1. Abra o desenho, de preferência a partir da sua pasta de projeto, para que os desenhos ligados também carreguem.
2. Clique no separador {{ui:Equipment}} acima do desenho. A etiqueta indica quantos itens estão em folhas, por exemplo "Equipamento (88)".
3. Leia o mapa: **Item**, **Qtd.**, **Equipamento**, **Fabricante**, **Modelo**, **Eletricidade**, **Canalização** e **Onde**.
4. Escolha o que listar no menu acima da tabela: **Todas as folhas**, uma folha, **Não está em nenhuma folha** ou **Tudo o que tem etiqueta no desenho**. Cada escolha mostra a sua contagem.
5. Escreva na caixa de filtro ("Filtrar: categoria, fabricante, modelo…") para reduzir a lista, por exemplo `frigorífico` ou `208`.
6. Clique no nome da folha de um item na coluna **Onde**.
7. Olhe para o desenho: o BimCraft muda para essa folha, aproxima-se do item e desenha um anel à sua volta. A linha de estado indica "Item *n*, *categoria* está assinalado em *folha*."
8. Clique em {{ui:Equipment}} para voltar ao mapa.
9. Clique em {{ui:Download CSV}}.

## O que deve ver

- Um ficheiro chamado "*nome do desenho* equipment.csv" (com o nome da folha entre parênteses quando listou só uma folha) na sua pasta de transferências. Abre-se no Excel, no Numbers, no LibreOffice ou no Google Sheets.
- Na linha de estado: "Transferido *nome do ficheiro* (*n* itens)."

O CSV tem estas colunas: Item, Qtd., Categoria, Fabricante, Modelo, Eletricidade, Canalização, Observações, Observações de eletricidade, Observações de canalização, Folhas, Colocados (número de etiquetas). Transfere exatamente as linhas que a tabela mostra, depois do menu e do filtro.

## Como o mapa é construído

- É lido a partir das **próprias etiquetas**, não do quadro de mapa desenhado na folha. A nota acima da tabela indica quantas etiquetas foram lidas.
- Uma linha é um número de item com um conjunto de dados. A sua quantidade é a **soma** das etiquetas, como um mapa impresso a conta: estantes etiquetadas com "5" num sítio e "3" noutro são 8, mostrado como "5 + 3".
- **Onde** lista as folhas que mostram cada item, calculado a partir do que as janelas de vista (viewports) de cada folha mostram, que é o que é impresso. "Só modelo" significa que nenhuma folha o mostra.
- **Número usado duas vezes** assinala um número de item em dois equipamentos diferentes. A linha tem uma marca âmbar.
- As etiquetas que nenhuma folha mostra ficam separadas em **Não está em nenhuma folha**. Muitas vezes são restos de planos anteriores ou de outras obras, e nunca são misturadas em **Todas as folhas**.
- **Eletricidade** mostra amperes, kW, HP, volts, fase, ligação e ficha tal como estão etiquetados. **Canalização** mostra as dimensões das ligações: CW água fria, HW água quente, DD drenagem direta, ID drenagem indireta, e gás. Os outros campos das etiquetas ainda não são mostrados.

## Erros comuns

- **Sem separador {{ui:Equipment}}.** O desenho não tem etiquetas `KCL-ITEM`, ou o seu equipamento está desenhado sem dados. Não há nada para ler.
- **As contagens diferem do mapa impresso.** Um mapa impresso pode listar números de reserva ou usar nomes mais curtos do que as etiquetas. Confie nas etiquetas para o que está colocado; verifique as diferenças com o projetista.
- **Ao abrir o CSV aparecem caracteres estranhos.** O ficheiro é UTF-8. Abra-o com o comando de importação da sua folha de cálculo e escolha UTF-8 se o programa perguntar.
- **Uma célula começa com um apóstrofo.** Os valores que começam por `=`, `+`, `-` ou `@` recebem um `'` inicial, para que as folhas de cálculo não os tratem como fórmulas.
- **{{key:F}} e {{key:P}} não fazem nada.** Funcionam no desenho, não no mapa. Clique primeiro num separador de folha.
