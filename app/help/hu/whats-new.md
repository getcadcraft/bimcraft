---
title: Újdonságok a 0.9 verzióban
summary: Falalakzatok, felosztás, eltolás, nyújtás és rácsra zárolás, alsó szintek a föld alatt, rácsméretek és mérés az alaprajzon, másolt nézetek munkastílusokkal és tolltáblákkal, Jelentés mint, Collada- és Google Earth-export, Scan to BIM, szél- és szeizmikus elemzés, gyantás nyomtatás bővítményei.
keywords: újdonságok, 0.9, kiadási megjegyzések, falalakzatok, téglalap, sokszög, ív, vonalak kiválasztása, körvonal követése, eltolás, csatlakozás, dobozos nyújtás, igazítás és zárolás, falfelosztás, rés, újracsatlakoztatás, rácsra zárolás, növekedés innen, mérés innen, szint hozzáadása alul, alagsor, szintparancs, rácsméretek, mérés az alaprajzon, munkastílus, nézetmásolat, saját másolat, összekapcsolt nézet, tolltábla, nyomtatás a látottak szerint, jelentés mint, léptékbeírás, svg-importálás, elhelyezés alaprajzon, elhelyezés modellben, collada, dae, kmz, google earth, scan to bim, szélteher, szeizmikus, végeselemes, dokumentumok panel, gyantás nyomtatás, újdonságok, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, evakuálás, emberek, sorok, akusztika, utózengés, impulzusválasz, árvíz, szél, földrengés, veszély, életciklus, élettartam, ids, címkék, kimutatások, mozgatás, igazítás, elosztás, kép, háttér, szkennelésből falak, telephely a CivilCraftból, panelrajzok, vázszerkezet, napenergia, pv, felosztás, vrf, fan coil, csőméretezés, kábeltálca, megvilágítás, beton, szeizmikus, szkennelés összevetése, epsg, vetület, dokumentumok, sablon, karbon, költség, energyplus, renderelő motor, megnyitás ebben, usd, glb, unreal, visszavonás, bővítmények, pcf, szimbólumok, üzemek, nyomkövetés, tollak, szalag, projektböngésző, elrendezés
from: 5624fe88
---

Ez változott a BimCraft 0.9 verzióban, a 0.8.1-hez képest. A két fő téma egy valódi falszerszám, valamint olyan nézetek, amelyek úgy viselkednek, ahogy a nagy BIM-programokból érkezők elvárják. Ezek mellett jön a Collada-export, az elektromos eszközöket elhelyező asszisztensek, a Scan to BIM, valamint a szél-, szeizmikus és végeselemes munka az {{ui:Elemzés}} lapon.

## Új

### Falak

