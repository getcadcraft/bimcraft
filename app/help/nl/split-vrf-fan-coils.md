---
title: Split-, VRF- en fancoilunits
summary: Plaats wand-, cassette- en kanaalbinnenunits, single-split- en VRF-buitenunits, refnet-verbindingen en 2-pijps of 4-pijps fancoils, elk met zijn koelmiddel-, water-, condensaat- en kanaalaansluitingen, en teken de leidingsets ertussen, gedimensioneerd met een tabel die u kunt wijzigen.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variabele koelmiddelstroom, warmtepomp, binnenunit, buitenunit, condensorunit, wandmontage, hoge wand, cassette, kanaal, verborgen, fan coil, fcu, 2-pijps, 4-pijps, refnet, aftakverbinding, y-verbinding, leidingset, lineset, koelmiddel, vloeistofleiding, gasleiding, zuigleiding, acr, koper, condensaat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Wat u gaat doen

Plaats de units van een split-, multi-split- of VRF-systeem en de fancoils in het model, en verbind ze daarna met leidingsets: een vloeistof- en een gasleiding in ACR-koper, vastgemaakt aan de aansluitpunten van de units. De units werken als elk ander stuk in [MEP-apparatuur met aansluitpunten](topic:mep-equipment): dezelfde balk, Eigenschappen, aansluitpunten en [verbindingen](topic:mep-connections).

:::note
Dit is een hulpmiddel voor tekenen en coördinatie. De units zijn generieke vormen op basis van de waarden die u invoert, geen producten van een fabrikant. Hun leidingmaten komen uit een tabel met **typische voorbeeldwaarden** voor R410A- en R32-apparatuur, niet van een fabrikant: de installatiehandleiding van de fabrikant bepaalt de echte maten, en lange leidingen of grote hoogteverschillen veranderen ze. Pas de tabel aan, of typ de maten, zodat ze passen bij de units die u gebruikt.
:::

## Een unit plaatsen

1. Zet {{ui:Tekenen}} aan, open {{ui:Build}} en kies {{ui:Apparatuur}}.
2. Kies het soort en stel de waarden in:

| Soort | U stelt in | De aansluitpunten |
|---|---|---|
| Split binnenunit, wand | capaciteit, vloeistof- en gasleiding, lengte, diepte, hoogte, condensaatmaat | koelmiddel vloeistof en gas, condensaatafvoer (aan het rechteruiteinde, bij de wand) |
| Split binnenunit, cassette | capaciteit, vloeistof- en gasleiding, paneel, behuizing, hoogte, condensaatmaat | koelmiddel vloeistof en gas, condensaatafvoer (aan één zijde, bij de bovenkant) |
| Split binnenunit, kanaal | capaciteit, vloeistof- en gasleiding, lengte, breedte, hoogte, toevoer- en retouropeningen, condensaatmaat | toevoerkanaal uit, retourkanaal in, koelmiddel vloeistof en gas, condensaatafvoer |
| Split buitenunit | capaciteit, vloeistof- en gasleiding, breedte, diepte, hoogte | koelmiddel vloeistof en gas (aan de rechterzijde) |
| VRF buitenunit | capaciteit, vloeistof- en gasleiding, breedte, diepte, hoogte | koelmiddel vloeistof en gas (aan de voorkant, laag) |
| Refnet-verbinding | vloeistof- of gasleiding, de belasting op elke aftakking, de buis aan elk uiteinde | inlaat, aftakking A, aftakking B |
| Fancoilunit | 2-pijps of 4-pijps, lengte, breedte, hoogte, toevoer- en retouropeningen, spoelleiding en systeem, verwarmingsleiding, condensaatmaat | toevoerkanaal uit, retourkanaal in, spoel in en uit, verwarming in en uit (4-pijps), condensaatafvoer |

3. Stel **Op** in: de hoogte van de onderkant van de unit boven het niveau. De onderkant van een wandunit is de onderkant zelf (vaak 2100 mm); die van een cassette is het vlak in het plafond; die van een refnet is de hoogte van de hartlijn van zijn leiding.
4. Klik waar de unit moet komen ({{key:R}} draait hem 90°).

