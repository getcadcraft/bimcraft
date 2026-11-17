---
title: A szimbólumpaletta
summary: Keressen villamos és vízvezeték-szimbólumokat név vagy kép alapján, jelölje meg kedvencként a használtakat, és egy kattintással helyezze el őket az alaprajzon.
keywords: szimbólumpaletta, szimbólumok eszköztár gomb, falkövetés, szimbólumok, villamos szimbólumok, vízvezeték-szimbólumok, vízvezeték alaprajz, WC, vízöblítéses WC, mosdó, mosogató, kád, zuhany, padlólefolyó, tisztítónyílás, kerti csap, vízmelegítő, szelep, hidegvíz, melegvíz, szennyvíz, szellőzés, vonalstílus, kedvencek, keresés
from: 67f20bc0
---

## Mit fog csinálni

Nyisson meg egy panelt, amely a villamos és az alaprajzi vízvezeték-szimbólumokat a képeikkel és neveikkel együtt listázza, keresse meg a kívánt szimbólumot, és helyezze el az alaprajzon. Ehhez semmi internet nem kell: a szimbólumok az alkalmazással együtt érkeznek.

## Megnyitás és szimbólum elhelyezése

1. Nyisson meg egy modellt, és nyissa meg a {{ui:Build}} › {{ui:Szimbólumpaletta}} menüt (beírt parancs: SYMBOLS). Ugyanez a gomb a Rajzolás sáv Eszközök menüjében, és **Szimbólumok** néven a Könyvtár csoportban az eszköztáron.
2. Válasszon egy készletet: **Villamos** vagy **Vízvezeték**, illetve **Összes készlet**. Írjon a keresőmezőbe a lista szűkítéséhez. Kereshet név vagy rövidítés szerint is (WC, CW, HB).
3. Kattintson egy szimbólumra. Az alaprajz készen áll az elhelyezésre.
   - Egy **villamos** szimbólum elindítja a Villamos eszközt a kiválasztott eszközzel, így minden, ami a [Villamos alaprajzra](topic:electrical-plan) vonatkozik, érvényes: kattintson az alaprajzra, egy visszavonási lépés.
   - Egy **vízvezeték** szimbólum elindítja az alaprajzi szimbólum eszközt. Kattintson az alaprajzra. A falra illeszkedő szerelvény (WC, mosdó, kád, mosogató, kerti csap) a legközelebbi falfelülethez igazodik, háttal a falnak; a lefolyók, a szelepek, a vízmelegítő és a vonalstílusok oda kerülnek, ahova kattint.
4. Nyomja meg az {{key:R}} billentyűt a szimbólum 90 fokos elforgatásához ({{key:Shift}}+{{key:R}} az ellenkező irányba forgat), vagy írjon szöget a beállítássáv **Forgatás** mezőjébe. Az {{key:Esc}} billentyűvel abbahagyhatja.

Egy falhoz illesztett szerelvény vagy kerti csap emlékszik arra a falra: amikor a fal mozog, a szimbólum vele mozog (ugyanazon a felületen, ugyanolyan távolságra a fal mentén), ugyanabban a visszavonási lépésben. Ha a falat törli, a szimbólum a helyén marad, a Problémák pedig „elvesztette a falát” bejegyzést listáz: mozgassa vagy törölje. A falaktól távol elhelyezett szimbólumok semmihez nincsenek kötve.

Minden elhelyezett szimbólum egy visszavonási lépés. Az elhelyezett szimbólum az IFC-fájlban alaprajzi jegyzet a címkéjével (WC1, WC2 …). Válassza ki, hogy a **Tulajdonságok** panelen módosítsa a címkéjét vagy a forgatását, vagy nyomja meg a {{key:Delete}} billentyűt.

## Mit tartalmaz a vízvezeték-készlet

