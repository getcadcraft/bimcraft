---
title: Çfarë ka të re në 0.9
summary: Forma muresh, ndarje, zhvendosje, shtrirje dhe bllokim me rrjetën, nivele nën tokë, përmasa rrjete dhe Mas në planimetri, pamje dublikate me stile pune dhe tabela penash, Raporto si, eksport Collada dhe Google Earth, Scan to BIM, analizë me erë dhe sizmike, shtojca printimi me rrëshirë.
keywords: çfarë ka të re, 0.9, shënime versioni, forma muresh, drejtkëndësh, shumëkëndësh, hark, vija të zgjedhura, gjurmo konturin, zhvendosje, lidhje, prerje në kënd, shtrirje me kuadër, rreshto dhe blloko, ndaj murin, hapësirë, ri-lidh, blloko me rrjetin, rritu nga, mat nga, shto një nivel më poshtë, nëntokë, komanda e nivelit, përmasa rrjete, matje në planimetri, stil pune, pamje dublikate, kopje e vetme, tabelë penash, raporto si, shkallë, importo svg, vendos në planimetri, vendos në model, collada, dae, kmz, google earth, scan to bim, erë, sizmike, element i fundëm, paneli i dokumenteve, printim me rrëshirë, versionet 0.8, 0.8.1, version, veçori të reja, evakuim, njerëz, radhë, akustikë, jehonë, përgjigje impulsi, përmbytje, erë, tërmet, rrezik, cikli jetësor, jetë shërbimi, ids, etiketa, tabela, lëvizje, rreshtim, shpërndarje, fotografi, sfond, skanim në mure, vend nga civilcraft, vizatime paneli, skeletim, diell, pv, ndarje, vrf, fan coil, madhësia e tubave, tavë kabllosh, ndriçim, beton, sizmike, krahaso skanimin, epsg, projeksion, dokumente, shabllon, karbon, kosto, energyplus, motor renderimi, hap në, usd, glb, unreal, zhbërje, shtojca, pcf, simbole, bimë, gjurmo, pena, shirit, paneli i shfletuesit, paraqitje
from: 5624fe88
---

Ky është ç'ka ndryshoi në BimCraft 0.9, krahasuar me 0.8.1. Dy tema të mëdha janë një vegël e vërtetë muri dhe pamje që sillen ashtu si presin njerëzit që vijnë nga programet e mëdha BIM. Rreth tyre vijnë eksporti Collada, asistentët që mund të vendosin pajisje elektrike, Scan to BIM, dhe puna me erë, sizmikë dhe elementë të fundëm në skedën {{ui:Analiza}}.

## Të reja

### Muret

