---
title: Rajzolási tanácsok – szokatlan méretek figyelmeztetéssel készülnek el
summary: A BimCraft azt készíti el, amit kér. A szokásostól eltérő méret figyelmeztetés lesz a Problémák között; soha nem akadályozza a rajzolást vagy a mentést.
keywords: tanács, figyelmeztetés, problémák, elutasítás, nem rajzolható, túl kicsi, túl keskeny, minimum, határ, lépcső szélesség, lépcsőfok magasság, lépcsőfok mélység, oszlop, rámpa, ajtóméret, rácsvonal, szintmagasság, tetőkiugró, csigalépcső, alaplemez lejtés, rövid fal, nincs akadály
from: 20090130
---

## Mit fog csinálni

Rajzoljon a szokásostól eltérő méretet, és nézze meg, hol szól erről a BimCraft.

## Lépések

1. Rajzolja vagy módosítsa az elemet a kívánt módon: például egy 400 mm széles lépcsőt.
2. A BimCraft úgy készíti el, ahogy kérte.
3. Nyissa meg a felső sávban a {{ui:Problémák}} gombot. A **Rajzolási tanácsok** alatt egy figyelmeztetés található, amely megnevezi az elemet, az Ön által megadott méretet és a szokásos tartományt.
4. Kattintson a figyelmeztetésre az elem kijelöléséhez. Ha elírás volt, módosítsa a méretet; ha nem, hagyja úgy: a figyelmeztetés elfogadható, indokkal vagy anélkül.

## Mi a tanács

Ezeket korábban a program elutasította. Most elkészülnek, mindegyik figyelmeztetéssel:

- **Lépcsők**: 500 mm-nél keskenyebbek vagy 5 m-nél szélesebbek; a lépcsőfok-magasság 100 és 300 mm-en kívül esik; a lépcsőfok-mélység 150 és 600 mm-en kívül esik.
- **Csigalépcsők**: az oszlopuk 40 és 400 mm-en kívül esik; a járási vonalon 100 mm-nél sekélyebb lépcsőfokok.
- **Oszlopok**: átmérőjük 50 mm-nél kisebb, vagy magasságuk 300 mm-nél alacsonyabb.
- **Rámpák**: 300 mm-nél keskenyebbek.
- **Ajtók és ablakok**: 100 mm-nél keskenyebbek vagy alacsonyabbak.
- **Rácsvonalak**: 100 mm-nél rövidebbek.
- **Falak**: egy fal 50 mm-nél rövidebb maradt, például egy levágás után.
- **Szintek**: 1 m-nél alacsonyabbak vagy 100 m-nél magasabbak (új épület, osztott szintek, egy szint magassága).
- **Tetőkiugrók**: szélességük 600 mm és 12 m között van, előfalaik 300 mm és 4 m között, túlnyúlásuk nem több 1 m-nél, falaik 50 és 400 mm között.
- **Alaplemezek**: oldallejtésük 1:1 és 10:1 között van.

## Ami továbbra is elutasításra kerül

Csak az, amit nem lehet megépíteni vagy megtalálni; mindegyik üzenet megmondja, miért:

- 10 mm-nél kisebb méret (1 mm-nél kisebb fal): nincs mit megépíteni.
- Olyan tetőkiugró, amely nem szélesebb a falvastagság kétszeresénél: az oldalfalai találkoznának.
- Olyan alaplemez, amelynek oldallejtése meredekebb 0.1:1-nél (ez egy támfal) vagy laposabb 100:1-nél (a terepformálás végtelenig futna).
- Valami, ami nem fér el oda, ahová tette; egymást metsző körvonal; vagy olyan elem, amely már nincs a modellben.

## Jó tudni

- A tanácsot a modellből számítja ki, így a fájl későbbi megnyitásakor újra megjelenik, és eltűnik, amint a méret rendben van.
- A modellellenőrzések, a szabályozási csomagok és az IDS-ellenőrzések is csak felsorolják, amit találnak. A {{ui:Problémák}} semmi nem akadályozza a rajzolást vagy a mentést.
- A szokásos tartományok általános gyakorlatot tükröznek, nem építési szabályzatot. Szabályzathoz adja hozzá az **Építési előírások** bővítményt, és válassza ki a helyét.

## Tovább

- [Modell ellenőrzése gyakori problémákra](topic:model-checks)
- [Lépcsők és korlátok](topic:stairs-and-railings)
