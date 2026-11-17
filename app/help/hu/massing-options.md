---
title: Tömegvázlat-változatok egymás mellett
summary: Több tömegvázlat-változat tartása ugyanabban a modellben, egy aktuális változat kijelölése, ellenőrzése a telek építési vonalaival és szolgalmaival, a ModelCraftból érkező tömegvázlat átvétele, és a kiválasztott változat falakká és födémekké való kidolgozása.
keywords: tömegvázlat, tömeg, változat, változatok, változatkészlet, koncepció, koncepciótervezés, 2. szakasz, alternatívák, változatok összehasonlítása, aktuális változat, épülettömeg, tolás húzás, modelcraft, civilcraft, bruttó alapterület, alapterület, térfogat, tömeg kidolgozása, szolgalom, szolgalmi jog, építési vonal, hátrahúzás
from: 69a01459
---

## Mit fog csinálni

Egy koncepció tömegvázlat-változatait tartsa egy modellben a külön fájlok helyett: több épülettömeg egymás mellett, ezek közül az egyik az **aktuális változat**, a többi összehasonlításra megtartva.

A tömegvázlat-változat épülettömeg: egy alaprajzi körvonal, magasságra emelve, meghatározott számú szinttel. Még nem falak. Annyit tarthat meg, amennyit csak akar, **változatkészletekbe** csoportosítva (egy készlet változatai egymás alternatívái).

## Változat megtartása

1. Nyissa meg a {{ui:Helyiségprogram tömeggé}} részt, írja be a helyiségprogramot és a körvonalat, és válassza a {{ui:Változatok keresése}} lehetőséget.
2. Válasszon ki egyet a felsorolt változatok közül.
3. A {{ui:Tömegvázlat-változatok a modellben}} alatt írjon be nevet a {{ui:Változatkészlet}} számára, ha szeretne egyet, és válassza a {{ui:A kijelölt változat megtartása}} lehetőséget.

A változat a modellben épülettömegként jelenik meg, a listában pedig a szintjeivel, alaprajzával, bruttó alapterületével és térfogatával. Semmi sem épül meg. Egy másik megtartása ugyanígy történik.

Egy készlet első változata annak aktuális változata. Minden lépés egy visszavonási lépés.

## Az aktuális változat

Minden készletnek egy aktuális változata van. Ez két dolgot jelent:

- **Szintjei az épület alapterületeként számítanak.** Az aktuális változatnak szintenként egy tere van, amely az adott szint bruttó területét hordozza, így minden, ami alapterületeket olvas, a hatályos változatot látja, és mást nem.
- **Ellenőrzi a telekkel.** Ha a telekhatáron kívül áll, építési vonalon vagy szolgalmon, a {{ui:Problémák}} között figyelmeztetés jelenik meg, amely megnevezi. Ez csak figyelmeztetés: semmi sem tiltódik le. Az aktuálisnak nem minősülő változatok nincsenek ellenőrizve.

Válassza a {{ui:Legyen aktuális}} lehetőséget egy másik változaton az átváltáshoz.

A {{ui:Az aktuálison kívüli változatok elrejtése}} a többit elrejti a 3D nézetben. Ez csak ebben a böngészőben érvényes, és nem kerül a fájlba.

## Tömegvázlat a ModelCraftból

A ModelCraftban a {{ui:Exportálás}} › {{ui:Tömegvázlat a BimCraftba…}} minden csoportot vagy összetevőt egy változatként küld. A BimCraft megnyitja a fájlt a felsorolt változatokkal.

Egy már megnyitott modellbe való behozatalhoz válassza a {{ui:Tömegvázlat-változatok hozzáadása fájlból}} lehetőséget, és válassza ki az `.ifc` fájlt. Tömegei egy készlet változataiként érkeznek, egy visszavonási lépésben, ott állva, ahol meg lettek modellezve. A CivilCraftból származó épülettömegek fájlja ugyanígy működik.

A „(egyszerűsített alak)” jelölésű változat a ModelCraftban nem egyszerű, függőleges tömb volt (visszalép, lejt vagy nincs lezárva). Tömege itt az alapjának körvonala, a magasságára emelve; szintjeinek területei és térfogata magából a testből mért értékek.

## A kiválasztott változat kidolgozása

Válassza a {{ui:Kidolgozás}} lehetőséget egy változaton. Szintekké válik (a szintszámig összeadva), falakká a körvonala mentén minden szinten, és mindegyiken egy padlólemezzé, egy visszavonási lépésben. A változat kikerül a listából; a többi változat marad, ahogy volt. Tető még nincs.

A {{ui:Átnevezés}} megváltoztatja egy változat nevét, az {{ui:Eltávolítás}} kiveszi a modellből. Az aktuális változat eltávolítása a készlet első másik változatát teszi aktuálissá.

## Amit látnia kell

- Minden megtartott változat blokként a 3D nézetben és sorként a listában.
- „(aktuális)” a készlet egy változata mellett.
- Figyelmeztetés a Problémák között, ha az aktuális változat átlépi a telekhatárt, egy építési vonalat vagy egy szolgalmat.

## Jó tudni

- Az IFC-fájlban a változat egy épületelem-helyettes (building element proxy), a `CadCraft_SiteMass` tulajdonságkészlettel (változatkészlete, változatneve és az, hogy aktuális-e, abban a készletben van). Az aktuális változat szintjei `MassingFloor` típusú terek. Más programok a helyettes elemet általános elemként olvassák.
- Egy változat megtartása soha nem ad szinteket; a kidolgozása igen.
- Egy asszisztens felsorolhatja a megtartott változatokat, megtarthat egyet, aktuálissá tehet, átnevezhet, kidolgozhat vagy eltávolíthat.
