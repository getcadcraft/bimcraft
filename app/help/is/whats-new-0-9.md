---
title: Nýtt í 0.9 (eldra)
summary: Veggjaform, skipting, frávik, teygja og læsing við ristlínu, kótar undir jörðu, málsetningar á rist og mæling á grunnmynd, tvítekin sýn með vinnustílum og penna-töflum, Tilkynna sem, Collada- og Google Earth-útflutningur, Scan to BIM, vind- og jarðskjálftagreining og viðbætur fyrir plastefnisprentun.
keywords: nýtt í 0.9, eldri útgáfa, nýtt, 0.9, útgáfuskýringar, veggjaform, rétthyrningur, marghyrningur, bogi, velja línur, rekja útlínu, frávik, tenging, teygja í reit, jafna og læsa, skipta vegg, bil, tengja aftur, læsa við ristlínu, vaxa frá, mæla frá, bæta við kóta fyrir neðan, kjallari, kóta skipun, málsetningar á rist, mæling á grunnmynd, vinnustíll, afrit af sýn, eigið afrit, tengd sýn, penna-tafla, prenta eins og sýnt, tilkynna sem, sláðu inn mælikvarða, flytja inn svg, staðsetja á grunnmynd, staðsetja í líkani, collada, dae, kmz, google earth, scan to bim, vindálag, jarðskjálfti, endanlegt frumefni, skjalaspjald, plastefnisprentun, útgáfuskýringar, breytingaskrá, 0.8, 0.8.1, útgáfa, nýir eiginleikar, rýmingar, biðraðir, hljómburður, endurómun, hvatasvörun, flóð, vindur, jarðskjálfti, hætta, líftími, þjónustutími, ids, merki, listar, færa, jafna, dreifa, mynd, bakgrunnur, skanna í veggi, lóð úr civilcraft, einingateikningar, grind, sólarorka, pv, skipta, vrf, viftueining, stærðarval pípa, kapalbakki, birtustig, steypa, bera saman skönnun, epsg, varpun, skjöl, sniðmát, kolefni, kostnaður, myndgerðarvél, opna í, usd, glb, unreal, afturkalla, viðbætur, pcf, tákn, plöntur, rekja, pennar, borði, verkefnavafri, útlit
from: 816df7f8
---

Þetta er það sem breyttist í BimCraft 0.9, samanborið við 0.8.1. Tvö stór þemu eru raunverulegt veggjaverkfæri og sýn sem hegðar sér eins og fólk úr stóru BIM-forritunum býst við. Í kringum þau koma Collada-útflutningur, aðstoðarmenn sem geta sett inn rafbúnað, Scan to BIM, og vind-, jarðskjálfta- og endanlegra frumefna-vinna í flipanum {{ui:Greining}}.

## Nýtt

### Veggir

