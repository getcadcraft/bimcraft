---
title: Tubat dhe kanalet
summary: Vizatoni linjat e tubave dhe kanaleve në planimetri sipas vijave qendrore të tyre; lakimet, trungjet, reduktorët dhe kalimet bëhen për ju; linjat i takojnë sistemeve me porta të lidhura në skedarin IFC, dhe shfaqen në planimetri, tabela dhe llogaritjen e sasive.
keywords: tub, tubacione, hidraulikë, kanal, kanale, kanalizime ajri, hvac, mep, mekanike, lakim, trung, reduktor, kalim, pjesë lidhëse, valvul, valvula, valvul portë, valvul sferike, valvul globi, valvul kontrolli, ngritje vertikale, pjerrësi, kullim, sanitare, shi, ventilim, ujë i ftohur, ujë i nxehtë, ujë i ftohur me akull, ngrohje, gaz, mbrojtje nga zjarri, ajër furnizimi, ajër kthimi, ajër shkarkimi, sistem, sisteme, portë, porta, lidhës, lidhës, pajisje, pajisje, pajisje hidraulike, lavaman, vaskë, lavaman kuzhine, dush, vaskë rrobash, njësi tualeti, lavaman tualeti, madhësi kullimesh, përmasa kullimi, kullim ndërtese, degë, degë kryesore, kolektor, njësi të ngarkesës së pajisjeve, UHC, DFU, madhësi kullimi, llogaritje kullimi, nbr, nbr 5648, nbr 5688, nbr 8160, PVC me bashkim tretësi, kanalizim, dn
from: 85140bc5
---

## Çfarë do të bëni

Vizatoni tubat dhe kanalet e një ndërtese ashtu si vizatoni muret: klikoni cepat e vijës qendrore të një linje, në lartësinë që vendosni. BimCraft bën lidhjet, vendos çdo pjesë në sistemin e vet dhe i lidh, kështu që programet e tjera e lexojnë linjën si një sistem të vetëm të lidhur.

## Vizato një tub

1. Ndizni {{ui:Vizato}}, hapni {{ui:Ndërtimi}} dhe zgjidhni {{ui:Tub}}.
2. Te shiriti, zgjidhni **sistemin** (ujë i ftohtë, ujë i nxehtë, kullim sanitar, gaz…). Ai cakton një material të zakonshëm: bakër për ujin, PVC për kullimet dhe ventilimet, çelik për ngrohjen, ujin e ftohur, gazin dhe mbrojtjen nga zjarri. Ndryshoni **materialin**, **klasën** dhe **madhësinë** nëse keni nevojë. Madhësitë dhe muret vijnë nga standarde publike: tub çeliku ASME B36.10M, tub bakri ASTM B88, PVC ASTM D1785 dhe PEX ASTM F876. Projektet braziliane mund të përdorin **tub uji PVC (NBR 5648)**, PVC me bashkim tretësi për ujin e ftohtë, dhe **tub kanalizimi PVC (NBR 5688)**, seria normale ose e përforcuar, për kullimet dhe ventilimet: madhësitë e tyre emërtohen me DN (DN 25, DN 100). Sapo zgjidhni një prej tyre, zgjedhja e një sistemi tjetër i mban tubat braziliane (tub kanalizimi PVC për një kullim sanitar pasi tub uji PVC).
3. Vendosni **Në**: lartësinë e vijës qendrore të tubit mbi nivelin.
4. Klikoni aty ku nis tubi, pastaj çdo cep. Klikoni dy herë, ose shtypni {{key:Enter}}, te pika e fundit. {{key:Backspace}} heq cepin e fundit; {{key:Esc}} e lë linjën.

Tubi ngjitet si muret dhe me linja të tjera: nisni në skajin e një tubi për të vazhduar prej tij, ose përfundoni në vijën e një tubi për t'u degëzuar. Një linjë e re merr lartësinë e tubit ku ngjitet.

Një linjë që nis ose mbaron te porta e një pajisjeje merr madhësinë dhe sistemin e saj dhe mbetet e fiksuar aty: shih [Pajisjet MEP me porta](topic:mep-equipment) dhe [Lidhni tubat dhe kanalet me pajisjet](topic:mep-connections).

## Vendos standardin hidraulik të projektit

