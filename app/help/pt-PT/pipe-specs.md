---
title: Especificações de tubagem, válvulas, registos e famílias de fabricantes
summary: Defina as suas próprias especificações de tubagem (tabelas de diâmetros com material, junta e rugosidade), guardadas no ficheiro do modelo; coloque válvulas, um filtro e registos nos troços; e importe o modelo de uma válvula ou equipamento de um fabricante como família, com portas de ligação.
keywords: especificação de tubagem, especificações de tubagem, classe de tubagem, tubo personalizado, tabela de diâmetros, tubo, tubo higiénico, inoxidável, mapa, diâmetro exterior, espessura da parede, diâmetro interior, rugosidade, pressão nominal, csv, json, importar, exportar, folha de cálculo, norma, bpe, din, en 10357, en 10255, válvula, válvulas, válvula de borboleta, válvula de equilíbrio, válvula de regulação, filtro, registo, registo de volume, registo corta-fogo, oem, fabricante, família, famílias, portas, ligação, step, obj, gltf, ifc, radiador, convetor, aquecedor de painel, unidade de tratamento de ar, difusor, grelha
from: bc2f7c4e
---

## O que vai fazer

Desenhe tubagem com a sua própria especificação, em vez das tabelas integradas de aço, cobre e plástico, coloque válvulas e registos nos troços e coloque o modelo de um fabricante com portas às quais os tubos se ligam.

:::note
Auxiliar de desenho e de coordenação. Uma especificação de tubagem guarda os números que escreve ou importa: verifique cada tabela contra a norma do seu projeto. As válvulas, os filtros e os registos integrados são formas esquemáticas dimensionadas a partir do troço, e não o comprimento de um fabricante ou de uma norma de válvulas.
:::

## Criar uma especificação de tubagem

1. Ative {{ui:Desenhar}}, abra {{ui:Compilação}} e escolha {{ui:Especificações de tubagem}}. O mesmo botão está na barra da ferramenta Tubo.
2. Escolha {{ui:Novo}}, ou comece a partir de um ficheiro, de uma colagem ou de uma especificação inicial (abaixo).
3. Escreva o nome, a norma ou referência que segue, o material e o tipo de extremidade ou de junta.
4. Escreva uma linha por diâmetro: o nome do diâmetro, o diâmetro exterior e a espessura da parede, em milímetros. Escreva o diâmetro interior em vez da espessura, se for o que tem: a outra é preenchida. DN, pressão nominal e peso são opcionais.
5. Opcional: a rugosidade em milímetros (o cálculo da perda de pressão usa-a), uma espessura de isolamento com que começam os novos troços, o raio da curva como fator do diâmetro exterior, se a especificação tem tês e reduções, e uma cor própria em 3D.
6. Marque os serviços cujos novos troços devem começar nesta especificação, por exemplo água arrefecida.
7. Escolha {{ui:Guardar no modelo}}.

As especificações são guardadas no ficheiro do modelo. Quem abrir o ficheiro tem-nas, e {{ui:Anular}} desfaz uma alteração.

Não é possível eliminar uma especificação, nem um dos seus diâmetros, enquanto houver um troço desenhado nela. Alterar os números de um diâmetro redesenha os troços nesse diâmetro.

## Reutilizar uma especificação noutro modelo

- {{ui:Exportar .json}} guarda a especificação selecionada num ficheiro pequeno; {{ui:Exportar todas}} guarda todas as especificações do modelo. {{ui:Importar um ficheiro}} lê-as de volta.
- {{ui:Exportar .csv}} guarda a tabela de diâmetros para uma folha de cálculo. {{ui:Importar um ficheiro}} também lê um `.csv`.
- {{ui:Colar linhas}} aceita uma tabela copiada de uma folha de cálculo. A primeira linha dá nome às colunas: `Size`, `OD` e `Wall` (ou `ID`), e opcionalmente `DN`, `Pressure`, `Weight`. Uma linha por diâmetro. Os números são em milímetros, exceto se escolher polegadas ou se uma célula indicar a sua unidade (`0.065 in`).

## Especificações iniciais

{{ui:Adicionar uma especificação inicial}} acrescenta uma destas ao seu modelo, como cópia que pode editar:

| Inicial | Diâmetros |
|---|---|
| Tubo ASME BPE | 1/4" a 6" |
| Tubo EN 10357, série A (DIN 11850, linha 2) | DN10 a DN200 |
| Tubo de aço EN 10255, série média | DN15 a DN150 |
| Tubo de aço EN 10255, série pesada | DN15 a DN125 |

