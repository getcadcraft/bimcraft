---
title: Çfarë ka të re në 0.9 (më herët)
summary: Forma muresh, ndarje, zhvendosje, shtrirje dhe kyçje në rrjetë, nivele nën tokë, përmasa rrjete dhe Mas në planimetri, pamje të dyfishta me stile pune dhe tabela penash, Raporto si, eksport Collada dhe Google Earth, Scan to BIM, analiza e erës dhe sizmike, shtojca për printimin me rrëshirë.
keywords: çfarë ka të re 0.9, lançim i mëparshëm, çfarë ka të re, 0.9, shënime lançimi, forma muresh, drejtkëndësh, shumëkëndësh, hark, zgjidh vija, gjurmo konturin, zhvendosje, lidhje, shtrirje me kuadër, rreshto dhe blloko, ndaj murin, hapësirë, bashko përsëri, blloko me rrjetën, rritu nga, mat nga, shto një nivel më poshtë, bodrum, komanda LEVEL, përmasat e rrjetës, mat në planimetri, stili i punës, pamje e dyfishtë, kopje e vetme, pamje e lidhur, tabelë penash, printo ashtu si shfaqet, raporto si, shkruaj një shkallë, importo svg, vendos në planimetri, vendos në model, collada, dae, kmz, google earth, scan to bim, ngarkesë ere, sizmik, element i fundëm, paneli i dokumenteve, printim me rrëshirë, çfarë ka të re, ndryshime, 0.8, 0.8.1, version, veçori të reja, evakuim, njerëz, radhë, akustikë, reverberim, përgjigje impulsi, përmbytje, erë, tërmet, rrezik, cikli i jetës, jetëgjatësi, ids, etiketa, tabela, zhvendos, rreshto, shpërndaj, foto, sfond, skano në mure, civilcraft, vizatime panelesh, skeletim, diellor, pv, ndarje, vrf, fan coil, dimensionimi i tubave, tavë kabllosh, ndriçim, beton, sizmik, krahaso skanimin, epsg, projeksion, dokumente, shabllon, karbon, kosto, energyplus, motori i renderimit, hap në, usd, glb, unreal, zhbëj, shtojca, pcf, simbole, bimë, gjurmo, penë, shirit, shfletuesi i projektit, paraqitja
from: 816df7f8
---

Kjo është ajo që ndryshoi në BimCraft 0.9, krahasuar me 0.8.1. Dy tema të mëdha janë një vegël e vërtetë muresh dhe pamje që sillen ashtu si presin njerëzit që vijnë nga programet e mëdha BIM. Përreth tyre vijnë eksporti Collada, asistentët që mund të vendosin pajisje elektrike, Scan to BIM, dhe puna me erën, sizmikën dhe elementët e fundëm te skeda {{ui:Analiza}}.

## Të reja

### Muret

