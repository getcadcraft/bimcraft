---
title: Berendezések és bútorok elhelyezése a könyvtárból
summary: Elem keresése a Könyvtárban, fájlban vagy a megnyitott rajzban, elhelyezése egy IFC-modell szintjén áttetsző előnézettel, forgatása, falhoz illesztése, és mentése.
keywords: mozgatás, forgatás, húzás, könyvtár, librarycraft, elhelyezés, beszúrás, berendezés, bútor, blokk, család, elem, katalógus, tartalom, kcl, csv, gltf, obj, rfa, dwg, ifc-típus
from: 3dad5d4b
---

## Mit fog tenni

Helyezzen könyvtári elemet egy IFC-modellbe: mosogatót, munkaasztalt, széket. A BimCraft ezt rendes IFC-elemként írja ki, típussal, így az azonos elem minden példánya egy geometriakészletet oszt meg, adatai, elemszáma és licence pedig vele marad.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Kattintson a jobb oldalon a {{ui:Tulajdonságok}} melletti {{ui:Könyvtár}} lapra, vagy a modell fölötti eszköztárban a {{ui:Könyvtár}} gombra.
3. Válasszon forrást:
   - **Beépített szimbólumok**: általános vízvezeték-alaprajzi szimbólumok, amelyeket a BimCraft Apache-2.0 licenc alatt tartalmaz, offline is elérhetők. A méreteket építés előtt ellenőrizze. Elektromos alaprajzi szimbólumokhoz és IFC elektromos eszközökhöz használja a **Build › Electrical** menüpontot.
   - **Könyvtár**: a CadCraft könyvtár ezen a webhelyen. A nyilvános elemekhez nem kell bejelentkezni.
   - **Ez a fájl**: a megnyitott DWG- vagy DXF-rajz blokkjai. Egy láthatósági állapotokkal rendelkező dinamikus blokk minden állapotához külön ajánlat tartozik, „Mosogató: Dupla medence” néven, és csak az adott állapot objektumaival rajzolódik ki.
   - **{{ui:Fájlok…}}**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA vagy CSV fájl a számítógépén. Ebben a lapon olvasódik be; semmi nem töltődik fel.
   - **Egyéb források**: másik könyvtár, amely ugyanazt a forrásformátumot használja. A címét egyszer adja meg; a böngészőben marad meg.
4. Keressen, vagy válasszon kategóriát, majd kattintson egy kártyára. A kártya mutatja az alaprajzi előnézetet, a nevet, a gyártót és a modellt, a licencet és a verziót.
5. Kattintson a {{ui:Elhelyezés alaprajzon}} gombra (az Alaprajz nézetben) vagy az {{ui:Elhelyezés modellben}} gombra (a 3D-nézetben). A Felosztás nézetben, ahol az alaprajz és a 3D-nézet is látszik, a gomb osztott gomb: fő művelete az {{ui:Elhelyezés alaprajzon}}, jobb végén lévő nyíl pedig az {{ui:Elhelyezés modellben}} menüt nyitja meg. Vagy húzza a kártyát, vagy az elem részleteiben lévő képet az alaprajzra vagy a 3D-nézetre: az elem ott kerül elhelyezésre, ahol elengedi. Tollal vagy ujjal tartsa egy pillanatig nyomva a kártyát, majd húzza.
6. Válassza ki a szintet az elhelyezési sávban. A 3D-nézetben az ennél magasabb szintek elhelyezés közben rejtve vannak, és a nézet felülnézetbe fordul; az alaprajzon a szint már látszik. Ha az alaprajzról az {{ui:Elhelyezés modellben}} lehetőséget választja, a 3D-nézet az alaprajz mellé nyílik.
7. Vigye a mutatót a modell fölé: egy áttetsző doboz mutatja, hová kerül az elem.
8. Nyomja meg az {{key:R}} billentyűt a 90°-os forgatáshoz. Nyomja meg a {{key:Tab}} billentyűt (vagy a {{ui:Falfogás}} lehetőséget), hogy a hátoldala a legközelebbi falhoz kerüljön, a helyiség felé nézve.
9. Kattintson az elhelyezéshez. Vagy írja be a pozíciót az **X, Y (mm)** mezőbe, például `1200, 3400`, majd nyomja meg az {{key:Enter}} billentyűt.

