---
title: A BimCraft által megnyitott és mentett fájlok
summary: Minden formátum, amelyet a BimCraft megnyit, mit őriz meg, mit ment, hová kerülnek a mentett fájlok, és mi változik böngészőnként és offline állapotban.
keywords: formátumok, megnyitás, mentés, exportálás, letöltés, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, feltöltés, adatvédelem, fájlméret
from: a1f0161b
---

A BimCraft a számítógépén lévő fájlokat olvassa, a böngészőlapon belül. **Semmi nem töltődik fel** a CadCraftnak vagy bárki másnak. Mentéskor a BimCraft új fájlt ad át a böngészőnek letöltésre; soha nem írja felül a megnyitott fájlt.

## Mit nyit meg

| Formátum | Kiterjesztések | Amit kap |
|---|---|---|
| IFC | `.ifc` | A modell 3D-ben, szintek, elemszámok és minden elem tulajdonságai. A nevek, a címkék és az egyes tulajdonságértékek módosíthatók. |
| Projekt- és családfájlok | `.rvt` `.rfa` `.rte` `.rft` | Fájlkártya: kiadás, build, közös munka, projektadatok, családparaméterek, csatolt fájlok és az előnézeti kép. 3D nélkül. |
| DWG | `.dwg` | A rajz 2D-ben: modelltér, minden rajzlap, rétegek, külső hivatkozások, képek és nyomtatási nézet. A modelltér 3D-ben is. Az AutoCAD 2000-től 2018-ig terjedő formátumokat ellenőrizték. |
| DXF | `.dxf` | Ugyanaz, mint a DWG. |
| STEP | `.step` `.stp` | Egy alkatrész, egy berendezés vagy egy beszállító modellje (AP203, AP214, AP242) 3D-ben: minden test egy kis, egyszintes IFC-modell egy eleme (építési elem helyettesítője) lesz, háromszögekként olvasva, valódi méretben; az összeállítás minden alkatrésszel ott, ahová a fájl helyezi. Innen úgy működik, mint bármely IFC: tulajdonságok, metszetek, mérés, mentés IFC-ként. A színeket és az összeállításfát nem olvassa. |
| Pontfelhők | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | A letapogatás a 3D nézetben, modell mellett vagy önmagában: lásd [Pontfelhő megjelenítése a modell mellett](topic:point-clouds). |
| Projektcsomag | `.ccbundle.zip` | A modell a nézeteivel, elrendezéseivel és tulajdonságcsoportjaival: lásd [Projektcsomag megnyitása](topic:open-project-bundle). |
| Mappa | bármely | Jelentés a benne lévő minden modellről, rajzról és projektcsomagról. A jelentés bármely IFC-je, modellje, rajza vagy csomagja egy kattintással megnyílik. |

A [Mit olvas a BimCraft az egyes formátumokból](topic:file-formats) részletesen ismerteti.

A BimCraft a fájl első bájtjaiból és a nevéből is megállapítja, mi a fájl, így szokatlan kiterjesztésű projektfájl is fájlkártyaként nyílik meg.

### Nem nyílik meg

- `.ifczip` és `.ifcxml`: a BimCraft ezt mondja: „Az .ifczip még nem támogatott. Mentse vagy exportálja a modellt sima .ifc fájlként.” Csomagolja ki az `.ifczip` fájlt (sima `.ifc` van benne), vagy exportálja újra sima IFC-ként.
- A DGN-rajzok szerepelnek a mappajelentésben, de nem nyílnak meg.
- A PDF, a képek és az irodai fájlok önmagukban nem nyílnak meg. A képeket a DWG-n belül képként használja, a {{ui:Építés}} › {{ui:Rajzból…}} pedig egy PDF oldalaiból vagy egy beolvasásból falakat készít: lásd [Falak alaprajzkészletből](topic:walls-from-plans).

## Mit ment

| Kattintás | Eredmény | Hová |
|---|---|---|
| {{ui:Mentés IFC-ként}} | Új IFC-fájl a módosításaival, „*eredeti név* (edited).ifc” néven | A böngésző letöltések mappája |
| {{ui:CSV letöltése}} a berendezéskimutatásban | A lista tételeinek CSV-fájlja, „*rajz neve* equipment.csv” néven | A böngésző letöltések mappája |

