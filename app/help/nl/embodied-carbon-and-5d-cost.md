---
title: Ingebedde koolstof en kosten in de planning
summary: Tel de ingebedde CO2 van het model op uit een open, bewerkbare factorentabel, en verdeel prijzen over de 4D-planning in een kosten- en kasstroomcurve. Beide beginnen bij waarden die u typt of importeert.
keywords: ingebedde koolstof, koolstof, co2, kgco2e, emissies, factorentabel, epd, 5d, kosten, kasstroom, s-curve, plankosten, prijzen, hoeveelheidsprijzen
from: 83e82840
---

## Ingebedde koolstof

Open het paneel **Carbon**. De hoeveelheid van elk element (volume, oppervlakte of lengte) wordt vermenigvuldigd met een factor uit de tabel, per levenscyclusmodule: de productfase is verplicht, transport en afval zijn optioneel. Totalen komen per materiaal, klasse en verdieping, en per vierkante meter vloer.

**De factorentabel is van u.** De rijen die bij BimCraft komen, zijn generieke startwaarden van de juiste orde van grootte. Ze komen niet uit een database, staan als niet-gecontroleerd gemarkeerd en moeten worden vervangen door de bron die u gebruikt (een EPD, een nationale database, of de cijfers van uw bureau). Bewerk rijen in het paneel, of importeer en exporteer de tabel als CSV of JSON. Rijen die u toevoegt, nemen de plaats in van de startrij met dezelfde id. De tabel wordt in het model opgeslagen.

Elementen zonder overeenkomst, of zonder hoeveelheid, staan als Problemen vermeld in plaats van als nul geteld.

## Kosten op de 4D-planning

Open het paneel **Kosten** naast de 4D-planning. Geef het prijzen (typ ze, importeer een CSV of JSON, of neem de regels van TakeoffCraft over), koppel elke prijs met trefwoorden aan modelmaterialen, en het prijst de elementen van elke taak. De kosten van een taak worden gespreid over de dagen van start tot einde (gelijkmatig, of vooraan of achteraan belast). Het paneel tekent de cumulatieve kasstroomcurve per dag, week of maand, met kosten per fase en pakket, en wat gepland is tegenover wat op een datum gebouwd is. CSV-export. Er wordt niets geprijsd voordat u prijzen invoert: er zijn er geen meegeleverd.

## Valuta

Een prijstabel kan aangeven in welke valuta de prijzen zijn (drie letters, zoals USD of EUR). Het 5D-paneel heeft daarvoor een vak; de valuta wordt bij de prijzen in het bestand bewaard, en JSON-exports bevatten haar. Een tabel die eerder is gemaakt, of waarin u het veld leeg liet, heeft geen valuta: de kosten worden getoond als USD, de standaard van de shell, en het paneel en de lopende totalen zeggen dat. Er wordt niets tussen valuta's omgerekend.
