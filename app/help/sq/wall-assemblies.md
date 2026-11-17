---
title: Montimet e mureve dhe përmasat e referimit
summary: Ndërto tipe muresh të tuajat shtresë për shtresë me një bërthamë të qartë, mbaj një bibliotekë materialesh të projektit, dhe përmaso te fytyrat dhe boshtet qendrore që qëndrojnë të lidhura kur muri ndryshon.
keywords: lod, niveli i zhvillimit, lod 200, lod 300, i përgjithshëm, montim muri, tip muri, shtresat, bërthama, fytyra e bërthamës, boshti qendror i bërthamës, kavitet, hapësirë ajri, membranë, mbulesë ndërtese, bibliotekë materialesh, materiale, trashësia, përmasë referimi, përmasë, vija e vendosjes, veshje e jashtme, kollona, gips-karton
from: 4ea8fbf5
---

## Çfarë do të bësh

Bëj një tip muri që përputhet me murin që do ndërtosh: veshje e jashtme, veshje mbrojtëse, bërthamë skeleti 5½ inç dhe gips-karton, ose tullë, një hapësirë ajri dhe një mur me skelet druri. Shëno cilat shtresa janë bërthama, që një përmasë ose një vijë vendosjeje ta mbajë bërthamën ndërsa përfundimet rreth saj ndryshojnë. Pastaj përmaso muret te fytyrat dhe boshtet qendrore që do të thuash.

## Krijo një tip muri

1. Fillo një ndërtesë ose hap një model IFC, ndiz {{ui:Vizato}}, pastaj zgjidh veglën {{ui:Mur}}.
2. Zgjidh një model fillestar te {{ui:Lloji i murit}} dhe hap {{ui:Montime muresh…}}. Një model fillestar hapet si kopje; jepi tipit të ri një emër.
3. Shtresat shkojnë nga jashtë, në krye të listës, deri brenda, në fund. Zgjidh materialin e çdo shtrese, shkruaj trashësinë e saj (njësitë e projektit, ose vlera të qarta si `12.7 mm` ose `1/2"`), zgjidh funksionin e saj (finiturë, nënshtresë, strukturë, izolim, membranë) dhe vendos shenjën te shtresat **Bërthamë**. Bërthama duhet të jetë një grup i vazhdueshëm.
4. {{ui:Shto shtresë}} shton një shtresë, {{ui:Shto kavitet}} shton një hapësirë ajri me ventilimin e saj (i papërcaktuar, i pa ventiluar, i ventiluar), {{ui:Shto membranë}} shton një shtresë pa trashësi nominale, si mbulesa e ndërtesës. Shigjetat e zhvendosin një shtresë nga jashtë ose nga brenda.
5. Pamja paraprake vizaton shtresat në shkallë, me bërthamën të nënvizuar, të numëruara si rreshtat, dhe përmason çdo shtresë, bërthamën dhe totalin. {{ui:Ruaj tipin}}.

Tipi i ri është në listën e veglës Mur dhe te **Vetitë** të një muri të zgjedhur. Ruajtja e një tipi që ke ndryshuar ndryshon çdo mur që e përdor; {{ui:Dyfisho llojin}} krijon një tip të veçantë dhe ia jep vetëm mureve që zgjodhe. Çdo ruajtje është një hap {{ui:Zhbëj}}, së bashku me muret që zhvendos, dyert dhe dritaret në to dhe përmasat që varen prej tyre.

Një kavitet shton gjerësi. Një membranë nuk shton asnjë: mbetet në tip që një tabelë ta gjejë më vonë, dhe nuk llogaritet në trashësinë e murit ose të bërthamës. Një kavitet ose një membranë nuk numërohet kurrë si material i ngurtë. Në një skedar të ruajtur si IFC2X3, një membranë mbahet në regjistrimin e tipit por lihet jashtë shtresave fizike të materialit.

## Etiketo një tip me nivelin e zhvillimit (LOD)

Një tip mund të thotë sa është zhvilluar. Në redaktor, **Niveli i zhvillimit (LOD)** ofron shkallën fikse 100, 200, 300, 350, 400 dhe 500, ose **Nuk është caktuar**. Një mur i përgjithshëm ("Mur 230 i përgjithshëm") është LOD 100 ose 200; një ndërtim i caktuar me shtresat e tij reale ("230 tullë balte, e suvatuar në të dy anët") është LOD 300 ose më shumë. Etiketa është e jotja për ta caktuar: BimCraft nuk e llogarit atë, dhe tipet fillestare nuk kanë asnjë.

