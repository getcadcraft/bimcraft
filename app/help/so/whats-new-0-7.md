---
title: Waxa cusub ee 0.7 (hore)
summary: BimCraft wuxuu ku daraa darbiyo dabaqyo badan, Koobiyee heerkan, darbiyo PDF iyo skaanka ka, habaynta darbiyadaada, qalab ballaaran, qalabka MEP oo leh ports, kala-dhigga isku-dhaca, furitaannada iyo spool-ka tuubada, dokumentiyada hantida, COBie iyo akhrinta sensorrada, samada, qorraxda, iftiinka maalinta shabakadda iyo culeyska kulaylka iyo qaboojinta, isku-dhigga skaanada, muuqaalka toosan iyo raad-tracing kaarka garaafka, STEP iyo USD, kala-duwanaansho maktabadda, iyo wax badan oo caawiyayaasha AI.
keywords: waxa cusub 0.7, nooca hore, sheegidda sii-deynta, changelog, isbeddelada, 0.7, nooca, astaamaha cusub, darbiyo dabaqyo ka, koobiyee heerkan, pdf, skaan, raad, darbiyo qorshayaasha ka, habaynta darbiyada, lakabyada, xudun, membreen, cabbirrada tixraaca, maktabadda agabka, cutubyada muuqaalka, qaab, joists, qoyska, cabbirro, qaab qorshe, astaan, hotspots, celi, heerka faahfaahinta, qoysas dhex, cabbir csv, dhex-element, qalabka, ports, xidhiidhyo, masaafooyin, furitaanno, spools, xaashiyada spool-ka, laxaad goobta, liiska jarista, dokumentiyo, cobie, sensorro, mqtt, feed toos ah, sky, qorraxda, daylight grid, kulaylka, qaboojinta, culeyska, u-value, isku-dhig skaanad, icp, e57, muuqaal toos ah, path tracing, webgpu, denoise, sky jireed, iftiin-isku-darka, safka rendar, kumbiyuutarkaaga, step, usd, xirmo mashruuc, horumari mugga, kala-duwanaansho, caawiyayaasha, add-on api, dhirta, korontada, hubinta naqshadda
from: a638080d
---

Tani waa waxa isbeddelay BimCraft 0.7, marka la barbardhigo 0.6. Liiska waa la kooxeeyay aagga, kuwa ugu muhiimsan ee hore.

## Cusub

### Dhis dhismaha

