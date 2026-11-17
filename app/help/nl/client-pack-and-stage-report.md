---
title: Klantpakketten, faserapporten en opties vergelijken
summary: Maak een klantpakket of een faserapport uit het model, met de massa-opties vergeleken op oppervlakte en kosten, vloeroppervlakten, de tekeningen met hun revisies en de uitgiftegeschiedenis. Elk cijfer houdt de elementen bij die erachter zitten.
keywords: klantpakket, presentatie, faserapport, rapport, optievergelijking, opties, opties vergelijken, oppervlakte en kosten, kosten per optie, geen tarief, massa, vloeroppervlakten, tekeningenlijst, uitgiftegeschiedenis, cijfers, gekoppelde cijfers
from: f6679bf5
---

## Wat u gaat doen

Maak een klantpakket of een faserapport uit het model zoals het nu is, en vergelijk bewaarde massa-opties naast elkaar op oppervlakte en kosten.

## Stappen

1. Open in het linkerpaneel **Klantpakket en faserapport**.
2. Kies **Openen in Documenten** naast Klantpakket of Faserapport. Het document verschijnt vanuit het model in Documenten, waar u de tekst kunt wijzigen.
3. Klik in het voorbeeld op een cijfer om de elementen erachter te selecteren.
4. Kies **Het pakket bouwen**. Eén zip wordt opgeslagen: het document als PDF, een afbeelding van de 3D-weergave, en `figures.csv`, dat elk cijfer vermeldt met de GlobalIds van zijn elementen.

## De velden

U kunt deze in elk document gebruiken.

| Veld | Wat het afdrukt |
|---|---|
| `{{stage}}` | De projectfase uit de tekeningdetails. |
| `{{options}}` | De bewaarde massa-opties naast elkaar: verdiepingen, hoogte, voetafdruk, bruto vloeroppervlak, schil en kosten. |
| `{{areas}}` | Vloeroppervlak per niveau, uit de ruimten. |
| `{{sheets}}` | De bladen met de revisie waarop elk staat en wanneer het voor het laatst is uitgegeven. |
| `{{issues}}` | De uitgiftegeschiedenis en het wijzigingslogboek van de tekeningen. |
| `{{changes}}` | Wat er sinds de laatste uitgifte is veranderd, blad voor blad. |

## Hoe opties worden geprijsd

Kosten komen alleen uit de prijslijst van uw project (Energie/Kosten, 5D-kosten). Er wordt voor u niets geschat.

- Een prijsregel prijst een optie alleen wanneer de klassen erin `IfcBuildingElementProxy` noemen.
- Het vloeroppervlak wordt geprijsd door een regel waarvan de woorden het gebruik van de optie noemen, zoals kantoor. Zonder die regel wordt een regel met de woorden bruto vloeroppervlak of bouwmassa gebruikt. Een regel per m² gebruikt het bruto vloeroppervlak. Een regel per m³ gebruikt het volume.
- De schil (omtrek maal hoogte) wordt geprijsd door een regel met het woord schil of gevel.
- Een optie zonder bijpassende regel toont **Geen tarief**. Een totaal wordt alleen getoond wanneer elk gevraagd onderdeel een tarief heeft.

## Goed om te weten

- Bewaar opties met **Als optie bewaren** in de massalijst van het ruimteprogramma. Zie Massa-opties.
- Een PDF kan geen elementen selecteren. Buiten BimCraft legt `figures.csv` de koppeling van elk cijfer naar zijn elementen vast.

## Nog niet beschikbaar

- Bladen en getekende weergaven worden niet in het document geplaatst. Het pakket bevat alleen een afbeelding van de 3D-weergave.