- **Vizato forma të plota.** Në {{ui:Vizato}}, hap {{ui:Forma}} (ose zgjidh një formë në listën Forma të rreshtit Mur) për një drejtkëndësh, drejtkëndësh të rrotulluar, shumëkëndësh me 3 deri 64 anë, hark sipas qendrës, hark tangjent, mure mbi vija të zgjedhura, ose mure rreth një zone të mbyllur ku kliko brenda. Një drejtkëndësh është katër mure me katër qoshe të lidhura dhe një hap zhbërjeje. Shih [Forma e mureve, ndarja, zhvendosja, shtrirja dhe bllokimi](topic:wall-tools).
- **Cakto para vizatimit, ndrysho pas.** Rreshti Mur ka {{ui:Zhvendosja}} dhe {{ui:Lidhja}} (hiq shenjën për të vizatuar mure të lirë). Më pas përdor {{ui:Zhvendosja}}, {{ui:Shtrirje me kuadër}} dhe {{ui:Rreshto dhe blloko}} mbi muret e vizatuara. Një mur i zhvendosur ose i shtrirë mban dyert, dritaret dhe përmasat e tij. Çdo recetë është një hap zhbërjeje.
- **Ndaj muret.** {{ui:Ndaj}}, {{ui:Hapësirë}}, {{ui:Skaje të lira}}, {{ui:Hiq segmentin}} dhe {{ui:Bashko përsëri}} presin një mur në një klikim ose aty ku kryqëzohet nga një mur tjetër. Një prerje përmes një dere refuzohet. Shih [Forma e mureve…](topic:wall-tools).
- **Blloko muret te vijat e rrjetës.** Zgjidh një mur përgjatë një vije rrjete dhe shëno {{ui:Blloko me rrjetin}} te {{ui:Vetitë}}. Me veglën Rrjetë të ndezur, shkruaj një distancë te {{ui:Zhvendos për}} për një vijë të zgjedhur, dhe muret e bllokuara ndjekin, në një hap zhbërjeje.
- **Formëso një mur.** Te {{ui:Vetitë}} të një muri, mund ta lidhësh majën ose bazën me një çati, dysheme ose tavan, ta ndryshosh konturin e tij të pamjes, ta prirësh, ose të presësh një hapje në mur pa derë ose dritare. Shih [Formëso një mur](topic:wall-shape).
- **Gjatësia tregon cila anë mban.** {{ui:Rritu nga}} cakton nëse fillimi, fundi ose qendra mbetet në vend kur ndryshon gjatësia.
- **Gjatësia dhe përmasa e planit përputhen.** {{ui:Mat nga}} (boshti qendror, faqja e brendshme ose faqja e jashtme) drejton si fushën e Gjatësisë ashtu edhe përmasat e mureve të planit. Fillon në boshtin qendror, kështu që përmasat e mureve të planit lexojnë tani boshtin qendror aty ku më parë lexonin faqen e jashtme. Ndrysho në rreshtin Mur, te {{ui:Vetitë}} ose në {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Muret}}.

### Nivelet, rrjetat dhe matja

- **Shto një nivel më poshtë.** {{ui:Shto një nivel më poshtë}} te paneli {{ui:Nivelet}} shton një nivel nën më të ulëtin, aq të lartë sa ai, me kotë negative (Niveli -1, Niveli -2). Asgjë tjetër nuk lëviz. {{ui:Shto nivele…}} tani pranon lartësi negative. Shkrimi i LEVEL, LEVELS, STOREY ose STOREYS në rreshtin e komandave hap {{ui:Shto nivele…}}, dhe ka një buton {{ui:Nivelet}} në menutë dhe skedat e shiritit. Shih [Vende, ndërtesa dhe nivele](topic:site-building-and-levels).
- **Përmasat e rrjetës në planimetri.** Me veglën {{ui:Rrjetë}} të ndezur, shëno {{ui:Përmasat}} për të vizatuar hapësirën midis vijave fqinje dhe madhësinë totale jashtë flluskave, në planimetrinë e çdo niveli. Shih [Përmaso një rrjetë](topic:grid-dimensions).
- **Mas në planimetri.** {{ui:Mas}} në grupin {{ui:Vizato}} jep një distancë me ndryshimet X dhe Y midis dy klikimeve. Asgjë nuk ruhet në model. Shih [Matja në planimetri](topic:measure-on-the-plan).
- **Ndrysho disa kolona njëherësh.** Zgjidh kolona së bashku me një mur dhe zgjedhja liston çdo lloj me {{ui:Mbaj vetëm këto}}. Një klikim i mban kolonat dhe shfaq fushat e tyre të përbashkëta.
- **Një njësi shfaqjeje kudo.** Koordinatat, matjet, prerjet, shkallët e fletëve, ngarkesat dhe rezultatet e skedës së kornizës dhe teksti i Problemeve ndjekin njësinë që zgjedh. Eksportet mbeten SI.

### Pamjet, fletët dhe printimi

