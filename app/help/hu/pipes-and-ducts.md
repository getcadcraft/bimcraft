---
title: Csövek és légcsatornák
summary: Csővezetékek és légcsatornák rajzolása az alaprajzon a középvonalaik szerint; a könyökök, T-idomok, szűkítők és átmenetek automatikusan készülnek, a futások rendszerekbe tartoznak, csatlakoztatott portokkal az IFC-fájlban, és megjelennek az alaprajzokon, kimutatásokban és a mennyiségkimutatásban.
keywords: cső, csövek, csővezetékezés, légcsatorna, légcsatornák, légtechnika, gépészet, mep, mechanikai, könyök, T-idom, szűkítő, átmenet, idom, idomok, szelep, szelepek, tolózár, golyóscsap, gömbszelep, visszacsapó szelep, felszálló, lejtés, lefolyó, szennyvíz, csapadékvíz, szellőző, hidegvíz, melegvíz, hűtött víz, fűtés, gáz, tűzvédelem, befúvott levegő, elszívott levegő, külső levegő, rendszer, rendszerek, port, portok, csatlakozó, csatlakozók, szaniter, mosdó, mosogató, WC, zuhanytálca, mosótálca, szaniter-egység, uhc, dfu, lefolyók méretezése, lefolyóméretezés, épületlefolyó, ágvezeték, gyűjtővezeték, légáram, cfm, súrlódás, egyenlő súrlódás, méretezés, schedule, mennyiségkimutatás, nbr, nbr 5648, nbr 5688, nbr 8160, ragasztható pvc, szennyvízcső, dn
from: 85140bc5
---

## Mit fog tenni

Csöveket és légcsatornákat ugyanúgy rajzoljon, mint a falakat: kattintson a futás középvonalának sarkaira a beállított magasságban. A BimCraft elkészíti az idomokat, minden darabot a rendszerébe tesz és összeköti őket, így más programok a vezetéket egy összefüggő rendszerként olvassák.

## Cső rajzolása

1. Kapcsolja be a {{ui:Rajzolás}} lehetőséget, nyissa meg a {{ui:Build}} menüt, és válassza a {{ui:Cső}} lehetőséget.
2. A sávban válassza ki a **rendszert** (hidegvíz, melegvíz, szennyvízlefolyó, gáz…). Ez egy szokásos anyagot állít be: vízhez rezet, lefolyóhoz és szellőzéshez PVC-t, fűtéshez, hűtött vízhez, gázhoz és tűzvédelemhez acélt. Ha szükséges, módosítsa az **anyagot**, az **osztályt** és a **méretet**. A méreteket és falvastagságokat nyilvános szabványok adják: acélcső ASME B36.10M, rézcső ASTM B88, PVC ASTM D1785 és PEX ASTM F876. Brazil projekteknél használható a **PVC vízcső (NBR 5648)**, a ragasztható PVC hidegvízhez, és a **PVC lefolyócső (NBR 5688)**, normál vagy megerősített sorozatban, lefolyókhoz és szellőzőkhöz: méreteiket DN jelöli (DN 25, DN 100). Ha az egyiket kiválasztotta, egy másik rendszer választása a brazil csövekhez igazodik (szennyvízlefolyóhoz a PVC lefolyócső, a PVC vízcső után).
3. Állítsa be a **Magasság** mezőt (At): a csőközéppont magasságát a szinthez képest.
4. Kattintson a cső kezdőpontjára, majd minden sarokra. Dupla kattintással, vagy az {{key:Enter}} billentyűvel zárja le az utolsó pontot. A {{key:Backspace}} visszaveszi az utolsó sarkot; az {{key:Esc}} eldobja a futást.

A cső úgy illeszkedik, mint a falak, és más futásokhoz is: kezdjen egy cső végén, hogy onnan folytassa, vagy egy cső vonalán végezzen, hogy elágazzon belőle. Az új futás a ráillesztett cső magasságát veszi át.

Egy berendezés csatlakozóján vagy portján kezdett vagy végződő futás átveszi annak méretét és rendszerét, és rögzítve marad hozzá: lásd [Portokkal rendelkező gépészeti berendezés](topic:mep-equipment) és [Csövek és légcsatornák csatlakoztatása berendezéshez](topic:mep-connections).

## A projekt vízvezeték-szabványának beállítása

