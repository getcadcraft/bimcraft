---
title: Shiko një vizatim DWG ose DXF
summary: Hap një DWG ose DXF, lëviz nëpër hapësirën e modelit dhe fletët, lexo koordinatat dhe shih çfarë nuk është vizatuar ende.
keywords: blloqe dinamike, gjendje dukshmërie, dwg, dxf, cad, vizatim, 2d, shiko, shikues, pan, zmadhim, hapësira e modelit, hapësira e letrës, shtresim, koordinata, hap dwg
from: 4db3122a
---

## Çfarë do të bëni

Hapni një vizatim CAD, shikoni në 3D ose 2D, lëvizni rreth tij, kaloni midis hapësirës së modelit dhe fletëve të tij, dhe lexoni koordinatat. BimCraft shfaq vizatime DWG dhe DXF; nuk i redakton dhe nuk i ruan. Për ta ndryshuar, klikoni {{ui:Redakto në CadCraft}} dhe vizatimi hapet në aplikacionin e vizatimit CadCraft, në një skedë të re.

## Hapa

1. Klikoni {{ui:Zgjidh një skedar}}, ose lëshoni vizatimin mbi faqe.
2. Zgjidhni një skedar `.dwg` ose `.dxf`.
3. Prisni derisa rreshti i statusit të thotë "Po lexohet vizatimi…". Vizatimet e mëdha duan disa sekonda. Pastaj thotë sa zgjati leximi, "po renderohet…" ndërsa vizatohet imazhi i parë, dhe sa zgjati ai.
4. Vizatimi hapet në 3D, mënyra më e shpejtë për të shfaqur një vizatim të madh (shih [Shiko një vizatim DWG ose DXF në 3D](topic:dwg-in-3d)). Klikoni {{ui:Model}} për pamjen e sheshtë 2D. Për t'i hapur gjithmonë vizatimet në 2D, vendosni {{ui:Cilësimet}} › {{ui:BimCraft}} › **Vizatimet hapen në** te {{ui:Model (2D)}}. Një vizatim pa asgjë në hapësirën e modelit, ose një shfletues që nuk shfaq dot 3D, hapet në 2D.
5. Shikoni skedat mbi vizatim: {{ui:Model}} së pari, pastaj një skedë për çdo fletë, sipas rendit të vetë vizatimit.
6. Klikoni një skedë fletë për ta parë: letra, me modelin të shfaqur përmes viewport-eve.
7. Klikoni {{ui:Model}} për t'u kthyer në hapësirën e modelit.
8. Lëvizni treguesin mbi vizatim dhe lexoni koordinatat X dhe Y në qoshe.

## Çfarë duhet të shihni

- Vizatimin, të përshtatur në dritare. Ngjyrat ndjekin vizatimin; vijat e bardha (ngjyra 7) vizatohen me ngjyrën e temës, dhe ngjyrat e zbehta errësohen në temën e çelët, që të mbeten të lexueshme.
- Panelin {{ui:Vizatimi}} majtas: skedarin, madhësinë, formatin (për shembull "AutoCAD 2018 (AC1032)"), njësitë, numrin e entiteteve dhe shtresave, numrin e fletëve, dhe vizatimet e lidhura e pajisjet kur ka.
- Listën {{ui:Shtresat}} majtas.
- Djathtas: si lëvizet, vizatimet dhe imazhet e lidhura, dhe **Ende nuk është vizatuar**.

## Lëvizja

:::mouse
| Për | Bëni këtë |
|---|---|
| Lëviz | Tërhiqni me çdo buton të miut |
| Zmadho | Lëvizni rrotën; pika nën tregues mbetet në vend |
| Përshtat | Klikoni dy herë, shtypni {{key:F}}, ose klikoni {{ui:Përshtat}} |
:::

:::mac mouse
Në trackpad, lëvizja me dy gishta **zmadhon**, nuk lëviz. Shtrëngimi me dy gishta zmadhon gjithashtu. Për të lëvizur, klikoni dhe tërhiqni.
:::

