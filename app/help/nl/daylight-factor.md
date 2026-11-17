---
title: Het daglicht in elke ruimte inschatten
summary: De gemiddelde daglichtfactor van elke ruimte op basis van de ramen, de binnenoppervlakken en de hemel die elk raam ziet, met de hemelhoek gemeten in het model. Een schatting in de vroege ontwerpfase, geen simulatie en geen bouwcontrole.
keywords: daglicht, daglichtfactor, gemiddelde daglichtfactor, adf, verticale hemelcomponent, vsc, zonnewinst, zon, g-waarde, raster, split flux, hemelcomponent, intern gereflecteerde component, natuurlijk licht, raam, beglazing, hemelhoek, obstructie, overschaduwing, balkon, overstek, reflectie, transmissie, vroege ontwerpfase, analyse, ruimten, spaces
from: 5f300a78
---

Het tabblad {{ui:Daglicht}} in het rechterpaneel berekent de **gemiddelde daglichtfactor** van elke ruimte: hoeveel van het licht van een bewolkte hemel buiten, gemiddeld, de ruimte bereikt, als percentage. Het leest de ruimten (spaces) en ramen van het geopende IFC-model. Er wordt niets in het model gewijzigd en niets geüpload.

:::warning
Alles op dit tabblad is **een ontwerphulpmiddel, geen berekening voor naleving**: schattingen in de vroege ontwerpfase volgens gepubliceerde methoden, **geen simulatie** en **geen controle tegen een bouwbesluit of een norm**. BS EN 17037, LEED, BREEAM en energie-eisen vragen om een daglichtsimulatie met het klimaat van de plaats; gebruik daarvoor een daglichtsimulatieprogramma.
:::

## De berekening uitvoeren

1. Open een IFC-model met ruimten (spaces) en ramen. Modellen die hier getekend zijn, hebben in elke gesloten reeks muren een ruimte.
2. Open het tabblad {{ui:Daglicht}} en klik op {{ui:Berekenen}}.
3. Elke ruimte toont zijn daglichtfactor en een klasse: onder 2 %, 2–5 %, 5 % of meer. Klik op een ruimte om de oppervlakken te zien en het oppervlak en de hemelhoek van elk raam; de ruimte en de ramen worden in het model geselecteerd.

Wijzig een invoer en de getallen volgen direct; na een wijziging in het model: {{ui:Opnieuw berekenen}}. {{ui:CSV}} slaat elke ruimte op met de getallen en de gebruikte invoer.

## De formule

Gemiddelde daglichtfactor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), opgeteld over de ramen van de ruimte (de formule van Littlefair, gebruikt in BRE 209, BS 8206-2 en CIBSE LG10):

- **T**, de lichttransmissie van het glas (0.7 om mee te beginnen: gebruik het getal van de fabrikant).
- **Ag**, het glasoppervlak: het oppervlak van elk raam (de totale breedte × hoogte, anders zijn formaat in het model) × het **glasaandeel** (0.75 om mee te beginnen: de rest is kozijn).
- **θ**, de hoek van de hemel die het raam ziet, in graden (hieronder).
- **M**, de onderhoudsfactor voor vuil op het glas (1 om mee te beginnen).
- **A**, elk binnenoppervlak van de ruimte: vloer, wanden, plafond en ramen, uit de eigen vorm van de ruimte.
- **R**, hun gemiddelde reflectie, gewogen naar oppervlak: vloer 0.2, wanden 0.5, plafond 0.7 om mee te beginnen; glas telt als 0.1.

## Hoe de hemelhoek wordt gemeten

Voor elk raam snijdt BimCraft het model met een verticaal vlak loodrecht op het raam, vanaf het buitenvlak van het glas, en kijkt vanaf de horizon recht omhoog: alles wat de snede vóór het raam tegenkomt (een gebouw aan de overkant, een balkon of overstek erboven, de dakrand) neemt een deel van die 90° weg. θ is wat overblijft. Het raam zelf en de wand waarin het zit, worden buiten beschouwing gelaten. Dit gebeurt op vijf plaatsen over de breedte van het raam, en het gemiddelde wordt genomen, zodat een dunne paal voor het midden zijn deel krijgt, niet de hele hemel.

Een gebouw van 8.5 m boven het midden van het raam en 9.9 m weg, neemt 40.65° weg (de hoek waarvan de tangens 8.5 ÷ 9.9 is), zodat θ = 49.35° overblijft.

## Verticale hemelcomponent van elk raam

