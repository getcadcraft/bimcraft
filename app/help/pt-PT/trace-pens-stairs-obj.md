---
title: Decalcar um piso, definir penas por vista, esboçar uma escada, abrir um OBJ
summary: Mostrar outro piso a tracejado sob a planta e alinhá-lo; dar às paredes, portas e janelas a sua própria pena numa vista; desenhar uma linha de percurso para obter uma escada; e abrir uma malha OBJ Wavefront.
keywords: referência de decalque, fantasma, sobreposição, pena, espessura de linha, tipo de linha, substituição, escada, esboço, patamar, OBJ, malha, importar, Wavefront
from: 333ebbde
---

## Decalcar um piso

Escolher {{ui:Trace}} no menu {{ui:Build}}, e depois uma vista na lista: a planta de outro piso, a planta de tetos de um piso ou um pormenor (recortado à sua área). As suas paredes, pilares e pisos aparecem a tracejado sob a planta que está a desenhar. Mover o decalque clicando num ponto base na referência e depois no sítio para onde esse ponto deve ir, ou escrever X, Y e um ângulo (roda em torno do seu próprio centro). {{ui:Reset}} repõe-no, {{ui:Hide}} remove-o. É apenas uma referência: nada o seleciona, não é impresso nem guardado no IFC. O BimCraft guarda-o para cada piso neste navegador.

## Penas por vista

Escolher {{ui:Pens}}. Indicar para que serve a pena: todas as paredes, todas as portas, todas as janelas, o tipo do elemento selecionado, ou os elementos selecionados. Escolher uma espessura, um traço (contínuo, tracejado, pontilhado) e uma cor, e depois {{ui:Apply}}. A alteração aplica-se apenas à planta deste piso. Uma seleção prevalece sobre um tipo, e um tipo prevalece sobre uma categoria inteira. {{ui:Clear all}} remove-as. Ficam guardadas neste navegador. Marcar **Cores das penas em 3D** para pintar as penas coloridas no modelo na vista 3D (a espessura ou o tracejado pertencem à linha, por isso só a cor se vê ali); desmarcar para voltar atrás. {{ui:Print}} desenha-as no PDF da planta: a espessura é escalada a partir do ecrã (a pena predefinida de parede de 1.75 píxeis equivale a 0.5 mm), os tracejados mantêm-se tracejados e uma cor é impressa com o valor do tema Papel.

## Uma escada a partir de um esboço

Escolher {{ui:Sketch stair}} e clicar nos cantos da linha de percurso, começando pelo degrau inferior. Uma linha é uma escada reta, duas linhas que se encontram em ângulo reto são um L, e três linhas (subir, atravessar, voltar) são um U. Premir {{key:L}} para desenhar um patamar: clicar nos seus cantos e premir {{key:Enter}}; o seu lado curto define a largura da escada. Premir {{key:Enter}} para colocar a escada. Cada cobertor é calculado a partir do comprimento da linha e do número de espelhos que a altura exige. Depois disso é uma escada normal: alterá-la em Propriedades, e a caixa da escada e os corrimãos seguem-na.

Marcar **Criar como família** na linha da ferramenta (ou premir {{key:F}}) antes de {{key:Enter}}, para colocar a escada como família (reta, L ou U). Entra como um só elemento e abre no editor de famílias com a largura, o cobertor, a altura total, os cobertores de cada lance e o vão de um U como parâmetros, para que se possam acrescentar dimensões, um símbolo em planta ou hotspots. Os degraus e a altura dos espelhos derivam deles. Não tem corrimãos nem caixa de escada: esses pertencem a uma escada normal.

## Abrir um OBJ

Abrir um ficheiro `.obj` como qualquer outro ficheiro. Um OBJ não tem unidades, por isso o BimCraft lê metros com Y para cima, como a maioria dos programas o escreve. Cada objeto ou grupo torna-se um elemento de malha num só piso, e depois pode vê-lo, medi-lo, cortá-lo, colocá-lo num modelo e guardá-lo como IFC. Linhas, curvas e superfícies ficam de fora, e a linha de estado indica-o.

Um objeto que é exatamente um prisma reto (uma malha fechada com duas faces de extremidade paralelas e idênticas e lados planos perpendiculares a elas: uma laje, um poste, um bloco de parede, uma chapa com furos) é guardado no IFC como o sólido extrudido próprio do IFC, com o seu contorno e profundidade, e não como uma lista de triângulos. Outros programas lêem-no como um sólido real, ocupa pouco espaço, e a sua profundidade e contorno podem ser editados mais tarde. A linha de estado indica quantos objetos foram mantidos dessa forma. Tudo o que não seja exatamente um prisma (uma forma afunilada, uma malha com um vértice deslocado, uma malha com uma abertura) continua como triângulos. Um ficheiro STEP é lido da mesma forma.
