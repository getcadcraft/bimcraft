---
title: A telek, az rajta álló épület és szintjei
summary: Rajzolja meg a telek körvonalát, helyezze el és forgassa el az épületet a telken, adjon hozzá szinteket megadott magasságokban vagy ossza fel az épület magasságát, és rajzoljon a kiválasztott szinten.
keywords: telek, telekterv, építési vonal, hátrálás, szolgalmi jog, átjárási jog, telekhatár, telek, parcella, határ, épület elhelyezése, épület forgatása, szintek, emeletek, szintek hozzáadása, magasság felosztása, szintmagasság, IfcSite, IfcBuilding, IfcBuildingStorey, térbeli szerkezet
from: 48d10c1e
---

## Mit fog csinálni

Állítsa be az IFC-modell azon részeit, amelyek mindent a többit tartalmazzák: a telket, a telken álló épületet és az épület szintjeit.

A modell egy **telekből** áll, amely egy **épületet** tartalmaz, az pedig a **szintjeit** (emeleteit); a falak, födémek és minden más egy szinthez tartozik. A {{ui:Fájl}} › {{ui:Új épület}} mindhármat létrehozza. Más programból származó, épületet, de telket nem tartalmazó modell az első telekrajzolásakor kap telket: az épület ott marad, ahol eddig volt.

## A telek megrajzolása

1. Kapcsolja be a {{ui:Rajzolás}} módot, majd válassza a {{ui:Build}} › {{ui:Telek}} parancsot.
2. Kattintson a telek sarkaira (az eszköz a Fal eszközhöz hasonlóan fog). Az első sarokra újra kattintva, dupla kattintással vagy az {{key:Enter}} megnyomásával fejezze be. A {{key:Backspace}} visszavesz egy sarkot.
3. A sor mutatja a telek területét. Módosításhoz rajzolja meg újra.

Minden szint alaprajzán a telekkörvonal telekhatárként jelenik meg.

## Az épület elhelyezése a telken

A {{ui:Telek}} bekapcsolt állapotában írja be az épület **X** és **Y** koordinátáját a telken, valamint az **Elforgatás** értékét fokban, vagy kattintson az {{ui:Az épület elhelyezése kattintással}} gombra, majd kattintson oda, ahová az épület origója kerül. Az épülethez tartozó minden (szintek, falak, rácsok, minden, amit rajzolt) együtt mozog vele; a telek és körvonala helyben marad. Az alaprajzok továbbra is minden szintet az épülethez képest derékszögben mutatnak.

## Építési vonalak és szolgalmak

Az építési vonalak és a szolgalmak (szolgalmi jogok, átjárási jogok) a telken kényszerekként jelennek meg. **Figyelmeztetnek, de soha nem akadályoznak**: a vonal fölé került falat úgy rajzolják meg, ahogy kérte, és a Problémák között figyelmeztetés jelenik meg, amely megnevezi a falat és a vonalat vagy szolgalmat. Ha visszahúzza a falat, a figyelmeztetés megszűnik. A figyelmeztetés elfogadható indokkal is (például a hatóság által megadott eltérés).

- **Építési vonal hátrálásokból.** {{ui:Build}} › {{ui:Építési vonal}}, majd {{ui:Hátrálások}}: adja meg, mennyire áll be a vonal a telek minden határától. A határok számozva jelennek meg az alaprajzon, amíg az eszköz be van kapcsolva. A vonal ezekből a távolságokból számítódik, és ha ugyanannyi határral újra rajzolja, követi a telek körvonalát. A távolságok a tulajdoni lapból vagy a szabályozási tervből származnak; a BimCraft egyet sem tölt ki.
- **Megrajzolt építési vonal.** Az {{ui:Építési vonal}} bekapcsolt állapotában kattintson a pontjaira, és dupla kattintással vagy az {{key:Enter}} billentyűvel fejezze be. Zárt vonalhoz az első pontra kattintson vissza: a belső terület az, ahol építeni szabad, és ha a fal bármely része kívül esik rajta, figyelmeztetés érkezik. A nyitott vonal csak azt a falat jelzi, amely átmetszi.
- **Szolgalom.** {{ui:Build}} › {{ui:Szolgalmi jog}}: válassza ki a fajtáját, adja meg a nevét, a bejegyzett hivatkozását és a szélességét, majd kattintson a középvonalára, és fejezze be (sáv), vagy zárja be az első pontján (terület). Minden olyan falra, amelynek bármely része rajta van, minden szinten figyelmeztetés érkezik.
- Ha a homlokzat pontosan a vonalon van, az érintkezésnek számít, nem átmetszésnek (a tűrés 1 mm).
- Minden tömegvariáció aktuális tömegét ugyanúgy ellenőrzik, mint a falakat: a határon kívüli, építési vonalon átnyúló vagy szolgalmon lévő tömeg figyelmeztetést kap. Lásd: [Egymás mellett lévő tömegvariációk](topic:massing-options).
- Válasszon ki egyet a {{ui:Kijelölés}} eszközzel, ha a nevét, hivatkozását, fajtáját vagy szélességét szeretné módosítani, vagy mozgatni vagy törölni szeretné.

Minden szint alaprajzán, a rajzlapokon és az alaprajz PDF-ben is megjelennek: az építési vonalak szaggatottan, a szolgalmak pontozottan, mindegyik a feliratával. Az IFC-fájlban mindegyik a telken lévő megjegyzés (IfcAnnotation, BuildingLine vagy Servitude típussal), a vonala pedig olyan egyszerű görbeként, amelyet más programok is tudnak olvasni. Az ellenőrzés az egyes falak valós körvonalát használja az alaprajzon, a megrajzolt csatlakozásokkal együtt; az ívelt falat a saját vastagsága szerint, a középvonala körül ellenőrzi.

## Szintek hozzáadása

A {{ui:Szintek}} panelen a {{ui:Szint hozzáadása felülre}} egyet ad hozzá, a {{ui:Szint hozzáadása alul}} pedig egyet a legalsó alá (pincének, negatív magasságon). A {{ui:Szintek hozzáadása…}} egyszerre többet ad hozzá:

- **Ezekben a magasságokban**: adja meg a legalsó szint fölötti magasságokat vesszővel elválasztva (például `12', 24', 36'`). Ahol már van szint, azt kihagyja.
- **Az épület magasságának felosztása**: adja meg az épület magasságát és a szintek számát. A meglévő szintek a legalsótól kezdve az új magasságukra kerülnek, a hiányzók hozzáadódnak, a fölöttük lévők pedig a helyükön maradnak.

A felső szintig érő falak követik a szintet, ugyanúgy az oszlopok és a rámpák is.

A {{ui:A szint másolása…}} (ugyanebben a panelben) átmásolja a nézett szinten megrajzoltakat egy másik szintre vagy egy új, legfelső szintre, így egy alaprajz egy lépésben felkerülhet az épület egy magasabb szintjére. Lásd: [Falak rajzolása](topic:draw-walls).

## Rajzolás egy szinten

Minden {{ui:Rajzolás}} eszköz az alaprajz szintlistájában (vagy a {{ui:Szintek}} panelen) kiválasztott szinten dolgozik: amit rajzol, az ahhoz a szinthez tartozik.

## Amit látnia kell

- Ezek a változtatások mindegyike egy lépés: a {{key:Mod+Z}} visszavonja.
- Az IFC-fájlban: a telek (IfcSite) a körvonalával és területével, az épület (IfcBuilding), amely rajta áll, és a szintek (IfcBuildingStorey) az épületben.

Lásd még: [Koordináták a BimCraftban](topic:coordinates) a projekt origójához és a felmérési ponthoz.
