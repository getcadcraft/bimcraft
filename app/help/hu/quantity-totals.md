---
title: Mennyiségek összegzése, elemek listázása és terek kimutatása
summary: Elemek számlálása, hosszúságaik, területeik, térfogataik vagy bármely számtulajdonságuk összegzése bármely tulajdonság szerinti csoportosítással; elemenkénti sor listázása; vagy a terek kimutatása a területükkel és térfogatukkal. Mindegyik CSV-ként tölthető le.
keywords: mennyiség, mennyiségek, mennyiségkimutatás, mennyiségi kiírás, összesítés, összeg, kimutatás, boq, qto, csv, csoportosítás, darabszám, hosszúság, terület, térfogat, terek, helyiségek, helyiségkimutatás, területkimutatás, elemlista
from: e2e7210c
---

## Mit fog tenni

Kapjon összegeket egy modellből: falhosszakat szintenként, ajtódarabszámokat típusonként, födémtérfogatot anyagonként, vagy minden zóna költségét.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Nyissa meg a {{ui:Mennyiségi összesítés}} lapot a bal panelen.
3. A {{ui:Számolás}} résznél válassza a {{ui:Minden elem}} lehetőséget, vagy csak a kiválasztott elemeket.
4. A {{ui:Csoportosítás}} alatt válasszon egy tulajdonságot, például a {{ui:Osztály}} lehetőséget. Kattintson a {{ui:Csoport hozzáadása}} gombra, hogy tovább bontsa, legfeljebb háromig, például a {{ui:Szint}} szerint.
5. Az {{ui:Összegzés}} alatt jelölje be az összeadandó számokat. A modell mennyiségi készletei alapból be vannak jelölve.
6. Kattintson a {{ui:CSV letöltése}} gombra, hogy a táblázatot táblázatkezelőben nyissa meg.

## Amit látnia kell

- Csoportonként egy sor, amely megmutatja, hány eleme van és az egyes összegeket, valamint egy összesítő sort.
- Az érték nélküli elemek beszámítódnak, de nem adnak hozzá semmit. Ilyenkor a CSV egy „kimaradt” oszlopot tesz az összeg mellé, hogy lássa, hány elemről van szó.
- A számok a fájl saját mértékegységében vannak, ahogy a fájl tárolja: a hosszúságok gyakran milliméterben.

## Egy sor elemenként, vagy a terek

A {{ui:Megjelenítés}} módosításával:

- **Egy sor elemenként**: minden elem külön sorban, a {{ui:Oszlopok}} alatti tulajdonságokkal és az {{ui:Összegzés}} alatti számokkal. A CSV minden elem GlobalId-jával kezdődik. Kattintson egy sor első értékére, hogy kiválassza az elemet.
- **Terek**: minden helyiség a számával, nevével, szintjével, területével és térfogatával, valamint ezek összesítésével. A területek és térfogatok a tér mennyiségeiből származnak, ahogy a fájl megadja. Ha a fájl nem ad meg ilyeneket, a tér alakjából számítja, m²-ben és m³-ben, dőlt betűvel jelölve; a CSV jelzi, melyik melyik.

## Tovább

- [Elemek keresése osztály, név vagy tulajdonság szerint](topic:find)
- [Elemek színezése tulajdonság szerint](topic:color-by-property)

## Infrastruktúra (IFC 4.3)

Válassza az **Infrastruktúra (IFC 4.3)** lehetőséget a nézetlistában, hogy az utakat, vasutakat, hidakat és tengeri létesítményeket osztályonként és típusonként összesítve lássa, a fájl által ténylegesen megadott hosszúsággal, területtel és térfogattal. Egy mennyiséget, amelyet a fájl nem ad meg, üresen hagyunk, sosem számítjuk ki. A **Infrastruktúra-mennyiségek küldése a TakeoffCraft-hoz** egy `.quantities.json` fájlt ment, amelyet a TakeoffCraft típusos mennyiségként nyit meg.
