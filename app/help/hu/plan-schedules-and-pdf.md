---
title: Kimutatások, méretek és az alaprajz PDF-je
summary: Ajtó-, ablak-, fal- és helyiségkimutatások, amelyek rajzolás közben változnak, méretek az alaprajzon, és egy szint alaprajza szabványos léptékű PDF-ként mentve.
keywords: kimutatás, ajtókimutatás, ablakkimutatás, falkimutatás, helyiségkimutatás, mennyiségek, mennyiségkimutatás, terület, csv, táblázatkezelő, méretezés, méret, nyomtatás, pdf, plottolás, lépték, 1/4", 1:50, lap
from: d97cd16e
---

## Mit fog tenni

Lássa, mivé áll össze az épület, amelyet rajzol: hány ajtó és ablak van minden méretből, mennyi fal van minden típusból, és mekkora minden helyiség. Méreteket helyezhet az alaprajzra, és PDF-ként mentheti nyomtatásra vagy küldésre.

## Kimutatások

A {{ui:Rajzolás}} bekapcsolt állapotában a bal oldali panel **Kimutatások** része egyszerre egy táblázatot mutat:

- **Ajtók** és **Ablakok**: mindegyik a jelével (D1, D2 … és W1 …, ahogy elhelyezi őket), a típusával, szélességével, magasságával (és küszöbmagasságával), szintjével és a falával, amelyben van.
- **Falak típusonként**: minden faltípusra a darabszám, a vastagság, az összes hosszuk és oldalfelületük **Bruttó felület**, **Levonások** és **Nettó felület** szerint, összesítéssel.
- **Helyiségek**: sorszám, név, szint, terület és kerület, a teljes területtel.
- **Padlók**: minden padló a szintjével, típusával és vastagságával, valamint bruttó felületével, levonásaival és nettó felületével.
- **Felületkezelések**: a falak típusainak minden felületkezelő rétege (anyag és a fal oldala szerint) és a mennyezetek, a felületek darabszámával, valamint bruttó, levonás és nettó értékekkel.
- **Faltípusok: mennyiségi adatok**: minden faltípusra egyszer megadott adatok (mértékegység, habarcs, mennyiségi norma), a falak darabszámával, hosszukkal és nettó felületükkel, valamint a norma szorozva a mért mennyiséggel. Lásd: [Falszerkezetek](topic:wall-assemblies).
- **Felületkezelések helyiségenként**, **Felületkezelések falanként**, **Felületkezelések zónánként** és **Felületmennyiségek**: mi borítja az egyes helyiségeket, a területekkel, a csempék számával a vágásokkal együtt, és az alépítmény térfogatával. Lásd: [Helyiségfelületek és felületi kimutatások](topic:room-finishes).
- Saját **beállítások**: egy kimutatás, amelyet csoportosított, összesített és egy névvel mentett. Lásd: [Kimutatás elrendezése, mentése és exportálása](topic:schedule-layouts).

A táblázatok minden szerkesztéssel változnak. Egy sorra vagy egyetlen számra kattintva kiválaszthatja azokat az elemeket, amelyekből származik. A {{ui:CSV letöltése}} menti a táblázatot, táblázatkezelőben való megnyitásra; az {{ui:Excel letöltése}} és a {{ui:Másolás Google Táblázatokhoz}} alatta van. A **Helyiség-felületek** és a **Specifikáció** ([Specifikáció írása a modellből](topic:specification)) ugyanebből a helyről nyílik.

## Rétegek területe és térfogata

A Kimutatások listájában válassza a **Rétegek: terület és térfogat** lehetőséget. Ennek minden használt fal-, padló-, tető- és mennyezettípus minden rétegéhez van egy sora: az elem, a típus és annak LOD-ja, a réteg (falnál a külső oldaltól, padlónál, tetőnél vagy mennyezetnél a felülettől számolva), az anyaga és funkciója, a vastagsága, az elemek száma, a **nettó felület** és a **térfogat**.

