---
title: O terreno, o edifício nele e os seus níveis
summary: Desenhe o contorno do terreno, coloque e rode o edifício no terreno, acrescente níveis a alturas dadas ou divida a altura do edifício, e desenhe no nível que escolher.
keywords: terreno, plano do terreno, linha de construção, recuo, servidão, direito de passagem, linha de propriedade, lote, parcela, limite, colocação do edifício, rodar edifício, colocar edifício, níveis, pisos, andares, adicionar níveis, dividir altura, altura entre pisos, IfcSite, IfcBuilding, IfcBuildingStorey, estrutura espacial
from: 48d10c1e
---

## O que vai fazer

Monte as partes de um modelo IFC que contêm tudo o resto: o terreno, o edifício nele e os níveis do edifício.

Um modelo está organizado como um **terreno** que contém um **edifício**, que contém os seus **níveis** (pisos); as paredes, os pisos e tudo o resto pertencem a um nível. {{ui:Ficheiro}} › {{ui:Novo edifício}} configura os três. Um modelo de outro programa que tenha um edifício mas não um terreno recebe um terreno na primeira vez que desenhar um: o edifício fica colocado nele onde já estava.

## Desenhar o terreno

1. Ative {{ui:Desenhar}} e depois escolha {{ui:Compilação}} › {{ui:Terreno}}.
2. Clique nos cantos do terreno (a ferramenta encaixa como a ferramenta Parede). Clique de novo no primeiro canto, faça duplo clique ou prima {{key:Enter}} para terminar. {{key:Backspace}} retira um canto.
3. A linha mostra a área do terreno. Desenhe-o de novo para o alterar.

A planta de cada nível mostra o contorno do terreno como linha de propriedade.

## Colocar o edifício no terreno

Com {{ui:Terreno}} ativo, escreva o **X** e o **Y** do edifício no terreno e a sua **Rotação** em graus, ou clique em {{ui:Colocar o edifício com um clique}} e clique onde deve ficar a origem do edifício. Tudo o que está no edifício (níveis, paredes, grelhas, tudo o que desenhou) move-se com ele; o terreno e o seu contorno ficam. As plantas continuam a mostrar cada nível em esquadria com o edifício.

## Linhas de construção e servidões

Linhas de construção e servidões (servidões de passagem, direitos de passagem) são desenhadas no terreno como restrições. **Avisam, nunca bloqueiam**: uma parede sobre uma delas é desenhada como pediu, e um aviso que nomeia a parede e a linha ou servidão aparece em Problemas. Mova a parede para trás e o aviso desaparece. Um aviso pode ser aceite com um motivo (uma flexibilização concedida pela autoridade, por exemplo).

- **Linha de construção a partir de recuos.** {{ui:Compilação}} › {{ui:Linha de construção}}, depois {{ui:Recuos}}: escreva a distância a que a linha fica de cada limite do terreno. Os limites estão numerados na planta enquanto a ferramenta estiver ativa. A linha é calculada a partir dessas distâncias e segue o contorno do terreno se o desenhar de novo com o mesmo número de limites. As distâncias são suas, retiradas da sua escritura ou do seu plano de ordenamento; o BimCraft não preenche nenhuma.
- **Uma linha de construção desenhada.** Com {{ui:Linha de construção}} ativa, clique nos seus pontos e termine com duplo clique ou {{key:Enter}}. Termine no primeiro ponto para obter uma linha fechada: a área interior é onde se pode construir, e uma parede com qualquer parte fora dela é assinalada com um aviso. Uma linha aberta só avisa sobre uma parede que a atravesse.
- **Uma servidão.** {{ui:Compilação}} › {{ui:Servidão}}: escolha o seu tipo, escreva o seu nome, a sua referência registada e a sua largura, e depois clique na sua linha central e termine (uma faixa), ou feche-a no primeiro ponto (uma área). Uma parede com qualquer parte sobre ela é assinalada com um aviso, em todos os níveis.
- Uma face exatamente sobre uma linha está a tocar, não a atravessar (a tolerância é 1 mm).
- A opção de volumetria atual de cada conjunto de opções é verificada da mesma forma que as paredes: uma massa fora do limite, sobre uma linha de construção ou sobre uma servidão recebe um aviso. Veja [Opções de volumetria lado a lado](topic:massing-options).
- Escolha uma com {{ui:Selecionar}} para alterar o seu nome, referência, tipo ou largura, movê-la ou eliminá-la.

São desenhadas na planta de cada nível, nas folhas e no PDF da planta: linhas de construção a tracejado, servidões a pontilhado, cada uma com a sua etiqueta. No ficheiro IFC, cada uma é uma anotação (IfcAnnotation, tipo BuildingLine ou Servitude) no terreno, com a sua linha como uma curva simples que outros programas podem ler. A verificação usa o contorno real de cada parede na planta, com as suas junções tal como foram desenhadas; uma parede curva é verificada pela sua própria espessura em torno do seu eixo.

## Acrescentar níveis

No painel {{ui:Níveis}}, {{ui:Adicionar um nível no topo}} acrescenta um, e {{ui:Adicionar um nível abaixo}} acrescenta um por baixo do mais baixo (uma cave, numa cota negativa). {{ui:Adicionar níveis…}} acrescenta vários de uma vez:

- **A estas alturas**: escreva alturas acima do nível mais baixo, separadas por vírgulas (por exemplo `12', 24', 36'`). As alturas que já têm um nível são ignoradas.
- **Dividir a altura do edifício**: escreva a altura do edifício e o número de níveis. Os níveis que tem passam às suas novas alturas, do mais baixo para cima, os que faltam são acrescentados, e os que estiverem acima ficam onde estão.

As paredes que chegam ao nível de cima seguem-no, tal como os pilares e as rampas.

{{ui:Copiar este nível…}} (no mesmo painel) copia o que está desenhado no nível que está a ver para outro nível ou para um novo nível no topo, para que uma planta suba o edifício num só passo. Ver [Desenhar paredes](topic:draw-walls).

## Desenhar num nível

Cada ferramenta {{ui:Desenhar}} trabalha no nível escolhido na lista de níveis da planta (ou escolhido no painel {{ui:Níveis}}): o que desenhar pertence a esse nível.

## O que deve ver

- Cada uma destas alterações é um passo: {{key:Mod+Z}} anula-a.
- No ficheiro IFC: o terreno (IfcSite) com o seu contorno e área, o edifício (IfcBuilding) colocado nele, e os níveis (IfcBuildingStorey) no edifício.

Ver também [Coordenadas no BimCraft](topic:coordinates) para a origem do projeto e o ponto de levantamento.
