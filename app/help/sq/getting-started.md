---
title: Fillimi me BimCraft
summary: Çfarë bën BimCraft sot, si të hapni modelin tuaj të parë, ta shikoni në 3D, të ndryshoni një vlerë dhe të ruani një kopje.
keywords: fillimi, nisja e parë, hap, ifc, rvt, dwg, udhëzues i shpejtë, hyrje, shikues, bim
from: fc2dea19
---

BimCraft është aplikacioni i modelit të ndërtesës i familjes CadCraft. Në këtë version **hap, lexon dhe inspekton** skedarët e ndërtesave, dhe **redakton të dhënat në modelet IFC**. Ende nuk vizaton dhe nuk modelon elemente të reja. Mendojeni si një shikues dhe kontrollues modelesh që ju lejon edhe të korrigjoni emrat, etiketat dhe vlerat e vetive në një skedar IFC.

Çfarë hap:

| Skedari | Çfarë merrni |
|---|---|
| IFC (`.ifc`) | Modeli i plotë në 3D: rrotullim, katet, vetitë e elementeve dhe redaktim i emrave dhe vlerave të vetive |
| Skedarë projekti dhe familjesh (`.rvt`, `.rfa`, `.rte`, `.rft`) | Një kartelë skedari: versioni në të cilin u ruajt, informacioni i projektit, imazhi i pamjes paraprake dhe skedarët e lidhur. Pa 3D. |
| DWG dhe DXF | Vizatimi në 2D: hapësira e modelit dhe çdo fletë, shtresat, vizatimet e lidhura, pamja e printimit, dhe një tabelë pajisjesh për vizatimet e etiketuara të shërbimit të ushqimit |
| Një dosje projekti | Një raport i çdo modeli në dosje: kopjet rezervë, lidhjet, kopjet e dëmtuara dhe një sugjerim për skedarin nga i cili duhet nisur |

Gjithçka ndodh në shfletuesin tuaj, në kompjuterin tuaj. **Asgjë nuk ngarkohet.** Shih [Skedarët që BimCraft hap dhe ruan](topic:files) për detajet.

## Hapni BimCraft

1. Hapeni BimCraft në një shfletues të përditësuar. Chrome, Edge, Firefox dhe Safari funksionojnë të gjithë; [Shfletuesit, pajisjet dhe memoria](topic:platforms) liston dallimet.
2. Prisni ekranin bosh që thotë "Hap një model ndërtese."

:::note
BimCraft punon në shfletues, dhe në desktop brenda CadCraft Studio, me aplikacionet e tjera. Ruajtja në cloud nuk është e disponueshme ende: hapni skedarë nga kompjuteri juaj dhe ruani kopjet përsëri aty.
:::

## Hapni modelin tuaj të parë

Mënyra më e shpejtë për të parë çfarë bën BimCraft është një skedar IFC.

1. Klikoni {{ui:Choose a file}} në mes të ekranit.
2. Zgjidhni një skedar `.ifc` në {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} dhe konfirmoni.
3. Prisni derisa rreshti i statusit në fund të ekranit të thotë "Po nis motorin IFC…", pastaj "Po ndërtohet gjeometria".

Duhet të shihni modelin në 3D në mes, një panel {{ui:File}} dhe një listë {{ui:Storeys}} në të majtë, dhe një panel {{ui:Properties}} bosh në të djathtë. Rreshti i statusit përfundon me "Hapur" dhe numrin e elementeve.

:::tip
Mund të tërhiqni gjithashtu një skedar nga {{pick:mac=Finder|windows=File Explorer|linux=menaxheri juaj i skedarëve}} direkt mbi faqe. Ekrani shfaq "Lësho për të hapur" ndërsa tërhiqni.
:::

:::offline
Motori IFC ngarkohet nga faqja herën e parë që hapni një model IFC, përveç nëse BimCraft është ruajtur për përdorim jashtë linje. Vizatimet DWG dhe DXF, skedarët e projektit dhe dosjet nuk kanë nevojë për asgjë shtesë: lexuesit e tyre janë pjesë e aplikacionit. Nëse butoni i shiritit të aplikacionit thotë {{ui:Offline ready}}, gjithçka hapet jashtë linje. Nëse jo, modelet IFC nuk hapen derisa të rilidheni, përveç nëse një i tillë është hapur tashmë në këtë skedë. Shih [Në linjë dhe jashtë linje](topic:online-offline).
:::

:::online
Po shkoni diku pa lidhje? Klikoni {{ui:Save for offline}} në shiritin e aplikacionit dhe prisni {{ui:Offline ready}}. Kopja e ruajtur (rreth 11 MB) përfshin motorin IFC. Shih [Puna jashtë linje](common:offline).
:::

## Shikoni rreth

:::mouse
1. Tërhiqeni me butonin e majtë të mausit për të rrotulluar rreth modelit.
2. Lëvizni rrotën e mausit për të zmadhuar.
3. Tërhiqeni me butonin e djathtë të mausit për të lëvizur pamjen. Në trackpad të Mac, mbani {{key:Shift}} dhe tërhiqeni.
4. Shtypni {{key:F}} ose klikoni {{ui:Fit}} për ta parë përsëri gjithë modelin.
:::

:::touch
1. Tërhiqni me një gisht për të rrotulluar.
2. Shtrëngoni me dy gishta për të zmadhuar, dhe lëvizni dy gishtat bashkë për të lëvizur pamjen.
3. Prekni {{ui:Fit}} për ta parë përsëri gjithë modelin.
:::

## Bëni një gjë reale: korrigjoni një etiketë

1. Klikoni një mur, derë ose çdo element tjetër në model. Ai bëhet blu, dhe vetitë e tij shfaqen në të djathtë.
2. Te paneli {{ui:Properties}}, klikoni vlerën pranë **Etiketë**.
3. Shkruani etiketën e re dhe shtypni {{key:Enter}}.
4. Shihni seksionin {{ui:Changes}} që u hap në të majtë: ndryshimi juaj listohet me vlerën e vjetër dhe të re.

## Ruani një kopje

1. Klikoni {{ui:Save as IFC}} në seksionin {{ui:Changes}}, ose shtypni {{key:Mod+S}}.
2. Gjeni skedarin e ri në dosjen e shkarkimeve. Emërohet sipas origjinalit me " (edited)" të shtuar, për shembull `Klinika (edited).ifc`.

Skedari juaj origjinal nuk ndryshohet kurrë. [Ndryshoni vetitë IFC dhe ruani një kopje të ndryshuar](topic:edit-ifc-properties) shpjegon redaktimin në detaje.

## Ku të shkoni më pas

- [Ekrani i BimCraft](topic:workspace): çdo panel sipas emrit.
- [Nga programet e tjera BIM dhe të vizatimit](topic:coming-from): çfarë ndihet ndryshe nëse jeni mësuar me Revit.
- [Hap një dosje të plotë projekti](topic:open-project-folder): i thoni BimCraft një dosjeje projekti dhe e lini të rregullojë skedarët.
- [Shiko një vizatim DWG ose DXF](topic:view-dwg): fletët, shtresat dhe pamja e printimit.
