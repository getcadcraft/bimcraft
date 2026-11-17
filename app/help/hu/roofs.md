---
title: Tetők: minden falhoz külön dőlés, oromfalak, egyoldalas tetők és tetősíkok
summary: Állítsa minden tető alatti falat lejtősre, oromfalasra vagy nincs-re, használja a kontyolt, oromfalas és egyoldalas előbeállításokat, emelje a tetőt a koszorúmagassággal, adjon homlokdeszkát és alsó borítást, és rajzoljon egyes tetősíkokat, ahol az automatikus tető nem illik.
keywords: tető módosítása, tető szerkesztése, kijelölt tető, tető tulajdonságai, tető visszavonása, tető, dőlés, falanként, oromfal, egyoldalas, tetőláb, kontyolt, völgy, gerinc, koszorúmagasság, sarok, homlokdeszka, alsó borítás, eresz, oromél, túlnyúlás, tetősík, verandatető, tetőablak, oromfalas tetőablak, egyoldalas tetőablak
from: 096084a7
---

## Amit csinálni fog

Alakítsa ki a tetőt az alatta lévő falakból. Minden falnak saját beállítása van, így egy tető elöl kontyolt lehet, a végein oromfalas, hátul pedig egy magasabb falhoz simulva lapos. Verandához vagy bármely olyan felülethez, amelyet az automatikus tető nem tud, rajzoljon egy tetősíkot a sarkainál fogva.

## Tető elhelyezése

1. Abban a szintben, ahol a tetőt tartó falak vannak, kattintson a {{ui:Roof}} gombra.
2. Írja be a **Dőlés** értéket (`6/12`, vagy fok, például `30`), és a **Túlnyúlás** értéket.
3. Válasszon előbeállítást: **Kontyolt tető**, **Oromfalak a rövid oldalakon**, **Oromfalak a hosszú oldalakon** vagy **Egyoldalas** (a mutatóhoz legközelebbi oldal az alacsony eresz; a többi oldal oromfal).
4. Hagyja bejelölve a **Homlokdeszka és alsó borítás** beállítást a zárt ereszhez homlokdeszkával, vagy vegye ki a csupasz tetőszélhez.
5. Mutasson az épület belsejébe: az eresz, a gerinc, a szarugerincek és a völgyek megjelennek az alaprajzon. Kattintson.

Bármilyen körvonal működik: L, T, U és kereszt alakúak, ferde sarkok és bevágások. A szarugerincek, gerincek és völgyek ott jönnek létre, ahol a tetősíkok találkoznak.

## Falanként

Válassza ki a tetőt (a falak feletti szinten kattintson a körvonalán belülre), és nézze meg a **Tulajdonságok** panel **Minden fal** részét. Ha egy sorra mutat, a fal megjelölődik az alaprajzon.

- **Lejtős**: a fal fölött lejtős tetősík van. Mellé írja be a saját dőlését, például `12/12`-t meredek véghez egy `6/12`-es tetőn.
- **Oromfal**: a tető függőleges véggel záródik a fal fölött, a fal a tetőig fel van töltve, és a tető az **Oromfal túlnyúlása** mértékével túlnyúlik rajta.
- **Nincs (síkban végződik)**: a tető az adott falnál végződik, túlnyúlás és oromfal nélkül, egy magasabb falhoz támaszkodó tetőnél.

A tetején lévő **Végek** lista minden falat egyszerre állít be; a **Beállítás falanként** akkor látszik, ha a falak már nem egyeznek egy előbeállítással.

## Már elhelyezett tető módosítása

Válassza ki a tetőt, és a **Tulajdonságok** ugyanazokat a beállításokat mutatja, mint a Tető eszköz: **Dőlés**, **Túlnyúlás**, **Oromfal túlnyúlása**, **Koszorúmagasság**, **Homlokdeszka magassága**, **Zárt ereszek** és **Vastagság**. Minden változás azonnal látszik az alaprajzon és a 3D-ben, az eszköz ellenőrzéseivel együtt (a 80 fokos vagy annál nagyobb dőlést elutasítja, ahogy azt a beállítást is, amely nem tud tetőt készíteni). Írjon be egy értéket, és nyomja meg az {{key:Enter}} billentyűt, vagy lépjen ki a mezőből.

