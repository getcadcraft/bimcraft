---
title: Saját objektumok és családfájlok hozzáadása a Könyvtárhoz
summary: Családfájlok (.rfa), valamint IFC-, DWG-, DXF-, glTF- vagy OBJ-fájlok beolvasása a Könyvtár lapon, elhelyezésük úgy, mint bármely könyvtári elemé, és megtartásuk a Saját objektumokban, egy privát listában, amelyet csak Ön lát.
keywords: rfa, család, családok, családkönyvtár, saját objektumok, privát objektumok, privát könyvtár, objektumok importálása, gyártói tartalom, BIM-objektumok, ifc-objektum, gltf, obj, dwg-blokk, megtartás, váltás, migrálás
from: 886261f8
---

## Mit fog csinálni

Hozza be a már meglévő objektumait a BimCraftba: egy Revit-családkönyvtárat, egy gyártó IFC- vagy DWG-letöltését, vagy egy hálót egy másik modellezőből. A fájlt a {{ui:Könyvtár}} lapon olvassa be, az objektumot a modelljében rendes IFC-elemként helyezi el, és ha később is kell, megtartja a {{ui:Saját objektumok}} között.

## Lépések

1. Nyisson meg egy IFC-modellt, vagy kezdjen új épületet.
2. Kattintson a {{ui:Tulajdonságok}} melletti {{ui:Könyvtár}} lapra.
3. Kattintson a {{ui:Fájlok…}} gombra, majd a {{ui:Fájl kiválasztása…}} gombra. Egy vagy több fájlt is kiválaszthat egyszerre: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` vagy `.csv`. Vagy kattintson a {{ui:Válasszon mappát…}} gombra, hogy beolvassa az egész mappát és a benne lévő mappákat (egyszerre legfeljebb 200 fájl).
4. Kattintson egy kártyára, hogy lássa, mit olvasott be: az alaprajzi előnézetet, a nevet, a gyártót és a modellt, a méreteket és a megjegyzéseket.
5. Kattintson az {{ui:Elhelyezés alaprajzon}} vagy az {{ui:Elhelyezés modellben}} gombra az elhelyezéshez.
6. Ha máshol is használni szeretné, kattintson a {{ui:Megtartás a saját objektumokban}} gombra. Ha több fájl van beolvasva, a {{ui:Mindet megtartás a saját objektumokban}} egy lépésben megtartja őket.
7. Később a Könyvtár lapon kattintson a {{ui:Saját objektumok}} gombra, hogy megtalálja őket. Úgy helyezhetők el, cserélhetők és frissíthetők, mint bármely könyvtári elem.

A fájlokat ezen a lapon olvassuk be. Semmi nem töltődik fel, amíg nem választja a {{ui:Megtartás a saját objektumokban}} lehetőséget.

## Mit olvasunk be az egyes fájltípusokból

| Fájl | Amit kap |
|---|---|
| IFC | Minden elemtípus objektumként, valódi 3D alakjával, IFC-osztályával és tulajdonságkészleteivel |
| glTF, GLB, OBJ | Egy objektum valódi 3D alakjával, hálóként. Állítsa be előbb a mértékegységeket és a felfelé irányt. |
| DWG, DXF | Minden blokk objektumként, alaprajzi rajzával és attribútumaival |
| Családfájl (`.rfa`) | A család neve, kategóriája, gyártója, modellje, paraméterei és típusai. **Nem a 3D alakja:** a család Szélesség, Mélység és Magasság értékeit egy doboz helyettesíti. |
| CSV | Soronként egy objektum: név, méretek és adatok, dobozként rajzolva |

## Családfájlok és 3D alakjuk

Az `.rfa` fájlban lévő 3D alak dokumentálatlan formátumban van tárolva, ezért a BimCraft a család adatait olvassa be, és nem találgatja a geometriáját. A kártya ezt jelzi: „Ebből a családból nem lett beolvasva a geometria; egy doboz helyettesíti.”

Ha a valódi alakkal szeretné behozni a családot, exportálja abból a programból, amelyben készült (Revit):

1. Nyissa meg a családot, vagy egy projektet, amelybe a család be van helyezve.
2. Válassza a **Fájl > Exportálás > IFC** menüpontot. Lásd: [az exportbeállítások, amelyek itt a legjobban működnek](topic:rvt-to-ifc).
3. A BimCraftban olvassa be az `.ifc` fájlt a {{ui:Fájlok…}} gombbal. Minden családtípus saját objektumként érkezik, alakjával és tulajdonságkészleteivel.

Sok gyártó a családfájl mellett IFC- vagy DWG-letöltést is kínál. Ezek közvetlenül beolvashatók.

## Családtípusok

Több típusú család egyetlen elemként érkezik, {{ui:Változat}} választóval, típusonként egy változattal. Minden változat a típusok között eltérő értékeket tartalmaz, és saját dobozt kap, ha a típusnak van Szélessége és Mélysége. Egytípusú család egyszerű elem, amelyet az adott típus értékei töltenek ki.

Egyes családok típusaikat típuskatalógusban tárolják: egy `.txt` fájl ugyanolyan névvel a családfájl mellett. Válassza ki mindkettőt együtt, vagy válassza a mappát, és a katalógus sorai lesznek a változatok.

## Egy család adatai valódi alakkal

Ha egy mappában családfájl és ugyanolyan nevű IFC-, glTF- vagy OBJ-fájl van (`Chair.rfa` és `Chair.ifc`), válassza ki mindkettőt együtt, vagy válassza a mappát. A BimCraft egy elemet hoz létre: a családfájl adja a nevet, a gyártót, a modellt, a paramétereket és a típusokat, a másik fájl pedig a valódi 3D alakot. A megjegyzések megmondják, melyik fájlból származik az alak. Egy alak szolgál minden típushoz.

Ha egy családfájlba képet mentettek, az elem részletei a képet az alaprajzi rajz alatt mutatják. A kép csak ott látható; nem tárolódik az elemmel.

## Saját objektumok

A {{ui:Saját objektumok}} a Könyvtár saját, privát listája. Csak Ön láthatja, mi van benne: nem szerepel a nyilvános könyvtárban, nem kereshető, és a csapatának sem mutatja. A fiókját követi, így ugyanazok az objektumok megjelennek egy másik számítógépen is, ha a könyvtárba bejelentkezik.

- Objektum megtartásához be kell jelentkeznie a könyvtárba. Lásd: [jelentkezzen be a könyvtárba](topic:library-credits).
- Egy objektum megtartása csak azt az egy objektumot küldi el a fiókjába. Addig a számítógépén marad.
- A {{ui:Eltávolítás a saját objektumok közül}} kiveszi az objektumot a listából. A rajzokba már elhelyezett példányok megmaradnak.
- Ha mindenkivel meg szeretné osztani, töltse fel a nyilvános könyvtárba, az Ön által választott licenc alatt.

:::note
A Saját objektumok még tesztelés alatt áll, és előfordulhat, hogy még nincs megnyitva az Ön fiókjához. Ha a forrás hiányzik, vagy a „A Saját objektumok még nincs megnyitva ehhez a fiókhoz” üzenet jelenik meg, a saját fájljait így is beolvashatja és elhelyezheti a {{ui:Fájlok…}} gombbal; ezek a modelljén belül mentődnek.
:::

## Gyakori hibák

- **Valódi alak várása egy `.rfa`-tól.** Csak az adatai olvashatók be. Az alakhoz exportáljon IFC-t.
- **Két elem, ahol egyet vár.** Egy család és alakfájlja csak akkor kapcsolódik össze, ha a nevük pontosan egyezik a kiterjesztésen kívül, és ugyanabban a mappában vannak.
- **Egy háló ezerszer túl nagy lesz, vagy oldalra dől.** A {{ui:Fájlok…}} alatt állítsa be a {{ui:A fájl mértékegységei}} és a {{ui:A háló felfelé tengelye}} beállításokat, mielőtt kiválasztja a fájlt.
- **„Nincs családadat” egy fájlon.** Ez projekt (`.rvt`, más kiterjesztéssel mentve) vagy családsablon, nem család. Lásd: [Projekt- vagy családfájl olvasása](topic:read-rvt-file).
- **Olyan tartalom megtartása, amelyet nem tárolhat.** Néhány fizetős könyvtár nem engedi a másolatokat a saját szolgáltatásán kívül. Ellenőrizze annak a tartalomnak a feltételeit, amelyet nem Ön készített.
