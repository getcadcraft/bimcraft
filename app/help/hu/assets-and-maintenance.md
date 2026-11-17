---
title: Eszközadatok és karbantartási napló a modellben
summary: Használja az átadott IFC-modellt az épület üzemeltetéséhez: gyártó, modell, sorozatszám, garancia és élettartam a berendezésekhez és szerelvényekhez, valamint az elvégzett karbantartások nyilvántartása, mindez az IFC-be írva.
keywords: átadás, használatbavételi engedély, megfelelőségi igazolás, as-built, átadási csomag, eszközök, eszköznyilvántartás, facility management, fm, üzemeltetés, karbantartás, szerviz, garancia, sorozatszám, vonalkód, gyártó, modell, élettartam, átadás, cobie, digitális iker, lejárt, esedékes, munkalap
from: b84ac492
---

A jobb oldali panel {{ui:Eszközök}} lapja a megnyitott IFC-modellt az épület berendezéseinek nyilvántartásává alakítja. Minden az IFC-be íródik, annak saját tulajdonságkészleteiben és feladataiban, így a fájlt legközelebb megnyitó program is olvassa. Semmi nem töltődik fel, és nincs szükség szerverre: a mentés az IFC-fájl mentésével történik.

## Mi kerül a listára

- Berendezések és szerelvények: bútorok, vizesblokk-szerelvények, világítótestek, készülékek, levegőcsatlakozók, szelepek, szivattyúk, ventilátorok, kazánok, tartályok, csatlakozók, kapcsolótáblák, liftek és más hasonló elemek, valamint könyvtári elemek, amelyekhez berendezés-adatok tartoznak.
- Minden más elem, amelyet **nyomon követ**: jelölje ki a modellben (ajtó, fal, egyszerű objektumként rajzolt szivattyú), és kattintson a {{ui:Kijelöltek követése}} gombra.
- Minden, aminek már van eszközadata vagy karbantartási feladata, akár itt írták, akár más program.

A lejárt elemek kerülnek előre, utána a 30 napon belül esedékesek. Szűrhet név, címke, gyártó, modell vagy sorozatszám szerint, szint szerint, vagy jelölje be a {{ui:Csak a lejárt vagy 30 napon belül esedékes}} lehetőséget.

## Eszközadatok

Kattintson a listában egy eszközre (vagy jelölje ki a modellben), hogy megnyissa az adatait: gyártó, modell, modellhivatkozás, sorozatszám, vonalkód, a beépítés napja, a garancia száma, kezdete és vége, valamint az élettartam években. A {{ui:Az adatok mentése}} egy lépésben írja ezeket ({{key:Mod+Z}} visszavonja). Hagyjon egy mezőt üresen, ha el szeretné távolítani az értéket.

## Dokumentumok

Az adatok alatt a {{ui:Dokumentumok}} listázza az eszközhöz kapcsolt kézikönyveket, garanciákat, fotókat, tanúsítványokat és rajzokat. Válassza ki a típust, adjon címet (vagy hagyja üresen: a fájlnév lesz használva), és adja meg, hol található:

- egy **webcím** (`https://…`): kap egy Hivatkozás megnyitása gombot, amely új lapon nyílik meg;
- vagy egy **fájlnév vagy útvonal** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, hálózati megosztás): tartsa a fájlokat az IFC mellett, ugyanabban a mappában vagy annak egyik almappájában, hogy a nevek a mappa átadásakor is működjenek. A BimCraft a nevet mutatja; a fájlt a mappából nyissa meg.

A fájlokat soha nem töltjük fel vagy másoljuk az IFC-be: csak a hivatkozás íródik. A jelszót tartalmazó webcím, valamint minden olyan hivatkozás, amely nem webcím vagy fájl (például `javascript:`), visszautasításra kerül. A {{ui:Eltávolítás}} eltávolítja a dokumentumot az eszköztől (egy lépés; a {{key:Mod+Z}} visszavonja).

Az elemhez más program által csatolt dokumentumok szintén listázódnak. Az elem **típusához** csatolt dokumentumok minden azonos típusú elemnél megjelennek, és ezt jelzik; ezeket ott módosítsa, ahol a típust készítették.

Az IFC-ben minden dokumentum egy elemhez kötött IFC-dokumentumhivatkozás, a típusa a kötésnél marad meg, IFC4-ben és IFC2X3-ban egyaránt.

## A karbantartási napló

A dokumentumok alatt: {{ui:Elvégzett munka rögzítése}}: az elvégzés napja, a munka, az elvégző, a következő esedékesség és megjegyzések. Minden bejegyzés egy lépés; a {{ui:Szerkesztés}} és a {{ui:Törlés}} később módosítja. A legutolsó bejegyzés következő esedékességi dátuma dönti el, hogy az eszköz lejárt-e vagy hamarosan esedékes.