- **Stili i punës.** {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Stili i punës}} zgjedh mes çdo pamjeje që ka shënimet dhe tabelat e veta të penave, ose që i ndan. Shih [Stili i punës, pamjet e dyfishuara, penat në letër, Raporto si dhe shabllonet](topic:working-style).
- **Dyfisho një pamje.** Planet, planet e tavaneve, thirrjet, fasadat dhe prerjet mund të dyfishohen si {{ui:Kopje e vetme}} ose {{ui:Lidhur}}; {{ui:Bëje kopje të vetme}} e bën një të lidhur të pavarur. Shih [Stili i punës, pamjet e dyfishuara, penat në letër, Raporto si dhe shabllonet](topic:working-style).
- **Printo siç shfaqet, ose përmes një tabele penash.** Mbivendosjet e penave ruhen në IFC me pamjen, dhe fletët dhe PDF-të i vizatojnë ashtu si ekrani. E njëjta temë mbulon tabelat e penave.
- **Raporto si.** {{ui:Raporto si}} te {{ui:Vetitë}} shkruan një pllakë të vizatuar si rrugë, një mur si panel ose një çati si rampë në IFC si klasën që zgjedh, dhe e numëron kështu në tabela, Sasitë, Gjej, Ngjyro sipas dhe Problemet.
- **Redakto në fasada dhe prerje.** Vizato dhe zhvendos mure, hapje, nivele, përmasa dhe shënime drejtpërdrejt në një fasadë ose prerje, me madhësitë e tua të fletëve dhe bllokun e titullit. Shih [Redakto në fasada dhe prerje](topic:edit-in-elevations).
- **Fletët.** Çdo fletë mund të jetë horizontale ose vertikale. Një kuti {{ui:Shkruaj një shkallë}} ndodhet pranë listës së shkallës në çdo pamje të vendosur (1:64, 2:1, 1/4" = 1'). Mund ta tërheqësh një vizatim të vendosur ose ta lëvizësh me tastet e shigjetave, dhe {{ui:Formatet…}} › {{ui:Importo SVG…}} e kthen dizajnin tënd të fletës në një bllok titulli me fusha të shkruara për çdo fletë.
- **Krediti i bibliotekës në fletë.** Një grup vizatimesh me elementë bibliotekash merr një tabelë kreditesh të bibliotekës që mund ta vendosësh në çdo fletë. Shih [Kreditet e bibliotekës](topic:library-credits).

### Biblioteka: vendosja

- **Vendosja ndjek pamjen.** Në pamjen Plan, Biblioteka shfaq {{ui:Vendos në planimetri}}; në 3D shfaq {{ui:Vendos në model}}; në Ndarje shfaq një buton të ndarë me {{ui:Vendos në planimetri}} si veprim kryesor. Të dyja mënyrat shkruajnë të njëjtin element IFC. Mund të tërheqësh edhe një kartë Biblioteke mbi planimetri ose pamjen 3D; me stilolaps ose gisht, shtyp dhe mbaj, pastaj tërhiq. Shih [Vendos nga Biblioteka](topic:place-from-library).

### Skedarët dhe asistentët

- **Collada dhe Google Earth.** {{ui:Collada}} në shiritin e veglave (menyja Skedar në stilet me meny) shkruan një .dae, ose një .kmz të vendosur aty ku është modeli në hartë. Shih [Eksporto modelin si Collada ose për Google Earth](topic:collada).
- **Asistentët mund të vendosin pajisje elektrike.** Asistenti yt i lidhur ka vegla të reja për të shtuar, listuar, ndryshuar dhe fshirë pajisje, dhe për të caktuar drita. Asistentët mbeten të fikur derisa t'i ndezësh te {{ui:Cilësimet}}. Shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
- **Scan to BIM (shtojcë).** E fikur si parazgjedhje dhe kërkon shtojcën Retë e pikave. Propozon dysheme, mure, dyer dhe dritare nga një skanim, me devijimin e matur për çdo njërën; pranimi është një hap zhbërjeje.

### Analiza

- **Të dhënat e erës dhe sizmike të vendit.** Në skedën {{ui:Analiza}}: ngarkesat e erës sipas ASCE 7-10 ose 7-16 për një ndërtesë të ngurtë të mbyllur, me një forcë mbi çdo kat si raste ngarkese, dhe të dhëna sizmike të vendit me kërkim USGS dhe spektrin e projektimit.
- **Ndjekja strukturore dhe elementët e fundëm.** Kontrolle betoni sipas ACI 318-19, forca anësore ekuivalente sipas ASCE 7-22, zhvendosje katesh, pllaka dhe mure si pllaka, dhe kombinime ngarkesash nga ASCE 7 dhe EN 1990. Motori ynë i vetë elementëve të fundëm bën guaska, tetraedra dhe analizë modale. Shih [Kontrollo elementët e betonit dhe bëj ngarkesa sizmike](topic:concrete-and-seismic) dhe [Analiza e kornizës](topic:frame-analysis).

### Shtojca të tjera dhe dokumente

- **Ndriçimi i brendshëm (shtojcë).** Vendos armatura drite dhe shkruan luksin si numra në planin e çdo niveli, me një vlerësim shkëlqimi dhe një raport të printueshëm.
- **Paneli i dokumenteve.** {{ui:Skedari}} › {{ui:Dokumentet…}} ka marrje dhe kthim me një skedar kyçjeje, shkronja revizioni, gjendje lëshimi dhe histori.
- **Rajone dhe çelik.** Paketa jugafrikane të vizatimit dhe rregullores ndërtimore në shtojcën Rregullore, dhe 976 madhësi çeliku britanik në tabelën e përbashkët të prerjeve.
- **Shtojca falas për printim me rrëshirë.** Prerës, mbështetëse dhe pllakë, test ekspozimi, dhe formatet e skedarëve GOO, SL1, Chitubox dhe Anycubic, të gjitha të fikura si parazgjedhje.

## Në çdo aplikacion

- Kur kalon miun mbi një buton ose kontroll shfaqet një këshillë Bootstrap.
- Shiriti i fillimit në një zonë vizatimi bosh ka një buton mbyllje; BimCraft e mban mend që u mbyll.
- Një shirit skedash i panelit që nuk përshtatet tani lëviz në vend që të pritet.
- Me një dokument të hapur, skeda e shfletuesit thotë "<dokumenti> - BimCraft | CadCraft".
- Te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Paraqitja}} paraqitjet janë një listë rënëse me zgjedhje me dy rreshta.
- Lista e gjuhëve te {{ui:Cilësimet}} ofron më shumë gjuhë se 0.8; gjuhët jo angleze janë skica nga makina.

