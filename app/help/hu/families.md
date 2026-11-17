---
title: Családok és méreteik
summary: Az ajtók, ablakok és bútorok családokba tartoznak. A család minden mérete egy típus az IFC-fájlban, így a típuslista a BimCraftban rövid marad, miközben más programok sima típusokat olvasnak.
keywords: család, családok, típus, típusok, méret, méretek, ajtótípus, ablaktípus, bútor, asztal, polc, szekrény, új méret, kettőzés, családelhelyezés, családfájl, ccfamily, ifc-könyvtár, projektkönyvtár, csoport, láthatóság, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Mi a család

A család egy dologfajta több méretben: például egy egyszárnyú ajtó, amely 32, 36 és 42 hüvelyk széles, vagy egy asztal, amely hosszú és rövid változatban kapható. A BimCraftban a családot egyszer látja, a méreteivel együtt, nem egy hosszú típuslistát.

Az IFC nem ismeri a családokat. A fájlban minden méret egy egyszerű típus (ajtótípus, ablaktípus, bútortípus…), a család pedig egy csoport, amely felsorolja a méreteit. Más BIM-programok a típusokat és a csoportot úgy olvassák, ahogy vannak; a BimCraft ebből állítja vissza a családot.

## Hol találja őket

- A projektböngésző **Családok** csoportja a modell családjait mutatja, méretenként és elhelyezettségük számával. Alattuk a **Kezdő családok** találhatók: az Ajtó és az Ablak eszköz ajtói és ablakai, valamint egy asztal, egy polcegység és egy alsó szekrény.
- A {{ui:Build}} › {{ui:Families…}} ugyanezt a listát mutatja egy ablakban.
- Kattintson egy családra a megnyitásához: látja a méreteit, az egyes méretek értékeit, és hogy hány elem használja mindegyiket.

## Ajtók és ablakok

Az Ajtó és az Ablak eszköz az adott fajta családjait listázza, mellettük pedig a **méretlistát**. Válasszon egy méretet, vagy írja be a **W** és **H** értéket: a szélesség és magasság, amelyet még egyetlen méret sem tartalmaz, a család új méretévé válik, amikor elhelyezi az ajtót. Azonos méretű ajtók egy típust használnak.

A **Tulajdonságok** panelen a kiválasztott ajtó vagy ablak megmutatja a **Családját** és a **Méretét**. Válasszon másik méretet a listából, vagy írjon be új szélességet vagy magasságot. A {{ui:Open the family}} megnyitja a hozzá tartozó családot.

Minden ajtó vagy ablak keretét a saját fala vastagsága követi, ahogy a családok előtt is. A méret típusa azt is megőrzi, hogy az ajtó 140 mm-es falban van rajzolva, a típusokat olvasó programok számára.

## Új méret ebből a családból

1. Nyissa meg a családot.
2. Az **Új méret ebből a családból** alatt írja be az értékeit (Szélesség, Magasság és a család többi paramétere), és ha szeretné, egy nevet is. Név nélkül az értékei alapján kap nevet.
3. Kattintson a {{ui:Make the size}} gombra.

Két méretnek nem lehetnek azonos értékei. Az **Átnevezés** egy méret nevét változtatja meg; az **Eltávolítás** eltávolít egy olyan méretet, amelyet senki nem használ; a **Kijelölés** kijelöli az adott méret elemeit.

## Bútor elhelyezése

1. {{ui:Build}} › {{ui:Place family}}, vagy a {{ui:Place}} gomb a család ablakában.
2. A sávban válassza ki a családot és annak méretét.
3. Kattintson az alaprajzra, hogy a szinten elhelyezze. A {{key:R}} billentyűvel 90°-kal elforgathatja, mielőtt kattint. Az {{key:Esc}} leállítja.

Az elhelyezett darab **Tulajdonságai** mutatják a méretét, helyét és az elforgatás mértékét; a {{key:Delete}} eltávolítja. Egy méret minden darabja azonos alakot használ, így a család módosítása mindet megváltoztatja.

## Méretek táblázatból

A {{ui:Sizes from a table…}} a család ablakában CSV-fájlt olvas be (vessző, pontosvessző vagy tabulátor elválasztóval). Az első sor nevezi meg az oszlopokat: egy paraméter nevét vagy címkéjét, és opcionálisan a `Name` oszlopot. A hosszúságok milliméterben értendők, hacsak nem ír mértékegységet (`1.2 m`, `36 in`). Az Igen / Nem oszlopok értéke yes, no, true, false, 1 vagy 0 lehet; az oszlop nélküli paraméter megtartja az alapértékét. Minden sorból egy méret lesz, egy visszavonható lépésben; a már meglévő méret kimarad. Ha egy sor nem olvasható be, vagy a család nem tudja megrajzolni, az egész táblázat visszautasításra kerül, és megnevezi a sorát. Legfeljebb 200 sor és 1 MB. A {{ui:Save the sizes as a table}} ugyanezt a táblázatot írja ki.

