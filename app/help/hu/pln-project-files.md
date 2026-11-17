---
title: A .pln és .pla projektfájlok megnyitása
summary: Mit kezd a BimCraft jelenleg a .pln, .pla, .tpl és .bpn fájlokkal, és hogyan exportálhat belőlük IFC-t és DWG-t, hogy a modell és a rajzok itt megnyíljanak.
keywords: pln, pla, tpl, bpn, projektfájl, archívum, sablon, biztonsági mentés, ifc-export, dwg-export, fordító, zónák, elrendezések
from: 41fb921d
---

## Mit fog tenni

Juttasson be a BimCraftba egy `.pln` (projekt), `.pla` (archívum a könyvtárával), `.tpl` (sablon) vagy `.bpn` (biztonsági mentés) kiterjesztésű fájlt. Ezek az Archicad saját fájljai.

## Mi nyílik meg most

- **A projektfájlok maguk még nem nyílnak meg.** A formátumuk nincs közzétéve, a BimCraft pedig még nem olvassa. Ha megnyit egyet, a BimCraft ezt jelzi, és ide irányít.
- **A BimCraft ellenőrzi a fájl első bájtjait.** A 17-es verziótól kezdődő Archicad-projektek ugyanazzal a rövid azonosítóval kezdődnek, ezért a BimCraft biztosan meg tudja állapítani, hogy a fájl Archicad-projekt. Ha az Archicad-névvel rendelkező fájl nem így kezdődik, valószínűleg át lett nevezve, sérült, vagy régebbi verzióból származik. Az azonosító nem különbözteti meg a projektet, az archívumot és a sablont.
- **Az IFC-export teljesen megnyílik**: a modell 3D-ben, a szintek, a zónák terekként, az elemadatok, a tulajdonságkészletek és az osztályozások, minden BimCraft-eszközzel.
- **A DWG-export megnyílik** a 2D-nézetben, a rétegeivel és elrendezéseivel, valamint a {{ui:3D}} nézetben. Szerkesztéshez használja a {{ui:Szerkesztés a CadCraft-ban}} lehetőséget.

Vagy hozza be az egész projektet egyetlen zip-fájlként, a nézeteivel, elrendezéseivel és tulajdonságcsoportjaival együtt: lásd [Projektcsomag megnyitása](topic:open-project-bundle).

## IFC-export (a modell)

1. Nyissa meg a projektet az Archicadben.
2. Válassza a **File > Save As** menüpontot, és fájltípusnak az **IFC**-t.
3. Válasszon egy IFC-fordítót (ez az Archicad elnevezése az IFC-exportbeállítások egy készletére). Az **IFC4 Reference View** vagy az **IFC2X3 Coordination View 2.0** illeszkedik a BimCraft-hez. Az IFC4X3 is megnyílik.
4. Válassza ki, mit exportáljon: a teljes projektet, vagy csak azokat az elemeket, amelyek a megtekintett szinteken láthatók.
5. Mentsen, majd a BimCraftban kattintson a {{ui:Fájl kiválasztása}} gombra, és válassza ki a `.ifc` fájlt.

Ellenőrizze ezeket az IFC-fordító beállításai között, mielőtt exportál:

- **Zónák**: exportálja őket, hogy a helyiségek terekként érkezzenek. A BimCraftban kattintson a {{ui:Terek}} gombra, hogy lássa őket.
- **Tulajdonságok és osztályozások**: exportálja őket, hogy megjelenjenek a {{ui:Tulajdonságok}} panelen, és felhasználhatók legyenek a {{ui:Keresés}}, a {{ui:Színezés}} és a {{ui:Mennyiségi összesítés}} funkcióknál.
- **Sima `.ifc`**, nem `.ifczip` vagy `.ifcxml`. A BimCraft csak a sima `.ifc` fájlt nyitja meg.

## DWG-export (a rajzok)

1. Nyissa meg a kívánt alaprajzot, metszetet vagy elrendezést.
2. Válassza a **File > Save As** menüpontot, és fájltípusnak a **DWG**-t.
3. Válasszon egy DXF-DWG fordítót, és mentsen.
4. Egy teljes lapkészlethez mentse az elrendezéseket a Layout Book segítségével, vagy publikálja őket DWG-ként.
5. Nyissa meg a `.dwg` fájlt a BimCraftban. Az exportálás által hivatkozott rajzok vele együtt nyílnak meg, ha ugyanabban a mappában vannak; lásd [Külső hivatkozott rajzok és képek](topic:dwg-linked-files).

## Hibaelhárítás

- **„… Archicad-projekt: az első bájtjai ezt jelzik.”** Exportáljon IFC-t vagy DWG-t a fentiek szerint, és nyissa meg azt a fájlt.
- **„… Archicad-fájl nevét viseli, de nem úgy kezdődik.”** Ellenőrizze, honnan származik a fájl: lehet más típusú fájl új névvel (próbálja megnyitni a valódi kiterjesztésével), lehet nem teljesen átmásolt példány, vagy a 17-nél régebbi verzióból származó projekt. Ha tudja, nyissa meg az Archicadben, majd exportálja IFC-ként vagy DWG-ként.
- **A modell szobák nélkül nyílik meg.** A zónák nem lettek exportálva. Kapcsolja be őket az IFC-fordítóban, és exportálja újra.
- **A nyílások nincsenek kivágva.** A BimCraft ezt a **Még nincs megrajzolva** részben jelzi a {{ui:Fájl}} panelen. Exportálja újra; ha így marad, nyissa meg a modellt abban a programban, amely készítette, és ellenőrizze ott a nyílásokat.
- **A DWG szövege másként néz ki.** Az exportálás olyan betűtípusokat tarthat meg, amelyek a BimCraftban nincsenek; a BimCraft a szöveget egyszerű, talpatlan (sans-serif) betűtípussal rajzolja.

Lásd még: [Projektfájl betöltése 3D-be IFC-n keresztül](topic:rvt-to-ifc) és [Mit olvas be a BimCraft az egyes formátumokból](topic:file-formats).
