---
title: Model nga një skanim
summary: Një udhëzues i shkurtër nga një skanim me lazer deri te muret: hap re pikash pranë një ndërtese të re, rreshtoje me një nivel dhe gjurmo muret e saj në planimetri.
keywords: skanim, skanim me lazer, re pikash, si u ndërtua, ndërtesë ekzistuese, rilevim, gjurmim, skanim në BIM, model nga skanimi, prerje, rreshto, drejto, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Çfarë do të bësh

Vizato një ndërtesë ekzistuese nga skanimi i saj me lazer: muret aty ku i tregon skanimi, në nivelin e duhur, të drejtuara me njëra-tjetrën.

## Hapat

1. **Një ndërtesë për të vizatuar.** {{ui:File}} › {{ui:New building}}, me aq nivele sa ka ndërtesa (mund të shtosh nivele më vonë, shih [Vendi, ndërtesa mbi të dhe nivelet e saj](topic:site-building-and-levels)). {{ui:Draw}} ndizet.
2. **Skanimi.** {{ui:Show}} › {{ui:Point cloud}} dhe zgjidh skedarin (LAS, LAZ, E57, PLY, PCD, PTX ose XYZ: shih [Shfaq një re pikash pranë modelit](topic:point-clouds)). Reja shfaqet në pamjen 3D, dhe planimetria tregon **prerjen** e saj: pikat e skanuara 1200 mm (4 feet) mbi nivel, si pika. Ky është lartësia ku muret, dyert dhe dritaret lexohen më mirë.
3. **Rreshtoje me nivelin.** Hap menynë {{ui:Scan}} të shiritit të modelit dhe kliko {{ui:Align its floor to this level}}: reja lëviz lart ose poshtë derisa dyshemeja që ajo skanoi të qëndrojë mbi nivelin e shfaqur. Kontrollo që prerja tani të presë muret.
4. **Drejto me ndërtesën.** {{ui:Scan}} › {{ui:Turn it square to the building}} e kthen renë që muret në prerjen e saj të shtrihen përgjatë boshteve të planimetrisë, kështu që muret që vizaton me {{key:Shift}} të mbajtur do të rreshtohen me skanimin. Rrotullohet rreth mesit të mureve që gjeti, kështu që pemët ose një mur fqinji i kapur në prerje nuk e largojnë skanimin. Rreshtoje dyshemenë së pari: pastaj prerja pret muret.
5. **Gjurmo muret.** Zgjidh {{ui:Wall}} dhe kliko përgjatë pikave: mjeti ngjitet te pikat e skanuara (shenja e ngjitjes është një romb i vogël) si dhe te muret që ke vizatuar. Një mur vizatohet mbi boshtin e tij qendror, kështu që kliko përgjatë mesit të dy rreshtave të pikave që la muri; jep trashësinë e tij duke zgjedhur së pari llojin e murit. Pastaj shto dyert dhe dritaret aty ku prerja tregon hapësirat.
6. **Kati tjetër.** Zgjidh nivelin sipër në listën e niveleve të planimetrisë: prerja ndjek lartësinë e prerjes së nivelit. Rreshto dyshemenë me atë nivel përsëri vetëm nëse dyshemetë e skanimit nuk janë aty ku janë nivelet e tua.

## Çfarë duhet të shohësh

- Prerja ndryshon kur ndryshon nivelin, dhe një prerje më e trashë ({{ui:Scan}} › {{ui:Slice thickness}}) shfaq më shumë pika aty ku skanimi është i hollë.
- {{ui:Scan}} › {{ui:Undo the alignment}} e kthen renë atje ku ishte vendosur kur u hap. Rreshtimi zhvendos renë vetëm në pamje: nuk ruhet në skedarin IFC, dhe muret që ke vizatuar qëndrojnë në vend. Rreshtimi shkon me renë kur ndryshon {{ui:Place}} ose {{ui:Units}}, ose kur hap një model tjetër.
- {{ui:Scan}} › {{ui:Show the slice on the plan}} fsheh ose shfaq pikat.

:::tip
Skanime të mëdha: planimetria vizaton deri në 60,000 pika të prerjes dhe pamja 3D disa milionë pika të të gjithë renë, të dyja të zgjedhura në mënyrë të barabartë përgjatë skanimit, kështu që një skedar i madh mbetet i shpejtë. Për të gjurmuar në aplikacionin e vizatimit, përdor {{ui:Gjurmo në CadCraft}} te shiriti i renë.
:::