## Të rregulluara

- **Zhvendosja funksionon në shkallët** dhe në rampa, parmakë, plane çatie, pajisje të lira, elemente të vendosura në planimetri dhe shtigje.
- **Tërheqja e një muri nuk e shtrembëron më dhomën.** Doreza qendrore e zhvendos murin pingul me vetveten dhe qoshet e tij rrëshqasin përgjatë mureve të lidhur. Mbaj {{key:Mod}} për lëvizjen e vjetër të lirë; {{ui:Vendos në kënd të drejtë}} e kthen 90 gradë.
- **Një ndryshim trashësie ose tipi në një nyjë të lidhur** tani mban qoshen të mbyllur në një L, një T, një nyjë me tre mure dhe pranë një muri të lakuar.
- **Zhvendosja ose kopjimi i një grupi dhomash** mban muret e lidhura jashtë grupit të lidhura.
- **Rifarja mban identitetin e përmasës së murit.**
- **Zgjedhja e një muri me Vizato të fikur** nuk hedh më gabim në Vetitë.
- **Renderimi kthehet në WebGL** kur GPU nuk mund të nisë, në vend që të ndalojë.
- **Kontrolli i EnergyPlus** mund të ndizet sërish.
- **Dokumentet hapen si dialog i qendërzuar.** {{key:Esc}}, X-i ose një klikim mbi faqen e errësuar e mbyll.
- **Butonat {{ui:Planimetri}}, {{ui:Ndaj}} dhe {{ui:3D}} shfaqen** sapo hapet një model, jo vetëm pasi Vizato të jetë ndezur një herë.

## Kufizimet e sinqerta

- Asgjë nuk u printua në harduer real. Mbështetëset e rrëshirës janë të reja dhe të pavërtetuara.
- Rezultatet e erës, sizmikës, betonit dhe elementëve të fundëm janë mjete kontrolli për një inxhinier, të krahasuara me formula të mbyllura, jo me një ndërtesë reale.
- Scan to BIM u provua mbi një ndërtesë sintetike, jo mbi një skanim real, dhe gjen vetëm dhoma drejtkëndore.
- Collada nuk është hapur këtu në Blender ose Google Earth.
- Vlerësimi i ndriçimit është krahasuar me gjurmimin tonë, jo me programe të tjera ndriçimi.
- Shifrat e Afrikës së Jugut janë të pavërtetuara.
- Stilet e bashkimit të mureve (fund me fund, prerje në kënd, prerje e drejtë) dhe prioriteti i shtresës nuk janë ndërtuar; qoshet janë prerje në kënd.
- Gjuhët jo angleze janë skica nga makina.

