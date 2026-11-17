---
title: Zgjidhja e problemeve
summary: Mesazhet që shfaq BimCraft, çfarë i shkakton ato dhe çfarë të bëni, për hapjen e skedarëve, dosjeve, modeleve 3D, vizatimeve dhe ndryshimeve.
keywords: problem, gabim, nuk funksionon, nuk hapet, dështoi, i paplotë, i dëmtuar, i ngadaltë, rrëzim, bosh, mungon, mesazh, ndihmë
from: 1e5a79fc
---

Mesazhet shfaqen në rreshtin e gjendjes në fund të skenës, me të kuqe kur diçka dështoi. Gjeni mesazhin më poshtë.

## Hapja e skedarëve

**"*emri* nuk është skedar IFC, RVT, RFA, DWG ose DXF."**
BimCraft nuk e njohu skedarin. Kontrolloni zgjerimin dhe që skedari të mos jetë bosh. Skedarët PDF, imazhet dhe dokumentet e zyrës nuk hapen.

**".ifczip nuk mbështetet ende. Ruani ose eksportoni modelin si skedar .ifc të thjeshtë."** (edhe për `.ifcxml`)
Zhjapni `.ifczip` (është një zip i zakonshëm që përmban një `.ifc`) ose eksportoni IFC të thjeshtë.

**"… është një skedar projekti që BimCraft nuk e lexon ende."**
Një skedar `.pln`, `.pla`, `.tpl` ose `.bpn`. Eksportoni IFC ose DWG nga ai dhe hapeni: shih [Hapni skedarët e projektit .pln dhe .pla](topic:pln-project-files).

**"Ky skedar IFC nuk mund të lexohej."**
Skedari IFC është i dëmtuar ose nuk është IFC i vërtetë. Hapeni në një redaktues teksti: një skedar IFC i vërtetë fillon me `ISO-10303-21;`. Eksportojeni përsëri.

**"Ky skedar është i paplotë: është … MB, por indeksi i vet tregon për të dhëna të paktën … MB më tej. …"**
Skedari i projektit ose i familjes u preh gjatë kopjimit, ngarkimit ose sinkronizimit. Një skedar i diskut në re që është "vetëm në linjë" duket njësoj. Një skedar i hapur vetëm do të hapet, me këtë mesazh në krye të kartës dhe "Po shfaqet ajo që u rikuperua; kopjoni përsëri origjinalin për modelin e plotë.": karta tregon vetëm pjesët që kanë çdo bajt në skedar dhe lista pjesët e tjera nën **Nuk është në skedar**. Bëjeni skedarin të disponueshëm jashtë linje në diskun tuaj në re, ose kopjoni përsëri origjinalin dhe rihapeni. Në një dosje, BimCraft shfaq kopjen më të re të plotë rezervë.

**"… Lista e përmbajtjes së skedarit është gjithashtu në pjesën që mungon, kështu që asgjë në të nuk mund të hapet."**
Skedari u preh aq herët sa as lista e përmbajtjes nuk ka mbetur. Nga kjo kopje nuk mund të rikuperohet asgjë. Kopjoni përsëri origjinalin dhe rihapeni.

**"Ky skedar i përbërë nuk ka rrjedhën BasicFileInfo, prandaj nuk është skedar Revit."**
Skedari është një skedar i përbërë i një lloji tjetër (dokumentet e vjetra të zyrës përdorin të njëjtin container). Kontrolloni që zgjodhët skedarin e duhur.

**"Ende po punoj me të fundit…"**
BimCraft është ende i zënë me skedarin ose dosjen e mëparshme. Prisni që rreshti i gjendjes të mbarojë, pastaj provoni përsëri.

**Zgjedhësi i skedarëve e zbeh skedarin tim.**
Zgjedhësi ofron vetëm `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` dhe `.dxf`. Tërhiqni në vend të tyre skedarët e tjerë mbi faqe, dhe BimCraft do t'ju thotë nëse mund t'i lexojë.

## Hapja e dosjeve

**"Kjo dosje ka më shumë se 20,000 skedarë. Zgjidhni një dosje më të vogël, si një projekt."**
Zgjodhët një dosje shumë lart, si një disk i tërë. Zgjidhni një dosje projekti.

