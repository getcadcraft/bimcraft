---
title: Nýtt í 0.9
summary: Lögun veggja, skipting, frávik, teygja og læsing við ristlínu, kjallarakótar, málsetningar á ristum og Mæla á grunnmynd, afrit af sýnum með vinnustílum og pennatöflum, Tilkynna sem, Collada- og Google Earth-útflutningur, Scan to BIM, vind- og jarðskjálftagreining og viðbætur fyrir þrívíddarprentun með resíni.
keywords: nýtt í, 0.9, útgáfuskýringar, lögun veggja, ferhyrningur, marghyrningur, bogi, velja línur, rekja útlínu, frávik, tenging, teygja í reit, jafna og læsa, skipta vegg, bil, tengja aftur, læsa við ristlínu, vaxa frá, mæla frá, bæta við kóta fyrir neðan, kjallari, kótaskipun, málsetningar á ristum, mæla á grunnmynd, vinnustíll, afrit af sýn, eigið afrit, tengd sýn, pennatafla, prenta eins og sýnt, tilkynna sem, mælikvarði, flytja inn svg, setja á grunnmynd, setja í líkan, collada, dae, kmz, google earth, scan to bim, vindálag, jarðskjálfti, endanleg þáttagreining, skjalaspjald, þrívíddarprentun með resíni, nýtt í, nýtt í 0.9, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, rýmning, fólk, raðir, hljómburður, endurómun, hvatasvörun, flóð, vindur, jarðskjálfti, hætta, líftími, líftímaþjónusta, ids, merki, töflur, færa, jafna, dreifa, mynd, bakgrunnur, skanni í veggi, lóð frá civilcraft, panelteikningar, grindun, sól, pv, skipting, vrf, viftueining, rörastærð, kapalbakki, lýsing, steypa, jarðskjálfti, bera saman skanna, epsg, varpun, skjöl, sniðmát, kolefni, kostnaður, energyplus, myndgerðarvél, opna í, usd, glb, unreal, afturkalla, viðbætur, pcf, tákn, plöntur, rekja, pennar, borði, verkefnavafri, útlit
from: 5624fe88
---

Þetta er það sem breyttist í BimCraft 0.9, miðað við 0.8.1. Tvö meginþemu eru raunverulegt veggverkfæri og sýnir sem hegða sér eins og fólk sem kemur frá stóru BIM-forritunum býst við. Í kringum þau koma Collada-útflutningur, aðstoðarmenn sem geta sett rafmagnstæki, Scan to BIM, og vind-, jarðskjálfta- og endanleg þáttagreining í flipanum {{ui:Greining}}.

## Nýtt

### Veggir

