---
title: Újdonságok a 0.8 és 0.8.1 verzióban
summary: A BimCraft személyek épületen való végigvezetését, hallható helyiségakusztikát, árvíz-, szél- és földrengés-lejátszást, ötvenéves életciklus-nézetet, IDS-ellenőrzéseket, címkéket és kimutatásokat, a mozgatás, igazítás és elosztás eszközeit, képeket az alaprajz alatt, falakat szkennelésből, panelrajzokat, napelemet, osztott és VRF-rendszereket, cső- és kábelméretezést, beton- és szeizmikus ellenőrzéseket, bármilyen térképvetületet, renderelőmotor-választást és Studio-visszavonást ad hozzá; a 0.8.1 javítja a Ribbon-elrendezés szürkített eszközeit.
keywords: újdonságok, kibocsátási jegyzetek, változásnapló, változások, 0.8, 0.8.1, verzió, új funkciók, evakuálás, személyek, sorok, akusztika, utózengési idő, impulzusválasz, árvíz, szél, földrengés, veszély, életciklus, élettartam, ids, címkék, kimutatások, mozgatás, igazítás, elosztás, kép, háttér, szkennelés falakká, telephely a civilcraftból, panelrajzok, vázszerkezet, napelem, pv, osztott, vrf, fan coil, csőméretezés, kábeltálca, megvilágítás, beton, szeizmikus, szkennelés összehasonlítása, epsg, vetület, dokumentumok, sablon, karbon, költség, energyplus, renderelőmotor, megnyitás itt, usd, glb, unreal, visszavonás, kiegészítők, pcf, szimbólumok, növények, követés, tollak, ribbon, projektböngésző, elrendezés
from: 87b03056
---

Ez változott a BimCraft 0.8 (2026-11-01) és 0.8.1 (2026-11-02) verziójában a 0.7-hez képest. A BimCraft mostantól kérdésekre tud válaszolni egy épületről és tesztelni is tudja azt személyekkel, hanggal, vízzel, széllel és földrengésekkel, valamint több eszközzel rajzolhatja meg; a 0.8.1 javítókiadás.

## Új

### Az épület tesztelése

- **Személyek az épületben.** A bal oldali panel {{ui:Emberek az épületben}} szakasza egy evakuálást vagy egy átlagos nap érkezőit vezeti végig a helyiségeken, ajtókon és lépcsőkön. Látja a sorokat ott, ahol az épület szűkül, minden helyiségből a kijáratig vezető leghosszabb utat és azt, mennyi ideig tart az utolsó személynek. Jelölje be a {{ui:Zárva}} opciót egy ajtónál, hogy lássa, mi változik, és a {{ui:Emberek megjelenítése a 3D nézetben}} opciót, hogy nyomon kövesse a gyalogosokat. Az eredmények a Problémákhoz kerülnek. Tervezési döntésekhez készült durva tömegmodell, nem tűzvédelmi tanúsítvány. Lásd [Személyek végigvezetése az épületen](topic:people-in-the-building).
- **Helyiségakusztika, és hallgassa meg.** A {{ui:Helyiségakusztika}} szakasz minden helyiség utózengési idejét megadja oktávsávonként (Sabine és Eyring szerint) a mérete és a kiválasztott felületek alapján; saját céllal megadva pedig megmondja, mennyi elnyelésre volna szükség a célhoz. A {{ui:Lejátszás ebben a helyiségben}} egy hangot, tapsot, pengetett hangokat vagy saját hangfájlt szólaltat meg a helyiségre számolt impulzusválasz segítségével. Az elnyelési értékek tipikus, közzétett értékek, amelyeket érdemes a sajátjára cserélni. Lásd [Helyiségakusztika](topic:room-acoustics).
- **Árvíz-, szél- és földrengés-lejátszás.** A {{ui:Veszélyhelyzet lejátszása}} szintenként a helyiségekbe emelkedő vizet, a szél nyomását minden szinten és a szinteket rázó földrengést jeleníti meg alaprajzon vagy homlokzaton, idősávval. Az egyszerű modellek feltevései a panelen láthatók; nem szabványellenőrzés. Lásd [Árvíz, szél vagy földrengés lejátszása](topic:hazard-playback).
- **Mi kopik el ötven év alatt.** A {{ui:Életciklus-nézet}} felsorolja az ablakokat, ajtókat, felületeket és a tetőt, mindegyikhez az élettartamot és a cserék éveit; ha egységárat ír be, megjeleníti az évenkénti költséget és annak jelenértékét. A {{ui:Az ütemterv mentése (CSV)}} kiírja. Az élettartamok tervezési értékek. Lásd [Mi kopik el ötven év alatt](topic:life-cycle-view).
- **Beton- és szeizmikus ellenőrzések.** Az {{ui:Elemzés}} lap {{ui:Betonrudak}} és {{ui:Szeizmikus terhek}} blokkjai ellenőrzik a betongerendákat és -oszlopokat az ACI 318-19 szerint, és az ASCE 7-22 szerint ekvivalens oldalerőket számolnak merev szintekre, szintenkénti elmozdulással. Mérnöki ellenőrzésre szánva. Lásd [Betonrudak ellenőrzése és szeizmikus terhek számítása](topic:concrete-and-seismic).

