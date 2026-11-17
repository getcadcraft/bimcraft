---
title: Kimutatás elrendezése, mentése és exportálása
summary: Csoportosítsa a kimutatást, adjon neki részösszegeket és összesítéseket, vegyen fel oszlopot egy tulajdonságból, mentse beállításként a fájlban, és exportálja táblázatfájlként (.xlsx), online táblázatba illeszthető szövegként vagy CSV-ként. Az irodai szabvány kitölti azt, amit a kimutatás nem határoz meg.
keywords: kimutatás elrendezése, csoportosítás, részösszeg, összesítés, fejlécek, irodai szabvány, alapértelmezett szabályzatok, beállítás, ajtókimutatás szintenként, tűzállóság, vasalat, xlsx, munkafüzet, online táblázat, beillesztés, csv, exportálás, táblázat, elemek, kijelölés a kimutatásból, szám
from: 95dfd801
---

## Mit fog tenni

Egy egyszerű kimutatásból olyat készít, amilyet az irodája kiad: szintenként, típusonként vagy helyiségenként csoportosítva, részösszegekkel és összesítéssel, a szükséges oszlopokkal, saját néven. Ezután táblázatba küldheti. Minden sor és minden szám tudja még, mely elemekből származik.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} funkciót, és nyissa meg a **Kimutatások** részt a bal oldali panelen. Válasszon egy kimutatást, például az **Ajtók** lehetőséget.
2. A táblázat felett válassza a **Csoportosítás** (a kimutatás egy oszlopa, például Szint vagy Típus, vagy **Nincs csoportosítás**) és az **Összesítések** (**Nincs összesítés**, **Egy összesítés** vagy **Részösszegek és összesítés**) lehetőséget. A **Beállítás szerint** a mentett beállításra vagy az irodai szabványra hagyja a döntést.
3. Ha az elemekből olvasott oszlopot szeretne hozzáadni, írjon be egy tulajdonság- vagy címkenevet a táblázat alá (például `FireRating`, `Pset_DoorCommon.FireRating` vagy egy címke neve, például `Ironmongery`), és kattintson az **Oszlop hozzáadása** gombra. A BimCraft előbb az elem saját tulajdonságkészleteit olvassa, majd a típusáét. Ha az elemnek még nincs értéke, ezt jelzi; az oszlop magától kitöltődik, amint értéket adnak meg.
4. Írjon be egy nevet (például „Ajtókimutatás szintenként”), és kattintson a **Mentés beállításként** gombra. A beállítás az épületfájlban marad, és a nevén bekerül a Kimutatások listájába. Követi a modell minden változását. Az **Ez a beállítás eltávolítása** gombbal törölhető. Mindkettő egy visszavonási lépés.

## Kattintson egy számra, és jelölje ki, honnan származik

Kattintson bármely sorra vagy bármely egyes számra, hogy kijelölje a mögöttük álló elemeket az alaprajzon és a 3D-ben:

- a sor kijelöli a sor elemeit;
- a részösszeg vagy az összesítés kijelöli mindazt, amit összead, a csoportfejléc pedig a csoportját;
- az elemekkel rendelkező szám ezeket jelöli ki: egy falfajta **Levonásai** az ajtajait és ablakait, egy helyiség falterülete a falait.

Ugyanez működik a modellből készült dokumentumban is: az előnézetben kattintson a kimutatás egyik számára.

## Exportálás

- Az **Excel letöltése** egy .xlsx munkafüzetet ment. A hosszúságok, területek, térfogatok és darabszámok valós számok abban a mértékegységben, amelyet az oszlop mutat (a láb és hüvelyk szövegként marad). Egy második lap, az **Elemek**, soronként felsorolja a mögötte álló elemek GlobalId-jait.
- A **Másolás Google Sheets-hez** a kimutatást tabulátorral elválasztott szövegként a vágólapra teszi. Egy Google Sheets-táblázatban kattintson az A1 cellára, és illessze be. Az **Új Google Sheets megnyitása** megnyitja a `sheets.new` címet, Google saját címét egy üres táblázathoz, az Ön saját Google-fiókjában. A BimCraft nem jelentkezik be a Google-be, és semmit nem küld oda: a beillesztés az Öné.
- A **CSV letöltése** a táblázatot úgy menti, ahogy a képernyőn elrendezve látható.

## Az irodai szabvány

Egy iroda egyszer megadhatja, hogyan legyenek elrendezve a kimutatásai. Kapcsolja be az **Alapértelmezett szabályzatok** bővítményt ([Alapértelmezett szabályzatok](topic:default-policies)), és állítsa be a **Beállítások › Általános › Alapértelmezett szabályzatok › Kimutatás-elrendezés (irodai szabvány)** alatt:

| Szabályzat | Mit csinál |
|---|---|
| Kimutatások csoportosítása | Szint, Típus, Helyiség vagy nincs csoportosítás, minden olyan kimutatásnál, amelynek ilyen oszlopa van |
| Összesítések a kimutatásokban | Nincs összesítés, egy összesítés a végén, vagy részösszeg minden csoport alatt és egy összesítés |
| Kimutatás címe | Minta, például `{project}: {schedule}` |
| Oszlopfejlécek | Ahogy be van írva, NAGYBETŰS, vagy szavanként nagy kezdőbetűs |

A szabvány minden kimutatásra vonatkozik, függetlenül attól, ki állította be: az egyszerű kimutatásokra a panelen, a mentett beállításokra, az asszisztens által beállított kimutatásra, az exportokra és a dokumentumok kimutatásaira. Egy beállítás, amely saját csoportosítást, összesítést vagy címet ad meg, megtartja azokat; a szabvány a többit tölti ki. A panel jelzi, mely részeket állította be az irodai szabvány. A szabályzatok az Alapértelmezett szabályzatok fájllal együtt utaznak a többivel.

## Érdemes tudni

- A beállítás a forráskimutatást és az oszlopait nevezi meg; számokat nem tartalmaz. A számokat minden alkalommal a modellből olvassa ki.
- Azok a listák, amelyek nem elemsorok (a falösszeállítások és az anyagjelmagyarázat), itt nincs elrendezésük és exportjuk.
- Egy asszisztens mindezt elvégezheti Ön helyett: lásd [Egy AI-asszisztens használata a modelljével](topic:assistants).