- **Teiknaðu heilar lögun.** Í {{ui:Teikna}} skaltu opna {{ui:Form}} (eða velja lögun í **Lögun**-listanum í veggröðinni) fyrir rétthyrning, snúinn rétthyrning, marghyrning með 3 til 64 hliðum, boga eftir miðju, snertiboga, veggi á völdum línum, eða veggi í kringum lokað svæði sem þú smellir inn í. Rétthyrningur eru fjórir veggir með fjórum tengdum hornum og eitt skref til afturköllunar. Sjá [Lögun veggja, skipting, frávik, teygja og læsing](topic:wall-tools).
- **Stilltu áður en þú teiknar, breyttu eftir á.** Veggröðin hefur {{ui:Frávik}} og {{ui:Tenging}} (taktu hakið af til að teikna frístandandi veggi). Eftir á notarðu {{ui:Frávik}}, {{ui:Teygja í reit}} og {{ui:Jafna og læsa}} á teiknaða veggi. Veggur sem er færður eða teygður heldur hurðum sínum, gluggum og málsetningum. Sérhver uppskrift er eitt skref til afturköllunar.
- **Skerðu veggi.** {{ui:Skipta}}, {{ui:Bil}}, {{ui:Frjálsir endar}}, {{ui:Eyða hluta}} og {{ui:Tengja aftur}} skera vegg þar sem þú smellir eða þar sem annar veggur krossar hann. Skurður í gegnum hurð er hafnað. Sjá [Lögun veggja, skipting, frávik, teygja og læsing](topic:wall-tools).
- **Læstu veggjum við ristlínur.** Veldu vegg meðfram ristlínu og merktu {{ui:Læsa við ristlínu}} í {{ui:Eiginleikar}}. Með ristverkfærið virkt skaltu slá inn fjarlægð í {{ui:Færa um}} fyrir valda línu, og læstu veggirnir fylgja í einu skrefi til afturköllunar.
- **Lögun eins veggs.** Í {{ui:Eiginleikar}} eins veggs geturðu fest efri brún hans eða grunn við þak, gólf eða loft, breytt útlínu hans í útlitsmynd, hallað honum, eða skorið op í vegg án hurðar eða glugga. Sjá [Móta vegg](topic:wall-shape).
- **Lengd segir hvaða endi heldur.** {{ui:Vaxa frá}} stillir hvort upphafið, endinn eða miðjan heldur sér þegar þú breytir lengdinni.
- **Lengd og málsetning á grunnmynd stemma.** {{ui:Mæla frá}} (miðlína, innri flötur eða ytri flötur) stýrir bæði lengdarreitnum og málsetningum veggja á grunnmyndinni. Það byrjar á miðlínunni, svo málsetningar veggja á grunnmyndinni lesa nú miðlínuna þar sem þær lásu áður ytri flötinn. Breyttu því í veggröðinni, í {{ui:Eiginleikar}} eða í {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Veggir}}.

### Kótar, ristir og mælingar

- **Bæta við kóta fyrir neðan.** {{ui:Bæta við kóta fyrir neðan}} í rúðunni {{ui:Kótar}} bætir kóta undir þeim lægsta, jafnháum honum, á neikvæðri hæð (Kóti -1, Kóti -2). Ekkert annað færist. {{ui:Bæta við kótum…}} tekur nú við neikvæðum hæðum. Ef þú skrifar LEVEL, LEVELS, STOREY eða STOREYS í skipanalínuna opnast {{ui:Bæta við kótum…}}, og það er {{ui:Kótar}}-hnappur í valmyndum og borðaflipum. Sjá [Lóðir, byggingar og kótar](topic:site-building-and-levels).
- **Málsetningar á ristum á grunnmynd.** Með ristverkfærið virkt skaltu merkja {{ui:Málsetningar}} til að teikna bilið milli nágrannalína og heildarstærðina út fyrir hringina á grunnmynd hvers kóta. Sjá [Málsetja rist](topic:grid-dimensions).
- **Mæla á grunnmynd.** {{ui:Mæla}} í {{ui:Teikna}}-hópnum gefur fjarlægð með X- og Y-mismun milli tveggja smella. Ekkert er vistað í líkaninu. Sjá [Mæla á grunnmynd](topic:measure-on-the-plan).
- **Breyta nokkrum súlum í einu.** Veldu súlur ásamt vegg og valið sýnir hverja tegund með {{ui:Halda aðeins þessum}}. Einn smellur heldur súlunum og sýnir sameiginlega reiti þeirra.
- **Ein birtingareining alls staðar.** Hnit, mælingar, snið, mælikvarðar blaða, álag og niðurstöður í ramma-flipanum og texti vandamála fylgja þeirri einingu sem þú velur. Útflutningar haldast í SI.

### Sýnir, blöð og prentun

