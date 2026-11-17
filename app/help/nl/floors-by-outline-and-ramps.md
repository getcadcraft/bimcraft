---
title: Vloeren van elke vorm, openingen en hellingen
summary: Teken een vloer of vloerplaat op basis van de omtrek (een balkon, een uitkraging, een bordes), snijd er openingen in en teken hellingen met hun bordessen.
keywords: vloer, vloerplaat, omtrek, balkon, uitkraging, bordes, terras, vloeropening, gat, schacht, holte, helling, toegankelijke helling, rolstoelhelling, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Wat u gaat doen

Maak vloeren die niet de ruimten volgen, zoals een balkon buiten de wanden, en teken hellingen tussen verdiepingen.

## Een vloer op basis van de omtrek tekenen

1. Zet {{ui:Tekenen}} aan, kies de verdieping en kies dan {{ui:Build}} › {{ui:Vloer op contour}}.
2. Kies in de rij onder de gereedschappen het soort (betonvloerplaat of houten vloer), het gebruik (vloer of bordes), de dikte en hoe hoog de bovenkant boven de verdieping ligt (0 = gelijk met de vloer van de verdieping; een negatieve waarde zet hem lager).
3. Klik de hoeken aan. Het gereedschap snapt aan op wanden, rasterlijnen en hun kruisingen; houd {{key:Shift}} ingedrukt om een rand haaks te houden. De lengte van elke rand en de oppervlakte worden getoond terwijl u tekent. {{key:Backspace}} neemt de laatste hoek terug.
4. Klik opnieuw op de eerste hoek, dubbelklik of druk op {{key:Enter}} om te eindigen.

## Een opening uitsnijden

Klik op de vloer (in de 3D-weergave, of op zijn omtrek in de plattegrond), klik dan in {{ui:Eigenschappen}} op {{ui:Een opening toevoegen}} en klik de hoeken van de opening binnen de vloer aan, en rond af zoals hierboven. In de {{ui:Eigenschappen}} van de vloer staan de openingen, elk met {{ui:Verwijderen}}, en de oppervlakte zonder die openingen.

## Een helling tekenen

1. Kies {{ui:Build}} › {{ui:Helling}}. Stel de breedte in, en of de helling **naar de verdieping erboven** gaat of **omhoog over een hoogte** die u typt.
2. Kies hoe hij wordt bepaald: **op hellingpercentage** (1:12 als start; de helling is zo lang als de hoogte vraagt) of **op lengte** (uw tweede klik bepaalt de lengte, en de helling volgt).
3. Klik op de voet van de helling (het midden van de onderkant), en klik daarna de looprichting aan. Het voorbeeld toont de lengte, de loopgedeelten en de helling.

Een hoogte van meer dan 30 in (760 mm) wordt verdeeld in loopgedeelten, met een bordes van 5 ft (1525 mm) ertussen. Dit zijn gebruikelijke planwaarden, geen norm: controleer de regels waar u bouwt. Een helling die steiler is dan 1:12 wordt in de {{ui:Eigenschappen}} gemarkeerd.

## Wat u ziet

- Elke vloer, opening en helling is één stap: {{key:Mod+Z}} maakt die ongedaan.
- Op de plattegrond: de omtrek van een getekende vloer (een opening is gekruist getekend), en de omtrek, de loopgedeelten, de bordessen en een pijl omhoog met de helling van een helling.
- {{ui:Eigenschappen}} van een getekende vloer (soort, gebruik, dikte, bovenkant, oppervlakte, openingen) en van een helling (breedte, bovenkant, hoogte, helling of lengte); {{key:Delete}} verwijdert beide.
- Een helling naar de verdieping erboven volgt die verdieping wanneer de hoogte ervan verandert.
- In het IFC-bestand: een getekende vloer is een vloerplaat (IfcSlab, een vloer of een bordes) met de openingen eruit gesneden (IfcOpeningElement); een helling is een IfcRamp, opgebouwd uit hellende loopgedeelten (IfcRampFlight) en bordesplaten, met zijn helling en breedte.

:::note
Vloeren die op deze manier zijn getekend, blijven waar u ze tekende. Vloeren die met {{ui:Vloer}} zijn gemaakt, volgen de ruimten wanneer de wanden verschuiven: zie [Ruimten, vloeren, plafonds en daken](topic:floors-and-roofs).
:::
