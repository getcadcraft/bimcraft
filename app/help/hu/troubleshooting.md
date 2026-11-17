---
title: Hibaelhárítás
summary: A BimCraft által megjelenített üzenetek, azok okai és teendőik fájlok és mappák megnyitásához, 3D-modellekhez, rajzokhoz és szerkesztésekhez.
keywords: probléma, hiba, nem működik, nem nyitható meg, sikertelen, hiányos, sérült, lassú, összeomlás, üres, hiányzik, üzenet, súgó
from: 1e5a79fc
---

Az üzenetek a színpad alján lévő állapotsorban jelennek meg, sikertelenség esetén pirossal. Keresse meg az alábbi üzenetet.

## Fájlok megnyitása

**"*name* nem IFC, RVT, RFA, DWG vagy DXF fájl."**
A BimCraft nem ismerte fel a fájlt. Ellenőrizze a kiterjesztést, és hogy a fájl nem üres. A PDF-ek, képek és irodai fájlok nem nyílnak meg.

**".ifczip még nem támogatott. Mentse vagy exportálja a modellt sima .ifc fájlként."** (`.ifcxml` esetén is)
Csomagolja ki az `.ifczip` fájlt (ez egy szokványos zip, amely egy `.ifc` fájlt tartalmaz), vagy exportáljon sima IFC-t.

**"… a BimCraft még nem olvassa ezt a projektfájlt."**
Egy `.pln`, `.pla`, `.tpl` vagy `.bpn` fájl. Exportáljon belőle IFC vagy DWG fájlt, és azt nyissa meg: lásd: [.pln és .pla projektfájlok megnyitása](topic:pln-project-files).

**"Ez az IFC-fájl nem olvasható."**
Az IFC-fájl sérült, vagy nem valódi IFC. Szövegszerkesztőben nyissa meg: egy valódi IFC-fájl `ISO-10303-21;` sorral kezdődik. Exportálja újra.

**"Ez a fájl hiányos: … MB, de a saját indexe legalább … MB-ig terjedő adatra mutat. …"**
A projekt- vagy családfájl a másolás, feltöltés vagy szinkronizálás közben csonkolódott. A felhőmeghajtón „csak online” állapotú fájl ugyanígy néz ki. Önmagában megnyitott fájl továbbra is megnyílik, a kártya tetején ezzel az üzenettel: „Az visszaállított részek látszanak; a teljes modellhez másolja újra az eredetit.” A kártya csak azokat a részeket mutatja, amelyek minden bájtja a fájlban van, a többit pedig a **Nincs a fájlban** alatt sorolja fel. Tegye elérhetővé a fájlt offline a felhőmeghajtón, vagy másolja újra az eredetit, és nyissa meg újra. Mappában a BimCraft a legújabb teljes biztonsági másolatot mutatja.

**"… A fájl saját tartalomjegyzéke is a hiányzó részben van, így abból semmi nem nyitható meg."**
A fájl olyan korán csonkolódott, hogy a tartalomjegyzéke sincs meg. Ebből a példányból nem állítható vissza semmi. Másolja újra az eredetit, és nyissa meg újra.

**"Ez az összetett fájl nem tartalmaz BasicFileInfo adatfolyamot, így nem Revit-fájl."**
A fájl más típusú összetett fájl (a régi irodai dokumentumok ugyanezt a tárolót használják). Ellenőrizze, hogy a helyes fájlt választotta-e.

**"Még az előzőt dolgozom fel…"**
A BimCraft még az előző fájllal vagy mappával foglalkozik. Várja meg, míg az állapotsor befejeződik, majd próbálja újra.

**A fájlválasztó kiszürkíti a fájlomat.**
A választó csak `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` és `.dxf` fájlokat kínál. Húzza a többi fájlt az oldalra, és a BimCraft megmondja, hogy képes-e olvasni őket.

## Mappák megnyitása

**"Ez a mappa több mint 20 000 fájlt tartalmaz. Válasszon kisebb mappát, például egy projektet."**
Túl magas szintű mappát választott, például egy teljes meghajtót. Válasszon egy projektmappát.

