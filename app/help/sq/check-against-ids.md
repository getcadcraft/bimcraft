---
title: Kontrollo një model sipas IDS-së së klientit
summary: Ngarkoni skedarin .ids që ju është dhënë dhe shihni në Problemet çdo element që nuk e plotëson, përpara se të dorëzoni IFC-në.
keywords: ids, specifikim i dorëzimit të informacionit, buildingsmart, kërkesa, dorëzim, kontroll, validim, qa, eir, bep, veti, klasifikim, material, prokurim
from: 7b960222
---

## Çfarë do të bëni

IDS (Information Delivery Specification, një standard i buildingSMART) është lista e asaj që duhet të përmbajë një IFC: cilat klasa, cilat veti me cilat vlera, klasifikime, materiale, ku duhet të ndodhen gjërat. Klientët dhe prokurimi publik e dërgojnë një të tillë bashkë me punën. BimCraft kontrollon modelin IFC të hapur sipas tij dhe liston çdo element që nuk arrin kërkesat.

## Hapat

1. Hapni një model IFC.
2. Hapni {{ui:Check against an IDS}} në panelin e majtë, nën {{ui:Model checks}}, ose zgjidhni {{ui:Check against IDS…}} nga menuja, sipas stilit të menysë që përdorni.
3. Klikoni {{ui:Load an .ids file…}} dhe zgjidhni skedarin. Asgjë nuk ngarkohet në internet.
4. Lexoni rezultatin: çdo specifikim me {{ui:Pass}} ose {{ui:Fail}} dhe sa elemente i përket.
5. Hapni Problemet ({{key:Ctrl+Shift+M}}) dhe klikoni një dështim për të zgjedhur elementin dhe për t'u zmadhuar tek ai.

## Çfarë duhet të shihni

- Një paralajmërim për çdo element dhe kërkesë që nuk plotëson, me emrin e specifikimit, atë që kërkon IDS-ja dhe atë që ka elementi.
- Një specifikim i kërkuar që asnjë gjë në model nuk e përputh është një paralajmërim i veçantë.
- Raporti i kontrollit (në Problemet) fillon me IDS-në: titullin, versionin, autorin dhe numrat e secilit specifikim: të zbatueshëm, të kaluar dhe të dështuar.

## Gjëra të dobishme

- IFC ruan vetëm një referencë te IDS-ja (emrin, titullin, versionin dhe një hash), jo vetë IDS-në: IDS-ja e klientit mund të jetë konfidenciale, dhe IFC shkon te njerëz të tjerë. IDS-ja mbetet në këtë shfletues pranë modelit, kështu që kur hapni përsëri IFC-në e ruajtur këtu, ajo kontrollohet sërish. Ngarkimi ose harrimi i IDS-së është një hap që mund ta zhbëni.
- Nëse hapet në një kompjuter tjetër ose në një shfletues tjetër, Problemet shfaq një shënim që IDS-ja nuk u gjet: ngarkojeni përsëri për ta kontrolluar sërish.
- Për të dërguar IDS-në bashkë me IFC-në, aktivizoni {{ui:Keep the IDS inside the IFC}} te Cilësimet, te skeda BimCraft, përpara se ta ngarkoni.
- Çdo ndryshim, zhbërje dhe ribërje kontrollohet sërish pak më vonë.
- Vlerat krahasohen sipas mënyrës së IDS-së: teksti saktësisht (kanë rëndësi shkronjat e mëdha), numrat në njësi SI me një toleranc të vogël (gjatësitë në metra, kështu që një model në milimetra konvertohet së pari).
- Një specifikim i shkruar për një version tjetër IFC (p.sh. IFC2X3 kur modeli është IFC4) kontrollohet edhe ai; rezultati e thotë këtë.
- Nëse skedari IDS ka gabime që do t'i shënonte një audit i IDS-së, dialogu i liston; specifikimet ku ndodhen dështojnë.
- Mund të pranoni një dështim me një arsye, si çdo problem. Mbetet i pranuar ndërsa vlerat e elementit mbeten të njëjta.

- Shablloni në IDS lexohet si e tërë vlera. Një `^` në fillim dhe një `$` në fund merren gjithashtu si "e tërë vlera", siç e kuptojnë shumicën e skedarëve IDS.

## Më pas

- [Kontrollo një model për problemet e zakonshme](topic:model-checks)
- [Ndrysho një mur ose derë](topic:change-a-wall-or-door)