Çdo gjë tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Ndryshimet e mëparshme janë në shënimet 0.8 dhe 0.8.1 më poshtë në këtë faqe.

## Më herët: 0.8 dhe 0.8.1

Ky është ç'ka ndryshoi në BimCraft 0.8 (2026-11-01) dhe 0.8.1 (2026-11-02), krahasuar me 0.7. BimCraft tani mund t'u përgjigjet pyetjeve për një ndërtesë dhe ta testojë atë me njerëz, zë, ujë, erë dhe tërmete, dhe ta vizatojë me më shumë vegla; 0.8.1 është një version ndreqjesh.

### Të reja

**Testo ndërtesën**

- **Njerëz në ndërtesë.** Seksioni {{ui:Njerëzit në ndërtesë}} i panelit të majtë shëtit një evakuim ose një ditë normale të mbërritjeve nëpër dhomat, dyert dhe shkallët e tua. Sheh radhët aty ku ndërtesa ngushtohet, shëtitjen më të gjatë drejt daljes nga çdo dhomë dhe sa kohë i duhet personit të fundit. Shëno {{ui:Mbyllur}} te një derë për të parë çfarë ndryshon, dhe shëno {{ui:Shfaq njerëzit në pamjen 3D}} për të parë ecësit. Gjetjet shkojnë te Problemet. Një model i trashë turmash për vendime projektimi, jo një certifikatë sigurie zjarri. Shih [Shëtit njerëzit nëpër ndërtesë](topic:people-in-the-building).
- **Akustika e dhomës, dhe dëgjoje.** Seksioni {{ui:Akustika e dhomës}} jep kohën e jehonës së çdo dhome sipas brezit oktavë (Sabine dhe Eyring) nga madhësia e saj dhe sipërfaqet që zgjedh, dhe me një objektiv tënd thotë sa absorbim do të plotësonte atë. {{ui:Luaj në këtë dhomë}} luan një zë, një duartrokitje, nota të pluhurosura ose një skedar zëri tënd përmes një përgjigjeje impulsi të llogaritur për dhomën. Shifrat e absorbimit janë vlera tipike të botuara, për ty për t'i zëvendësuar. Shih [Akustika e dhomës](topic:room-acoustics).
- **Luajtja e përmbytjes, erës dhe tërmetit.** {{ui:Luajtja e rrezikut}} luan ujin që ngrihet nëpër dhoma, presionin e erës mbi çdo kat dhe një tërmet që tund katet, mbi një plan ose fasadë me një rrëshqitës kohe. Modele të thjeshta me supozimet e tyre në panel; jo kontroll kodi. Shih [Luaj një përmbytje, erë ose tërmet](topic:hazard-playback).
- **Çfarë konsumohet në pesëdhjetë vjet.** {{ui:Pamja e ciklit jetësor}} liston dritaret, dyert, përfundimet dhe çatinë me një jetë shërbimi secila, vitet kur zëvendësohen, dhe, kur shkruan një kosto për njësi, koston sipas vitit dhe vlerën e tanishme të saj. {{ui:Ruaj planin (CSV)}} e shkruan jashtë. Jetët e shërbimit janë shifra planifikimi. Shih [Shiko çfarë konsumohet gjatë pesëdhjetë vjetëve](topic:life-cycle-view).
- **Llogaritjet e betonit dhe sizmike.** Blloqet {{ui:Elementët e betonit}} dhe {{ui:Ngarkesat sizmike}} të skedës {{ui:Analiza}} kontrollojnë trarë dhe kolona betoni sipas ACI 318-19 dhe bëjnë forca anësore ekuivalente sipas ASCE 7-22 mbi dysheme të ngurta, me zhvendosjen e kateve. Për një inxhinier ta kontrollojë. Shih [Kontrollo elementët e betonit dhe bëj ngarkesa sizmike](topic:concrete-and-seismic).

