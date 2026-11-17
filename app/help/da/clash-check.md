---
title: Find kollisioner
summary: Find steder, hvor elementer fra ét sæt løber ind i elementer fra et andet — kanaler gennem bjælker, vægge ind i dæk — i én model eller på tværs af flere, med en tolerance, og gør en kollision til et emne.
keywords: kollision, kollisionskontrol, hård kollision, interferens, koordination, overlap, tolerance, mep, konstruktion
from: 9cb12346
---

## Hvad du skal gøre

Find de steder, hvor to sæt elementer løber ind i hinanden, fx alt i installationsmodellen mod konstruktionen, og kig derefter på hver enkelt og behold dem, der betyder noget, som emner.

## Trin

1. Åbn en IFC-model, og tilføj de andre med {{ui:Tilføj en model…}}, hvis du kontrollerer på tværs af modeller. Se [Se flere IFC-modeller sammen](topic:several-models).
2. Åbn {{ui:Kollisionskontrol}} i venstre panel.
3. Under {{ui:Kontrollér}} og {{ui:Mod}} vælg to sæt: de elementer, du har valgt, en klasse (over alle åbne modeller), et gemt søgesæt (se [Find elementer efter klasse, navn eller egenskab](topic:find)), eller alt.
4. Angiv, hvor meget overlap der skal ignoreres, i meter. 0.01 ignorerer elementer, der lige akkurat rører hinanden.
5. Klik på {{ui:Kør}}. Kontrollen kører i baggrunden; {{ui:Annuller}} stopper den.
6. Klik på et resultat for at se det: de to elementer vælges og vises, alt andet gøres gennemsigtigt, og visningen zoomer til dem.
7. Klik på {{ui:Lav et emne ud af den}} under et resultat for at skrive det op på fanen {{ui:Emner}}. Se [Emner og BCF-filer](topic:issues-bcf).

## Hvad du bør se

- Kollisionerne listet med begge elementers navne (og deres filer, når flere modeller er åbne) og hvor dybt de overlapper, det dybeste først.
- Flader, der kun rører hinanden, fx en væg, der står på et dæk, eller en dør i sin åbning, er ikke kollisioner.

## Godt at vide

- Dette er et grundlæggende tjek for hård kollision: elementer, hvis overflader krydser hinanden. Et element, der sidder helt skjult inde i et andet (et rør gemt i en væg), findes endnu ikke.
- Dybden er, hvor langt de to elementers grænser mindst overlapper: en vejledning, ikke en præcis måling.

## Næste

- [Mål afstande, fladearealer og placeringer i 3D](topic:measure)
- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
