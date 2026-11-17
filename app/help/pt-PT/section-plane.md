---
title: Cortar um modelo IFC com um plano de corte
summary: Corte o modelo 3D a partir de cima, da frente ou do lado, ou mantenha apenas o que está dentro de uma caixa de corte ou de um volume de várias caixas com faces inclinadas, para ver por dentro; mova o corte arrastando ou escrevendo, inverta-o e escolha o que o corte mostra.
keywords: corte, plano de corte, caixa de corte, grips, arrastar, margem, caixa de seleção, caixa de recorte, recorte, fatia, corte em planta, planta, alçado, interior, inverter, offset, volume de corte, corte em degraus, em L, inclinação, corte inclinado, plano oblíquo, plano extra
from: 6315e71a
---

## O que vai fazer

Cortar um modelo IFC com um único plano para ver por dentro: a partir de cima para uma planta, ou da frente ou do lado para um corte pelo edifício.

## Passos

1. Abra um modelo IFC. Ver [Abrir um modelo IFC e observá-lo em 3D](topic:open-ifc-model).
2. Clique em {{ui:Section}} na barra de ferramentas, ou prima {{key:X}}. O modelo é cortado a meia altura, e aparece uma barra por baixo da barra de ferramentas.
3. Escolha por onde cortar: {{ui:Top}}, {{ui:Front}} ou {{ui:Side}}. Frontal e Lado também rodam a vista para observar o corte.
4. Mova o corte: arraste o cursor **Offset**, ou escreva uma distância em metros na caixa e prima {{key:Enter}}. Também pode escrever milímetros, por exemplo `1200 mm`.
5. Clique em {{ui:Flip}} para manter o outro lado do corte.
6. Clique num elemento no corte para ver as suas propriedades.
7. Clique em {{ui:Off}}, clique de novo em {{ui:Section}}, ou prima {{key:X}}, para retirar o corte.

## Uma caixa de corte

Clique em {{ui:Box}} na mesma barra para manter apenas o que está dentro de uma caixa. Cada um dos {{ui:X}}, {{ui:Y}} e {{ui:Z}} tem dois cursores: onde a caixa começa e onde acaba, em metros a partir da borda do modelo. Os valores aparecem ao lado deles.

- {{ui:Box round the pick}} ajusta a caixa à volta dos elementos escolhidos e aproxima a vista deles. Deixa 300 mm de folga em cada lado; altere-a em {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Room round the pick}}.
- Com elementos escolhidos, {{ui:Show}} › {{ui:Section box round the pick}} ou {{key:Shift+X}} faz o mesmo num só passo, mesmo que nenhum corte esteja ativo.
- Os **grips** da caixa (pontos de controlo) movem-na com o ponteiro: arraste um quadrado no meio de uma face para mover essa face, um no meio de uma aresta para mover as duas faces que aí se encontram, ou um num canto para mover as três. Os cursores acompanham. Em {{ui:Top}}, um canto move a caixa em planta; em {{ui:Front}} ou {{ui:Side}}, em alçado.
- {{ui:Whole model}} volta a abrir a caixa para todo o modelo.
- {{ui:Top}}, {{ui:Front}} ou {{ui:Side}} voltam a um só plano.

## Um volume de várias caixas, faces inclinadas e planos extra

Uma caixa nem sempre é a forma de que precisa: um corte em degraus, uma ala em L, ou um corte ao longo de uma parede que não está em esquadria com a malha.