- **Vinnustíll.** {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Vinnustíll}} velur hvort hver sýn hefur sínar eigin skýringar og pennatöflur, eða deilir þeim. Sjá [Vinnustíll, afrit af sýnum, pennar á pappír og Tilkynna sem og sniðmát](topic:working-style).
- **Afrit af sýn.** Grunnmyndir, lofteyjumyndir, kallanir, útlit og snið má afrita sem {{ui:Eigið afrit}} eða {{ui:Tengt}}; {{ui:Eigið afrit}} gerir tengda sýn óháða. Sjá [Vinnustíll, afrit af sýnum, pennar á pappír og Tilkynna sem og sniðmát](topic:working-style).
- **Prentað eins og sýnt, eða í gegnum pennatöflu.** Pennayfirskrifanir eru geymdar í IFC með sýninni, og blöð og PDF-skjöl teikna þær eins og skjárinn gerir. Sama efni fjallar um pennatöflur.
- **Tilkynna sem.** {{ui:Tilkynna sem}} í {{ui:Eiginleikar}} skrifar plötu sem er teiknuð sem vegur, vegg sem spjald eða þak sem rampa í IFC sem þann flokk sem þú velur, og telur hana þannig í listum, magntölum, leit, lit eftir og vandamálum.
- **Breyta í útlitsmyndum og sniðum.** Teiknaðu og færðu veggi, op, kóta, málsetningar og athugasemdir beint í útlitsmynd eða sniði, með eigin blaðastærðum og titilreitum. Sjá [Breyta í útlitsmyndum og sniðum](topic:edit-in-elevations).
- **Blöð.** Sérhvert blað getur verið láréttt eða lóðrétt. Reitur {{ui:Sláðu inn mælikvarða}} situr við hlið mælikvarðalistans á hverri settri sýn (1:64, 2:1, 1/4" = 1'). Þú getur dregið settri teikningu eða hnikað henni með örvatökkunum, og {{ui:Snið…}} › {{ui:Flytja inn SVG…}} gerir þína eigin blaðahönnun að titilreit með reitum sem slegnir eru inn á hvert blað.
- **Safnkreditar á blaði.** Teikningasett með safnhlutum fær lista yfir safnkredita sem þú getur sett á hvaða blað sem er. Sjá [Safnkreditar](topic:library-credits).

### Safn: staðsetning

- **Staðsetning fylgir sýninni.** Í grunnmyndarsýninni sýnir Safnið {{ui:Setja á grunnmynd}}; í 3D sýnir það {{ui:Setja í líkan}}; í skiptingu sýnir það skiptan hnapp með {{ui:Setja á grunnmynd}} sem aðgerð. Báðar leiðir skrifa sama IFC-hlutinn. Þú getur líka dregið spjald úr Safninu á grunnmyndina eða 3D-sýnina; með penna eða fingri ýtirðu á og heldur inni, og dregur síðan. Sjá [Setja úr Safninu](topic:place-from-library).

### Skrár og aðstoðarmenn

- **Collada og Google Earth.** {{ui:Collada}} á tækjastikunni (Skrá-valmyndinni í valmyndastílunum) skrifar `.dae`, eða `.kmz` sett þar sem líkanið er á kortinu. Sjá [Flytja líkanið út sem Collada eða fyrir Google Earth](topic:collada).
- **Aðstoðarmenn geta sett rafmagnstæki.** Tengdi aðstoðarmaðurinn þinn hefur ný verkfæri til að bæta við, lista, breyta og eyða tækjum og kveikja og slökkva ljós. Aðstoðarmenn eru slökktir þar til þú kveikir á þeim í {{ui:Stillingar}}. Sjá [Láttu AI-aðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Scan to BIM (viðbót).** Slökkt sjálfgefið og þarf viðbótina Punktský. Hún leggur til hæðir, veggi, hurðir og glugga úr skanna ásamt mældu frávikinu fyrir hvert; samþykki er eitt skref til afturköllunar.

### Greining

- **Vind- og jarðskjálftagögn um staðinn.** Í flipanum {{ui:Greining}}: vindálag samkvæmt ASCE 7-10 eða 7-16 fyrir stíft lokað hús, með krafti á hverri hæð sem álagstilvik, og jarðskjálftagögn um staðinn með USGS-leit og hönnunarrófinu.
- **Eftirfylgni burðarvirkis og endanlegir þættir.** Steypuathuganir samkvæmt ACI 318-19, jafngild hliðarkraftar samkvæmt ASCE 7-22, hæðarskrið, plötur og veggir sem plötur, og álagssamsetningar frá ASCE 7 og EN 1990. Okkar eigin vél fyrir endanlega þætti gerir skeljar, fjórflötunga og mótgreiningu. Sjá [Athuga steypuhluta og búa til jarðskjálftaálag](topic:concrete-and-seismic) og [Greining ramma](topic:frame-analysis).

### Aðrar viðbætur og skjöl

- **Innilýsing (viðbót).** Setur ljósabúnað og skrifar lúxgildin sem tölur í grunnmynd hvers kóta, með mat á glampa og prentanlegri skýrslu.
- **Skjalaspjald.** {{ui:Skrá}} › {{ui:Skjöl…}} hefur útskrift og innskrift með læsiskrá, endurskoðunarstöfum, útgáfustöðum og sögu.
- **Svæði og stál.** Suður-afrísk teikninga- og byggingareglugerðarsett í Reglugerðarviðbótinni, og 976 breskar stálstærðir í sameiginlegu prófílatöflunni.
- **Ókeypis viðbætur fyrir þrívíddarprentun með resíni.** Skeri, stoðir og grunnplata, prófun á lýsingu, og GOO-, SL1-, Chitubox- og Anycubic-skráarsnið, allt slökkt sjálfgefið.

## Alls staðar

- Ef þú heldur bendlinum yfir hnapp eða stjórn birtist Bootstrap-ábending.
- Upphafsábendingin á auðu teiknisvæði hefur lokunarhnapp; BimCraft man að hún var lokuð.
- Flipaöð spjalds sem passar ekki skrunar nú í stað þess að vera klippt af.
- Með skjal opið segir flipinn í vafranum „<skjal> - BimCraft | CadCraft“.
- Í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Útlit}} eru útlitin fellilisti með tveggja lína valmöguleikum.
- Tungumálalistinn í {{ui:Stillingar}} býður fleiri tungumál en í 0.8; önnur tungumál en enska eru vélræn drög.

