---
title: Trase kanalet, drenazhet, tubat e ujit dhe të ftohësit automatikisht
summary: Në kontrollin e përplasjeve, BimCraft gjen një rrugë rreth modelit të hapur për kanalet, drenazhin me gravitet, ujin e ftohtë dhe të ngrohtë, dhe tubat e ftohësit split ose multi-split, dhe vizaton linjat me fitingjet e tyre në një hap zhbërjeje. Një ndihmë hartimi: madhësitë, pjerrësitë dhe kontrollet vijnë nga tabelat e programit dhe numrat që shkruan ti; asgjë këtu nuk thotë se një projekt përputhet me një kod.
keywords: rrugëzim automatik, autoroute, trase kanale, trase tubash, drenazh, sanitar, gravitet, kolonë, ventilim, sifon, ujë, ujë i ngrohtë, unazë kthimi, rriqarkullim, ftohës, split, multi-split, VRF, gjatësi ekuivalente, komplet dege, wye
from: 5841d513
---

## Çfarë do të bësh

Lër BimCraft të hartojë një rrjet linjash midis lidhësve që tashmë ndodhen në model, rreth mureve dhe trarëve, pastaj kontrollo me numra që shikon.

## Hapat

1. Hap modelin dhe kontrollin e përplasjeve. Nën **Trase kanalet automatikisht** zgjidh një njësi trajtimi ajri dhe terminalet e saj, ose nën **Trase sistemet e tjera automatikisht** zgjidh një sistem.
2. **Drenazhi sanitar me gravitet.** Shkruaj pozicionin e daljes dhe, nëse i ke, pozicionet e kolonës. Shëno **Trase çdo kat njëherësh** për të marrë çdo kat që ka pajisje sanitare: drenazhet e çdo kati takojnë kolonën në nivelin e vet, dhe kolona shkon nga mbi rubinetin më të lartë deri në bazën e saj. Shtyp {{ui:Traso}}.
3. **Sifoni deri te ventilimi.** Paneli liston distancën nga çdo sifon te ventilimi i tij. Shkruaj distancën më të madhe që lejon kodi yt te **Distanca më e madhe nga një sifon te ventilimi i tij**; çdo pajisje mbi të listohet si e pambaruar, me milimetrat mbi kufi. Shëno **Ventilim përmes kolonës** kur pajisjet nuk kanë degë ventilimi të veten: distanca matet atëherë deri te kolona. BimCraft nuk ka një tabelë kodi për këtë: ti shkruan numrin.
4. **Ujë i ftohtë dhe i ngrohtë.** Zgjidh burimin, shkruaj presionin te burimi dhe presionin që të nevojitet te një pajisje. Shëno **Ujë i ngrohtë**, zgjidh lidhjen e nxehtë të ngrohësit, dhe shëno **Unazë kthimi** për ta mbyllur një linjë kthimi te lidhja **hot-return** e ngrohësit, ose te çdo lidhje tjetër që zgjedh (ajo mbaron 150 mm më shkurt, e hapur, që ti ta lidhësh).
5. **Split, multi-split dhe VRF.** Zgjidh njësinë e jashtme, shëno njësitë e brendshme dhe shkruaj kapacitetin e secilës. Shkruaj kufijtë nga të dhënat e prodhuesit tënd. Shkruaj **gjatësinë ekuivalente** të një lakese dhe të një komplet dege (vlerat e prodhuesit) dhe gjatësitë më të gjata dhe totale kontrollohen mbi gjatësitë ekuivalente.
6. Shtyp {{ui:Traso}}. Paneli thotë sa linja vizatoi dhe çfarë nuk mundi të bënte dhe pse. {{ui:Zhbëj}} kthen gjithçka prapa në një hap.

## Çfarë duhet të shohësh

Tuba me lakesa, T dhe reduktorë; drenazhe që bien të paktën me pjerrësinë më të vogël për madhësinë e tyre; degë ventilimi te pajisjet; linja ftohësi si një çift lëngu dhe gazi që kthehet në të njëjtën mënyrë në çdo kthesë, me një komplet dege të shënuar aty ku një degë del nga trungu.

## Mirë për t'uditur

- Aty ku një drenazh takon një drenazh tjetër, modeli vizaton një T. Planimetria i emëron ato vende si kryqëzime wye 45 gradë, që të mund ta ndryshosh fitingun.
- Uji i ngrohtë përdor lidhjen e nxehtë të vetë pajisjes kur familja e saj e ka një, dhe një lidhje 100 mm pranë lidhjes së ftohtë kur nuk e ka.
- Linjat e ftohësit nisin midis dy portave të çdo njësie. Kur dy portat e një njësie janë shumë afër për një lakesë, çifti mbetet i qendërzuar midis tyre.
- Rrjeti i ujit përdor kurbën e kërkesës dhe numrat e fërkimit që shfaqen te llogaritjet; zëvendësoji me ato të kodit tënd përpara se t'u besosh presioneve.
- Shtëpitë e mëdha mund të zgjasin gjysmë minuti ose më shumë, kryesisht për rrjetin e ngrohtë.
- Kjo është një ndihmë hartimi. Një person i kualifikuar kontrollon madhësitë, pjerrësitë, ventilimet dhe presionet sipas kodit që zbatohet.

## Më pas

[Kontrollo përplasjet](topic:clash-check) · [Kontrollo tubat dhe kanalet kundrejt strukturës](topic:mep-against-structure) · [Lidhjet midis tubave dhe pajisjeve](topic:mep-connections)
