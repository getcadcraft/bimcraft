---
title: Újdonságok a 0.9-ben (korábbi)
summary: Falformák, felosztás, eltolás, nyújtás és rácshoz zárolás, szintek a föld alatt, rácsméretek és mérés az alaprajzon, másolt nézetek munkastílusokkal és tolltáblázatokkal, Jelentés mint, Collada és Google Earth exportálás, Scan to BIM, szél- és szeizmikus elemzés, gyantanyomtatási bővítmények.
keywords: újdonságok 0.9, korábbi kiadás, újdonságok, 0.9, kiadási jegyzetek, falformák, téglalap, sokszög, ív, vonalak kiválasztása, körvonal nyomkövetése, eltolás, csatlakozás, doboz szerinti nyújtás, igazítás és zárolás, falfelosztás, rés, összeillesztés, zárolás rácshoz, növekedés innen, mérés innen, szint hozzáadása alul, pince, szint parancs, rácsméretek, mérés az alaprajzon, munkastílus, másolt nézet, saját másolat, kapcsolt nézet, tolltáblázat, nyomtatás a látottak szerint, jelentés mint, léptéket írjon be, svg importálás, elhelyezés alaprajzon, elhelyezés modellben, collada, dae, kmz, google earth, scan to bim, szélteher, szeizmikus, végeselem, dokumentumpanel, gyantanyomtatás, újdonságok, changelog, változások, 0.8, 0.8.1, verzió, új funkciók, kiürítés, emberek, sorok, akusztika, utózengési idő, impulzusválasz, árvíz, szél, földrengés, veszély, életciklus, élettartam, ids, címkék, kimutatások, mozgatás, igazítás, elosztás, kép, háttér, scan falakká, telek a civilcraftból, panelrajzok, vázszerkezet, napenergia, pv, felosztás, vrf, fan coil, csőméretezés, kábeltálca, megvilágítás, beton, szeizmikus, scan összehasonlítása, epsg, vetület, dokumentumok, sablon, szén, költség, energyplus, rendermotor, megnyitás innen, usd, glb, unreal, visszavonás, bővítmények, pcf, szimbólumok, növények, követés, tollak, szalag, projektböngésző, elrendezés
from: 816df7f8
---

Ez a BimCraft 0.9-ben a 0.8.1-hez képest megváltozott. A két nagy téma egy valódi falrajzoló eszköz, és olyan nézetek, amelyek úgy viselkednek, ahogy a nagy BIM-programokról érkezők elvárják. Ezek mellett érkezik a Collada-export, az elektromos eszközöket elhelyező asszisztens, a Scan to BIM, valamint a szél-, szeizmikus és végeselemes munka a {{ui:Elemzés}} lapon.

## Új

### Falak