- **Vizato forma të plota.** Te {{ui:Vizato}}, hap {{ui:Forma}} (ose zgjidh një formë te lista e formave të rreshtit Mur) për një drejtkëndësh, një drejtkëndësh të rrotulluar, një shumëkëndësh me 3 deri në 64 anë, një hark sipas qendrës, një hark tangjent, mure mbi vija të zgjedhura, ose mure rreth një zone të mbyllur ku klikon brenda. Një drejtkëndësh janë katër mure me katër qoshe të lidhura dhe një hap zhbërjeje. Shih [Forma muresh, ndarja, zhvendosja, shtrirja dhe kyçja](topic:wall-tools).
- **Cakto para se të vizatosh, ndrysho pas.** Rreshti i Murit ka {{ui:Zhvendosja}} dhe {{ui:Lidhje}} (hiq shenjën për të vizatuar mure të lirë). Më pas përdor {{ui:Zhvendosja}}, {{ui:Shtrirje me kuadër}} dhe {{ui:Rreshto dhe blloko}} te muret e vizatuara. Një mur i zhvendosur ose i shtrirë i mban dyert, dritaret dhe përmasat. Çdo veprim është një hap zhbërjeje.
- **Pritni muret.** {{ui:Ndaj}}, {{ui:Hapësirë}}, {{ui:Skaje të lira}}, {{ui:Fshi segmentin}} dhe {{ui:Bashko përsëri}} e presin murin me një klik ose aty ku e kryqëzon një mur tjetër. Një prerje përmes dyerve refuzohet. Shih [Forma muresh, ndarja, zhvendosja, shtrirja dhe kyçja](topic:wall-tools).
- **Kyç muret te vijat e rrjetës.** Zgjidh një mur përgjatë një vije rrjete dhe shëno {{ui:Blloko me rrjetin}} te {{ui:Vetitë}}. Me veglën {{ui:Rrjetë}} të ndezur, shkruaj një distancë te {{ui:Zhvendos për}} për një vijë të zgjedhur, dhe muret e kyçur ndjekin në një hap zhbërjeje.
- **Formësoje një mur.** Te {{ui:Vetitë}} të një muri mund ta lidhësh majën ose bazën me një çati, dysheme ose tavan, të redaktosh konturin e fasadës së tij, ta prirësh, ose të presësh një hapje muri pa derë apo dritare. Shih [Forma e murit](topic:wall-shape).
- **Gjatësia tregon cili skaj mbetet.** {{ui:Rritu nga}} cakton nëse fillimi, fundi ose qendra mbetet në vend kur ndryshon gjatësia.
- **Gjatësia dhe përmasa e planimetrisë pajtohen.** {{ui:Mat nga}} (vija e qendrës, faqja e brendshme ose faqja e jashtme) drejton si fushën Gjatësi ashtu edhe përmasat e murit në planimetri. Fillon nga vija e qendrës, kështu që përmasat e murit në planimetri tani lexojnë vijën e qendrës aty ku më parë lexonin faqen e jashtme. Ndryshoje te rreshti i Murit, te {{ui:Vetitë}} ose te {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Muret}}.

### Nivelet, rrjetat dhe matja

- **Shto një nivel më poshtë.** {{ui:Shto një nivel më poshtë}} te paneli {{ui:Nivelet}} shton një nivel nën më të ulëtin, po aq të lartë sa ai, në kotë negative (Nivel -1, Nivel -2). Asgjë tjetër nuk zhvendoset. {{ui:Shto nivele…}} tani pranon lartësi negative. Shkrimi i LEVEL, LEVELS, STOREY ose STOREYS në rreshtin e komandave hap {{ui:Shto nivele…}}, dhe ka një buton {{ui:Nivelet}} në menu dhe skedat e shiritit. Shih [Vendet, ndërtesat dhe nivelet](topic:site-building-and-levels).
- **Përmasat e rrjetës në planimetri.** Me veglën {{ui:Rrjetë}} të ndezur, shëno {{ui:Përmasat}} për të vizatuar hapësirën midis vijave fqinje dhe madhësinë e përgjithshme përtej rrathëve në planimetrinë e çdo niveli. Shih [Vendos përmasat e një rrjete](topic:grid-dimensions).
- **Mat në planimetri.** {{ui:Mas}} te grupi {{ui:Vizato}} jep një distancë me ndryshimet X dhe Y midis dy klikimeve. Asgjë nuk ruhet në model. Shih [Mat në planimetri](topic:measure-on-the-plan).
- **Ndrysho disa kolona njëherësh.** Zgjidh kolona bashkë me një mur dhe lista e zgjedhjes e shfaq çdo lloj me {{ui:Mbaj vetëm këto}}. Një klik i mban kolonat dhe shfaq fushat e tyre të përbashkëta.
- **Një njësi shfaqjeje kudo.** Koordinatat, matjet, prerjet, shkallët e fletës, ngarkesat dhe rezultatet e skedës së kornizës dhe teksti i Problemeve ndjekin njësinë që zgjedh. Eksportet mbeten SI.

### Pamjet, fletët dhe printimi

