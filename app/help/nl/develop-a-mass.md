---
title: Een gebouwmassa ontwikkelen uit een terreinstudie
summary: Neem een gebouwmassa die is onderzocht in de terreinweergave van CivilCraft en ontwikkel die tot niveaus, wanden en vloeren, met de plaats van het terrein op de kaart behouden.
keywords: massa, gebouwmassa, massastudie, terreinstudie, ontwikkelen, CivilCraft, overdragen, niveaus, wanden, vloeren, grondvlak, georeferentie, IFC
from: 557b94d1
---

De terreinweergave van CivilCraft kan gebouwmassa's op een perceel tekenen en ze testen tegen de grond, de grenzen die u typt, en de zon. **Ontwikkelen in BimCraft** opent daar BimCraft in een nieuw tabblad met de massa's; **Massa's als IFC** slaat ze op als een bestand dat u hier op de gebruikelijke manier opent. In beide gevallen komt elke massa aan als een terrein, een gebouw met één niveau per verdieping, en één blok (de massa zelf) met zijn getallen.

## Een massa ontwikkelen

1. Kies een massa in de 3D-weergave. Eigenschappen toont het gebruik, de verdiepingen en verdiepingshoogte, het grondvlak, het bruto vloeroppervlak, hoe ze op het talud staat, en het perceel.
2. Klik op **Deze massa ontwikkelen**.

In één bewerking krijgt elk niveau van dat gebouw wanden rond het grondvlak (het grondvlak is het buitenvlak van de wanden; elke wand gaat tot het niveau erboven, en de bovenste is één verdieping hoog) en een vloer onder het hele gebouw. Het blok wordt vervangen, en het gebouw houdt de getallen van de studie in de eigenschapsset `CadCraft_SiteMass`, gemarkeerd als ontwikkeld. Er is geen dak: een dak hangt af van het ontwerp.

## De plaats van het terrein

Een bestand van CivilCraft wordt geschreven in de lengte-eenheid van het project en, als het project van CivilCraft een coördinatenstelsel had, draagt het dat mee als de kaartconversie van het project. Het ontwikkelen van een massa laat dat ongemoeid, zodat het gebouw blijft staan waar de kaart zegt dat het is.
