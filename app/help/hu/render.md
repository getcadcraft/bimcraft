---
title: A modell képének renderelése
summary: Nappali fényű kép készítése a 3D nézetről: égbolt, a nap a telek szélességi fokán, lágy árnyékok, üveges ablakok; WebGPU-val útkövetés a grafikus kártyán, kamera, fénykeverés, színkorrekció, köd és renderelési sor.
keywords: render, előbeállítás, jelenetelőbeállítás, belső, külső, metszeti nézet, éjszaka, egy kattintás, renderelés, útkövetés, sugárkövetés, globális megvilágítás, tükröződés, törés, jó minőség, fotó, fotórealisztikus, valósághű, kép, png, állókép, égbolt, nap, nappali fény, árnyék, lágy árnyék, környezeti takarás, üveg, ablak, fém, anyag, expozíció, fényerő, borult, szürkület, stúdió, bemutató, megjelenítés, webgpu, zajmentesítés, fizikai égbolt, hdri, ies, mélységélesség, panoráma, fehéregyensúly, fénykeverés, renderelési elemek, exr, 16 bites png, köd, kaustika, renderelési sor
from: beb74cc7
---

A {{ui:Render}} az eszköztáron a 3D nézetről olyan képet készít, amely nappali fénynek néz ki: égbolt, a nap ott, ahová a telek szélességi foka helyezi, lágy árnyékok, a teljes égboltból érkező fény, amely sötétíti a sarkokat, és üvegre vagy fémre emlékeztető színek. A modell és a fájl nem változik.

## A nézet renderelése

