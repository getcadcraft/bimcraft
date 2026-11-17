---
title: "Alapértelmezett szabályzatok: adja meg, mivel induljon egy új épület"
summary: Egyszer adja meg, milyen falfajtával, szintekkel, első rajzlappal, LOD-címkékkel, mértékegységekkel és eszközzel induljon egy új épület, metrikus és angolszász projekthez egyaránt, és ossza meg a szabályzatokat az irodában egy kis fájlban.
keywords: alapértelmezés, alapértelmezések, alapértelmezett szabályzatok, szabályzat, irodai szabvány, irodai alapértelmezések, sablon, új épület, első falfajta, metrikus fal, falazat, LOD, fejlesztési szint, első rajzlap, papír, lépték, szintek, szintmagasság, szintnevek, falszerszám, mértékegységek, megosztás, export, import, json
from: 42379aa5
---

## Mit fog csinálni

Mondja meg a BimCraftnak, mivel induljon egy új épület, hogy az irodában senkinek ne kelljen minden alkalommal ugyanazokat változtatnia. Ez egy bővítmény: addig ki van kapcsolva, amíg be nem kapcsolja, és ha egy szabályzatot nem állít be, a BimCraft saját alapértéke pontosan úgy marad.

:::note
Ezek az **új** épületek és az **új** elemek alapértelmezései. Egy már megkezdett projekt nem változik.
:::

## Lépések

1. Nyissa meg a Beállításokat, lépjen a {{ui:Bővítmények}} részre, és kapcsolja be az {{ui:Alapértelmezett szabályzatok}} lehetőséget.
2. A Beállításokban nyissa meg a **BimCraft** lapot, és a bal oldali listában válassza az {{ui:Alapértelmezett szabályzatok}} lehetőséget.
3. Állítsa be a kívánt szabályzatokat. Mindegyik a **BimCraft saját** értékével indul, a zárójelben lévő tartalommal. Egy szabályzat, amelynek **Metrikus** és **Angolszász** doboza van, projekttípusonként egy értéket vesz fel; csak a szükségeseket töltse ki.
4. Nincs Mentés gomb: minden módosítás azonnal mentődik. Egy nem használható értéket szavakban elutasít, és a régi marad.
5. Kattintson a {{ui:Új épület}} gombra. A párbeszédpanel a szabályzataiból töltődik ki, és minden olyan érték mellett, amelyet egy szabályzat állított be, ott áll: **az alapértelmezett szabályzatokból**. A {{ui:Létrehozás}} előtt bármelyiket még módosíthatja.

## A szabályzatok

- **Egy új épület mértékegységei**: a mértékegységek erre váltanak a Létrehozásnál.
- **Szintek száma**, **Szintnevek** és **Szintmagasság**. A névben a `{n}` 1-et, 2-t, 3-at számol; a `{n0}` 0-t, 1-et, 2-t; a `{nn}` és `{nn0}` ugyanezt két számjeggyel. Így a `Floor {nn0}` eredménye Floor 00, Floor 01, Floor 02.
- **Első falfajta**: amit a Fal eszköz először rajzol. Egy metrikus iroda kezdhet Külső falazat 300 mm-rel, míg az angolszász projektek megtartják a Külső 2×6 falat.
- **LOD-címke a kezdő falfajtákon**: a fejlesztési szint (LOD 100-tól 500-ig), amelyet a kilenc kezdő típus bárhol mutat, ahol falfajtát listáznak. Lásd [Falszerkezetek készítése](topic:wall-assemblies).
- **Egy újonnan készített falfajta LOD-ja**: a címke, amellyel egy új típus a típusszerkesztőben kezdődik. Ott módosíthatja.
- **Első rajzlap**: a papírja, léptéke, lapszáma és neve (a legalacsonyabb szint nevének helyén `{level}`), vagy egyáltalán nincs első rajzlap.
- **Feliratméretek papíron** (Beállítások › Globális › Alapértelmezett szabályzatok): az iroda magasságai, nyomtatott milliméterben: megjegyzések, méretszöveg, címkék, helyiségnevek, rácsbuborék-betűk, nézetcímek és kimutatás-szöveg. Egy új épület a Létrehozásnál veszi át, és a fájljában megtartja. Lásd [Teljes méretben rajzolás, léptékhez igazított feliratozás](topic:annotation-sizes).
- **Aktív eszköz a Létrehozás után**: a Kijelölés, ahogy a BimCraft magától teszi, vagy a Fal, így az alaprajzon az első két kattintás már falat rajzol.

## Kimutatás elrendezése: az iroda szabványa

A **Beállítások › Globális › Alapértelmezett szabályzatok** alatt, a **Kimutatás elrendezése (az iroda szabványa)** részben állítsa be, hogyan csoportosítsa minden kimutatás az elemeket, legyen-e részösszeg és végösszeg, cím, valamint az oszlopfejlécek nagy- és kisbetűs írásmódja. Minden kimutatás, amely nem maga adja meg ezeket, átveszi őket, bárki állítja is be. Lásd [Kimutatás elrendezése, mentése és exportálása](topic:schedule-layouts).

## Megosztás az irodában

1. A Beállításokban nyissa meg a **Globális** lapot, és válassza az {{ui:Alapértelmezett szabályzatok}} lehetőséget.
2. Ha szeretné, írja be az **Iroda neve** mezőbe. Ez a fájlba íródik.
3. Kattintson a {{ui:Mentés fájlba}} gombra. Kap egy kis fájlt, amely `.ccdefaults.json`-ra végződik.
4. Egy másik számítógépen kapcsolja be a bővítményt, nyissa meg ugyanezt a helyet, és kattintson a {{ui:Betöltés fájlból}} gombra. A fájl szabályzatai felülírják az ottani szabályzatokat.

A Globális lap tartalmazza az **Új projekt mértékegység-rendszerét**, amely minden olyan alkalmazásra érvényes, amelyben megvan a bővítmény, valamint a {{ui:Minden szabályzat visszaállítása}} gombot. A BimCraft lapon lévő {{ui:Visszaállítás a BimCraft saját alapértékeire}} csak a BimCraft szabályzatait törli.

## Jó tudni

- A fájl egyszerű, nyílt JSON: szabályzatnevek és értékek listája. Egy olyan szabályzatot, amelyet a fájl megnevez, de ez a verzió nem ismer, kihagyja, és az üzenetben megnevezi; a többi betöltődik.
- A szabályzatok ebben a böngészőben tárolódnak, minden CadCraft-alkalmazás számára ezen a számítógépen. Nem az épület fájljában tárolódnak, és nem szinkronizálódnak számítógépek között: használja a fájlt.
- Egy kezdő típus címkéje ezen a számítógépen lévő szabályzatból származik. A kezdő típus másolataként készült típus a címkéjét az épület fájljában viszi magával.
- A BimCraftnak nincs pontossági beállítása, ezért itt nincs pontossági szabályzat.
- Sablonból indított épület a sablon saját szintjeit és rajzlapjait hozza. A falfajta- és a mértékegység-szabályzat továbbra is érvényes.
- Kapcsolja ki a bővítményt, és minden újra a BimCraft saját lesz. A szabályzatai megmaradnak, hogy visszakapcsoláskor újra elérhetők legyenek.
