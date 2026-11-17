---
title: Falak rajzolása
summary: Falak rajzolása egy szint alaprajzán a sarkaik kattintásával vagy a hosszak begépelésével; a sarkok magúktól csatlakoznak, a falak IFC-ként mentődnek.
keywords: ívelt, ív, helyzetvonal, igazítás, fal, falak, rajzolás, alaprajz, helyiség, sarok, csatlakozás, faltípus, 2x6, 2x4, cmu, beton, magasság, szint, szintek, begépelt hossz, ortogonális mód, fogás
from: 8269cd4b
---

## Mit fog csinálni

Rajzolja meg egy épület falait az egyes szintek alaprajzán. Kattintson arra a pontra, ahol egy fal kezdődik, majd minden sarokra. A BimCraft magától összeköti a sarkokat, minden falnak megadja a rétegeit (burkolat, szigetelés, vázszerkezet, gipszkarton …), és a falat a felette lévő szintig futtatja. A 3D nézet a rajzolás közben mutatja a falakat.

## Az alaprajz megnyitása

1. Kezdjen új épületet ([Új épület kezdése](topic:start-a-new-building)), vagy nyisson meg egy IFC-modellt.
2. Kattintson az eszköztárban a {{ui:Rajzolás}} gombra. Egy új épület nyílik meg, amelyben ez már be van kapcsolva.
3. Egy szint alaprajza bal oldalon, a 3D nézet jobb oldalon látszik. A szintet az alaprajz tetején lévő listában válassza ki, vagy a **Szintek** panelen lévő kerek gombbal.
4. A {{ui:Alaprajz}}, a {{ui:Felosztás}} és a {{ui:3D}} eszközök az eszköztár {{ui:Nézet}} sorában vannak (a PLAN és a SPLIT parancsok és a billentyűk a korábbiak szerint működnek). Az {{ui:Alaprajz}} csak az alaprajzot mutatja, a {{ui:Felosztás}} mindkettőt, a {{ui:3D}} pedig az alaprajzot zárja be. Ha az ablak keskeny (vagy a felületméret nagy), a {{ui:Felosztás}} az alaprajzot a 3D nézet fölé helyezi, nem mellé.

Az alaprajz a szintet a padlója fölött 4'-0" (1200 mm) magasságban metszi, ahogy egy alaprajz szokta. Görgővel nagyítson; a középső vagy a jobb egérgombbal húzva (vagy a {{key:Space}} billentyűt lenyomva tartva és húzva) eltolja a nézetet. Ha a {{ui:Kijelölés}} be van kapcsolva, a sima húzás is eltolja. A {{key:F}} billentyű az egérmutatóval az alaprajz felett illeszti az alaprajzot.

## Helyiség rajzolása

1. Kattintson a {{ui:Fal}} gombra (vagy nyomja meg a {{key:W}} billentyűt).
2. Az első listában válassza ki a fal típusát, például **Külső 2×6** vagy **Belső 2×4**.
3. Válassza ki a magasságát: **A felette lévő szintig** (a fal követi, ha az a szint elmozdul), **Egy magasabb szintig** olyan falnál, amely több szinten halad át (lépcsőház, dupla belmagasságú helyiség, magas oromfal), vagy a **Rögzített magasság** lehetőséget, és írja be a magasságot. Egy ilyen fal ahhoz a szinthez tartozik, amelyen megrajzolta; az általa átmenő szintek alaprajzain világosabban látszik, a helyiségek ehhez csatlakoznak, és ezekről az alaprajzokról ajtókat és ablakokat kattinthat bele (az ajtó az adott szint padlóján áll). A fal magát mozgatni vagy átalakítani annál a szintnél lehet, ahol kezdődik.
4. Kattintson arra a pontra, ahol az első fal kezdődik.
5. Kattintson minden sarokra. Minden kattintás egy falat hoz létre; a következő ott kezdődik, ahol az előző véget ért. A hossz és a szög az egérmutató mellett látszik.
6. Kattintson újra az első pontra a helyiség lezárásához. Az állapotsor megmutatja, hány fala van a helyiségnek, és a középvonal módban minden fal külső rétege a helyiség külső oldalán lesz.
7. A lezárás nélküli megállításhoz nyomja meg az {{key:Esc}} billentyűt (vagy kattintson jobb gombbal, vagy kattintson duplán).