Szerelvények (vízöblítéses WC, pisztoár, mosdó, kád, zuhany, konyhai mosogató, egymedencés mosogató), egy padlólefolyó, padló- és falitisztító nyílások, egy kerti csap, egy falihidrant, egy vízmelegítő, szelepek (tolózár, gömbcsap, golyós, visszacsapó, pillangó, nyomáscsökkentő) és vonalstílusok a rövidítéseikkel: hidegvíz (CW), melegvíz (HW), melegvíz-visszavezetés (HWR), szennyvíz (W), szellőzés (V), esővízcsatorna (SD) és gáz (G). A rajzok az alaprajzzal együtt méretezhetők, így nyomtatott lapon megtartják a méretüket. A vonalstílus egy rövid csonk, amely a stílust mutatja az alaprajzon; a valódi csővezetékeket a csőeszközökkel rajzolja meg.

:::note
Ezek elterjedt vízvezeték-alaprajzi jelölések, amelyeket mi rajzoltunk; nem ISO 4067-1 vagy ASME Y32.4 szerint tanúsítottak. Nyilvános rajzmagyarázatokkal és oktatási anyagokkal vetettük össze őket (a lista a készlet forrásjegyzetében van, amely megmondja, hol egyeznek és hol térnek el), nem egy termékből másoltuk, és szabadon használhatók (Apache-2.0). A rajzkészletek eltérnek egymástól, ezért ellenőrizze a saját projektje jelmagyarázatát. Ezek alaprajzi jelek, nem vízvezeték-tervek: nem méreteznek csöveket, és nem ellenőriznek előírásokat.
:::

## Kedvencek és billentyűzet

- Kattintson egy szimbólum melletti csillagra (vagy nyomja meg rajta az {{key:F}} billentyűt), hogy kedvencként megtartsa. A kedvencek az elsők között állnak, és ebben a böngészőben maradnak meg. A **Csak a kedvencek** csak ezeket mutatja.
- A keresőmezőből a {{key:Down}} billentyű a szimbólumokba visz; a nyilak, a {{key:Home}} és az {{key:End}} billentyű közöttük mozgat; az {{key:Enter}} kiválasztja a fókuszban lévőt; az {{key:Esc}} bezárja a palettát.
- Telefonon a paletta a képernyő alján lévő lapként jelenik meg; szimbólum kiválasztásakor félreáll, hogy lássa az alaprajzot. Újra megnyithatja a Build menüből vagy a beállítássáv **Paletta** gombjával.

:::tip
Ha egy fájl olyan szimbólumkészletet használ, amely ebben a verzióban nincs meg, az alaprajzon doboz jelenik meg a szimbólum helyén, a Problémák pedig felsorolja.
:::

## Elem kötése szimbólumhoz

Egy könyvtári világítótest 3D-elem, de a villamos terv a szimbólumával mutatja. Egyszer helyezze el, majd kösse hozzá:

1. Válassza a Build › **Szimbólumkötés** lehetőséget (vagy írja be: SYMBOLLINK). A bal panelen megnyílik a Szimbólumkötés szakasz.
2. Jelölje ki az elhelyezett elemeket az alaprajzon vagy 3D-ben. A szakasz megmondja, hányat jelölt ki, és mihez vannak kötve.
3. Válassza ki a **Szimbólumot** (bármelyik szimbólumkészletből: Villamos, Vízvezeték), és kattintson a **Kötés** gombra.

Az elem továbbra is egy elem marad, és minden kimutatás egyszer számolja:

- A **3D** mindig a testét mutatja.
- Az **alaprajz** a korábbi alaprajzi formáját mutatja.
- Az az alaprajz, amelynek a **Ez a nézet a kötött elemeket így mutatja** beállítása **Szimbólumaik (szerelési elrendezés)**, a szimbólumot mutatja a helyén. A szimbólumra kattintva az elem kiválasztódik. A beállítás az adott nézetre (a szint alaprajzára, a mennyezeti alaprajzára vagy egy kiemelésre, callout) megmarad a fájlban.

A **Szimbólum 90°-os elforgatása** a szimbólumot az elemhez képest forgatja. A **Kötés eltávolítása** leveszi a kötést; az elem megmarad. A **Kötött szimbólumok** kimutatás minden kötött elemet egyszer listáz a szintjével és a helyiséggel, amelyben áll.

Még nincs elkészítve: egy nézet beállítása egy rajzlapon annak a szintnek az alaprajzára vonatkozik, amelyet mutat; a Villamos eszközzel elhelyezett eszközök minden alaprajzon szimbólumok, mint korábban.
