---
title: Hvað er nýtt í 0.8 og 0.8.1
summary: BimCraft bætir við fólki sem gengur um bygginguna, hljómburði rýma sem þú getur heyrt, afspilun flóðs, vinds og jarðskjálfta, fimmtíu ára líftímayfirliti, athugunum gegn IDS, merkjum og áætlunum, Move, Align og Distribute, myndum undir grunnmyndinni, veggjum úr skönnun, einingateikningum, sólarorku, klofnum kerfum og VRF, stærðarákvörðun röra og kapla, steypu- og jarðskjálftaathugunum, hvaða kortavörpun sem er, vali á myndgerðarvél og afturköllun í Studio; 0.8.1 lagar grá verkfæri á Ribbon-útlitinu.
keywords: hvað er nýtt, útgáfuskýringar, breytingaskrá, breytingar, 0.8, 0.8.1, útgáfa, nýir eiginleikar, rýming, fólk, biðraðir, hljómburður, endurómun, impúlssvörun, flóð, vindur, jarðskjálfti, hætta, líftími, endingartími, ids, merki, áætlanir, move, align, distribute, mynd, bakgrunnur, skönnun í veggi, lóð frá civilcraft, einingateikningar, rammi, sól, pv, split, vrf, fan coil, rörastærð, kapalbakki, lýsing, steypa, jarðskjálfti, bera saman skönnun, epsg, vörpun, skjöl, sniðmát, kolefni, kostnaður, energyplus, myndgerðarvél, opna í, usd, glb, unreal, afturkalla, viðbætur, pcf, tákn, plöntur, rekja, pennar, ribbon, verkefnavafri, útlit
from: 87b03056
---

Þetta breyttist í BimCraft 0.8 (2026-11-01) og 0.8.1 (2026-11-02) miðað við 0.7. BimCraft getur nú svarað spurningum um byggingu og prófað hana, með fólki, hljóði, vatni, vindi og jarðskjálftum, og teiknað hana með fleiri verkfærum; 0.8.1 er lagfæringarútgáfa.

## Nýtt

### Prófaðu bygginguna

- **Fólk í byggingunni.** Hlutinn {{ui:Fólk í byggingunni}} í vinstra spjaldinu lætur rýmingu eða venjulegan komudag fólks ganga í gegnum herbergin, hurðirnar og stigana. Þú sérð biðraðirnar þar sem byggingin þrengist, lengstu leiðina út úr hverju herbergi og hversu lengi síðasti maðurinn er á leiðinni. Hakaðu við {{ui:Lokað}} á hurð til að sjá hvað breytist, og hakaðu við {{ui:Sýna fólkið í þrívíddarmyndinni}} til að horfa á göngufólkið. Niðurstöðurnar fara í Vandamál. Þetta er gróft mannfjöldalíkan til hönnunarákvarðana, ekki brunavottorð. Sjá [Láta fólk ganga um bygginguna](topic:people-in-the-building).
- **Hljómburður rýma, og heyra hann.** Hlutinn {{ui:Hljómburður rýma}} gefur endurómunartíma hvers herbergis í áttundarbandi (Sabine og Eyring) út frá stærð þess og frágangi sem þú velur, og með þínu eigin markmiði segir hann hversu mikil hljóðdeyfing myndi uppfylla það. {{ui:Spila í þessu rými}} spilar rödd, klapp, plokkaðar nótur eða þína eigin hljóðskrá í gegnum impúlssvörun reiknaða fyrir herbergið. Hljóðdeyfigildin eru dæmigerð birt gildi sem þú átt að skipta út. Sjá [Hljómburður rýma](topic:room-acoustics).
- **Flóð, vindur og jarðskjálfti í afspilun.** {{ui:Afspilun vár}} spilar vatn sem hækkar í herbergjunum, vindþrýsting á hverja hæð og jarðskjálfta sem hristir hæðirnar, á grunnmynd eða uppréttri mynd með tímasleða. Einföld líkön með forsendum sínum á spjaldinu; ekki staðlaathugun. Sjá [Spila flóð, vind eða jarðskjálfta](topic:hazard-playback).
- **Hvað slitnar á fimmtíu árum.** {{ui:Yfirlit yfir líftíma}} listar glugga, hurðir, frágang og þak með endingartíma hvers, árin sem þau eru endurnýjuð og, þegar þú slærð inn kostnað á einingu, kostnaðinn eftir árum og núvirði hans. {{ui:Vista áætlunina (CSV)}} skrifar hana út. Endingartímarnir eru áætlunartölur. Sjá [Sjá hvað slitnar á fimmtíu árum](topic:life-cycle-view).
- **Steypu- og jarðskjálftaathuganir.** Blokkirnar {{ui:Steypuhlutar}} og {{ui:Jarðskjálftaálag}} í flipanum {{ui:Greining}} athuga steypta bita og súlur samkvæmt ACI 318-19 og reikna jafngild hliðarkraft samkvæmt ASCE 7-22 á stífum gólfum, með hæðarreki. Fyrir verkfræðing til yfirferðar. Sjá [Athuga steypuhluta og reikna jarðskjálftaálag](topic:concrete-and-seismic).

