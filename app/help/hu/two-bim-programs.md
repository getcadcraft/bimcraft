---
title: Munka két BIM-program között
summary: Modell küldése egyik BIM-programból a másikba IFC-n át, a BimCraft közvetítésével; GlobalId-k, tulajdonságkészletek és osztályozások megőrzése; mindkét program beállítása ugyanazokra a tulajdonságokra; és annak megtekintése, mi érkezett vissza.
keywords: ifc, oda-vissza, együttműködés, globalid, guid, tulajdonságkészletek, psets, osztályozások, megosztott paraméterek, tulajdonság-leképezés, fordító, bcf, koordináció, csere
from: 9f224176
---

## Mit fog csinálni

Mozgasson egy modellt két BIM-program között, például Revitből Archicadba és vissza, IFC-n át. A BimCraft közben ellenőrzi, kiegészíti, és jelentést készít arról, mi maradt meg. Egyik program saját fájlformátumát sem olvassa be: minden IFC-ként utazik.

## Mit őriz meg a BimCraft

Ha módosít egy modellt a BimCraftban, és a {{ui:Mentés IFC-ként}} gombra kattint, minden olyan sor, amelyet nem módosított, pontosan úgy íródik vissza, ahogy volt. Így:

- A **GlobalId-k** megmaradnak, így a másik program minden elemet hozzá tud rendelni ahhoz, amelyet elküldött.
- A **tulajdonságkészletek** és értékeik megmaradnak, a módosított értékek kivételével.
- Az **osztályozások** az elemeikhez kapcsolva maradnak.

## Mindkét program beállítása ugyanazokra a tulajdonságokra

1. Nyissa meg a modellt a BimCraftban (és a projektcsomagot is, ha van: a tulajdonságcsoportjai hozzáadódnak).
2. A bal panelen nyissa meg ezt: {{ui:Két BIM-program között}}.
3. A **Tulajdonság-leképezés** alatt töltse le azt, amire mindkét programnak szüksége van:
   - {{ui:Megosztott paraméterek}}: egy megosztott paraméterfájl. Revitben a Kezelés › Megosztott paraméterek menüponttal töltse be, és adja hozzá a paramétereket a szükséges kategóriákhoz.
   - {{ui:IFC-exportálási tulajdonságkészletek}}: egy felhasználó által definiált tulajdonságkészlet-fájl. A Revit IFC-exportbeállításai között, a felhasználó által definiált tulajdonságkészletek alatt válassza ki, hogy az exportált IFC ugyanazt a készletet és tulajdonságneveket hordozza.
   - {{ui:Leképezési táblázat (CSV)}}: minden tulajdonság a hozzá tartozó IFC-készlettel és névvel, a típusával, valamint a megfelelő nevekkel mindkét programban. Az Archicad leképezési fájljai nem közzétett formátumúak, ezért az IFC-fordítóját és a tulajdonságkezelőjét ebből a táblázatból kézzel állítsa be.
   - {{ui:Leképezési fájl}}: a teljes leképezés egyetlen fájlban, hogy a projekttel együtt tárolhassa.

A szabványos készletek (Pset_ és Qto_) kimaradnak a megosztott paraméterfájlból: mindkét program a saját adataiból írja azokat.

## A modell elküldése és visszahozása

1. Exportáljon IFC-t az első programból a GlobalId-k megtartásával (Revit: „Az IFC GUID tárolása egy elemparaméterben exportálás után” bekapcsolva).
2. Nyissa meg az IFC-fájlt a BimCraftban, ellenőrizze ({{ui:Modellellenőrzések}}, {{ui:Ütközésvizsgálat}}), adjon hozzá problémákat ({{ui:Problémák}}, BCF), szükség esetén módosítsa az értékeket, és kattintson erre: {{ui:Mentés IFC-ként}}.
3. Nyissa meg a mentett IFC-t a második programban, dolgozzon rajta, majd exportáljon onnan IFC-t a GlobalId-k megtartásával (Archicad fordító: „Globális egyedi azonosítók: meglévők megtartása”).
4. Térjen vissza a BimCraftba, nyissa meg a kiment modellt, majd adja hozzá a visszaérkezettet ({{ui:Modell hozzáadása}}, a Modellek alatt).
5. A {{ui:Két BIM-program között}} részben válassza ki a **Kiment** és a **Visszaérkezett** modellt, majd kattintson erre: {{ui:A jelentés elkészítése}}.

## A jelentés olvasása

- **Elemek**: hány érkezett vissza ugyanazzal a GlobalId-val, hány hiányzik, és hány új. Az új GlobalId-val rendelkező elemek egy hiányzóként és egy újként jelennek meg: a másik program nem tartotta meg az azonosítót.
- **IFC-osztály megváltozott**: olyan elemek, amelyek más fajta elemként érkeztek vissza.
- **Megtartott tulajdonságértékek**: a változatlanul visszaérkezett értékek aránya. A lista azokat a tulajdonságokat mutatja, amelyeknél a legtöbb érték változott meg vagy hiányzik.
- **Osztályozások**: megtartva, megváltozva (ugyanaz a rendszer, más kód) vagy hiányzik.

A {{ui:A jelentés letöltése (CSV)}} minden tulajdonságot a darabszámaival együtt ad. Ha látni szeretné, mely elemek mozdultak el vagy változtak alakot, használja a {{ui:Verziók összehasonlítása}} funkciót ugyanazon a két modellen.

:::note
A BimCraft egyik programot sem futtatja. Hogy mely beállítás viszi át az értéket, az az egyes programok IFC-beállításaitól függ: a jelentés azt mutatja, mi jött valójában vissza, ezért próbáljon ki egy beállítást, exportáljon újra, és hasonlítsa össze.
:::

## A problémák BCF-ként utaznak

Az Ön által a BimCraftban felvett problémák BCF-ként exportálódnak ({{ui:Problémák}}), amelyet mindkét program BCF-eszközeivel meg tud nyitni, így egy elemre vonatkozó kérdés a nézetével együtt eljut a másik programban dolgozó személyhez.

Lásd még: [Projektcsomag megnyitása](topic:open-project-bundle), [Projektfájlból a BimCraftba IFC-n át](topic:rvt-to-ifc) és [Modell két verziójának összehasonlítása](topic:compare-versions).