- A terület az adott típusú elemek nettó felülete, pontosan úgy mérve, mint a Falak típusonként, a Padlók és a Felületkezelések kimutatásánál, a projekt mérési módszere szerint. A tetőt lejtőn mérik; egyik mérési módszer sem tartalmaz szabályt a tetőkre.
- A térfogat az a terület szorozva a réteg saját vastagságával.
- Típus nélküli padló, tető vagy mennyezet egyetlen sor: egy réteg a saját vastagságával.
- A légrés területét felsorolja, de a teljes térfogatból kihagyja. A membránnak van területe, de nincs térfogata.

Egy sorra kattintva kiválaszthatja az elemeit. A {{ui:CSV letöltése}} menti a táblázatot.

## A területek mérése

Minden terület három szám, amelyek összeadódnak: a bruttó mínusz a levonások adják a nettót. A szabályt minden táblázat fölött leírjuk, és ez egyetlen szabály: a kimutatások, az IFC-fájlba mentett mennyiségek és a TakeoffCraft programnak átadott mennyiségkimutatás mind ezt használja.

- **Egy fal**: a bruttó felület a fal egyik lapja, a középvonal mentén mért hossza szorozva a magasságával (a valódi felület alakos tetejű vagy alapú falnál). Minden ajtót, ablakot és egyéb nyílást levon: szélesség szorozva magassággal, minden nyílást egyszer.
- **Padló vagy mennyezet**: a bruttó felület a körvonalán belüli terület. Minden benne lévő nyílást és kivágást egyszer levon.
- **Falfelület-kezelés**: a fal típusának minden felületkezelő rétege a fal egy oldalát fedi, a falhoz hasonlóan mérve, ugyanazokkal a levont nyílásokkal. A felületkezelés a fal egy rétege: a Felületkezelések alatt szerepel, és nem adódik a fal területéhez, így az ajtós fal soha nem számolódik kétszer.

Ez a **CadCraft alapérték**: minden nyílást levon, bármekkora is; a falhosszak a középvonal mentén mérődnek; a nyílásszélek nem mérődnek. Minden projekt ezt használja, amíg másik módszert nem választ.

## Mérési módszer kiválasztása

A kimutatás fölött a **Mérési módszer** a BimCraft beépített módszereit listázza, a **Módszerfájl betöltése** pedig az irodája saját módszerét olvassa be. A választás az IFC-fájlban mentődik, egy visszavonási lépésként, és három dolog követi egyszerre: a kimutatások, az IFC-fájlban mentett nettó mennyiségek és a TakeoffCraft programnak átadott mennyiségkimutatás. A táblázatok fölötti szabály ekkor a módszerrel kezdődik, a forrásával, a forrás elolvasásának dátumával és a szavakkal: **Egy mennyiségmérnök nem ellenőrizte**.

A módszer a tények kis fájlja, nem programkód. Minden mennyiséghez megmondja:

- **a legkisebb levont nyílást**: például a 0,5 m² vagy annál kisebb nyílás a fal felületében marad;
- **hogyan mérik a fal-csatlakozásokat**: a középvonal mentén; vagy egy másik falhoz csatlakozó falnál az ahhoz tartozó lapig; vagy minden olyan falvégnél, amely másik falhoz csatlakozik, a közelebbi lapig;
- **mérik-e a nyílásszéleket** a felületkezelésnél (a felületkezelés visszahajtásait a nyílásokba), területként vagy, ha sekély, hosszúságként. A nyílásszél mélységét a fal vastagságának felének vesszük;
- **mit mond a falazatról**: hogyan mérik, és van-e megadott hulladék- vagy habarcsráhagyás.

A BimCraft beépített módszerei:

