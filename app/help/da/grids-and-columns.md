---
title: Gitter og søjler
summary: Anlæg gitterlinjer med nummererede og bogstavede bobler, efter afstand eller én ad gangen, tegn vægge og søjler langs dem, og se dem på planer, facader og snit.
keywords: gitter, gitre, gitterlinje, søjlegitter, akse, akser, boble, gridlinje, konstruktionsgitter, 1 2 3, A B C, søjle, søjler, pille, stolpe, fang, IfcGrid, IfcColumn
from: bf99a8f7
---

## Hvad du skal gøre

Placér en bygning på et gitter, og tegn derefter vægge og placér søjler langs gitterets linjer.

## Placér et helt gitter

1. Tænd {{ui:Tegn}}, og vælg {{ui:Build}} › {{ui:Gitter}}.
2. Klik på {{ui:Placér et gitter…}}. Angiv, hvor mange **nummererede linjer** (1, 2, 3…) og **bogstavlinjer** (A, B, C…) du vil have, og hvor langt der er mellem dem. Skriv én afstand, eller flere adskilt med kommaer for uens fag (for eksempel `20', 24', 20'`). {{ui:Ud over de sidste linjer}} er, hvor langt hver linje løber ud over de yderste linjer af den anden slags, og {{ui:Drejet (grader)}} drejer hele gitteret.
3. Klik på {{ui:Placér det}}, og klik derefter, hvor det første kryds (1 / A) skal være. Forhåndsvisningen følger markøren.

Nummererede linjer løber op ad planen og fordeles hen over den; bogstavlinjer løber hen over planen og fordeles op ad den. Bogstaverne springer I og O over, som på tegninger, så de aldrig læses som 1 og 0.

## Tegn gitterlinjer én ad gangen

Med {{ui:Gitter}} tændt klikker du, hvor en linje begynder, og hvor den slutter. Den får den næste mærkat for de linjer, den løber langs (efter 3 kommer 4; efter B kommer C). Tryk på {{key:Esc}} for at stoppe.

## Ændr en gitterlinje

Med {{ui:Gitter}} tændt klikker du på en linje for at vælge den. Skriv en ny {{ui:Mærkat}} og tryk på {{key:Enter}}, eller klik på {{ui:Slet denne linje}} (eller tryk på {{key:Delete}}). {{ui:Bobler}} sætter boblerne i begge ender, i starten eller slutningen af hver linje, eller ingen steder. Hver ændring er ét trin: {{key:Mod+Z}} tager den tilbage.

## Tegn langs gitteret

Værktøjet {{ui:Væg}}, værktøjet {{ui:Søjle}} og de andre tegneværktøjer fanger gitterlinjer og de steder, hvor de krydser hinanden (fangemærket er en lille cirkel med et kryds).

**Søjler:** vælg {{ui:Build}} › {{ui:Søjle}}, vælg form (rektangulær eller rund), størrelse og om søjlen løber **til etagen over** eller til en fast højde, og klik derefter. {{ui:Ved hver gitterkrydsning}} placerer en søjle ved hvert kryds, der endnu ikke har en. Klik på en søjle for at ændre dens form, størrelse eller højde under {{ui:Egenskaber}}; {{key:Delete}} fjerner den. Søjler, der løber til etagen over, følger den, når dens højde ændres.

## Det skal du se

- Gitteret på planen for hver etage, med en boble og dens mærkat i enderne af hver linje.
- Gitterlinjer i tegningssættet: på planerne og på facader og snit, hvor en linje ses ende på, med sin boble over bygningen. Se [Facader, snit og ark](topic:sheets).
- I IFC-filen: ét gitter for bygningen (IfcGrid, med sine nummererede linjer i én liste og sine bogstavlinjer i den anden), og søjler som IfcColumn med deres størrelse, højde og mængder. Andre BIM-programmer viser begge dele.

:::note
Et gitter, der kom med en fil fra et andet program, vises, og værktøjerne fanger det, men dets linjer kan ikke ændres her.
:::
