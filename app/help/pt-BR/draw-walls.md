---
title: Desenhar paredes
summary: Desenhe paredes na planta de um nível clicando nos cantos ou digitando comprimentos; os cantos se unem sozinhos, e as paredes são salvas como IFC.
keywords: curva, arco, linha de localização, alinhamento, parede, paredes, desenhar, planta, planta baixa, ambiente, canto, unir, tipo de parede, 2x6, 2x4, cmu, concreto, altura, nível, níveis, pavimento, comprimento digitado, orto, snap
from: 8269cd4b
---

## O que você vai fazer

Desenhe as paredes de um edifício sobre a planta de cada nível. Clique onde uma parede começa e depois em cada canto; o BimCraft une os cantos para você, dá a cada parede as suas camadas (revestimento externo, sheathing, montantes, gesso acartonado …) e a leva até o nível acima. A vista 3D mostra as paredes à medida que você desenha.

## Abrir a planta

1. Inicie um novo edifício ([Iniciar um novo edifício](topic:start-a-new-building)) ou abra um modelo IFC.
2. Clique em {{ui:Draw}} na barra de ferramentas. Um novo edifício abre com ela já ativada.
3. A planta de um nível aparece à esquerda e a vista 3D à direita. Escolha o nível na lista no topo da planta, ou com o botão redondo ao lado dele no painel **Níveis**.
4. {{ui:Plan}}, {{ui:Split}} e {{ui:3D}} são ferramentas da linha {{ui:View}} da barra de ferramentas (os comandos PLAN, SPLIT e as teclas funcionam como antes). Use {{ui:Plan}} para ver só a planta, {{ui:Split}} para ver as duas e {{ui:3D}} para fechar a planta. Quando a janela está estreita (ou o tamanho da interface é grande), {{ui:Split}} coloca a planta acima da vista 3D, em vez de ao lado.

A planta corta o nível a 4'-0" (1200 mm) acima do seu piso, como uma planta baixa faz. Role para dar zoom; arraste com o botão do meio ou com o direito (ou segure {{key:Space}} e arraste) para fazer pan. Com {{ui:Select}} ativado, um arraste simples também faz pan. {{key:F}} com o ponteiro sobre a planta ajusta a vista a ela.

## Desenhar um ambiente

1. Clique em {{ui:Wall}} (ou pressione {{key:W}}).
2. Escolha o tipo de parede na primeira lista, por exemplo **Parede externa 2×6** ou **Parede interna 2×4**.
3. Escolha a altura: **Até o nível acima** (a parede acompanha se esse nível for movido), **Até** um nível mais alto para uma parede que atravessa vários níveis (um hall de escada, um ambiente de pé-direito duplo, um frontão alto), ou **Altura fixa** e digite a altura. Uma parede assim pertence ao nível em que você a desenhou; as plantas dos níveis que ela atravessa a mostram mais clara, os ambientes ali se fecham contra ela, e você pode clicar em portas e janelas nela a partir dessas plantas (uma porta fica sobre o piso daquele nível). Para mover ou remodelar a própria parede, vá ao nível em que ela começa.
4. Clique onde a primeira parede começa.
5. Clique em cada canto. Cada clique cria uma parede; a seguinte começa onde a anterior terminou. O comprimento e o ângulo aparecem ao lado do ponteiro.
6. Clique no primeiro ponto novamente para fechar o ambiente. A linha de status informa quantas paredes tem o ambiente e, no modo de linha de eixo, cada parede recebe a sua camada externa do lado de fora do ambiente.
7. Pressione {{key:Esc}} (ou clique com o botão direito, ou dê um duplo clique) para parar sem fechar.

Os cantos se unem sozinhos: duas paredes se encontram em uma meia-esquadria, uma parede que termina em outra para na sua face (uma junção em T), e três ou mais paredes em um mesmo ponto compartilham o canto. Paredes que se cruzam são mantidas como estão.

Um ambiente inteiro de uma vez: abra {{ui:Shapes}} para um retângulo, um retângulo girado, um polígono, arcos, paredes sobre linhas escolhidas ou em volta de um contorno (veja [Formas de parede, dividir, deslocar, esticar e bloquear](topic:wall-tools)).

## Escolher a referência de desenho

Escolha **Linha de eixo**, **Face interna** ou **Face externa** antes do primeiro clique. Com uma face selecionada, seus cliques e comprimentos digitados descrevem essa face; o BimCraft desloca o eixo da parede em metade da espessura total e une os cantos consecutivos. Escolha **Externa à esquerda** ou **Externa à direita** em relação à direção em que você desenha. Para um contorno fechado desenhado no sentido anti-horário, o lado externo fica à direita; no sentido horário, à esquerda. Com **Face interna**, o corpo da parede vai para o lado externo da sua linha; com **Face externa**, vai para o outro lado. O desenho por face mantém o lado externo escolhido quando você fecha o laço. Na linha de eixo, as paredes que não fecham um ambiente assumem o lado externo que você escolheu; ao fechar um ambiente, cada parede tem seu lado externo ajustado sozinho para o lado de fora do ambiente, qualquer que seja o sentido em que você desenhou.

Mudar o tipo de parede, a referência ou o lado externo encerra a cadeia atual. Perto de um canto que inverte o sentido, meias-esquadrias longas são limitadas deixando extremidades retas.