| Módszer | Falak: legkisebb levont nyílás | Falfelület-kezelések | Mennyezetek | Falazat |
|---|---|---|---|---|
| CadCraft alapérték | minden nyílás | minden nyílás | minden kivágás | nincs ráhagyás |
| RICS NRM 2 (Egyesült Királyság), 2. kiadás 2021 | 0,5 m² vagy kisebb marad a falban | 1 m² vagy kisebb marad benne | 1 m² vagy kisebb marad benne | felület szerint; nincs megadott százalék |
| AAQS Standard Method for Africa 2015 | 0,5 m² vagy kisebb marad a falban | 0,5 m² vagy kisebb marad benne | 0,5 m² vagy kisebb marad benne | felület szerint; nettó mérve, 0% hulladék |
| IS 1200 (India), 1976, falazás | 0,1 m² vagy kisebb marad a falban | alapérték (lásd lent) | alapérték | térfogat szerint |
| BIA Technical Note 10 (Egyesült Államok), 2009 | minden nyílás | alapérték | alapérték | 5% hulladék az egységeken, 15% a habarcson |

Ezeket a korlátokat olvassa el, mielőtt egy módszerre hagyatkozik:

- **Egyiket sem ellenőrizte mennyiségmérnök.** Mindegyiket úgy készítettük, hogy a megnevezett forrást elolvastuk, és a számait a hozzájuk tartozó pontokkal rögzítettük. Ha Ön mennyiségmérnök, és ellenőrizni tud egyet, a készítők szívesen hallanának Öntől.
- Ahol egy szabályt nem lehetett a forrásból kiolvasni, a módszer ehhez **nincs megerősítve** megjegyzést ír, és az CadCraft alapértéket használja. Egyik beépített módszernek sincs megerősített szabálya a fal-csatlakozásokra, a nyílásszélekre vagy a padlókra, ezért ezeket mindegyik alatt az alapérték szerint mérik.
- Az IS 1200 három sávban vonja le a nyílásokat a vakolatból. A módszerfájl még nem tud sávokat tartalmazni, ezért a falkezelések ezen módszer alatt az alapértéket használják, és a szabály ezt megmondja.
- A dél-afrikai szabványos rendszer (Standard System of Measuring Building Work) **nincs** közöttük: szövegét nem lehetett elolvasni. Az AAQS Afrikára szóló módszer azt mondja, hogy az 1991-es kiadású rendszerre épült, de ez másik dokumentum.
- A BIA Technical Note 10 egy iparági becslési jegyzet, nem szabványos mérési módszer.
- A pontosan legkisebb méretű nyílás a módszer saját szavait követi („nem haladja meg”, „kisebb mint”). A tíz-ezred részben (2 rész 10 000-ből) ettől eltérő méretek pontosan annak számítanak.
- Egy módszer alatt a fájl fal nettó oldalfelülete és a padló vagy mennyezet nettó területe követi a módszert, és a mennyiségi készlet megnevezi azt. A fájl bruttó felületei és térfogatai változatlanok maradnak, ahogy rajzolták őket.

**A módszer megjegyzései** a választó alatt azt írják le, mit hagy nyitva az egyes forrás. A **Forrás megnyitása** a dokumentumhoz visz.

### Az iroda saját módszere

A módszerfájl a `cadcraft-measurement-method` formátumú JSON. Minden érték megnevezi azt a pontot, ahonnan származik; a pont nélküli értéket elutasítjuk. A fájl betöltéskor ellenőrződik, a hibás mezőt megnevezi, és ami nem felel meg, abból semmi nem kerül felhasználásra. A kiválasztás után a fájl a projekten belül mentődik, így a projekt másik számítógépen is ugyanúgy nyílik meg. Az azonosítója egy saját, egyszerű név lehet (lehet, hogy nem egy beépített módszer azonosítója).

## Téglák, blokkok és habarcs

