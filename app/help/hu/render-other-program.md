---
title: Kép rajzolása másik programmal
summary: A saját útkövetőnk rajzolja a Renderelés képet; másik program csak egy renderelőmotor-bővítményen keresztül rajzolhat a CadCraft Studióban. Mi kerül át, és miért nem kínálunk néhány programot soha.
keywords: render, motor, külső program, bővítménymotor, studio, háttér, renderelési sor, usd, gltf, rajzolja, blender, gpl
from: 652b413c
---

A {{ui:Render}} képét a **saját motorjaink** rajzolják: a Gyors és az Útkövető, a böngészőben és a CadCraft Studióban. Másik program csak akkor tud rajzolni, ha egy **renderelőmotor-bővítmény** hozza: lásd [Renderelőmotor hozzáadása bővítménnyel](topic:render-engine-addons). A jelenetet másik programba vinni és ott tovább dolgozni a [jelenet megnyitása másik programban](topic:render-open-in) vagy a [jelenet küldése játékmotornak](topic:render-unreal) lehetőséggel lehet.

## Kép rajzolása bővítmény motorjával

1. Kapcsolja be a bővítményt a Beállítások › Bővítmények részben. Motorja megjelenik a {{ui:Render}} Motor listájában.
2. Válassza ki. A saját beállításai a Motor lista alatt jelennek meg.
3. Kattintson a {{ui:Render}} gombra. A Studióban a bővítmény első programfuttatásakor a Studio a saját párbeszédpanelében kérdez. A haladás rajzolás közben látszik; a {{ui:Stop}} leállítja. A kép azzal a motorral megjelölve jelenik meg, amely rajzolta.

Egy JavaScriptben írt motor a böngészőben is fut. Egy helyi programot futtató motor csak a Studióban fut; a böngészőben fájlként jelenik meg, amelyet menteni kell.

## Mi kerül át

A motor egy **csomagot** kap: a modellt USD-fájlként (és glTF-fájlként, ha azt kéri), valamint egy beállításfájlt a pontos anyagértékekkel, a nappal és az éggel, minden bekapcsolt lámpával a teljesítményével és fényprofiljával, a kamerával és az expozícióval. Minden program a maga módján világít, hangol és mintavételez, ezért a képek kamerában, napban, lámpákban és expozícióban hasonlóak, de nem pixelre pontosan azonosak.

## Programok, amelyeket a CadCraft soha nem futtat

A CadCraft soha nem indít GNU GPL licenc alatt álló programot, és soha nem sorolja fel motorként vagy Megnyitás programban célként. A Blender is ilyen, ezért nincs a Motor listában. A {{ui:Render}} által mentett USD- vagy glTF-fájl ugyanúgy megnyílik benne, mint bármely más, ezeket olvasó programban.

:::note
A panorámakamerák és a sztereó kamerák, valamint az égboltkép (helyette az ég színei használatosak) nem kerülnek át másik programba. Másik programban végzett semmi nem jön vissza a modellbe.
:::
