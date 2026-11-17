---
title: Afspil en byggetidsplan på modellen
summary: Åbn en opgaveliste som CSV, forbind hver opgave med elementer via en egenskab, og gå gennem datoerne for at se, hvad der er bygget, i gang og endnu ikke startet.
keywords: 4d, tidsplan, byggerækkefølge, tidslinje, etapper, program, gantt, opgaver, datoer, simulering, fremskridt, bygget, csv, etape, fase, arbejdspakke, wbs, gruppe
from: 1b985a64
---

## Hvad du skal gøre

Se bygningen blive rejst: hver opgave i din tidsplan forbundet med de elementer, den bygger, vist dag for dag.

## Trin

1. Åbn en IFC-model, og åbn {{ui:4D-tidsplan}} i venstre panel.
2. Klik på {{ui:Download en skabelon}} for en opgaveliste med en uge pr. etage, og ret den i et regneark. Eller skriv din egen.
3. Klik på {{ui:Åbn en opgaveliste…}}, og vælg CSV-filen.
4. Træk datoskyderen, eller klik på {{ui:Afspil}}.

## Opgavelisten

En CSV-fil med en overskriftsrække og kolonnerne **Task**, **Start**, **Finish**, **Field** og **Value**. Kommaer eller semikolon virker begge dele.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Skriv datoer som YYYY-MM-DD.
- En række knytter opgaven til hvert element, hvis **Field** har præcis den **Value**. Feltet er en egenskab som Storey, Class, Name, Type, Material, Tag eller GlobalId, eller en egenskab skrevet med sit sæt og navn: `Pset_WallCommon.FireRating`.
- Gentag en opgave på flere rækker, med de samme datoer, for at knytte flere elementer til den.

## Etaper og arbejdspakker

Tilføj en **Stage**-kolonne, en **Package**-kolonne eller begge for at samle opgaver i etaper og arbejdspakker. Phase og WBS virker også som kolonnenavne.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- En opgave hører til én etape og én pakke. Hvis en senere række for samme opgave angiver en anden, vises den række med sit linjenummer og udelades.
- Samme pakkenavn i to etaper er to pakker.

Når listen har grupper, vises en {{ui:Vis}}-liste over datoen. Vælg en etape eller en pakke, og den afspilles som én:

- skyderen og {{ui:Afspil}} kører fra gruppens første start til dens sidste afslutning,
- kun gruppens opgaver vises og markeres, og alt uden for gruppen er gennemsigtigt,
- linjen under listen viser, hvor mange af dens opgaver der er færdige, i gang og endnu kommende på den dato,
- {{ui:Vælg dens elementer}} vælger hvert element i gruppen, til {{ui:Vis}}, {{ui:Snit}} eller en liste.

Vælg **Alle opgaver** for at se hele tidsplanen igen.

## Hvad du bør se

- **Bygget**: elementer, hvis opgaver alle er afsluttet, i deres egne farver.
- **I gang**: elementer med en opgave i gang den dag, i okker. En opgave er i gang fra sin startdato til og med sin slutdato.
- **Ikke startet**: gennemsigtige.
- Elementer uden opgave bliver, som de er. Listen viser, hvor mange elementer hver opgave fandt. Rækker, der ikke kunne læses, eller som ikke fandt noget, vises med deres linjenumre.

## Forbindelser, Gantt-diagrammet og MS Project

- Åbn en Microsoft Project XML-fil (`.xml`) eller en CSV-fil med en kolonne `Predecessors`. Forbindelser kan være slut til start, start til start, slut til slut eller start til slut, hver med et forspring eller en forsinkelse i dage.
- Under opgavelisten tegner Gantt-diagrammet hver opgave som en søjle med pile for forbindelserne. Opgaver på den kritiske vej er røde. En forbindelsesløkke eller en forudgående opgave, der ikke findes, vises i panelet.
- {{ui:Gem som MS Project XML}} og {{ui:Gem CSV med forbindelser}} skriver tidsplanen tilbage med dens forbindelser.

## Næste

- [Find elementer efter klasse, navn eller egenskab](topic:find)
- [Farvelæg elementer efter en egenskab](topic:color-by-property)