:::touch
Tërhiqni me një gisht për të lëvizur. Zmadhimi me shtrëngim nuk është ndërtuar ende për vizatimet: prekni {{ui:Përshtat}} për të parë tërë fletën, dhe përdorni një mi ose trackpad për të zmadhuar.
:::

## Blloqe dinamike

Një bllok dinamik vizatohet siç e tregon vizatimi: çdo bllok i vendosur në gjendjen e dukshmërisë me të cilën u ruajt vizatimi ("Plan" ose "Front", "Single bowl" ose "Double bowl"). Djathtas, **Blloqet dinamike** liston çdo bllok të vendosur në hapësirën e modelit: sa janë vendosur, gjendjet që shfaqin, dhe çdo gjendje që ka blloku. Te {{ui:3D}}, klikoni një bllok të vendosur për të parë **Bllokun dinamik**, **Gjendjen e shfaqur** dhe **Gjendje të tjera** te Vetitë. BimCraft nuk i ndërron gjendjet.

## Ende nuk është vizatuar

Disa lloje objektesh nuk vizatohen në këtë version. Ato numërohen te **Ende nuk është vizatuar** djathtas ("Këto pjesë të vizatimit kalohen për tani, pa u supozuar."), kështu e dini që diçka mungon. Vijat, polivijat, harqet, rrathët, elipset, splines, vijëzimet dhe mbushjet e ngurta, teksti dhe teksti shumërresht, blloqet me atribute, përmasat, udhëheqësit dhe multiudhëheqësit, tabelat, imazhet dhe viewport-et vizatohen. Faqet 3D, rrjetat poliface dhe rrjetat poligonale vizatohen si skajet e tyre të parë nga lart; kaloni te {{ui:3D}} për t'i parë si sipërfaqe.

Një DXF binar nuk hapet: BimCraft e thotë këtë. Ruajeni sërish si DXF ASCII, ose si DWG, nga programi që e ka bërë.

## Gabime të zakonshme

- **Vizatimi duket bosh.** Disa shtresa mund të jenë të fikura ose të ngrira në vetë vizatimin; ato fillojnë pa zgjedhje te {{ui:Shtresat}}. Klikoni {{ui:Të gjitha të ndezura}}. Nëse statusi thotë "*name* është një vizatim bosh: nuk mban asnjë vijë, tekst ose bllok.", nuk ka asgjë brenda.
- **Një fletë shfaq një kornizë bosh.** Fleta mund të mbështetet në vizatime të lidhura. Shih [Gjej vizatimet dhe imazhet e lidhura](topic:dwg-linked-files).
- **Teksti duket pak ndryshe.** BimCraft vizaton tekstin me një shkronjë sans-serif të ngushtë, jo me shkronjat vetjake të vizatimit, kështu teksti mund të jetë pak më i gjerë ose më i ngushtë se në programin që e ka bërë.
- **"*name* nuk mund të lexohet. Mund të jetë dëmtuar, ose të jetë ruajtur në një format që lexuesi nuk e trajton ende."** Kllapa në fund emëron kodin e formatit të skedarit. Ruajeni nga programi që e ka bërë si DWG më të vjetër ose si DXF, dhe provoni sërish.
- **Pritja për matje, vizatim ose redaktim.** BimCraft vetëm shikon vizatime. Klikoni {{ui:Redakto në CadCraft}} për të hapur të njëjtin skedar në aplikacionin e vizatimit CadCraft, që e redakton dhe ruan një kopje si DWG ose DXF. Skedari juaj origjinal nuk ndryshohet, dhe vizatimet e lidhura mbeten në BimCraft. Butoni shfaqet vetëm aty ku CadCraft është i hapur për ju.

## Tjetra

- [Shiko një vizatim DWG ose DXF në 3D](topic:dwg-in-3d)
- [Punoni me shtresat dhe fletët](topic:dwg-layers-sheets)
- [Kontrollo një vizatim në pamjen e shtypjes](topic:print-view)
