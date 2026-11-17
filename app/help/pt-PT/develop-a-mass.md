---
title: Desenvolver uma massa de edifício a partir de um estudo do terreno
summary: Tome uma massa de edifício estudada na vista de terreno do CivilCraft e desenvolva-a em pisos, paredes e lajes, mantendo o lugar do terreno no mapa.
keywords: massa, massa de edifício, volumetria, estudo do terreno, desenvolver, CivilCraft, entregar, pisos, paredes, lajes, implantação, georreferência, IFC
from: 557b94d1
---

A vista de terreno do CivilCraft pode desenhar massas de edifícios num lote e testá-las contra o terreno, os limites que escrever e o sol. **Desenvolver no BimCraft** abre o BimCraft num novo separador com as massas; **Massas como IFC** guarda-as num ficheiro que abre aqui da forma habitual. Em qualquer dos casos, cada massa chega como um terreno, um edifício com um piso por cada andar, e um bloco (a própria massa) com os seus números.

## Desenvolver uma massa

1. Escolha uma massa na vista 3D. As Propriedades mostram a sua utilização, os pisos e a altura de piso, a implantação, a área bruta de pavimento, como assenta no declive e o seu lote.
2. Clique em **Desenvolver esta massa**.

Num só passo de anulação, cada piso desse edifício recebe paredes à volta da implantação (a implantação é a face exterior das paredes; cada parede sobe até ao piso acima, e a de cima tem um piso de altura) e uma laje sob todo o edifício. O bloco é substituído, e o edifício mantém os números do estudo no conjunto de propriedades `CadCraft_SiteMass`, marcado como desenvolvido. Não há cobertura: uma cobertura depende do projeto.

## O lugar do terreno

Um ficheiro do CivilCraft é escrito na unidade de comprimento do próprio projeto e, quando o projeto do CivilCraft tinha um sistema de coordenadas, traz essa informação como conversão de mapa do projeto. Desenvolver uma massa deixa isso como está, por isso o edifício continua onde o mapa diz que está.
