---
title: Bonisa ifu lamaphoyinti ecaleni kwemodeli
summary: Vula ukuskena ngelaser (LAS, LAZ, E57, PLY, PCD, PTX, PTS noma XYZ) ku-view ye-3D wedwa noma nemodeli ye-IFC, unikeze umbala, usike isilayisi esincane kuso, ulinganise kumaphoyinti walo, bese uwunikeza isofthiwe yokudweba ukuze uwulandele ngemigqa yesakhiwo esakhiwe.
keywords: ifu lamaphoyinti, ukuskena ngelaser, ukuskena, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, njengoba kwakhiwe, as built, ukuhlola, ukuhlanganisa, isilayisi, ukusika kwepulani, snap, linganisa, landela, ukuskena kuya ku-bim
from: d0a3e740
---

## Okuzokwenziwa

Bheka ukuskena ngelaser kwesakhiwo ecaleni kwemodeli yaso: hlola ukuthi okwakhiwe kuyahambisana yini nomklamo, linganisa phakathi kwamaphoyinti askeniwe, bese usika isilayisi esincane ukuze ufunde izindonga, izivalo nezinsika kuso.

## Izinyathelo

1. Vula ifu: {{ui:Ivulekile}} ifayela le-`.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` noma `.xyz`, noma liwishe ekhasini (bheka isihloko sefomethi zamafu amaphoyinti ukuze uthole okuletha ngayinye, nokuthi yini okufanele uyithumele kusofthiwe womkhiqizi womshini). Uma kukhona imodeli evulekile, ifu lijoyina imodeli ku-view ye-3D; ukuvula ifu akuvaleli imodeli noma izinguquko ezingakalondolozwa. Uma kungekho modeli, ifu livula lodwa.
2. Ibha yefu ivela ngaphansi kwethuluzi. Ikhombisa ukuthi amaphoyinti angaki abonakala nokuthi ifayela linawo angaki.
3. Khetha {{ui:Umbala ngokwe}}: imibala yefayela (uma umskena wayigcina), {{ui:Ukuphakama}}, {{ui:Amandla okukhanya}}, {{ui:Iklasi}} (amakilasi e-LiDAR afana nomhlaba, izitshalo nesakhiwo) noma {{ui:Umbala owodwa}}. {{ui:Usayizi}} wenza amaphoyinti abe makhulu noma amancane.
4. Chofoza {{ui:Ipulani}} ngaphansi kwe-{{ui:Ukusika}} ukuze ugcine ibhendi elincane kuphela eli-1.2 m ngaphezulu kwephoyinti eliphansi kakhulu, libonwa phezulu: izindonga, izimbobo zezitofu nezinsika zifunda njengepulani yesakhiwo. {{ui:Phambili}} no-{{ui:Uhlangothi}} zisika amabhendi amile wezinhlelo nezigaba. Hambisa ibhendi nge-{{ui:Ngo}}, bese ushintsha i-{{ui:Ukujiya}} (ngamamitha). {{ui:Valiwe}} ibonisa ifu lonke futhi.
5. Chofoza {{ui:Linganisa}} kwithuluzi. Isikhombi sibamba amaphoyinti afu (ilebula ithi "ifu lamaphoyinti"), ukuze ulinganise kusuka odongeni kuya kudonga kusilayisi, noma kusuka kwisinto semodeli kuya kuskeni. Ikhona yemodeli (ikhoni noma umphetho) eseduze iyanqoba.
6. Nge-{{ui:Linganisa}} › {{ui:Indawo}}, iphoyinti lefu linikeza i-latitude nolongitude yalo kusuka kuhlelo lokugonya lwefu lalo, uma ifayela lisho lona.
7. {{ui:Fihla}} ifihla ifu okwesikhashana; {{ui:Susa}}liyisusa ngokuphelele. {{ui:Bonisa}} › {{ui:Ifu lamaphoyinti}} ifihla noma ibonise ibha.

## Lapho kuya khona ifu

{{ui:Misa}} ebhange ichaza ukuthi ifu lihambisana kanjani nemodeli:

- **Izixhumanisi zemodeli**: izinombolo zefu ziyizinombolo zemodeli (ukuskena okuhlelwe ngezixhumanisi zomklamo).
- **Izixhumanisi zemephu**: imodeli inokuguqulwa kwemephu (IfcMapConversion) nefu lisesistimini efanayo ye-projected: ifu limiswa ngayo. Uma kokubili kubiza izinhlelo ezahlukene, umugqa wesimo uyasho lokho.
- **Igxile kumodeli**: lapho kokubili kungafaki ifu eduze nemodeli, phakathi kwalo kubekwa phakathi kwemodeli, nephoyinti lalo eliphansi kumgangatho wemodeli. Khetha esinye isinqumo ukuze ushintshe.

Uma ifayela lingasho amayunithi alo, i-BimCraft ifunda ngamamitha futhi inikeza i-{{ui:Amayunithi}} ebhandeni.

## Landela imigqa njengoba kwakhiwe

Chofoza {{ui:Landelela ku-CadCraft}} ukuze unikeze ifu uhlelo lokudweba ethebhu entsha. Livula khona ngaphansi komdwebo, lapho isilayisi sepulani nesinamathelo sento sikuvumela ukuthi udwebe izindonga phezu koskeni. Bheka isihloko se-CadCraft mayelana namafu amaphoyinti.

## Amaphoyinti angaki

Ukuskena kungaba namaphoyinti ayizinkulungwane zezigidi. I-BimCraft ifunda iphoyinti ngalinye kanye bese igcina isabelo esilinganayo kuwo ukuze idwebe: {{ui:Bonisa}} ebhange isetha ukuthi mangaki (1, 2, 5 noma 10 izigidi). Amaphoyinti amaningi adinga inkumbulo eyengeziwe nekhadi lezithombe elisheshayo. Izibalo zeklasi ngayinye ze-LiDAR zingazo zonke amaphoyinti afayeleni.

:::note
Amafayela ayafundwa kukhompyutha yakho; akulayishwa muhla. LAS 1.0–1.4 kanye ne-LAZ kuyafundwa (amafayela e-LAZ kuya ku-1 GB, abanjwe enkumbulweni ngenkathi efundwa); amafayela e-E57 kuya kumaphoyinti ayizigidi ezi-6 nama-512 MB njengamanje (ukuskena okukhulu: thumela i-LAS noma i-LAZ); i-PLY, i-PCD ne-PTX ngokugcwele; amafu ombhalo ayi-`x y z`, nemibala (`r g b`) namakholomu wamandla okukhanya uma ekhona.
:::

## Ukuskena okuningi

Ukuskena okwenziwe ngezindawo ezahlukene kungahlanganiswa kube yifreyimu eyodwa, kuthuthukiswe nge-ICP bese kuthunyelwa njenge-LAS noma i-E57 eyodwa: bheka [Hlanganisa ukuskena okuningi kube kunye](topic:register-scans).
