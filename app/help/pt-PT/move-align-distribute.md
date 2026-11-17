---
title: Mover, copiar, alinhar e distribuir elementos do edifício
summary: Desloque paredes, pavimentos, pilares e itens colocados por um ponto base e um segundo ponto ou uma distância escrita, copie-os à medida que avança, e alinhe-os ou espace-os de forma uniforme, na planta ou a partir de uma escolha em 3D.
keywords: mover, copiar, alinhar, distribuir, espaçamento, offset, ponto base, deslocamento, paredes, pilares, pavimentos, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## O que vai fazer

Desloque uma parede, um pilar, um pavimento ou um item de biblioteca colocado para um novo lugar, faça cópias deles, ou alinhe vários sem os voltar a desenhar.

## Nomes e teclas

Os comandos chamam-se {{ui:Mover}}, {{ui:Alinhar}} e {{ui:Distribuir}}, e pode escrever `MOVE`, `ALIGN` e `DISTRIBUTE` na linha de comandos, tal como na aplicação de desenho CadCraft. Uma diferença: no BimCraft {{key:M}} é Medir, por isso Mover tem a sua própria tecla, {{key:Shift+M}}. As ferramentas estão no menu {{ui:Compilação}}.

## Mover

1. Escolha o que mover, na planta ou na vista 3D. Paredes, pavimentos, pilares e itens de biblioteca colocados podem ir todos numa só escolha.
2. Prima {{key:Shift+M}} ou escolha {{ui:Mover}}.
3. Clique num ponto base e depois num segundo ponto. Ou, depois do ponto base, escreva uma distância e prima {{key:Enter}}: move-se na direção para onde o cursor aponta a partir do ponto base. Também pode escrever `dx,dy` (ou `@dx,dy`), ou `comprimento<ângulo`.
4. Prima {{key:C}} para ativar {{ui:Copiar}}: cada movimento passa a fazer cópias e fica pronto para o seguinte. Prima {{key:Esc}} para parar.

Os dois pontos também podem ser clicados na vista 3D: com Mover ativo, o cursor encontra a altura do pavimento do nível, por isso um clique aí é um ponto da planta. Mantenha {{key:Shift}} premida ao clicar para escolher outro elemento. Use uma planta, Superior, Frontal ou Lado, conforme preferir: os pontos ficam sempre nesse nível.

Uma parede leva consigo as suas portas e janelas. Um pavimento desenhado leva as suas aberturas. Os compartimentos, pavimentos e tetos que seguem as paredes são atualizados. As paredes que se ligavam à parede movida mantêm-se onde estão.

Cada movimento é uma alteração: um {{key:Mod+Z}} desfaz-o, e propaga-se a todos numa sessão Live TeamWork. Um item de biblioteca colocado não pode ser copiado assim; use {{ui:Editar}} › {{ui:Copiar}} e {{ui:Colar}}.

## Alinhar

Escolha dois ou mais elementos, escolha {{ui:Alinhar}}, depois um lado (esquerda, centro, direita, topo, meio ou base) e a que alinhar: o conjunto escolhido, o primeiro escolhido, o último escolhido, ou um ponto que clicar. Prima {{ui:Alinhar}} na barra.

## Distribuir

Escolha três ou mais elementos, escolha {{ui:Distribuir}}, depois uma direção (na horizontal ou na vertical) e o espaçamento: intervalos iguais entre eles ou centros iguais. Os dois das extremidades mantêm-se onde estão.

As paredes que Alinhar ou Distribuir movem mantêm as suas ligações, tal como em Mover: uma parede ligada a uma parede movida desliza a sua extremidade ao longo da sua própria reta para continuar ligada, as divisórias que nela encostam vêm com ela, e duas paredes ligadas que são ambas movidas mantêm o canto onde as suas novas retas se encontram. Os compartimentos mantêm-se fechados. É um passo em **Alterações**.
