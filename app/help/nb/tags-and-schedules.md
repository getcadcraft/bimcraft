---
title: Merk elementer og lag tabeller etter merke
summary: Definer egne merker (et navn, en type, tillatte verdier, hvilke klasser), merk mange elementer om gangen, og lag tabeller der kolonner, filtre og grupper leser merkene. Merkene lagres i IFC-filen.
keywords: merker, merke, merking, egendefinerte egenskaper, parametere, delte parametere, egenskapssett, pset, tabell, filter, grupper etter, overflate, brannklasse, massredigering, csv
from: 9cc7c90d
---

## Hva du skal gjøre

Et merke er en egenskap man selv definerer, for eksempel *Overflate* eller *Brannklasse*. Det defineres én gang for prosjektet, settes på mange elementer samtidig, og alle tabeller i BimCraft kan lese den: merketabellen her, {{ui:Mengder}}, Finn, Farge etter egenskap og [Dokumenter fra modellen](topic:documents-from-the-model).

## Fremgangsmåte

1. Åpne en IFC-modell, eller start en ny bygning.
2. I venstre panel, under {{ui:Mengder}}, åpnes {{ui:Merker}}.
3. Klikk {{ui:Legg til en etikett}}. Gi merket et navn, velg typen, og om ønskelig list de tillatte verdiene (med komma) og klassene det gjelder for (`IfcDoor`, `IfcWall` …). Klikk {{ui:Legg til merket}}.
4. Velg elementene i modellen (Finn hjelper: velg alle dører samtidig).
5. Under {{ui:Merk utvalget}} velges eller skrives en verdi for hvert merke som skal settes. De andre merkene lar stå, og {{ui:Bruk på … valgte elementer}} klikkes.
6. Under {{ui:Merketabell}} krysses kolonnene av, filtre legges til, {{ui:Grupper etter}} velges, og deretter klikkes {{ui:Last ned CSV}}.

## Slik ser det ut

- En linje i endringslisten for hver lagret definisjon og hver merking; {{ui:Angre}} tar den tilbake.
- Elementer i en klasse som et merke ikke gjelder for, utelates fra det merket, og statuslinjen sier hvor mange.
- Merketabellen lister én rad per element, gruppert etter feltet som ble valgt. Klikk på den første cellen i en rad for å velge elementet.
- {{ui:Mengder}} lister merkene under `CadCraft_Tags`, slik at arealer eller antall kan summeres etter et merke der.

## Typer

Typene er den samme listen som for familieparametere: Lengde (millimeter), Vinkel (grader), Tall, Heltall, Ja / Nei, Penn (1–16), Tekst, Materiale og Fyll. En verdi som ikke passer til typen sin, eller ikke er en av de tillatte verdiene, avvises med en melding, og ingenting endres.

## Greit å vite

- Alt er vanlig IFC, så andre programmer leser verdiene. Definisjonene ligger i egenskapssettet `CadCraft_TagDefs` på prosjektet, og verdiene i egenskapssettet `CadCraft_Tags` på hvert element (én egenskap per merke). Lengder skrives i filens lengdeenhet.
- `IfcWall` i et merkes klasser tar også standard-case- og elementvegger.
- Å gi et merke nytt navn gir nytt navn til verdiene på alle elementer i samme steg. Å fjerne et merke fjerner bare definisjonen: verdier som allerede er satt, blir værende på elementene som vanlige egenskaper. Tøm dem først (velg {{ui:Fjern}}) for å ta dem av.
- Merker i CadCraft-tegneappen (blokkattributter) er ikke bygget ennå.
