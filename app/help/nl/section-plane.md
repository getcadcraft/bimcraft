---
title: Een IFC-model doorsnijden met een snijvlak
summary: Snijd het 3D-model van boven, voor of opzij, of houd alleen wat binnen een snijkader of een volume van meerdere kaders met schuine vlakken ligt, om binnen te kijken. Verplaats de snede door te slepen of te typen, draai hem om, en kies wat de snede toont.
keywords: doorsnede, snijvlak, snijkader, grips, slepen, marge, selectiekader, knipkader, snede, doorsnijden, plattegrondsnede, plattegrond, gevel, binnenkant, interieur, omdraaien, verschuiving, snijvolume, getrapte doorsnede, L-vormig, kantelen, schuine snede, schuin vlak, extra vlak
from: 6315e71a
---

## Wat u gaat doen

Snijd met één vlak door een IFC-model om binnen te kijken: van boven voor een plattegrond, of van voor of opzij voor een doorsnede door het gebouw.

## Stappen

1. Open een IFC-model. Zie [Een IFC-model openen en rondkijken in 3D](topic:open-ifc-model).
2. Klik op {{ui:Doorsnede}} in de werkbalk, of druk op {{key:X}}. Het model wordt halverwege doorgesneden, en er verschijnt een balk onder de werkbalk.
3. Kies waar u vandaan snijdt: {{ui:Boven}}, {{ui:Voor}} of {{ui:Zijaanzicht}}. Voor en Zijaanzicht draaien ook de weergave, zodat u de snede ziet.
4. Verplaats de snede: sleep de schuifregelaar **Verschuiving**, of typ een afstand in meters in het vak en druk op {{key:Enter}}. U kunt ook millimeters typen, bijvoorbeeld `1200 mm`.
5. Klik op {{ui:Omdraaien}} om de andere kant van de snede te behouden.
6. Klik op een element op de snede om zijn eigenschappen te zien.
7. Klik op {{ui:Uit}}, klik opnieuw op {{ui:Doorsnede}}, of druk op {{key:X}} om de snede weg te halen.

## Een snijkader

Klik op {{ui:Kader}} in dezelfde balk om alleen wat binnen een kader ligt te behouden. Elk van {{ui:X}}, {{ui:Y}} en {{ui:Z}} heeft twee schuifregelaars: waar het kader begint en waar het eindigt, in meters vanaf de rand van het model. De waarden staan ernaast.

- {{ui:Kader om de keuze}} past het kader om de gekozen elementen en zoomt erop in. Het laat aan elke kant 300 mm ruimte; wijzig dat in {{ui:Instellingen}} › {{ui:BimCraft}} › {{ui:Ruimte om de keuze}}.
- Met gekozen elementen doet {{ui:Tonen}} › {{ui:Snijkader om de keuze}} of {{key:Shift+X}} hetzelfde in één stap, ook wanneer er geen snede aan staat.
- **Grips** op het kader verplaatsen het met de aanwijzer: sleep een vierkantje in het midden van een vlak om dat vlak te verplaatsen, een in het midden van een rand om de twee vlakken die daar samenkomen te verplaatsen, of een in een hoek om de drie te verplaatsen. De schuifregelaars volgen. In {{ui:Boven}} verplaatst een hoek het kader in het plan; in {{ui:Voor}} of {{ui:Zijaanzicht}} verplaatst hij het in de gevel.
- {{ui:Het hele model}} maakt het kader weer zo groot als het hele model.
- {{ui:Boven}}, {{ui:Voor}} of {{ui:Zijaanzicht}} gaan terug naar één vlak.

## Een volume van meerdere kaders, schuine vlakken en extra vlakken

Een kader is niet altijd de vorm die u nodig heeft: een getrapte doorsnede, een L-vormige vleugel, of een snede langs een wand die niet haaks op het raster staat.

