---
title: Desenvolver um volume de edificação a partir de um estudo de terreno
summary: Pegue um volume de edificação estudado na vista de terreno do CivilCraft e desenvolva-o em níveis, paredes e pisos, com a localização do terreno no mapa mantida.
keywords: volume, volume de edificação, volumetria, estudo de terreno, desenvolver, CivilCraft, entregar, níveis, paredes, pisos, área de implantação, georreferência, IFC
from: 557b94d1
---

O modo de terreno do CivilCraft pode desenhar volumes de edificação em um lote e testá-los contra o terreno, os limites que você digitar e o sol. **Desenvolver no BimCraft** ali abre o BimCraft em uma nova guia com os volumes; **Volumes como IFC** salva-os como um arquivo que você abre aqui do jeito usual. De qualquer forma, cada volume chega como um terreno, um edifício com um pavimento por andar e um bloco (o próprio volume) carregando seus números.

## Desenvolver um volume

1. Escolha um volume na vista 3D. As Propriedades mostram seu uso, pavimentos e altura do pavimento, área de implantação, área bruta de pavimentos, como ele se assenta sobre o declive e seu lote.
2. Clique em **Desenvolver este volume**.

Em uma única etapa de desfazer, cada nível desse edifício recebe paredes ao redor da área de implantação (a área de implantação é a face externa das paredes; cada parede sobe até o nível acima, e a de cima tem a altura de um pavimento) e um piso sob o edifício inteiro. O bloco é substituído, e o edifício mantém os números do estudo no conjunto de propriedades `CadCraft_SiteMass`, marcado como desenvolvido. Não há telhado: um telhado depende do projeto.

## A localização do terreno

Um arquivo do CivilCraft é escrito na unidade de comprimento do próprio projeto e, quando o projeto do CivilCraft tinha um sistema de coordenadas, o carrega como a conversão de mapa do projeto. Desenvolver um volume não altera isso, então o edifício continua onde o mapa diz que ele está.
