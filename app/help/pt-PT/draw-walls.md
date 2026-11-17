---
title: Desenhar paredes
summary: Desenhe as paredes na planta de um nível, clicando nos cantos ou escrevendo os comprimentos; os cantos unem-se sozinhos, e as paredes são guardadas como IFC.
keywords: curva, arco, linha de localização, justificação, parede, paredes, desenhar, planta, planta do piso, compartimento, canto, unir, tipo de parede, 2x6, 2x4, cmu, betão, altura, nível, níveis, piso, comprimento escrito, orto, snap
from: 8269cd4b
---

## O que vai fazer

Desenhe as paredes de um edifício na planta de cada nível. Clique onde começa uma parede e depois em cada canto; o BimCraft une os cantos por si, dá a cada parede as suas camadas (revestimento exterior, placa de sustentação, montantes, gesso cartonado …) e prolonga-a até ao nível acima. A vista 3D mostra as paredes à medida que as desenha.

## Abrir a planta

1. Comece um novo edifício ([Começar um novo edifício](topic:start-a-new-building)) ou abra um modelo IFC.
2. Clique em {{ui:Desenhar}} na barra de ferramentas. Abre-se um novo edifício com esta ferramenta já ativa.
3. A planta de um nível aparece à esquerda e a vista 3D à direita. Escolha o nível na lista no topo da planta, ou com o botão redondo ao lado dela, no painel **Níveis**.
4. {{ui:Planta}}, {{ui:Dividir}} e {{ui:3D}} são ferramentas da linha {{ui:Vista}} da barra de ferramentas (os comandos PLAN, SPLIT e as teclas funcionam como antes). Use {{ui:Planta}} só para a planta, {{ui:Dividir}} para as duas, e {{ui:3D}} para fechar a planta. Quando a janela é estreita (ou o tamanho da interface é grande), {{ui:Dividir}} coloca a planta por cima da vista 3D, em vez de ao lado.

A planta corta o nível 4'-0" (1200 mm) acima do seu piso, como faz uma planta de piso. Desloque a roda para ampliar; arraste com o botão do meio ou com o direito (ou mantenha {{key:Space}} premido e arraste) para deslocar a vista. Com {{ui:Selecionar}} ativo, um arrastar simples também desloca. {{key:F}} com o cursor sobre a planta ajusta-a.

## Desenhar um compartimento

1. Clique em {{ui:Parede}} (ou prima {{key:W}}).
2. Escolha o tipo de parede na primeira lista, por exemplo **Exterior 2×6** ou **Interior 2×4**.
3. Escolha a altura: **Até ao nível acima** (a parede acompanha se esse nível mudar), **Até** um nível mais acima, para uma parede que atravessa vários níveis (um hall de escadas, um compartimento de pé-direito duplo, uma empena alta), ou **Altura fixa** e escreva-a. Uma parede desse tipo pertence ao nível em que a desenhou; as plantas dos níveis que ela atravessa mostram-na mais ténue, os compartimentos aí fecham-se contra ela, e pode clicar portas e janelas nela a partir dessas plantas (uma porta assenta no piso desse nível). Para mover ou remodelar a própria parede, é preciso ir ao nível onde ela começa.
4. Clique onde começa a primeira parede.
5. Clique em cada canto. Cada clique cria uma parede; a seguinte começa onde a anterior terminou. O comprimento e o ângulo aparecem junto ao cursor.
6. Clique outra vez no primeiro ponto para fechar o compartimento. A barra de estado indica quantas paredes tem o compartimento, e no modo eixo cada parede recebe a sua camada exterior do lado de fora do compartimento.
7. Prima {{key:Esc}} (ou clique com o botão direito, ou faça duplo clique) para parar sem fechar.

Os cantos unem-se sozinhos: duas paredes encontram-se em meia-esquadria, uma parede que termina noutra para na face desta (um T), e três ou mais paredes num ponto partilham o canto. As paredes que se cruzam ficam como estão.

Para desenhar um compartimento inteiro de uma vez, use {{ui:Formas}}: um retângulo, um retângulo rodado, um polígono, arcos, paredes sobre linhas escolhidas ou à volta de um contorno (ver [Formas de parede, dividir, deslocar, esticar e bloquear](topic:wall-tools)).

## Escolher a referência de desenho

Escolha **Eixo**, **Face interior** ou **Face exterior** antes do primeiro clique. Com uma face selecionada, os seus cliques e os comprimentos escritos descrevem essa face; o BimCraft desloca o eixo da parede para meia espessura total e une os cantos consecutivos. Escolha **Exterior à esquerda** ou **Exterior à direita** em relação ao sentido em que desenha. Para um contorno fechado desenhado no sentido contrário ao dos ponteiros do relógio, o exterior fica à direita; no sentido dos ponteiros, fica à esquerda. Com **Face interior**, o corpo da parede vai para o lado exterior da sua linha; com **Face exterior**, vai para o outro lado. O desenho por faces mantém o lado exterior escolhido quando fecha o circuito. No eixo, as paredes que não fecham um compartimento tomam o lado exterior que escolheu; ao fechar um compartimento, cada parede passa a ter o exterior do compartimento automaticamente, qualquer que seja o sentido em que o desenhou.

Mudar o tipo de parede, a referência ou o lado exterior termina a cadeia atual. Perto de um canto de inversão, as meias-esquadrias longas são limitadas, deixando extremidades quadradas.

