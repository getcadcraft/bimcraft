---
title: Verdiepingen, ruimten en randen tonen of verbergen
summary: Zet verdiepingen uit om in een gebouw te kijken, toon ruimten en spaces, en zet de randlijnen aan en uit.
keywords: verdiepingen, niveaus, vloeren, verbergen, isoleren, kamers, ruimten, ifcspace, randen, zichtbaarheid, doorsnede
from: b838dcc0
---

## Wat u gaat doen

Bekijk de binnenkant van een IFC-model door de verdiepingen boven de verdieping waar u in geïnteresseerd bent uit te zetten, toon daarna de ruimten, en schakel de randlijnen uit voor een schoner beeld.

## Stappen: één verdieping bekijken

1. Open een IFC-model. Zie [Een IFC-model openen en er in 3D rondkijken](topic:open-ifc-model).
2. Zoek de lijst {{ui:Verdiepingen}} links. De bovenste verdieping staat eerst, zoals bij het lezen van een doorsnede van het dak naar beneden.
3. Vink het dak en elke verdieping boven de verdieping die u wilt zien uit.
4. Klik op {{ui:Boven}} om op die verdieping neer te kijken.
5. Vink de verdiepingen weer aan om ze terug te zetten.

## Wat u zou moeten zien

Elke verdieping die u uitvinkt verdwijnt meteen, met alles erop. De lijst toont alleen verdiepingen die iets zichtbaars bevatten. Elementen die aan geen enkele verdieping zijn toegewezen, worden onderaan gegroepeerd als **Niet op een verdieping**; terreinelementen en sommige meubels komen daar vaak terecht.

## Stappen: ruimten tonen

1. Klik op {{ui:Ruimten}} in de werkbalk boven het model. De knop blijft ingedrukt.
2. Bekijk het model: ruimten verschijnen als lichte, doorzichtige volumes.
3. Klik op een ruimte om zijn eigenschappen te lezen, zoals naam, nummer en oppervlakte, rechts.
4. Klik nogmaals op {{ui:Ruimten}} om ze te verbergen.

Ruimten zijn verborgen wanneer een model opent, omdat ze anders de muren en vloeren zouden bedekken.

## Stappen: randen

1. Klik op {{ui:Randen}} om de dunne randlijnen uit te zetten.
2. Klik er nogmaals op om ze weer aan te zetten.

Bij zeer grote modellen (meer dan 1.5 miljoen driehoeken) staat de knop grijs met de tip "Randen zijn uit voor zeer grote modellen". Dit bespaart geheugen.

## Veelgemaakte fouten

- **Een verdieping uitvinken en toch delen ervan zien.** Een element hoort bij de verdieping die het exporterende programma eraan heeft toegewezen. Een hoge muur of een trap hoort vaak alleen bij zijn basisverdieping, dus die blijft zichtbaar als de verdieping erboven verborgen is, of verdwijnt samen met de verdieping eronder.
- **Verdiepingen verbergen om binnenin te kijken.** Een snijkader is vaak sneller: zie [Een IFC-model doorsnijden met een snijvlak](topic:section-plane#a-section-box). U kunt ook rijen in de {{ui:Modelboom}} uitvinken (zie [De weg vinden met de modelboom](topic:model-tree)).
- **Een ruimte door een muur heen aanklikken.** Klikken kiest het dichtstbijzijnde zichtbare oppervlak. Verberg de verdieping erboven, of schakel naar {{ui:Boven}}, en klik dan.
- **Verdiepingsnamen zien er vreemd uit.** BimCraft toont de verdiepingsnamen die in het bestand zijn opgeslagen. Staat er "Level 1" of een getal, dan is dat wat de exporteur heeft geschreven.