## Lagfært

- **Færa virkar á stigum,** og á rampa, handrið, þakfleti, frístandandi tæki, myndir og slóðir.
- **Að draga vegg skekkir ekki rýmið lengur.** Miðgripið færir vegginn hornrétt á sjálfan sig og hornin renna eftir tengdu veggjunum. Haltu inni {{key:Mod}} fyrir gömlu frjálsu færsluna; {{ui:Rétta af}} skilar 90 gráðum.
- **Breyting á þykkt eða gerð á tengdum hnúti** heldur nú horninu lokuðu við L, T, þriggja veggja hnút og við hlið bogadregins veggs.
- **Að færa eða afrita hóp af rýmum** heldur tengdum veggjum utan hópsins tengdum.
- **Endurgerð heldur auðkenni málsetningar veggs.**
- **Að velja vegg með Teikna slökkt** veldur ekki lengur villu í {{ui:Eiginleikar}}.
- **Myndgerð fellur yfir í WebGL** þegar skjákortið getur ekki ræst, í stað þess að stoppa.
- **EnergyPlus-athugunina má kveikja aftur.**
- **Skjöl opnast sem miðjuglugga.** {{key:Esc}}, X-ið eða smellur á dekkta síðuna lokar honum.
- **Hnapparnir {{ui:Grunnmynd}}, {{ui:Skipta}} og {{ui:3D}} birtast** um leið og líkan er opið, ekki bara eftir að Teikna hefur verið kveikt einu sinni.

## Hreinskilnar takmarkanir

- Ekkert var prentað á raunverulegan vélbúnað. Resínstoðirnar eru nýjar og óprófaðar.
- Vind-, jarðskjálfta-, steypu- og endanlegra þátta niðurstöður eru athugunartæki fyrir verkfræðing, bornar saman við lokaðar lausnir, ekki við raunverulega byggingu.
- Scan to BIM var prófað á tilbúinni byggingu, ekki raunverulegum skanna, og finnur aðeins rétthyrnd rými.
- Collada hefur ekki verið opnað í Blender eða Google Earth hér.
- Lýsingarmatið er borið saman við okkar eigin geislarakningu, ekki við önnur lýsingarforrit.
- Suður-afrísku tölurnar eru óstaðfestar.
- Samskeytastílar veggja (skáskurður, stúfur, rétt afskorið) og forgangur laga eru ekki smíðuð; horn eru skáskorin.
- Önnur tungumál en enska eru vélræn drög.