{{ui:Berekenen}} meet ook, voor elk raam, wat het van de hele hemel ziet: dezelfde verticale snede, gedraaid naar elke richting over de voorzijde van het raam (elke 2°, van de ene zijde naar de andere), zodat een gebouw aan één kant, een lamel of een diepe reveal zijn deel meeneemt. Daaruit berekent BimCraft de **verticale hemelcomponent (VSC)**: hoeveel van het licht van de bewolkte hemel het glas bereikt, als aandeel van wat een open, vlak dak zou krijgen. Een raam met niets ervoor krijgt **39.6 %**, het maximum voor een verticaal raam; een hoog gebouw dat 25° boven het raam uitsteekt, laat ongeveer **27 %** over, het cijfer dat de Britse richtlijn (BRE 209) als vuistregel gebruikt. Elk raam in het detail van een ruimte toont zijn VSC en zijn **obstructiehoek** (hoe hoog dingen recht voor het raam uitsteken).

De hemel is de standaard CIE-bewolkte hemel, die recht boven drie keer helderder is dan aan de horizon, en de snede is exact: er wordt niets bemonsterd.

## De zon door de ramen op een datum

Open {{ui:Zon door de ramen op een datum}} en kies een datum. BimCraft volgt de zon die dag per kwartier en telt voor elk raam de warmte op die de zon door het glas brengt:

- het **directe zonlicht**, wanneer de zon voor het raam staat en niets in het model die blokkeert (dezelfde exacte snede, gedraaid naar de zon: een balkon dat de hoge zomerzon om twaalf uur afschermt, laat de lage winterzon wel binnen);
- het **licht van de hemel** op het glas, min wat het raam niet kan zien;
- het licht **van de grond** (de reflectie ervan: 0.2 om mee te beginnen);
- alles door de **g-waarde** van het glas (het aandeel van de zonne-energie dat het doorlaat: 0.6 om mee te beginnen; gebruik het getal van de fabrikant) en het glasaandeel.

Elke ruimte toont het totaal van de dag in kWh en de piek in watt met het tijdstip; het detail van een ruimte tekent de dag als grafiek. De hemel is helder volgens het model van Hottel (Duffie & Beckman, *Solar Engineering of Thermal Processes*), met de zomer- of winterwaarden voor de plaats en het seizoen en de hoogte van het terrein; de positie van de zon komt van NOAA. De breedte- en lengtegraad van het terrein komen uit het IFC-terrein, en het noorden uit het ware noorden van het model; heeft het model geen terrein, typ dan een breedte- en lengtegraad. Tijden zijn standaardtijd (geen zomertijd) in de tijdzone die u typt, anders de tijdzone die de lengtegraad aangeeft.

Wat het weglaat: wolken (het is een heldere dag), dat het glas minder doorlaat bij lage hoeken, kozijnen die het glas beschaduwen, screens, en wat de wanden en het dak opnemen. De koelingsschatting op hetzelfde tabblad gebruikt de piek.

## De daglichtfactor op een raster

Open {{ui:Daglichtfactor op een raster}} en {{ui:Raster berekenen}}: BimCraft legt een raster over de vloer van elke ruimte, op de hoogte van het werkvlak (0.85 m om mee te beginnen), een halve meter van de wanden, en berekent de daglichtfactor in elk punt met de **split-fluxmethode van BRE**:

- de **hemelcomponent**: de bewolkte hemel die vanaf het punt door de opening van elk raam wordt gezien, min het kozijn;
- de **extern gereflecteerde component**: wat het punt van gebouwen buiten ziet door het raam, die het licht van een tiende van de hemel erachter terugkaatsen (wijzig de helderheid van de obstructie als ze veel lichter of donkerder zijn);
- de **intern gereflecteerde component**: het licht dat in de ruimte heen en weer kaatst, van de oppervlakken en reflecties van de ruimte, het oppervlak van de ramen en hoeveel daarvan buiten valt (de formule van BRE, met de lichttransmissie van het glas in plaats van het heldere glas waarvan werd uitgegaan).

Elke ruimte toont zijn gemiddelde, zijn laagste punt en hoeveel daarvan 2 % of meer krijgt; het detail van een ruimte tekent de plattegrond met elk punt gekleurd naar zijn daglichtfactor en de ramen in rood. Om het op elke computer vlot te houden krijgt een ruimte hooguit **400 punten**: in een grote ruimte groeit de tussenafstand mee (typ een afstand om zelf te kiezen).

## Wat het weglaat

- Dakramen (glas dat plat of hellend ligt) worden vermeld maar niet meegeteld: de formules hier gelden voor ramen in wanden.
- Ramen zonder ruimte erachter (een hal zonder ruimte, bijvoorbeeld) worden apart vermeld.
- Dieptes van de raamopeningen (de opening wordt op het buitenvlak genomen), verblinding, zonuren en klimaatafhankelijk daglicht. Voor BS EN 17037, LEED of BREEAM gebruikt u een daglichtsimulatieprogramma.
- De klassen komen uit oudere Britse richtlijnen (BS 8206-2), getoond als richtlijn, nooit als geslaagd of afgekeurd.
