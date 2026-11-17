---
title: Emberek sétáltatása az épületben
summary: Evakuálás vagy egy átlagos nap érkezői a helyiségein, ajtóin és lépcsőin keresztül, a szűkülő pontoknál sorokkal, minden helyiségből a kijárathoz vezető leghosszabb úttal, és az eredmények a Problémák között. Durva tömegmodell tervezési döntésekhez, nem tűzvédelmi tanúsítvány.
keywords: emberek, evakuálás, menekülés, kijárat, utazási távolság, sor, tömeg, áramlás, ajtószélesség, lépcsők, érkezők, szűk keresztmetszet, szimuláció, lakók, gyalogos, mi lenne ha, lezárt ajtó
from: 84aa8920
---

A bal oldali panel {{ui:Emberek az épületben}} szakasza sétáltatja az embereket a nyitott IFC-modell helyiségein, ajtóin és lépcsőin keresztül. A modell egyetlen eleme sem változik, és semmi sem töltődik fel.

:::warning
Ez **tervezési segédeszköz, nem tűzvédelmi tanúsítvány**. Nem ismeri a tüzet, a füstöt, a pánikot, a mozgásbeli különbségeket, és nem tudja, mit ír elő egy szabályzat. A határokat a tervezőnek kell megadnia: a kijáratig vezető leghosszabb utat és a rendelkezésre álló időt a felhasználó írja be, és egyiket sem feltételezi a rendszer.
:::

## Futtatás

1. Nyisson meg egy modellt zárt helyiségekkel és ajtókkal. Az egy oldalon helyiséggel rendelkező ajtó kijárat; két helyiség közötti ajtó összeköti azokat; a lépcső a végein köti össze a helyiségeket.
2. Válassza az **Evakuálás** (mindenki kijárathoz sétál), az **Érkezés** (mindenki belép, és helyiségbe sétál) vagy a **Csere** (a helyiségekben lévők kimennek, miközben ugyanannyian bejönnek) lehetőséget, valamint az egy főre jutó alapterületet. A folyosóhoz, lépcsőházhoz, előtérhez vagy mosdóhoz hasonló nevű helyiségekben nem tartózkodik senki.
3. Kattintson a {{ui:Futtatás}} gombra. Megkapja azt az időt, amikor az utolsó személy kijut (és mikor jut ki a fele, illetve a kilenc tizede), az egyes ajtók és lépcsők sorait, a leghosszabb utat megtevő helyiséget, valamint a futást lejátszó alaprajzot.

## Mi lenne, ha

Jelölje be a táblázatban lévő ajtónál a {{ui:Zárva}} jelölőnégyzetet, és futtassa újra: az emberek másik utat találnak, vagy a kijárat nélküli helyiségek hibaként szerepelnek a listában. Ha egy ajtó kétszer olyan széles, a helyiség sokkal hamarabb kiürül; a táblázat mutatja, hol vannak a sorok.

## Hogyan működik

Minden helyiség rácsból áll, így az emberek sarkok körül járnak, nem falakon át. A sebesség csökken, ahogy a helyiség megtelik (S = 1,4 (1 − 0,266 D) m/s, ahol D az emberek száma m²-enként). Az ajtó másodpercenként, szélességének minden méterén 1,3 főt enged át, oldalanként 150 mm-rel kevesebbet számítva; a lépcső 1,0-t, és lassabb a járás. Az emberek érkezési sorrendben állnak sorba. Egy futási szám ugyanazt a futást pontosan megismétli.

Az asszisztens is futtathatja ugyanezt: kérjen evakuálást, vagy azt, hogy mi a leghosszabb út a kijárathoz minden helyiségből.

## Emberek helyiségenként

Nyissa meg az {{ui:Emberek helyiségenként}} részt, és írjon be számot bármelyik helyiséghez. Az üres mező az alapterület-értéket használja (szürkén látszik); a 0 kiüríti a helyiséget. A megadott számokat a futás használja, és ebben a böngészőben maradnak meg.

## Ellenáramlás az ajtóknál

A **Csere** módban a kimenő és a bejövő emberek ugyanazon ajtóknál találkoznak. Ha egy ajtón a legutolsó személy mögött közvetlenül valaki az ellenkező irányba halad át, az ajtó a sebességének egy részét megtartja (itt 0,8; feltételezés, mert a közzétett értékek eltérnek), a táblázat pedig megszámolja az irányváltásokat. Amelyik ajtó gyakran vált irányt, a Problémák között megjegyzésként szerepel.

## Lépcsők és pihenők

A lépcső minden pihenője egy másodpercbe kerül a járónak az irányváltáshoz (feltételezés). Az egyenes lépcsőnek nincs ilyen; az L- vagy U-alakú lépcsőnek egy. A lépcső átbocsátóképessége továbbra is a lépcsőkar szélességéből adódik.

## A 3D-nézetben

Jelölje be a {{ui:Emberek megjelenítése a 3D nézetben}} jelölőnégyzetet: a járók alakként jelennek meg a modellben, színük attól függ, mit csinálnak, és mozognak a futás lejátszása közben. A modellhez nem adódik semmi.
