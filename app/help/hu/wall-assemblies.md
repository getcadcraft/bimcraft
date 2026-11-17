---
title: Falszerkezetek és referenciaméretek
summary: Készítsen saját falfajtákat rétegenként, jelölt maggal, tartson fenn projekt-anyagkönyvtárat, és méretezzen olyan felületekre és tengelyvonalakra, amelyek a fal változásakor is a helyükön maradnak.
keywords: lod, fejlesztési szint, lod 200, lod 300, általános, falszerkezet, falfajta, rétegek, mag, magfelület, magtengely, légrés, fólia, házfólia, anyagkönyvtár, anyagok, vastagság, hivatkozási méret, méret, asszociatív, helyzetvonal, homlokzati burkolat, váz, gipszkarton
from: 4ea8fbf5
---

## Mit fog csinálni

Készítsen olyan falfajtát, amely megfelel az építendő falnak: homlokzati burkolat, burkolólemez, 5½ hüvelykes vázas mag és gipszkarton, vagy tégla, légrés és faváz-szerkezetű fal. Jelölje meg, mely rétegek a mag, hogy egy méret vagy helyzetvonal a magot tarthassa, miközben a körülötte lévő burkolatok változnak. Ezután méretezze a falakat a kívánt felületekre és tengelyvonalakra.

## Falfajta készítése

1. Kezdjen épületet vagy nyisson meg egy IFC-modellt, kapcsolja be a {{ui:Rajzolás}} funkciót, majd válassza a {{ui:Fal}} eszközt.
2. Válasszon kiindulási típust a {{ui:Faltípus}} listából, és nyissa meg a {{ui:Falszerkezetek…}} elemet. A kiindulási típus másolatként nyílik meg; adjon az új típusnak nevet.
3. A rétegek a lista tetején lévő külső oldaltól az alján lévő belső oldalig futnak. Válassza ki minden réteg anyagát, adja meg a vastagságát (a projekt mértékegységeiben, vagy konkrét értékkel, például `12.7 mm` vagy `1/2"`), válassza ki a funkcióját (burkolat, alapfelület, szerkezet, hőszigetelés, fólia), és jelölje be a **Mag** rétegeket. A magnak egy összefüggő csoportot kell alkotnia.
4. A {{ui:Réteg hozzáadása}} gombbal rétegt adhat hozzá, a {{ui:Légrés hozzáadása}} gombbal légrést szellőzéssel (nincs megadva, nem szellőztetett, szellőztetett), a {{ui:Fólia hozzáadása}} gombbal pedig névleges vastagság nélküli réteget, például házfóliát. A nyilak a réteget kifelé vagy befelé mozgatják.
5. Az előnézet a rétegeket méretarányosan rajzolja meg, a magot aláhúzva, a sorok számozásával, és méretezi az egyes rétegeket, a magot és a teljes vastagságot. Kattintson a {{ui:Típus mentése}} gombra.

Az új típus megjelenik a Fal eszköz típuslistájában és a kijelölt fal **Tulajdonságai** között. Egy szerkesztett típus mentése megváltoztatja az összes azt használó falat; a {{ui:Típus kettőzése}} külön típust készít, és csak a kijelölt falakhoz rendeli. Minden mentés egy visszavonási lépés, együtt a mozgatott falakkal, az azokban lévő ajtókkal és ablakokkal, valamint a tőlük függő méretekkel.

A légrés növeli a szélességet. A fólia nem ad hozzá szélességet: a típusban marad, hogy a kimutatás később is megtalálhassa, és nem számít bele a fal vagy a mag vastagságába. A légrést és a fóliát soha nem számítja be tömör anyagként. Az IFC2X3 formátumban mentett fájlban a fólia a típus nyilvántartásában marad, de kimarad a fizikai anyagrétegek közül.

## Típus megjelölése fejlesztési szinttel (LOD)

Egy típus megadhatja, mennyire kidolgozott. A szerkesztőben a **Fejlesztési szint (LOD)** mező a rögzített 100, 200, 300, 350, 400 és 500 értékeket, vagy a **Nincs beállítva** lehetőséget kínálja. Egy általános fal („Wall 230 generic”) LOD 100 vagy 200; egy konkrét, valódi rétegekből álló felépítés („230 clay brick, plastered both sides”) LOD 300 vagy magasabb. A címkét Ön állítja be: a BimCraft nem számítja ki, és a kiindulási típusok nem kapnak ilyet.

