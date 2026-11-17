---
title: Åpne en prosjektpakke
summary: En prosjektpakke er én zip-fil med en modell, dens visninger, layouter og egenskapsgrupper. Åpne den, vis en visning med etasje og layere, åpne en layout, og se egenskaper i prosjektets egne grupper.
keywords: pakke, prosjektpakke, ccbundle, zip, visninger, visningskart, layouter, layoutbok, layerkombinasjon, egenskapsgrupper, standarder, pln, mal
from: b5b86e8f
---

## Hva du skal gjøre

Åpne en **prosjektpakke** (`.ccbundle.zip`) og arbeid med prosjektet slik det var organisert: visningene, layoutene og egenskapsgruppene, oppå modellen.

En pakke inneholder:

- modellen som IFC,
- layoutene som PDF og DWG,
- en liste over det IFC ikke tar med: visningene (hver med sin etasje, layerkombinasjon og målestokk), layoutene og tegningene plassert på dem, egenskapsdefinisjoner i deres grupper, klassifikasjoner, og standarder som layere, pennsett, linjetyper, fyll, flater og sammensatte elementer.

Pakkene lages av et skript med åpen kildekode som kjører i Archicad og ber Archicad selv om disse listene. BimCraft leser aldri `.pln`- eller `.tpl`-filer direkte; se [Åpne .pln- og .pla-prosjektfiler](topic:pln-project-files).

## Lag en pakke

Skriptet er en forhåndsversjon: det er ikke prøvd på alle Archicad-versjoner ennå. Hent det fra [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). Du trenger Archicad 24 eller nyere og Python 3.8 eller nyere; ingenting annet må installeres.

1. Lagre `archicad_bundle.py` i en mappe, for eksempel `C:\cc-bundle`.
2. I Archicad åpner du prosjektet og lager et publiseringssett som heter nøyaktig **CadCraft bundle**: 3D-visningen som IFC, hver layout som PDF, og hver layout igjen som DWG, publisert til filer på disken i én flat mappe.
3. Med prosjektet åpent kjører du `python archicad_bundle.py --probe --out .` én gang. Den leser bare, og skriver `probe.json`.
4. Kjør `python archicad_bundle.py --out . --translator "IFC4 Reference View"` (bruk IFC-oversetteren du valgte). Archicad publiserer settet, og skriptet skriver `<project>.ccbundle.zip`.

Hvis publisering gjennom skriptet mislykkes, publiser settet manuelt og kjør `python archicad_bundle.py --out . --no-publish --files <folder>\*.ifc <folder>\*.pdf <folder>\*.dwg`. Depotets README har alle alternativene. Hvis noe ikke kommer med, åpne en sak der og legg ved `probe.json`.

## Åpne en pakke

1. Klikk {{ui:Velg en fil}}, eller slipp `.ccbundle.zip`-filen på BimCraft. I en mappe du åpnet med {{ui:Åpne en mappe}}, vises pakker under **Prosjektpakker**; klikk på én etter navn.
2. Modellen åpnes slik som enhver IFC gjør, og seksjonen **Prosjektpakke** vises til venstre, under filens fakta.

Ingenting lastes opp: pakken leses på datamaskinen din, én fil om gangen, slik at en stor modell ikke kopieres to ganger.

## Vis en visning

Under **Visninger** er visningene gruppert etter mappene de hadde i prosjektet. Klikk på en visnings navn:

- **En planvisning** viser bare sin etasje, sett ovenfra.
- **Dens layerkombinasjon** skjuler elementene på layerne som kombinasjonen skjuler. Statuslinjen sier hvor mange elementer det skjulte.
- **Dens målestokk** vises ved siden av navnet og i statuslinjen.
- **En 3D-visning** viser alle etasjene.

For å vise alt på nytt, bruk {{ui:Vis alle}} i {{ui:Vis}} og kryss av for alle etasjene.

:::note
BimCraft finner layerne gjennom IFC-filens layertilordninger. Hvis IFC-en ble eksportert uten dem, skjuler ingen layerkombinasjon noe, og statuslinjen sier 0 elementer skjult.
:::

## Åpne en layout

Under **Layouter** viser hver layout nummer, navn, papirstørrelse og visningene som er plassert på den.

- **PDF** lagrer layoutens PDF fra pakken.
- **DWG** åpner layoutens tegning i 2D-visningen. Klikk på en visning for å gå tilbake til modellen.
- **Åpne i …** sender layoutens fil til appen som jobber med den, i en ny fane: PDF-en til MarkupCraft, DWG-en til CadCraft. Det vises bare der den appen er åpen ved siden av BimCraft. Filen leses fra pakken mens fanen laster, og ingenting lastes opp.

En layout uten noen av delene sier **Ingen fil i pakken**.

## Se egenskaper i prosjektets grupper

Velg et element. **Egenskapsgrupper** viser dets egenskaper under gruppene prosjektet definerte, koblet gjennom egenskapssettet og navnet definisjonen gir for IFC, eller ellers etter navn. Resten blir liggende i {{ui:Egenskaper}} som vanlig. **Egenskapsdefinisjoner** lister hver definisjon med sin gruppe, type og IFC-navn.

## Standarder og merknader

- **Standarder** teller layerne, layerkombinasjonene, pennsettene, linjetypene, fyllene, flatene, sammensatte elementene og materialene i pakken.
- **Merknader** lister det skriptet ikke kunne hente fra den versjonen av Archicad, alle felt BimCraft ikke kunne lese, og alle filer pakken nevner men ikke inneholder.

## Feilsøking

- **«… er en zip-fil, men ikke en prosjektpakke.»** Zip-filen har ingen `manifest.json`. Pakk den ut og åpne `.ifc`-filen inni.
- **«… er en nyere prosjektpakke enn BimCraft kan lese.»** Oppdater BimCraft.
- **«… inneholder ikke modellen manifestet nevner.»** Zip-filen ble kuttet av eller endret. Lag pakken på nytt.
- **En visning viser alle etasjene.** Etasjen finnes ikke i modellens IFC (statuslinjen sier det). Kontroller at IFC-eksporten inkluderte den etasjen.

Se også [Arbeid mellom to BIM-programmer](topic:two-bim-programs) og [Hva BimCraft leser fra hvert format](topic:file-formats).
