---
title: Falak, padlók és tetők vázolása
summary: Fal-állórudakat, pászmákat, áthidalókat, gerendákat, szarufákat vagy rácsos tartókat készít a modellből, és a modellel együtt tartja meg; a falak, nyílások, padlók vagy a tető változásakor újra elkészülnek, a Faanyag kimutatás pedig a vágólista.
keywords: TJI, I-gerenda, gerenda-fesztávtáblázat, táblázat betöltése, vázolás, váz, állórúd, pászma, felső pászma, áthidaló, főállórúd, pótállórúd, nyílás szélső állórúdja, rövid állórúd, küszöb, merevítő elem, sarok, kaliforniai sarok, T-csatlakozás, gerenda, peremgerenda, szegélygerenda, szarufa, gerincszarufa, völgyszarufa, pótszarufa, gerincgerenda, mennyezeti gerenda, kötőgerenda, rácsos tartó, faanyag, vágólista, deszkaláb, 2x4, 2x6, távolság, tengelytáv
from: 76d0ffb5
---

## Mit fog csinálni

Vázolja az épületet a rajzolt elemekből. A BimCraft kiosztja az állórudakat, pászmákat és áthidalókat a falakban, a gerendákat a padlókban, a szarufákat (vagy rácsos tartókat) a tetőben, méretezi őket címkézett alapértelmezett táblázatok alapján, a modellel együtt tárolja, és valahányszor az általuk vázolt elemek változnak, újra elkészíti őket. A **Faanyag** kimutatás a vágólista.

## Vázolás

1. Egy szinten nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Vázszerkezet}} lehetőséget.
2. Válassza a **távolságot** (16" vagy 24" tengelytáv; 400 vagy 600 mm), a **sarkokat** (három állórudas vagy kaliforniai), a tetőnél a **Szarufákat** vagy a **Rácsos tartókat**, és azt, hogy a falak kapjanak-e egy sor **merevítő elemet** a magasság felén. Padlóknál válassza a **Fűrészelt faanyagot** vagy a **TJI-t (előzetes)**, és állítsa a gerendák irányát automatikusra, alaprajzi X-re vagy alaprajzi Y-ra.
3. Kattintson a **Minden fal vázolása** gombra, vagy kattintson egy falra, padlóra vagy tetőre (azon a szinten, amelyen a tető áll), hogy csak azt vázolja.

Kapcsolja ki a **Vázelemek megjelenítése** lehetőséget, hogy minden vázelem rétegként eltűnjön; az **Átlátszó nézet** elrejti a vázolt falakat, padlókat és tetőket, így csak a váz látszik.

## Mit kap

- **Falak**: alsó pászma (az ajtóknál megvágva), dupla felső pászma, állórudak a fal kezdetétől számított kiosztásban, főállórudak és pótállórudak, valamint áthidaló minden ajtónál és ablaknál, rövid állórudak az áthidalók fölött és az ablakok alatt, nyers ablakküszöb az ablakok alatt, sarkok ott, ahol a falak találkoznak (az átmenő fal viszi a sarok-állórudakat), két támasztó állórúd, ahol egy másik fal T-csatlakozással fut bele, valamint merevítő elemek az állórudak között.
- **Padlók**: gerendák alapértelmezés szerint a padló rövidebb oldalán, vagy a kiválasztott alaprajzi tengely mentén; peremgerendák a szél körül, és dupláztott szegélygerendák és áthidalók a lépcsőház körül, a rajta átmenő gerendák rövidre vágva (csonkagerendák). A TJI-mód a felsorolt legkisebb sorozatot és magasságot választja, amely a kiválasztott távolságnál eléri a mért szabad fesztávot.
- **Tetők**: minden ereszhez derékszögben illeszkedő közönséges szarufák, a gerincek és völgyek által elvágott pótszarufák, gerinc- és völgyszarufák, gerincgerendák, mennyezeti gerendák a pászmákon, valamint kötőgerendák – vagy egyszerű rácsos tartók a kiosztásban, darabonként egy.

## Módosítás

Jelöljön ki bármely vázelemet a 3D-nézetben vagy a modellfában. A **Tulajdonságok** mutatja a vázát: módosíthatja a távolságot, a padlógerenda típusát és irányát, a sarkokat, a merevítést vagy a tetőváz beállításait. A falak, ajtók és ablakok mozgatása, valamint a padló vagy a tető módosítása magától újra elkészíti a vázat.

Ha egy szándékosan elhelyezett elemet meg szeretne tartani a váz újraelkészítésekor, jelölje ki, és válassza a **Ez az elem megmarad a váz újraelkészítésekor** lehetőséget. A megtartott elem helyben marad; ha a körülötte lévő váz megváltozik, meg lesz jelölve, hogy ellenőrizhesse.

