---
title: Modell küldése egy renderelőprogramnak
summary: A 3D-nézet tartalmát glTF-modellként (.glb) mentheti az anyagaival, textúráival és lámpáival, glTF-t olvasó renderelő- és vizualizációs programokhoz.
keywords: glb, gltf, gl transmission format, export, renderelés, render, vizualizáció, valós idejű, archviz, anyagok, textúrák, lámpák, fények, eszköz, egyéni eszköz
from: e62d57dc
---

Az eszköztáron lévő {{ui:Rendereléshez}} gomb a 3D-nézet tartalmát egyetlen **.glb** fájlba menti (glTF 2.0, a Khronos Group nyílt formátuma). A glTF-t olvasó renderelőprogramok a modell anyagaival és lámpáival nyitják meg; a Twinmotion a geometriafájlok közt sorolja fel a glTF-et és a GLB-t, és megtartja a fényeit (az Epic dokumentációja, „Importing geometry in Twinmotion”): használja a {{ui:Rendereléshez}} gombot, és ott importálja a .glb fájlt. Semmi sem töltődik fel: a fájl ezen a számítógépen készül.

## Mentés

1. Nyissa meg az IFC-modellt, és állítsa be a 3D-nézetet: rejtse el azokat a szinteket, elemeket vagy csatolt modelleket, amelyeket nem akar látni, és [festse be az anyagokat](topic:paint-materials), amelyeket látni szeretne.
2. Kattintson a {{ui:Rendereléshez}} gombra (vagy írja be a `GLB`-t).
3. A fájl „<model name>.glb” néven töltődik le. Az állapotsor megadja, hány háromszöget, anyagot és lámpát tartalmaz.

## Mit tartalmaz a fájl

- **Geometria** a 3D-nézetben látható minden elemről, méterben, Y-tengellyel felfelé (a glTF saját tengelyei). Egy objektum szintenként és anyagonként, a következő néven: „Level 1 — Brick, red”, így a renderelőprogramban kiválaszthat egy anyagot, és lecserélheti a sajátjára.
- **Anyagok:** minden szín azzal a megjelenéssel, amelyet a [Renderelés](topic:render) alatt választott hozzá (matt, selymes, fényes, fém, üveg…), és minden festett könyvtári anyag a színével, érdességével és **textúrájával** (a képe a fájlban van, valós méretére skálázva: egy tégla a tégla méretében van). Az üveg átlátszó.
- **Lámpák:** minden olyan lámpatest, amely be van kapcsolva a Renderelés › Lámpák menüben, pontfényforrásként vagy reflektorként, a fényerejével (a lumenből kandela lesz), színével és sugárszögével.
- **A telephely helye:** a telephely szélességi és hosszúsági foka hivatkozásként be van írva a fájlba. A renderelőprogramoknak saját napjuk van: a helyet ott kell megadni.

## Mi marad ki

- A metszetvágás (a teljes elemek bekerülnek) és az átlátszóként megjelenített elemek (kimaradnak).
- Elemenkénti objektumok (helyette szintenként és anyagonként egy), IFC-tulajdonságok, bump-térképek, mentett nézetek és rögzített sétautak.
- Élek és a háttér.

## Enscape és más beépülő renderelők

Az Enscape egy másik tervezőprogramon belül fut, és nincs olyan fájlja, amelyben egy egész projekt megnyitható. Két mód van:

- Nyissa meg a modell **IFC**-jét (Fájl › Mentés) abban a programban, amelyben az Enscape fut; a legtöbb ilyen program olvassa az IFC-t. A színek átjönnek; a könyvtári anyagok a színükkel jönnek át.
- Hozzon be egy **kis részt** (bútort, lámpatestet) egyéni eszközként: először izolálja, majd kattintson az {{ui:Enscape-hez (.gltf)}} gombra. Az Enscape egyéni eszközkönyvtára .gltf, .obj és .fbx fájlokat listáz, nem .glb-t, ezért ez a gomb ugyanezt a jelenetet egyetlen, önálló **.gltf** fájlba menti (a bináris adatok és a képek a fájlban vannak; nincs más, amit vele kell másolni). Az Enscape kis eszközöket ajánl (kb. 20 000 háromszög alatt).

:::note
A CadCraft Studio-ban ugyanez a glTF-fájl (és egy USD-fájl) a {{ui:Renderelés}} › Motor › **glTF-fájl** / **USD-fájl** menüpontból is elmenthető, vagy közvetlenül megnyitható egy programban ezen a számítógépen: lásd [A jelenet megnyitása egy másik programban](topic:render-open-in). Az Enscape-hez vagy a Twinmotion-hoz készült beépülő vagy élő kapcsolat nincs kész. Az FBX- és Datasmith-formátumoknak nincs közzétett specifikációjuk, ezért a BimCraft nem ír ilyeneket; a glTF a nyílt út.
:::