- **Teiknaðu heil form.** Í {{ui:Teikna}} opnaðu {{ui:Form}} (eða veldu form í formlistanum í veggraðinni) fyrir rétthyrning, snúinn rétthyrning, marghyrning með 3 til 64 hliðum, boga eftir miðju, snertiboga, veggi á völdum línum, eða veggi umhverfis lokað svæði sem þú smellir inni í. Rétthyrningur er fjórir veggir með fjórum tengdum hornum og einu afturkallsskrefi. Sjá [Veggjaform, skipting, frávik, teygja og læsing](topic:wall-tools).
- **Stilltu áður en þú teiknar, breyttu síðar.** Veggröðin hefur {{ui:Frávik}} og {{ui:Tenging}} (taktu hakið úr til að teikna óháða veggi). Síðar notar þú {{ui:Frávik}}, {{ui:Teygja í reit}} og {{ui:Jafna og læsa}} á teiknaða veggi. Veggur sem er færður eða teygður heldur hurðum, gluggum og málsetningum sínum. Hver uppskrift er eitt afturkallsskref.
- **Skerðu veggi.** {{ui:Skipta}}, {{ui:Bil}}, {{ui:Frjálsir endar}}, {{ui:Eyða hluta}} og {{ui:Tengja aftur}} skera vegg með smelli eða þar sem annar veggur krossar hann. Skurður í gegnum hurð er hafnaður. Sjá [Veggjaform, skipting, frávik, teygja og læsing](topic:wall-tools).
- **Læstu veggi við ristlínur.** Veldu vegg við ristlínu og hakaðu við {{ui:Læsa við ristlínu}} í {{ui:Eiginleikar}}. Með ristverkfærinu á skaltu skrifa fjarlægð í {{ui:Færa um}} fyrir valda línu, og læstu veggirnir fylgja í einu afturkallsskrefi.
- **Mótaðu einn vegg.** Í {{ui:Eiginleikar}} eins veggs geturðu fest efri eða neðri brún hans við þak, gólf eða loft, breytt hæðarútlínu hans, hallað honum, eða skorið op í vegg án hurðar eða glugga. Sjá [Lögun veggs](topic:wall-shape).
- **Lengd segir hvaða endi helst.** {{ui:Vaxa frá}} ákvarðar hvort upphaf, endi eða miðja helst kyrr þegar þú breytir lengdinni.
- **Lengd og málsetning á grunnmynd eru eins.** {{ui:Mæla frá}} (miðlína, innri flötur eða ytri flötur) stýrir bæði lengdarreitnum og veggmálsetningum grunnmyndarinnar. Það byrjar á miðlínu, svo veggmálsetningar grunnmyndar lesa nú miðlínu þar sem þær lásu áður ytri flöt. Breyttu því í veggröðinni, í {{ui:Eiginleikar}} eða í {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Veggir}}.

### Kótar, ristir og mæling

- **Bættu við kóta fyrir neðan.** {{ui:Bæta við kóta fyrir neðan}} í spjaldinu {{ui:Kótar}} bætir kóta undir þeim lægsta, jafn háum honum, í neikvæðri hæð (Level -1, Level -2). Ekkert annað færist. {{ui:Bæta við kótum…}} tekur nú við neikvæðum hæðum. Ef þú skrifar LEVEL, LEVELS, STOREY eða STOREYS á skipanalínuna opnast {{ui:Bæta við kótum…}}, og það er {{ui:Kótar}}-hnappur í valmyndunum og borðflipunum. Sjá [Lóðir, byggingar og kótar](topic:site-building-and-levels).
- **Málsetningar ristar á grunnmynd.** Með {{ui:Rist}}-verkfærinu á skaltu haka við {{ui:Málsetningar}} til að teikna bilið milli nágrannalína og heildarstærðina handan við hringina á grunnmynd hvers kóta. Sjá [Málsetja rist](topic:grid-dimensions).
- **Mæling á grunnmynd.** {{ui:Mæla}} í hópnum {{ui:Teikna}} gefur fjarlægð ásamt mismun X og Y milli tveggja smella. Ekkert er vistað í líkaninu. Sjá [Mæling á grunnmynd](topic:measure-on-the-plan).
- **Breyttu mörgum súlum í einu.** Veldu súlur ásamt vegg og valið sýnir hverja tegund með {{ui:Halda aðeins þessum}}. Einn smellur heldur súlunum og sýnir sameiginlega reiti þeirra.
- **Ein birtingareining alls staðar.** Hnit, mælingar, sniðmyndir, mælikvarðar blaða, álag og niðurstöður í rammaflipanum og texti vandamála fylgja þeirri einingu sem þú velur. Útflutningar eru áfram SI.

### Sýnir, blöð og prentun