Allt annað er í [Hvað er ekki smíðað enn](topic:not-built-yet). Eldri breytingar eru í 0.8- og 0.8.1-skýringunum neðar á þessari síðu.

## Eldra: 0.8 og 0.8.1

Þetta er það sem breyttist í BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02), miðað við 0.7. BimCraft getur nú svarað spurningum um byggingu og prófað hana, með fólki, hljóði, vatni, vindi og jarðskjálftum, og teiknað hana með fleiri verkfærum; 0.8.1 er lagfæringarútgáfa.

### Nýtt

**Prófaðu bygginguna**

- **Fólk í byggingunni.** Hlutinn {{ui:Fólk í byggingunni}} á vinstra spjaldinu lætur rýmingu eða venjulegan dag af komum ganga í gegnum herbergi, dyr og stiga. Þú sérð biðraðirnar þar sem byggingin þrengist, lengstu gönguleið að útgangi úr hverju herbergi og hve langan tíma síðasti maðurinn tekur. Hakaðu {{ui:Lokað}} á hurð til að sjá hvað breytist, og hakaðu {{ui:Sýna fólkið í þrívíddarmyndinni}} til að fylgjast með göngufólkinu. Niðurstöðurnar fara í Vandamál. Gróft mannfjöldalíkan fyrir hönnunarákvarðanir, ekki brunavottorð. Sjá [Láta fólk ganga í gegnum bygginguna](topic:people-in-the-building).
- **Hljómburður rýma, og heyra það.** Hlutinn {{ui:Hljómburður rýma}} gefur endurómunartíma hvers rýmis eftir áttundarbandi (Sabine og Eyring) út frá stærð þess og frágangi sem þú velur, og með markmiði þínu segir hann hversu mikil gleypni myndi uppfylla það. {{ui:Spila í þessu rými}} spilar rödd, klapp, plokkaða tóna eða þína eigin hljóðskrá í gegnum hvatasvörun reiknaða fyrir rýmið. Gleypnitölurnar eru dæmigerð birt gildi sem þú getur skipt út. Sjá [Hljómburður rýma](topic:room-acoustics).
- **Spilun flóðs, vinds og jarðskjálfta.** {{ui:Spilun vár}} spilar vatn sem hækkar um rýmin, vindþrýsting á hverri hæð og jarðskjálfta sem hristir hæðirnar, á grunnmynd eða útlitsmynd með tímasleða. Einfaldar gerðir með forsendum sínum á spjaldinu; ekki samræmisathugun við reglugerð. Sjá [Spila flóð, vind eða jarðskjálfta](topic:hazard-playback).
- **Hvað slitnar á fimmtíu árum.** {{ui:Yfirlit yfir líftíma}} listar gluggana, hurðirnar, frágangana og þakið með líftíma hvers, árin sem þau eru endurnýjuð og, þegar þú slærð inn kostnað á einingu, kostnaðinn eftir ári og núvirði hans. {{ui:Vista áætlunina (CSV)}} skrifar hana út. Líftímarnir eru áætlunartölur. Sjá [Sjáðu hvað slitnar á fimmtíu árum](topic:life-cycle-view).
- **Steypu- og jarðskjálftaathuganir.** Blokkirnar {{ui:Steypuhlutar}} og {{ui:Jarðskjálftaálag}} í flipanum {{ui:Greining}} athuga steypubita og súlur samkvæmt ACI 318-19 og búa til jafngild hliðarkraft samkvæmt ASCE 7-22 á stífum gólfum, með hæðarskriði. Fyrir verkfræðing að yfirfara. Sjá [Athuga steypuhluta og búa til jarðskjálftaálag](topic:concrete-and-seismic).