Minden változtatás egy visszavonási lépés. Több egymás utáni módosítás ugyanabban a mezőben (például beírja a `6/12`-t, majd a `7/12`-t, majd a `8/12`-t) egy lépésbe kerül, így egy {{key:Ctrl}}+{{key:Z}} visszaállítja azt, amilyen a tető volt a sorozat előtt; másik mező módosítása új lépést indít.

## Koszorúmagasság, homlokdeszka és alsó borítás

- **Koszorúmagasság** az a magasság, ahol a tetősíkok a falak külső szélén találkoznak, a szint padlójától mérve. Hagyja üresen, hogy a tető a falak tetején üljön; írjon be nagyobb értéket emelt tetőláb esetén.
- **Homlokdeszka magassága** a deszka az ereszek mentén és az oromélek fölött. Írjon `0`-t, ha nincs.
- **Zárt ereszek** vízszintes alsó borítást tesz minden eresz alá, a faltól a homlokdeszka hátoldaláig.

Minden sík a koszorúmagasságnál találkozik a faljával, így a különböző dőlésű falak egy koszorúvonalat tartanak, és ereszük különböző magasságban végződik, ahogy ácsolva is lenne.

## Tetősík rajzolása

1. Abban a szintben, amelyen a sík falai vannak, nyissa meg a **Build** menüt, és válassza a {{ui:Roof plane}} lehetőséget.
2. Írja be a **Dőlés** értéket, és ha nem a falak tetején van, az **Ereszmagasság** értéket.
3. Kattintson a sarkokra. Az első oldal, amelyet rajzol, az eresz; a sík attól emelkedik a körvonal többi része felé.
4. Kattintson újra az első sarokra, kattintson duplán, vagy nyomja meg az {{key:Enter}} billentyűt a befejezéshez. Az {{key:Esc}} eldobja a sarkokat.

A tetősík nem követi a falakat. A felsőbb szinten válassza ki (kattintson a körvonalán belülre), ha a dőlését, ereszmagasságát vagy vastagságát módosítaná, vagy nyomja meg a {{key:Delete}} billentyűt az eltávolításhoz.

## Tetőablak hozzáadása

1. Jelenítse meg a szintet, amelyen a tető van.
2. Nyissa meg a **Build** menüt, és válassza a {{ui:Dormer}} lehetőséget.
3. A beállítássorban válassza ki a **Tetőablak fajtája** (**Oromfalas** vagy **Egyoldalas**) beállítást, és állítsa be a **Szélesség**, a **Homlokfal** (az elülső fal magassága a tető tetejétől a tetőablak ereszéig), a **Dőlés** és a **Túlnyúlás** értékeket.
4. Kattintson a tetőfelületre, ahol a tetőablak elülső közepe lesz.

A BimCraft megépíti az elülső falat, a két oldalfalat és a tetőablak tetejét, és visszafuttatja a tetőig. Az oromfalas tetőablaknak két síkja van, amelyek a gerincnél találkoznak. Az egyoldalas tetőablaknak egy síkja van, amelynek kevésbé meredeknek kell lennie, mint a tetőnek. A tetőablak alatti tetőt kivágja. A tetőablak követi a tetőt, ha a falak mozognak.

Kijelölve a **Tulajdonságok** részben módosíthatja a fajtáját, a szélességét, a homlokfalát, a dőlését vagy a túlnyúlását. A {{key:Delete}} eltávolítja, és a tetőt újra lezárja. Egyetlen tetőfelületre kell férnie, távol a kontyoktól, völgyektől és a gerinctől; csak a {{ui:Roof}} eszközzel készült tetők fogadnak tetőablakot, a kézzel rajzolt tetősíkok nem. Még nincs elkészítve: ablak a tetőablak elülső részén, és tetőablak kézzel rajzolt tetősíkokon.

## Mentés

A tetők olyan IFC-tetők, amelyek síkonként egy tetőlemezből, oromfalakból, egy homlokdeszka-elemből és egy alsó borításból állnak. A tető hordozza a gerinc-, szarugerinc-, völgy-, eresz- és oromél-hosszát, valamint a területeit a mennyiségkimutatásokhoz. A tetősík egylemezes IFC-tető.

:::tip
A visszavonás egy lépésben visszaveszi a tető bármely változtatását, beleértve az előbeállítást is, amely minden falat módosít.
:::
