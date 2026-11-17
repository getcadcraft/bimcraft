---
title: Funderingen onder de wanden
summary: Leg met één klik een vloer op maaiveld, funderingsmuren met een vloer, een kruipruimte of een kelder onder een gebouw; funderingsstroken worden bepaald door de wanden en het aantal bouwlagen, en de fundering volgt wanneer de wanden verschuiven.
keywords: fundering, funderingsstrook, vloer op maaiveld, verdikte rand, monolithische vloer, funderingsmuur, kruipruimte, kelder, kelderwand, vorst, beton, breedte funderingsstrook
from: c0e20172
---

## Wat u gaat doen

Geef het gebouw een fundering die bij de wanden past. BimCraft volgt de buitenkant van de wanden, bepaalt de funderingsstroken aan de hand van het wandtype en het aantal bouwlagen erboven, en maakt de fundering opnieuw wanneer de wanden veranderen.

## Een fundering aanbrengen

1. Op de verdieping waarvan de wanden erop staan (meestal de eerste), opent u {{ui:Build}} en kiest u {{ui:Fundering}}.
2. Kies het soort:
   - **Vloer op maaiveld**: een betonvloer van 4" waarvan de bovenkant de vloer is, met een verdikte rand onder de wanden.
   - **Funderingsmuren en vloer**: funderingsmuren tot aan de vloer op funderingsstroken, met een vloer erbinnen.
   - **Kruipruimte**: funderingsmuren die onder de vloerconstructie stoppen, op funderingsstroken, zonder vloer.
   - **Kelder**: funderingsmuren over de volle hoogte op funderingsstroken, met een kelder­vloer onder de vloerconstructie.
3. Wijs binnen het gebouw: de funderingsstroken worden gestippeld getoond met hun maat. Klik.

Klikken op een gebouw dat al een fundering heeft, selecteert die fundering, zodat u haar kunt wijzigen in plaats van een tweede toe te voegen.

## Wijzigen

Selecteer de fundering (klik binnen het gebouw met {{ui:Fundering}}, of klik op een van haar onderdelen in de 3D-weergave of de modelboom) en wijzig haar in {{ui:Eigenschappen}}: het soort, de breedte en diepte van de funderingsstrook, hoe diep de onderkant van de strook ligt, de wanddikte, hoe ver onder de vloer de wanden stoppen, de hoogte van de kelder en de dikte van de vloer. Elke wijziging is één stap die u ongedaan kunt maken.

Maten met **auto** komen uit de wanden: funderingsstroken van 12", 15" of 23" breed voor één, twee of drie bouwlagen op een vloer of op funderingsmuren; 18", 22" of 27" bij een kruipruimte of kelder; en 4" breder onder metselwerk- of betonwanden. Typ een maat om uw eigen maat in te stellen; typ `0` om terug te gaan naar auto.

:::warning
De automatische maten zijn gelabelde standaardwaarden voor typische lichte houtskeletwoningen, geen constructieberekening. Een ontwerper of constructeur controleert funderingsstroken, diepten en wanden op de grondsoort, de vorstdiepte en de belastingen.
:::

## Wat wordt opgeslagen

Een fundering wordt opgeslagen als een IFC-elementassemblage ("Foundation"), bestaande uit een funderingsstrook (of de verdikte rand van een vloer), een funderingswand en een vloer, zoals het soort vereist, alles van beton, elk met zijn hoeveelheden: lengten, breedten, hoogten, oppervlakten en volumes, klaar voor opmetingen.

## Goed om te weten

- Wanden verplaatsen, toevoegen of verwijderen maakt de fundering eronder opnieuw; wanden tekenen op de verdieping erboven maakt de funderingsstroken eronder breder voor de extra bouwlaag.
- {{key:Delete}} verwijdert een geselecteerde fundering met al haar onderdelen.
- Met het maaiveld van de bouwplaats in het model (zie [Het maaiveld van de bouwplaats, het bouwplateau en de verharding](topic:terrain)), zakken funderingsmuren en kruipruimtestroken mee af, in stappen van 8".
- Funderingsstroken onder binnenwanden zijn nog niet beschikbaar.