**Kontrollo dhe raporto**

- **Kontrollo kundrejt një IDS.** Ngarko skedarin `.ids` që të dha një klient dhe shih çdo element që nuk e plotëson në Problemet, përpara se të dorëzosh IFC. Hap {{ui:Kontrollo kundrejt një IDS}} nën {{ui:Kontrollet e modelit}}. Shih [Kontrollo një model kundrejt IDS-së së klientit](topic:check-against-ids).
- **Etiketat dhe tabelat.** Përcakto etiketat e tua, vendosi në shumë elemente njëherësh dhe bëj tabela me kolona, filtra dhe grupe që i lexojnë; etiketat ruhen në IFC. Shih [Etiketat dhe tabelat](topic:tags-and-schedules).
- **Dokumente nga modeli.** {{ui:Dokumentet nga modeli}} plotëson një shabllon specifikimi nga IFC-ja e hapur dhe e ruan si PDF, dokument Word ose Markdown. Shih [Dokumentet nga modeli](topic:documents-from-the-model).
- **Krahaso një skanim me modelin.** Me një re pikash të hapur, {{ui:Krahaso}} gjykon çdo element si të ndërtuar, pjesërisht të ndërtuar, të munguar ose të pa arritur, dhe tregon përqindjen e ndërtuar. Shih [Krahaso një skanim me modelin](topic:compare-scan-with-model).
- **Karboni dhe kostoja.** Paneli Karboni mbledh karbonin e mbartur nga një tabelë faktorësh që mund ta ndryshosh, dhe paneli Kosto shpërndan çmimet mbi orarin 4D. Faktorët që vijnë me BimCraft janë të përgjithshëm dhe të shënuar si të pakontrolluar. Shih [Karboni i mbartur dhe kosto](topic:embodied-carbon-and-5d-cost).
- **Çdo projeksion hartash.** {{ui:Mas}} › {{ui:Sistemi koordinativ…}} pranon një numër EPSG, një zonë UTM, një emër ose përkufizimin tënd të projeksionit. Shih [Gjeoreferenco me çdo projeksion](topic:georeference-any-projection).

**Vizato dhe redakto**

- **Zhvendos, Rreshto dhe Shpërndaj.** Nën {{ui:Ndërtimi}}; {{key:Shift+M}} nis Zhvendosjen (thjesht {{key:M}} është ende Mas). Zhvendosja kopjon ndërsa shkon me {{key:C}}, çdo hap është një zhbërje, dhe udhëton në një sesion Live TeamWork. Shih [Zhvendos, kopjo, rreshto dhe shpërndaj](topic:move-align-distribute).
- **Fotografi nën planimetri.** {{ui:Ndërtimi}} › {{ui:Fotografi}} vendos një PNG, JPEG ose WebP nën planin e një niveli ose mbi një plan vertikal. Vendos shkallën me dy pika, dhe zhvendos, rrotullo, zbeh dhe kyç. Një zonë e kopjuar në MarkupCraft ngjitet në shkallën e fletës së saj. Shih [Vendos një fotografi nën planimetri](topic:pictures-as-backgrounds).
- **Mure nga një skanim.** Me një skanim të hapur, muret, dyert dhe dhomat vijnë si propozime që mban ose refuzon një nga një, në një hap zhbërjeje. Gjenden vetëm muret në dy drejtime pingule. Shih [Kthe një skanim në mure](topic:scan-to-walls).
- **Gjurmimi, penat dhe shkalla nga skica.** {{ui:Gjurmo}} tregon një nivel tjetër me vija të ndërprera nën plan, {{ui:Pena}} i jep mureve, dyerve dhe dritareve gjerësinë e vet të vijës në një pamje, dhe {{ui:Skicoj shkallën}} e kthen një vijë ecjeje në shkallë. Hapet një rrjetë Wavefront OBJ. Shih [Gjurmo një nivel, pena dhe një shkallë nga një skicë](topic:trace-pens-stairs-obj).
- **Ndërtesat rreth një adrese.** Ndërtesat dhe parcela që gjeti Adresë në vend të CivilCraft-it vijnë si sugjerime; zgjedh ato që do të shtosh. Shih [Nis nga vendi i CivilCraft](topic:site-from-civilcraft).
- **Vizatime panelesh.** {{ui:Ndërtimi}} › {{ui:Vizatime panelesh}} kornizon muret, dyshemetë dhe çatitë prej druri ose çeliku të hollë, dhe ruan një listë prerjesh si CSV dhe vizatime punishtëse si PDF. Vlera fillestare, jo projektim strukturor. Shih [Vizatimet e paneleve](topic:panel-drawings).
- **Paleta e simboleve dhe bimët.** {{ui:Ndërtimi}} › {{ui:Paleta e simboleve}} gjen simbole elektrike dhe hidraulike sipas emrit; burimi {{ui:Bimët}} i {{ui:Bibliotekës}} liston rreth 400 bimë me simbole planimetrie. Shih [Paleta e simboleve](topic:symbol-palette) dhe [Vendos një bimë](topic:plant-list).

