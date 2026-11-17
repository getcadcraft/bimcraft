---
title: Család szerkesztése
summary: Módosítsa a család paramétereit, képleteit és testeit, jelenítsen meg részeket Igen / Nem paraméterrel, vágjon és egyesítsen testeket, adjon csatlakozókat csövekhez és légcsatornákhoz, és lássa az eredményt a mentendő IFC alapján rajzolva.
keywords: családszerkesztő, családszerkesztés, paraméter, paraméterek, képlet, képletek, láthatóság, igen nem, test, testek, doboz, kihúzás, extrude, forgatás, végigvezetés, profil, ív, logikai művelet, vágás, egyesítés, fogópont, munkasík, vázlat, új család, csatlakozó, csatlakozók, port, csőcsatlakozó, légcsatorna-csatlakozó, lefolyó, vízellátás
from: 1ab31c10
---

## A szerkesztő megnyitása

Nyisson meg egy családot (a projektböngésző **Családok** része vagy a {{ui:Build}} › {{ui:Families…}}), és kattintson a {{ui:Edit the family}} gombra. Ha a semmiből kezdene, kattintson a {{ui:New family}} gombra: adjon nevet, mondja meg, mi (ajtó, ablak, bútor, berendezés vagy más), és ajtó vagy ablak esetén azt, hogy az alaprajzi szimbólumát és a fogantyúját melyik kezdő családtól kapja. A szerkesztő egy néhány paraméterrel és egy testtel rendelkező családot nyit meg.

Kezdő család szerkesztésekor a változtatásai csak ebben a modellben maradnak meg. A többi modell megtartja a kezdő családot változatlanul.

A modellben semmi sem változik, amíg a {{ui:Save the family}} gombra nem kattint. A szerkesztőnek saját visszavonása és ismétlése van (a név melletti nyilak, vagy a {{key:Mod+Z}} és {{key:Mod+Y}}); a mentés a modell visszavonásában egy lépés.

## Paraméterek

A {{ui:Parameters}} lap a család paramétereit sorolja fel: név, típus és alapérték. A típusok: **Hossz** (milliméter), **Szög** (fok), **Szám**, **Egész szám**, **Igen / Nem**, **Toll** (1–16), és három, amely számok helyett szavakat tartalmaz: **Szöveg**, **Anyag** (a projekt egyik anyaga) és **Kitöltés** (alaprajzi kitöltés). A szavakat képletekben nem használjuk; színezik a testet (annak **Anyag** mezője), kitöltenek egy szimbólum-részt, vagy `{Name}` alakban szerepelnek a szimbólum szövegében. Az **Elemenként** jelölőnégyzet olyan paramétert hoz létre, amelyet minden elhelyezett elem maga állít be a mérete helyett.

- Egy **képlet** más paraméterektől függővé teszi a paramétert, például `Width / 30` vagy `if(Width > 1200, 2, 1)`. A képletekben a hosszúságok milliméterben értendők, vagy írhat mértékegységet: `3'`, `6in`, `50cm`.
- Egy paraméter átnevezése minden képletben és mezőben átnevezi azt. Használatban lévő paramétert nem lehet eltávolítani.
- Egy test **Anyag** mezője a projekt anyagának színét (vagy egy Anyag paraméter színét) veszi át; a **Megjelenítés** beállítás durvább részletezésnél elrejti; az **Ismétlés** másolatokat készít: egy darabszámot (szám vagy egész szám paraméter, 1-től 200-ig) és az x, y, z irányú lépést közöttük. Az ismételt test deszkák, rudak vagy lyukak sorát adja; vágásban használva a másolatok együtt vágnak.
- Egy ajtó vagy ablak család két nevet is kap a falától: `WallThickness` és `Face` (1 vagy −1, a nyitás oldala).

## Testek

A {{ui:Solids}} lap a testeket sorolja fel. Adjon hozzá dobozt, kihúzást, forgatást vagy végigvezetést:

| Test | Mit állít be |
|---|---|
| Doboz | két sarka: x0-tól x1-ig, y0-tól y1-ig, z0-tól z1-ig |
| Kihúzás | profil egy munkasíkon (alaprajz, homlokzat vagy oldalnézet), a sík helye, és mélység |
| Forgatás | profil, tengely a síkon, és szög legfeljebb 360° |
| Végigvezetés | pontok útja és sugár (rúd vagy sín) |

