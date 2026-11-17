---
title: Finn elementer etter klasse, navn eller egenskap
summary: Finn alle elementer som samsvarer med én eller flere regler – klasse, navn, type, etasje, materiale eller en egenskapsverdi – velg dem alle, og behold reglene som et navngitt søkesett.
keywords: finn, søk, filter, spørring, regel, søkesett, utvalgssett, lagret søk, egenskap, verdi, klasse, materiale, velg alle
from: 3d293bc2
---

## Hva du skal gjøre

Velg alle elementer av én type, eller med én verdi, i ett trinn: alle dører, alle vegger på nivå 2, alle elementer med brannmotstand EI60, alle vegger som koster mer enn et bestemt beløp.

## Trinn

1. Åpne en IFC-modell.
2. Åpne {{ui:Finn}} i venstre panel.
3. I første regel velger du en egenskap (elementets egne først, for eksempel {{ui:Klasse}} og {{ui:Etasje}}, deretter modellens egenskapssett), hvordan den skal sammenlignes, og en verdi. Verdifeltet foreslår verdiene modellen har.
4. For å snevre inn klikker du {{ui:Legg til en regel}}. Velg {{ui:Alle regler}} for at alle skal gjelde, eller {{ui:Minst én regel}} for at én av dem skal gjelde.
5. Klikk {{ui:Finn}}, eller trykk {{key:Enter}} i et verdifelt. Det som samsvarer, blir valgt.
6. For å beholde reglene klikker du {{ui:Lagre som sett}}, skriver et navn og klikker det igjen. Klikk navnet på et sett senere for å finne med det.

## Hva du bør se

- Treffene er valgt i 3D-visningen og modelltreet, og {{ui:Egenskaper}} viser hvor mange det er, etter klasse. Trykk {{key:I}} for å vise bare dem, og {{key:H}} for å skjule dem.
- Ord samsvarer uten hensyn til store og små bokstaver. Tall sammenlignes som tall: «er mer enn 1000» betyr verdien, ikke teksten.
- {{ui:har en verdi}} og {{ui:har ingen verdi}} trenger ingen verdi; de finner det som er fylt ut, eller det som mangler.
- Lagrede søkesett blir i denne nettleseren for alle modeller du åpner.

## Vanlige feil

- **Ingenting blir funnet.** En regel trenger en verdi den kan samsvare med: se forslagene i verdifeltet.
- **En egenskap mangler i listen.** Ingen element med form i denne modellen har den.

## Neste

- [Fargelegg elementer etter en egenskap](topic:color-by-property)
- [Skjul, isoler og se gjennom elementer](topic:hide-and-isolate)