Más dolgok ott mentődnek, ahol létrejönnek, mindegyik a saját témakörében: {{ui:USD}} ([A modell exportálása USD-be](topic:usd)), a .glb {{ui:Rendereléshez}}, a renderelt képek, a rajzlapok és alaprajzok PDF-ként, a kimutatások és listák CSV-ként, a BCF-problémák, a COBie táblázat, a családfájlok, valamint a regisztrált letapogatások LAS vagy E57 formában. A BimCraft nem ment DWG-, DXF- vagy projektfájlt, és soha nem módosítja a megnyitott fájlokat.

:::chromium
A Chrome és az Edge a beállításaikban megadott mappába mentenek, általában a Letöltések mappába. Ha minden alkalommal rákérdezéssel szeretne menteni, kapcsolja be a böngésző letöltési beállításaiban a „Letöltés előtt kérdezzen rá minden fájl mentési helyére” lehetőséget.
:::

:::firefox
A Firefox a Letöltések mappába ment, hacsak a beállításaiban nem adja meg: „Mindig kérdezzen rá, hová mentse a fájlokat”.
:::

:::safari
A Safari a Letöltések mappába ment, hacsak nem választ másik mappát itt: **Safari > Beállítások > Általános > Fájlok letöltési helye**.
:::

## Második mentés

Minden mentés a teljes modellt letölti **a megnyitás óta végzett összes módosítással**, nem csak az utolsó mentés óta végzettekkel. A {{ui:Módosítások}} lista minden mentés után ismét üres, így mentésen túl nem vonhat vissza. Ha az eredetiből szeretne újrakezdeni, nyissa meg újra az eredeti fájlt.

## Nagy fájlok és memória

- Az **IFC**-fájlokat teljesen beolvassa a lap memóriájába, a 3D geometria pedig ezen felül is memóriát igényel. Néhány száz megabájtos modell túl sok lehet egy laptopnak. 1,5 millió háromszög fölött az élek ki vannak kapcsolva a memória kímélésére („Nagyon nagy modelleknél az élek ki vannak kapcsolva”).
- A **projektfájlokat** nem olvassa be teljesen. A BimCraft csak a szükséges kis részeket olvassa, a fájl méretétől függetlenül kb. 40–100 KB-ot, így egy hálózati meghajtón lévő 500 MB-os központi modell egy pillanat alatt megnyílik.
- A **DWG- és DXF**-fájlokat teljesen beolvassa. Egy nagyon nagy rajznál ez látszik: „Ez a rajz nagyon nagy; csak egy része látható.”
- A legfeljebb 20 000 fájlt tartalmazó **mappák** megnyílnak. Csak a modellkártyákhoz szükséges néhány kilobájtot olvassa be fájlonként.

További információ: [Böngészők, eszközök és memória](topic:platforms).

## Online és offline

A fájlok megnyitásához sosem kell internet. Egy olvasó az első szükség esetén tölt be a webhelyről: az IFC-motor, az első IFC-modell megnyitásakor („Az IFC-motor indítása…”). A DWG- és DXF-olvasók az alkalmazás részei.

:::offline
Offline van. Ha az alkalmazássáv gombján ez áll: {{ui:Offline használatra kész}}, minden formátum a szokott módon megnyílik. Ha nem, IFC-modell addig nem nyílik meg, amíg ebben a lapban egy már meg nem nyílt: előbb csatlakozzon újra. Lásd: [Online és offline](topic:online-offline).
:::

A BimCraft kapcsolat nélküli használatához kattintson online állapotban az alkalmazássávon a {{ui:Mentés offline használatra}} gombra, és várja meg az {{ui:Offline használatra kész}} feliratot. A mentett példány kb. 33 MB; tartalmazza az IFC-motort, így az IFC-modellek offline is megnyílnak. A [Munka offline](common:offline) általában magyarázza a mentett példányokat.

## Mentés felhőbe

Felhőbe mentés még nincs. A szerkesztett másolatokat a saját számítógépére vagy az iroda fájlkiszolgálójára mentse, mint bármely más fájlt. Lásd: [Az Ön fájljai](common:your-files).
