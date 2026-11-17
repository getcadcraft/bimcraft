---
title: Elemek színezése tulajdonság szerint
summary: Minden elemet egy tulajdonság értéke szerint színez be, például osztálya, típusa, szintje, anyaga, tűzállósági besorolása vagy költsége szerint. Olvassa le a jelmagyarázatot, kattintson egy értékre, hogy csak ezeket az elemeket mutassa, és mentse a színeket sémaként, hogy más modelleken is használhassa.
keywords: szín, színezés, színezés szerint, jelmagyarázat, okos nézet, megjelenés, tulajdonság, típus, anyag, tűzállóság, szűrés, izolálás, téma, értékek, séma, színséma, színek mentése, újrahasználat, csapat, json, színminta
from: f081d343
---

## Mit fog csinálni

Egy pillantással látható, hogyan oszlik meg egy tulajdonság a modellen: mely falak külsők, mely anyagokat hol használják, mely elemeknek nincs tűzállósági besorolása. Minden elem annak az értéknek a színét kapja, a jelmagyarázat pedig megmondja, mit jelent az egyes szín, és hány elemnek van meg.

## Lépések

1. Nyissa meg az IFC-modellt.
2. Válassza a jobb oldali {{ui:Szín}} lapot.
3. Válasszon tulajdonságot a listából. Az első tulajdonságok minden elemre vonatkoznak ({{ui:Osztály}}, {{ui:Típus}}, {{ui:Szint}}, {{ui:Anyag}}, {{ui:Név}}…); a többi a modell tulajdonságkészleteiből és mennyiségkészleteiből származik, a készlet nevével. Az egyes sorok utáni szám azt mutatja, hány elemnek van meg ez a tulajdonság.
4. Olvassa le a jelmagyarázatot: egy szín, az érték és hány elemnek van meg.
5. Kattintson egy értékre, hogy csak ezek az elemek látszanak. Tartsa lenyomva a {{key:Mod}} billentyűt, és kattintson további értékekre. A {{key:Shift+H}} újra mindent megjelenít.
6. Kattintson a {{ui:Ki}} gombra, hogy visszatérjen a modell saját színeire.

## Ami látszik

- Legfeljebb hét érték kap saját színt, a leggyakoribb érték az első. Ennél több érték egy közös szürke színt kap, és **egyéb értékek** néven szerepel.
- Egy szám, amelynek sok különböző értéke van, hat egyenlő tartományra oszlik, a világostól (alacsony) a sötétig (magas).
- A tulajdonság nélküli elemek halványszürkék, és **Nincs érték** néven szerepelnek, így a színes elemek jobban kiemelkednek.
- A színek a {{ui:Papír}} és a {{ui:Modell}} nézetben eltérnek, és a modell szerkesztése közben is megmaradnak.
- Egy típus tulajdonsága az adott típus minden elemére érvényes; ha egy elemnek ugyanerre a tulajdonságra saját értéke van, a saját érték érvényesül.

## Színek módosítása és mentése sémaként

- Kattintson a jelmagyarázat egy értékének színmintájára, hogy más színt válasszon hozzá. A modell azonnal újrafestődik.
- A {{ui:Séma mentése}} gomb a színeket egy kis `.json` fájlba menti, amelyet a tulajdonság nevéről kap, például `Class colors.json`.
- Egy másik modellen vagy egy munkatárs gépén kattintson a {{ui:Séma megnyitása…}} gombra, és válassza ki ezt a fájlt. A séma minden értéke megkapja a színét, így ugyanaz a tűzállósági besorolás vagy rendszer minden modellben ugyanolyan színű lesz.
- Ha a séma nem tartalmaz egy értéket, az szürkére festődik, és „nincs a sémában” néven szerepel. A sémában szereplő, de ebben a modellben nem létező értékek 0-val maradnak a listán, így a teljes séma látható.
- A séma mindkét témában megtartja a színeit. Ha új tulajdonságot választ a listából, az automatikus színekkel indul újra.

## Gyakori hibák

- **„Ebben a modellben nincs … érték.”** A sémát olyan tulajdonságra mentették, amely ebben a modellben nincs (például másik tulajdonságkészlet-névvel). Nyisson meg ilyen modellhez készült sémát, vagy válasszon tulajdonságot a listából.

- **A tulajdonság hiányzik a listából.** A modell egyetlen alakzattal rendelkező eleme sem rendelkezik vele. A szintek és terek saját tulajdonságai nem szerepelnek a listában.
- **Minden azonos színű.** Minden elemnek ugyanaz az értéke van, vagy egyiknek sincs: nézze meg a jelmagyarázat darabszámait.

## Tovább

- [Elemek elrejtése, izolálása és áttetszővé tétele](topic:hide-and-isolate)
- [Eligazodás a modellfában](topic:model-tree)