### Athuga og skila skýrslu

- **Athugaðu gegn IDS.** Hladdu inn `.ids`-skránni sem viðskiptavinur gaf þér og sjáðu alla hluti sem uppfylla hana ekki í Vandamál, áður en þú skilar IFC-skránni. Opnaðu {{ui:Athuga gegn IDS}} undir {{ui:Líkanathuganir}}. Sjá [Athuga líkan gegn IDS viðskiptavinar](topic:check-against-ids).
- **Merki og áætlanir.** Skilgreindu þín eigin merki, settu þau á marga hluti í einu og búðu til áætlanir þar sem dálkar, síur og hópar lesa þau; merkin eru geymd í IFC. Sjá [Merki og áætlanir](topic:tags-and-schedules).
- **Skjöl úr líkaninu.** {{ui:Skjöl úr líkaninu}} fyllir út forskriftarsniðmát úr opna IFC-líkaninu og vistar það sem PDF, Word-skjal eða Markdown. Sjá [Skjöl úr líkaninu](topic:documents-from-the-model).
- **Berðu skönnun saman við líkanið.** Með punktaský opið metur {{ui:Bera saman}} hvern hlut sem fullgerðan, að hluta byggðan, vantandi eða ekki náð, og sýnir hlutfall byggðs. Sjá [Bera skönnun saman við líkanið](topic:compare-scan-with-model).
- **Kolefni og kostnaður.** Kolefnisspjaldið leggur saman kolefnisspor byggingarefna út frá stuðlatöflu sem þú getur breytt, og kostnaðarspjaldið dreifir verði yfir 4D-áætlunina. Stuðlarnir sem fylgja BimCraft eru almennir og merktir óstaðfestir. Sjá [Kolefnisspor og kostnaður](topic:embodied-carbon-and-5d-cost).
- **Hvaða kortavörpun sem er.** {{ui:Mæla}} › {{ui:Hnitakerfi…}} tekur EPSG-númer, UTM-svæði, heiti eða þína eigin skilgreiningu á vörpun. Sjá [Landtenging með hvaða vörpun sem er](topic:georeference-any-projection).

### Teikna og breyta

- **Move, Align og Distribute.** Undir {{ui:Smíð}}; {{key:Shift+M}} ræsir Move (venjulegt {{key:M}} er enn Mæla). Move afritar um leið og þú ferð með {{key:C}}, hvert skref er ein afturköllun, og það fer í gegnum Live TeamWork-lotu. Sjá [Færa, afrita, jafna og dreifa](topic:move-align-distribute).
- **Myndir undir grunnmyndinni.** {{ui:Smíð}} › {{ui:Mynd}} setur PNG-, JPEG- eða WebP-mynd undir grunnmynd kóta eða á lóðréttan flöt. Stilltu kvarðann með tveimur punktum og færðu, snúðu, dofnaðu og læstu henni. Svæði sem er afritað í MarkupCraft límist inn í mælikvarða blaðsins. Sjá [Setja mynd undir grunnmyndina](topic:pictures-as-backgrounds).
- **Veggir úr skönnun.** Með skönnun opna koma veggir, hurðir og rými sem tillögur sem þú heldur eða hafnar einni af annarri, í einu afturkallsskrefi. Aðeins veggir í tveimur hornréttum stefnum finnast. Sjá [Breyta skönnun í veggi](topic:scan-to-walls).
- **Rekja, pennar og skissustigi.** {{ui:Rekja}} sýnir annan kóta strikaðan undir grunnmyndinni, {{ui:Pennar}} gefur veggjum, hurðum og gluggum sína eigin línuþykkt í einni sýn, og {{ui:Skissa stiga}} breytir gönguleið í stiga. Wavefront OBJ-möskvi opnast. Sjá [Rekja kóta, pennar og stigi úr skissu](topic:trace-pens-stairs-obj).
- **Byggingar í kringum heimilisfang.** Byggingar og lóðin sem Heimilisfang í lóð hjá CivilCraft fann berast sem tillögur; þú hakar við þær sem þú vilt bæta við. Sjá [Byrjaðu á lóð úr CivilCraft](topic:site-from-civilcraft).
- **Einingateikningar.** {{ui:Smíð}} › {{ui:Einingateikningar}} ramma inn veggi, gólf og þök úr timbri eða léttu þunnstáli og vistar skurðarlista sem CSV og verkteikningar sem PDF. Upphafsgildi, ekki burðarþolshönnun. Sjá [Einingateikningar](topic:panel-drawings).
- **Táknaspjald og plöntur.** {{ui:Smíð}} › {{ui:Táknaspjald}} finnur raf- og lagnatákn eftir heiti; uppsprettan {{ui:Plöntur}} í {{ui:Safn}} listar um 400 plöntur með grunnmyndatáknum. Sjá [Táknaspjald](topic:symbol-palette) og [Setja plöntu](topic:plant-list).