1. Állítsa be a 3D nézetet úgy, ahogy a képen szeretné: forgassa és nagyítsa, rejtse el a nem kívánt szinteket vagy elemeket, és ha a kép metszetet mutasson, állítson be egy [metszetet](topic:section-plane).
2. Kattintson az eszköztáron a {{ui:Render}} gombra.
3. Ha a megnyomott {{ui:Scene}} nem az, amit akar, válasszon másikat (lásd [Jelenet-előbeállítások](topic:render#scene-presets-a-good-picture-in-one-click)), válassza ki a {{ui:Size}} méretet, majd kattintson a párbeszédpanelen a {{ui:Render}} gombra.

   A kép a renderelés közben alakul ki, és minden körrel simább lesz. A {{ui:Stop}} (vagy {{key:Esc}}) korán véget vet, és megtartja az eddigi képet.

4. Kattintson a {{ui:Save}} gombra, hogy PNG-ként töltse le, vagy a {{ui:Save as}} gombra másik formátumhoz (lásd [A kép mentése](topic:render#save-the-picture)). A fájl a modell fájlneve szerint kap nevet.

:::tip
Először a Vázlat minőséggel, a nézet méretében ellenőrizze a kamerát, majd a véglegeshez nagyobb méretben renderelje a Jó vagy a Legjobb minőséget.
:::

## Jelenet-előbeállítások: jó kép egy kattintással

A párbeszédpanel tetején a {{ui:Scene}} alatt négy gomb van. Mindegyik egy kattintással beállítja az égboltot, a fényerőt, a talajt, az élvonalakat, a minőséget és a napot, így az első kép előtt nincs mit megtanulni. Kattintson egyre, majd a {{ui:Render}} gombra.

| Jelenet | Mit állít be | Mire való |
|---|---|---|
| {{ui:Exterior}} | Derült égbolt, a modell saját napja, talaj bekapcsolva | Az épület kívülről |
| {{ui:Interior}} | Borult égbolt (egyenletes fény, éles napfoltok nélkül), fél fényértékkel világosabb | Kilátás egy szobából belülről |
| {{ui:Section view}} | Fehér stúdió, nincs talaj, élvonalak a gyors renderben | Metszettel vágott modell |
| {{ui:Night}} | A nap lenyugszik (a telek féltekéjének télen éjfélkor), egy fényértékkel világosabb | Lámpák világítják a modellt. Lámpák nélkül a kép sötét |

- {{ui:Pick for this view}} maga választ: {{ui:Section view}}, ha metszet be van kapcsolva, {{ui:Interior}}, ha a kamera a modellen belül van, egyébként {{ui:Exterior}}. Az első alkalommal, amikor megnyitja a párbeszédpanelt, így indul magától.
- Minden beállítás lent marad, és megváltoztatható. Amint módosít egyet, a jelenet már nem nyomott gombot mutat, és a gombok alatti sor jelzi, hogy a beállítások saját beállítások. Kattintson újra a jelenetre, hogy visszaállítsa az értékeit.
- Egy jelenet nem érinti a motort, a módust, a méretet, az anyagokat, a kamerát és a lámpákat.

:::note
A jelenetek ugyanazokat az értékeket adják a ModelCraftban és a BimCraftban. A kész kép attól függ, milyen a modell és a grafikus kártyája.
:::

## Mi látszik a képen

A 3D nézet tömör látványa kerül a képre: a rejtett és áttetsző elemek, a rejtett szintek és a rejtett modellek kimaradnak, a terek csak akkor látszanak, ha a {{ui:Spaces}} be van kapcsolva. Egy metszősík vagy metszetdoboz úgy vágja a képet, ahogy a nézetet. Az elemek a saját színükben jelennek meg: a tulajdonság szerinti színezés (a {{ui:Color}} lap) nem használt.

## Beállítások

| Beállítás | Mit csinál |
|---|---|
| {{ui:Size}} | A nézet mérete, a nézet kétszerese, Full HD, 4K vagy négyzet |
| {{ui:Mode}} | {{ui:Fast}}, vagy {{ui:High quality (path traced)}} (lent) a {{ui:Time limit}} időkorlátjával |
| {{ui:Quality}} | Hány körből (jó minőségnél mintából) legyen átlag: Vázlat 16, Jó 64, Legjobb 256. Több kör simább árnyékot és éleket ad, de tovább tart |
| {{ui:Sky}} | {{ui:Clear sky}}, {{ui:Overcast}}, {{ui:Dusk}} vagy {{ui:White studio}} (sima fehér háttér) |
| {{ui:Sun}} | Június 21., 15:00, a fájl által a telekhez megadott szélességi fokon (IfcSite), a modell valódi északjához forgatva. Jelölje be a {{ui:Use another date and time for this picture}} beállítást, ha másik időpont kell |
| {{ui:Brightness}} | Világosabb vagy sötétebb, fokozatokban (fényértékben) |
| {{ui:Ground under the model}} | Talaj a modell legalacsonyabb pontján, amely felveszi az árnyékokat, és a horizontba olvad |
| {{ui:Draw edges}} | Vékonyan rajzolja az elemek éleit a kép fölé |

Ha a nap a kiválasztott időpontban a horizont alatt van, éjszaka van: az égbolt elsötétül, és a modell lámpái világítanak.

## Lámpák

A modell minden lámpatestje egy lámpa a képen: az IFC-fájl lámpatestei (IfcLightFixture, vagy világítótestként típusozott elem), beleértve a könyvtárból elhelyezetteket is. Mindegyik a lámpatest alól süt lefelé. Ha a fájl megadja a lámpatest wattszámát, a fényereje ebből következik; egyébként 800 lumen, meleg fehér.

A párbeszédpanel a {{ui:Lamps}} alatt sorolja fel a lámpákat: egy kijelölés kikapcsolja, vagy lumenben beírhatja a fényerejét. Ezek a módosítások az IFC-ben mentődnek (a lámpatest `CadCraft_Light` tulajdonságkészletében, ahol a Tulajdonságok panelen is módosíthatja), és a {{key:Ctrl+Z}} visszavonja őket.

Ha a fájl nem mond semmit arról, hol van a telek, a napot 40° északi szélességre helyezzük, és a párbeszédpanel ezt jelzi. Az időpont a telek helyi ideje, amelyet a hosszúságából számolunk, így egy órát tévedhet ott, ahol másként állítják be az órát.

Ezek a beállítások a böngészőben maradnak a következő képhez. Nem mentődnek az IFC-fájlba.

## Üveg és más anyagok

A {{ui:Materials}} alatt a képernyőn minden szín kap egy megjelenést: {{ui:Matte}}, {{ui:Satin}}, {{ui:Glossy}}, {{ui:Metal}}, {{ui:Polished metal}}, {{ui:Glass}} vagy {{ui:Frosted glass}}. Azok a színek, amelyeket az IFC-fájl áttetszővé tesz (például ablaküveg), {{ui:Glass}} megjelenéssel indulnak.

:::note
A Gyors módban az üveg és a fém az égboltot tükrözi, nem a modell többi részét, és a fény nem törik meg az üvegen. A lent leírt {{ui:High quality (path traced)}} mód mindkettőt megteszi.
:::

## Jó minőség

Válassza a {{ui:Mode}} › {{ui:High quality (path traced)}} beállítást egy olyan képhez, amely úgy követi a fényt, ahogy a kamera látja:

- a fény a felületek között verődik vissza, így az ablakon vagy lámpával megvilágított szoba minden oldalról világos, és a színek a szomszédokra szíródnak át;
- az üveg valódi üveg: a fény megtörik rajta, és visszatükrözi a modellt;
- a fém és a polírozott felületek tükrözik a modell többi részét;
- a fénypanelek panelként világítanak, lágy árnyékokkal.

Sokkal lassabb, mint a {{ui:Fast}}: minden körben minden pixel fényét újra követi. A kép szemcsésen indul, és ahogy a minták összeadódnak, kitisztul; ezért kezdjen kicsiben (a nézet mérete, Vázlat), és válasszon {{ui:Time limit}} időkorlátot: ha lejár, a kép addig elkészült része megmarad. A {{ui:Stop}} is megtartja. Az első kör addig vár, amíg a böngésző felkészíti az útkövetőt.

Ahol a böngészőben van WebGPU, az útkövető a CadCraft saját, a grafikus kártyán fut; a kép alatti sor ezt mondja. A {{ui:Stop}} vagy az időkorlát után a {{ui:Resume}} ugyanazzal a képpel folytatja, amíg meg nem kapja az összes mintát; egy beállítás megváltoztatása vagy a {{ui:Render}} újbóli megnyomása új képet kezd. WebGPU nélkül a kép WebGL-lel útkövetett (a sor ezt mondja), és a {{ui:Resume}} nem kínálkozik.

:::linux
A Firefoxban és a legtöbb Chrome-beállításban Linuxon még nincs WebGPU, ezért ott a jó minőség WebGL-t használ.
:::

Ebben a módban az élek nem rajzolódnak, a textúrák a színüket és az érdességüket mutatják, a dudorokat nem, a metszet pedig a modellen a kép kezdete előtt készül.

A {{ui:Denoise (clears the grain left after the samples)}} alapértelmezetten be van kapcsolva: amikor a kép kész vagy leállították, a maradék szemcsét egy erre készült neurális háló tisztítja (az Intel Open Image Denoise nyilvánosan közzétett hálózata, a saját számítógépén fut: a grafikus kártyán, különben a processzoron). A {{ui:Show}} › {{ui:The picture before denoising}} a renderelt állapotot mutatja.

## Égboltok és fényprofilok a grafikus kártyán

WebGPU-val a jó minőségnek két további égboltja van:

- {{ui:Physical sky}} a nap magasságából számolja ki a nappali fényt: mélykék az égen, halvány sáv a horizonton, a nap pedig melegebb és halványabb lesz, ahogy alacsonyra ér. A {{ui:Haze}} a nagyon tiszta napos (2) és a párás (10) között állítható.
- {{ui:Sky picture (HDRI)}} egy valódi hely panorámaképével világítja meg a modellt. A {{ui:Choose a picture…}} egy equirectangular `.hdr` vagy `.exr` fájlt vesz; a {{ui:Turn}} a modell körül forgatja, a {{ui:Picture brightness}} világosabbá vagy sötétebbé teszi. A kép saját napot hordoz, ezért a modell napja nem adódik hozzá. Csak amíg az oldal nyitva van marad meg: újranyitás után válassza ki újra.

A {{ui:Lamps}} listában minden lámpa vehet gyártói fényprofilt: a {{ui:IES profile…}} egy IES (LM-63) fájlt olvas be, és a lámpa úgy veti a fényét, ahogy az adott lámpatest (keskeny lefelé világító, falmosó). Az ugyanilyen nevű összes lámpa ezt használja, a lámpa pedig megtartja saját fényerejét. A profil nevére kattintva megszünteti a használatát.

A tiszta üvegablakok segítik az égbolt fényét a szobába.

A {{ui:Fast}} mód és a WebGL-útkövető a {{ui:Physical sky}} és a {{ui:Sky picture (HDRI)}} beállításokat tiszta égboltként mutatja, és figyelmen kívül hagyja a fényprofilokat.

## A kamera

A {{ui:Camera}} a képet fényképszerűen állítja be:

- {{ui:Exposure}}: tartsa a {{ui:Brightness slider}}-t, vagy válassza a {{ui:Camera settings}} lehetőséget, és állítsa be a {{ui:Aperture (f-stop)}} rekeszt, a {{ui:Shutter speed}} záridőt és az {{ui:ISO}} értéket, mint egy fényképezőgépen; mellettük az EV a szokásos expozíciós érték. f/16, 1/100 s és ISO 100 napos időt ad; sötétebb jelenetnek szélesebb rekesz, lassúbb záridő vagy nagyobb ISO kell. Ez minden módban működik.
- {{ui:Depth of field}} elmossa azt, ami közelebb vagy messzebb van a {{ui:Focus distance (m)}} távolságtól, úgy, ahogy egy ilyen f-számú lencse tenné (hagyja üresen, hogy a nézet közepére fókuszáljon); a {{ui:Aperture shape}} a fókuszon kívüli fényfoltokat kerek vagy lamellás alakúvá teszi.
- {{ui:Two-point perspective (vertical lines stay vertical)}} vízszintesbe állítja a kamerát, és eltolja a képet, ahogy egy építészeti dőlés-eltolás lencse teszi, így a falak nem dőlnek el, amikor épületet néz fentről vagy lentről.
- {{ui:White balance}} megadja, melyik fényszín látszik fehérnek: alacsonyabb (például 3000 K) a meleg lámpafényhez, magasabb az árnyékhoz és a borult napokhoz.
- {{ui:Projection}}: a {{ui:360° panorama}} 2:1 arányú képet készít mindenről a kamera körül a panorámanézegetőknek; a {{ui:360° stereo panorama}} egymás alá rakja a bal- és jobbszemes panorámát a headsetekhez; a {{ui:Cube map (6 faces)}} hat négyzetes nézetet készít 3 × 2-es rácsban. A szélességet a {{ui:Size}} adja.

A vetítéshez, a mélységélességhez, a kétpontos perspektívához és a fehéregyensúlyhoz a grafikus kártyán lévő útkövető (WebGPU) kell, ezért csak a {{ui:High quality (path traced)}} módban látszanak.

## A kép véglegesítése

A {{ui:Picture}} fényképszerűen színezi a jó minőségű képet, és minden vezérlő azonnal megváltoztatja a kész képet, újrarenderelés nélkül:

- {{ui:Look (view transform)}}: {{ui:ACES filmic}} (a kép az eddigi), {{ui:AgX}} (lágyabb, nagyon erős fényben is megtartja a színt), {{ui:Filmic}} (enyhe filmgörbe) vagy {{ui:Standard}} (egyszerű, az erős fény fehérbe vág).
- {{ui:Contrast}} és {{ui:Highlight compression}} (a nagyon világos részekben visszahozza a részleteket).
- {{ui:Bloom}} (lágy izzás az erős fény körül), {{ui:Glare}} a {{ui:Glare streaks}} sugaraival (csillagsugarak a legfényesebb pontokról) és {{ui:Vignette}} (sötétebb sarkok).
- {{ui:Colour table (.cube)…}} színkorrekciót ad egy `.cube` fájlból, a {{ui:Colour table strength}} erősségével; mint egy égboltkép, csak amíg az oldal nyitva van marad meg.

## A kép mentése

A {{ui:Save as}} a {{ui:Save}} mellett választja ki a fájlt: {{ui:PNG}}, {{ui:JPEG}} vagy {{ui:WebP}} megosztásra (a JPEG és a WebP csak ott, ahol a böngésző tudja írni), és grafikus kártyán készült jó minőségű renderelés után még:

- {{ui:PNG, 16 bits}}: a színkorrigált kép finomabb árnyalatlépcsőkkel, nyomtatáshoz vagy további szerkesztéshez.
- {{ui:EXR, every layer (32-bit float)}}: a kép úgy, ahogy renderelték (lineáris fény, korrekció nélkül), minden renderelési elemmel és fénycsoporttal külön rétegként, kompozitáló programokhoz.
- {{ui:Render file (.ccrender, to grade again later)}}: minden, amire a párbeszédpanelnek szüksége van a kép újrakeveréséhez és újrakorrigálásához. Az {{ui:Open a render file…}} visszahozza a keverésével és korrekciójával együtt, újrarenderelés nélkül.

## Fények keverése renderelés után

Kapcsolja be a {{ui:Light mixing (change each light's colour and brightness after the render)}} beállítást, mielőtt megnyomja a {{ui:Render}} gombot. Amikor a kép kész (vagy leállították), a {{ui:Mix the picture}} csoportokba sorolja a fényeit: az égboltot, a napot és a lámpákat név szerint (minden azonos nevű lámpa egy csoport). Kapcsoljon ki egy csoportot, adjon neki színt, vagy tegye világosabbá vagy sötétebbé, és a kép azonnal változik, újrarenderelés nélkül. A {{ui:Save mix}} egy névvel megőrzi a keveréket, amelyet később újra kiválaszthat; az {{ui:As rendered}} visszaállítja a kép eredeti állapotát. A {{ui:Save}} a kevert képet menti.

A {{ui:Render elements (albedo, normals, depth, diffuse, specular, transmission, emission, IDs)}} a kép részeit is megőrzi. A {{ui:Show}} a nézetet átkapcsolja az egyikre: a felületi színekre (albedó), a normálokra, a mélységre, a diffúz, a tükröző és az átengedett fényre (mindegyik közvetlen és közvetett), arra, ami izzik, és az égboltra, valamint tárgyanként vagy anyagonként egy színre, maszkok készítéséhez.

Mindkettő a grafikus kártyán tart extra rétegeket. Nagy méretnél a grafikus kártyán nem biztos, hogy van elég hely; a párbeszédpanel ezt jelzi, és egy kisebb méret működik.

## Köd, füst, zaj és kaustika

Ezek a {{ui:Fog, smoke and noise}} alatt találhatók, és a {{ui:High quality (path traced)}} módban működnek a grafikus kártyán; a többi motor nem használja őket.

- {{ui:Fog and haze}} a levegőt egy magasságig egy párássággal tölti meg, amelyet a nap, az égbolt és a lámpák világítanak meg. A {{ui:How far you can see, in meters}} megadja, milyen sűrű (kb. 100 m enyhe pára, 20 m sűrű köd), a {{ui:Fog height above the ground, in meters}} a magasságot, ahol véget ér, a {{ui:Light shafts}} pedig azt, mennyire izzik a pára a fény felé. A napfény a köd tetején hagyja el, így ahol a nap ablakon vagy épületek között jön be, fénysugarakként látszik.
- {{ui:Smoke or cloud}} egy füst- vagy felhőtérfogatot ad, amelyet a köd módjára világítanak meg. A {{ui:Kind}} egy {{ui:Cloud}}, egy {{ui:Smoke column}} vagy {{ui:From a volume file (.ccvol)}}, a CadCraft saját rácsformátuma. A {{ui:Detail}} és a {{ui:Variation}} az elkészített felhőt vagy oszlopot módosítja; a {{ui:Size of its longest side, in meters (0 = the size of the model)}}, a {{ui:Move X (m)}}, {{ui:Move Y (m)}}, {{ui:Move Z (m)}} és a {{ui:Turn}} helyezi el (a modell közepén indul), a {{ui:Thickness}} sűrűbbé teszi, a {{ui:Forward glow}} a fény felé világosabbá, a {{ui:Color}} pedig színezi. A térfogatfájl csak amíg az oldal nyitva van marad meg, akárcsak az égboltkép.
- {{ui:Stop early where the picture is clean (adaptive sampling)}} nem ad több mintát azoknak a pixeleknek, amelyek megnyugodtak. A {{ui:Noise to accept}} azt adja meg, mennyi szemcse maradhat, mire egy pixel megáll. A kép alatti sor megmondja, átlagosan hány mintát kapott egy pixel.
- {{ui:Caustics (light bent by glass or bounced by mirrors)}} a lámpák és a nap fényét követi, így az üveggömb alatti fényfolt vagy a tükör fénye a falon tisztán, nem szemcsésen jön ki. Ki van kapcsolva, amíg köd, füst, fénykeverés vagy renderelési elemek be vannak kapcsolva, és képekhez készült, nem 360°-os képekhez.

## A renderelési sor

A párbeszédpanel {{ui:Render queue}} része: az {{ui:Add this picture to the queue}} megtartja a kép beállításait és nézetét, a {{ui:Start the queue}} pedig sorban, egymás után rendereli a várakozókat ezen a számítógépen. Az oldal bezárásakor a sor megmarad; nyissa meg ugyanazt a modellt a folytatáshoz. A {{ui:Save}} letölt egy kész képet; a {{ui:Remove}} és a {{ui:Clear finished}} rendet tesz a listában. A sor jó minőségben renderel, ezért WebGPU kell hozzá.

## Mennyi időbe telik

A képet a saját számítógépén készíti a grafikus kártyája; semmi nem töltődik fel. Az idő a körökkel és a pixelekkel nő: a Legjobb 16-szor annyi kört ad, mint a Vázlat, és egy 4K-s kép kb. négyszer annyi pixelt tartalmaz, mint a Full HD. A nagy modellek körönként tovább tartanak.