## Hogyan tárolódik az IFC-ben

- A gyártó és a modell a `Pset_ManufacturerTypeInformation` alatt, a sorozatszám, a vonalkód és a beépítés napja a `Pset_ManufacturerOccurrence` alatt, a garancia a `Pset_Warranty` alatt, az élettartam a `Pset_ServiceLife` alatt, magán az elemen. Ha az elem típusa már tartalmaz gyártót vagy modellt, az látszik, amíg Ön be nem írja a sajátját.
- Minden karbantartási bejegyzés egy IFC-**feladat** karbantartási fajtával, az elemhez kötve, a dátumaival (IFC4-ben a feladat saját idejeként is), és egy `CadCraft_Maintenance` halmazzal, amely a napot, az elvégzőt és a következő esedékes napot tartalmazza.
- Az elemek által megosztott értékek először másolódnak: egy eszköz megváltoztatása soha nem módosítja a szomszédait.
- A régebbi IFC2X3-fájlokban a dátumok szövegként íródnak (ÉÉÉÉ-HH-NN); ehhez a verzióhoz külön dátumrekord kellene, amelyet a BimCraft nem ír.

## Érzékelőleolvasások

Nyissa meg az {{ui:Érzékelőértékek}} részt és a {{ui:Leolvasások megnyitása (CSV)…}} gombot, hogy egy épületfelügyeleti rendszerből, adatgyűjtőből vagy táblázatból exportált leolvasásokat hozzon be:

- Az **első oszlop az idő**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` vagy Unix-másodperc. Időzóna nélküli időt a számítógépe saját időzónájában olvassa be. A nap-először dátumok, például `23/10/2026`, nem olvashatók (kétértelműek); ISO-dátumot exportáljon.
- **Minden más oszlop egy érzékelő**, a fejlécében az eszköz **címkéje**, **neve** vagy **GlobalId**-ja áll. Az a fejléc, amely nem egyezik eszközzel vagy több eszközzel is egyezik, listázódik, és kimarad. Az oszlopokat vessző, pontosvessző vagy tabulátor választja el; pontosvesszővel vagy tabulátorral a tizedesvessző (`21,5`) is olvasódik.
- Az olvashatatlan időpontok vagy értékek (szó, vagy a cellába írt mértékegység) számolódnak és kimaradnak, soha nem találgatják ki őket.

A legfrissebb leolvasás a lista {{ui:Leolvasás}} oszlopában és az eszköz {{ui:Érzékelő}} blokkjában jelenik meg, minden leolvasás **diagramjával** (telefonon a diagram addig vár, amíg meg nem érinti a {{ui:A diagram megjelenítése}} gombot). Állítson be egy **alsó és felső határt** és egy mértéket egy eszközön, majd kattintson a {{ui:A határok mentése}} gombra: a határon kívüli leolvasás megjelöli az eszközt. Ha bejelöli a {{ui:Megjelenítés a modellen}} lehetőséget, minden eszköz a leolvasása szerint színeződik: kék az alsó határ alatt, zöld a határokon belül, piros a felső határ felett; a határ nélküli eszközök pedig egyetlen kék skálán, a legalacsonyabb és a legmagasabb leolvasás között. A leolvasás felirat formájában is megjelenik (legfeljebb 60 felirat, a megjelöltek előre).

**A leolvasások ebben a böngészőlapon maradnak**: nem mentődnek az IFC-be, és nem küldődnek sehová; a következő alkalommal nyissa meg újra a CSV-t. A **határok az IFC-ben mentődnek** (egy `CadCraft_Sensor` halmaz az elemen: Low, High, Unit), így a fájlt következőként megnyitó személy ugyanazokat a megjelöléseket látja.

## Élő leolvasások

Az {{ui:Élő hírcsatorna}} a értékeket abban a pillanatban olvassa, ahogy keletkeznek, **közvetlenül ettől a böngészőtől az Ön saját rendszeréig**. Semmi nem halad át a mi szerverünkön, és a böngészőlapon kívül semmi nem tárolódik. Fájl megnyitásakor semmi nem csatlakozik: csak a {{ui:Csatlakozás}} gomb csatlakoztat.

- **MQTT WebSockets felett**: a brókere WebSocket-hallgatójának címe (`wss://broker.example.com:8884/mqtt`), és egy vagy több téma, amelyben `{tag}` helyére az eszköz címkéje kerül, például `site/{tag}/temperature` (a BimCraft a `site/+/temperature` témára iratkozik fel, és az üzenet témájából olvassa ki a címkét). A `{tag}` nélküli témák maguk nevezik meg az érzékelőt. Az üzenet vagy egyszerű szám (`21.5`), vagy JSON, például `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (ha az Öné másképp hívja, állítsa be az {{ui:Értékmező a JSON-ban}} mezőt).
- **Cím kérdezése (HTTP)**: egy webcím, amelyre az épületfelügyeleti rendszere vagy az Ön kis szkriptje válaszol, és amelyet néhány másodpercenként kérdez le (legalább 5 másodpercenként). Válaszolhat JSON-nal címke szerint (`{"AHU-1": 21.5}`), JSON-listával (`[{"tag": "AHU-1", "value": 21.5}]`), vagy a fentihez hasonló leolvasások CSV-jével. Ha nem válaszol, a BimCraft kétszer annyit vár az újabb kérdezés előtt, legfeljebb öt percig.

