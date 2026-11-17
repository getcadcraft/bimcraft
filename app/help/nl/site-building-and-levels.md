---
title: Het terrein, het gebouw erop en de niveaus
summary: Teken de contour van het terrein, plaats en draai het gebouw op het terrein, voeg niveaus toe op opgegeven hoogten of splits de gebouwhoogte, en teken op het niveau dat u kiest.
keywords: terrein, terreinplan, bouwlijn, terugligging, erfdienstbaarheid, doorgangsrecht, perceelgrens, perceel, kavel, grens, gebouwplaatsing, gebouw draaien, gebouw plaatsen, niveaus, verdiepingen, niveaus toevoegen, hoogte splitsen, verdieping tot verdieping, IfcSite, IfcBuilding, IfcBuildingStorey, ruimtelijke structuur
from: 48d10c1e
---

## Wat u gaat doen

Stel de delen van een IFC-model in die al het andere dragen: het terrein, het gebouw erop en de niveaus van het gebouw.

Een model is ingedeeld als een **terrein** dat een **gebouw** bevat, dat op zijn beurt zijn **niveaus** (verdiepingen) bevat; wanden, vloeren en al het andere horen bij een niveau. {{ui:Bestand}} › {{ui:Nieuw gebouw}} zet alle drie klaar. Een model uit een ander programma dat wel een gebouw heeft maar geen terrein, krijgt de eerste keer dat u er een tekent een terrein: het gebouw wordt erop geplaatst waar het al stond.

## Het terrein tekenen

1. Zet {{ui:Tekenen}} aan en kies dan {{ui:Build}} › {{ui:Terrein}}.
2. Klik op de hoeken van het terrein (het gereedschap snapt zoals het gereedschap Wand). Klik nogmaals op de eerste hoek, dubbelklik of druk op {{key:Enter}} om te eindigen. {{key:Backspace}} neemt een hoek terug.
3. De rij toont het oppervlak van het terrein. Teken het opnieuw om het te wijzigen.

Elke plattegrond van een niveau toont de contour van het terrein als perceelgrens.

## Het gebouw op het terrein plaatsen

Met {{ui:Terrein}} aan typt u de **X** en **Y** van het gebouw op het terrein en de **Draaiing** in graden, of klikt u op {{ui:Het gebouw plaatsen met een klik}} en klikt u waar de oorsprong van het gebouw moet komen. Alles in het gebouw (niveaus, wanden, rasters, alles wat u hebt getekend) verschuift mee; het terrein en zijn contour blijven staan. De plattegronden blijven elk niveau haaks op het gebouw tonen.

## Bouwlijnen en erfdienstbaarheden

Bouwlijnen en erfdienstbaarheden (erfdienstbaarheden, rechten van overpad) worden op het terrein getekend als beperkingen. Ze **waarschuwen, ze blokkeren nooit**: een wand erover wordt getekend zoals u vroeg, en er verschijnt een waarschuwing met de naam van de wand en de lijn of erfdienstbaarheid in Problemen. Verplaats de wand terug en de waarschuwing verdwijnt. Een waarschuwing kan worden geaccepteerd met een reden (bijvoorbeeld een ontheffing die de overheid heeft verleend).

- **Bouwlijn uit terugliggingen.** {{ui:Build}} › {{ui:Bouwlijn}}, dan {{ui:Terugliggingen}}: typ hoe ver de lijn van elke grens van het terrein naar binnen staat. De grenzen zijn genummerd op de plattegrond zolang het gereedschap aan staat. De lijn wordt berekend uit die afstanden en volgt de contour van het terrein als u het opnieuw tekent met evenveel grenzen. De afstanden komen van u, uit uw eigendomsakte of bestemmingsplan; BimCraft vult er geen in.
- **Een getekende bouwlijn.** Met {{ui:Bouwlijn}} aan klikt u op de punten en eindigt u met dubbelklik of {{key:Enter}}. Eindig op het eerste punt voor een gesloten lijn: het gebied erbinnen is waar mag worden gebouwd, en een wand met een deel erbuiten krijgt een waarschuwing. Een open lijn waarschuwt alleen voor een wand die hem kruist.
- **Een erfdienstbaarheid.** {{ui:Build}} › {{ui:Erfdienstbaarheid}}: kies de soort, typ de naam, het geregistreerde kenmerk en de breedte, en klik dan op de middellijn en eindig (een strook), of sluit hem op het eerste punt (een gebied). Een wand met een deel erop krijgt een waarschuwing, op elk niveau.
- Een vlak precies op een lijn raakt, het kruist niet (de tolerantie is 1 mm).
- De huidige massastudie-optie van elke set opties wordt op dezelfde manier gecontroleerd als de wanden: een massa buiten de grens, over een bouwlijn of op een erfdienstbaarheid krijgt een waarschuwing. Zie [Massastudies naast elkaar bewaard](topic:massing-options).
- Kies er een met {{ui:Selecteren}} om de naam, het kenmerk, de soort of de breedte te wijzigen, hem te verplaatsen of hem te verwijderen.

Ze worden op elke plattegrond van een niveau getekend, op bladen en in de plan-PDF: bouwlijnen gestreept, erfdienstbaarheden gestippeld, elk met zijn label. In het IFC-bestand is elk een annotatie (IfcAnnotation, type BuildingLine of Servitude) op het terrein, met zijn lijn als gewone curve die andere programma's kunnen lezen. De controle gebruikt de echte contour van elke wand op de plattegrond, met zijn aansluitingen zoals getekend; een gebogen wand wordt gecontroleerd op zijn eigen dikte rond zijn middellijn.

## Niveaus toevoegen

In het paneel {{ui:Niveaus}} voegt {{ui:Een niveau bovenop toevoegen}} er één toe, en {{ui:Een niveau eronder toevoegen}} voegt er één toe onder het laagste (een kelder, op een negatieve hoogte). {{ui:Niveaus toevoegen…}} voegt er meerdere tegelijk toe:

- **Op deze hoogten**: typ hoogten boven het laagste niveau, gescheiden door komma's (bijvoorbeeld `12', 24', 36'`). Hoogten waar al een niveau is, worden overgeslagen.
- **De gebouwhoogte splitsen**: typ de hoogte van het gebouw en het aantal niveaus. De niveaus die u al hebt, verplaatsen zich van onder naar boven naar hun nieuwe hoogten, ontbrekende worden toegevoegd, en wat erboven ligt blijft staan.

Wanden die tot het niveau erboven lopen, volgen het, net als kolommen en hellingbanen.

{{ui:Dit niveau kopiëren…}} (in hetzelfde paneel) kopieert wat op het niveau dat u bekijkt is getekend naar een ander niveau of naar een nieuw niveau bovenop, zodat een plattegrond in één stap omhoog het gebouw in kan. Zie [Wanden tekenen](topic:draw-walls).

## Op een niveau tekenen

Elk gereedschap van {{ui:Tekenen}} werkt op het niveau dat in de niveaulijst van de plattegrond is gekozen (of in het paneel {{ui:Niveaus}} is aangeklikt): wat u tekent, hoort bij dat niveau.

## Wat u zou moeten zien

- Elk van deze wijzigingen is één stap: {{key:Mod+Z}} neemt hem terug.
- In het IFC-bestand: het terrein (IfcSite) met zijn contour en oppervlak, het gebouw (IfcBuilding) erop geplaatst, en de niveaus (IfcBuildingStorey) in het gebouw.

Zie ook [Coördinaten in BimCraft](topic:coordinates) voor de projectoorsprong en het meetpunt.
