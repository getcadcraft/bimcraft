---
title: Böngészők, eszközök és memória
summary: Miben különbözik a BimCraft a Chrome, Edge, Firefox és Safari között, Mac, Windows és Linux rendszeren, egéren, érintőpadon vagy érintéssel, és mekkora fájlt bír el.
keywords: böngésző, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, táblagép, telefon, érintés, érintőpad, memória, nagy fájlok, webgl, teljesítmény
from: fd8acba1
---

A BimCraft a Chrome, Edge, Firefox és Safari jelenlegi verzióiban fut, Mac, Windows és Linux rendszeren. A 3D-nézethez WebGL kell, amellyel minden jelenlegi böngésző rendelkezik. Hogy az alkalmazások általában mit igényelnek, lásd: [Böngészők és számítógépek](common:browsers).

## Mappa megnyitása

| Böngésző | A {{ui:Mappa megnyitása}} ezt teszi | Mappa húzása | {{ui:Legutóbbi mappák}} |
|---|---|---|---|
| Chrome, Edge | A böngésző mappaválasztója, majd „Engedélyezi az oldalnak a fájlok megtekintését?”: kattintson a **Fájlok megtekintése** gombra | Megnyílik, kérdés nélkül | Igen, a kiválasztott vagy húzott mappákhoz |
| Firefox | A rendszer mappaválasztója | Megnyílik, kérdés nélkül | Nem |
| Safari | A rendszer mappaválasztója, egy **Feltöltés** gombbal (semmi nem töltődik fel) | Megnyílik, kérdés nélkül | Nem |

A háttérben: a Chrome és az Edge a File System Access választót használja, és meg tudja jegyezni a mappát. A Firefox és a Safari a régebbi mappaválasztót használja, amely a mappa minden fájlját egyszerre adja át, és nem jegyezhető meg. A húzott mappát minden böngészőben bejegyzésenként olvassa be.

:::chromium
A Brave és néhány más Chromium-alapú böngésző kikapcsolja a mappaválasztót. A BimCraft ekkor a rendszer mappaválasztóját használja, és a böngésző megkérdezheti: „Feltöltsön *n* fájlt erre a webhelyre?”. Semmi nem töltődik fel; a fájlok csak a lapra kerülnek. A mappa húzásával elkerülhető a kérdés.
:::

## Mac, Windows és Linux

- A {{key:Mod+S}} és {{key:Mod+Z}} billentyűparancsok Mac-en a Command, Windows és Linux alatt a Ctrl billentyű.
- A {{key:Ctrl+Shift+F}} (képernyőmódok) minden platformon a Control billentyű, Mac-en is.
- A fájlpárbeszédpanelek és a letöltési mappa a rendszeréé.

## Egér, érintőpad és érintés

| Beviteli eszköz | 3D-nézet | 2D-rajz |
|---|---|---|
| Egér | Bal húzással forgat, jobb húzással eltol, görgővel nagyít, kattintással választ | Bármely húzás eltol, görgővel nagyít, dupla kattintással illeszt |
| Érintőpad | Kattintva húzva forgat; a {{key:Shift}} vagy a {{key:Mod}} és húzás eltol; két ujjas görgetés vagy csippentés nagyít | Kattintva húzva eltol; két ujjas görgetés vagy csippentés nagyít |
| Érintés | Egy ujjal forgat; két ujjal csippent és eltol; koppintással választ | Egy ujjal eltol; még nincs csippentéses nagyítás; koppintson az {{ui:Illesztés}} gombra |

Mac érintőpadon a jobb kattintás két ujjas kattintás (vagy Control-kattintás). Lásd: [Billentyűk, egerek és érintőpadok](common:keys).

Táblagépek és telefonok meg tudnak nyitni egyetlen fájlt, és meg tudják nézni, de a képernyő kicsi, sok mobilböngésző nem tud mappát választani, a nagy modellek pedig nem biztos, hogy férnek a memóriájukba. A számítógép működik a legjobban.

## Nagy fájlok és memória

A BimCraft mindent, amit beolvas, a böngészőlap memóriájában tart. Hogy egy lap mennyit használhat, inkább a böngészőtől és a számítógéptől függ, mint a BimCraft-tól.

| Fájl | Mennyi olvasódik be | Mire számítson |
|---|---|---|
| IFC | A teljes fájl, és az abból épített 3D-geometria | A mérettől függ a számítógéptől és a böngészőtől; több száz megabájtos modell túl sok lehet egy laptopnak. 1,5 millió háromszög felett az élek ki vannak kapcsolva |
| Projekt- és családfájlok | Kb. 40 KB–100 KB, bármekkora is a fájl | Még a nagyon nagy központi modellek is pillanatok alatt megnyílnak, hálózati meghajtóról is |
| DWG és DXF | A teljes fájl | Nagyon nagy rajzoknál: „Ez a rajz nagyon nagy; csak egy része látható.” |
| Mappák | A fájllista, modellenként néhány kilobájt | Legfeljebb 20 000 fájl |

Ha egy lap kifogy a memóriából, a böngésző saját hibaoldalt jelenít meg („Aw, Snap!” a Chrome-ban, például). Zárja be a többi lapot, töltse újra a BimCraftot, és próbálja újra, vagy használjon több memóriával rendelkező számítógépet.

## Kapcsolódó

- [Online és offline](topic:online-offline)
- [Hibaelhárítás](topic:troubleshooting)
