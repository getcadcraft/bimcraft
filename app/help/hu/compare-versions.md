---
title: Egy modell két verziójának összehasonlítása
summary: Nyisson meg két verziót ugyanabból az IFC-modellből, és lássa, mely elemek lettek hozzáadva, eltávolítva és módosítva, a GlobalId-k alapján párosítva, minden változásról készült CSV-fájllal.
keywords: összehasonlítás, különbség, diff, verziók, revízió, változások, módosított, hozzáadott, eltávolított, mozgatott, globalid, guid, mi változott
from: cfca6971
---

## Mit fog csinálni

Lássa, mi változott a korábbi és a kapott modell között: mely elemek újak, melyek tűntek el, melyek mozdultak el, vagy kaptak új tulajdonságértékeket.

## Lépések

1. Nyissa meg az újabb verziót, majd kattintson a {{ui:Modell hozzáadása…}} gombra, és válassza ki a régebbit. Lásd: [Több IFC-modell együtt](topic:several-models).
2. A {{ui:Modellek}} részben nyissa meg a {{ui:Verziók összehasonlítása}} részt.
3. Válassza a {{ui:Régebbi verzió}} és az {{ui:Újabb verzió}} lehetőséget.
4. Kattintson az {{ui:Összehasonlítás}} gombra.
5. Kattintson a lista egyik elemére, hogy kiválassza, és lássa a tulajdonságait. Kattintson a {{ui:CSV letöltése}} gombra, hogy minden változást lássa, tulajdonságonként.
6. Kattintson a {{ui:Törlés}} gombra a szokásos nézetbe való visszatéréshez.

## Ami látszik

- **Hozzáadott** elemek kékkel, az újabb verzióból.
- **Eltávolított** elemek pirossal, a régebbi verzióból.
- **Módosított** elemek okkerrel, az újabb verzióból, mindegyik megmondja, mi változott: tulajdonságok, egy mozgás (és annak távolsága), vagy új alak.
- Minden változatlan elem áttetszően látszik.

## Érdemes tudni

- Az elemek a GlobalId alapján párosodnak. Ha egy program minden exportálásnál új GlobalId-t ad az elemeknek, minden elem eltávolítottnak és újra hozzáadottnak látszik.
- A pozíciókat ott hasonlítják össze, ahol a modellek a jelenetben állnak. Ha az egyik verziót szándékosan mozgatták, először igazítsa egymáshoz a {{ui:Mozgatás}} paranccsal a {{ui:Modellek}} részben.
- Az a GlobalId, amely kétszer szerepel egy modellben, kimarad az összehasonlításból. A [Gyakori problémák ellenőrzése modellben](topic:model-checks) megtalálja ezeket.

## Tovább

- [Problémák és BCF-fájlok](topic:issues-bcf)
- [Mennyiségek összeadása tulajdonság szerint](topic:quantity-totals)
