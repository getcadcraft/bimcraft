---
title: Spill av en byggefremdriftsplan på modellen
summary: Åpne en oppgaveliste som CSV, koble hver oppgave til elementer via en egenskap, og gå gjennom datoene for å se hva som er bygget, under arbeid og ikke startet ennå.
keywords: 4d, fremdriftsplan, byggerekkefølge, tidslinje, etappeinndeling, program, gantt, oppgaver, datoer, simulering, fremdrift, bygget, csv, etappe, fase, arbeidspakke, wbs, gruppe
from: 1b985a64
---

## Hva du skal gjøre

Se bygningen vokse frem: hver oppgave i fremdriftsplanen er koblet til elementene den bygger, vist dag for dag.

## Steg

1. Åpne en IFC-modell og åpne {{ui:4D-fremdrift}} i venstre panel.
2. Klikk {{ui:Last ned en mal}} for en oppgaveliste med én uke per etasje, og endre den i et regneark. Eller skriv din egen.
3. Klikk {{ui:Åpne en oppgaveliste…}} og velg CSV-filen.
4. Dra datoglideren, eller klikk {{ui:Spill av}}.

## Oppgavelisten

En CSV med en overskriftsrad og kolonnene **Task**, **Start**, **Finish**, **Field** og **Value**. Komma eller semikolon fungerer begge deler.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Skriv datoer som ÅÅÅÅ-MM-DD.
- En rad kobler oppgaven til hvert element der **Field** har nøyaktig den **Value**. Feltet er en egenskap som Storey, Class, Name, Type, Material, Tag eller GlobalId, eller en egenskap skrevet med sitt sett og navn: `Pset_WallCommon.FireRating`.
- Gjenta en oppgave på flere rader, med samme datoer, for å koble flere elementer til den.

## Etapper og arbeidspakker

Legg til en kolonne **Stage**, en kolonne **Package**, eller begge, for å samle oppgaver i etapper og arbeidspakker. Phase og WBS fungerer også som kolonnenavn.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- En oppgave hører til én etappe og én pakke. Hvis en senere rad for samme oppgave angir en annen, listes den raden med linjenummer og utelates.
- Samme pakkenavn i to etapper er to pakker.

Når listen har grupper, vises en {{ui:Vis}}-liste over datoen. Velg en etappe eller en pakke, så spilles den av som én enhet:

- glideren og {{ui:Spill av}} går fra gruppens første start til gruppens siste slutt,
- bare gruppens oppgaver listes og farges, og alt utenfor gruppen er gjennomsiktig,
- linjen under listen viser hvor mange av oppgavene som er ferdige, under arbeid og ennå ikke startet på den datoen,
- {{ui:Velg elementene}} velger alle elementene i gruppen, for {{ui:Vis}}, {{ui:Snitt}} eller en tabell.

Velg **Alle oppgaver** for å se hele fremdriftsplanen igjen.

## Hva du skal se

- **Bygget**: elementer der alle oppgavene er fullført, i sine egne farger.
- **Under arbeid**: elementer med en oppgave som pågår den dagen, i okkergult. En oppgave pågår fra startdatoen til sluttdatoen.
- **Ikke startet**: gjennomsiktig.
- Elementer uten oppgave forblir som de er. Listen viser hvor mange elementer hver oppgave fant. Rader som ikke kunne leses, eller som ikke fant noe, listes med linjenummer.

## Koblinger, Gantt-diagram og MS Project

- Åpne en Microsoft Project XML-fil (`.xml`) eller en CSV som har en kolonne `Predecessors`. Koblinger kan være slutt til start, start til start, slutt til slutt eller start til slutt, hver med et forskudd eller en forsinkelse i dager.
- Under oppgavelisten tegner Gantt-diagrammet hver oppgave som en stolpe, med piler for koblingene. Oppgaver på kritisk linje er røde. En koblingssløyfe eller en forgjenger som ikke finnes, listes i panelet.
- {{ui:Lagre som MS Project XML}} og {{ui:Lagre CSV med koblinger}} skriver fremdriftsplanen tilbake med koblingene.

## Neste

- [Finn elementer etter klasse, navn eller egenskap](topic:find)
- [Farge elementer etter en egenskap](topic:color-by-property)
