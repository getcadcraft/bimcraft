---
title: Een verdieping overtrekken, pennen per weergave instellen, een trap schetsen, een OBJ openen
summary: Een andere verdieping gestippeld onder de plattegrond tonen en uitlijnen, wanden, deuren en ramen elk een eigen pen geven in één weergave, een loplijn tekenen voor een trap, en een Wavefront OBJ-mesh openen.
keywords: referentie, overtrekken, onderlegger, pen, lijndikte, lijntype, overschrijven, trap, schets, bordes, OBJ, mesh, importeren, Wavefront
from: 333ebbde
---

## Een verdieping overtrekken

Kies {{ui:Overtrekken}} in het menu {{ui:Build}}, en daarna een weergave in de lijst: de plattegrond van een andere verdieping, de plafondplattegrond van een verdieping, of een callout (bijgesneden tot de uitsnede). De wanden, kolommen en vloeren ervan worden gestippeld getoond onder de plattegrond waarop u tekent. Verplaats ze door een basispunt op de referentie aan te klikken en daarna de plek waar dat punt naartoe moet, of typ X, Y en een hoek (de referentie draait om haar eigen middelpunt). {{ui:Opnieuw instellen}} zet hem terug, {{ui:Verbergen}} verwijdert hem. Het is alleen een referentie: niets kan hem kiezen, hij wordt niet afgedrukt en niet in de IFC opgeslagen. BimCraft onthoudt hem per verdieping in deze browser.

## Pennen per weergave

Kies {{ui:Pennen}}. Zeg waarvoor de pen dient: alle wanden, alle deuren, alle ramen, het type van het gekozen element, of de gekozen elementen. Kies een dikte, een lijn (doorgetrokken, gestreept, gestippeld) en een kleur, en klik daarna op {{ui:Toepassen}}. De wijziging geldt alleen voor de plattegrond van deze verdieping. Een gekozen element gaat voor een type, en een type gaat voor een hele categorie. {{ui:Alles wissen}} verwijdert ze. Ze worden in deze browser bewaard. Vink **Pennenkleuren in 3D** aan om de kleurpennen op het model in de 3D-weergave te tonen (een dikte of streping hoort bij een lijn, dus daar is alleen de kleur zichtbaar); vink het uit om terug te gaan. {{ui:Afdrukken}} tekent ze op de PDF van de plattegrond: de dikte schaalt mee met het scherm (de standaard wandpen van 1.75 pixels is 0.5 mm), strepen blijven strepen, en een kleur wordt afgedrukt in zijn waarde voor het papierthema.

## Een trap uit een schets

Kies {{ui:Trap schetsen}} en klik de hoeken van de loplijn, beginnend bij de onderste trede. Eén lijn is een rechte trap, twee lijnen die in een rechte hoek samenkomen zijn een L, en drie lijnen (omhoog, dwars, terug) zijn een U. Druk op {{key:L}} om een bordes te tekenen: klik de hoeken aan en druk op {{key:Enter}}; de korte zijde bepaalt de breedte van de trap. Druk op {{key:Enter}} om de trap te plaatsen. Elke trede wordt berekend uit de lengte van uw lijn en het aantal optreden dat de hoogte nodig heeft. Daarna is het een gewone trap: wijzig hem in Eigenschappen, en de traphal en de leuningen volgen.

Vink **Als familie maken** aan in de rij van het gereedschap (of druk op {{key:F}}) vóór {{key:Enter}} om de trap in plaats daarvan als familie te plaatsen (een rechte, L- of U-trap). Ze komt binnen als één element en opent in de familie-editor met haar breedte, trede, totale hoogte, de treden per loop en de tussenruimte van een U als parameters, zodat u maten, een plansymbool of hotspots kunt toevoegen. De stappen en de optrede volgen daaruit. Ze heeft geen leuningen of traphal: die horen bij een gewone trap.

## Een OBJ openen

Open een `.obj`-bestand zoals elk ander bestand. Een OBJ heeft geen eenheden, dus BimCraft leest meters met Y omhoog, zoals de meeste programma's het schrijven. Elk object of elke groep wordt één meshelement op één verdieping, en u kunt het daarna bekijken, meten, doorsnijden, in een model plaatsen en opslaan als IFC. Lijnen, krommen en oppervlakken worden weggelaten, en de statusregel zegt dat.

Een object dat precies een rechte prisma is (een gesloten mesh met twee evenwijdige, identieke eindvlakken en vlakke zijden die er haaks op staan: een plaat, een paal, een wandblok, een plaat met gaten) wordt in de IFC opgeslagen als het eigen geëxtrudeerde volume van IFC, met zijn omtrek en diepte, en niet als een lijst driehoeken. Andere programma's lezen het als een echt volume, het blijft klein, en diepte en omtrek kunnen later worden bewerkt. De statusregel zegt hoeveel objecten zo zijn bewaard. Alles wat niet precies een prisma is (een taps toelopende vorm, een mesh met één hoekpunt dat is verschoven, een mesh met een opening) blijft als driehoeken. Een STEP-bestand wordt op dezelfde manier gelezen.
