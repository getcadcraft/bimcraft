---
title: Een overstroming, wind of aardbeving op het gebouw afspelen
summary: Water dat door de kamers stijgt, winddruk op elke verdieping of een aardbeving die de verdiepingen doet trillen, afgespeeld op een plattegrond of gevel met een tijdschuifregelaar. Eenvoudige modellen met hun aannames vermeld; geen normcontrole en geen constructief ontwerp.
keywords: gevaar, overstroming, wind, aardbeving, seismisch, drift, zwaai, basisschuifkracht, waterpeil, klimaat, scenario, zeespiegel, afspelen, verdieping, periode
from: ff0d34d1
---

De sectie {{ui:Gevarenweergave}} van het linkerpaneel speelt een gevaar af op het geopende IFC-model. Er wordt niets in het model gewijzigd.

:::warning
Dit zijn **eenvoudige modellen om te zien wat een gevaar met deze indeling doet**, geen overstromingsstudie, geen controle op windnormen en geen constructief ontwerp. Elk resultaat somt zijn aannames op.
:::

## Overstroming

Stel het hoogste waterpeil boven de laagste vloer in, en de minuten om te stijgen, vast te houden en te dalen. Water komt een ruimte binnen via een opening waarvan de dorpel het water heeft gepasseerd; ruimten die via openingen onder het waterpeil met natte ruimten verbonden zijn, staan op hetzelfde niveau (quasi-statisch). De tabel geeft aan wanneer elke ruimte voor het eerst nat wordt en hoe diep het water staat; de plattegrond speelt dat af. Typ de hoogste waterdiepte die een ruimte mag hebben, en ruimten die daarboven liggen, zijn waarschuwingen. **Klimaatscenario's:** laad uw eigen scenariobestand (JSON of CSV met een jaar, een zeespiegelstijging en een overstromingsfactor) en kies een jaar. Of schakel de add-on Klimaatscenario's in en kies een scenario en een jaar: de overstroming wordt twee keer uitgevoerd, heden naast toekomst (zie "Klimaatscenario's: overstroming van 2050 en 2080, hitte en bosbrand"). De soorten Blootstelling aan bosbranden en Hitte: bestand met toekomstig weer staan in dezelfde lijst.

## Wind

De druk volgt ½ρV², waarbij de snelheid toeneemt met de hoogte; de kracht op een verdieping is die druk maal een windstootfactor, de twee drukcoëfficiënten, de breedte en de verdiepingshoogte. U krijgt de dwarskracht, het kantelmoment en de zwaai.

## Aardbeving

Een afschuifgebouw: een massa per vloer (grondoppervlak × kg per m², die u instelt), dezelfde stijfheid in elke verdieping, afgestemd op de eerste periode die u opgeeft (een tiende seconde per verdieping als u het leeg laat, en dat wordt vermeld), demping, en een kunstmatige grondbeweging (een puls of gefilterde ruis) bij de piekversnelling die u kiest. Het resultaat is de drift van elke verdieping, de vloerversnellingen en de basisschuifkracht; de gevel speelt de zwaai af, groter getekend dan hij is. Typ een driftverhouding die u toestaat, en verdiepingen die daarboven liggen, zijn waarschuwingen. Het is elastisch: niets bezwijkt of scheurt.

## Vloerstijfheid uit het analyseraamwerk

Kies voor een aardbeving of voor windzwaai **Het analyseraamwerk** als bron van de stijfheid, in plaats van een periode in te typen. Elke vloer wordt om de beurt zijdelings belast, het raamwerk (balken, kolommen, verbanden, vloeren) wordt doorgerekend, en de stijfheid van de vloeren met alles samen stuurt de berekening aan. Het gewicht is het eigen gewicht van de leden plus de vloerbelasting per m² die u op de plattegrondkader van elke vloer instelt. De werkelijke eerste periode wordt getoond. Het is elastisch: niets bezwijkt, en torsie wordt niet gemodelleerd. Voor wind blijven de krachten per verdieping de aangenomen krachten hierboven (een machtsprofiel, uw windstootfactor en de vaste drukcoëfficiënten, geen windnorm); alleen de zwaai komt uit het raamwerk, door de volledige stijfheidsmatrix van het raamwerk tegen die krachten op te lossen. Het model heeft een IFC nodig met een raamwerk dat het tabblad Analyse kan lezen.

## Eenheden

Waterdieptes, zwaai en drift per verdieping, afstanden en oppervlakten worden getoond in de {{ui:Eenheden}} die u koos. Krachten (kN), tijden en versnellingen behouden hun eigen eenheden, en een waarde die u typt in een vak met de aanduiding in meter blijft in meter. Hetzelfde geldt voor de resultaten van ontruiming, daglicht, verwarming en koeling en inrichting: lengten, oppervlakten en volumes volgen uw keuze; druk, debiet, temperatuur, energie en vermogen worden nooit omgerekend.
