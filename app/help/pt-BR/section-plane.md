---
title: Corte um modelo IFC com um plano de corte
summary: Fatie o modelo 3D a partir de cima, de frente ou de lado, ou mantenha apenas o que está dentro de uma caixa de corte ou de um volume de várias caixas com faces inclinadas, para ver o interior; mova o corte arrastando ou digitando, inverta-o e escolha o que o corte mostra.
keywords: corte, plano de corte, caixa de corte, grips, arrastar, margem, caixa de seleção, caixa de recorte, recorte, fatiar, corte em planta, planta baixa, elevação, interior, inverter, deslocamento, volume de corte, corte escalonado, em L, inclinação, corte inclinado, plano oblíquo, plano extra
from: 6315e71a
---

## O que você vai fazer

Corte um modelo IFC com um plano para ver o seu interior: de cima, para uma planta, ou de frente ou de lado, para um corte através do edifício.

## Passos

1. Abra um modelo IFC. Veja [Abrir um modelo IFC e observá-lo em 3D](topic:open-ifc-model).
2. Clique em {{ui:Corte}} na barra de ferramentas, ou pressione {{key:X}}. O modelo é cortado na metade da altura, e uma barra aparece sob a barra de ferramentas.
3. Escolha de onde cortar: {{ui:Superior}}, {{ui:Frontal}} ou {{ui:Lateral}}. Frontal e Lateral também giram a vista para observar o corte.
4. Mova o corte: arraste o controle **Deslocamento** ou digite uma distância em metros na caixa e pressione {{key:Enter}}. Você também pode digitar milímetros, por exemplo `1200 mm`.
5. Clique em {{ui:Inverter}} para manter o outro lado do corte.
6. Clique em um elemento no corte para ver as suas propriedades.
7. Clique em {{ui:Desligado}}, clique em {{ui:Corte}} de novo, ou pressione {{key:X}}, para retirar o corte.

## Uma caixa de corte

Clique em {{ui:Caixa}} na mesma barra para manter apenas o que está dentro de uma caixa. Cada um de {{ui:X}}, {{ui:Y}} e {{ui:Z}} tem dois controles deslizantes: onde a caixa começa e onde termina, em metros a partir da borda do modelo. Os valores aparecem ao lado deles.

- {{ui:Caixa em volta da seleção}} ajusta a caixa em volta dos elementos que você selecionou e aproxima a vista deles. Deixa 300 mm de folga em cada lado; altere isso em {{ui:Configurações}} › {{ui:BimCraft}} › {{ui:Folga em volta da seleção}}.
- Com elementos selecionados, {{ui:Exibir}} › {{ui:Caixa de corte em volta da seleção}} ou {{key:Shift+X}} faz o mesmo em um passo, mesmo quando nenhum corte está ativo.
- **Grips** na caixa a movem com o ponteiro: arraste um quadrado no meio de uma face para mover essa face, um no meio de uma aresta para mover as duas faces que se encontram ali, ou um em um canto para mover as três. Os controles deslizantes acompanham. Em {{ui:Superior}}, um canto move a caixa na planta; em {{ui:Frontal}} ou {{ui:Lateral}}, na elevação.
- {{ui:Modelo inteiro}} abre a caixa para o modelo inteiro de novo.
- {{ui:Superior}}, {{ui:Frontal}} ou {{ui:Lateral}} voltam a um único plano.

## Um volume de várias caixas, faces inclinadas e planos extras

Uma caixa nem sempre é a forma de que você precisa: um corte escalonado, uma ala em L ou um corte ao longo de uma parede que não é perpendicular à malha.

