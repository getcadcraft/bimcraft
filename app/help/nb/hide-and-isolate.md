---
title: Skjul, isoler og gjør elementer gjennomsiktige
summary: Velg flere elementer, og skjul dem, vis bare dem, eller vis dem sammen med alt annet gjennomsiktig. Gå deretter tilbake til alt.
keywords: skjul, isoler, gjennomsiktig, transparent, spøkelse, røntgen, vis alle, vis igjen, velg flere, flervalg, ctrl click, shift click, synlighet
from: 97e98b8c
---

## Hva du skal gjøre

Rydd visningen ned til det du ser på: skjul elementer som er i veien, vis bare de du valgte, eller hold alt annet på skjermen som en svak kontur, slik at du fortsatt vet hvor du er.

## Steg

1. Åpne en IFC-modell. Se [Åpne en IFC-modell og se deg rundt i 3D](topic:open-ifc-model).
2. Klikk på et element for å velge det. For å velge flere holder du inne {{key:Mod}} eller {{key:Shift}} og klikker på hvert av dem. Når du klikker på et valgt element på den måten, fjernes det igjen.
3. Åpne {{ui:Vis}} i verktøylinjen og velg hva du vil gjøre, eller trykk tasten:
   - {{ui:Skjul}} ({{key:H}}) skjuler de valgte elementene.
   - {{ui:Isoler}} ({{key:I}}) viser bare de valgte elementene.
   - {{ui:Gjennomsiktig}} ({{key:T}}) viser de valgte elementene slik de er, og alt annet gjennomsiktig.
4. Klikk på {{ui:Vis alle}} i samme meny, eller trykk {{key:Shift+H}}, for å vise alle elementene igjen.
5. For i stedet å klippe bort alt rundt de valgte elementene, klikk på {{ui:Snittboks rundt utvalget}} i samme meny, eller trykk {{key:Shift+X}}. Se [Kutt en IFC-modell med et snittplan](topic:section-plane).

## Hva du skal se

- Med flere elementer valgt sier {{ui:Egenskaper}} hvor mange de er, og lister dem etter klasse. Klikk på ett alene for å se egenskapene.
- Skjulte elementer kan ikke velges: et klikk treffer det som er bak dem.
- Gjennomsiktige elementer kan heller ikke velges, så du kan klikke rett gjennom vegger til det du isolerte.
- Kanter skjules sammen med elementet sitt og blir svake med det.
- Skjuling, isolering og gjennomsiktighet beholdes mens du redigerer, plasserer bibliotekselementer eller kutter modellen med et snittplan. Å åpne en annen modell viser alt igjen.

## Vanlige feil

- **Menyvalgene er gråtonet.** Ingenting er valgt. Klikk på et element først, og pek på et valg for å lese hvorfor det ikke kan brukes.
- **Isoler viste en vegg jeg hadde skjult.** Isolering viser nøyaktig det du valgte, skjult eller ikke.
- **En hel etasje mangler.** Det er listen {{ui:Etasjer}}, ikke {{ui:Vis alle}}: kryss av for etasjen igjen.

## Neste

- [Vis og skjul etasjer, rom og kanter](topic:storeys-and-spaces)
- [Kutt en IFC-modell med et snittplan](topic:section-plane)
