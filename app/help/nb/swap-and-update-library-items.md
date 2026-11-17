---
title: Bytt ut et plassert element, og oppdater elementer fra biblioteket
summary: Erstatt ett plassert bibliotekselement med et annet og behold plassering og elementnummer, og se i Bibliotek etter nyere versjoner av alt i modellen.
keywords: bytt, erstatt, substitutt, oppdater, nyere versjon, se etter oppdateringer, bibliotek, trukket tilbake, lisensendring, elementnummer
from: 8bdfe01d
---

## Hva du skal gjøre

Endre valget av et element uten å flytte det igjen, og hold bibliotekselementene i en modell oppdatert.

## Bytt ut ett element

1. Klikk et plassert bibliotekselement i modellen.
2. I {{ui:Egenskaper}} klikkes {{ui:Bytt element…}} i boksen **Bibliotekselement**. Fanen {{ui:Bibliotek}} åpnes.
3. Finn det nye elementet og klikk på kortet.
4. Klikk {{ui:Bytt … til dette}}.

Elementet beholder plasseringen, rotasjonen, etasjen, elementnummeret, mengden og notatene sine. Typen, formen og elementdataene endres til det nye elementet. Elementer plassert på samme måte deler én type, slik som ved plassering.

Et element som har varianter (se [Plasser og bytt et bibliotekselement som har varianter](topic:library-variants)) lister de andre variantene øverst i fanen {{ui:Bibliotek}} når det byttes: ett klikk for hver.

Når det nye elementet er en annen type ting, for eksempel en vask i stedet for et bord, endres elementets IFC-klasse for å passe (her fra møbelelement til sanitærterminal), slik at annen programvare planlegger det riktig. Det er fortsatt samme element, med samme GlobalId, så lenker til det fungerer fortsatt. {{key:Mod+Z}} gir tilbake den gamle klassen sammen med det gamle elementet.

## Se etter oppdateringer

1. Klikk {{ui:Oppdateringer}} i verktøylinjen (eller {{ui:Se etter oppdateringer}} i et bibliotekselements boks).
2. Les listen: hvert bibliotekselement i modellen, med versjonen i modellen, den nyeste versjonen og en status: **Oppdatert**, **Nyere versjon**, **Trukket tilbake** eller **Ikke funnet**. Den sier også hva som er endret (geometri, data, lisens eller en feilretting).
3. Klikk {{ui:Oppdater}} på en rad, eller {{ui:Oppdater alle}}.

## Slik ser det ut

- "Oppdaterte *n* plasseringer. Plasseringer, elementnummer, mengder og notater beholdes."
- "Oppdatert: *element*"-linjer i endringslisten. {{key:Mod+Z}} angrer hver av dem.

## Greit å vite

- Bare elementer som kommer fra biblioteket kan sjekkes. Elementer fra filer har ingen bibliotek-id.
- Når en lisens er endret, beholder kopien som allerede er plassert, lisensen den fulgte med, til den oppdateres.
- Et **Trukket tilbake**-element tilbys ikke til nye plasseringer. Et element trukket tilbake av opphavsrettslige grunner kan ikke lastes ned i det hele tatt; erstatt det med {{ui:Bytt element…}}.
- En plassert variant forblir den varianten når den nyere versjonen av elementet fortsatt har den; ellers tar den elementets standardvariant.
- Sjekken sender bare element-id-er og versjoner, aldri modellen.