Lista e parë në shiritin e tubit është **standardi hidraulik** i modelit: **SHBA (IPC, inç)** ose **Brazili (ABNT, DN)**. Ai ruhet në model, kështu që kushdo që e hap skedarin nis linjat në të njëjtën mënyrë. Te **SHBA**, një linjë e re nis me bakër (ujë) ose PVC Schedule 40 (kullime), në inç, me pjerrësinë e Kodit Ndërkombëtar Hidraulik. Te **Brazili**, uji i ftohtë nis si PVC soldável DN 25, kullimet dhe ventilimet sanitare e të shiut si PVC esgoto DN 100 me pjerrësinë e NBR 8160, dhe uji i nxehtë në bakër. Ai zbatohet edhe për një linjë që nis te lidhësi i një pajisjeje ose porta e një pajisjeje. Tubat e vizatuar më parë mbajnë materialin dhe tabelat e tyre; lista e materialeve mbetet e hapur, kështu që ju mund të vizatoni ende një linjë braziliane në një model amerikan me qëllim. Një skedar pa zgjedhje sillet si më parë: një linjë e re ndjek materialin në përdorim.

## Vizato një kanal

1. Zgjidhni {{ui:Kanal ajri}}. Zgjidhni sistemin (furnizim, kthim, shkarkim ose ajër i jashtëm) dhe formën: rrethore, drejtkëndore ose ovale e sheshtë.
2. Shkruani gjerësinë dhe lartësinë (gjerësia e një kanali rrethor është diametri i tij), dhe **Në** për lartësinë e vijës qendrore.
3. Për ta përmasuar nga rrjedha e ajrit, shkruani **Rrjedhën e ajrit** dhe normën e **Fërkimit**, dhe klikoni {{ui:Përcakto madhësinë}}. Kanali përmasohet me fërkim të barabartë, metoda e kapitullit të projektimit të kanaleve të ASHRAE Handbook, dhe rrumbullakohet në një madhësi të stokuar, kështu që fërkimi del në ose nën normën që shkruat. Pa normë të shkruar, përdor 0.08 in. ujë për 100 ft (0.8 Pa/m). Një kanal drejtkëndor e mban lartësinë që shkruat dhe merr një gjerësi; BimCraft e thotë këtë kur anët e tij janë më shumë se 4 me 1.
4. Klikoni cepat si për një tub.

## Pajisjet sanitare

{{ui:Ndërtimi}} › {{ui:Vendos familje}} ofron pesë pajisje për të nisur, secila me një kullim dhe një lidhës të ujit të ftohtë: një **Tualet**, një **Lavaman**, një **Lavaman kuzhine**, një **Dush** dhe një **Vaskë rrobash**. Përpara tyre ju përballen kur i vendosni, dhe pjesa e pasme shkon te muri. Kullimet e tyre janë në kullimin më të vogël të pajisjes sipas NBR 8160 (DN 100 për tualetin, DN 50 për lavamanin e kuzhinës, DN 40 për të tjerët); uji është DN 20. Ndryshoni madhësitë e tyre, ose redaktojini, si çdo familje: shih [Familjet dhe madhësitë e tyre](topic:families).

Një familje thotë cila pajisje është nën {{ui:Pajisje sanitare}} te skeda {{ui:Lidhësit}} e redaktuesit të familjes. Kullimi i saj numërohet atëherë në njësi të ngarkesës së pajisjeve: 6 UHC për një tualet, 1 për një lavaman, 3 për një lavaman kuzhine ose një vaskë rrobash, 2 për një dush (NBR 8160), ose njësitë e ngarkesës së kullimit të Tabelës 709.1 të IPC.

## Nga një lidhës i pajisjes

Elementët e vendosur nga një familje me lidhës (kullimi dhe rubineti i një lavamani, qafa e një terminali ajri: shih [Redakto një familje](topic:family-editor)) shfaqin lidhësit e tyre të lirë si pika ndërsa {{ui:Tub}} ose {{ui:Kanal ajri}} është i ndezur, dhe treguesi ngjitet te ata.

- **Nis te një lidhës**: linja merr sistemin dhe madhësinë e saj (tubi i materialit të shiritit në ose pak mbi madhësinë e lidhësit; një kanal rrethor i diametrit të tij). Kur lidhësi drejton poshtë ose lart, si një kullim nën një lavaman, linja shkon së pari drejt poshtë ose lart deri në lartësinë te **Në**, pastaj vazhdon sipas klikimeve tuaja.
- **Mbaro te një lidhës**: linja shkon poshtë ose lart mbi të dhe mbaron aty.

Linja lidhet me elementin në skedarin IFC, kështu që programet e tjera e shohin pajisjen si pjesë të sistemit të saj. Një element i vendosur më vonë me një lidhës në fund të një linje lidhet edhe ai me të. Një linjë e larguar nga një lidhës nuk është më e lidhur me të.

## Pjesët lidhëse, të bëra për ju

