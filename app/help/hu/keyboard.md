---
title: Billentyűk és egér
summary: A BimCraft összes billentyű-, egér-, érintőpad- és érintőképernyős művelete, csoportosítva aszerint, amit éppen néz.
keywords: billentyűzet, billentyűparancsok, gyorsbillentyűk, billentyűk, egér, érintőpad, érintés, körbeforgatás, eltolás, nagyítás, elrejtés, izolálás, átlátszóság, visszavonás, ismétlés, másolás, beillesztés, kettőzés, mentés, illesztés, nyomtatási nézet, escape, beállítások, rajzolás, fal, ajtó, ablak, alaprajz
from: 5c6eedce
---

A BimCraftban kevés a billentyűparancs. A munka nagyrészét az egérrel és a paneleken végzi. A {{key:Mod}} billentyűvel írt parancsikonok Macen a Command, másutt a Ctrl billentyűt használják. A billentyűk írásmódját ebben a súgóban lásd: [Billentyűk, egerek és érintőpadok](common:keys).

## Mindenhol

| Billentyű | Mit csinál |
|---|---|
| {{key:Ctrl+Shift+F}} | Képernyőmódok váltása: normál, teljes képernyő, teljes képernyő a sávok elrejtésével. Ctrl minden platformon, Macen is |
| {{key:Esc}} | Kilépés a teljes képernyőből |
| {{key:Mod+,}} | A {{ui:Beállítások}} megnyitása. Lásd [A BimCraft beállításai](topic:settings) |
| {{key:Tab}} | Mozgás gombok, jelölőnégyzetek és értékek között. Minden vezérlő billentyűzetről elérhető |

## 3D nézet (IFC-modellek)

| Billentyű vagy művelet | Mit csinál |
|---|---|
| {{key:F}} | Az egész modell illesztése, háromnegyedes nézetben (ugyanaz, mint a {{ui:Illesztés}}) |
| {{key:Esc}} | A kijelölés törlése, vagy az elhelyezés/beillesztés leállítása |
| Kattintás | A mutató alatti elem kijelölése; üres háttérre kattintva törlés |
| {{key:Mod}}+kattintás vagy {{key:Shift}}+kattintás | Elem hozzáadása a kijelöléshez, vagy kivétele belőle |
| {{key:H}} | A kijelölt elemek elrejtése. Lásd [Elemek elrejtése, izolálása és átlátszóvá tétele](topic:hide-and-isolate) |
| {{key:I}} | Csak a kijelölt elemek megjelenítése (izolálás) |
| {{key:T}} | A kijelölt elemek megjelenítése, minden más átlátszóan |
| {{key:Shift+H}} | Minden elem újra megjelenítése |
| {{ui:Bejárás}} | Ezután a {{key:W}} {{key:A}} {{key:S}} {{key:D}} vagy a nyilak mozgatnak, a {{key:Shift}} futtat, húzással lehet körülnézni, az {{key:Esc}} leállít. Lásd [Bejárás a modellben](topic:walk) |
| {{key:M}} | Távolságok és felületek mérése. Lásd [Távolságok, felületek és helyzetek mérése 3D-ben](topic:measure) |
| Húzás a bal gombbal | Körbeforgatás |
| Húzás a jobb gombbal | Eltolás |
| {{key:Shift}} vagy {{key:Mod}} és húzás a bal gombbal | Eltolás (érintőpadon praktikus) |
| Görgetés a görgővel, vagy húzás a középső gombbal | Nagyítás |
| Kétujjas görgetés vagy csippentés érintőpadon | Nagyítás |
| Egy ujj (érintés) | Körbeforgatás; koppintás kijelöl |
| Két ujj (érintés) | Csippentéssel nagyítás, együtt mozgatva eltolás |

| {{key:X}} | Metszősík be és ki. Lásd [IFC-modell vágása metszősíkkal](topic:section-plane) |
| {{key:Shift+X}} | Metszetdoboz a kijelölt elemek körül, a Beállításokban megadott helyiséggel |

A {{ui:Felülnézet}}, {{ui:Elölnézet}} és {{ui:Oldalnézet}} gombokhoz nincs billentyű; használja a gombokat.

## Szerkesztés

Ugyanezek a parancsok az eszköztárban vannak: {{ui:Visszavonás}}, {{ui:Ismétlés}}, {{ui:Másolás}}, {{ui:Beillesztés}} és a {{ui:Továbbiak}} menü, amely minden billentyűt mutat. Az IFC-modell 3D nézetében működnek, nem akkor, amikor mezőbe ír. Lásd [Másolás, beillesztés és kettőzés könyvtári elemekkel](topic:copy-paste).

| Billentyű | Mit csinál |
|---|---|
| {{key:Mod+Z}} | Az utolsó változtatás visszavonása |
| {{key:Mod+Y}} vagy {{key:Mod+Shift+Z}} | Az, amit a visszavonás visszavett, újra elvégzése |
| {{key:Mod+C}} | A kijelölt elemek másolása (nevük és tulajdonságaik szövegként is a vágólapra kerülnek) |
| {{key:Mod+X}} | A kijelölt elemek kivágása: másolás, majd törlés |
| {{key:Mod+V}} | Ami másolva lett, beillesztése: a mutatót követi, kattintson arra a helyre, ahová kerüljön |
| {{key:Mod+Shift+V}} | Beillesztés helyben: ahonnan kivágta, vagy a másolás után az eredetik mellé |
| {{key:Mod+D}} | Kettőzés: a kijelölt elemek másolása és a beillesztés indítása |
| {{key:Delete}} | A kijelölt elemek törlése, részeikkel és nyílásaikkal együtt. Lásd [Épületelemek törlése, kivágása, másolása és beillesztése](topic:edit-elements) |
| {{key:Mod+A}} | Minden látható elem kijelölése |
| {{key:Esc}} | Semmi sincs kijelölve |