A címke megjelenik a típus neve mellett a Fal eszköz típuslistájában, a fal Tulajdonságai között és a [Típus cseréje](topic:wall-tools) listában; a csere utáni jelentés megmondja, hogy a szint nőtt vagy csökkent. A **Falak típus szerint** kimutatásban és annak CSV-fájljában való megjelenítéséhez jelölje be a Beállítások › BimCraft › Falak menüpont **Mutassa minden faltípus LOD-ját a falkimutatásban** lehetőségét: egy utolsó oszlop, a LOD kerül hozzá. A címke az IFC-fájlba a típussal együtt mentődik (a típus `CadCraft_WallType` tulajdonságkészletében, `LOD` tulajdonságként és a típus nyilvántartásában), így a fájl újbóli megnyitásakor is megvan. A címke egyelőre csak falfajtákon van, egyedi elemeken vagy más elemfajtákon nincs.

## Általános falak a vázlatstádiumban

A Fal eszköz típuslistája két **általános** (generic) falat tartalmaz: **Generic wall 200 mm (exterior)** és **Generic wall 100 mm (interior)**. Mindegyik az általános anyag egyetlen rétege, LOD 200 címkével. Akkor használja őket, ha tudja, hol lesznek a falak, de még nem tudja, miből készülnek.

A **LOD 100** vagy **LOD 200** címkéjű típusú falat minden alaprajzon **egyetlen sraffozott sávként** rajzolja meg, minden részletességi szinten: rétegek és rétegvonalak nélkül. Ez igaz az általános falakra, és minden saját típusra, amelyet LOD 100 vagy 200 címkével lát el. A fal maga teljes: van vastagsága, ajtói és ablakai, helyiségei és mennyiségei.

A kidolgozáshoz cserélje ki a típusát (Szerkesztés › Falak › **Típus cseréje**, vagy a Tulajdonságok **Típus** mezője). A falat nem rajzolják újra: ugyanaz a fal új típust kap, és a jelentés megmondja, mi mozdult. A LOD 300 vagy annál magasabb címkéjű típus a rétegeivel együtt jelenik meg, mint korábban.

Ha minden falat a címkéjétől függetlenül a rétegeivel szeretne rajzolni: Beállítások › BimCraft › Falak, és törölje a jelölést ennél: **LOD 100 vagy LOD 200 típusú falak rajzolása egyetlen sraffozott sávként**.

Az általános ajtók és ablakok is általános fajták (méret és nyitási mód, nem termék). A **Mutassa minden faltípus LOD-ját a falkimutatásban** bekapcsolt állapotban az Ajtók és Ablakok kimutatásai LOD 200-at mutatnak rájuk.

## Mennyiségkimutatási adatok megadása a típusnak

A falfajta-szerkesztőben a **Mennyiségkimutatási adatok** azt rögzíti, amit a költségbecslőnek a falról a típusra egyszer tudnia kell: az **egység**, amiből a fal épül (egy tégla vagy blokk: neve, hossza, magassága és szélessége), a **habarcs** (neve és illesztési vastagsága), valamint az **egységár** a pénznemkódjával (három betű, például USD, EUR vagy ZAR) és az, hogy mire vonatkozik: a nettó falfelület négyzetméterére vagy négyzetlábára, a falhossz méterére vagy lábára, vagy falanként. Minden mező választható.

Az adatok a típussal együtt mentődnek a fájlba. A típus minden fala ezt jelenti: a {{ui:Kimutatások}} › **Faltípusok: mennyiségkimutatási adatok** lista az egységet, a habarcsot, az egységárat és az egységár szorzatát a mért mennyiséggel mutatja, a TakeoffCraftnak átadott mennyiségkimutatás pedig ezt viszi a faltípus tételére. Módosítsa a típuson, és minden fal követi.

További három mező a téglák vagy blokkok és a habarcs számlálására szolgál:

- **Hulladék az egységeken, %**: az egységek számához adódik. Hagyja üresen, ha a projekt mérési módszerének értékét akarja használni, vagy ha a módszernek nincs ilyen értéke. Adjon meg 0-t, ha a módszertől függetlenül nem kér hulladékot.
- **Extra habarcs, %**: a habarcsot felvevő horonyokhoz vagy lyukakhoz; a habarcs térfogatához adódik. Üresen hagyva nincs.
- **Ebből az egységből épített rétegek**: jelölje be minden olyan réteget, amely ebből a téglából vagy blokkból készült. Egy üreges falnak kettő van. Ha egyik sincs bejelölve, a magrétegek számítanak.

