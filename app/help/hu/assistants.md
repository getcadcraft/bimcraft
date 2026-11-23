---
title: Engedje, hogy egy MI-asszisztens dolgozzon a modelljével
summary: Kapcsolja be az asszisztenseket a Beállításokban, hogy a számítógépén futó asszisztens megtalálhassa az elemeket, beolvashassa a tulajdonságaikat, elkülöníthesse őket a nézetben, és falakat, ajtókat, ablakokat, padlókat, szinteket és rácsokat rajzolhasson a CadCraft Studio közvetítésével. Amíg be nem kapcsolja, ki van kapcsolva.
keywords: mi, asszisztens, mcp, szkript, automatizálás, studio, elemek keresése, elkülönítés, tulajdonságok, jogosultságok, szétkapcsolás, tevékenység, falak rajzolása, ajtók hozzáadása, ablakok hozzáadása, szintek, rácsok, padlók, visszavonás, mentés, parancssor, cli, fej nélküli, használat MI-asszisztensekkel
from: 66d72742
---

## Mit fog megtudni

Hogyan engedheti, hogy egy MI-asszisztens (bármely MCP-t beszélő asszisztens) belenézzen a megnyitott IFC-modellbe és rajzoljon benne, mit tud és mit nem tud megtenni, és hogyan állíthatja le.

## Mit tehet az asszisztens a BimCraftban

| Ezt kéri | Mi történik | Szükséges |
|---|---|---|
| Elemek keresése | Elemek listáját kapja osztály, szint, név vagy tulajdonságérték szerint, ahogy a **Keresés** teszi | Olvasás |
| Tulajdonságok olvasása | Egy elem attribútumait, típusát, tulajdonságkészleteit és mennyiségeit kapja meg, ahogy a {{ui:Tulajdonságok}} mutatja | Olvasás |
| A modell leírása, falak listázása | Megkapja a szinteket, falakat, ajtókat, ablakokat, helyiségeket, padlókat, rácsokat és oszlopokat, valamint minden fal végpontjait, típusát és magasságát | Olvasás |
| Elkülönítés, áttetszővé tétel, elrejtés vagy megjelenítés | A 3D nézet úgy változik, mintha a {{ui:Megjelenítés}} menüt használta volna | Nézet módosítása és rajzolás |
| Falak, ajtók, ablakok, padlók, szintek vagy rácsvonalak rajzolása | A modell úgy változik, mintha a {{ui:Rajzolás}} eszközeit használta volna: a falak csatlakoznak, a helyiségek, padlók és tetők követik őket | Nézet módosítása és rajzolás |
| Név vagy tulajdonságérték módosítása | Egy elem Neve, Leírása, Objektumtípusa vagy Címkéje, vagy egy tulajdonságérték. Az összes többi elemmel közös értéket az asszisztens számára előbb lemásolják; a típus értékét csak akkor módosítja, ha az asszisztens ezt kéri, mert a típus minden eleme követi | Nézet módosítása és rajzolás |
| Mozgatás, törlés, falak, ajtók és ablakok módosítása | Az elemek a rájuk épülő elemekkel együtt mozognak vagy törlődnek. A {{ui:Rajzolás}} eszközeivel rajzolt falak végpontjukkal vagy típusukkal változnak, az ajtók és ablakok helyükkel, méretükkel vagy típusukkal, a helyiségek és csatlakozások pedig követik őket | Nézet módosítása és rajzolás |
| Kimutatás beállítása, elrendezése és olvasása | „Ajtókimutatás szintenként, tűzállósági osztállyal és vasalatokkal”: az asszisztens megnevezi a kimutatást, az oszlopait (egy tulajdonság vagy címke oszloppá válik) és a csoportosítását; a BimCraft a modellből tölti ki és rendezi el, a nem megadott részeket pedig az irodai szabványból veszi. A beállítás bekerül a Kimutatások listájába. Minden sor, amit visszakap, megnevezi az elemeit, így kijelölheti őket | Olvasáshoz: Olvasás; a beállítás mentéséhez: Nézet módosítása és rajzolás |
| Kimutatás exportálása | CSV, Excel vagy tabulátorral tagolt szöveg, amelyet a Google Táblázatokba lehet beilleszteni (semmi sem kerül a Google-hoz) | Exportálás |
| Helyiségburkolatok olvasása és beállítása | A burkolattípusok, minden helyiség padló-, fal- és mennyezetburkolata, zónák; a területek, csempeszámok és alapréteg-térfogatok ezután a burkolati kimutatásokból származnak | Olvasás; beállításhoz: Nézet módosítása és rajzolás |
| Elemek kijelölése, saját lépéseinek visszavonása | Az elemeket a nézetben jelöli ki; utolsó lépése visszavonásra kerül | Nézet módosítása és rajzolás |
| Mentés | Új IFC-fájl minden módosítással, ahogy a {{ui:Mentés IFC-ként}} készíti (az eredeti soha nem változik) | Mentés |
| USD exportálása | A megnyitott modellek OpenUSD formátumban (.usda, .usdc vagy .usdz), ahogy az eszköztáron lévő {{ui:USD}} írja | Exportálás |
| Kép renderelése, a renderelési sor futtatása | A 3D nézet képe, ahogy a {{ui:Renderelés}} párbeszédpanel készíti a Renderelés beállításaival, hacsak nem kér mást; vagy nagy minőségű képek kerülnek a párbeszédpanel sorába, és egymás után renderelődnek (a sorhoz WebGPU szükséges). A modell nem változik ([Kép renderelése](topic:render)) | Exportálás |

