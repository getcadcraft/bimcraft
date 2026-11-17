---
title: Leveranspaket, etapprapporter och jämförelse av alternativ
summary: Gör ett leveranspaket eller en etapprapport från modellen, med volymalternativen jämförda på area och kostnad, golvareor, ritningarna med deras revisioner och ärendehistoriken. Varje siffra behåller de element den bygger på.
keywords: leveranspaket, presentation, etapprapport, rapport, jämförelse av alternativ, alternativ, jämför alternativ, area och kostnad, kostnad per alternativ, ingen taxa, volym, golvareor, ritningslista, ärendehistorik, siffror, länkade siffror
from: f6679bf5
---

## Vad du gör

Bygg ett leveranspaket eller en etapprapport från modellen så som den är nu, och jämför sparade volymalternativ sida vid sida på area och kostnad.

## Steg

1. I vänstra panelen öppnar du **Leveranspaket och etapprapport**.
2. Välj **Öppna i Dokument** bredvid Leveranspaket eller Etapprapport. Dokumentet visas i Dokument, utifrån modellen, där du kan ändra dess text.
3. I förhandsvisningen klickar du på en siffra för att markera elementen bakom den.
4. Välj **Bygg paketet**. En zip-fil sparas: dokumentet som PDF, en bild av 3D-vyn och `figures.csv`, som listar varje siffra med GlobalId:erna för dess element.

## Fälten

Du kan använda dessa i alla dokument.

| Fält | Det skriver ut |
|---|---|
| `{{stage}}` | Projektets etapp från ritningsuppgifterna. |
| `{{options}}` | De sparade volymalternativen, sida vid sida: våningar, höjd, fotavtryck, bruttoyta, klimatskal och kostnad. |
| `{{areas}}` | Golvarea per våning, från rummen. |
| `{{sheets}}` | Bladen med den revision varje står på och när det senast utfärdades. |
| `{{issues}}` | Utfärdandehistoriken och ritningsändringsloggen. |
| `{{changes}}` | Vad som ändrats sedan den senaste utfärdandet, blad för blad. |

## Så kostnadsätts alternativ

Kostnaden kommer bara från projektets prislista (Energy/Cost, 5D-kostnad). Inget uppskattas åt dig.

- En prisrad prissätter ett alternativ bara när dess klasser anger `IfcBuildingElementProxy`.
- Golvytan prissätts av en rad vars ord anger alternativets användning, till exempel kontor. Utan en sådan rad används en rad med orden bruttoyta eller byggnadsvolym. En rad per m² använder bruttoytan. En rad per m³ använder volymen.
- Klimatskalet (omkrets gånger höjd) prissätts av en rad med ordet klimatskal eller fasad.
- Ett alternativ utan matchande rad visar **Ingen taxa**. En summa visas bara när varje ingående del har en taxa.

## Bra att veta

- Behåll alternativ med **Behåll som alternativ** i rumsprogrammets volymlista. Se Volymalternativ.
- En PDF kan inte markera element. Utanför BimCraft länkar `figures.csv` varje siffra till dess element.

## Ej byggt än

- Blad och ritade vyer placeras inte i dokumentet. Paketet innehåller bara en bild av 3D-vyn.
