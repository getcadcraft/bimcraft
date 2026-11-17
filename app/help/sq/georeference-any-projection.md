---
title: Gjeoreferenco me çdo projeksion
summary: Tregoje BimCraft në cilin sistem hartë janë koordinatat e një modeli, nga lista e plotë EPSG, çdo zonë UTM, ose një projeksion që përcakton vetë, dhe përdore për Vendndodhjen, shtresat e hartës dhe retë e pikave.
keywords: projeksion, sistem koordinativ, crs, epsg, utm, zonë utm, projeksion i personalizuar, proj4, varg proj, prj, wkt, gjeoreferencë, gjeoreferencim, konvertim harte, ifcprojectedcrs, projeksionet e mia, gjerësi gjeografike, gjatësi gjeografike, koordinata lindore, koordinata veriore, lambert, gauss-kruger, rrjetë shtetërore, rrjetë kombëtare
from: 6894c1f2
---

Disa plane vizatohen në një sistem hartë që nuk është në një listë të shkurtër: një zonë UTM, një rrjetë kombëtare, ose një projeksion që dikush e ka shkruar si përkufizim tekst. {{ui:Mas}} › {{ui:Sistemi koordinativ…}} të lejon të thuash cilin përdor modeli.

## Zgjidh sistemin për një model

1. Hap modelin, zgjidh {{ui:Mas}}, pastaj {{ui:Sistemi koordinativ…}}.
2. Shkruaj në kutinë e kërkimit. Çdo nga këto funksionon:
   - një numër EPSG: `32633` ose `EPSG:2277`;
   - një zonë UTM: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - fjalë nga emri: `lambert 93`, `mga zone 56`, `texas central`;
   - një përkufizim projeksioni: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, opsionalisht me një emër përpara (`My grid = +proj=…`);
   - teksti i një skedari `.prj`, ose përdor {{ui:Ngarko një skedar .prj…}}.
3. Zgjidh një rezultat, pastaj {{ui:Përdor këtë sistem}}.

Zgjedhja ruhet në model (një grup vetish me emrin `CadCraft_CRS` në projekt), kështu që hapet përsëri me modelin. Ruaje modelin për ta mbajtur. {{ui:Hiqe nga modeli}} kthehet te ajo që thotë skedari.

Nëse përkufizimi yt jep të njëjtat koordinata si një sistem EPSG i listuar, BimCraft e thotë këtë dhe përdor atë kod; kur disa sisteme të listuara ndajnë të njëjtën matematikë, i emëron edhe të tjerët.

## Projeksionet e mia

Një përkufizim që ngjit ose një `.prj` që ngarkon mund të mbahet me {{ui:Ruaje te Projeksionet e mia}}. Lista është në këtë pajisje (këtë shfletues) dhe ofrohet herën tjetër që hap zgjedhësin.

## Çfarë e përdor

- {{ui:Mas}} › {{ui:Vendndodhja}} e kthen një pikë të zgjedhur në gjerësi dhe gjatësi gjeografike përmes sistemit të modelit. Dikur ndalonte me një shënim kur skedari e emëronte sistemin e hartës pa një kod EPSG; me një zgjedhje të ruajtur jep përgjigjen.
- Shtresat e hartës nën model përdorin të njëjtin sistem. Një re pikash ose një skedar terreni në një sistem tjetër ofrohet me atë të modelit (shih më poshtë).
- {{ui:Cilësimet}} › {{ui:BimCraft}} › {{ui:Vendndodhja}} › {{ui:Zgjidh një sistem tjetër…}} cakton atë që {{ui:Vendndodhja}} raporton edhe: gjerësinë dhe gjatësinë gjeografike në çdo sistem gjeografik të listuar, ose koordinatat lindore dhe veriore në çdo sistem të projektuar, përveç atij të vet modelit.

## Një model që nuk është ende në hartë

Nëse skedari nuk ka konvertim harte, zgjedhja e një sistemi hap {{ui:Vendos këtë model në hartë}}. Mund ta hapësh edhe nga {{ui:Mas}} › {{ui:Origjina në hartë…}}.