- **Teljes alakzatok rajzolása.** A {{ui:Rajzolás}} alatt nyissa meg az {{ui:Alakzatok}} lapot (vagy válasszon alakzatot a Fal sor **Alak** listájából): téglalap, elforgatott téglalap, 3–64 oldalú sokszög, középponttal megadott ív, érintőív, falak kijelölt vonalakra, vagy falak egy kattintott zárt terület körül. A téglalap négy fal, négy összekapcsolt sarokkal és egy visszavonási lépés. Lásd: [Falalakzatok, felosztás, eltolás, nyújtás és zárolás](topic:wall-tools).
- **Rajzolás előtt beállít, utána módosít.** A Fal sorban van az {{ui:Eltolás}} és a {{ui:Csatlakozás}} (vegye ki a jelölést szabadon álló falakhoz). Utána a megrajzolt falakon használja az {{ui:Eltolás}}, a {{ui:Dobozos nyújtás}} és az {{ui:Igazítás és zárolás}} parancsot. Egy mozgatott vagy nyújtott fal megtartja ajtóit, ablakait és méreteit. Minden recept egy visszavonási lépés.
- **Falak vágása.** A {{ui:Felosztás}}, a {{ui:Rés}}, a {{ui:Szabad végek}}, a {{ui:Szakasz törlése}} és az {{ui:Összeillesztés}} kattintásra vagy ott vág falat, ahol egy másik fal keresztezi. Ajtón átvágás nem engedélyezett. Lásd: [Falalakzatok, felosztás, eltolás, nyújtás és zárolás](topic:wall-tools).
- **Falak zárolása rácsvonalakhoz.** Válasszon ki egy rácsvonal menti falat, és jelölje be a {{ui:Zárolás rácshoz}} lehetőséget a {{ui:Tulajdonságok}}ban. A Rács eszköz bekapcsolt állapotában írjon be távolságot a {{ui:Mozgatás}} mezőbe egy kijelölt vonalhoz, és a zárolt falak egy visszavonási lépésben követik.
- **Egy fal alakja.** A {{ui:Tulajdonságok}}ban egy fal tetejét vagy alját csatlakoztathatja tetőhöz, padlóhoz vagy mennyezethez, szerkesztheti homlokzati körvonalát, megdöntheti, vagy falnyílást vághat ajtó vagy ablak nélkül. Lásd: [Fal alakja](topic:wall-shape).
- **A hossz megmondja, melyik vég marad.** A {{ui:Növekedés innen}} határozza meg, hogy a kezdet, a vég vagy a középpont marad helyben a hossz változtatásakor.
- **A hossz és az alaprajzi méret egyezik.** A {{ui:Mérés innen}} (tengelyvonal, belső felület vagy külső felület) vezérli a Hossz mezőt és az alaprajz falméreteit. A tengelyvonalon indul, így az alaprajz falméretei most a tengelyvonalat olvassák, ahol korábban a külső felületet. Módosítsa a Fal sorban, a {{ui:Tulajdonságok}}ban vagy a {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Falak}} menüben.

### Szintek, rácsok és mérés

- **Szint hozzáadása alul.** A {{ui:Szint hozzáadása alul}} a {{ui:Szintek}} panelben a legalsó szint alá ad szintet, azonos magassággal, negatív szintmagassággal (Szint -1, Szint -2). Semmi más nem mozdul. A {{ui:Szintek hozzáadása…}} már negatív magasságot is elfogad, és a SZINT, SZINTEK, EMELET vagy EMELETEK parancs a parancssorba írva megnyitja a {{ui:Szintek hozzáadása…}} párbeszédpanelt; a menükben és a szalagfülekben van {{ui:Szintek}} gomb. Lásd: [Telephelyek, épületek és szintek](topic:site-building-and-levels).
- **Rácsméretek az alaprajzon.** Ha a {{ui:Rács}} eszköz be van kapcsolva, jelölje be a {{ui:Méretek}} lehetőséget: így minden szint alaprajzán megrajzolódik a szomszédos vonalak közötti távolság és a teljes méret a buborékokon túl. Lásd: [Rács méretezése](topic:grid-dimensions).
- **Mérés az alaprajzon.** A {{ui:Mérés}} a {{ui:Rajzolás}} csoportban két kattintás között adja meg a távolságot az X és Y különbséggel. A modellben semmi nem mentődik. Lásd: [Mérés az alaprajzon](topic:measure-on-the-plan).
- **Több oszlop egyszerre.** Válasszon ki oszlopokat egy fallal együtt, és a kijelölés minden fajtát listáz a {{ui:Csak ezek megtartása}} lehetőséggel. Egy kattintás megtartja az oszlopokat, és megmutatja közös mezőiket.
- **Egy megjelenítési egység mindenhol.** A koordináták, mérések, metszetek, lapléptékek, a keretfül terhelései és eredményei, valamint a Problémák szövege az Ön által választott egységet követik. Az exportok SI-egységben maradnak.

### Nézetek, lapok és nyomtatás