- **Stili i punës.** {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Stili i punës}} zgjedh midis secilës pamje që ka shënimet dhe tabelat e veta të penave, ose që t'i ndajë ato. Shih [Stili i punës, pamjet e dyfishta, penat në letër, Raporto si dhe shabllonet](topic:working-style).
- **Dyfisho një pamje.** Planimetritë, planet e tavanit, thirrjet e detajeve, fasadat dhe prerjet mund të dyfishohen si {{ui:Kopje e vetme}} ose {{ui:Lidhur}}; {{ui:Bëje kopje të vetme}} e bën një të lidhur të pavarur. Shih [Stili i punës, pamjet e dyfishta, penat në letër, Raporto si dhe shabllonet](topic:working-style).
- **Printo ashtu si shfaqet, ose përmes një tabele penash.** Mbishkrimet e penave ruhen në IFC bashkë me pamjen, dhe fletët dhe PDF-të i vizatojnë ashtu si ekrani. E njëjta temë mbulon tabelat e penave.
- **Raporto si.** {{ui:Raporto si}} te {{ui:Vetitë}} shkruan në IFC një pllakë të vizatuar si rrugë, një mur si panel ose një çati si rampë, si klasën që zgjedh ti, dhe e numëron kështu në tabela, Sasitë, Gjej, Ngjyros sipas dhe Problemet.
- **Redakto te fasadat dhe prerjet.** Vizato dhe zhvendos mure, hapje, nivele, përmasa dhe shënime direkt në një fasadë ose prerje, me madhësitë e tua të fletëve dhe bllokët e titujve. Shih [Redakto te fasadat dhe prerjet](topic:edit-in-elevations).
- **Fletët.** Çdo fletë mund të jetë horizontale ose vertikale. Një kuti {{ui:Shkruaj një shkallë}} ndodhet pranë listës së shkallëve në çdo pamje të vendosur (1:64, 2:1, 1/4" = 1'). Mund ta zvarritësh një vizatim të vendosur ose ta lëvizësh pak me shigjetat, dhe {{ui:Formatet…}} › {{ui:Importo SVG…}} e kthen dizajnin tënd të fletës në një bllok titulli me fusha që shkruhen për çdo fletë.
- **Kredite e Bibliotekës në fletë.** Një grup vizatimesh me artikuj nga Biblioteka merr një tabelë kredish të Bibliotekës që mund ta vendosësh në çdo fletë. Shih [Kreditet e Bibliotekës](topic:library-credits).

### Biblioteka: vendosja

- **Vendosja ndjek pamjen.** Te pamja Planimetri, Biblioteka shfaq {{ui:Vendos në planimetri}}; në 3D shfaq {{ui:Vendos në model}}; në pamjen Ndaj shfaq një buton të ndarë me {{ui:Vendos në planimetri}} si veprimin kryesor. Të dyja mënyrat shkruajnë të njëjtin element IFC. Mund të zvarritësh edhe një kartelë të Bibliotekës mbi planimetri ose pamjen 3D; me stilolaps ose gisht, shtyp dhe mbaj, pastaj zvarrit. Shih [Vendos nga Biblioteka](topic:place-from-library).

### Skedarët dhe asistentët

- **Collada dhe Google Earth.** {{ui:Collada}} në shiritin e veglave (menyja Skedari te stilet e menysë) shkruan një .dae, ose një .kmz të vendosur aty ku është modeli në hartë. Shih [Eksporto modelin si Collada ose për Google Earth](topic:collada).
- **Asistentët mund të vendosin pajisje elektrike.** Asistenti yt i lidhur ka vegla të reja për të shtuar, listuar, ndryshuar dhe fshirë pajisje dhe për të vendosur drita. Asistentët mbeten të fikur derisa t'i ndezësh te {{ui:Cilësimet}}. Shih [Lejo një asistent AI të punojë me modelin tënd](topic:assistants).
- **Scan to BIM (shtojcë).** Fikur si parazgjedhje dhe kërkon shtojcën Point clouds. Propozon dysheme, mure, dyer dhe dritare nga një skanim me devijimin e matur për secilin; pranimi është një hap zhbërjeje.

### Analiza

- **Të dhënat e erës dhe sizmike për vendin.** Te skeda {{ui:Analiza}}: ngarkesat e erës sipas ASCE 7-10 ose 7-16 për një ndërtesë të mbyllur e të ngurtë, me një forcë në çdo kat si raste ngarkese, dhe të dhënat sizmike për vendin me kërkim USGS dhe spektrin e projektimit.
- **Ndjekja strukturore dhe elementët e fundëm.** Kontrollet e betonit sipas ACI 318-19, forcat anësore ekuivalente sipas ASCE 7-22, zhvendosja ndërmjet kateve, pllakat dhe muret si pllaka, dhe kombinimet e ngarkesave nga ASCE 7 dhe EN 1990. Motori ynë i elementëve të fundëm bën guaska, tetraedra dhe analizë modale. Shih [Kontrollo elementët e betonit dhe bëj ngarkesat sizmike](topic:concrete-and-seismic) dhe [Analiza e kornizës](topic:frame-analysis).

### Shtojca dhe dokumente të tjera

- **Ndriçimi i brendshëm (shtojcë).** Vendos trupat e ndriçimit dhe shkruan luksin si numra në planimetrinë e çdo niveli, me një vlerësim të shkëlqimit dhe një raport për t'u printuar.
- **Paneli i dokumenteve.** {{ui:Skedari}} › {{ui:Dokumentet…}} ka marrjen dhe dorëzimin me një skedar kyçjeje, shkronja revizioni, gjendje lëshimi dhe histori.
- **Rajone dhe çelik.** Paketa vizatimesh dhe rregulloresh ndërtimi të Afrikës së Jugut te shtojca Regulations, dhe 976 madhësi çeliku të Britanisë së Madhe në tabelën e përbashkët të prerjeve.
- **Shtojca falas për printimin me rrëshirë.** Slicer, mbështetëse dhe raft, test ekspozimi, dhe formatet e skedarëve GOO, SL1, Chitubox dhe Anycubic, të gjitha të fikura si parazgjedhje.

## Në çdo aplikacion

- Kalimi i miut mbi një buton ose kontroll shfaq një ndihmëz Bootstrap.
- Këshilla e nisjes te një zonë vizatimi bosh ka një buton mbylljeje; BimCraft mban mend që është mbyllur.
- Shiriti i skedave të një paneli që nuk përshtatet tani lëviz në vend që të pritet.
- Kur hapet një dokument, skeda e shfletuesit lexon "<document> - BimCraft | CadCraft".
- Te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Paraqitja}} paraqitjet janë një listë rënëse me zgjedhje me dy rreshta.
- Lista e gjuhëve te {{ui:Cilësimet}} ofron më shumë gjuhë se në 0.8; gjuhët përveç anglishtes janë draftet e bëra me makinë.

