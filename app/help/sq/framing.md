---
title: Skeletimi i mureve, dyshemeve dhe çative
summary: Gjenero stendat, rrasat, trarët mbi hapje, trarët e dyshemesë, kallamat ose kapriatat nga modeli dhe mbaji me të; ribëhen kur ndryshojnë muret, hapjet, dyshemetë ose çatia, dhe tabela Lëndë druri është lista e prerjeve.
keywords: TJI, I-joist, tabelë e shtrirjes së trarëve, ngarko një tabelë, skeletim, kornizë, stendë, rrasë, rrasë e sipërme, trarë mbi hapje, stendë kryesore, stendë mbajtëse, trarë kornize, stendë e shkurtër, rrasë poshtë dritares, bllokim, qoshe, qoshe California, T, trar, trar kufiri, trar brezi, kallam, kallam i katër ujërave, kallam lugine, kallam mbajtës, dërrasë kulmi, trar tavani, lidhje qafe, kapriatë, lëndë druri, listë prerjesh, këmbë dërrase, 2x4, 2x6, distancë, në qendër
from: 76d0ffb5
---

## Çfarë do të bësh

Skeletoje ndërtesën nga ajo që vizatove. BimCraft vendos stendat, rrasat dhe trarët mbi hapje në muret, trarët në dysheme dhe kallamat (ose kapriatat) në çati; i përcakton madhësitë nga tabela standarde të etiketuara; i mban me modelin dhe i ribën sa herë ndryshon ajo që skeleton. Tabela **Lëndë druri** është lista e prerjeve.

## Skeleto

1. Te një nivel, hap {{ui:Ndërtimi}} dhe zgjidh {{ui:Skeletim}}.
2. Zgjidh **distancën** (16" ose 24" në qendër; 400 ose 600 mm), **qoshet** (tre stende ose California), **Kallamat** ose **Kapriatat** për çatitë, dhe nëse muret marrin një rresht **bllokimi** në gjysmë lartësie. Për dyshemetë zgjidh **Dru i prerë** ose **TJI (paraprak)**, dhe vendos drejtimin e trarëve automatik, plan X ose plan Y.
3. Kliko **Skeleto çdo mur**, ose kliko një mur, një dysheme, ose një çati (në nivelin ku qëndron çatia), për të skeletuar vetëm atë.

Fike **Shfaq skeletimin** për t'i fshehur të gjitha pjesët e skeletimit, si një shtresë; **Shiko përmes** i fsheh muret, dyshemetë dhe çatitë që janë skeletuar, që ta shohësh vetëm skeletimin.

## Çfarë merr

- **Muret**: një rrasë e poshtme (e prerë te dyert), një rrasë e sipërme e dyfishtë, stendat në distancë nga fillimi i murit, stenda kryesore dhe mbajtëse dhe një trar mbi çdo derë dhe dritare, stenda të shkurtra mbi trarët dhe nën dritaret, një rrasë e papërfunduar nën dritaret, qoshe aty ku takohen muret (muri që kalon merr stendat e qoshes), dy stenda mbështetëse aty ku një mur tjetër bashkohet si T, dhe bllokim midis stendave.
- **Dysheme**: trarë përgjatë anës së shkurtër të dyshemesë si parazgjedhje, ose sipas boshtit të planit që zgjedh; trarë kufiri rreth skajit, dhe trarë kryq të dyfishtë rreth një hapësire shkalle, me trarët që kalojnë nëpër të prerë më shkurt (trarë bisht). Modaliteti TJI zgjedh serinë dhe thellësinë më të vogël të listuar që arrin shtrirjen e lirë të matur me distancën e zgjedhur.
- **Çati**: kallama të zakonshëm të prerë katror me çdo strehë, kallama mbajtës aty ku kulmet dhe lugina i presin, kallama kulmi dhe lugine, dërrasa kulmi, trarë tavani mbi rrasat dhe lidhje qafe — ose kapriata të thjeshta me distancën, nga një copë secila.

## Ndryshoje

Zgjidh çdo pjesë skeletimi në pamjen 3D ose në pemën e modelit. **Vetitë** shfaqin skeletimin e saj: ndrysho distancën, llojin dhe drejtimin e trarëve të dyshemesë, qoshet, bllokimin ose skeletimin e çatisë. Lëvizja e mureve, dyerve dhe dritareve, ose ndryshimi i dyshemesë ose çatisë, e ribën vetvetiu skeletimin.

Për të mbajtur një pjesë që vendose qëllimisht kur skeletimi ribëhet, zgjidhe dhe zgjidh **Mbaje këtë pjesë kur skeletimi të ribëhet**. Një pjesë e mbajtur qëndron aty ku është; kur skeletimi përreth ndryshon, shënohet që ta kontrollosh.

## Dysheme TJI nga një tabelë që ngarkon