Lámpát vagy más felülről lógó elemet úgy helyezzen el, hogy a **Rögzítés** mezőt **A mennyezetnél** értékre állítja. Az elem teteje ekkor a mennyezet alsó síkjánál lesz az adott helyen (vagy a szint magasságánál, ahol nincs mennyezet). Ha a mennyezeti alaprajz be van kapcsolva az alaprajz nézetben, a **Rögzítés** alapértelmezetten **A mennyezetnél** lesz.

10. Válaszoljon az egy kérdésre: az **elemszám** (a következő szabad szám kerül be), a mennyiség és egy megjegyzés. Nyomja meg az {{key:Enter}} billentyűt.
11. Helyezzen el továbbiakat, vagy nyomja meg az {{key:Esc}} billentyűt a befejezéshez.
12. Kattintson a {{ui:Mentés IFC-ként}} gombra a szerkesztett példány letöltéséhez.

## Alaprajz vagy modell

A Könyvtár elhelyezés gombja a nézetet követi, és azonnal változik, amint a nézetet módosítja (az {{ui:Alaprajz}}, {{ui:Felosztás}} és {{ui:3D}} gombok, a billentyűzet, fájl megnyitása). Az Alaprajz nézetben egy gomb látszik, az {{ui:Elhelyezés alaprajzon}}; a 3D-nézetben egy, az {{ui:Elhelyezés modellben}}; a Felosztás nézetben az osztott gomb, amelynek fő művelete az {{ui:Elhelyezés alaprajzon}}, menüjében pedig az {{ui:Elhelyezés modellben}}. Mindkét mód ugyanazt az elhelyezési sávot használja, és ugyanazt az IFC-elemet írja: az egyik az alaprajz, a másik a 3D-nézet mutatóját használja. Az {{key:Esc}} billentyűvel bármikor abbahagyhatja.

A kártyahúzásnak nincs saját billentyűje: az osztott vagy az egyszerű gomb ugyanezt teszi a billentyűzettel is.

## Elhelyezett elem mozgatása vagy forgatása

A {{ui:Rajzolás}} módban válassza ki az elemet az alaprajzon. Egy négyzet alakú fogópont mutatja a beszúrási pontját, mellette egy kör alakú fogópont.

- Húzza az elemet, vagy a négyzet alakú fogópontot a mozgatáshoz. A Fal eszközhöz hasonlóan illeszkedik (falvégek és -lapok); a {{key:Shift}} billentyű megtartja, hogy a kiindulási helyéhez képest derékszögben maradjon.
- Húzza a kör alakú fogópontot 15°-os lépésekben történő forgatáshoz. A {{key:Shift}} billentyű tartásával 1°-os lépésekben forgat.
- Nyomja meg az {{key:R}} billentyűt a 90°-os forgatáshoz.
- A **Tulajdonságok** panelen (a 3D-nézetben is) írja be az **X**, **Y** és a **Forgatás (°)** értékeket, vagy kattintson a **Forgatás 90°-kal** gombra.

Minden mozgatás egy visszavonási lépés, és az Élő csapatmunkában (Live TeamWork) is továbbítódik. Az elem megtartja elemszámát, könyvtári adatait és a szint feletti magasságát. Még nincs elkészítve: a 3D-nézetben történő húzás.

## Amit látnia kell