- **Vinnustíll.** {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Vinnustíll}} velur hvort hver sýn hefur sínar eigin skýringar og penna-töflur, eða deilir þeim. Sjá [Vinnustíll, afrit af sýnum, pennar á pappír, Tilkynna sem og sniðmát](topic:working-style).
- **Tvíteknu sýn.** Grunnmyndir, lofthæðarmyndir, tilvísanir, útlit og snið má tvítaka sem {{ui:Eigið afrit}} eða {{ui:Tengt}}; {{ui:Gera að eigin afriti}} gerir tengda sýn óháða. Sjá [Vinnustíll, afrit af sýnum, pennar á pappír, Tilkynna sem og sniðmát](topic:working-style).
- **Prentaðu eins og sýnt, eða í gegnum penna-töflu.** Penna-yfirskrift er geymd í IFC-skránni með sýninni, og blöð og PDF-skrár teikna þær eins og skjárinn gerir. Sama efni nær yfir penna-töflur.
- **Tilkynna sem.** {{ui:Tilkynna sem}} í {{ui:Eiginleikar}} skrifar plötu sem teiknuð er sem veg, vegg sem spjald eða þak sem rampa í IFC sem þann flokk sem þú velur, og telur hana þannig í listum, magntölum, Finna, Lita eftir og vandamálum.
- **Breyttu í lofthæðar- og sniðmyndum.** Teiknaðu og færðu veggi, op, kóta, málsetningar og athugasemdir beint í lofthæðar- eða sniðmynd, með þínum eigin blaðastærðum og titilreitum. Sjá [Breyta í lofthæðar- og sniðmyndum](topic:edit-in-elevations).
- **Blöð.** Hvert blað getur verið á breidd eða á hæð. Reitur {{ui:Sláðu inn mælikvarða}} situr við hlið mælikvarðalistans á hverri sýn sem er sett á blað (1:64, 2:1, 1/4" = 1'). Þú getur dregið sett teikningu eða hreyft hana með örvatökkunum, og {{ui:Snið…}} › {{ui:Flytja inn SVG…}} breytir þinni eigin blaðahönnun í titilreit með reitum sem eru skrifaðir inn fyrir hvert blað.
- **Safnheiðar á blaði.** Teikningasett með hlutum úr safninu fær lista yfir safnheiðar sem þú getur sett á hvaða blað sem er. Sjá [Heiðar safns](topic:library-credits).

### Safn: staðsetning

- **Staðsetning fylgir sýninni.** Í grunnmyndarsýninni sýnir safnið {{ui:Staðsetja á grunnmynd}}; í þrívídd sýnir það {{ui:Staðsetja í líkani}}; í Skipt sýnir það skiptan hnapp með {{ui:Staðsetja á grunnmynd}} sem aðgerð. Báðar leiðir skrifa sama IFC-hlutinn. Þú getur líka dregið kort úr safninu á grunnmyndina eða þrívíddarsýnina; með penna eða fingri ýtirðu og heldur inni, og dregur síðan. Sjá [Staðsetja úr safninu](topic:place-from-library).

### Skrár og aðstoðarmenn

- **Collada og Google Earth.** {{ui:Collada}} á tækjastikunni (Skrá-valmyndin í valmyndastílunum) skrifar .dae, eða .kmz staðsett þar sem líkanið er á kortinu. Sjá [Flytja út líkanið sem Collada eða fyrir Google Earth](topic:collada).
- **Aðstoðarmenn geta sett inn rafbúnað.** Tengdur aðstoðarmaður þinn hefur ný verkfæri til að bæta við, lista, breyta og eyða tækjum og stilla ljós. Aðstoðarmenn eru slökktir þar til þú kveikir á þeim í {{ui:Stillingar}}. Sjá [Láttu gervigreindaraðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Scan to BIM (viðbót).** Slökkt sjálfgefið og þarfnast viðbótarinnar Punktský. Hún leggur til gólf, veggi, hurðir og glugga út frá skanna, með mældu frávikinu fyrir hvert; samþykki er eitt afturkallsskref.

### Greining

- **Gögn um vind og jarðskjálfta á lóð.** Í flipanum {{ui:Greining}}: vindálag samkvæmt ASCE 7-10 eða 7-16 fyrir stíft lokað hús, með krafti á hverri hæð sem álagstilvik, og gögn um jarðskjálftalóð með leit í USGS og hönnunarsvörunarlínunni.
- **Framhaldsgreining og endanleg frumefni.** Steypuathuganir samkvæmt ACI 318-19, jafngild hliðarkraftar samkvæmt ASCE 7-22, hæðarhliðrun, plötur og veggir sem plötur, og álagssamsetningar úr ASCE 7 og EN 1990. Okkar eigin vél fyrir endanleg frumefni reiknar skeljar, fjórflötunga og mótgreiningu. Sjá [Athugaðu steypuhluta og gerðu jarðskjálftaálag](topic:concrete-and-seismic) og [Rammagreining](topic:frame-analysis).

### Aðrar viðbætur og skjöl

- **Innilýsing (viðbót).** Setur ljósabúnað og skrifar birtustigið í tölum inn á grunnmynd hvers kóta, með mati á glampa og prentanlegri skýrslu.
- **Skjalaspjald.** {{ui:Skrá}} › {{ui:Skjöl…}} hefur útskráningu og innskráningu með læsiskrá, endurskoðunarstafi, útgáfustöður og sögu.
- **Svæði og stál.** Suður-afrísk teikni- og byggingarreglugerðarsöfn í viðbótinni Reglugerðir, og 976 breskar stálstærðir í sameiginlegu sniðtöflunni.
- **Ókeypis viðbætur fyrir plastefnisprentun.** Sneiðari, stuðningar og grunnplata, prófun á lýsingu, og skráarsniðin GOO, SL1, Chitubox og Anycubic, allt slökkt sjálfgefið.

## Í öllum forritum

- Þegar bendill er yfir hnappi eða stjórntæki birtist Bootstrap-ábending.
- Byrjunarábendingin á tómu teiknisvæði hefur lokunarhnapp; BimCraft man að hún var lokuð.
- Flipaöð spjalds sem passar ekki skrunar nú í stað þess að vera skorin af.
- Með skjal opið sýnir vafraflipinn „<skjal> - BimCraft | CadCraft“.
- Í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Uppsetning}} eru uppsetningarnar fellilisti með tveggja lína valkostum.
- Tungumálalistinn í {{ui:Stillingar}} býður fleiri tungumál en í 0.8; tungumál önnur en enska eru vélræn drög.

