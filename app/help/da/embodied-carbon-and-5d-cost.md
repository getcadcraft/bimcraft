---
title: Indlejret CO2 og omkostninger på tidsplanen
summary: Læg modellens indlejrede CO2 sammen ud fra en åben, redigerbar faktortabel, og fordel priser over 4D-tidsplanen til en omkostnings- og likviditetskurve. Begge starter fra værdier du skriver eller importerer.
keywords: indlejret CO2, CO2, udledning, faktortabel, EPD, 5D, omkostning, likviditet, S-kurve, tidsplanomkostning, priser, mængdeudtræk priser
from: 83e82840
---

## Indlejret CO2

Åbn ruden **CO2**. Hvert elements mængde (volumen, areal eller længde) ganges med en faktor fra tabellen, efter livscyklusmodul: produktfasen er påkrævet, transport og affald er valgfrie. Summerne fås efter materiale, klasse og etage og pr. kvadratmeter gulvareal.

**Faktortabellen er din.** Rækkerne der følger med BimCraft er generiske startværdier i den rigtige størrelsesorden. De stammer ikke fra en database, er markeret som ikke kontrolleret, og skal erstattes med den kilde du bruger (en EPD, en national database eller dine egne tal). Redigér rækker i ruden, eller importér og eksportér tabellen som CSV eller JSON. Rækker du tilføjer, overskriver startrækken med samme id. Tabellen gemmes i modellen.

Elementer uden match, eller uden mængde, listes som Problemer i stedet for at tælles som nul.

## Omkostninger på 4D-tidsplanen

Åbn ruden **Omkostninger** ved siden af 4D-tidsplanen. Giv den priser (skriv dem, importér en CSV eller JSON, eller hent TakeoffCraft's linjer), knyt hver pris til modellens materialer med nøgleord, så prissætter den hver opgaves elementer. En opgaves omkostning fordeles over dens start- til slutdage (jævnt, eller tungt i starten eller slutningen), og ruden tegner den kumulerede likviditetskurve pr. dag, uge eller måned, med omkostninger pr. fase og pakke og det planlagte mod det bygget på en given dato. CSV ud. Intet prissættes, før du giver priser: der leveres ingen.

## Valuta

En prisliste kan angive, hvilken valuta priserne er i (tre bogstaver, fx USD eller EUR). 5D-ruden har et felt til det; det gemmes i filen sammen med priserne, og JSON-eksporter medtager det. En tabel lavet før dette, eller hvor du lod feltet stå tomt, har ingen valuta: dens omkostninger vises i USD, appens standard, og ruden og de løbende summer siger det. Intet omregnes mellem valutaer.
