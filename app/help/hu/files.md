---
title: A BimCraft által megnyitott és mentett fájlok
summary: Minden formátum, amelyet a BimCraft megnyit, mit őriz meg, mit ment, hová kerülnek a mentett fájlok, és mi változik a böngészők között és offline állapotban.
keywords: formátumok, megnyitás, mentés, exportálás, letöltés, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, feltöltés, adatvédelem, fájlméret
from: a7275dbf
---

A BimCraft a fájlokat a számítógépén, a böngésző lapján olvassa be. **Semmit nem tölt fel** a CadCraftba vagy bárki másnak. Mentéskor a BimCraft új fájlt ad át a böngészőnek letöltésre; soha nem írja felül a megnyitott fájlt.

## Mit nyit meg

| Formátum | Kiterjesztések | Amit kap |
|---|---|---|
| IFC | `.ifc` | A modell 3D-ben, szintek, elemszámok és minden elem tulajdonságai. Nevek, címkék és egyes tulajdonságértékek módosíthatók. |
| Projekt- és családfájlok | `.rvt` `.rfa` `.rte` `.rft` | Fájlkártya: kiadás, verzió, munkamegosztás, projektadatok, családparaméterek, külső hivatkozott fájlok és az előnézeti kép. 3D nincs. |
| DWG | `.dwg` | A rajz 2D-ben: modelltér, minden rajzlap, rétegek, külső hivatkozású rajzok, képek és nyomtatási nézet. A modelltér 3D-ben is megjelenik. Az AutoCAD 2000-től 2018-ig terjedő formátumok vannak ellenőrizve. |
| DXF | `.dxf` | Ugyanaz, mint a DWG. |
| STEP | `.step` `.stp` | Alkatrész, berendezés vagy szállítói modell (AP203, AP214, AP242) 3D-ben: minden test egy elemmé (épületelem-proxy) válik egy kis IFC-modellben, egy szinten; a háromszögeket valós méretükben olvassa be, az összeállítás pedig minden alkatrésszel a fájl szerinti helyén jelenik meg. Innentől ugyanúgy működik, mint bármely IFC: tulajdonságok, metszetek, mérés, mentés IFC-ként. A színek és az összeállítási fa nem olvasódik be. |
| Pontfelhők | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A szkennelés a 3D nézetben, a modell mellett vagy önmagában: lásd [Pontfelhő megjelenítése a modell mellett](topic:point-clouds). |
| Projektcsomag | `.ccbundle.zip` | A modell a nézeteivel, elrendezéseivel és tulajdonságcsoportjaival: lásd [Projektcsomag megnyitása](topic:open-project-bundle). |
| Mappa | bármely | Jelentés a benne lévő minden modellről, rajzról és projektcsomagról. A jelentés bármely IFC-je, modellje, rajza vagy csomagja egy kattintással megnyílik. |

A [BimCraft formátumonként mit olvas be](topic:file-formats) részletesen tárgyalja.

A BimCraft a fájl típusát a nevén kívül az első bájtjai alapján állapítja meg, ezért a szokatlan kiterjesztésű projektfájl is fájlkártyaként nyílik meg.

### Nem nyílik meg

- `.ifczip` és `.ifcxml`: A BimCraft ezt jelzi: „.ifczip még nem támogatott. Mentse vagy exportálja a modellt sima .ifc fájlként.” Csomagolja ki a `.ifczip` fájlt (sima `.ifc` van benne), vagy exportálja újra sima IFC-ként.
- A DGN rajzok szerepelnek a mappajelentésben, de nem nyílnak meg.
- A PDF-fájlok, képek és irodai fájlok önmagukban nem nyílnak meg. A képek képként használódnak a DWG-ben, a {{ui:Build}} › {{ui:Rajzból…}} pedig egy PDF vagy szkennelt oldalait falakká alakítja: lásd [Falak a tervlapok alapján](topic:walls-from-plans).

## Mit ment

| Művelet | Eredmény | Hol |
|---|---|---|
| {{ui:Mentés IFC-ként}} | Új IFC-fájl a módosításaival, a neve „*eredeti név* (edited).ifc” | A böngésző letöltési mappája |
| {{ui:CSV letöltése}} a berendezéslistában | A listában szereplő elemek CSV-fájlja, a neve „*rajz neve* equipment.csv” | A böngésző letöltési mappája |

