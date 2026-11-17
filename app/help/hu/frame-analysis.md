---
title: A teherhordó váz elemzése
summary: A modell gerendáinak, oszlopainak és merevítő rudainak igénybevételei, támaszreakciói és lehajlásai az Ön által megadott terhelési esetek és kombinációk alatt, az IFC-fájlban tárolva. Elemzési segédeszköz, nem szabványellenőrzés.
keywords: elemzés, mértékegységek, láb és hüvelyk, megjelenítési egység, szerkezeti elemzés, tervezési ellenőrzések, kihasználtság, hengerelt, hegesztett, AISC 360, EN 1993-1-1, vázelemzés, analitikus modell, merevségi módszer, terhek, terhelési eset, kombináció, állandó teher, hasznos teher, saját súly, támaszreakciók, hajlítónyomaték, nyíróerő, normálerő, lehajlás, lehajlási alak, támaszok, csuklós, befogott, elengedés, jelentés, pdf, csv, craftscript, frame3d, gerendák, oszlopok, rudak
from: b93b58c4
---

A jobb oldali {{ui:Elemzés}} fül a megnyitott modell gerendáinak, oszlopainak és merevítő rudainak erőit, az oszloplábak támaszreakcióit és a rudak lehajlását határozza meg az Ön által megadott terhekre.

:::warning
Ez **elemzési segédeszköz, nem szabványellenőrzés**. Az elemzés nem alkalmaz tervezési szabványt: nem méretezi a tagokat, nem ellenőrzi a teherbírásukat, és nem választ terhelési tényezőket. A mérnök ellenőrzi az analitikus modellt, a terheket és a támaszokat, és eldönti, mit jelentenek az eredmények. Az alatta lévő {{ui:Tervezési ellenőrzések}} blokk az AISC 360 vagy az EN 1993-1-1 szerint ellenőrzi a hengerelt acél I-szelvényeket, és addig csak segédeszköz, amíg egy mérnök át nem nézte: lásd [Tervezési ellenőrzések](topic:frame-analysis#design-checks).
:::

## Futtatás

1. Nyissa meg az IFC-modellt és az {{ui:Elemzés}} fület.
2. Jelöljön ki egy vagy több gerendát, oszlopot vagy merevítő rudat a nézetben, válasszon egy {{ui:Eset}}-et, egy {{ui:Teher}}-t és egy {{ui:Irány}}-t, írja be az értéket, majd nyomja meg a {{ui:Teher hozzáadása}} gombot: kN/m a rúd mentén megoszló tehernél, kN pontterhelésnél.
3. Nyomja meg a {{ui:Elemzés futtatása}} gombot.

A táblázat minden rúd legnagyobb normálerejét, nyírásait, hajlítónyomatékait, csavarónyomatékát és lehajlását tartalmazza; a rúd nevére kattintva kijelölheti azt a nézetben. Alatta a támaszreakciók láthatók. Az {{ui:A modellen}} gomb a lehajlási alakot rajzolja ki, vagy egy kiválasztott hatást diagramként rajzol minden rúd mellé. Az eredmények elavulnak, ha a modell megváltozik: futtassa újra.

Minden teher és beállítás egy változás a {{ui:Módosítások}} listában: a {{ui:Visszavonás}} gomb visszavonja, a {{ui:Mentés IFC-ként}} pedig megtartja őket a fájlban (a projekt `CadCraft_Analysis` tulajdonságkészletében), így a modell következő megnyitásakor a terhek még megvannak.

## Az analitikus modell felépítése

- Minden IfcBeam, IfcColumn és IfcMember, amelynek alakja egyetlen egyenes kihúzás, a szelvénye súlyvonalán lévő rúddá válik. Szelvényjellemzői a profilból származnak: I-, U-, L- és T-alakzatok, téglalapok és csövek, körök és kerek csövek, vagy bármilyen zárt körvonal (ekkor a csavarási állandó becslés, amelyet a jelentés jelez). Minden más kimarad, és a számukat megadjuk.
- Egy modellben a gerendák az oszlop felületénél végződnek, és a padló alatt ülnek. Minden rúdvéget a saját egyenesén visszük arra a rúdtengelyre, amelybe csatlakozik, ha az tengely közel van (kb. a szelvények méretén belül), és ott a rúd feldarabolódik. A jelentés megadja, hány végpont mozdult el.
- **Oszloplábak**, amelyek alatt nincs semmi, támaszok: befogottak (a kezdőpont) vagy csuklósak (a helyükön tartottak és a csavarodás ellen megtámasztottak, de szabadon elfordulhatnak).
- **Gerendavégek** merevek vagy csuklósak a {{ui:Kapcsolat nélküli gerendavégek}} szabály szerint; a **merevítő rudak** (IfcMember) mindkét végükön csuklósak. Egy rudat kijelölve vagy egy oszlop lábát kijelölve, saját szabályt adhat a végeinek.
- Anyagok név szerint: beton (E = 30 GPa), fa (E = 11 GPa), egyébként acél (E = 200 GPa).

Ha a váz anélkül tud elmozdulni, hogy bármit meghajlítana – ez egy mechanizmus –, a futtatás leáll, és megmondja, hol és melyik irányban.

## Esetek, kombinációk, előjelek és a jelentés

Az elemzés az **Állandó** (saját súly), a **Hasznos** és az **Állandó + hasznos** esetekkel indul; a tervezési szabvány által előírt tényezőkkel adhat hozzá esetekeket és kombinációkat. N > 0 húzást jelent; My > 0 a rúd helyi −z oldalát húzza (a gravitáció alatt lehajló gerenda My > 0). A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} tartalmazza a feltételezéseket, a szelvényeket, az eseteket, a reakciókat az összegeikkel, a rúderőket, az elmozdulásokat és a burkolóértéket. Az {{ui:Exportálás CraftScriptként}} a vázat a PartCraft Script munkaterületére írja, ahol a `frame3d` könyvtári függvény olvasható kódban oldja meg.

