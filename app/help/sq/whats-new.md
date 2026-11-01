---
title: Çfarë është e re në 0.7
summary: BimCraft shton mure nëpër disa nivele dhe Kopjo këtë nivel, mure nga PDF-të dhe skanimet, montime muresh të vetat, familje më të pasura, pajisje MEP me porta, grupe përplasjesh, hapje dhe spool-e tubash, dokumente të aseteve, COBie dhe lexime sensorësh, qiell, diell, dritë dite në rrjetë, ngarkesa ngrohjeje dhe ftohjeje, regjistrim skanimesh, pamje të drejtpërdrejtë dhe gjurmim shtegu në kartën grafike, STEP dhe USD, variante bibliotekash, dhe më shumë për asistentët e AI.
keywords: çfarë është e re, shënime versioni, ndryshime, 0.7, version, veçori të reja, mure nëpër nivele, kopjo këtë nivel, pdf, skanim, gjurmim, mure nga planet, montime muresh, shtresa, bërthamë, membranë, dimensione referimi, bibliotekë materialesh, njësi shfaqjeje, stil pamjeje, skeletim, trarë, familje, parametra, simbol planimetrie, pika të nxehta, përsëritje, nivel detaji, familje të brendshme, madhësi nga csv, për element, pajisje, porta, lidhje, distanca, hapje, spool-e, fletë spool-esh, saldim në terren, listë prerjesh kanalesh, dokumente, cobie, sensorë, mqtt, rrjedhë e drejtpërdrejtë, komponent qielli vertikal, fitim diellor, rrjetë drite dite, ngrohje, ftohje, ngarkesa, koeficienti u, regjistro skanimet, icp, e57, pamje e drejtpërdrejtë, gjurmim shtegu, webgpu, pastrim zhurme, qiell fizik, përzierje drite, radhë renderimi, makina juaj, step, usd, paketë projekti, zhvillo masën, variante, asistentë, API e shtojcave, bimë, elektrik, kontrolle projektimi
from: 5c27b80a
---

Kjo është ajo që ndryshoi në BimCraft 0.7, krahasuar me 0.6. Lista është grupuar sipas fushës, me më të rëndësishmet e para.

## Të reja

### Ndërtoni një ndërtesë

