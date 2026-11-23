---
title: Nýtt í 0.7 (eldra)
summary: BimCraft bætir við veggjum yfir nokkur kótastig og Afrita þessa hæð, veggjum úr PDF-skjölum og skönnum, eigin veggjasamsetningum, ríkari fjölskyldum, MEP-búnaði með tengipunktum, árekstrasettum, opum og pípuspólum, skjölum fyrir eignir, COBie og skynjaralestrum, himni, sól, dagsbirtu á neti og hita- og kæliálagi, skráningu skanna, lifandi sýn og geislarakningu á skjákorti, STEP og USD, afbrigðum safnhluta og fleira fyrir AI-aðstoðarmenn.
keywords: nýtt í 0.7, eldri útgáfa, útgáfuskýringar, breytingaskrá, breytingar, 0.7, útgáfa, nýir eiginleikar, veggir yfir kótastig, afrita þessa hæð, pdf, skanni, rekja, veggir úr grunnmyndum, veggjasamsetningar, lög, kjarni, himna, viðmiðunarmál, efnissafn, birtingareiningar, sýnarstíll, grindun, bitar, fjölskyldur, breytur, táknmynd grunnmyndar, heitir reitir, endurtaka, smáatriðastig, hreiðraðar fjölskyldur, CSV-stærðir, á hvern hlut, búnaður, tengipunktar, tengingar, lágmarksfjarlægðir, op, pípuspólur, spólublöð, suðu á staðnum, skurðarlisti loftstokka, skjöl, cobie, skynjarar, mqtt, lifandi straumur, lóðrétt himinhluti, sólarálag, dagsbirtunet, hitun, kæling, álag, u-gildi, skráning skanna, icp, e57, lifandi sýn, geislarakning, webgpu, afhljóð, eðlilegur himinn, ljósblöndun, myndgerðarröð, þín tölva, step, usd, verkpakki, þróa massa, afbrigði, aðstoðarmenn, viðbótar-API, planta, rafmagn, hönnunarathuganir
from: a638080d
---

Þetta er það sem breyttist í BimCraft 0.7, miðað við 0.6. Listinn er flokkaður eftir svæðum, með því mikilvægasta fyrst.

## Nýtt

### Teikna byggingu