Enquanto desenha, um ponto de extremidade no espaço vazio pode se alinhar na horizontal ou na vertical com a extremidade de uma parede ou com um canto anterior. Uma guia tracejada liga esse ponto ao ponteiro encaixado. {{key:Shift}} mantém a direção do desenho em ângulo reto; o alinhamento então para ao longo dessa direção. Extremidades próximas, pontos médios e interseções de paredes têm prioridade sobre o alinhamento à distância.

## Linha de localização

Com **Referência** em **Face externa** ou **Face interna**, a parede mantém essa face como sua linha de localização. Depois, se a parede ficar mais espessa ou o seu lado externo for invertido, essa face continua no lugar e a parede cresce ou inverte em torno dela. Uma parede reta que se encontra com ela em um canto acompanha, então o canto continua fechado. Você pode mudar a linha de localização depois em **Propriedades**: veja [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door).

## Desenhar uma parede curva

1. Clique em {{ui:Wall}} e depois escolha **Curva** na lista **Forma** da linha de opções.
2. Clique onde a parede começa e depois onde ela termina.
3. Clique em um ponto do seu arco. Ou digite a altura do arco e pressione {{key:Enter}}.
4. A cadeia continua a partir da extremidade da parede. Pressione {{key:Esc}} para encerrá-la.

Uma parede curva se une às paredes em suas extremidades (cantos e junções em T funcionam), forma ambientes e recebe portas e janelas ao longo do seu arco. Elas continuam sendo unidades retas, em ângulo reto com a parede no seu meio, e a distância delas é medida ao longo do arco. Uma parede pode girar no máximo três quartos de círculo. Ela encaixa nas suas extremidades e no ponto médio do arco.

Ainda não implementado para paredes curvas: {{ui:Trim / extend}} e {{ui:Corner}}, estrutura, cotas automáticas da planta e encaixe ao longo do arco. Veja [O que ainda não foi implementado](topic:not-built-yet).

## Digitar um comprimento em vez de clicar

Depois do primeiro clique, digite e pressione {{key:Enter}}:

| Digite | Desenha |
|---|---|
| `12'6"` ou `3810` | uma parede desse comprimento, na direção que o ponteiro indica |
| `12'6"<90` | desse comprimento, nesse ângulo (graus, no sentido anti-horário a partir da direita) |
| `@3000,0` | até um ponto nessa distância do último, no sentido horizontal e para cima |
| `1200,3400` | até esse ponto na planta |

Digitar um número com a ferramenta Parede ativa vai direto para a caixa {{ui:Length}}. Em pés e polegadas, um número sem unidade é em polegadas; em milímetros, é em milímetros. Você sempre pode digitar a unidade: `3.5 m`, `10 ft`, `6 1/2"`.

## Snaps

- Extremidades de paredes, os cantos de suas faces e os pontos médios das paredes se encaixam quando o ponteiro está perto deles (um quadrado, um triângulo).
- O ponteiro se encaixa na linha de eixo de uma parede ou em qualquer uma das faces (uma cruz).
- A partir do último ponto, a direção se mantém a cada 15° quando está próxima; segure {{key:Shift}} para mantê-la em 0°, 90°, 180° ou 270°.
- Direções livres arredondam o comprimento para 1/2" (ou 10 mm).

## Alterar, desfazer, excluir

- Cada parede é uma etapa em **Alterações**: {{ui:Undo}} e {{ui:Redo}} tiram as paredes e as devolvem.
- Com {{ui:Select}} ativado, clique em uma parede na planta para selecioná-la; a vista 3D e **Propriedades** acompanham. {{key:Delete}} exclui as paredes selecionadas, e as paredes às quais elas estavam unidas são limpas novamente.

## Níveis

O painel **Níveis** lista cada nível com a sua elevação e altura.

- Digite um novo nome, elevação ou altura e pressione {{key:Enter}}. Mudar a altura (ou a elevação) de um nível move os níveis acima dele na mesma medida, e as paredes que vão até um nível acompanham.
- {{ui:Add a level on top}} adiciona um nível acima do mais alto, com a mesma altura dele.
- {{ui:Add a level below}} adiciona um nível abaixo do mais baixo (um subsolo), com a mesma altura dele: sua elevação é negativa quando o nível mais baixo está em 0, e nenhum outro nível se move. Desfazer o remove novamente.
- {{ui:Copy this level…}} desenha de novo o que está no nível que você está vendo em outro nível, ou em um novo nível acima: suas paredes com portas e janelas, pisos e forros (não coberturas). As paredes que iam até o nível acima passam a ir até o nível acima do novo; os ambientes aparecem sozinhos. Um único {{ui:Undo}} desfaz tudo. Se o outro nível já tiver paredes, a cópia é acrescentada a elas.
- {{ui:Units}} na barra de ferramentas escolhe as unidades (pés e polegadas, polegadas, pés decimais, milímetros, centímetros ou metros) para tudo o que as ferramentas de desenho mostram e leem.

## Salvar

Clique em {{ui:Save as IFC}}. Cada parede é uma parede IFC com a sua linha de eixo, a forma unida, o seu tipo e camadas, `Pset_WallCommon` e quantidades de base (comprimento, altura, áreas e volumes), para que outros programas BIM a abram e a quantifiquem.

## Bom saber

- As paredes são desenhadas na sua linha de eixo. A espessura vem do tipo de parede.
- A planta mostra as paredes desenhadas aqui preenchidas, e todo o resto (itens da biblioteca, modelos de outros programas) cortado pelo mesmo plano, com o que fica abaixo do corte em linhas finas.
- Paredes feitas por outros programas aparecem na planta, mas ainda não podem ser alteradas com estas ferramentas.
