---
title: A modell exportálása Collada formátumban vagy Google Earth-höz
summary: A megnyitott IFC-modelleket Collada (.dae) fájlként írja ki Blenderhez és más 3D-programokhoz, vagy Google Earth-csomagként (.kmz), a modell térképen elfoglalt helyén.
keywords: collada, dae, kmz, kml, google earth, blender, exportálás, földrajzi helymeghatározás, georeferencia, szélesség, hosszúság, helyzet, 3D-programok
from: 81cfec09
---

{{ui:Collada}} az eszköztáron (vagy {{ui:Exportálás Collada formátumban (.dae, .kmz)…}} a menü- és szalagstílus Fájl menüjében) a megnyitott tartalmat Collada 1.4.1 formátumban írja ki: minden látható modellt, a federált modelleket ott, ahová elhelyezte.

## Exportálás

1. Válassza a {{ui:Collada}} lehetőséget.
2. Válasszon formátumot:
   - {{ui:Collada-fájl (.dae), Blenderhez és más 3D-programokhoz}}.
   - {{ui:Google Earth-csomag (.kmz): a modell a térképen ott jelenik meg, ahol van}}. Csak akkor kínálja fel, ha a modellnek van helyzete.
3. Válassza ki a beállításokat, majd a {{ui:Exportálás}} gombot. A fájl letöltődik, az állapotsor pedig megmutatja, hány elem került bele.

| Beállítás | Mit csinál |
|---|---|
| {{ui:A helyzet beírása a fájlba}} | Hozzáadja a fájl origójának szélességi és hosszúsági fokát, magasságát és irányát a .dae fájlhoz |
| {{ui:Magasság}} | {{ui:A talajon: a modell 0. szintje a terepen van}}, vagy {{ui:A modell saját tengerszint feletti magassága}} |
| {{ui:Helyiségek és terek bevétele}} | A terek is bekerülnek (alapértelmezés szerint kimaradnak) |
| {{ui:Rejtett elemek bevétele}} | A elrejtett elemek is kiíródnak (alapértelmezés szerint csak a látható elemek) |

## Mi van a fájlban

| A modellben | A Collada-fájlban |
|---|---|
| Épület, szintek | Egymásba ágyazott csomópontok, a szintek magasság szerinti sorrendben; szint nélküli elemek a(z) „Elhelyezetlen” alatt |
| Minden elem | Egy csomópont saját hálóval, a modellben szereplő néven (a nevén, ellenkező esetben az osztályán és címkéjén) |
| Osztály, GlobalId, előre definiált típus | A csomópont kiegészítő adataiban (IFC-profil), pontos néven (ModelCraft-profil) |
| Színek | Anyagok, átlátszósággal |
| Mértékegységek és tengelyek | Méter, Z felfelé. Az elülső modell 0. szintje a 0 magasságban van |

A modell a talaj mentén az origó közelében marad, így az egyszeres pontosságot használó programok remegés nélkül jelenítik meg. A ModelCraft ugyanazzal az íróval írja a Collada-fájljait, és ezeket az elemek nevével nyitja meg.

## Honnan származik a helyzet

Az elülső modell adja a helyzetet, ugyanúgy, ahogy a {{ui:Mérés}} egy pont szélességi és hosszúsági fokát kiszámítja:

- Térképi átalakítás (IFC4 IfcMapConversion, vagy az IFC2X3 tulajdonságkészletek) a modell koordináta-rendszerén keresztül. A modellhez kiválasztott rendszer elsőbbséget élvez a fájlban megnevezettel szemben.
- Ellenkező esetben a helyszín szélességi és hosszúsági foka (közelítő: a telken belül megfelelő).

Az irány mérésen alapul, nem feltételezésen: figyelembe veszi a térkép elforgatását, a valódi északot és a térkép konvergenciáját. Ha modellnek helyzetet szeretne adni, használja a {{ui:Térképi origó…}} parancsot a {{ui:Mérés}} részben.

## Más programokban

- A **Google Earth** a .kmz fájlt olvassa: a modell a helyén jelenik meg, északnak fordítva. Egy sima .dae fájlban nincs olyan hely, ahonnan a Google Earth helyzetet olvasna; használja a .kmz fájlt.
- **Blender** (4.x és korábbi): File, Import, Collada (.dae). Minden elem saját objektumként, a hozzá tartozó anyagával érkezik. A helyzet a fájl kiegészítő adataiban marad meg, amelyet a Blender nem olvas. A Blender 5.0-ban megszűnt a beépített Collada-importáló; ott használja helyette a {{ui:USD}} vagy a glTF-exportot, vagy nyissa meg a .dae fájlt a Blender 4.5-ben, és mentsen .blend fájlt.

Tesztjeink minden fájlt ellenőriznek a Collada 1.4.1 sémával, és egy független Collada-olvasóval visszaolvassák. A Blenderben vagy a Google Earth-ben még nem nyitották meg.
