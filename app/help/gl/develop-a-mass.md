---
title: Desenvolver unha masa de edificio a partir dun estudo de emprazamento
summary: Tome unha masa de edificio estudada na vista de emprazamento de CivilCraft e desenvólvea en niveis, muros e chans, conservando o lugar do emprazamento no mapa.
keywords: masa, masa de edificio, masificación, estudo de emprazamento, desenvolver, CivilCraft, entregar, niveis, muros, chans, pegada, xeorreferencia, IFC
from: 557b94d1
---

A vista de emprazamento de CivilCraft pode debuxar masas de edificios sobre unha parcela e probalas contra o terreo, os límites que escriba e o sol. **Desenvolver en BimCraft** abre alí BimCraft nunha lapela nova coas masas; **Masas como IFC** gárdaas como un ficheiro que abre aquí da forma habitual. En calquera caso, cada masa chega como un emprazamento, un edificio cun nivel por piso, e un bloque (a propia masa) que leva os seus datos.

## Desenvolver unha masa

1. Seleccione unha masa na vista 3D. Propiedades mostra o seu uso, pisos e altura de piso, pegada, superficie bruta de piso, como se asenta na pendente e a súa parcela.
2. Faga clic en **Desenvolver esta masa**.

Nun só paso de desfacer, cada nivel dese edificio recibe muros arredor da pegada (a pegada é a cara exterior dos muros; cada muro sobe ata o nivel de enriba, e o superior ten un piso de altura) e un chan baixo todo o edificio. O bloque substitúese, e o edificio conserva os datos do estudo no conxunto de propiedades `CadCraft_SiteMass`, marcado como desenvolvido. Non hai cuberta: unha cuberta depende do deseño.

## O lugar do emprazamento

Un ficheiro de CivilCraft grávase na unidade de lonxitude propia do proxecto e, cando o proxecto de CivilCraft tiña un sistema de coordenadas, leva esa conversión de mapa do proxecto. Desenvolver unha masa non a toca, así que o edificio segue onde o mapa indica.
