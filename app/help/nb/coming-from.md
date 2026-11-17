---
title: Kommer fra andre BIM- og tegneprogrammer
summary: Hvordan vaner fra BIM-modellering på skrivebordet og DWG-visning følger med over til BimCraft, og forskjellene som lurer folk.
keywords: bytte, migrer, kjent, BIM på skrivebordet, familie, parametere, prosjektvisning, egenskapspalett, ViewCube, xref, layerbehandler, forskjeller, sammenlign
from: 2de629af
---

Kjenner du Revit, vil mye av BimCraft kjennes kjent i ord og ukjent i omfang. Den viktigste forskjellen: **denne versjonen leser og inspiserer modeller og redigerer IFC-data. Den modellerer ikke som Revit ennå.** Du kan ikke tegne vegger, plassere familier, lage visninger eller ark, eller lagre en prosjektfil. Det du kan gjøre, er å åpne nesten alle bygningsfiler på hvilken som helst datamaskin med en nettleser, se hva som er i dem, kontrollere en hel prosjektmappe og rette dataene i en IFC-modell.

## Vaner og tilsvarende

| Hvis du er vant til | I BimCraft |
|---|---|
| Åpne en `.rvt` i Revit for å se modellen | BimCraft åpner `.rvt` som et filkort: utgave, prosjektinformasjon, lenker og forhåndsvisning. For 3D-modellen eksporterer du til IFC og åpner den. [Les en prosjekt- eller familiefil](topic:read-rvt-file) |
| Sjekke hvilken utgave en fil ble lagret i før du åpner den | Kortet sier «lagret i Revit …» øverst, uten å oppgradere eller endre filen |
| Prosjektnettleseren | Ingen nettleser for visninger og ark. En IFC-modell har listene {{ui:Etasjer}} og {{ui:Elementer}}; en tegning har arkfaner |
| Egenskapspaletten | Panelet {{ui:Egenskaper}} til høyre, for elementet du klikket på. IFC-egenskapssett i stedet for parametergrupper |
| Forekomst- og typeparametere | Forekomstegenskapssett, og sett merket «(type)». En typeendring gjelder for alle elementer av typen, som i Revit. [Endre en typeegenskap for alle elementer av en type](topic:type-vs-instance) |
| Rediger type | Ingen dialogboks: klikk en verdi i et «(type)»-sett og skriv |
| Velge mange elementer, filtre, Velg alle forekomster | Ett element om gangen. Ikke bygget ennå |
| ViewCube og navigasjonshjulet | En ViewCube nederst til høyre, fire knapper ({{ui:Tilpass}}, {{ui:Topp}}, {{ui:Front}}, {{ui:Side}}) og fri rotasjon. Ingen navigasjonshjul |
| Shift og midtdra for å rotere, midtdra for å panorere | Venstredra roterer, høyredra (eller {{key:Shift}} og dra) panorerer, hjulet zoomer. Menystilen {{ui:BIM-bånd}} bytter til midtdra for panorering og {{key:Shift}} med midtknappen for rotasjon. [Menyer, taster og mus](topic:menus-keys-and-mouse) |
| Etasjeplaner, snitt, snittbokser | Ett {{ui:Snitt}}-plan om gangen ({{key:X}}); ingen snittboks eller 2D-planer. [Kutt en IFC-modell med et snittplan](topic:section-plane) |
| Skjul i visning, isoler, synlighet/grafikk | {{ui:Etasjer}} på og av, {{ui:Rom}} og {{ui:Kanter}}. Ingen skjuling per element ennå |
| Rom | IFC-rom, skjult i starten. Klikk {{ui:Rom}} |
| Lagre, Lagre som, synkroniser med sentralfil | {{ui:Lagre som IFC}} laster ned en ny IFC-fil. Originalen endres aldri. Ingen sentralfil og ingen samarbeidsdeling |
| Angre med {{key:Mod+Z}} | Virker på IFC-endringer til du lagrer. [Endre IFC-egenskaper og lagre en redigert kopi](topic:edit-ifc-properties) |
| Administrer lenker | Åpne prosjektmappen: hver lenke kontrolleres og merkes **I denne mappen**, **Samme navn funnet**, **Biblioteksfil** eller **Ikke i denne mappen**. [Åpne en hel prosjektmappe](topic:open-project-folder) |
| Kontroll, eller åpne en fil for å se om den er ødelagt | Mappeoversikten sjekker hver kopi og sikkerhetskopi for å se om den er avkortet, på sekunder. [Sjekk en mappe for skadede kopier](topic:check-folder-health) |
| Velge riktig fil i en rotete mappe | Boksen {{ui:Start her}} foreslår én, med begrunnelse |

