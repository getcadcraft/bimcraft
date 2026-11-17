---
title: Vizato muret
summary: Vizato muret në planimetrinë e një kati duke klikuar qoshet e tyre ose duke shkruar gjatësitë; qoshet bashkohen vetvetiu, dhe muret ruhen si IFC.
keywords: lakuar, hark, vijë vendndodhjeje, drejtim, mur, muret, vizato, planimetri, planimetri kati, dhomë, qoshe, bashko, lloji i murit, 2x6, 2x4, cmu, beton, lartësi, nivel, nivele, kat, gjatësi e shkruar, ortho, kapje
from: 8269cd4b
---

## Çfarë do të bësh

Vizato muret e një ndërtese mbi planimetrinë e secilit kat. Kliko aty ku fillon një mur dhe pastaj çdo qoshe; BimCraft i bashkon qoshet për ty, i jep çdo muri shtresat e tij (veshjen, sfondin, shtyllat, gipsin …) dhe e ngre deri në katin sipër. Pamja 3D i tregon muret ndërsa vizaton.

## Hap planimetrinë

1. Fillo një ndërtesë të re ([Fillo një ndërtesë të re](topic:start-a-new-building)) ose hap një model IFC.
2. Kliko {{ui:Vizato}} në shiritin e veglave. Hapet një ndërtesë e re me të aktivizuar.
3. Planimetria e një kati shfaqet në të majtë dhe pamja 3D në të djathtë. Zgjidh katin nga lista në krye të planimetrisë, ose me butonin e rrumbullakët pranë tij në panelin **Nivelet**.
4. {{ui:Planimetri}}, {{ui:Ndaj}} dhe {{ui:3D}} janë mjete në rreshtin {{ui:Pamja}} të shiritit të veglave (komandat PLAN, SPLIT dhe tastet funksionojnë si më parë). Përdor {{ui:Planimetri}} për planimetrinë vetëm, {{ui:Ndaj}} për të dyja, {{ui:3D}} për ta mbyllur planimetrinë. Kur dritarja është e ngushtë (ose madhësia e ndërfaqes e madhe), {{ui:Ndaj}} e vendos planimetrinë mbi pamjen 3D në vend që pranë saj.

Planimetria pret nivelin 4'-0" (1200 mm) mbi dyshemenë e tij, si bën një planimetri kati. Rrotulla e miut zmadhon; tërhiq me butonin e mesit ose të djathtë (ose mbaj Space dhe tërhiq) për të lëvizur pamjen; me {{ui:Përzgjidh}} të aktivizuar, një tërheqje e thjeshtë e lëviz pamjen gjithashtu. {{key:F}} me treguesin mbi planimetri e përshtat atë.

## Vizato një dhomë

1. Kliko {{ui:Mur}} (ose shtyp {{key:W}}).
2. Zgjidh llojin e murit në listën e parë, për shembull **Jashtë 2×6** ose **Brenda 2×4**.
3. Zgjidh lartësinë e tij: **Deri në nivelin sipër** (muri ndjek nivelin nëse ai lëviz), **Deri te** një nivel më lart për një mur që kalon nëpër disa nivele (një hollë shkallësh, një dhomë me lartësi të dyfishtë, një fronton i lartë), ose **Lartësi e fiksuar** dhe shkruaje. Një mur i tillë i përket nivelit mbi të cilin e vizatove; planimetritë e niveleve që kalon e shfaqin më të lehtë, dhomat aty mbyllen pas tij, dhe nga ato planimetri mund të klikosh dyer dhe dritare në të (dera qëndron mbi dyshemenë e atij niveli). Për të lëvizur ose ripunuar vetë murin, shko te niveli ku fillon.
4. Kliko aty ku fillon muri i parë.
5. Kliko çdo qoshe. Çdo klikim krijon një mur; i radhës fillon aty ku mbaroi i mëparshmi. Gjatësia dhe këndi shfaqen pranë treguesit.
6. Kliko përsëri pikën e parë për të mbyllur dhomën. Rreshti i statusit thotë sa mure ka dhoma, dhe në modalitetin e qendrës çdo mur merr shtresën e vet të jashtme në anën e jashtme të dhomës.
7. Shtyp {{key:Esc}} (ose kliko me butonin e djathtë, ose kliko dy herë) për të ndaluar pa mbyllur.

