---
title: A parancssor az állapotsávban
summary: Olyan elrendezésben, amelyben van parancssor, bárhol gépelhet, és a betűk az alsó sorba kerülnek. Listázza az egyezéseket, megőrzi az előzményeket, és soha nem takarja a rajzot.
keywords: parancssor, bárhol gépelés, gépelt parancs, állapotsáv, előzmények, nyílbillentyűk, enter, space, WALL, DOOR, Duncan elrendezés, Rhino elrendezés, gyorsbillentyű, billentyűk, parancskereső
from: d583b52d
---

## Mit fog csinálni

Eszközöket névvel futtathat, anélkül hogy előbb egy mezőre kattintana.

## Lépések

1. Válasszon olyan elrendezést, amelyben van parancssor: nyissa meg a {{ui:Beállítások}} menüt, válassza a {{ui:Globális}} lehetőséget, majd a {{ui:Elrendezés}} részt, és válassza a **Duncan** (vagy a **Rhino**) elrendezést. A sor az ablak alján, az állapotsávban van.
2. Ha a mutató bárhol van, és nincs használatban mező, gépelje be: `wall`. A betűk megjelennek a parancssorban, fölötte pedig listában megjelennek az egyező parancsok.
3. Nyomja meg az {{key:Enter}} billentyűt. Elindul a Fal eszköz.
4. Kattintson a parancssorba (vagy nyomjon meg újra egy billentyűt). Ha a sor üres, a lista a korábban gépelt parancsokat mutatja. Az {{key:Up}} és {{key:Down}} billentyűkkel lépegethet közöttük; az {{key:Enter}} lefuttatja a kijelöltet.

## Mit lehet gépelni

- A használt menüstílus parancsszava, ha a stílusnak vannak ilyenek (`WALL`, `WA`, `DOOR` a Drafting stílusban).
- Egy parancs billentyűje szóként: a `W`, majd {{key:Enter}} vagy {{key:Space}} a Fal, a `D` pedig az Ajtó.
- Egy parancs neve szóközökkel vagy azok nélkül: `split wall`, `wallrectangle`.
- Egy szó vagy név eleje, ha csak egy parancs kezdődik így.
- Minden más megnyitja a parancskeresőt a beírt szöveggel.

## Érdemes tudni

- Az {{key:Esc}} kiüríti a sort, és visszaadja a billentyűket a rajznak.
- Ezekben az elrendezésekben egyetlen betű már nem indít el eszközt önmagában: a sorban vár az {{key:Enter}} vagy a {{key:Space}} billentyűre. A {{key:Ctrl}}-lal kezdődő billentyűk, a funkcióbillentyűk, a {{key:Delete}} és az {{key:Esc}} a régiekként működnek. A többi elrendezésben semmi nem változik.
- Rajzoló eszköz futtatása közben a számjegyek az eszközhöz tartoznak (begépelt hossz).
- A mezőben, párbeszédpanelen vagy a Beállításokban gépelt szöveg ott is marad.
- Az előzmények ezen a számítógépen tárolódnak, alkalmazásonként 50 paranccsal.
