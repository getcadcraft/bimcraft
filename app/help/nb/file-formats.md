---
title: Hva BimCraft leser fra hvert format
summary: Nøyaktig hva BimCraft leser fra IFC-, prosjekt- og familiefiler, DWG og DXF, og hva det lar være.
keywords: formater, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versjoner, kompatibilitet, hva som leses
from: 9b8dfb4f
---

## IFC

| Leses | Detaljer |
|---|---|
| Geometri | Alle elementer med en form, farget slik filen sier. Rom og områder tegnes gjennomsiktige og skjult i utgangspunktet |
| Etasjer | Byggets etasjer i høyderekkefølge, og hvilke elementer som står på hver. Elementer uten etasje samles under «Ikke på en etasje» |
| Antall elementer | Hvor mange elementer av hver type (vegger, dører, dekker …), vist i {{ui:Elementer}} |
| Prosjektopplysninger | Prosjektnavn, langt navn og fase; skjema; eksportprogrammet, forfatter og eksportdato fra filhodet |
| Elementdata | Navn, type, objekttype, merking, beskrivelse, GlobalId; alle egenskapssett og mengdesett på elementet og på typen |

Redigerbart: navn, objekttype, merking, beskrivelse og enkeltverdier for egenskaper. Lagres som en ny IFC-fil. Skjemaene IFC2X3, IFC4 og IFC4X3 åpnes, og leses av BimCrafts egen IFC-motor; alt den ikke kan tegne ennå, listes under **Ikke tegnet ennå** i panelet {{ui:Fil}}. Modellen flyttes til origo når den åpnes, så en modell som ligger langt unna, vises likevel midt på skjermen. `.ifczip` og `.ifcxml` åpnes ikke.

## Prosjekt- og familiefiler

`.rvt`-prosjekter, `.rte`-prosjektmaler, `.rfa`-familier og `.rft`-familiemaler.

| Leses | Detaljer |
|---|---|
| Filinformasjon | Utgave og bygg, deling av arbeid, sti til sentralmodellen, sist lagret sti, brukernavn, språk og region, dokument-GUID |
| Prosjektinformasjon | Prosjektets egne felt (navn, nummer, kunde, adresse, status …), uten standardverdier for nytt prosjekt |
| Familieinformasjon | Familienavn, kategori, utgave, siste oppdatering, og parametrene etter gruppe |
| Lenker | Listen over koblede modeller, CAD-lenker, bilder og nøkkeltabeller filen peker til |
| Forhåndsvisningsbilde | Miniatyrbildet lagret i filen |

Ikke lest: 3D-modellen, elementer, visninger, ark og tabeller. De er lagret i et udokumentert format. BimCraft leser bare noen titalls kilobyte fra hver fil, så filstørrelsen betyr nesten ingenting.

## .pln, .pla, .tpl og .bpn prosjektfiler

Ikke lest ennå: BimCraft sier fra når du åpner en. Eksporter IFC for modellen og DWG for tegningene; se [Åpne .pln- og .pla-prosjektfiler](topic:pln-project-files).

## DWG og DXF

| Leses | Detaljer |
|---|---|
| Områder | Modellrom og hvert ark (layout), i fanerekkefølge |
| Visningsområder | Hvert arks visningsområder, med målestokk, rotasjon og frosne lag |
| Layer | Navn, farge, på/av, frosset, plottflagg og linjevekt |
| Objekter | Linjer, polylinjer, buer, sirkler, ellipser, splines, skravurer og legemer, tekst og flerlinjetekst, blokker og attributter, mål, hjelpelinjer og flerhjelpelinjer, tabeller, punkter, bilder |
| Koblede tegninger | Tegnes der de settes inn, når filene finnes |
| Bilder | Tegnes fra bildefilene når de finnes (PNG, JPEG, GIF, BMP, WebP; ikke TIFF) |
| Utstyrsmerker | Merkinger for serveringsutstyr (`KCL-ITEM`-attributter), for utstyrslisten |

Alt annet telles under **Ikke tegnet ennå**, og gjettes aldri. DWG-formater fra AutoCAD 2000 til 2018 er de som er kontrollert (R13- og R14-filer godtas også, men ingen var i testsettet; eldre DWG-filer åpnes ikke). Panelet {{ui:Tegning}} viser formatkoden (for eksempel AC1032). DXF-filer av alle versjoner åpnes, også R12. Begge leses av BimCrafts egne lesere, i denne fanen. Ingenting lagres tilbake til DWG eller DXF.

## I en mappe

| Type | Utvidelser | I rapporten |
|---|---|---|
| Modeller | `.rvt` `.rfa` `.rte` `.rft` | Gruppert med nummererte sikkerhetskopier, helsesjekket, kort lest, lenker kontrollert |
| IFC | `.ifc` | Listet; åpnes i 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listet sammen med modellene som kobler til dem; DWG og DXF åpnes i 2D, DGN gjør ikke det |
| Rester | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listet under **Satt til side** |
| Vedlikeholdsmapper | `*_backup`, `*_log`, `Revit_temp`, skjulte mapper | Listet under **Satt til side**, ikke lest |

Se [Mappe-rapport: roller, statuser og lenker](topic:folder-roles).