## Lagfært

- **Færsla virkar á stigum,** og á rampum, handriðum, þakplötum, lausstandandi tækjum, myndum og slóðum.
- **Að draga vegg skekkir ekki lengur herbergið.** Miðgripið færir vegginn ferhyrndan að sjálfum sér og hornin renna eftir tengdum veggjum. Haltu inni {{key:Mod}} fyrir gömlu frjálsu færsluna; {{ui:Rétta af}} skilar 90 gráðum.
- **Breyting á þykkt eða gerð á tengdum hnút** heldur nú horninu lokuðu við L, T, þriggja-veggja hnút og við bogadreginn vegg.
- **Færsla eða afrit af hópi herbergja** heldur tengdum veggjum utan hópsins tengdum.
- **Endurgerð heldur auðkenni málsetningar veggs.**
- **Að velja vegg með Teikna slökkt** veldur ekki lengur villu í Eiginleikum.
- **Myndgerð fellur yfir í WebGL** þegar GPU-inn getur ekki ræst, í stað þess að stöðvast.
- **Hægt er að kveikja aftur á EnergyPlus-athuguninni.**
- **Skjöl opnast sem miðjaður gluggi.** {{key:Esc}}, X eða smellur á dökkvaða síðuna lokar honum.
- **Hnapparnir {{ui:Grunnmynd}}, {{ui:Skipt}} og {{ui:3D}} birtast** um leið og líkan er opnað, ekki aðeins eftir að Teikna hefur verið kveikt einu sinni.

## Hreinskilin takmörk