A **Faltípusok: mennyiségi adatok** azoknak a falfajtáknak az egységeit és habarcsát számolja, amelyek egysége hosszúságot és magasságot kap (lásd [Adja meg a típusnak a mennyiségi adatait](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ezek a képletek, pontosan úgy számolva:

- **Egységek egy réteg területén** = 1 / ((egység hossza + illesztés) × (egység magassága + illesztés)). Egy 215 × 65 mm-es tégla 10 mm-es illesztéssel: 1 / (225 × 75 mm) = 59.26 m²-enként.
- **Egységek szélessége egy rétegen át** = (rétegvastagság + illesztés) / (egység szélessége + illesztés), egész számra kerekítve, legalább 1. Egy 102,5 mm-es réteg ugyanilyen téglával 1; egy 215 mm-es fal ugyanilyen téglával 2.
- **Egységek** = egységek területenként × egységek szélessége egy rétegen át × a fal nettó felülete, összeadva a típus falazati rétegein.
- **Megrendelendő egységek** = egységek × (1 + hulladék % / 100), egész egységre felfelé kerekítve. A hulladék a típuson megadott; ha nincs megadva, a módszeré, ha ad meg; különben 0%.
- **Habarcs** = nettó felület × rétegvastagság, mínusz az egységek térfogata (egységek × hossz × magasság × szélesség), majd plusz a típuson megadott többlet százalék a lyukakra vagy perforációkra, majd plusz a módszer ráhagyása, ha ad meg. Az egység szélességét igényli.

Feltételezések: a típus minden falazati rétege a típus egyetlen egysége szerint épül; a rétegvastagság, amely meghaladja az egység egy szélességét, annyi egységszélességnek számít, és mindegyik hosszában fektetett rétegként számolódik, így a vágott egységek, zárók és speciális formák nem számolódnak külön; ahol egyetlen réteg sincs bejelölve az egységből épültként, a magréteget vesszük rétegnek, és a táblázat fölötti megjegyzés ezt megmondja. Az **Mennyiség** a norma és az, amire a norma vonatkozik, amely most már lehet megrendelendő egység, 1000 megrendelendő egység vagy egy m³ habarcs is.

Az elemek jelei az IFC-címkéjük: változtassa meg az egyiket a **Tulajdonságok** panelen (Címke), és a kimutatás követi. Minden IFC-modellre, rajzoltra vagy sem, a [Mennyiségek összesítése, elemek listázása és terek kimutatása](topic:quantity-totals) bármely tulajdonságot összesít.

## Méretek

Az alaprajz minden rajzolt fal hosszát mutatja a külső lapja mentén (belső falnál: az egyik lap mentén), és a nyílásokkal (ajtó vagy ablak) rendelkező falnál a sarkoktól minden nyílásig tartó láncot. A modelsáv **Méretek** gombja elrejti őket, és ismét megjeleníti.

## Az alaprajz mentése PDF-ként

1. Jelenítse meg a kívánt szintet, és állítsa be a mértékegységeket a **Szintek** panelen.
2. Kattintson a modelsáv {{ui:Nyomtatás}} gombjára.
3. A BimCraft menti a „<fájl> — <szint>.pdf” nevet: az alaprajz fekete-fehérben, a legnagyobb szabványos léptékben, amely az oldalra fér (1/4" = 1'-0", 1/8" = 1'-0" … Letter méretben láb és hüvelyk szerint; 1:50, 1:100 … A4 méretben milliméterben), a falak kitöltésével, ajtókkal, ablakokkal, helyiségnevekkel és területekkel, méretekkel, valamint egy címsorral a szinttel, a fájllal, a vágási magassággal, a dátummal és a léptékkel.

A PDF vonalakból és szövegből rajzolódik, így bármilyen nagyításnál éles marad, és a szövege kereshető.

## Jó tudni

- A kimutatások azt listázzák, amit a rajzolóeszközök készítettek. Más programból származó ajtók és ablakok ehelyett a Mennyiségösszesítésben jelennek meg.
- Az munka árazásához adja át a mennyiségeket a TakeoffCraft programnak: lásd [Mennyiségek átadása a TakeoffCraft programnak](topic:takeoff). A CSV-letöltés a táblázatkezelőnek marad.
