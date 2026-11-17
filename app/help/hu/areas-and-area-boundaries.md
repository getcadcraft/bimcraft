---
title: Területek és területhatárok
summary: Mérje az épület bruttó vagy bérbe adható területét az Ön által rajzolt vagy a falakból átvett határvonalakon belül, és sorolja fel a területeket kimutatásban.
keywords: terület, területek, területhatár, területséma, bruttó épületterület, GFA, bérbe adható, területalaprajz, területek kimutatása, falak kijelölése, nem zárt
from: c79f96d2
---

## Mit fog csinálni

Rajzolja meg egy területséma határvonalait, helyezze el a területeket bennük, és olvassa le az összegeket.

## Hol vannak az eszközök

- Szalagos elrendezés: {{ui:Építészet}} › **Helyiség és terület** › {{ui:Terület}} és {{ui:Területhatár}}.
- Klasszikus elrendezés: a Rajzolás sáv › {{ui:Helyiségek}} menü.

## Lépések

1. Válassza a {{ui:Területhatár}} parancsot. A sorban válassza ki a {{ui:Séma}} értékét: Bruttó épület vagy Bérbe adható. Minden sémának saját határvonalai vannak.
2. A {{ui:Készítés módja}} sorban válassza ki, hogyan készüljenek a vonalak:
   - **Rajzolás**: pontról pontra kattintson.
   - **Falak kijelölése: középvonal**: kattintson egy falra, és annak középvonala lesz a határ.
   - **Falak kijelölése: a kattintott felület**: kattintson egy falra azon az oldalon, amelyiken szeretné; annak a felülete lesz a határ. Bruttó épületterületnél a külső falak külső oldalára kattintson.
3. Válassza a {{ui:Terület}} parancsot. Válassza ugyanazt a sémát, adjon meg tetszés szerint nevet, számot vagy típust, majd kattintson a határvonalakon belülre.
4. A terület azonnal mérődik. Jelölje ki, és a Tulajdonságok panelen módosíthatja a nevét, számát vagy típusát.

## Mi mihez igazodik

- A falválasztással készült határ követi azt a falat: ha a falat mozgatja, a terület ugyanabban a lépésben újra mérődik.
- Az Ön által rajzolt határ ott marad, ahol rajzolta.
- Egy sarkon találkozó falak felületei is ott találkoznak, így négy kijelölt fal rés nélkül zár be egy területet.
- A területhatárok az alaprajzon akkor jelennek meg, amikor helyiség- vagy területeszköz aktív, így egyébként nem zsúfolják az alaprajzot.

## Ha a határvonalak nem zárulnak

A terület ettől még elhelyeződik. A **Nem zárt** felirat jelenik meg rajta, és addig nem mér semmit, amíg a határvonalak körül be nem záródnak. Ez tanács: semmit nem tilt meg.

## A kimutatás

Bal panel › {{ui:Kimutatások}} › **Területek**: séma, szám, név, típus, szint, terület és kerület, összesítővel. Egy sorra kattintva kijelöli a területet. A {{ui:CSV letöltése}} ugyanezt a táblázatot adja.

## Az IFC-ben

A terület olyan IfcSpace, amelynek nincs test-leírása: PredefinedType GFA a bruttó épület sémánál, USERDEFINED, ObjectType Rentable a bérbe adhatónál. GrossFloorArea és GrossPerimeter tulajdonsága van, nettó területe nincs, így nem tévesztik össze helyiséggel. A határ egy IfcVirtualElement.

## Még nincs elkészítve

- Saját sémák (csak Bruttó épület és Bérbe adható van).
- Színes kitöltés területtípus szerint.
- Olyan szabályok, amelyek Ön helyett elhelyezik a határt, például „az üvegvonalig”.

Lásd még [Helyiségek és válaszfalak](topic:rooms-and-separators), [Helyiség- és területcímkék](topic:room-and-area-tags).