**"A böngésző nem adott hozzáférést ehhez: *name*. Válassza ki újra a Mappa megnyitása lehetőséggel."**
A {{ui:Újranyitás}} gombra kattintott egy legutóbbi mappán, és a böngésző jogosultságát megtagadták, vagy lejárt. Válassza ki újra a mappát, vagy húzza be.

**A böngésző azt írja, hogy fájlokat „fog feltölteni”.**
Ez a böngésző saját megfogalmazása a fájlok oldalnak átadására. A BimCraft nem küld sehová semmit. Húzza be a mappát, hogy elkerülje a kérdést.

**Telefonon vagy táblagépen nem történik semmi.**
Sok mobilböngésző nem tud mappát választani. Nyisson meg egyes fájlokat, vagy használjon számítógépet.

## Az IFC-motor első betöltése

**Az állapotsor az **„IFC-motor indítása…”** szövegnél marad, vagy olyan hiba jelenik meg, mint a „Failed to fetch”.**
Az IFC-motort nem sikerült letölteni. Lehet, hogy offline van, vagy tűzfal, illetve tartalomblokkoló állítja le.

:::offline
Offline van. Ha az alkalmazássáv gombja nem ezt mondja: {{ui:Offline használatra kész}}, az IFC-motort ebben a böngészőben soha nem mentették el. Csatlakozzon újra, nyissa meg újra a fájlt, majd kattintson erre: {{ui:Mentés offline használatra}}, hogy legközelebb offline is működjön. Lásd: [Online és offline](topic:online-offline).
:::

:::online
Töltse újra az oldalt, és próbálja újra. Munkahálózaton kérje meg az informatikai csapatot, hogy engedélyezze az oldal `.wasm` fájljait.
:::

## Mentés offline használatra

**A gomb szövege: {{ui:Nem sikerült menteni}}.**
Néhány fájl nem töltődött le, általában azért, mert megszakadt a kapcsolat. Ellenőrizze a kapcsolatát, és kattintson újra a gombra. Az esetleges korábbi offline másolat megmarad, amíg az új teljesen el nem készül.

**A gomb szövege: {{ui:Az offline mód nem érhető el}}.**
Ez az ablak nem tud offline másolatot tartani, például privát ablak vagy felügyelt munkagép esetén. Lásd: [Munka offline módban](common:offline).

**A gomb sokáig „Mentés *n* / *m*” állapotban marad.**
A BimCraft másolata körülbelül 11 MB, ennek nagy része az IFC-motor. Tartsa nyitva a lapot, amíg meg nem jelenik: {{ui:Offline használatra kész}}.

**A BimCraft offline nyílt meg, de elavultnak tűnik.**
Az elmentett másolat egy korábbi látogatásból származik. Ha van kapcsolat, kattintson erre: {{ui:Offline használatra kész}}, és válassza ezt: {{ui:Mentés újra (a legújabb verzió beszerzése)}}.

## 3D-nézet

**A modell nincs ott, ahol vártam, vagy apró.**
Nyomja meg az {{key:F}} billentyűt, vagy kattintson erre: {{ui:Illesztés}}. Az illesztés mindig mindent a keretbe foglal, beleértve a kipipálatlan szinteket és az épülettől távoli, elszórt elemeket is, így az épület kicsinek tűnhet. Innen nagyítson rá.

**A kattintás nem jelöl ki semmit.**
Kattintás közben tartsa mozdulatlanul az egeret: egy kis húzás forgat. A kipipálatlan szintek elemei nem jelölhetők ki. Ha a {{ui:Terek}} be van kapcsolva, az áttetsző terek előbb kerülnek kijelölésre, mint ami bennük van.

**A {{ui:Élek}} gomb szürke: „Az élek ki vannak kapcsolva nagyon nagy modelleknél”.**
A modellnek 1,5 millió háromszögnél több van. Az élek a memória kímélése érdekében ki vannak kapcsolva.

**A lap lelassul, fehér lesz, vagy megjelenik a böngésző összeomlási oldala.**
A modell nagyobb, mint amennyi memóriát a böngésző a lapnak ad. Zárja be a többi lapot, és töltse újra az oldalt. Exportáljon kisebb IFC-t: egy épületet, egy szakágat vagy kevesebb szintet. Lásd: [Böngészők, eszközök és memória](topic:platforms).