## TJI padlók betöltött táblázatból

A BimCraft nem tartalmaz gerendagyártók fesztávtáblázatait (azok a gyártóé, és minden kiadással változnak). Válassza ki a padló vázolását, állítsa a **Padlógerendákat** **TJI (előzetes)**-re, és a **Tulajdonságok** között válassza a **Táblázat betöltése…** lehetőséget: egy `cadcraft-tji-table` formátumú fájl (JSON vagy CSV), amelyet a gyártó aktuális fesztávtáblázatából készített. Megnevezi a gyártót, a terméket és a kiadást, valamint azt, honnan származnak az adatok, és minden terhelési esetre (hasznos teher, állandó teher, lehajlási határ, támaszhossz) felsorolja minden sorozat és magasság legnagyobb szabad fesztávját minden távolságnál.

- A BimCraft a padló **szabad fesztávját** veszi, a legsekélyebb magasságot választja, azon belül azt a sorozatot, amelynek felsorolt fesztávja eléri azt a távolságot és terhelési esetet, amelyet kiválasztott, és azzal vázolja a padlót. Ha a fesztáv vagy a távolság a táblázaton kívül esik, ezt jelzi, és nem változtat semmit.
- A terheket, a lehajlási határt, a támaszhosszt, a táblázatot és a mondatot („Előzetes elrendezési útmutató; a végleges kiválasztáshoz a gyártó táblázatai és a projekt terhei szükségesek”) a Faanyag kimutatás tartalmazza, a modellbe a vázzal együtt íródik, és a **Problémák** panelen megjegyzésként jelenik meg. A példaként megjelölt táblázatot figyelmeztetés jelzi.
- Ha a **Épületszabályozás** bővítmény be van kapcsolva, annak padlógerenda-szabálya is olvassa a betöltött táblázatot; táblázat nélkül a TJI-gerendák kimaradnak abból az ellenőrzésből, ahogy eddig is.
- A táblázat addig marad meg ebben a böngészőben, amíg törli vagy másikat tölt be. A fájl: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: hüvelyk, láb, psf; vagy `metric`: mm, méter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) és `rows` (`series`, `depth`, `spans`: minden eset azonosítójához a távolság és a legnagyobb szabad fesztáv, például `"16": "15-6"`). CSV-ben ugyanezek a `# kulcs = érték` sorok, majd `series,depth,case,spacing,span`.
- Táblázat nélkül a TJI-elrendezés elutasításra kerül, és semmi nem változik: **TJI-táblázat betöltése: a gyártók táblázatai az övék, és nincsenek beépítve.** A korábbi, beépített TJI-táblázattal vázolt modell megtartja minden gerendáját; a Tulajdonságok és a Problémák jelzik, hogy táblázat szükséges, és amint betölt egyet, a padló újra vázolható. A tömör fűrészelt gerendák a korábbiak szerint működnek.

Ez elrendezési útmutató. A végleges gerendakiválasztáshoz a gyártó táblázatai, a projekt terhei és a mérnök szükségesek.

## A vágólista

A **Kimutatások** panelen válassza a **Faanyag** lehetőséget: minden vázelem mérete és a megvásárolható készlethossz szerint csoportosítva (teljes 2'-es hosszak 8'-tól; 600 mm-es lépések milliméterben megadva), a darabszámmal és a deszkalábbal. A **CSV** letölti.

:::warning
A fejléc-, gerenda-, szarufa- és mennyezeti gerenda-méretek egy- vagy kétszintes tipikus házra vonatkozó, címkézett alapértelmezett táblázatokból származnak, nem mérnöki számításból. A **Tulajdonságok** jelzi, ha egy fesztáv vagy nyílás meghaladja a táblázatát. Egy tervező vagy mérnök ellenőrzi a fesztávokat, a terheket és a csatlakozásokat.

A TJI-elrendezésekhez csak az Ön által betöltött táblázatot használjuk, amelyet a gyártó aktuális fesztávtáblázatából készít; a BimCraft egyet sem szállít. A javaslat nem ellenőrzi a támaszolást, a pontterheléseket, a konzolokat, a nyílásokat, a lépcsőházi áthidalókat vagy a csatlakozásokat, a modell I-szelvénye pedig sematikus.
:::

## Mi kerül mentésre

Minden vázolt fal, padló vagy tető IFC-elemösszeállítás („Framing”), amely IFC-rudakból (állórudak, pászmák, szarufák, kötőgerendák, merevítő elemek, rácsos tartók) és gerendákból (áthidalók, gerendák, peremgerendák, gerincgerendák) áll, mindegyiknek megadva a mérete, hossza és deszkalábe.
