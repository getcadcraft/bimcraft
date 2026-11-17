---
title: Een model controleren op veelvoorkomende problemen
summary: Vind elementen die een eigenschap missen die u nodig hebt, GlobalId's die twee keer zijn gebruikt, elementen op geen enkele verdieping en kopieën die op elkaar liggen.
keywords: controleren, modelcontrole, validatie, kwaliteitscontrole, kwaliteit, ontbrekende eigenschap, verplicht, eigenschap, dubbel, globalid, guid, verdieping, op elkaar, overlap
from: 4d835513
---

## Wat u gaat doen

Bekijk een model voordat u het doorgeeft: de problemen die staten, hoeveelheden en andermans software laten breken.

## Stappen

1. Open een IFC-model.
2. Open {{ui:Modelcontroles}} in het linkerpaneel.
3. Onder {{ui:Verplichte eigenschappen}} staat al een regel (elke klasse, Name). Wijzig de klasse (of {{ui:Elke klasse}}) en de eigenschap, of klik op {{ui:Een eigenschap toevoegen}} voor een andere regel; de x verwijdert er een. Een element faalt een regel wanneer de eigenschap ontbreekt of leeg is. De regels blijven in deze browser voor elk model bewaard.
4. Klik op {{ui:Controles uitvoeren}}.
5. Klik op een resultaat om die elementen te selecteren en erop in te zoomen.

## Wat u ziet

- **Ontbrekende verplichte eigenschap**: elke regel met de elementen die er geen waarde voor hebben.
- **GlobalId twee keer gebruikt**: elementen die één GlobalId delen. Andere software behandelt ze als één element.
- **Op geen enkele verdieping**: elementen met een vorm die door geen enkele verdieping wordt omvat.
- **Kopieën op elkaar**: elementen van dezelfde klasse en hetzelfde type, met dezelfde vorm op dezelfde plaats, die dubbel tellen in hoeveelheden.

Elke regel in de resultaten is een knop: klik erop om die elementen te selecteren en ernaartoe te zoomen. Alleen de eerste 50 groepen van een controle worden getoond. Dezelfde bevindingen verschijnen ook in {{ui:Problemen}}.

## Goed om te weten

- Controles kijken naar het actieve model wanneer er meerdere open zijn. Zie [Meerdere IFC-modellen samen bekijken](topic:several-models).
- Voer de controles opnieuw uit na een bewerking.
- In het paneel {{ui:Problemen}} volgen lengtes, oppervlakten en volumes in de tekst van een probleem de {{ui:Eenheden}} die in de werkbalk zijn gekozen (een deur van "800 mm" staat als 2'-7 1/2" in voet en inch); wijzig de eenheid en het paneel herformuleert ze.

## Volgende

- [Het model doorlichten: ruimten, tags, LOD, clashes en interfaces](topic:audit-the-model)
- [Elementen zoeken op klasse, naam of eigenschap](topic:find)
- [Elementen verwijderen, knippen, kopiëren en plakken](topic:copy-paste)
