---
title: Kundepakker, fasrapporter og sammenligning av alternativer
summary: Lag en kundepakke eller en fasrapport fra modellen, med volumalternativene sammenlignet på areal og kostnad, gulvarealer, tegningene med sine revisjoner og utgivelseshistorikken. Hvert tall beholder elementene bak seg.
keywords: kundepakke, presentasjon, fasrapport, rapport, sammenligning av alternativer, alternativer, sammenlign alternativer, areal og kostnad, kostnad per alternativ, ingen sats, volum, gulvarealer, tegningsliste, utgivelseshistorikk, figurer, lenkede figurer
from: f6679bf5
---

## Hva du gjør

Lag en kundepakke eller en fasrapport fra modellen slik den er nå, og sammenlign valgte volumalternativer side om side på areal og kostnad.

## Trinn

1. I venstre panel åpner du **Kundepakke og fasrapport**.
2. Velg **Åpne i Dokumenter** ved siden av Kundepakke eller Fasrapport. Dokumentet vises i Dokumenter fra modellen, der du kan endre teksten.
3. I forhåndsvisningen klikker du på et tall for å velge elementene bak det.
4. Velg **Bygg pakken**. Én zip-fil lagres: dokumentet som PDF, et bilde av 3D-visningen, og `figures.csv`, som lister hvert tall med GlobalId-ene til elementene sine.

## Feltene

Du kan bruke disse i alle dokumenter.

| Felt | Hva det skriver ut |
|---|---|
| `{{stage}}` | Prosjektfasen fra tegningsdetaljene. |
| `{{options}}` | De valgte volumalternativene side om side: etasjer, høyde, fotavtrykk, bruttogulvareal, klimaskjerm og kostnad. |
| `{{areas}}` | Gulvareal per nivå, fra rommene. |
| `{{sheets}}` | Arkene, med revisjonen hvert står på, og når det sist ble utgitt. |
| `{{issues}}` | Utgivelseshistorikken og endringsloggen for tegningene. |
| `{{changes}}` | Hva som er endret siden siste utgivelse, ark for ark. |

## Slik kostnadsberegnes alternativer

Kostnad kommer bare fra prosjektets prisliste (Energy/Cost, 5D cost). Ingenting er estimert for deg.

- En prisrad priser et alternativ bare når klassene den nevner er `IfcBuildingElementProxy`.
- Gulvarealet prises av en rad hvis ord nevner alternativets bruk, for eksempel kontor. Uten en slik rad brukes en rad med ordene bruttogulvareal eller bygningsvolum. En rad per m² bruker bruttogulvarealet. En rad per m³ bruker volumet.
- Klimaskjermen (omkrets ganger høyde) prises av en rad med ordet klimaskjerm eller fasade.
- Et alternativ uten en passende rad viser **Ingen sats**. Et totalbeløp vises bare når hver del som er bedt om, har en sats.

## Godt å vite

- Behold alternativer med **Behold som alternativ** i romprogrammets massingliste. Se Massingsalternativer.
- En PDF kan ikke velge elementer. Utenfor BimCraft gir `figures.csv` koblingen fra hvert tall til elementene sine.

## Ikke bygget ennå

- Ark og tegnede visninger legges ikke inn i dokumentet. Pakken inneholder bare et bilde av 3D-visningen.