BimCraft nuk ka tabelat e shtrirjes së trarëve të prodhuesit (ato janë të prodhuesit dhe ndryshojnë me çdo botim). Zgjidh skeletimin e një dysheme, vendos **Trarët e dyshemesë** në **TJI (paraprak)** dhe zgjidh **Ngarko një tabelë…** te **Vetitë**: një skedar i formatit `cadcraft-tji-table`, JSON ose CSV, që e ke bërë nga tabelat aktuale të shtrirjes së prodhuesit. Ai emëron prodhuesin, produktin dhe botimin, dhe nga vijnë numrat, dhe liston për çdo rast ngarkese (ngarkesa e gjallë, ngarkesa e vdekur, kufiri i deformimit, gjatësia e mbështetjes) shtrirjen më të madhe të lirë të çdo serie dhe thellësie për çdo distancë.

- BimCraft merr **shtrirjen e lirë** të dyshemesë, zgjedh thellësinë më të vogël, dhe brenda saj serinë, shtrirja e listuar e së cilës e arrin për distancën dhe rastin e ngarkesës që zgjodhe, dhe e skeleton dyshemenë me të. Nëse shtrirja ose distanca është jashtë tabelës, e thotë këtë dhe nuk ndryshon asgjë.
- Ngarkesat, kufiri i deformimit, gjatësia e mbështetjes, tabela dhe fjalia "Udhëzim paraprak skeletimi; zgjedhja përfundimtare kërkon tabelat e prodhuesit dhe ngarkesat e projektit" shtypen në tabelën **Lëndë druri**, shkruhen në model me skeletimin dhe listohen në panelin **Problemet** si shënim. Një tabelë e shënuar si shembull e thotë këtë në një paralajmërim.
- Me shtesën **Rregullore ndërtimi** të ndezur, rregulli i saj për trarët e dyshemesë lexon edhe një tabelë të ngarkuar; pa tabelë, trarët TJI lihen jashtë atij kontrolli, si më parë.
- Tabela mbetet në këtë shfletues derisa ta pastrosh ose ngarkosh një tjetër. Skedari: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inç, këmbë, psf; ose `metric`: mm, metra, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) dhe `rows` (`series`, `depth`, `spans`: për çdo id rasti, distancën dhe shtrirjen më të madhe të lirë, siç është `"16": "15-6"`). Në CSV të njëjtat fakte janë rreshta `# key = value`, pastaj `series,depth,case,spacing,span`.
- Pa tabelë të ngarkuar, një skeletim TJI refuzohet dhe asgjë nuk ndryshon: **Ngarko një tabelë TJI: tabelat e prodhuesit janë të tyre dhe nuk janë të integruara.** Një model i skeletuar me tabelën e vjetër TJI të integruar (para këtij ndryshimi) mban çdo trar që ka; Vetitë dhe Problemet thonë se duhet tabela, dhe dyshemeja mund të skeletohet përsëri kur ngarkon një. Trarët prej druri të plotë punojnë si më parë.

Kjo është udhëzim skeletimi. Zgjedhja përfundimtare e trarëve kërkon tabelat e prodhuesit, ngarkesat e projektit dhe inxhinierin.

## Lista e prerjeve

Te paneli **Tabelat** zgjidh **Lëndë druri**: çdo pjesë skeletimi e grupuar sipas madhësisë dhe gjatësisë standarde që do të blije (gjatësi të plota 2' nga 8'; hapa 600 mm nga 2400 në milimetra), me numrin e copave dhe këmbët e dërrasës. **CSV** e shkarkon.

:::warning
Madhësitë e trarëve mbi hapje, trarëve, kallamave dhe trarëve të tavanit vijnë nga tabela standarde të etiketuara për një shtëpi tipike një ose dy katëshe, jo nga llogaritje inxhinierike. **Vetitë** thonë kur një shtrirje ose një hapje është jashtë tabelës së saj. Një projektues ose inxhinier kontrollon shtrirjet, ngarkesat dhe lidhjet.

Skeletimet TJI përdorin vetëm një tabelë që ngarkon, që e bën nga tabelat aktuale të shtrirjes së prodhuesit; BimCraft nuk jep asnjë. Sugjerimi nuk kontrollon mbështetjen, ngarkesat me pikë, konzolat, shpimet, trarët mbi shkallën ose lidhjet, dhe forma I e modelit është skematike.
:::

## Çfarë ruhet

Çdo mur, dysheme ose çati e skeletuar është një grup elementësh IFC ("Framing") i anëtarëve IFC (stenda, rrasa, kallama, lidhje qafe, bllokime, kapriata) dhe trarësh (trarë mbi hapje, trarë, kufijtë, dërrasa kulmi), secili me madhësinë, gjatësinë dhe këmbët e dërrasës.