A csősáv első listája a modell **vízvezeték-szabványa**: **US (IPC, hüvelyk)** vagy **Brazília (ABNT, DN)**. Ez a modellben mentésre kerül, így mindenki, aki megnyitja a fájlt, azonos módon kezdi a futásokat. US esetén az új futás hidegvízhez rézből, lefolyóhoz PVC Schedule 40-ből indul, hüvelykben, a Nemzetközi Vízvezeték-szabvány (IPC) lejtésével. Brazília esetén a hidegvíz PVC soldável DN 25-ként, a szennyvíz- és csapadékvíz-lefolyók és a szellőzők PVC esgoto DN 100-ként, az NBR 8160 lejtésével indulnak, a melegvíz pedig rézből. Ez vonatkozik a berendezés csatlakozóján vagy portján induló futásra is. A már megrajzolt csövek megtartják anyagukat és saját táblázataikat; az anyaglista nyitva marad, így egy US modellben szándékosan is rajzolhat egy brazil futást. Választás nélküli fájlnál a korábbi módon működik: az új futás a használatban lévő anyagot követi.

## Légcsatorna rajzolása

1. Válassza a {{ui:Légcsatorna}} lehetőséget. Válassza ki a rendszert (befúvott levegő, elszívott levegő, visszatérő levegő vagy külső levegő) és az alakot: kör, téglalap vagy lapos ovál.
2. Írja be a szélességet és a magasságot (kör keresztmetszetnél a szélesség az átmérő), és a **Magasság** mezőben a középvonal magasságát.
3. A légáramból való méretezéshez írja be a **Légáram** és a **Súrlódás** értékét, majd kattintson a {{ui:Méretezés}} gombra. A légcsatorna egyenlő súrlódás módszerével készül (az ASHRAE Handbook légcsatorna-tervezési fejezetének módszere), és egy raktáron lévő méretre kerekítve, így a súrlódás a beírt értéknél kisebb vagy azzal egyenlő lesz. Súrlódási érték nélkül 0,08 in. víz / 100 ft (0,8 Pa/m) értéket használ. Téglalap keresztmetszetnél a megadott magasságot tartja, és szélességet ad hozzá; a BimCraft jelzi, ha az oldalak aránya 4:1-nél nagyobb.
4. Kattintson a sarkokra, ahogy csőnél.

## Szaniterek

A {{ui:Build}} › {{ui:Család elhelyezése}} öt kiinduló szaniterelemet kínál, mindegyik lefolyóval és hidegvíz-csatlakozóval: **WC-csésze**, **Mosdó**, **Konyhai mosogató**, **Zuhanytálca** és **Mosótálca**. Elölnézetük Ön felé néz, amikor elhelyezi őket, hátuk a falhoz kerül. Lefolyóik az NBR 8160 legkisebb szaniterlefolyó-méreténél vannak (WC-csésze DN 100, konyhai mosogató DN 50, a többi DN 40); a víz DN 20. Méretüket megváltoztathatja vagy szerkesztheti, mint bármely családot: lásd [Családok és méreteik](topic:families).

A család a {{ui:Szaniter}} alatt mondja meg, melyik szaniter, a családszerkesztő {{ui:Csatlakozók}} lapján. Lefolyóját ekkor szaniter-egységekben számoljuk: 6 UHC egy WC-csészénél, 1 egy mosdónál, 3 egy konyhai mosogatónál vagy mosótálcánál, 2 egy zuhanytálcánál (NBR 8160), vagy az IPC 709.1 táblázat lefolyó-egységei.

## Csatlakozóról indítva

A csatlakozókkal rendelkező családból elhelyezett elemek (egy mosdó lefolyója és csapja, egy légbefúvó nyaka: lásd [Család szerkesztése](topic:family-editor)) szabad csatlakozóikat pontként mutatják, amíg a {{ui:Cső}} vagy a {{ui:Légcsatorna}} be van kapcsolva, és a mutató rájuk illeszkedik.

- **Indulás csatlakozón**: a futás átveszi a rendszerét és a méretét (a sáv anyagának azt a csövét, amely a csatlakozó méretével egyezik vagy éppen nagyobb nála; kör légcsatornánál az átmérőjét). Ha a csatlakozó lefelé vagy felfelé néz, mint egy mosdó alatti lefolyó, a futás először egyenesen lefelé vagy felfelé megy a **Magasság** mezőben megadott szintig, majd a kattintásai szerint folytatódik.
- **Végződés csatlakozón**: a futás lefelé vagy felfelé megy rá, és ott végződik.

A futás az IFC-fájlban az elemhez csatlakozik, így más programok a szaniter a rendszer részeként látják. Egy későbbi elem, amelyet csatlakozóval egy futás végére helyeznek, szintén hozzá csatlakozik. Attól a csatlakozótól elmozdított futás már nem kapcsolódik hozzá.

## Az idomok, amelyeket Ön számára készítünk

