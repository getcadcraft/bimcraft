---
title: Paredes e portas a partir de uma digitalização por telemóvel ou laser
summary: Transforme a digitalização de um compartimento em paredes, portas e compartimentos propostos, que aceita um a um.
keywords: digitalização, digitalização por telemóvel, lidar, nuvem de pontos, paredes a partir da digitalização, portas a partir da digitalização, digitalização de compartimento, ply, e57, las, obj, sugerir
from: a4ef0f10
---

## O que faz

Com uma digitalização aberta (uma nuvem de pontos como PLY, E57 ou LAS, ou uma malha como OBJ), o BimCraft corta a digitalização à altura da planta, põe-na em esquadria com o edifício e procura percursos longos e finos de pontos: são paredes. Um vão com cerca da largura de uma porta entre dois percursos na mesma linha torna-se uma parede com uma porta. As paredes que fecham um espaço formam um compartimento.

Nada é desenhado até aceitar. As paredes e portas chegam como uma lista de propostas (são alterações do modo Sugerir): mantenha as que estiverem certas, rejeite as restantes, e tudo o que mantiver é desenhado num único passo de anulação. Os compartimentos aparecem por si.

## O que verifica

Paredes que não fecham, troços de parede mais curtos do que a espessura da parede, e um vão do tamanho de uma porta sem parede à volta são assinalados como Problemas, com uma posição, para que possa observar a digitalização nesse ponto.

## Não verificados até confirmar

As paredes, portas e compartimentos aceites de uma digitalização ficam marcados como não verificados: uma caixa a tracejado e um "?" na planta, até os marcar como verificados. Ver [Marcar elementos como verificados ou verificados no local](topic:verification).

## O que não consegue fazer

- Encontra paredes que correm em duas direções perpendiculares. Uma parede diagonal ou curva não é encontrada.
- Um piso de cada vez. As janelas não são encontradas (uma janela só é um vão quando o corte está à altura do peitoril).
- Foi testado em digitalizações e malhas de compartimentos geradas, ainda não em digitalizações de um telemóvel real. Não se sabe bem como se comporta numa digitalização real (desvio numa caminhada longa, mobiliário encostado às paredes, vidro, portas abertas), e ajustá-lo com digitalizações reais é o passo seguinte. Verifique cada proposta contra a digitalização antes de a aceitar.
