---
title: Cilësimet e BimCraft
summary: Zgjidh nëse shfaqen dhomat dhe hapësirat, nëse vizatohen skajet dhe në cilën pamje hapet një model, dhe fillo vendosjen me ngjitjen te muri të ndezur.
keywords: cilësimet, preferencat, opsionet, hapësirat, dhomat, ifcspace, skajet, vijat, performanca, model i madh, pamja e hapjes, kamera, pamja nga sipër, ngjitja te muri, ngjitja
from: 4416e64f
---

Hap {{ui:Cilësimet}} me rrotën e dhëmbëzuar në shiritin e aplikacionit ose {{key:Mod+,}}. Skeda e parë, {{ui:BimCraft}}, mban cilësimet që i përkasin këtij aplikacioni; {{ui:Të përgjithshme}} mban ato që ndajnë të gjitha aplikacionet e CadCraft (tema, shiriti i veglave, panelet). Cilësimet e BimCraft ekzistojnë vetëm në aplikacion: i ndryshoni këtu, dhe ky shfletues i mban mend. {{ui:Rivendos cilësimet e BimCraft}} në fund të dialogut i kthen ato, dhe ato të përbashkëtat, në gjendjen fillestare.

## Menutë, tastet dhe miu

Stili i menusë (shiriti i veglave i BimCraft, një shirit menuje për projektimin e shtëpisë, një shirit BIM ose një rresht komandash vizatimi), tastet dhe menutë tuaja, dhe çfarë bëjnë rrota dhe butonat e miut. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).

## Kur hapet një model

- **Shfaq dhomat dhe hapësirat** (fikur si parazgjedhje): dhomat dhe hapësirat janë kuti transparente që mund t'i fshehin muret pas tyre, prandaj fillojnë të fshehura. Butoni {{ui:Hapësirat}} mbi modelin ende i ndez dhe i fik për modelin e hapur.
- **Skajet**: {{ui:Skajet të ndezura}} (parazgjedhja) vizaton vijat e skajeve që japin pamjen e projektimit. {{ui:Vetëm modelet e vogla}} i vizaton vetëm për modelet nën 300,000 trekëndësha, që modelet e mëdha të mbeten më të shpejta për t'u kthyer. {{ui:Skajet të fikura}} hap çdo model pa to. Butoni {{ui:Skajet}} i ndërron prapëseprapë për modelin e hapur. Mbi 1.5 milion trekëndësha skajet janë gjithmonë të fikura.

## Vizatimet hapen në

Si shfaqet për herë të parë një vizatim DWG ose DXF: {{ui:3D (më i shpejti)}} (parazgjedhja) vizaton shpejt edhe një vizatim të madh, ose {{ui:Model (2D)}} hap pamjen e sheshtë të hapësirës së modelit. Skedat mbi vizatim ndërrojnë në çdo kohë mes {{ui:Model}}, fletëve dhe {{ui:3D}}. Një vizatim pa asgjë në hapësirën e modelit, ose një shfletues që nuk mund të shfaqë 3D, hapet gjithmonë në 2D.

## Pamja e hapjes

Kamera me të cilën hapet një model: {{ui:Përshtat}} (parazgjedhja, i gjithë modeli nga një cep), {{ui:Sipër}}, {{ui:Para}} ose {{ui:Anësore}}. Butonat mbi modelin ndryshojnë pamjen në çdo kohë.

**Një ndërtesë e rrotulluar në terrenin e vet**: shumë modele vijnë me ndërtesën në një kënd me boshtet e skedarit (në koordinata rilevimi ose të përbashkëta). {{ui:Drejt me ndërtesën}} (parazgjedhja) e shfaq një ndërtesë të tillë të drejtë: {{ui:Përshtat}}, {{ui:Sipër}}, {{ui:Para}}, {{ui:Anësore}}, faqet e kubit të pamjes dhe çdo prerje e re ndjekin muret e saj, dhe busulla e kubit të pamjes ende tregon nga veriu i modelit. {{ui:Ashtu si është vendosur në terren}} i mban boshtet e skedarit. Një ndërtesë muret e së cilës shtrihen sipas boshteve duket njësoj në të dy rastet.