- **Munkastílus.** A {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Munkastílus}} alatt választhatja, hogy minden nézetnek saját jegyzete és tolltáblája legyen, vagy megoszthassák azokat. Lásd: [Munkastílus, másolt nézetek, tollak papíron, Jelentés mint és sablonok](topic:working-style).
- **Nézet másolása.** Alaprajzok, mennyezeti alaprajzok, hívások, homlokzatok és metszetek {{ui:Saját másolat}} vagy {{ui:Összekapcsolt}} formában másolhatók; a {{ui:Saját másolattá alakítás}} egy összekapcsoltat függetlenné tesz. Lásd: [Munkastílus, másolt nézetek, tollak papíron, Jelentés mint és sablonok](topic:working-style).
- **Nyomtatás a látottak szerint, vagy tolltáblán át.** A tollfelülírások az IFC-ben a nézettel együtt maradnak, a lapok és PDF-ek pedig úgy rajzolják őket, ahogy a képernyő. Ugyanez a téma lefedi a tolltáblákat.
- **Jelentés mint.** A {{ui:Jelentés mint}} a {{ui:Tulajdonságok}}ban a falként rajzolt lemezt panelként, a tetőt rámpaként írja az IFC-be a kiválasztott osztállyal, és így számolja a kimutatásokban, a mennyiségekben, a Keresésben, a színezés szerint és a problémákban.
- **Szerkesztés homlokzatokon és metszeteken.** Falakat, nyílásokat, szinteket, méreteket és jegyzeteket közvetlenül homlokzatban vagy metszetben rajzolhat és mozgathat, saját lapméretekkel és címblokkokkal. Lásd: [Szerkesztés homlokzatokban és metszetekben](topic:edit-in-elevations).
- **Lapok.** Minden lap lehet fekvő vagy álló. A {{ui:Méretarány beírása}} mező minden elhelyezett nézet léptéklistája mellett ül (1:64, 2:1, 1/4" = 1'). Húzhat egy elhelyezett rajzot, vagy a nyílbillentyűkkel igazíthatja, a {{ui:Formátumok…}} › {{ui:SVG importálása…}} pedig a saját lapterv-kialakítását lapranként kitöltött mezőkkel rendelkező címblokká alakítja. 
- **Könyvtári jóváírások a lapon.** Egy könyvtári elemekkel rendelkező rajzkészlet kap egy könyvtári jóváírások kimutatást, amelyet bármely lapra elhelyezhet. Lásd: [Könyvtári jóváírások](topic:library-credits).

### Könyvtár: elhelyezés

- **Az elhelyezés követi a nézetet.** Az alaprajz nézetben a Könyvtár {{ui:Elhelyezés alaprajzon}} gombot mutat; 3D-ben {{ui:Elhelyezés modellben}} gombot; a felosztásnál osztott gombot {{ui:Elhelyezés alaprajzon}} főművelettel. Mindkét mód ugyanazt az IFC-elemet írja. A Könyvtár kártyát át is húzhatja az alaprajzra vagy a 3D nézetre; tollal vagy ujjal nyomja le, tartsa, majd húzza. Lásd: [Elhelyezés a Könyvtárból](topic:place-from-library).

### Fájlok és asszisztensek

- **Collada és Google Earth.** Az eszköztáron lévő {{ui:Collada}} (a fájl menüben a menüstílusokban) `.dae` fájlt ír, vagy egy `.kmz` fájlt, amely a térképen ott helyezi el a modellt, ahol van. Lásd: [A modell exportálása Collada vagy Google Earth számára](topic:collada).
- **Az asszisztensek elektromos eszközöket helyezhetnek el.** A csatlakoztatott asszisztensnek új eszközei vannak eszközök hozzáadására, listázására, módosítására és törlésére, valamint lámpák beállítására. Az asszisztensek kikapcsolva maradnak, amíg be nem kapcsolja a {{ui:Beállítások}}ban. Lásd: [MI-asszisztens használata a modelljével](topic:assistants).
- **Scan to BIM (bővítmény).** Alapból kikapcsolva, és a Felhőpont-bővítményt igényli. Szintet, falakat, ajtókat és ablakokat javasol a szkennelésből, mindegyiknél a mért eltéréssel; az elfogadás egy visszavonási lépés.

### Elemzés

- **Szél- és szeizmikus telephelyadatok.** Az {{ui:Elemzés}} lapon: szélterhelések az ASCE 7-10 vagy 7-16 szerint merev, zárt épületre, minden szinten egy erővel terhelési esetekként; szeizmikus telephelyadatok USGS-keresésse és a tervezési spektrummal.
- **Szerkezeti utánkövetés és végeselemek.** Betonellenőrzések az ACI 318-19 szerint, az egyenértékű oldalerők az ASCE 7-22 szerint, szintenkénti elmozdulás, födémek és falak lemezként, valamint terhelési kombinációk az ASCE 7 és az EN 1990 szerint. A saját végeselem-motorunk héjakat, tetraédereket és modális analízist végez. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic) és [Vázszerkezet-elemzés](topic:frame-analysis).