Ha az oldalon szöveg van kijelölve, a {{key:Mod+C}} a szöveget másolja, ahogy szokásos.

## Alaprajz-nézet (Rajzolás)

Ezek akkor működnek, ha a {{ui:Rajzolás}} be van kapcsolva, és nem ír mezőbe. Lásd [Falak rajzolása](topic:draw-walls) és [Ajtók és ablakok](topic:doors-and-windows).

| Billentyű vagy művelet | Mit csinál |
|---|---|
| {{key:V}} | {{ui:Kijelölés}} |
| {{key:W}} | {{ui:Fal}} |
| {{key:D}} | {{ui:Ajtó}} |
| {{key:N}} | {{ui:Ablak}} |
| {{key:H}} | {{ui:Ajtó}} vagy {{ui:Ablak}} esetén: a zsanérok a másik végen |
| {{key:Shift}} falrajzolás közben | A fal 0°, 90°, 180° vagy 270°-os marad |
| Számjegyek és a láb- és hüvelykjelek (`'` és `"`) | Hossz beírása a {{ui:Hossz}} mezőbe; az {{key:Enter}} ezt használja |
| {{key:Enter}}, {{key:Esc}}, jobb kattintás vagy dupla kattintás | A rajzolt fal befejezése; az {{key:Esc}} újabb lenyomása a {{ui:Kijelölés}} módba visz vissza |
| {{key:Delete}} | A kijelölt falak, ajtók és ablakok törlése; a megmaradt falak újra összekapcsolódnak |
| {{key:F}} a mutatóval az alaprajzon | Az alaprajz illesztése |
| Görgetés a görgővel | Nagyítás a mutató körül |
| Húzás a középső vagy jobb gombbal, vagy {{key:Space}} és húzás | Eltolás; ha a {{ui:Kijelölés}} be van kapcsolva, sima húzás is eltol |
| Ajtó vagy ablak húzása a {{ui:Kijelölés}} módban | Mozgatás a falán, vagy egy másik falra |
| Két ujj (érintés) | Csippentéssel nagyítás, együtt mozgatva eltolás |

## Könyvtári elemek elhelyezése és beillesztése

| Billentyű | Mit csinál |
|---|---|
| {{key:R}} | Az elem 90°-os elforgatása |
| {{key:Tab}} | Falfogás be és ki: az elem hátoldala a legközelebbi falhoz illeszkedik |
| {{key:Enter}} az **X, Y (mm)** mezőben | Elhelyezés a beírt helyzetbe |
| {{key:Esc}} | Az elhelyezés vagy beillesztés leállítása |

## IFC-értékek szerkesztése

| Billentyű | Mit csinál |
|---|---|
| {{key:Enter}} | A beírt érték megtartása |
| {{key:Esc}} | Megszakítás, a régi érték visszaállítása |
| Máshová kattintás | A beírt érték megtartása |
| {{key:Mod+Z}} | Az utolsó változtatás visszavonása. Csak akkor, ha vannak nem mentett változtatásai, és nem ír mezőbe |
| {{key:Mod+Y}} | Az, amit a visszavonás visszavett, újra elvégzése |
| {{key:Mod+S}} | Mentés IFC-ként. Csak akkor, ha vannak nem mentett változtatásai; egyébként a böngésző saját mentési parancsa nyílik meg |

Csak billentyűzettel való szerkesztéshez: nyomja a {{key:Tab}} billentyűt, amíg egy érték ki nem jelölődik, majd nyomja meg az {{key:Enter}} billentyűt a beírás kezdéséhez.

## 2D rajzok (DWG és DXF)

| Billentyű vagy művelet | Mit csinál |
|---|---|
| {{key:F}} | A rajz vagy a rajzlap illesztése |
| {{key:P}} | Nyomtatási nézet be és ki |
| Dupla kattintás | Illesztés |
| Húzás bármelyik gombbal | Eltolás |
| Görgetés a görgővel | Nagyítás a mutatónál |
| Kétujjas görgetés vagy csippentés érintőpadon | Nagyítás a mutatónál. A kétujjas görgetés nem tol el |
| Egy ujj (érintés) | Eltolás. A csippentéses nagyítás a rajzokhoz még nincs elkészítve |

## Rajzok 3D-ben

| Billentyű vagy művelet | Mit csinál |
|---|---|
| {{key:3}} | 3D be és ki (a 2D nézeten is) |
| {{key:F}} | Teljes kiterjedés: az egész rajz |
| Húzás a középső vagy bal gombbal | Körbeforgatás |
| Húzás a jobb gombbal, vagy {{key:Shift}} és húzás | Eltolás |
| Görgetés a görgővel | Nagyítás a mutató alatti irányba |
| Kétujjas húzás érintőpadon | Körbeforgatás; {{key:Shift}}-tel eltolás |
| Csippentés érintőpadon | Nagyítás |
| Egy ujj (érintés) | Körbeforgatás |
| Két ujj (érintés) | Csippentéssel nagyítás, együtt mozgatva eltolás |

Az {{key:F}}, {{key:P}} és {{key:3}} nem tesz semmit, amíg mezőbe ír, amíg a {{ui:Berendezések}} kimutatása látszik, vagy ha lenyomva tartja a {{key:Mod}} vagy az {{key:Alt}} billentyűt.

## Fájlok

| Művelet | Mit csinál |
|---|---|
| Fájl húzása az oldalra | Megnyitás |
| Mappa húzása az oldalra | Megnyitás projektmappaként, engedélykérés nélkül |
