---
title: Saker og BCF-filer
summary: Lagre en visning av modellen som en sak — kamera, valgte elementer, skjulte elementer, snitt — del den som en BCF-fil med andre koordineringsverktøy, og åpne deres BCF-filer for å se sakene deres.
keywords: bcf, bcfzip, sak, saker, emne, visningspunkt, kollisjonsrapport, koordinering, kommentar, øyeblikksbilde, åpne bcf, lagre bcf, eksport, import
from: 2a6cf201
---

## Formål

Pek på et problem i modellen og behold visningen som viser det, og send den videre i en BCF-fil, formatet andre koordineringsverktøy leser og skriver.

## Steg

1. Åpne en IFC-modell og sett opp visningen: bane rundt den, velg elementene som er involvert, skjul det som er i veien, og kutt den med et snittplan eller en snittboks.
2. Klikk på fanen {{ui:Saker}} til høyre, og deretter {{ui:Ny sak fra denne visningen}}.
3. Skriv en tittel, og en kommentar hvis du vil; velg en status; oppgi navnet eller e-postadressen din (når du er innlogget, fylles kontoens navn inn; se [BimCraft-innstillinger](topic:settings#your-name-on-issues)). Klikk {{ui:Opprett sak}}.
4. Klikk {{ui:Vis}} på en sak for å sette visningen tilbake.
5. Klikk {{ui:Lagre BCF}} for å laste ned alle sakene som én `.bcf`-fil.
6. For å se saker som noen andre har laget, klikk {{ui:Åpne BCF…}} og velg deres `.bcf`- eller `.bcfzip`-fil.

## Resultat

- Hver sak i listen, med et bilde av visningen, tittel, status, forfatter og dato.
- {{ui:Vis}} setter tilbake kameraet, de valgte elementene, det som var skjult (eller de eneste tingene som var synlige) og snittet. Elementer finnes via GlobalId i alle åpne modeller; statuslinjen sier om noen mangler.
- Et snittplan eller en snittboks fra et annet verktøy vises når den står på linje med modellens akser. Skrå eller ekstra plan kommer tilbake som et snittvolum (opptil 6 plan). En sak beholder den første boksen i et volum med flere bokser.

## Greit å vite

- Filen er BCF 2.1 og beholder visningen i modellens egne koordinater, slik at andre verktøy plasserer kameraet på samme sted.
- Sakene blir værende i denne fanen til du lagrer dem. Å åpne en annen modell beholder listen; åpne modellen sakene gjelder før du viser dem.
- Et parallelt (ortogonalt) kamera fra et annet verktøy vises med dette programmets perspektivkamera, trukket bakover slik at den samme delen av modellen fyller visningen.

## Vanlige feil

- **Vis flyttet kameraet til et rart sted.** Saken ble laget på en annen modell eller med andre koordinater. Åpne riktig modell først.
- **Filen åpnes ikke.** Den er ikke en BCF-zip, eller den er skadet; statuslinjen sier hvorfor.

## Neste

- [Skjul, isoler og se gjennom elementer](topic:hide-and-isolate)
- [Kutt en IFC-modell med et snittplan](topic:section-plane)
