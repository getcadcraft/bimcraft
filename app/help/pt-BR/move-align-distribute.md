---
title: Mover, copiar, alinhar e distribuir elementos da edificação
summary: Mova paredes, pisos, pilares e itens colocados por um ponto-base e um segundo ponto ou uma distância digitada, copie-os enquanto avança e alinhe-os ou espace-os igualmente, na planta ou a partir de uma escolha em 3D.
keywords: mover, copiar, alinhar, distribuir, espaçamento, deslocamento, ponto-base, vetor de deslocamento, paredes, pilares, pisos, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## O que você vai fazer

Desloque uma parede, um pilar, um piso ou um item da biblioteca colocado para um novo lugar, faça cópias dele ou alinhe vários, sem redesenhá-los.

## Nomes e teclas

Os comandos se chamam {{ui:Move}}, {{ui:Align}} e {{ui:Distribute}}, e você pode digitar `MOVE`, `ALIGN` e `DISTRIBUTE` na linha de comando, como no aplicativo de desenho CadCraft. Uma diferença: no BimCraft {{key:M}} é Medir, então Mover tem a sua própria tecla, {{key:Shift+M}}. As ferramentas estão no menu {{ui:Build}}.

## Mover

1. Escolha o que mover, na planta ou na vista 3D. Paredes, pisos, pilares e itens da biblioteca colocados podem entrar em uma mesma escolha.
2. Pressione {{key:Shift+M}} ou escolha {{ui:Move}}.
3. Clique em um ponto-base e depois em um segundo ponto. Ou, após o ponto-base, digite uma distância e pressione {{key:Enter}}: ela segue a direção em que o ponteiro aponta a partir do ponto-base. Você também pode digitar `dx,dy` (ou `@dx,dy`), ou `comprimento<ângulo`.
4. Pressione {{key:C}} para ativar {{ui:Copy}}: cada movimento então faz cópias e fica pronto para o seguinte. Pressione {{key:Esc}} para parar.
Os dois pontos também podem ser clicados na vista 3D: com Mover ativado, o ponteiro encontra a altura do piso do nível, então um clique ali é um ponto da planta. Mantenha {{key:Shift}} pressionado ao clicar para escolher outro elemento. Use uma vista de planta, Superior, Frontal ou Lateral, como preferir: os pontos sempre ficam nesse nível.

Uma parede leva consigo as suas portas e janelas. Um piso desenhado leva as suas aberturas. Ambientes, pisos e forros que seguem as paredes são atualizados. Paredes que se uniram à parede movida permanecem onde estão.

Cada movimento é uma alteração: um {{key:Mod+Z}} o desfaz, e ele é enviado a todos em uma sessão do Live TeamWork. Um item da biblioteca colocado não pode ser copiado dessa forma; use {{ui:Edit}} › {{ui:Copy}} e {{ui:Paste}}.

## Alinhar

Escolha dois ou mais elementos, escolha {{ui:Align}} e depois um lado (esquerda, centro, direita, topo, meio ou base) e o que alinhar: o conjunto escolhido, o primeiro escolhido, o último escolhido ou um ponto que você clicar. Pressione {{ui:Align}} na barra.

## Distribuir

Escolha três ou mais elementos, escolha {{ui:Distribute}} e depois uma direção (na horizontal ou na vertical) e o espaçamento: intervalos iguais entre eles ou centros iguais. Os dois das extremidades permanecem onde estão.

Paredes que Alinhar ou Distribuir movem mantêm as suas uniões, como em Mover: uma parede unida a uma parede movida desliza a extremidade ao longo da própria reta para continuar unida, divisórias que se encostam nela vêm junto, e duas paredes unidas que são ambas movidas mantêm o canto onde as suas novas retas se encontram. Ambientes permanecem fechados. É uma etapa em **Alterações**.
