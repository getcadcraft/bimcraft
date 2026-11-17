---
title: Compartimentos, pavimentos, tetos e coberturas
summary: Os compartimentos aparecem à medida que as paredes os fecham; dê a um compartimento ou a todo o edifício um pavimento e um teto, e coloque uma cobertura de quatro águas ou de duas águas sobre as paredes. Tudo acompanha quando as paredes se movem.
keywords: compartimento, compartimentos, espaço, área, perímetro, pavimento, laje, subpavimento, teto, cobertura, cobertura de quatro águas, cobertura de duas águas, inclinação, saliência, beirado, cumeeira, rincão, 6/12
from: 1fb1813c
---

## O que vai fazer

Conclua a envolvente do edifício. Os compartimentos surgem sozinhos a partir das paredes; os pavimentos, os tetos e a cobertura exigem um clique cada um. Como são obtidos a partir das paredes, acompanham-nas quando as paredes se movem.

## Compartimentos

Todo o espaço fechado por paredes desenhadas é um compartimento. Aparece assim que a última parede o fecha, com um número (101, 102 … no primeiro nível, 201 … no seguinte) e um nome (**Compartimento 1**, **Compartimento 2** …), e a sua área aparece ao centro, na planta.

- Com {{ui:Selecionar}} ativo, clique dentro de um compartimento para o selecionar. Em **Propriedades**, altere o seu **Nome** (por exemplo `Kitchen`) e o **Número**; a área e o perímetro são mostrados.
- Eliminar uma parede entre dois compartimentos junta-os; desenhar uma parede a atravessar um compartimento divide-o em dois. Um compartimento mantém o nome e o número enquanto as paredes à volta se movem.
- Um compartimento não pode ser eliminado sozinho: é o espaço que as paredes formam.

As áreas são medidas dentro das faces das paredes. Os compartimentos são guardados como espaços IFC, com a área do piso, o perímetro, a altura e o volume, para que os mapas os leiam (veja [Somar quantidades, listar elementos e mapear espaços](topic:quantity-totals)).

## Pavimentos

1. Clique em {{ui:Pavimento}}.
2. Escolha **Este compartimento** ou **Todo o edifício**, o **Tipo** (soalho de madeira ou laje de betão) e a respetiva espessura.
3. Aponte para o interior de um compartimento (ou para qualquer ponto dentro do edifício). O que o pavimento cobriria fica realçado, com a sua área.
4. Clique. A face superior fica ao nível do piso; o pavimento desce pela sua espessura. Um pavimento de todo o edifício chega às faces exteriores das paredes.

## Tetos

1. Clique em {{ui:Teto}}.
2. Escolha **Este compartimento** ou **Todo o edifício**, e a sua **Altura** acima do piso.
3. Aponte para o interior e clique.
4. Para o ver de baixo, com a sua grelha e as luzes, mude a planta para a planta do teto: veja [Vistas, intervalos de vista e as suas próprias folhas](topic:views-and-sheets).

## Uma cobertura

1. No nível cujas paredes suportam a cobertura, clique em {{ui:Cobertura}}.
2. Escreva a **Inclinação** como uma subida sobre 12 (`6/12`) ou em graus (`30`), e a **Saliência**.
3. Escolha os **Extremos**: **Cobertura de quatro águas** (todos os lados inclinam), **Empenas nos lados curtos** ou **Empenas nos lados longos** (um edifício com quatro lados), ou **Uma água**.
4. Aponte para o interior do edifício: o beirado e a cumeeira aparecem na planta. Clique.

A cobertura assenta sobre as paredes, no nível acima delas, e a sua face inferior encontra a face exterior das paredes. As empenas são preenchidas com uma parede de empena tão espessa como a parede de baixo. Um edifício em forma de L, T ou U recebe uma cobertura de quatro águas cujas alas se encontram em rincões.

## Alterá-los

Selecione um pavimento, um teto ou uma cobertura (na vista 3D, na árvore do modelo, ou uma cobertura clicando dentro do seu contorno no nível de cima) e altere-o em **Propriedades**: o tipo de pavimento, a espessura e a altura da face superior acima do nível; a altura de um teto, a espessura e o **Padrão** (a grelha que a planta do teto desenha: nenhum, 600 × 600, 600 × 1200, 2' × 2' ou 2' × 4'); a inclinação, a saliência, os extremos e a espessura de uma cobertura. Cada alteração é um passo de anulação.

## Dar a um pavimento, teto ou cobertura um tipo com camadas

Um pavimento, um teto e uma cobertura podem ter um **tipo**, como uma parede: uma composição com nome, feita de camadas, cada uma com o seu material e a sua espessura real.

- **Ao colocar.** As ferramentas Pavimento, Teto, Cobertura e Desenhar pavimento têm uma lista **Tipo** na sua linha. **Sem tipo** coloca como antes, com a sua própria espessura. Um tipo coloca-o tão espesso como o conjunto das camadas do tipo.
- **Mais tarde.** Selecione o pavimento, o teto ou a cobertura e escolha **Tipo** em Propriedades. O elemento continua o mesmo: o seu lugar, o seu compartimento e os seus dados são mantidos e nada é desenhado de novo. Só mudam o tipo, a espessura e o material. É assim que um elemento da fase de esboço passa a elemento desenvolvido: troque o seu tipo genérico por um real.
- **Editar o tipo…** abre o editor de tipos desse tipo: as camadas de **cima** para baixo, o núcleo, a função de cada camada e a etiqueta LOD do tipo. Guardar altera todos os elementos do tipo num só passo, e um passo de anulação o desfaz. Alterar um tipo inicial guarda uma cópia como tipo seu.
- Enquanto um elemento tiver um tipo, a sua **Espessura** é a do tipo e não pode ser escrita. Escolha outro tipo, ou **Sem tipo**, para a alterar.

Os tipos iniciais são um tipo **genérico** para cada um (uma camada do material genérico, etiquetada LOD 200) e dois tipos com camadas (etiquetados LOD 300): um pavimento de vigotas de madeira e um pavimento de betão com betonilha; uma cobertura de madeira e uma cobertura plana de betão; um teto de placas de gesso cartonado e um teto suspenso de placas. São valores de partida, não construções testadas: verifique as camadas antes de confiar nelas.

O mapa **Camadas: área e volume** lista cada camada de cada tipo em uso; veja [Mapas, cotas e PDF](topic:plan-schedules-and-pdf). Os tipos de pavimento, de cobertura e de teto viajam entre projetos num pacote de tipos ou como item da biblioteca; veja [Pacotes de tipos](topic:type-packs).

## Bom saber

- Mover, acrescentar ou eliminar paredes volta a criar os compartimentos, os pavimentos, os tetos e a cobertura sobre elas.
- Uma cobertura adapta-se a qualquer contorno. Para dar a cada parede a sua própria inclinação, empena ou uma água, uma placa elevada, uma tabeira e um forro de beirado, ou para desenhar um único plano de cobertura, veja [Coberturas: uma inclinação para cada parede, empenas, uma água e planos de cobertura](topic:roofs).
- {{key:Delete}} elimina um pavimento, teto ou cobertura selecionado.