1. Klik in {{ui:Kader}} op {{ui:Een kader toevoegen}}. De snede houdt nu wat binnen **een** van de kaders ligt, dus twee kaders maken een getrapt of L-vormig volume. De lijst ernaast zegt welk kader de schuifregelaars veranderen ({{ui:Kader 1}}, {{ui:Kader 2}}…). {{ui:Dit kader verwijderen}} haalt het gekozen kader weg. Een volume bevat maximaal 8 kaders.
2. Open {{ui:Kanteling en vlakken}} om het gekozen kader te vormen:
   - Kies een {{ui:Vlak}} en typ hoe ver het in elke richting kantelt, in graden (tot 80). Het vlak draait om zijn midden; de andere vlakken blijven staan waar de schuifregelaars ze zetten. {{ui:Recht zetten}} zet het terug.
   - {{ui:Een vlak toevoegen}} snijdt het kader met nog één vlak. {{ui:Vlakken}} is de kant waar de weggesneden zijde naartoe staat, in graden van X naar Y. {{ui:Helling}} is hoe ver dat omhoog draait (0 voor een rechtopstaand vlak, 90 voor een horizontaal vlak). {{ui:Verschuiving}} is hoe ver het vlak van het midden van het kader ligt, in meters. × verwijdert het. Een kader neemt maximaal 6 extra vlakken.
3. Waar het volume door volumes snijdt, worden de snijvlakken ingevuld zoals voorheen, ook waar twee kaders in een trede samenkomen.

:::tip
Als de omtrek verdwijnt en er niets over is, laten de kanteling of de vlakken niets binnen dat kader over. De balk zegt dat. Kantel een vlak terug of wijzig de verschuiving van een vlak.
:::

## Een gebouw gedraaid op zijn terrein

Veel modellen plaatsen het gebouw schuin ten opzichte van de assen van het bestand (waar het noorden is, gedeelde coördinaten). Wanneer de wanden schuin lopen, begint een nieuwe doorsnede haaks op het gebouw: {{ui:Voor}}, {{ui:Zijaanzicht}} en het kader lopen langs de eigen wanden, en {{ui:Haaks op het gebouw}} in de snedebalk staat aan. Klik erop voor de assen van het model, en opnieuw om terug te gaan (de statusregel zegt hoeveel het gebouw is gedraaid). Met **Instellingen › BimCraft › Gebouw gedraaid op het terrein › Zoals geplaatst op het terrein** beginnen doorsneden en weergaven in plaats daarvan op de assen van het model. Zie [Instellingen](topic:settings).

## Wat u zou moeten zien

- **Boven** houdt wat onder de snede ligt, zodat u in de ruimten naar beneden kijkt. De verschuiving wordt omhoog gemeten vanaf de onderkant van het model.
- **Voor** houdt wat achter de snede ligt, gezien van voren. **Zijaanzicht** houdt wat erachter ligt, gezien van opzij. De verschuiving wordt gemeten vanaf de voor- of zijkant van het model.
- Een dunne gekleurde omtrek laat zien waar het vlak ligt.
- Waar het vlak door een wand, vloer of ander massief element snijdt, wordt het snijvlak donker ingekleurd, zoals een getekende doorsnede. {{ui:Vullen}} in de balk zet dit aan en uit.
- De kubus rechtsonder in de hoek draait het model om de snede van elke kant te bekijken.
- Klikken kiest wat u ziet: wat is weggesneden, kan niet worden gekozen.

## Veelvoorkomende fouten

- **Niets veranderd.** De snede kan boven het dak of buiten het model liggen. Sleep de schuifregelaar, of typ een kleinere verschuiving.
- **De verschuiving sprong terug.** Een afstand voorbij het model wordt naar het einde ervan verplaatst, en de statusregel zegt dat.
- **Een issue toont maar een deel van mijn volume.** Een issue (BCF) houdt één kader met zijn schuine vlakken en extra vlakken: het eerste kader van een volume. De statusregel zegt dat wanneer u het issue maakt.
- **De snede is hol.** {{ui:Vullen}} in de balk staat uit. Klik erop om de snijvlakken van wanden, vloeren en andere massieve elementen te vullen.
- **Een gevulde snede ziet er gespikkeld uit of mist een stuk.** Vullen heeft gesloten volumes nodig. Een element waarvan de vorm in het bestand niet gesloten is (een losse plaat, boombladeren), blijft ongevuld in plaats van overgeschilderd. Een element dat uit onderdelen in verschillende kleuren bestaat (een kozijn en zijn glas), wordt gevuld wanneer de onderdelen op elkaar aansluiten.
- **Waar is de snedebalk?** Hij staat bovenaan de 3D-weergave die hij doorsnijdt: in het 3D-deel bij {{ui:Splitsen}}, en onder de tekenbalk bij {{ui:Plattegrond}} alleen. In een lage weergave scrolt hij mee.

## Volgende

- [Verdiepingen, ruimten en randen tonen en verbergen](topic:storeys-and-spaces)
- [Een DWG- of DXF-tekening in 3D bekijken](topic:dwg-in-3d) — tekeningen in 3D hebben hetzelfde snijvlak
