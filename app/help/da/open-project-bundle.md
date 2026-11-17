---
title: Åbn et projektbundt
summary: Et projektbundt er én zip-fil med en model, dens visninger, layouts og egenskabsgrupper. Åbn det, vis en visning med dens etage og lag, åbn et layout, og se egenskaber i projektets egne grupper.
keywords: bundt, projektbundt, ccbundle, zip, visninger, visningskort, layouts, layoutbog, lagkombination, egenskabsgrupper, standarder, pln, skabelon
from: b5b86e8f
---

## Hvad du gør

Åbn et **projektbundt** (`.ccbundle.zip`) og arbejd med projektet, sådan som det var organiseret: dets visninger, layouts og egenskabsgrupper oven på modellen.

Et bundt indeholder:

- modellen som IFC,
- layouts som PDF og DWG,
- en liste over det, IFC ikke medtager: visningerne (hver med sin etage, lagkombination og målestok), layouts og de tegninger, der er placeret på dem, egenskabsdefinitioner i deres grupper, klassifikationer og standarder såsom lag, pennesæt, linjetyper, udfyldninger, overflader og sammensatte elementer.

Bundter skrives af et script med åben kildekode, der kører inde i Archicad og beder Archicad selv om disse lister. BimCraft læser aldrig `.pln`- eller `.tpl`-filer direkte; se [Åbn .pln- og .pla-projektfiler](topic:pln-project-files).

## Lav et bundt

Scriptet er en forhåndsvisning: det er endnu ikke afprøvet på alle Archicad-versioner. Hent det fra [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Du skal bruge Archicad 24 eller nyere og Python 3.8 eller nyere; intet andet skal installeres.

1. Gem `archicad_bundle.py` i en mappe, for eksempel `C:\cc-bundle`.
2. Åbn projektet i Archicad, og lav et publiceringssæt med navnet præcis **CadCraft bundle**: 3D-visningen som IFC, hvert layout som PDF og hvert layout igen som DWG, publiceret til filer på disken i én flad mappe.
3. Med projektet åbent kører du `python archicad_bundle.py --probe --out .` én gang. Det læser kun og skriver `probe.json`.
4. Kør `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (brug den IFC-oversætter, du valgte). Archicad publicerer sættet, og scriptet skriver `<project>.ccbundle.zip`.

Hvis publicering via scriptet fejler, så publicér sættet i hånden og kør `python archicad_bundle.py --out . --no-publish --files <mappe>\*.ifc <mappe>\*.pdf <mappe>\*.dwg`. Repositoriets README har alle valgmuligheder. Hvis noget ikke kommer med, så opret et issue dér og vedhæft `probe.json`.

## Åbn et bundt

1. Klik på {{ui:Vælg en fil}}, eller træk `.ccbundle.zip`-filen over på BimCraft. I en mappe, du har åbnet med {{ui:Åbn en mappe}}, vises bundter under **Projektbundter**; klik på et ved navn.
2. Modellen åbnes, som enhver IFC gør, og afsnittet **Projektbundt** vises til venstre, under filens oplysninger.

Intet uploades: bundtet læses på din computer, én fil ad gangen, så en stor model ikke kopieres to gange.

## Vis en visning

Under **Visninger** er visningerne grupperet efter de mapper, de havde i projektet. Klik på en visnings navn:

- **En etageplan** viser kun sin etage, set oppefra.
- **Dens lagkombination** skjuler de elementer, som kombinationen skjuler på sine lag. Statuslinjen siger, hvor mange elementer det skjulte.
- **Dens målestok** vises ved siden af navnet og i statuslinjen.
- **En 3D-visning** viser alle etager.

For at vise alt igen, brug {{ui:Vis alle}} under {{ui:Vis}} og sæt flueben ved alle etager.

:::note
BimCraft finder lagene gennem IFC-filens lagtildelinger. Hvis IFC'en blev eksporteret uden dem, skjuler en lagkombination intet, og statuslinjen siger 0 elementer skjult.
:::

## Åbn et layout

Under **Layouts** viser hvert layout sit nummer, navn, papirstørrelse og de visninger, der er placeret på det.

- **PDF** gemmer layoutets PDF fra bundtet.
- **DWG** åbner layoutets tegning i 2D-visningen. Klik på en visning for at vende tilbage til modellen.
- **Åbn i …** sender layoutets fil til det program, der arbejder med den, i en ny fane: PDF'en til MarkupCraft, DWG'en til CadCraft. Det vises kun, hvor det program er åbent ved siden af BimCraft. Filen læses fra bundtet, mens fanen indlæses, og intet uploades.

Et layout uden nogen af dem siger **Ingen fil i bundtet**.

## Se egenskaber i projektets grupper

Vælg et element. **Egenskabsgrupper** viser dets egenskaber under de grupper, projektet har defineret, matchet gennem det egenskabssæt og navn, som definitionen angiver for IFC, ellers efter dets navn. Resten bliver under {{ui:Egenskaber}} som sædvanligt. **Egenskabsdefinitioner** viser hver definition med dens gruppe, type og IFC-navn.

## Standarder og noter

- **Standarder** tæller lagene, lagkombinationerne, pennesæt, linjetyper, udfyldninger, overflader, sammensatte elementer og materialer i bundtet.
- **Noter** viser det, scriptet ikke kunne hente fra den version af Archicad, ethvert felt BimCraft ikke kunne læse, og enhver fil, bundtet nævner men ikke indeholder.

## Fejlfinding

- **"… er en zip-fil, men ikke et projektbundt."** Zip-filen har ingen `manifest.json`. Pak den ud og åbn `.ifc`-filen indeni.
- **"… er et nyere projektbundt, end BimCraft læser."** Opdatér BimCraft.
- **"… indeholder ikke den model, dens manifest nævner."** Zip-filen er afkortet eller redigeret. Lav bundtet igen.
- **En visning viser alle etager.** Dens etage findes ikke i modellens IFC (statuslinjen siger det). Kontrollér, at IFC-eksporten medtog den etage.

Se også [At arbejde mellem to BIM-programmer](topic:two-bim-programs) og [Hvad BimCraft læser fra hvert format](topic:file-formats).