### Ellenőrzés és jelentés

- **Ellenőrzés IDS ellen.** Töltse be az ügyféltől kapott `.ids` fájlt, és az IFC átadása előtt a Problémákban látja az összes olyan elemet, amely nem felel meg neki. Nyissa meg a {{ui:Ellenőrzés IDS ellen}} opciót a {{ui:Modellellenőrzések}} alatt. Lásd [Modell ellenőrzése az ügyfél IDS-ével](topic:check-against-ids).
- **Címkék és kimutatások.** Saját címkéket definiálhat, sok elemre egyszerre állíthatja be őket, és olyan kimutatásokat készíthet, amelyek oszlopai, szűrői és csoportjai ezekre hivatkoznak; a címkék az IFC-ben maradnak meg. Lásd [Címkék és kimutatások](topic:tags-and-schedules).
- **Dokumentumok a modellből.** A {{ui:Dokumentumok a modellből}} egy specifikációs sablont tölt ki a megnyitott IFC-ből, és PDF, Word-dokumentum vagy Markdown formátumban menti. Lásd [Dokumentumok a modellből](topic:documents-from-the-model).
- **Szkennelés összehasonlítása a modellel.** Pontfelhő megnyitása mellett a {{ui:Összehasonlítás}} minden elemet megítél: megépült, részben megépült, hiányzik vagy nem érte el, és megmutatja a megépült százalékot. Lásd [Szkennelés összehasonlítása a modellel](topic:compare-scan-with-model).
- **Beépített karbon és költség.** A Karbon panel a beépített karbonlábnyomot egy szerkeszthető tényezőtáblázatból összegzi, a Költség panel pedig az árakat szétosztja a 4D-ütemtervre. A BimCraft-tal érkező tényezők általánosak, és ellenőrizetlennek vannak jelölve. Lásd [Beépített karbon és költség](topic:embodied-carbon-and-5d-cost).
- **Bármilyen térképvetület.** A {{ui:Mérés}} › {{ui:Koordináta-rendszer…}} EPSG-számot, UTM-zónát, nevet vagy saját vetületi definíciót fogad el. Lásd [Georeferálás bármilyen vetülettel](topic:georeference-any-projection).

### Rajzolás és szerkesztés

- **Mozgatás, igazítás és elosztás.** A {{ui:Build}} alatt találhatók; a {{key:Shift+M}} indítja a Mozgatást (a sima {{key:M}} továbbra is a Mérés). A mozgatás a {{key:C}} billentyűvel menet közben másol, minden lépés egy visszavonás, és Live TeamWork-munkamenetben is továbbítódik. Lásd [Mozgatás, másolás, igazítás és elosztás](topic:move-align-distribute).
- **Képek az alaprajz alatt.** A {{ui:Build}} › {{ui:Kép}} PNG-, JPEG- vagy WebP-képet helyez el egy szint alaprajza alá vagy egy függőleges síkra. A léptéket két ponttal állíthatja be, mozgathatja, elforgathatja, halványíthatja és zárolhatja. A MarkupCraftban másolt terület a lapja léptékében illeszkedik be. Lásd [Kép elhelyezése az alaprajz alatt](topic:pictures-as-backgrounds).
- **Falak szkennelésből.** Szkennelés megnyitása mellett a falak, ajtók és helyiségek javaslatként jelennek meg, amelyeket egyenként megtart vagy elutasít, egyetlen visszavonási lépésben. Csak két egymásra merőleges irányú falak találhatók meg. Lásd [Szkennelés átalakítása falakká](topic:scan-to-walls).
- **Követés, tollak és vázlatlépcső.** A {{ui:Követés}} szaggatottan mutat egy másik szintet az alaprajz alatt, a {{ui:Tollak}} egy nézetben adja meg a falaknak, ajtóknak és ablakoknak a saját vonalvastagságukat, a {{ui:Lépcső vázlatból}} pedig egy bejárási vonalból lépcsőt készít. Egy Wavefront OBJ háló megnyílik. Lásd [Szint követése, tollak és lépcső vázlatból](topic:trace-pens-stairs-obj).
- **Épületek egy cím körül.** A CivilCraft Címből telephely funkciója által talált épületek és telek javaslatként érkeznek; a hozzáadandókat bejelöli. Lásd [Indulás a CivilCraft telephelyéből](topic:site-from-civilcraft).
- **Panelrajzok.** A {{ui:Build}} › {{ui:Panelrajzok}} fa vagy könnyűacél falakat, padlókat és tetőket foglal keretbe, a vágólistát CSV-ként, a műhelyrajzokat PDF-ként menti. Kiindulási értékek, nem statikai tervezés. Lásd [Panelrajzok](topic:panel-drawings).
- **Szimbólumpaletta és növények.** A {{ui:Build}} › {{ui:Szimbólumpaletta}} név alapján találja meg az elektromos és vízvezeték-szerelési szimbólumokat; a {{ui:Könyvtár}} {{ui:Növények}} forrása mintegy 400 növényt sorol fel alaprajzi szimbólumokkal. Lásd [Szimbólumpaletta](topic:symbol-palette) és [Növény elhelyezése](topic:plant-list).

