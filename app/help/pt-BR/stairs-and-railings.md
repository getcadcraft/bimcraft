---
title: Escadas e guarda-corpos
summary: Desenhe escadas retas, em L, em U e de degraus de leque, que dimensionam seus espelhos e pisos a partir da altura de piso a piso, com corrimãos e balaústres, e o poço de escada recortado no piso acima; desenhe guarda-corpos ao longo de decks e em torno de aberturas.
keywords: caracol, escada redonda, escada, escadas, lance, espelho, piso, patamar, degrau de leque, escada em L, escada em U, escada de retorno, corrimão, guarda-corpo, guarda, balaústre, pilar, montante, poço de escada, altura livre, deck, sacada
from: 16e5ace4
---

## O que você vai fazer

Adicione escadas entre níveis e guarda-corpos onde as pessoas precisarem deles. Uma escada calcula os próprios degraus a partir da altura entre os níveis, mantém-se dentro dos limites residenciais usuais, coloca corrimãos nos lados abertos e recorta o poço de escada no piso acima.

## Desenhar uma escada

1. No nível de onde a escada começa, abra {{ui:Build}} e escolha {{ui:Escada}}.
2. Escolha o tipo — **Reta**, **L com patamar**, **U com patamar** ou **L com degraus de leque** —, em qual sentido ela **gira**, sua **largura** e onde ficam os **corrimãos**.
3. Clique onde a escada começa: no meio da borda frontal do primeiro degrau.
4. Mova o ponteiro no sentido em que a escada sobe; os degraus o acompanham, com o número de espelhos e de pisos. Ela se ajusta às paredes e a degraus de 15°; mantenha {{key:Shift}} pressionado para mantê-la em esquadro.
5. Clique. {{key:Esc}} recomeça.

## Desenhar uma escada caracol

1. Abra {{ui:Build}}, escolha {{ui:Escada}} e depois **Caracol** como tipo.
2. Defina **Giro**, o sentido em que ela se enrola ao subir (esquerda é anti-horário).
3. Clique no centro do seu pilar.
4. Clique no sentido para onde aponta o piso inferior.

Ela começa com 30" de largura (o piso, do pilar até o lado externo), com um pilar de 4½". Os espelhos são calculados a partir da altura de piso a piso, no máximo 9½" por padrão. Os pisos têm 7½" de profundidade na linha de caminhamento, a 12" do pilar. O corrimão fica do lado externo.

Em **Propriedades**, uma escada caracol acrescenta **Pilar central**, com seu diâmetro. O campo **Piso** é medido na linha de caminhamento. Suas verificações são valores padrão rotulados para escadas caracol: 26" de largura livre, pelo menos 6¾" de piso na linha de caminhamento, espelhos de no máximo 9½" e corrimãos de 34"–38". Não são cálculos de engenharia; quem decide é o órgão municipal de aprovação de obras.

## Como os degraus são calculados

A altura entre o piso do nível e o nível acima é dividida em espelhos iguais de no máximo 7¾", e cada piso tem 10" de profundidade (ambos podem ser alterados em **Propriedades**). Um patamar conta como um degrau; degraus de leque são três degraus dispostos em leque ao redor do canto interno. Ao alterar a altura de um nível, todas as escadas nele são calculadas novamente.

:::warning
Espelhos de 7¾", pisos de 10", largura de 36", altura livre de 6'-8" e corrimãos de 34"–38" são valores padrão rotulados segundo o código residencial usual, não cálculo de engenharia. **Propriedades** indica quais são atendidos; o responsável pela aprovação da obra decide o que se aplica.
:::

## Alterar uma escada

Selecione-a (clique nela na planta ou na visualização 3D) e altere em **Propriedades**: seu tipo e giro, largura, espelho mais alto, profundidade do piso, corrimãos e a altura deles, e **Recortar o piso acima** para o poço de escada. Os espelhos e pisos resultantes aparecem embaixo.

## O poço de escada

Quando o nível acima tem um piso, a escada o recorta onde os degraus teriam menos de 6'-8" de altura livre. O recorte acompanha a escada e desaparece quando ela é excluída.

## Desenhar um guarda-corpo

1. Abra {{ui:Build}} e escolha {{ui:Guarda-corpo}}.
2. Escolha **Guarda-corpo** (36" de altura) ou **Corrimão**, e sua altura.
3. Clique ao longo da borda — um deck, uma sacada, em torno de um poço de escada — e clique duas vezes ou pressione {{key:Enter}} para terminar.

Os guarda-corpos recebem postes nas extremidades e nas quinas, e balaústres com vãos menores que 4". Selecione um para alterar seu tipo, sua altura ou a distância acima do piso em que ele começa.

## Desenhar uma cerca

Escolha **Cerca** na mesma ferramenta de guarda-corpo, defina sua altura (1800 mm como ponto de partida), clique ao longo da linha da cerca e pressione {{key:Enter}}.

- A cerca recebe um poste em cada extremidade e em cada quina, e um poste no máximo a cada 2.4 m entre eles. Uma cerca de painel tem um painel entre os postes; uma cerca de ripas tem duas travessas. Essas medidas são escolhas usuais, não exigência de norma: as regras locais limitam a altura de uma cerca.
- É um único elemento no modelo (um IfcRailing chamado Fence) com um conjunto de propriedades {{ui:CadCraft_Fence}}: estilo, altura, postes, painéis, travessas, portões, comprimento e área dos painéis. Uma única etapa de desfazer.
- Não desenhados aqui: portões (o gerador do CivilCraft os distribui), balaústres simples, o terreno (a cerca fica sobre o nível) e a seleção de um único poste.

## O que é salvo

Uma escada é salva como uma escada IFC feita de lances de escada (com seus espelhos, pisos, altura do espelho e comprimento do piso), patamares, degraus de leque e corrimãos; o poço de escada é uma abertura na laje do piso acima. Os guarda-corpos são IfcRailings com seu comprimento e o número de balaústres e postes.
