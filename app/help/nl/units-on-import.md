---
title: Eenheden bij importeren: een bestand geeft zijn eenheden op, of u wordt eerst gevraagd
summary: Wanneer een bestand dat u binnenhaalt zijn eenheden opgeeft, gebruikt BimCraft die en meldt dat. Wanneer dat niet zo is, vraagt BimCraft voordat er iets wordt geplaatst en onthoudt het uw antwoord voor dat bestand.
keywords: eenheden, importeren, openen, OBJ, STL, DWG, DXF, IFC, puntenwolk, bibliotheekitem, millimeter, meter, inch, feet, schaal, verkeerd formaat, te groot, te klein, 1000 keer, vragen, onthouden
from: f044e9bc
---

## Wat u gaat doen

Haal een bestand binnen en controleer dat het op de juiste grootte binnenkomt.

## Stappen

1. Open of voeg het bestand toe zoals gebruikelijk: {{ui:Open}}, de {{ui:Bestanden}} van de Bibliotheek, {{ui:Puntenwolken}}, of Build › Van een tekening.
2. Als het bestand zijn eenheden opgeeft, wordt er niets gevraagd. In de statusregel staat welke eenheden het bestand opgeeft.
3. Als dat niet zo is, vraagt een dialoogvenster naar de **Eenheden van** het bestand. Kies wat één eenheid in het bestand is en klik op {{ui:Deze eenheden gebruiken}}. Er wordt niets geplaatst voordat u hebt geantwoord.
4. {{ui:Annuleren}} (of {{key:Esc}}) haalt niets binnen.

## Welke bestanden geven hun eenheden op

- **IFC**: geeft zijn lengte-eenheid op, en "Geopend" zegt welke. Een IFC zonder opgave wordt gevraagd voordat hij opent; uw antwoord wordt in het model geschreven, zodat het bestand die na opslaan zelf bevat.
- **DWG en DXF**: de invoegeenheden van de tekening. Een tekening zonder die wordt gevraagd (Bibliotheekbestanden, Build › Van een tekening, terrein uit hoogtelijnen).
- **Lijsten met punten** voor terrein: geven geen eenheden op. U wordt gevraagd.
- **Puntenwolken**: LAS en LAZ met een coördinatenstelsel, E57, PTX en PLY geven hun eenheden op. Andere worden gevraagd.
- **OBJ en STL**: geven nooit eenheden op. U wordt gevraagd.
- **glTF en GLB**: meter, volgens de eigen regel van het formaat.
- **Rasterafbeeldingen**: hebben geen eigen grootte. Een afbeelding wordt op de weergave gepast en u stelt de grootte in met Schaal op twee punten. De grootte die u opgeeft, wordt voor dat bestand onthouden: wanneer het opnieuw wordt geplaatst, komt het in die grootte binnen en de statusregel meldt dat.
- **De add-on Puntenwolken**: vraagt wanneer u een wolk bouwt waarvan het bestand geen eenheid opgeeft, en labelt de getallen van de wolk in de eenheid die hij meedraagt.

## Goed om te weten

- Het antwoord wordt voor dat bestand onthouden (zijn naam, grootte en datum) op deze computer, in elke CadCraft-app. De volgende keer dat hetzelfde bestand binnenkomt, wordt u niet gevraagd, en de statusregel meldt dat de onthouden eenheden zijn gebruikt.
- Om opnieuw gevraagd te worden: het opdrachtpalet ({{key:Mod+K}}) › **Opnieuw vragen naar de eenheden van geïmporteerde bestanden**.
- Een eenhedenlijst die een import al heeft (Eenheden in de Bibliotheek, Eenheden in de wolkbalk, Tekeningeenheden in Build › Van een tekening) past de eenheden nog steeds achteraf aan. De eenhedenlijst van het terreinhulpmiddel is nu alleen het punt waarmee de vraag begint.
