---
title: Een tekening controleren in de afdrukweergave
summary: Zet een DWG of DXF op de afdrukweergave om hem zwart op wit te zien, met zijn lijndiktes en zonder de lagen die nooit afdrukken.
keywords: afdrukken, plotten, voorbeeld, plotvoorbeeld, lijndiktes, lijndikte, monochroom, zwart-wit, defpoints, niet plotten
from: 1a59c23e
---

## Wat u gaat doen

Zie hoe een blad op papier eruit ziet voordat u het afdrukt vanuit het programma waarin het is gemaakt: zwart op wit, lijndiktes op hun echte breedte, en zonder lagen die zo zijn ingesteld dat ze niet afdrukken.

## Stappen

1. Open een DWG- of DXF-tekening.
2. Klik op een bladtabblad boven de tekening.
3. Klik op {{ui:Afdrukweergave}} aan het eind van de tabbladen, of druk op {{key:P}}.
4. Zoom in op een detail om zware en lichte lijnen te vergelijken.
5. Klik nogmaals op {{ui:Afdrukweergave}}, of druk op {{key:P}}, om terug te gaan naar de normale kleuren.

## Wat u zou moeten zien

- Wit papier op een grijs bureau, elke lijn en tekst in zwart, wat het thema ook is.
- Lijndiktes: op een blad wordt elke dikte getekend op haar echte breedte op papier, dus een lijn van 0.5 mm is twee keer zo dik als een lijn van 0.25 mm, op elk zoomniveau. Een lijn wordt nooit dunner getekend dan haar schermdikte.
- Lagen die zo zijn ingesteld dat ze niet afdrukken, en de laag DEFPOINTS, zijn verborgen.
- De knop {{ui:Afdrukweergave}} blijft ingedrukt. De afdrukweergave blijft aan wanneer u van blad wisselt of een andere tekening opent, totdat u haar uitzet.

In {{ui:Model}} gebruikt de afdrukweergave alleen schermdikten (dunne lijnen één pixel, zwaardere iets dikker), omdat de modelruimte geen papierformaat heeft.

## Veelgemaakte fouten

- **Verwachten dat het afdrukt.** De afdrukweergave is een voorbeeld. Afdrukken en PDF-export zijn nog niet ingebouwd in BimCraft; druk af vanuit het programma waarin de tekening is gemaakt.
- **Plotstijlen verwachten.** Pentabellen en plotstijlkleuren worden niet gelezen. Alles is gewoon zwart.
- **P indrukken tijdens het typen.** {{key:F}} en {{key:P}} doen niets terwijl u in een veld typt, of terwijl de apparatuurstaat wordt getoond.
