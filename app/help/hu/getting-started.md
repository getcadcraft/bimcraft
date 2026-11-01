---
title: Első lépések a BimCrafttal
summary: Mit tud ma a BimCraft, hogyan nyissa meg az első modellt, nézze meg 3D-ben, módosítson egy értéket, és mentsen másolatot.
keywords: indítás, első indítás, megnyitás, ifc, rvt, dwg, gyors útmutató, bevezetés, megjelenítő, bim
from: fc2dea19
---

A BimCraft a CadCraft-család építésimodell-alkalmazása. Ebben a kiadásban épületfájlokat **nyit meg, olvas és vizsgál**, és **szerkeszti az IFC-modellek adatait**. Új elemeket még nem rajzol és nem modellez. Gondoljon rá úgy, mint egy modellmegjelenítőre és ellenőrzőre, amellyel az IFC-fájlban a neveket, a címkéket és a tulajdonságértékeket is javíthatja.

Amit megnyit:

| Fájl | Amit kap |
|---|---|
| IFC (`.ifc`) | A teljes modell 3D-ben: forgatás, szintek, elemtulajdonságok, valamint a nevek és tulajdonságértékek szerkesztése |
| Projekt- és családfájlok (`.rvt`, `.rfa`, `.rte`, `.rft`) | Egy fájlkártya: a mentés kiadása, a projektadatok, az előnézeti kép és a csatolt fájlok. 3D nélkül. |
| DWG és DXF | A rajz 2D-ben: a modelltér és minden rajzlap, rétegek, külső hivatkozások, nyomtatási nézet, valamint berendezéskimutatás a címkézett nagykonyhai rajzokhoz |
| Egy projektmappa | Jelentés a mappa minden modelljéről: biztonsági mentések, hivatkozások, sérült másolatok, és javaslat arra, melyik fájllal kezdjen |

Minden a böngészőben, az Ön számítógépén történik. **Semmi nem töltődik fel.** A részleteket lásd: [A BimCraft által megnyitott és mentett fájlok](topic:files).

## A BimCraft megnyitása

1. Nyissa meg a BimCraftot egy naprakész böngészőben. A Chrome, az Edge, a Firefox és a Safari egyaránt működik; a különbségeket a [Böngészők, eszközök és memória](topic:platforms) sorolja fel.
2. Várja meg az üres képernyőt, amelyen ez áll: „Nyisson meg egy épületmodellt.”

:::note
A BimCraft a böngészőben fut, az asztalon pedig a CadCraft Studióban, a többi alkalmazással együtt. Felhőbe mentés még nincs: a fájlokat a számítógépéről nyitja meg, és a másolatokat ide menti vissza.
:::

## Az első modell megnyitása

A leggyorsabb módja, hogy lássa, mit tud a BimCraft, egy IFC-fájl.

1. Kattintson a képernyő közepén a {{ui:Fájl kiválasztása}} gombra.
2. Válasszon ki egy `.ifc` fájlt itt: {{pick:mac=Finder|windows=Fájlkezelő|linux=a fájlkezelő}}, majd hagyja jóvá.
3. Várjon, amíg a képernyő alján az állapotsor ezt írja: „Az IFC-motor indítása…”, majd „Geometria építése”.

Középen látnia kell a modellt 3D-ben, balra egy {{ui:Fájl}} panelt és egy {{ui:Szintek}} listát, jobbra pedig egy még üres {{ui:Tulajdonságok}} panelt. Az állapotsor végül a „Megnyitva” szöveggel és az elemek számával zárul.

:::tip
A fájlt a(z) {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}} ablakból közvetlenül az oldalra is ráhúzhatja. Húzás közben a képernyőn ez látszik: „Engedje el a megnyitáshoz”.
:::

:::offline
Az IFC-motor az első IFC-modell megnyitásakor töltődik be a webhelyről, hacsak a BimCraftot nem mentette offline használatra. A DWG- és DXF-rajzokhoz, a projektfájlokhoz és a mappákhoz nincs szükség semmi többletre: az olvasóik az alkalmazás részei. Ha az alkalmazássáv gombján ez áll: {{ui:Offline használatra kész}}, minden offline is megnyílik. Ha nem, az IFC-modellek addig nem nyílnak meg, amíg újra nem csatlakozik, kivéve ha ebben a lapban már megnyílt egy. Lásd: [Online és offline](topic:online-offline).
:::

:::online
Kapcsolat nélküli helyre indul? Kattintson az alkalmazássávon a {{ui:Mentés offline használatra}} gombra, és várja meg az {{ui:Offline használatra kész}} feliratot. A mentett példány (kb. 11 MB) tartalmazza az IFC-motort. Lásd: [Munka offline](common:offline).
:::

## Körülnézés

:::mouse
1. A modell körüli forgatáshoz húzzon a bal egérgombbal.
2. A nagyításhoz görgesse az egérgörgőt.
3. Az eltoláshoz húzzon a jobb egérgombbal. Mac trackpadon ehelyett tartsa lenyomva a {{key:Shift}} billentyűt, és húzzon.
4. A teljes modell újbóli megjelenítéséhez nyomja meg az {{key:F}} billentyűt, vagy kattintson az {{ui:Illesztés}} gombra.
:::

:::touch
1. A forgatáshoz húzzon egy ujjal.
2. A nagyításhoz csippentsen két ujjal, az eltoláshoz pedig mozgassa együtt a két ujját.
3. A teljes modell újbóli megjelenítéséhez koppintson az {{ui:Illesztés}} gombra.
:::

## Egy valódi feladat: címke javítása

1. Kattintson egy falra, ajtóra vagy a modell bármely elemére. Kékre vált, és a tulajdonságai megjelennek jobbra.
2. A {{ui:Tulajdonságok}} panelen kattintson a **Tag** melletti értékre.
3. Írja be az új címkét, és nyomja meg az {{key:Enter}} billentyűt.
4. Nézze meg a balra megnyílt {{ui:Módosítások}} szakaszt: a módosítás ott szerepel a régi és az új értékkel.

## Másolat mentése

1. Kattintson a {{ui:Módosítások}} szakaszban a {{ui:Mentés IFC-ként}} gombra, vagy nyomja meg a {{key:Mod+S}} billentyűkombinációt.
2. Az új fájlt a letöltések mappájában találja. Neve az eredeti név, kiegészítve a „ (edited)” szöveggel, például `Clinic (edited).ifc`.

Az eredeti fájl soha nem változik. A szerkesztést részletesen az [IFC-tulajdonságok módosítása és szerkesztett másolat mentése](topic:edit-ifc-properties) írja le.

## Merre tovább

- [A BimCraft képernyője](topic:workspace): minden panel a nevén.
- [Más BIM- és rajzprogramokból érkezőknek](topic:coming-from): mi tűnik másnak, ha a Revitet szokta meg.
- [Egy teljes projektmappa megnyitása](topic:open-project-folder): mutasson a BimCraftnak egy projektmappára, és bízza rá a fájlok rendezését.
- [DWG- vagy DXF-rajz megtekintése](topic:view-dwg): rajzlapok, rétegek és nyomtatási nézet.
