---
title: Split-, VRF- en ventilatorspoeleenhede
summary: Plaas muur-, kasset- en kanaalbinneenhede, enkel-split- en VRF-buitenseenhede, refnet-verbindings en 2-pyp- of 4-pyp-ventilatorspoele, elk met sy koelmiddel-, water-, kondensaat- en kanaalverbindings, en teken die lynstelle tussen hulle, gegroot volgens 'n tabel wat jy kan verander.
keywords: split, mini split, minisplit, multi split, vrf, vrv, veranderlike koelmiddelvloei, warmtepomp, binneenheid, buitenseenheid, kondenseereenheid, muurgemonteer, hoë muur, kasset, kanaal, verborge, ventilatorspoel, fcu, 2-pyp, 4-pyp, refnet, takverbinding, y-verbinding, lynstel, lineset, koelmiddel, vloeistoflyn, gaslyn, suigleiding, acr, koper, kondensaat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Wat jy sal doen

Plaas die eenhede van 'n split-, multi-split- of VRF-stelsel en sy ventilatorspoele in die model, en verbind dit dan met lynstelle: 'n vloeistoflyn en 'n gaslyn in ACR-koper, vas aan die eenhede se poorte. Die eenhede werk soos elke ander stuk in [MEP-toerusting met poorte](topic:mep-equipment): dieselfde balk, Eienskappe, poorte en [verbindings](topic:mep-connections).

:::note
Dit is 'n tekening- en koördinasiehulpmiddel. Die eenhede is generiese vorms wat deur die waardes wat jy intik, gegroot word, nie produkte van 'n vervaardiger nie. Hul buisgroottes kom uit 'n tabel van **tipiese voorbeeldwaardes** vir R410A- en R32-toerusting, nie van enige vervaardiger nie: die installasiehandleiding van die eenheidvervaardiger bepaal die werklike groottes, en lang lope of groot hoogteverskille verander hulle. Verander die tabel, of tik die groottes, om by die eenhede wat jy gebruik te pas.
:::

## Plaas 'n eenheid

1. Skakel {{ui:Teken}} aan, open {{ui:Bou}} en kies {{ui:Toerusting}}.
2. Kies die soort en stel die waardes:

| Soort | Jy stel | Die poorte |
|---|---|---|
| Split-binneenheid, muur | kapasiteit, vloeistof- en gaslyn, lengte, diepte, hoogte, kondensaatgrootte | koelmiddel-vloeistof en -gas, kondensaatdreineerder (aan die regterkant, naby die muur) |
| Split-binneenheid, kasset | kapasiteit, vloeistof- en gaslyn, paneel, liggaam, hoogte, kondensaatgrootte | koelmiddel-vloeistof en -gas, kondensaatdreineerder (aan een kant, naby die bokant) |
| Split-binneenheid, kanaal | kapasiteit, vloeistof- en gaslyn, lengte, breedte, hoogte, toevoer- en terugvoeropenings, kondensaatgrootte | toevoerkanaal uit, terugvoerkanaal in, koelmiddel-vloeistof en -gas, kondensaatdreineerder |
| Split-buitenseenheid | kapasiteit, vloeistof- en gaslyn, breedte, diepte, hoogte | koelmiddel-vloeistof en -gas (aan die regterkant) |
| VRF-buitenseenheid | kapasiteit, vloeistof- en gaslyn, breedte, diepte, hoogte | koelmiddel-vloeistof en -gas (aan die voorkant, laag) |
| Refnet-verbinding | vloeistof- of gaslyn, die lading op elke tak, die buis aan elke einde | inlaat, tak A, tak B |
| Ventilatorspoeleenheid | 2-pyp of 4-pyp, lengte, breedte, hoogte, toevoer- en terugvoeropenings, spoelpyp en -stelsel, verwarmingspyp, kondensaatgrootte | toevoerkanaal uit, terugvoerkanaal in, spoel in en uit, verwarming in en uit (4-pyp), kondensaatdreineerder |

