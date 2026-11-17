---
title: Issues en BCF-bestanden
summary: Sla een weergave van het model op als issue — camera, geselecteerde elementen, verborgen elementen, doorsnede — deel die als BCF-bestand met andere coördinatietools, en open hun BCF-bestanden om hun issues te zien.
keywords: bcf, bcfzip, issue, issues, onderwerp, zichtpunt, botsingsrapport, coördinatie, opmerking, momentopname, bcf openen, bcf opslaan, exporteren, importeren
from: 2a6cf201
---

## Wat u gaat doen

Wijs een probleem in het model aan en bewaar de weergave die het toont, en geef die daarna door in een BCF-bestand, het formaat dat andere coördinatietools lezen en schrijven.

## Stappen

1. Open een IFC-model en stel de weergave in: draai erheen, selecteer de betrokken elementen, verberg wat in de weg staat, snijd het met een snijvlak of kader.
2. Klik rechts op het tabblad {{ui:Issues}}, en daarna op {{ui:Nieuw issue van deze weergave}}.
3. Typ een titel, en een opmerking als u wilt; kies een status; geef uw naam of e-mail op (als u bent aangemeld, wordt de naam van uw account ingevuld; zie [BimCraft-instellingen](topic:settings#your-name-on-issues)). Klik op {{ui:Issue maken}}.
4. Klik op {{ui:Tonen}} bij een issue om de weergave ervan terug te zetten.
5. Klik op {{ui:BCF opslaan}} om elk issue als één `.bcf`-bestand te downloaden.
6. Om issues te zien die iemand anders heeft gemaakt, klikt u op {{ui:BCF openen…}} en kiest u hun `.bcf`- of `.bcfzip`-bestand.

## Wat u zou moeten zien

- Elk issue in de lijst met een afbeelding van zijn weergave, zijn titel, status, auteur en datum.
- {{ui:Tonen}} zet de camera, de geselecteerde elementen, wat verborgen was (of de enige getoonde dingen) en de doorsnede terug. Elementen worden gevonden via hun GlobalId in elk open model; de statusregel zegt of sommige ontbreken.
- Een snijvlak of kader uit een ander programma wordt getoond wanneer het op de assen van het model is uitgelijnd; gekanteld of extra vlakken komen terug als een snijvolume (tot 6 vlakken). Een issue bewaart het eerste kader van een volume van meerdere kaders.

## Goed om te weten

- Het bestand is BCF 2.1 en bewaart de weergave in de eigen coördinaten van het model, zodat andere tools de camera op dezelfde plaats zetten.
- Issues blijven in dit tabblad staan totdat u ze opslaat. Het openen van een ander model behoudt de lijst; open het model waar de issues over gaan voordat u ze toont.
- Een parallelle (orthogonale) camera uit een ander programma wordt getoond met de perspectiefcamera van deze viewer, naar achteren gezet zodat hetzelfde deel van het model de weergave vult.

## Veelgemaakte fouten

- **Tonen bracht de camera ergens vreemd terecht.** Het issue is gemaakt op een ander model of met andere coördinaten. Open eerst het juiste model.
- **Het bestand opent niet.** Het is geen BCF-zip, of het is beschadigd; de statusregel zegt waarom.

## Volgende

- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
- [Een IFC-model doorsnijden met een snijvlak](topic:section-plane)