## Të rregulluara

- **Zhvendosja funksionon te shkallët,** dhe te rampat, parmakët, planet e çative, pajisjet e lira, fotot dhe shtigjet.
- **Zvarritja e murit nuk e shtrembëron më dhomën.** Doreza e qendrës e zhvendos murin drejt me veten dhe qoshet e tij rrëshqasin përgjatë mureve të lidhur. Mbaj {{key:Mod}} për zhvendosjen e lirë të vjetër; {{ui:Vendos në kënd të drejtë}} e kthen 90 gradë.
- **Një ndryshim trashësie ose tipi te një nyje e lidhur** tani e mban qoshen të mbyllur te një L, një T, një nyje me tre mure dhe pranë një muri të lakuar.
- **Zhvendosja ose kopjimi i një grupi dhomash** i mban të lidhura muret e lidhur jashtë grupit.
- **Ribëj e ruan identitetin e përmasës së murit.**
- **Zgjedhja e një muri me Vizato të fikur** nuk jep më gabim te Vetitë.
- **Renderimi kalon te WebGL** kur GPU s'mund të nisë, në vend që të ndalojë.
- **Kontrolli EnergyPlus mund të ndizet sërish.**
- **Dokumentet hapet si dialog i qendërzuar.** {{key:Esc}}, X ose një klik mbi faqen e errësuar e mbyll.
- **Butonat {{ui:Planimetri}}, {{ui:Ndaj}} dhe {{ui:3D}} shfaqen** sapo hapet një model, jo vetëm pasi {{ui:Vizato}} është ndezur një herë.

## Kufizimet, pa zbukurime

