---
title: Escadas e guardas
summary: Desenhe escadas retas, em L, em U e de degraus em leque, que dimensionam os espelhos e os cobertores a partir da altura entre pisos, com corrimãos, balaústres e a caixa da escada cortada no piso de cima; desenhe guardas-corpos ao longo de deques e em volta de aberturas.
keywords: espiral, escada redonda, escada, escadas, lanço, espelho, cobertor, patamar, degrau em leque, escada em L, escada em U, escada de ida e volta, corrimão, guarda-corpos, guarda, balaústre, pilar, poste, caixa de escada, altura livre, deque, varanda
from: 16e5ace4
---

## O que vai fazer

Acrescente escadas entre níveis e guardas onde as pessoas precisam delas. Uma escada calcula os seus próprios degraus a partir da altura entre os níveis, mantém-nos dentro dos limites habituais para habitação, coloca corrimãos nos seus lados abertos e corta a caixa da escada no piso de cima.

## Desenhar uma escada

1. No nível onde a escada começa, abra {{ui:Build}} e escolha {{ui:Stair}}.
2. Escolha o tipo — **Reta**, **Em L com patamar**, **Em U com patamar** ou **Em L com degraus em leque** — o sentido de **viragem**, a sua **largura** e onde ficam os seus **corrimãos**.
3. Clique onde a escada começa: no meio da aresta frontal do degrau inferior.
4. Mova o cursor no sentido em que a escada sobe; os degraus seguem-no, com o número de espelhos e de cobertores. Encaixa nas paredes e em incrementos de 15°; mantenha {{key:Shift}} premido para a manter em esquadria.
5. Clique. {{key:Esc}} recomeça.

## Desenhar uma escada em espiral

1. Abra {{ui:Build}}, escolha {{ui:Stair}} e depois **Espiral** como tipo.
2. Defina **Viragem**, o sentido de enrolamento na subida (esquerda é o sentido contrário ao dos ponteiros do relógio).
3. Clique no centro do seu poste.
4. Clique no sentido para onde aponta o cobertor inferior.

Começa com 30" de largura (o cobertor, do poste até ao exterior), com um poste de 4½". Os espelhos são calculados a partir da altura entre pisos, no máximo 9½" por predefinição. Os cobertores têm 7½" de profundidade na linha de passagem, a 12" do poste. O corrimão corre pelo exterior.

Em **Propriedades**, uma escada em espiral acrescenta **Poste central**, o seu diâmetro. O campo **Cobertor** é medido na linha de passagem. As verificações são identificadas como predefinições para escadas em espiral: 26" de largura livre, pelo menos 6¾" de cobertor na linha de passagem, espelhos no máximo 9½" e corrimãos de 34"–38". Não são cálculos de engenharia; a entidade licenciadora decide.

## Como são calculados os degraus

A altura entre o piso do nível e o nível de cima é dividida em espelhos iguais, não superiores a 7¾", e cada cobertor tem 10" de profundidade (ambos podem ser alterados em **Propriedades**). Um patamar conta como um degrau; os degraus em leque são três degraus dispostos em leque à volta do canto interior. Se alterar a altura de um nível, todas as escadas nele são calculadas de novo.

:::warning
Espelhos de 7¾", cobertores de 10", largura de 36", altura livre de 6'-8" e corrimãos de 34"–38" são predefinições identificadas segundo o regulamento residencial habitual, e não cálculos de engenharia. **Propriedades** indica quais são cumpridas; a entidade licenciadora decide o que se aplica.
:::

## Alterar uma escada

Selecione-a (clique nela na planta ou na vista 3D) e altere em **Propriedades**: o tipo e a viragem, a largura, o espelho mais alto, a profundidade do cobertor, os corrimãos e a sua altura, e **Cortar o piso de cima** para a caixa da escada. Os espelhos e cobertores resultantes são mostrados por baixo.

## A caixa da escada

Quando o nível de cima tem piso, a escada corta-o onde os degraus teriam menos de 6'-8" de altura livre. O corte acompanha a escada e desaparece quando a escada é eliminada.

## Desenhar uma guarda

1. Abra {{ui:Build}} e escolha {{ui:Railing}}.
2. Escolha **Guarda-corpos** (36" de altura) ou **Corrimão** e a sua altura.
3. Clique ao longo da aresta — de um deque, de uma varanda, em volta de uma caixa de escada — e faça duplo clique ou prima {{key:Enter}} para terminar.

As guardas recebem postes nas extremidades e nos cantos, e balaústres com espaçamentos inferiores a 4". Selecione uma para alterar o seu tipo, a altura ou a distância acima do piso a que começa.

## Desenhar uma vedação

Escolha **Vedação** na mesma ferramenta Guarda, defina a altura (1800 mm por predefinição), clique ao longo da linha da vedação e prima {{key:Enter}}.

- A vedação recebe um poste em cada extremidade e em cada canto, e um poste no máximo a cada 2.4 m entre eles. Uma vedação de painéis tem um painel entre postes; uma vedação de ripas tem duas travessas. Estas medidas são escolhas habituais, não uma exigência de regulamento: as regras locais limitam a altura de uma vedação.
- É um único elemento do modelo (um IfcRailing com o nome Fence), com um conjunto de propriedades CadCraft_Fence: estilo, altura, postes, painéis, travessas, portões, comprimento e área dos painéis. Um passo de anulação.
- Não desenhados aqui: portões (o gerador do CivilCraft dispõe-nos), estacas, terreno (a vedação assenta no nível) e a seleção de um único poste.

## O que é guardado

Uma escada é guardada como uma escada IFC composta por lanços (com os seus espelhos, cobertores, altura dos espelhos e comprimento dos cobertores), patamares, degraus em leque e corrimãos; a caixa da escada é uma abertura na laje do piso de cima. As guardas são guardas IFC com o seu comprimento e o número de balaústres e postes.