- **Teljes alakzatok rajzolása.** A {{ui:Rajzolás}} részben nyissa meg a {{ui:Alakzatok}} menüt (vagy válasszon alakzatot a fal sor Alakzat listájából): téglalaphoz, elforgatott téglalaphoz, 3–64 oldalú sokszöghöz, középpontos ívhez, érintőíves ívhez, kiválasztott vonalakra helyezett falakhoz vagy egy zárt terület köré épülő falakhoz, amelyen belül kattint. A téglalap négy fal, négy csatlakozó sarokkal, egyetlen visszavonási lépésben. Lásd: [Falformák, felosztás, eltolás, nyújtás és zárolás](topic:wall-tools).
- **Rajzolás előtt állítsa be, utána módosítsa.** A fal sorban van {{ui:Eltolás}} és {{ui:Csatlakozás}} (törölje a jelölést szabadon álló falakhoz). Utána a rajzolt falakon használja az {{ui:Eltolás}}, {{ui:Doboz szerinti nyújtás}} és {{ui:Igazítás és zárolás}} lehetőségeket. A mozgatott vagy nyújtott fal megtartja ajtóit, ablakait és méreteit. Minden recept egyetlen visszavonási lépés.
- **Falak vágása.** A {{ui:Felosztás}}, {{ui:Rés}}, {{ui:Szabad végek}}, {{ui:Szakasz törlése}} és {{ui:Összeillesztés}} egy kattintással vagy ott vág falat, ahol egy másik fal keresztezi. Ajtón keresztül vágni nem lehet. Lásd: [Falformák, felosztás, eltolás, nyújtás és zárolás](topic:wall-tools).
- **Falak zárolása rácsvonalakhoz.** Jelöljön ki egy rácsvonal mentén futó falat, és jelölje be a {{ui:Zárolás rácshoz}} lehetőséget a {{ui:Tulajdonságok}} részben. Ha a Rács eszköz be van kapcsolva, a kiválasztott vonalhoz a {{ui:Mozgatás}} mezőbe írjon be egy távolságot, és a zárolt falak egyetlen visszavonási lépésben követik.
- **Egy fal alakjának beállítása.** Egy fal {{ui:Tulajdonságok}} részében a felső vagy alsó élét tetőhöz, padlóhoz vagy mennyezethez csatolhatja, szerkesztheti a magassági körvonalát, megdöntheti, vagy falnyílást vághat ajtó vagy ablak nélkül. Lásd: [Fal alakja](topic:wall-shape).
- **A hosszúság megmutatja, melyik vég marad helyén.** A {{ui:Növekedés innen}} beállítja, hogy a hosszúság módosításakor a kezdőpont, a végpont vagy a közép maradjon helyén.
- **A hosszúság és az alaprajzi méret egyezik.** A {{ui:Mérés innen}} (tengelyvonal, belső felület vagy külső felület) vezérli a Hosszúság mezőt és az alaprajz falméreteit. Tengelyvonalról indul, ezért az alaprajz falméretei most a tengelyvonalat mutatják, ahol korábban a külső felületet. Módosítsa a fal sorban, a {{ui:Tulajdonságok}} részben vagy a {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Falak}} menüben.

### Szintek, rácsok és mérés

- **Szint hozzáadása alul.** A {{ui:Szintek}} panel {{ui:Szint hozzáadása alul}} lehetősége a legalsó szint alá ad egy szintet, azonos magassággal, negatív magassági szinten (Szint -1, Szint -2). Semmi más nem mozdul. A {{ui:Szintek hozzáadása…}} most negatív magasságokat is elfogad. A parancssorba írt LEVEL, LEVELS, STOREY vagy STOREYS megnyitja a {{ui:Szintek hozzáadása…}} párbeszédpanelt, és a menükben és a szalag lapokon van {{ui:Szintek}} gomb. Lásd: [Telkek, épületek és szintek](topic:site-building-and-levels).
- **Rácsméretek az alaprajzon.** A {{ui:Rács}} eszköz bekapcsolt állapotában jelölje be a {{ui:Méretek}} lehetőséget, hogy minden szint alaprajzán megjelenjen a szomszédos vonalak közötti távolság és a teljes méret a buborékokon túl. Lásd: [Rács méretezése](topic:grid-dimensions).
- **Mérés az alaprajzon.** A {{ui:Mérés}} a {{ui:Rajzolás}} csoportban két kattintás között megadja a távolságot az X és Y különbséggel együtt. A modellben semmi nem mentődik. Lásd: [Mérés az alaprajzon](topic:measure-on-the-plan).
- **Több oszlop egyszerre módosítása.** Jelöljön ki oszlopokat egy fallal együtt, és a kijelölés minden fajtát a {{ui:Csak ezek megtartása}} lehetőséggel mutat. Egy kattintás megtartja az oszlopokat, és megmutatja közös mezőiket.
- **Egy mértékegység mindenhol.** A koordináták, mérések, metszetek, lapléptékek, a keretlap terhelései és eredményei, valamint a Problémák szöveg a kiválasztott mértékegységet követik. Az exportok SI-ben maradnak.

### Nézetek, rajzlapok és nyomtatás

