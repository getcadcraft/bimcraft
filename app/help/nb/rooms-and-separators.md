---
title: Rom og romskillere
summary: Velg et rom for å gi det navn og nummer, og for å lese arealet, omkretsen og volumet. Tegn en romskiller der to rom møtes uten vegg mellom dem.
keywords: rom, romskiller, skilleline, IfcSpace, navn, nummer, areal, omkrets, volum, åpen planløsning, dele et rom, kjøkken og stue, ikke omsluttet
from: d4c1d66b
---

## Formål

Gi navn til rommene veggene danner, og del et åpent rom i to uten vegg.

## Hvor verktøyene finnes

- Båndoppsett: {{ui:Arkitektur}} › **Rom og areal** › {{ui:Rom}} og {{ui:Romskiller}}.
- Klassisk oppsett: verktøylinjen Tegn › {{ui:Rom}}-menyen.
- Alle menystiler: kommandoene heter Rom og Romskiller; kommandopaletten finner dem.

## Trinn

1. Tegn veggene. Hver lukket sløyfe av vegger er allerede et rom: BimCraft lager det, nummererer det og gir det arealet mens du tegner.
2. Velg {{ui:Rom}}. Beveg deg over planen: rommet under pekeren lyser opp med areal, omkrets og volum.
3. For å gi rom navn raskt, skriv inn et {{ui:Navn}} og et {{ui:Nummer}} på raden først, og klikk så i rommet. Nummeret går opp med én for neste rom (101, 102; A-09, A-10).
4. Eller klikk bare et rom: det velges, og Egenskaper har navnet, nummeret, arealet, omkretsen, volumet og etiketten.
5. For å dele et åpent rom, velg {{ui:Romskiller}} og klikk to punkter: vegg til vegg, eller vegg til en annen skiller. Fortsett å klikke for en kjede; Enter, Esc eller dobbeltklikk avslutter den.

## Hva en skiller gjør

- Den avgrenser rom som en vegg uten tykkelse. Arealene til de to rommene blir nøyaktig det gamle rommet.
- Rommet som holder det gamle rommets midte, beholder navn og nummer. Det andre er nytt.
- En skiller som stopper ute i det åpne, uten å berøre noe i den ene enden, deler ikke noe. Forleng den, så gjør den det.
- Den delen av en skiller som ligger inne i en vegg, ignoreres, så du kan feste til veggenes senterlinjer.
- Velg en skiller og trykk Delete for å fjerne den: de to rommene blir ett igjen. Angre setter den tilbake.

## Hvis det ikke er et rom der du klikker

Statuslinjen sier det: veggene lukker seg ikke der. Lukk gapet, eller tegn en skiller over det. Ingenting avvises; det finnes bare ikke et lukket rom ennå.

## I IFC

Et rom er en IfcSpace med nummeret (Name), navnet (LongName) og Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volumet er arealet ganget med høyden opp til nivået over.

En romskiller er en IfcVirtualElement, den enheten IFC bruker for en grense som ikke er bygget. Den har en linje og ingen kropp, så et annet program leser ingen vegg og teller ingenting for den.

## Ikke bygget ennå

- Buede skillere.
- Et rom som følger en skrå himling: volumet er alltid areal ganget med nivåhøyden.
- Romgrenserelasjoner (IfcRelSpaceBoundary) skrives ikke, verken for vegger eller for skillere.

Se også [Rom- og arealetiketter](topic:room-and-area-tags), [Arealer og arealgrenser](topic:areas-and-area-boundaries).