Qoshet bashkohen vetvetiu: dy mure takohen me një pjerrësi (mitër), një mur që mbaron mbi një tjetër ndalon në fytyrën e tij (një T), dhe tre ose më shumë mure në një pikë ndajnë qoshen. Muret që kryqëzohen mbeten siç janë.

Një dhomë e tërë njëherësh: hap {{ui:Forma}} për një drejtkëndësh, një drejtkëndësh të rrotulluar, një shumëkëndësh, harqe, mure mbi vija të zgjedhura ose rreth një konture (shih [Format e mureve, ndarja, zgjatja, shtrirja dhe kyçja](topic:wall-tools)).

## Zgjidh referencën e vizatimit

Zgjidh **Qendra e murit**, **Faqja e brendshme** ose **Faqja e jashtme** para klikimit të parë. Me një faqe të zgjedhur, klikimet dhe gjatësitë e shkruara përshkruajnë atë faqe; BimCraft e zhvendos vijën e qendrës së murit për gjysmën e trashësisë totale dhe bashkon qoshet e njëpasnjëshme. Zgjidh **Jashtë majtas** ose **Jashtë djathtas** në lidhje me drejtimin ku vizaton. Për një kontur të mbyllur të vizatuar në drejtim të kundërt të orëve, jashtë është në të djathtë; në drejtimin e orëve, në të majtë. Me **Faqja e brendshme**, trupi i murit shkon në anën e jashtme të vijës tënde; me **Faqja e jashtme**, në anën tjetër. Vizatimi sipas faqes e mban anën e zgjedhur të jashtme kur mbyll unazën. Në qendër, muret që nuk mbyllin një dhomë marrin anën e jashtme që zgjodhe; mbyllja e një dhome e vendos jashtën e çdo muri anën e jashtme të dhomës vetvetiu, në çfarëdo drejtimi ta kishe vizatuar.

Ndryshimi i llojit të murit, referencës ose anës së jashtme mbyll zinxhirin aktual. Pranë një qoshe të kthyer mbrapsht, pjerrësitë e gjata kufizohen duke lënë skaje katrore.

Gjatë vizatimit, një pikë fundore në hapësirë boshe mund të rreshtohet horizontalisht ose vertikalisht me një skaj muri ose një qoshe më të hershme. Një udhëzues me viza e lidh atë pikë me treguesin e kapur. {{key:Shift}} e mban drejtimin e vizatimit katror; rreshtimi ndalon atëherë përgjatë atij drejtimi. Skajet, mesi dhe kryqëzimet e mureve afër kanë përparësi mbi rreshtimin e largët.

## Vija e vendndodhjes

Me **Referenca** në **Faqja e jashtme** ose **Faqja e brendshme**, muri e mban atë faqe si vijën e vendndodhjes. Më vonë, nëse muri bëhet më i trashë ose anës së jashtme i kthehet drejtimi, ajo faqe mbetet në vend dhe muri rritet ose kthehet rreth saj. Një mur i drejtë që takon atë në një qoshe e ndjek, kështu që qoshja mbetet e mbyllur. Vijën e vendndodhjes mund ta ndryshosh më vonë te **Vetitë**: shih [Ndrysho një mur, derë ose dritare](topic:change-a-wall-or-door).

## Vizato një mur të lakuar

1. Kliko {{ui:Mur}}, pastaj zgjidh **Lakuar** në listën **Forma** të rreshtit të opsioneve.
2. Kliko aty ku fillon muri, pastaj aty ku mbaron.
3. Kliko një pikë në harkun e tij. Ose shkruaj lartësinë e harkut dhe shtyp {{key:Enter}}.
4. Zinxhiri vazhdon nga fundi i murit. Shtyp {{key:Esc}} për ta përfunduar.

Një mur i lakuar bashkohet me muret në skajet e tij (qoshet dhe lidhjet T funksionojnë), krijon dhoma dhe mban dyer dhe dritare përgjatë harkut të vet. Ato mbeten njësi të drejta, katrore me murin në mesin e tyre, dhe distanca e tyre matet përgjatë harkut. Një mur mund të kthehet më së shumti tri të katërtat e një rrethi. Kapet te skajet dhe te mesi i harkut.

Për muret e lakuar ende nuk janë ndërtuar {{ui:Pritë / zgjat}} dhe {{ui:Qoshe}}, skeleti, kotat automatike të planimetrisë dhe kapja përgjatë harkut. Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

## Shkruaj një gjatësi në vend që të klikosh

