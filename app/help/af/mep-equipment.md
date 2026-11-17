---
title: MEP-toerusting met poorte
summary: Plaas generiese lugbehandelaars, ventilators, pompe, ketels, waterverhitters, eindeenhede, verspreiders, roosters en tenks wat volgens die waardes wat jy tik gedimensioneer is, elk met die pyp- en lugkanaalverbindings waaraan ander lope koppel.
keywords: mep, toerusting, lugbehandelaar, ahu, ventilator, inlyn-ventilator, pomp, ketel, waterverhitter, eindeenheid, vav, verspreider, rooster, register, tenk, poort, poorte, verbinding, tuit, halsgrootte, hvac, sanitêr, meganies, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Wat jy gaan doen

Plaas die toerusting aan die einde van jou pype en lugkanale. Elke stuk is 'n generiese vorm wat volgens die waardes wat jy tik gedimensioneer is, met sy verbindings as **poorte**: waar 'n pyp of lugkanaal daarby aansluit, watter stelsel, watter rigting die vloei gaan, en watter grootte. Pype en lugkanale wat vanaf 'n poort geteken word, neem sy grootte en stelsel en bly daaraan vas: sien [Koppel pype en lugkanale aan toerusting](topic:mep-connections).

:::note
Dit is 'n tekenings- en koördinasiehulpmiddel, gedimensioneer deur 'n ingenieur. Die toerusting is nie 'n vervaardiger se produk nie: geen kapasiteite, gewigte of vervaardigers se verbindingsgroottes nie. Bring 'n vervaardiger se model uit jou MEP-program as IFC wanneer jy dit nodig het.
:::

## Plaas 'n stuk

1. Skakel {{ui:Teken}} aan, maak {{ui:Bou}} oop en kies {{ui:Toerusting}}.
2. Kies in die balk die soort en tik sy groottes. Elke soort vra vir sy eie:

| Soort | Jy tik | Sy poorte |
|---|---|---|
| Lugbehandelaar | lengte, breedte, hoogte; toevoer- en terugvoeropenings; spoelpypgrootte en stelsel; kondensaatgrootte | toevoerkanaal uit, terugvoerkanaal in, spoel in en uit, kondensaat-afvoer |
| Inlyn-ventilator | deursnee, lengte, stelsel | lugkanaal in en uit |
| Pomp | pypgrootte, stelsel | in- en uitlaat |
| Ketel | lengte, breedte, hoogte, pypgrootte, gasgrootte, rookpypdeursnee | verwarmingstoevoer uit en terugvoer in, gas in, rookpyp uit |
| Waterverhitter | deursnee, hoogte, pypgrootte, gas of elektries | koue water in, warm water uit (en gas in en 'n rookpyp wanneer dit gas verbrand) |
| Eindeenheid | lengte, breedte, hoogte, ronde inlaat, uitlaat-breedte en -hoogte | toevoerlug in en uit |
| Verspreider | front, hals, stelsel | sy hals (lug in) |
| Rooster | fronbreedte en -hoogte, halsbreedte en -hoogte, stelsel | sy hals (lug uit na die terugvoer- of uitlaatkanaal) |
| Tenk | deursnee, hoogte, pypgrootte, stelsel | inlaat bo, uitlaat naby die onderkant |
| Radiator | lengte, hoogte, diepte, pypgrootte, stelsel | vloei in by die bokant van die een einde, terugvoer uit by die onderkant van die ander |
| Konvektor / paneelverwarmer | lengte, hoogte, diepte, pypgrootte, stelsel | vloei in aan een einde, terugvoer uit aan die ander |
| Vervaardiger se familie | die familie (sien [Pypspesifikasies, kleppe, dempers en vervaardigers se families](topic:pipe-specs)) | die poorte wat sy familie gekry het |

3. Stel **At**, die hoogte van sy basis bo die vlak. 'n Verspreider of rooster se hoogte is sy front: tik die plafonhoogte.
4. Tik 'n **Tag** as jy een wil hê (`AHU-1`); die volgende stuk van dieselfde soort kry die volgende nommer.
5. Beweeg die wyser oor die plan: die voetspoor en sy poorte volg dit. Druk {{key:R}} om dit 90° te draai. Klik waar dit moet gaan.

Pypgroottes is staalpypgroottes (ASME B36.10M). 'n Pyp wat vanaf 'n pomp in 'n ander materiaal geteken word, neem dieselfde nominale grootte in sy eie materiaal.

## Verander of verwyder dit

Kies dit in die plan of die 3D-aansig. Eienskappe wys elke grootte wat jy getik het, sy merker, X, Y, hoogte en draai, en elke poort: sy grootte, stelsel, watter rigting die vloei gaan, en of iets daaraan gekoppel is. Elke verandering is een stap van {{ui:Ontdoen}}; lope wat aan sy poorte vas is, skuif daarmee saam. {{key:Delete}} verwyder dit; lope wat daaraan vas was, bly, en die Verbindingstoets lys hulle.

## In die IFC-lêer

Elke soort word as sy IFC-klas gestoor: IfcUnitaryEquipment (lugbehandelaar), IfcFan (ventilator), IfcPump (pomp), IfcBoiler (ketel; 'n waterverhitter is 'n IfcBoiler van tipe water met die objekttipe "Water heater"), IfcAirTerminalBox (eindeenheid), IfcAirTerminal (verspreider, rooster) en IfcTank (tenk), met 'n tipe wat deur elke stuk van dieselfde soort en groottes gedeel word. IFC2X3-lêers kry IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal en IfcFlowStorageDevice met die passende tipes. Elke poort is 'n IfcDistributionPort wat geplaas is waar die verbinding is, na buite gerig, met sy vloeirigting en stelsel; ander programme lees watter lope aan watter poort koppel. Die stuk sluit aan by die stelsel van elk van sy poorte, en dra die biblioteekitemstelle wat elke geplaasde biblioteekitem het.
