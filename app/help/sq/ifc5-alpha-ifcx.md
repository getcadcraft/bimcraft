---
title: Hap dhe eksporto skedarë IFC5 alpha (IFCX)
summary: Një opsion laboratorik për formatin e skedarit IFC5 alpha (.ifcx): hap një skedar me shtresat e tij, shiko çfarë nuk mundi të kontrollojë leximi, dhe eksporto modelet e hapura. Formati ende po ndryshon, prandaj lexo së pari.
keywords: ifc5, ifcx, alpha, buildingsmart, json, shtresa, skemë, laborator, sasi, qto, eksport, import
from: cffe1669
---

IFC5 alpha (skedari me mbaresën {{ui:.ifcx}}) është formati i skedarit që buildingSMART ende e projekton. Nuk është i përfunduar: skedarët, dhe leximi ynë i tyre, mund të ndryshojnë. Prandaj kjo është një opsion laboratorik, dhe prandaj leximi vjen i pari.

## Ndiz

1. Zgjidh {{ui:Cilësimet}}, pastaj seksionin {{ui:IFC5 alpha (IFCX)}} të skedës BimCraft.
2. Shëno {{ui:IFC5 alpha (IFCX) - formati ende po ndryshon; lexo së pari}}.

Është i fikur si parazgjedhje. Ndërsa është i fikur, një skedar .ifcx refuzohet me një fjali që të drejton këtu. {{ui:Hap IFC5 alpha (.ifcx)…}} dhe butoni i eksportit {{ui:IFC5 alpha}} shfaqen kur është i ndezur.

## Hap

- Zgjidh një skedar .ifcx me {{ui:Hap një skedar ose dosje}} (zëvendëson modelin e hapur, pas pyetjes së zakonshme për ndryshimet), ose
- zgjidh {{ui:Hap IFC5 alpha (.ifcx)…}} dhe përzgjidh disa skedarë bashkë: skedarin, shtresat e tij dhe skedarët e skemës që ai importon. Me një model tashmë të hapur, skedari **shtohet pranë tij**; x te lista e modeleve e heq sërish, që është zhbërja.

Një skedar IFCX liston nyje (një shteg, fëmijët e tij, çfarë trashëgon dhe atributet e tij). Disa skedarë mund të përshkruajnë të njëjtën nyje: një skedar më i vonshëm (një shtresë) mbishkruan atributet e një skedari më të hershëm, dhe një fëmijë null heq një fëmijë. BimCraft i kombinon, pastaj vizaton rezultatin si një model të vogël IFC4: projekt, vend, ndërtesë, katet dhe elementët me emra, klasa, veti, sasi, ngjyra dhe rrjeta.

Asgjë nuk merret nga rrjeti. Skedarët e skemës që importon një skedar (për shembull `ifc@v5a.ifcx`) përdoren vetëm nëse i zgjodhe bashkë me skedarin; përndryshe raporti e thotë këtë, dhe atributet lexohen pa kontroll tipi.

### Raporti

Pas hapjes, një raport liston çfarë gjeti leximi: të dhëna që nuk përputhen me skemën e tyre, skedarë skeme që nuk u dhanë, atribute që nuk kanë kuptim IFC këtu. Atributet pa përkthim **mbahen** në model, nuk hiqen, dhe shkruhen përsëri kur eksportohet.

## Çfarë bëhet çfarë

| Në skedarin IFCX | Në BimCraft |
|---|---|
| Një nyje me një klasë IFC (projekt, vend, ndërtesë, kat, mur …) | Elementi përkatës IFC4; një klasë që ky lexim nuk e njeh bëhet një proxy elementi ndërtese |
| Emri që ka nyja nën prindin e saj | Emri i elementit |
| Atributet me një lloj sasie (Length, Area, Volume, Mass …) | Një grup sasish IFC4 i quajtur `Qto_IFCX` (grupet e sasive IFC4 mbeten grupe IFC4 `Qto_*`) |
| Atribute të tjera vetish | Një grup vetish i quajtur `Pset_IFCX` |
| Atributet e rrjetës dhe të transformimit | Trekëndëshat dhe vendosja e elementit; rrjetat e padukshme nuk vizatohen |
| Ngjyra, opaciteti, materiali, klasifikimi | Stili i sipërfaqes, materiali dhe klasifikimi i elementit |

Njësitë merren si metra, me Z lart: alfa thotë se njësitë do të dokumentohen më vonë.

## Eksporto

Zgjidh {{ui:IFC5 alpha}} te shiriti i veglave, lexo shënimin, pastaj {{ui:Eksporto .ifcx}}. Skedari ka kokën tonë (autor CadCraft, version ifcx_alpha) dhe thotë në vetvete se është formati alfa. Çdo model shkruhet në koordinatat e veta të skedarit, në metra, me emra, klasa, grupe vetish, sasi (si atribute me llojin e tyre), ngjyra dhe trekëndësha. Shtresat dhe trashëgimia shkruhen të sheshuara. Kontrollo skedarin në programin ku e dërgon.

## Kufizime

- Gjeometria e lakuar (kurba, sipërfaqe) nuk lexohet: vetëm rrjetat me trekëndësha.
- Dyert dhe dritaret e futura në një mur vendosen në kat; muri nga i cili erdhën nuk lidhet.
- Emrat e grupeve të sasive IFC4 `Qto_*` mbahen si grupe atributesh tona (`cadcraft::qto::…`); skema standarde alfa ka vetëm disa emra sasish.
- Formati mund të ndryshojë nën ne; një skedar i bërë sot mund të mos lexohet nesër.
