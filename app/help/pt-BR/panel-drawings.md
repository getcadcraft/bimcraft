---
title: Desenhos de painéis em madeira ou aço leve
summary: Estruture as paredes, pisos e telhados do modelo como painéis em madeira ou aço leve, veja cada montante, travessa, verga, vigota e caibro em escala, e salve a lista de corte em CSV e os desenhos de fabricação em PDF.
keywords: painel, estrutura, desenho de fabricação, lista de corte, aço leve, montante de aço, LGS, madeira, vigota, caibro, verga, estoque, PDF
from: c09f916e
---

## Abrir os painéis

Escolha {{ui:Panel drawings}} no menu {{ui:Build}} (ou digite {{cmd:PANELS}}). A lista contém cada parede desenhada, cada piso e cada telhado do modelo, cada um com uma marcação. As paredes vêm com suas portas e janelas como vãos. Um piso é estruturado como o retângulo ao redor do contorno, com as vigotas correndo no sentido curto. Um telhado é estruturado como um telhado de duas águas sobre o contorno das paredes, com a inclinação do telhado; a lista informa isso, porque um telhado de quatro águas ou complexo não é um telhado de duas águas.

## Material, tamanho e espaçamento

Escolha {{ui:Material}}: **Madeira** ou **Aço leve**. As peças de aço são montantes em C nomeados pela altura e pela espessura (por exemplo, C92-1.2), com uma guia para as travessas. {{ui:Member size}} escolhe um tamanho para todos os painéis marcados, ou deixe em Padrão para usar os padrões de cada tipo de painel. {{ui:Spacing}} é a distância entre montantes, vigotas ou caibros. Estes são valores iniciais para você ajustar. Não são uma verificação de norma: se um montante nesse espaçamento sustenta aquela parede, e uma verga para aquele vão, isso cabe às tabelas da norma (o complemento Regulamentos de construção tem as da IRC) e ao seu engenheiro.

## O que você recebe

O primeiro painel marcado é desenhado em escala no diálogo, com as cotas. {{ui:Cut list (CSV)}} salva as peças de cada painel por marca, tamanho e comprimento, e os comprimentos de estoque a comprar para elas. {{ui:Shop drawings (PDF)}} salva uma página A3 para cada painel, com cada peça marcada e sua lista de corte. {{ui:Drawing (SVG)}} salva o primeiro painel como um desenho. Tudo o que o código de estruturação encontra e não consegue estruturar (um vão perto demais da extremidade de uma parede, uma verga que não cabe sob as travessas, uma peça mais longa que o maior estoque) também aparece em Problemas, além do diálogo.

## O que não faz

Os painéis são desenhos feitos a partir do modelo sempre que você pede: nada é gravado no modelo, então eles sempre correspondem a ele. Para colocar a estrutura no modelo como elementos, use {{ui:Framing}} para paredes, pisos e telhados em madeira.