- Asgjë s'u printua në pajisje reale. Mbështetëset e rrëshirës janë të reja dhe të pavërtetuara.
- Rezultatet e erës, sizmike, të betonit dhe elementëve të fundëm janë ndihmë kontrolli për një inxhinier, të kontrolluara me formula të mbyllura, jo me një ndërtesë reale.
- Scan to BIM u testua në një ndërtesë sintetike, jo në një skanim real, dhe gjen vetëm dhoma drejtkëndëshe.
- Collada nuk është hapur këtu në Blender ose Google Earth.
- Vlerësimi i ndriçimit është kontrolluar me gjurmën tonë, jo me programe të tjera ndriçimi.
- Numrat e Afrikës së Jugut nuk janë verifikuar.
- Stilet e lidhjes së mureve (butt, mitre, square off) dhe prioriteti i shtresave nuk janë ndërtuar; qoshet janë me mitër.
- Gjuhët përveç anglishtes janë draftet e bëra me makinë.

Gjithçka tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Ndryshimet më të hershme janë te shënimet 0.8 dhe 0.8.1 më poshtë në këtë faqe.

## Më herët: 0.8 dhe 0.8.1

Kjo është ajo që ndryshoi në BimCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. BimCraft tani mund t'u përgjigjet pyetjeve për një ndërtesë dhe ta testojë atë, me njerëz, zë, ujë, erë dhe tërmete, dhe ta vizatojë me më shumë vegla; 0.8.1 është një version rregullimesh.

### Të reja

**Testo ndërtesën**

- **Njerëzit në ndërtesë.** Seksioni {{ui:Njerëzit në ndërtesë}} i panelit të majtë kalon një evakuim ose hyrjet e një dite normale përmes dhomave, dyerve dhe shkallëve të tua. Sheh radhët aty ku ndërtesa ngushtohet, rrugën më të gjatë deri te një dalje nga çdo dhomë dhe sa zgjat personi i fundit. Shëno {{ui:Mbyllur}} te një derë për të parë çfarë ndryshon, dhe shëno {{ui:Shfaq njerëzit në pamjen 3D}} për të parë ecësit. Gjetjet shkojnë te Problemet. Një model i përgjithshëm turmash për vendime projektimi, jo një certifikatë sigurie kundër zjarrit. Shih [Kalo njerëzit përmes ndërtesës](topic:people-in-the-building).
- **Akustika e dhomës, dhe dëgjoje.** Seksioni {{ui:Akustika e dhomës}} i jep çdo dhome kohën e reverberimit sipas brezit oktavë (Sabine dhe Eyring) nga madhësia e saj dhe përfundimet që zgjedh, dhe me një objektiv tënd thotë sa absorbim do të duhej për ta plotësuar atë. {{ui:Luaj në këtë dhomë}} luan një zë, një duartrokitje, nota të shkëputura ose skedarin tënd të tingullit përmes një përgjigjeje impulsi të llogaritur për dhomën. Shifrat e absorbimit janë vlera tipike të publikuara që ti duhet t'i zëvendësosh. Shih [Akustika e dhomës](topic:room-acoustics).
- **Luajtja e përmbytjes, erës dhe tërmetit.** {{ui:Luajtja e rrezikut}} luan ujin që ngrihet nëpër dhoma, presionin e erës në çdo kat dhe një tërmet që tund katet, në një planimetri ose fasadë me rrëshqitës kohe. Modele të thjeshta me supozimet e tyre në panel; jo një kontroll kodi. Shih [Luaj një përmbytje, erë ose tërmet](topic:hazard-playback).
- **Çfarë konsumohet në pesëdhjetë vjet.** {{ui:Pamja e ciklit jetësor}} liston dritaret, dyert, përfundimet dhe çatinë me një jetëgjatësi secili, vitet kur zëvendësohen dhe, kur shkruan një kosto për njësi, koston sipas vitit dhe vlerën e sotme të saj. {{ui:Ruaj planin (CSV)}} e shkruan jashtë. Jetëgjatësitë janë shifra planifikimi. Shih [Shiko çfarë konsumohet në pesëdhjetë vjet](topic:life-cycle-view).
- **Kontrollet e betonit dhe sizmike.** Blloqet {{ui:Elemente betoni}} dhe {{ui:Ngarkesat sizmike}} të skedës {{ui:Analiza}} kontrollojnë trarët dhe kolonat e betonit sipas ACI 318-19 dhe bëjnë forca anësore ekuivalente sipas ASCE 7-22 mbi dysheme të ngurta, me zhvendosjen e kateve. Për t'u kontrolluar nga një inxhinier. Shih [Kontrollo elementët e betonit dhe bëj ngarkesat sizmike](topic:concrete-and-seismic).