| Ku | Çfarë bën BimCraft |
|---|---|
| Një linjë kthehet | Një lakim. Tub çeliku në rreze të gjatë ASME B16.9 (1.5 × madhësia), tub tjetër në një diametër të jashtëm, kanal rrethor në 1.5 diametra, kanal drejtkëndor në një gjerësi (ose një lartësi për kthesë lart ose poshtë) |
| Një linjë mbaron mbi vijën e një linje tjetër | Një trung; linja tjetër ndahet aty |
| Dy linja takohen skaj më skaj në madhësi të ndryshme | Një reduktor (tuba) ose një kalim (kanale) |
| Dy linja të një madhësie takohen skaj më skaj me kënd | Një lakim |

Kur ndryshoni, zhvendosni ose fshini një linjë, çdo pjesë lidhëse në atë nivel bëhet përsëri. Nëse një krah është shumë i shkurtër për pjesët lidhëse në skajet e tij, BimCraft e thotë këtë dhe nuk ndryshon asgjë: zhvendosni cepin më larg.

:::note
Pjesët lidhëse dhe valvulat janë gjenerike: vizatohen sipas madhësisë së tubit ose kanalit, jo sipas katalogut të një prodhuesi. Pjesët lidhëse me kapak, me shtypje dhe me kanale kanë madhësi të vetat të prodhuesve; kontrolloni me furnizuesin tuaj përpara se të porosisni.
:::

## Ngritjet vertikale

Gjatë vizatimit, shkruani një lartësi të re te **Në** dhe shtypni {{key:Enter}}: linja shkon drejt lart ose poshtë te cep i fundit, me një lakim në çdo skaj. Një ngritje vertikale mund të shkojë lart në nivelin mbi të. Çdo nivel shfaq pjesët e një linje që arrin shikimi i tij, me **UP** ose **DN** te ngritja vertikale.

## Kullimet dhe pjerrësia e tyre

Kullimet sanitare dhe të shiut nisin me pjerrësinë më të vogël që lejon Kodi Ndërkombëtar Hidraulik për madhësinë e tyre: 1/4 in. për ft deri në 2-1/2 in., 1/8 in. për ft nga 3 deri në 6 in., 1/16 in. për ft nga 8 in. Tubi braziliane i kullimit PVC nis me pjerrësinë e NBR 8160: 2 % deri në DN 75, 1 % nga DN 100. Shkruani një pjerrësi tjetër te shiriti ose te Vetitë: `1/4"/ft`, `2 %` ose `1:50`. Linja bie nga pika e saj e parë, kështu që vizatoni kullimet sipas drejtimit të rrjedhjes. Planimetria shfaq rënien dhe një shigjetë. Vetitë paralajmërojnë kur një kullim është më i rrafshët se minimumi i kodit.

## Përmaso kullimet sipas njësive të ngarkesës

Zgjidhni një kullim sanitar: **Njësitë e ngarkesës** te Vetitë tregon sa mbart dhe madhësinë më të vogël që i nevojitet. Çdo pajisje hidraulike, kullimi i së cilës është lidhësi në linjë, numërohet, dhe edhe çdo kullim që derdhet në të: vizatoni kullimet sipas drejtimit të rrjedhjes, secili duke mbaruar te kullimi ku derdhet.

- Kullimet në tub kanalizimi PVC braziliane numërojnë **UHC** dhe ndjekin NBR 8160; të tjerët numërojnë **DFU** dhe ndjekin Kodin Ndërkombëtar Hidraulik.
- **Kullimi**: një **Degë** përmasohet sipas tabelës së kodit për degët e pajisjeve; një **Kullim i ndërtesës** sipas tabelës së tij sipas pjerrësisë, prandaj **Pjerrësia** ka rëndësi.
- Një kullim nuk është kurrë më i vogël se kullimet e pajisjeve që shërben (një tualet ka nevojë për DN 100, ose 3 in.), as se një kullim që derdhet në të. Sipas NBR 8160 një kullim i ndërtesës është të paktën DN 100.

{{ui:Përcakto madhësinë e kullimeve}} i bën çdo kullim sanitar të modelit që është shumë i vogël për njësitë e ngarkesës së tij madhësinë që i nevojitet, si një hap të vetëm që mund ta zhbësh. Një kullim i vizatuar më i madh se sa i duhet lihet ashtu siç është. Kur një kullim mban më shumë sesa mund ta mbajë madhësia më e madhe e tubit të tij me pjerrësinë e tij, BimCraft e thotë këtë: jepini një pjerrësi më të fortë ose një tub tjetër.

:::note
Tabelat janë ato të kullimeve horizontale. Kolonat, ventilimet dhe kullimet e shiut nuk përmasohen këtu: kontrolloni ato, dhe gjithë projektimin, me kodin që zbatohet për projektin.
:::

## Valvulat

