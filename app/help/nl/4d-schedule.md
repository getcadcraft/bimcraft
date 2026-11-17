---
title: Een bouwplanning op het model afspelen
summary: Open een takenlijst als CSV, koppel elke taak via een eigenschap aan elementen en blader door de datums om te zien wat gebouwd is, wat in uitvoering is en wat nog niet gestart is.
keywords: 4d, planning, bouwvolgorde, tijdlijn, fasering, programma, gantt, taken, datums, simulatie, voortgang, gebouwd, csv, stadium, fase, werkpakket, wbs, groep
from: 1b985a64
---

## Wat u gaat doen

Bekijk het gebouw terwijl het verrijst: elke taak in uw planning gekoppeld aan de elementen die ze bouwt, dag voor dag getoond.

## Stappen

1. Open een IFC-model en open {{ui:4D schedule}} in het linkerpaneel.
2. Klik op {{ui:Download a template}} voor een takenlijst met een week per verdieping, en pas die aan in een spreadsheet. Of schrijf er zelf een.
3. Klik op {{ui:Open a task list…}} en kies de CSV.
4. Sleep de datumschuif, of klik op {{ui:Play}}.

## De takenlijst

Een CSV met een kopregel en de kolommen **Task**, **Start**, **Finish**, **Field** en **Value**. Komma's of puntkomma's werken beide.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Verdieping 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Dak | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Dak | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Schrijf datums als JJJJ-MM-DD.
- Een rij koppelt de taak aan elk element waarvan het **Field** precies die **Value** heeft. Het veld is een eigenschap zoals Storey, Class, Name, Type, Material, Tag of GlobalId, of een eigenschap die u schrijft als set en naam: `Pset_WallCommon.FireRating`.
- Herhaal een taak op meer rijen, met dezelfde datums, om meer elementen aan haar te koppelen.

## Fasen en werkpakketten

Voeg een kolom **Stage**, een kolom **Package**, of beide toe om taken in fasen en werkpakketten te groeperen. Phase en WBS werken ook als kolomnamen.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Vloer verdieping 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Ruwbouw | Skelet |
| Wanden verdieping 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Ruwbouw | Skelet |
| Deuren | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Afbouw | Timmerwerk |

- Een taak hoort bij één fase en één pakket. Als een latere rij van dezelfde taak een andere noemt, wordt die rij met haar regelnummer vermeld en weggelaten.
- Dezelfde pakketnaam in twee fasen zijn twee pakketten.

Wanneer de lijst groepen heeft, verschijnt boven de datum een lijst {{ui:Show}}. Kies een fase of een pakket en het wordt als één geheel afgespeeld:

- de schuif en {{ui:Play}} lopen van de vroegste start tot de laatste einddatum van de groep,
- alleen de taken van de groep worden getoond en gekleurd, en al het andere is doorzichtig,
- de regel onder de lijst zegt hoeveel van de taken op die datum gereed, in uitvoering en nog te komen zijn,
- {{ui:Select its elements}} selecteert elk element van de groep, voor {{ui:Show}}, {{ui:Section}} of een staat.

Kies **Elke taak** om de hele planning weer te zien.

## Wat u zou moeten zien

- **Gebouwd**: elementen waarvan alle taken gereed zijn, in hun eigen kleuren.
- **In uitvoering**: elementen met een taak die die dag loopt, in oker. Een taak loopt van haar startdatum tot en met haar einddatum.
- **Nog niet gestart**: doorzichtig.
- Elementen die in geen enkele taak voorkomen, blijven zoals ze zijn. De lijst toont hoeveel elementen elke taak heeft gevonden. Rijen die niet gelezen konden worden, of niets vonden, worden met hun regelnummers vermeld.

## Koppelingen, het Gantt-diagram en MS Project

- Open een Microsoft Project XML-bestand (`.xml`) of een CSV met een kolom `Predecessors`. Koppelingen kunnen eind-tot-start, start-tot-start, eind-tot-eind of start-tot-eind zijn, elk met een voorloop of vertraging in dagen.
- Onder de takenlijst tekent het Gantt-diagram elke taak als balk, met pijlen voor de koppelingen. Taken op het kritieke pad zijn rood. Een koppelingslus of een voorganger die niet bestaat, wordt in het paneel vermeld.
- {{ui:Save as MS Project XML}} en {{ui:Save CSV with links}} schrijven de planning terug met haar koppelingen.

## Volgende

- [Elementen zoeken op klasse, naam of eigenschap](topic:find)
- [Elementen kleuren op een eigenschap](topic:color-by-property)
