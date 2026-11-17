---
title: Kopjo, ngjit dhe dyfisho elementët e bibliotekës
summary: Kopjo një element bibliotekë të vendosur dhe ngjite aty ku klikon, në vend pranë origjinalit ose në një model tjetër; kopjo vetitë e çdo elementi tjetër si tekst; zhbëj dhe ribëj.
keywords: kopjo, ngjit, dyfisho, kujtesa e ndërmjetme, ngjit në vend, prit, fshi, përzgjidh të gjitha, zhbëj, ribëj, menyja Redakto, më shumë, element bibliotekë, vendosje, përsërit, grup
from: 6ac15931
---

## Çfarë do të bësh

Shto më shumë kopje të një elementi që ke vendosur tashmë: një tavolinë punë të dytë, një rresht lavamanësh. Ky udhëzues ka të bëjë me **elementët e vendosur të bibliotekës**, elementët që BimCraft ka shkruar në model: një prej tyre mund të ngjitet në çdo model, madje edhe në një skedë tjetër. Muret, dyert dhe çdo element tjetër kopjohen, priten, ngjiten dhe fshihen në të njëjtën mënyrë brenda modelit të tyre: shih [Fshi, prit, kopjo dhe ngjit elementët e ndërtesës](topic:edit-elements).

Komandat janë në shiritin e veglave mbi model: {{ui:Zhbëj}}, {{ui:Ribëj}}, {{ui:Kopjo}}, {{ui:Ngjit}} dhe {{ui:Më shumë}}, një menu me {{ui:Prit}}, {{ui:Kopjo}}, {{ui:Ngjit}}, {{ui:Ngjit në vend}}, {{ui:Dyfisho}}, {{ui:Fshi}}, {{ui:Përzgjidh të gjitha}} dhe {{ui:Mos përzgjidh asnjë}}. Një komandë që nuk mund të veprojë në atë çast shfaqet e çaktivizuar (gri); vendose kursorin mbi të për të lexuar arsyen, ose kliko mbi të dhe rreshti i statusit thotë pse.

## Hapat

1. Hap një model IFC me një element bibliotekë brenda, ose vendose një të parë. Shih [Vendos pajisje dhe mobilje nga biblioteka](topic:place-from-library).
2. Kliko elementin në pamjen 3D. Vetitë e tij shfaqin një kuti **Element bibliotekë**.
3. Kliko {{ui:Kopjo}} ose shtyp {{key:Mod+C}}.
4. Kliko {{ui:Ngjit}} ose shtyp {{key:Mod+V}}. Shiriti i vendosjes hapet dhe një kuti transparente ndjek treguesin, e rrotulluar si origjinali.
5. Shtyp {{key:R}} për ta rrotulluar 90°, {{key:Tab}} për ta lidhur pjesën e pasme me një mur, ose shkruaj X dhe Y te shiriti i vendosjes.
6. Kliko aty ku duhet të shkojë kopja. Çdo klikim vendos një kopje tjetër; shtyp {{key:Esc}} për ta ndalur.
7. Kliko {{ui:Ruaj si IFC}} për të shkarkuar kopjen e ndryshuar të modelit.

## Ngjit në vend

{{ui:Më shumë}}, {{ui:Ngjit në vend}} ose {{key:Mod+Shift+V}} ngjit pa klikim, në të njëjtën X dhe Y dhe të rrotulluar në të njëjtën mënyrë:

- **Në të njëjtin model, në të njëjtin kat**: dy elementë në një vend të vetëm nuk do të ishin të dobishëm, prandaj kopja vendoset menjëherë pranë origjinalit, me një gjerësi elementi plus 100 mm përgjatë gjerësisë së vet të elementit. Ngjit përsëri në vend nga kopja e re për të bërë një rresht.
- **Në një kat tjetër ose në një model tjetër**: saktësisht të njëjtat X, Y dhe rrotullim. BimCraft përdor katin me të njëjtin emër; nëse nuk ka, atë me lartësinë më të afërt. Rreshti i statusit thotë cilin.

## Dyfisho

{{ui:Më shumë}}, {{ui:Dyfisho}} ose {{key:Mod+D}} kopjon elementin e zgjedhur dhe fillon ta ngjisë menjëherë: një hap në vend të dy.

## Në një model tjetër ose në një skedë tjetër

Ajo që kopjon mbahet në këtë shfletues, kështu që mund të hapësh një model tjetër IFC, ose BimCraft në një skedë tjetër, dhe të ngjitësh atje. Modeli tjetër ka nevojë për vetë elementin e bibliotekës: BimCraft e ka atë kur elementi u vendos, u zëvendësua ose u përditësua në këtë skedë. Një element i vendosur në një sesion të mëparshëm mund të ngjitet përsëri vetëm në modelin e vet; në një model tjetër, vendose nga skeda {{ui:Bibliotekë}}.

## Çfarë duhet të shohësh

- Kopja në model, e zgjedhur, me të njëjtin element bibliotekë, licencë, të dhënat e pajisjes, sasinë dhe shënimin si origjinali, dhe **numrin e ardhshëm të lirë** të elementit. Ndrysho numrin te Vetitë, nën `CadCraft_Placement`.
- "Vendosur: *element* (element *n*)" në listën e ndryshimeve. {{key:Mod+Z}} e kthen mbrapsht; {{key:Mod+Y}} e vendos përsëri.

## Të dobishme

- Kopjet ndajnë llojin e origjinalit, kështu që të gjitha përdorin një grup gjeometrie, ashtu si vendosja e të njëjtit element dy herë.
- {{ui:Zhbëj}} dhe {{ui:Ribëj}} mbulojnë çdo ndryshim: vlerat e redaktuara, vendosjet, ngjitjet, zëvendësimet dhe përditësimet. Ribëj e vendos përsëri një vendosje në të njëjtin vend; një ndryshim i ri pastron atë që mund të ribëhej.
- Në pamjen 2D të një vizatimi nuk ka asgjë për të zgjedhur, pra nuk ka asgjë për të kopjuar. Përdor {{ui:Redakto në CadCraft}} për të ndryshuar vizatimin, kur shfaqet.

## Gabimet e zakonshme

- **{{ui:Ngjit}} thotë se elementët erdhën nga një model tjetër.** Gjëja e fundit që kopjove ishte një element ndërtese, ose disa elementë: ata ngjiten vetëm në modelin e tyre. Zgjidh një element bibliotekë të vendosur dhe kopjoje.
- **{{ui:Ngjit}} thotë se kopja erdhi nga një model tjetër pa elementin e vet të bibliotekës.** Vendose elementin nga skeda {{ui:Bibliotekë}} një herë në këtë skedë, pastaj kopjoje dhe ngjite.
- **{{key:Mod+C}} kopjon tekstin e faqes.** Teksti ishte zgjedhur në faqe. Kliko së pari modelin.

## Lidhur me

- [Tastet dhe miu](topic:keyboard#edit)
- [Cilësimet e BimCraft](topic:settings)