- Ekkert var prentað á raunverulegum búnaði. Plastefnisstuðningarnir eru nýir og óprófaðir.
- Vind-, jarðskjálfta-, steypu- og niðurstöður endanlegra frumefna eru hjálpartæki fyrir verkfræðing, prófuð gegn lokuðum formúlum, ekki gegn raunverulegri byggingu.
- Scan to BIM var prófað á tilbúinni byggingu, ekki raunverulegum skanna, og finnur aðeins rétthyrnd rými.
- Collada hefur ekki verið opnað í Blender eða Google Earth hér.
- Birtustigsmatið er prófað gegn okkar eigin rakningu, ekki gegn öðrum lýsingarforritum.
- Suður-afrísku tölurnar eru óstaðfestar.
- Samskeytastíll veggja (stumpur, skáskurður, ferhyrnd lokun) og forgangur laga eru ekki smíðuð; horn eru skáskorin.
- Tungumál önnur en enska eru vélræn drög.

Allt annað er í [Það sem er ekki smíðað enn](topic:not-built-yet). Eldri breytingar eru í útgáfuskýringunum 0.8 og 0.8.1 neðar á þessari síðu.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), samanborið við 0.7. BimCraft getur nú svarað spurningum um byggingu og prófað hana, með fólki, hljóði, vatni, vindi og jarðskjálftum, og teiknað hana með fleiri verkfærum; 0.8.1 er lagfæringarútgáfa.

### Nýtt

**Prófaðu bygginguna**

- **Fólk í byggingunni.** Hlutinn {{ui:Fólk í byggingunni}} í vinstra spjaldinu leiðir rýmingu eða venjulegan dag af komum gegnum herbergi, hurðir og stiga. Þú sérð biðraðirnar þar sem byggingin þrengist, lengstu leiðina út úr hverju herbergi og hversu langan tíma sá síðasti tekur. Hakaðu við {{ui:Lokað}} á hurð til að sjá hvað breytist, og hakaðu við {{ui:Sýna fólkið í þrívíddarmyndinni}} til að fylgjast með göngufólkinu. Niðurstöðurnar fara í Vandamál. Gróft líkan af mannfjölda fyrir hönnunarákvarðanir, ekki brunavarnavottorð. Sjá [Láta fólk ganga um bygginguna](topic:people-in-the-building).
- **Hljómburður rýma, og hlustaðu á hann.** Hlutinn {{ui:Hljómburður rýma}} gefur endurómunartíma hvers rýmis eftir áttundarbandi (Sabine og Eyring) út frá stærð þess og frágangi sem þú velur, og með þínu eigin markmiði segir hann hversu mikil hljóðdeyfing þyrfti til að ná því. {{ui:Spila í þessu rými}} spilar rödd, klapp, plokkaða tóna eða þína eigin hljóðskrá í gegnum hvatasvörun reiknaða fyrir rýmið. Hljóðdeyfigildin eru dæmigerð birt gildi sem þú átt að skipta út. Sjá [Hljómburður rýma](topic:room-acoustics).
- **Flóð-, vind- og jarðskjálftaspilun.** {{ui:Afspilun vár}} spilar vatn sem hækkar um rýmin, vindþrýsting á hverri hæð og jarðskjálfta sem hristir hæðirnar, á grunnmynd eða lofthæðarmynd með tímasleða. Einföld líkön með forsendum sínum á spjaldinu; ekki athugun á reglugerð. Sjá [Spila flóð, vind eða jarðskjálfta](topic:hazard-playback).
- **Hvað slitnar á fimmtíu árum.** {{ui:Yfirlit yfir líftíma}} listar gluggana, hurðirnar, frágang og þakið með þjónustutíma hvers, árin sem þau eru endurnýjuð og, þegar þú skrifar kostnað á hverja einingu, kostnað eftir ári og núvirði hans. {{ui:Vista áætlunina (CSV)}} skrifar hana út. Þjónustutímarnir eru áætlunartölur. Sjá [Sjá hvað slitnar á fimmtíu árum](topic:life-cycle-view).
- **Steypu- og jarðskjálftaathuganir.** Reitirnir {{ui:Steypuhlutar}} og {{ui:Jarðskjálftaálag}} í flipanum {{ui:Greining}} athuga steypta bita og súlur samkvæmt ACI 318-19 og reikna jafngilda hliðarkrafta samkvæmt ASCE 7-22 á stífum gólfum, með hæðarhliðrun. Fyrir verkfræðing til að yfirfara. Sjá [Athugaðu steypuhluta og gerðu jarðskjálftaálag](topic:concrete-and-seismic).

