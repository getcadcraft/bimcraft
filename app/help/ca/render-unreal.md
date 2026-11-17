---
title: Envia l'escena a un motor de videojocs
summary: Studio pot escriure l'escena en un projecte d'Unreal Engine i mantenir-la al dia en cada enviament; les vostres edicions viuen en una capa que CadCraft mai no escriu. El connector que l'obre encara no està publicat.
keywords: unreal, unreal engine, motor de videojocs, enllaç, envia, escena USD, projecte, en directe, càmera de cinema, cua de renderitzat de pel·lícula
from: 154d55ef
---

A CadCraft Studio, la llista Motor pot contenir un **enllaç** a un projecte d'Unreal Engine. Només en un sentit: de CadCraft a Unreal.

## Envia l'escena

1. Trieu l'entrada d'Unreal a la llista Motor. La primera vegada, Studio us demana que trieu la carpeta del projecte (la que té el fitxer `.uproject`); la recorda.
2. Feu clic a {{ui:Envia}}. Studio escriu `CadCraft/<file name>/` dins del projecte: l'escena com a fitxer USD, el fitxer de configuració, els perfils de llum i dos fitxers petits de capa.
3. Canvieu el model, deseu i torneu a enviar. Només se substitueixen l'escena i el fitxer de configuració.

## Les vostres edicions estan segures

L'escenari que obre Unreal és una capa arrel petita feta una sola vegada, amb dues capes per sota: **la vostra** a dalt (`<name>.user.usda`, buida al principi, mai no reescrita per CadCraft) i l'escena de CadCraft a sota. Les edicions que deseu a la vostra capa es mantenen quan es torna a enviar l'escena. Els llums i altres actors que poseu al nivell d'Unreal són fora de l'escenari i tampoc no es toquen.

## Sense Studio

Al navegador, o en un ordinador on Studio no troba Unreal, trieu **Carpeta de projecte Unreal (.zip)** a la llista Motor i feu clic a {{ui:Renderitza}}. Desa la mateixa carpeta com a zip: descomprimiu-la a la carpeta `CadCraft` del projecte. Deixeu **Inclou els fitxers de l'escenari** activat la primera vegada; desactiveu-lo en els desaments següents, així el zip només conté l'escena i el fitxer de configuració i la vostra capa mai no se substitueix.

:::note
El connector d'Unreal que obre l'escenari, aplica el sol, els llums, les càmeres i l'exposició, segueix cada enviament i renderitza una càmera **encara no està publicat** i no s'ha provat a Unreal. Mentrestant, Envia posa els fitxers al projecte i les eines USD del mateix Unreal els poden obrir. Windows és el primer sistema; macOS el seguirà.
:::