A módszer a közvetlen merevségi módszer, lineáris és elsőrendű, kivéve ha bejelöli a *Másodrendű (P-Delta)* lehetőséget; tankönyvi példákkal ellenőrizték.

**Másodrendű (P-Delta).** Jelölje be a *Másodrendű (P-Delta)* lehetőséget a Futtatás mellett: minden kombinációt újra megoldunk úgy, hogy a rudak normálerői a deformált vázon hatnak (minden rudat 4 darabra vágva, így a rúd végei közötti hajlítás is számít), amíg a normálerők nem stabilizálódnak. Az eredménysor megadja az iterációk számát és azt, mennyivel nőtt az oldalelmozdulás; a nyomatékok, lehajlások, tervezési ellenőrzések és a jelentés ezután ezeket az eredményeket használja. A váz rugalmas kritikus terhelése felett a futtatás leáll, és ezt jelzi. Ez kis elfordulásoknál rugalmas, csak hajlításos számítás, merevségcsökkentés vagy fiktív terhek nélkül (önmagában nem az AISC közvetlen elemzési módszere); a födémek, falak és merev padlók elsőrendűek maradnak.

**Nyomás a födémeken.** Betonlemezek esetén (az elemzés a födémet akkor olvassa lemezként, ha az anyaga beton) a **Terhek** blokkban van a {{ui:Nyomás minden födémen}} lehetőség: írja be a kN/m² értéket, válassza ki a fent említett esetet, és nyomja meg a {{ui:Hozzáadás a födémekhez}} gombot. A nyomás lefelé hat az elemzés által talált összes födémre, és egy Eltávolítás hivatkozással jelenik meg. Ez egy nyomás minden födémre, nem födémenként, és nem szabványos teher: írja be azt az értéket, amelyet mérnöke megad.

