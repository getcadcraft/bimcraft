---
title: Épületelemek törlése, kivágása, másolása és beillesztése
summary: Válasszon ki falakat, ajtókat, bútorokat vagy bármi mást egy IFC-modellben; törölje, vágja ki, vagy másolja és illessze be oda, ahová kattint, a helyére vagy másik szintre.
keywords: törlés, eltávolítás, kitörlés, kivágás, másolás, beillesztés, kettőzés, mozgatás, összes kijelölése, mind kijelölése, épületelem, fal, ajtó, ablak, lépcső, nyílás, visszavonás
from: d9eec37f
---

## Amit elvégez

Módosítsa egy IFC-modell tartalmát: távolítson el a nem kívánt elemeket, másoljon egy falat vagy bútorcsoportot másik helyre, vagy helyezzen át elemeket kivágással és beillesztéssel. Minden módosítás egy visszavonható lépés, és a mentés új fájlt ír, így az eredeti megmarad.

## Lépések

1. Nyisson meg egy IFC-modellt. Lásd: [Egy IFC-modell megnyitása és körülnézés 3D-ben](topic:open-ifc-model).
2. Jelölje ki, amit módosítani szeretne: kattintson egy elemre, tartsa lenyomva a {{key:Mod}} vagy a {{key:Shift}} billentyűt, és kattintson további elemek kijelöléséhez, vagy nyomja meg a {{key:Mod+A}} billentyűt ({{ui:Továbbiak}}, {{ui:Összes kijelölése}}) a látható összes elem kijelöléséhez.
3. Ezután:
   - **Törlés:** nyomja meg a {{key:Delete}} billentyűt, vagy válassza a {{ui:Továbbiak}}, {{ui:Törlés}} lehetőséget.
   - **Másolás:** nyomja meg a {{key:Mod+C}} billentyűt, vagy kattintson a {{ui:Másolás}} gombra.
   - **Kivágás:** nyomja meg a {{key:Mod+X}} billentyűt, vagy válassza a {{ui:Továbbiak}}, {{ui:Kivágás}} lehetőséget. Az elemek eltűnnek, és beilleszthetők.
4. Beillesztéshez nyomja meg a {{key:Mod+V}} billentyűt, vagy kattintson a {{ui:Beillesztés}} gombra. A másolt elemeknek megfelelő méretű átlátszó doboz követi a mutatót a elhelyezősávban kiválasztott szinten. Nyomja meg az {{key:R}} billentyűt a 90°-os elforgatáshoz, majd kattintson arra a helyre, ahová kerüljön. Minden kattintás újabb példányt helyez el; a leállításhoz nyomja meg az {{key:Esc}} billentyűt.
5. Vagy nyomja meg a {{key:Mod+Shift+V}} billentyűt ({{ui:Továbbiak}}, {{ui:Beillesztés helyben}}): kivágás után az elemek pontosan vissza kerülnek az eredeti helyükre; másolás után a másolat közvetlenül az eredeti mellé kerül.
6. Kattintson a {{ui:Mentés IFC-ként}} gombra a módosított modell letöltéséhez.

## Mi tartozik az elemhez

- **Részek:** a lépcső a lépcsőkarjaival, a függönyfal a paneljeivel együtt; a részekből álló elem minden részével együtt kerül át.
- **Nyílások:** a fal magával viszi a benne vágott nyílásokat. Ajtó vagy ablak törlésekor az általa betöltött nyílás is törlődik, így a fal zárva lesz, ahogy egy szerkesztőprogramban is. A BimCraftban rajzolt fal törlésekor a hozzá tartozó ajtók és ablakok is törlődnek, a megmaradt falak pedig újra összekapcsolódnak. Más helyen készült fájlból falat törölve az ajtók és ablakok a helyükön maradnak.
- **Adatok:** a másolatnak ugyanaz a típusa, anyaga, tulajdonságkészlete és mennyiségei van, mint az eredetinek, de új GlobalId-val rendelkezik. Ha később a másolaton módosít egy értéket, az eredeti nem változik.
- **Könyvtári elemek** megtartják könyvtári adataikat; a másolat a következő szabad sorszámot kapja, a visszailleszett kivágott elem pedig megtartja a sajátját.

## Amit látnia kell

- „Törölve: …” vagy „Beillesztve: …” a {{ui:Módosítások}} listában. A {{key:Mod+Z}} visszavonja az utolsó módosítást; a {{key:Mod+Y}} újra visszateszi.
- Törlés után az állapotsor kiírja, hány rész és nyílás került törlésre is.
- A beillesztett elemek ki vannak jelölve, így a {{ui:Beillesztés helyben}} paranccsal sort készíthet belőlük, vagy törölheti őket.

## Jó tudni

- A másolatok ugyanazt a geometriát használják, mint az eredeti (az IFC lehetővé teszi, hogy az elemek megosszák), így a fájl alig nő.
- Az épületelemek ugyanabba a modellbe illeszthetők be, amelyből másolták, ugyanabban a lapon. Elhelyezett könyvtári elemeket egy másik modellben úgy használhat, hogy egyszerre egy elemet másol: lásd [Könyvtári elemek másolása, beillesztése és kettőzése](topic:copy-paste).
- Szintek, terek, épületek és a telek nem törölhetők és nem másolhatók. Ehelyett a bennük lévő elemeket jelölje ki. A BimCraftban rajzolt helyiség a körülötte lévő falakból jön létre: két helyiség összevonásához törölje a közöttük lévő falat.
- A BimCraft saját fal-, ajtó- és ablakeszközeivel rajzolt falak, ajtók és ablakok egyelőre nem másolhatók, nem vághatók ki és nem kettőzhetők; az állapotsor ezt jelzi. Rajzolja meg őket újra. A törlés működik.
- A Másolás a kimásolt elemek neveit és tulajdonságait szövegként is a vágólapra teszi, hogy táblázatba vagy e-mailbe be lehessen illeszteni.

## Gyakori hibák

- **A {{ui:Törlés}} szürke.** Nincs kijelölés, vagy csak szintek vagy terek vannak kijelölve. Vigye rá a mutatót, és olvassa el az okát.
- **A beillesztésnél azt írja, hogy az elemek másik modellből származnak.** A másolás óta másik modellt nyitott meg. Nyissa meg újra az első modellt, és másolja ki ott az elemeket.
- **A beillesztett másolat másik emeleten van.** Az elhelyezősáv {{ui:Szint}} mezője dönti el, hová kerül; a kattintás előtt válassza ki a szintet.

## Kapcsolódó

- [Elemek elrejtése, elszigetelése és áttetsző megjelenítése](topic:hide-and-isolate)
- [Billentyűk és egér](topic:keyboard#edit)