Estas tabelas são os diâmetros exteriores e as paredes que duas ou mais páginas de fornecedores publicadas indicam para a norma e concordam. Não foram tiradas das próprias normas. Os diâmetros que só uma página indica ficam de fora. Cada especificação inicial mostra as suas páginas de origem e está marcada como "verificar contra a norma do seu projeto". Não é indicada nenhuma rugosidade, pressão nominal ou peso.

## Desenhar um troço numa especificação

1. Escolha {{ui:Tubo}}. Um serviço que marcou numa especificação começa nela. Para qualquer outro troço, escolha a especificação na lista de materiais: as especificações aparecem depois dos materiais integrados como "Especificação: nome".
2. A lista de diâmetros tem agora só os diâmetros dessa especificação. Escolha um e desenhe o troço.

Para passar um troço para uma especificação mais tarde, selecione-o e altere o **Material** em Propriedades. O seu diâmetro passa a ser o diâmetro da especificação mais próximo, pelo diâmetro exterior.

No ficheiro IFC, o tubo tem o nome, a norma, o material, a junta e as dimensões da especificação (`CadCraft_PipeSpec` e `Pset_PipeSegmentTypeCommon`, no tubo e no seu tipo).

Os cálculos de dimensionamento e de perda de pressão leem o diâmetro interior da especificação. Quando a especificação tem uma rugosidade, o atrito de um troço é calculado com ela (Darcy-Weisbach); sem ela, usa-se o valor predefinido habitual do cálculo.

## Válvulas, um filtro e registos

1. Escolha {{ui:Válvula}} e o tipo na barra: de cunha, de esfera, de borboleta, de globo, de retenção, de equilíbrio ou de regulação, ou um filtro, para tubos; um registo de volume ou um registo corta-fogo, para condutas.
2. Clique no troço onde ela vai. O troço é cortado à volta dela e os dois lados continuam ligados. Toma o diâmetro do troço e move-se com ele.

Propriedades do troço lista cada uma delas, com {{ui:Remover}}; o troço volta a fechar-se.

O cálculo da perda de pressão conta uma perda de acessório apenas para válvulas de cunha, de esfera, de globo e de retenção. Os outros tipos, os registos e as famílias de fabricantes não acrescentam perda aí: tenha-os em conta na sua própria verificação. São contados no mapa **Acessórios e válvulas** e na medição, e escritos no IFC como válvulas, um filtro (o filtro) e registos com duas portas ligadas.

## Modelo de um fabricante como família

1. Abra {{ui:Compilação}} e escolha {{ui:Famílias}}, depois {{ui:Importar um modelo}}. São lidos ficheiros IFC, STEP, OBJ, STL, glTF e de itens da Biblioteca. Para OBJ e STL, defina primeiro as unidades do ficheiro e o eixo vertical.
2. Na caixa de portas, escreva o nome, o fabricante e o número do modelo.
3. Escolha se fica **Num troço** (uma válvula, um filtro ou um registo) ou é **Equipamento**, e como é escrito.
4. Defina as suas portas. Cada uma tem um nome, um tubo ou uma conduta, o serviço, o diâmetro em milímetros (o diâmetro exterior de um tubo), o diâmetro nominal tal como a sua especificação o indica, o tipo de extremidade, a sua posição e o sentido para que aponta. {{ui:Numa face}} coloca uma porta no centro de uma face da caixa do modelo. A pequena vista de topo mostra as portas.
5. Escolha {{ui:Guardar a família no modelo}}.

Uma família que vai num troço precisa de exatamente duas portas voltadas em sentidos opostos, numa mesma linha. Escolha-a na lista da ferramenta Válvula e clique num troço: é colocada no seu próprio comprimento e os tubos ligam-se às suas portas.

Uma família nunca é esticada. Se as suas portas não tiverem o diâmetro do troço, é avisado ao colocá-la, e {{ui:Verificar ligações}} a lista.

Uma família de equipamento é colocada com {{ui:Equipamento}}, tipo **Família do fabricante**. Tubos e condutas ajustam-se às suas portas.

{{ui:Transferir como item da Biblioteca}} guarda uma família com as suas portas como ficheiro que pode enviar para a Biblioteca.

## Radiadores e convetores

{{ui:Equipamento}} também tem **Radiador** e **Convetor / aquecedor de painel**: corpos genéricos com uma ligação de ida e outra de retorno para água de aquecimento. Ver [Equipamento MEP com portas](topic:mep-equipment).