Enquanto desenha, uma extremidade no espaço vazio pode alinhar na horizontal ou na vertical com a extremidade de uma parede ou com um canto anterior. Uma guia tracejada liga esse ponto ao cursor encaixado. Shift mantém a direção do desenho em ângulo reto; o alinhamento então para ao longo dessa direção. As extremidades, os pontos médios e as interseções de paredes próximas têm prioridade sobre o alinhamento distante.

## Linha de localização

Com **Referência** em **Face exterior** ou **Face interior**, a parede mantém essa face como linha de localização. Mais tarde, se a parede ficar mais espessa ou o seu exterior for invertido, essa face mantém-se no lugar e a parede cresce ou inverte-se em torno dela. Uma parede reta que nela termina num canto acompanha-a, para que o canto continue fechado. Pode mudar a linha de localização depois, em **Propriedades**: ver [Alterar uma parede, porta ou janela](topic:change-a-wall-or-door).

## Desenhar uma parede curva

1. Clique em {{ui:Parede}} e escolha **Curva** na lista **Forma** da linha de opções.
2. Clique onde a parede começa e depois onde termina.
3. Clique num ponto do seu arco. Ou escreva a altura do arco e prima {{key:Enter}}.
4. A cadeia continua a partir do fim da parede. Prima {{key:Esc}} para a terminar.

Uma parede curva une-se às paredes nas suas extremidades (funcionam as junções de canto e em T), cria compartimentos e recebe portas e janelas ao longo do arco. Estas mantêm-se como unidades retas, perpendiculares à parede no seu meio, e a sua distância é medida ao longo do arco. Uma parede pode rodar no máximo três quartos de círculo. Encaixa nas suas extremidades e no meio do arco.

Ainda não implementado para paredes curvas: {{ui:Aparar / prolongar}} e {{ui:Canto}}, a estrutura, as cotas automáticas da planta e o encaixe ao longo do arco. Ver [O que ainda não está implementado](topic:not-built-yet).

## Escrever um comprimento em vez de clicar

Depois do primeiro clique, escreva e prima {{key:Enter}}:

| Escreva | Desenha |
|---|---|
| `12'6"` ou `3810` | uma parede com esse comprimento, na direção que o cursor indica |
| `12'6"<90` | com esse comprimento, a esse ângulo (graus, no sentido contrário ao dos ponteiros do relógio a partir da direita) |
| `@3000,0` | até um ponto a essa distância do último, para o lado e para cima |
| `1200,3400` | até esse ponto na planta |

Escrever um número com a ferramenta Parede ativa vai diretamente para a caixa {{ui:Comprimento}}. Em pés e polegadas, um número simples é em polegadas; em milímetros, é em milímetros. Pode escrever sempre a unidade: `3.5 m`, `10 ft`, `6 1/2"`.

## Snaps

- As extremidades das paredes, os cantos das suas faces e os pontos médios encaixam quando o cursor está perto deles (um quadrado, um triângulo).
- O cursor encaixa no eixo de uma parede ou em qualquer uma das faces (uma cruz).
- A partir do último ponto, a direção mantém-se a cada 15° quando está perto; mantenha {{key:Shift}} premido para a manter a 0°, 90°, 180° ou 270°.
- As direções livres arredondam o comprimento a 1/2" (ou 10 mm).

## Alterar, anular, eliminar

- Cada parede é um passo em {{ui:Alterações}}: {{ui:Anular}} e {{ui:Refazer}} retiram as paredes e voltam a pô-las.
- Com {{ui:Selecionar}} ativo, clique numa parede na planta para a escolher; a vista 3D e as **Propriedades** acompanham. {{key:Delete}} elimina as paredes escolhidas, e as paredes a que estavam unidas são limpas outra vez.

## Níveis

O painel **Níveis** lista cada nível com a sua cota e altura.

- Escreva um novo nome, cota ou altura e prima {{key:Enter}}. Alterar a altura (ou a cota) de um nível desloca os níveis acima dele na mesma medida, e as paredes que sobem até um nível acompanham-no.
- {{ui:Adicionar um nível no topo}} acrescenta um nível acima do mais alto, com a mesma altura deste.
- {{ui:Adicionar um nível abaixo}} acrescenta um nível abaixo do mais baixo (uma cave), com a altura deste: a sua cota é negativa quando o nível mais baixo está em 0, e nenhum outro nível se move. Anular retira-o outra vez.
- {{ui:Copiar este nível…}} desenha de novo o que está no nível que está a ver noutro nível, ou num novo por cima: as suas paredes com portas e janelas, pisos e tetos (não coberturas). As paredes que subiam até ao nível acima passam a subir até ao nível acima do novo; os compartimentos surgem por si. Um único {{ui:Anular}} retira tudo. Se o outro nível já tiver paredes, a cópia é acrescentada a elas.
- {{ui:Unidades}} na barra de ferramentas escolhe as unidades (pés e polegadas, polegadas, pés decimais, milímetros, centímetros ou metros) para tudo o que as ferramentas de desenho mostram e leem.

## Guardar

Clique em {{ui:Guardar como IFC}}. Cada parede é uma parede IFC com o seu eixo, a sua forma unida, o seu tipo e as suas camadas, `Pset_WallCommon` e quantidades de base (comprimento, altura, áreas e volumes), para que outros programas BIM a abram e a incluam nos seus mapas.

## Bom saber

- As paredes são desenhadas pelo eixo. A espessura vem do tipo de parede.
- A planta mostra as paredes desenhadas aqui preenchidas, e tudo o resto (itens da biblioteca, modelos de outros programas) cortado pelo mesmo plano, com o que fica abaixo do corte em linhas finas.
- As paredes feitas por outros programas aparecem na planta, mas ainda não podem ser alteradas com estas ferramentas.