**Tubat, kanalet dhe energjia**

- **Njësi split, VRF dhe fan coil.** Njësi të brendshme dhe të jashtme me lidhjet e tyre, dhe grupe linjash të dimensionuara nga një tabelë vlerash tipike shembull që mund t'i ndryshosh. Shih [Split, VRF dhe fan coil](topic:split-vrf-fan-coils).
- **Llogaritjet.** Paneli Llogaritjet kontrollon madhësitë e tubave dhe kanaleve të furnizimit me rënie presioni, drejton kabllot përmes tavave dhe tubave dhe tregon mbushjen e tyre, dhe llogarit ndriçimin nga skedarët IES ose EULUMDAT. Parazgjedhjet janë të shënuara; shkruaj vlerat e kodit tënd. Shih [Llogaritjet e tubave, kanaleve, kabllove dhe dritave](topic:mep-calculations).
- **Skedarët PCF.** {{ui:Eksporto PCF}} i veglës së tubit shkruan rrjedhat për programe të stresit të tubave dhe izometrive, dhe një skedar PCF i lexuar mbrapsht vizaton tubin e vet. Shih [Skedarët e komponentëve të tubave](topic:piping-pcf).
- **Diell PV.** Vendos grupe mbi çati ose tokë, hije nga modeli, vlerëso energjinë vjetore, kontrollo vargjet dhe bëj të dhëna për një skemë me një vijë. Moduli fillestar dhe humbjet janë të përgjithshme. Shih [Diell PV](topic:solar-pv).
- **Skedari EnergyPlus.** Paneli {{ui:Kontrollo me EnergyPlus}} shkruan modelin si IDF për ta ekzekutuar në EnergyPlus tënd. Ekzekutimi në shfletues kërkon një build që ti e strehon dhe e shkruan adresën e tij; BimCraft nuk e mban. Shih [Kontrollo ngrohjen dhe ftohjen me EnergyPlus](topic:check-with-energyplus).

**Pamjet dhe skedarët**

- **Zgjidh motorin e renderimit.** {{ui:Renderim}} ka një zgjedhje {{ui:Motori}}. Dy motorët e integruar (Shpejt dhe Gjurmues shtegu) mbeten parazgjedhje. {{ui:Hap në}} ruan skenën si skedar USD ose glTF, dhe një dosje projekti Unreal si .zip; në CadCraft Studio një shtojcë mund të shtojë një motor. Shtojca Unreal që hap projektin nuk është publikuar. Shih [Zgjidh cili program vizaton imazhin](topic:render-engines).
- **Zhbërja në Studio.** Brenda CadCraft Studio, BimCraft i tregon Studios çdo hap të përfunduar, që Studio të mund të zhbëjë hapin tënd të fundit në dritaren që përdore së fundi. Shih [Zhbëj nëpër aplikacione](topic:undo-across-apps).
- **Shtojcat në skedarin tënd.** Një IFC regjistron cilat shtojca shkruajnë në të, dhe ofron ato që nuk i ke kur e hap. Shih [Shtojcat në skedarin tënd](topic:add-ons-in-your-file).