- **Munkastílus.** A {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Munkastílus}} menüben választhat: minden nézetnek saját jegyzetei és tolltáblázatai legyenek, vagy megosztottak legyenek. Lásd: [Munkastílus, másolt nézetek, tollak papíron, jelentés mint és sablonok](topic:working-style).
- **Nézet másolása.** Alaprajzok, mennyezeti alaprajzok, hívások, homlokzatok és metszetek {{ui:Saját másolat}} vagy {{ui:Kapcsolva}} néven másolhatók; a {{ui:Saját másolattá alakítás}} a kapcsolt másolatot önállóvá teszi. Lásd: [Munkastílus, másolt nézetek, tollak papíron, jelentés mint és sablonok](topic:working-style).
- **Nyomtatás a látottak szerint, vagy tolltáblázaton át.** A tollfelülírások az IFC-ben maradnak a nézettel együtt, a rajzlapok és PDF-ek pedig úgy rajzolják őket, ahogy a képernyő. Ugyanez a témakör a tolltáblázatokat is lefedi.
- **Jelentés mint.** A {{ui:Tulajdonságok}} részben a {{ui:Jelentés mint}} egy úttestként rajzolt födémet, egy panelként rajzolt falat vagy egy rámpaként rajzolt tetőt a kiválasztott osztályként ír az IFC-be, és így számolja a kimutatásokban, a Mennyiségekben, a Keresésben, a Színezés szerint lehetőségben és a Problémákban.
- **Szerkesztés homlokzatokban és metszetekben.** Falakat, nyílásokat, szinteket, méreteket és jegyzeteket rajzolhat és mozgathat közvetlenül homlokzatban vagy metszetben, saját rajzlapméretekkel és címsorokkal. Lásd: [Szerkesztés homlokzatokban és metszetekben](topic:edit-in-elevations).
- **Rajzlapok.** Minden rajzlap lehet fekvő vagy álló. Minden elhelyezett nézet mellett a léptéklista mellett van egy {{ui:Írjon be léptéket}} mező (1:64, 2:1, 1/4" = 1'-0"). Az elhelyezett rajzot húzhatja, vagy a nyílbillentyűkkel igazíthatja, a {{ui:Formátumok…}} › {{ui:SVG importálása…}} pedig a saját rajzlaptervezését rajzfejjé alakítja, lapankénti mezőkkel.
- **Könyvtári jóváírások a lapon.** Ha a rajzkészlet könyvtári elemeket tartalmaz, kap egy Könyvtári jóváírások kimutatást, amelyet bármely lapra elhelyezhet. Lásd: [Könyvtári jóváírások](topic:library-credits).

### Könyvtár: elhelyezés

- **Az elhelyezés követi a nézetet.** Az alaprajz nézetben a Könyvtár a {{ui:Elhelyezés alaprajzon}} lehetőséget mutatja, 3D-ben az {{ui:Elhelyezés modellben}} lehetőséget, osztott nézetben pedig egy osztott gombot, amelynek fő művelete az {{ui:Elhelyezés alaprajzon}}. Mindkét mód ugyanazt az IFC-elemet hozza létre. Könyvtári kártyát az alaprajzra vagy a 3D nézetbe is húzhat; tollal vagy ujjal nyomja le és tartsa, majd húzza. Lásd: [Elhelyezés a Könyvtárból](topic:place-from-library).

### Fájlok és asszisztensek

- **Collada és Google Earth.** Az eszköztár {{ui:Collada}} gombja (menüstílusban a Fájl menüben) egy .dae fájlt ír, vagy egy .kmz fájlt, amely a térképen a modell helyére kerül. Lásd: [Modell exportálása Collada formátumban vagy Google Earth-höz](topic:collada).
- **Az asszisztensek elektromos eszközöket is elhelyezhetnek.** A csatlakoztatott asszisztensnek új eszközei vannak elektromos eszközök hozzáadására, listázására, módosítására és törlésére, valamint lámpák beállítására. Az asszisztensek a Beállításokban történő bekapcsolásig ki vannak kapcsolva. Lásd: [Engedje, hogy egy MI-asszisztens dolgozzon a modelljével](topic:assistants).
- **Scan to BIM (bővítmény).** Alapesetben ki van kapcsolva, és a Pontfelhők bővítményt igényli. Egy szkennelésből padlókat, falakat, ajtókat és ablakokat javasol, mindegyiknél a mért eltéréssel; az elfogadás egyetlen visszavonási lépés.

### Elemzés

