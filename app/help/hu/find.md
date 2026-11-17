---
title: Elemek keresése osztály, név vagy tulajdonság alapján
summary: Keresse meg az összes olyan elemet, amely egy vagy több szabálynak megfelel – osztályának, nevének, típusának, szintjének, anyagának vagy bármely tulajdonságértékének alapján –, jelölje ki mindet, és a szabályokat nevesített keresési készletként tartsa meg.
keywords: keresés, szűrés, lekérdezés, szabály, keresési készlet, kijelölési készlet, mentett keresés, tulajdonság, érték, osztály, anyag, összes kijelölése
from: 3d293bc2
---

## Mit fog csinálni

Egyetlen lépésben jelöljön ki egy fajta összes elemét, vagy azokat, amelyek egy adott értékkel rendelkeznek: minden ajtót, a 2. szinten lévő összes falat, minden olyan elemet, amelynek tűzállósága EI60, vagy minden olyan falat, amely egy megadott összegnél többe kerül.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. A bal oldali panelen nyissa meg a {{ui:Keresés}} lehetőséget.
3. Az első szabályban válasszon egy tulajdonságot (először az elem saját tulajdonságait, például a {{ui:Osztály}} és a {{ui:Szint}} tulajdonságot, majd a modell tulajdonságkészleteit), adja meg az összehasonlítás módját, és válasszon egy értéket. Az értékmező a modellben szereplő értékeket javasolja.
4. A szűkítéshez kattintson a {{ui:Szabály hozzáadása}} gombra. Válassza a {{ui:Minden szabály}} lehetőséget, ha mindegyiknek teljesülnie kell, vagy a {{ui:Bármelyik szabály}} lehetőséget, ha elég az egyik.
5. Kattintson a {{ui:Keresés}} gombra, vagy nyomja meg az {{key:Enter}} billentyűt valamelyik értékmezőben. A találatok kijelölődnek.
6. A szabályok megtartásához kattintson a {{ui:Mentés készletként}} gombra, írjon be egy nevet, majd kattintson rá újra. Később egy készlet nevére kattintva kereshet vele.

## Amit látnia kell

- A találatok kijelölve jelennek meg a 3D-nézetben és a modellfában, a {{ui:Tulajdonságok}} pedig osztályonként megadja a darabszámot. Az {{key:I}} billentyű csak ezeket mutatja, a {{key:H}} billentyű elrejti őket.
- A szöveges egyezés nem tesz különbséget kis- és nagybetű között. A számok számként hasonlítódnak össze: a „nagyobb, mint 1000” az értékre vonatkozik, nem a szövegre.
- A {{ui:van értéke}} és a {{ui:nincs értéke}} nem igényel értéket; a kitöltött, illetve a hiányzó mezőket találják meg.
- A mentett készletek ebben a böngészőben maradnak meg minden megnyitott modellhez.

## Gyakori hibák

- **Nem talál semmit.** Egy szabálynak olyan értékre van szüksége, amelyet meg tud feleltetni: nézze meg az értékmező javaslatait.
- **Egy tulajdonság hiányzik a listáról.** Ebben a modellben nincs olyan, alakkal rendelkező elem, amelynek ez a tulajdonsága lenne.

## Tovább

- [Elemek színezése tulajdonság szerint](topic:color-by-property)
- [Elemek elrejtése, elszigetelése és áttetszővé tétele](topic:hide-and-isolate)