Hvis du for det meste åpner modeller for å kontrollere dem, slik som i et program for modellkontroll eller IFC-visning, velg menystilen {{ui:Visning}}: visnings- og kontrollverktøyene kommer først, og byggeverktøyene venter i én meny. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).

## Fra visning av DWG-filer

Hvis du åpner DWG-filer i AutoCAD eller en DWG-visning:

| Hvis du er vant til | I BimCraft |
|---|---|
| Modell- og layoutfaner nederst | Faner over tegningen: {{ui:Modell}} og én per ark |
| ZOOM Extents, dobbeltklikk hjulet | Dobbeltklikk, {{key:F}} eller {{ui:Tilpass}} |
| Panorer med midtknappen | Dra med en hvilken som helst knapp |
| Layerbehandleren | Listen {{ui:Layers}}: kryss av for å vise, fjern av for å skjule, {{ui:All on}} og {{ui:All off}} |
| Xref-behandleren | **Tilknyttede tegninger** til høyre, med **Vist** eller **Ikke funnet**, og {{ui:Legg til tilknyttede tegninger…}} |
| Plottforhåndsvisning | {{ui:Utskriftsvisning}} eller {{key:P}}: svart på hvitt med linjevekter. Den skriver ikke ut |
| Datauttak av blokkattributter | Fanen {{ui:Utstyr}} for merkede storkjøkkentegninger, med {{ui:Last ned CSV}} |
| Mål, tegn, rediger, lagre som | Ikke i BimCraft. CadCraft-tegneappen tegner og redigerer |

## Forskjeller som lurer folk

- **Den kjører i nettleseren, og nettleseren er forsiktig med filene dine.** BimCraft kan bare lese filer og mapper du gir den, ved å velge dem eller dra dem inn. Den kan ikke åpne en fil av seg selv, og den kan ikke lagre over en fil. Hver lagring er en nedlasting.
- **Ingenting lastes opp.** Ordet «Last opp» i noen nettleseres mappedialoger er nettleserens eget ord. Filene blir på datamaskinen din.
- **IFC er modellformatet.** En prosjektfil åpnes som et kort fordi 3D-innholdet er udokumentert. Behandle IFC som måten modeller kommer inn i BimCraft på.
- **Redigeringer er kopiering ved endring.** Å endre verdien til ett element endrer aldri naboene, selv om eksportøren delte verdien mellom dem. Typeegenskaper er det bevisste unntaket.
- **Ingen prosjekt, ingen visninger.** BimCraft viser én fil om gangen og husker ingenting om den etter at du lukker fanen, bortsett fra navnene på nylige mapper i Chrome og Edge.
- **Tastene på Mac.** Der Revits Windows-snarveier bruker Ctrl, bruker BimCraft {{key:Mod}}: Command på en Mac.
- **Musevanene dine.** Rotasjon er venstreknappen, ikke Shift og midtknappen, med mindre du velger menystilen {{ui:BIM-bånd}} eller setter knappene selv i [Menyer, taster og mus](topic:menus-keys-and-mouse).

Se [Hva som ikke er bygget ennå](topic:not-built-yet) for hva du kan bruke i stedet i dag.
