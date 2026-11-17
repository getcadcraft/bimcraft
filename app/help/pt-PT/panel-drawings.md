---
title: Desenhos de painéis em madeira ou aço leve enformado
summary: Enquadre as paredes, pavimentos e coberturas do modelo como painéis em madeira ou aço leve enformado, veja cada montante, soleira, verga, vigota e varedo à escala e guarde a lista de corte em CSV e os desenhos de fabrico em PDF.
keywords: painel, enquadramento, desenho de fabrico, lista de corte, aço leve enformado, montante de aço, LGS, madeira, vigota, varedo, verga, stock, PDF
from: c09f916e
---

## Abrir os painéis

Escolha {{ui:Desenhos de painéis}} no menu {{ui:Compilação}} (ou escreva {{cmd:PANELS}}). A lista contém todas as paredes desenhadas, todos os pavimentos e todas as coberturas do modelo, cada um com uma marca. As paredes vêm com as suas portas e janelas como vãos. Um pavimento é enquadrado como o retângulo à volta do seu contorno, com as vigotas a correr no sentido curto. Uma cobertura é enquadrada como uma empena sobre o contorno das suas paredes, com a inclinação da cobertura; a lista indica isso, porque uma cobertura de quatro águas ou complexa não é uma empena.

## Material, tamanho e espaçamento

Escolha {{ui:Material}}: **Madeira** ou **Aço leve enformado**. As peças de aço são montantes em C designados pela profundidade e espessura (por exemplo, C92-1.2), com uma calha para as soleiras. {{ui:Dimensão da peça}} escolhe um tamanho para todos os painéis marcados, ou deixe em Predefinido para usar as predefinições de cada tipo de painel. {{ui:Espaçamento}} é a distância entre montantes, vigotas ou varedos. Estes são valores iniciais para definir. Não são uma verificação de código: se um montante a essa distância suporta essa parede, e uma verga esse vão, é matéria das tabelas do código (o suplemento Regulamentos de construção tem as do IRC) e do seu engenheiro.

## O que obtém

O primeiro painel marcado é desenhado à escala no diálogo, com as cotas. {{ui:Lista de corte (CSV)}} guarda as peças de cada painel por marca, tamanho e comprimento, e os comprimentos de stock a comprar para elas. {{ui:Desenhos de fabrico (PDF)}} guarda uma página A3 para cada painel, com todas as peças marcadas e a sua lista de corte. {{ui:Desenho (SVG)}} guarda o primeiro painel como desenho. Tudo o que o código de enquadramento encontra e não pode ser enquadrado (uma abertura demasiado perto da extremidade de uma parede, uma verga que não cabe sob as soleiras, uma peça mais comprida do que o stock mais longo) é listado em Problemas, e também no diálogo.

## O que não faz

Os painéis são desenhos feitos a partir do modelo sempre que o pede: nada é escrito no modelo, por isso correspondem sempre a ele. Para colocar o enquadramento no modelo como peças, use {{ui:Estrutura}} para paredes, pavimentos e coberturas em madeira.