**Athugaðu og skýrðu**

- **Athugaðu gegn IDS.** Hlaðið `.ids`-skránni sem viðskiptavinurinn gaf þér og sjáðu alla hluti sem uppfylla hana ekki í Vandamál, áður en þú skilar IFC. Opnaðu {{ui:Athuga gegn IDS}} undir {{ui:Líkanathuganir}}. Sjá [Athugaðu líkan gegn IDS viðskiptavinar](topic:check-against-ids).
- **Merki og listar.** Skilgreindu eigin merki, settu þau á marga hluti í einu og búðu til lista sem dálkar, síur og hópar lesa; merkin eru geymd í IFC. Sjá [Merki og listar](topic:tags-and-schedules).
- **Skjöl úr líkaninu.** {{ui:Skjöl úr líkaninu}} fyllir út forskriftarsniðmát úr opnu IFC og vistar sem PDF, Word-skjal eða Markdown. Sjá [Skjöl úr líkaninu](topic:documents-from-the-model).
- **Berðu skanna saman við líkanið.** Með punktaský opið metur {{ui:Bera saman}} hvern hlut sem smíðaðan, að hluta smíðaðan, vantandi eða ekki náðan, og sýnir hlutfall smíðaðs. Sjá [Berðu skanna saman við líkanið](topic:compare-scan-with-model).
- **Kolefni og kostnaður.** Kolefnisrúðan leggur saman innbyggt kolefni út frá stuðlatöflu sem þú getur breytt, og kostnaðarrúðan dreifir verði yfir 4D-áætlunina. Stuðlarnir sem fylgja BimCraft eru almennir og merktir óathugaðir. Sjá [Innbyggt kolefni og kostnaður](topic:embodied-carbon-and-5d-cost).
- **Hvaða kortavarpa sem er.** {{ui:Mæla}} › {{ui:Hnitakerfi…}} tekur EPSG-númer, UTM-svæði, heiti eða þína eigin skilgreiningu á varpi. Sjá [Staðsetning með hvaða varpi sem er](topic:georeference-any-projection).

**Teiknaðu og breyttu**

- **Færa, Jafna og Dreifa.** Undir {{ui:Smíð}}; {{key:Shift+M}} ræsir Færa (venjulegt {{key:M}} er enn Mæla). Færsla afritar um leið með {{key:C}}, hvert skref er eitt afturkallsskref, og hún berst í Live TeamWork-lotu. Sjá [Færa, afrita, jafna og dreifa](topic:move-align-distribute).
- **Myndir undir grunnmyndinni.** {{ui:Smíð}} › {{ui:Mynd}} setur PNG, JPEG eða WebP undir grunnmynd kóta eða á lóðrétt plan. Stilltu mælikvarðann með tveimur punktum, og færðu, snúðu, dofnaðu og læstu henni. Svæði sem afritað er í MarkupCraft límist inn í mælikvarða blaðsins. Sjá [Settu mynd undir grunnmyndina](topic:pictures-as-backgrounds).
- **Veggir úr skanna.** Þegar skanni er opinn koma veggir, hurðir og rými sem tillögur sem þú heldur eða hafnar einni í einu, í einu afturkallsskrefi. Aðeins veggir í tveimur hornréttum stefnum finnast. Sjá [Breyttu skanna í veggi](topic:scan-to-walls).
- **Rekja, pennar og skissustigi.** {{ui:Rekja}} sýnir annan kóta brotinn undir grunnmyndinni, {{ui:Pennar}} gefa veggjum, hurðum og gluggum sína eigin línuþykkt í einni sýn, og {{ui:Skissa stiga}} breytir gönguslóð í stiga. Wavefront OBJ-möskvi opnast. Sjá [Rektu kóta, penna og stiga úr skissu](topic:trace-pens-stairs-obj).
- **Byggingar í kringum heimilisfang.** Byggingarnar og lóðin sem CivilCraft fann með Heimilisfang í lóð berast sem tillögur; þú hakar við þær sem þú vilt bæta við. Sjá [Byrjaðu á lóð úr CivilCraft](topic:site-from-civilcraft).
- **Einingateikningar.** {{ui:Smíð}} › {{ui:Einingateikningar}} ramma inn veggi, gólf og þök úr timbri eða léttstáli og vistar skurðarlista sem CSV og verkstæðisteikningar sem PDF. Upphafsgildi, ekki burðarvirkishönnun. Sjá [Einingateikningar](topic:panel-drawings).
- **Táknaspjald og plöntur.** {{ui:Smíð}} › {{ui:Táknaspjald}} finnur rafmagns- og lagnatákn eftir heiti; {{ui:Plöntur}}-uppsprettan í {{ui:Safn}} listar um 400 plöntur með grunnmyndartáknum. Sjá [Táknaspjald](topic:symbol-palette) og [Settu plöntu](topic:plant-list).