**Athuga og skýra**

- **Athuga gegn IDS.** Hlaðið `.ids`-skránni sem viðskiptavinurinn gaf þér og sjáið hvern hlut sem uppfyllir hana ekki í Vandamálum, áður en þú afhendir IFC. Opnaðu {{ui:Athuga gegn IDS}} undir {{ui:Líkanathuganir}}. Sjá [Athuga líkan gegn IDS viðskiptavinar](topic:check-against-ids).
- **Merki og listar.** Skilgreindu þín eigin merki, settu þau á marga hluti í einu og búðu til lista sem dálkar, síur og hópar lesa; merkin eru geymd í IFC. Sjá [Merki og listar](topic:tags-and-schedules).
- **Skjöl úr líkaninu.** {{ui:Skjöl úr líkaninu}} fyllir sniðmát fyrir forskrift út frá opna IFC-líkaninu og vistar það sem PDF, Word-skjal eða Markdown. Sjá [Skjöl úr líkaninu](topic:documents-from-the-model).
- **Bera skanna saman við líkanið.** Með punktský opið metur {{ui:Bera saman}} hvern hlut sem smíðaðan, að hluta smíðaðan, vantandi eða ekki náð, og sýnir hlutfall smíðaðs. Sjá [Bera skanna saman við líkanið](topic:compare-scan-with-model).
- **Kolefni og kostnaður.** Kolefnisrúðan leggur saman innbyggt kolefni úr töflu yfir stuðla sem þú getur breytt, og kostnaðarrúðan dreifir verði yfir 4D-áætlunina. Stuðlarnir sem fylgja BimCraft eru almennir og merktir óyfirfarnir. Sjá [Innbyggt kolefni og kostnaður](topic:embodied-carbon-and-5d-cost).
- **Hvaða kortavarpun sem er.** {{ui:Mæla}} › {{ui:Hnitakerfi…}} tekur EPSG-númer, UTM-svæði, nafn eða þína eigin varpsskilgreiningu. Sjá [Staðsetja með hvaða varpun sem er](topic:georeference-any-projection).

**Teikna og breyta**

- **Færa, Jafna og Dreifa.** Undir {{ui:Smíð}}; {{key:Shift+M}} ræsir Færa (venjulegt {{key:M}} er enn Mæla). Færa afritar eftir því sem þú ferð með {{key:C}}, hvert skref er eitt skref til afturköllunar, og það ferðast í Lifandi samvinnulotu. Sjá [Færa, afrita, jafna og dreifa](topic:move-align-distribute).
- **Myndir undir grunnmyndinni.** {{ui:Smíð}} › {{ui:Mynd}} setur PNG-, JPEG- eða WebP-mynd undir grunnmynd kóta eða á lóðrétt plan. Settu mælikvarðann með tveimur punktum, og færðu, snúðu, dofnaðu og læstu henni. Svæði sem afritað er í MarkupCraft límist inn í mælikvarða blaðsins. Sjá [Setja mynd undir grunnmyndina](topic:pictures-as-backgrounds).
- **Veggir úr skanna.** Með skanna opinn koma veggir, hurðir og rými sem tillögur sem þú heldur eða hafnar einni í einu, í einu skrefi til afturköllunar. Aðeins veggir í tveimur hornréttum stefnum finnast. Sjá [Breyta skanna í veggi](topic:scan-to-walls).
- **Rekja, pennar og skissustigi.** {{ui:Rekja}} sýnir annan kóta strikaðan undir grunnmyndinni, {{ui:Pennar}} gefa veggjum, hurðum og gluggum sína eigin línuþykkt í einni sýn, og {{ui:Skissa stiga}} breytir göngulínu í stiga. Wavefront OBJ-net opnast. Sjá [Rekja kóta, penna og stiga úr skissu](topic:trace-pens-stairs-obj).
- **Byggingar í kringum heimilisfang.** Byggingarnar og lóðin sem Heimilisfang í stað CivilCraft fann koma sem tillögur; þú hakar við þær sem þú vilt bæta við. Sjá [Byrja á staðnum úr CivilCraft](topic:site-from-civilcraft).
- **Panelteikningar.** {{ui:Smíð}} › {{ui:Panelteikningar}} rammar veggi, gólf og þök í timbri eða léttu stáli og vistar efnislista sem CSV og verkteikningar sem PDF. Upphafsgildi, ekki burðarhönnun. Sjá [Panelteikningar](topic:panel-drawings).
- **Táknaspjald og plöntur.** {{ui:Smíð}} › {{ui:Táknaspjald}} finnur raf- og pípulagnatákn eftir heiti; {{ui:Plöntur}}-uppsprettan í {{ui:Safn}} listar um 400 plöntur með táknum á grunnmynd. Sjá [Táknaspjald](topic:symbol-palette) og [Setja plöntu](topic:plant-list).