### Más bővítmények és dokumentumok

- **Belső világítás (bővítmény).** Világítótesteket helyez el, és a luxértékeket számként írja minden szint alaprajzába, vakítás-becsléssel és nyomtatható jelentéssel.
- **Dokumentumok panel.** A {{ui:Fájl}} › {{ui:Dokumentumok…}} kijelölést és visszaírást kínál zárófájllal, revíziós betűkkel, kiadási állapotokkal és előzményekkel.
- **Régiók és acél.** Dél-afrikai rajz- és építésügyi szabálycsomagok a Szabályozás bővítményben, és 976 brit acélméret a közös szelvénytáblázatban.
- **Ingyenes gyantás nyomtató-bővítmények.** Szeletelő, támasztékok és alap, expozíciós teszt, valamint a GOO, SL1, Chitubox és Anycubic fájlformátumok, mind alapból kikapcsolva.

## Minden alkalmazásban

- Egy gomb vagy vezérlő fölé húzva Bootstrap-súgó jelenik meg.
- Az üres rajzterület kezdő tippjének van bezáró gombja; a BimCraft megjegyzi, hogy bezárta.
- A panel fülsora, ha nem fér ki, most görgethető, és nem vágódik le.
- Ha dokumentum van megnyitva, a böngészőlap címe „<dokumentum> - BimCraft | CadCraft”.
- A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Elrendezés}} alatt az elrendezések legördülő, kétsoros választások.
- A {{ui:Beállítások}} nyelvlistája több nyelvet kínál, mint a 0.8-ban; az angolon kívüli nyelvek gépi vázlatok.

## Javítva

- **A mozgatás működik lépcsőkön,** valamint rámpákon, korlátokon, tetősíkokon, szabadon álló eszközökön, képeken és útvonalakon.
- **A fal húzása már nem torzítja a helyiséget.** A középső fogópont a falat merőlegesen mozgatja, sarkai pedig a csatlakozó falak mentén csúsznak. A régi, szabad mozgatáshoz tartsa lenyomva a {{key:Mod}} billentyűt; a {{ui:Derékszögbe igazítás}} visszaállítja a 90 fokot.
- **Egy csatlakozási csomópontnál végzett vastagság- vagy típusváltás** most zárva tartja a sarkot egy L, egy T, egy három falas csomópont és egy görbe fal mellett.
- **Egy helyiségcsoport mozgatása vagy másolása** a csatlakozó falakat a csoporton kívül csatlakozva tartja.
- **Fal kiválasztása a Rajz kikapcsolt állapotában** már nem okoz hibát a Tulajdonságokban.
- **A render WebGL-re vált,** ha a GPU nem indul el, ahelyett hogy leállna.
- **Az EnergyPlus-ellenőrzés** ismét bekapcsolható.
- **A dokumentumok középre igazított párbeszédpanelként nyílnak meg.** A {{key:Esc}}, az X vagy a halványított oldalra kattintás bezárja.
- **Az {{ui:Alaprajz}}, {{ui:Felosztás}} és {{ui:3D}} gombok** megjelennek, amint modell van megnyitva, nem csak azután, hogy a Rajzolást egyszer bekapcsolta.

## Őszinte korlátok

