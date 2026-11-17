---
title: Verificar tubos e condutas contra a estrutura
summary: Execute os conjuntos de conflitos prontos de tubos e condutas contra paredes, lajes, vigas e pilares, encontre troços mais próximos da estrutura do que o seu isolamento e uma folga, e liste as aberturas que os troços exigem nas paredes e lajes, em CSV e BCF.
keywords: mep, conflito, verificação de conflitos, coordenação, estrutura, paredes, lajes, vigas, pilares, afastamento, conflito suave, isolamento, folga, abertura, aberturas, atravessamento, bainha, furo, trabalhos de construção, bcf, csv
from: 2d597f01
---

## O que vai fazer

Certifique-se de que as redes se ajustam ao edifício: o que colide com a estrutura, o que passa demasiado perto dela e onde as paredes e lajes precisam de furos. Abra {{ui:Deteção de conflitos}} no painel da esquerda; a secção **Tubos e condutas contra a estrutura** encontra-se sob a verificação habitual.

## Conflitos rígidos

As duas listas de conjuntos passam agora a oferecer também **Tubos e condutas**, **Paredes**, **Lajes e coberturas**, **Vigas**, **Pilares** e **Estrutura** (as quatro), com o número de elementos que cada um contém. Clique em {{ui:Tubos e condutas × estrutura}} para escolher o primeiro e o último e executar a verificação; ou escolha qualquer par e clique em {{ui:Executar}}. Veja [Verificar conflitos](topic:clash-check).

## Afastamentos

Alguns elementos das redes precisam de espaço à volta: o seu isolamento e espaço para trabalhar ou para uma bainha.

1. Dê a um troço de tubo ou conduta a sua espessura de **Isolamento** nas Propriedades (não é desenhado nada para ele).
2. Escreva a **Folga à volta de tubos e condutas** (mm) na {{ui:Deteção de conflitos}}.
3. Clique em {{ui:Verificar afastamentos}}: cada peça mais próxima de uma parede, laje, viga ou pilar do que o seu isolamento mais a folga é listada, com a distância que tem e a distância que exige. Clique numa linha para ver as duas.

Uma peça que atravessa uma parede ou laje é uma abertura, e não um afastamento, e é listada nessa secção.

## Aberturas necessárias

Clique em {{ui:Aberturas necessárias}}. Onde o eixo de um troço atravessa uma parede ou uma laje, o BimCraft lista a abertura de que precisa: redonda para um tubo ou conduta redonda, senão retangular, com a dimensão exterior do troço mais o dobro do seu isolamento mais o dobro da folga, centrada onde o troço atravessa. Clique numa linha para ver o troço e a parede ou laje.

- {{ui:Aberturas em CSV}}: uma linha por abertura, com o troço, a sua dimensão e isolamento, a dimensão da abertura, o elemento que atravessa e o seu GlobalId, o piso, as coordenadas X, Y e Z do centro, e a distância que o troço percorre através dela.
- {{ui:Aberturas como questões BCF}}: uma questão por abertura, com uma câmara virada para ela e o troço e o elemento selecionados, para o programa do engenheiro de estruturas.

:::note
Nada é cortado: as aberturas são uma lista para quem as dimensiona. A folga é a que escreve; nenhum código indica a dimensão que uma abertura deve ter. Vigas e pilares são conflitos, e não aberturas: se um tubo pode atravessar um deles cabe ao engenheiro de estruturas decidir.
:::