Minden leolvasás ahhoz az eszközhöz kerül, amelynek címkéjét, nevét vagy GlobalId-ját megnevezi, pontosan úgy, ahogy egy CSV-oszlop; a nem egyező nevek listázódnak. A leolvasások csatlakoznak az {{ui:Érzékelőértékek}} adatokhoz: a lista, a diagramok, a határok és a modellen lévő színek ugyanúgy működnek.

**A jelszava vagy tokenje** egyetlen kapcsolathoz gépelődik be: átadódik a kapcsolatnak, a mező pedig kiürül; soha nem mentődik sem ebben a böngészőben, sem az IFC-ben. A token szabványos `Authorization: Bearer` fejlécként megy, és nem küldődnek sütik.

Az {{ui:E beállítások megőrzése az IFC-ben}} gomb beírja a címet, a témákat, az értékmezőt és a kérdezési gyakoriságot a modellbe (egy `CadCraft_Feed` halmaz a projekten; jelszómező nincs), így a fájlt következőként megnyitó személy csak a saját bejelentkezését írja be, és rákattint a {{ui:Csatlakozás}} gombra. Ne írjon jelszót vagy kulcsot magába a címbe: a felhasználónevet és jelszót tartalmazó cím visszautasításra kerül.

:::note
**Mit igényel a brókere vagy címe.** Egy böngészőoldal csak olyan szerverrel tud beszélni, amely ezt engedi:
- Az oldal biztonságos (https), ezért a böngésző csak `wss://` és `https://` címekhez csatlakozik, kivéve a saját számítógépén (`localhost`), ahol a `ws://` és `http://` teszteléshez működik.
- Egy HTTP-cím engedélyezze az oldal kéréseit (CORS: a `Access-Control-Allow-Origin` fejléc, és az `Authorization` a megengedett fejlécek között, ha tokent használ).
- A legtöbb bróker (Mosquitto, EMQX, HiveMQ és mások) kínál WebSocket-hallgatót; ez gyakran ki van kapcsolva, amíg be nem kapcsolják. A BimCraft az MQTT 3.1.1 protokollt beszéli.
:::

**Nincsenek riasztások**, ha a BimCraft zárva van: a határok csak akkor jelölnek meg egy eszközt, ha a modell nyitva van, és van csatlakoztatott adatfolyam. Az épület éjjel-nappal történő figyeléséhez szerver kell, amelyet a BimCraft nem futtat.

## COBie-táblázat

A **COBie** az az átadási táblázat, amelyet sok tulajdonos és üzemeltető kér (az USA-ban a National BIM Standard, az Egyesült Királyságban a BS 1192-4 adja ki). Nyissa meg a lapon a {{ui:COBie táblázat}} részt:

- A {{ui:Mentés COBie-ként (.xlsx)}} megírja a COBie 2.4 munkalapjait (Contact, Facility, Floor, Space, Type, Component, System, Job, Document és Attribute) a modellből és az eszközadatokból: az épületet, szintjeit és helyiségeit (területek a modell mennyiségeiből), minden eszközt komponensként a sorozatszámával, a beépítés napjával, a garancia kezdetével, címkéjével és vonalkódjával, típusát a gyártóval, a modellel, az élettartammal és a garancia hosszával, az általa tartozó rendszereket, a karbantartási naplót munkákként és a kapcsolt dokumentumokat. Minden komponens hordozza az elem IFC GlobalId-ját. Írja be az e-mail-címét a COBie „létrehozta” oszlopába, vagy hagyja üresen (akkor n/a szerepel). Ami a modellben nincs meg, az **n/a**; a kategóriaoszlopok az IFC-osztályt tartalmazzák, nem OmniClass-kódot.
- A {{ui:COBie táblázat beolvasása…}} visszaolvas egyet, akár a BimCraftból, akár másik programból, és **először minden változást listáz**: melyik eszköz, melyik érték, mire mire változik, és az új dokumentumok. Az {{ui:Alkalmaz}} egy lépésben mindet megírja ({{key:Mod+Z}} visszavonja). A sorok a GlobalId alapján párosodnak, majd a komponens neve alapján. A modellben semmire nem illeszkedő sorok listázódnak, nem kerülnek hozzáadásra.