Az egységár egyedenként, rendelésre kerülő egységenként, rendelésre kerülő 1000 egységenként vagy habarcs m³-enként is megadható. Ha az egységnek van hossza és magassága, a **Faltípusok: mennyiségkimutatási adatok** lista megmutatja egy levél egységeit m² (vagy ft²) egységenként, a rendelendő egységeket és a habarcs térfogatát; a képletek a [Téglák, blokkok és habarcs](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar) részben vannak. Egy típusnak egy egysége van: két különböző egységből álló levelet (például téglából készült külső levelet és blokkból készült belső levelet) egy típuson belül még nem lehet számolni.

## A mag rögzítése

A **Tulajdonságok**ban állítsa a fal **Helyzetvonal** mezőjét a magfelületre vagy a magtengelyre. Amikor később burkolatot ad hozzá vagy vastagít, ez a vonal a helyén marad, és a fal körülötte nő; a sarkon hozzá csatlakozó falak követik, így az egyenes sarkok zártak maradnak.

## Projektanyagok

A {{ui:Anyagkönyvtár…}} a projekt anyagait listázza: név, kategória, a réteg kezdő vastagsága, megjelenítési szín, a metszet kitöltési mintázata és megjegyzések. A könyvtár az IFC-ben a projekttel együtt mentődik. Anyag kiválasztásakor a réteg megkapja az anyag alapértelmezett vastagságát, amelyet később módosíthat; a könyvtár későbbi szerkesztése nem méretezi át a már megrajzolt falakat. Anyagot a réteg anyaglistájából is készíthet a {{ui:+ Új anyag…}} gombbal.

## Hivatkozási méretek

{{ui:Feliratozás}} › {{ui:Hivatkozási méret}}: válasszon vízszintes, függőleges vagy párhuzamos méretet, és egy hivatkozást: a külső vagy belső burkolat felületét, a külső vagy belső magfelületet, a fal tengelyvonalát vagy a magtengelyt. Először válassza ki az első falat, szükség esetén módosítsa a hivatkozást, válassza ki a másodikat, majd kattintson oda, ahová a méretvonal kerül. Két hivatkozás egy falon a teljes vastagságát vagy a magvastagságát méri. A {{ui:Hivatkozási méretek…}} listázza a nézet méreteit, beleértve azokat is, amelyek elvesztették falukat; a **Tulajdonságok**, a Hivatkozások újrakötése és a Törlés műveletekkel.

### Az egész alaprajz méretezése szabályok szerint

{{ui:Feliratozás}} › {{ui:Alaprajz méretezése…}}: a megtekintett alaprajz külső részét méretezi: a teljes méretet mindkét irányban, és egy méretsort minden külső szél mentén (a falvégek, a szélhez érő falak, valamint az ott lévő ajtók és ablakok), a méretsorokat az épülettől elkülönítve. Jelölje be, amit szeretne, olvassa le a darabszámot, majd kattintson a {{ui:Méretek hozzáadása}} gombra. Ezek hagyományos hivatkozási méretek: követik a falakat, ha azok mozognak, és bármelyiket kiválaszthatja, mozgathatja vagy törölheti; az egész készlet egy visszavonási lépés, és az újrafuttatás nem készít belőlük újabbakat.

Csak a külső részt méretezi: az épületen belüli helyiségek, a görbe falak és a síkkal nem derékszögben álló falak a kézi eszközökre maradnak, a rácsvonalak pedig nem falak, így a rácsvonalak közötti méretek itt nem készülnek. A csatlakoztatott asszisztense ugyanezt elvégezheti a `plan_dimension` eszközzel.

A méret a falhoz kapcsolódik, nem a képernyő egy pontjához: ha a fal mozog vagy a típusa változik, az érték követi. Ha a falat törlik, a méret feloldatlannak jelöli, és nem mutat számot, amíg újra nem köti vagy vissza nem vonja. A hosszúság mező alaprajzi koordinátákat is elfogad, például `10',12'`, a méretvonal pontos helyéhez.

A méretek a BimCraft által rajzolt falakhoz készülnek, alaprajz nézetekben. Még nincs elkészítve: a méretek metszetekben és homlokzatokon, ajtókhoz, ablakokhoz és más építőelemekhez, valamint a falszerkezet rétegei az alaprajzon és a metszeten; lásd [Mi még nincs elkészítve](topic:not-built-yet).

## Lásd még

[Falak rajzolása](topic:draw-walls), [Fal, ajtó vagy ablak módosítása](topic:change-a-wall-or-door), [Tulajdonságok](topic:properties-panel).