Etiketa shfaqet pranë emrit të tipit në listën e tipeve të veglës Mur, te Vetitë e murit dhe në listën [Ndërro tipin](topic:wall-tools); raporti pas një ndërrimi thotë nëse niveli u rrit ose u ul. Për ta parë në tabelën **Muret sipas tipit** dhe në CSV-në e saj, shëno **Shfaq LOD-in e çdo tipi muri në tabelën e mureve** te Cilësimet › BimCraft › Muret: shtohet një kolonë e fundit, LOD. Ruhet në skedarin IFC me tipin (në grupin e vetive `CadCraft_WallType`, si veti `LOD` dhe brenda regjistrimit të tipit), kështu që është aty kur e hap përsëri skedarin. Etiketa vihet për tipet e mureve për tani, jo për elemente të vetme ose për lloje të tjera elementesh.

## Muret e përgjithshme për fazën e skicës

Lista e tipeve të veglës Mur fillon me dy mure **të përgjithshëm**: **Mur i përgjithshëm 200 mm (i jashtëm)** dhe **Mur i përgjithshëm 100 mm (i brendshëm)**. Secili është një shtresë e materialit të përgjithshëm, e etiketuar LOD 200. Përdori kur di ku shkojnë muret dhe s'di ende nga çfarë janë bërë.

Një mur, tipi i të cilit është etiketuar **LOD 100** ose **LOD 200**, vizatohet në çdo plan si **një brez i vetëm me shraffim**, në çdo nivel detaji: pa shtresa, pa vija shtresash. Kjo vlen për muret e përgjithshëm dhe për çdo tip tënd që e etiketon LOD 100 ose 200. Vetë muri është i plotë: ka trashësinë e tij, dyert dhe dritaret, dhomat dhe sasitë.

Për ta zhvilluar, ndërro tipin e tij (Redakto › Muret › **Ndërro tipin**, ose Tipi te Vetitë). Muri nuk vizatohet më: i njëjti mur merr tipin e ri, dhe raporti thotë çfarë u zhvendos. Një tip i etiketuar LOD 300 ose më lart vizatohet me shtresat e tij si më parë.

Për të vizatuar çdo mur sipas shtresave të tij, pavarësisht etiketës: Cilësimet › BimCraft › Muret, hiq shenjën te **Vizato muret e një tipi LOD 100 ose LOD 200 si një brez të vetëm me shraffim**.

Dyert dhe dritaret fillestare janë gjithashtu lloje të përgjithshme (një madhësi dhe një mënyrë hapjeje, jo një produkt). Me **Shfaq LOD-in e çdo tipi muri në tabelën e mureve** të ndezur, tabelat e Dyerve dhe Dritareve tregojnë LOD 200 për to.

## Jepi tipit të dhënat e llogaritjes së sasive

Në redaktorin e tipit të murit, **Të dhënat e llogaritjes së sasive** merr atë që një vlerësues duhet të dijë për murin, një herë për tipin: **njësinë** nga e cila është ndërtuar (një tullë ose bllok: emri, gjatësia, lartësia dhe gjerësia e tij), **llaçin** (emri dhe trashësia e fugës) dhe një **normë** me kodin e monedhës (tre shkronja, si USD, EUR ose ZAR) dhe për çfarë është: një metër katror ose këmbë katrore sipërfaqe neto muri, një metër ose këmbë gjatësie muri, ose çdo mur. Të gjitha janë opsionale.

Ruhet me tipin në skedar. Çdo mur i tipit raporton atë pas: {{ui:Tabelat}} › **Tipet e murit: të dhënat e llogaritjes së sasive** liston njësinë, llaçin, normën dhe normën e shumëzuar me sasinë e matur, dhe llogaritja e sasive që i jepet TakeoffCraft mban atë te elementi i atij tipi muri. Ndrysho te tipi dhe çdo mur ndjek.

Tre fusha të tjera janë për numërimin e tullave ose blloqeve dhe të llaçit:

- **Humbja në njësi, %** i shtohet numrit të njësive. Lëre bosh për të përdorur shifrën e metodës së matjes së projektit, ose asnjë nëse metoda nuk ka. Shkruaj 0 për të mos pasur humbje, çfarëdo që thotë metoda.
- **Llaç shtesë, %** është për vrimat ose perforimet që marrin llaç. Shtohet në vëllimin e llaçit. Lëre bosh për asnjë.
- **Shtresat e ndërtuara me këtë njësi**: shëno çdo shtresë që është një fletë e kësaj tulle ose blloku. Një mur me kavitet ka dy. Pa asnjë të shënuar, numërohen shtresat e bërthamës.

