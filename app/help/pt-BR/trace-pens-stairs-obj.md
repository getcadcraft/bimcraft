---
title: Decalcar um pavimento, definir penas por vista, esboçar uma escada, abrir um OBJ
summary: Mostrar outro pavimento tracejado sob a planta e alinhá-lo, dar a paredes, portas e janelas sua própria pena em uma vista, desenhar uma linha de caminhada para obter uma escada, e abrir uma malha Wavefront OBJ.
keywords: referência de decalque, fantasma, underlay, pena, espessura de linha, tipo de linha, substituição, escada, esboço, patamar, OBJ, malha, importar, Wavefront
from: 333ebbde
---

## Decalcar um pavimento

Escolha {{ui:Trace}} no menu {{ui:Build}}, depois uma vista na lista: a planta de outro pavimento, a planta de forro de um pavimento ou uma chamada (recortada para o seu recorte). Suas paredes, pilares e pisos aparecem tracejados sob a planta que você está desenhando. Mova-a clicando em um ponto-base na referência e depois no local para onde esse ponto deve ir, ou digite X, Y e um ângulo (ela gira em torno do próprio centro). {{ui:Reset}} a recoloca, {{ui:Hide}} a remove. É apenas uma referência: nada a seleciona, ela não é impressa nem salva no IFC. O BimCraft a lembra para cada pavimento neste navegador.

## Penas por vista

Escolha {{ui:Pens}}. Diga para que serve a pena: todas as paredes, todas as portas, todas as janelas, o tipo do elemento selecionado ou os elementos selecionados. Escolha uma espessura, um traço (sólido, tracejado, pontilhado) e uma cor, depois {{ui:Apply}}. A alteração vale apenas para a planta deste pavimento. Uma seleção prevalece sobre um tipo, e um tipo prevalece sobre uma categoria inteira. {{ui:Clear all}} as remove. Elas são mantidas neste navegador. Marque **Cores de pena em 3D** para pintar as penas coloridas no modelo na vista 3D (a espessura ou o tracejado pertencem à linha, então só a cor aparece ali); desmarque para voltar. {{ui:Print}} as desenha no PDF da planta: a espessura escala a partir da tela (a pena padrão de parede de 1.75 pixels equivale a 0.5 mm), tracejados continuam tracejados e uma cor é impressa no valor que ela tem no tema de papel.

## Uma escada a partir de um esboço

Escolha {{ui:Sketch stair}} e clique nos cantos da linha de caminhada, começando pelo degrau de baixo. Uma linha é uma escada reta, duas linhas que se encontram em ângulo reto formam um L, e três linhas (subir, atravessar, voltar) formam um U. Pressione {{key:L}} para desenhar um patamar: clique nos cantos dele e pressione {{key:Enter}}; o lado menor define a largura da escada. Pressione {{key:Enter}} para posicionar a escada. Cada piso é calculado a partir do comprimento da sua linha e do número de espelhos que a altura exige. Depois disso, é uma escada comum: altere-a em {{ui:Properties}}, e o poço e os corrimãos acompanham.

Marque **Transformar em família** na linha da ferramenta (ou pressione {{key:F}}) antes de {{key:Enter}} para posicionar a escada como família (reta, em L ou em U). Ela entra como um único elemento e abre no editor de famílias com a largura, o piso, a altura total, os pisos de cada lance e o vão de uma escada em U como parâmetros, para que você possa acrescentar tamanhos, um símbolo de planta ou hotspots. Os degraus e a altura do espelho são obtidos a partir deles. Ela não tem corrimãos nem poço: esses pertencem a uma escada comum.

## Abrir um OBJ

Abra um arquivo `.obj` como qualquer outro. Um OBJ não tem unidades, então o BimCraft lê metros com Y para cima, como a maioria dos programas o grava. Cada objeto ou grupo vira um elemento de malha em um único pavimento, e então você pode visualizar, medir, cortar, colocá-lo em um modelo e salvar como IFC. Linhas, curvas e superfícies são deixadas de fora, e a linha de status informa isso.

Um objeto que é exatamente um prisma reto (uma malha fechada com duas faces de extremidade paralelas e idênticas e laterais planas perpendiculares a elas: uma laje, um poste, um bloco de parede, uma chapa com furos) é salvo no IFC como o sólido extrudado próprio do IFC, com seu contorno e espessura, e não como uma lista de triângulos. Outros programas o leem como um sólido real, ele fica pequeno, e sua espessura e contorno podem ser editados depois. A linha de status informa quantos objetos foram mantidos dessa forma. Qualquer coisa que não seja exatamente um prisma (uma forma afunilada, uma malha com um vértice movido, uma malha com uma abertura) permanece como triângulos. Um arquivo STEP é lido da mesma forma.
