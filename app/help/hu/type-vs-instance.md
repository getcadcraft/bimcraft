---
title: Típustulajdonság módosítása a típus minden elemére
summary: Típustulajdonságok és példánytulajdonságok megkülönböztetése, egy érték módosítása a típuson, hogy minden elem kövesse, és annak ellenőrzése, hogy egy elem saját módosítása csak nála marad.
keywords: típus, példány, típustulajdonságok, családtípus, megosztott, másolás íráskor, minden elem, tömeges szerkesztés, gyártó, modell
from: bffd8789
---

## Mit fog csinálni

Állítsa be az ajtótípus gyártóját, hogy az adott típus minden ajtaja megmutassa, majd adjon egy ajtónak saját tűzvédelmi besorolást anélkül, hogy a többit érintené. Ez megmutatja a típus- és példánytulajdonságok közötti különbséget a BimCraftban.

## Típus vagy példány?

- Egy **példánytulajdonság** egyetlen elemhez tartozik: a jelölése, a címkéje, a helyisége, a saját tűzvédelmi besorolása.
- Egy **típustulajdonság** a típushoz tartozik, amelyet sok elem megoszt: gyártó, modell, egy ajtótípus szélessége.

A {{ui:Tulajdonságok}} panelen a típusból származó készletek neve után „(típus)” áll, és alatta ez a sor: „Típustulajdonság: a módosítás ennek a típusnak minden elemére érvényes.” Minden más készlet magához az elemhez tartozik. A **Típus** az első blokkban a típus nevét mutatja.

## Lépések: a típus módosítása

1. Nyisson meg egy IFC-modellt, és kattintson egy ajtóra.
2. Nézze meg a **Típus** értékét a {{ui:Tulajdonságok}} panel első blokkjában, például „Single-Flush 900 x 2100”.
3. Görgessen egy olyan készletig, amelynek neve „(típus)”-ra végződik.
4. Kattintson arra az értékre, amelyet módosítani szeretne, például a **Gyártó**-ra.
5. Írja be az új értéket, és nyomja meg az {{key:Enter}} billentyűt.
6. Nézze meg a {{ui:Módosítások}} listát: a bejegyzés „(típus)”-ra végződik.
7. Kattintson egy másik ajtóra ugyanabból a típusból.
8. Ellenőrizze ugyanazt az értéket: az is az új értéket mutatja.

## Lépések: csak egy elem módosítása

1. Kattintson egy ajtóra.
2. Nyisson meg egy olyan készletet, amelynek nevében nincs „(típus)”, például `Pset_DoorCommon`.
3. Kattintson egy értékre, például a **FireRating**-re, írjon be új értéket, és nyomja meg az {{key:Enter}} billentyűt.
4. Kattintson a mellette lévő ajtóra, ugyanabból a típusból.
5. Ellenőrizze ugyanazt az értéket: az még mindig a régi értéket mutatja.

Még ha az exportáló a két ajtó között meg is osztotta azt a tulajdonságkészletet, a BimCraft az első ajtónak saját példányt adott, mielőtt módosította. Lásd: [Miért módosítja a szerkesztése csak egy elemet](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Mentés

1. Kattintson erre: {{ui:Mentés IFC-ként}}, vagy nyomja meg a {{key:Mod+S}} billentyűt.
2. Nyissa meg a mentett példányt a BimCraftban vagy bármely IFC-megjelenítőben, és ellenőrizze mindkét módosítást.

## Gyakori hibák

- **Nem minden modellnek vannak típusai.** Egyes exportálók nem írnak típusobjektumokat, vagy mindent a példányra írnak. Ilyenkor nincsenek „(típus)” készletek, és minden elemet külön kell módosítani.
- **Ugyanaz az érték szerepel típuskészletben és példánykészletben.** Egyes exportálók ugyanazt a paramétert mindkét helyre írják. Más programok bármelyiket olvashatják; ha azt szeretné, hogy egyezzenek, mindkettőt módosítsa.
- **Az a várakozás, hogy kijelöli „az összes ilyen típusú ajtót”, és közösen szerkeszti őket.** Ebben a verzióban nincs többszörös kijelölés. Típustulajdonsággal lehet egyszerre sok elemet módosítani.
