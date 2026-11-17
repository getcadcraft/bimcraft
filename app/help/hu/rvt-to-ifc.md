---
title: Projektfájltól a BimCraft-ig IFC-n keresztül
summary: Az IFC-exportálási beállítások, amelyekkel a BimCraft a legjobban nyílik meg (verzió, tulajdonságkészletek, alapmennyiségek, helyiségek, csatolt modellek, koordináták), az eredmény megnyitása, és az, amit az export megőriz.
keywords: exportálás, IFC-exportálás, rvt IFC-re, konvertálás, 3D, geometria, ifc2x3, ifc4, koordinációs nézet, referencianézet, tervátadási nézet, tulajdonságkészletek, alapmennyiségek, helyiségek, terek, csatolt fájlok, közös koordináták, felmérési pont, projekt alappont, beállítások
from: 3efd5fc9
---

## Mit fog tenni

Alakítson át egy projektfájlt olyan IFC-fájllá, amelyet a BimCraft-ban körbeforgathat, megvizsgálhat, ellenőrizhet és szerkeszthet. A BimCraft még nem olvassa be az `.rvt` fájl 3D-s modelljét, ezért az exportálás abban a programban történik, amely a fájlt készítette (Revit); a BimCraft az eredményt nyitja meg.

## Lépések

1. Nyissa meg a projektet abban a programban, amelyben készült. A BimCraft kártyája megnevezi azt a kiadást, amelyben mentették.
2. Nyisson meg egy 3D-nézetet, amely mutatja azt, amit exportálni szeretne.
3. Válassza a **Fájl > Exportálás > IFC** parancsot.
4. Az exportálási párbeszédpanelen válasszon egy beállítást (vagy a **Beállítás módosítása…** gombbal módosítsa), az alábbi beállításokkal.
5. Válasszon mappát és fájlnevet, majd exportáljon.
6. A BimCraft-ban kattintson a {{ui:Fájl kiválasztása}} gombra, és válassza ki az új `.ifc` fájlt. A külön fájlként exportált csatolt modellek a {{ui:Modell hozzáadása}} paranccsal ugyanabba a jelenetbe nyílnak.

## A legjobban nyíló beállítások

| Beállítás az exportálóban | Válassza | Miért |
|---|---|---|
| IFC-verzió | **IFC4 Reference View** a megtekintéshez, ellenőrzéshez és mennyiségi felméréshez; **IFC2X3 Coordination View 2.0**, ha másoknak IFC2X3 kell | Mindkettő teljesen megnyílik. Az **IFC4 Design Transfer View** is megnyílik, pontosabb alakokkal, de a fájl nagyobb és lassabb. |
| Fájltípus | **IFC** (sima) | A BimCraft nem nyitja meg az `.ifczip` vagy `.ifcxml` fájlokat. |
| Fázis / látható elemek | Az Ön által kívánt fázis, és az **Export only elements visible in view** beállítás, ha a 3D-nézetet ehhez állította be | Kihagyja azt, amit szándékosan elrejtett. |
| Tulajdonságkészletek | **Export Revit property sets** és **Export IFC common property sets** | Ezek lesznek a BimCraft {{ui:Tulajdonságok}} részében látható tulajdonságkészletek, amelyeket a {{ui:Keresés}}, a {{ui:Szín}} és a {{ui:Modellellenőrzések}} használ. |
| Alapmennyiségek | **Export base quantities** | A {{ui:Mennyiségi összesítés}} és a kimutatások ezeket használják (hosszak, területek, térfogatok), nem becsülnek. |
| Helyiségek és területek | **Export rooms in 3D views** (vagy a Helyiségek / Terek beállítás) | A helyiségek térként érkeznek: kattintson a {{ui:Terek}} gombra, hogy lássa őket. |
| Csatolt fájlok | **Export linked files as separate IFCs** | Minden hivatkozás saját fájlt kap; a {{ui:Modell hozzáadása}} paranccsal együtt nyissa meg őket, és egymáshoz igazodnak. |
| Koordináta-alap | **Shared coordinates** (vagy a felmérési pont) | A fájl ekkor hordozza a térképen elfoglalt helyét (IfcMapConversion), így a Mérés › Hely, a talajra helyezett térképrétegek és a térképkoordinátákkal elhelyezett pontfelhők működnek. A projekt alappont a modellt az origó közelében tartja, de térképi helyzet nélkül. |
| Falak és oszlopok felosztása szintenként | Bekapcsolva, ha szintenként készít mennyiségkimutatást | Minden szint része külön elem lesz. |

## Mit kell látnia

A modell 3D-ben, a szintek a projekt szintjeiből véve, és a projektinformáció a {{ui:Fájl}} panelen. Az **Exportálva innen** az exportálót nevezi meg.

## Mit őriz meg az export, és mit nem

- **Megőrzi**: a geometriát, a szinteket, az elemtípusokat, neveket, típusokat, a legtöbb paramétert (tulajdonságkészletként), kérésre az alapmennyiségeket, a helyiségeket térként, és közös koordinátákkal a térképi helyet.
- **Nem őrzi meg**: nézeteket, lapokat, feliratokat, szerkeszthető családokként a családokat, munkakészleteket és tervváltozatokat. Az IFC-fájl a modell elemeinek pillanatfelvétele, nem a projekt. A lapokhoz exportálja DWG-ként, és nyissa meg a 2D-nézetben.

## Gyakori hibák

- **Hiányzó paraméterek a BimCraft-ban.** Kapcsolja be a fenti tulajdonságkészlet-beállításokat, és exportáljon újra.
- **Hiányzó helyiségek.** Kapcsolja be a helyiségek beállítást, majd kattintson a {{ui:Terek}} gombra.
- **Mentés `.ifczip` formátumban.** Válassza a sima IFC-t, vagy csomagolja ki az `.ifczip` fájlt.
- **Nincs térképi hely.** Exportáljon közös koordinátákkal, és ellenőrizze, hogy a projekt felmérési pontja be van-e állítva.
- **Szerkesztések visszaírását várja.** A BimCraft-ban mentett szerkesztések új IFC-fájlba kerülnek, nem a projektfájlba.