A táblázatot nem megbízhatónak kezeljük: a képleteket soha nem olvassuk be és nem futtatjuk (csak az utoljára mentett érték), azokat az értékeket, amelyek a garancia végét a kezdete elé tennék, és a webcímnek vagy fájlnévnek nem minősülő dokumentumhivatkozásokat kihagyjuk és megszámoljuk, a nagyon nagy munkafüzeteket pedig visszautasítjuk. A COBie munkái egy típus tervezett munkái, ezért ki vannak írva, de vissza nem olvassuk. A BimCraft által írt táblázatban az a szöveg, amelyet a táblázatkezelő képletnek venne (`=`, `+`, `-` vagy `@` jellel kezdődik), szövegként van megjelölve.

A munkafüzetet a tesztjeinkben független táblázatolvasóval ellenőriztük; COBie-validátoron nem ment át. Ha egy fogadó csapat futtat egyet, jelezze nekünk, mit mond.

## Átadási dokumentumok

Az elkészült épülettel a tulajdonosnak átadott iratok a projekthez tartoznak, nem egy eszközhöz. Az {{ui:Eszközök}} lapon nyissa meg az {{ui:Átadási dokumentumok}} részt:

1. Kattintson az {{ui:Dokumentum hozzáadása}} gombra, válassza ki a típusát (használatbavételi engedély, megfelelőségi igazolás, garancia, kézikönyv, kivitelezési rajzok, egyéb), és írja be a címét, a kiállítás dátumát, a kiállítót és a hivatkozási számát.
2. Adja meg, hol található: webcímként, az IFC mellett tartott fájlnévként, vagy kattintson a {{ui:Fájl csatolása}} gombra.
3. Kattintson a {{ui:Hozzáadás a listához}} gombra. Az {{ui:Szerkesztés}} és az {{ui:Eltávolítás}} módosítja a listát; mindegyik egy visszavonható lépés.

A {{ui:Átadási csomag létrehozása}} gombra egy zip-fájl töltődik le, amely tartalmaz egy borítólapot, amely minden dokumentumot felsorol (ugyanazt a listát, mint a táblázat); a COBie-munkafüzetet (a dokumentumok a Document munkalapon vannak, a Facility-re vonatkozó sorokként); a modellt; és minden csatolt fájlt. Ha egy használatbavételi vagy megfelelőségi igazolás még nincs a listán, a borítólapon név szerint jelöljük, de a csomag így is elkészül.

A csomag modellje a **kivitelezési (as-built) modell**: rögzíti, mely elemeket mérték a helyszínen. Ezzel együtt az `as-built` mappában: a nyilatkozat, minden elem listája az ellenőrzési állapotával, az aktuális rajzkészlet egyetlen PDF-ként (a kivitelezési rajzok), és a rajzváltozási napló, ha a modellből rajzkészletek lettek kiadva. Lásd: [Elemek jelölése ellenőrzöttként vagy helyszíni ellenőrzöttként](topic:verification).

- Az IFC-fájlban minden dokumentum egy IfcDocumentInformation, amely a projekthez kötött (IfcRelAssociatesDocument), címmel, hivatkozással, dátummal, kiállítóval és hellyel, így más programok is listázzák.
- A csatolt fájl a nevével, méretével és SHA-256 kivonatával rögzül. Ha magát a fájlt is a projekttel szeretné megőrizni, használja a {{ui:Projekt mentése kötegként}} lehetőséget (a .ccbundle tartalmazza a modellt és a csatolt fájlokat; megnyitásakor ezek visszaállnak, mindegyik a rögzítése ellen ellenőrizve). Egy sima mentés megkérdezi, melyiket szeretné.
- Egy sima .ifc a rögzítést őrzi meg, nem a fájlt: megnyitás után használja a {{ui:Csatolja újra a fájlt}} gombot. Ugyanazt a fájlt felismeri; egy másik fájl kicseréli a rögzítést.

## CSV

A {{ui:CSV}} minden eszközt az adataival, minden karbantartási bejegyzést és minden dokumentumot egy-egy sorban ment, táblázathoz vagy másik karbantartási programhoz.

:::note
Még nincs elkészítve: egy üzemeltetett szolgáltatás, amely a BimCraft zárt állapotában is tárolja a leolvasásokat és riasztásokat küld, valamint a COBie-munkák visszaolvasása. Lásd: [Még nincs elkészítve](topic:not-built-yet).
:::
