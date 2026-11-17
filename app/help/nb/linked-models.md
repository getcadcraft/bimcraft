---
title: Knytt andre modeller til for koordinering
summary: Vis en annen IFC-modell ved siden av din ved referanse (aldri sammenslått), plasser den etter felles koordinater, kartkoordinater eller to punkter, fest til den mens du tegner, og last den på nytt når filen endres.
keywords: knytt, tilknyttet modell, referanse, xref, koordinering, samordning, konstruksjon, MEP, rådgiver, felles koordinater, oppmåling, kartkoordinater, last på nytt, fjern fra minnet, dokumentreferanse, IfcDocumentReference
from: 3e0f1eab
---

## Hva du gjør

Tegn mot en rådgivers modell (konstruksjonen, installasjonene, den eksisterende bygningen) uten å kopiere noe inn i din egen fil.

En **tilknyttet modell** vises i 3D-visningen og kuttes på planene dine, men den endres aldri og lagres aldri inn i modellen din. Din modell beholder bare koblingen: filens navn og hvor den skal.

## Knytt til en modell

1. I venstre panels seksjon {{ui:Tilknyttede modeller}} klikker du {{ui:Knytt til en modell…}} og velger IFC-filen. Den vises med en gang, og raden viser **Vist**.
2. Velg hvor den skal i {{ui:Plassering}}:
   - **Felles koordinater** (for å starte): dens koordinater er dine, som når begge modellene ble satt ut fra samme origo.
   - **Kartkoordinater**: begge filenes kartkoordinater justerer dem. Begge må ha en kartkonvertering; BimCraft sier fra når en av dem mangler.
   - **Etter to punkter…**: klikk et punkt på den tilknyttede modellen, og deretter hvor det skal i din. Deretter et nytt par. Koblingen flyttes og dreies (om den vertikale aksen) for å passe.
3. Hver kobling og hver endring av plassering er ett steg: {{key:Mod+Z}} angrer den.

## Arbeid med den

- Planene viser den tilknyttede modellen kuttet ved nivåets snitthøyde som tynne linjer, og verktøyet {{ui:Vegg}} og de andre tegneverktøyene fester seg til hjørnene og kantene.
- Velg elementer i 3D-visningen for å lese egenskapene deres. En tilknyttet modell er aldri den du redigerer, så radioknappen i {{ui:Modeller}} er av.
- **Har filen endret seg?** Når nettleseren kan følge filen (en fil åpnet via filvelgeren, eller i Studio), laster BimCraft koblingen på nytt av seg selv noen sekunder etter at filen er lagret igjen, og sier fra om det. Ellers klikker du {{ui:Last på nytt}}.
- {{ui:Fjern fra minnet}} skjuler den og frigjør minnet. Koblingen blir i modellen din. {{ui:Last…}} viser den igjen (du velger filen: en nettleser kan ikke åpne en fil ut fra navnet alene).
- × fjerner koblingen fra modellen din.

## Hva du bør se

- I IFC-filen din: en IfcDocumentReference for hver kobling (filens navn), knyttet til prosjektet, og hvor den skal i prosjektets egenskapssett CadCraft_Links. Når du åpner modellen igjen, listes koblingene som **Ikke lastet** til du laster dem.

:::note
Kollisjonskontroller, Sammenlign og Finn kan bruke en lastet kobling som enhver annen åpen modell: se [Se flere IFC-modeller samtidig](topic:several-models).
:::