- **Mure nëpër disa nivele.** Lista e lartësisë së veglës Mur ofron **Deri te** çdo nivel më lart, ashtu si e bën Properties për një mur të zgjedhur. Planimetritë e niveleve ndërmjet shfaqin murin më të hapur, dhomat aty mbyllen pranë tij, dhe dyert dhe dritaret mund të vendosen në të nga ato planimetri; **Kalon nëpër** te Properties emëron nivelet që kalon. Shih [Ndryshoni një mur, derë ose dritare](topic:change-a-wall-or-door#change-a-wall).
- **Kopjo këtë nivel.** {{ui:Copy this level…}} në panelin e Niveleve vizaton përsëri muret e një niveli me dyert dhe dritaret e tyre, dyshemetë dhe tavanet e tij në një nivel tjetër ose në një nivel të ri mbi të, në një hap zhbërjeje; dhomat shfaqen vetë. Shih [Vizato muret](topic:draw-walls#levels).
- **Mure nga një PDF ose skanim.** {{ui:Build}} › {{ui:From a drawing…}} pranon tani një PDF (vijë vizatimi ose skanim brenda tij) ose një planimetri të skanuar (PNG, JPEG, TIFF, shumë faqe): çdo faqe bëhet muret, dyert, dritaret dhe dhomat e një niveli, me faqen e mbajtur nën planimetrinë. Gjurmimi nuk përdor rrjet dhe as model të trajnuar, dhe rezultati është ai që dhanë vijat: kontrolloni çdo nivel me faqen e tij. Shih [Mure nga një grup planesh](topic:walls-from-plans).
- **Montime muresh të vetat.** {{ui:Wall assemblies…}} ndërton një tip muri shtresë pas shtrese, me bërthamë, hapësira ajrore dhe membrana, dhe një pamje paraprake të dimensionuar; {{ui:Material library…}} mban materialet e projektit në IFC; {{ui:Annotate}} › {{ui:Reference dimension}} mat deri te sipërfaqet dhe vijat e bërthamës dhe ndjek muret kur ndryshojnë. Nga një kontribuues i komunitetit, Doc (drsurfbum). Shih [Montime muresh dhe dimensione referimi](topic:wall-assemblies).
- **Njësi shfaqjeje dhe kontrolle pamjeje.** {{ui:Units}} në shiritin e veglave shfaq gjatësitë në këmbë dhe inç, inç, këmbë dhjetore, milimetra, centimetra ose metra, në përmasa, tabela, koordinata, matje dhe prerje. {{ui:Plan}}, {{ui:Split}} dhe {{ui:3D}} gjenden në shiritin e veglave, ndarja mund të tërhiqet (ose të lëvizet me tastierë), {{ui:Shaded}}, {{ui:Edges}} dhe {{ui:Wireframe}} gjenden pranë kubit të pamjes, dhe pjerrësia e çatisë, skaji i saj dhe nën-çatia ndryshojnë çatinë e zgjedhur menjëherë. Nga një kontribuues i komunitetit, Joel (yisraelk). Shih [Vizato muret](topic:draw-walls#levels).
- **Trarë dyshemesh sipas deshtës.** {{ui:Framing}} mund të paraqesë trarë inxhinierikë (paraprakë) si dhe dru të prerë, duke zgjedhur serinë më të vogël të listuar dhe lartësinë që arrin deshtën, 16" ose 24" në qendër, në çdo drejtim; ata shkojnë në IFC dhe në listën e prerjeve. Një sugjerim nga një tabelë e publikuar e prodhuesit, jo llogaritje inxhinierike. Gjithashtu nga Joel. Shih [Skeletimi i mureve, dyshemeve dhe çative](topic:framing).
- **Më shumë pajisje elektrike.** {{ui:Electrical}} shton prizat e të dhënave, telefonit dhe audio-video, një çelës përzgjedhës, një kohëmatës, një termostat, detektorë tymi dhe nxehtësie, një stacion alarmi dhe një sirenë, një ventilator, një matës energjie dhe një panel të nën-nivelit, secili me klasën e vet IFC. Shih [Planimetria elektrike](topic:electrical-plan).

### Familjet

- **Familjet bëjnë më shumë.** Parametrat mund të jenë numra të plotë, tekst, një material, një stilolaps ose një mbushje; një familje mund të vizatojë simbolin e vet të planimetrisë, të përsërisë një trup të ngurtë, të shënojë pjesët për nivele më të trasha detaji, të mbajë familje të tjera (një këmbë në një tavolinë), dhe të ketë pika të nxehta që tërhiqen, edhe mbi një element të vendosur në planimetri. Madhësitë vijnë nga një tabelë CSV, dhe parametrat e shënuar **Për element** lejojnë dy dyer të së njëjtës madhësi të ndryshojnë. Shih [Redakto një familje](topic:family-editor#plan-symbol) dhe [Familjet dhe madhësitë e tyre](topic:families#sizes-from-a-table).

### Tubat, kanalet dhe pajisjet

- **Pajisje me porta.** {{ui:Build}} › {{ui:Equipment}} vendos një trajtues ajri, ventilator në linjë, pompë, kazan, ngrohës uji, njësi terminale, difuzor, grilë ose tank të përgjithshëm, i përmasuar nga vlerat që shkruani, me lidhjet e tubave dhe kanaleve si porta. Secila ruhet si klasa e vet IFC me porta IFC. Shih [Pajisje MEP me porta](topic:mep-equipment).
- **Linja të lidhura.** Një tub ose kanal që nisët nga një port merr madhësinë dhe sistemin e tij dhe mbetet i fiksuar aty: lëvizni pompën dhe tubi e ndjek. {{ui:Check connections}} liston portat e hapura, skajet e lira, mospërputhjet e madhësisë dhe të sistemit, dhe linjat që nuk furnizohen nga asgjë. Shih [Lidhni tubat dhe kanalet me pajisjet](topic:mep-connections).
- **Tubat dhe kanalet kundër strukturës.** {{ui:Clash check}} ka grupe gati dhe {{ui:Pipes and ducts × structure}} me një klik; {{ui:Check clearances}} përdor izolimin e secilës linjë plus një hapësirë që shkruani; {{ui:Openings needed}} liston ku linjat kalojnë nëpër mure dhe pllaka, si çështje CSV dhe BCF. Asgjë nuk pritet. Shih [Kontrolloni tubat dhe kanalet kundrejt strukturës](topic:mep-against-structure).
- **Spool-e tubash çeliku.** Një linjë çeliku pritet në spool-e të numëruar me gjatësi maksimale dhe te {{ui:Field weld}} që vendosni; {{ui:Spool sheets (PDF)}} jep një faqe për spool me pamjen izometrike, gjatësitë e prerjes, fitingjet, saldimet dhe listën e materialeve, dhe {{ui:Duct cut list}} liston copat e drejta të kanalit. Shih [Spool-et e tubave çeliku dhe fletët e spool-eve](topic:pipe-spools).

Këto janë ndihma për vizatim dhe koordinim, të dimensionuara nga një inxhinier: pa rrjedha, presione ose balancim.

### Menaxhimi i ndërtesës

- **Dokumente për asetet.** Skeda {{ui:Assets}} lidh manuale, garanci, foto dhe vizatime me një aset nëpërmjet emrit të skedarit pranë IFC ose një adrese interneti; vetëm lidhja shkon në IFC. Shih [Dokumentet](topic:assets-and-maintenance#documents).
- **Fletëllogaritësi COBie.** {{ui:Save as COBie (.xlsx)}} shkruan librin e dorëzimit COBie 2.4, dhe një libër COBie i lexuar liston çdo ndryshim para një {{ui:Apply}} të vetme. Nuk ka kaluar ende nëpër një validues COBie. Shih [Fletëllogaritësi COBie](topic:assets-and-maintenance#cobie-spreadsheet).
- **Lexime sensorësh dhe rrjedha të drejtpërdrejta.** Hapni një CSV leximesh, ose {{ui:Connect}} direkt nga shfletuesi te brokeri juaj MQTT ose një adresë që i përgjigjet sistemit tuaj të ndërtesës: çdo aset shfaq leximin e fundit dhe një grafik, ngjyroset në model, dhe shënohet kur del jashtë kufijve të ruajtur në IFC. Leximet qëndrojnë në skedë; fjalëkalimet nuk ruhen kurrë. Shih [Lexime sensorësh](topic:assets-and-maintenance#sensor-readings) dhe [Lexime të drejtpërdrejta](topic:assets-and-maintenance#live-readings).

### Drita e ditës dhe energjia

- **Qielli dhe dielli te çdo dritare.** Skeda {{ui:Daylight}} i jep çdo dritareje komponentin e saj vertikal të qiellit dhe këndin e pengesës, ndjek diellin gjatë një date me {{ui:Sun through the windows on a date}}, dhe llogarit {{ui:Daylight factor on a grid}} në çdo dhomë, të vizatuar mbi planimetrinë e saj. Shih [Komponenti vertikal i qiellit i çdo dritareje](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Ngarkesat e ngrohjes dhe ftohjes.** {{ui:Heating and cooling loads}} llogarit humbjen e nxehtësisë së çdo dhome, ngrohjen e saj gjatë vitit nga shkallët-ditë dhe pikën e ftohjes, nga ajo që e kufizon në model dhe nga koeficienti U i secilit element; një koeficient U i shkruar atje shkruhet në IFC. Shih [Vlerësoni ngarkesat e ngrohjes dhe ftohjes](topic:heating-and-cooling-loads).

Të dyja janë ndihma projektimi sipas metodave të publikuara, jo llogaritje përputhshmërie, dhe çdo panel e thotë këtë.

### Skanimet

- **Regjistro disa skanime.** {{ui:Register scans…}} (në panelin e fillimit, ose te {{ui:Show}}) vendos skanimet në një kornizë të vetme me çifte pikash të zgjedhura ose synime të shkruara, i rafinon me ICP pikë për pikë dhe pastaj pikë për plan, ruan regjistrimin si një skedar të vogël projekti dhe shkruan rrjetin e regjistruar si një skedar LAS ose E57. Shih [Regjistro disa skanime në një](topic:register-scans).

### Pamjet dhe pamja e drejtpërdrejtë

- **Pamja e drejtpërdrejtë.** {{ui:Live view}} në shiritin e veglave shfaq modelin me pamjen në kohë reale pranë pamjes 3D, duke e ndjekur atë dhe çdo ndryshim, me Walk, orën e ditës dhe muajin; {{ui:Live view in a new window}} e vendos atë në një ekran të dytë. Shih [Pamja e drejtpërdrejtë](topic:live-view).
- **Gjurmimi i shtegut në kartën grafike.** Me WebGPU, {{ui:Render}} › {{ui:High quality (path traced)}} ekzekuton gjurmuesin e shtegut të vetë CadCraft në kartën grafike, mund të ndalet dhe {{ui:Resume}}, dhe pastrohet zhurma në fund; pa WebGPU përdor gjurmuesin e shtegut WebGL si më parë. Shih [Cilësi e lartë](topic:render#high-quality).
- **Më shumë në dialogun e Renderimit** (në kartën grafike, pra kërkon WebGPU): qiell fizik dhe pamje qielli, profile drite IES, një kamerë me f-stop, thellësi fushe, perspektivë me dy pika, balancë të bardhës dhe panorama 360°, një graduim për imazhin e përfunduar, përzierje drite dhe elemente renderimi pas renderimit, mjegull, tym dhe kaustikë, ruajtje si PNG 16-bit, EXR ose skedar renderimi, dhe një radhë renderimi. Shih [Qiejt dhe profilet e dritës në kartën grafike](topic:render#skies-and-light-profiles-on-the-graphics-card) dhe [Radha e renderimit](topic:render#the-render-queue).
- **Makina juaj.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} shfaq grafikën, bërthamat e procesorit dhe memorien që ky shfletues e lejon aplikacionin të përdorë, dhe nivelin nga i cili nis renderimi. Shih [Me çfarë renderon makina juaj](topic:your-machine).

### Skedarë dhe aplikacione të tjera

- **Hapen skedarët STEP.** Një pjesë, pajisje ose model furnizuesi `.step` ose `.stp` (AP203, AP214, AP242) hapet si një model i vogël IFC, ku çdo trup i ngurtë është një element që mund ta inspektoni, e prisni, e matni dhe e ruani si IFC. Ngjyrat dhe emrat e pjesëve të montimit nuk lexohen ende. Shih [Skedarët që BimCraft hap dhe ruan](topic:files#what-it-opens).
- **Eksporti USD.** {{ui:USD}} në shiritin e veglave shkruan modelet e hapura si `.usda`, `.usdc` ose `.usdz`, të strukturuara sipas vendit, ndërtesës, katit dhe disiplinës, me klasën IFC, GlobalId dhe vetitë e çdo elementi. Shih [Eksporto modelin si USD](topic:usd).
- **Një masë nga CivilCraft.** Një masë ndërtese e dërguar nga pamja e vendit e CivilCraft shfaq vlerat e studimit të saj në Properties, dhe {{ui:Develop this mass}} ndërton mure në çdo nivel dhe një dysheme nga ajo, në një hap zhbërjeje. Shih [Zhvillo një masë ndërtese nga një studim vendi](topic:develop-a-mass).
- **Elemente bibliotekash me variante.** Një element që vjen në disa variante ka një zgjedhje {{ui:Variant}} te skeda {{ui:Library}}; elementi i vendosur e mban variantin e vet në IFC, {{ui:Swap item…}} liston variantet e tjera, dhe kopjet dhe përditësimet e ruajnë atë. Shih [Vendos dhe zëvendëso një element bibliotekë që ka variante](topic:library-variants).
- **Paketat e projektit në një dosje.** {{ui:Open a folder}} liston skedarët `.ccbundle.zip` nën {{ui:Project bundles}}, dhe çdo paraqitje në një paketë ka **Hap në …**: PDF te MarkupCraft, DWG te CadCraft, në një skedë të re. Shih [Hap një paraqitje](topic:open-project-bundle#open-a-layout).

### Asistentët dhe shtojcat

- **Më shumë për asistentët e AI.** Një asistent mund tani të riemërtojë elementët dhe të vendosë vlera vetish, të zhvendosë dhe fshijë elemente, të ndryshojë muret, dyert dhe dritaret, të eksportojë USD, dhe të renderojë një imazh ose të ekzekutojë radhën e renderimit; çdo ndryshim është një hap zhbërjeje. Shih [Lëreni një asistent AI të punojë me modelin tuaj](topic:assistants).
- **Shtojcat mund të ndërtojnë në model.** API e shtojcave 1.1 lejon një shtojcë të bëjë një ndryshim në model si një hap zhbërjeje (udhëton në Live TeamWork), të lexojë modelin, dhe të lexojë linjat e tubave dhe kanaleve, portat, pajisjet dhe spool-et.
- **Shtojca Plant** (e fikur derisa ta ndezni në {{ui:Settings}} › {{ui:General}} › {{ui:Add-ons}}): specifikimet e tubave të kontrolluara kundrejt linjave, vizatime izometrike të një linje si SVG dhe DXF me listë materialesh, pajisje të përgjithshme procesi me goditje të vendosura në model, një router ndërmjet dy portave, dhe një kontroll i paraqitjes së fabrikës. Një ndihmë vizatimi, jo miratim inxhinierik; tekstet e saj janë vetëm në anglisht.

## Të ndryshuara

- **Një shtëpi e parë në laptop.** Në një ekran me madhësi laptopi, BimCraft nis vetëm me planimetrinë, shiriti i vizatimit është një panel i ngushtë me planimetrinë të përshtatur pranë tij, planimetria dhe pamja 3D kthehen në shikim kur vizatimi i del jashtë, pamja 3D e përfshin tërësisht shtëpinë në një panel të ngushtë, dhe dyert dhe dritaret zgjidhen përpara vijave të përmasave.
- **Ruajtja e një fotografie.** **Ruaj PNG** në dialogun e Renderimit është tani {{ui:Save}}, me {{ui:Save as}} pranë për formatet e tjera. Shih [Ruajtja e imazhit](topic:render#save-the-picture).
- **Skeda e Analizës** ka një bllok {{ui:Design checks}}: bën kombinimet e ngarkesave sipas ASCE 7 ose EN 1990 për rastet tuaja dhe kontrollon çdo formë çeliku I të valëzuar (një madhësi W, S, IPE, HEA ose HEB sipas emrit dhe madhësisë së profilit) sipas AISC 360 ose EN 1993-1-1, duke treguar sa të kapacitetit përdor. Një ndihmë derisa një inxhinier ta ketë shqyrtuar; format e saldura dhe seksionet e tjera thonë "nuk kontrollohet". Shih [Kontrollet e projektimit](topic:frame-analysis#design-checks).

## Të ndrequra

- Ribëra pas një hapi që krijoi një madhësi të re familjeje dështoi ("nuk ka madhësi"). Çdo hap tani krijon përsëri të njëjtët IFC GlobalId kur ribëhet, kështu që ribëja funksionon për familjet dhe çdo ndryshim tjetër.
- Kur dy persona ruajtën të njëjtën familje (në një seancë Live TeamWork ose në dy dritare), ruajtja e dytë zëvendësonte në heshtje ndryshimin e të parit. Tani refuzohet dhe thotë si ta shihni ndryshimin e tjetrit dhe ta bëni përsëri tuajin.
- Një model në këmbë survey të SHBA-së lexohej si 0.3048 m për këmbë në vend të 0.3048006096 m, gjë që zhvendoste çdo IFC të georeferencuar në këmbë amerikane në hartë.
- Redaktuesi i familjeve: mbyllja e tij nuk e heq më fokusin e tastierës në faqe, Ruaj i tij mbetet në vijë kur është në telefon, dhe fushat e tij nuk e bëjnë telefonin të zmadhohet më.

## Në çdo aplikacion

- **Njësitë.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} ka një listë për gjatësinë, sipërfaqen, vëllimin, këndin dhe pjerrësinë, me madhësitë e sakta që japin përkufizimet e njësive (këmba survey e SHBA-së është njësi e vetë). Fikni njësitë që nuk i përdorni kurrë dhe ato largohen nga listat; vendosni yll te një dhe punët e reja nisin me të. Një skedar mban gjithmonë njësinë e vet. Në BimCraft, lista {{ui:Units}} në shiritin e veglave ndjek ndërrimet, ylli vendos njësitë e shfaqjes derisa t'i zgjidhni në shiritin e veglave (zgjedhja juaj e mëparshme ruhet), dhe kutitë e gjatësisë së veglave të vizatimit pranojnë shenjën e çdo njësie, si `3.5 m` ose `10 US ft`. Shih [Njësitë, vlerat e shkruara dhe listat e njësive](common:unit-lists).
- **Një paraqitje më e dendur dhe panele që fshihen.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} përshtat më shumë në ekran (ekranet me prekje dhe telefonat mbajnë butonat e tyre të mëdhenj). Çdo panel anësor ka një shirit të hollë titulli: tërhiqeni për ta ankoruar ose lëvizur lirshëm, lëshojeni mbi shiritin e një paneli tjetër për të ndarë një kornizë si skeda, fiksojeni për ta larguar në skaj, ose fshihni dhe ktheni nga skaji. Shih [Rregulloni panelet](common:arrange-panels#make-the-layout-denser).
- **Dialogët lëvizen.** Tërhiqeni një dialog nga shiriti i titullit për ta larguar nga vizatimi; kthehet aty ku e lamë. Klikoni dy herë shiritin e titullit për ta vendosur përsëri në qendër. Shih [Lëvizni një dialog](common:arrange-panels#move-a-dialog).
- **Recetat për asistentët e AI.** Dhjetë kërkesa të punuara për asistentin tuaj (rregulloni një vizatim, vizatoni një grup, kontrolloni vizatime, bëni pyetje modelit, llogaritni një masë, provoni një variant pjese…), secila me veglat që thërret dhe lejet që i duhen, dhe secila e riluajtur nga testet tona. Aplikacionet nuk përmbajnë AI. Shih [Recetat për asistentët e AI](common:assistants-recipes).
- **Gjuhët.** **Português (Portugal)** është e re te {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Ajo, **Português (Brasil)**, **Español (México)** dhe **Bahasa Indonesia** kanë tani çdo fjalë të aplikacioneve, si draft ende të pashqyrtuar nga një folës amtar. Temat e ndihmës janë në anglisht, disa në spanjisht.
- **CadCraft Studio** thotë pse dështoi kontrolli i përditësimit (s'ka ende skedar për sistemin tuaj, s'ka rrjet, nënshkrim i gabuar) në vend që të thotë vetëm "U krye", dhe nuk e kthen më një kartelë Çfarë është e re që e keni mbyllur, derisa të dalë një version më i ri.

## Jo ende në këtë version

- **0.7 nuk është me nënshkrim kodi.** Nënshkrimi, dhe paketa e Microsoft Store, u zhvendosën në 0.8, sepse validimi i certifikatës nuk ka mbaruar ende. Kontrolloni SHA-256 pranë çdo skedari te getcadcraft.com/download. Në Windows, nëse SmartScreen ndalon instaluesin, zgjidhni {{ui:More info}}, pastaj {{ui:Run anyway}}. Në Mac, herën e parë, klikoni me të djathtën CadCraft Studio dhe zgjidhni {{ui:Open}}. CadCraft Studio nuk është ende në një dyqan aplikacionesh, dhe nuk ka ende version për iPad ose iPhone.
- Listat e këndit dhe pjerrësisë në {{ui:Units}} ruhen, por asnjë kuti nuk i lexon ende.
- Gjurmimi i shtegut në kartën grafike, shtesat e dialogut të Renderimit dhe radha e renderimit kanë nevojë për WebGPU (pa të, cilësia e lartë përdor gjurmuesin e shtegut WebGL); pamja e drejtpërdrejtë përdor WebGPU ku e ka shfletuesi, përndryshe WebGL 2. Janë testuar këtu vetëm në një zëvendësues softuerik të kartës grafike, jo ende në karta grafike reale. Pamja e drejtpërdrejtë nuk ka shpërndarje ose ndarje në BimCraft (ajo e ModelCraft i ka).
- Renderimi i një shëtitjeje të regjistruar si video nuk është i integruar në BimCraft.
- Kontrollet e projektimit: një formë I e cila emri i profilit IFC nuk është një madhësi W, S, IPE, HEA ose HEB (ose madhësia e saj është e ndryshme) merret si e saldur dhe kthehet "nuk kontrollohet", po kështu tubat, këndët, kanalet, pjesët e hollë dhe rrotullimi. Asnjë inxhinier nuk i ka shqyrtuar ende kontrollet.
- Elementët e vizatuar nuk mund të kopjohen një nga një, të rrotullohen, të pasqyrohen ose të vendosen në rreshta (një nivel i tërë mund të kopjohet), dhe nuk ka mur të ndarë, veglë Tekst ose mur perde. Një mur që takon një mur nga një nivel më i ulët në një nivel më të lartë nuk prehet në trupin 3D të atij muri, dhe tabelat e listojnë një hapje të nivelit të lartë nën nivelin e vet të murit.
- Familjet: nuk është ndërtuar ende një bibliotekë familjesh të ndara ndërmjet projekteve. Familjet dhe nivelet e kopjuara nuk janë hapur ende në programe të tjera BIM.
- MEP: pajisjet janë të përgjithshme (pa të dhëna prodhuesish); të (tee) dhe reduktorët në spool-et e çelikut janë të përgjithshëm, jo nga tabela ASME B16.9; portat e elementeve të bibliotekës të vendosura nga skeda {{ui:Library}} nuk shkruhen në IFC; asgjë nuk është shqyrtuar nga një inxhinier.
- Shtojca Plant nuk mund ende të vizatojë një linjë të drejtuar në model, të numërojë spool-et në izometritë e saj, ose të kontrollojë paraqitjen e pajisjeve të vendosura nga biblioteka.
- Fabrikat nga biblioteka e fabrikave të CivilCraft nuk mund të vendosen ende nga skeda {{ui:Library}} e BimCraft.
- Energjia: nuk ka simulim orar, nuk ka metodën ISO 52016-1 dhe nuk ka skedarë klime. Aset: nuk ka një binjak të strehuar që mban leximet ose dërgon alarme kur BimCraft është i mbyllur.
- Regjistrimi i skanimeve është provuar me skanime testimi, jo ende me një grup skanimesh të një skaneri real; skedarët E57 hapen ende deri në 6 milion pika dhe 512 MB.
- Paketat e projektit hapen në BimCraft vetëm (aplikacionet e tjera marrin një paraqitje përmes **Hap në …**), dhe paketat dhe kompleti me dy programe janë provuar me zëvendësues, jo ende me Archicad ose Revit vetë.

Çdo gjë tjetër është në [Çfarë nuk është ndërtuar ende](topic:not-built-yet).
