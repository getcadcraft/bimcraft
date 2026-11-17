---
title: MI-asszisztens használata a modellen
summary: Kapcsolja be az asszisztenseket a Beállításokban, hogy a számítógépén futó asszisztens megtalálhassa az elemeket, olvashassa a tulajdonságaikat, izolálhassa őket a nézetben, és falakat, ajtókat, ablakokat, padlókat, szinteket és rácsokat rajzolhasson a CadCraft Studio-n keresztül. Addig ki van kapcsolva, amíg be nem kapcsolja.
keywords: ai, asszisztens, mcp, szkript, automatizálás, studio, elemek keresése, izolálás, tulajdonságok, jogosultságok, leválasztás, tevékenység, falak rajzolása, ajtók hozzáadása, ablakok, szintek, rácsok, padlók, visszavonás, mentés, parancssor, cli, fej nélküli, használat AI-asszisztensekkel
from: c5ee595b
---

## Mit fog megtudni

Hogyan engedheti meg, hogy egy MI-asszisztens (bármely MCP-t beszélő asszisztens) belenézzen a megnyitott IFC-modellbe és rajzoljon benne, mit tehet és mit nem, és hogyan állíthatja le.

## Mit tehet az asszisztens a BimCraftban

| Ezt kéri | Mi történik | Szükséges |
|---|---|---|
| Elemek keresése | Elemek listáját kapja osztály, szint, név vagy tulajdonságérték szerint, ahogy a **Keresés** teszi | Olvasás |
| Tulajdonságok olvasása | Egy elem attribútumait, típusát, tulajdonságkészleteit és mennyiségeit kapja, ahogy a **Tulajdonságok** mutatja | Olvasás |
| A modell leírása, falak listázása | Szinteket, falakat, ajtókat, ablakokat, helyiségeket, padlókat, rácsokat és oszlopokat kap, valamint minden fal végpontjait, típusát és magasságát | Olvasás |
| Izolálás, áttetszővé tétel, elrejtés vagy megjelenítés | A 3D-nézet úgy változik, mintha a {{ui:Megjelenítés}} menüt használta volna | A nézet módosítása és rajzolás |
| Falak, ajtók, ablakok, padlók, szintek vagy rácsvonalak rajzolása | A modell úgy változik, mintha a {{ui:Rajzolás}} eszközeit használta volna: a falak csatlakoznak, a helyiségek, padlók és tetők követik | A nézet módosítása és rajzolás |
| Név vagy tulajdonságérték módosítása | Egy elem Név, Leírás, Objektumtípus vagy Címke mezője, vagy egy tulajdonságérték. Az általa más elemekkel megosztott értéket először másolja; a típus értéke csak akkor változik, ha az asszisztens ezt kéri, mert a típus minden eleme követi | A nézet módosítása és rajzolás |
| Mozgatás, törlés, falak, ajtók és ablakok módosítása | Az elemek mozognak vagy törlődnek azzal együtt, amit tartanak; a {{ui:Rajzolás}} eszközeivel rajzolt falak végpontjukkal vagy típusukkal, az ajtók és ablakok helyükkel, méretükkel vagy típusukkal változnak, a helyiségek és csatlakozások követik | A nézet módosítása és rajzolás |
| Kimutatás beállítása, elrendezése és olvasása | „Ajtókimutatás szintenként, tűzállósággal és vasalatokkal”: az asszisztens megnevezi a kimutatást, oszlopait (egy tulajdonság vagy címke oszloppá válik) és csoportosítását; a BimCraft a modellből tölti fel és rendezi el, ami nincs megadva, azt az irodai szabványból veszi. A beállítás a {{ui:Kimutatások}} listájához csatlakozik. Minden visszakapott sor megnevezi az elemeit, így ki tudja jelölni őket | Olvasás a kimutatás olvasásához; A nézet módosítása és rajzolás a beállítás mentéséhez |
| Kimutatás exportálása | CSV, Excel vagy tabulátorral elválasztott szöveg, amelyet a Google Táblázatokba lehet beilleszteni (semmi nem megy a Google-höz) | Exportálás |
| Helyiségfelületek olvasása és beállítása | A felülettípusok, minden helyiség padló-, fal- és mennyezetfelülete, zónák; a területek, csempeszámok és alréteg-térfogatok ezután a felületkimutatásokból származnak | Olvasás; a beállításhoz A nézet módosítása és rajzolás |
| Elemek kijelölése, saját lépések visszavonása | Az elemeket a nézetben jelöli ki; az utolsó lépését visszavonja | A nézet módosítása és rajzolás |
| Mentés | Új IFC-fájl minden változással, ahogy a {{ui:Mentés IFC-ként}} készíti (az eredeti soha nem változik) | Mentés |
| USD exportálása | A megnyitott modellek OpenUSD formátumban (.usda, .usdc vagy .usdz), ahogy az eszköztáron a {{ui:USD}} írja | Exportálás |
| Kép renderelése, a rendermező futtatása | A 3D-nézet képe, ahogy a {{ui:Renderelés}} párbeszédpanel készíti a Renderelés beállításaival, hacsak mást nem kér, vagy nagy minőségű képek kerülnek a párbeszédpanel sorába, és egymás után renderelődnek (a sorhoz WebGPU kell). A modell nem változik ([Kép renderelése](topic:render)) | Exportálás |