Pas klikimit të parë, shkruaj dhe shtyp {{key:Enter}}:

| Shkruaj | Vizaton |
|---|---|
| `12'6"` ose `3810` | një mur kaq të gjatë, në drejtimin që tregon treguesi |
| `12'6"<90` | kaq i gjatë, në atë kënd (gradë, në drejtim të kundërt të orëve nga e djathta) |
| `@3000,0` | deri te një pikë kaq larg nga e fundit, anash dhe lart |
| `1200,3400` | deri te ajo pikë në planimetri |

Shkrimi i një numri ndërsa vegla Mur është aktive shkon direkt në kutinë {{ui:Gjatësia}}. Në këmbë dhe inç një numër i thjeshtë është inç; në milimetra është milimetra. Njësinë mund ta shkruash gjithmonë: `3.5 m`, `10 ft`, `6 1/2"`.

## Kapjet

- Skajet e murit, qoshet e faqeve të tyre dhe mesi i mureve kapen kur treguesi është afër (një katror, një trekëndësh).
- Treguesi kap vijën e qendrës së murit ose cilëndo faqe (një kryq).
- Nga pika e fundit, drejtimi mbahet në çdo 15° kur është afër; mbaj {{key:Shift}} për ta mbajtur në 0°, 90°, 180° ose 270°.
- Drejtimet e lira e rrumbullakosin gjatësinë në 1/2" (ose 10 mm).

## Ndrysho, zhbëj, fshi

- Çdo mur është një hap te **Ndryshimet**: {{ui:Zhbëj}} dhe {{ui:Ribëj}} marrin muret mbrapsht dhe i kthejnë.
- Me {{ui:Përzgjidh}} aktive, kliko një mur në planimetri për ta zgjedhur; pamja 3D dhe **Vetitë** e ndjekin. {{key:Delete}} fshin muret e zgjedhura, dhe muret me të cilat ishin bashkuar pastrohen sërish.

## Nivelet

Paneli **Nivelet** liston çdo nivel me kotën dhe lartësinë e tij.

- Shkruaj një emër, kotë ose lartësi të re dhe shtyp {{key:Enter}}. Ndryshimi i lartësisë (ose kotës) së një niveli zhvendos nivelet mbi të për të njëjtën sasi, dhe muret që ngjiten deri te një nivel ndjekin.
- {{ui:Shto një nivel sipër}} shton një nivel mbi të lartin, po aq të lartë.
- {{ui:Shto një nivel më poshtë}} shton një nivel nën më të ultin (një bodrum), po aq të lartë sa ai: kota e tij është negative kur niveli më i ulët është në 0, dhe asnjë nivel tjetër nuk lëviz. {{ui:Zhbëj}} e heq përsëri.
- {{ui:Kopjo këtë nivel…}} vizaton përsëri atë që është në nivelin që shikon, në një nivel tjetër ose në një të ri mbi të: muret e tij me dyert dhe dritaret, dyshemetë dhe tavanët (jo çatitë). Muret që ngjiteshin deri te niveli sipër ngjiten deri te niveli sipër të ri; dhomat shfaqen vetvetiu. Një {{ui:Zhbëj}} i vetëm e heq të gjithë atë. Nëse niveli tjetër ka tashmë mure, kopja shtohet pranë tyre.
- {{ui:Njësitë}} në shiritin e veglave zgjedh njësitë (këmbë dhe inç, inç, këmbë decimale, milimetra, centimetra ose metra) për gjithçka që veglat e vizatimit shfaqin dhe lexojnë.

## Ruaj

Kliko {{ui:Ruaj si IFC}}. Çdo mur është një mur IFC me vijën e qendrës së tij, formën e bashkuar, llojin dhe shtresat e tij, `Pset_WallCommon` dhe sasitë bazë (gjatësia, lartësia, sipërfaqet dhe vëllimet), kështu që programet e tjera BIM e hapin dhe e nxjerrin në tabelë.

## Të mirëdijtur

- Muret vizatohen në vijën e tyre të qendrës. Trashësia vjen nga lloji i murit.
- Planimetria i shfaq muret e vizatuara këtu të mbushura, dhe çdo gjë tjetër (artikuj nga biblioteka, modele nga programe të tjera) e prerë nga i njëjti plan, me atë që është poshtë prerjes në vija të holla.
- Muret e bëra nga programe të tjera shfaqen në planimetri, por ende nuk mund të ndryshohen me këto vegla.
