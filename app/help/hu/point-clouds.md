---
title: Pontfelhő megjelenítése a modell mellett
summary: Lézeres letapogatás (LAS, LAZ, E57, PLY, PCD, PTX, PTS vagy XYZ) megnyitása a 3D-nézetben önmagában vagy IFC-modellel együtt, színezése, egy vékony szelet kivágása belőle, mérés a pontjaihoz, és átadása a rajzolóprogramnak a kivitelezett vonalak követéséhez.
keywords: pontfelhő, lézeres letapogatás, letapogatás, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, kivitelezett, felmérés, regisztráció, szelet, alaprajzi metszet, fogás, mérés, követés, letapogatásból BIM
from: d0a3e740
---

## Mit fog tenni

Nézze meg egy épület lézeres letapogatását a modellje mellett: ellenőrizze, hogy a megvalósult állapot megfelel-e a tervnek, mérjen a letapogatott pontok között, és vágjon ki egy vékony szeletet, amelyből falakat, ajtókat és oszlopokat olvashat ki.

## Lépések

1. Nyissa meg a felhőt: a {{ui:Nyitott}} gombbal nyisson meg egy `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` vagy `.xyz` fájlt, vagy húzza az oldalra (a pontfelhő-formátumokról szóló témakörben olvashatja, mit hoz magával az egyes formátum, és mit kell exportálni a szkenner saját szoftveréből). Ha van megnyitott modell, a felhő csatlakozik a modellhez a 3D-nézetben; a felhő megnyitása sosem zárja be a modellt vagy annak nem mentett módosításait. Modell nélkül a felhő önmagában nyílik meg.
2. Az eszköztár alatt megjelenik a felhősáv. Megmutatja, hány pont látszik és hány pontja van a fájlnak.
3. Válassza a {{ui:Színezés}} lehetőséget: a fájl saját színeit (ha a szkenner tárolta), a {{ui:Magasság}}, az {{ui:Intenzitás}}, az {{ui:Osztály}} (LiDAR-osztályok, például talaj, növényzet és épület) vagy az {{ui:Egy szín}} lehetőséget. A {{ui:Méret}} nagyobbá vagy kisebbé teszi a pontokat.
4. Kattintson a {{ui:Alaprajz}} gombra a {{ui:Szelet}} alatt, hogy csak egy vékony sávot tartson meg a legalacsonyabb ponttól 1,2 m magasan, felülnézetből: a falak, az ajtónyílások és az oszlopok alaprajzként olvashatók. Az {{ui:Elölnézet}} és az {{ui:Oldalnézet}} függőleges sávokat vág homlokzatokhoz és metszetekhez. A sávot az {{ui:Ennél}} mezővel mozgathatja, a {{ui:Vastagság}} (méterben) módosítható. Az {{ui:Ki}} lehetőség újra az egész felhőt mutatja.
5. Kattintson a {{ui:Mérés}} gombra az eszköztárban. A mutató a felhő pontjaihoz illeszkedik (a címke „pontfelhő”), így mérhet fal és fal között a szeletben, vagy egy modellelem és a letapogatás között. Az elérhető közelségben lévő modellsarok vagy -él továbbra is elsőbbséget élvez.
6. A {{ui:Mérés}} › {{ui:Hely}} beállítással egy felhőpont megadja a földrajzi szélességét és hosszúságát a felhő saját koordinátarendszeréből, ha a fájl megnevez egyet.
7. Az {{ui:Elrejtés}} egy pillanatra elrejti a felhőt; az {{ui:Eltávolítás}} kiveszi. A {{ui:Megjelenítés}} › {{ui:Pontfelhő}} elrejti vagy megjeleníti a sávot.

## Hová kerül a felhő

Az {{ui:Elhelyezés}} a sávban megmutatja, hogyan illeszkedik a felhő a modellhez:

- **Modellkoordináták**: a felhő számai a modell saját számai (a tervezési koordinátákhoz regisztrált letapogatás).
- **Térképkoordináták**: a modellnek van térképi átalakítása (IfcMapConversion), és a felhő ugyanabban a vetített rendszerben van: a felhő ezen keresztül kerül elhelyezésre. Ha a két rendszer különbözik, az állapotsor ezt jelzi.
- **A modell közepére igazítva**: ha egyik sem helyezi a felhőt a modell közelébe, a közepe a modell közepére, a legalacsonyabb pontja pedig a modell padlójára kerül. Egy másik választással felülbírálható.

Ha a fájl nem adja meg a mértékegységét, a BimCraft méterben olvas, és a sávban felajánlja a {{ui:Mértékegységek}} lehetőséget.

## A kivitelezett vonalak követése

Kattintson a {{ui:Követés a CadCraft-ban}} gombra, hogy a felhőt egy új lapon átadja a rajzolóprogramnak. Ott a rajz alatt nyílik meg, ahol egy alaprajzi szelet és az objektumfogás segítségével a falakat a letapogatás fölé rajzolhatja. Lásd a CadCraft pontfelhőkről szóló témakörét.

## Hány pont

Egy letapogatás több száz millió pontot is tartalmazhat. A BimCraft minden pontot egyszer beolvas, és egyenletes arányban tart meg közülük a rajzoláshoz: a sávban a {{ui:Megjelenítés}} állítja be, hányat (1, 2, 5 vagy 10 millió). Több pont több memóriát és gyorsabb grafikus kártyát igényel. Az egyes LiDAR-osztályok darabszáma a fájl minden pontjára vonatkozik.

:::note
A fájlok ezen a számítógépen olvashatók; semmi sem töltődik fel. A LAS 1.0–1.4 és a LAZ olvasható (a LAZ-fájlok legfeljebb 1 GB-osak, olvasás közben a memóriában tartva); az E57-fájlok egyelőre legfeljebb 6 millió pont és 512 MB (nagyobb letapogatásokhoz exportáljon LAS vagy LAZ formátumot); a PLY, a PCD és a PTX teljes egészében; a szöveges felhők `x y z` oszlopokból állnak, a színes (`r g b`) és intenzitás oszlopokkal, ha ezek megvannak.
:::

## Több letapogatás

Különböző helyzetekből készült letapogatások egyetlen rendszerbe regisztrálhatók, ICP-vel finomíthatók, és egyetlen LAS vagy E57 fájlként exportálhatók: lásd [Több letapogatás regisztrálása egy rendszerbe](topic:register-scans).