| Hol | Amit a BimCraft készít |
|---|---|
| Egy futás kanyarodik | Könyök. Acélcső az ASME B16.9 hosszú sugarával (1,5 × a méret), egyéb cső egy külső átmérőnyi sugárral, kör légcsatorna 1,5 átmérővel, téglalap légcsatorna egy szélességgel (felfelé vagy lefelé fordulásnál egy magassággal) |
| Egy futás egy másik futás vonalán végződik | T-idom; a másik futás ott szétválik |
| Két futás különböző méretben, végpontjával találkozik | Szűkítő (csöveknél) vagy átmenet (légcsatornáknál) |
| Két azonos méretű futás szögben, végpontjával találkozik | Könyök |

Ha módosít, mozgat vagy töröl egy futást, az adott szint minden idomát újra elkészíti. Ha egy szár túl rövid a végein lévő idomokhoz, a BimCraft ezt jelzi, és nem változtat semmin: mozgassa távolabb a sarkot.

:::note
Az idomok és szelepek általánosak: a cső- vagy légcsatorna-méretből készülnek, nem gyártói katalógusból. A bújtatásos, prés- és horonyidomoknak, a szelepházaknak és a berendezéseknek saját gyártói méreteik vannak; rendelés előtt egyeztessen a beszállítójával.
:::

## Felszállók

Rajzolás közben írjon új magasságot a **Magasság** mezőbe, és nyomja meg az {{key:Enter}} billentyűt: a futás az utolsó sarkánál egyenesen fel vagy le megy, mindkét végén könyökkel. A felszálló elérheti a felette lévő szintet. Minden szint azokat a futásrészeket mutatja, amelyeket a nézettartománya elér, a felszállónál **UP** vagy **DN** jelöléssel.

## Lefolyók és lejtésük

A szennyvíz- és csapadékvíz-lefolyók a méretüknek megfelelő, a Nemzetközi Vízvezeték-szabvány által megengedett legkisebb lejtéssel indulnak: 2-1/2 hüvelykig 1/4 hüvelyk lábanként, 3–6 hüvelyknél 1/8 hüvelyk lábanként, 8 hüvelyktől 1/16 hüvelyk lábanként. A brazil PVC lefolyócső az NBR 8160 lejtésével indul: DN 75-ig 2%, DN 100-tól 1%. Más lejtést a sávban vagy a Tulajdonságok panelen írjon be: `1/4"/ft`, `2 %` vagy `1:50`. A futás a kezdőpontjától lejt, ezért a lefolyókat abban az irányban rajzolja, amerre folynak. Az alaprajz a lejtést és egy nyilat mutat. A Tulajdonságok figyelmeztet, ha egy lefolyó a szabvány minimumánál laposabb.

## Lefolyók méretezése szaniter-egységekkel

Válasszon egy szennyvízlefolyót: a Tulajdonságokban a **Szaniter-egységek** megmondja, hány egységet szállít, és milyen legkisebb méretre van szüksége. Minden olyan szaniter, amelynek lefolyó-csatlakozója a futáson van, beleszámít, és beleszámít minden lefolyó is, amely bele folyik: a lefolyókat abban az irányban rajzolja, amerre folynak, és mindegyik azon végződjön, amelybe folyik.

- Az brazil PVC lefolyócsőből készült lefolyók **UHC**-t számolnak, és az NBR 8160 szerint járnak; a többiek **DFU**-t számolnak, és a Nemzetközi Vízvezeték-szabványt követik.
- **Lefolyó**: az **Ágvezeték** a szabvány ágvezeték-táblázatából méreteződik; az **Épületlefolyó** a táblázatából, a lejtés szerint, ezért a **Lejtés** fontos.
- Egy lefolyó sosem kisebb, mint az általa kiszolgált szaniterlefolyók (a WC-csészének DN 100, azaz 3 hüvelyk kell), és nem kisebb annál a lefolyónál sem, amely bele folyik. Az NBR 8160 szerint az épületlefolyó legalább DN 100.

A {{ui:Lefolyók méretezése}} a modell minden szennyvízlefolyóját, amely túl kicsi a szaniter-egységeihez, a szükséges méretre állítja egyetlen, visszavonható lépésben. A nagyobbra rajzolt lefolyó változatlan marad. Ha egy lefolyó többet szállít, mint a csővezeték legnagyobb mérete a lejtésénél, a BimCraft jelzi: adjon meredekebb lejtést vagy más csövet.

:::note
A táblázatok vízszintes lefolyókra vonatkoznak. Szellőzőket, függőleges szárakat és csapadékvíz-lefolyókat itt nem méreteznek: ezeket és az egész tervet a projektre érvényes előírások szerint ellenőrizze.
:::

## Szelepek