3. Stel **Op**: die hoogte van die eenheid se basis bo die vlak. 'n Muureenheid se basis is sy onderkant (dikwels 2100 mm); 'n kasset se basis is sy vlak in die plafon; 'n refnet se basis is die hoogte van die pyp se middellyn.
4. Klik waar dit moet kom ({{key:R}} draai dit 90°).

**Kapasiteit** is die eenheid se nominale koelkapasiteit in kW, met Btu/h langsaan. Met **Vloeistoflyn** en **Gaslyn** wat op **Uit die tabel** gelaat word, neem die eenheid se verbindings die tabel se groottes vir daardie kapasiteit; kies 'n buisgrootte om jou eie eenheid se grootte te gebruik. 'n Refnet se inlaat is gegroot vir albei takke saam, en elke tak vir sy eie lading.

Koelmiddelpoorte werk albei kante ('n warmtepomp loop in albei rigtings). Die kondensaatdreineerder is 'n pypgrootte soos enige dreineerder.

## Teken 'n lynstel

1. Kies twee stukke ({{key:Shift}}+klik die tweede): 'n buitenseenheid en 'n binneenheid (enkel-split), of 'n buitenseenheid en 'n refnet, 'n refnet en 'n binneenheid, of twee refnets (VRF).
2. Open {{ui:Bou}} en kies {{ui:Lynstel}}.

BimCraft teken die vloeistof- en gaslope tussen hul vrye poorte, uit elke poort en op tot 'n gemeenskaplike hoogte, in ACR-koper (uitgegloeide spoel tot 1-5/8 in, getrekte buis bo dit), as een stap van {{ui:Ontdoen}}. 'n Refnet neem net sy eie lyn, in sy inlaat vanaf die buitekant en uit 'n tak na die binneenheide toe. Elke loop neem die grootte van sy afwaartse einde (die binneenheid, of die refnet se inlaat); waar die ander einde se poort 'n ander grootte het, lys {{ui:Kontroleer verbindings}} dit: dit is waar 'n reduseerder moet kom. Twee binneenheide benodig 'n refnet tussen hulle.

Skuif die lope daarna soos enige pyplope; hul einde bly op die poorte. Lope tussen vlakke word met {{ui:Pyp}} geteken: 'n pyp wat op 'n koelmiddelpoort begin, neem sy stelsel, ACR-koper en sy grootte.

## Verander die lynstel-tabel

Open {{ui:Bou}} en kies {{ui:Lynstel-groottes}}. Elke ry sê: tot hierdie kapasiteit (kW), hierdie vloeistofbuis en hierdie gasbuis.

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

Dit is die beginwaardes, tipiese waardes. Verander 'n ry, voeg rye by of verwyder rye en kies {{ui:Stoor}}: die tabel word in die model bewaar, sodat almal wat aan die lêer werk, dit gebruik, en {{ui:Ontdoen}} neem dit terug. {{ui:Gebruik die tipiese waardes}} plaas die beginstel terug. Stukke wat reeds geplaas is, behou hul poorte totdat jy dit verander.

## In die IFC-lêer

Binne- en buitenseenhede van split- en VRF-stelsels is IfcUnitaryEquipment van tipe SPLITSYSTEM, met die objektipe wat aandui watter een ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). 'n Ventilatorspoel is IfcUnitaryEquipment van tipe AIRHANDLER met die objektipe "Fan coil unit": IFC4 het geen ventilatorspoeltipe nie, en 'n ventilator, 'n spoel en 'n filter vir een vertrek is wat AIRHANDLER beskryf. 'n Refnet-verbinding is 'n IfcPipeFitting van tipe JUNCTION ("Refnet joint"). IFC2X3-lêers kry IfcEnergyConversionDevice en IfcFlowFitting met die ooreenstemmende tipes.

Koelmiddelpoorte en -lope is in REFRIGERATION-stelsels (een vir die vloeistoflyne, een vir die gaslyne), kondensaat in 'n DRAINAGE-stelsel. ACR-lope word volgens buitediameter genoem. Die lynstel-tabel is die eiendomstel CadCraft_HvacLineSets op die projek.

Sien ook [MEP-toerusting met poorte](topic:mep-equipment), [Koppel pype en kanale aan toerusting](topic:mep-connections) en [Pype en kanale](topic:pipes-and-ducts).