- Semmit nem nyomtattak valódi hardveren. A gyanta-támasztékok újak és nem bizonyítottak.
- A szél-, szeizmikus, beton- és végeselemes eredmények mérnök számára készült ellenőrző segédeszközök, zárt képletekkel ellenőrizve, nem valódi épületen.
- A világítási becslést a saját nyomkövetésünkkel ellenőriztük, nem más világítási programokkal.
- A dél-afrikai számok nincsenek ellenőrizve.
- Az angolon kívüli nyelvek gépi vázlatok.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon van. A korábbi változások a lap alsó részén, a 0.8 és 0.8.1 szakaszban találhatók.

## Korábbi: 0.8 és 0.8.1

Ez változott a BimCraft 0.8 (2026. november 1.) és 0.8.1 (2026. november 2.) verziójában, a 0.7-hez képest. A BimCraft mostantól választ tud adni egy épületről kérdésekre, és tesztelheti: emberekkel, hanggal, vízzel, széllel és földrengésekkel; és több eszközzel tud rajzolni. A 0.8.1 javítókiadás.

### Új

**Az épület tesztelése**

- **Emberek az épületben.** Az {{ui:Emberek az épületben}} szakasz a bal panelen kiürítést vagy egy átlagos nap érkezéseit futtatja végig a szobáin, ajtóin és lépcsőin. Látja a sorokat ott, ahol az épület szűkül, a helyiségenkénti leghosszabb utat a kijáratig, és hogy mennyi idő alatt jut ki az utolsó személy. Jelölje be a {{ui:Zárva}} lehetőséget egy ajtónál, hogy lássa, mi változik, és jelölje be az {{ui:Emberek megjelenítése a 3D nézetben}} lehetőséget a járók figyeléséhez. A megállapítások a Problémákba kerülnek. Durva tömegmodell tervezési döntésekhez, nem tűzvédelmi tanúsítvány. Lásd: [Emberek sétáltatása az épületen](topic:people-in-the-building).
- **Terem-akusztika, és hallgassa meg.** A {{ui:Helyiségakusztika}} szakasz minden helyiség utózengési idejét oktávsávonként adja (Sabine és Eyring szerint) a méretéből és az Ön által választott burkolatokból, és saját céllal megmondja, mennyi elnyelés kellene a teljesítéshez. A {{ui:Lejátszás ebben a helyiségben}} egy hangot, tapsot, pengetett hangokat vagy saját hangfájlt játszik le a helyiségre számított impulzusválasszal. Az elnyelési adatok tipikus közzétett értékek, amelyeket Ön cserélhet. Lásd: [Terem-akusztika](topic:room-acoustics).
- **Árvíz-, szél- és földrengés-lejtetés.** A {{ui:Veszély lejátszása}} víz emelkedését mutatja a helyiségekben, szélnyomást minden szinten és földrengés által rázott szinteket, alaprajzon vagy homlokzaton idősávval. Egyszerű modellek, feltételezéseik a panelen; nem szabványellenőrzés. Lásd: [Árvíz, szél vagy földrengés lejátszása](topic:hazard-playback).
- **Mi kopik el ötven év alatt.** Az {{ui:Életciklus-nézet}} felsorolja az ablakokat, ajtókat, burkolatokat és a tetőt élettartammal, azzal, hogy mikor cserélik őket, és ha egységenként költséget ír be, az évenkénti költséget és annak jelenértékét. A {{ui:Az ütemterv mentése (CSV)}} kiírja. Az élettartamok tervezési értékek. Lásd: [Mi kopik el ötven év alatt](topic:life-cycle-view).
- **Beton- és szeizmikus ellenőrzések.** Az {{ui:Elemzés}} lap {{ui:Betonelemek}} és {{ui:Szeizmikus terhek}} blokkja a betongerendákat és -oszlopokat ACI 318-19 szerint ellenőrzi, merev födémeken az ASCE 7-22 szerint egyenértékű oldalerőket készít, szintenkénti elmozdulással. Mérnöki átnézésre. Lásd: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic).

**Ellenőrzés és jelentés**

