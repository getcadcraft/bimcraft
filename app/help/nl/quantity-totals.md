---
title: Hoeveelheden optellen, elementen lijsten en ruimten in een staat zetten
summary: Tel elementen en tel hun lengten, oppervlakten, volumes of elk getalseigenschap op, gegroepeerd op elke eigenschap; geef per element één rij; of zet de ruimten in een staat met hun oppervlakten en volumes. Elk wordt als CSV gedownload.
keywords: hoeveelheid, hoeveelheden, opmeting, totalen, optellen, staat, hoeveelheidsstaat, csv, groeperen op, tellen, lengte, oppervlakte, volume, ruimten, kamers, ruimtestaat, oppervlaktestaat, elementlijst, boq, qto
from: e2e7210c
---

## Wat u gaat doen

Haal totalen uit een model: lengten van wanden per verdieping, aantallen deuren per type, volume van vloeren per materiaal, de kosten van elke zone.

## Stappen

1. Open een IFC-model.
2. Open {{ui:Hoeveelheidstotalen}} in het linkerpaneel.
3. Kies bij {{ui:Tellen}} {{ui:Elk element}} of alleen de gekozen elementen.
4. Kies onder {{ui:Groeperen op}} een eigenschap, zoals {{ui:Klasse}}. Klik op {{ui:Een groep toevoegen}} om verder te splitsen, tot drie, bijvoorbeeld op {{ui:Verdieping}}.
5. Vink onder {{ui:Optellen}} de getallen aan om op te tellen. De hoeveelheidssets van het model zijn vanaf het begin aangevinkt.
6. Klik op {{ui:CSV downloaden}} om de tabel in een spreadsheet te openen.

## Wat u zou moeten zien

- Een rij per groep, met hoeveel elementen die heeft en elk totaal, en een totaalrij.
- Elementen zonder waarde worden geteld maar tellen niet mee. Wanneer dat gebeurt, voegt de CSV een kolom "weggelaten" naast het totaal toe, zodat u kunt zien hoeveel.
- Getallen staan in de eigen eenheden van het bestand, zoals het bestand ze opslaat, vaak millimeters voor lengten.

## Eén rij per element, of de ruimten

Wijzig {{ui:Tonen}}:

- **Eén rij per element**: elk element op een eigen rij, met de eigenschappen onder {{ui:Kolommen}} en de getallen onder {{ui:Optellen}}. De CSV begint met de GlobalId van elk element. Klik op de eerste waarde in een rij om dat element te kiezen.
- **Ruimten**: elke kamer met haar nummer, naam, verdieping, oppervlakte en volume, en hun totalen. Oppervlakten en volumes komen uit de hoeveelheden van de ruimte zoals het bestand ze vermeldt. Wanneer het bestand er geen heeft, worden ze gemeten uit de vorm van de ruimte in m² en m³ en cursief getoond; de CSV zegt welke welke is.

## Volgende

- [Elementen zoeken op klasse, naam of eigenschap](topic:find)
- [Elementen inkleuren op een eigenschap](topic:color-by-property)

## Infrastructuur (IFC 4.3)

Kies **Infrastructuur (IFC 4.3)** in de weergavelijst om wegen, spoorwegen, bruggen en maritieme werken per klasse en type opgeteld te zien, met de lengte, oppervlakte en het volume die het bestand zelf vermeldt. Een hoeveelheid die het bestand niet vermeldt, blijft leeg en wordt nooit berekend. **Infrastructuurhoeveelheden naar TakeoffCraft sturen** slaat een `.quantities.json`-bestand op dat TakeoffCraft opent als getypte hoeveelheden.
