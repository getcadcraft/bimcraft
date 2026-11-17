---
title: Pacotes para o cliente, relatórios de etapa e comparação de opções
summary: Crie um pacote para o cliente ou um relatório de etapa a partir do modelo, com as opções de volumetria comparadas por área e custo, áreas de piso, os desenhos com suas revisões e o histórico de emissões. Cada figura mantém os elementos por trás dela.
keywords: pacote do cliente, apresentação, relatório de etapa, relatório, comparação de opções, opções, comparar opções, área e custo, custo por opção, sem preço unitário, volumetria, áreas de piso, lista de desenhos, histórico de emissões, figuras, figuras vinculadas
from: f6679bf5
---

## O que você vai fazer

Monte um pacote para o cliente ou um relatório de etapa a partir do modelo como ele está agora, e compare as opções de volumetria mantidas lado a lado por área e custo.

## Passos

1. No painel esquerdo, abra **Pacote do cliente e relatório de etapa**.
2. Escolha **Abrir em Documentos** ao lado de Pacote do cliente ou Relatório de etapa. O documento aparece em Documentos a partir do modelo, onde você pode alterar o texto.
3. Na prévia, clique em uma figura para selecionar os elementos por trás dela.
4. Escolha **Montar o pacote**. Um zip é salvo: o documento como PDF, uma imagem da vista 3D, e `figures.csv`, que lista cada figura com os GlobalIds dos seus elementos.

## Os campos

Você pode usar estes em qualquer documento.

| Campo | O que imprime |
|---|---|
| `{{stage}}` | A etapa do projeto a partir dos detalhes do desenho. |
| `{{options}}` | As opções de volumetria mantidas, lado a lado: pavimentos, altura, área de implantação, área bruta de piso, envelope e custo. |
| `{{areas}}` | Área de piso por pavimento, a partir dos ambientes. |
| `{{sheets}}` | As folhas, com a revisão em que cada uma está e quando foi emitida pela última vez. |
| `{{issues}}` | O histórico de emissões e o registro de alterações dos desenhos. |
| `{{changes}}` | O que mudou desde a última emissão, folha por folha. |

## Como as opções são custeadas

O custo vem somente da tabela de preços do seu projeto (Energia/Custo, custo 5D). Nada é estimado para você.

- Uma linha de preço só custeia uma opção quando suas classes citam `IfcBuildingElementProxy`.
- A área de piso é precificada por uma linha cujas palavras citam o uso da opção, como escritório. Sem uma, usa-se uma linha com as palavras área bruta de piso ou volume da edificação. Uma linha por m² usa a área bruta de piso. Uma linha por m³ usa o volume.
- O envelope (perímetro vezes altura) é precificado por uma linha com a palavra envelope ou fachada.
- Uma opção sem linha correspondente mostra **Sem preço unitário**. Um total só é mostrado quando todas as partes pedidas têm um preço unitário.

## Bom saber

- Mantenha opções com **Manter como opção** na lista de volumetria do programa de ambientes. Veja Opções de volumetria.
- Um PDF não pode selecionar elementos. Fora do BimCraft, `figures.csv` traz o vínculo de cada figura com seus elementos.

## Ainda não implementado

- Folhas e vistas desenhadas não são colocadas dentro do documento. O pacote contém apenas uma imagem da vista 3D.
