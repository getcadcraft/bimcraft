---
title: Zonnepaneelvelden, schaduw en opbrengst
summary: Plaats zonnepaneelvelden op daken of op de grond, bereken de schaduw uit het model, schat de jaarlijkse energie, bepaal de stringdimensionering en maak de gegevens voor het enkellijnschema. Alle invoer wordt getoond, en de startmodule en de verliezen zijn generiek.
keywords: zonne-energie, solar, pv, fotovoltaïsch, veld, module, dak, schaduw, opbrengst, kwh, kwp, stringdimensionering, string, omvormer, enkellijn, hellingshoek, azimut, rijafstand
from: adf4aaf3
---

## Wat u gaat doen

Open het paneel **Solar PV**. Kies een dakvlak (de helling en richting worden uit het model gelezen) of leg een veld op de grond aan met een helling en een richting; de modules worden erin geplaatst met terugliggingen en geteld, wat het DC-vermogen in kWp geeft. Het veld plaatsen schrijft het als zonne-apparaten in het model, in één stap ongedaan te maken.

## Schaduw, opbrengst en strings

- **Schaduw** werpt vanaf elke module een straal naar de zon, voor typische dagen van elke maand, tegen de eigen geometrie van het model, zodat naburige gebouwen, attiques en de rijen ervoor meetellen. Alleen het directe zonlicht wordt verminderd, en een deels beschaduwd veld verliest vermogen in verhouding.
- **Opbrengst** geeft kWh per maand en per jaar, kWh per kWp en de performance ratio. De zon komt uit uw eigen maandtotalen op een horizontaal vlak als u die intypt. Zonder die gebruikt het paneel een bovengrens voor onbewolkte hemel, en zegt dat. **Het klimaat ophalen bij NASA POWER** met een knop op het tabblad Opbrengst: het stuurt alleen de breedte- en lengtegraad van het terrein, één keer, en bewaart het antwoord op deze computer (gecontroleerd vanuit de browser op 2026-10-30). PVGIS laat een webpagina zijn antwoord niet lezen, dus het tabblad geeft een link die de maandgegevens van PVGIS voor het terrein in een nieuw tabblad opent; plak wat die toont in het vak en de twaalf maanden vullen zich.
- **Strings** controleert de modules per string tegen het spanningsvenster van de omvormer op de koudste en de warmste dag, en de parallelle strings tegen de stroom ervan.
- **Enkellijn** maakt de schemagegevens (veld, combiner, scheidingsschakelaar, omvormer, paneel, net) met draad- en zekeringmaten uit de factoren die u intypt. Het zijn gegevens en een SVG; de add-on Elektrisch in CadCraft kan ze als symbolen plaatsen.

De module, omvormer, verliezen en kabelfactoren die bij BimCraft komen, zijn generieke voorbeelden, in elk resultaat aangegeven. Typ de gegevens van de fabrikant en de normwaarden waarop u ontwerpt, en laat het ontwerp nakijken door de persoon die er verantwoordelijk voor is.