- Az elem a modellben, kijelölve, a jobb oldalon a tulajdonságaival: egy **Könyvtári elem** doboz a licencével és a forrásmegjelöléssel, valamint a `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` készletek, és a címkézett rajzokból származó elemeknél a `CadCraft_SourceAttributes`.
- „Elhelyezve: *elem* (elemszám *n*)” a változásjegyzékben. Az {{key:Mod+Z}} billentyűvel visszavonható.
- Az állapotsor: „Az *elem* elhelyezve, elemszám: *n*.”

## Jó tudni

- Egyes elemek több méretben vagy változatban érhetők el: a kártyán ekkor egy **Változat** választás jelenik meg, és az Ön által kiválasztott kerül elhelyezésre. Lásd: [Könyvtári elem elhelyezése és cseréje változatokkal](topic:library-variants).
- Test nélküli elemet (2D szimbólumot) egy helyettesítő dobozzal helyezünk el; a magasságát a kérdésnél kell megadni.
- További példányok: válasszon ki egy elhelyezett elemet, és használja a {{ui:Másolás}} és a {{ui:Beillesztés}} gombokat, vagy a {{key:Mod+D}} billentyűt. Lásd: [Könyvtári elemek másolása, beillesztése és kettőzése](topic:copy-paste).
- Hogy minden elhelyezés falfogással induljon, kapcsolja be a **Falfogás bekapcsolva indításkor** beállítást a [BimCraft beállításaiban](topic:settings).
- A hosszúságok a modell saját mértékegységeire konvertálódnak, bármilyenek is legyenek.
- Az **Entourage** (fák, cserjék, emberek, autók) szintén a könyvtárban van: keressen rá a „fa”, a „személy” vagy az „autó” szóra. Ezeket a CadCraft rajzolja (CC0), és elhelyezéskor megtartják színeiket (a törzs barna, a levelek zöldek, az autó ablakai áttetszőek), a BimCraftban és más BIM-programokban egyaránt. Megjelennek a [renderelt képeken](topic:render).
- IFC2X3 fájlban a test faszerkezetű testként íródik; IFC4-ben háromszögelt felületi halmazként. Mindkettő megnyitható más IFC-eszközökben.
- DWG- vagy DXF-rajz itt nem menthető, ezért az elemek csak IFC-modellekbe helyezhetők. Rajzon a **Ez a fájl** lehetőséggel nézheti meg, mivé válnának a blokkjai.

## Elemek a beállított nyelven

Egy elemhez a nevét, leírását és típusát más nyelveken is megadhatják. Ha ezek abban a nyelvben vannak meg, amelyre a BimCraft be van állítva (Beállítások › Általános › Nyelv), az elem oldala ezeket mutatja, alatta a gyártó által adott névvel, és az **Elhelyezés** a nevet a saját nyelvén írja a modellbe, így a {{ui:Berendezések}} kimutatás ezen a néven listázza. Az elem ugyanaz az elem marad: a frissítések ellenőrzése és a cserék magán az elemen alapulnak, sosem a nevén. A fordítás nélküli elemek megtartják a saját szavaikat.

## Gyakori hibák

- **Hiányzik az elhelyezés gomb.** Nincs IFC-modell megnyitva. Először nyisson meg egyet.
- **A szellemkép nem követi a mutatót.** A mutató a modell területén kívül van, vagy a szint síkja nincs a nézetben. Kattintson a {{ui:Felülnézet}} gombra.
- **A {{ui:Falfogás}} szerint nincsenek falak.** A szinten nincsenek falak az IFC-ben (egyes exportok a falakat más szintre teszik). Válassza ki azt a szintet, vagy írja be az X és Y értéket.
- **Egy fájl elemei rossz méretűek.** A fájlban nincs mértékegység, vagy rossz van megadva. A {{ui:Fájlok…}} lehetőségnél válassza ki a mértékegységeket, és olvassa be újra.

:::tip
Ugyanazt az elemet kétszer elhelyezve egy IFC-típust osztanak meg, így egy negyven széket tartalmazó modell a széket egyszer tárolja.
:::
