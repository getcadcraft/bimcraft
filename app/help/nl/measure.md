---
title: Afstanden, vlakoppervlakken en locaties in 3D meten
summary: Meet tussen twee punten van een IFC-model met snappen op hoeken en randen, lees het verschil langs X, Y en Z af, en meet het oppervlak van een vlak.
keywords: meten, meting, afstand, lengte, maatvoering, oppervlak, vlakoppervlak, snappen, hoek, rand, meetlint, liniaal, vrije ruimte, locatie, breedtegraad, lengtegraad, lat long, coördinaten, georeferentie, kaartconversie, EPSG, opmeting, Easting, Northing, WGS 84, datum
from: 5f430bba
---

## Wat u gaat doen

Controleer een vrije ruimte, een wandlengte of de grootte van een vlak rechtstreeks uit het model, zonder het auteursprogramma te openen.

## Stappen

1. Open een IFC-model.
2. Klik op {{ui:Meten}} in de werkbalk, of druk op {{key:M}}. Onderaan de weergave opent een balk.
3. **Een afstand:** kies {{ui:Afstand}}, klik het eerste punt en daarna het tweede. Dicht bij een hoek snapt de aanwijzer erop, dicht bij een rand erop; het kleine label bij de aanwijzer zegt welke. Elk paar klikken maakt één meting.
4. **Het oppervlak van een vlak:** kies {{ui:Vlakoppervlak}} en klik op een vlak. Het hele vlakke vlak licht op en de oppervlakte verschijnt.
5. **Rechte lijnen:** houd {{key:Shift}} ingedrukt terwijl u het tweede punt kiest, of druk op {{ui:Recht}} in de balk om het zo te houden. De lijn loopt dan langs de as waar de aanwijzer het dichtst bij staat (in een bovenaanzicht langs X of Y van de plattegrond; in andere aanzichten langs X, Y of Z), en het aanwijzerlabel zegt "recht langs een as". {{key:M}} start en stopt Meten nog steeds.
6. Klik op {{ui:Wissen}} om de metingen te verwijderen, of op {{ui:Gereed}} (of {{key:Esc}}) om met meten te stoppen.

## Wat u ziet

- Een lijn tussen de twee punten met zijn lengte erop, en in de balk de lengte met hoe ver die langs X, Y en Z loopt (in de assen van het model, Z omhoog), alles in de {{ui:Eenheden}} die op de werkbalk is gekozen.
- De oppervlakte van een vlak in vierkante meter, op het vlak en in de balk.
- Labels blijven bij hun metingen terwijl u draait, verschuift en zoomt.
- Terwijl u meet, kiezen klikken geen elementen. Een snijvlak of snijkader snijdt het model nog steeds, en u kunt meten wat het toont, ook de doorsneden.

## Waar een punt op aarde ligt

Klik op {{ui:Locatie}} in de meetbalk, en klik daarna op een punt van het model (het snapt op hoeken en randen, zoals bij afstanden). De balk toont:

- de **breedtegraad en lengtegraad**, in decimale graden en in graden, minuten en seconden, in WGS 84 om mee te beginnen;
- de **kaartcoördinaten** (Easting en Northing, geschreven in de {{ui:Eenheden}} die op de werkbalk is gekozen) in het eigen kaartstelsel van het model, bijvoorbeeld `EPSG:28356`;
- de **hoogte** en het verticale datum die het bestand noemt, en het **eigen datum** van het bestand (bijvoorbeeld GDA94).

{{ui:Kopiëren}} zet alles in één regel op het klembord. Wijzig het stelsel waarin de breedte- en lengtegraad staan onder {{ui:Instellingen}} › {{ui:BimCraft}} › {{ui:Locatie}}: WGS 84 (zoals GPS en webkaarten), het eigen datum van het bestand, of een ander veelgebruikt datum zoals ETRS89 of NAD83.

Dit vereist een model met georeferentie: een model dat is geëxporteerd met kaartcoördinaten (een kaartconversie naar een geprojecteerd stelsel met een EPSG-code). Een model dat alleen een breedte- en lengtegraad van de locatie heeft, krijgt een benaderde positie, berekend uit het punt van de locatie en het echte noorden, en de balk zegt dat. Met meerdere modellen open gebruikt elk punt de georeferentie van het eigen model.

:::note
Verschuiven tussen datums (bijvoorbeeld van GDA94 naar WGS 84) gebeurt zonder rasterbestanden, dus het is nauwkeurig tot enkele meters; de statusregel zegt hoe nauwkeurig. De kaartcoördinaten zelf zijn exact.
:::

## Veelgemaakte fouten

- **"…heeft geen georeferentie".** Het bestand heeft geen kaartconversie en geen breedte- en lengtegraad van de locatie. Exporteer het opnieuw met het ingestelde coördinatenstelsel (gedeelde coördinaten / meetpunt in het auteursprogramma).
- **Kaartcoördinaten maar geen breedte- en lengtegraad.** Het bestand noemt zijn kaartstelsel zonder EPSG-code, of met een code die niet in de lijst staat; de statusregel zegt welke.

- **Het punt komt op het vlak, niet op de hoek.** Snappen kijkt naar het element onder de aanwijzer. Ga dichter bij de hoek, of zoom in.
- **De oppervlakte is kleiner dan verwacht.** Openingen worden weggelaten, en een vlak dat buigt is meerdere vlakken: klik elk ervan.
- **{{key:Esc}} stopte het meten.** De eerste {{key:Esc}} laat een halfgemaakte afstand vallen; de tweede stopt.

## Verder

- [Een IFC-model doorsnijden met een snijvlak](topic:section-plane)
- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