### Lagnir, loftræsting og orka

- **Split, VRF og viftuspólur.** Inni- og útieiningar með tengingum sínum, og tengilagnir stærðarákvarðaðar út frá töflu með dæmigerðum dæmagildum sem þú getur breytt. Sjá [Split, VRF og viftuspólur](topic:split-vrf-fan-coils).
- **Útreikningar.** Útreikningaspjaldið athugar stærð lagna og loftstokka með þrýstingsfalli, leiðir kapla í gegnum bakka og rör og sýnir fyllingu þeirra, og reiknar birtustig úr IES- eða EULUMDAT-skrám. Sjálfgildi eru merkt; sláðu inn gildin úr reglugerðinni þinni. Sjá [Útreikningar á lögnum, loftstokkum, kaplum og ljósum](topic:mep-calculations).
- **PCF-skrár.** **Flytja út PCF** í pípuverkfærinu skrifar lagnirnar fyrir álagsforrit fyrir lagnir og ísómetrísk forrit, og PCF-skrá sem er lesin til baka teiknar lögnina. Sjá [PCF-skrár fyrir lagnaíhluti](topic:piping-pcf).
- **Sólarorka (PV).** Festu raðir á þökum eða á jörðu, skyggðu þær út frá líkaninu, áætlaðu orkuna á ári, athugaðu strengi og búðu til gögn fyrir einlínumynd. Byrjunareiningin og töpin eru almenn. Sjá [Sólarorka (PV)](topic:solar-pv).
- **EnergyPlus-skrá.** Spjaldið **Athuga með EnergyPlus** skrifar líkanið sem IDF til að keyra í þínu eigin EnergyPlus. Að keyra það í vafranum þarf útgáfu sem þú hýsir sjálfur og slærð inn vistfangið á; BimCraft ber hana ekki með sér. Sjá [Athuga hitun og kælingu með EnergyPlus](topic:check-with-energyplus).

### Myndir og skrár

- **Veldu myndgerðarvélina.** {{ui:Myndgerð}} hefur valið {{ui:Vél}}. Okkar tvær innbyggðu vélar (Fast og Path tracer) eru áfram sjálfgefnar. **Opna í** vistar senuna sem USD- eða glTF-skrá, og möppu Unreal-verkefnis sem .zip; í CadCraft Studio getur viðbót bætt við vél. Unreal-viðbótin sem opnar verkefnið er ekki gefin út. Sjá [Veldu hvaða forrit teiknar myndina](topic:render-engines).
- **Afturköllun í Studio.** Í CadCraft Studio segir BimCraft Studio frá hverju fullgerðu skrefi svo Studio geti afturkallað síðasta skrefið þitt í þeim glugga sem þú notaðir síðast. Sjá [Afturköllun milli forrita](topic:undo-across-apps).
- **Viðbætur í skránni þinni.** IFC skráir hvaða viðbætur skrifuðu í hana, og býður upp á þær sem þú átt ekki þegar þú opnar hana. Sjá [Viðbætur í skránni þinni](topic:add-ons-in-your-file).

