---
title: Vlerëso dritën e ditës në çdo dhomë
summary: Faktori mesatar i dritës së ditës për çdo dhomë nga dritaret e saj, sipërfaqet e brendshme dhe qielli që sheh çdo dritare, me këndin e qiellit të matur në model. Një vlerësim i hershëm i projektimit, jo një simulim apo kontroll kodi.
keywords: dritë dite, faktor i dritës së ditës, faktor mesatar i dritës së ditës, adf, komponentja vertikale e qiellit, vsc, fitim diellor, diell, g-value, rrjetë, ndarje e fluksit, komponentja e qiellit, komponentja e reflektuar brenda, dritë natyrale, dritare, xhami, kënd qielli, pengesë, mbivendosje, ballkon, streh, reflektancë, transmetancë, projektim i hershëm, analizë, dhoma, hapësira
from: 5f300a78
---

Skeda {{ui:Drita e ditës}} në panelin e djathtë llogarit **faktorin mesatar të dritës së ditës** të çdo dhome: sa nga drita e një qielli me re jashtë arrin në dhomë, në mesatare, si përqindje. Lexon dhomat (hapësirat) dhe dritaret e modelit IFC të hapur. Asgjë nuk ndryshohet në model dhe asgjë nuk ngarkohet.

:::warning
Gjithçka në këtë skedë është **një mjet projektimi, jo një llogaritje përputhshmërie**: vlerësime të hershme projektimi me metoda të botuara, **jo një simulim** dhe **jo një kontroll kundrejt një kodi ndërtimi ose standardi**. BS EN 17037, LEED, BREEAM dhe kodet e energjisë kërkojnë një simulim të dritës së ditës me klimën e vendit; për ato përdor një program simulimi të dritës së ditës.
:::

## Llogarit

1. Hap një model IFC që ka dhoma (hapësira) dhe dritare. Modelet e vizatuara këtu kanë një dhomë brenda çdo grupi të mbyllur muresh.
2. Hap skedën {{ui:Drita e ditës}} dhe kliko {{ui:Llogarit}}.
3. Çdo dhomë shfaq faktorin e vet të dritës së ditës dhe një brez: nën 2 %, 2–5 %, 5 % ose më shumë. Kliko një dhomë për të parë sipërfaqet e saj dhe sipërfaqen dhe këndin e qiellit të çdo dritareje; dhoma dhe dritaret e saj zgjidhen në model.

Ndrysho një hyrje dhe numrat ndjekin menjëherë; pasi ndryshon modelin, {{ui:Llogarit përsëri}}. {{ui:CSV}} ruan çdo dhomë me numrat e saj dhe hyrjet e përdorura.

## Formula

Faktori mesatar i dritës së ditës (%) = T × Ag × θ × M ÷ (A × (1 − R²)), i mbledhur mbi dritaret e dhomës (formula e Littlefair, e përdorur nga BRE 209, BS 8206-2 dhe CIBSE LG10):

- **T**, transmetanca e dritës së xhamit (0.7 për të filluar: përdor shifrën e prodhuesit).
- **Ag**, sipërfaqja e xhamuar: sipërfaqja e çdo dritareje (gjerësia e përgjithshme × lartësia, përndryshe madhësia e saj në model) × **përqindja e xhamuar** (0.75 për të filluar: pjesa tjetër është kornizë).
- **θ**, këndi i qiellit që sheh dritarja, në gradë (më poshtë).
- **M**, faktori i mirëmbajtjes për papastërtinë në xham (1 për të filluar).
- **A**, çdo sipërfaqe e brendshme e dhomës: dyshemeja, muret, tavani dhe dritaret, e marrë nga forma e vetë dhomës.
- **R**, reflektanca e tyre mesatare, e peshuar sipas sipërfaqes: dysheme 0.2, mure 0.5, tavan 0.7 për të filluar; xhami llogaritet 0.1.

## Si matet këndi i qiellit

Për çdo dritare BimCraft pret modelin me një plan vertikal katror me dritaren, nga faqja e jashtme e xhamit, dhe shikon nga horizonti drejt lart: gjithçka që pritja takon përpara dritares (një ndërtesë përballë, një ballkon ose streh mbi të, saçia) fsheh një pjesë nga ai 90°. θ është ajo që mbetet. Vetë dritarja dhe muri ku ndodhet përjashtohen. Bëhet në pesë vende përgjatë gjerësisë së dritares dhe merret mesatarja, kështu që një shtyllë e hollë përpara qendrës merr pjesën e vet, jo të gjithë qiellin.

Një ndërtesë 8.5 m mbi qendrën e dritares dhe 9.9 m larg fsheh 40.65° (këndi tangjenti i të cilit është 8.5 ÷ 9.9), duke lënë θ = 49.35°.

## Komponentja vertikale e qiellit të çdo dritareje