**Pípur, loftstokkar og orka**

- **Klofin kerfi, VRF og viftueiningar.** Inni- og útieiningar með tengingum sínum, og kælivökvalögn stærðuð úr töflu um dæmigerð dæmi sem þú getur breytt. Sjá [Klofin kerfi, VRF og viftueiningar](topic:split-vrf-fan-coils).
- **Útreikningar.** Útreikningsrúðan athugar stærðir á veituleiðslum og loftstokkum með þrýstingsfalli, leiðir kapla í bakka og rör og sýnir fyllingu þeirra, og reiknar lýsingarstyrk út frá IES- eða EULUMDAT-skrám. Sjálfgefnu gildin eru merkt; sláðu inn gildi reglugerðar þinnar. Sjá [Útreikningar fyrir pípur, loftstokka, kapla og ljós](topic:mep-calculations).
- **PCF-skrár.** **Flytja út PCF** í pípuverkfærinu skrifar leiðirnar fyrir álagsgreiningarforrit og samásaforrit, og PCF-skrá sem er lesin til baka teiknar pípu sína. Sjá [Skrár fyrir pípuhluti](topic:piping-pcf).
- **Sólarorka (PV).** Settu fylki á þök eða jörð, skyggðu þau út frá líkaninu, metðu orku á ári, athugaðu strengi og búðu til gögn fyrir eina línu skýringarmynd. Upphafseiningin og tapið eru almenn. Sjá [Sólarorka (PV)](topic:solar-pv).
- **EnergyPlus-skrá.** Rúðan {{ui:Athuga með EnergyPlus}} skrifar líkanið sem IDF til að keyra í þínu eigin EnergyPlus. Að keyra það í vafranum þarfnast útgáfu sem þú hýsir sjálfur og slærð vistfangið inn á; BimCraft ber hana ekki með sér. Sjá [Athuga hitun og kælingu með EnergyPlus](topic:check-with-energyplus).

**Myndir og skrár**

- **Veldu myndgerðarvélina.** {{ui:Myndgerð}} hefur {{ui:Vél}}-val. Tvær innbyggðu vélarnar okkar (Hröð og Geislarakari) eru áfram sjálfgefnar. **Opna í** vistar senuna sem USD- eða glTF-skrá, og Unreal-verkefnamöppu sem .zip; í CadCraft Studio getur viðbót bætt við vél. Unreal-viðbótin sem opnar verkefnið er ekki gefin út. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Afturköllun í Studio.** Innan CadCraft Studio segir BimCraft Studio frá hverju lokið skrefi svo Studio geti afturkallað síðasta skrefið þitt í þeim glugga sem þú notaðir síðast. Sjá [Afturköllun yfir forrit](topic:undo-across-apps).
- **Viðbætur í skránni þinni.** IFC-skrá skráir hvaða viðbætur skrifuðu í hana og býður þeim sem þú vantar þegar þú opnar hana. Sjá [Viðbætur í skránni þinni](topic:add-ons-in-your-file).

**Í öllum forritum**

- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður getur stýrt BimCraft í gegnum tengingu Studio og svarað spurningum um líkanið, eins og hvaða rými eru undir tilteknu flatarmáli. Studio hefur enga gervigreind sjálft. Sjá [Láttu AI-aðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Tækjastikuraðir.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Raðir tækjastikunnar}} býður Vefja, 2 raðir eða 1 röð; Vefja er áfram sjálfgefið.
- **Inntakstæki.** Stillingar fyrir snertiflöt, penna, þrívíddarmús, stýripinna og MIDI eru sameiginlegar fyrir öll forrit.
- **Vandamál og Lifandi.** Viðvörunarspjaldið og Lifandi lotur virka eins og áður, með nýju athugununum hér að ofan sem fæða Vandamál.
- **Tungumál.** 54 tungumál, tíu þeirra ný. Þau önnur en enska eru vélræn drög sem móðurmálsmaður hefur ekki lesið; hjálparefni er að mestu á ensku.

### Lagfært í 0.8.1

- **Borði og verkefnavafra-útlit.** Insert › Import CAD, Insert › Image og Manage › Project Units sögðu „Ekki smíðað í BimCraft enn“. Image opnar nú Mynd-verkfærið, Import CAD opnar {{ui:Smíð}} › {{ui:Úr teikningu…}} (DWG, DXF, PDF eða skanni), og Project Units opnar {{ui:Stillingar}} › {{ui:Global}} › {{ui:Einingar}}. Move og Align keyra Færa- og Jafna-verkfærin, Level opnar {{ui:Bæta við kótum…}}, Phases opnar hlutann Endurbætur í áföngum, og Materials opnar efnissafnið.
- **DWG-flokkahluti.** Hann var lesinn sem rangt tegund; lagfært í BimCraft og hinum forritunum sem lesa DWG.
- **Tungumál við keyrslu.** Studio og pakkaðar útgáfur geta nú skipt um tungumál án endurræsingar. Þetta er ekki enn prófað á öllum stýrikerfum; segðu okkur ef tungumálið breytist ekki.
- **Archicad-pakkahandrit.** `archicad_bundle.py`, sérstakt niðurhal, finnur nú slóð Archicad, fylgist með möppunni í allt að 20 sekúndur og reynir aftur við hlið pakkans.

### Ekki í þessari útgáfu enn

- **Öryggis- og hönnunarhjálpartæki.** Fólk í byggingunni hefur engin ferðafjarlægðarmörk úr byggingarreglugerð (þú slærð inn mörkin) og hefur ekki verið yfirfarið handvirkt á raunverulegri teikningu. Tölur hljóðs, líftíma og hættu eru áætlunargildi, ekki samræmisathugun.
- **Loftslagsframtíðir og EnergyPlus.** Engar innbyggðar loftslagsframtíðir: þú getur hlaðið atburðarásarskrá fyrir flóðkeyrsluna. EnergyPlus-keyrslan í vafranum er ekki hluti af þessari útgáfu.
- **Borði-skipulag.** Efnismagntaka er áfram „Ekki smíðuð“ því BimCraft hefur enga efnismagntölu, og 54 önnur grá borðaverkfæri hafa engin BimCraft-verkfæri að baki sér ennþá.
- **Undirritun og vettvangar.** Windows-uppsetningar og macOS .dmg eru ekki undirritaðar, svo SmartScreen sýnir {{ui:Meira um}}, og síðan {{ui:Keyra samt}}, og macOS þarfnast hægrismells og síðan {{ui:Opna}}. iPad- og iPhone-útgáfan var ekki endurbyggð fyrir 0.8.1.
- **Prófanir á raunsíðum.** Sumar eldri vafraprófanir BimCraft falla enn á prófunarsíðunni okkar, eins og þær gerðu fyrir 0.8.1.

Allt annað er í [Hvað er ekki smíðað enn](topic:not-built-yet). Eldri breytingar eru í [Nýtt í 0.7](topic:whats-new-0-7).