**"Shfletuesi nuk i dha qasje *emrit*. Zgjidheni përsëri me Hap një dosje."**
Klikuat {{ui:Rihap}} te një dosje e fundit dhe leja e shfletuesit u refuzua ose ka skaduar. Zgjidheni përsëri dosjen, ose tërhiqeni brenda.

**Shfletuesi thotë se do të "ngarkojë" skedarët.**
Ky është formulimi i vetë shfletuesit për dorëzimin e skedarëve te faqja. BimCraft nuk i dërgon askund. Tërhiqni dosjen brenda për të shmangur pyetjen.

**Nuk ndodh asgjë në telefon ose tablet.**
Shumë shfletues celularë nuk mund të zgjedhin dosje. Hapni skedarë të vetëm, ose përdorni një kompjuter.

## Motori IFC ngarkohet herën e parë

**Rreshti i gjendjes mbetet te "Po nis motorin IFC…", ose shfaq një gabim si "Failed to fetch".**
Motori IFC nuk mund të shkarkohej. Mund të jeni jashtë linje, ose një firewall ose bllokues përmbajtjeje po e pengon.

:::offline
Jeni jashtë linje. Nëse butoni i shiritit të aplikacionit nuk thotë {{ui:Gati jashtë linje}}, motori IFC nuk është ruajtur kurrë në këtë shfletues. Lidhuni përsëri, hapeni skedarin përsëri, pastaj klikoni {{ui:Ruaje për jashtë linje}} që të punojë jashtë linje herën tjetër. Shih [Në linjë dhe jashtë linje](topic:online-offline).
:::

:::online
Rifreskoni faqen dhe provoni përsëri. Në një rrjet pune, kërkoni nga ekipi juaj IT të lejojë skedarët `.wasm` të faqes.
:::

## Ruajtja për përdorim jashtë linje

**Butoni thotë {{ui:Nuk u ruajt}}.**
Disa skedarë nuk u shkarkuan, zakonisht sepse lidhja u ndërpre. Kontrolloni lidhjen dhe klikoni përsëri butonin. Kopja e mëparshme jashtë linje mbahet deri sa të plotësohet një e re.

**Butoni thotë {{ui:Jashtë linje nuk disponohet}}.**
Ky dritare nuk mund të mbajë një kopje jashtë linje, për shembull një dritare private ose një kompjuter pune i menaxhuar. Shih [Puna jashtë linje](common:offline).

**Butoni mbetet te "Duke ruajtur *n* nga *m*" për një kohë.**
Kopja e BimCraft është rreth 11 MB, pjesa më e madhe është motori IFC. Mbajeni skedën të hapur deri sa të thotë {{ui:Gati jashtë linje}}.

**BimCraft u hap jashtë linje, por duket i vjetëruar.**
Kopja juaj e ruajtur është nga një vizitë e mëparshme. Kur jeni në linjë, klikoni {{ui:Gati jashtë linje}} dhe zgjidhni {{ui:Ruaje përsëri (merr versionin më të ri)}}.

## Pamja 3D

**Modeli nuk është aty ku prisnit, ose është shumë i vogël.**
Shtypni {{key:F}} ose klikoni {{ui:Përshtat}}. Përshtat i përfshin gjithmonë gjithçka në model, përfshirë katet që keni hequr shenjën dhe elementët e humbur larg ndërtesës, kështu që ndërtesa mund të duket e vogël. Zmadhoni nga aty.

**Klikimi nuk përzgjedh asgjë.**
Mbajeni miun të palëvizur kur klikoni: një tërheqje e vogël rrotullon. Elementët e kateve pa shenjë nuk mund të përzgjidhen. Me {{ui:Hapësira}} të ndezur, hapësirat transparente përzgjidhen para atyre që janë brenda tyre.

**Butoni {{ui:Skajet}} është i çaktivizuar: "Skajet janë fikur për modele shumë të mëdha".**
Modeli ka më shumë se 1.5 milion trekëndësha. Skajet mbeten fikur për të kursyer memorien.

