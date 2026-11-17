---
title: Vad BimCraft läser från varje format
summary: Exakt vad BimCraft läser från IFC-, projekt- och familjefiler, DWG och DXF, och vad det lämnar orört.
keywords: format, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versioner, kompatibilitet, vad som läses
from: 9b8dfb4f
---

## IFC

| Läser | Detaljer |
|---|---|
| Geometri | Varje element med en form, färgat som filen anger. Rum och utrymmen ritas genomskinliga och döljs först |
| Våningsplan | Byggnadens våningsplan i höjdordning, och vilka element som står på varje. Element utan våningsplan grupperas som "Inte på något våningsplan" |
| Antal element | Hur många element av varje slag (väggar, dörrar, bjälklag …), visas i {{ui:Element}} |
| Projektfakta | Projektnamn, långt namn och fas, schema, exportprogrammet, författaren och exportdatumet från filhuvudet |
| Elementdata | Namn, typ, objekttyp, beteckning, beskrivning, GlobalId, samt varje egenskapsuppsättning och mängduppsättning på elementet och på dess typ |

Redigerbart: namn, objekttyp, beteckning, beskrivning och enskilda egenskapsvärden. Sparas som en ny IFC-fil. Scheman IFC2X3, IFC4 och IFC4X3 öppnas och läses av BimCraft egna IFC-motor. Allt den ännu inte kan rita listas under **Ännu inte ritat** i panelen {{ui:Fil}}. Modellen flyttas till origo när den öppnas, så en modell som placerats långt bort visas ändå mitt på skärmen. `.ifczip` och `.ifcxml` öppnas inte.

## Projekt- och familjefiler

`.rvt`-projekt, `.rte`-projektmallar, `.rfa`-familjer och `.rft`-familjemallar.

| Läser | Detaljer |
|---|---|
| Filinformation | Utgåva och version, delat arbete, sökväg till centralmodellen, sökväg till senast sparad, användarnamn, språkinställning, dokument-GUID |
| Projektinformation | Projektets egna fält (namn, nummer, kund, adress, status …), utan standardvärden för nya projekt |
| Familjeinformation | Familjenamn, kategori, utgåva, senaste uppdatering och dess parametrar per grupp |
| Länkar | Listan över länkade modeller, CAD-länkar, bilder och nyckelordstabeller som filen pekar på |
| Förhandsvisningsbild | Miniatyren som sparats i filen |

Läses inte: 3D-modellen, element, vyer, blad och förteckningar. De lagras i ett odokumenterat format. BimCraft läser bara några tiotal kilobyte från varje fil, så filstorleken spelar knappast någon roll.

## Projektfiler: .pln, .pla, .tpl och .bpn

Ännu inte lästa. BimCraft säger det när du öppnar en. Exportera IFC för modellen och DWG för ritningarna; se [Öppna .pln- och .pla-projektfiler](topic:pln-project-files).

## DWG och DXF

| Läser | Detaljer |
|---|---|
| Utrymmen | Modellrummet och varje blad (layout), i flikordning |
| Vyportar | Varje bladets vyportar, med deras skala, vridning och frysta lager |
| Lager | Namn, färg, på/av, frysta, utskriftsflagga och linjetjocklek |
| Objekt | Linjer, polylinjer, bågar, cirklar, ellipser, splines, skraffering och solider, text och flerradig text, block och attribut, mått, hänvisningar och flerhänvisningar, tabeller, punkter, bilder |
| Länkade ritningar | Ritas där de infogas, när deras filer hittas |
| Bilder | Ritas från bildfilerna när de hittas (PNG, JPEG, GIF, BMP, WebP; inte TIFF) |
| Utrustningsbeteckningar | Beteckningar för storköksposter (`KCL-ITEM`-attribut), för utrustningsförteckningen |

Allt annat räknas under **Ännu inte ritat** och gissas aldrig. DWG-format från AutoCAD 2000 till 2018 är de som kontrollerats. R13- och R14-filer accepteras också, men inga fanns i testuppsättningen. Äldre DWG-filer öppnas inte. Panelen {{ui:Ritning}} visar formatkoden, till exempel AC1032. DXF-filer i alla versioner öppnas, även R12. Båda läses av BimCraft egna läsare, i den här fliken. Inget sparas tillbaka till DWG eller DXF.

## I en mapp

| Slag | Filändelser | I rapporten |
|---|---|---|
| Modeller | `.rvt` `.rfa` `.rte` `.rft` | Grupperade med numrerade säkerhetskopior, hälsokontrollerade, infokortet läst, länkar kontrollerade |
| IFC | `.ifc` | Listade. Öppnas i 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listade med de modeller som länkar dem. DWG och DXF öppnas i 2D, DGN gör inte det |
| Rester | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listade under **Åt sidan** |
| Stödmappar | `*_backup`, `*_log`, `Revit_temp`, dolda mappar | Listade under **Åt sidan**, inte lästa |

Se [Mapprapport: roller, status och länkar](topic:folder-roles).