- **Ellenőrzés IDS-sel.** Töltse be az ügyféltől kapott `.ids` fájlt, és lásson minden olyan elemet a Problémákban, amely nem felel meg neki, mielőtt átadja az IFC-t. Nyissa meg a {{ui:Ellenőrzés IDS ellen}} lehetőséget a {{ui:Modellellenőrzések}} alatt. Lásd: [Modell ellenőrzése az ügyfél IDS-e szerint](topic:check-against-ids).
- **Címkék és kimutatások.** Saját címkéket határozhat meg, sok elemre egyszerre állíthatja be, és olyan kimutatásokat készíthet, amelyek oszlopai, szűrői és csoportjai ezeket olvassák; a címkék az IFC-ben maradnak. Lásd: [Címkék és kimutatások](topic:tags-and-schedules).
- **Dokumentumok a modellből.** A {{ui:Dokumentumok a modellből}} egy specifikációs sablont tölt ki a megnyitott IFC-ből, és PDF, Word-dokumentum vagy Markdown formában menti. Lásd: [Dokumentumok a modellből](topic:documents-from-the-model).
- **Szkennelés összevetése a modellel.** Egy megnyitott felhőpont mellett a {{ui:Összehasonlítás}} minden elemet megítél: megépült, részben épült, hiányzik vagy nem érintett, és megmutatja a megépítettségi százalékot. Lásd: [Szkennelés összevetése a modellel](topic:compare-scan-with-model).
- **Karbon és költség.** A Karbon panel egy szerkeszthető tényezőtáblából összegzi a beépített karbont, a Költség panel pedig az árakat a 4D-ütemtervre osztja. A BimCraft-tal érkező tényezők általánosak és ellenőrizetlenként vannak jelölve. Lásd: [Beépített karbon és költség](topic:embodied-carbon-and-5d-cost).
- **Bármely térképvetület.** A {{ui:Mérés}} › {{ui:Koordináta-rendszer…}} EPSG-számot, UTM-zónát, nevet vagy saját vetületi definíciót fogad. Lásd: [Georeferálás bármely vetülettel](topic:georeference-any-projection).

**Rajzolás és szerkesztés**

- **Mozgatás, igazítás és elosztás.** A {{ui:Build}} alatt; a {{key:Shift+M}} indítja a Mozgatást (a sima {{key:M}} továbbra is a Mérés). A Mozgatás a {{key:C}} billentyűvel másol, minden lépés egy visszavonás, és Live TeamWork munkamenetben is utazik. Lásd: [Mozgatás, másolás, igazítás és elosztás](topic:move-align-distribute).
- **Képek az alaprajz alatt.** A {{ui:Build}} › {{ui:Kép}} PNG-, JPEG- vagy WebP-képet helyez egy szint alaprajza alá vagy egy függőleges síkra. A léptéket két ponttal adja meg, és mozgathatja, forgathatja, halványíthatja és zárolhatja. A MarkupCraftban másolt terület a lapja léptékében illeszkedik be. Lásd: [Kép az alaprajz alá](topic:pictures-as-backgrounds).
- **Falak szkennelésből.** Egy megnyitott szkennelés mellett a falak, ajtók és helyiségek javaslatként jönnek, amelyeket egyenként tart meg vagy utasít el, egy visszavonási lépésben. Csak két egymásra merőleges irányban álló falakat talál. Lásd: [Szkennelésből falak](topic:scan-to-walls).
- **Követés, tollak és vázlatlépcső.** A {{ui:Követés}} egy másik szintet szaggatottan mutat az alaprajz alatt, a {{ui:Tollak}} egy nézetben külön vonalvastagságot ad a falaknak, ajtóknak és ablakoknak, a {{ui:Lépcső vázlatból}} pedig a sétavonalból lépcsőt készít. Egy Wavefront OBJ háló megnyílik. Lásd: [Szint követése, tollak és lépcső vázlatból](topic:trace-pens-stairs-obj).
- **Épületek egy cím körül.** A CivilCraft Cím alapján telephelyet talált épületek és telek javaslatként érkeznek; Ön jelöli be, melyiket adja hozzá. Lásd: [Indítás a CivilCraft telephelyéről](topic:site-from-civilcraft).
- **Panelrajzok.** A {{ui:Build}} › {{ui:Panelrajzok}} faszerkezetben vagy könnyűacél-szerkezetben keretezi a falakat, födémeket és tetőket, és vágólistát ment CSV-ként, műhelyrajzokat PDF-ként. Kezdő értékek, nem szerkezeti tervezés. Lásd: [Panelrajzok](topic:panel-drawings).
- **Szimbólumpaletta és növények.** A {{ui:Build}} › {{ui:Szimbólumpaletta}} névvel keresi meg az elektromos és vízvezeték-szimbólumokat; a {{ui:Könyvtár}} {{ui:Növények}} forrása mintegy 400 növényt listáz alaprajzi szimbólumokkal. Lásd: [Szimbólumpaletta](topic:symbol-palette) és [Növény elhelyezése](topic:plant-list).

