---
title: Percorrer o edificio con persoas
summary: Unha evacuación ou as chegadas dun día normal polos seus cuartos, portas e escaleiras, con colas onde o edificio se estreita, o percorrido máis longo ata unha saída desde cada cuarto e os resultados como Problemas. Un modelo de multitude aproximado para decisións de deseño, non un certificado de protección contra incendios.
keywords: persoas, evacuación, saída de emerxencia, fuga, saída, distancia de percorrido, cola, multitude, fluxo, ancho de porta, escaleiras, chegadas, estrangulamento, simulación, ocupantes, peón, e se, porta bloqueada
from: 84aa8920
---

A sección {{ui:Persoas no edificio}} do panel esquerdo fai percorrer persoas polos cuartos, portas e escaleiras do modelo IFC aberto. Non se muda nada no modelo e non se envía nada.

:::warning
Isto é **unha axuda para o deseño, non un certificado de protección contra incendios**. Non coñece o lume, o fume, o pánico, as diferenzas de mobilidade nin o que lle pide un código. Os límites son seus: o percorrido máis longo ata unha saída e o tempo dispoñible son números que escribe vostede, e ningún se supón.
:::

## Executar

1. Abra un modelo con cuartos e portas pechados. Unha porta cun cuarto só dun lado é unha saída; unha porta entre dous cuartos os une; unha escaleira une os cuartos nos seus extremos.
2. Escolla **Evacuación** (todos camiñan ata unha saída), **Chegadas** (todos entran e camiñan ata un cuarto) ou **Intercambio** (as persoas dos cuartos saen mentres entran tantas como saen), e a superficie de chan por persoa. Os cuartos con nome de corredor, escaleira, vestíbulo ou aseo non albergan a ninguén.
3. Prema {{ui:Executar}}. Obtén o tempo en que sae a última persoa (e cando sae a metade e nove de cada dez), a cola en cada porta e escaleira, o cuarto co percorrido máis longo, e unha planta que reproduce a execución.

## E se

Marque {{ui:Pechada}} nunha porta da táboa e execute de novo: a xente busca outro camiño, ou os cuartos sen saída lístanse como erros. Unha porta do dobre de ancho baleira un cuarto moito antes; a táboa mostra onde están as colas.

## Como funciona

Cada cuarto é unha cuadrícula, así que a xente camiña arredor das esquinas, non a través dos muros. A velocidade baixa a medida que se enche un cuarto (S = 1,4 (1 − 0,266 D) m/s, D en persoas por m²). Unha porta deixa pasar 1,3 persoas por segundo por cada metro do seu ancho, menos 150 mm por cada lado; unha escaleira 1,0 e camiñar máis lento. As persoas agardan nunha cola por orde de chegada. Un número de execución repite exactamente a mesma execución.

O asistente pode executar o mesmo: pida unha evacuación, ou o percorrido máis longo ata unha saída desde cada cuarto.

## Persoas en cada cuarto

Abra {{ui:Persoas en cada cuarto}} para escribir un número para calquera cuarto. Unha caixa en branco usa a cifra de superficie de chan (mostrada en gris); 0 baleira un cuarto. Os seus números úsanse na execución e consérvanse neste navegador.

## Fluxo en sentido contrario nas portas

En **Intercambio**, as persoas que saen e as que entran cruzanse nas mesmas portas. Cando unha porta deixa pasar a alguén no sentido contrario xusto detrás da última persoa, conserva unha parte da súa taxa (0,8 aquí; unha suposición, xa que os valores publicados varían), e a táboa conta os cambios de sentido. Unha porta que cambia de sentido a miúdo lístase en Problemas como nota.

## Escaleiras e descansos

Cada descanso dunha escaleira custa a quen camiña un segundo para xirar (unha suposición). Unha escaleira recta non ten ningún; unha escaleira en L ou en U ten un. A taxa da escaleira segue vindo do ancho do seu tramo.

## Na vista 3D

Marque {{ui:Mostrar as persoas na vista 3D}} e os peóns aparecen como figuras no modelo, coloreadas segundo o que fan, e móvense cando reproduce a execución. Non se engade nada ao modelo.