## Vendosja e elementeve nga biblioteka

**Fillo me ngjitjen te muri të ndezur** (fikur si parazgjedhje): kur fillon vendosja ose ngjitja e një elementi nga biblioteka, prapa tij ngjitet te muri më i afërt, i kthyer nga dhoma. {{key:Tab}} ose {{ui:Ngjitje te muri}} në shiritin e vendosjes e fik për çastin. Një kat pa mure fillon pa të.

## Kutia e prerjes

{{ui:Hapësira rreth zgjedhjes}} është sa hapësirë lë {{ui:Kuti prerjeje rreth zgjedhjes}} në çdo anë të elementeve të zgjedhur, në milimetra: 300 në fillim, deri në 5000. Shih [Prit një model IFC me një plan prerjeje](topic:section-plane).

## Vendndodhja

{{ui:Gjerësia dhe gjatësia në}} zgjedh sistemin me të cilin {{ui:Mas}} › {{ui:Vendndodhja}} jep gjerësitë dhe gjatësitë: WGS 84 (EPSG:4326, parazgjedhja, siç i përdorin GPS dhe hartat në web), {{ui:Datumi i vetë skedarit}}, ose një nga ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 dhe CGCS2000. Sistemi i hartës dhe datumi i vetë skedarit shfaqen gjithmonë edhe ata. Shih [Mat distancat, sipërfaqet e faqeve dhe vendndodhjet në 3D](topic:measure).

## Treguesi i qoshes

Ajo që ndodhet në qoshen e poshtme djathtas të pamjeve 3D (një model IFC, dhe një vizatim i ndërruar në 3D): {{ui:Kubi i pamjes}} (parazgjedhja), {{ui:Ikona e boshteve}} (një X, Y dhe Z të vogla) ose {{ui:Asnjë}}. Ndryshon menjëherë. Pamja 2D e vizatimit nuk shfaq kurrë asnjë.

Mbi kubin e pamjes, klikoni një faqe, një skaj ose një cep për të parë nga ajo anë, tërhiqeni kubin për ta rrotulluar përreth, tërhiqeni unazën për ta kthyer, dhe klikoni shtëpinë për pamjen fillestare.

## Emri juaj te çështjet

Kur jeni futur në llogari, çështjet mbajnë emrin e llogarisë suaj dhe BimCraft nuk kërkon asgjë: kjo pjesë shfaq {{ui:Nga llogaria juaj (<name>)}}. {{ui:Përdor një emër tjetër}} hap një kuti për një emër tjetër, që mbizotëron derisa të zgjidhni {{ui:Përdor emrin e llogarisë sime}}. Kur nuk jeni futur, formulari i çështjes kërkon një emër si më parë. Shih [Çështjet dhe skedarët BCF](topic:issues-bcf).

## Asistentët

**Lejo asistentët e AI dhe skriptet të përdorin BimCraft** (fikur si parazgjedhje) i lejon një asistent në kompjuterin tuaj të arrijë modelin e hapur përmes CadCraft Studio: **Lexo** gjen elementët dhe lexon vetitë e tyre, **Ndrysho pamjen** i izolon, i fsheh dhe i shfaq. **Aktiviteti** liston thirrjet e tij. Shih [Lejo një asistent AI të punojë me modelin tuaj](topic:assistants).

:::note
Cilësimet e tjera zbatohen kur hapet një model ose kur fillon vendosja. Një model që është tashmë i hapur e mban pamjen e vet derisa të përdorni butonat e shiritit të veglave ose ta hapni sërish.
:::

## Lidhur

- [Kopjo, ngjit dhe dyfisho elementët e bibliotekës](topic:copy-paste)
- [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library)
- [Ekrani i BimCraft](topic:workspace)
- [Lejo një asistent AI të punojë me modelin tuaj](topic:assistants)
