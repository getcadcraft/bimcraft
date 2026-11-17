---
title: Angiv mål på et gitter
summary: Vis afstanden mellem nabogitterlinjer og gitterets samlede størrelse på hver etages plan. Målene gemmes i IFC-filen og følger gitteret, når linjerne ændres.
keywords: gitter, gittermål, mål, afstand, fag, samlet størrelse, bobler, søjlegitter, plan, ark
from: aaea5d08
---

## Hvad du skal gøre

Angiv afstanden mellem gitterlinjerne og gitterets samlede størrelse på planerne, uden for boblerne, så de ark, der laves af dem, bærer målene. Du skal bruge et gitter først: se [Gitter og søjler](topic:grids-and-columns).

## Trin

1. Vis planen for en etage, og klik på {{ui:Gitter}} for at tænde gitterværktøjet. Rækken med gitterindstillinger vises.
2. Sæt kryds i {{ui:Mål}}. Afstanden mellem nabonummererede linjer og mellem nabobogstavslinjer samt den samlede størrelse i begge retninger tegnes på planen.
3. Vælg en anden etage: de samme mål vises på dens plan.
4. Flyt en linje, omdøb en eller tilføj en. Målene følger gitteret.
5. Fjern krydset i {{ui:Mål}} for at fjerne målene igen.

## Noter

- Hver ændring er ét fortrydelsestrin: {{key:Mod+Z}} tager den tilbage.
- Indstillingen gemmes i IFC-filen sammen med gitteret, og de planer, der placeres på ark, bærer målene.
- Hvis modellen ikke har et gitter, du kan ændre (et gitter, der kom med en fil fra et andet program, kan ikke ændres her), viser statuslinjen »Der er intet gitter at ændre.«
