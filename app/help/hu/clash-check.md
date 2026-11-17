---
title: Ütközések vizsgálata
summary: Keresse meg, hol ütköznek egy elemhalmaz elemei egy másik halmaz elemeibe — csövek gerendákon át, falak a födémbe — egy modellben vagy többben, tűréssel, és az ütközésből készítsen problémát.
keywords: ütközés, ütközésészlelés, ütközésvizsgálat, kemény ütközés, interferencia, összeütközés, koordináció, átfedés, tűrés, mep, szerkezet
from: 9cb12346
---

## Mit fog csinálni

Keresse meg azokat a helyeket, ahol két elemhalmaz összeütközik, például a gépészeti modell összes eleme a szerkezettel szemben. Ezután nézze meg mindegyiket, és a fontosakat tartsa meg problémaként.

## Lépések

1. Nyisson meg egy IFC-modellt, és ha több modell között vizsgál, adja hozzá a többit a {{ui:Modell hozzáadása…}} gombbal. Lásd: [Több IFC-modell együtt megjelenítése](topic:several-models).
2. Nyissa meg a bal oldali panelen a {{ui:Ütközésvizsgálat}} elemet.
3. A {{ui:Vizsgálat}} és a {{ui:Ezzel szemben}} mezőben válasszon két halmazt: a kijelölt elemeket, egy osztályt (az összes megnyitott modellben), egy mentett keresési halmazt (lásd: [Elemek keresése osztály, név vagy tulajdonság szerint](topic:find)), vagy mindent.
4. Adja meg méterben, mekkora átfedést hagyjon figyelmen kívül. A 0,01 figyelmen kívül hagyja azokat az elemeket, amelyek csak épp érintkeznek.
5. Kattintson a {{ui:Futtatás}} gombra. Az ellenőrzés a háttérben fut; a {{ui:Mégse}} leállítja.
6. Kattintson egy eredményre a megtekintéséhez: a két elem kijelölődik és megjelenik, minden más áttetszővé válik, a nézet pedig rájuk nagyít.
7. Kattintson az eredmény alatti {{ui:Probléma létrehozása belőle}} gombra, hogy a {{ui:Problémák}} fülön összefoglalja. Lásd: [Problémák és BCF-fájlok](topic:issues-bcf).

## Amit látni fog

- Az ütközések listája mindkét elem nevével (és fájljukkal, ha több modell van megnyitva), valamint az átfedés mélységével, a legmélyebb legelöl.
- Az egymást csak érintő felületek, például egy fal, amely födémen áll, vagy egy ajtó a nyílásában, nem ütközések.

## Tudnivalók

- Ez egy alapvető kemény ütközésvizsgálat: olyan elemeket talál, amelyek felületei átmetszik egymást. Egy másik elemen belül teljesen elrejtett elem (például falba épített cső) még nem található meg.
- A mélység azt mutatja, hogy a két elem határoló térfogata legkevesebb mennyire fedi egymást: ez útmutató, nem pontos mérés.

## Következő

- [Távolságok, felületterületek és helyek mérése 3D-ben](topic:measure)
- [Elemek elrejtése, elkülönítése és áttetszővé tétele](topic:hide-and-isolate)