Minden szám lehet beírt szám vagy a paraméterek kifejezése. Minden testnek van színe és **Megjelenítés feltétele**: hagyja üresen, ha mindig látszódjon, vagy adjon meg egy Igen / Nem paramétert (vagy egy összehasonlítást, például `Shelves >= 3`), hogy csak akkor látszódjon. Ez egy láthatósági paraméter.

### Profil rajzolása

Egy kihúzás vagy forgatás profilját a munkasíkján rajzolja meg az előnézet alatt:

- Kattintson a papíron, hogy a kiválasztott pont után új pontot adjon hozzá.
- Húzzon egy pontot az áthelyezéséhez. A pontok a rácshoz igazodnak; a {{key:Shift}} tartásával szabadon helyezheti el őket.
- Kattintson a szakasz egyik kis négyzetére, hogy ott új pontot adjon hozzá. A {{key:Shift}} + kattintás a szakaszt ívvé alakítja (újabb kattintás a másik irányba, majd egyenes).
- Kattintson duplán egy pontra az eltávolításához.

Az üreges pontokat paraméterek állítják be: a táblázatban módosítsa őket, ne húzással.

## Logikai műveletek

A {{ui:Booleans}} lap az első testből kivágja a második testet, vagy egyesíti őket. A logikai művelet eredménye újra vágható vagy egyesíthető. A logikai műveletben használt test csak annak részeként rajzolódik.

Ha a második testet Igen / Nem paramétere elrejti, az első változatlanul marad; ha az elsőt rejti el, az eredmény is rejtett.

## Alaprajzi szimbólum

A {{ui:Plan symbol}} lap azt rajzolja meg, amit az alaprajz a családról mutat, a testek vágata helyett: vonalakat, téglalapokat, köröket, íveket, sokszögeket és szöveget a család saját tengelyeiben. Minden résznek van **tolla** (1–16, kifejezés vagy Toll paraméter), **kitöltése** (nincs, tömör, átlós, keresztezett, beton, szigetelés, föld vagy Kitöltés paraméter), **megjelenítés feltétele** kifejezése, **vágási tartománya** milliméterben az alapja felett (teljes vastagsággal rajzolódik, ha az alaprajzi vágás benne van, vékonyan alatta, szaggatottan fölötte: a szekrény a vágás fölött szaggatottan látszik), részletezettségi szintje és ismétlése. A szöveg nevezhet paramétereket `{Name}` alakban. Az **Az alaprajz mutatja: a testek vágata** beállítás a testek vágatát tartja meg az alaprajzon, miközben a szimbólum a családban marad. Más programok a szimbólumot a család alapterületeként olvassák (vonalak és alakzatok; a szöveg a BimCraftban marad).

## Benne lévő családok

A {{ui:Families inside}} lap egy másik családot tesz ebbe a családba: például egy lábat egy asztalba, egy kilincset egy ajtóba. Válassza ki a családot, majd adja meg, hová kerül (x, y, z), mennyire van elforgatva (csak negyedfordulatok: 0, 90, 180, 270), mikor látszik, és milyen értékeket kap, soronként egyet, így: `Height = Height - 40`. A belső család mentése ezt is újrarajzolja; egy másik által tartott családot nem lehet törölni; egy család nem tartalmazhatja önmagát, még közvetve sem, és a beágyazás négy szintnél megáll.

## Forró pontok

A **forró pont** (hotspot) olyan pont vagy él, amelyet húzva egy paramétert változtat. A {{ui:Hotspots}} lapon adjon hozzá egyet, válassza ki azt a tengelyt, amelyen húzható, és azt a számparamétert, amelyet módosít, a helyzetét pedig ugyanolyan kifejezésekkel írja le, mint a testeket. Az előnézetben a fogantyúk alatt válassza a **Forró pontok** elemet, hogy húzhassa őket. Egy elhelyezett elemen az alaprajzon (a {{ui:Select}} gombbal jelölje ki) az x és y forró pontok fogópontként látszanak: húzzon egyet, és az elem olyan méretet vesz fel, amely a forró pontot oda helyezi, a köztük lévő képleteken keresztül; egy visszavonással visszaáll. A forró pont nem változtathat vezérelt paramétert, Igen / Nem értéket vagy szót.

