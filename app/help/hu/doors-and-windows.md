---
title: Ajtók és ablakok
summary: Ajtók és ablakok elhelyezése a rajzolt falakba: mutasson egy falra, lássa a nyitási irányt és a sarkoktól mért távolságokat, kattintson; a falnyílás magától kivágódik.
keywords: ajtó, ajtók, ablak, ablakok, nyílás, nyitási irány, zsanér, nyitási oldal, átfordítás, tolóajtó, zsebes tolóajtó, garázskapu, kétszárnyú ajtó, nyíló ablak, tolóablak, fix ablak, párkány, áthidaló, harmonikaajtó, szekrényajtó, franciaajtó, pajtaajtó, oldalüveg, bejárati ajtó, kinyíló ablak, képablak, felülvilágító
from: 4d8ac009
---

## Mit fog csinálni

Ajtókat és ablakokat helyezzen el a rajzolt falakba ([Falak rajzolása](topic:draw-walls)). Mutasson egy falra, és az ajtó vagy ablak megmutatja, hova kerülne, merre nyílik és milyen távol van minden saroktól. Kattintson, és a nyílás magától kivágódik a falból az alaprajzon és a 3D-ben.

## Ajtó elhelyezése

1. A {{ui:Rajzolás}} bekapcsolt állapotában kattintson az {{ui:Ajtó}} gombra (vagy nyomja meg a {{key:D}} billentyűt).
2. Válassza ki a típust: **Egyszárnyú nyíló ajtó**, **Kétszárnyú nyíló ajtó**, **Tolóajtó**, **Zsebes tolóajtó**, **Garázskapu**, **Harmonikaajtó szekrényhez**, **Franciaajtók**, **Pajtaajtó (a falon)** vagy **Bejárati ajtó oldalüveggel**. A szokásos mérete kitölti a **W** és **H** mezőt; válasszon másikat a mellette lévő méretlistából, vagy írjon be másikat, például `2'-8"` vagy `800`. A lista ennek a modellnek az ajtócsaládjait is felkínálja (lásd [Családok és méretük](topic:families)).
3. Mutasson egy falra. Az ajtó jele követi a mutatót a fal mentén, és a fal felületének mindkét végétől mért távolság megjelenik az alaprajzon.
4. Az ajtó a fal azon oldalára nyílik, amelyen a mutató van. Nyomja meg a {{key:H}} billentyűt (vagy kattintson a {{ui:Megfordítás}} gombra), hogy a zsanér a másik végre kerüljön.
5. Kattintson. Az ajtó elhelyeződik, és az eszköz a következőhöz is bekapcsolva marad. Ha a fal közepére mutat, az ajtó magától középre áll.

Pontos távolsághoz mutasson a falra a sarok közelében, amelytől mér, írja be a távolságot (például `2'` vagy `600`), és nyomja meg az {{key:Enter}} billentyűt. A távolság a falfelület közelebbi végétől az ajtó széléig tart.

## Ablak elhelyezése

1. Kattintson az {{ui:Ablak}} gombra (vagy nyomja meg az {{key:N}} billentyűt).
2. Válassza ki a típust: **Fix ablak**, **Egyszárnyú függőleges ablak**, **Kétszárnyú függőleges ablak**, **Nyíló ablak**, **Tolóablak**, **Kinyíló ablak**, **Képablak** vagy **Felülvilágító**, és állítsa be a **W**, **H** és **Párkány** értékét (utóbbi az ablak alsó élének magassága a padló felett).
3. Mutasson egy falra, és kattintson, vagy írjon be távolságot, és nyomja meg az {{key:Enter}} billentyűt, mint az ajtóknál. Az ablak a fal külső oldalán ül.

## Mozgatás, megfordítás, törlés

- A {{ui:Kijelölés}} bekapcsolt állapotában húzzon egy ajtót vagy ablakot a fal mentén. Húzza egy másik falra, hogy oda kerüljön.
- A {{key:Delete}} törli a kijelölt ajtókat és ablakokat; a fal összezáródik.
- Egy fal mozgatása vagy törlése mozgatja vagy törli a benne lévőket. Ha a fal kezdete a saját vonalán mozdul, ajtajai és ablakai megtartják a helyüket.
- A {{ui:Visszavonás}} és az {{ui:Ismétlés}} minden elhelyezést, mozgatást vagy törlést oda-vissza visszavesz.

## Mit utasít el

- **Nem fér el abban a falban.** Az ajtó vagy ablak szélesebb a falnál, vagy kilógna a végén. Próbáljon rövidebb szélességet vagy hosszabb falat.
- **Magasabb a falnál.** A párkány és a magasság együtt a fal teteje fölé esik.

## Mi mentődik

Minden ajtó vagy ablak egy IFC-ajtó vagy -ablak a méretével, működésével (például egyszárnyú, balra nyíló), a méretének típusával (egy típus a családja minden mérete számára), `Pset_DoorCommon` vagy `Pset_WindowCommon` tulajdonságkészlettel és alapmennyiségekkel, és kitölti a falában lévő IFC-nyílást. A fal nettó oldalfelülete és térfogata a nyílást nem számolja. Más BIM-programok falban lévő ajtóként nyitják meg.

## Jó tudni

- Az alaprajz 90°-ban nyitva mutatja az ajtókat a nyitási irányukkal, a tolóajtókat két táblaként, a zsebes tolóajtókat a falba csúszva, a garázskapukat fent szaggatott vonalként, az ablakokat a keretükkel és az üvegvonalaikkal.
- A szélesség a keret teljes szélessége; az ajtólap a szélesség mínusz a két ajtófélfa.
- A rajzolt ajtók és ablakok másolása még nincs elkészítve: helyezzen el egy másikat.

## Pincei menekülő ablak és akna

Válassza a **Pincei menekülőablak aknával** lehetőséget az ablaktípusok listájában. 36 × 48 hüvelykes nyíló ablakként indul, a szint felett 36 hüvelyk magas párkánnyal. Az akna a fal külső oldalán van, legalább 48 hüvelyk szabad szélességgel, 36 hüvelyk kiugrással, és az alja a párkány alatt 6 hüvelykkel van. Az alaprajzon szaggatott vonalként, a 3D-ben három nyitott tetejű oldalként jelenik meg. Az akna az ablak IFC-testének része, így az ablak mentése, mozgatása, átméretezése vagy törlése magával viszi. Átméretezéskor minden ajtófélfa mellett legalább 6 hüvelyk marad.

Ezek modellezési alapértékek, nem menekülési megfelelőség igazolása. Ellenőrizze külön a gyártó tényleges szabad nyílását, a helyi előírásokat, a lejtést, a vízelvezetést és az esetleges kötelező létrát. Az akna mélysége és magassága előre beállított méret; nem követi a terepet.