Más dolgok ott mentődnek, ahol készülnek, mindegyik a saját témakörében: {{ui:USD}} ([Modell exportálása USD-ként](topic:usd)), {{ui:Collada}} (.dae és a Google Earth .kmz: [Modell exportálása Collada-ként vagy Google Earthhöz](topic:collada)), a .glb {{ui:Rendereléshez}}, a renderelt képek, a rajzlapok és alaprajzok PDF-ként, az ütemtervek és listák CSV-ként, a BCF-problémák, a COBie-táblázat, a családfájlok, valamint a regisztrált szkennelések LAS vagy E57 formátumban. A BimCraft nem ment DWG-, DXF- vagy projektfájlt, és soha nem módosítja a megnyitott fájlokat.

:::chromium
A Chrome és az Edge a letöltéseket a beállításaiban megadott mappába menti, általában a Letöltések mappába. Ha minden mentésnél rákérdezést szeretne, kapcsolja be a böngésző letöltési beállításai között a fájlok mentési helyének megkérdezését letöltés előtt.
:::

:::firefox
A Firefox a Letöltések mappába ment, kivéve, ha a beállításaiban a „Mindig kérdezze meg, hová mentse a fájlokat” lehetőséget választotta.
:::

:::safari
A Safari a Letöltések mappába ment, kivéve, ha a **Safari > Beállítások > Általános > Letöltési hely** alatt másik mappát választ.
:::

## Második mentés

Minden mentés a teljes modellt tölti le, a megnyitása óta végrehajtott **minden módosítással**, nem csak az utolsó mentés után végzettekkel. A {{ui:Módosítások}} lista minden mentés után újra üresen indul, ezért egy mentésen túl nem vonhat vissza műveletet. Ha az eredetitől akar újrakezdeni, nyissa meg újra az eredeti fájlt.

## Nagy fájlok és memória

- Az **IFC**-fájlok teljesen a lap memóriájába töltődnek be, a 3D-geometria pedig további memóriát igényel. Néhány száz megabájtos modell túl sok lehet egy laptopnak. 1,5 millió háromszög felett az élek ki vannak kapcsolva a memória kímélése érdekében („Nagyon nagy modelleknél az élek ki vannak kapcsolva”).
- A **projektfájlok** nincsenek teljesen beolvasva. A BimCraft csak a szükséges kis részeket olvassa be, a fájl méretétől függetlenül körülbelül 40 KB–100 KB-ot, így egy hálózati meghajtón lévő 500 MB-os központi modell is pillanatok alatt megnyílik.
- A **DWG- és DXF-fájlok** teljesen beolvasódnak. Nagyon nagy rajz esetén ez jelenik meg: „Ez a rajz nagyon nagy; csak egy része látható.”
- A **mappák** legfeljebb 20 000 fájlig nyílnak meg. Csak az egyes modellkártyákhoz szükséges néhány kilobájt olvasódik be.

További információkért lásd [Böngészők, eszközök és memória](topic:platforms).

## Online és offline

A fájlok megnyitásához soha nincs szükség internetre. Egy olvasó az első szükséges alkalommal a webhelyről töltődik be: az IFC-motor, az első IFC-modell megnyitásakor („Az IFC-motor indítása…”). A DWG- és DXF-olvasók az alkalmazás részei.

:::offline
Offline van. Ha az alkalmazássáv gombján a {{ui:Offline használatra kész}} felirat látszik, minden formátum a szokott módon megnyílik. Ha nem, egy IFC-modell nem nyitható meg, hacsak az a lapon korábban már meg nem nyílt: előbb csatlakozzon újra. Lásd [Online és offline](topic:online-offline).
:::

A BimCraft internetkapcsolat nélküli használatához csatlakozott állapotban kattintson az alkalmazássávban a {{ui:Mentés offline használatra}} gombra, és várja meg a {{ui:Offline használatra kész}} megjelenését. A mentett példány körülbelül 33 MB; tartalmazza az IFC-motort is, így az IFC-modellek offline is megnyílnak. Az általános tudnivalókat a mentett példányokról a [Munka offline](common:offline) oldal ismerteti.

## Felhőmentés

A felhőmentés még nem érhető el. Mentse a szerkesztett példányokat a saját számítógépén vagy irodája fájlkiszolgálóján, ahogy bármely más fájlt. Lásd [Saját fájlok](common:your-files).
