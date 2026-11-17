---
title: Rutenett og søyler
summary: Legg ut rutenettlinjer med nummererte og bokstavmerkede bobler, etter avstand eller én og én, tegn vegger og søyler langs dem, og se dem på planer, fasader og snitt.
keywords: rutenett, rutenettlinje, rutenettlinjer, søylerutenett, akse, akser, boble, strukturelt rutenett, 1 2 3, A B C, søyle, søyler, pilar, stolpe, fang, IfcGrid, IfcColumn
from: bf99a8f7
---

## Hva du skal gjøre

Legg ut en bygning på et rutenett, og tegn deretter vegger og plasser søyler langs linjene.

## Plasser et helt rutenett

1. Slå på {{ui:Tegn}}, og velg deretter {{ui:Bygg}} › {{ui:Rutenett}}.
2. Klikk på {{ui:Plasser et rutenett…}}. Oppgi hvor mange **nummererte linjer** (1, 2, 3…) og **bokstavlinjer** (A, B, C…) du vil ha, og hvor langt fra hverandre. Skriv inn én avstand, eller flere separert med komma for ujevne fag (for eksempel `20', 24', 20'`). {{ui:Forbi siste linjer}} er hvor langt hver linje går utover de ytre linjene av den andre typen, og {{ui:Drei (grader)}} dreier hele rutenettet.
3. Klikk på {{ui:Plasser det}}, og klikk deretter der det første krysset (1 / A) skal være. Forhåndsvisningen følger pekeren.

Nummererte linjer går oppover planen og er fordelt utover den; bokstavlinjer går på tvers av planen og er fordelt oppover den. Bokstavene hopper over I og O, som på tegninger, slik at de aldri kan forveksles med 1 og 0.

## Tegn rutenettlinjer én og én

Med {{ui:Rutenett}} på klikker du der en linje starter og der den slutter. Den får neste merkelapp av linjene den går langs (etter 3 kommer 4; etter B kommer C). Trykk {{key:Esc}} for å stoppe.

## Endre en rutenettlinje

Med {{ui:Rutenett}} på klikker du på en linje for å velge den. Skriv inn en ny {{ui:Etikett}} og trykk {{key:Enter}}, eller klikk på {{ui:Slett denne linjen}} (eller trykk {{key:Delete}}). {{ui:Bobler}} plasserer boblene i begge ender, ved starten eller slutten av hver linje, eller ingen steder. Hver endring er ett steg: {{key:Mod+Z}} angrer den.

## Tegn langs rutenettet

{{ui:Vegg}}-verktøyet, {{ui:Søyle}}-verktøyet og de andre tegneverktøyene fanger rutenettlinjene og krysningene der de møtes (fangmerket er en liten sirkel med et kryss).

**Søyler:** velg {{ui:Bygg}} › {{ui:Søyle}}, velg form (rektangulær eller rund), størrelse, og om søylen går **til etasjen over** eller til en fast høyde, og klikk deretter. {{ui:Ved hvert krysningspunkt i rutenettet}} plasserer en søyle i hvert kryss som ikke har en fra før. Klikk på en søyle for å endre form, størrelse eller høyde under {{ui:Egenskaper}}; {{key:Delete}} fjerner den. Søyler som går til etasjen over, følger den når høyden endres.

## Hva du skal se

- Rutenettet på planen for hvert nivå, med en boble og dens etikett i endene av hver linje.
- Rutenettlinjer i tegningssettet: på planene, og på fasader og snitt der en linje sees rett fra enden, med boblen over bygningen. Se [Fasader, snitt og ark](topic:sheets).
- I IFC-filen: ett rutenett for bygningen (IfcGrid, med de nummererte linjene i én liste og bokstavlinjene i den andre), og søyler som IfcColumn med størrelse, høyde og mengder. Andre BIM-programmer viser begge deler.

:::note
Et rutenett som kom i en fil fra et annet program, vises, og verktøyene fanger det, men linjene kan ikke endres her.
:::
