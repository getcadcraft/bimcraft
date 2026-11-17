---
title: O terreno, a edificação sobre ele e seus níveis
summary: Desenhe o contorno do terreno, posicione e gire a edificação no terreno, adicione níveis em alturas dadas ou divida a altura da edificação, e desenhe no nível que você escolher.
keywords: terreno, planta do terreno, linha de recuo, recuo, servidão, servidão de passagem, direito de passagem, linha de propriedade, lote, divisa, limite, posicionamento da edificação, girar edificação, posicionar edificação, níveis, pavimentos, andares, adicionar níveis, dividir altura, pé-direito, IfcSite, IfcBuilding, IfcBuildingStorey, estrutura espacial
from: 48d10c1e
---

## O que você vai fazer

Montar as partes de um modelo IFC que contêm todo o resto: o terreno, a edificação sobre ele e os níveis da edificação.

Um modelo é organizado como um **terreno** que contém uma **edificação**, que contém seus **níveis** (pavimentos); paredes, pisos e tudo o mais pertencem a um nível. {{ui:Arquivo}} › {{ui:Nova edificação}} monta os três. Um modelo de outro programa que tem uma edificação, mas não tem terreno, ganha um terreno na primeira vez que você desenhar um: a edificação é posicionada nele onde já estava.

## Desenhar o terreno

1. Ligue {{ui:Desenhar}} e depois escolha {{ui:Build}} › {{ui:Terreno}}.
2. Clique nos cantos do terreno (a ferramenta se alinha como a ferramenta Parede). Clique de novo no primeiro canto, dê duplo clique ou pressione {{key:Enter}} para terminar. {{key:Backspace}} desfaz um canto.
3. A linha mostra a área do terreno. Desenhe de novo para alterá-la.

Cada planta de nível mostra o contorno do terreno como uma linha de propriedade.

## Posicionar a edificação no terreno

Com {{ui:Terreno}} ligado, digite o **X** e o **Y** da edificação no terreno e o **Giro** dela em graus, ou clique em {{ui:Posicionar a edificação com um clique}} e clique onde a origem da edificação deve ficar. Tudo na edificação (níveis, paredes, grades, tudo o que você desenhou) se move junto; o terreno e o contorno dele permanecem. As plantas continuam mostrando cada nível em esquadro com a edificação.

## Linhas de recuo e servidões

As linhas de recuo e as servidões (de passagem, direitos de passagem) são desenhadas no terreno como restrições. Elas **avisam, nunca bloqueiam**: uma parede sobre uma delas é desenhada como você pediu, e um aviso com o nome da parede e da linha ou servidão aparece em Problemas. Mova a parede de volta e o aviso some. Um aviso pode ser aceito com um motivo (uma flexibilização concedida pela prefeitura, por exemplo).

- **Linha de recuo a partir dos recuos.** {{ui:Build}} › {{ui:Linha de recuo}}, depois {{ui:Recuos}}: digite a distância que a linha fica para dentro de cada divisa do terreno. As divisas são numeradas na planta enquanto a ferramenta está ligada. A linha é calculada a partir dessas distâncias e segue o contorno do terreno se você desenhá-lo de novo com o mesmo número de divisas. As distâncias são suas, tiradas da escritura ou do plano diretor; o BimCraft não preenche nenhuma.
- **Uma linha de recuo desenhada.** Com {{ui:Linha de recuo}} ligada, clique nos pontos dela e termine com duplo clique ou {{key:Enter}}. Termine no primeiro ponto para uma linha fechada: a área interna é onde se pode construir, e uma parede com qualquer parte fora dela recebe um aviso. Uma linha aberta avisa apenas sobre uma parede que a cruza.
- **Uma servidão.** {{ui:Build}} › {{ui:Servidão}}: escolha o tipo, digite o nome, a referência registrada e a largura, depois clique na linha central dela e termine (uma faixa), ou feche-a no primeiro ponto (uma área). Uma parede com qualquer parte sobre ela recebe um aviso, em todos os níveis.
- Uma face exatamente sobre uma linha está tocando, não cruzando (a tolerância é de 1 mm).
- A opção de massa atual de cada conjunto de opções é verificada da mesma forma que as paredes: uma massa fora do limite, sobre uma linha de recuo ou sobre uma servidão recebe um aviso. Veja [Opções de massa lado a lado](topic:massing-options).
- Selecione uma com {{ui:Selecionar}} para alterar o nome, a referência, o tipo ou a largura, movê-la ou excluí-la.

Elas são desenhadas na planta de cada nível, nas folhas e no PDF da planta: linhas de recuo tracejadas, servidões pontilhadas, cada uma com o seu rótulo. No arquivo IFC, cada uma é uma anotação (IfcAnnotation, tipo BuildingLine ou Servitude) no terreno, com a linha dela como uma curva simples que outros programas conseguem ler. A verificação usa o contorno real de cada parede na planta, com suas junções como desenhadas; uma parede curva é verificada pela própria espessura em torno da linha central.

## Adicionar níveis

No painel {{ui:Níveis}}, {{ui:Adicionar um nível no topo}} adiciona um, e {{ui:Adicionar um nível abaixo}} adiciona um abaixo do mais baixo (um subsolo, em elevação negativa). {{ui:Adicionar níveis…}} adiciona vários de uma vez:

- **Nestas alturas**: digite alturas acima do nível mais baixo, separadas por vírgulas (por exemplo `12', 24', 36'`). Alturas que já têm um nível são ignoradas.
- **Dividir a altura da edificação**: digite a altura da edificação e o número de níveis. Os níveis que você tem passam para as novas alturas, do mais baixo para cima; os que faltam são adicionados, e os que estiverem acima deles permanecem onde estão.

Paredes que sobem até o nível de cima acompanham, assim como pilares e rampas.

{{ui:Copiar este nível…}} (no mesmo painel) copia o que está desenhado no nível que você está vendo para outro nível ou para um novo nível no topo, de modo que uma planta suba pela edificação em um passo. Veja [Desenhar paredes](topic:draw-walls).

## Desenhar em um nível

Toda ferramenta {{ui:Desenhar}} funciona no nível escolhido na lista de níveis da planta (ou selecionado no painel {{ui:Níveis}}): o que você desenha pertence a esse nível.

## O que você deve ver

- Cada uma dessas alterações é um passo: {{key:Mod+Z}} a desfaz.
- No arquivo IFC: o terreno (IfcSite) com o contorno e a área, a edificação (IfcBuilding) posicionada nele e os níveis (IfcBuildingStorey) dentro da edificação.

Veja também [Coordenadas no BimCraft](topic:coordinates) para a origem do projeto e o ponto de levantamento.