**Kontrollo dhe raporto**

- **Kontrollo sipas një IDS-je.** Ngarko skedarin `.ids` që të dha një klient dhe shih çdo element që nuk e plotëson atë në Problemet, para se të dorëzosh IFC-në. Hap {{ui:Kontrollo sipas një IDS-je}} nën {{ui:Kontrollet e modelit}}. Shih [Kontrollo një model sipas IDS-së së klientit](topic:check-against-ids).
- **Etiketat dhe tabelat.** Përcakto etiketat e tua, vendosi në shumë elementë njëherësh dhe bëj tabela me kolona, filtra dhe grupe që i lexojnë; etiketat mbahen në IFC. Shih [Etiketat dhe tabelat](topic:tags-and-schedules).
- **Dokumente nga modeli.** {{ui:Dokumentet nga modeli}} mbush një shabllon specifikimi nga IFC-ja e hapur dhe e ruan si PDF, dokument Word ose Markdown. Shih [Dokumentet nga modeli](topic:documents-from-the-model).
- **Krahaso një skanim me modelin.** Me një re pikash të hapur, {{ui:Krahaso}} vlerëson çdo element si të ndërtuar, pjesërisht të ndërtuar, të munguar ose të pa arritur, dhe shfaq përqindjen e ndërtimit. Shih [Krahaso një skanim me modelin](topic:compare-scan-with-model).
- **Karboni dhe kosto.** Paneli Karboni mbledh karbonin e mbartur nga një tabelë faktorësh që mund ta redaktosh, dhe paneli Kosto shpërndan çmimet mbi tabelën 4D. Faktorët që vijnë me BimCraft janë gjenerikë dhe shënohen si të pakontrolluar. Shih [Karboni i mbartur dhe kosto](topic:embodied-carbon-and-5d-cost).
- **Çdo projeksion hartash.** {{ui:Mas}} › {{ui:Sistemi koordinativ…}} pranon një numër EPSG, një zonë UTM, një emër ose përkufizimin tënd të projeksionit. Shih [Gjeoreferenco me çdo projeksion](topic:georeference-any-projection).

**Vizato dhe redakto**

- **Zhvendos, Rreshto dhe Shpërndaj.** Nën {{ui:Ndërtimi}}; {{key:Shift+M}} nis Zhvendosjen (thjesht {{key:M}} mbetet Mas). Zhvendosja kopjon ndërsa vazhdon me {{key:C}}, çdo hap është një zhbërje, dhe udhëton në një sesion Live TeamWork. Shih [Zhvendos, kopjo, rreshto dhe shpërndaj](topic:move-align-distribute).
- **Foto nën planimetri.** {{ui:Ndërtimi}} › {{ui:Foto}} vendos një PNG, JPEG ose WebP nën planimetrinë e një niveli ose në një plan vertikal. Vendos shkallën me dy pika, dhe zhvendos, rrotullo, zbeh dhe kyç. Një zonë e kopjuar në MarkupCraft ngjitet me shkallën e fletës së saj. Shih [Vendos një foto nën planimetri](topic:pictures-as-backgrounds).
- **Mure nga një skanim.** Me një skanim të hapur, muret, dyert dhe dhomat vijnë si propozime që mban ose refuzon një nga një, në një hap zhbërjeje. Gjenden vetëm muret në dy drejtime pingule. Shih [Kthe një skanim në mure](topic:scan-to-walls).
- **Gjurmo, penat dhe skicoj shkallën.** {{ui:Gjurmo}} shfaq një nivel tjetër me viza të ndërprera nën planimetri, {{ui:Pena}} i jep mureve, dyerve dhe dritareve peshën e vet të vijës në një pamje, dhe {{ui:Skicoj shkallën}} e kthen një vijë ecjeje në shkallë. Hapet një rrjetë Wavefront OBJ. Shih [Gjurmo një nivel, penat dhe një shkallë nga një skicë](topic:trace-pens-stairs-obj).
- **Ndërtesat rreth një adrese.** Ndërtesat dhe parcela që gjeti CivilCraft te Adresa në vend vijnë si sugjerime; shënon ato që do të shtosh. Shih [Fillo nga vendi i CivilCraft](topic:site-from-civilcraft).
- **Vizatime panelesh.** {{ui:Ndërtimi}} › {{ui:Vizatime panelesh}} kornizon muret, dyshemetë dhe çatitë në dru ose çelik me profil të lehtë dhe ruan një listë prerjesh si CSV dhe vizatimet e punëtorisë si PDF. Vlera fillestare, jo një projektim strukturor. Shih [Vizatime panelesh](topic:panel-drawings).
- **Paleta e simboleve dhe bimët.** {{ui:Ndërtimi}} › {{ui:Paleta e simboleve}} gjen simbolet elektrike dhe hidraulike sipas emrit; burimi {{ui:Bimët}} i {{ui:Bibliotekës}} liston rreth 400 bimë me simbole planimetrie. Shih [Paleta e simboleve](topic:symbol-palette) dhe [Vendos një bimë](topic:plant-list).

