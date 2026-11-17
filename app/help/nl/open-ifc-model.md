---
title: Een IFC-model openen en rondkijken in 3D
summary: Open een IFC-bestand, draai, verschuif en zoom, en gebruik Passend, Boven, Voor en Zijaanzicht om uw oriëntatie te vinden.
keywords: ifc, 3d, draaien, verschuiven, zoomen, passend, bovenaanzicht, vooraanzicht, zijaanzicht, navigeren, weergavekubus, camera
from: 68b460dd
---

## Wat u gaat doen

Open een IFC-model, draai eromheen in 3D en ga naar de standaardweergaven. Ongeveer vijf minuten.

U hebt een `.ifc`-bestand nodig. De meeste BIM-programma's exporteren er één; in Revit is dat **File > Export > IFC**. Zie [Een projectbestand via IFC in 3D krijgen](topic:rvt-to-ifc).

## Stappen

1. Klik op {{ui:Een bestand kiezen}} (of het sleepgebied linksboven).
2. Kies uw `.ifc`-bestand en bevestig.
3. Wacht tot de statusregel klaar is. Die toont "IFC-engine starten…" de eerste keer, daarna "Model inlezen…" en "Geometrie opbouwen: … van … elementen".
4. Kijk naar het model: het opent in een driekwartaanzicht, passend op het scherm.
5. Klik op {{ui:Boven}} in de werkbalk boven het model om recht naar beneden te kijken.
6. Klik op {{ui:Voor}} om naar de voorkant te kijken, en daarna op {{ui:Zijaanzicht}} om van de zijkant te kijken.
7. Klik op {{ui:Passend}}, of druk op {{key:F}}, om terug te gaan naar het driekwartaanzicht van het hele model.

## Wat u zou moeten zien

- Het model in het midden, met dunne donkere randen voor een tekeningachtige look.
- Het paneel {{ui:Bestand}} links: de bestandsnaam, grootte, IFC-schema (bijvoorbeeld IFC2X3 of IFC4), projectnaam, fase, het programma waaruit het is geëxporteerd, auteur, exportdatum, en de aantallen elementen en driehoeken.
- De lijsten {{ui:Verdiepingen}} en {{ui:Elementen}} eronder.
- De statusregel: "Geopend *bestandsnaam*: *n* elementen in *s* s".

## Rondbewegen

:::mouse
| Om | Doe dit |
|---|---|
| Draaien | Sleep met de linkermuisknop |
| Verschuiven | Sleep met de rechtermuisknop, of houd {{key:Shift}} (of {{key:Mod}}) ingedrukt en sleep met de linkermuisknop |
| Zoomen | Scroll met het wiel, of sleep met de middelste knop |
| Alles zien | Druk op {{key:F}} of klik op {{ui:Passend}} |
:::

:::mac mouse
Op een trackpad: sleep met één vinger ingedrukt om te draaien; houd {{key:Shift}} of {{key:Mod}} ingedrukt en sleep om te verschuiven; scroll met twee vingers of knijp om te zoomen. Een klik met twee vingers is een rechterklik, en u kunt ermee slepen om te verschuiven, maar {{key:Shift}} en slepen is eenvoudiger.
:::

:::touch
| Om | Doe dit |
|---|---|
| Draaien | Sleep met één vinger |
| Zoomen | Knijp met twee vingers |
| Verschuiven | Verplaats twee vingers samen |
| Alles zien | Tik op {{ui:Passend}} |
:::

Draaien gebeurt altijd om een punt in het midden van het model. Verschuiven verplaatst dat punt, dus na een lang verschuiven voelt het draaien misschien niet gecentreerd: klik op {{ui:Passend}} om het te herstellen.

## Volledig, lijnen of draadmodel

Drie kleine knoppen net boven de weergavekubus bepalen hoe het model wordt getekend: {{ui:Gearceerd}}, {{ui:Gearceerd met randen}} (de standaard) en {{ui:Draadmodel}}. Het zijn ook opdrachten ({{ui:Weergave}} in de menu's en de lijst Aanpassen), dus ze kunnen hun eigen toetsen hebben. {{ui:Plattegrond}}, {{ui:Splitsen}} en {{ui:3D}} staan in de rij {{ui:Weergave}} van de werkbalk.

## Veelgemaakte fouten

- **Benoemde weergaven verwachten.** BimCraft heeft vier vaste weergaven ({{ui:Passend}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Zijaanzicht}}), de weergavekubus rechtsonder en vrij draaien. Het slaat geen weergaven op.
- **Plattegronden en doorsneden zoeken.** Er zijn in deze versie geen 2D-plattegronden of snijkaders. Snijd het model met één {{ui:Doorsnede}}-vlak ([Een IFC-model doorsnijden met een snedevlak](topic:section-plane)), of zet verdiepingen uit: [Verdiepingen en ruimten tonen en verbergen, en randen](topic:storeys-and-spaces).
- **Een projectbestand openen en 3D verwachten.** Een projectbestand opent als bestandskaart. Exporteer eerst IFC.
- **Een `.ifczip` openen.** Pak hem uit, of exporteer gewoon `.ifc`.
- **Een zeer groot model maakt het tabblad traag of laat het crashen.** Zie [Browsers, apparaten en geheugen](topic:platforms).

## Volgende

[Een element kiezen en de eigenschappen ervan lezen](topic:inspect-element).
