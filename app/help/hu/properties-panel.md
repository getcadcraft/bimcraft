---
title: A Tulajdonságok panel mezői
summary: Minden mező jelentése a Tulajdonságok panelen, valamint a Fájl, a Rajz és a Mappa panelen, és hogy melyik módosítható.
keywords: tulajdonságok, mezők, attribútumok, globalid, guid, másolás, érték másolása, összes másolása, csv, vágólap, sorozatszám, címke, objektumtípus, vonal, express id, tulajdonságkészlet, pset, mennyiségek, séma, fájl panel
from: fe55b435
---

## Egy IFC-elem

A {{ui:Tulajdonságok}} panel tetején az elem fajtája látszik az „Ifc” előtag nélkül (például „Door”, „WallStandardCase”, „FurnishingElement”), valamint a neve, vagy „Névtelen”, ha nincs neve.

| Mező | Jelentés | Szerkeszthető |
|---|---|---|
| Név | Az elem neve, gyakran az exportáló által írt család- és típusnév | Igen |
| Típus | Az elem típusának neve, ha van típusa | Nem |
| Objektumtípus | Szabad szöveges típusleírás, amelyet néhány exportáló kitölt | Igen |
| Címke | Az elem címkéje vagy jelölése; sok exportáló ide írja az elem azonosítóját | Igen |
| Leírás | Szabad szöveg | Igen |
| GlobalId | Az elem állandó, 22 karakteres IFC-azonosítója, ugyanaz az elem minden exportjában | Nem |
| Sor | Az elem sorszáma (`#1234`) ebben az IFC-fájlban. Exportonként változik | Nem |

Alatta a **tulajdonságkészletek** következnek, névsorrendben:

- Minden készlet a nevére kattintva nyílik és záródik. Az első három nyitva van.
- A „(type)” jelöléssel ellátott készlet az elem típusához tartozik: „Típus-tulajdonság: az itt végzett módosítás az ilyen típusú összes elemre vonatkozik.”
- A mennyiségi készletek (hosszúságok, területek, térfogatok, darabszámok, súlyok) csak olvashatók.
- A listák és a felsorolt értékek megjelennek, csak olvashatóan.
- Az igen/nem értékek **Igen** vagy **Nem** formában jelennek meg.
- A számok megjelenítéskor négy tizedesre vannak kerekítve. A hosszúságok (egy hosszúság-tulajdonság vagy egy mennyiség hossza) a {{ui:Mértékegységek}} szerint jelennek meg az eszköztáron, a mértékegységük mellett, és az adott mértékegységben vagy egy másik mértékegység-jelöléssel (2.4 m, 8'-0") írhat be újat: a BimCraft a fájl saját számát írja vissza. A többi szám úgy jelenik meg, ahogy a fájl tárolja.
- Az üres érték *üresként* jelenik meg. A szerkesztett érték félkövér, mellette kék sávval.

## Érték másolása

Minden érték mellett a {{ui:Tulajdonságok}} panelen van egy kis másoló gomb: kattintson rá, hogy az értéket pontosan úgy tegye a vágólapra, ahogy látszik, például egy GlobalId-t, egy sorozatszámot vagy bármely tulajdonságkészlet-értéket. A másolás sosem indít szerkesztést.

Felül az {{ui:Összes másolása}} az elem minden értékét szövegként másolja, készletenként; a {{ui:Másolás CSV-ként}} csoport, tulajdonság és érték sorokban másolja, hogy táblázatkezelőbe illeszthető legyen; az üres értékek megmaradnak, így minden mezőnek van sora. Ugyanez működik egy másik megnyitott modell elemével is; ha több modell van megnyitva, a CSV egy Modell oszloppal kezdődik, amely megnevezi a fájlt.

## A Fájl panel (IFC)

| Mező | Jelentés |
|---|---|
| Fájl, Méret | A megnyitott fájl |
| Séma | Az IFC-verzió, például IFC2X3 vagy IFC4 |
| Projekt | A projekt neve és hosszú neve |
| Fázis | A projektfázis, ha az exportáló megadta |
| Exportálva innen | Az exportáló program a fájlfejlécből |
| Szerző | A szerző a fájlfejlécben |
| Exportálva | A dátum és idő a fájlfejlécben |
| Elemek | Hány alakzattal rendelkező elem lett rajzolva |
| Háromszögek | Hány háromszögből állnak az alakzataik; a modell súlyának mértéke |

## A Fájl panel (projekt- és családfájlok)

| Mező | Jelentés |
|---|---|
| Fajta | Projekt, Projektsablon, Család vagy Családsablon |
| Mentés verziója | Az a kiadás, amely utoljára mentette a fájlt |
| Build | Az adott kiadás pontos build-száma |
| Beolvasva | A fájlnak mennyi részét olvasta be a BimCraft a méretéhez képest |

## A Rajz panel (DWG és DXF)

| Mező | Jelentés |
|---|---|
| Formátum | Az a kiadás, amelyben a rajz mentve lett, a formátumkódjával, például AC1032 |
| Mértékegységek | A rajz beillesztési mértékegysége, ha be van állítva |
| Objektumok | Hány objektumot olvastak be |
| Rétegek | Hány réteg van |
| Lapok | Hány lap (elrendezés) van, vagy Nincs |
| Hivatkozott rajzok | Hány hivatkozott rajzát találták meg és töltötték be |
| Berendezések | Hány megjelölt berendezéselem van a lapokon |

## A Mappa panel

| Mező | Jelentés |
|---|---|
| Mappa, Fájlok, Méret | A megnyitott mappa, hány fájl van benne, és azok együttes mérete |
| Modellek | Projekt- és családfájlok, mindegyik a mentéseivel együtt, egyszer számolva |
| CAD-rajzok, IFC-modellek | Hány darab van belőlük |
| Problémák | Hány modellmásolat hiányos vagy olvashatatlan, vagy Nincs |
