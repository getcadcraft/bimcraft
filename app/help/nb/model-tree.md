---
title: Finn frem med modelltreet
summary: Bla i en IFC-modell etter prosjekt, tomt, bygning, etasje og rom, med elementene gruppert etter type. Kryss av for å vise og skjule, klikk en rad for å plukke, og dobbeltklikk for å zoome.
keywords: modelltre, tre, struktur, romlig struktur, nettleser, oversikt, navigator, etasje, nivå, gulv, rom, gruppe, klasse, skjul, vis, plukk, velg, zoom
from: 69de4ab7
---

## Hva du skal gjøre

Se hvordan en modell er bygget opp, og kom til et hvilket som helst element uten å lete etter det i 3D: bygningen, etasjene, rommene i hver etasje, og elementene i dem, gruppert etter type (vegger, dører, dekker …).

## Trinn

1. Åpne en IFC-modell. {{ui:Modelltre}} til venstre åpnes ned til etasjene.
2. Klikk pilen ved en rad for å åpne eller lukke den. En etasje har rommene først, deretter elementene etter type med antallet. Et element laget av deler, for eksempel en trapp, har delene sine under seg.
3. Fjern haken i en rads boks for å skjule alt i den; sett haken på igjen for å vise det. En boks med en strek betyr at bare noe av det den inneholder vises.
4. Klikk en rads navn for å plukke det det står for: ett element, eller alle elementene i en gruppe, etasje eller et rom. {{key:Mod}}+klikk legger dem til plukket, eller tar dem bort.
5. Klikk {{ui:i}}-knappen ved en etasje, et rom eller en bygning for å se dens egne egenskaper.
6. Dobbeltklikk en rad for å zoome til den.

## Hva du skal se

- Når du plukker et element i 3D-visningen, åpnes treet ned til det, og det markeres.
- Skjulte elementer er gjennomstreket. Haken i boksene og {{ui:Vis}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) virker sammen: se [Skjul, isoler og gjør elementer gjennomsiktige](topic:hide-and-isolate).
- Elementer som modellen ikke plasserer i noen etasje, ligger i en gruppe nederst, **Ikke i den romlige strukturen**.
- En lang gruppe viser 200 rader om gangen; klikk **Vis mer** under den for resten.

## Taster

Med fokus på en rads navn: {{key:Up}} og {{key:Down}} flytter, {{key:Right}} åpner, {{key:Left}} lukker eller går opp, {{key:Space}} setter haken i boksen, {{key:Enter}} plukker.

## Vanlige feil

- **En etasjes boks er krysset av, men ingenting vises.** Listen {{ui:Etasjer}} under treet slår av hele etasjer av seg selv: kryss av der også.
- **En rad plukker ingenting.** Noen rader, for eksempel et tomt rom, har ingen elementer som kan tegnes; statuslinjen sier det.

## Neste

- [Slett, klipp ut, kopier og lim inn bygningselementer](topic:edit-elements)
- [Vis og skjul etasjer, rom og kanter](topic:storeys-and-spaces)
