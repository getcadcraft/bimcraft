---
title: Pontok kitűzéshez és megvalósulási ellenőrzéshez
summary: Számozza meg azokat a helyeket, ahová a munkacsapat a modellből kitűz — oszlopközéppontok, falvégek, rögzítőcsavarok, hüvelyek, bármely kiválasztott elem —, írja ki őket egy totálállomásnak, majd olvassa vissza a csapat megmért pontjait, és nézze meg, mi tér el.
keywords: kitűzési pontok, kitűzés, kitűz, totálállomás, felmérés, pontfájl, csv, txt, pnezd, penzd, xyz, északi, keleti, magasság, megvalósult, ellenőrzés, tűrés, eltérés, rögzítőcsavarok, oszlopközéppontok, falvégek, hüvelyek, felmérési koordináták, térképi átalakítás
from: acea9606
---

A {{ui:Points}} lap a jobb oldalon a megnyitott modellből létrehozza azokat a pontokat, amelyeket a munkacsapat a helyszínen kitűz, és ellenőrzi azokat a pontokat, amelyeket utána mérnek.

## Pontok készítése

1. Nyisson meg egy IFC-modellt és a {{ui:Points}} lapot.
2. Jelölje be, mit kell kitűzni: **oszlopközéppontok** (minden oszlop középvonalának talppontja), **falvégek** (minden fal tengelyének két vége az aljánál), **rögzítőcsavarok**, **hüvelyek** (olyan elemek, amelyek nevében vagy típusában szerepel a hüvely szó), és a **kiválasztott elemek** (mindegyik az elhelyezési pontján — a nézetben előbb jelölje ki őket).
3. Válassza ki az első számot és az előtagot, a koordinátákat, a mértékegységeket, az oszlopokat és a fájlt:
   - **Modell**: a fájl saját koordinátái. **Felmérési rács**: a modell georeferenciájának térképrácsa (csak akkor látszik, ha az IFC-ben van térképi átalakítás), méterben vagy a választott mértékegységben.
   - Oszlopok: **PNEZD** (pont, északi, keleti, magasság, leírás), **PENZD** vagy **XYZ**; **CSV** (vesszőkkel) vagy **TXT** (tabulátorokkal).
4. Nyomja meg a {{ui:Make points}} gombot: a lista megmutatja őket, a nézet pedig kékkel jelöli. A {{ui:Download the points}} gomb kiírja a fájlt.

A pontok rögzített sorrendben jönnek létre — fajta szerint, majd az alaprajzon soronként —, így ugyanabból a modellből újra létrehozva ugyanazok a számok adódnak. A fájl az, amelyet a CivilCraft megnyit, és amelyet a CadCraft EXPORTPOINTS parancsa ír: soronként egy pont, három tizedesjegy, a leírás idézőjelben, ha vesszőt tartalmaz.

## Megvalósulási pontok ellenőrzése

Amikor a csapat visszaküldi, amit megmért, válasszon egy **tűrést** milliméterben, adja meg, hogyan párosítsa a pontokat — a **pontszám** szerint (megtartották az Ön számait) vagy a **legközelebbi mérés** szerint —, majd nyomja meg a {{ui:Read as-built points…}} gombot. A fájlt ugyanabban a mértékegységben és koordinátákban olvassa be, amelyben kiírta.

Minden tervpont ezután **tűrésen belül**, **tűrésen kívül** vagy **nincs megmérve** lesz, a senki által nem kért mérés pedig **extra**. A táblázat az eszköztárban választott mértékegységben adja meg az eltéréseket; a lábakat tizedes hüvelykben mutatja (megvalósult mínusz terv: keleti, északi, magasság és az alaprajzi távolság). A nézet minden pontot zölddel vagy pirossal jelöl, a mérést a méréshez húzott vonallal összekötve, és szürkével, ha nem volt megmérve. A {{ui:Report (CSV)}} kiírja a teljes összehasonlítást.

Itt semmi sem módosítja a modellt. Még nincs elkészítve: kitűzés födémszélekből, rácsmetszéspontokból vagy az Ön számára készített nyílásokból, valamint pontok közvetlen küldése műszerre — használja a fájlt.
