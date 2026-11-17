---
title: Sistemet me perde: mure xhami në rrjetë, me shtylla ndarëse
summary: Vizato një sistem perde si një mur ose vendose mbi një sipërfaqe, pastaj cakto vijat e rrjetës dhe shtyllat ndarëse. Ruhet si IfcCurtainWall me panelet dhe shtyllat e veta.
keywords: sistem perde, mur perde, rrjetë perde, shtyllë ndarëse, xhami, vitrinë, mur xhami, panel, panel xhami, sipas sipërfaqes, sipërfaqe, masë, vijë rrjete, distancë, profil, traversë, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Çfarë do të bësh

Të bësh një mur xhami me panele midis shtyllave ndarëse, të ndryshosh vendin e vijave të rrjetës dhe të zgjedhësh cilat vija mbajnë një shtyllë ndarëse.

## Hapat

1. Ndiz **Vizato** dhe hap menunë **Ndërtim** (në një paraqitje me shirit: skeda Arkitekturë).
2. Zgjidh **Sistem perde**. Në rreshtin e vet cakto majën (kati mbi të, ose një lartësi), një vijë çdo sa shumë përgjatë saj, një vijë çdo sa shumë lart (lëre bosh për asnjë), nëse merr shtylla ndarëse, dhe profilin e shtyllës ndarëse.
3. Kliko aty ku fillon dhe aty ku mbaron, si kur vizaton një mur. Shift e mban të drejtë.
4. Për ta ndryshuar rrjetën zgjidh **Rrjeta e perdes** dhe kliko sistemin:
   - **Shto një vijë**: një vijë vertikale vendoset aty ku klikon. Për një vijë niveli shkruaj fillimisht lartësinë e saj te **Në**.
   - **Zhvendos një vijë**: kliko vijën, pastaj aty ku shkon.
   - **Hiq një vijë**: kliko vijën.
   - **Vendos sipas distancës**: shkruaj distancën te **Çdo**, pastaj kliko sistemin.
5. Për të ndryshuar shtyllat ndarëse zgjidh **Shtyllë ndarëse**, zgjidh mbi çfarë vepron (vijën vertikale që klikon, vijën e nivelit në një lartësi, kufirin, ose çdo vijë), zgjidh **Vendos shtyllat ndarëse** ose **Hiq shtyllat ndarëse** dhe një profil, pastaj kliko sistemin.
6. Zgjidh një sistem për ta parë në tërësi te **Vetitë**: çdo vijë rrjete me vendin e vet, një shenjë për shtyllën e saj ndarëse dhe një buton për ta hequr; distancën; kufirin; profilin; trashësinë e panelit.

## Sipas sipërfaqes

**Sipas sipërfaqes** krijon një sistem perde mbi një sipërfaqe të sheshtë që klikon në pamjen 3D. Rreshti i tij ka të njëjtat cilësime rrjete dhe shtyllash ndarëse.

- Funksionon mbi çdo sipërfaqe të sheshtë të çdo elementi që tregon pamja 3D: një masë, një mur, një dysheme, një plan çatie, një kolonë, një element i vendosur. Sipërfaqja mund të jetë vertikale, e pjerrët ose horizontale.
- Sistemi merr konturin e sipërfaqes. Një ballë ose një formë tjetër e çuditshme pret panelet dhe shtyllat ndarëse sipas saj.
- Mund të bëjë një **mur** në vend, përgjatë bazës së një sipërfaqeje vertikale dhe aq i lartë sa sipërfaqja. Një mur këtu qëndron gjithmonë vertikal, kështu që një sipërfaqe e pjerrët ose horizontale nuk mund të marrë një të tillë.
- Nuk bën çati. Një çati në BimCraft llogaritet nga kontura e një niveli dhe një pjerrësi, jo nga një sipërfaqe e vetme.
- Një sipërfaqe e lakuar është shumë sipërfaqe të vogla të sheshta: një klikim merr një prej tyre.
- Një sipërfaqe me hapje brenda: sistemi mbulon konturin e jashtëm të sipërfaqes.

## Si matet

- **Sipërfaqja bruto** është kontura e sistemit.
- **Sipërfaqja e xhamit** është panelet siç janë bërë: çdo panel humbet gjysmë gjerësie shtyllë nga një anë me një shtyllë rrjete dhe një gjerësi të plotë te një shtyllë kufiri.
- Një shtyllë vertikale kalon nga kufi në kufi. Një shtyllë horizontale ndalon te çdo shtyllë vertikale dhe te kufiri. Shtyllat e kufirit ndodhen brenda konturit; aty ku takohen dy, ajo më vertikalja kalon. Bashkimet priten drejt, jo me kënd.
- **Tabela** ka një listë **Sistemet e perdeve** me këto numra, sapo modeli ka një.

## Në skedarin IFC

Një IfcCurtainWall në katin e vet, i përbërë nga një IfcPlate (panel perde) për çdo panel dhe një IfcMember (shtyllë ndarëse) për çdo copë shtylle, secili me formën, materialin dhe sasitë bazë të veta.

## Të dobishme

- Çdo madhësi bëhet siç kërkon. Vetëm një kontur pa sipërfaqe refuzohet, sepse nuk ka çfarë të bëhet.
- Një sistem i vizatuar si mur mban lartësinë me të cilën u vizatua. Nëse zhvendos një nivel më vonë, cakto sërish lartësinë te Vetitë.
- Veglia Zhvendos nuk zhvendos ende një sistem perde. Fshije dhe vizatoje përsëri, ose ndrysho rrjetën aty ku është.
- {{ui:Zhbëj}} kthen mbrapsht çdo hap: të gjithë sistemin, një ndryshim rrjete, një ndryshim shtyllash ndarëse.
