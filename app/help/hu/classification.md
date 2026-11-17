---
title: Osztályozási kódok (Uniclass, OmniClass, UniFormat)
summary: Adjon osztályozási kódot minden elemnek és típusnak, válassza ki, mely rendszereket használja a projekt, keressen az alkalmazással érkező Uniclass-táblázatokban, töltse be irodája saját, licencelt táblázatait, és jelenítse meg a kódokat a kimutatásokban. A kódok az IFC-fájlba íródnak más szoftverek számára.
keywords: osztályozás, osztályozni, kód, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, táblázat, elemkód, típuskód, alapértelmezett kód, IfcClassification, IfcClassificationReference, cobie, kimutatás oszlop, csv, licenc, license
from: 222b94cd
---

## Mit fog csinálni

Helyezzen osztályozási kódot a falakra, padlókra, tetőkre, ajtókra, ablakokra és a modell minden más elemére, legfeljebb három rendszerben egymás mellett: Uniclass, OmniClass és UniFormat. Más szakágak és más szoftverek a kódot használják, nem a nevet, ezért a kódok osztályozási hivatkozásként mentődnek az IFC-fájlba, amelyet bármely BIM-program olvas.

## Kód adása egy elemhez

1. Válasszon ki egy elemet (vagy többet), és nyissa meg a **Tulajdonságok** panelt. Nyissa meg az {{ui:Osztályozás}} részt.
2. Írja be a kódot a rendszere mezőjébe, és nyomja meg az Entert. Ha kódlista van betöltve, írjon be a kód egy részét vagy néhány szót („függönyfal”), és válasszon az egyezések közül: a kód címe automatikusan kitöltődik.
3. A {{ui:Vonatkozik}} megmutatja, hova kerül a kód: **Ez az elem**, vagy **A típusa (a típus minden eleme)**. Egy falítípusra adott kódot a típus minden fala olvassa, a később rajzoltakat is.
4. A {{ui:Törlés}} gombbal eltávolíthatja a kódot.

A kódok alatt a szakasz megmutatja, honnan származnak: ezen az elemen lettek beállítva, a típusától származnak, vagy az osztály projektszintű alapértelmezése. Egy elem saját kódja mindig felülírja a típusáét, a típusé pedig az alapértelmezését. Ha több elem van kijelölve, a „változik” jelzésű mező azt jelenti, hogy nem osztoznak egy kódon; ha egyet ír be, az mindegyiknek adódik. Minden változtatás egy visszavonási lépés.

A kódot mindig be lehet írni, akár van lista betöltve, akár nincs. Ha nem úgy néz ki, mint az adott rendszer kódja, vagy nincs a betöltött listában, egy tipp ezt jelzi, és a kódot úgy tartja meg, ahogy beírta.

## A projekt rendszereinek kiválasztása

Nyissa meg az **Adatok** fület a modellsávon, és válassza ki az {{ui:Osztályozás}} lehetőséget (vagy a Tulajdonságok részben az {{ui:Projekt osztályozása…}} lehetőséget).

- Jelölje be a projekt által használt rendszereket. A Tulajdonságokban ekkor csak ezek látszanak.
- **Uniclass**: az Elemek/funkciók (EF), a Rendszerek (Ss) és a Termékek (Pr) táblázatai az alkalmazással érkeznek. Ezek © NBS, Creative Commons Attribution-NoDerivatives 4.0 (CC BY-ND 4.0) licenc alatt állnak, változatlanul továbbadva. A párbeszédpanel minden táblázat kiadását és beolvasásának napját mutatja. Nem a legújabbak: a kiadó negyedévente saját honlapján ad ki újakat.
- **OmniClass** és **UniFormat**: az alkalmazással nem érkezik kódlista, mert kiadójuk licenc nélkül nem engedi a táblázatok továbbadását. Írjon be bármely kódot, vagy töltse be irodája saját, licencelt táblázatát.
- A {{ui:Táblázat betöltése (CSV)…}} gombbal irodája saját táblázatát olvassa be egy CSV-fájlból, amelyben van kódoszlop és címoszlop (a Code, Number vagy Identifier, illetve a Title, Name vagy Description fejlécet a program magától megtalálja; enélkül az első két oszlopot használja). A táblázat ebben a böngészőben marad, és sosem kerül a projektfájlba. A fájlba csak a hozzárendelt kódok mentődnek. Az újabb Uniclass-táblázatot is ilyen módon töltheti be.
- A {{ui:Elemek alapértelmezett kódjának megadása osztályuk szerint}} gombbal minden falnak, padlónak, tetőnek, ajtónak, ablaknak, lépcsőnek, rámpának, oszlopnak, gerendának és bútordarabnak kezdő Uniclass-kódot ad az Elemek/funkciók táblázatából, ha nincs saját kódja. Az ezután rajzolt elemek is megkapják.
- A {{ui:A kódok megjelenítése oszlopokként a kimutatásokban}} beállítás rendszerenként egy oszlopot ad az Ajtók, Ablakok, Falak típusonként és Helyiségek kimutatásokhoz, valamint azok CSV-exportjához. Több elemből álló sorban „változik” jelenik meg, ha a kódjaik eltérnek.

## Tudnivalók

- Az alapértelmezett kódok a CadCraft saját kiinduló választásai, nem a kiadóé, és szakember nem ellenőrizte őket. Ellenőrizze a projekt szabványa szerint.
- A fájlban az alapértelmezés valódi osztályozásként jelenik meg, „CadCraft default” kapcsolati névvel jelölve, és megszűnik, amint az elem vagy a típusa saját kódot kap.
- A már meglévő, importált fájl kódjait a program beolvassa és megjeleníti, bármilyen írásmóddal is nevezte el a másik program a rendszert. Más rendszerek (egy iroda saját rendszerének) kódjait listázza, de nem módosítja őket.
- A kódok a fájl újbóli megnyitásakor visszaolvasódnak, akár itt, akár másik programban. Ha a laboratóriumi IFC5 alfa (IFCX) exportot bekapcsolták, a kódok abba is bekerülnek, kivéve a tetőre adott kódot.
- Még nincs elkészítve: a táblázat szintenkénti böngészésére szolgáló fa, a szintekre és helyiségekre adott kódok mint projektszintű alapértelmezések, illetve a kód ellenőrzése a fájlban megnevezett kiadással szemben.
