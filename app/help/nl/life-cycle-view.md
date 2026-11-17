---
title: Zien wat er in vijftig jaar slijt
summary: De ramen, deuren, afwerkingen en het dak van het model, hun levensduur, de jaren waarin elk wordt vervangen, en de kosten per jaar met hun contante waarde zodra u een kost per eenheid invult.
keywords: levenscyclus, levenscyclusweergave, levensduur, vervanging, onderhoud, kosten, contante waarde, disconteren, inflatie, 50 jaar, ramen, verf, dak, afwerkingen, totale levensduur
from: 1b849545
---

De sectie {{ui:Levenscyclusweergave}} van het linkerpaneel toont wat het model bevat dat slijt en wanneer het wordt vervangen over de studieperiode (om mee te beginnen 50 jaar). Er wordt niets in het model gewijzigd.

## Lezen

Elk onderdeel toont zijn hoeveelheid (gemeten uit het model: raamoppervlak, buiten- en binnendeuren, afwerking van de buitenwand, binnenverf, vloer- en plafondafwerking, de voetafdruk van het dak, trappen), een **levensduur in jaren** en een **kosten per eenheid**. Een onderdeel wordt vervangen na zijn levensduur, daarna na twee keer zijn levensduur, enzovoort, zolang dat vóór het einde van de studie valt. Een raam van 30 jaar in een studie van 50 jaar wordt dus één keer vervangen, in jaar 30. De levensduren zijn typische planningswaarden: pas ze aan op uw producten en klimaat. Er wordt geen kost aangenomen; vul er zelf een in om het geld per jaar, het totaal en de contante waarde te zien. Voeg een disconteringsvoet en een inflatievoet toe als u die wilt.

{{ui:De planning opslaan (CSV)}} schrijft de onderdelen en de jaren weg. Leidingen, kanalen, bedrading en apparatuur worden ook vermeld (zie hieronder).

## Leidingen, kanalen, bedrading en apparatuur

- **Leidingen en kanalen** zijn de meters van elke getekende leiding. **Apparatuur** (pompen, ventilatoren, kleppen, eindpunten, armaturen, stopcontacten, schakelaars, verdeelborden en de andere zaken die het tabblad Assets bijhoudt) wordt geteld per soort, en elke soort heeft een planningslevensduur. Een item waarvan de eigen *levensduur* op het tabblad Assets is ingesteld, krijgt een eigen regel met die levensduur. Heeft het een installatiedatum, dan begint het op zijn leeftijd: een pomp van 16 jaar oud met een levensduur van 10 jaar is nu aan vervanging toe, daarna elke tien jaar.
- **Bedrading** is een **schatting**: de plattegrondafstand vanaf het bord langs de apparaten van elk circuit, de dichtstbijzijnde eerst, maal 1.25 voor de routering. Het model tekent geen kabel, dus controleer het tegen uw eigen opmeting.
- Levensduren zijn planningswaarden om na te kijken, geen bron.

## Koolstof per vervanging

Vink {{ui:Neem de ingebedde koolstof van elke vervanging mee}} aan. Een nieuw raam, deur, trap, dak, leiding of stuk apparatuur wordt geteld tegen de koolstof die de eigen elementen van dat soort in het model dragen (de factoren van het tabblad Carbon, per eenheid). Een onderdeel zonder element of factor, zoals verf, afwerkingen en bedrading, toont een streepje en wordt vermeld. Het einde van de levensduur van het oude onderdeel en het werk om het te vervangen worden niet meegeteld.
