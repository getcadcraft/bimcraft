---
title: Amit a BimCraft az egyes formátumokból beolvas
summary: Pontosan az, amit a BimCraft beolvas az IFC-, projekt- és családfájlokból, a DWG- és DXF-fájlokból, és amit érintetlenül hagy.
keywords: formátumok, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, verziók, kompatibilitás, mit olvas be
from: 9b8dfb4f
---

## IFC

| Beolvasott | Részletek |
|---|---|
| Geometria | Minden alakkal rendelkező elem, a fájl által megadott színnel. A helyiségek és terek áttetszően, kezdetben rejtve jelennek meg |
| Szintek | Az épület szintjei magassági sorrendben, és hogy mely elemek melyik szinten állnak. A szint nélküli elemek a „Nem szinten” csoportban vannak |
| Elemszámok | Az egyes fajtájú elemek száma (falak, ajtók, födémek…), a {{ui:Elements}} alatt látható |
| Projektadatok | Projektnév, hosszú név és fázis; séma; az exportáló program, a szerző és az exportdátum a fájlfejlécből |
| Elemadatok | Név, típus, objektumtípus, címke, leírás, GlobalId; minden tulajdonságkészlet és mennyiségkészlet az elemen és annak típusán |

Szerkeszthető: név, objektumtípus, címke, leírás és egyedi tulajdonságértékek. Új IFC-fájlként mentődik. Az IFC2X3, IFC4 és IFC4X3 sémák megnyílnak, a BimCraft saját IFC-motorja olvassa be; ami még nem rajzolható ki, a {{ui:File}} panelen a **Még nincs kirajzolva** alatt van felsorolva. A modell megnyitáskor az origóba kerül, így a távol elhelyezett modell is a képernyő közepén látszik. A `.ifczip` és `.ifcxml` nem nyílnak meg.

## Projekt- és családfájlok

`.rvt` projektek, `.rte` projektsablonok, `.rfa` családok és `.rft` családsablonok.

| Beolvasott | Részletek |
|---|---|
| Fájlinformáció | Kiadás és build, munkamegosztás, központi modell útvonala, utoljára mentett útvonal, felhasználónév, nyelvi beállítás, dokumentum GUID |
| Projektinformáció | A projekt saját mezői (név, szám, megrendelő, cím, állapot…), újprojekt-alapértékek nélkül |
| Családinformáció | Családnév, kategória, kiadás, utolsó frissítés, és paraméterei csoportonként |
| Hivatkozások | A fájl által mutatott hivatkozott modellek, CAD-hivatkozások, képek és kulcsjegyzék-táblázatok listája |
| Előnézeti kép | A fájlban mentett bélyegkép |

Nem olvassa be: a 3D-modellt, az elemeket, a nézeteket, a rajzlapokat és a kimutatásokat. Dokumentálatlan formátumban tárolódnak. A BimCraft fájlonként csak néhány tíz kilobájtot olvas be, így a fájlméret alig számít.

## .pln, .pla, .tpl és .bpn projektfájlok

Még nem olvassa be: a BimCraft ezt megmondja, amikor megnyit egyet. A modellhez exportáljon IFC-t, a rajzokhoz DWG-t; lásd: [.pln és .pla projektfájlok megnyitása](topic:pln-project-files).

## DWG és DXF

| Beolvasott | Részletek |
|---|---|
| Terek | A modelltér és minden rajzlap (elrendezés), a fülek sorrendjében |
| Nézetablakok | Minden rajzlap nézetablakai, a méretarányukkal, elforgatásukkal és befagyasztott rétegeikkel |
| Rétegek | Név, szín, be/ki állapot, befagyasztás, plottolási jelző és vonalvastagság |
| Objektumok | Vonalak, polivonalak, ívek, körök, ellipszisek, splinek, sraffozások és testek, szöveg és többsoros szöveg, blokkok és attribútumok, méretezések, vezetővonalak és többszörös vezetővonalak, táblázatok, pontok, képek |
| Külső hivatkozású rajzok | Oda rajzolva, ahová be vannak szúrva, ha a fájljaik megtalálhatók |
| Képek | A képfájlokból rajzolva, ha megtalálhatók (PNG, JPEG, GIF, BMP, WebP; TIFF nem) |
| Berendezéscímkék | Vendéglátó-ipari tételcímkék (`KCL-ITEM` attribútumok), a berendezéskimutatáshoz |

Minden más a **Még nincs kirajzolva** alatt van számolva, soha nem találgatva. Az AutoCAD 2000-től 2018-ig terjedő DWG-formátumok vannak ellenőrizve (az R13 és R14 fájlok is elfogadottak, de egyik sem volt a tesztkészletben; a régebbi DWG-k nem nyílnak meg); a {{ui:Drawing}} panel mutatja a formátumkódot (például AC1032). Minden verziójú DXF-fájl megnyílik, az R12 is. Mindkettőt a BimCraft saját olvasói dolgozzák fel, ezen a lapon. Semmi sem menti vissza DWG-be vagy DXF-be.

## Mappában

| Típus | Kiterjesztések | A jelentésben |
|---|---|---|
| Modellek | `.rvt` `.rfa` `.rte` `.rft` | Számozott másolatokkal csoportosítva, állapotellenőrzött, adatlap beolvasva, hivatkozások ellenőrizve |
| IFC | `.ifc` | Listázva; 3D-ben nyílik meg |
| CAD | `.dwg` `.dxf` `.dgn` | Listázva azokkal a modellekkel, amelyek hivatkozzák; a DWG és DXF 2D-ben nyílik, a DGN nem |
| Maradványok | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | A **Félretéve** alatt listázva |
| Karbantartó mappák | `*_backup`, `*_log`, `Revit_temp`, rejtett mappák | A **Félretéve** alatt listázva, nincs beolvasva |

Lásd: [Mappajelentés: szerepek, állapotok és hivatkozások](topic:folder-roles).
