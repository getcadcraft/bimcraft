---
title: Paredes e portas a partir de um escaneamento com celular ou laser
summary: Transforme um escaneamento de um ambiente em paredes, portas e ambientes propostos, que você aceita um a um.
keywords: escaneamento, escaneamento com celular, lidar, nuvem de pontos, paredes do escaneamento, portas do escaneamento, escaneamento de ambiente, ply, e57, las, obj, sugerir
from: a4ef0f10
---

## O que faz

Com um escaneamento aberto (uma nuvem de pontos como PLY, E57 ou LAS, ou uma malha como OBJ), o BimCraft corta o escaneamento na altura da planta, alinha-o em esquadro com a edificação e procura trechos longos e finos de pontos: são paredes. Uma lacuna do tamanho aproximado de uma porta entre dois trechos na mesma linha vira uma parede com uma porta. As paredes que fecham um espaço formam um ambiente.

Nada é desenhado até você aceitar. As paredes e portas chegam como uma lista de propostas (são alterações do modo Sugerir): mantenha as que estão certas, rejeite as outras, e tudo o que você mantiver é desenhado em uma única etapa de Desfazer. Os ambientes aparecem sozinhos.

## O que ele verifica

Paredes que não fecham, trechos de parede mais curtos que a espessura de uma parede e uma lacuna do tamanho de uma porta sem parede ao redor são informados como Problemas, com uma posição, para que você observe o escaneamento ali.

## Não verificado até ser conferido

As paredes, portas e ambientes que você aceita de um escaneamento ficam marcados como não verificados: uma caixa tracejada e um "?" na planta, até você marcá-los como conferidos. Veja [Marcar elementos como conferidos ou verificados em campo](topic:verification).

## O que não consegue fazer

- Encontra paredes que correm em duas direções perpendiculares. Uma parede diagonal ou curva não é encontrada.
- Um pavimento de cada vez. Janelas não são encontradas (uma janela só é uma lacuna quando o corte está na altura do peitoril).
- Foi testado com escaneamentos e malhas de ambientes gerados, ainda não com escaneamentos de um celular real. Não se sabe o quão bem funciona em um escaneamento real (desvio em um percurso longo, mobília encostada nas paredes, vidro, portas abertas); ajustá-lo com escaneamentos reais é o próximo passo. Confira cada proposta com o escaneamento antes de aceitá-la.
