---
title: Çfarë ka të re në 0.7 (më herët)
summary: BimCraft shton mure nëpër disa nivele dhe Kopjo këtë nivel, mure nga PDF-të dhe skanimet, montime muresh të tuajat, familje më të pasura, pajisje MEP me porta, grupe përplasjesh, hapje dhe spool-e tubash, dokumente për asete, COBie dhe lexime sensorësh, qiell, diell, dritë dienore në rrjetë dhe ngarkesa ngrohjeje e ftohjeje, regjistrim skanimesh, pamje të drejtpërdrejtë dhe gjurmim shtegu në kartën grafike, STEP dhe USD, variante bibliotekash, dhe më shumë për asistentët AI.
keywords: çfarë ka të re 0.7, version më i hershëm, shënime versioni, ndryshime, 0.7, version, veçori të reja, mure nëpër nivele, kopjo këtë nivel, pdf, skanim, gjurmim, mure nga planet, montime muresh, shtresat, bërthama, membranë, përmasa referimi, bibliotekë materialesh, njësi shfaqjeje, stil pamjeje, skeletim, trarë, familje, parametra, simbol plani, pika të nxehta, përsëritje, nivel detaji, familje të fole, csv, madhësi, për element, pajisje, porta, lidhje, përplasje, hapje, spool, spool-e, fletë spool-esh, pikë saldimi, listë prerjesh kanali, dokumente, cobie, sensorë, mqtt, rrjedhë e drejtpërdrejtë, komponenti vertikal i qiellit, diell, rrjetë dritë dite, ngrohje, ftohje, ngarkesa, u-vlerë, regjistro skanimet, icp, e57, pamje e drejtpërdrejtë, gjurmim shtegu, webgpu, zbutje, qiell fizik, përzierje drite, radhë renderimi, kompjuteri juaj, step, usd, paketë projekti, zhvillo këtë masë, variante, asistentë, api shtojcash, bimë, elektrik, kontrollet e projektimit
from: ef226539
---

Ky është ç'ka ndryshoi në BimCraft 0.7, krahasuar me 0.6. Lista është grupuar sipas zonës, me më të rëndësishmet e para.

## Të reja

### Vizato një ndërtesë

