---
title: MEP-apparatuur met poorten
summary: Plaats generieke luchtbehandelingskasten, ventilatoren, pompen, ketels, warmwaterbereiders, eindapparaten, diffusors, roosters en tanks, met de maten die u typt, elk met de leiding- en kanaalaansluitingen waarop andere stukken aansluiten.
keywords: mep, apparatuur, luchtbehandelingskast, ahu, ventilator, inline ventilator, pomp, ketel, warmwaterbereider, eindapparaat, vav, diffusor, rooster, register, tank, poort, poorten, aansluiting, mondstuk, halsmaat, hvac, sanitair, werktuigbouw, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Wat u gaat doen

Plaats de apparatuur aan de uiteinden van uw leidingen en kanalen. Elk stuk is een generieke vorm die de maten volgt die u typt, met zijn aansluitingen als **poorten**: waar een leiding of kanaal erop aansluit, welk systeem, welke kant de stroom op gaat en welke maat. Leidingen en kanalen die vanaf een poort worden getekend, nemen zijn maat en systeem over en blijven eraan vast: zie [Leidingen en kanalen op apparatuur aansluiten](topic:mep-connections).

:::note
Dit is een hulpmiddel voor tekenen en coördinatie, door een ingenieur gedimensioneerd. De apparatuur is geen product van een fabrikant: geen capaciteiten, gewichten of aansluitmaten van fabrikanten. Breng het model van een fabrikant uit uw MEP-programma als IFC aan wanneer u dat nodig heeft.
:::

## Een stuk plaatsen

1. Zet {{ui:Tekenen}} aan, open {{ui:Build}} en kies {{ui:Apparatuur}}.
2. Kies in de balk de soort en typ de maten. Elke soort vraagt zijn eigen maten:

| Soort | U typt | De poorten |
|---|---|---|
| Luchtbehandelingskast | lengte, breedte, hoogte; toevoer- en retouropeningen; leidingmaat en systeem van de batterij; maat van de condensafvoer | toevoerkanaal uit, retourkanaal in, batterij in en uit, condensafvoer |
| Inline ventilator | diameter, lengte, systeem | kanaal in en uit |
| Pomp | leidingmaat, systeem | inlaat en uitlaat |
| Ketel | lengte, breedte, hoogte, leidingmaat, gasmaat, rookgasdiameter | verwarmingstoevoer uit en retour in, gas in, rookgas uit |
| Warmwaterbereider | diameter, hoogte, leidingmaat, gas of elektrisch | koud water in, warm water uit (en gas in en een rookgasafvoer wanneer hij op gas stookt) |
| Eindapparaat | lengte, breedte, hoogte, ronde inlaat, breedte en hoogte van de uitlaat | toevoerlucht in en uit |
| Diffusor | front, hals, systeem | zijn hals (lucht in) |
| Rooster | breedte en hoogte van het front, breedte en hoogte van de hals, systeem | zijn hals (lucht uit naar het retour- of afvoerkanaal) |
| Tank | diameter, hoogte, leidingmaat, systeem | inlaat bovenaan, uitlaat dicht bij de bodem |
| Radiator | lengte, hoogte, diepte, leidingmaat, systeem | aanvoer in bovenaan het ene uiteinde, retour uit onderaan het andere |
| Convector / paneelverwarming | lengte, hoogte, diepte, leidingmaat, systeem | aanvoer in aan het ene uiteinde, retour uit aan het andere |
| Familie van een fabrikant | de familie (zie [Leidingspecificaties, kleppen, dempers en fabrikantenfamilies](topic:pipe-specs)) | de poorten die de familie heeft gekregen |

3. Stel **Op hoogte** in, de hoogte van de voet boven het niveau. De hoogte van een diffusor of rooster is het front: typ de plafondhoogte.
4. Typ een **Tag** als u er een wilt (`AHU-1`); het volgende stuk van dezelfde soort krijgt het volgende nummer.
5. Beweeg de aanwijzer over de plattegrond: de voetafdruk en de poorten volgen. Druk op {{key:R}} om het 90° te draaien. Klik waar het moet komen.

De leidingmaten zijn staalbuismaten (ASME B36.10M). Een leiding die vanaf een pomp in een ander materiaal wordt getekend, neemt dezelfde nominale maat over in zijn eigen materiaal.

## Wijzigen of verwijderen

Selecteer het in de plattegrond of de 3D-weergave. Eigenschappen toont elke maat die u typte, de tag, X, Y, hoogte en draaiing, en elke poort: zijn maat, systeem, de kant waarop de stroom gaat, en of er iets is aangesloten. Elke wijziging is één stap van {{ui:Ongedaan maken}}; stukken die aan zijn poorten vastzitten, gaan mee. {{key:Delete}} verwijdert het; stukken die eraan vastzaten, blijven staan, en de controle op aansluitingen somt ze op.

## In het IFC-bestand

Elke soort wordt opgeslagen als zijn IFC-klasse: IfcUnitaryEquipment (luchtbehandelingskast), IfcFan, IfcPump, IfcBoiler (ketel; een warmwaterbereider is een IfcBoiler van het type water met het objecttype "Water heater"), IfcAirTerminalBox (eindapparaat), IfcAirTerminal (diffusor, rooster) en IfcTank, met een type dat door elk stuk van dezelfde soort en maten wordt gedeeld. IFC2X3-bestanden krijgen IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal en IfcFlowStorageDevice met de bijpassende types. Elke poort is een IfcDistributionPort, geplaatst waar de aansluiting zit, naar buiten gericht, met zijn stroomrichting en systeem; andere programma's lezen welke leiding op welke poort aansluit. Het stuk hoort bij het systeem van elk van zijn poorten en draagt de bibliotheek-itemsets die elk geplaatst bibliotheekitem heeft.