{{ui:Llogarit}} mat gjithashtu, për çdo dritare, sa sheh nga e gjithë qielli: e njëjta pritje vertikale, e rrotulluar në çdo drejtim përballë dritares (çdo 2°, nga njëra anë në tjetrën), kështu që një ndërtesë anash, një krah ose një thellësi e thellë merr pjesën e vet. Nga kjo BimCraft llogarit **komponentën vertikale të qiellit (VSC)**: sa nga drita e qiellit me re arrin te xhami, si pjesë e asaj që do të merrte një çati e hapur dhe e sheshtë. Një dritare pa asgjë përpara merr **39.6 %**, maksimumin që mund të marrë një dritare vertikale; një ndërtesë e gjatë që ngrihet 25° mbi dritare lë rreth **27 %**, shifra që përdor udhëzimi britanik (BRE 209) si rregull praktik. Çdo dritare në detajin e një dhome shfaq VSC-në e saj dhe **këndin e pengesës** (sa lart ngrihen gjërat drejt e përpara saj).

Qielli është qielli standard CIE me re, që është tre herë më i ndritshëm drejt lart se te horizonti, dhe pritja është e saktë: asgjë nuk merret me mostra.

## Dielli nëpër dritare në një datë

Hap {{ui:Dielli nëpër dritare në një datë}} dhe zgjidh një datë. BimCraft ndjek diellin gjatë asaj dite në çerek orësh dhe mbledh, për çdo dritare, nxehtësinë që dielli sjell nëpër xham:

- **dielli direkt**, kur është përpara dritares dhe asgjë në model nuk e fsheh (e njëjta pritje e saktë, e kthyer drejt diellit: një ballkon që hije diellin e lartë të verës në mesditë lë diellin e ulët të dimrit të hyjë);
- **drita e qiellit** mbi xhamin, minus atë që dritarja nuk e sheh;
- drita **nga toka** (reflektanca e saj: 0.2 për të filluar);
- të gjitha përmes **g-value** të xhamit (pjesa e energjisë së diellit që lë të kalojë: 0.6 për të filluar; përdor shifrën e prodhuesit) dhe përqindjes së xhamuar.

Çdo dhomë shfaq totalin e ditës në kWh dhe kulmin e saj në watt me orën; detaji i një dhome e vizaton ditën si grafik. Qielli është i pastër sipas modelit të Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), me shifrat verore ose dimërore për vendin dhe stinën dhe lartësinë e vendit; vendi i diellit është sipas NOAA. Gjerësia dhe gjatësia e vendit vijnë nga vendi i IFC, dhe veriu nga veriu i vërtetë i modelit; nëse modeli nuk ka vend, shkruaj një gjerësi dhe gjatësi. Orët janë ora standarde (pa orë verore) në zonën kohore që shkruan, përndryshe atë që sugjeron gjatësia.

Ajo që lë jashtë: retë (është një ditë e pastër), xhamin që lë të hyjë më pak në kënde të ulëta, kornizat që hijëzojnë xhamin, grilat dhe atë që muret dhe çatia thithin. Vlerësimi i ftohjes në të njëjtën skedë përdor kulmin.

## Faktori i dritës së ditës në rrjetë

Hap {{ui:Faktori i dritës së ditës në rrjetë}} dhe {{ui:Llogarit rrjetën}}: BimCraft vendos një rrjetë mbi dyshemenë e çdo dhome në lartësinë e planit të punës (0.85 m për të filluar), gjysmë metri larg mureve, dhe llogarit faktorin e dritës së ditës në çdo pikë me **metodën e ndarjes së fluksit BRE**:

- **komponentja e qiellit**: qielli me re i parë nga pika përmes hapjes së çdo dritareje, minus kornizat;
- **komponentja e reflektuar nga jashtë**: ajo që pika sheh të ndërtesave jashtë përmes dritares, që shkëlqen me një të dhjetën e qiellit prapa tyre (ndrysho ndriçimin e pengesës nëse janë shumë më të ndritshme ose më të errëta);
- **komponentja e reflektuar brenda**: drita që kthehet rreth dhomës, nga sipërfaqet dhe reflektancat e dhomës, sipërfaqja e dritareve dhe sa është jashtë tyre (formula BRE, me transmetancën e xhamit në vend të xhamit të pastër që supozonte).

Çdo dhomë shfaq mesataren, pikën më të ulët dhe sa prej saj merr 2 % ose më shumë; detaji i një dhome vizaton planin e saj me çdo pikë të ngjyrosur sipas faktorit të dritës së ditës dhe dritaret me të kuqe. Për ta mbajtur të shpejtë në çdo kompjuter, një dhomë merr më së shumti **400 pika**: në një dhomë të madhe distanca rritet për t'u përshtatur (shkruaj një distancë për ta zgjedhur vetë).

## Çfarë lë jashtë

- Dritaret e çatisë (xhami i shtrirë ose i pjerrët) listohen por nuk numërohen: formulat këtu janë për dritare në mure.
- Dritaret pa dhomë pas tyre (një hyrje pa hapësirë, për shembull) listohen veças.
- Thellësitë e dritareve (hapja merret në faqen e jashtme), shkëlqimi, orët me diell dhe drita e ditës e bazuar në klimë. Për BS EN 17037, LEED ose BREEAM përdor një program simulimi të dritës së ditës.
- Brezat vijnë nga udhëzimi më i vjetër britanik (BS 8206-2), shfaqen si udhëzues, kurrë si kalim ose dështim.