1. Válassza a {{ui:Szelep}} lehetőséget, és a fajtát: tolózár, golyóscsap, gömbszelep vagy visszacsapó szelep.
2. Kattintson arra a csőre, ahová kerül. A cső körülötte megszakad, és a szelep mindkét oldalához csatlakozik.

A futás Tulajdonságai felsorolják a szelepeit, mindegyiket a {{ui:Eltávolítás}} gombbal.

További szelepfajták, szűrő, légcsatorna-csappantyúk, saját csőspecifikációk és gyártói családok: lásd [Csőspecifikációk, szelepek, csappantyúk és gyártói családok](topic:pipe-specs).

## Futás módosítása

Válasszon ki bármely részt a futásból, az alaprajzon vagy a 3D-nézetben. A Tulajdonságokban:

- **Rendszer**, **Anyag**, **Osztály** és **Méret** (csöveknél), vagy **Alak**, **Szélesség**, **Magasság** (légcsatornáknál).
- A **Magasság a szint felett** a teljes futást feljebb vagy lejjebb mozgatja.
- **Szigetelés**: a vastagsága, amelyet a helyigény-ellenőrzés és a nyílásjegyzék használ (ehhez nem rajzolódik semmi): lásd [Csövek és légcsatornák ellenőrzése a szerkezettel](topic:mep-against-structure).
- Acélcső: **Darabolás előgyártmányokra**: lásd [Acél csőelőgyártmányok és előgyártmány-lapok](topic:pipe-spools).
- **Lejtés** (csöveknél).
- **Áramlás** a {{ui:Méretezés}} gombbal: vízhez a legkisebb méret, amely a vizet 8 ft/s (2,4 m/s) alatt tartja, melegvíznél 5 ft/s (1,5 m/s); a brazil PVC vízcsőnél (NBR 5626) 3 m/s. Légcsatornáknál a rajzolt légcsatorna sebessége és súrlódási értéke. A szennyvízlefolyók méretét a szaniter-egységeik szerint kapják: lásd lent a **Lefolyók méretezése szaniter-egységekkel** részt.

Minden módosítás egy visszavonási lépés. A {{key:Delete}} billentyű a teljes futást törli.

## Alaprajzok

- A 150 mm-nél (kb. 6 hüvelyk) kisebb csövek egy vonalként jelennek meg a középvonalukon; a nagyobb csövek és minden légcsatorna két vonalként a szélességénél.
- Minden rendszernek saját színe van; az alaprajz PDF-je feketében nyomtatja őket.
- Minden futás fel van címkézve a méretével és rendszerével (például `2" CW` vagy `16×10 SA`).
- Az alaprajz nézettartománya dönti el, mely futásokat mutatja, és a {{ui:Ezen az alaprajzon látható}} lehetőséggel a **Csövek** vagy a **Légcsatornák** kihagyható: lásd [Nézetek, nézettartományok és saját lapok](topic:views-and-sheets).

## Kimutatások és mennyiségkimutatás

A {{ui:Kimutatások}} panel **Csövek** (rendszerenként, anyagonként és méretenként, a hosszukkal), **Légcsatornák** (rendszerenként, alakonként és méretenként, a hosszukkal és a külső felülettel) és **Idomok és szelepek** (fajtánként és méretenként, darabszámmal) kimutatást ad. Egy sorra kattintva kiválasztja, mit listáz; a {{ui:CSV letöltése}} letölti.

A {{ui:Mennyiségkimutatás}} átadja a futásokat a TakeoffCraft programnak: a csöveket és légcsatornákat méret szerint, mint az alaprajzon rajzolt futásokat (a lejtős lefolyókat a lejtésük mentén mérve), az idomokat és szelepeket ott számolva, ahol vannak: lásd [Az épület mennyiségeinek átadása a TakeoffCraft programnak](topic:takeoff). A függőleges szárak kimaradnak ebből a lapból, mert az alaprajz nem tudja mérni őket; a Csövek kimutatás tartalmazza a hosszukat.

## Az IFC-fájlban

Minden futás egy összeállítás, amely a részeit tartalmazza: csőszegmenseket és légcsatornaszegmenseket, idomokat és szelepeket, mindegyik a típusával, anyagával, a rendszeréhez tartozó színnel és a portjaival. Az érintkező portok össze vannak kötve, és minden rész a saját elosztórendszeréhez tartozik (az IFC2X3-fájlok ugyanezt áramlási szegmensekként, idomokként és vezérlőkként kapják meg egy rendszerben). Más, az IFC-rendszereket olvasó programok rendszerenként egy összefüggő futást látnak. A futás saját definíciója vele marad, így a BimCraft módosításkor ugyanúgy készíti újra.
