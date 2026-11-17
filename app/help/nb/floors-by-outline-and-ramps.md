---
title: Dekker i alle former, åpninger og ramper
summary: Tegn et dekke eller en platting etter omrisset (en balkong, en utkraging, et repos), kutt åpninger i det, og tegn ramper med reposene deres.
keywords: dekke, platting, omriss, balkong, utkraging, repos, terrasse, gulvåpning, hull, sjakt, hulrom, rampe, helning, tilgjengelig rampe, rullestolrampe, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Hva du skal gjøre

Lag dekker som ikke følger rommene, for eksempel en balkong utenfor veggene, og tegn ramper mellom nivåene.

## Tegn et dekke etter omrisset

1. Slå på {{ui:Tegn}}, velg nivået, og velg så {{ui:Bygg}} › {{ui:Dekke etter omriss}}.
2. I raden under verktøyene velger du utførelse (betongdekke eller tregulv), bruk (dekke eller repos), tykkelse og hvor overkanten ligger over nivået (0 = i nivå med gulvet i etasjen; en negativ verdi setter det lavere).
3. Klikk hjørnene. Verktøyet fester seg til vegger, rutenettlinjer og krysningene deres; hold {{key:Shift}} for å holde en kant rettvinklet. Lengden på hver kant og arealet vises underveis. {{key:Backspace}} tar tilbake det siste hjørnet.
4. Klikk det første hjørnet igjen, dobbeltklikk, eller trykk {{key:Enter}} for å avslutte.

## Kutt en åpning

Klikk dekket (i 3D-visningen, eller omrisset på planen), klikk så {{ui:Legg til en åpning}} i {{ui:Egenskaper}}, klikk hjørnene i åpningen inne i dekket, og avslutt som over. Dekkets {{ui:Egenskaper}} lister dets åpninger, hver med {{ui:Slett}}, og arealet uten dem.

## Tegn en rampe

1. Velg {{ui:Bygg}} › {{ui:Rampe}}. Sett bredden, og om den går **til nivået over** eller **opp en stigning** du skriver inn.
2. Velg hvordan den settes: **etter helning** (1:12 til å begynne med; rampen er så lang som stigningen krever) eller **etter lengde** (ditt andre klikk setter lengden, og helningen følger).
3. Klikk foten av rampen (midten av nederste kant), og klikk så retningen oppover. Forhåndsvisningen viser lengden, løpene og helningen.

En stigning på mer enn 30 inches (760 mm) deles i løp med et 5-foot (1525 mm) repos mellom dem. Dette er vanlige planleggingsverdier, ikke bygningsreglene: sjekk reglene der du bygger. En rampe brattere enn 1:12 merkes i sine {{ui:Egenskaper}}.

## Hva du bør se

- Hvert dekke, hver åpning og rampe er ett trinn: {{key:Mod+Z}} tar det tilbake.
- På planen vises et tegnet dekkes omriss (en åpning er tegnet krysset), og en rampes omriss, løp, repos og en pil opp med helningen.
- Egenskaper for et tegnet dekke (utførelse, bruk, tykkelse, overkant, areal, åpninger) og for en rampe (bredde, overkant, stigning, helning eller lengde); {{key:Delete}} fjerner begge.
- En rampe til nivået over følger det nivået når høyden endres.
- I IFC-filen: et tegnet dekke er en platting (IfcSlab, et dekke eller et repos) med åpningene kuttet ut (IfcOpeningElement); en rampe er IfcRamp laget av skrå løp (IfcRampFlight) og reposplater, med helning og bredde.

:::note
Dekker tegnet på denne måten blir der du tegnet dem. Dekker laget med {{ui:Dekke}} følger rommene når veggene flyttes: se [Rom, dekker, himlinger og tak](topic:floors-and-roofs).
:::