**Sajátfrekvenciák (végeselemes).** Az eredmények alatti {{ui:Véges elemek: sajátfrekvenciák}} blokk ugyanazon modell legalacsonyabb módusait határozza meg a végeselemes motorral: a gerendákat a végeik elengedésével, a födémeket és falakat síkbeli négycsomópontú héjakként, a merev padlókat és a támaszokat. Válassza ki a módusok számát (3, 6, 10 vagy 20) és a födémelemet (a négycsomópontú héjat vastag vagy vékony födémekhez, vagy a vékony födémelemet), majd nyomja meg a {{ui:Sajátfrekvenciák keresése}} gombot. A táblázat minden módus frekvenciáját Hz-ben, periódusát másodpercben, valamint az X, Y és Z irányú hatékony modális tömegét adja meg a mozgó tömeg százalékában. A {{ui:Megjelenítés a modellen}} gomb a lehajlási alakhoz hasonlóan rajzolja ki bármelyik módust. A tömeg az anyag sűrűsége szorozva a térfogattal: a terhek nem adnak tömeget, és a sűrűség nélküli anyagnak nincs tömege. A jelentés (PDF, CSV) tartalmazza a táblázatot. Csak rugalmas és kis elmozdulású, és itt nincs szabványból származó szeizmikus vagy szélteher. Nem szabványellenőrzés; az eredményeket mérnöke átnézi.

**Válaszspektrum, idősor-elemzés és pushover.** Három további blokk található a sajátfrekvenciák alatt, ugyanazt a végeselemes modellt használva. Mindhármuk tömege az anyag sűrűsége plusz a bejelölt esetek lefelé ható terhei, mindegyiket egy Ön által beírt tényezővel szorozva (például az Állandó 1-szeresen, a Hasznos pedig az a része, amelyet tömegként számol).

A {{ui:Válaszspektrum}} minden módust az Ön által megadott spektrumról olvas le (periódus- és gyorsulástáblázat, vagy az ASCE 7 alak az SDS, SD1 és TL értékekből; a {{ui:A Szeizmikus blokk értékeinek használata}} gomb ezeket átmásolja a Szeizmikus blokkból), és a módusokat CQC, SRSS, a tíz százalékos szabály vagy abszolút összeg szerint kombinálja, majd az X, Y és Z irányokat összevonja (100% + 30% vagy SRSS). Megadja az alapnyíróerőt, a szintek közötti elmozdulásokat, a rúdvégi erőket, valamint egy módustáblázatot, amely figyelmeztet, ha a felhasznált módusok a tömeg 90%-nál kevesebbet hordoznak. Az eredményeket skálázhatja egy tényezővel vagy egy beírt alapnyíróerőre; a blokk maga soha nem számítja ki ezt az alapnyíróerőt. Az eredményeknek nincs előjelük.

Az {{ui:Idősor-elemzés}} a talajgyorsulást modális szuperpozícióval (a felvétel pontok közötti egyeneseire pontosan) vagy közvetlen integrálással (Newmark-féle átlagos gyorsulás Rayleigh-csillapítással) futtatja. A bemenet egy kitalált szinusz vagy impulzus (mindig szintetikusként jelölve), egy beillesztett felvétel, vagy egy megnyitott szöveges fájl (idő és gyorsulás, lépésenként soronként egy gyorsulással, vagy PEER-stílusú fájl DT= fejléccel; g-ben vagy m/s²-ben). Megadja a tetőelmozdulást és az alapnyíróerőt az idő függvényében, az egyes szintek elmozdulását, valamint a rúdvégi erők burkolóját. A nagyon hosszú felvételű modellek a felvételt csak az adott munkamenetre tartják meg.

A {{ui:Pushover-elemzés}} a tetőt kis lépésekben tolja oldalirányban (az első módushoz hasonló eloszlással vagy egyenletesen), képlékeny csuklókkal az I-szelvényű rudak végein. A csukló a képlékeny nyomatéknál folyik meg, amely a normálerő növekedésével csökken (a rajzolt alakból számítva, a sarokvarratokat figyelmen kívül hagyva); a keményedés opcionális, a P-delta opcionális, és előbb egy gravitációs kombináció is alkalmazható. Megadja a teherbírási görbét (alapnyíróerő a tetőelmozdulás függvényében), az első csuklót, valamint minden csukló állapotát és képlékeny elfordulását. A {{ui:Nemlineáris idősor-elemzés futtatása}} gomb kis modelleken ugyanezekkel a csuklókkal futtatja az Idősor-elemzés blokk felvételét. A csuklók csak a rúdvégeken alakulnak ki (ahol egy csuklónak egy tartón belül kell kialakulnia, ott tegyen csomópontot); mindkét végén elengedett rúdon nincs csukló; a merevítő rudak folyása és kihajlása nincs modellezve; a födémek és falak rugalmasak maradnak; elfogadási kritériumot nem adunk meg. Nem szabványellenőrzés; az eredményeket mérnöke átnézi. A beállítások a modellel együtt mentésre kerülnek, a jelentés pedig tartalmazza a táblázatokat.