**Capaciteit** is het nominale koelvermogen van de unit in kW, met Btu/h ernaast. Staan **Vloeistofleiding** en **Gasleiding** op **Uit de tabel**, dan nemen de aansluitingen van de unit de maten uit de tabel voor die capaciteit; kies een leidingmaat om die van uw eigen unit te gebruiken. De inlaat van een refnet is berekend voor beide aftakkingen samen, elke aftakking voor de eigen belasting.

Koelmiddelaansluitingen werken in beide richtingen (een warmtepomp draait in beide richtingen). De condensafvoer is een leidingmaat, net als elke afvoer.

## Een leidingset tekenen

1. Selecteer twee stukken ({{key:Shift}}+klik op het tweede): een buitenunit en een binnenunit (een enkele split), of een buitenunit en een refnet, een refnet en een binnenunit, of twee refnets (VRF).
2. Open {{ui:Build}} en kies {{ui:Leidingset}}.

BimCraft tekent de vloeistof- en gasleidingen tussen hun vrije aansluitpunten, uit elk aansluitpunt omhoog naar een gemeenschappelijke hoogte, in ACR-koper (gegloeide spoel tot 1-5/8 in, getrokken buis daarboven), als één stap van {{ui:Ongedaan maken}}. Een refnet neemt alleen zijn eigen leiding: naar zijn inlaat vanaf de buitenkant en uit een aftakking richting de binnenunits. Elke leiding krijgt de maat van zijn stroomafwaartse einde (de binnenunit of de inlaat van het refnet). Heeft het andere aansluitpunt een andere maat, dan toont {{ui:Aansluitingen controleren}} dat: daar komt een verloopstuk. Twee binnenunits hebben een refnet tussen zich nodig.

Verplaats de leidingen daarna net als elke leidingroute; hun uiteinden blijven op de aansluitpunten. Leidingen tussen niveaus worden getekend met {{ui:Leiding}}: een leiding die start op een koelmiddelaansluiting krijgt zijn systeem, ACR-koper en maat.

## De tabel van de leidingset wijzigen

Open {{ui:Build}} en kies {{ui:Leidingsetmaten}}. Elke rij zegt: tot deze capaciteit (kW), deze vloeistofbuis en deze gasbuis.

| Tot | Vloeistof | Gas |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Dit zijn de typische startwaarden. Wijzig een rij, voeg rijen toe of verwijder ze en kies {{ui:Opslaan}}: de tabel wordt in het model bewaard, zodat iedereen die aan het bestand werkt hem gebruikt, en {{ui:Ongedaan maken}} maakt dit ongedaan. {{ui:De typische waarden gebruiken}} zet de beginwaarden terug. Stukken die al geplaatst zijn, houden hun aansluitpunten totdat u ze wijzigt.

## In het IFC-bestand

Binnen- en buitenunits van split- en VRF-systemen zijn IfcUnitaryEquipment van type SPLITSYSTEM; het objecttype geeft aan welke ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Een fancoil is IfcUnitaryEquipment van type AIRHANDLER met het objecttype "Fan coil unit": IFC4 kent geen fancoiltype, en een ventilator, een spoel en een filter voor één ruimte is wat AIRHANDLER beschrijft. Een refnet-verbinding is een IfcPipeFitting van type JUNCTION ("Refnet joint"). IFC2X3-bestanden krijgen IfcEnergyConversionDevice en IfcFlowFitting met de overeenkomstige types.

Koelmiddelaansluitingen en -leidingen zitten in REFRIGERATION-systemen (één voor de vloeistofleidingen, één voor de gasleidingen), condensaat in een DRAINAGE-systeem. ACR-leidingen worden genoemd naar hun buitendiameter. De tabel van de leidingset is de eigenschapsset CadCraft_HvacLineSets op het project.

Zie ook [MEP-apparatuur met aansluitpunten](topic:mep-equipment), [Leidingen en kanalen op apparatuur aansluiten](topic:mep-connections) en [Leidingen en kanalen](topic:pipes-and-ducts).