## Elemenként beállítva

A szerkesztőben **Elemenként** jelölt paraméter (Igen / Nem, amely kereszttagot, feliratot vagy anyagot ad hozzá) nem része a méretnek: két azonos méretű ajtó különbözhet. Válassza ki az elemet, és a **Tulajdonságok** megmutatja ezeket a paramétereket; ha egyet módosít, az elem saját alakjával rajzolódik újra (a bútorok és berendezések saját alakot kapnak, az ajtók és ablakok a falukban újra készülnek). Ha mindet visszaállítja az alapértékekre, visszatér a méretének alakjához.

## Részletezettség

A {{ui:Build}} › {{ui:Families…}} › **Részletezettség** beállítja, a modell minden családjára nézve, hogy mi kerül a testekbe és az alaprajzi szimbólumokba: a **Finom** mindent megtart; a **Közepes** és a **Durva** kihagyja a szerkesztő által finomabbnak jelölt részeket (kisebb fájlok, gyorsabb nézetek). Az **Automatikus** mindent ment, és a rajzlap nézete a léptéke alapján választ: 1:50 és nagyobb esetén finom, 1:100 esetén közepes, 1:200 és kisebb esetén durva. Egy visszavonható lépés.

## Család kettőzése

Nem kell a semmiből kezdenie. A {{ui:Duplicate}} új néven másolja a családot a paramétereivel, testeivel és méreteivel. A másolatot a szerkesztőben módosítsa; az eredeti megmarad.

## Családfájlok

- A {{ui:Save the family file}} `.ccfamily.json` fájlt ment: a család paramétereit, testeit és méreteit. Egy másik modellben a Családok csoport {{ui:Open a family file…}} parancsával nyithatja meg.
- A {{ui:Save as IFC}} a családot kis IFC-fájlként menti: a méretei típusait és a csoportját, egy IFC projektkönyvtár által deklarálva. Más programok típusok készleteként nyitják meg; a BimCraft újra családként nyitja meg.

Az itt megnyitott családfájl adatként olvasódik be, és mielőtt bármi íródna, ellenőrzésre kerül. Ha a kulcsa már szerepel a modellben, a család külön családként érkezik. Ha egy család más családokat tartalmaz (lásd a szerkesztő súgójában a Benne lévő családok részt), azokat is hozza: a fájl felsorolja őket, a modell pedig megtartja azokat, amelyek már megvannak.

## Családok a Könyvtárban

Nyissa meg a {{ui:Families…}} lapot, és válassza a {{ui:From the Library…}} elemet, hogy lássa a Könyvtárban megosztott családokat. A {{ui:Add to this project}} családfájlként olvassa be: a BimCraft minden mezőt ellenőriz, mielőtt bármit létrehozna, a család saját családként érkezik, és a szerkesztőben nyílik meg. A hozzáadás egy visszavonható lépés. Saját család megosztásához használja a {{ui:Save all as a library}} parancsot, és küldje el a fájlt a Könyvtárnak (a Könyvtár munkatársai parancs segítségével teszik közzé a családfájlt, és minden család külön tételként jelenik meg a méreteivel együtt). Ha a Könyvtár nem érhető el, a lista ezt jelzi, és semmi sem változik.

## Más programok típusai

Más programok által készített típusok is megjelennek a **Családok** csoportban, egy becsléssel csoportosítva: az elemek nevének az első kettőspont előtti része szerint, különben azon típusnevek szerint, amelyek csak számaikban térnek el. A családablak megmondja, melyik becslést használta. Ezek fel vannak sorolva, és kijelölhetők az elemeik, de itt nem szerkeszthetők: nincs családreceptjük.

:::note
A kezdő ajtók és ablakok pontosan úgy vannak megrajzolva, mint a családok előtt. A családok előtt készült fájlok változatlanul nyílnak meg: ajtóik és ablakaik a használt méretekkel a családjuk alatt jelennek meg, és az első módosításkor saját méretre kerülnek át.
:::

Lásd még: [Család szerkesztése](topic:family-editor) és [Ajtók és ablakok](topic:doors-and-windows).