Még nincs elkészítve: kihajlás, a válaszspektrum hiányzó-tömeg-korrekciója, felvételskálázás, a csuklók elfogadási kritériumai (a dinamikus válasz fent már megvan), a minden födémre vonatkozó egyetlen nyomáson kívüli felületi terhek, rúdexcentricitások, csak húzott merevítő rudak, falak és födémek a vázban, valamint a hegesztett alakzatokra és a hengerelt I-szelvényektől eltérő szelvényekre vonatkozó tervezési szabványellenőrzések. Lásd: [Még nincs elkészítve](topic:not-built-yet).

## Mértékegységek

A hosszúságok a(z) eszköztáron ({{ui:Mértékegységek}}) kiválasztott egységet követik, a BimCraft többi részéhez hasonlóan: a beírt és látható terhelési pozíciók ({{ui:Forrás}}, {{ui:Ide}}, {{ui:Ennél}}), a csomóponti terhek és reakciók pontjai, a padlómagasságok a {{ui:Szeizmikus}} lapon, valamint a lehajlás és a szintelmozdulás oszlopai (láb és hüvelyk esetén ezek a kis hosszúságok tizedes hüvelykben jelennek meg). Az egységet bármikor megváltoztathatja; a fül újrarajzolódik. Az erők kN-ben és kN·m-ben maradnak; a jelentés (PDF, CSV) és a CraftScript fájl milliméterben marad, az egység feltüntetésével. A {{ui:Beton}} blokk szelvénymérete, rúdátmérői és betonfedései milliméterben maradnak, ahogy a nevük is mutatja.

## Tervezési ellenőrzések

A {{ui:Tervezési ellenőrzések}} blokk (ugyanaz, mint a DetailCraftban) egy {{ui:Tervezési szabvány}}-t kér, ASCE 7 + AISC 360 vagy EN 1990 + EN 1993-1-1, valamint egy {{ui:Acélminőség}}-et. Adja meg minden terhelési esetnek a fajtáját (állandó, hasznos, szél stb.); a {{ui:Kombinációk készítése}} gomb a szabvány terhelési kombinációit írja fel az Ön esetei alapján, és az elemzés ezeket úgy futtatja, mint bármely más kombinációt.

A {{ui:Rudak ellenőrzése}} ezután minden **hengerelt acél I-szelvényt** ellenőriz a DetailCraft ellenőrzéseivel (húzás, nyomás kihajlással, hajlítás oldalirányú-csavaró kihajlással, nyírás, hajlítás normálerővel, lehajlás; a feltételek a jelentésben vannak), és megmutatja, a teherbírás mekkora részét használja ki, színezve a modellen. Ez **addig segédeszköz, amíg egy mérnök át nem nézte**.

**Mely rudak kerülnek ellenőrzésre.** Az IFC-profil nem mondja meg, hogy egy acél I-szelvény hengerelt vagy hegesztett, ezért a BimCraft csak akkor nevezi hengereltnek, ha a profil neve (különben az elem típusneve) az AISC W vagy S táblázat, illetve az EN 10365 IPE, HEA és HEB táblázat egy mérete (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`), **és** a fájlban szereplő magasság, szélesség, gerinc és öv az adott mérettől 1%-on belül egyezik. Minden más I-szelvényt (gerendatartót, más néven szereplő méretet vagy átalakított méretet) hegesztettnek vesz, és **nincs ellenőrizve** eredménnyel tér vissza; ugyanígy a csövek, szögacélok, U-szelvények és egyéb szelvények, a karcsú elemek és a csavarás is. Ezeket a rudakat mérnökkel ellenőriztesse.
