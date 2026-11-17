---
title: Utviklingsnivå (LOD) og milepælskontroller
summary: Gi elementer et utviklingsnivå, se hvor nivået kommer fra, kontroller modellen mot LOD-nivået en milepæl krever, og rett opp manglende merkelapper og navnløse rom. Alle kontroller gir bare råd; ingenting blir hindret.
keywords: lod, utviklingsnivå, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, milepæl, milepæltabell, modellkontroller, manglende merkelapper, navnløse rom, generisk tidlig, ifc-klasse, klassifisering
from: 2091c79b
---

## Hva du gjør

Angi hvor langt utviklet hvert element er, og kontroller deretter hele modellen mot det en prosjektmilepæl krever.

## Steg

1. Velg et element (eller flere) og åpne {{ui:Egenskaper}}. Finn {{ui:Utviklingsnivå}}.
2. Velg et nivå fra listen. Hvert nivå er navngitt etter hva det betyr, og hvert nivå inkluderer nivåene under seg. Ett trinn i {{ui:Angre}} dekker hele valget.
3. Les hvor nivået kommer fra: dette elementet, typen, eller et feltverifisert merke.
4. For å kontrollere modellen, åpne {{ui:Modellkontroller}} til venstre, og deretter LOD-milepæler. Velg milepælen og tabellen (startabellen, eller din egen CSV- eller JSON-fil med {{ui:Last}}).
5. Klikk {{ui:Kontroller modellen}}. Summene og en linje for hver tabellrad viser hva som har nådd nivået sitt og hva som ikke har det; funnene vises også i listen {{ui:Problemer}}.
6. Under {{ui:Manglende merkelapper og navnløse rom}} klikker du {{ui:Finn dem}}, redigerer forslagene om du vil, og klikker {{ui:Bruk}}.

## Hva som vises

- Nivået du valgte på elementet, med IFC-klassen og klassifiseringskodene ved siden av.
- Summer og rader for milepælen. En tabell endrer aldri hva et nivå betyr: skalaen er fast, og en tabell sier bare hvilket nivå en milepæl krever.
- «Generisk tidlig»: råd om å holde elementer generiske ved en tidlig milepæl. Det er bare råd.

## Bra å vite

- Ingenting her hindrer deg. En modell under nivået en milepæl krever blir oppført, ikke avvist.
- De tre delene av et nivå (geometri, informasjon, dokumentasjon) kan settes hver for seg. Et merke viser «oppfylt», «under» eller «ikke angitt».
