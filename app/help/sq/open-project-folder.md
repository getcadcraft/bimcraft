---
title: Hap një dosje të plotë projekti
summary: Drejto BimCraft te një dosje projekti për të parë njëkohësisht çdo model, kopjet e tij rezervë dhe lidhjet e tyre, dhe lëre kutinë Nisu këtu të sugjerojë cilin skedar të punosh.
keywords: dosje, direktori, dosje projekti, disk rrjeti, server, nisu këtu, cili skedar, kopje rezervë, lidhje, xref, dosjet e fundit, zvarrit dosjen
from: 16fbdce2
---

## Çfarë do të bësh

Hap një dosje të plotë projekti, si ajo që të dorëzuan për një punë, dhe lëre BimCraft ta rregullojë: çfarë modelesh ka, cilat kopje janë kopje rezervë, çfarë lidhet me çfarë, cilat skedarë janë të dëmtuar dhe cili skedar ndoshta dëshiron ta hapësh.

Lexohen vetëm disa kilobajt që çdo kartelë modeli i nevojiten, kështu që një dosje në disk rrjeti ose në një dosje cloud të sinkronizuar është në rregull.

## Hapat

:::chromium
1. Kliko {{ui:Hap një dosje}} në të majtë (ose në mes të ekranit bosh).
2. Zgjidh dosjen e projektit te dritarja që hapet dhe kliko **Përzgjidh** (ose **Ngarko** ose **Hap**, varësisht nga sistemi yt).
3. Kliko **Shiko skedarët** kur shfletuesi pyet "Let site view files?". Kjo vetëm e lejon skedën të lexojë dosjen; asgjë nuk ngarkohet.
4. Prit ndërsa rreshti i statusit numëron: "Listing the folder: … files", pastaj "Checking Revit files: … of …".
:::

:::firefox
1. Kliko {{ui:Hap një dosje}} në të majtë (ose në mes të ekranit bosh).
2. Zgjidh dosjen e projektit te dritarja që hapet dhe konfirmo. Firefox mund të kërkojë konfirmim që faqja mund të lexojë skedarët e dosjes; ata qëndrojnë në kompjuterin tënd.
3. Prit ndërsa rreshti i statusit thotë "Reading the folder: … files", pastaj "Checking Revit files: … of …".
:::

:::safari
1. Kliko {{ui:Hap një dosje}} në të majtë (ose në mes të ekranit bosh).
2. Zgjidh dosjen e projektit te dritarja që hapet dhe kliko **Ngarko**. Pavarësisht fjalës, asgjë nuk del nga Mac-u yt: skedarët vetëm i jepen skedës.
3. Prit ndërsa rreshti i statusit thotë "Reading the folder: … files", pastaj "Checking Revit files: … of …".
:::

Mund të **zvarritësh dosjen** nga {{pick:mac=Finder|windows=Eksploruesi i skedarëve|linux=menaxheri yt i skedarëve}} mbi faqe. Një dosje e zvarritur hapet pa asnjë kërkesë leje në çdo shfletues.

## Çfarë duhet të shohësh

Raporti i dosjes mbush mesin:

- Emrin e dosjes, numrin e modeleve, vizatimeve CAD, modeleve IFC dhe skedarëve, dhe madhësinë totale.
- Shënime të kuqe ose kafe-portokalli nëse ndonjë skedar është i paplotë ose ndonjë skedar i lidhur mungon në dosje.
- Kutinë {{ui:Nisu këtu}}: skedarin që BimCraft sugjeron ta hapësh, me arsyet.
- **Modelet**: një rresht për model, me kopjet e tij rezervë të grupuara nën të.
- **Skedarët e lidhur dhe të referencuar**, **Modelet IFC**, **Vizatimet CAD** dhe **Të lëna mënjanë**, kur dosja ka ndonjë.

Në të majtë, paneli {{ui:Dosja}} e përmbledh; **Problemet** thotë "Asnjë" kur çdo kopje është e shëndetshme.

## Përdor kutinë Nisu këtu

Kutia emëron një skedar dhe thotë pse, për shembull:

- "Puna më e fundit e ruajtur në këtë dosje (3 mars 2025)."
- "*Consultant.rvt* është lidhur në modele të tjera, prandaj është sfond, jo skedari për t'u redaktuar."
- "*Tower.rvt* duket zgjedhja e qartë, por është i dëmtuar; kopja e tij e fundit e mirë është nga …"
- "Ky është një model qendror: në Revit, hape me "Create New Local" dhe punoje në kopjen lokale."

1. Lexo arsyet.
2. Kliko {{ui:Hap kartelën e tij}} për të lexuar kartelën e atij skedari, ose {{ui:Shfaqe në listë}} për të gjetur rreshtin e tij te **Modelet**.
3. Kontrollo me atë që e punoi për herë të fundit projektin para se ta përdorësh. Kutia e thotë edhe vetë: është një hamendësim i mirë nga emrat, datat dhe lidhjet.

## Hap skedarë nga raporti

1. Kliko emrin e një modeli për të hapur kartelën e tij. Kartela kontrollon çdo lidhje me dosjen.
2. Kliko {{ui:Kthehu te}} dhe emrin e dosjes në krye të kartelës (ose {{ui:Kthehu te dosja}} në të majtë) për t'u kthyer.
3. Kliko çdo skedar IFC nën **Modelet IFC** për ta hapur në 3D.
4. Kliko çdo DWG ose DXF nën **Vizatimet CAD** për ta hapur në 2D. Vizatimet e lidhura dhe figurat e tij gjenden automatikisht në dosje.

## Rihap një dosje më vonë

:::chromium
Dosjet që hape me {{ui:Hap një dosje}} ose duke i zvarritur listohen nën {{ui:Dosjet e fundit}} në të majtë. Kliko {{ui:Rihap}} dhe emrin e dosjes për ta hapur sërish pa e zgjedhur. Pas një rinisjeje të shfletuesit, Chrome ose Edge pyet edhe një herë; zgjidh "Lejo në çdo vizitë" për ta ndaluar së pyeturi. Lista mbahet vetëm në këtë shfletues, nuk dërgohet kurrë askund. Kliko × për të harruar një dosje.
:::

:::firefox safari
Ky shfletues nuk mund t'i mbajë mend dosjet mes vizitave. Zgjidhe dosjen sërish me {{ui:Hap një dosje}}, ose zvarrite.
:::

## Gabimet e zakonshme

- **Zgjedhja e një dosjeje shumë të madhe.** Mbi 20,000 skedarë: "Kjo dosje ka më shumë se 20,000 skedarë. Zgjidh një dosje më të vogël, si një projekt." Zgjidh dosjen e projektit, jo diskun e tërë.
- **Zgjedhja e prindit të disa projekteve.** Kutia Nisu këtu atëherë zgjedh midis projekteve. Zgjidh një projekt.
- **Dosjet e vetë Revit duken të injoruara.** Dosjet `*_backup`, `*_log` dhe `Revit_temp` janë mirëmbajtje dhe listohen nën **Të lëna mënjanë**, jo lexohen.
- **Pritja që një model të hapet në 3D nga kartela e tij.** Një skedar projekti është vetëm një kartelë. Hap eksportimin e tij IFC.
- **Telefonat dhe tabletët.** Shumë shfletues mobilë nuk mund të zgjedhin dosje fare. Përdor një kompjuter.

Shih [Kontrollo një dosje për kopje të dëmtuara, lidhje të munguara dhe mbetje](topic:check-folder-health) dhe [Raporti i dosjes: rolet, statuset dhe lidhjet](topic:folder-roles).
