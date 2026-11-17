---
title: Hvad BimCraft læser fra hvert format
summary: Præcis hvad BimCraft læser fra IFC-, projekt- og familyfiler, DWG og DXF, og hvad det lader være.
keywords: formater, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versioner, kompatibilitet, hvad der læses
from: 9b8dfb4f
---

## IFC

| Læses | Detaljer |
|---|---|
| Geometri | Hvert element med en form, farvet som filen siger. Rum og zoner tegnes gennemsigtige og skjult fra start |
| Etager | Bygningsetager i højdeorden, og hvilke elementer der står på hver. Elementer uden etage grupperes som "Ikke på en etage" |
| Elementtællinger | Hvor mange elementer af hver slags (vægge, døre, dæk …), vist i {{ui:Elements}} |
| Projektoplysninger | Projektnavn, langt navn og fase; skema; det eksporterende program, forfatter og eksportdato fra filhovedet |
| Elementdata | Navn, type, objekttype, mærkning, beskrivelse, GlobalId; hvert egenskabssæt og mængdesæt på elementet og på dets type |

Redigerbart: navn, objekttype, mærkning, beskrivelse og enkelte egenskabsværdier. Gemmes som en ny IFC-fil. Skemaerne IFC2X3, IFC4 og IFC4X3 åbnes, læst af BimCraft's egen IFC-motor. Alt den ikke kan tegne endnu, listes under **Ikke tegnet endnu** i panelet {{ui:File}}. Modellen flyttes til origo når den åbnes, så en model placeret langt fra den vises alligevel midt på skærmen. `.ifczip` og `.ifcxml` åbnes ikke.

## Projekt- og familyfiler

`.rvt`-projekter, `.rte`-projektskabeloner, `.rfa`-families og `.rft`-familieskabeloner.

| Læses | Detaljer |
|---|---|
| Filinformation | Udgave og build, delt arbejde, central model-sti, sidst gemt sti, brugernavn, landeindstilling, dokument-GUID |
| Projektoplysninger | Projektets egne felter (navn, nummer, bygherre, adresse, status …), uden standardværdier for nye projekter |
| Familieoplysninger | Familienavn, kategori, udgave, sidste opdatering, og dens parametre efter gruppe |
| Links | Listen over tilknyttede modeller, CAD-links, billeder og nøgletabeller filen peger på |
| Forhåndsvisningsbillede | Miniaturen gemt i filen |

Ikke læst: 3D-modellen, elementer, visninger, ark og lister. De er gemt i et udokumenteret format. BimCraft læser kun et par titals kilobyte fra hver fil, så filstørrelsen betyder næsten ikke noget.

## .pln-, .pla-, .tpl- og .bpn-projektfiler

Endnu ikke læst: BimCraft siger det, når du åbner en. Eksportér IFC for modellen og DWG for tegningerne; se [Åbn .pln- og .pla-projektfiler](topic:pln-project-files).

## DWG og DXF

| Læses | Detaljer |
|---|---|
| Områder | Modelrum og hvert ark (layout), i fanernes orden |
| Viewporte | Hvert arks viewporte, med deres målestok, drejning og frosne lag |
| Lag | Navn, farve, til/fra, frosset, udskrivningsflag og linjetykkelse |
| Objekter | Linjer, polylinjer, buer, cirkler, ellipser, splines, skraveringer og legemer, tekst og flerlinjet tekst, blokke og attributter, målsætninger, henvisninger og flere henvisninger, tabeller, punkter, billeder |
| Eksterne tegninger | Tegnet der hvor de er indsat, når deres filer findes |
| Billeder | Tegnet fra billedfilerne når de findes (PNG, JPEG, GIF, BMP, WebP; ikke TIFF) |
| Udstyrsmærkninger | Serveringsmærkninger (`KCL-ITEM`-attributter), til udstyrslisten |

Alt andet tælles under **Ikke tegnet endnu**, og gættes aldrig. DWG-formater fra AutoCAD 2000 til 2018 er dem der er kontrolleret. R13- og R14-filer accepteres også, men ingen var i testsættet, og ældre DWG'er åbner ikke. Panelet {{ui:Drawing}} viser formatkoden (fx AC1032). DXF-filer i alle versioner åbnes, også R12. Begge læses af BimCraft's egne læsere, i denne fane. Intet gemmes tilbage til DWG eller DXF.

## I en mappe

| Slags | Udvidelser | I rapporten |
|---|---|---|
| Modeller | `.rvt` `.rfa` `.rte` `.rft` | Grupperet med nummererede sikkerhedskopier, sundhedstjekket, kort læst, links kontrolleret |
| IFC | `.ifc` | Listet, åbnes i 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listet med de modeller der linker dem. DWG og DXF åbnes i 2D, DGN gør ikke |
| Rester | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listet under **Lagt til side** |
| Vedligeholdelsesmapper | `*_backup`, `*_log`, `Revit_temp`, skjulte mapper | Listet under **Lagt til side**, ikke læst |

Se [Mappe-rapport: roller, statusser og links](topic:folder-roles).
