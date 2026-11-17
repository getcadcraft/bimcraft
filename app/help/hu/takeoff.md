---
title: Mennyiségek küldése a TakeoffCraft-ba
summary: Egy kattintással a modell mennyiségei a TakeoffCraft-ba kerülnek — falak típus szerint, tetők lejtős felület szerint, gerincek, élgerincek és völgyek, alapozások, ajtók és ablakok, szekrények, villamos eszközök, alapterület és a fa vágólista —, minden szint alaprajzán megjelölve, a szakági csomagok összetett tételeivel.
keywords: mennyiségkimutatás, mennyiségi felmérés, költségbecslés, becslés, anyagjegyzék, anyagkimutatás, takeoffcraft, mennyiségek, falfelület, tetőfelület, négyzetek, alapozás, beton, köbyard, vágólista, fa, szakági csomag, összetett tétel
from: c5a745af
---

## Mit fog csinálni

Alakítsa a modellt anyagjegyzékké és költségbecsléssé a TakeoffCraft-ban. A BimCraft minden szint alaprajzát szabványos méretarányban rajzolja meg, minden mennyiséget megjelöl rajta, és a mennyiségkimutatást a PDF-be teszi. A TakeoffCraft maga méri a jelöléseket, így minden szám ellenőrizhető a lapon.

## Küldés

1. Kattintson a {{ui:Mennyiségkimutatás}} gombra a modellsávon (a {{ui:Rajzlapok}} mellett).
2. A TakeoffCraft új lapon nyílik meg az alaprajzokkal. Ha rákérdez, válassza a PDF-ben talált mennyiségkimutatás megnyitását.
3. Adja meg az árait a TakeoffCraft mennyiségi táblázatában; az összetett tételek már felsorolják az anyagokat.

:::note
Ha a TakeoffCraft itt nem érhető el, a gomb helyette a PDF-et tölti le. Később nyissa meg a TakeoffCraft-ban: megtalálja benne a mennyiségkimutatást.
:::

## Mit mérünk

- **Falak** típus és magasság szerint: középvonalaik szakaszokként, a falmagassággal az elemen, így a TakeoffCraft megadja a hosszt és a falfelületet. Minden szakasz hordozza a fal ajtóit és ablakait, így a TakeoffCraft azokat egyszer levonja a falfelületből, ugyanazzal a szabállyal, mint a BimCraft kimutatásai: a bruttó, a levonások és a nettó mindkét helyen egyezik. Egy falfajta mennyiségi adatai (mértékegység, habarcs, egységár; lásd [Falösszetevők](topic:wall-assemblies)) egy árazott sorként kerülnek az adott típus tételéhez. Az alapértelmezettől eltérő mérési módszer szerint (lásd [Mérési módszer kiválasztása](topic:plan-schedules-and-pdf#choose-a-measurement-method)) a mennyiségkimutatás tartalmazza a módszert, minden szakasz tartalmazza, mit vesznek le a csomópontok a falfelületéről, a TakeoffCraft pedig ugyanazzal a módszerrel méri és nevezi meg. Az a típus, amelynek mértékegysége hosszal és magassággal rendelkezik, két összetevőt ad át mennyiséggel: a rendelendő egységeket és a habarcs térfogatát, amelyeket akkor árazunk, ha a típus egységára egységenként, 1000 egységenként vagy habarcs m³-enként van megadva. Az a darabszám, amely pontosan egész számra esik, a TakeoffCraft-ban egygyel több lehet, mert az átadás a pozíciókat a lapon kerekíti.
- **Tetők**: minden tetősík területként a lejtésével (a TakeoffCraft adja meg a lejtős felületet), gerincek, élgerincek és völgyek (az élgerincek és völgyek a lejtésük mentén), ereszek és oromélek.
- **Alapozások**: talpgerendák és alapfalak szakaszokként a középvonalaik mentén, a födémek területként a vastagságukkal, így a beton térfogatként jön ki.
- **Ajtók és ablakok** típus szerint darabszámmal, az ablakkerettel együtt.
- **Alsó szekrények** az elülső homlokzatuk hossza szerint.
- **Villamos eszközök** fajta szerint darabszámmal.
- **Egy szint alapterülete** a helyiségeiből.
- **A fa vágólista** a vázszerkezetből, saját lapon számolva (egy pont darabonként).

Ahol a szakági csomagnak van megfelelő összetett tétele — külső és belső falak, födémek, talpgerendák, alapfalak, zsindely, gerinc- és élgerinc-lezárás, völgyek, ereszek, beltéri ajtók, ablakkeret, alsó szekrények, aljzatok, kapcsolók, lámpák, elosztódobozok és az elosztótábla —, a tétel a saját anyagaival és képleteivel érkezik. A csomagok árak nélkül érkeznek, és még nem nézte át költségbecslő.

:::tip
Az alaprajzok minden kattintáskor a modellből készülnek, így változtatás után egyszerűen kattintson újra a {{ui:Mennyiségkimutatás}} gombra.
:::
