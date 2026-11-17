---
title: Van een projectbestand naar BimCraft via IFC
summary: De IFC-exportinstellingen die het best openen in BimCraft (versie, eigenschapsets, basishoeveelheden, ruimten, gekoppelde modellen, coördinaten), hoe u het resultaat opent, en wat de export bewaart.
keywords: exporteren, ifc-export, rvt naar ifc, converteren, 3d, geometrie, ifc2x3, ifc4, coordination view, reference view, design transfer view, eigenschapsets, basishoeveelheden, ruimten, spaces, gekoppelde bestanden, gedeelde coördinaten, meetpunt, projectbasispunt, instellingen
from: 3efd5fc9
---

## Wat u gaat doen

Maak van een projectbestand een IFC-bestand dat u in BimCraft kunt draaien, bekijken, controleren en bewerken. BimCraft leest het 3D-model in een `.rvt`-bestand nog niet. De export gebeurt daarom in het programma dat het bestand heeft gemaakt (Revit); BimCraft opent het resultaat.

## Stappen

1. Open het project in het programma waarmee het is gemaakt. De kaart van BimCraft noemt de release waarin het is opgeslagen.
2. Open een 3D-weergave die laat zien wat u wilt exporteren.
3. Kies **Bestand > Exporteren > IFC**.
4. Kies in het exportvenster een setup (of **Setup wijzigen…**) met de onderstaande instellingen.
5. Kies een map en bestandsnaam, en exporteer.
6. Klik in BimCraft op {{ui:Een bestand kiezen}} en kies het nieuwe `.ifc`-bestand. Gekoppelde modellen die als eigen bestanden zijn geëxporteerd, openen in dezelfde scène met {{ui:Een model toevoegen}}.

## De instellingen die hier het best openen

| Instelling in de exporteur | Kies | Waarom |
|---|---|---|
| IFC-versie | **IFC4 Reference View** voor bekijken, controleren en opmeten; **IFC2X3 Coordination View 2.0** wanneer anderen IFC2X3 nodig hebben | Beide openen volledig. **IFC4 Design Transfer View** opent ook, met exactere vormen, maar het bestand is groter en trager. |
| Bestandstype | **IFC** (gewoon) | BimCraft opent geen `.ifczip` of `.ifcxml`. |
| Fase / zichtbare elementen | De fase die u bedoelt, en **Alleen elementen exporteren die in de weergave zichtbaar zijn** wanneer u de 3D-weergave daarvoor instelt | Laat weg wat u bewust heeft verborgen. |
| Eigenschapsets | **Revit-eigenschapsets exporteren** en **Algemene IFC-eigenschapsets exporteren** | Dit worden de eigenschapsets die BimCraft in {{ui:Eigenschappen}} toont, en die {{ui:Zoeken}}, {{ui:Kleur}} en {{ui:Modelcontroles}} gebruiken. |
| Basishoeveelheden | **Basishoeveelheden exporteren** | {{ui:Hoeveelheidstotalen}} en staten gebruiken ze (lengtes, oppervlakken, volumes) in plaats van te schatten. |
| Ruimten en oppervlakken | **Ruimten exporteren in 3D-weergaven** (of de optie Rooms / Spaces) | Ruimten komen binnen als spaces: klik op {{ui:Ruimten}} om ze te zien. |
| Gekoppelde bestanden | **Gekoppelde bestanden als aparte IFC's exporteren** | Elke koppeling wordt een eigen bestand. Open ze samen met {{ui:Een model toevoegen}} en ze sluiten op elkaar aan. |
| Coördinatenbasis | **Gedeelde coördinaten** (of het meetpunt) | Het bestand draagt dan zijn plek op de kaart (IfcMapConversion), zodat Meten › Locatie, kaartlagen op de grond en puntenwolken die op kaartcoördinaten staan, werken. Het projectbasispunt houdt het model dicht bij de oorsprong, maar zonder zijn plek op de kaart. |
| Muren en kolommen per verdieping splitsen | Aan, wanneer u hoeveelheden per verdieping opmeet | Het deel van elke verdieping is een eigen element. |

## Wat u zou moeten zien

Het model in 3D, met verdiepingen uit de niveaus van het project en de projectinformatie in het paneel {{ui:Bestand}}. **Geëxporteerd vanuit** noemt de exporteur.

## Wat de export bewaart, en wat niet

- **Bewaard**: geometrie, verdiepingen, soorten elementen, namen, typen, de meeste parameters (als eigenschapsets), basishoeveelheden wanneer gevraagd, ruimten als spaces, en de plek op de kaart met gedeelde coördinaten.
- **Niet bewaard**: weergaven, bladen, annotaties, families als bewerkbare families, werksets en ontwerpopties. Een IFC-bestand is een momentopname van de elementen van het model, niet van het project. Voor de bladen exporteert u DWG en opent u dat in de 2D-weergave.

## Veelvoorkomende fouten

- **Parameters ontbreken in BimCraft.** Zet de eigenschapsetopties hierboven aan en exporteer opnieuw.
- **Ruimten ontbreken.** Zet de ruimteoptie aan en klik daarna op {{ui:Ruimten}}.
- **Opslaan als `.ifczip`.** Kies gewoon IFC, of pak de `.ifczip` uit.
- **Geen plek op de kaart.** Exporteer met gedeelde coördinaten, en controleer of het meetpunt van het project is ingesteld.
- **Verwachten dat bewerkingen terugvloeien.** Bewerkingen die u in BimCraft opslaat, gaan naar een nieuw IFC-bestand, niet naar het projectbestand.
