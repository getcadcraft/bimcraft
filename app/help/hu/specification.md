---
title: Specifikáció készítése a modellből
summary: Minden használatban lévő fal-, ajtó-, ablak-, födém- és felülettípushoz egy specifikációs fejezet, a modellből kiolvasott tényekkel és az Ön saját szövegével együtt, PDF- vagy Word-dokumentumként.
keywords: specifikáció, spec, kivitelezési rajzok, 5. fázis, kivitelezési dokumentáció, szakasz, faltípus, ajtótípus, ablaktípus, felület, osztályozás, uniclass, omniclass, masterformat, dokumentum, pdf, word, docx, kimutatások
from: a6acc6d4
---

## Mit fog csinálni

Olyan specifikációt készít, amely követi a modellt: minden olyan típushoz egy fejezet, amely ténylegesen szerepel az épületben, mindegyik a felépítésével és mennyiségeivel, amelyeket a modellből olvas ki, valamint a hozzá írt szöveggel.

## Lépések

1. Kapcsolja be a {{ui:Rajzolás}} módot, nyissa meg a bal oldali panelen a **Kimutatások** részt, és kattintson a **Specifikáció** gombra.
2. A párbeszédpanel minden használatban lévő falhoz, ajtóhoz, ablakhoz, födémhez és helyiségfelülethez egy fejezetet listáz. Minden címsor alatt a **tényei** találhatók, a modellből kiolvasva: vastagság, a rétegek egyenként, a kidolgozottsági szint, méretek, darabszám és mennyiség. Az a fejezet, amelynek elemei osztályozási kóddal rendelkeznek, a kódot a címsorában mutatja.
3. Írja be a specifikációs szövegét a fejezet alatti mezőbe. Az **Elemek kijelölése** megmutatja, mely elemekre vonatkozik a fejezet.
4. Kattintson a **Mentés** gombra. Ez egy visszavonási lépés, a szöveg pedig az épületfájlban marad meg.
5. Nyissa meg a **Dokumentumok a modellből** részt, válassza a **Specifikáció** sablont, kattintson az **Előnézet** gombra, majd mentse PDF-ként, Wordként vagy Markdownként. Lásd: [Dokumentumok a modellből](topic:documents-from-the-model).

## A kivitelezési rajzok kimutatásai dokumentumként

A **Kivitelezési rajzok kimutatásai** sablon közvetlenül a modellből nyomtatja ki az ajtó-, ablak- és felületkimutatásokat az Ön irodai elrendezésében. A saját sablonjában írja be a `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` jelölést vagy egy mentett beállítás nevét, például `{{schedule Door schedule by floor}}`. A `{{specification}}` a specifikációt nyomtatja ki.

## Jó tudni

- A tények a modellé. Ha a modell változik, ők is változnak; a szöveg nem.
- A BimCraft egyetlen szabvány előírását sem írja, és gyártói szöveget sem. A szöveg nélküli fejezet a „Még nincs írt specifikációs szöveg.” üzenetet nyomtatja.
- A modellből már nem szereplő típushoz írt szöveg megmarad, és a „Szöveg a modellből már nem szereplő típusokhoz” alatt szerepel.
- Egy általános típusnak egy konkrét felépítéshez való módosításához lásd: [Falszerszámok](topic:wall-tools) (Típuscsere).