1. Jep origjinën e modelit si koordinata lindore dhe veriore në sistem, ose shkruaj një gjerësi dhe gjatësi gjeografike dhe zgjidh {{ui:Konverto në koordinata lindore dhe veriore}}.
2. Jep rrotullimin drejt veriut të rrjetës (gradë, në drejtim të kundërt të orës; 0 do të thotë se boshti Y i modelit tregon drejt veriut të rrjetës) dhe lartësinë e origjinës.
3. Shkalla fillon nga ndryshimi i njësisë midis modelit dhe hartës (0.001 për një model në milimetra mbi një rrjetë në metra). Ndrysho vetëm për një faktor të kombinuar tokë-rrjetë.
4. Zgjidh {{ui:Vendos në hartë}}. Një hap Zhbërje shkruan një IfcProjectedCRS dhe një IfcMapConversion (IFC4). Vetë modeli nuk lëviz.

Një skedar IFC2X3 nuk ka asnjë nga dy entitetet. BimCraft shkruan të njëjtat numra në mënyrën që lejon ai standard: grupet e vetive buildingSMART `ePSet_MapConversion` dhe `ePSet_ProjectedCRS` në projekt, gjerësinë dhe gjatësinë gjeografike të vendit, dhe veriun e vërtetë. Dialogu e thotë këtë. Ruaje modelin për ta mbajtur.

## Një model që është tashmë në hartë

Kur skedari e vendos vetveten në hartë dhe zgjedh një sistem tjetër, BimCraft pyet:

- {{ui:Ndrysho vetëm atë që raporton Vendndodhja}} mban gjeoreferencën e vet të skedarit dhe përdor zgjedhjen tënde për {{ui:Vendndodhja}}, shtresat e hartës dhe retë e pikave (numrat e modelit lexohen pastaj si të sistemit të ri).
- {{ui:Zhvendos modelin në këtë sistem}} rishkruan gjeoreferencën: origjina kalon nëpër projeksion (koordinatat lindore, veriore, lartësia, rrotullimi dhe shkalla), dhe IfcProjectedCRS (emri, datumi, projeksioni, zona, njësia) rishkruhet, kështu që IFC i ruajtur thotë sistemin e ri. Vendi mbi tokë mbetet i njëjtë: origjina mban gjerësinë dhe gjatësinë e saj gjeografike. Elementët brenda modelit nuk ndryshojnë kurrë; vetëm gjeoreferenca.

Dialogu tregon origjinën e vjetër dhe të re para se të zgjedhësh. Shkuarja atje dhe kthimi e kthen origjinën brenda një milimetri.

## Retë e pikave dhe terreni në një sistem tjetër

Një re ose një skedar matjeje mban sistemin e vet (LAS, LAZ, E57, GeoTIFF) ose asnjë. Kur ndryshon nga ai i modelit, BimCraft ofron {{ui:Ri-projekto në sistemin e modelit}}. Pikat zhvendosen në grupe (në një punëtor kur janë shumë, që faqja të mbetet e përdorshme), skedari në kompjuterin tënd nuk preket, dhe rreshti i statusit thotë çfarë u bë. Hap përsëri skedarin për t'u kthyer te sistemi i vet. Për një re që është tashmë e hapur, {{ui:Ri-projekto te modeli…}} në shiritin e renës bën të njëjtën gjë.

Nëse skedari nuk emëron asnjë sistem, BimCraft pyet {{ui:Në cilin sistem është ky skedar?}}: zgjidhe me {{ui:Zgjidh sistemin…}} dhe përgjigjja mbahet për atë skedar në këtë pajisje. {{ui:Mbaj sistemin e vet të skedarit}} i lë pikat ashtu si janë.

## Kur diçka është e përafërt

Problemet listohen në dialog dhe në panelin Problemet, kurrë në heshtje:

- Një vend jashtë zonës për të cilën është bërë sistemi: numrat punojnë, por shtrembërimi rritet.
- Zhvendosjet e datumit që kërkojnë një skedar rrjete (NADCON, NTv2 dhe të ngjashme) nuk janë të disponueshme. Sistemet në një datum tjetër zhvendosen me zhvendosjen pa rrjetë që lista e regjistrit EPSG e jep, dhe rezultati është i përafërt me saktësinë e thënë, të cilën mesazhi e jep në metra.
- Një pikë që nuk mund të projektohet lihet jashtë dhe numërohet; një skedar mbi kufirin e madhësisë refuzohet, me kufirin e thënë.

:::tip
Koordinatat e hartës kanë nevojë për një konvertim harte. Një skedar pa të vendoset në hartë me {{ui:Origjina në hartë…}}.
:::

:::note
Zhvendosja midis datumeve pa skedar rrjete është e saktë deri në disa metra; rezultati i Vendndodhjes thotë sa, kur katalogu e di.
:::
