---
title: Kundepakker, faserapporter og sammenligning af valgmuligheder
summary: Lav en kundepakke eller en faserapport af modellen, med volumenstudiernes valgmuligheder sammenlignet på areal og omkostning, etageareal, tegningerne med deres revisioner og udgavehistorikken. Hvert tal beholder de elementer, det bygger på.
keywords: kundepakke, præsentation, faserapport, rapport, sammenligning af valgmuligheder, valgmuligheder, sammenlign valgmuligheder, areal og omkostning, omkostning pr. valgmulighed, ingen sats, volumenstudier, etageareal, tegningsliste, udgavehistorik, figurer, koblede figurer
from: f6679bf5
---

## Hvad du skal gøre

Lav en kundepakke eller en faserapport af modellen, som den er nu, og sammenlign gemte volumenstudier side om side på areal og omkostning.

## Trin

1. I venstre panel åbn **Kundepakke og faserapport**.
2. Vælg **Åbn i Dokumenter** ved siden af Kundepakke eller Faserapport. Dokumentet vises i Dokumenter ud fra modellen, hvor du kan ændre dets tekst.
3. I forhåndsvisningen klik på en figur for at vælge de elementer, den bygger på.
4. Vælg **Byg pakken**. Én zip-fil gemmes: dokumentet som PDF, et billede af 3D-visningen og `figures.csv`, som lister hver figur med GlobalIds for dens elementer.

## Felterne

Du kan bruge disse i ethvert dokument.

| Felt | Hvad det udskriver |
|---|---|
| `{{stage}}` | Projektfasen fra tegningsdetaljerne. |
| `{{options}}` | De gemte volumenstudiers valgmuligheder side om side: etager, højde, fodaftryk, bruttogulvareal, klimaskærm og omkostning. |
| `{{areas}}` | Etageareal pr. niveau, fra rummene. |
| `{{sheets}}` | Arkene med den revision, hvert står på, og hvornår det sidst blev udgivet. |
| `{{issues}}` | Udgavehistorikken og tegningernes ændringslog. |
| `{{changes}}` | Hvad der er ændret siden den sidste udgivelse, ark for ark. |

## Sådan prissættes valgmuligheder

Omkostning kommer kun fra dit projekts prisliste (Energi/Omkostning, 5D-omkostning). Intet estimeres for dig.

- En prisrække prisætter kun en valgmulighed, når dens klasser nævner `IfcBuildingElementProxy`.
- Etagearealet prisættes af en række, hvis ord nævner valgmulighedens anvendelse, fx office. Uden en sådan bruges en række med ordene gross floor area eller building mass. En række pr. m² bruger bruttogulvarealet. En række pr. m³ bruger rumfanget.
- Klimaskærmen (omkreds gange højde) prisættes af en række med ordet envelope eller facade.
- En valgmulighed uden en matchende række viser **No rate**. En total vises kun, når hver del, der er bedt om, har en sats.

## Godt at vide

- Behold valgmuligheder med **Behold som valgmulighed** i rumprogrammets volumenstudieliste. Se Volumenstudier.
- En PDF kan ikke vælge elementer. Uden for BimCraft bærer `figures.csv` forbindelsen fra hver figur til dens elementer.

## Ikke lavet endnu

- Ark og tegnede visninger placeres ikke i dokumentet. Pakken indeholder kun et billede af 3D-visningen.
