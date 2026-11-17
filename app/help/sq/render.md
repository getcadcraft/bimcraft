---
title: Renderim i një imazhi të modelit
summary: Bëj një imazh me dritë ditore të pamjes 3D: qiell, dielli sipas gjerësisë gjeografike të vendit, hije të buta, dritare xhami; me WebGPU, me gjurmim shtegu në kartën grafike, me qiej, kamerë, përzierje drite, gradim, mjegull dhe radhë renderimi.
keywords: renderim, parapërcaktim, parapërcaktime, parapërcaktim skene, brenda, jashtë, pamje prerjeje, natë, një klik, renderim, gjurmim shtegu, gjurmim rrezesh, ndriçim global, pasqyrime, thyerje, cilësi e lartë, foto, fotorealist, realist, imazh, png, qiell, diell, dritë ditore, hije, hije të buta, okluzion ambjental, xhami, dritare, metal, materiale, ekspozim, ndriçim, me re, muzg, studio, prezantim, vizualizim, webgpu, pastrim zhurmash, qiell fizik, hdri, ies, thellësi fushe, panoramë, balancë e bardhë, përzierje drite, elemente renderimi, exr, png 16 bit, mjegull, kaustikë, radhë renderimi
from: beb74cc7
---

{{ui:Renderim}} në shiritin e veglave bën një imazh të pamjes 3D që duket si dritë ditore: një qiell, dielli aty ku e vendos gjerësia e vendit, hije të buta, dritë nga e gjithë qielli që errëson qoshet, dhe ngjyra që mund të duken si xhami ose metal. Modeli dhe skedari nuk ndryshohen.

## Rendero pamjen