**Csövek, légcsatornák és energia**

- **Osztott rendszer, VRF és fan coil.** Beltéri és kültéri egységek a csatlakozásaikkal, valamint folyadékvezetékek, amelyeket egy tipikus példaértékekből álló táblázat szerint méreteznek, és Ön módosíthat. Lásd: [Osztott rendszer, VRF és fan coil](topic:split-vrf-fan-coils).
- **Számítások.** A Számítások panel a táppal ellátó csövek és légcsatornák méretét nyomásesés szerint ellenőrzi, a kábeleket tálcákon és csatornákon vezeti, és megmutatja kitöltöttségüket, a megvilágítást pedig IES- vagy EULUMDAT-fájlokból számítja. Az alapértékek jelölve vannak; írja be az Ön szabványának értékeit. Lásd: [Cső-, légcsatorna-, kábel- és fénytechnikai számítások](topic:mep-calculations).
- **PCF-fájlok.** A Cső eszköz **PCF exportálása** lehetőséggel a szakaszokat csőfeszültség- és izometrikus programoknak írja, a visszaolvasott PCF-fájl pedig megrajzolja a csövet. Lásd: [Csőkomponens-fájlok](topic:piping-pcf).
- **Napelem.** Tetőkre vagy a földre helyezett táblákat illeszt, a modellből árnyékolja őket, becsüli az éves energiát, ellenőrzi a sorokat, és egyvonalas diagram adatokat készít. A kezdő modul és a veszteségek általánosak. Lásd: [Napelem](topic:solar-pv).
- **EnergyPlus-fájl.** Az {{ui:EnergyPlus-ellenőrzés}} panel a modellt IDF-ként írja a saját EnergyPlus-programjába. A böngészőben való futtatáshoz egy saját magának üzemeltetett build kell, amelynek címét Ön írja be; a BimCraft nem tartalmazza. Lásd: [Fűtés és hűtés ellenőrzése EnergyPlus-szal](topic:check-with-energyplus).

**Képek és fájlok**

- **Renderelő motor választása.** A {{ui:Render}} rendelkezik egy {{ui:Motor}} választással. A két beépített motorunk (Gyors és Útkövető) marad az alapértelmezés. A {{ui:Megnyitás ebben}} a jelenetet USD- vagy glTF-fájlként menti, az Unreal-projektmappát pedig .zip-ként; a CadCraft Studióban egy bővítmény motort adhat hozzá. Az Unreal-bővítmény, amely a projektet megnyitja, nincs kiadva. Lásd: [Válassza ki, melyik program rajzolja a képet](topic:render-engines).
- **Studio-visszavonás.** A CadCraft Studión belül a BimCraft minden befejezett lépést jelez a Studionak, így a Studio azt az utolsó lépést vonja vissza, amelyet utoljára használt ablakban tett meg. Lásd: [Visszavonás az alkalmazások között](topic:undo-across-apps).
- **Bővítmények a fájlban.** Az IFC rögzíti, mely bővítmények írtak bele, és amikor megnyitja, felajánlja azokat, amelyek nincsenek meg. Lásd: [Bővítmények a fájlban](topic:add-ons-in-your-file).

**Minden alkalmazásban**

