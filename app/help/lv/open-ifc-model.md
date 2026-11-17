---
title: Atvērt IFC modeli un apskatīt 3D
summary: Atveriet IFC failu, orbitējiet, panoramējiet un tuviniet, un izmantojiet Pielāgot, Augša, Priekšpuse un Sāns, lai orientētos.
keywords: ifc, 3d, orbitēt, panoramēt, tuvināt, pielāgot, augšējais skats, priekšējais skats, sānu skats, navigēt, skata kubs, kamera
from: 68b460dd
---

## Ko jūs darīsit

Atvērt IFC modeli, pārvietoties pa to 3D un pāriet uz standarta skatiem. Apmēram pieci minūtes.

Vajadzīgs `.ifc` fails. Lielākā daļa BIM programmu to eksportē; Revit tas ir **File > Export > IFC**. Skat. [Iegūt projekta failu 3D caur IFC](topic:rvt-to-ifc).

## Soļi

1. Noklikšķiniet {{ui:Izvēlēties failu}} (vai nolaižamo zonu augšā pa kreisi).
2. Izvēlieties savu `.ifc` failu un apstipriniet.
3. Pagaidiet, līdz statusa rinda beidzas. Pirmoreiz tā rāda "Palaižam IFC dzinēju…", tad "Nolasām modeli…" un "Veidojam ģeometriju: … no … elementiem".
4. Apskatiet modeli: tas atveras trīs ceturtdaļu skatā, pielāgots ekrānam.
5. Noklikšķiniet {{ui:Augša}} rīkjoslā virs modeļa, lai skatītu tieši uz leju.
6. Noklikšķiniet {{ui:Priekšpuse}}, lai skatītu priekšpusi, tad {{ui:Sāns}}, lai skatītu no sāniem.
7. Noklikšķiniet {{ui:Pielāgot}} vai nospiediet {{key:F}}, lai atgrieztos pie visa modeļa trīs ceturtdaļu skata.

## Ko jums vajadzētu redzēt

- Modelis vidū ar plāniem tumšiem malām, kā zīmējumam.
- {{ui:Fails}} panelis pa kreisi: faila nosaukums, izmērs, IFC shēma (piemēram, IFC2X3 vai IFC4), projekta nosaukums, fāze, programma, no kuras tas eksportēts, autors, eksporta datums un elementu un trīsstūru skaits.
- {{ui:Stāvi}} un {{ui:Elementi}} saraksti zem tā.
- Statusa rinda: "Atvērts *faila nosaukums*: *n* elementi *s* s".

## Pārvietošanās

:::mouse
| Lai | Dariet šo |
|---|---|
| Orbitēt | Velciet ar kreiso pogu |
| Panoramēt | Velciet ar labo pogu vai turiet {{key:Shift}} (vai {{key:Mod}}) un velciet ar kreiso pogu |
| Tuvināt | Ritiniet ritentiņu vai velciet ar vidējo pogu |
| Redzēt visu | Nospiediet {{key:F}} vai noklikšķiniet {{ui:Pielāgot}} |
:::

:::mac mouse
Uz skārienpaliktņa: velciet ar vienu pirkstu, lai orbitētu; turiet {{key:Shift}} vai {{key:Mod}} un velciet, lai panoramētu; ritiniet ar diviem pirkstiem vai savelciet, lai tuvinātu. Divu pirkstu klikšķis ir labais klikšķis, un ar to var velkot, lai panoramētu, bet {{key:Shift}} un velkot ir vienkāršāk.
:::

:::touch
| Lai | Dariet šo |
|---|---|
| Orbitēt | Velciet ar vienu pirkstu |
| Tuvināt | Savelciet ar diviem pirkstiem |
| Panoramēt | Pārvietojiet divus pirkstus kopā |
| Redzēt visu | Pieskarieties {{ui:Pielāgot}} |
:::

Orbitēšana vienmēr griežas ap punktu modeļa vidū. Panoramēšana pārvieto šo punktu, tāpēc pēc ilgas panoramēšanas orbitēšana var šķist necentrēta: noklikšķiniet {{ui:Pielāgot}}, lai to atjaunotu.

## Ēnojums, malas vai karkass

Trīs mazas pogas tieši virs skata kuba izvēlas, kā modelis tiek zīmēts: {{ui:Ar ēnojumu}}, {{ui:Ar ēnojumu un malām}} (noklusējums) un {{ui:Karkass}}. Tās ir arī komandas ({{ui:Skats}} izvēlnēs un Pielāgošanas saraksts), tāpēc tām var būt paši taustiņi. {{ui:Plāns}}, {{ui:Sadalīt}} un {{ui:3D}} atrodas rīkjoslas rindā {{ui:Skats}}.

## Biežās kļūdas

- **Gaidāt nosauktus skatus.** BimCraft ir četri fiksēti skati ({{ui:Pielāgot}}, {{ui:Augša}}, {{ui:Priekšpuse}}, {{ui:Sāns}}), skata kubs apakšējā labajā stūrī un brīva orbitēšana. Tas neglabā skatus.
- **Meklējat plānus un griezumus.** Šajā versijā nav 2D plānu vai griezuma kastu. Griezt modeli var ar vienu {{ui:Griezums}} plakni ([Griezt IFC modeli ar griezuma plakni](topic:section-plane)), vai izslēgt stāvus: [Rādīt un paslēpt stāvus, telpas un malas](topic:storeys-and-spaces).
- **Projekta faila atvēršana un gaidīšana 3D.** Projekta fails atveras kā faila kartīte. Vispirms eksportējiet IFC.
- **`.ifczip` atvēršana.** Izsaiņojiet to vai eksportējiet vienkāršu `.ifc`.
- **Ļoti liels modelis padara cilni lēnu vai avārē.** Skat. [Pārlūkprogrammas, ierīces un atmiņa](topic:platforms).

## Tālāk

[Atlasiet elementu un izlasiet tā rekvizītus](topic:inspect-element).
