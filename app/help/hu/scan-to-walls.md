---
title: Falak és ajtók telefonos vagy lézeres szkennelésből
summary: Alakítson egy helyiségről készült szkennelést javasolt falakká, ajtókká és helyiségekké, amelyeket egyenként fogadhat el.
keywords: szkennelés, telefonos szkennelés, lidar, pontfelhő, falak szkennelésből, ajtók szkennelésből, helyiségszkennelés, ply, e57, las, obj, javaslat
from: a4ef0f10
---

## Mit csinál

Ha megnyitott egy szkennelést (pontfelhő, például PLY, E57 vagy LAS, vagy háló, például OBJ), a BimCraft elvágja a szkennelést az alaprajzi magasságnál, az épülethez igazítja, és hosszú, vékony pontsorokat keres: ezek a falak. Két, egy vonalon lévő sor közötti, ajtó szélességének megfelelő rés egy ajtós falat jelent. A tér köré záródó falak helyiséget alkotnak.

Addig semmi sem rajzolódik ki, amíg el nem fogadja. A falak és ajtók javaslatok listájaként érkeznek (Javaslat módú módosítások): tartsa meg a helyeseket, utasítsa el a többit, és minden megtartott elem egyetlen visszavonási lépésben rajzolódik ki. A helyiségek maguktól jelennek meg.

## Mit ellenőriz

A nem záródó falak, a falvastagságnál rövidebb falszakaszok, és a fal nélküli, ajtónyi rések problémaként jelennek meg, pozíciójukkal együtt, hogy a szkennelésnél megnézhesse őket.

## Ellenőrzésig nem igazolt

A szkennelésből elfogadott falak, ajtók és helyiségek nem igazoltként jelennek meg: szaggatott doboz és „?” jel látszik az alaprajzon, amíg ellenőrzöttnek nem jelöli őket. Lásd [Elemek jelölése ellenőrzöttként vagy helyszínileg igazoltként](topic:verification).

## Amit nem tud

- A két egymásra merőleges irányban futó falakat találja meg. Ferde vagy görbe falat nem talál meg.
- Egyszerre egy szintet dolgoz fel. Ablakokat nem talál (az ablak csak akkor rés, ha a vágás a könyöklő magasságában van).
- Generált helyiségszkenneken és hálókon próbálták ki, valódi telefonos szkenneléseken még nem. Hogy valódi szkenneléseken mennyire jó (hosszú séta közbeni eltolódás, bútorok a falnál, üveg, nyitott ajtók), nem ismert; a valódi szkennelésekre való hangolás a következő lépés. Minden javaslatot ellenőrizzen a szkennelés alapján, mielőtt elfogadja.