A 3D-nézetben ugyanezek a forró pontok fogópontként jelennek meg a kijelölt elemen, és a fel-le irányúak (z tengely) is megjelennek ott, amit az alaprajz nem tud ábrázolni. Jelölje ki az elemet, húzzon egy fogópontot a tengelye mentén, majd engedje el: az elem olyan méretet vesz fel, amely a forró pontot oda helyezi, egy visszavonható lépésben. A fogópontok el vannak rejtve, amíg a metszetdoboz be van kapcsolva, mert az ugyanazokat a fogópontokat használja.

## Csatlakozók

Padlón elhelyezett családoknak (bútorok, berendezések és mások) van egy {{ui:Connectors}} lapja: azok a pontok, ahol csővezeték vagy légcsatorna csatlakozik az elemhez, például egy mosdó csapjánál és lefolyójánál. Kattintson az {{ui:Add a connector}} gombra, és állítsa be:

- **Típus**: cső vagy légcsatorna, és annak **Rendszere** (hideg víz, szennyvízlefolyó, befúvó levegő…).
- **x**, **y** és **z**: a helye a család saját tengelyeiben. Mint a test számai, mindegyik lehet szám vagy a paraméterek képlete, így a csatlakozó a mérettel együtt mozog.
- **Kivezetés iránya**: az az irány, amerre a cső vagy légcsatorna kilép, a család egyik tengelye mentén (egy mosdó alatti lefolyó **lefelé** mutat).
- **Méret (mm)**: a cső névleges mérete (DN) vagy a kör keresztmetszetű légcsatorna átmérője.
- **Áramlás**: **Be** a táplált csatlakozónak (csap), **Ki** a lefolyónak.

Az előnézet minden csatlakozót gyűrűként rajzol, a kivezetés irányába mutató nyíllal. Ajtóknak és ablakoknak nincs csatlakozójuk.

Vízvezetéki szerelvény esetén a **Vízvezetéki szerelvény** alatt válassza ki, melyik ez (WC-csésze, mosdó, konyhai mosogató, zuhany, mosókád). A kezdő szerelvények ezt már megadják.

A családból elhelyezett minden elem csatlakozóit portként kapja az IFC-fájlban, és újra elkészülnek, amikor az elem mérete változik vagy a családot elmentik. Az IFC-rendszereket olvasó programok látják, hová tartozik minden cső vagy légcsatorna.

## Az előnézet és fogantyúi

Az előnézet a családnak IFC-ként megírt és visszarajzolt változata, ugyanazzal a kóddal, amely a modellbe menti. Amit lát, azt kapják a más programok is. Alatta a **Megjelenített méret** állítja be az előnézet által használt paraméterértékeket.

A **fogantyúk** pontok az előnézeten: a **Méret** a szélességhez, mélységhez és magassághoz mutat fogantyút; a **Kiválasztott test** a kiválasztott test minden lapján mutat egyet. Húzzon egy fogantyút:

- egy paraméter által meghatározott lapon a megjelenített méret változik (a család képletei megmaradnak);
- egy beírt számmal meghatározott lapon a szám változik.

## Mentés

A {{ui:Save the family}} ellenőrzi a családot, majd újrarajzolja annak minden méretét, és újra elkészíti minden elemét, egyetlen visszavonható lépésben. Ha egy méret nem rajzolható meg a változtatással (például egy test szélessége nullára csökkenne az adott méretnél), semmi sem mentődik, és a szerkesztő megmondja, melyik méretről van szó.

Ha valaki más mentette ugyanazt a családot, miközben a szerkesztője nyitva volt (egy Live TeamWork munkamenetben vagy egy másik ablakban), a {{ui:Save the family}} visszautasítja a mentést, és ezt jelzi, ahelyett hogy az ő változtatását az Öné felülírná. Zárja be a szerkesztőt, nyissa meg újra a családot, hogy lássa a változtatásukat, és készítse el újra a sajátját.

:::note
A geometria az IFC saját testeiként mentődik: kihúzások, forgatások, végigvezetett korongok és logikai műveletek eredményei. Semmi sem alakul háromszögek listájává, így a fájlok kicsik maradnak, és más programok alakzatként olvashatják a formákat. Az íveket tartalmazó profilok IFC4-ben ívekkel mentődnek; az IFC2X3 nem ismer ívszakaszokat a profilban, ezért ott az ívek rövid egyenes darabokként mentődnek.
:::

Lásd még: [Családok és méreteik](topic:families).
