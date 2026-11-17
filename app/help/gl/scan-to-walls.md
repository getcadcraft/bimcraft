---
title: Muros e portas dun escaneo con teléfono ou láser
summary: Converta un escaneo dun cuarto en muros, portas e cuartos propostos que acepta un a un.
keywords: escaneo, escaneo con teléfono, lidar, nube de puntos, muros desde escaneo, portas desde escaneo, escaneo de cuarto, ply, e57, las, obj, suxerir
from: a4ef0f10
---

## Que fai

Cun escaneo aberto (unha nube de puntos como PLY, E57 ou LAS, ou unha malla como OBJ), BimCraft corta o escaneo á altura da planta, xírao para que quede en escuadra co edificio e busca tramos longos e finos de puntos: eses son muros. Unha fenda do ancho dunha porta entre dous tramos nunha mesma liña convértese nun muro cunha porta. Os muros que pechan un espazo forman un cuarto.

Nada se debuxa ata que o acepte. Os muros e as portas chegan como unha lista de propostas (son cambios en modo Suxerir): conserve as correctas, rexeite as demais, e todo o que conserve debúxase nun só paso de Desfacer. Os cuartos aparecen por si mesmos.

## Que comproba

Os muros que non pechan, os tramos de muro máis curtos que o grosor dun muro, e unha fenda do tamaño dunha porta sen muro ao redor, notifícanse como Problemas cunha posición, para que mire o escaneo alí.

## Sen verificar ata comprobar

Os muros, as portas e os cuartos que acepte dun escaneo márcanse como non verificados: unha caixa de trazos e un "?" na planta ata que os marque como comprobados. Vexa [Marcar elementos como comprobados ou verificados en obra](topic:verification).

## O que non pode facer

- Atopa muros que van en dúas direccións perpendiculares. Un muro diagonal ou curvo non se atopa.
- Traballa unha planta de cada vez. As xanelas non se atopan (unha xanela só é unha fenda cando o corte está á altura do peitoril).
- Probouse con escaneos de cuartos xerados e con mallas, aínda non con escaneos dun teléfono real. Non se sabe o bo que é cun escaneo real (deriva nun percorrido longo, mobiliario contra os muros, vidro, portas abertas), e axustalo con escaneos reais é o seguinte paso. Comprobe cada proposta contra o escaneo antes de aceptala.
