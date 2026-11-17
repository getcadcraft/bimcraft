---
title: Pacotes para o cliente, relatórios de fase e comparação de opções
summary: Criar um pacote para o cliente ou um relatório de fase a partir do modelo, com as opções de volumetria comparadas por área e custo, áreas de piso, os desenhos com as suas revisões e o histórico de emissões. Cada valor mantém ligados os elementos de que depende.
keywords: pacote para o cliente, apresentação, relatório de fase, relatório, comparação de opções, opções, comparar opções, área e custo, custo por opção, sem preço, volumetria, áreas de piso, lista de desenhos, histórico de emissões, valores, valores ligados
from: f6679bf5
---

## O que vai fazer

Criar um pacote para o cliente ou um relatório de fase a partir do modelo tal como está agora, e comparar lado a lado as opções de volumetria por área e custo.

## Passos

1. No painel da esquerda, abra **Pacote para o cliente e relatório de fase**.
2. Escolha **Abrir em Documentos** ao lado de Pacote para o cliente ou de Relatório de fase. O documento aparece em Documentos, a partir do modelo, onde pode alterar o texto.
3. Na pré-visualização, clique num valor para selecionar os elementos por trás dele.
4. Escolha **Criar o pacote**. É guardado um zip: o documento em PDF, uma imagem da vista 3D e `figures.csv`, que lista cada valor com os GlobalIds dos respetivos elementos.

## Os campos

Pode usá-los em qualquer documento.

| Campo | O que imprime |
|---|---|
| `{{stage}}` | A fase do projeto, a partir dos dados do desenho. |
| `{{options}}` | As opções de volumetria guardadas, lado a lado: pisos, altura, implantação, área bruta de pavimento, envolvente e custo. |
| `{{areas}}` | Área de piso por nível, a partir dos compartimentos. |
| `{{sheets}}` | As folhas com a revisão em que estão e a data da última emissão. |
| `{{issues}}` | O histórico de emissões e o registo de alterações dos desenhos. |
| `{{changes}}` | O que mudou desde a última emissão, folha a folha. |

## Como as opções são avaliadas em custo

O custo vem apenas da tabela de preços do projeto (Energia/Custo, custo 5D). Nada é estimado automaticamente.

- Uma linha de preço só avalia uma opção quando as suas classes indicam `IfcBuildingElementProxy`.
- A área de piso é avaliada por uma linha cujas palavras indicam o uso da opção, como escritório. Sem essa linha, usa-se uma linha com as palavras área bruta de pavimento ou massa do edifício. Uma linha por m² usa a área bruta de pavimento. Uma linha por m³ usa o volume.
- A envolvente (perímetro vezes altura) é avaliada por uma linha com a palavra envolvente ou fachada.
- Uma opção sem linha correspondente mostra **Sem preço**. Um total só é mostrado quando todas as partes pedidas têm um preço.

## Bom saber

- Mantenha as opções com **Manter como opção**, na lista de volumetria do programa de áreas. Veja Opções de volumetria.
- Um PDF não pode selecionar elementos. Fora do BimCraft, `figures.csv` transporta a ligação de cada valor aos respetivos elementos.

## Ainda não implementado

- As folhas e as vistas desenhadas não são inseridas no documento. O pacote contém apenas uma imagem da vista 3D.
