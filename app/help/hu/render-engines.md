---
title: Válassza ki, melyik program rajzolja a képet
summary: A Renderelés párbeszédpanel Motor-választása: saját két motorunk, más programok a CadCraft Studióban, és mit csinál helyette a web.
keywords: render, motor, renderelő, renderelőmotor, bővítmény, studio, külső program, rajzolja, renderelési sor, bővítménymotor
from: 44a1ef5e
---

A {{ui:Render}} párbeszédpanelen a **Motor** választás a {{ui:Mode}} fölött található. Saját két motorunk mindig rendelkezésre áll, és mindenhol működik; bővítmények újabbakat adhatnak hozzá, a CadCraft Studióban pedig a lista azokat a programokat is tartalmazza, amelyek átveszik a jelenetet.

| Motor | Mit csinál | Hol |
|---|---|---|
| Beépített: Gyors | A gyors állókép: nappali fény, lágy árnyékok, üveg- és fémhatás, másodpercek alatt | A böngészőben és a Studióban |
| Beépített: Útkövető | Felületek közötti fényvisszaverődés a grafikus kártyán vagy a processzoron, a renderelési sor, és a hálózaton lévő többi számítógép | A böngészőben és a Studióban |
| Egy bővítmény motorja | Rajzolja a képet, és visszaadja: lásd [Kép rajzolása másik programmal](topic:render-other-program) | A böngészőben (JavaScriptben írt motor) vagy a Studióban (programot futtató motor) |
| Program, amely átveszi a jelenetet | A Studio a jelenetet a mappájába teszi, és szinkronban tartja | Studio |
| Megnyitás programban … | Elmenti a jelenetet, és megnyitja egy programban; semmi nem jön vissza: lásd [A jelenet megnyitása másik programban](topic:render-open-in) | A web fájlt ment |

## A választás működése

- A Gyors vagy az Útkövető kiválasztása a Módust is átállítja, és fordítva. A párbeszédpanel többi része nem változik azoknak, akik soha nem használnak másik motort.
- A nem elérhető motor a listában marad, az okkal együtt („nem található”, „újabb verzió kell”); nem választható. A böngészőben a csak a Studióban futó motor a „fájlt ment” feliratot mutatja: ekkor a {{ui:Render}} a jelenetet és a beállításait egy fájlba menti, amelyet azzal a programmal kell megnyitni.
- A választás a fájl renderbeállításaival együtt mentődik, és az utoljára választott motor lesz a kezdőmotor azoknak a fájloknak, amelyeknek nincs saját választásuk.
- Másik programmal készült kép megjelöli, melyik program rajzolta, és annak verzióját, a párbeszédpanelen és a renderelési sorban egyaránt. A [Renderelés](topic:render) oldal ígéretei csak **saját** motorjainkra vonatkoznak: egy másik program a saját módján világít, hangol és mintavételez, ezért két kép ugyanabból a jelenetből kamerában, napban, lámpákban és expozícióban hasonló, de nem pixelre pontosan azonos.

## Mit kap minden motor

A jelenet csomagként megy egy másik programhoz: a modell USD-fájlként (ugyanaz a fájl, amelyet a [USD-ként mentés](topic:usd) ír), és egy beállításfájl, amely azt tartalmazza, amiben egy USD-importőrben nem lehet megbízni: a pontos anyagértékeket, a bekapcsolt lámpákat a teljesítményükkel és fényprofiljukkal, a napot, az égboltot, az expozíciót és a kamerát úgy, ahogy a párbeszédpanel rajzolná. Semmit nem töltünk fel sehová.

## A renderelési sor

Másik programnak szánt kép várakozhat [a renderelési sorban](topic:render#the-render-queue) a saját képeinkhez hasonlóan; a feladata megjegyzi, melyik motorhoz tartozik.
