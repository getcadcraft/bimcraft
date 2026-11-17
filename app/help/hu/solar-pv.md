---
title: Napelemtáblák, árnyékolás és energiahozam
summary: Napelemtáblák elhelyezése tetőkön vagy a talajon, árnyékolás a modellből, éves energiatermelés becslése, stringek méretezése és az egyvonalas rajz adatainak elkészítése. Minden bemenet látható, a kezdeti modul és a veszteségek általános értékek.
keywords: napelem, pv, fotovoltaikus, tábla, modul, tető, árnyékolás, hozam, kwh, kwp, string-méretezés, inverter, egyvonalas, dőlésszög, azimut, sortávolság
from: adf4aaf3
---

## Mit fog csinálni

Nyissa meg a **Napelem (PV)** panelt. Válasszon ki egy tetősíkot (dőlésszöge és tájolása a modellből olvasható ki), vagy helyezzen el egy talajon álló táblasort megadott dőlésszöggel és tájolással. A modulokat a hátrálások figyelembevételével, a széleken belül helyezi el, és megszámolja, így kWp-ben adódik az egyenáramú teljesítmény. A tábla elhelyezése napelemes eszközökként kerül a modellbe, egyetlen visszavonási lépésben.

## Árnyékolás, hozam és stringek

- **Árnyékolás**: minden modulból sugarat vet a nap felé, a havi tipikus napokra, a modell saját geometriájához viszonyítva, így a szomszédos épületek, attikafalak és az előttük lévő sorok is számítanak. Csak a közvetlen napfény csökken, és a részben árnyékolt tábla teljesítménye ennek arányában esik.
- **Hozam**: havi és éves kWh, kWh/kWp és a teljesítményarány. A napsugárzást a vízszintes felületre vonatkozó saját havi összegekből veszi, ha beírja őket. Nélkülük a panel egy derült égboltra vonatkozó felső becslést használ, és ezt jelzi. A **klímaadatok lekérése a NASA POWER-ből** a Hozam fülön lévő gombbal történik: csak a telek szélességi és hosszúsági fokát küldi el, egyszer, és a választ ezen a számítógépen tartja (a böngészőből ellenőrizve, 2026. október 30.). A PVGIS nem engedi, hogy egy weboldal olvassa a válaszát, ezért a fül egy hivatkozást ad, amely új lapon nyitja meg a telek PVGIS-havi adatait; illessze be a mezőbe, amit mutat, és a tizenkét hónap kitöltődik.
- **Stringek**: ellenőrzi a stringenkénti modulszámot az inverter feszültségablakához a leghidegebb és a legmelegebb napon, a párhuzamos stringeket pedig az áramerősségéhez.
- **Egyvonalas**: elkészíti a diagram adatait (tábla, kombinátor, szakaszoló, inverter, panel, hálózati csatlakozás) a huzal- és biztosítékméretekkel, amelyeket a megadott tényezőkből számít. Ez adat és SVG; a CadCraft Elektromos bővítménye szimbólumokként el tudja helyezni.

A BimCraftban található modul, inverter, veszteség és huzaltényező általános példák, minden eredményen fel vannak tüntetve. Adja meg a gyártó adatait és a tervezett szabványos (előírás szerinti) értékeket, és a tervet vizsgálja felül az a személy, aki a tervért felel.