- **Szél- és szeizmikus telekadatok.** Az {{ui:Elemzés}} lapon: szélterhelés az ASCE 7-10 vagy 7-16 szerint egy merev, zárt épületre, minden szintre ható erővel terhelési esetekként, valamint szeizmikus telekadatok USGS-kereséssel és tervezési spektrummal.
- **Szerkezeti utánkövetés és végeselemek.** Betonellenőrzések ACI 318-19 szerint, egyenértékű oldalirányú erők ASCE 7-22 szerint, szintek közötti elmozdulás, födémek és falak lemezként, valamint terhelési kombinációk ASCE 7 és EN 1990 szerint. A saját végeselem-motorunk héj- és tetraéderelemeket kezel, és modális analízist végez. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek](topic:concrete-and-seismic) és [Keretelemzés](topic:frame-analysis).

### Más bővítmények és dokumentumok

- **Belső megvilágítás (bővítmény).** Világítótesteket helyez el, és a luxértékeket számként írja minden szint alaprajzába, kápráztatás-becsléssel és nyomtatható jelentéssel.
- **Dokumentumpanel.** A {{ui:Fájl}} › {{ui:Dokumentumok…}} kijelölést és visszaírást kínál zárolófájllal, revíziós betűkkel, kiadási állapotokkal és előzményekkel.
- **Régiók és acél.** Dél-afrikai rajz- és építésügyi szabályozási csomagok a Szabályozás bővítményben, és 976 brit acélméret a közös szelvénytáblázatban.
- **Ingyenes gyantanyomtatási bővítmények.** Szeletelő, tartók és alaplemez, expozíciós teszt, valamint a GOO, SL1, Chitubox és Anycubic fájlformátumok; mind alapesetben ki van kapcsolva.

## Minden alkalmazásban

- Gomb vagy vezérlő fölé húzva Bootstrap-eszköztipp jelenik meg.
- Az üres rajzterület kezdő tippjének van bezáró gombja; a BimCraft megjegyzi, ha bezárták.
- Egy panel lapsora, ha nem fér ki, most görgethető, nem vágódik le.
- Dokumentum megnyitásakor a böngészőlap ezt mutatja: „<dokumentum> - BimCraft | CadCraft”.
- A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés}} menüben az elrendezések két soros választásokat tartalmazó legördülő listát alkotnak.
- A {{ui:Beállítások}} nyelvlistája több nyelvet kínál, mint a 0.8-ban; az angolon kívüli nyelvek gépi piszkozatok.

## Javítva

- **A Mozgatás működik lépcsőkön,** valamint rámpákon, korlátokon, tetősíkokon, szabadon álló eszközökön, képeken és útvonalakon.
- **Falhúzás már nem torzítja a helyiséget.** A középső fogópont a falat önmagához képest derékszögben mozgatja, sarkai pedig a csatlakozó falak mentén csúsznak. A régi szabad mozgatáshoz tartsa lenyomva a {{key:Mod}} billentyűt; a {{ui:Derékszögbe igazítás}} visszaadja a 90 fokot.
- **Vastagság- vagy típusváltás csatlakozó csomópontnál** most zárva tartja a sarkot L-alakban, T-alakban, háromfalas csomópontnál és görbe fal mellett.
- **Helyiségcsoport mozgatása vagy másolása** a csoporton kívüli csatlakozó falakat csatlakoztatva hagyja.
- **Az ismétlés megtartja a falméret azonosságát.**
- **Falkiválasztás Rajzolás nélkül** már nem okoz hibát a Tulajdonságokban.
- **A renderelés WebGL-re vált,** ha a GPU nem indul el, ahelyett hogy leállna.
- **Az EnergyPlus-ellenőrzés** ismét bekapcsolható.
- **A Dokumentumok központi párbeszédpanelként nyílik meg.** Az {{key:Esc}}, az X vagy a halványított oldalra kattintás bezárja.
- **Az {{ui:Alaprajz}}, {{ui:Felosztás}} és {{ui:3D}} gombok** megjelennek, amint modell van megnyitva, nem csak miután a Rajzolást egyszer bekapcsolták.

## Őszinte korlátok