**Tubat, kanalet dhe energjia**

- **Split, VRF dhe fan coil.** Njësi të brendshme dhe të jashtme me lidhjet e tyre, dhe setet e linjave të dimensionuara nga një tabelë vlerash tipike shembullore që mund t'i ndryshosh. Shih [Split, VRF dhe fan coil](topic:split-vrf-fan-coils).
- **Llogaritjet.** Paneli Llogaritjet kontrollon madhësitë e tubave të furnizimit dhe kanaleve me rënie presioni, kalon kabllot përmes tavave dhe tubave mbrojtës dhe shfaq mbushjen e tyre, dhe llogarit ndriçimin nga skedarët IES ose EULUMDAT. Vlerat parazgjedhje janë të shënuara; shkruaj vlerat e kodit tënd. Shih [Llogaritjet e tubave, kanaleve, kabllove dhe dritave](topic:mep-calculations).
- **Skedarë PCF.** **Eksporto PCF** e veglës së tubit shkruan linjat për programet e stresit të tubave dhe izometrike, dhe një skedar PCF i lexuar përsëri vizaton tubin e tij. Shih [Skedarët e përbërësve të tubacioneve](topic:piping-pcf).
- **Diellor PV.** Vendos grupe panelesh mbi çati ose në tokë, hijëzoji nga modeli, vlerëso energjinë vjetore, kontrollo vargjet dhe bëj të dhëna për diagramin me një vijë. Moduli fillestar dhe humbjet janë gjenerike. Shih [Diellor PV](topic:solar-pv).
- **Skedari EnergyPlus.** Paneli Kontrollo me EnergyPlus shkruan modelin si IDF për ta ekzekutuar te EnergyPlus yt. Ekzekutimi në shfletues kërkon një build që e strehon vetë dhe e shkruan adresën e tij; BimCraft nuk e mban. Shih [Kontrollo ngrohjen dhe ftohjen me EnergyPlus](topic:check-with-energyplus).

**Fotot dhe skedarët**

- **Zgjidh motorin e renderimit.** {{ui:Renderim}} ka një zgjedhje {{ui:Motori}}. Dy motorët tanë të integruar (Fast dhe Path tracer) mbeten parazgjedhje. **Hap në** e ruan skenën si skedar USD ose glTF, dhe një dosje projekti Unreal si .zip; në CadCraft Studio një shtojcë mund të shtojë një motor. Shtesa Unreal që hap projektin nuk është publikuar. Shih [Zgjidh cili program e vizaton foton](topic:render-engines).
- **Zhbërja në Studio.** Brenda CadCraft Studio, BimCraft i thotë Studios çdo hap të përfunduar, që Studio të mund të zhbëjë hapin tënd të fundit në dritaren që ke përdorur së fundi. Shih [Zhbëj nëpër aplikacione](topic:undo-across-apps).
- **Shtojcat në skedarin tënd.** Një IFC regjistron cilat shtojca shkruanin në të, dhe ofron ato që ti s'i ke kur e hap. Shih [Shtojcat në skedarin tënd](topic:add-ons-in-your-file).

**Në çdo aplikacion**

