---
title: Rum og rumseparatorer
summary: Vælg et rum for at navngive og nummerere det og læse dets areal, omkreds og volumen. Tegn en rumseparator, hvor to rum mødes uden væg imellem.
keywords: rum, rumseparator, adskillelseslinje, zone, IfcSpace, navn, nummer, areal, omkreds, volumen, åben planløsning, opdele et rum, køkken og stue, ikke lukket
from: d4c1d66b
---

## Hvad du skal gøre

Navngiv de rum væggene danner, og del et åbent rum i to uden en væg.

## Hvor værktøjerne er

- Båndlayouts: {{ui:Architecture}} › **Rum og areal** › {{ui:Room}} og {{ui:Room Separator}}.
- Klassisk layout: værktøjslinjen {{ui:Draw}} › menuen {{ui:Rooms}}.
- Enhver menustil: kommandoerne hedder Room og Room Separator; kommandopaletten finder dem.

## Trin

1. Tegn væggene. Hver lukket løkke af vægge er allerede et rum: BimCraft laver det, nummererer det og giver det dets areal, mens du tegner.
2. Vælg {{ui:Room}}. Bevæg dig hen over planen: rummet under markøren lyser op med sit areal, omkreds og volumen.
3. For at navngive rum hurtigt skrives først et {{ui:Name}} og et {{ui:Number}} i rækken, og derefter klikkes i rummet. Nummeret tæller op med én til næste rum (101, 102; A-09, A-10).
4. Eller klik blot på et rum: det vælges, og Egenskaber har dets navn, nummer, areal, omkreds, volumen og tag.
5. For at dele et åbent rum vælges {{ui:Room Separator}}, og der klikkes to punkter: væg til væg, eller væg til en anden separator. Bliv ved med at klikke for en kæde; Enter, Esc eller et dobbeltklik afslutter den.

## Hvad en separator gør

- Den afgrænser rum som en væg uden tykkelse. De to rums arealer lægges præcis sammen til det rum, de var.
- Rummet, der rummer det gamle rums midte, beholder sit navn og nummer. Det andet er nyt.
- En separator, der stopper i det åbne og ikke rører noget i den ene ende, deler intet. Forlæng den, så gør den det.
- Den del af en separator, der ligger inde i en væg, ignoreres, så du kan fange midtlinjer på vægge.
- Vælg en separator og tryk Delete for at fjerne den: de to rum bliver til ét igen. Fortryd sætter den tilbage.

## Hvis der ikke er noget rum, hvor du klikker

Statuslinjen siger det: væggene lukker ikke der. Luk hullet, eller tegn en separator hen over det. Intet afvises; der er blot endnu ikke et lukket rum.

## I IFC

Et rum er en IfcSpace med sit nummer (Name), navn (LongName) og Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Volumenet er arealet gange højden til etagen over.

En rumseparator er et IfcVirtualElement, den enhed IFC har til en grænse, der ikke er bygget. Den har en linje og ingen krop, så et andet program læser ingen væg og tæller intet for den.

## Ikke lavet endnu

- Buede separatorer.
- Et rum, der følger et skråt loft: volumenet er altid areal gange etagehøjden.
- Rumgrænserelationer (IfcRelSpaceBoundary) skrives ikke, hverken for vægge eller separatorer.

Se også [Rum- og arealtags](topic:room-and-area-tags), [Arealer og arealgrænser](topic:areas-and-area-boundaries).
