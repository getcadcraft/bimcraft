---
title: Een element kiezen en zijn eigenschappen lezen
summary: Klik op elk element in het 3D-model om het te markeren en zijn naam, type, label, GlobalId, eigenschapssets en hoeveelheden te lezen.
keywords: eigenschappen, kiezen, selecteren, klikken, element, parameters, eigenschapssets, pset, hoeveelheden, globalid, guid, type, inspecteren
from: 43b80aa8
---

## Wat u gaat doen

Kies elementen in een IFC-model en lees alles wat het bestand erover zegt: attributen, eigenschapssets, typeeigenschappen en hoeveelheden.

## Stappen

1. Open een IFC-model.
2. Klik op een element, bijvoorbeeld een deur. Klik zonder te slepen: een sleep van meer dan enkele pixels draait het beeld in plaats van te kiezen.
3. Kijk naar het element: het wordt blauw gemarkeerd.
4. Kijk naar het paneel {{ui:Eigenschappen}} rechts. Bovenaan staan de soort van het element (zoals "Door" of "WallStandardCase") en zijn naam.
5. Lees het eerste blok: **Naam**, **Type**, **Objecttype**, **Label**, **Beschrijving**, **GlobalId** en **Regel**.
6. Scroll naar beneden naar de eigenschapssets. De eerste drie staan open; klik op de naam van een andere set om hem te openen.
7. Klik op een ander element om naar dat element over te schakelen.
8. Druk op {{key:Esc}}, of klik op de lege achtergrond, om de selectie op te heffen.

## Wat u ziet

- Het gemarkeerde element en zijn gegevens rechts.
- Eigenschapssets in alfabetische volgorde. Sets die uit het **type** van het element komen, hebben " (type)" na hun naam en de opmerking "Typeeigenschap: een wijziging hier geldt voor elk element van dit type."
- Hoeveelheidssets (zoals lengten, oppervlakten en volumes) tussen de andere sets. Hoeveelheden zijn alleen-lezen.
- Waarden die u kunt wijzigen, lijken op knoppen. [Eigenschappen van IFC wijzigen en een bewerkte kopie opslaan](topic:edit-ifc-properties) laat zien hoe.

[Velden van het eigenschappenpaneel](topic:properties-panel) legt elk veld uit.

## Verborgen elementen bereiken

1. Om iets in het gebouw te bereiken, schakelt u de verdiepingen erboven uit in de lijst {{ui:Verdiepingen}}.
2. Om een wand achter een ruimte-volume te bereiken, zet u {{ui:Ruimten}} uit.
3. Klik op het element.

## Veelvoorkomende fouten

- **Een beetje slepen tijdens het klikken.** BimCraft behandelt dat als draaien en kiest niet. Houd de muis stil.
- **Eenheden naast getallen verwachten.** Waarden worden getoond zoals ze in het bestand zijn opgeslagen, afgerond op vier decimalen, zonder eenheidsymbool. Lengten in een metrische export zijn meestal millimeter of meter; controleer de instellingen van de exporteur.
- **Een parameter zoeken op zijn bekende naam.** Exporteurs hernoemen en groeperen parameters in IFC-eigenschapssets zoals `Pset_WallCommon`. Kijk in elke set; eigen parameters staan vaak in een set die is genoemd naar het exporterende programma of uw bedrijf.
- **Een zoekvak verwachten.** Klik om een element te kiezen; {{key:Mod}}+klik of {{key:Shift}}+klik kiest er meer, en {{key:Mod+A}} kiest elk getoond element. De lijst {{ui:Elementen}} links telt alleen elementen per soort; ze is niet aanklikbaar.
- **Kiezen op een projectbestandskaart.** Een bestandskaart heeft geen elementen om te kiezen: "Elementeigenschappen hebben het 3D-model nodig. Open een IFC-export van dit bestand om ze te zien."