### Csövek, légcsatornák és energia

- **Osztott, VRF és fan coil.** Beltéri és kültéri egységek a csatlakozásaikkal, valamint a hűtőközeg-vezetékkészletek típusos példaértékek táblázatából méretezve, amelyeket módosíthat. Lásd [Osztott, VRF és fan coil](topic:split-vrf-fan-coils).
- **Számítások.** A Számítások panel a tápvezetékek és légcsatornák méretét nyomásesés alapján ellenőrzi, a kábeleket tálcákon és csöveken vezeti át, megmutatja a kitöltöttségüket, és IES- vagy EULUMDAT-fájlokból számítja a megvilágítást. Az alapértékek jelölve vannak; írja be az előírása értékeit. Lásd [Cső-, légcsatorna-, kábel- és fényszámítások](topic:mep-calculations).
- **PCF-fájlok.** A Cső eszköz **PCF exportálása** parancsa a vezetékszakaszokat csőfeszültség- és izometrikus programok számára írja ki, a visszaolvasott PCF-fájl pedig megrajzolja a csövet. Lásd [Csőalkatrész-fájlok](topic:piping-pcf).
- **Napelem (PV).** Tömböket helyezhet tetőkre vagy a földre, a modell árnyékolja őket, évi energiatermelést becsül, ellenőrzi a sorokat, és egyvonalas kapcsolási rajz adatait készíti el. A kezdő modul és a veszteségek általánosak. Lásd [Napelem](topic:solar-pv).
- **EnergyPlus-fájl.** Az Ellenőrzés EnergyPlus-szal panel a modellt IDF-fájlként írja ki, hogy a saját EnergyPlus-ában futtassa. Böngészőben való futtatáshoz egy saját maga üzemeltetett buildre van szükség, amelynek címét be kell írni; a BimCraft nem tartalmazza. Lásd [Fűtés és hűtés ellenőrzése EnergyPlus-szal](topic:check-with-energyplus).

### Képek és fájlok

- **Renderelőmotor választása.** A {{ui:Renderelés}} lapon van egy {{ui:Motor}} választás. A két beépített motorunk (Fast és Path tracer) marad az alapértelmezett. A **Megnyitás itt** a jelenetet USD- vagy glTF-fájlként menti, az Unreal projektmappát pedig .zip-ként; a CadCraft Studióban egy kiegészítő új motort adhat hozzá. A projektet megnyitó Unreal-bővítmény nincs kiadva. Lásd [Renderelőmotor kiválasztása](topic:render-engines).
- **Studio-visszavonás.** A CadCraft Studión belül a BimCraft minden befejezett lépést jelez a Studionak, így a Studio az utoljára használt ablakban vissza tudja vonni az utolsó lépést. Lásd [Visszavonás alkalmazások között](topic:undo-across-apps).
- **Kiegészítők a fájlban.** Az IFC rögzíti, mely kiegészítők írtak bele, és megnyitáskor felajánlja azokat, amelyek hiányoznak. Lásd [Kiegészítők a fájlban](topic:add-ons-in-your-file).