Az asszisztens minden módosítása egy lépés a **Változások** listában, „Asszisztens: …” névvel (például „Asszisztens: 4 fal hozzáadása”), így a {{key:Mod+Z}} az egész műveletét visszavonja, és látszik, melyik lépés kié. Az ablakban fájlt nem tud megnyitni: Ön nyitja meg a modellt, az asszisztens pedig a megnyitottal dolgozik.

## Bekapcsolás

Az asszisztensek a számítógépén futó CadCraft Studio-n keresztül érik el a BimCraftot; a sima böngészőből nincs hozzáférés.

1. Nyissa meg a {{ui:Beállítások}} menüt, és válassza a **BimCraft** lapot.
2. Az **Asszisztensek** alatt jelölje be a **MI-asszisztensek és szkriptek használhatják a BimCraftot** lehetőséget.
3. Az **Olvasás** már be van jelölve. Jelölje be a **Nézet módosítása és rajzolás** lehetőséget is, ha az asszisztens elkülöníthet és elrejthet elemeket, illetve rajzolhat, és a **Mentés** lehetőséget, ha a modellt új fájlként mentheti.
4. Csatlakoztassa az asszisztenst a Studióban (a Studio megjeleníti a címet és a beillesztendő beállításokat).

## Amíg asszisztens csatlakozik

A jobb oldali panel tetején lévő megjegyzés jelzi, melyik asszisztens csatlakozik, és mit tehet. Kattintson a {{ui:Szétkapcsolás}} gombra, hogy azonnal befejezze a munkamenetét; a folytatáshoz újra kell csatlakoznia.

**Tevékenység**: a Beállítások **Asszisztensek** részében az asszisztens minden hívását felsorolja, a legújabbal kezdve, és azt, hogy sikerült-e.

:::tip
Egyszerű szavakkal kérdezzen, például: „elkülönítés a külső falak az 1. szinten”, „melyik ajtóknak nincs tűzállósági osztálya?” vagy „rajzoljon egy 6 x 4 méteres helyiséget az 1. szinten, ajtóval a déli falban”. Az asszisztens megtalálja az elemeket, és megjeleníti őket a nézetben, vagy megrajzolja őket.
:::

## Ablak nélkül: szkriptek és parancssor

Ugyanezek a rajzolóeszközök működnek a megnevezett mappákban lévő IFC-fájlokon is, ablak megnyitása nélkül: a CadCraft MCP-kiszolgálója és parancssora új épületet indíthat vagy IFC-fájlt nyithat meg, leírhatja, falakat, ajtókat, ablakokat, padlókat, szinteket és rácsokat adhat hozzá, visszavonhatja a lépéseket, és új `.ifc` fájlként mentheti. Négy további eszköz szkriptekhez való: az `ifc_batch` legfeljebb 200 szerkesztési lépést futtat egyben (mindent vagy semmit: egy visszavonás az egész köteget visszaveszi, a visszautasított lépés pedig visszavonja a többit, és megnevezi a lépést); az `ifc_describe` felsorolja a szinteket és minden falat az ajtóival és ablakaival együtt; az `ifc_render_png` ablak nélkül egy egyszerű, lapos árnyalású ellenőrző képet ír a modellről (anyagok, textúrák és árnyékok nélkül); az `usd_export` `.usda`, `.usdc` vagy `.usdz` fájlt ír. A parancssorban a `cadcraft bim script.json --from model.ifc -o out.ifc` lefuttat egy lépésekből álló szkriptet, a `--usd`, `--png` és `--plan` kapcsolók pedig ugyanabból a futtatásból USD-fájlt, képet vagy alaprajzot írnak. Ön dönti el, mely mappákat használhatja, és hogy módosíthat-e vagy menthet-e bármit.

## Kikapcsolás

Törölje a jelölést a **MI-asszisztensek és szkriptek használhatják a BimCraftot** lehetőség mellől. Minden asszisztens azonnal lecsatlakozik, a beállítás pedig megmarad a következő alkalomra.

## Lásd még

- [Receptek MI-asszisztensekhez](common:assistants-recipes): kidolgozott példák, mindegyik a hívott eszközökkel.
- [Elemek keresése osztály, név vagy tulajdonság alapján](topic:find)
- [Elemek elrejtése, elkülönítése és áttetszővé tétele](topic:hide-and-isolate)
- [A BimCraft beállításai](topic:settings)
