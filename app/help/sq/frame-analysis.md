---
title: Analizo skeletin strukturor
summary: Forcat, reaksionet dhe deformimet e trarëve, kolonave dhe mbajtëseve të modelit nën ngarkesat dhe kombinimet që vendos, të ruajtura në IFC. Një ndihmë analize, jo një kontroll kodi.
keywords: analizë, njësi, këmbë dhe inç, njësi shfaqjeje, analizë strukturore, kontrolle projektimi, shfrytëzim, i valsuar, i saldueshëm, AISC 360, EN 1993-1-1, analizë skeleti, model analitik, metoda e ngurtësisë, ngarkesa, rast ngarkese, kombinim, ngarkesë e vdekur, ngarkesë e gjallë, pesha vetjake, reaksione, moment përkulës, prerje, forcë aksiale, deformim, formë e deformuar, mbajtëse, e ngulitur, e mbërthyer, çlirim, raport, pdf, csv, craftscript, frame3d, trarë, kolona, elementë
from: b93b58c4
---

Skeda {{ui:Analiza}} në të djathtë gjen forcat te trarët, kolonat dhe mbajtëset e modelit të hapur, reaksionet te bazat e kolonave dhe sa përkulen elementët, për ngarkesat që i jep.

:::warning
Është një **ndihmë analize, jo një kontroll kodi**. Analiza nuk zbaton asnjë kod projektimi: nuk dimensionon elementët, nuk kontrollon kapacitetet dhe nuk zgjedh faktorët e ngarkesës. Një inxhinier kontrollon modelin analitik, ngarkesat dhe mbajtëset, dhe vendos çfarë do të thotë numri. Blloku {{ui:Kontrollet e projektimit}} më poshtë kontrollon profilet e çelikut I të valsuar sipas AISC 360 ose EN 1993-1-1, një ndihmë derisa një inxhinier ta ketë rishikuar: shih [Kontrollet e projektimit](topic:frame-analysis#design-checks).
:::

## Ekzekuto

1. Hap një model IFC dhe skedën {{ui:Analiza}}.
2. Zgjidh një ose më shumë trarë, kolona ose mbajtëse në pamje, zgjidh një {{ui:Rasti}}, një {{ui:Ngarkesa}} dhe një {{ui:Drejtimi}}, shkruaj vlerën dhe shtyp {{ui:Shto ngarkesë}}: kN/m për një ngarkesë të shpërndarë përgjatë një elementi, kN për një ngarkesë me pikë.
3. Shtyp {{ui:Nis analizën}}.

Tabela liston forcën më të madhe aksiale të çdo elementi, prerjet, momentet përkulëse, torsionin dhe deformimin; kliko emrin e një elementi për ta zgjedhur në pamje. Më poshtë janë reaksionet. {{ui:Në model}} vizaton formën e deformuar, ose një veprim si diagram pranë çdo elementi. Rezultatet vjetrohen kur ndryshon modeli: nis përsëri.

Çdo ngarkesë dhe cilësim është një ndryshim në listën {{ui:Ndryshimet}}: {{ui:Zhbëj}} e kthen mbrapsht, dhe {{ui:Ruaj si IFC}} i mban në skedar (grupi i vetive të projektit `CadCraft_Analysis`), kështu që hera tjetër që hapet modeli këtu ngarkesat e tij janë ende aty.

## Si bëhet modeli analitik

- Çdo IfcBeam, IfcColumn dhe IfcMember, forma e të cilit është një ekstrudim i vetëm i drejtë, bëhet një element mbi qendrën e prerjes së tij. Vetitë e prerjes vijnë nga profili: forma I, U, L dhe T, drejtkëndësha dhe tubat, rrathët dhe tubat rrethorë, ose çdo kontur i mbyllur (atëherë konstanta e torsionit është një vlerësim, i thënë në raport). Çdo gjë tjetër lihet jashtë dhe numërohet.
- Në një model, trarët ndalojnë te faqja e një kolone dhe ulen nën dysheme. Çdo skaj elementi zgjatet përgjatë vijës së vet mbi boshtin e elementit ku mbështetet, kur ai bosht është afër (brenda rreth madhësisë së prerjeve), dhe ai element ndahet aty. Raporti thotë sa skaje u zhvendosën.
- **Bazat e kolonave** ku asgjë nuk shkon më poshtë janë mbajtëse: të ngulitura (fillimi) ose të mbërthyera (të mbajtura në vend dhe nga përdredhja, por të lira të rrotullohen).
- **Skajet e trarëve** janë të ngurta ose të mbërthyera nga rregulli {{ui:Skajet e trarëve pa lidhje}}; **mbajtëset** (IfcMember) janë të mbërthyera në të dy skajet. Zgjidh një element për t'i dhënë skajet e tij, ose bazës së një kolone, një rregull të vetin.
- Materialet sipas emrit: beton (E = 30 GPa), dru (E = 11 GPa), përndryshe çelik (E = 200 GPa).

Nëse skeleti mund të lëvizë pa përkulur asgjë — një mekanizëm — ekzekutimi ndalon dhe thotë ku dhe në cilin drejtim.

## Rastet, kombinimet, shenjat dhe raporti

Analiza fillon me **Vdekur** (pesha vetjake), **Gjallë** dhe **Vdekur + gjallë**; shto raste dhe kombinime me faktorët që kërkon kodi yt i projektimit. N > 0 është tërheqje; My > 0 e vendos anën −z lokale të elementit në tërheqje (një trari që përkulet poshtë nga graviteti ka My > 0). {{ui:Raporti (PDF)}} dhe {{ui:Raporti (CSV)}} mbajnë supozimet, prerjet, rastet, reaksionet me shumat e tyre, forcat e elementeve, zhvendosjet dhe një zarf. {{ui:Eksporto si CraftScript}} shkruan skeletin për hapësirën e punës Script të PartCraft, ku funksioni i bibliotekës `frame3d` e zgjidh në kod të lexueshëm.

Metoda është metoda e ngurtësisë direkte, lineare dhe e rendit të parë, përveç nëse shënon *Rendi i dytë (P-Delta)*, dhe është kontrolluar me raste nga librat mësimorë.

**Rendi i dytë (P-Delta).** Shëno *Rendi i dytë (P-Delta)* pranë Nis: çdo kombinim zgjidhet përsëri me forcat aksiale të elementeve që veprojnë mbi skeletin e deformuar (çdo element është i ndarë në 4 pjesë, kështu që përkulja e një elementi midis skajeve gjithashtu numërohet), derisa forcat aksiale të stabilizohen. Rreshti i rezultatit jep numrin e kalimeve dhe sa u rrit lëkundja. Momentet, deformimet, kontrollet e projektimit dhe raporti përdorin pastaj këto rezultate. Mbi ngarkesën kritike elastike të skeletit, ekzekutimi ndalon dhe e thotë këtë. Është elastik me rrotullime të vogla, vetëm përkulës, pa reduktim të ngurtësisë dhe pa ngarkesa nocionale (jo vetëm metoda e analizës direkte të AISC); pllakat, muret dhe dyshemetë e ngurta mbeten të rendit të parë.

**Presioni i dyshemesë mbi pllaka.** Për pllakat e betonit (analiza i lexon si pllaka kur materiali i tyre është beton), blloku Ngarkesat ka {{ui:Presion mbi çdo pllakë}}: shkruaj kN/m², zgjidh rastin më lart dhe shtyp {{ui:Shto te pllakat}}. Ai shpërndahet mbi çdo pllakë që gjeti analiza, drejt poshtë, dhe listohet me një lidhje Hiq. Është një presion për të gjitha pllakat, jo një për secilën, dhe nuk është një ngarkesë kodi: shkruaj vlerën që të jep inxhinieri yt.

**Frekuencat natyrore (elementë të fundëm).** Blloku {{ui:Elementë të fundëm: frekuencat natyrore}} nën rezultatet gjen modet më të ulëta të të njëjtit model me motorin e elementeve të fundëm: trarë me çlirimet e skajeve të tyre, pllaka dhe mure si guaska të sheshta me katër nyje, dysheme të ngurta, mbajtëse. Zgjidh sa mode (3, 6, 10 ose 20) dhe elementin e pllakës (guaskën me katër nyje për pllaka të trasha ose të holla, ose atë për pllaka të holla) dhe shtyp {{ui:Gjej frekuencat}}. Tabela jep frekuencën e çdo modi në Hz, periodën e tij në sekonda dhe masën efektive modale sipas X, Y dhe Z si pjesë të masës që mund të lëvizë; {{ui:Shfaq në model}} vizaton çdo mod në të njëjtën mënyrë si formën e deformuar. Masa është dendësia e materialit shumëzuar me vëllimin: ngarkesat nuk shtojnë masë, dhe një material pa dendësi nuk ka asnjë. Raporti (PDF, CSV) mban tabelën. Është vetëm elastik dhe me lëvizje të vogla, dhe nuk krijohet asnjë ngarkesë sizmike ose e erës nga një kod këtu. Nuk është kontroll kodi; inxhinieri yt rishikon rezultatet.

**Spektri i përgjigjes, historia kohore dhe pushover.** Tre blloqe të tjera ndodhen nën frekuencat, duke përdorur të njëjtin model me elementë të fundëm. Masa për të tre është dendësia e materialit plus ngarkesat e poshtme të rasteve që shënon, çdo një shumëzuar me një faktor që shkruan (për shembull Vdekur me 1 dhe Gjallë me pjesën që numëron si masë).

{{ui:Spektri i përgjigjes}} lexon çdo mod nga një spektër që jep (një tabelë periode dhe nxitimi, ose forma ASCE 7 nga SDS, SD1 dhe TL; butoni {{ui:Përdor vlerat e bllokut Sizmike}} i kopjon ato nga blloku Sizmike), dhe kombinon modet me CQC, SRSS, rregullin e dhjetë për qind ose një shumë absolute, pastaj i bashkon drejtimet X, Y dhe Z (100 % + 30 % ose SRSS). Jep forcën bazë të prerjes, zhvendosjet e kateve, forcat e skajeve të elementeve dhe një tabelë modesh që paralajmëron kur modet e përdorura mbajnë më pak se 90 % të masës. Mund t'i shkallëzosh rezultatet me një faktor ose deri në një forcë bazë prerjeje që shkruan; blloku nuk e llogarit kurrë vetë atë forcë bazë. Rezultatet nuk kanë shenjë.

{{ui:Historia kohore}} ekzekuton një nxitim tokësor me superpozim modal (i saktë për vijat e drejta të regjistrimit midis pikave) ose me integrim të drejtpërdrejtë (Newmark me nxitim mesatar dhe amortizim Rayleigh). Hyrja është një sinusoid ose impuls i krijuar (gjithmonë i etiketuar si sintetik), një regjistrim që ngjit, ose një skedar tekst që hap (koha dhe nxitimi, një nxitim për rresht me një hap, ose një skedar stili PEER me kokë DT=; në g ose m/s²). Jep zhvendosjen e çatisë dhe forcën bazë të prerjes kundrejt kohës, zhvendosjen e çdo niveli dhe zarfin e forcave të skajeve të elementeve. Modelet me një regjistrim shumë të gjatë e mbajnë atë vetëm për sesionin.

{{ui:Pushover}} shtyn çatinë anash në hapa të vegjël (model si moda e parë, ose uniform), me artikulime plastike te skajet e elementeve që kanë formë I. Një artikulim jepet në momentin plastik, që bie ndërsa forca aksiale rritet (llogaritur nga forma e vizatuar, skajet e rrumbullakosura injorohen); forcimi është opsional, P-delta është opsionale, dhe një kombinim graviteti mund të zbatohet më parë. Jep kurbën e kapacitetit (forca bazë e prerjes kundrejt zhvendosjes së çatisë), artikulimin e parë dhe gjendjen dhe rrotullimin plastik të çdo artikulimi. {{ui:Ekzekuto historinë kohore jolineare}} ekzekuton të njëjtat artikulime nën regjistrimin e bllokut Historia kohore, në modele të vogla. Artikulimet formohen vetëm te skajet e elementeve (vendos një nyje aty ku duhet të formohet brenda një deshe); një element i çliruar në të dy skajet nuk merr asnjë; dhënia dhe humbja e stabilitetit të mbajtëseve nuk modelohen; pllakat dhe muret mbeten elastike; nuk jepen kritere pranimi. Nuk është kontroll kodi; inxhinieri yt rishikon rezultatet. Cilësimet ruhen me modelin, dhe raporti mban tabelat.

Nuk është ndërtuar ende: humbja e stabilitetit (buckling), një korrigjim i masës së munguar për spektrin e përgjigjes, shkallëzimi i regjistrimeve, kritere pranimi për artikulimet (përgjigja dinamike është aty, më lart), ngarkesa sipërfaqësore përveç presionit të vetëm mbi çdo pllakë, zhvendosje elementesh, mbajtëse që punojnë vetëm në tërheqje, muret dhe pllakat në skelet, kontrolle kodi të formave të saldueshme dhe të prerjeve të ndryshme nga format I të valsuara. Shih [Nuk është ndërtuar ende](topic:not-built-yet).

## Njësitë

Gjatësitë ndjekin njësinë që zgjedh në shiritin e veglave ({{ui:Njësitë}}), si pjesa tjetër e BimCraft: pozicionet e ngarkesave që shkruan dhe sheh ({{ui:Burimi}}, {{ui:Te}}, {{ui:Në}}), pikat e ngarkesave me nyje dhe të reaksioneve, lartësitë e kateve te {{ui:Sizmike}}, dhe kolonat e deformimit dhe zhvendosjes (këmbët dhe inçat i shfaqin këto gjatësi të vogla si inç dhjetorë). Ndrysho njësinë kurdo; skeda rivizatohet. Forcat qëndrojnë në kN dhe kN·m, dhe raporti (PDF, CSV) dhe skedari CraftScript qëndrojnë në milimetra me njësinë e shkruar. Madhësitë e prerjeve, diametrat e shufrave dhe mbulesat te blloku {{ui:Beton}} qëndrojnë në milimetra, siç janë emërtuar.

## Kontrollet e projektimit

Blloku {{ui:Kontrollet e projektimit}} (i njëjti me atë të DetailCraft) merr një {{ui:Kodi i projektimit}}, ASCE 7 + AISC 360 ose EN 1990 + EN 1993-1-1, dhe një {{ui:Klasa e çelikut}}. Jep çdo rasti ngarkese llojin e vet (vdekur, gjallë, erë …) dhe {{ui:Bëj kombinimet}} shkruan kombinimet e ngarkesës të kodit mbi rastet e tua; analiza pastaj i ekzekuton si çdo kombinim tjetër.

{{ui:Kontrollo elementët}} pastaj kontrollon çdo **profil çeliku I të valsuar** me kontrollet e DetailCraft (tërheqja, shtypja me humbje stabiliteti, përkulja me shembje anësore-përdredhëse, prerja, përkulja me forcë aksiale, deformimi; klauzolat janë në raport) dhe tregon sa e përdor kapacitetin e tij, me ngjyrë mbi model. Është një **ndihmë derisa një inxhinier ta ketë rishikuar**.

**Cilët elementë kontrollohen.** Një profil IFC nuk thotë nëse një formë çeliku I është e valsuar apo e saldueshme, kështu që BimCraft e quan të valsuar vetëm kur emri i profilit të tij (ose, në mungesë, emri i llojit të elementit) është një madhësi nga tabelat AISC W ose S, ose nga tabelat EN 10365 IPE, HEA ose HEB (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **dhe** thellësia, gjerësia, shtiza dhe flanxha në skedar përputhen me atë madhësi brenda 1 %. Çdo formë tjetër I (një trarë me pllaka, një madhësi nën një emër tjetër, një madhësi e redaktuar) merret si e saldueshme dhe kthehet **e pakontrolluar**, si edhe tubat, këndet, kanalet dhe prerjet e tjera, pjesët e holla dhe përdredhja. Kontrolloji ato elementë me një inxhinier.