**Skeda bëhet e ngadaltë, e bardhë, ose shfaq faqen e rrëzimit të shfletuesit.**
Modeli është shumë i madh për memorien që i jep shfletuesit kjo skedë. Mbyllni skedat e tjera dhe rifreskoni. Eksportoni një IFC më të vogël: një ndërtesë, një disiplinë ose më pak kate. Shih [Shfletuesit, pajisjet dhe memoria](topic:platforms).

**Pamja 3D mbetet bosh.**
WebGL mund të jetë fikur ose bllokuar. Te cilësimet e shfletuesit, ndizni akselerimin me harduer (ose akselerimin grafik) dhe rinisni shfletuesin.

## Redaktimi i IFC

**"Përdorni një numër."** Vlera është numerike. Shkruani një numër të thjeshtë pa njësi, si `2.4`.

**"Përdorni një numër të plotë."** Vlera është një numërim ose numër i plotë. Hiqni pjesën dhjetore.

**"Vetëm vetitë me një vlerë mund të ndryshohen."** Listat, enumeracionet dhe sasitë janë vetëm për lexim.

**{{key:Mod+S}} hap dritaren "Ruaj faqen" të shfletuesit.**
Nuk ka ndryshime të pa ruajtura, kështu që BimCraft ia la tastin shfletuesit. Mbylleni dritaren.

**{{key:Mod+Z}} nuk bën asgjë.**
Funksionon vetëm kur keni ndryshime të pa ruajtura dhe nuk po shkruani në një fushë. Pas ruajtjes, nuk ka asgjë për të zhbërë.

**Lista {{ui:Ndryshimet}} ende tregon ndryshime pasi i hodhët poshtë dhe hapët një vizatim ose një dosje.**
Kur i përgjigjeni pyetjes "Ti hedh poshtë?" me OK dhe pastaj hapni diçka tjetër nga një model IFC, ndryshimet e vjetra mbahen në memorie dhe {{ui:Ruaj si IFC}} do t'i ruante ende. Për të filluar me të vërtetë nga e para, hapni përsëri IFC-në origjinale, ose rifreskoni faqen.

**Ndryshimi im preku më shumë elementë se sa përzgjodha.**
Ndryshuat një veti në një grup të shënuar "(tip)". Vetitë e tipit zbatohen për çdo element të tipit. Klikoni {{ui:Zhbëj}}. Shih [Ndryshoni një veti tipi për çdo element të një tipi](topic:type-vs-instance).

## Vizatimet

**"*emri* nuk mund të lexohej. Mund të jetë i dëmtuar, ose i ruajtur në një format që lexuesi nuk e trajton ende (…)."**
Ruajeni vizatimin nga programi që e bëri si DWG më të vjetër (2018 ose më herët) ose si DXF, dhe provoni përsëri.

**"Ky vizatim nuk ka çfarë të shfaqë."** ose **"*emri* është një vizatim bosh: nuk përmban vija, tekst ose blloqe."**
Vizatimi është bosh, ose përmban vetëm gjëra që BimCraft nuk i vizaton ende (shih **Ende nuk vizatohet** në të djathtë).

**"Ky vizatim është shumë i madh; shfaqet vetëm një pjesë."**
BimCraft ndaloi së vizatuari për të mbetur i shpejtë. Fikni shtresat që nuk ju duhen, ose hapni fletët që ju nevojiten nga një vizatim më i vogël.

**Mungojnë pjesë të një flete.**
Vizatimet e lidhura mund të mungojnë: shikoni te **Vizatime të lidhura** në të djathtë. Shih [Gjeni vizatimet dhe imazhet e lidhura](topic:dwg-linked-files). Shtresat mund të jenë edhe të fikura: klikoni {{ui:Të gjitha të ndezura}}.

**Një imazh shfaqet si kornizë boshe.**
Skedari i tij nuk u gjet, ose është TIFF ("TIFF nuk mund të shfaqet në një shfletues"). Shtoni një kopje PNG ose JPEG me {{ui:Shto imazhe…}}.

**Lëvizja me pedanë (trackpad) zmadhon në vend që të lëvizë vizatimin.**
Kështu funksionojnë vizatimet në BimCraft. Klikoni dhe tërhiqni për të lëvizur.

## Ende të bllokuar

Lexoni [Çfarë nuk është ndërtuar ende](topic:not-built-yet): gjëja që po kërkoni mund të mos ekzistojë në këtë version.