**Në çdo aplikacion**

- **Lidhe AI-n tënd.** Asistenti yt i vetë mund ta drejtojë BimCraft nëpërmjet lidhjes së Studios dhe t'u përgjigjet pyetjeve për modelin, si cilat dhoma janë nën një sipërfaqe të dhënë. Studio nuk ka AI të vet. Shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
- **Rreshtat e shiritit të veglave.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Rreshtat e shiritit të veglave}} ofron Mbështjell, 2 rreshta ose 1 rresht; Mbështjell mbetet parazgjedhja.
- **Pajisjet e hyrjes.** Cilësimet e ekranit me prekje, stilolapsit, miut 3D, kontrollerit dhe MIDI-t ndahen nga të gjitha aplikacionet.
- **Problemet dhe Live.** Paneli i paralajmërimeve dhe sesionet Live funksionojnë si më parë, me kontrollet e reja më sipër që ushqejnë Problemet.
- **Gjuhët.** 54 gjuhë, dhjetë prej tyre të reja. Ato jo angleze janë skica nga makina që s'i ka lexuar ende një folës amtar; temat e ndihmës janë kryesisht në anglisht.

### Ndreqjet në 0.8.1

- **Shiriti + paraqitja e shfletuesit të projektit.** Insert › Import CAD, Insert › Image dhe Manage › Project Units thoshnin "Nuk është ndërtuar ende në BimCraft". Image tani hap veglën Fotografi, Import CAD hap {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} (DWG, DXF, PDF ose skanim), dhe Project Units hap {{ui:Cilësimet}} › {{ui:Global}} › {{ui:Njësitë}}. Move dhe Align ekzekutojnë veglat e tyre, Level hap {{ui:Shto nivele…}}, Phases hap seksionin e fazave të rinovimit, dhe Materials hap bibliotekën e materialeve.
- **Skeda e DWG-së.** Lexohej si lloj i gabuar; u ndreqë në BimCraft dhe në aplikacionet e tjera që lexojnë DWG.
- **Gjuha gjatë ekzekutimit.** Studio dhe edicionet e paketuara mund të ndërrojnë gjuhën pa u rinisur. Kjo nuk është testuar ende në çdo platformë; na tregoni nëse gjuha nuk ndryshon.
- **Skripti i paketës Archicad.** `archicad_bundle.py`, një shkarkim i veçantë, tani gjen rrugën e Archicad-it, vëzhgon dosjen deri 20 sekonda dhe riprovon pranë paketës.

### Nuk është në këtë version ende

- **Mjete sigurie dhe projektimi.** Njerëzit në ndërtesë nuk ka limit distance shkuese nga një kod ndërtimi (ti shkruan limitin), dhe nuk është kontrolluar me dorë mbi një plan real. Shifrat e akustikës, ciklit jetësor dhe rrezikut janë vlera planifikimi, jo kontroll kodi.
- **Klimatet e ardhshme dhe EnergyPlus.** Nuk ka klimatike të ardhshme të integruara: mund të ngarkosh një skedar skenari për ekzekutimin e përmbytjes. Ekzekutimi i EnergyPlus në shfletues nuk është pjesë e këtij versioni.
- **Paraqitja e shiritit.** Material Takeoff mbetet "Nuk është ndërtuar", sepse BimCraft nuk ka listë sasish materialesh, dhe 54 vegla të tjera të shiritit të zbehura nuk kanë ende një vegël BimCraft pas tyre.
- **Nënshkrimi dhe platformat.** Instaluesit e Windows dhe .dmg i macOS janë pa nënshkrim, kështu që SmartScreen shfaq {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}, dhe macOS kërkon klikim me të djathtën, pastaj {{ui:Hap}}. Versioni iPad dhe iPhone nuk u rindërtua për 0.8.1.
- **Testet e faqes reale.** Disa teste të vjetra të shfletuesit BimCraft ende dështojnë në faqen tonë të testimit, si para 0.8.1.

Çdo gjë tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet). Ndryshimet më të hershme janë në [Çfarë ka të re në 0.7](topic:whats-new-0-7).