### Í öllum forritum

- **Tengdu gervigreindina þína.** Þinn eigin aðstoðarmaður getur stýrt BimCraft í gegnum tengingu Studio og svarað spurningum um líkanið, eins og hvaða herbergi séu undir tilteknu flatarmáli. Studio er ekki með sína eigin gervigreind. Sjá [Láttu gervigreindaraðstoðarmann vinna með líkanið þitt](topic:assistants).
- **Línur tækjastikunnar.** {{ui:Stillingar}} › {{ui:Almennt}} › {{ui:Línur tækjastikunnar}} býður Wrap, 2 línur eða 1 línu; Wrap er áfram sjálfgefið.
- **Inntakstæki.** Snertiborð, penni, þrívíddarmús, stýripinni og MIDI-stillingar eru sameiginlegar öllum forritum.
- **Vandamál og Live.** Viðvörunarspjaldið og Live-lotur virka eins og áður, með nýju athugununum hér að ofan sem fæða Vandamál.
- **Tungumál.** 54 tungumál, tíu þeirra ný. Önnur en enska eru vélþýðingar sem enginn móðurmálshafi hefur lesið enn; hjálparefnið er að mestu á ensku.

## Lagað í 0.8.1

- **Ribbon + verkefnavafri útlit.** Insert › Import CAD, Insert › Image og Manage › Project Units sögðu „Ekki innbyggt í BimCraft ennþá“. Image opnar nú Mynd-verkfærið, Import CAD opnar {{ui:Smíð}} › {{ui:Úr teikningu…}} (DWG, DXF, PDF eða skanna), og Project Units opnar {{ui:Stillingar}} › {{ui:Sameiginlegt}} › {{ui:Einingar}}. Move og Align keyra Move- og Align-verkfærin, Level opnar {{ui:Bæta við kótum…}}, Phases opnar hlutann Áfangar endurbóta og Materials opnar efnasafnið.
- **DWG-flokkahlutinn.** Hann var lesinn sem röng gerð; lagað í BimCraft og í hinum forritunum sem lesa DWG.
- **Tungumál í keyrslu.** Studio og pakkaðar útgáfur geta nú skipt um tungumál án endurræsingar. Þetta er ekki enn prófað á öllum stýrikerfum; segðu okkur ef tungumálið breytist ekki.
- **Archicad-pakkahandrit.** `archicad_bundle.py`, sérstakt niðurhal, finnur nú slóð Archicad, fylgist með möppunni í allt að 20 sekúndur og reynir aftur við hliðina á pakkanum.

## Ekki í þessari útgáfu ennþá

- **Öryggis- og hönnunarhjálpartæki.** Fólk í byggingunni hefur engin fjarlægðarmörk fyrir gönguleiðir úr byggingarreglugerð (þú slærð inn mörkin) og hefur ekki verið yfirfarið handvirkt á raunverulegri teikningu. Hljóðvistar-, líftíma- og hættutölurnar eru áætlunargildi, ekki staðlaathugun.
- **Loftslagsspár og EnergyPlus.** Engar innbyggðar loftslagsspár: þú getur hlaðið inn sviðsmyndaskrá fyrir flóðkeyrsluna. EnergyPlus-keyrslan í vafranum er ekki hluti af þessari útgáfu.
- **Ribbon-útlit.** Material Takeoff er áfram „Ekki byggt“ því BimCraft hefur enga efnismagnaskrá, og 54 önnur grá Ribbon-verkfæri hafa engin BimCraft-verkfæri á bakvið sig ennþá.
- **Undirritun og stýrikerfi.** Windows-uppsetningarforrit og macOS .dmg eru ekki undirrituð, svo SmartScreen sýnir {{ui:Frekari upplýsingar}}, síðan {{ui:Keyra samt}}, og macOS krefst hægri smells og síðan {{ui:Opið}}. iPad- og iPhone-smíðin var ekki endurbyggð fyrir 0.8.1.
- **Prófanir á raunverulegum síðum.** Sumar eldri vafraprófanir BimCraft falla enn á prófunarsíðu okkar, eins og þær gerðu fyrir 0.8.1.

Allt annað er í [Það sem ekki er byggt ennþá](topic:not-built-yet). Eldri breytingar eru í [Hvað er nýtt í 0.7](topic:whats-new-0-7).