1. Vendos pamjen 3D si të duash imazhin: rrotullo dhe zmadho, fshih katet ose elementët që nuk do, dhe vendos një [prerje](topic:section-plane) nëse imazhi duhet të tregojë një prerje.
2. Kliko {{ui:Renderim}} në shiritin e veglave.
3. Zgjidh një {{ui:Skena}} nëse ajo që është shtypur nuk është ajo që do (shih [Parapërcaktimet e skenës](topic:render#scene-presets-a-good-picture-in-one-click)), zgjidh {{ui:Madhësia}}, pastaj kliko {{ui:Renderim}} në dialog.

   Imazhi plotësohet ndërsa renderohet dhe bëhet më i lëmuar me çdo kalim. {{ui:Ndalo}} (ose {{key:Esc}}) e ndal herët dhe e mban imazhin deri atë pikë.

4. Kliko {{ui:Ruaj}} për ta shkarkuar si PNG, ose {{ui:Ruaj si}} për një format tjetër (shih [Ruaj imazhin](topic:render#save-the-picture)). Emërohet sipas skedarit të modelit.

:::tip
Fillo me {{ui:Draft}} në {{ui:Madhësia e pamjes}} për të kontrolluar kamerën, pastaj rendero me {{ui:Mirë}} ose {{ui:Më e mirë}} në një madhësi më të madhe për imazhin përfundimtar.
:::

## Parapërcaktimet e skenës: një imazh i mirë me një klik

Maja e dialogut ka katër butona {{ui:Skena}}. Secili cakton qiellin, ndriçimin, tokën, vijat e skajeve, cilësinë dhe diellin me një klik, kështu që nuk ka çfarë të mësosh para imazhit të parë. Kliko një, pastaj {{ui:Renderim}}.

| Skena | Çfarë cakton | Për çfarë përdoret |
|---|---|---|
| {{ui:Jashtë}} | Qiell i pastër, dielli i vetë modelit, toka e ndezur | Ndërtesa nga jashtë |
| {{ui:Brenda}} | Qiell me re (dritë e barabartë, pa njolla dielli të forta), gjysmë ndalese më i ndritshëm | Pamje nga brenda një dhome |
| {{ui:Pamje prerjeje}} | Studio e bardhë, pa tokë, vijat e skajeve në renderimin e shpejtë | Model i prerë nga një prerje |
| {{ui:Natë}} | Dielli poshtë (mesnatë në mes të dimrit për gjysmën e vendit), një ndalesë më i ndritshëm | Llambat që ndriçojnë modelin. Pa llamba imazhi është i errët |

- {{ui:Zgjidh për këtë pamje}} zgjedh për ty: {{ui:Pamje prerjeje}} kur një prerje është e ndezur, {{ui:Brenda}} kur kamera është brenda modelit, përndryshe {{ui:Jashtë}}. Hera e parë që hap dialogun, fillon kështu vetvetiu.
- Çdo cilësim mbetet më poshtë dhe mund të ndryshohet. Pasi ndryshon një cilësim që skena cakton, asnjë buton nuk mbetet i shtypur dhe rreshti nën butona thotë se cilësimet janë të tuajat. Kliko skenën përsëri për t'i kthyer vlerat e saj.
- Një skenë nuk prek motorin, formën, madhësinë, materialet, kamerën ose llambat.

:::note
Skenat japin të njëjtat vlera në ModelCraft dhe BimCraft. Si duket imazhi përfundimtar varet nga modeli yt dhe nga karta jote grafike.
:::

## Çfarë shfaqet në imazh

Pamja 3D e shfaq të ngurtë: elementët e fshehur dhe ata transparentë, katet e fshehur dhe modelet e fshehura lihen jashtë, dhe dhomat shfaqen vetëm kur {{ui:Hapësira}} është e ndezur. Një plan prerjeje ose një kuti prerjeje e pret imazhin ashtu si e pret pamjen. Elementët shfaqen me ngjyrat e tyre: ngjyrosja sipas vetisë (skeda {{ui:Ngjyra}}) nuk përdoret.

## Cilësimet

| Cilësimi | Çfarë bën |
|---|---|
| {{ui:Madhësia}} | Madhësia e pamjes, dyfishi i madhësisë së pamjes, Full HD, 4K ose katror |
| {{ui:Forma}} | {{ui:Me shpejtësi}}, ose {{ui:Cilësi e lartë (gjurmim shtegu)}} (më poshtë) me {{ui:Kufiri kohor}} të tij |
| {{ui:Cilësia}} | Sa kalime (ose, në cilësi të lartë, mostra) mesatarizohen: {{ui:Draft}} 16, {{ui:Mirë}} 64, {{ui:Më e mirë}} 256. Më shumë kalime japin hije dhe skaje më të lëmuara, dhe zgjasin më shumë |
| {{ui:Qielli}} | {{ui:Qiell i pastër}}, {{ui:Me re}}, {{ui:Muzg}} ose {{ui:Studio e bardhë}} (sfond i thjeshtë i bardhë) |
| {{ui:Dielli}} | 21 qershor në orën 15:00 në gjerësinë gjeografike që i jep skedari për vendin e tij (IfcSite), i kthyer nga veriu i vërtetë i modelit. Vendos shenjën te {{ui:Përdor një datë dhe orë tjetër për këtë imazh}} për një kohë tjetër |
| {{ui:Ndriçimi}} | Më i ndritshëm ose më i errët, me hapa (ndalesa) |
| {{ui:Toka nën model}} | Një tokë në pikën më të ulët të modelit, që merr hijet dhe shkrihet në horizont |
| {{ui:Vizato skajet}} | Vizaton skajet e elementëve hollë mbi imazh |

Kur dielli është nën horizont në kohën e zgjedhur është natë: qielli errësohet dhe llambat e modelit e ndriçojnë.

## Llambat

Çdo armaturë drite në model është një llambë në imazh: armaturat në një skedar IFC (IfcLightFixture, ose një element i shtypur si armaturë drite), përfshi ato që vendos nga biblioteka. Çdo llambë ndriçon poshtë, nga pak nën armaturë. Kur skedari jep fuqinë e një armature, ndriçimi i saj del prej saj; përndryshe është 800 lumen, një e bardhë e ngrohtë.

Dialogu i liston llambat nën {{ui:Llambat}}: hiqe shenjën për ta fikur, ose shkruaj ndriçimin e saj në lumen. Këto ndryshime ruhen në IFC (grupi i vetive `CadCraft_Light` të armaturës, ku mund t'i ndryshosh edhe te Vetitë), dhe {{key:Ctrl+Z}} i zhbën.

Kur një skedar nuk thotë asgjë për vendndodhjen e vet, dielli vendoset në 40° veri, dhe dialogu e thotë këtë. Ora është ora lokale e vendit, e llogaritur nga gjatësia e tij gjeografike, kështu që mund të jetë një orë larg aty ku orët janë vendosur ndryshe.

Këto cilësime mbahen në këtë shfletues për imazhin tjetër. Nuk ruhen në skedarin IFC.

## Xhami dhe materiale të tjera

Nën {{ui:Materialet}}, çdo ngjyrë në ekran ka një pamje: {{ui:Mat}}, {{ui:Satin}}, {{ui:Me shkëlqim}}, {{ui:Metal}}, {{ui:Metal i lustruar}}, {{ui:Xhami}} ose {{ui:Xham i turbullt}}. Ngjyrat që skedari IFC i bën transparente (për shembull qelqi i dritareve) fillojnë si {{ui:Xhami}}.

:::note
Në formën {{ui:Me shpejtësi}}, xhami dhe metali pasqyrojnë qiellin, jo pjesën tjetër të modelit, dhe drita nuk thyhet nëpër xhami. Forma {{ui:Cilësi e lartë (gjurmim shtegu)}} më poshtë i bën të dyja.
:::

## Cilësi e lartë

Zgjidh {{ui:Forma}} › {{ui:Cilësi e lartë (gjurmim shtegu)}} për një imazh që ndjek dritën ashtu si e sheh një kamerë:

- drita kërcen mes sipërfaqeve, kështu që një dhomë e ndriçuar nga një dritare, ose nga një llambë, ndriçohet nga çdo anë dhe ngjyrat i japin njëra-tjetrës;
- xhami është xhami i vërtetë: drita thyhet nëpër të dhe ai pasqyron modelin;
- metali dhe sipërfaqet e lëmuara pasqyrojnë pjesën tjetër të modelit;
- panelet e dritës ndriçojnë si panele, me hije të buta.

Është shumë më ngadalë se {{ui:Me shpejtësi}}: çdo kalim e ndjek përsëri dritën e çdo pikseli. Imazhi fillon me kokrriza dhe pastrohet ndërsa mostrat mblidhen, prandaj fillo të vogël ({{ui:Madhësia e pamjes}}, {{ui:Draft}}) dhe zgjidh një {{ui:Kufiri kohor}}: kur mbaron, imazhi deri atë pikë mbahet. {{ui:Ndalo}} e mban po ashtu. Kalimi i parë pret ndërsa shfletuesi përgatit gjurmuesin e shtegut.

Ku shfletuesi ka WebGPU, gjurmuesi i shtegut është i yni dhe punon në kartën grafike; rreshti nën imazh e thotë këtë. Pas {{ui:Ndalo}} ose kufirit kohor, {{ui:Vazhdo}} vazhdon të njëjtin imazh deri sa të ketë të gjitha mostrat; ndryshimi i një cilësimi ose shtypja e {{ui:Renderim}} përsëri e nis nga e para. Pa WebGPU imazhi gjurmohet me WebGL (rreshti e thotë) dhe {{ui:Vazhdo}} nuk ofrohet.

:::linux
Firefox dhe shumica e konfigurimeve të Chrome në Linux nuk kanë ende WebGPU, prandaj cilësia e lartë përdor WebGL atje.
:::

Në këtë formë skajet nuk vizatohen, teksturat tregojnë ngjyrën dhe trashësinë, por jo reliefin, dhe një prerje bëhet mbi model para se të nisë imazhi.

{{ui:Pastrim zhurmash (heq kokrrizat e mbetura pas mostrave)}} është i ndezur si parazgjedhje: kur imazhi mbaron, ose ndalet, kokrrizat që mbeten pastrohen nga një rrjet nervor i bërë për këtë (rrjeti i publikuar i Intel Open Image Denoise, i ekzekutuar në kompjuterin tënd: në kartën grafike, përndryshe në procesor). {{ui:Shfaq}} › {{ui:Imazhi para pastrimit të zhurmës}} e tregon ashtu si u renderua.

## Qiej dhe profile drite në kartën grafike

Me WebGPU, cilësia e lartë ka dy qiej të tjerë:

- {{ui:Qiell fizik}} e llogarit dritën e ditës nga lartësia e diellit: blu i thellë lart, një brez i zbehtë te horizonti, dhe një diell që bëhet më i ngrohtë dhe më i zbehtë kur ulet. {{ui:Mjegull}} shkon nga një ditë shumë e qartë (2) në një ditë me hemi (10).
- {{ui:Imazh qielli (HDRI)}} ndriçon modelin me një imazh panoramik të një vendi real. {{ui:Zgjidh një imazh…}} merr një skedar `.hdr` ose `.exr` equirectangular; {{ui:Rrotullo}} e rrotullon përreth modelit, dhe {{ui:Ndriçimi i imazhit}} e bën më të ndritshëm ose më të errët. Imazhi mban diellin e vet, kështu që dielli i modelit nuk shtohet. Mbahet vetëm ndërsa faqja është e hapur: pas rihapjes, zgjidhe përsëri.

Çdo llambë në listën {{ui:Llambat}} mund të marrë një profil drite të prodhuesit: {{ui:Profili IES…}} lexon një skedar IES (LM-63), dhe llamba atëherë e hedh dritën ashtu si e bën ai montim (një downlight i ngushtë, një lavatriçe muri). Çdo llambë me atë emër e përdor, dhe llamba mban ndriçimin e vet. Kliko emrin e profilit për të ndaluar përdorimin e tij.

Dritaret me xhami të pastër ndihmojnë dritën e qiellit të gjejë rrugën në një dhomë.

Format {{ui:Me shpejtësi}} dhe gjurmuesi WebGL e shfaqin {{ui:Qiell fizik}} dhe {{ui:Imazh qielli (HDRI)}} si një qiell të qartë, dhe i injorojnë profilet e dritës.

## Kamera

{{ui:Kamera}} e vendos imazhin si një fotografi:

- {{ui:Ekspozimi}}: mban {{ui:Rrëshqitësi i ndriçimit}}, ose zgjidh {{ui:Cilësimet e kamerës}} dhe vendos {{ui:Diafragma (f-stop)}}, {{ui:Shpejtësia e shutërit}} dhe {{ui:ISO}} si në një kamerë; EV pranë tyre është vlera e zakonshme e ekspozimit. f/16 në 1/100 s dhe ISO 100 përputhet me një ditë me diell; një skenë më e errët do një diafragmë më të gjerë, një shutër më të ngadaltë ose një ISO më të lartë. Kjo punon në çdo formë.
- {{ui:Thellësia e fushës}} shtyp atë që është më afër ose më larg se {{ui:Distanca e fokusit (m)}}, ashtu si do ta bënte një lente me atë f-stop (lëre bosh për të fokusuar në atë që është në mes të pamjes); {{ui:Forma e diafragmës}} i jep dritave jashtë fokusit një formë të rrumbullakët ose me lamela.
- {{ui:Perspektivë me dy pika (vijat vertikale mbeten vertikale)}} e nivelon kamerën dhe e zhvendos imazhin, si bën një lente arkitekturore me zhvendosje, kështu që muret nuk prirën kur shikon lart ose poshtë nga një ndërtesë.
- {{ui:Balanca e bardhës}} cakton cilën ngjyrë drite duket e bardhë: më e ulët (për shembull 3000 K) për dritë të ngrohtë llambash, më e lartë për hije dhe ditë me re.
- {{ui:Projeksioni}}: {{ui:Panoramë 360°}} bën një imazh 2:1 të gjithë asaj që është rreth kamerës, për shikuesit e panoramave; {{ui:Panoramë stereo 360°}} i vendos njëra mbi tjetrën një panoramë për syrin e majtë dhe një për syrin e djathtë, për kufje; {{ui:Hartë kubike (6 faqe)}} bën gjashtë pamje katrore në një rrjet 3 × 2. Gjerësia vjen nga {{ui:Madhësia}}.

Projeksioni, thellësia e fushës, perspektiva me dy pika dhe balanca e bardhës kërkojnë gjurmuesin e shtegut në kartën grafike (WebGPU), prandaj shfaqen vetëm te {{ui:Cilësi e lartë (gjurmim shtegu)}}.

## Përfundo imazhin

{{ui:Foto}} gradon imazhin me cilësi të lartë si një fotografi, dhe çdo kontroll e ndryshon imazhin e përfunduar menjëherë, pa rirenderuar:

- {{ui:Pamja (transformimi i pamjes)}}: {{ui:ACES filmik}} (imazhi si më parë), {{ui:AgX}} (më i butë, mban ngjyrën në dritë shumë të ndritshme), {{ui:Filmik}} (një kurbë e butë filmi) ose {{ui:Standard}} (i thjeshtë; drita shumë e fortë shkon në të bardhë).
- {{ui:Kontrasti}} dhe {{ui:Shtypja e theksimeve}} (sjell përsëri detajet në pjesët shumë të ndritshme).
- {{ui:Bloom}} (një shkëlqim i butë rreth dritës së fortë), {{ui:Shkëlqimi}} me {{ui:Vija shkëlqimi}} (rreze yjesh nga pikat më të ndritshme) dhe {{ui:Vinjetë}} (qoshe më të errëta).
- {{ui:Tabela e ngjyrave (.cube)…}} aplikon një gradim ngjyrash nga një skedar `.cube`, me {{ui:Forca e tabelës së ngjyrave}}; si imazhi i qiellit, mbahet vetëm ndërsa faqja është e hapur.

## Ruaj imazhin

{{ui:Ruaj si}} pranë {{ui:Ruaj}} zgjedh skedarin: {{ui:PNG}}, {{ui:JPEG}} ose {{ui:WebP}} për ndarje (JPEG dhe WebP vetëm aty ku shfletuesi mund t'i shkruajë), dhe pas një renderimi me cilësi të lartë në kartën grafike edhe:

- {{ui:PNG, 16 bit}}: imazhi i gradaum me hapa më të hollë midis nuancave, për printim ose përpunim të mëtejshëm.
- {{ui:EXR, çdo shtresë (float 32-bit)}}: imazhi ashtu si u renderua (dritë lineare, pa gradim), me çdo element renderimi dhe grup drite si shtresë të veçantë, për programet e kompozimit.
- {{ui:Skedar renderimi (.ccrender, për ta gradimuar më vonë)}}: gjithçka që dialogu i nevojitet për të përzier dhe gradaur përsëri imazhin. {{ui:Hap një skedar renderimi…}} e sjell përsëri, me përzierjen dhe gradimin e tij, pa renderuar.

## Përzieni dritat pas renderimit

Ndiz {{ui:Përzierja e dritës (ndryshoni ngjyrën dhe ndriçimin e secilës dritë pas renderimit)}} përpara se të shtypësh {{ui:Renderim}}. Kur imazhi mbaron (ose ndalet), {{ui:Përzieni imazhin}} i liston dritat e tij në grupe: qiellin, diellin dhe llambat sipas emrit (çdo llambë me të njëjtin emër është një grup). Fik një grup, jepi një ngjyrë, ose bëje më të ndritshëm ose më të errët, dhe imazhi ndryshon menjëherë, pa rirenderuar. {{ui:Ruaj përzierjen}} e mban përzierjen me një emër për ta zgjedhur përsëri më vonë; {{ui:Ashtu si u renderua}} kthehet te imazhi siç u bë. {{ui:Ruaj}} ruan imazhin e përzier.

{{ui:Elementët e renderimit (albedo, normalet, thellësia, difuze, spekulare, transmetimi, emetimi, ID-të)}} i mban edhe pjesët e imazhit. {{ui:Shfaq}} e kalon pamjen në një prej tyre: ngjyrat e sipërfaqeve (albedo), normalet, thellësinë, dritën difuze, spekulare dhe të transmetuar (secila e drejtpërdrejtë dhe indirekte), çfarë shkëlqen dhe qielli, dhe një ngjyrë për objekt ose për material për të bërë maska.

Të dyja mbajnë shtresa shtesë në kartën grafike. Në madhësi të mëdha karta grafike mund të mos ketë vend; dialogu e thotë këtë, dhe një madhësi më e vogël punon.

## Mjegull, tym, zhurmë dhe kaustikë

Këto janë te {{ui:Mjegull, tym dhe zhurmë}} dhe punojnë në {{ui:Cilësi e lartë (gjurmim shtegu)}} në kartën grafike; motorët e tjerë i lënë jashtë.

- {{ui:Mjegull dhe hemi}} mbush ajrin deri në një lartësi me një përzierje mjegulle që e ndrit dielli, qielli dhe llambat. {{ui:Sa larg shihet, në metra}} e cakton sa e dendur është (rreth 100 m është një hemi i lehtë, 20 m një mjegull e dendur), {{ui:Lartësia e mjegullës mbi tokë, në metra}} është ku mbaron, dhe {{ui:Rreze drite}} është sa shkëlqen mjegulla drejt dritës. Drita e diellit del nga mjegulla në majë, kështu që aty ku dielli hyn nëpër një dritare ose midis ndërtesave e sheh si rreze drite.
- {{ui:Tym ose re}} shton një vëllim tymi ose reje të ndriçuar si mjegulla. {{ui:Lloji}} është një {{ui:Re}}, një {{ui:Shtyllë tymi}} ose {{ui:Nga një skedar vëllimi (.ccvol)}}, formati i rrjetit të vetë CadCraft. {{ui:Detaj}} dhe {{ui:Variacioni}} ndryshojnë një re ose shtyllë të bërë, {{ui:Madhësia e anës më të gjatë, në metra (0 = madhësia e modelit)}}, {{ui:Zhvendos X (m)}}, {{ui:Zhvendos Y (m)}}, {{ui:Zhvendos Z (m)}} dhe {{ui:Rrotullo}} e vendosin (fillon në mes të modelit), {{ui:Trashësia}} e bën më të dendur, {{ui:Shkëlqim përpara}} e bën më të ndritshëm drejt dritës, dhe {{ui:Ngjyra}} e ngjyros. Një skedar vëllimi mbahet vetëm ndërsa faqja është e hapur, si një imazh qielli.
- {{ui:Ndalo herët aty ku imazhi është i pastër (mostrim adaptiv)}} nuk jep më mostra pikselave që janë qetësuar. {{ui:Zhurma e pranueshme}} është sa kokrrizë mbetet kur një piksel ndalet. Rreshti nën imazh thotë mesatarisht sa mostra mori një piksel.
- {{ui:Kaustikë (drita e thyer nga qelqi ose e reflektuar nga pasqyrat)}} e ndjek dritën nga llambat dhe nga dielli, kështu që njolla e ndritshme nën një top qelqi, ose drita e pasqyrës në një mur, del e pastër, jo me kokrriza. Është e fikur ndërsa janë të ndezura mjegulla, tymi, përzierja e dritës ose elementët e renderimit, dhe është bërë për imazhe, jo për imazhe 360°.

## Radha e renderimit

{{ui:Radha e renderimit}} në dialog: {{ui:Shtoje këtë imazh në radhë}} mban cilësimet dhe pamjen e imazhit, dhe {{ui:Nis radhën}} renderon ato që presin, një pas tjetrit, në këtë kompjuter. Mbyllja e faqes e ruan radhën; hap të njëjtin model për të vazhduar. {{ui:Ruaj}} shkarkon një të përfunduar; {{ui:Hiq}} dhe {{ui:Pastro të mbaruarat}} e rregullojnë listën. Radha renderon në cilësi të lartë, prandaj kërkon WebGPU.

## Sa zgjat

Imazhi bëhet në kompjuterin tënd, nga karta grafike; asgjë nuk ngarkohet. Koha rritet me kalimet dhe pikselët: {{ui:Më e mirë}} ka 16 herë kalimet e {{ui:Draft}}, dhe një imazh 4K ka rreth katër herë pikselët e Full HD. Modelet e mëdha zgjasin më shumë për çdo kalim.