- **Veggir yfir nokkur kótastig.** Listi yfir hæð veggsins í verkfærinu {{ui:Wall}} býður **Upp að** hvaða kóta sem er ofar, eins og {{ui:Eiginleikar}} gerir fyrir valinn vegg. Grunnmyndirnar af kótunum þar á milli sýna vegginn ljósari, rými þar loka sig að honum, og hurðir og gluggar má setja í hann frá þessum grunnmyndum; **Fer í gegn** í {{ui:Eiginleikar}} nefnir kótana sem hann fer um. Sjá [Breyta vegg, hurð eða glugga](topic:change-a-wall-or-door#change-a-wall).
- **Afrita þessa hæð.** {{ui:Afrita þessa hæð…}} í {{ui:Hæðir}}-rúðunni teiknar veggi hæðar með hurðum sínum og gluggum aftur á öðrum kóta eða nýjum kóta ofan á, og gólf hennar og loft aftur, í einu skrefi til afturköllunar; rými birtast af sjálfu sér. Sjá [Teikna veggi](topic:draw-walls#levels).
- **Veggir úr PDF eða skanna.** {{ui:Build}} › {{ui:From a drawing…}} tekur nú við PDF (línuverk eða skanni inni í því) eða skannaðri grunnmynd (PNG, JPEG, TIFF, margar síður): hver blaðsíða verður veggirnir, hurðirnar, gluggarnir og rýmin á kóta, með blaðsíðunni geymdri undir grunnmynd sinni. Rakningin notar hvorki net né þjálfað líkan, og niðurstaðan er það sem línurnar gáfu: athugaðu hvern kóta við blaðsíðuna sína. Sjá [Veggir úr setti af grunnmyndum](topic:walls-from-plans).
- **Eigin veggjasamsetningar.** {{ui:Wall assemblies…}} byggir veggjagerð lag fyrir lag, með kjarna, loftbilum og himnum, og forskoðun með málsetningum; {{ui:Material library…}} geymir efni verkefnisins í IFC; {{ui:Annotate}} › {{ui:Reference dimension}} mælir að flötum og kjarnalínum og fylgir veggjunum þegar þeir breytast. Frá samfélagsframlagi, Doc (drsurfbum). Sjá [Veggjasamsetningar og viðmiðunarmál](topic:wall-assemblies).
- **Birtingareiningar og sýnarstýringar.** {{ui:Units}} á tækjastikunni sýnir lengdir í fetum og tommum, tommum, aukastafafetum, millimetrum, sentimetrum eða metrum, í málsetningum, listum, hnitum, mælingum og sniðum. {{ui:Plan}}, {{ui:Split}} og {{ui:3D}} eru á tækjastikunni, skiptinguna má draga (eða færa með lyklaborðinu), {{ui:Shaded}}, {{ui:Edges}} og {{ui:Wireframe}} eru við hliðina á teningnum, og hallinn á þaki, kantur og undirhlið breyta völdu þaki samstundis. Frá samfélagsframlagi, Joel (yisraelk). Sjá [Teikna veggi](topic:draw-walls#levels).
- **Gólfbitar eftir spönn.** {{ui:Framing}} getur lagt út verkfræðilega bita (til bráðabirgða) sem og sagað timbur, og velur minnstu skráðu röðina og dýptina sem nær spönninni, 16" eða 24" miðjað, í hvorri átt sem er; þeir fara í IFC og skurðarlistann. Tillaga úr birtri töflu framleiðanda, ekki verkfræði. Einnig frá Joel. Sjá [Grindun veggja, gólfa og þaka](topic:framing).
- **Fleiri rafmagnstæki.** {{ui:Rafmagn}} bætir við gagna-, síma- og mynd- og hljóðtengum, valrofa, tímarofa, hitastilli, reykskynjurum og hitanemum, handvirkri brunaviðvörun og sírenu, viftu, orkumæli og undirtöflu, hvert með sinn eigin IFC-flokk. Sjá [Rafmagnsgrunnmyndin](topic:electrical-plan).

### Fjölskyldur

- **Fjölskyldur gera meira.** Breytur geta verið heilar tölur, texti, efni, penni eða fylling; fjölskylda getur teiknað eigin táknmynd grunnmyndar, endurtekið fast efni, merkt hluta fyrir grófari smáatriðastig, haldið öðrum fjölskyldum (fótur á borði), og haft heitir reiti sem þú dregur, líka á staðsettum hlut á grunnmyndinni. Stærðir koma úr CSV-töflu, og breytur merktar **Á hvern hlut** láta tvær hurðir af sömu stærð vera ólíkar. Sjá [Breyta fjölskyldu](topic:family-editor#plan-symbol) og [Fjölskyldur og stærðir þeirra](topic:families#sizes-from-a-table).

### Pípur, loftstokkar og búnaður

- **Búnaður með tengipunktum.** {{ui:Smíð}} › {{ui:Búnaður}} setur almenna loftmeðhöndlunareiningu, línuviftu, dælu, katla, vatnshitara, endabúnað, dreifara, rist eða tank, stærðað eftir gildunum sem þú slærð inn, með pípu- og loftstokkstengingum sem tengipunkta. Hver er vistuð sem IFC-flokkur sinn með IFC-tengipunktum. Sjá [MEP-búnaður með tengipunktum](topic:mep-equipment).
- **Tengdar leiðir.** Pípa eða loftstokkur sem byrjar á tengipunkti tekur stærð sína og kerfi og helst fastur við hann: færðu dæluna og pípan fylgir. {{ui:Athuga tengingar}} listar opna tengipunkta, lausa enda, stærðar- og kerfisóhöfn og leiðir sem ekkert veitir. Sjá [Tengja pípur og loftstokka við búnað](topic:mep-connections).
- **Pípur og loftstokkar gegn burðarvirkinu.** {{ui:Árekstrarathugun}} hefur tilbúin sett og {{ui:Pípur og loftstokkar × burðarvirki}} með einum smelli; {{ui:Athuga fjarlægðir}} notar einangrun hverrar leiðar auk bils sem þú slærð inn; {{ui:Göt sem þarf}} listar hvar leiðir fara í gegnum veggi og plötur, sem CSV og BCF-atriði. Ekkert er skorið. Sjá [Athuga pípur og loftstokka gegn burðarvirkinu](topic:mep-against-structure).
- **Stálpípuspólur.** Stálleið er skorin í númeraðar spólur við lengstu lengd og við {{ui:Suða á staðnum}}, sem þú setur; {{ui:Spólublöð (PDF)}} gefur síðu fyrir hverja spólu með samása mynd sinni, skurðarlengdum, tengihlutum, suðum og efnislista, og {{ui:Skurðarlisti loftstokka}} listar beina loftstokkabúta. Sjá [Stálpípuspólur og spólublöð](topic:pipe-spools).

Þetta eru teikni- og samræmingarhjálpartæki, stærðuð af verkfræðingi: ekkert flæði, þrýstingur eða jöfnun.

### Rekstur byggingarinnar

- **Skjöl fyrir hvern hlut.** Flipinn {{ui:Eignir}} tengir handbækur, ábyrgðir, myndir og teikningar við hlut með skráarheiti við hliðina á IFC eða vefslóð; aðeins tengillinn fer í IFC. Sjá [Skjöl](topic:assets-and-maintenance#documents).
- **COBie-töflureikningur.** {{ui:Vista sem COBie (.xlsx)}} skrifar COBie 2.4 afhendingarvinnubókina, og COBie-vinnubók sem er lesin til baka listar hverja breytingu áður en eitt {{ui:Beita}}. Hún hefur ekki verið prófuð í COBie-staðfesti ennþá. Sjá [COBie-töflureikningur](topic:assets-and-maintenance#cobie-spreadsheet).
- **Skynjaralestrar og lifandi straumar.** Opnaðu CSV-skrá af lestrum, eða {{ui:Tengja}} beint úr vafranum við þinn eigin MQTT-miðlara eða vistfang sem byggingarkerfið þitt svarar: hver hlutur sýnir nýjasta lestur sinn og línurit, er litaður á líkaninu og er merktur utan marka sem vistuð eru í IFC. Lestrar haldast í flipanum; lykilorð eru aldrei vistuð. Sjá [Skynjaralestrar](topic:assets-and-maintenance#sensor-readings) og [Lifandi lestrar](topic:assets-and-maintenance#live-readings).

### Dagsbirta og orka

- **Himinn og sól við hvern glugga.** Flipinn {{ui:Dagsbirta}} gefur hverjum glugga lóðréttan himinhluta sinn og hornið á hindrun, fylgir sólinni í gegnum dagsetningu með {{ui:Sól í gegnum glugga á dagsetningu}}, og reiknar {{ui:Dagsbirtustuðull á neti}} yfir hvert rými, teiknað á grunnmynd þess. Sjá [Lóðrétti himinhlutinn við hvern glugga](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Hita- og kæliálag.** {{ui:Hita- og kældarálag}} reiknar varmatap hvers rýmis, hitun þess yfir ár út frá gráðudögum og kæliálag þess hámark, út frá því sem afmarkar það í líkaninu og U-gildi hvers hlutar; U-gildi sem slegið er inn þar er skrifað í IFC. Sjá [Áætlun á hita- og kæliálagi](topic:heating-and-cooling-loads).

Hvort tveggja eru hönnunarhjálpartæki samkvæmt birtum aðferðum, ekki samræmisútreikningar, og hvert spjald segir það.

### Skannar

- **Skráðu nokkra skanna.** {{ui:Samstilla skanna…}} (á upphafsspjaldinu, eða í {{ui:Sýna}}) setur skanna í einn ramma eftir völdum punktaparum eða slegnum markmiðum, fínstillir þá með ICP, fyrst punkt við punkt og síðan punkt við flöt, vistar skráninguna sem litla verkefnaskrá og skrifar skráða punktaskýið sem eina LAS- eða E57-skrá. Sjá [Skrá nokkra skanna í eitt](topic:register-scans).

### Myndir og lifandi sýn

- **Lifandi sýnin.** {{ui:Lifandi sýn}} á tækjastikunni sýnir líkanið í raunverulegu útliti við hlið 3D-sýnarinnar, fylgir henni og hverri breytingu, með göngu, tíma dags og mánuði; {{ui:Lifandi sýn í nýjum glugga}} setur hana á annan skjá. Sjá [Lifandi sýnin](topic:live-view).
- **Geislarakning á skjákorti.** Með WebGPU keyrir {{ui:Myndgerð}} › {{ui:Hágæði (geislarakning)}} eigin geislarakara CadCraft á skjákortinu, getur stöðvað og {{ui:Halda áfram}}, og er afhljóðað í lokin; án WebGPU notar hann WebGL-geislarakarann eins og áður. Sjá [Hágæði](topic:render#high-quality).
- **Fleira í myndgerðarglugganum** (á skjákortinu, svo það þarf WebGPU): eðlilegan himin og himnamyndir, IES-ljósaprófíla, myndavél með f-stoppi, dýptarskerpu, tveggja punkta sjónarhorn, hvítjöfnun og 360° víðmyndir, einkunn fyrir fullunna mynd, ljósblöndun og myndgerðarþætti eftir myndgerð, þoku, reyk og káusík, vistun sem 16-bita PNG, EXR eða myndgerðarskrá, og myndgerðarröð. Sjá [Himnar og ljósaprófílar á skjákortinu](topic:render#skies-and-light-profiles-on-the-graphics-card) og [Myndgerðarröðin](topic:render#the-render-queue).
- **Þín tölva.** {{ui:Stillingar}} › {{ui:BimCraft}} › {{ui:Myndgerð}} › {{ui:Þín tölva}} sýnir skjákortið, örgjörvakjarna og minni sem þessi vafri leyfir forritinu að nota, og hvar myndgerð byrjar. Sjá [Hvernig tölvan þín myndgerir](topic:your-machine).

### Skrár og önnur forrit

- **STEP-skrár opnast.** `.step`- eða `.stp`-hlutur, búnaður eða líkan birgis (AP203, AP214, AP242) opnast sem lítið IFC-líkan, hvert rúmmál er hlutur sem þú getur skoðað, sniðið, mælt og vistað sem IFC. Litir og heiti hluta samsetningarinnar eru ekki lesin ennþá. Sjá [Skrár sem BimCraft opnar og vistar](topic:files#what-it-opens).
- **USD-útflutningur.** {{ui:USD}} á tækjastikunni skrifar opnu líkönin sem `.usda`, `.usdc` eða `.usdz`, skipulögð eftir lóð, byggingu, hæð og greinum, með IFC-flokki hvers hlutar, GlobalId og eiginleikum. Sjá [Flytja líkanið út sem USD](topic:usd).
- **Massi úr CivilCraft.** Byggingarmassi sem er sendur úr staðarsýn CivilCraft sýnir rannsóknartölur sínar í {{ui:Eiginleikar}}, og {{ui:Þróa þennan massa}} byggir veggi á öllum kótum og gólf úr honum í einu skrefi til afturköllunar. Sjá [Þróa byggingarmassa úr staðarrannsókn](topic:develop-a-mass).
- **Safnhlutir með afbrigðum.** Hlutur sem kemur í nokkrum afbrigðum hefur val um {{ui:Útfærsla}} í flipanum {{ui:Safn}}; staðsetti hluturinn geymir afbrigði sitt í IFC, {{ui:Skipta hlut…}} listar hin afbrigðin, og afrit og uppfærslur halda því. Sjá [Staðsetja og skipta safnhlut sem hefur afbrigði](topic:library-variants).
- **Verkpakkar í möppu.** {{ui:Opna möppu}} listar `.ccbundle.zip`-skrár undir {{ui:Verkpakkar}}, og hver útlit í pakka hefur **Opna í …**: PDF-skjalið í MarkupCraft, DWG-skjalið í CadCraft, í nýjum flipa. Sjá [Opna útlit](topic:open-project-bundle#open-a-layout).

### Aðstoðarmenn og viðbætur

- **Fleira fyrir AI-aðstoðarmenn.** Aðstoðarmaður getur nú endurnefnt hluti og sett eiginleikagildi, fært og eytt hlutum, breytt veggjum, hurðum og gluggum, flutt út USD, og myndgert mynd eða keyrt myndgerðarröðina; sérhver breyting er eitt skref til afturköllunar. Sjá [Láttu AI-aðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Viðbætur geta byggt í líkaninu.** Viðbótar-API 1.1 gerir viðbót kleift að gera breytingu í líkaninu sem eitt skref til afturköllunar (hún fer í gegnum Lifandi samvinnu), lesa líkanið, og lesa pípu- og loftstokksleiðir, tengipunkta, búnað og spólur.
- **Plant-viðbótin** (slökkt þar til þú kveikir á henni í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Viðbætur}}): pípuforskriftir bornar saman við leiðirnar, samásateikningar af leið sem SVG og DXF með efnislista, almennur vinnslubúnaður með stútum settur í líkanið, leiðarvísir milli tveggja tengipunkta, og athugun á skipulagi verksmiðju. Teikni- og samhæfingarhjálpartæki, ekki verkfræðileg samþykkt; textinn er eingöngu á ensku.

## Breytt

- **Fyrsta húsið á fartölvu.** Á skjá í stærð fartölvu byrjar BimCraft með grunnmyndina eina, teiknistikan er mjó rúða með grunnmyndinni passaða við hlið hennar, grunnmyndin og 3D-sýnin koma aftur í sjónsvið þegar teikningin fer úr þeim, 3D-sýnin ramma allt húsið inn í mjóa rúðu, og hurðir og gluggar eru valdir á undan málsetningarlínum.
- **Að vista mynd.** **Vista PNG** í myndgerðarglugganum heitir nú {{ui:Vista}}, með {{ui:Vista sem}} við hliðina fyrir hin sniðin. Sjá [Vista myndina](topic:render#save-the-picture).
- **Greiningarflipinn** hefur {{ui:Hönnunarathuganir}}-blokk: hann býr til álagssamsetningar ASCE 7 eða EN 1990 fyrir álagstilvikin þín og athugar hvern valsaðan stál-I-prófíl (W, S, IPE, HEA eða HEB stærð eftir prófílheiti sínu og stærð) samkvæmt AISC 360 eða EN 1993-1-1, og sýnir hversu stóran hluta burðargetu hans hann notar. Soðin prófíl og aðrir hlutar segja „ekki athugað“. Sjá [Hönnunarathuganir](topic:frame-analysis#design-checks).

## Lagfært

- Endurgerð eftir skref sem bjó til nýja stærð fjölskyldu mistókst („engin stærð“). Sérhvert skref býr nú til sömu IFC GlobalId aftur við endurgerð, svo endurgerð virkar fyrir fjölskyldur og allar aðrar breytingar.
- Þegar tveir vistuðu sömu fjölskylduna (í Lifandi samvinnulotu eða tveimur gluggum), skrifaði seinni vistunin yfir breytingu þess fyrri án þess að segja neitt. Nú neitar hún og segir hvernig má sjá breytingu hins og gera sína aftur.
- Líkan í bandarískum landmælingafetum var lesið sem 0,3048 m á fót í stað 0,3048006096 m, sem færði hvert landfræðilega IFC í bandarískum fetum á kortinu.
- Fjölskylduritlinn: lokun hans sleppir ekki lyklaborðsfókusnum á síðuna, Vista hans helst sýnileg í síma, og reitirnir hans valda ekki aðdrætti í síma.

## Í öllum forritum

- **Einingar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Einingar}} hefur einn lista hvor fyrir lengd, flatarmál, rúmmál, horn og halla, með nákvæmu stærðunum sem skilgreiningar einingarinnar gefa (bandaríska landmælingafetið er sín eigin eining). Slökktu á einingum sem þú notar aldrei og þær hverfa af listunum; merktu eina með stjörnu og ný vinna byrjar í henni. Skrá heldur alltaf sinni eigin einingu. Í BimCraft fylgir listinn {{ui:Einingar}} á tækjastikunni rofunum, stjarnan stillir birtingareiningarnar þar til þú velur þær á tækjastikunni (fyrra val þitt helst), og lengdarreitir teiknitólanna taka hvaða merki einingar sem er, eins og `3.5 m` eða `10 US ft`. Sjá [Einingar, slegin gildi og einingalistarnir](common:unit-lists).
- **Þéttari skipulag og spjöld sem fela sig.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Þéttleiki skipulags}} › {{ui:Þétt}} kemur meiru fyrir á skjánum (snertiskjáir og símar halda stórum hnöppum sínum). Hvert hliðarspjald hefur mjóa titilstiku: dragðu hana til að festa eða fljóta spjaldið, slepptu henni á titilstiku annars spjalds til að deila einum ramma sem flipum, festu það til að renna út að brúninni, eða feldu það og sæktu það aftur af brúninni. Sjá [Raða spjöldunum](common:arrange-panels#make-the-layout-denser).
- **Gluggar færast.** Dragðu glugga á titilstiku sinni út úr veginum á teikningunni; hann kemur aftur þar sem þú skildir við hann. Tvísmelltu á titilstikuna til að miðja hann aftur. Sjá [Færa glugga](common:arrange-panels#move-a-dialog).
- **Uppskriftir fyrir AI-aðstoðarmenn.** Tíu unnar beiðnir fyrir þinn eigin aðstoðarmann (taka til teikningu, teikna sett, athuga teikningar, spyrja líkan spurninga, taka saman magntöku, prófa afbrigði hlutar…), hver með verkfærunum sem hún kallar á og heimildunum sem hún þarfnast, og hver endurspiluð af prófunum okkar. Forritin innihalda enga gervigreind. Sjá [Uppskriftir fyrir AI-aðstoðarmenn](common:assistants-recipes).
- **Tungumál.** **Português (Portugal)** er nýtt í {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Tungumál}}. Það, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** hafa nú hvert orð forritanna, sem drög sem móðurmálsmaður hefur ekki yfirfarið. Hjálparefni er á ensku, með nokkrum á spænsku.
- **CadCraft Studio** segir af hverju uppfærsluathugun mistókst (engin skrá fyrir kerfið þitt ennþá, ekkert net, röng undirskrift) í stað þess að segja bara „Lokið“, og hættir að sýna aftur spjald „Nýtt í“ sem þú lokaðir þangað til er komin nýrri útgáfa.

## Ekki í þessari útgáfu enn

- **0.7 er ekki kóðaundirrituð.** Undirritun, og Microsoft Store-pakkinn, færðist í 0.8 því staðfesting skilríkisins hefur ekki borist ennþá. Athugaðu SHA-256 við hverja skrá á getcadcraft.com/download. Á Windows, ef SmartScreen stöðvar uppsetninguna, velurðu {{ui:Meira um}}, og síðan {{ui:Keyra samt}}. Á Mac, í fyrsta skipti, hægrismelltu á CadCraft Studio og veldu {{ui:Opna}}. CadCraft Studio er ekki í forritaverslun ennþá, og það er engin iPad- eða iPhone-útgáfa ennþá.
- Horn- og hallalistarnir í {{ui:Einingar}} eru vistaðir, en enginn reitur les þá ennþá.
- Geislarakning á skjákorti, aukahlutirnir í myndgerðarglugganum og myndgerðarröðin þurfa WebGPU (án þess notar há gæði WebGL-geislarakarann); lifandi sýnin notar WebGPU þar sem vafrinn hefur það, annars WebGL 2. Þau hafa aðeins verið prófuð hér á hermi fyrir skjákort, ekki ennþá á raunverulegum skjákortum. Lifandi sýnin hefur enga dreifingu eða deilingu í BimCraft (ModelCraft hefur hvort tveggja).
- Myndbandsupptaka af gönguferð sem er myndgerð er ekki innbyggð í BimCraft.
- Málsetningar: I-prófíll sem IFC-prófílheitið er ekki W, S, IPE, HEA eða HEB stærð (eða sem stærð hans er önnur en þar) er tekinn sem soðinn og fær „ekki athugað“, eins og rör, horn, rásir, grannir hlutir og snúningur. Enginn verkfræðingur hefur yfirfarið athuganirnar ennþá.
- Teiknaða hluti er ekki hægt að afrita einn í einu, snúa, spegla eða raða í fylki (heila hæð má afrita), og það er enginn klofinn veggur, enginn textaverkfæri og enginn gardínuveggur. Veggur sem mætir vegg af neðri kóta á efri kóta er ekki skorinn inn í þrívíddarlíkama þess veggs, og áætlanir telja op á efri kóta undir eigin kóta veggsins.
- Fjölskyldusöfn sem deilt er milli verkefna eru ekki smíðuð. Fjölskyldur og afrituð kótastig hafa ekki enn verið opnuð í öðrum BIM-forritum.
- MEP: búnaður er almennur (engin gögn frá framleiðendum); tí og minnkarar á stálspólum eru almennir, ekki úr ASME B16.9 töflunni; tengipunktar safnhluta sem settir eru úr flipanum {{ui:Safn}} eru ekki skrifaðir í IFC; og enginn hluti er yfirfarinn af verkfræðingi.
- Plant-viðbótin getur ekki enn teiknað leidda leið inn í líkanið, númerað spólur á samásateikningum sínum, eða athugað skipulag búnaðar sem settur er úr safninu.
- Plöntur úr plöntusafni CivilCraft er ekki hægt að setja úr flipanum {{ui:Safn}} í BimCraft ennþá.
- Orka: engin tímaskipt hermun, engin ISO 52016-1 aðferð og engar veðurskrár. Eignir: engin hýst tvíburalíkan sem geymir lestra eða sendir viðvaranir á meðan BimCraft er lokað.
- Skráning skanna hefur verið prófuð á prófunarskönnum, ekki ennþá á raunverulegu skannasetti úr skanna; E57-skrár opnast enn upp í 6 milljón punkta og 512 MB.
- Verkpakkar opnast aðeins í BimCraft (hin forritin taka útlit í gegnum **Opna í …**), og pakkarnir og tveggja-forrita settið hafa verið prófuð á staðgenglum, ekki ennþá með Archicad eða Revit sjálfum.

Allt annað er í [Hvað er ekki smíðað enn](topic:not-built-yet).
