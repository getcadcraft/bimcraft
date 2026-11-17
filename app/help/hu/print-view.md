---
title: Rajz ellenőrzése nyomtatási nézetben
summary: Váltson DWG vagy DXF fájlt nyomtatási nézetre, hogy fehéren, feketével lássa a vonalvastagságokkal együtt, és a rétegek nélkül, amelyek sosem nyomtatódnak.
keywords: nyomtatás, plottolás, előnézet, plot előnézet, vonalvastagság, lineweight, monokróm, fekete-fehér, defpoints, nem plottolható
from: 1a59c23e
---

## Mit fog tenni

Nézze meg, hogyan fog kinézni a lap papíron, mielőtt kinyomtatja abból a programból, amely készítette: fehéren, feketével, a vonalvastagságok valódi szélességével, és azok a rétegek nélkül, amelyek nem nyomtatódnak.

## Lépések

1. Nyisson meg egy DWG vagy DXF rajzot.
2. Kattintson a rajz fölötti lapfülre.
3. Kattintson a {{ui:Nyomtatási nézet}} gombra a fülsor végén, vagy nyomja meg a {{key:P}} billentyűt.
4. Nagyítson rá egy részletre, hogy összehasonlítsa a vastag és a vékony vonalakat.
5. Kattintson újra a {{ui:Nyomtatási nézet}} gombra, vagy nyomja meg újra a {{key:P}} billentyűt, hogy visszaálljanak a normál színek.

## Amit látnia kell

- Fehér papír szürke asztalon, minden vonal és szöveg feketén, a témától függetlenül.
- Vonalvastagságok: egy lapon minden vastagság a papíron mért valódi szélességével rajzolódik, így egy 0,5 mm-es vonal minden nagyításnál kétszer olyan vastag, mint egy 0,25 mm-es. Egy vonal sosem rajzolódik a képernyőn megadott vastagságánál vékonyabban.
- A nem nyomtatandóként beállított rétegek és a DEFPOINTS réteg el vannak rejtve.
- A {{ui:Nyomtatási nézet}} gomb lenyomva marad. A nyomtatási nézet lapváltáskor vagy másik rajz megnyitásakor is bekapcsolva marad, amíg ki nem kapcsolja.

A {{ui:Modell}} lapon a nyomtatási nézet csak képernyőszélességeket használ (a vékony vonalak egy pixel, a vastagabbak kicsit vastagabbak), mert a modelltérnek nincs papírmérete.

## Gyakori hibák

- **Azt várni, hogy kinyomtatja.** A nyomtatási nézet csak előnézet. A nyomtatás és a PDF-export még nincs beépítve a BimCraftba; a rajzot abból a programból nyomtassa, amely készítette.
- **Plot stílusokat várni.** A tolltáblák és a plot stílus színei nem olvashatók be. Minden egyszerű fekete.
- **A P nyomása gépelés közben.** Az {{key:F}} és a {{key:P}} nem tesz semmit, amíg egy mezőbe ír, vagy amíg a berendezéskimutatás látszik.