1. Zgjidhni {{ui:Valvul}} dhe llojin: portë, sferike, globi ose kontrolli.
2. Klikoni te një tub aty ku shkon. Tubi pritet rreth saj dhe valvula lidhet në të dy anët.

Vetitë e linjës i listojnë valvulat e saj, secila me {{ui:Hiq}}.

Më shumë lloje valvulash, një filtër, damperë te kanalet, specifikimet tuaja të tubave dhe familjet e prodhuesve: shih [Specifikimet e tubave, valvulat, damperët dhe familjet e prodhuesve](topic:pipe-specs).

## Ndrysho një linjë

Zgjidhni çdo pjesë të një linje, në planimetri ose në pamjen 3D. Te Vetitë:

- **Sistemi**, **Materiali**, **Klasa** dhe **Madhësia** (tuba), ose **Forma**, **Gjerësia**, **Lartësia** (kanale).
- **Lartësia mbi nivelin** zhvendos gjithë linjën lart ose poshtë.
- **Izolimi**: trashësia e tij, e mbajtur për kontrollin e largësisë dhe listën e hapjeve (asgjë nuk vizatohet për të): shih [Kontrolloni tubat dhe kanalet me strukturën](topic:mep-against-structure).
- Tub çeliku: **Ndaj në spool-e**: shih [Spool-et e tubave të çelikut dhe fletët e spool-eve](topic:pipe-spools).
- **Pjerrësia** (tuba).
- **Rrjedha** me {{ui:Përcakto madhësinë}}: për ujin, madhësia më e vogël që e mban ujin në 8 ft/s (2.4 m/s), ose 5 ft/s (1.5 m/s) për ujin e nxehtë; në 3 m/s për tubin braziliane të ujit PVC (NBR 5626). Për kanalet, shpejtësia dhe norma e fërkimit të kanalit siç është vizatuar. Kullimet sanitare përmasohen sipas njësive të ngarkesës: shih më poshtë **Përmaso kullimet sipas njësive të ngarkesës**.

Çdo ndryshim është një hap i {{ui:Zhbëj}}. {{key:Delete}} heq gjithë linjën.

## Planimetritë

- Tubat më të vegjël se 150 mm (rreth 6 in.) vizatohen si një vijë në vijën e tyre qendrore; tubat më të mëdhenj dhe të gjitha kanalet si dy vija në gjerësinë e tyre.
- Çdo sistem ka ngjyrën e vet; PDF-ja e planimetrisë i printon ato në të zezë.
- Çdo linjë shënohet me madhësinë dhe sistemin e saj (për shembull `2" CW` ose `16×10 SA`).
- Intervali i shikimit të planimetrisë vendos cilat linja shfaq, dhe {{ui:Shfaqur në këtë planimetri}} mund të lërë jashtë **Tubat** ose **Kanalet**: shih [Pamjet, intervalet e shikimit dhe fletët tuaja](topic:views-and-sheets).

## Tabelat dhe llogaritja e sasive

Paneli {{ui:Tabelat}} shton **Tubat** (sipas sistemit, materialit dhe madhësisë, me gjatësitë e tyre), **Kanalet** (sipas sistemit, formës dhe madhësisë, me gjatësi dhe sipërfaqen e jashtme) dhe **Pjesë lidhëse dhe valvula** (sipas llojit dhe madhësisë, të numëruara). Klikoni një rresht për të zgjedhur çfarë liston; {{ui:Shkarko CSV}} e shkarkon.

{{ui:Llogaritje sasish}} i merr linjat me vete te TakeoffCraft: tub dhe kanal sipas madhësisë si linja të vizatuara në planimetri (kullimet me pjerrësi maten sipas pjerrësisë së tyre), pjesët lidhëse dhe valvulat numërohen aty ku janë: shih [Dërgoni sasitë e modelit te TakeoffCraft](topic:takeoff). Ngritjet vertikale lihen jashtë atij fletë, sepse një planimetri nuk mund t'i masë; tabela e Tubave ka gjatësinë e tyre.

## Në skedarin IFC

Çdo linjë është një montim që mban pjesët e saj: segmente tubi dhe kanali, pjesë lidhëse dhe valvula, secila me tipin, materialin, një ngjyrë për sistemin e saj dhe portat e saj. Portat që prekin njëra-tjetrën janë të lidhura, dhe çdo pjesë i takon sistemit të vet të shpërndarjes (skedarët IFC2X3 marrin të njëjtën gjë si segmente rrjedhe, pjesë lidhëse dhe kontrollues në një sistem). Programet e tjera që lexojnë sistemet IFC shohin një linjë të lidhur për sistem. Përkufizimi i vetë linjës mbahet bashkë me të, kështu që BimCraft e bën përsëri në të njëjtën mënyrë kur e ndryshoni.