A sarkok magúktól csatlakoznak: két fal gérvágással találkozik, egy fal, amely egy másikon végződik, annak felületénél áll meg (T-csatlakozás), három vagy több fal egy pontban közös sarkot használ. Az egymást keresztező falak változatlanok maradnak.

Egy egész helyiséget egyszerre is rajzolhat: nyissa meg az {{ui:Alakzatok}} menüt a téglalaphoz, az elforgatott téglalaphoz, a sokszöghöz, az ívekhez, a kiválasztott vonalakra vagy egy körvonal köré helyezett falakhoz (lásd: [Falalakzatok, felosztás, eltolás, nyújtás és zárolás](topic:wall-tools)).

## A rajzolási hivatkozás kiválasztása

Az első kattintás előtt válassza a **Középvonal**, a **Belső felület** vagy a **Külső felület** lehetőséget. Ha felületet választ, a kattintásai és a begépelt hosszak azt a felületet írják le; a BimCraft a fal középvonalát az összvastagság felével eltolja, és összeköti az egymást követő sarkokat. A **Külső bal oldalon** vagy a **Külső jobb oldalon** lehetőséget a rajzolás irányához képest válassza. Egy óramutató-ellentétesen rajzolt zárt körvonalnál a külső oldal jobbra, óramutató szerint rajzolva balra van. A **Belső felület** módban a fal teste a vonal külső oldalára kerül; a **Külső felület** módban a másik oldalra. A felületes rajzolás a hurok lezárásakor megtartja a kiválasztott külső oldalt. A középvonalon azok a falak, amelyek nem zárnak le helyiséget, a kiválasztott külső oldalt veszik át; a helyiség lezárásakor minden fal külső oldala magától a helyiség külső oldalára áll, bárhogyan rajzolta is.

A fal típusának, a hivatkozásnak vagy a külső oldalnak a módosítása lezárja az aktuális láncot. Egy visszafordító sarok közelében a hosszú gérvágásokat négyzetes végek korlátozzák.

Rajzolás közben, ha egy végpont üres területen van, vízszintesen vagy függőlegesen igazodhat egy fal végpontjához vagy egy korábbi sarokhoz. Egy szaggatott segédvonal köti össze ezt a pontot a fogott egérmutatóval. A Shift billentyű a rajzolás irányát merőlegesen tartja; az igazítás ekkor ebben az irányban megáll. A közeli végpontok, felezőpontok és falmetszéspontok elsőbbséget élveznek a távoli igazítással szemben.

## Helyzetvonal

Ha a **Hivatkozás** a **Külső felület** vagy a **Belső felület** értéken áll, a fal megtartja azt a felületet helyzetvonalként. Később, ha a fal vastagabb lesz vagy a külső oldalát megfordítják, ez a felület a helyén marad, és a fal ehhez képest nő vagy fordul meg. Az ott csatlakozó egyenes fal követi, így a sarok továbbra is zárt marad. A helyzetvonalat később a **Tulajdonságok** panelen módosíthatja: lásd [Fal, ajtó vagy ablak módosítása](topic:change-a-wall-or-door).

## Ívelt fal rajzolása

1. Kattintson a {{ui:Fal}} gombra, majd a beállítássor **Alak** listájában válassza az **Ívelt** lehetőséget.
2. Kattintson arra a pontra, ahol a fal kezdődik, majd arra, ahol véget ér.
3. Kattintson egy pontra az íven. Vagy írja be az ívmagasságot, és nyomja meg az {{key:Enter}} billentyűt.
4. A lánc a fal végétől folytatódik. A befejezéshez nyomja meg az {{key:Esc}} billentyűt.

Az ívelt fal a végein csatlakozik a falakhoz (a sarok- és T-csatlakozások működnek), helyiségeket hoz létre, és az íve mentén ajtókat és ablakokat tart. Ezek egyenes elemek maradnak, a falra merőlegesen állnak a középpontjukban, a távolságuk pedig az ív mentén mérődik. Egy fal legfeljebb háromnegyed kört fordulhat. A végpontjaihoz és az ívének felezőpontjához illeszkedik.

Ívelt falakhoz még nincs elkészítve: a {{ui:Vágás / nyújtás}} és a {{ui:Sarok}}, a vázszerkezet, az automatikus alaprajzi méretek, valamint az ív menti illesztés. Lásd: [Mi még nincs elkészítve](topic:not-built-yet).

## Hossz gépelése kattintás helyett

Az első kattintás után gépelje be, majd nyomja meg az {{key:Enter}} billentyűt:

