---
title: Berendezéskimutatás készítése és CSV exportálása
summary: Alakítsa a konyhai vagy vendéglátó-ipari rajz tétel-címkéit berendezéskimutatássá, szűrje, ugorjon minden tételhez a rajzlapján, és töltse le CSV-ként.
keywords: berendezés, kimutatás, vendéglátás, konyha, tételcímkék, kcl, attribútumok, anyagjegyzék, bom, csv, táblázat, exportálás, adatkinyerés
from: e3faa1c8
---

## Mit fog csinálni

Olvassa ki a berendezéslistát egy konyhai vagy vendéglátó-ipari rajzból, ellenőrizze, keresse meg minden tételt az alaprajzon, és töltse le táblázatfájlként.

Ez azokon a rajzokon működik, ahol a berendezéscímkék az adataikat blokkattribútumként tárolják, ahogy a KCL-hez hasonló konyhatervezési könyvtárak teszik: minden címke tartalmazza a tételszámot (`KCL-ITEM`), a mennyiséget, a kategóriát, a gyártót, a típust, az elektromos és vízvezetékes adatokat, valamint a megjegyzéseket. Más rajzokon nincs {{ui:Equipment}} lap.

## Lépések

1. Nyissa meg a rajzot, lehetőleg a projektmappájából, hogy a külső hivatkozású rajzai is betöltődjenek.
2. Kattintson a rajz fölötti {{ui:Equipment}} lapra. A címke megmutatja, hány tétel van rajzlapokon, például „Berendezések (88)”.
3. Olvassa el a kimutatást: **Tétel**, **Mennyiség**, **Berendezés**, **Gyártó**, **Típus**, **Elektromos**, **Vízvezeték** és **Hol**.
4. Válassza ki a táblázat fölötti menüben, mit listázzon: **Minden rajzlap**, egy rajzlap, **Egyik rajzlapon sem** vagy **Minden címkézett elem a rajzon**. Minden választás mutatja a darabszámát.
5. Írjon a szűrőmezőbe („Szűrő: kategória, gyártó, típus…”), hogy leszűkítse a listát, például `refrigerator` vagy `208`.
6. Kattintson egy tétel rajzlapnevére a **Hol** oszlopban.
7. Nézze meg a rajzot: a BimCraft átvált arra a rajzlapra, ráközelít a tételre, és gyűrűt rajzol köré. Az állapotsor ezt írja ki: „Tétel *n*, *kategória* körbe van jelölve itt: *rajzlap*.”
8. A kimutatáshoz való visszatéréshez kattintson a {{ui:Equipment}} gombra.
9. Kattintson a {{ui:Download CSV}} gombra.

## Eredmény

- Egy fájl „*rajz neve* equipment.csv” néven (ha egy rajzlapot listázott, a rajzlap nevével zárójelben) a letöltések mappában. Excelben, Numbersben, LibreOffice-ban vagy Google Táblázatokban nyílik meg.
- Az állapotsor: „Letöltve: *fájlnév* (*n* tétel).”

A CSV ezekkel az oszlopokkal rendelkezik: Tétel, Mennyiség, Kategória, Gyártó, Típus, Elektromos, Vízvezeték, Megjegyzés, Elektromos megjegyzés, Vízvezetéki megjegyzés, Rajzlapok, Elhelyezve (hány címke). Pontosan azokat a sorokat tölti le, amelyek a táblázatban látszanak, a menü és a szűrő alkalmazása után.

## Hogyan épül fel a kimutatás

- A kimutatás a **címkékből** készül, nem a rajzlapon látható kimutatástáblázatból. A táblázat fölötti megjegyzés megmondja, hány címkét olvasott be.
- Egy sor egy tételszámnak és egy adatcsoportnak felel meg. Mennyisége a címkéinek **összege**, ahogy a nyomtatott kimutatás számolja: ha a polcrendszer az egyik helyen „5”, a másikon „3” címkét kapott, az 8, és „5 + 3”-ként jelenik meg.
- A **Hol** oszlop azokat a rajzlapokat sorolja fel, amelyek az adott tételt mutatják. Ez abból adódik, hogy mit mutatnak a rajzlapok nézetablakai, vagyis ami nyomtatásra kerül. A „Csak modell” azt jelenti, hogy egyik rajzlap sem mutatja.
- A **Kétszer használt szám** egy tételszámot jelöl, amely két különböző berendezéshez tartozik. A sor borostyánsárga jelet kap.
- Azok a címkék, amelyeket egyik rajzlap sem mutat, külön, az **Egyik rajzlapon sem** alatt jelennek meg. Gyakran korábbi tervekből vagy más munkákból maradnak itt, és soha nem keverednek a **Minden rajzlap** listába.
- Az **Elektromos** oszlop a címkén megadott amperet, kW-ot, HP-t, voltot, fázist, csatlakozást és dugót mutatja. A **Vízvezeték** a csatlakozóméreteket mutatja: CW hideg víz, HW meleg víz, DD közvetlen lefolyó, ID közvetett lefolyó és gáz. Más címkemezők még nem jelennek meg.

## Gyakori hibák

- **Nincs {{ui:Equipment}} lap.** A rajznak nincsenek `KCL-ITEM` címkéi, vagy a berendezései adatok nélkül vannak rajzolva. Nincs mit beolvasni.
- **A darabszám eltér a nyomtatott kimutatástól.** A nyomtatott kimutatás tartalmazhat tartalék számokat, vagy a címkéknél rövidebb neveket használhat. A ténylegesen elhelyezett darabszámhoz a címkéket tekintse irányadónak; az eltéréseket a tervezővel ellenőrizze.
- **A CSV megnyitásakor furcsa karakterek jelennek meg.** A fájl UTF-8 kódolású. Nyissa meg a táblázatkezelő importálási parancsával, és ha a program kéri, válassza az UTF-8-at.
- **Egy cella aposztrófal kezdődik.** A `=`, `+`, `-` vagy `@` jellel kezdődő értékek elé `'` kerül, hogy a táblázatkezelők ne számítsák képletként.
- **Az {{key:F}} és {{key:P}} nem tesz semmit.** Ezek a rajzon működnek, nem a kimutatásban. Előbb kattintson egy rajzlapfülre.