- **Mure nëpër disa nivele.** Lista e lartësisë së veglës Mur ofron **Deri në** çdo nivel më lart, ashtu si Vetitë për një mur të zgjedhur. Planet e niveleve ndërmjet e shfaqin murin më të çelët, dhomat aty mbyllen pranë tij, dhe dyert dhe dritaret mund të vendosen në të nga ato plane; **Kalon** te Vetitë emërton nivelet që kalon. Shih [Ndrysho një mur, derë ose dritare](topic:change-a-wall-or-door#change-a-wall).
- **Kopjo këtë nivel.** {{ui:Kopjo këtë nivel…}} te paneli Nivelet vizaton përsëri muret e një niveli me dyert dhe dritaret e tij, dyshemetë dhe tavanet e tij në një nivel tjetër ose në një të ri mbi të, në një hap zhbërjeje; dhomat shfaqen vetvetiu. Shih [Vizato muret](topic:draw-walls#levels).
- **Mure nga një PDF ose skanim.** {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} tani pranon një PDF (punë vijash ose një skanim brenda tij) ose një plan të skanuar (PNG, JPEG, TIFF, shumë faqe): çdo faqe bëhet muret, dyert, dritaret dhe dhomat e një niveli, me faqen e mbajtur nën planin e vet. Gjurmimi nuk përdor rrjet as model të trajnuar, dhe rezultati është ajo që dhanë vijat: kontrollo çdo nivel me faqen e vet. Shih [Mure nga një grup planesh](topic:walls-from-plans).
- **Montimet e tua të mureve.** {{ui:Montime muresh…}} ndërton një tip muri shtresë për shtresë, me bërthamë, hapësira ajri dhe membrana, dhe një pamje paraprake të përmasuar; {{ui:Biblioteka e materialeve…}} mban materialet e projektit në IFC; {{ui:Shëno}} › {{ui:Përmasë referimi}} përmason te fytyrat dhe vijat e bërthamës dhe ndjek muret kur ndryshojnë. Nga një kontribues i komunitetit, Doc (drsurfbum). Shih [Montimet e mureve dhe përmasat e referimit](topic:wall-assemblies).
- **Njësi shfaqjeje dhe kontrolle pamjeje.** {{ui:Njësitë}} në shiritin e veglave shfaq gjatësitë në këmbë dhe inç, inç, këmbë dhjetore, milimetra, centimetra ose metra, në përmasa, tabela, koordinata, matje dhe prerje. {{ui:Plan}}, {{ui:Ndaj}} dhe {{ui:3D}} janë në shiritin e veglave, ndarja mund të tërhiqet (ose të lëvizet nga tastiera), {{ui:Me hije}}, {{ui:Skajet}} dhe {{ui:Skelet me tel}} janë pranë kubit të pamjes, dhe pjerrësia e çatisë, ballina dhe streha ndryshojnë çatinë e zgjedhur menjëherë. Nga një kontribues i komunitetit, Joel (yisraelk). Shih [Vizato muret](topic:draw-walls#levels).
- **Trarë dyshemeje sipas deshtës.** {{ui:Skeletim}} mund të shtrojë trarë inxhinierikë (paraprakë) si edhe dru të prerë, duke zgjedhur serinë më të vogël dhe thellësinë e listuar që arrin deshtën, 16" ose 24" qendër-me-qendër, në cilindo drejtim; ato shkojnë në IFC dhe listën e prerjeve. Një sugjerim nga një tabelë e botuar nga prodhuesi, jo inxhinieri. Gjithashtu nga Joel. Shih [Skeletimi i mureve, dyshemeve dhe çative](topic:framing).
- **Më shumë pajisje elektrike.** {{ui:Elektrik}} shton priza të dhënash, telefoni dhe audio-video, një çelës përzgjedhës, një çronometër, një termostat, detektorë tymi dhe nxehtësie, një stacion alarmi dhe një sirenë, një ventilator, një matës energjie dhe një panel nën-kryesor, secili me klasën e vet IFC. Shih [Plani elektrik](topic:electrical-plan).

### Familjet

- **Familjet bëjnë më shumë.** Parametrat mund të jenë numra të plotë, tekst, material, një penë ose një mbushje; një familje mund të vizatojë simbolin e vet të planit, të përsërisë një trup të ngurtë, të shënojë pjesë për nivele më të trasha detaji, të mbajë familje të tjera (një këmbë në një tavolinë), dhe të ketë pika të nxehta që tërheq, edhe mbi një element të vendosur në planimetri. Madhësitë vijnë nga një tabelë CSV, dhe parametrat e shënuar **Për element** lejojnë dy dyer të së njëjtës madhësi të ndryshojnë. Shih [Redakto një familje](topic:family-editor#plan-symbol) dhe [Familjet dhe madhësitë e tyre](topic:families#sizes-from-a-table).

### Tubat, kanalet dhe pajisjet

- **Pajisje me porta.** {{ui:Ndërtimi}} › {{ui:Pajisjet}} vendos një trajtues ajri, ventilator in-line, pompë, kaldaja, ngrohës uji, njësi terminale, difuzor, grilë ose rezervuar, i përmasuar sipas vlerave që shkruan, me lidhjet e tubave dhe kanaleve si porta. Secila ruhet si klasa e vet IFC me porta IFC. Shih [Pajisjet MEP me porta](topic:mep-equipment).
- **Rrjedha të lidhura.** Një tub ose kanal i nisur nga një portë merr madhësinë dhe sistemin e tij dhe qëndron i fiksuar në të: zhvendos pompën dhe tubi i saj ndjek. {{ui:Kontrollo lidhjet}} liston portat e hapura, skajet e lira, mospërputhjet e madhësisë dhe sistemit, dhe rrjedhat që nuk furnizohen nga asgjë. Shih [Lidh tubat dhe kanalet me pajisjet](topic:mep-connections).
- **Tubat dhe kanalet kundrejt strukturës.** Kontrolli i përplasjeve ka grupe gati dhe {{ui:Tubat dhe kanalet × struktura}} me një klikim; {{ui:Kontrollo distancat}} përdor izolimin e çdo rrjedhe plus një hapësirë që shkruan; {{ui:Hapje të nevojshme}} liston ku rrjedhat kalojnë përmes mureve dhe pllakave, si CSV dhe çështje BCF. Asgjë nuk priten. Shih [Kontrollo tubat dhe kanalet kundrejt strukturës](topic:mep-against-structure).
- **Spool-e tubash çeliku.** Një rrjedhë çeliku priret në spool-e të numëruara me një gjatësi më të madhe dhe te {{ui:Saldim në terren}} që vendos ti; {{ui:Fletët e spool-eve (PDF)}} jep një faqe për spool me pamjen e saj izometrike, gjatësitë e prerjes, fitingjet, saldimet dhe listën e materialeve, dhe {{ui:Lista e prerjeve të kanalit}} liston copat e drejta të kanalit. Shih [Spool-et e tubave çeliku dhe fletët e spool-eve](topic:pipe-spools).

Këto janë mjete skicimi dhe koordinimi, të përmasuara nga një inxhinier: pa rrjedhje, presione ose balancim.

### Ndjekja e ndërtesës

- **Dokumente për asetin.** Skeda {{ui:Asete}} lidh manuale, garanci, foto dhe vizatime me një aset nëpërmjet një emri skedari pranë IFC-së ose një adrese interneti; vetëm lidhja shkon në IFC. Shih [Dokumentet](topic:assets-and-maintenance#documents).
- **Fletëllogaritësi COBie.** {{ui:Ruaj si COBie (.xlsx)}} shkruan librin COBie 2.4 të dorëzimit, dhe një libër COBie i lexuar mbrapsht liston çdo ndryshim para një {{ui:Zbato}} të vetme. Nuk ka kaluar ende një validues COBie. Shih [Fletëllogaritësi COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Lexime sensorësh dhe rrjedha të drejtpërdrejta.** Hap një CSV leximesh, ose {{ui:Lidh}} drejtpërdrejt nga shfletuesi te broker-i yt MQTT ose një adresë që i përgjigjet sistemi yt i ndërtesës: çdo aset tregon leximin e fundit dhe një grafik, ngjyroset në model, dhe shënohet kur del jashtë kufijve të ruajtur në IFC. Leximet mbeten në skedë; fjalëkalimet nuk ruhen kurrë. Shih [Leximet e sensorëve](topic:assets-and-maintenance#sensor-readings) dhe [Leximet e drejtpërdrejta](topic:assets-and-maintenance#live-readings).

### Dritë dienore dhe energji

- **Qielli dhe dielli te çdo dritare.** Skeda {{ui:Drita e ditës}} i jep çdo dritareje komponentin e vet vertikal të qiellit dhe këndin e pengesës, ndjek diellin përmes një date me {{ui:Dielli nëpër dritare në një datë}}, dhe llogarit {{ui:Faktori i dritës së ditës në rrjetë}} përgjatë çdo dhome, i vizatuar në planin e saj. Shih [Komponenti vertikal i qiellit të çdo dritareje](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Ngarkesat e ngrohjes dhe ftohjes.** {{ui:Ngarkesat e ngrohjes dhe ftohjes}} llogarit humbjen e nxehtësisë të çdo dhome, ngrohjen e saj gjatë një viti nga gradë-ditët dhe kulmin e ftohjes, nga ajo që e kufizon në model dhe vlerës U të çdo elementi; një vlerë U e shkruar atje shkruhet në IFC. Shih [Vlerëso ngarkesat e ngrohjes dhe ftohjes](topic:heating-and-cooling-loads).

Të dyja janë mjete projektimi sipas metodave të botuara, jo llogaritje përputhshmërie, dhe çdo panel e thotë këtë.

### Skanimet

- **Regjistro disa skanime.** {{ui:Regjistro skanimet…}} (në panelin e fillimit, ose në {{ui:Shfaq}}) vendos skanimet në një kornizë të vetme me çifte pikash të zgjedhura ose me synime të shkruara, i rafinon me ICP pikë-me-pikë pastaj pikë-me-rrafsh, ruan regjistrimin si një skedar të vogël projekti, dhe shkruan retë e regjistruara si një skedar LAS ose E57. Shih [Regjistro disa skanime në një](topic:register-scans).

### Pamje dhe pamja e drejtpërdrejtë

- **Pamja e drejtpërdrejtë.** {{ui:Pamja e drejtpërdrejtë}} në shiritin e veglave shfaq modelin me pamjen në kohë reale pranë pamjes 3D, duke e ndjekur atë dhe çdo ndryshim, me Ec, orën e ditës dhe muajin; {{ui:Pamja e drejtpërdrejtë në dritare të re}} e vendos në një ekran të dytë. Shih [Pamja e drejtpërdrejtë](topic:live-view).
- **Gjurmim shtegu në kartën grafike.** Me WebGPU, {{ui:Renderim}} › {{ui:Cilësi e lartë (gjurmim shtegu)}} ekzekuton gjurmuesin e vet të shtegut të CadCraft në kartën grafike, mund të ndalet dhe të {{ui:Vazhdo}}, dhe zbutet në fund; pa WebGPU përdor gjurmuesin WebGL si më parë. Shih [Cilësi e lartë](topic:render#high-quality).
- **Më shumë në dialogun Renderim** (në kartën grafike, pra kërkon WebGPU): një qiell fizik dhe imazhe qielli, profile drite IES, një kamerë me f-stop, thellësi fushe, perspektivë me dy pika, balancë të bardhës dhe panorama 360°, një gradim për imazhin e përfunduar, përzierje drite dhe elemente renderimi pas renderimit, mjegull, tym dhe kaustikë, ruajtje si PNG 16-bit, EXR ose skedar renderimi, dhe një radhë renderimi. Shih [Qiejt dhe profilet e dritës në kartën grafike](topic:render#skies-and-light-profiles-on-the-graphics-card) dhe [Radha e renderimit](topic:render#the-render-queue).
- **Kompjuteri juaj.** {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Renderimi}} › {{ui:Kompjuteri juaj}} shfaq grafikën, bërthamat e procesorit dhe memorien që ky shfletues e lejon aplikacionin ta përdorë, dhe nivelin nga ku fillon renderimi. Shih [Me çfarë renderon kompjuteri yt](topic:your-machine).

### Skedarët dhe aplikacionet e tjera

- **Hapen skedarët STEP.** Një pjesë `.step` ose `.stp`, një pjesë pajisjeje ose një model furnizuesi (AP203, AP214, AP242) hapet si një model i vogël IFC, ku çdo trup është një element që mund ta inspektosh, prerë, matësh dhe ruash si IFC. Ngjyrat dhe emrat e pjesëve të montimit nuk lexohen ende. Shih [Skedarët që hap dhe ruan BimCraft](topic:files#what-it-opens).
- **Eksport USD.** {{ui:USD}} në shiritin e veglave shkruan modelet e hapura si `.usda`, `.usdc` ose `.usdz`, të rregulluara sipas vendit, ndërtesës, katit dhe disiplinës, me klasën IFC, GlobalId dhe vetitë e çdo elementi. Shih [Eksporto modelin si USD](topic:usd).
- **Një masë nga CivilCraft.** Një masë ndërtese e dërguar nga pamja e vendit e CivilCraft shfaq shifrat e studimit në Vetitë, dhe {{ui:Zhvillo këtë masë}} ndërton muret në çdo nivel dhe një dysheme prej saj në një hap zhbërjeje. Shih [Zhvillo një masë ndërtese nga një studim vendi](topic:develop-a-mass).
- **Elemente bibliotekash me variante.** Një element që vjen në disa variante ka një zgjedhje {{ui:Varianti}} në skedën {{ui:Biblioteka}}; elementi i vendosur e mban variantin e vet në IFC, {{ui:Zëvendëso elementin…}} liston variantet e tjera, dhe kopjet dhe përditësimet e ruajnë. Shih [Vendos dhe ndërro një element bibliotekeje që ka variante](topic:library-variants).
- **Paketat e projektit në një dosje.** {{ui:Hap një dosje}} liston skedarët `.ccbundle.zip` nën {{ui:Paketat e projektit}}, dhe çdo paraqitje në një paketë ka **Hap në …**: PDF-në te MarkupCraft, DWG-në te CadCraft, në një skedë të re. Shih [Hap një paraqitje](topic:open-project-bundle#open-a-layout).

### Asistentët dhe shtojcat

- **Më shumë për asistentët AI.** Një asistent tani mund të riemërtojë elemente dhe të caktojë vlera vetish, të zhvendosë dhe fshijë elemente, të ndryshojë muret, dyert dhe dritaret, të eksportojë USD, dhe të renderojë një imazh ose të ekzekutojë radhën e renderimit; çdo ndryshim është një hap zhbërjeje. Shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
- **Shtojcat mund të ndërtojnë në model.** API e shtojcave 1.1 lejon një shtojcë të bëjë një ndryshim në model si një hap zhbërjeje (udhëton në Live TeamWork), të lexojë modelin, dhe të lexojë rrjedhat e tubave dhe kanaleve, portat, pajisjet dhe spool-et.
- **Shtojca Plant** (e fikur derisa ta ndezësh te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Shtojcat}}): specifikimet e tubave të kontrolluara kundrejt rrjedhave, vizatime izometrike të një rrjedhe si SVG dhe DXF me listë materialesh, pajisje procesi të përgjithshme me nozël të vendosura në model, një router mes dy portash, dhe një kontroll i paraqitjes së fabrikës. Një mjet skicimi, jo miratim inxhinierik; tekstet e saj janë vetëm anglisht.

## E ndryshuar

- **Një shtëpi e parë në laptop.** Në një ekran me madhësi laptopi BimCraft nis vetëm me planin, shiriti i Vizatimit është një panel i ngushtë me planin e përshtatur pranë tij, plani dhe pamja 3D kthehen në pamje kur vizatimi i del jashtë, pamja 3D e kornizon të gjithë shtëpinë në një panel të ngushtë, dhe dyert dhe dritaret zgjidhen para vijave të përmasave.
- **Ruajtja e një fotoje.** **Ruaj PNG** në dialogun Renderim tani është {{ui:Ruaj}}, me {{ui:Ruaj si}} pranë për formatet e tjera. Shih [Ruaj imazhin](topic:render#save-the-picture).
- **Skeda Analiza** ka një bllok {{ui:Kontrollet e projektimit}}: ai bën kombinimet e ngarkesave sipas ASCE 7 ose EN 1990 për rastet e tua dhe kontrollon çdo formë çeliku të valsuar I (një madhësi W, S, IPE, HEA ose HEB sipas emrit dhe madhësisë së profilit) sipas AISC 360 ose EN 1993-1-1, duke treguar sa nga kapaciteti i saj përdoret. Një ndihmë derisa një inxhinier ta ketë rishikuar; format e saldura dhe prerjet e tjera thonë "nuk kontrollohet". Shih [Kontrollet e projektimit](topic:frame-analysis#design-checks).

## Të rregulluara

- Rifarja pas një hapi që bëri një madhësi të re familjeje dështoi ("nuk ka madhësi"). Çdo hap tani bën të njëjtët IFC GlobalId kur rifilloheet, kështu që rifarja funksionon për familje dhe çdo ndryshim tjetër.
- Kur dy persona ruajtën të njëjtën familje (në një sesion Live TeamWork ose në dy dritare), ruajtja e dytë e zëvendësonte heshtazi ndryshimin e të parit. Tani refuzon dhe thotë si ta shohësh ndryshimin e tyre dhe ta bësh përsëri tëndin.
- Një model në këmbë survey të SHBA-së lexohej si 0.3048 m për këmbë në vend të 0.3048006096 m, gjë që zhvendoste çdo IFC të georeferencuar në këmbë SHBA mbi hartë.
- Redaktori i familjes: mbyllja e tij nuk e heq më fokusin e tastierës në faqe, Ruaj i tij mbetet në sy në telefon, dhe fushat e tij nuk e bëjnë më telefonin të zmadhohet.

## Në çdo aplikacion

- **Njësitë.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Njësitë}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba e SHBA-së është njësi e vet). Fik njësitë që nuk i përdor kurrë dhe ato largohen nga listat; vendos yll te një dhe puna e re nis me të. Një skedar e mban gjithmonë njësinë e vet. Në BimCraft lista {{ui:Njësitë}} në shiritin e veglave ndjek ndërrimet, ylli cakton njësitë e shfaqjes derisa t'i zgjedhësh në shiritin e veglave (zgjedhja jote e mëparshme ruhet), dhe kutitë e gjatësisë të veglave të vizatimit pranojnë shenjën e çdo njësie, si `3.5 m` ose `10 US ft`. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një shtresim më i dendur dhe panele që fshihen.** {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Dendësia e paraqitjes}} › {{ui:Kompakte}} përshtat më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit të hollë titulli: tërhiqe për ta lidhur ose për ta lënë të lundrojë, lësho në shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fikse për ta rrëshqitur në skaj, ose fshihe dhe kthe nga skaji. Shih [Rregullo panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizin.** Tërhiq një dialog nga shiriti i titullit jashtë rrugës së vizatimit; kthehet aty ku e le. Kliko dy herë shiritin e titullit për ta vendosur sërish në qendër. Shih [Zhvendos një dialog](common:arrange-panels#move-a-dialog).
- **Recetat për asistentët AI.** Dhjetë kërkesa të punuara për asistentin tënd (rregullo një vizatim, lexo një grup, kontrollo vizatimet, bëj pyetje për një model, mbledh një llogaritje sasish, provo një variant pjese…), secila me veglat që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Receta për asistentët AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Cilësimet}} › {{ui:Të përgjithshme}} › {{ui:Gjuha}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si skica të pashqyrtuara ende nga një folës amtar. Temat e ndihmës janë në anglisht, me disa në spanjisht.
- **CadCraft Studio** thotë pse një kontroll përditësimi dështoi (s'ka ende skedar për sistemin tënd, s'ka rrjet, nënshkrim i keq) në vend që të thotë vetëm "U krye", dhe nuk sjell më përsëri një kartë Çfarë ka të re që e mbylle, derisa të dalë një version më i ri.

## Nuk është në këtë version ende

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi dhe paketa e Microsoft Store u zhvendosën në 0.8, sepse vlefshmëria e certifikatës nuk ka ardhur ende. Kontrollo SHA-256 pranë çdo skedari në getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidh {{ui:Më shumë informacion}}, pastaj {{ui:Ekzekuto gjithsesi}}. Në një Mac, herën e parë, kliko me të djathtën CadCraft Studio dhe zgjidh {{ui:Hap}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Këndi dhe lista e pjerrësisë te {{ui:Njësitë}} ruhen, por asnjë kuti ende nuk i lexon.
- Gjurmimi i shtegut në kartën grafike, shtesat e dialogut Renderim dhe radha e renderimit kërkojnë WebGPU (pa të, cilësia e lartë përdor gjurmuesin WebGL); pamja e drejtpërdrejtë përdor WebGPU aty ku shfletuesi e ka, përndryshe WebGL 2. Janë testuar këtu vetëm mbi një imitim softuerik të kartës grafike, jo ende në karta reale. Pamja e drejtpërdrejtë nuk ka shpërndarje ose ndarje në BimCraft (ajo e ModelCraft i ka).
- Renderimi i një shëtitjeje të regjistruar si video nuk është i ndërtuar në BimCraft.
- Kontrollet e projektimit: një formë I, emri i profilit IFC i së cilës nuk është një madhësi W, S, IPE, HEA ose HEB (ose madhësia e saj ndryshon nga ajo), merret si e saldur dhe kthehet "nuk kontrollohet", si edhe tubat, këndet, kanalet, pjesët e holla dhe torsioni. Asnjë inxhinier nuk i ka rishikuar ende kontrollet.
- Elementët e vizatuar nuk mund të kopjohen një nga një, të rrotullohen, pasqyrohen ose të renditen (mund të kopjohet një nivel i tërë), dhe nuk ka mur të ndarë, vegël Tekst, as mur perde. Një mur që takon një mur nga një nivel më i ulët, në një nivel më të lartë, nuk priten në trupin 3D të atij muri, dhe tabelat e listojnë një hapje të nivelit të sipërm nën nivelin e vet murit.
- Familjet: një bibliotekë familjesh e ndarë midis projekteve nuk është e ndërtuar. Familjet dhe nivelet e kopjuara nuk janë hapur ende në programe të tjera BIM.
- MEP: pajisjet janë të përgjithshme (pa të dhëna prodhuesish); T-të dhe reduktorët në spool-e çeliku janë të përgjithshëm, jo nga tabela ASME B16.9; portat e artikujve të bibliotekës të vendosur nga skeda {{ui:Biblioteka}} nuk shkruhen në IFC; asgjë nuk është rishikuar nga inxhinier.
- Shtojca Plant nuk mund ende të vizatojë një rrjedhë të drejtuar në model, të numërojë spool-et në izometritë e veta ose të kontrollojë paraqitjen e pajisjeve të vendosura nga biblioteka.
- Bimët nga biblioteka e bimëve të CivilCraft nuk mund të vendosen ende nga skeda {{ui:Biblioteka}} e BimCraft.
- Energjia: nuk ka simulim orë për orë, nuk ka metodën ISO 52016-1 dhe nuk ka skedarë klimatikë. Asetet: nuk ka binjak të strehuar që mban leximet ose dërgon alarme kur BimCraft është i mbyllur.
- Regjistrimi i skanimeve është provuar mbi skanime testi, jo ende mbi një grup skanimesh të një skaneri real; skedarët E57 hapen ende deri në 6 milionë pika dhe 512 MB.
- Paketat e projektit hapen vetëm në BimCraft (aplikacionet e tjera marrin një paraqitje përmes **Hap në …**), dhe paketat dhe kiti me dy programe janë provuar mbi imitime, jo ende me Archicad ose Revit vetë.

Çdo gjë tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
