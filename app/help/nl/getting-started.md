---
title: Aan de slag met BimCraft
summary: Wat BimCraft nu doet, hoe u uw eerste model opent, in 3D bekijkt, één waarde wijzigt en een kopie opslaat.
keywords: starten, eerste keer, openen, ifc, rvt, dwg, snelstart, introductie, viewer, bim
from: fc2dea19
---

BimCraft is de gebouwmodel-app van de CadCraft-familie. In deze build **opent, leest en inspecteert** het gebouwbestanden, en het **bewerkt de gegevens in IFC-modellen**. Nieuwe elementen tekenen of modelleren doet het nog niet. Zie het als een modelviewer en -controleur waarmee u ook namen, tags en eigenschapswaarden in een IFC-bestand kunt corrigeren.

Wat het opent:

| Bestand | Wat u krijgt |
|---|---|
| IFC (`.ifc`) | Het volledige model in 3D: draaien, verdiepingen, elementeigenschappen en het bewerken van namen en eigenschapswaarden |
| Project- en familiebestanden (`.rvt`, `.rfa`, `.rte`, `.rft`) | Een bestandskaart: de release waarin het is opgeslagen, projectinformatie, de voorbeeldafbeelding en gekoppelde bestanden. Geen 3D. |
| DWG en DXF | De tekening in 2D: modelruimte en elk blad, lagen, gekoppelde tekeningen, afdrukweergave en een apparatuurstaat voor getagde foodservice-tekeningen |
| Een projectmap | Een rapport van elk model in de map: back-ups, koppelingen, beschadigde kopieën en een suggestie met welk bestand u het best begint |

Alles gebeurt in uw browser, op uw computer. **Er wordt niets geüpload.** Zie [Bestanden die BimCraft opent en opslaat](topic:files) voor de details.

## BimCraft openen

1. Open BimCraft in een actuele browser. Chrome, Edge, Firefox en Safari werken allemaal; [Browsers, apparaten en geheugen](topic:platforms) noemt de verschillen.
2. Wacht op het lege scherm met de tekst "Open een gebouwmodel."

:::note
BimCraft draait in de browser, en op het bureaublad in CadCraft Studio, samen met de andere apps. Opslaan in de cloud is nog niet beschikbaar: u opent bestanden van uw computer en slaat kopieën ernaar terug op.
:::

## Uw eerste model openen

De snelste manier om te zien wat BimCraft doet, is een IFC-bestand.

1. Klik midden op het scherm op {{ui:Een bestand kiezen}}.
2. Kies een `.ifc`-bestand in {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerder}} en bevestig.
3. Wacht terwijl de statusregel onderaan het scherm "De IFC-engine wordt gestart…" toont, daarna "Geometrie wordt opgebouwd".

U ziet nu het model in 3D in het midden, een paneel {{ui:Bestand}} en een lijst {{ui:Verdiepingen}} links, en een leeg paneel {{ui:Eigenschappen}} rechts. De statusregel eindigt met "Geopend" en het aantal elementen.

:::tip
U kunt een bestand ook vanuit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerder}} rechtstreeks op de pagina slepen. Het scherm toont "Loslaten om te openen" terwijl u sleept.
:::

:::offline
De IFC-engine wordt de eerste keer dat u een IFC-model opent van de site geladen, tenzij BimCraft voor offline gebruik is opgeslagen. DWG- en DXF-tekeningen, projectbestanden en mappen hebben niets extra's nodig: hun lezers maken deel uit van de app. Staat er op de knop in de appbalk {{ui:Klaar voor offline gebruik}}, dan opent alles offline. Zo niet, dan openen IFC-modellen pas weer als u verbinding hebt, tenzij er in dit tabblad al een is geopend. Zie [Online en offline](topic:online-offline).
:::

:::online
Gaat u ergens heen zonder verbinding? Klik in de appbalk op {{ui:Opslaan voor offline gebruik}} en wacht op {{ui:Klaar voor offline gebruik}}. De opgeslagen kopie (circa 11 MB) bevat de IFC-engine. Zie [Offline werken](common:offline).
:::

## Rondkijken

:::mouse
1. Sleep met de linkermuisknop om rond het model te draaien.
2. Scroll met het wiel om te zoomen.
3. Sleep met de rechtermuisknop om te verschuiven. Houd op een Mac-trackpad in plaats daarvan {{key:Shift}} ingedrukt en sleep.
4. Druk op {{key:F}} of klik op {{ui:Passend maken}} om weer het hele model te zien.
:::

:::touch
1. Sleep met één vinger om te draaien.
2. Knijp met twee vingers om te zoomen en beweeg twee vingers samen om te verschuiven.
3. Tik op {{ui:Passend maken}} om weer het hele model te zien.
:::

## Eén echt ding doen: een tag corrigeren

1. Klik op een wand, deur of ander element in het model. Het wordt blauw en de eigenschappen verschijnen rechts.
2. Klik in het paneel {{ui:Eigenschappen}} op de waarde naast **Tag**.
3. Typ de nieuwe tag en druk op {{key:Enter}}.
4. Kijk naar het gedeelte {{ui:Wijzigingen}} dat links is geopend: uw wijziging staat erin, met de oude en de nieuwe waarde.

## Een kopie opslaan

1. Klik in het gedeelte {{ui:Wijzigingen}} op {{ui:Opslaan als IFC}}, of druk op {{key:Mod+S}}.
2. Zoek het nieuwe bestand in uw downloadmap. Het heet als het origineel, met " (edited)" erachter, bijvoorbeeld `Clinic (edited).ifc`.

Uw oorspronkelijke bestand wordt nooit gewijzigd. [IFC-eigenschappen wijzigen en een bewerkte kopie opslaan](topic:edit-ifc-properties) legt het bewerken uitgebreid uit.

## Waar u daarna naartoe kunt

- [Het BimCraft-scherm](topic:workspace): elk paneel met naam.
- [Als u van andere BIM- en tekenprogramma's komt](topic:coming-from): wat anders aanvoelt als u Revit gewend bent.
- [Een hele projectmap openen](topic:open-project-folder): wijs BimCraft naar een projectmap en laat het de bestanden uitzoeken.
- [Een DWG- of DXF-tekening bekijken](topic:view-dwg): bladen, lagen en afdrukweergave.
