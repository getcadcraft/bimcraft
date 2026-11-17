---
title: Verificar tubos e dutos contra a estrutura
summary: Execute os conjuntos prontos de verificação de interferências de tubos e dutos contra paredes, lajes, vigas e pilares, encontre trechos mais próximos da estrutura do que o isolamento e uma folga, e liste os furos que os trechos precisam nas paredes e lajes como CSV e BCF.
keywords: mep, interferência, verificação de interferências, coordenação, estrutura, paredes, lajes, vigas, pilares, folga, interferência leve, isolamento, espaçamento, furo, furos, passagem, luva, núcleo, serviços da obra, bcf, csv
from: 2d597f01
---

## O que você vai fazer

Garanta que as instalações caibam no edifício: o que entra na estrutura, o que passa perto demais dela e onde as paredes e lajes precisam de furos. Abra {{ui:Verificação de interferências}} no painel à esquerda; a seção **Tubos e dutos contra a estrutura** fica abaixo da verificação habitual.

## Interferências rígidas

As duas listas de conjuntos agora também oferecem **Tubos e dutos**, **Paredes**, **Lajes e coberturas**, **Vigas**, **Pilares** e **Estrutura** (todos os quatro), com quantos elementos cada um contém. Clique em {{ui:Tubos e dutos × estrutura}} para escolher o primeiro e o último e executar a verificação; ou escolha qualquer par e clique em {{ui:Executar}}. Veja [Verificar interferências](topic:clash-check).

## Folgas

Alguns serviços precisam de espaço ao redor: o isolamento e o espaço para trabalhar ou para uma luva.

1. Dê a um trecho de tubo ou duto sua espessura de **Isolamento** em Propriedades (nada é desenhado para ele).
2. Digite o **Espaçamento ao redor de tubos e dutos** (mm) na Verificação de interferências.
3. Clique em {{ui:Verificar folgas}}: cada peça mais próxima de uma parede, laje, viga ou pilar do que o seu isolamento mais o espaçamento é listada, com a distância que ela tem e a distância que ela deveria ter. Clique em uma linha para ver as duas.

Uma peça que atravessa uma parede ou laje é um furo, não uma folga, e é listada lá.

## Furos necessários

Clique em {{ui:Furos necessários}}. Onde a linha de centro de um trecho passa por uma parede ou laje, o BimCraft lista o furo de que ele precisa: redondo para um tubo ou duto redondo, caso contrário retangular, tão grande quanto o tamanho externo do trecho, mais duas vezes o seu isolamento, mais duas vezes o espaçamento, centralizado onde o trecho cruza. Clique em uma linha para ver o trecho e a parede ou laje.

- {{ui:Furos como CSV}}: uma linha por furo, com o trecho, seu tamanho e isolamento, o tamanho do furo, o elemento que ele atravessa e seu GlobalId, o pavimento, os X, Y e Z do centro e quanto o trecho atravessa.
- {{ui:Furos como tópicos BCF}}: um tópico por furo, com uma câmera voltada para ele e o trecho e o elemento selecionados, para o programa do engenheiro de estruturas.

:::note
Nada é cortado: os furos são uma lista para quem os dimensiona. O espaçamento você digita; nenhum código diz qual deve ser o tamanho de um furo. Vigas e pilares são interferências, não furos: se um tubo pode passar por um deles é decisão do engenheiro de estruturas.
:::