Norma mund të jetë edhe për njësi për porosi, për 1000 njësi për porosi ose për m³ llaç. Aty ku njësia ka gjatësi dhe lartësi, **Tipet e murit: të dhënat e llogaritjes së sasive** tregon njësitë për m² (ose ft²) të një fletë, njësitë për porosi dhe vëllimin e llaçit; formulat janë te [Tulla, blloqe dhe llaç](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Një tip ka një njësi: dy fletë me njësi të ndryshme (një fletë e jashtme tullash dhe një fletë e brendshme blloqesh) nuk mund të numërohen ende në një tip.

## Mbaje bërthamën të palëvizur

Te **Vetitë**, vendos **Vijën e vendosjes** të murit te një fytyrë e bërthamës ose te boshti qendror i bërthamës. Kur më vonë shton ose trashë një përfundim, kjo vijë mbetet aty ku është dhe muri rritet rreth saj; muret që takohen me të në një qoshe ndjekin, kështu që qoshet e drejta mbeten të mbyllura.

## Materialet e projektit

{{ui:Biblioteka e materialeve…}} liston materialet e projektit: emrin, kategorinë, trashësinë me të cilën fillon një shtresë, ngjyrën e shfaqjes, modelin e mbushjes së prerjes dhe shënimet. Biblioteka ruhet në IFC me projektin. Zgjedhja e një materiali për një shtresë i jep asaj trashësinë e parazgjedhur të materialit, të cilën mund ta ndryshosh më pas; redaktimi i bibliotekës më vonë nuk i ndryshon kurrë madhësinë e mureve që ke vizatuar tashmë. Mund të krijosh një material edhe nga lista e materialeve të shtresës me {{ui:+ Material i ri…}}.

## Përmasat e referimit

{{ui:Shëno}} › {{ui:Përmasë referimi}}: zgjidh horizontale, vertikale ose e drejtuar, dhe një referencë: fytyrën e jashtme ose të brendshme të finiturës, fytyrën e jashtme ose të brendshme të bërthamës, boshtin qendror të murit ose boshtin qendror të bërthamës. Zgjidh murin e parë, ndrysho referencën nëse do, zgjidh të dytin, pastaj kliko ku shkon vija e përmasës. Dy referenca në një mur matin trashësinë e tij totale ose të bërthamës. {{ui:Përmasat e referimit…}} liston përmasat e pamjes, duke përfshirë ato që humbën një mur, me Vetitë, Ri-lidh referencat dhe Fshi.

### Përmas gjithë planin sipas rregullave

{{ui:Shëno}} › {{ui:Dimensiono planimetrinë…}} përmason jashtë planimetrisë së dyshemesë që po shikon: madhësinë totale në çdo drejtim, një rresht përmasash përgjatë çdo skaji të jashtëm (fundet e mureve, muret që takojnë skajin, dhe dyert dhe dritaret në të), me rreshtat të vendosur larg ndërtesës. Shëno ato që do, lexo numrin, pastaj {{ui:Shto përmasat}}. Janë përmasa referimi të zakonshme, kështu që ndjekin muret kur muret zhvendosen, dhe mund të zgjedhësh, zhvendosësh ose fshish çdo njërën prej tyre; i gjithë grupi është një hap {{ui:Zhbëj}}, dhe ta ekzekutosh përsëri nuk krijon asnjë të dyfishtë.

Ajo përmason vetëm jashtën: dhomat brenda ndërtesës, muret e lakuara dhe muret që nuk janë në kënd të drejtë me planin lihen për veglat e dorës, dhe vijat e rrjetës nuk janë mure, kështu që përmasat midis rrjetave nuk bëhen këtu. Asistenti yt i lidhur mund të bëjë të njëjtën gjë me `plan_dimension`.

Përmasa është e lidhur me muret, jo me një pikë në ekran: kur një mur zhvendoset ose ndryshon tipi, vlera ndjek. Nëse një mur fshihet, përmasa thotë se është e pazgjidhur dhe nuk tregon numër, derisa ta ri-lidhësh ose ta zhbësh. Kutia e gjatësisë pranon edhe koordinata planimetrike si `10',12'` për një vijë përmase në një vend të saktë.

Përmasat janë për muret që BimCraft vizaton, në pamjet e planit. Nuk janë ndërtuar ende: përmasat në prerje dhe fasada, te dyert, dritaret dhe komponentët e tjerë, dhe shtresat e montimit të vizatuara në plan dhe në prerje; shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet).

## Shiko edhe

[Vizato muret](topic:draw-walls), [Ndrysho një mur, derë ose dritare](topic:change-a-wall-or-door), [Vetitë](topic:properties-panel).