**Pípur, loftstokkar og orka**

- **Skipt kerfi, VRF og viftueiningar.** Inni- og útieiningar með tengingum sínum, og kælilagnir stærðar úr töflu með dæmigerðum dæmagildum sem þú getur breytt. Sjá [Skipt kerfi, VRF og viftueiningar](topic:split-vrf-fan-coils).
- **Útreikningar.** Reikniglugginn athugar stærðir veitupípna og loftstokka með þrýstingsfalli, leiðir kapla í bökkum og rörum og sýnir fyllingu þeirra, og reiknar birtustig úr IES- eða EULUMDAT-skrám. Sjálfgefin gildi eru merkt; skrifaðu inn gildin úr þínum staðli. Sjá [Útreikningar á pípum, loftstokkum, kaplum og ljósi](topic:mep-calculations).
- **PCF-skrár.** **Flytja út PCF** í Pípuverkfærinu skrifar lagnirnar fyrir álagsforrit pípa og ísómyndaforrit, og PCF-skrá sem er lesin aftur teiknar pípu sína. Sjá [Skrár fyrir pípuhluti](topic:piping-pcf).
- **Sólarorka (PV).** Settu fylki á þök eða jörð, skyggðu þau frá líkaninu, áætlaðu orku ársins, athugaðu strengi og búðu til einlínumynd. Upphafseining og tap eru almenn. Sjá [Sólarorka (PV)](topic:solar-pv).
- **EnergyPlus-skrá.** Glugginn Athuga með EnergyPlus skrifar líkanið sem IDF til að keyra í þínu eigin EnergyPlus. Keyrsla í vafranum þarfnast útgáfu sem þú hýsir sjálfur og slærð inn vistfangið á; BimCraft ber hana ekki með sér. Sjá [Athugaðu hitun og kælingu með EnergyPlus](topic:check-with-energyplus).

**Myndir og skrár**

- **Veldu myndgerðarvél.** {{ui:Myndgerð}} hefur val um {{ui:Vél}}. Tvær innbyggðu vélarnar okkar (Hröð og Slóðarakning) eru áfram sjálfgefnar. **Opna í** vistar senuna sem USD- eða glTF-skrá, og verkefnismöppu Unreal sem .zip; í CadCraft Studio getur viðbót bætt við vél. Unreal-viðbótin sem opnar verkefnið er ekki gefin út. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Afturköllun í Studio.** Innan CadCraft Studio segir BimCraft Studio frá hverju loknu skrefi svo Studio geti afturkallað síðasta skref þitt í þeim glugga sem þú notaðir síðast. Sjá [Afturköllun milli forrita](topic:undo-across-apps).
- **Viðbætur í skránni þinni.** IFC skráir hvaða viðbætur skrifuðu í hana, og býður þær sem þig vantar þegar þú opnar hana. Sjá [Viðbætur í skránni þinni](topic:add-ons-in-your-file).