- **Darbiyo dabaqyo badan.** Liiska dhererka qalabka Wall wuxuu bixiyaa **Ilaa** heer kasta oo ka sarreeya, sida Sifooyinka darbi la doortay. Qorshayaasha heerarka ku-dhex-jira waxay muujinayaan darbiga mid khafiif ah, qolalka halkaas ayaa ku xirma, albaabyada iyo daaqadaha waxaa lagu geli karaa qorshayaasha, **Dhex-maraa** ee Sifooyinka wuxuu magacaabaa heerarka uu maro. Eeg [Beddel darbi, albaab ama daaqad](topic:change-a-wall-or-door#change-a-wall).
- **Koobiyee heerkan.** {{ui:Copy this level…}} oo ku jira Liiska heerarka wuxuu dib u sawiraa darbiyada heerka oo leh albaabyadooda iyo daaqadahooda, dabaqyadooda iyo saqafkooda heer kale ama heer cusub oo ka sarreeya, hal tallaabo oo ka noqod ah; qolalku wuxuu kaga muuqdaa iyagoo laftooda ah. Eeg [Sawir darbiyada](topic:draw-walls#levels).
- **Darbiyo PDF ama skaan ka.** {{ui:Build}} › {{ui:From a drawing…}} hadda wuxuu aqbalaa PDF (khad shaqo ama skaan ku jira) ama qorshe skaan (PNG, JPEG, TIFF, bog badan): bog kasta wuxuu noqdaa darbiyada, albaabyada, daaqadaha iyo qolalka heer, oo bogga hoosta qorshihiisa ayuu ku jiraa. Raadku ma isticmaalo shabakad, ma isticmaalo moodel tababaran, natiijadu waa waxa khadadku siiyeen: heer kasta ka hubi bogga. Eeg [Darbiyada qorshayaasha](topic:walls-from-plans).
- **Habaynta darbiyadaada.** {{ui:Wall assemblies…}} wuxuu dhisaa nooc darbi lakab-lakab ah, oo leh xudun, god hawo iyo membreenno, iyo muuqaal leh cabbirro; {{ui:Material library…}} wuxuu ilaaliyaa agabka mashruuca IFC-ga; {{ui:Annotate}} › {{ui:Reference dimension}} wuxuu cabbiraa dusha iyo khadadka xudunta, wuxuuna raacaa darbiyada markay isbeddelaan. Waxa uu ka yimid kaaliye bulsho, Doc (drsurfbum). Eeg [Habaynta darbiyada iyo cabbirrada tixraaca](topic:wall-assemblies).
- **Cutubyada muuqaalka iyo qalabka muuqaalka.** {{ui:Units}} qalabka sare wuxuu muujiyaa dhererka feet iyo inji, inji, feet tobanle, millimitir, sentimitir ama mitir, cabbirrada, jadwallada, isku-xidhka, cabbirrada iyo goyn. {{ui:Plan}}, {{ui:Split}} iyo {{ui:3D}} waxay ku yaalliin qalabka sare, kala-jarka waa la jiidi karaa (ama lagu guuri karaa kiiboodhka), {{ui:Shaded}}, {{ui:Edges}} iyo {{ui:Wireframe}} waxay ku yaalliin dhinaca muuqaalka, iyo dhicitaanka saqafka, saqaf-dhinaca iyo saqaf-hoosaha ayaa isla markiiba beddela saqafka la doortay. Waxa uu ka yimid kaaliye bulsho, Joel (yisraelk). Eeg [Sawir darbiyada](topic:draw-walls#levels).
- **Joists sagxadda iyo fidinta.** {{ui:Framing}} wuxuu dhisi karaa joists la hagaajiyay (horay) sida alwaax la jarey, isagoo doortaa taxanaha ugu yar iyo qoto-dheerka ugu yar ee gaadha fidinta, 16" ama 24" bartamaha, labada jihoodba; waxay gelayaan IFC-ga iyo liiska jarista. Talo ka timid miiska daabacan ee soo saaraha, ma aha injineernimo. Waxa uu ka yimid sidoo kale Joel. Eeg [Darbiyada, sagxadaha iyo saqafyada qaab-dhismeed](topic:framing).
- **Aaladaha korontada oo badan.** {{ui:Electrical}} wuxuu ku daraa dhibcaha xogta, telefoonka iyo codka-muuqaalka, beddelka xulashada, saacadda, thermostat-ka, qalabka kashifa qiiqa iyo kulaylka, badhanka shaqada, siren-ka, dabaaldegga, meeshka tamarta iyo sub-panel, mid kastaa leeyahay fasalka IFC gaarka ah. Eeg [Qorshaha korontada](topic:electrical-plan).

### Qoysas

- **Qoysas wax badan sameeya.** Sifooyinka waxay noqon karaan tirooyin buuxa, qoraal, agab, qalin ama buufin; qoys wuxuu sawiri karaa calaamad qorshe oo u gaar ah, wuxuu ku celin karaa jidh adag, wuxuu qaybaha u calaamayn karaa heerarka faahfaahinta dhimma, wuxuu hayn karaa qoysas kale (lug miiska), wuxuuna leeyahay hotspots ah oo la jiidi karo, oo ay ku jiraan walxaha la dhigay ee qorshaha. Cabbirrada waxay ka yimaadaan miiska CSV, sifooyinka lagu calaamadeeyay **Walax kasta** wuxuu oggolaanayaa labo albaab oo isku cabbir ah inay kala duwan yihiin. Eeg [Wax ka beddel qoys](topic:family-editor#plan-symbol) iyo [Qoysaska iyo cabbirradooda](topic:families#sizes-from-a-table).

### Tuubooyinka, tuubada hawada iyo qalabka

- **Qalabka leh ports.** {{ui:Build}} › {{ui:Equipment}} wuxuu dhigaa qalab hawo-qaade guud ah, dabaqe-socod, pump, boiler, kulaylka biyaha, terminal unit, diffuser, grille ama tank, oo cabbirkiisa lagu qoray qiimayaashaaga, isku xidhka tuubada iyo tuubada hawada oo ah ports. Mid kastaa waxaa loo kaydiyaa fasalka IFC-ga oo leh IFC ports. Eeg [Qalabka MEP oo leh ports](topic:mep-equipment).
- **Socod xidhan.** Tuubo ama tuubada hawada laga bilaabo port waxay qaadaa cabbirkeeda iyo nidaamkeeda oo waxay ku sii xidhan tahay: pump dhaqaajiso, tuubadiisu way raacaysaa. {{ui:Check connections}} wuxuu liistaa ports furan, dhamaadyo furan, cabbir iyo nidaam is-khilaafaya, iyo socodyo aan wax bixin. Eeg [Ku xidh tuubooyinka iyo tuubada hawada qalabka](topic:mep-connections).
- **Tuubooyinka iyo tuubada hawada dhismaha ka.** {{ui:Clash check}} wuxuu leeyahay kooxo diyaar ah iyo {{ui:Pipes and ducts × structure}} hal guji. {{ui:Check clearances}} wuxuu isticmaalaa dahaarka socod kasta iyo meel bannaan oo aad qortid; {{ui:Openings needed}} wuxuu liistaa meelaha socodyadu darbiyada iyo sagxadaha ku gudbaan, CSV iyo dhibaatooyin BCF ahaan. Waxba lama jarayo. Eeg [Hubi tuubooyinka iyo tuubada hawada dhismaha](topic:mep-against-structure).
- **Spool-ka tuubada birta.** Socod birta ah waxaa loo jaraa spool-yo lambaro leh dherer ugu dheer, iyo {{ui:Field weld}}s aad dhigto; {{ui:Spool sheets (PDF)}} wuxuu siiyaa bog kasta spool, oo leh muuqaalkiisa isometric, dherarka jarista, fittings-ka, welds-ka iyo liiska alaabta, {{ui:Duct cut list}} wuxuu liistaa qaybaha tuubada hawada ee toosan. Eeg [Spool-ka tuubada birta iyo xaashiyada spool-ka](topic:pipe-spools).

Kuwani waa qalab jiliska iyo isku-duubista, injineer ayaa cabbiray: ma jiraan socodyo, cadaadis ama isku-dheelitirnaan.

### Maamulka dhismaha

- **Dokumentiyo hantida kasta.** Tab-ka {{ui:Assets}} wuxuu ku xidhaa buugaagta, dammaanad-qaadka, sawirrada iyo naqshadaha hantida magac fayl oo ku yaal IFC-ga ama cinwaan web; oo keliya xidhiidhka ayaa gala IFC-ga. Eeg [Dokumentiyada](topic:assets-and-maintenance#documents).
- **Miiska COBie.** {{ui:Save as COBie (.xlsx)}} wuxuu qoraa buugga COBie 2.4 ee gudbinta, buugga COBie oo dib loo akhriyay wuxuu liistaa isbeddel kasta ka hor inta aan la riixin {{ui:Apply}} mar. Weli lama mariyin mudo COBie validator ah. Eeg [Miiska COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Akhrinta sensorrada iyo feeds toos ah.** Fur CSV oo akhrinta ah, ama {{ui:Connect}} si toos ah browser-ka ilaa MQTT broker-kaaga ama cinwaan nidaamka dhismahaaga ee jawaabta siiya: hantida kasta wuxuu muujiyaa akhrinta ugu dambaysa iyo jaantuska, midabka moodelka ayuu leeyahay, wuxuuna calaamadeeyaa haddii ka baxdo xadka IFC-ga lagu kaydiyay. Akhrinta waxay ku sii jirta tab-ka; erayga sirta ah waligiis lama kaydiyo. Eeg [Akhrinta sensorrada](topic:assets-and-maintenance#sensor-readings) iyo [Akhrinta toos ah](topic:assets-and-maintenance#live-readings).

### Iftiinka maalinta iyo tamarta

- **Samada iyo qorraxda daaqad kasta.** Tab-ka {{ui:Daylight}} wuxuu siiyaa daaqad kasta qaybta samada toosan iyo xagalka hor-istaagga, wuxuu raacaa qorraxda taariikh ka dhex-maraysa {{ui:Sun through the windows on a date}}, wuxuuna xisaabiyaa {{ui:Daylight factor on a grid}} qolal kasta, oo lagu sawiray qorshihiisa. Eeg [Qaybta samada toosan ee daaqad kasta](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Culeyska kulaylka iyo qaboojinta.** {{ui:Heating and cooling loads}} wuxuu xisaabiyaa lumitaanka kulaylka qol kasta, kulaylkeeda sanad kasta iyada oo laga eegayo maalmaha heerkulka, iyo kulaylka ugu sarreeya ee qaboojinta, iyaga oo laga qaadayo waxa ku xidha moodelka iyo U-value kasta; U-value lagu qoray halkaas ayaa lagu qoraa IFC-ga. Eeg [Qiyaasidda culeyska kulaylka iyo qaboojinta](topic:heating-and-cooling-loads).

Labadaba waa qalab naqshadeed oo ku salaysan habab la daabacay, ma aha xisaabinta waafaqsanaanta, guddi kastaa waa sheegaa.

### Skaanada

- **Isku-dhig skaanado badan.** {{ui:Register scans…}} (liiska bilowga, ama {{ui:Show}}) wuxuu dhigaa skaanada hal farshaxan oo ah dhibcaha lammaanaha la doortay ama bartilmaameedyo la qoray, wuxuu hagaajiyaa ICP oo dhibic ilaa dhibic kadibna dhibic ilaa diyaarad, wuxuuna kaydiyaa isku-dhigga fayl mashruuc yar, wuxuuna qoraa daruuraha isku-dhigay hal fayl LAS ama E57. Eeg [Isku-dhig skaanado badan hal mid](topic:register-scans).

### Sawirrada iyo muuqaalka toosan

- **Muuqaalka toosan.** {{ui:Live view}} qalabka sare wuxuu muujiyaa moodelka hab waqtiga-dhabta ah dhinaca muuqaalka 3D, isagoo raacaya iyo isbeddel kasta, oo leh Walk, waqtiga maalinta iyo bilaha; {{ui:Live view in a new window}} wuxuu geeyaa shaashad labaad. Eeg [Muuqaalka toosan](topic:live-view).
- **Raad-tracing kaarka garaafka.** Marka WebGPU la isticmaalo, {{ui:Render}} › {{ui:High quality (path traced)}} wuxuu shaqeeyaa raad-tracer-ka CadCraft ee kaarka garaafka, wuu joojin karaa oo {{ui:Resume}} ayuu sii wadi karaa, dhammaadkana waa la nadiifiyaa; WebGPU la'aan wuxuu isticmaalaa raad-tracer-ka WebGL sida hore. Eeg [Tayo sare](topic:render#high-quality).
- **Wax badan oo ku jira daaqadda Rendar** (kaarka garaafka, sidaas WebGPU ayuu u baahan yahay): sare jireed iyo sawirro samada, faylasha iftiinka IES, kamarad oo leh f-stop, qoto-dheer ee muuqaalka, muuqaal laba-barta, isbeddelka midabka, iyo 360° panoramas, darajo sawirka dhammaystiran, iftiin-isku-darka iyo qaybaha rendar-ka kadib rendar-ka, dhaxalka, qiiqa iyo caustics, kaydinta PNG 16-bit, EXR ama faylka rendar-ka, iyo safka rendar. Eeg [Samooyin iyo faylasha iftiinka kaarka garaafka](topic:render#skies-and-light-profiles-on-the-graphics-card) iyo [Safka rendar-ka](topic:render#the-render-queue).
- **Kumbiyuutarkaaga.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} wuxuu muujiyaa garaafyada, nuxurka processor-ka iyo xusuusta uu browser-kan u ogolaado app-ka, iyo heerka uu rendar-ku bilaabo. Eeg [Waxa kumbiyuutarkaagu u rendaraa](topic:your-machine).

### Faylasha iyo app-yada kale

- **Faylasha STEP la furo.** Qayb `.step` ama `.stp`, qalab, ama moodel bixiye (AP203, AP214, AP242) waxay u furmaa moodel IFC yar, solid kastaa waa walax aad baarto, goyn, cabbir, oo aad IFC ahaan u kaydin karto. Midabyada iyo magacyada qaybaha assembly-ga weli lama akhrin. Eeg [Faylasha BimCraft furo oo kaydiyo](topic:files#what-it-opens).
- **Dhoofinta USD.** {{ui:USD}} qalabka sare wuxuu qoraa moodelada furan `.usda`, `.usdc` ama `.usdz`, oo hay-ah goobta, dhismaha, dabaqa iyo takhasuska, oo leh IFC class, GlobalId iyo sifo kasta. Eeg [Dhoofi moodelka USD](topic:usd).
- **Mass CivilCraft-ka.** Mass dhismo oo CivilCraft-ka muuqaalka goobta loo diro wuxuu muujiyaa tirooyinka daraasaddiisa Sifooyinka, {{ui:Develop this mass}} wuxuu dhisaa darbiyo heer kasta iyo sagxad ka mid ah hal tallaabo oo ka noqod ah. Eeg [Horumari mass dhismo daraasad goobeed](topic:develop-a-mass).
- **Walxaha maktabadda oo leh kala-duwanaansho.** Walax ku imaanaysa kala-duwanaansho badan waxay leedahay doorasho {{ui:Variant}} ku jirta tab-ka {{ui:Library}}; elementka la dhigay wuxuu ku sii haynayaa kala-duwanaanshahiisa IFC-ga, {{ui:Swap item…}} wuxuu liistaa kuwa kale, nuqulada iyo cusboonaysiinta way ilaaliyaan. Eeg [Dhig oo beddel walaxda maktabadda leh kala-duwanaansho](topic:library-variants).
- **Xirmooyinka mashruuca folder-ka.** {{ui:Open a folder}} wuxuu liistaa faylasha `.ccbundle.zip` hoosta {{ui:Project bundles}}, oo qaab kasta oo xirmada ku jira wuxuu leeyahay **Furo …**: PDF-ka MarkupCraft-ka, DWG-ga CadCraft-ka, tab cusub. Eeg [Fur qaabka](topic:open-project-bundle#open-a-layout).

### Caawiyayaasha AI iyo add-ons

- **Wax badan oo caawiyayaasha AI.** Caawiyuhu hadda wuxuu magacyo u bedeli karaa elementyada iyo wuxuu dejin karaa qiimaha sifooyinka, wuxuu dhaqaajin karaa oo tirtiri karaa elementyada, wuxuu beddeli karaa darbiyada, albaabyada iyo daaqadaha, wuxuu dhoofin karaa USD, iyo wuxuu rendar-ka sawir ama safka rendar-ka wuu socodsiin karaa; isbeddel kasta waa hal tallaabo oo ka noqod ah. Eeg [Ka dhig caawiye AI uu shaqeeyo moodelkaaga](topic:assistants).
- **Add-ons wuxuu dhisi karaa moodelka.** API-ga add-on-ka 1.1 wuxuu oggolaanayaa add-on inuu samayn isbeddel moodelka ah hal tallaabo oo ka noqod ah (wuxuu u socdaa Live TeamWork), akhrin moodelka, iyo akhrinta socodyada tuubada iyo tuubada hawada, ports-ka, qalabka iyo spools-ka.
- **Add-on-ka Plant** (la damiyay ilaa aad ku shido Dejinta › **General** › **Add-ons**): sifooyinka tuubada oo la hubiyay socodyada, sawirro isometric ah oo socod ah oo SVG iyo DXF ah oo leh liiska alaabta, qalab habsami oo guud oo leh nozzles lagu dhigay moodelka, router ka dhex-dhexeeya labo port, iyo hubinta habaynta warshadda. Caawiye qoraal ah, ma aha ansixin injineernimo; erayadiisu waa Ingiriisi keliya.

## La beddelay

- **Kumbiyuutar yar oo hore.** Shaashad cabbirkeedu yar yahay, BimCraft wuxuu ku bilaabaa qorshaha keliya, Qalabka Sawirka waa panel cidhiidh ah oo qorshaha ku dhex-jira, qorshaha iyo muuqaalka 3D way soo noqdaan marka sawirku ka baxo, muuqaalka 3D wuxuu buuxiyaa guriga oo dhan panel cidhiidh ah, albaabyada iyo daaqadaha waa la doortaa ka hor cabbirrada.
- **Keydinta sawirka.** **Save PNG** ee daaqadda Rendar hadda waa {{ui:Save}}, oo {{ui:Save as}} ayaa dhinaceeda ah noocyada kale. Eeg [Kaydi sawirka](topic:render#save-the-picture).
- **Tab-ka Falanqaynta** wuxuu leeyahay block {{ui:Design checks}}: wuxuu sameeyaa isku-darka culeyska ASCE 7 ama EN 1990 kiisaskaaga, wuxuuna hubiyaa qaab kasta oo bir la rogay (W, S, IPE, HEA ama HEB magacyada qaabkooda iyo cabbirkooda) AISC 360 ama EN 1993-1-1, isaga oo muujinaya inta ay ka isticmaasho awoodeeda. Caawiye ilaa injineer uu dib u eego, qaababka la alxamay iyo qaybaha kale waxay leeyihiin "lama hubin". Eeg [Hubinta naqshadda](topic:frame-analysis#design-checks).

## La saxay

- Dib-u-celinta kadib tallaabo qoys cusub oo cabbir cusub ku samaysay way fashilantay ("no size"). Hadda tallaabo kasta wuxuu sameeyaa isla IFC GlobalIds mar kale marka dib-u-celinta la sameeyo, sidaas awgeed dib-u-celintu waxay shaqeysaa qoysaska iyo isbeddel kasta.
- Marka labo qof qoys isku mid ah kaydiyeen (kal-fadhi Live TeamWork ama laba daaqadood), keydinta labaad waxay si aan qarsoon u beddeshay isbeddelkii kowaad. Hadda way diidaa oo waxay sheegtaa sida loo arko isbeddelkooda oo loo sameeyo kaagii.
- Moodel ku jirta feet-ka US survey waxaa loo akhriyay 0.3048 m feet kasta halkii 0.3048006096 m, taas oo dhaqaaqday IFC kasta oo juquraafi ah feet-ka US ah ee khariiradda.
- Tafatiraha qoysaska: xidhista ma dhicisiyo xiritaanka kiiboodhka bogga, Keydintiisa waxay ku sii jirtaa aragga, telefoonkuna weyn ma muujiyo, goobahaan ma kicinayaan zoom-ka telefoonka.

## App kasta

- **Cabbirrada.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} wuxuu leeyahay liis kala-go'an dhererka, aagga, mugga, xagasha iyo jilicsanaanta, oo leh cabbirrada saxda ah ee qeexidda cutubyada. Ka dami cutubyada aan kula kulmin, kuwaasi way ka baxaan liisaska cutubyada; calaamadee mid, shaqada cusubi waxay ku bilaabmaysaa. Faylku wuxuu had iyo jeer ilaaliyaa cutubkiisa. BimCraft-ka liiska {{ui:Units}} ee qalabka sare wuxuu raacaa beddelayaasha, calaamadda wuxuu dejiyaa cabbirrada muuqda ilaa aad ku doorato qalabka sare (doorashadaadii hore way ilaaliyaan), sanduuqyada dhererka qalabka sawirka waxay aqbalaan calaamadda cutub kasta, sida `3.5 m` ama `10 US ft`. Eeg [Cutubyada, qiyamka qoran iyo liisaska cutubyada](common:unit-lists).
- **Qaabeyn dhex-dhexaad ah iyo panels-ka wada-hagaajiyaan.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} wuxuu geliyaa wax badan shaashadda (shaashadaha taabashada iyo telefoonada batanka weyn ayay haystaan). Panel kasta oo dhinac ah wuxuu leeyahay cinwaan yar: jiid si aad u dhigto ama u caayo panelka, ku qabo bar kale si aad u wadaagto hal qolka tabs-ka ahaan, ku xidh si uu u siib-siibo ilaa geeska, ama qarso oo ku soo celi geeska. Eeg [Qaabeynta panels-ka](common:arrange-panels#make-the-layout-denser).
- **Dialogs way dhaqaaqaan.** Dialog jiid cinwaankiisa si aad uga caydho sawirka; wuxuu ku soo noqdaa meeshii aad ka tagtay. Labajibaar cinwaanka si aad dib u dhex-dhigto. Eeg [Dialog u dhaqaaji](common:arrange-panels#move-a-dialog).
- **Ciyaaro caawiyayaasha AI.** Toban codsi oo shaqeysa oo caawiyahaaga, nidaamin sawirka, hubi sawirrada, weydii moodelka su'aalo, isku-geeyo qiimaha, isku day qaybta kala-duwanaanshaha... mid kastaa wuxuu leeyahay qalabyadiisa iyo ogolaanshahiisa, mid kastaa waxaa dib loo ciyaaray tijaabooyinkeenna. Apps-ka AI ma leh. Eeg [Ciyaaraha caawiyayaasha AI](common:assistants-recipes).
- **Luuqadaha.** **Português (Portugal)** waa cusub {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Iyada, **Português (Brasil)**, **Español (México)** iyo **Bahasa Indonesia** hadda waxay leeyihiin erayada apps-ka oo dhan, sida qabyo aan weli dadka afkooda ah ku eegin. Mawduucyada caawinta waxay ku qoran yihiin Ingiriisi, qaar ku qoran Isbaanish.
- **CadCraft Studio** wuxuu sheegaa sababta cusboonaysiinta ay fashilantay (fayl nidaamkaaga weli ma jiro, shabakad la'aan, saxiixa xun) halkii uu ka odhan lahaa "Dhammaaday", wuxuuna joojiyaa soo celinta kaarka Waxa cusub ee aad xirtay ilaa aad hesho sii deyn cusub.

## Weli ma jiro nooca

- **0.7 lama saxiixin code-ka.** Saxiixa, iyo xirmada Microsoft Store, waxay u guureen 0.8 sababtoo ah xaqiijinta shahaadada weli ma imaan. Hubi SHA-256 ee fayl kasta oo ku taal getcadcraft.com/download. Windows-ka, haddii SmartScreen joojiyo installer-ka, dooro {{ui:More info}}, kadibna {{ui:Run anyway}}. Mac-ka, markii ugu horeysay, midig-riix CadCraft Studio oo dooro {{ui:Open}}. CadCraft Studio weli ma ku jiro dukaanka apps-ka, ma jiro dhismaha iPad ama iPhone weli.
- Liisaska xagasha iyo jilicsanaanta ee {{ui:Units}} waa la kaydiyay, laakiin sanduuq weli ma akhrinayo.
- Raad-tracing kaarka garaafka, wixii dheeraad ah ee daaqadda Rendar iyo safka rendar-ka waxay u baahan yihiin WebGPU (la'aanteed tayada sare waxay isticmaashaa raad-tracer-ka WebGL), muuqaalka toosana wuxuu isticmaalaa WebGPU meesha browser-ku leeyahay, haddii kale WebGL 2. Waxaa lagu tijaabiyay halkan kaarka garaafka been-abuur ah oo keliya, weli kaarar garaafka dhabta ahi ma jiraan. Muuqaalka toosan BimCraft-ka ma leh scatter ama wadaago (kan ModelCraft-ka wuu leeyahay).
- Duubista socodka la duubay ee muuqaalka sida fiidiyo lama dhisin BimCraft-ka.
- Caawiyaha naqshadda: I-shape kasta oo magaceedu IFC ahaan ma aha cabbir W, S, IPE, HEA ama HEB (ama cabbirkeedu ka duwan yahay) waxaa loo qaataa mid la alxamay, waxayna soo noqotaa "lama hubin", sidaas oo kale tuubooyinka, angles, channels, qaybaha cararadka ah iyo torsion. Wali injineer ma eegin hubinta.
- Qaybaha la sawiray lama koobiyayn karo mid mid, lama rogi karo, lama muuqaali karo (heer oo dhan ayaa la koobiyeyn karaa), ma jiro darbi la jarey, Qoraalka ama kaarka qalabka ama darbi-deyn. Darbi ku xidhan darbi heer hoose ah heer sare ma gudbo jidhka 3D ee darbigaas, jadwallada waxay liistaan furitaanka heer sare sida heerkiisa darbigiisa.
- Qoysaska: maktabad qoysaska la wadaago mashruucyada dhexdooda ma dhisna. Qoysaska iyo heerarka la koobiyeeyay weli lama furin barnaamijyada BIM kale.
- MEP: qalabku waa guud (xogta soo saarayaasha ma jirto); tees iyo reducers ee spools-ka birta guud ayay yihiin, ma aha miiska ASME B16.9; ports-ka walxaha maktabadda ee laga dhigay tab-ka {{ui:Library}} lama qoro IFC-ga; waxba ma eegin injineer.
- Add-on-ka Plant weli ma jiro socod la jidinayo oo lagu geli karo moodelka, ma lambar siin karo spools-ka isometrics-kiisa ama hubin habaynta qalabka laga dhigay maktabadda.
- Dhirta maktabadda CivilCraft-ka weli lama dhigi karo tab-ka {{ui:Library}} ee BimCraft.
- Tamarta: ma jiro simulation saacad kasta, ma jiro habka ISO 52016-1 iyo ma jiro faylal cimilo. Hantida: ma jiro twin martigeliyaha ah oo kaydiya akhrinta ama diraya digniin marka BimCraft la xirayo.
- Isku-dhigga skaanada waa la isku dayay skaanada tijaabada, weli lama isticmaalin skaan dhabta ah oo skaanar dhabta ah; faylasha E57 weli waxay furaan ilaa 6 milyan oo dhibic iyo 512 MB.
- Xirmooyinka mashruucu waxay ku furmaan BimCraft oo keliya (apps-yada kale waxay qaadaan qaabka iyada oo loo marayo **Furo …**), xirmooyinka iyo kiitka labo-barnaamij ayaa lagu tijaabiyay bidhaa-ka-ku-celinta, weli lama tijaabin Archicad ama Revit laftooda.

Waxa kale oo ku jira [Waxa weli aan la dhisin](topic:not-built-yet).
