---
title: Elem kijelölése és tulajdonságainak olvasása
summary: Kattintson a 3D-modell bármely elemére, hogy kiemelje, és olvassa el a nevét, típusát, címkéjét, GlobalId-ját, tulajdonságkészleteit és mennyiségeit.
keywords: tulajdonságok, kijelölés, kiválasztás, kattintás, elem, paraméterek, tulajdonságkészletek, pset, mennyiségek, globalid, guid, típus, vizsgálat
from: 43b80aa8
---

## Mit fog csinálni

Jelöljön ki elemeket egy IFC-modellben, és olvassa el mindazt, amit a fájl róluk mond: attribútumokat, tulajdonságkészleteket, típustulajdonságokat és mennyiségeket.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Kattintson egy elemre, például egy ajtóra. Húzás nélkül kattintson: ha a húzás néhány pixelnél többet mozdul, akkor forgatás történik a kijelölés helyett.
3. Nézze meg az elemet: kéken van kiemelve.
4. Nézze meg a jobb oldali {{ui:Tulajdonságok}} panelt. Felül az elem fajtája (például „Door” vagy „WallStandardCase”) és a neve áll.
5. Olvassa el az első blokkot: **Name** (Név), **Type** (Típus), **Object type** (Objektumtípus), **Tag** (Címke), **Description** (Leírás), **GlobalId** és **Line** (Sor).
6. Görgessen le a tulajdonságkészletekhez. Az első három nyitva van; bármely más készlet megnyitásához kattintson a nevére.
7. Kattintson egy másik elemre, hogy átváltson rá.
8. Nyomja meg az {{key:Esc}} billentyűt, vagy kattintson üres háttérre a kijelölés törléséhez.

## Amit látnia kell

- A kiemelt elem és az adatai a jobb oldalon.
- A tulajdonságkészletek ábécé-sorrendben. Az elem **típusából** származó készletek neve után „ (típus)” áll, és a megjegyzés: „Típustulajdonság: a módosítás a típus minden elemére érvényes.”
- A mennyiségkészletek (például hosszúságok, területek és térfogatok) a többi készlettel együtt. A mennyiségek csak olvashatók.
- A módosítható értékek gombokként néznek ki. A [Tulajdonságok szerkesztése és a szerkesztett másolat mentése](topic:edit-ifc-properties) mutatja, hogyan.

A [Tulajdonságpanel mezői](topic:properties-panel) minden mezőt elmagyaráz.

## Rejtett elemek elérése

1. Hogy az épület belsejében lévő elemhez férjen, törölje a jelölést a felette lévő szinteknél a {{ui:Szintek}} listában.
2. Hogy egy helyiségtérfogat mögötti falhoz férjen, kapcsolja ki a {{ui:Terek}} lehetőséget.
3. Kattintson az elemre.

## Gyakori hibák

- **Kis húzás kattintás közben.** A BimCraft ezt forgatásnak veszi, és nem jelöl ki. Tartsa mozdulatlanul az egeret.
- **Számok mellett mértékegységet vár.** Az értékek a fájlban tárolt formában jelennek meg, négy tizedesjegyre kerekítve, mértékegységjel nélkül. Metrikus exportnál a hosszak általában milliméterben vagy méterben vannak; ellenőrizze az exportáló beállításait.
- **Egy ismerős nevű paramétert keres.** Az exportálók átnevezik és IFC tulajdonságkészletekbe csoportosítják a paramétereket, például `Pset_WallCommon` néven. Nézze végig az egyes készleteket; az egyedi paraméterek gyakran az exportáló programról vagy a cégről elnevezett készletben vannak.
- **Keresőmezőt vár.** Kattintson egy elem kijelöléséhez; a {{key:Mod}}+kattintás vagy a {{key:Shift}}+kattintás többet jelöl ki, a {{key:Mod+A}} pedig az összes megjelenített elemet. A bal oldali {{ui:Elemek}} lista csak fajtánként számolja az elemeket; nem kattintható.
- **Projektfájl kártyáján próbál kijelölni.** A fájlkártyán nincsenek kijelölhető elemek: „Az elemtulajdonságokhoz a 3D-modell kell. Nyissa meg ennek a fájlnak az IFC-exportját, hogy lássa őket.”