**Í öllum forritum**

- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður getur stýrt BimCraft í gegnum tengingu Studio og svarað spurningum um líkanið, svo sem hvaða rými eru undir tilteknu flatarmáli. Studio hefur enga gervigreind sjálft. Sjá [Láttu gervigreindaraðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} býður Vefja, 2 línur eða 1 línu; Vefja er áfram sjálfgefið.
- **Inntakstæki.** Stillingar fyrir snertiflöt, penna, þrívíddarmús, stýripinna og MIDI eru sameiginlegar öllum forritunum.
- **Vandamál og Live.** Viðvörunarspjaldið og Live-lotur virka eins og áður, með nýju athugununum hér að ofan sem fæða Vandamál.
- **Tungumál.** 54 tungumál, tíu þeirra ný. Þau önnur en enska eru vélræn drög sem móðurmálshafi hefur ekki lesið enn; hjálparefnið er að mestu á ensku.

### Lagfært í 0.8.1

- **Borði og uppsetning verkefnavafra.** Insert › Import CAD, Insert › Image og Manage › Project Units sögðu „Not built in BimCraft yet“. Image opnar nú Mynd-verkfærið, Import CAD opnar {{ui:Smíð}} › {{ui:Úr teikningu…}} (DWG, DXF, PDF eða skanna), og Project Units opnar {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Einingar}}. Move og Align keyra Færa- og Jafna-verkfærin, Level opnar {{ui:Bæta við kótum…}}, Phases opnar hlutann Endurbótafasar og Materials opnar efnasafnið.
- **DWG-flokkahluti.** Hann var lesinn sem röng tegund; lagfært í BimCraft og hinum forritunum sem lesa DWG.
- **Tungumál við keyrslu.** Studio og pakkaðar útgáfur geta nú skipt um tungumál án endurræsingar. Þetta er ekki enn prófað á öllum kerfum; láttu okkur vita ef tungumálið breytist ekki.
- **Archicad-pakkaskrift.** `archicad_bundle.py`, sérstakt niðurhal, finnur nú slóð Archicad, fylgist með möppunni í allt að 20 sekúndur og reynir aftur við hliðina á pakkanum.

### Ekki í þessari útgáfu enn

- **Öryggis- og hönnunarhjálpartæki.** Fólk í byggingunni hefur engin mörk á ferðalengd úr byggingarreglugerð (þú skrifar inn mörkin) og hefur ekki verið yfirfarið handvirkt á raunverulegri teikningu. Hljóðvistar-, líftíma- og hættutölur eru áætlunargildi, ekki athugun á reglugerð.
- **Loftslagsframtíðir og EnergyPlus.** Engar innbyggðar loftslagsframtíðir: þú getur hlaðið sviðsmyndaskrá fyrir flóðkeyrsluna. EnergyPlus-keyrslan í vafranum er ekki hluti af þessari útgáfu.
- **Borðuppsetning.** Efnismagn stendur áfram „Not built“ því BimCraft hefur enga efnismagnaskrá, og 54 önnur grá borðverkfæri hafa enn ekkert BimCraft-verkfæri að baki sér.
- **Undirritun og stýrikerfi.** Windows-uppsetningarforrit og macOS .dmg eru óundirrituð, svo SmartScreen sýnir {{ui:Nánari upplýsingar}}, síðan {{ui:Keyra samt}}, og macOS þarfnast hægri smells og síðan {{ui:Opna}}. iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- **Prófanir á raunverulegum síðum.** Sumar eldri vafraprófanir BimCraft falla enn á prófunarsíðunni okkar, eins og þær gerðu fyrir 0.8.1.

Allt annað er í [Það sem er ekki smíðað enn](topic:not-built-yet). Breytingar fyrir 0.7 eru í [Nýtt í 0.7](topic:whats-new-0-7).