1. Em {{ui:Caixa}}, clique em {{ui:Adicionar uma caixa}}. O corte passa a manter o que está dentro de **qualquer** uma das caixas, então duas caixas formam um volume escalonado ou em L. A lista ao lado indica qual caixa os controles deslizantes alteram ({{ui:Caixa 1}}, {{ui:Caixa 2}}…); {{ui:Remover esta caixa}} retira a escolhida. Um volume tem até 8 caixas.
2. Abra {{ui:Inclinação e planos}} para moldar a caixa escolhida:
   - Escolha uma {{ui:Face}} e digite o quanto ela se inclina para cada lado, em graus (até 80). A face gira em torno do seu meio; as outras faces permanecem onde os controles as colocaram. {{ui:Esquadro}} a devolve à posição original.
   - {{ui:Adicionar um plano}} corta a caixa com mais um plano. {{ui:Faces}} é o sentido para o qual o lado recortado fica voltado, em graus a partir de X em direção a Y; {{ui:Inclinação}} é o quanto isso se inclina para cima (0 para um plano vertical, 90 para um horizontal); {{ui:Deslocamento}} é a distância do plano ao meio da caixa, em metros. × o remove. Uma caixa tem até 6 planos extras.
3. Onde o volume corta sólidos, as faces cortadas são preenchidas como antes, também onde duas caixas se encontram em um degrau.

:::tip
Se o contorno desaparecer e nada restar, as inclinações ou os planos não deixam nada dentro dessa caixa; a barra informa isso. Incline uma face de volta ou altere o deslocamento de um plano.
:::

## Um edifício girado em seu terreno

Muitos modelos posicionam o edifício em um ângulo em relação aos eixos do arquivo (norte verdadeiro, coordenadas compartilhadas). Quando as paredes correm em ângulo, um novo corte começa em esquadro com o edifício: {{ui:Frontal}}, {{ui:Lateral}} e a caixa seguem as próprias paredes, e {{ui:Alinhada à edificação}} na barra de corte fica ativo. Clique nele para voltar aos eixos do modelo e de novo para voltar ao alinhamento (a linha de status informa quanto o edifício está girado). Com **Configurações › BimCraft › Um edifício girado em seu terreno › Como posicionado no terreno**, os cortes e as vistas começam nos eixos do modelo. Veja [Configurações](topic:settings).

## O que você deve ver

- **Superior** mantém o que está abaixo do corte, então você olha para dentro dos ambientes. O deslocamento é medido para cima a partir da base do modelo.
- **Frontal** mantém o que está atrás do corte, visto de frente; **Lateral** mantém o que está além dele, visto de lado. O deslocamento é medido a partir da frente ou da lateral do modelo.
- Um contorno colorido e fino mostra onde está o plano.
- Onde o plano corta uma parede, laje ou outro sólido, a face cortada é preenchida em uma cor escura, como um corte desenhado. {{ui:Preenchimento}} na barra liga e desliga isso.
- O cubo de vista no canto inferior direito gira o modelo para observar o corte de qualquer lado.
- O clique seleciona o que você pode ver: o que foi cortado e retirado não pode ser selecionado.

## Erros comuns

- **Nada mudou.** O corte pode estar acima do telhado ou fora do modelo. Arraste o controle deslizante ou digite um deslocamento menor.
- **O deslocamento voltou.** Uma distância além do modelo é levada ao seu fim, e a linha de status informa isso.
- **Um problema mostra só parte do meu volume.** Um problema (BCF) mantém uma caixa com as suas faces inclinadas e planos: a primeira caixa do volume. A linha de status informa isso quando você cria o problema.
- **O corte está oco.** {{ui:Preenchimento}} na barra está desligado: clique para preencher as faces cortadas de paredes, lajes e outros sólidos.
- **Um corte preenchido parece pontilhado ou falta um pedaço.** O preenchimento precisa de sólidos fechados; um elemento cuja forma no arquivo não é fechada (uma folha isolada, folhagem de árvore) fica sem preenchimento, em vez de ser pintado por cima. Um elemento formado por partes de cores diferentes (um caixilho e o seu vidro) é preenchido quando as suas partes se fecham.
- **Onde está a barra de corte?** Ela fica no topo da vista 3D que corta: na metade 3D em {{ui:Dividir}}, e sob a barra de desenho em {{ui:Planta}} sozinha. Em uma vista baixa, ela rola.

## Próximos

- [Exibir e ocultar pavimentos, espaços e arestas](topic:storeys-and-spaces)
- [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d) — os desenhos em 3D têm o mesmo plano de corte
