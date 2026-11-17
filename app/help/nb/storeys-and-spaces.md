---
title: Vis og skjul etasjer, rom og kanter
summary: Slå etasjer av for å se inn i en bygning, vis rom, og slå kantlinjene av og på.
keywords: etasjer, nivåer, gulv, skjul, isoler, rom, ifcspace, kanter, synlighet, snitt
from: b838dcc0
---

## Hva du skal gjøre

Se inn i en IFC-modell ved å slå av etasjene over den du er interessert i, vis deretter rommene, og slå av kantlinjene for et renere utseende.

## Fremgangsmåte: se på én etasje

1. Åpne en IFC-modell. Se [Åpne en IFC-modell og se deg rundt i 3D](topic:open-ifc-model).
2. Finn listen {{ui:Etasjer}} til venstre. Den øverste etasjen står først, som når man leser et snitt fra taket og ned.
3. Fjern haken for taket og for alle etasjer over gulvet som skal vises.
4. Klikk {{ui:Topp}} for å se ned på den etasjen.
5. Sett haken på etasjene igjen for å få dem tilbake.

## Slik ser det ut

Hver etasje der haken fjernes, forsvinner med én gang, med alt som står på den. Listen viser bare etasjer som har noe synlig. Elementer som ikke er tilordnet noen etasje, samles som **Ikke på en etasje** nederst; områdeelementer og noe møblement havner ofte der.

## Fremgangsmåte: vis rom

1. Klikk {{ui:Rom}} i verktøylinjen over modellen. Knappen forblir trykket.
2. Se på modellen: rom vises som blekt, gjennomsiktige volumer.
3. Klikk et rom for å lese egenskapene, som navn, nummer og areal, til høyre.
4. Klikk {{ui:Rom}} igjen for å skjule dem.

Rom skjules når en modell åpnes, fordi de ellers ville dekke over veggene og gulvene.

## Fremgangsmåte: kanter

1. Klikk {{ui:Kanter}} for å slå av de tynne kantlinjene.
2. Klikk igjen for å slå dem på.

På svært store modeller (over 1,5 millioner trekanter) er knappen nedtonet, med hintet "Kanter er av for svært store modeller". Dette sparer minne.

## Vanlige feil

- **Fjerne haken for en etasje og fortsatt se deler av den.** Et element hører til den etasjen eksportprogrammet tilordnet det. En høy vegg eller en trapp hører ofte bare til basisetasjen sin, så den blir værende når etasjen over skjules, eller forsvinner sammen med etasjen under.
- **Skjule etasjer for å se inn.** En snittboks er ofte raskere: se [Kutt en IFC-modell med et snittplan](topic:section-plane#a-section-box). Det går også an å fjerne haken i radene i {{ui:Modelltre}} (se [Finn frem i modelltreet](topic:model-tree)).
- **Klikke på et rom gjennom en vegg.** Klikk velger den nærmeste synlige flaten. Skjul etasjen over, eller bytt til {{ui:Topp}}, og klikk deretter.
- **Etasjenavnene ser merkelige ut.** BimCraft viser etasjenavnene som er lagret i filen. Hvis de sier "Nivå 1" eller et tall, er det det eksportøren skrev.
