---
title: Comprobar tubaxes e condutos contra a estrutura
summary: Execute os conxuntos de interferencias prefabricados de tubaxes e condutos contra muros, laxes, vigas e piares, localice os tramos máis próximos á estrutura do que permiten o seu illamento e unha separación, e liste os ocos que os tramos precisan a través de muros e laxes en CSV e BCF.
keywords: mep, interferencia, comprobación de interferencias, coordinación, estrutura, muros, laxes, vigas, piares, distancia libre, interferencia branda, illamento, separación, oco, ocos, paso, manga, perforación, obra auxiliar, bcf, csv
from: 2d597f01
---

## Que vai facer

Asegúrese de que as instalacións encaixan no edificio: o que choca coa estrutura, o que pasa demasiado preto dela e onde os muros e as laxes necesitan furados. Abra {{ui:Comprobación de interferencias}} no panel da esquerda; a sección de tubaxes e condutos contra a estrutura está debaixo da comprobación habitual.

## Interferencias duras

As dúas listas de conxuntos ofrecen agora tamén **Tubaxes e condutos**, **Muros**, **Laxes e cubertas**, **Vigas**, **Piares** e **Estrutura** (os catro), co número de elementos que contén cada un. Prema {{ui:Tubaxes e condutos × estrutura}} para escoller o primeiro e o último e executar a comprobación; ou escolla vostede calquera par e prema {{ui:Executar}}. Vexa [Comprobar interferencias](topic:clash-check).

## Distancias libres

Algunhas instalacións precisan espazo ao seu redor: o seu illamento e espazo para traballar ou para unha manga.

1. Dálle a un tramo de tubaxe ou conduto o grosor de **Illamento** nas Propiedades (non se debuxa nada para iso).
2. Escriba a **Separación ao redor de tubaxes e condutos** (mm) na comprobación de interferencias.
3. Prema {{ui:Comprobar distancias libres}}: cada peza máis próxima a un muro, laxe, viga ou piar do que o seu illamento máis a separación aparece listada coa distancia que ten e a distancia que precisa. Prema unha liña para ver as dúas.

Unha peza que atravesa un muro ou unha laxe é un oco, non unha distancia libre, e aparece listada alí no seu lugar.

## Ocos necesarios

Prema {{ui:Ocos necesarios}}. Onde a liña central dun tramo atravesa un muro ou unha laxe, BimCraft lista o oco que precisa: redondo para unha tubaxe ou conduto redondo, e en caso contrario rectangular, tan grande como o tamaño exterior do tramo máis o dobre do seu illamento máis o dobre da separación, centrado onde o tramo cruza. Prema unha liña para ver o tramo e o muro ou a laxe.

- {{ui:Ocos como CSV}}: unha liña por oco co tramo, o seu tamaño e illamento, o tamaño do oco, o elemento que atravesa e o seu GlobalId, o nivel, as coordenadas X, Y e Z do centro e a profundidade que atravesa o tramo.
- {{ui:Ocos como incidencias BCF}}: unha incidencia por oco, cunha cámara que o mira e co tramo e o elemento escollidos, para o programa do enxeñeiro de estruturas.

:::note
Non se corta nada: os ocos son unha lista para quen os dimensiona. A separación ten que escribila vostede; ningún código di canto debe medir un oco. As vigas e os piares son interferencias, non ocos: se unha tubaxe pode atravesar un deles é decisión do enxeñeiro de estruturas.
:::
