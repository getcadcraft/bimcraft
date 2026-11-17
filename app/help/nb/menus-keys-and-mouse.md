---
title: Menyer, taster og mus
summary: Velg en menystil som passer til måten du jobber på, gi hvilken som helst kommando din egen tast, flytt kommandoer mellom menyer, og angi hva hjulet og hver musknapp gjør.
keywords: menystil, menyer, menylinje, bånd, kommandolinje, tastatursnarveier, hurtigtaster, taster, tilpass, endre tilordning, mus, hjul, inverter, zoomretning, midtknapp, panorer, kretsing, to-bokstavstaster, eksporter, importer, bytte, kjent
from: a424e836
---

BimCraft-kommandoene er de samme uansett hvordan du finner dem. En **menystil** bestemmer bare hvor de står på skjermen, hva de heter der og hvilke taster som kjører dem, slik at du kan beholde vanene dine. Velg en i {{ui:Innstillinger}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menyer, taster og mus}}; endringen trer i kraft med en gang, og denne nettleseren husker den.

## Fem stiler

| Stil | Dette får du |
|---|---|
| {{ui:CadCraft}} | BimCraft sin egen verktøylinje og egne taster ({{key:W}} vegg, {{key:D}} dør, {{key:N}} vindu, {{key:X}} snitt, {{key:F}} tilpass). Utgangspunktet. |
| {{ui:Home design}} | En menylinje (Fil, Rediger, Bygg, Bibliotek, 3D, CAD, Verktøy, Visning) over en rad med byggverktøy, slik boligtegneprogrammer ordner dem. De samme enkelttastene, pluss {{key:Mod+L}} for biblioteket, {{key:F9}} for 3D-visningen, {{key:F10}} for planen og {{key:F11}} for begge. |
| {{ui:BIM ribbon}} | Faner med store knapper (Arkitektur, Sett inn, Merknad, Endre, Visning, Utdata) med en Fil-meny og hurtigknapper til høyre. To-bokstavstaster: {{key:W}} og så {{key:A}} for en vegg, {{key:D}} {{key:R}} for dør, {{key:W}} {{key:N}} for vindu, {{key:S}} {{key:C}} for snitt, {{key:Z}} {{key:F}} for tilpass. Midtknappen panorerer; {{key:Shift}} og midtknappen kretser rundt. |
| {{ui:Drafting classic}} | En liten båndlinje og en kommandolinje, for folk som skriver kommandoer: WALL, DOOR, WINDOW, ROOF, U (angre), ZOOM, SECTION, PLOT, INSERT, HELP. Begynn å skrive hvor som helst, så går bokstavene til kommandolinjen; {{key:Enter}} kjører, {{key:Enter}} uten innhold gjentar siste kommando, {{key:Esc}} tømmer den. |
| {{ui:Viewer}} | For å åpne og kontrollere modeller i stedet for å tegne dem: menyene {{ui:Fil}}, {{ui:Visning}}, {{ui:Vis}}, {{ui:Kontroller}} og {{ui:Rediger}} over en rad med visningsverktøy (tilpass, topp, forside, side, snitt, mål, skjul, isoler, gjennomsiktig, vis alle, gå gjennom). Byggeverktøyene venter i en {{ui:Modell}}-meny til slutt. De samme tastene som i BimCraft sin egen stil. |

Menyene og båndene vises når en modell er åpen eller du starter en ny bygning; før det åpner panelet til venstre filer og starter bygninger.

:::tip
En tast som hører til BimCraft sitt eget oppsett, men ikke til stilen du valgte, gjør ingenting, og statuslinjen sier hvor kommandoen har gått ("I BIM-bånd er Snitt SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} og piltastene beholder alltid sin betydning, og et verktøy som kjører beholder sine egne taster: {{key:R}} og {{key:Tab}} mens du plasserer, {{key:W}} {{key:A}} {{key:S}} {{key:D}} mens du går gjennom, {{key:H}} med dør- og vindusverktøyene, og tall mens du skriver inn en lengde.
:::

## Gjør den til din egen

1. Velg stilen som ligner mest på det du vil ha, og klikk {{ui:Tilpass…}}.
2. Under {{ui:Taster og menyer}} finner du en kommando (søkefeltet hjelper). Klikk {{ui:Legg til en tast}} og trykk tasten, eller to taster etter hverandre for en to-bokstavstast. Klikk en tast for å fjerne den.
3. Med en menylinje eller et bånd flytter {{ui:Hvor den står}} kommandoen til en annen meny eller et annet panel, eller til {{ui:Bare taster}}.
4. Under {{ui:Mus}} angir du hjulet, knappene som panorerer planen, og hva hver knapp gjør i 3D-visningene.
5. Gi den et navn og klikk {{ui:Lagre}}.

Å lagre en innebygd stil lager en egen kopi («Min Home design»); den innebygde endrer seg aldri. En tast som er gitt til to kommandoer, eller en som ville kjøre før en to-bokstavstast kunne skrives, vises i rødt og må rettes før du kan lagre.

## Mus

- **Mushjul**: {{ui:Rulling opp zoomer inn}} (utgangspunktet) eller {{ui:Rulling opp zoomer ut}}, og hvor raskt. Et klypegrep på styreflaten zoomer alltid slik fingrene beveger seg.
- **Panorer planen og tegningene med**: en hvilken som helst av venstre, midtre og høyre knapp. {{key:Space}} og dra panorerer også; et venstredrag panorerer bare der et klikk ikke ville valgt eller tegnet noe.
- **Dra i 3D-visningene**: {{ui:Hver visnings egen}} beholder BimCraft sine knapper (venstre kretser, høyre panorerer). Eller sett hver knapp til kretsing, panorering, zoom eller ingenting; {{key:Shift}} sammen med knappen bytter kretsing og panorering. Et klikk uten å dra velger fortsatt.

## Ta det med deg

{{ui:Eksporter}} lagrer stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importer…}} legger til en, fra en annen datamaskin eller fra en kollega. En importert fil kan bare peke på BimCraft sine egne kommandoer: alt annet i den (en kommando denne versjonen ikke har, en tast som ikke virker her) utelates og telles i statuslinjen. {{ui:Slett denne stilen}} fjerner en av dine egne.

:::note
Disse innstillingene blir i denne nettleseren. {{ui:Bruk denne stilen i alle apper}} under stilkortene gjør at alle apper åpnes i sin tilsvarende stil (egen verktøylinje, en menylinje, et bånd eller Klassisk tegning; {{ui:Visning}} er BimCraft sin alene og finnes ikke andre steder), med endringene du gjorde i hver app. En app uten tilsvarende stil beholder sin egen. Å velge en annen stil i én app endrer bare den appen.
:::

Se også: [Tastatur og mus](topic:keyboard) · [BimCraft-innstillinger](topic:settings) · [Fra andre BIM- og tegneprogrammer](topic:coming-from)