- Valódi hardveren nem nyomtattunk. A gyantatartók újak, és nincs bizonyításuk.
- A szél-, szeizmikus, beton- és végeselemes eredmények mérnöknek szóló ellenőrző segédeszközök, zárt képletekkel ellenőrizve, nem valódi épületen.
- A Scan to BIM egy szintetikus épületen lett tesztelve, nem valódi szkennen, és csak derékszögű helyiségeket talál.
- A Collada-fájlt itt nem nyitották meg Blenderben vagy Google Earth-ben.
- A megvilágítás-becslés a saját nyomkövetésünkhöz van ellenőrizve, nem más világítási programokhoz.
- A dél-afrikai számok nincsenek ellenőrizve.
- A falcsatlakozási stílusok (tompa, gérvágás, derékszögű lezárás) és a rétegprioritás még nincs elkészítve; a sarkok gérvágással készülnek.
- Az angolon kívüli nyelvek gépi piszkozatok.

Minden más a [Mi még nincs elkészítve](topic:not-built-yet) oldalon található. A korábbi változások az oldal alsó részén lévő 0.8 és 0.8.1 jegyzetekben vannak.

## Korábbi: 0.8 és 0.8.1

Ez a BimCraft 0.8-ban (2026. november 1.) és 0.8.1-ben (2026. november 2.) a 0.7-hez képest megváltozott. A BimCraft mostantól válaszolhat egy épületre vonatkozó kérdésekre, és tesztelheti az épületet emberekkel, hanggal, vízzel, széllel és földrengéssel, továbbá több eszközzel rajzolhatja meg; a 0.8.1 hibajavító kiadás.

### Új

**Az épület tesztelése**

- **Emberek az épületben.** A bal panel {{ui:Emberek az épületben}} része végigvezeti a kiürítést vagy egy átlagos nap érkezéseit a szobáin, ajtóin és lépcsőin át. Látja a sorokat ott, ahol az épület szűkül, a leghosszabb utat bármely helyiségből a kijáratig és az utolsó személy idejét. Jelölje be a {{ui:Zárva}} lehetőséget egy ajtón, hogy lássa, mi változik, és az {{ui:Emberek megjelenítése a 3D nézetben}} lehetőséget, hogy nyomon kövesse a járókat. Az eredmények a Problémákba kerülnek. Ez egy durva tömegmodell tervezési döntésekhez, nem tűzvédelmi tanúsítvány. Lásd: [Járjon végig embereket az épületen](topic:people-in-the-building).
- **Helyiségakusztika, és hallgassa meg.** A {{ui:Helyiségakusztika}} rész minden helyiségre oktávsávonként megadja az utózengési időt (Sabine és Eyring szerint) a méretéből és a választott burkolatokból, és saját célérték megadásával megmondja, mennyi elnyelés kellene a teljesüléséhez. A {{ui:Lejátszás ebben a helyiségben}} egy beszédet, tapsot, pengetett hangokat vagy saját hangfájlt játszik le a helyiségre számolt impulzusválaszon át. Az elnyelési értékek jellemző közzétett értékek, amelyeket Ön cserélhet. Lásd: [Helyiségakusztika](topic:room-acoustics).
- **Árvíz-, szél- és földrengés-lejátszás.** A {{ui:Veszélyhelyzet lejátszása}} a szobákban emelkedő vizet, a szintenkénti szélnyomást és a szinteket rázó földrengést játssza le alaprajzon vagy homlokzaton, idővonallal. Az egyszerű modellek feltételezéseit a panel mutatja; nem építési előírás szerinti ellenőrzés. Lásd: [Árvíz, szél vagy földrengés lejátszása](topic:hazard-playback).
- **Mi kopik el ötven év alatt.** Az {{ui:Életciklus-nézet}} felsorolja az ablakokat, ajtókat, burkolatokat és a tetőt, mindegyikhez élettartammal, a cseréjük éveivel és — ha egységenkénti költséget ír be — az évenkénti költséggel és annak jelenértékével. Az {{ui:Az ütemterv mentése (CSV)}} kiírja. Az élettartamok tervezési értékek. Lásd: [Mi kopik el ötven év alatt](topic:life-cycle-view).
- **Beton- és szeizmikus ellenőrzések.** Az {{ui:Elemzés}} lap {{ui:Betonrudak}} és {{ui:Szeizmikus terhek}} blokkjai betongerendákat és -oszlopokat ellenőriznek ACI 318-19 szerint, merev födémeken ASCE 7-22 szerinti egyenértékű oldalirányú erőket számolnak, szintek közötti elmozdulással. Mérnöki ellenőrzésre. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek](topic:concrete-and-seismic).

