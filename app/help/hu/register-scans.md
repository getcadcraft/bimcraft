---
title: Több letapogatás regisztrálása egy rendszerbe
summary: Különböző helyekről készült letapogatások elhelyezése egy közös rendszerben kijelölt pontpárokkal vagy beírt célpontokkal, finomítás ICP-vel, a regisztráció mentése projektként, és a regisztrált felhő exportálása LAS vagy E57 formátumban.
keywords: regisztráció, letapogatások, pontfelhő, icp, iteratív legközelebbi pont, célpontok, pontpárok, merev transzformáció, igazítás, egyesítés, e57, las, letapogatásból BIM
from: e8e270db
---

## Mit fog tenni

Ugyanannak a helynek több letapogatása (mindegyik a saját szkenner-pozíciójából) a saját koordinátáival indul. Regisztrálja őket: adjon mindegyiknek egy elhelyezést, hogy mind egy rendszerbe kerüljön, majd mentse ezt projektként, és írja ki a regisztrált felhőt egyetlen LAS vagy E57 fájlba.

## Letapogatások elhelyezése

1. Nyissa meg a párbeszédpanelt ({{ui:Letapogatások regisztrálása…}} a kezdőpanelen, vagy a {{ui:Megjelenítés}} › {{ui:Letapogatások regisztrálása…}}, ha már van megnyitott modell). A {{ui:Letapogatások hozzáadása…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS vagy XYZ fájlokat fogad el, vagy húzza őket a párbeszédpanelre. Az eltérő mértékegységű letapogatásokat megjegyzéssel elutasítja: előbb az egyiket át kell alakítani.
2. Válassza a {{ui:Mozgatandó letapogatás}} és az {{ui:Elhelyezés ehhez képest}} lehetőséget. A kép a keretben lévő összes letapogatást mutatja a jelenlegi állapotában, mindegyik más színnel: {{ui:Alaprajz}}, {{ui:Elölnézet}} vagy {{ui:Oldalnézet}}; húzással mozgathatja, a görgővel nagyíthat.
3. **Pontpárok szerint.** Kattintson a {{ui:Pár kijelölése}} gombra, majd egy pontra a mozgatandó letapogatáson, majd ugyanarra a helyre egy másik letapogatáson (egy sarok, egy célpont, egy oszlop talppontja). Ezt legalább háromszor ismételje meg, olyan pontokkal, amelyek nincsenek egy egyenesen, és szét vannak szórva. Kattintson az {{ui:Elhelyezés párokkal}} gombra: a letapogatás legkisebb négyzetes illesztéssel kerül elhelyezésre, a **Maradék** mutatja, mennyivel tér el még minden pár. A nagy számú pár rossz pontválasztás: távolítsa el a kereszttel, és helyezze el újra.
4. **Célpontok szerint.** Ha egy pont valódi koordinátái ismertek (felmért célpontok), kattintson a {{ui:Kijelölés, majd a cél beírása}} gombra, kattintson a pontra a letapogatásán, és írja be a cél X, Y és Z értékét a sorba. A párok és a beírt célpontok szabadon keverhetők.

## Finomítás ICP-vel

A párok durva elhelyezést adnak. A {{ui:Finomítás}} addig mozgatja a letapogatást, amíg a felületei rá nem illeszkednek a másik letapogatás felületeire: először **pont-pont**, majd **pont-sík** szerint. A táblázat minden lépést felsorol a hibájával és azzal, hány pont talált párt; a fölötte lévő sor rajzolja a hiba csökkenését. A {{ui:Leállítás}} a folyamatban lévő lépés után véget vet a futásnak, és megtartja, amit elért. A {{ui:Visszavonás}} a teljes futást (vagy az utolsó elhelyezést) visszavonja; a {{ui:Visszaállítás}} visszateszi a letapogatást a fájl koordinátáira.

Laptopon gyors maradáshoz az ICP a pontok ritkított részhalmazán dolgozik ({{ui:Használt pontok}}, 5 000 és 60 000 között), és figyelmen kívül hagyja a {{ui:Legnagyobb egyezési távolság}} értéknél távolabbi egyezéseket (alapértelmezésben a letapogatás méretének 5%-a, ahogy a illeszkedés csökken). Először durva elhelyezés kell: ha alig fedik egymást, az jelzi, hogy nem illeszthetők. A csak lapos vagy csak egyenes felületek nem tudják a helyzetet saját irányukban rögzíteni; ilyenkor adjon hozzá párokat.

## Mentés és exportálás

- A {{ui:Projekt mentése}} egy kis `.ccscans.json` fájlt ír: minden letapogatás nevét, méretét és az első 64 KB-jának ujjlenyomatát, az átalakításával együtt. Pontokat nem tartalmaz. A {{ui:Projekt megnyitása…}} a letapogatásfájlokat a hivatkozásaik alapján találja meg (a fájlokat előbb hozzá kell adni), és visszaállítja minden átalakítást.
- Az {{ui:Exportálás LAS-ként}} és az {{ui:Exportálás E57-ként}} egyetlen fájlba írja az összes letapogatást a regisztrált helyén. Az eredeti fájlok pontjai nem íródnak át; az átalakítás a kiíráskor kerül alkalmazásra. Ha a **Minden pont beolvasása a fájlokból** be van kapcsolva, minden fájl újraolvasásra kerül minden pontért (letapogatásonként legfeljebb 20 millió); ha ki van kapcsolva, csak a megjelenített pontok kerülnek kiírásra.
- A {{ui:A regisztrált felhő megjelenítése}} (BimCraft) kiírja a LAS-t, és a 3D-nézetben a modell mellett megnyitja, mint bármely felhőt.

:::note
Semmi sem töltődik fel. A regisztráció a fájlok saját mértékegységeiben dolgozik, és megőrzi a milliméteres pontosságot: a LAS olyan skálával íródik, amely illeszkedik (0,1 mm-ig), az E57 dupla pontosságú számokkal. A koordinátarendszer csak akkor kerül át a LAS-be, ha minden letapogatás ugyanazt az EPSG-kódot nevezi meg. Az E57-író saját fejlesztés; a fájljait ezzel az olvasóval és a libE57Format könyvtárral visszaolvasva ellenőrizzük.
:::