**A 3D-nézet üres marad.**
A WebGL ki lehet kapcsolva vagy blokkolva. A böngésző beállításaiban kapcsolja be a hardveres gyorsítást (vagy grafikus gyorsítást), majd indítsa újra a böngészőt.

## IFC szerkesztése

**„Használjon számot.”** Az érték numerikus. Írjon be egyszerű számot mértékegység nélkül, például `2.4`.

**„Használjon egész számot.”** Az érték darabszám vagy egész szám. Távolítsa el a tizedesjegyeket.

**„Csak egyértékű tulajdonságok szerkeszthetők.”** A listák, felsorolások és mennyiségek csak olvashatók.

**A {{key:Mod+S}} megnyitja a böngésző „Oldal mentése” ablakát.**
Nincs mentetlen módosítás, ezért a BimCraft a billentyűt a böngészőre hagyta. Zárja be az ablakot.

**A {{key:Mod+Z}} nem csinál semmit.**
Csak akkor működik, ha van mentetlen módosítása, és nem gépel mezőbe. Mentés után már nincs mit visszavonni.

**A {{ui:Módosítások}} lista még mutatja a szerkesztéseket, miután elvetette őket, és rajzot vagy mappát nyitott meg.**
Ha a „Elvetjük őket?” kérdésre az OK-val válaszol, és IFC-modelltől eltérőt nyit meg, a régi szerkesztések a memóriában maradnak, és a {{ui:Mentés IFC-ként}} még mindig el tudja menteni őket. Az igazi újrakezdéshez nyissa meg újra az eredeti IFC-t, vagy töltse újra az oldalt.

**A szerkesztésem több elemet változtatott meg, mint amennyit kijelöltem.**
Egy „(típus)” jelölésű készlet tulajdonságát módosította. A típustulajdonságok az adott típus minden elemére érvényesek. Kattintson erre: {{ui:Visszavonás}}. Lásd: [Típustulajdonság módosítása a típus minden elemére](topic:type-vs-instance).

## Rajzok

**"*name* nem olvasható. Lehet, hogy sérült, vagy olyan formátumban van mentve, amelyet az olvasó még nem kezel (…)."**
Mentse a rajzot abból a programból, amelyben készült, régebbi DWG-ként (2018 vagy korábbi) vagy DXF-ként, és próbálja újra.

**"Ez a rajz nem tartalmaz megjeleníthető elemet."** vagy **"*name* üres rajz: nem tartalmaz vonalat, szöveget vagy blokkot."**
A rajz üres, vagy csak olyasmit tartalmaz, amit a BimCraft még nem rajzol (lásd a jobb oldali **Még nincs kirajzolva** részt).

**"Ez a rajz nagyon nagy; csak egy része látszik."**
A BimCraft a válaszkészség megőrzése érdekében abbahagyta a rajzolást. Kapcsolja ki a nem szükséges rétegeket, vagy nyissa meg a szükséges lapokat egy kisebb rajzból.

**Egy lap részei hiányoznak.**
Lehet, hogy hiányoznak a külső hivatkozású rajzok: nézze meg a jobb oldalon a **Külső hivatkozású rajzok** részt. Lásd: [Külső hivatkozású rajzok és képek keresése](topic:dwg-linked-files). Lehet, hogy rétegek ki vannak kapcsolva: kattintson erre: {{ui:Mind be}}.

**Egy kép üres keretként jelenik meg.**
A fájlja nem található, vagy TIFF formátumú („a TIFF nem jeleníthető meg böngészőben”). Adjon hozzá PNG vagy JPEG másolatot ezzel: {{ui:Képek hozzáadása…}}.

**Az érintőpadon görgetés nagyít ahelyett, hogy mozgatná a rajzot.**
A rajzok így működnek a BimCraftban. Kattintson és húzzon az eltoláshoz.

## Még mindig elakadt

Olvassa el a [Mi nincs még elkészítve](topic:not-built-yet) oldalt: az, amit keres, lehet, hogy ebben a verzióban nem létezik.