### Minden alkalmazásban

- **Csatlakoztassa a saját MI-asszisztensét.** A Studio csatlakozásán keresztül a BimCraftot vezérelheti, és választ kap a modellre vonatkozó kérdésekre, például arra, mely helyiségek esnek egy adott terület alá. A Studionak nincs saját MI-je. Lásd [MI-asszisztens használata a modellel](topic:assistants).
- **Eszköztársorok.** A {{ui:Beállítások}} › {{ui:Általános}} › {{ui:Eszköztársorok}} alatt Burkolás, 2 sor vagy 1 sor közül választhat; a Burkolás marad az alapértelmezés.
- **Beviteli eszközök.** A érintőpad, toll, 3D-egér, vezérlő és MIDI-beállítások minden alkalmazásban közösek.
- **Problémák és Live.** A figyelmeztetési panel és a Live-munkamenetek a korábbiak szerint működnek; a fent felsorolt új ellenőrzések a Problémákba kerülnek.
- **Nyelvek.** 54 nyelv, ebből tíz új. Az angoltól eltérők gépi piszkozatok, amelyeket még nem olvasott anyanyelvi beszélő; a súgótémakörök nagy része angol nyelvű.

## A 0.8.1-ben javítva

- **Ribbon- és Projektböngésző-elrendezés.** A Beszúrás › CAD-import, a Beszúrás › Kép és a Kezelés › Projektmértékegységek korábban ezt írta: „Ez még nincs elkészítve a BimCraftban”. Most a Kép a Kép eszközt nyitja meg, a CAD-import a {{ui:Build}} › {{ui:Rajzból…}} lehetőséget (DWG, DXF, PDF vagy szkennelés), a Projektmértékegységek pedig a {{ui:Beállítások}} › {{ui:Globális}} › {{ui:Mértékegységek}} lehetőséget nyitja meg. A Mozgatás és az Igazítás a megfelelő eszközöket futtatja, a Szint a {{ui:Szintek hozzáadása…}} lehetőséget nyitja, a Fázisok a Felújítási fázisok szakaszt, az Anyagok pedig az anyagkönyvtárat.
- **DWG-osztályok szakasz.** Rossz típusként olvasódott be; javítva a BimCraftban és a DWG-t olvasó többi alkalmazásban.
- **Nyelvváltás futás közben.** A Studio és a csomagolt kiadások újraindítás nélkül tudnak nyelvet váltani. Ezt még nem tesztelték minden platformon; jelezzék, ha a nyelv nem változik.
- **Archicad-csomag szkript.** Az `archicad_bundle.py`, külön letölthető fájl, mostantól megkeresi az Archicad elérési útját, 20 másodpercig figyeli a mappát, és a csomag mellett újrapróbálkozik.

## Ebben a verzióban még nincs

- **Biztonsági és tervezési segédeszközök.** Az Emberek az épületben funkciónak nincs építési szabályzatból származó bejárási távolság-korlátja (a korlátot be kell írni), és nem ellenőrizték kézzel valódi alaprajzon. Az akusztikai, életciklus- és veszélyértékek tervezési értékek, nem szabványellenőrzés.
- **Klímaforgatókönyvek és EnergyPlus.** Nincs beépített klímaforgatókönyv: az árvízfuttatáshoz betölthet egy forgatókönyvfájlt. A böngészőben futó EnergyPlus-futtatás nem része ennek a kiadásnak.
- **Ribbon-elrendezés.** Az Anyagmennyiség-kimutatás (Material Takeoff) „Még nincs elkészítve” állapotban marad, mert a BimCraftban nincs anyagmennyiség-lista, a szalag további 54 szürkített eszközének pedig még nincs mögöttes BimCraft-eszköze.
- **Aláírás és platformok.** A Windows-telepítők és a macOS .dmg fájl nincsenek aláírva, ezért a SmartScreen a {{ui:További információ}} gombot, majd a {{ui:Futtatás mégis}} gombot mutatja, macOS-en pedig jobb gombos kattintás után a {{ui:Nyitott}} gombot kell választani. Az iPad- és iPhone-építés nem lett újraépítve a 0.8.1-hez.
- **Valódi oldalas tesztek.** Néhány régebbi BimCraft-böngészőteszt még mindig hibás a tesztoldalunkon, ahogy a 0.8.1 előtt is.

Minden más a [Még nincs elkészítve](topic:not-built-yet) részben található. A korábbi változások a [0.7 újdonságai](topic:whats-new-0-7) között vannak.
