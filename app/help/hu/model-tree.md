---
title: Tájékozódás a modellfában
summary: IFC-modell böngészése projekt, telek, épület, szint és tér szerint, az elemekkel fajtánként csoportosítva; jelölőnégyzetekkel mutathatja és rejtheti őket, sorra kattintva kijelölheti, duplán kattintva ráközelíthet.
keywords: modellfa, fa, szerkezet, térbeli szerkezet, böngésző, vázlat, navigátor, szint, emelet, padló, tér, helyiség, csoport, osztály, elrejtés, megjelenítés, kijelölés, nagyítás
from: 69de4ab7
---

## Amit el fog végezni

Lássa, hogyan épül fel egy modell, és jusson el bármelyik elemhez anélkül, hogy keresgélne a 3D-ben: az épületet, a szintjeit, az egyes szinteken lévő tereket és az ott lévő elemeket, fajtánként csoportosítva (falak, ajtók, födémek…).

## Lépések

1. Nyisson meg egy IFC-modellt. A bal oldali {{ui:Modellfa}} a szintekig nyílik ki.
2. Kattintson a sor melletti nyílra a megnyitáshoz vagy bezáráshoz. Egy szint előbb a tereit tartalmazza, majd az elemeit fajtánként, a darabszámukkal. Több részből álló elem, például lépcső, a részeit tartalmazza.
3. Egy sor jelölőnégyzetének kikapcsolásával elrejti annak minden elemét; bejelöléssel újra megjeleníti. A kötőjeles négyzet azt jelenti, hogy csak a benne lévő elemeknek egy része látszik.
4. Egy sor nevére kattintva kijelölheti azt, amit képvisel: egy elemet, vagy egy csoport, szint vagy tér minden elemét. A {{key:Mod}}+kattintás hozzáadja a kijelöléshez, vagy kiveszi onnan.
5. A szint, a tér vagy az épület melletti {{ui:i}} gombbal megnézheti annak saját tulajdonságait.
6. Egy sorra duplán kattintva ráközelíthet.

## Amit látnia kell

- Ha a 3D nézetben kijelöl egy elemet, a fa addig nyílik ki, amíg meg nem jeleníti, és megjelöli.
- A rejtett elemek áthúzva látszanak. A fa jelölőnégyzetei és a {{ui:Megjelenítés}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) együtt működnek: lásd [Elemek elrejtése, elkülönítése és átlátszóvá tétele](topic:hide-and-isolate).
- Azok az elemek, amelyeket a modell egyetlen szinthez sem rendel, a végén egy csoportban találhatók: **Nincs a térbeli szerkezetben**.
- Egy hosszú csoport egyszerre 200 sort mutat; a többiért kattintson a csoport alatti **További megjelenítése** gombra.

## Billentyűk

Ha a sor neve van fókuszban: a {{key:Up}} és a {{key:Down}} mozgat, a {{key:Right}} megnyit, a {{key:Left}} bezár vagy feljebb lép, a {{key:Space}} bejelöli a négyzetet, az {{key:Enter}} kijelöl.

## Gyakori hibák

- **Be van jelölve egy szint négyzete, de nem látszik semmi.** A fa alatti {{ui:Szintek}} lista önállóan kikapcsolja a teljes szinteket: ott is jelölje be.
- **Egy sor nem jelöl ki semmit.** Egyes sorokhoz, például egy üres térhez, nincs rajzolható elem; az állapotsor ezt jelzi.

## Tovább

- [Építőelemek törlése, kivágása, másolása és beillesztése](topic:edit-elements)
- [Szintek, terek és élek megjelenítése és elrejtése](topic:storeys-and-spaces)