**Ellenőrzés és jelentés**

- **Ellenőrzés IDS ellen.** Töltse be az ügyféltől kapott `.ids` fájlt, és az IFC átadása előtt a Problémákban lássa minden olyan elemet, amely nem felel meg neki. Nyissa meg az {{ui:Ellenőrzés IDS ellen}} lehetőséget a {{ui:Modellellenőrzések}} alatt. Lásd: [Modell ellenőrzése az ügyfél IDS-ével](topic:check-against-ids).
- **Címkék és kimutatások.** Saját címkéket határozhat meg, sok elemre egyszerre állíthatja őket, és olyan kimutatásokat készíthet, amelyek oszlopai, szűrői és csoportjai ezekre épülnek; a címkék az IFC-ben maradnak. Lásd: [Címkék és kimutatások](topic:tags-and-schedules).
- **Dokumentumok a modellből.** A {{ui:Dokumentumok a modellből}} egy specifikációs sablont tölt ki a megnyitott IFC-ből, és PDF, Word-dokumentum vagy Markdown formátumban menti. Lásd: [Dokumentumok a modellből](topic:documents-from-the-model).
- **Szkennelés összehasonlítása a modellel.** Ha egy pontfelhő van megnyitva, a {{ui:Összehasonlítás}} minden elemet megítél: megépült, részben épült, hiányzik vagy nem érte el, és megmutatja a megépült százalékot. Lásd: [Szkennelés összehasonlítása a modellel](topic:compare-scan-with-model).
- **Szén és költség.** A Szén panel egy szerkeszthető tényezőtáblázatból összesíti a beépített szenet, a Költség panel pedig az árakat a 4D ütemtervre osztja szét. A BimCraft-tal érkező tényezők általánosak, és ellenőrizetlenként vannak jelölve. Lásd: [Beépített szén és költség](topic:embodied-carbon-and-5d-cost).
- **Bármilyen térképvetület.** A {{ui:Mérés}} › {{ui:Koordináta-rendszer…}} EPSG-számot, UTM-zónát, nevet vagy saját vetületi definíciót fogad el. Lásd: [Georeferálás bármely vetülettel](topic:georeference-any-projection).

**Rajzolás és szerkesztés**

- **Mozgatás, igazítás és elosztás.** A {{ui:Build}} alatt; a {{key:Shift+M}} indítja a Mozgatást (a sima {{key:M}} továbbra is a Mérés). A mozgatás a {{key:C}} billentyűvel másol, minden lépés egy visszavonás, és egy Live TeamWork-munkamenetben is működik. Lásd: [Mozgatás, másolás, igazítás és elosztás](topic:move-align-distribute).
- **Képek az alaprajz alatt.** A {{ui:Build}} › {{ui:Kép}} PNG, JPEG vagy WebP képet helyez egy szint alaprajza alá vagy függőleges síkra. A méretarányt két ponttal állítsa be; mozgassa, forgassa, halványítsa és zárolja. A MarkupCraftban másolt terület a lap méretarányában illeszkedik be. Lásd: [Kép az alaprajz alá helyezése](topic:pictures-as-backgrounds).
- **Falak szkennelésből.** Egy szkennelés megnyitásakor a falak, ajtók és helyiségek javaslatként jelennek meg, amelyeket egyenként megtart vagy elutasít, egyetlen visszavonási lépésben. Csak két egymásra merőleges irányú falat talál. Lásd: [Szkennelés falakká alakítása](topic:scan-to-walls).
- **Nyomvonal, tollak és lépcső vázlatból.** A {{ui:Követés}} egy másik szintet szaggatottan mutat az alaprajz alatt, a {{ui:Tollak}} egy nézetben önálló vonalvastagságot ad a falaknak, ajtóknak és ablakoknak, a {{ui:Lépcső vázlatból}} pedig a járási vonalból lépcsőt készít. Egy Wavefront OBJ háló is megnyitható. Lásd: [Szint követése, tollak és lépcső vázlatból](topic:trace-pens-stairs-obj).
- **Épületek egy cím körül.** A CivilCraft „Address to site” funkciója által megtalált épületek és telek javaslatként érkeznek; kijelöléssel adja hozzá őket. Lásd: [Indulás a CivilCraft telkéből](topic:site-from-civilcraft).
- **Panelrajzok.** A {{ui:Build}} › {{ui:Panelrajzok}} fa vagy könnyűacél falakat, padlókat és tetőket keretez, a vágólistát CSV-ben, a műhelyrajzokat PDF-ben menti. Kiindulási értékek, nem szerkezeti tervezés. Lásd: [Panelrajzok](topic:panel-drawings).
- **Szimbólumpaletta és növények.** A {{ui:Build}} › {{ui:Szimbólumpaletta}} név szerint keres villamos és vízvezeték-szimbólumokat; a {{ui:Könyvtár}} {{ui:Növények}} forrása mintegy 400 növényt sorol fel alaprajzi szimbólumokkal. Lásd: [Szimbólumpaletta](topic:symbol-palette) és [Növény elhelyezése](topic:plant-list).

