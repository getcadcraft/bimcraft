---
title: Rácsok és oszlopok
summary: Rácsvonalak kialakítása számozott és betűs buborékokkal, távolság szerint vagy egyenként, falak és oszlopok rajzolása a vonalak mentén, és ezek megjelenítése alaprajzokon, homlokzatokon és metszeteken.
keywords: rács, rácsok, rácsvonal, oszlopháló, tengely, tengelyek, buborék, szerkezeti rács, 1 2 3, A B C, oszlop, oszlopok, pillér, tartóoszlop, fogás (snap), IfcGrid, IfcColumn
from: bf99a8f7
---

## Mit fog csinálni

Rácsra helyezze el az épületet, majd rajzoljon falakat és helyezzen el oszlopokat a rácsvonalai mentén.

## Teljes rács elhelyezése

1. Kapcsolja be a {{ui:Rajzolás}} lehetőséget, majd válassza a {{ui:Build}} › {{ui:Rács}} lehetőséget.
2. Kattintson a {{ui:Rács elhelyezése…}} gombra. Adja meg, hány **számozott vonal** (1, 2, 3…) és hány **betűs vonal** (A, B, C…) legyen, és mekkora legyen a köztük lévő távolság. Megadhat egyetlen távolságot, vagy több értéket vesszővel elválasztva egyenlőtlen mezőkhöz (például `20', 24', 20'`). Az {{ui:Az utolsó vonalakon túl}} azt adja meg, meddig nyúljon minden vonal a másik fajta külső vonalain túl, az {{ui:Elforgatva (fok)}} pedig az egész rácsot forgatja el.
3. Kattintson az {{ui:Elhelyezés}} gombra, majd kattintson arra a helyre, ahol az első metszéspont (1 / A) lesz. Az előnézet követi a mutatót.

A számozott vonalak az alaprajz függőleges irányában futnak, és vízszintesen egymástól távolságra helyezkednek el; a betűs vonalak vízszintesen futnak, és függőlegesen helyezkednek el. A betűk közül kimarad az I és az O, ahogy a rajzokon is, így nem lehet őket 1-essel és 0-val összetéveszteni.

## Rácsvonalak egyenkénti rajzolása

A {{ui:Rács}} bekapcsolt állapotában kattintson arra a pontra, ahol a vonal kezdődik, és arra, ahol véget ér. A vonal a futási irányának következő címkéjét kapja (3 után a 4, B után a C). A leállításhoz nyomja meg az {{key:Esc}} billentyűt.

## Rácsvonal módosítása

A {{ui:Rács}} bekapcsolt állapotában kattintson egy vonalra a kijelöléséhez. Írjon be új {{ui:Címke}} értéket, majd nyomja meg az {{key:Enter}} billentyűt, vagy kattintson az {{ui:A vonal törlése}} gombra (vagy nyomja meg a {{key:Delete}} billentyűt). A {{ui:Buborékok}} beállítás a buborékokat a vonalak mindkét végére, az egyik végére vagy sehova sem helyezi el. Minden módosítás egy lépés: a {{key:Mod+Z}} visszavonja.

## Rajzolás a rács mentén

A {{ui:Fal}} eszköz, a {{ui:Oszlop}} eszköz és a többi rajzolóeszköz a rácsvonalakra és azok metszéspontjaira illeszkedik (a fogásjel egy kis kör, benne kereszttel).

**Oszlopok:** válassza a {{ui:Build}} › {{ui:Oszlop}} lehetőséget, adja meg az alakot (téglalap vagy kör), a méretet, és azt, hogy az oszlop a **fölötte lévő szintig** fusson-e, vagy rögzített magasságig, majd kattintson. A {{ui:Minden rácsmetszéspontban}} minden olyan metszéspontba helyez oszlopot, ahol még nincs. Az oszlop alakját, méretét vagy magasságát a {{ui:Tulajdonságok}} alatt módosíthatja; a {{key:Delete}} eltávolítja. A fölötte lévő szintig futó oszlopok követik azt, ha annak magassága változik.

## Amit látnia kell

- A rács minden szint alaprajzán, a vonalak végein buborékkal és címkével.
- Rácsvonalak a rajzkészletben: az alaprajzokon, valamint a homlokzatokon és metszeteken, ahol a vonal élről látszik, a buborékkal az épület fölött. Lásd [Homlokzatok, metszetek és rajzlapok](topic:sheets).
- Az IFC-fájlban: egy rács az épülethez (IfcGrid; a számozott vonalai az egyik, a betűs vonalai a másik listában), az oszlopok pedig IfcColumn elemként, a méretükkel, magasságukkal és mennyiségeikkel. Más BIM-programok mindkettőt megjelenítik.

:::note
Egy másik programból származó fájl rácsa megjelenik, és az eszközök illeszkednek hozzá, de a vonalai itt nem módosíthatók.
:::