- **Csatlakoztassa az MI-jét.** Saját asszisztense a CadCraft Studio csatlakozásán át vezérelheti a BimCraftot, és válaszolhat a modellről szóló kérdésekre, például arra, mely szobák vannak egy adott terület alatt. A Studionak nincs saját MI-je. Lásd: [MI-asszisztens használata a modelljével](topic:assistants).
- **Eszköztársor.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt Tördelés, 2 sor vagy 1 sor választható; a Tördelés az alapértelmezés.
- **Beviteli eszközök.** A érintőpad, toll, 3D egér, vezérlő és MIDI-beállítások minden alkalmazásban közösek.
- **Problémák és Live.** A figyelmeztetési panel és a Live-munkamenetek a régi módon működnek, a fent említett új ellenőrzések a Problémákba táplálnak.
- **Nyelvek.** 54 nyelv, ebből tíz új. Az angolon kívüliek gépi vázlatok, amelyeket anyanyelvi lektor még nem olvasott; a súgótémakörök többnyire angolul vannak.

### Javítva a 0.8.1-ben

- **Szalag + Projektböngésző elrendezés.** A Beszúrás › CAD importálása, a Beszúrás › Kép és a Kezelés › Projektmértékegységek a „Még nincs elkészítve a BimCraftban” üzenetet adta. A Kép most a Kép eszközt nyitja meg, a CAD importálása a {{ui:Build}} › {{ui:Rajzból…}} lehetőséget (DWG, DXF, PDF vagy szkennelés), a Projektmértékegységek pedig a {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Mértékegységek}} lehetőséget nyitja meg. A Mozgatás és az Igazítás a megfelelő eszközt futtatja, a Szint a {{ui:Szintek hozzáadása…}} lehetőséget nyitja, a Fázisok a Felújítási fázisok szakaszt, az Anyagok pedig az anyagkönyvtárat.
- **DWG-osztályok szakasz.** Rossz típusként olvasta; javítva a BimCraftban és a többi DWG-t olvasó alkalmazásban.
- **Nyelv futás közben.** A Studio és a csomagolt kiadások most nyelvet válthatnak újraindítás nélkül. Ezt nem teszteltük minden platformon; jelezze, ha a nyelv nem változik.
- **Archicad-csomag szkript.** Az `archicad_bundle.py`, külön letöltésként, most megtalálja az Archicad útvonalát, 20 másodpercig figyeli a mappát, és a csomag mellett újrapróbálkozik.

### Ebben a verzióban még nincs

- **Biztonsági és tervezési segédeszközök.** Az Emberek az épületben nem tartalmaz épületszabályzatból származó bejárási távolsági korlátot (azt Ön írja be), és nem ellenőrizték kézzel valódi alaprajzon. A akusztikai, életciklus- és veszélyértékek tervezési értékek, nem szabványellenőrzés.
- **Klímajövő és EnergyPlus.** Nincs beépített klímajövő: árvízfuttatáshoz forgatókönyvfájlt tölthet be. A böngészőben futó EnergyPlus-futtatás nem része ennek a kiadásnak.
- **Eszköztársor.** Az Anyagmennyiség „Még nincs elkészítve” marad, mert a BimCraftban nincs anyagmennyiségi lista, és 54 másik szürke szalageszközhöz még nincs mögötte BimCraft-eszköz.
- **Aláírás és platformok.** A Windows-telepítők és a macOS .dmg aláírás nélküliek, ezért a SmartScreen a {{ui:További információ}}, majd a {{ui:Futtatás mindenképp}} lehetőséget mutatja; macOS-en jobb gombbal, majd a {{ui:Megnyitás}} szükséges. Az iPad- és iPhone-változat nem lett újraépítve a 0.8.1-hez.
- **Valódi oldal tesztjei.** Néhány régebbi BimCraft böngészőteszt még bukik a tesztoldalunkon, ahogy a 0.8.1 előtt is bukott.

Minden más a [Még nincs elkészítve](topic:not-built-yet) oldalon van. A korábbi változások a [0.7 újdonságai](topic:whats-new-0-7) oldalon találhatók.
