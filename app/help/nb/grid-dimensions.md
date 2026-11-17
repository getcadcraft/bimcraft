---
title: Legg til mål på et rutenett
summary: Vis avstanden mellom nabolinjene i rutenettet og rutenettets samlede størrelse på planen for hvert nivå. Målene lagres i IFC-filen og følger rutenettet når linjene endres.
keywords: rutenett, rutenettmål, mål, avstand, fag, samlet størrelse, bobler, søylerutenett, plan, ark
from: aaea5d08
---

## Hva du skal gjøre

Sett avstanden mellom rutenettlinjene og den samlede størrelsen på rutenettet på planene, utenfor boblene, slik at arkene som lages av dem viser målene. Du trenger først et rutenett: se [Rutenett og søyler](topic:grids-and-columns).

## Steg

1. Vis planen for et nivå og klikk på {{ui:Rutenett}} for å slå på rutenettverktøyet. Rutenettalternativene vises.
2. Kryss av for {{ui:Mål}}. Avstanden mellom nabolinjene med tall og mellom nabolinjene med bokstaver, samt den samlede størrelsen i hver retning, tegnes inn på planen.
3. Velg et annet nivå: de samme målene vises på planen for det nivået.
4. Flytt en linje, endre navnet på en av dem eller legg til en ny. Målene følger rutenettet.
5. Fjern krysset ved {{ui:Mål}} for å fjerne målene igjen.

## Merknader

- Hver endring er ett steg du kan angre: {{key:Mod+Z}} angrer den.
- Innstillingen lagres i IFC-filen sammen med rutenettet, og planene som er plassert på ark, viser målene.
- Hvis modellen ikke har et rutenett du kan endre (et rutenett som kom i en fil fra et annet program, kan ikke endres her), viser statuslinjen «Det finnes ikke noe rutenett å endre.»
