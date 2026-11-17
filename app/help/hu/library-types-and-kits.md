---
title: Szimbólumok, típusok és eszközök, projektsablonok és gyors készletek
summary: A könyvtárnak három fajta eleme van (szimbólumok, típusok, eszközök). Adjon típust a projekthez, induljon megosztott projektsablonból, adjon hozzá gyors készletet, és ossza meg saját sablonjait a könyvtár feltöltési oldalán.
keywords: könyvtár, szimbólumok, típusok, eszközök, típus, faltípus, padlótípus, tetőtípus, mennyezettípus, projektsablon, sablon, gyors készlet, készlet, megosztás, feltöltés, verzió, változásnapló, LOD, osztályozás, licenc, gyakorlati tapasztalatok
from: e13b0e67
---

## Mit fog csinálni

Keresse meg a könyvtárban, amire szüksége van, az alapján, hogy mi az; adjon típust ahhoz a projekthez, amelyet rajzol, induljon egy megosztott projektsablonból, és ossza meg saját sablonjait, típusait és készleteit.

## A könyvtár három elemtípusa

- **Szimbólumok** rajzolási konvenciók: csak 2D, az annotációs méretben rajzolva, szakágak szerint csoportosítva.
- **Típusok** azt írják le, miből áll egy elem: rétegei valódi vastagságukkal, fejlesztési szintjük (LOD) és osztályozási kódjuk. A típus a projekthez adódik, nem rajzolódik.
- **Eszközök** fizikai tárgyak, például ajtók, ablakok, bútorok, szerelvények és berendezések, alaprajzi nézettel és valós méretű 3D testtel.

A {{ui:Könyvtár}} fülön válassza a **Könyvtár** lehetőséget, és az **Elem típusa** mezővel válassza ki: Minden, Szimbólumok, Típusok vagy Eszközök.

## Típus hozzáadása a projekthez

1. Válassza a **Típusok** lehetőséget az **Elem típusa** alatt, majd nyisson meg egyet.
2. A kép alatt ellenőrizze felépítését, LOD-ját és osztályozását, majd kattintson a {{ui:Hozzáadás ehhez a projekthez}} gombra.
3. Falként, padlóként, tetőként vagy mennyezetként adódik hozzá, amellyel rajzolhat. Ha ilyen nevű típus már van, az új másolatként kerül hozzá, és az Öné változatlan marad. Egy visszavonással eltávolítható.

## Projektsablonok és gyors készletek

Kattintson a {{ui:Készletek}} gombra, hogy lássa, mit osztottak meg mások.

- **Projektsablon** IFC-fájl szintekkel, rácsokkal, típusokkal és beállításokkal. A {{ui:Mentés a sablonjaim közé}} az Új épület menü **Kiindulás** részében teszi elérhetővé.
- **Gyors készlet** könyvtári elemek listája. A {{ui:A készlet elemeinek megjelenítése}} őket elhelyezhető kártyaként listázza.
- Minden készletnek van verziója és változásnaplója, a legújabb elöl. A 0-val kezdődő verzió megvitatásra szolgál; az 1.0.0 csak arra való, amit a sor tulajdonosa elfogadott.

## Saját elemek megosztása

- **Projektsablon:** {{ui:Mentés sablonként}}, jelölje be a {{ui:Fájl készítése a Könyvtárban való megosztáshoz is}} lehetőséget, adja meg a tartalmát és egy verziót. Egy `.json` fájlt kap.
- **Gyors készlet:** a {{ui:Készletek}} részben válassza a {{ui:Gyors készlet készítése ebből a projektből}} lehetőséget. Ez felsorolja a projekt által használt könyvtári elemeket.
- **Típus:** a {{ui:Típuscsomagok}} részben jelöljön be egy típust, és válassza a {{ui:Mentés könyvtári elemként…}} lehetőséget.

Töltse fel a fájlt a Könyvtár feltöltési oldalán. Ugyanazon átvizsgálásnak megy keresztül, mint bármely elem, és a licencet ott választja ki: minden elem feltünteti a licencét. Az elemekhez LOD-t, IFC-osztályt és osztályozási kódot kérnek (kódot, nem csak nevet).

## Gyakorlati tapasztalatok

Bármely könyvtári elem oldalán a bejelentkezett tagok megjegyzést fűzhetnek hozzá: valódi projekten használták, mintaprojekten próbálták ki, vagy hibát találtak. Néhány szóban írja le, milyen projekt volt, és ne írjon ügyfélneveket. A megjegyzés nyilvános, és nem értékelés: nem változtatja meg az elemet.

## Jó tudni

- Az alkalmazásból semmi nem kerül elküldésre. A fájlokat az Ön számítógépén készítik, és Ön tölti fel őket.
- Sablonból készült készlet az IFC-szöveget pontosan úgy tartalmazza, ahogy mentették. Feltöltés előtt ellenőrizze, nincs-e benne bizalmas adat.
- A CadCraft a Könyvtár fülén a szimbólumokat és eszközöket mutatja; a típusok és sablonok BimCraft-projektekhez valók.