**Csövek, csatornák és energia**

- **Split, VRF és fan coil.** Beltéri és kültéri egységek a csatlakozásaikkal, a hűtőközeg-vezetékek pedig egy táblázat példaértékei alapján méretezve, amelyeket Ön módosíthat. Lásd: [Split, VRF és fan coil](topic:split-vrf-fan-coils).
- **Számítások.** A Számítások panel a tápvezeték- és csatornaméreteket nyomásesésre ellenőrzi, a kábeleket tálcákon és csatornákon vezeti át és megmutatja kitöltöttségüket, IES vagy EULUMDAT fájlokból pedig megvilágítást számol. Az alapértékek jelölve vannak; írja be előírásának értékeit. Lásd: [Cső-, csatorna-, kábel- és fényszámítások](topic:mep-calculations).
- **PCF-fájlok.** A Cső eszköz **PCF exportálása** lehetősége a vezetékeket csővezeték-feszültség- és izometrikus programoknak írja, a visszaolvasott PCF-fájl pedig megrajzolja a csövét. Lásd: [Csőkomponens-fájlok](topic:piping-pcf).
- **Napelemes PV.** Tetőkre vagy a földre illesszen tömböket, árnyékolja őket a modellből, becsülje az éves energiát, ellenőrizze a sorokat, és készítsen egyvonalas kapcsolási rajz adatokat. A kezdő modul és a veszteségek általánosak. Lásd: [Napelemes PV](topic:solar-pv).
- **EnergyPlus-fájl.** Az EnergyPlus-ellenőrzés panel a modellt IDF-ként írja, hogy saját EnergyPlus-ban futtassa. Böngészőben való futtatáshoz saját magának kell felállítania egy buildet, és megadnia a címét; a BimCraft nem tartalmazza. Lásd: [Fűtés és hűtés ellenőrzése EnergyPlus-szal](topic:check-with-energyplus).

**Képek és fájlok**

- **A renderelő motor kiválasztása.** A {{ui:Renderelés}} párbeszédpanelen van egy {{ui:Motor}} választás. A két beépített motorunk (Gyors és Útkövető) marad az alapértelmezett. A **Megnyitás ebben** a jelenetet USD vagy glTF fájlként menti, az Unreal projektmappát pedig .zip fájlként; a CadCraft Studio-ban egy bővítmény motort adhat hozzá. Az Unreal-bővítmény, amely a projektet megnyitja, nincs kiadva. Lásd: [Válassza ki, melyik program rajzolja a képet](topic:render-engines).
- **Visszavonás a Studióban.** A CadCraft Studio-n belül a BimCraft minden befejezett lépést jelez a Studio-nak, így a Studio az utoljára használt ablakban visszavonhatja az utolsó lépést. Lásd: [Visszavonás alkalmazások között](topic:undo-across-apps).
- **Bővítmények a fájlban.** Egy IFC rögzíti, mely bővítmények írtak bele, és megnyitáskor felajánlja azokat, amelyek hiányoznak. Lásd: [Bővítmények a fájlban](topic:add-ons-in-your-file).