Minden változást, amelyet egy asszisztens tesz, egy lépés a **Változások** listában, „Asszisztens: …” névvel (például „Asszisztens: 4 fal hozzáadása”), így a {{key:Mod+Z}} az egész műveletét visszavonja, és látja, kinek a lépése volt. Az ablakban nem nyithat meg fájlokat: Ön nyitja meg a modellt, az asszisztens pedig a megnyitottal dolgozik.

## Bekapcsolás

Az asszisztensek a számítógépén futó CadCraft Studion keresztül érik el a BimCraftot; a sima böngésző nem enged be.

1. Nyissa meg a {{ui:Beállítások}} részt, és válassza a **BimCraft** lapot.
2. Az **Asszisztensek** részben jelölje be a **MI-asszisztensek és szkriptek használhatják a BimCraftot** lehetőséget.
3. Az **Olvasás** már Ön számára be van jelölve. Jelölje be a **A nézet módosítása és rajzolás** lehetőséget is, ha az asszisztens izolálhat és elrejthet elemeket, és rajzolhat, valamint a **Mentés** lehetőséget, ha a modellt új fájlként mentheti.
4. Csatlakoztassa az asszisztenst a Studióban (a Studio megmutatja a címet és a beállításokat, amelyeket be kell illesztenie).

## Amíg asszisztens csatlakozik

A jobb oldali panel tetején egy megjegyzés mondja meg, melyik asszisztens csatlakozott és mit tehet. Kattintson a {{ui:Szétkapcsolás}} gombra, hogy azonnal befejezze a munkamenetét; újra csatlakoznia kell, hogy folytassa.

A **Tevékenység** a Beállítások **Asszisztensek** része alatt minden hívást felsorol, a legújabbal kezdve, azzal együtt, hogy sikerült-e.

:::tip
Kérjen egyszerű szavakkal, például „izolálja a külső falakat a Level 1-en”, „melyik ajtónak nincs tűzállósága?” vagy „rajzoljon egy 6 x 4 méteres helyiséget a Level 1-en, ajtóval a déli falban”. Az asszisztens megtalálja az elemeket, és megmutatja a nézetben, vagy rajzolja őket.
:::

## Ablak nélkül: szkriptek és parancssor

Ugyanazok a rajzolóeszközök működnek a megadott mappákban lévő IFC-fájlokon, ablak megnyitása nélkül: a CadCraft MCP-szervere és parancssora új épületet tud kezdeni vagy IFC-fájlt megnyitni, leírni, falakat, ajtókat, ablakokat, padlókat, szinteket és rácsokat adni hozzá, visszavonni, és új `.ifc` fájlként menteni. Ön dönti el, mely mappákat használhatja, és hogy módosíthat-e vagy menthet-e bármit.

## Kikapcsolás

Törölje a jelölést itt: **MI-asszisztensek és szkriptek használhatják a BimCraftot**. Minden asszisztens azonnal leválasztódik, a beállítás pedig megmarad a következő alkalomra.

## Lásd még

- [Receptek MI-asszisztensekhez](common:assistants-recipes): kidolgozott példák, mindegyik a hívott eszközökkel.
- [Elemek keresése osztály, név vagy tulajdonság szerint](topic:find)
- [Elemek elrejtése, izolálása és áttetszővé tétele](topic:hide-and-isolate)
- [BimCraft-beállítások](topic:settings)
