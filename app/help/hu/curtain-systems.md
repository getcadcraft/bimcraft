---
title: "Függönyfal-rendszerek: üvegezett falak rácson, osztólécekkel"
summary: Rajzoljon függönyfal-rendszert falként, vagy helyezze egy felületre, majd állítsa be a rácsvonalait és az osztóléceit. IfcCurtainWall elemként mentődik az üvegtábláival és osztólécekkel együtt.
keywords: függönyfal-rendszer, függönyfal, függönyfal-rács, osztóléc, üvegezés, üzlethomlokzat, üvegfal, panel, üvegtábla, felület szerint, felület, tömeg, rácsvonal, távolság, profil, keresztléc, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Mit fog csinálni

Készítsen üvegezett falat osztólécek közti üvegtáblákból, változtassa meg a rácsvonalak helyét, és válassza ki, mely vonalakon legyen osztóléc.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, és nyissa meg az **Építés** menüt (szalagos elrendezésben: az **Építészet** lap).
2. Válassza a **Függönyfal-rendszer** lehetőséget. A sorában állítsa be a felső szintet (a fölötte lévő szintet vagy egy magasságot), a függőleges vonalak közötti távolságot a fal mentén, a vízszintes vonalak közötti távolságot felfelé (üresen hagyva nincs), hogy kapjon-e osztólécet, és az osztóléc profilját.
3. Kattintson oda, ahol kezdődik és ahol végződik, ahogy falat rajzolna. A Shift tartja négyszögletesen.
4. A rács módosításához válassza a **Függönyfal-rács** lehetőséget, és kattintson a rendszerre:
   - **Vonal hozzáadása**: egy függőleges vonal oda kerül, ahová kattint. Vízszintes szintvonalhoz először írja be a magasságát a **Magasság** mezőbe.
   - **Vonal áthelyezése**: kattintson a vonalra, majd arra a helyre, ahová kerülnie kell.
   - **Vonal eltávolítása**: kattintson a vonalra.
   - **Beállítás távolsággal**: írja be a távolságot a **Közönként** mezőbe, majd kattintson a rendszerre.
5. Az osztólécek módosításához válassza az **Osztóléc** lehetőséget, és válassza ki, mire hasson (a kattintott függőleges vonal, a megadott magasságnál lévő vízszintes vonal, a szegély vagy minden vonal). Válassza az **Osztólécek elhelyezése** vagy az **Osztólécek eltávolítása** lehetőséget, majd egy profilt, és kattintson a rendszerre.
6. Jelöljön ki egy rendszert, hogy a **Tulajdonságok** között lássa az egészet: minden rácsvonalat a helyével, egy jelölést az osztólécéhez és egy gombot az eltávolításhoz; a távolságot; a szegélyt; a profilt; az üvegtábla vastagságát.

## Felület szerint

A **Felület szerint** funkció a 3D nézetben kattintott sík felületen készít függönyfal-rendszert. A sorában ugyanazok a rács- és osztólécbeállítások vannak.

- Bármely megjelenített elem bármely síkfelületén működik: tömegen, falon, padlón, tetősíkon, oszlopon, elhelyezett elemen. A felület lehet függőleges, lejtős vagy vízszintes.
- A rendszer a felület körvonalát veszi át. Egy oromfal vagy más furcsa alak a táblákat és osztólécekat ahhoz igazítja.
- Falat is készíthet helyette, a függőleges felület talpa mentén, a felület magasságáig. Itt a fal mindig függőleges, ezért lejtős vagy vízszintes felületből nem lehet falat készíteni.
- Nem készít tetőt. A BimCraftban a tető egy szint körvonalából és lejtéséből számítódik, nem egyetlen felületből.
- Egy görbe felület sok kis sík felület: egy kattintás ezek közül egyet vesz.
- Nyílásokkal rendelkező felület esetén a rendszer a felület külső körvonalát fedi le.

## Hogyan mérjük

- A **bruttó terület** a rendszer körvonala.
- Az **üvegterület** a kész táblák: minden tábla egy oldalán fél osztólécszélességet veszít, ha rácsosztóléc van ott, és egész szélességet, ha szegélyosztóléc.
- A függőleges osztóléc a szegélytől szegélyig végighúzódik. A vízszintes osztóléc minden függőleges osztóléchoz és a szegélynél megáll. A szegélyosztólécek a körvonalon belül fekszenek; ahol kettő találkozik, a függőlegesebb megy át. A csatlakozások derékszögűek, nem gérvágásosak.
- A **Kimutatások** részben a **Függönyfal-rendszerek** lista szerepel ezekkel a számokkal, amint a modellben van ilyen rendszer.

## Az IFC-fájlban

Egy IfcCurtainWall a szintjén, amely táblánként egy IfcPlate (függönypanel) és osztólécdarabonként egy IfcMember (osztóléc) elemből áll, mindegyiknek saját alakkal, anyaggal és alapmennyiségekkel.

## Jó tudni

- Bármilyen méretet úgy készít, ahogy kéri. Csak a területtel nem rendelkező körvonalat utasítja el, mert nincs mit készíteni.
- A falként rajzolt rendszer megtartja azt a magasságot, amellyel rajzolták. Ha később áthelyez egy szintet, a Tulajdonságokban állítsa be újra a magasságot.
- A {{ui:Mozgatás}} eszköz még nem mozgat függönyfal-rendszert. Törölje, és rajzolja újra, vagy módosítsa a rácsát helyben.
- A {{ui:Visszavonás}} minden lépést visszavesz: az egész rendszert, egy rácsváltoztatást, egy osztólécváltoztatást.