- **Lidh AI-në tënde.** Asistenti yt mund të drejtojë BimCraft përmes lidhjes së Studio dhe t'u përgjigjet pyetjeve për modelin, si p.sh. cilat dhoma ndodhen nën një sipërfaqe të caktuar. Studio nuk ka AI të vetën. Shih [Lejo një asistent AI të punojë me modelin tënd](topic:assistants).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron Mbështjellje, 2 rreshta ose 1 rresht; Mbështjellja mbetet parazgjedhja.
- **Pajisjet e hyrjes.** Cilësimet e trackpad-it, stilolapsit, miut 3D, kontrolluesit dhe MIDI-t ndahen nga të gjitha aplikacionet.
- **Problemet dhe Live.** Paneli i paralajmërimeve dhe sesionet Live funksionojnë si më parë, me kontrollet e reja më sipër që furnizojnë Problemet.
- **Gjuhët.** 54 gjuhë, dhjetë prej tyre të reja. Ato përveç anglishtes janë draftet e bëra me makinë që nuk i ka lexuar ende një folës amtare; temat e ndihmës janë kryesisht në anglisht.

### Të rregulluara në 0.8.1

- **Paraqitja e shiritit + shfletuesi i projektit.** Fut › Importo CAD, Fut › Imazh dhe Menaxho › Njësitë e projektit thoshin "Nuk është ndërtuar ende në BimCraft". Imazh tani hap veglën {{ui:Foto}}, Importo CAD hap {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} (DWG, DXF, PDF ose një skanim), dhe Njësitë e projektit hap {{ui:Cilësimet}} › {{ui:Globale}} › {{ui:Njësitë}}. Zhvendos dhe Rreshto ekzekutojnë veglat e Zhvendosjes dhe Rreshtimit, Niveli hap {{ui:Shto nivele…}}, Fazat hap seksionin e fazave të rinovimit dhe Materialet hap bibliotekën e materialeve.
- **Seksioni i klasave DWG.** Lexohej si lloj i gabuar; u rregullua në BimCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Gjuha gjatë ekzekutimit.** Studio dhe edicionet e paketuara tani mund ta ndërrojnë gjuhën pa rinisje. Kjo nuk është testuar ende në çdo platformë; na tregoni nëse gjuha nuk ndryshon.
- **Skripta e paketës Archicad.** `archicad_bundle.py`, një shkarkim i veçantë, tani gjen rrugën e Archicad, vëzhgon dosjen për deri në 20 sekonda dhe riprovon pranë paketës.

### Ende jo në këtë version

- **Ndihmesa për sigurinë dhe projektimin.** Njerëzit në ndërtesë nuk kanë kufi të distancës së udhëtimit nga një kod ndërtimi (ti shkruan kufirin) dhe nuk janë kontrolluar me dorë në një planimetri reale. Shifrat e akustikës, të cikleve jetësore dhe të rrezikut janë vlera planifikimi, jo kontroll kodi.
- **Të ardhmet klimatike dhe EnergyPlus.** Nuk ka të ardhme klimatike të integruara: mund të ngarkosh një skedar skenari për ekzekutimin e përmbytjes. Ekzekutimi i EnergyPlus në shfletues nuk është pjesë e këtij lançimi.
- **Paraqitja e shiritit.** Llogaritja e materialeve mbetet "Nuk është ndërtuar" sepse BimCraft nuk ka listë sasish materialesh, dhe 54 vegla të tjera të shiritit të zbehura ende nuk kanë vegël BimCraft pas tyre.
- **Nënshkrimi dhe platformat.** Instaluesit për Windows dhe .dmg-ja për macOS nuk janë të nënshkruar, ndaj SmartScreen shfaq {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}, dhe macOS kërkon klikim me të djathtën pastaj {{ui:E hapur}}. Versioni për iPad dhe iPhone nuk u ri-ndërtua për 0.8.1.
- **Testet e faqeve reale.** Disa teste më të vjetra të shfletuesit BimCraft ende dështojnë në faqen tonë të testimit, ashtu si para 0.8.1.

Gjithçka tjetër është te [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Ndryshimet më të hershme janë te [Çfarë ka të re në 0.7](topic:whats-new-0-7).
