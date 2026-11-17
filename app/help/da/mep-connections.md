---
title: Forbind rør og kanaler til udstyr
summary: Start eller slut et rør eller en kanal på en port, så den overtager portens dimension og system og sidder fast i den, og kontrollér derefter forbindelserne — åbne porte, dimensions- og systemuoverensstemmelser og føringer uden kilde.
keywords: mep, forbind, forbindelse, forbindelser, port, porte, åben port, dimensionsuoverensstemmelse, systemuoverensstemmelse, kilde, kontrollér forbindelser, fastlåst, følg, flyt udstyr, ifcrelconnectsports, koordinering
from: 29144fb0
---

## Hvad du gør

Sammenkæd føringerne med udstyret, så modellen er ét sammenhængende system: en pumpes udløb til røret, der forlader den, en diffusors hals til dens grenkanal. Lad derefter BimCraft liste det, der ikke er sammenkædet.

## Tegn fra en port

1. Vælg {{ui:Rør}} eller {{ui:Kanal}}.
2. Flyt markøren hen over en port på et stykke udstyr (de små cirkler; en åben port tegnes i advarselsfarven). Markøren snapper til den og siger **på en port**.
3. Klik: føringen starter i portens højde og **overtager dens dimension og system** (et rør overtager også systemets sædvanlige materiale). Statuslinjen siger, hvad den overtog.
4. Tegn videre som sædvanligt. Hvis en føring slutter på en anden port, fastlåses den ende også.

En føringsende på en port er **fastlåst** til den: flytter eller drejer du udstyret (under Egenskaber), følger føringens ende med; redigerer du føringen, bliver den ende på porten. Føringens øvrige hjørner bliver, hvor de er, så efter en stor flytning kan det første stykke løsne sig fra porten i en vinkel: flyt det næste hjørne også.

## Kontrollér forbindelserne

Åbn {{ui:Build}} og klik på {{ui:Kontrollér forbindelser}}. Listen under bjælken viser:

| Linje | Hvad det betyder |
|---|---|
| En port er ikke forbundet | Et stykke udstyr har en forbindelse, som intet er tegnet til |
| Intet i enden | En føring ender i luften |
| Sammenkoblede porte med forskellige dimensioner | En føring i én størrelse møder en port eller føring i en anden uden reduktion (et rørs nominelle dimension, en kanals form og sider) |
| Sammenkoblede porte med forskellige systemer | For eksempel en returkanal på en tilluftsdiffusor |
| Et rør sammenkoblet med en kanal | To forbindelser af forskellig slags møder hinanden |
| Intet udstyr i dets net forsyner den | Intet, en føring er sammenkoblet med, uanset hvor langt henne, har et udløb. Afløb, regnvand og udluftninger spørges ikke om dette: deres vand kommer fra armaturer |
| Fastlåst til en port på udstyr, der ikke længere er i modellen | Udstyret blev slettet; tegn enden igen eller slet føringen |

Fejl kommer først. Klik på en linje for at vælge det, den nævner. {{ui:Luk}} skjuler listen. Kontrollen læser modellen, som den er tegnet: den kontrollerer forbindelser og dimensioner, aldrig flow, tryk eller afbalancering.