**Minden alkalmazásban**

- **Csatlakoztassa a saját MI-jét.** A saját asszisztense a Studio kapcsolatán át vezérelheti a BimCraftot, és válaszolhat a modellre vonatkozó kérdésekre, például hogy mely helyiségek esnek egy adott terület alá. A Studio-nak nincs saját MI-je. Lásd: [Engedje, hogy egy MI-asszisztens dolgozzon a modelljével](topic:assistants).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} menüben Tördelés, 2 sor vagy 1 sor közül választhat; alapértelmezés a Tördelés.
- **Beviteli eszközök.** A trackpad, a toll, a 3D egér, a vezérlő és a MIDI beállításai minden alkalmazásban közösek.
- **Problémák és Live.** A figyelmeztetési panel és a Live-munkamenetek a régi módon működnek, az új ellenőrzésekkel, amelyek a Problémákat táplálják.
- **Nyelvek.** 54 nyelv, ebből tíz új. Az angolon kívüli nyelveket anyanyelvi lektor még nem olvasta át; a súgótémakörök többsége angol.

### Javítva a 0.8.1-ben

- **Szalag és Projektböngésző elrendezés.** A Beszúrás › CAD importálása, a Beszúrás › Kép és a Kezelés › Projektmértékegységek a „Még nincs elkészítve a BimCraftban” üzenetet adta. Most a Kép a Kép eszközt nyitja meg, a CAD importálása a {{ui:Build}} › {{ui:Rajzból…}} lehetőséget (DWG, DXF, PDF vagy szkennelés), a Projektmértékegységek pedig a {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Mértékegységek}} lehetőséget. A Mozgatás és az Igazítás a saját eszközét futtatja, a Szint a {{ui:Szintek hozzáadása…}} lehetőséget, a Fázisok a felújítási fázisok részt, az Anyagok pedig az anyagkönyvtárat nyitja meg.
- **DWG-osztályok szakasz.** Rossz típusként olvasta; javítva a BimCraftban és a többi, DWG-t olvasó alkalmazásban.
- **Nyelv futás közben.** A Studio és a csomagolt kiadások mostantól újraindítás nélkül válthatnak nyelvet. Ezt még nem tesztelték minden platformon; jelezze, ha a nyelv nem változik.
- **Archicad-csomag szkript.** Az `archicad_bundle.py`, külön letöltés, most megtalálja az Archicad elérési útját, 20 másodpercig figyeli a mappát, és a csomag mellett újrapróbálkozik.

### Ebben a verzióban még nincs

- **Biztonsági és tervezési segédeszközök.** Az Emberek az épületben nem ismer építési előírásból származó bejárási távolságkorlátot (Ön írja be a korlátot), és valódi terven nem lett kézzel ellenőrizve. Az akusztikai, életciklus- és veszélyhelyzeti értékek tervezési értékek, nem építési előírás szerinti ellenőrzés.
- **Klímajövő és EnergyPlus.** Nincs beépített klímajövő: az árvíz-futtatáshoz betölthet egy forgatókönyv-fájlt. A böngészős EnergyPlus-futtatás nem része ennek a kiadásnak.
- **Szalagkiosztás.** Az Anyagmennyiség-kimutatás „Nincs elkészítve” marad, mert a BimCraftnak nincs anyagmennyiség-listája, és 54 további, szürkített szalageszköz mögött még nincs BimCraft-eszköz.
- **Aláírás és platformok.** A Windows-telepítők és a macOS .dmg nincsenek aláírva, ezért a SmartScreen a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} gombot mutatja, macOS-en pedig jobb klikk, majd {{ui:Nyitott}} szükséges. Az iPad- és iPhone-build nem lett újraépítve a 0.8.1-hez.
- **Valódi oldalas tesztek.** Néhány régebbi BimCraft-böngészős teszt még mindig elbukik a tesztoldalunkon, ahogy a 0.8.1 előtt is.

Minden más a [Mi még nincs elkészítve](topic:not-built-yet) oldalon található. A korábbi változások a [Újdonságok a 0.7-ben](topic:whats-new-0-7) oldalon vannak.