| Gépelt | Rajzol |
|---|---|
| `12'6"` vagy `3810` | egy ilyen hosszú falat, az egérmutató által mutatott irányban |
| `12'6"<90` | ilyen hosszút, ilyen szögben (fok, az óramutató ellentétes irányában, a jobb oldaltól) |
| `@3000,0` | egy ilyen távolságra lévő pontig az utolsótól, vízszintesen és függőlegesen |
| `1200,3400` | az alaprajz adott pontjáig |

Ha a Fal eszköz be van kapcsolva, egy szám begépelése közvetlenül a {{ui:Hossz}} mezőbe kerül. Láb és hüvelyk mellett a sima szám hüvelyk; milliméterben milliméter. A mértékegységet mindig beírhatja: `3.5 m`, `10 ft`, `6 1/2"`.

## Fogások

- A falvégek, azok felületi sarkai és a falak felezőpontjai akkor fognak, ha az egérmutató közel van hozzájuk (négyzet, háromszög).
- Az egérmutató a fal középvonalához vagy bármelyik felületéhez fog (kereszt).
- Az utolsó ponttól az irány közelben 15°-onként rögzül; tartsa lenyomva a {{key:Shift}} billentyűt, hogy 0°, 90°, 180° vagy 270° maradjon.
- Szabad irányban a hosszt 1/2" -re (vagy 10 mm-re) kerekíti.

## Módosítás, visszavonás, törlés

- Minden fal egy lépés a **Módosítások** listában: a {{ui:Visszavonás}} és az {{ui:Ismétlés}} visszaveszi, illetve visszaállítja a falakat.
- Ha a {{ui:Kijelölés}} be van kapcsolva, kattintson egy falra az alaprajzon a kiválasztásához; a 3D nézet és a **Tulajdonságok** követi. A {{key:Delete}} billentyű törli a kiválasztott falakat, és az általuk összekötött falak újra rendbe kerülnek.

## Szintek

A **Szintek** panel minden szintet felsorol a szintmagasságával és a magasságával.

- Írjon be új nevet, szintmagasságot vagy magasságot, és nyomja meg az {{key:Enter}} billentyűt. Egy szint magasságának (vagy szintmagasságának) megváltoztatása a fölötte lévő szinteket ugyanannyival mozgatja, a felette lévő szintig futó falak pedig követik.
- A {{ui:Szint hozzáadása felülre}} a legfelső szint fölé ad egy szintet, ugyanolyan magasan.
- A {{ui:Szint hozzáadása alul}} a legalsó szint alá ad egy szintet (pince), ugyanolyan magasan: a szintmagassága negatív, ha a legalsó szint 0-n van, és más szint nem mozdul el. A visszavonás eltávolítja.
- A {{ui:A szint másolása…}} újra megrajzolja azt, ami a megtekintett szinten van, egy másik szinten vagy egy új, legfelső szinten: a falait az ajtóival és ablakaival, a padlóit és mennyezeteit (a tetőket nem). Azok a falak, amelyek a felette lévő szintig futottak, az új szint feletti szintig futnak; a helyiségek magától megjelennek. Egy {{ui:Visszavonás}} az egészet visszaveszi. Ha a másik szintnek már vannak falai, a másolat hozzájuk adódik.
- A {{ui:Mértékegységek}} az eszköztáron választja ki a mértékegységet (láb és hüvelyk, hüvelyk, tizedes láb, milliméter, centiméter vagy méter) mindenre, amit a rajzolóeszközök megjelenítenek és olvasnak.

## Mentés

Kattintson a {{ui:Mentés IFC-ként}} gombra. Minden fal egy IFC-fal a középvonalával, az összekapcsolt alakjával, a típusával és rétegeivel, a `Pset_WallCommon` tulajdonságkészlettel és az alapmennyiségekkel (hossz, magasság, felületek és térfogatok), így más BIM-programok megnyitják és kimutatásba foglalják.

## Jó tudni

- A falak a középvonalukon vannak megrajzolva. A vastagságot a fal típusa adja.
- Az alaprajz az itt rajzolt falakat kitöltve mutatja; minden mást (könyvtári elemek, más programok modelljei), amelyet ugyanaz a sík metsz, a vágás alatt fekvő részekkel együtt vékony vonalakkal.
- Más programok által készített falak megjelennek az alaprajzon, de ezekkel az eszközökkel még nem módosíthatók.
