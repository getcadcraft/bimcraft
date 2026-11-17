---
title: Típuscsomagok – falak típusainak megosztása nyílt fájlként
summary: Falak típusainak mentése rétegeikkel, anyagaikkal, címkéikkel és osztályozási kódjaikkal, valamint családokkal együtt egyetlen nyílt fájlba (sima JSON vagy IFC), majd hozzáadásuk egy másik projekthez. Más programtól származó IFC-fájl falátípusai is beolvashatók.
keywords: típuscsomag, típusok, falátípus, megosztás, exportálás, importálás, könyvtár, nyílt formátum, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, anyagok, rétegek, sablon, irodai szabvány, családok
from: e4c91331
---

## Mit fog csinálni

Vigye át a falai típusait egyik projektből a másikba, vagy adja át valakinek, aki másik programban dolgozik. Egy típuscsomag minden falátípust tartalmaz a rétegeivel, vastagságaival, anyagaival, magjával, légrétegeivel, rétegsorrendjével, fejlettségi szintjével (LOD), mennyiségkimutatási adataival és osztályozási kódjaival, valamint a hozzáadott családokkal. Nyílt fájl: bárki által olvasható sima JSON-szöveg vagy IFC-fájl. Semmi sincs hozzákötve egy céghez, országhoz vagy fiókhoz.

## Típusok mentése projektből

1. Nyissa meg az **Adatok** elemet a modellsávon, és válassza ezt: {{ui:Típuscsomagok}}.
2. A {{ui:Típusok mentése ebből a projektből}} részben jelölje be a menteni kívánt falátípusokat. A projekt saját típusai be vannak jelölve; kezdő típus hozzáadható, és másolatként kerül be. Jelölje be a családokat, ha be szeretné venni őket.
3. Adjon meg egy nevet a {{ui:Csomag neve}} mezőben.
4. A {{ui:Mentés csomagként (.json)}} egy `.cctypes.json` fájlt tölt le. A {{ui:Mentés IFC-ként (.ifc)}} olyan IFC-fájlt tölt le, amely csak típusokat tartalmaz: minden falátípus IfcWallType-ként, a hozzá tartozó anyagrétegkészlettel, anyagokkal és osztályozással, bármely BIM-programhoz.

## Típusok hozzáadása projekthez

1. Ugyanebben a párbeszédpanelen válassza ezt: {{ui:Csomag vagy IFC-fájl megnyitása…}}, és válasszon ki egy `.json` csomagot vagy `.ifc` fájlt.
2. A párbeszédpanel felsorolja a fájl tartalmát: minden falátípust a vastagságával, a rétegek számával és kódjaival, valamint az anyagokat és a családokat.
3. Válassza ki, mi történjen a {{ui:Ilyen típus már van ebben a projektben}} esetben: **A projekt típusának megtartása**, **A csomag típusának hozzáadása másolatként** (új nevet kap, amely „(2)”-re végződik), vagy **Cserélje ki (csak ha nincs olyan fal, amely használja)**.
4. {{ui:Hozzáadás a projekthez}}. A párbeszédpanel felsorolja, mi lett hozzáadva, másolva, cserélve vagy megtartva. Ez egyetlen visszavonási lépés.

Az új típusok azonnal megjelennek a Fal eszköz típuslistájában.

## Padló-, tető- és mennyezettípusok

A mentendő típusok listája tartalmazza a projekt padló-, tető- és mennyezettípusait, valamint azok kezdő típusait is (Padló, Tető, Mennyezet jelöléssel). Egy csomag mind a négy fajtát hordozhatja; minden típus megnevezi az IFC-osztályát (IfcWallType, IfcSlabType, IfcCoveringType). Az elemek által használt padló-, tető- vagy mennyezettípust csomagból nem cseréli ki a rendszer: módosítsa a típusszerkesztőben.

## Egy típus könyvtári elemként

Jelöljön be pontosan egy típust, és válassza a **Mentés könyvtári elemként…** lehetőséget. Ez egy `.cctype.json` fájlt ment: a Típus fajtájú könyvtári elemet, amely az adott egy típust tartalmazza (rétegeit, anyagait, LOD-ját és osztályozási kódjait). Töltse fel a könyvtárba a megosztáshoz. A **Csomag vagy IFC-fájl megnyitása…** ilyen elemet is olvas, és a típusát csomaghoz hasonlóan hozzáadja a projekthez.

## Jó tudni

- Másik programból származó IFC-fájl is megnyitható itt. Minden falátípusa, amelynek vannak anyagrétegei, beolvasódik: a név, a rétegek anyagai és vastagságai, valamint az esetleges légréteg a fájl saját adatai. Hogy mely réteg a mag, és mit tesz minden réteg (burkolat, szerkezet, szigetelés), az becsült érték: a típus mellett **(becsült)** jelölés áll, és ezt a falátípus-szerkesztőben ellenőrizni kell. Rétegek nélküli falátípust a rendszer kihagyja, és név szerint megnevezi.
- A projektben már meglévő anyag megmarad. Ha az új anyag neve foglalt, a neve után „(pack)” kerül.
- Olyan falátípust, amelyet falak használnak, soha nem cserél ki csomag. Módosítsa a falátípus-szerkesztőben, amely megfelelően kezeli a falakat.
- Egy falon beállított kód nem utazik: az az adott falhoz tartozik. A típuson beállított kód igen.
- Az a fájl, amelyben van a formátum által nem ismert mező, hiányzó anyagú réteg, vagy bármi, ami nem sima szöveg, visszautasításra kerül, és az üzenet megmondja, hol és miért.
- Még nincs elkészítve: padló-, tető- és mennyezettípusok (ebben a verzióban nincsenek típusaik: mindegyiknek saját vastagsága van), a családokon kívüli ajtó- és ablaktípusok, valamint más program fájljából származó kitöltések vagy színek.