1. Em {{ui:Box}}, clique em {{ui:Add a box}}. O corte passa a manter o que está dentro de **qualquer** das caixas, pelo que duas caixas formam um volume em degraus ou em L. A lista ao lado indica a caixa que os cursores alteram ({{ui:Caixa 1}}, {{ui:Caixa 2}}…); {{ui:Remove this box}} retira a escolhida. Um volume tem até 8 caixas.
2. Abra {{ui:Tilt and planes}} para moldar a caixa escolhida:
   - Escolha uma {{ui:Face}} e escreva quanto se inclina para cada lado, em graus (até 80). A face roda em torno do seu meio; as restantes faces ficam onde os cursores as puseram. {{ui:Square}} repõe-na.
   - {{ui:Add a plane}} corta a caixa com mais um plano. {{ui:Faces}} é o sentido para onde vira o lado retirado, em graus a partir de X para Y; {{ui:Slope}} é quanto esse sentido se inclina para cima (0 para um plano vertical, 90 para um plano horizontal); {{ui:Offset}} é a distância do plano ao meio da caixa, em metros. × remove-o. Uma caixa tem até 6 planos extra.
3. Onde o volume corta sólidos, as faces de corte são preenchidas como antes, também onde duas caixas se encontram num degrau.

:::tip
Se o contorno desaparecer e não sobrar nada, as inclinações ou os planos não deixam nada dentro dessa caixa; a barra indica-o. Incline uma face para trás ou altere o offset de um plano.
:::

## Um edifício rodado no seu terreno

Muitos modelos colocam o edifício em ângulo com os eixos do ficheiro (norte verdadeiro, coordenadas partilhadas). Quando as paredes estão em ângulo, um novo corte começa em esquadria com o edifício: {{ui:Front}}, {{ui:Side}} e a caixa seguem as suas próprias paredes, e {{ui:Square to the building}} na barra de corte fica ativo. Clique nele para ver os eixos do modelo, e de novo para voltar atrás (a barra de estado indica o ângulo de rotação do edifício). Com **Definições › BimCraft › Um edifício rodado no seu terreno › Como colocado no terreno**, os cortes e as vistas começam nos eixos do modelo. Ver [Definições](topic:settings).

## O que deve ver

- **Superior** mantém o que está por baixo do corte, pelo que olha para dentro dos compartimentos. O offset é medido para cima a partir da base do modelo.
- **Frontal** mantém o que está atrás do corte, visto da frente; **Lado** mantém o que está para lá dele, visto do lado. O offset é medido a partir da frente ou do lado do modelo.
- Um contorno fino colorido mostra onde está o plano.
- Onde o plano corta uma parede, laje ou outro sólido, a face de corte é preenchida com uma cor escura, como um corte desenhado. {{ui:Fill}} na barra liga e desliga isto.
- O cubo de vistas no canto inferior direito roda o modelo para observar o corte de qualquer lado.
- Clicar escolhe o que se vê: o que foi retirado pelo corte não pode ser escolhido.

## Erros comuns

- **Nada mudou.** O corte pode estar acima da cobertura ou fora do modelo. Arraste o cursor ou escreva um offset menor.
- **O offset voltou atrás.** Uma distância para além do modelo é movida para o seu fim, e a barra de estado indica-o.
- **Um problema mostra só parte do volume.** Uma questão (BCF) mantém uma caixa com as suas faces inclinadas e planos: a primeira caixa do volume. A barra de estado indica-o quando cria a questão.
- **O corte está oco.** {{ui:Fill}} na barra está desligado: clique para preencher as faces de corte de paredes, lajes e outros sólidos.
- **Um corte preenchido parece salpicado ou falta uma peça.** O preenchimento precisa de sólidos fechados; um elemento cuja forma no ficheiro não é fechada (uma folha simples, folhagem de árvore) fica sem preenchimento, em vez de ser pintado por cima. Um elemento feito de partes de cores diferentes (um caixilho e o seu vidro) é preenchido quando as suas partes se tocam.
- **Onde está a barra de corte?** Fica no topo da vista 3D que corta: na metade 3D em {{ui:Split}}, e por baixo da barra de desenho em {{ui:Plan}} sozinho. Numa vista baixa, desloca-se com a barra de deslocamento.

## Seguinte

- [Mostrar e ocultar pisos, espaços e arestas](topic:storeys-and-spaces)
- [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d) — os desenhos em 3D têm o mesmo plano de corte
