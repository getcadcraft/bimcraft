---
title: Elektroplanen
summary: Plasser stikkontakter, brytere, lamper, sensorer, koblingsbokser og tavler på planen med de samme symbolene som CadCraft-tillegget Elektro, koble brytere til lampene de slår på, og list enheter og kurser i tabellene.
keywords: elektro, elektroplan, stikkontakt, uttak, dobbel, bryter, trevei, dimmer, lampe, takbelysning, innfelt lampe, downlight, bevegelsessensor, koblingsboks, tavle, fordelingstavle, kurs, last, watt, ampere, bryterledning, enhetsliste, tavleliste
from: f7de1947
---

## Hva du gjør

Tegn husets elektroplan i modellen: stikkontakter, brytere og tavler på veggene, lamper og sensorer i taket. Hver enhet er et ekte elektrisk element i IFC-filen, med sin merking, kurs og last, og brytere husker lampene de slår på.

## Plasser enheter

1. På en etasje, åpne {{ui:Bygg}} og velg {{ui:Elektro}}.
2. Velg enheten: stikkontakter (kraft, data, telefon, lyd og bilde), brytere og sensorer (en termostat og en timer også), lamper, detektorer og alarmer, en koblingsboks, en tavle eller en underordnet tavle.
3. Skriv inn en **Kurs** hvis du kjenner den (et hvilket som helst navn: 1, 2, A-3). La **Monteringshøyde** stå tomt for den vanlige høyden til denne enheten.
4. Klikk på planen. Stikkontakter, brytere og tavler plasseres på forsiden av nærmeste vegg, vendt inn i rommet; lamper, sensorer og koblingsbokser plasseres i taket der du klikker.

Enheter merkes etter hvert som de plasseres: **R** for stikkontakter, **S** for brytere, **L** for lamper, **M** for bevegelsessensorer, **J** for koblingsbokser, **P** for tavler. Enheter på en vegg flytter seg med den når veggen flyttes.

Vil du heller bla etter bilde? Åpne **Symbolpalett** fra {{ui:Bygg}} for å finne en enhet etter navn, merk de du bruker med stjerne, og plasser den med ett klikk: se [Symbolpalett](topic:symbol-palette).

## Koble brytere til lamper

1. Velg en bryter (eller en bevegelsessensor) og klikk **Koble lamper** under **{{ui:Egenskaper}}**.
2. Klikk på hver lampe den slår på. Klikk en koblet lampe igjen for å fjerne koblingen.
3. Trykk {{key:Enter}} eller klikk **Ferdig**.

Planen tegner en stiplet kurve fra bryteren til hver av lampene. Under **{{ui:Egenskaper}}** for en lampe vises hvilke brytere som slår den på.

## Rommet en enhet står i

Hver enhet vet hvilket rom den står i. En enhet på en vegg er i rommet den vender mot; en takenhet er i rommet den er over. **{{ui:Egenskaper}}** viser **Rom**, og tabellen **Elektriske enheter** har en kolonne **Rom** (nummer og navn, for eksempel 101 Kjøkken).

Det holdes oppdatert: gi rommet nytt navn eller nytt nummer, flytt enheten, eller flytt en vegg, så følger rommet med i samme steg. En enhet på ytterveggen av en bygning, eller i et område som ikke er et rom, melder at den ikke står i et rom.

Rommet skrives også inn i filen, i enhetens egenskapssett `CadCraft_Location` (Room, RoomNumber, RoomName), slik at Finn, Farge etter egenskap og en merkingstabell kan bruke det, og det kan også andre programmer. Planssymboler og elementer koblet til et symbol får det samme settet; se [Symbolpalett](topic:symbol-palette).

## La assistenten plassere dem

Når en assistent er koblet til (**Innstillinger › Assistenter**, med redigering tillatt), kan du be om enheter med ord: «sett en dobbel stikkontakt hver 2 m langs stuens vegger, 300 mm opp, på kurs 3», eller «legg til en takslampe med bryteren ved døren».

Assistenten bruker fem verktøy: `devices_add`, `device_change`, `lights_set`, `devices_delete` og `devices_list`. De lager de samme enhetene som verktøyet {{ui:Elektro}} lager, på samme vegger og med samme merking, kurser, laster og høyder, og hvert kall er ett steg i angre.

En enhet får aldri en type som verktøyet {{ui:Elektro}} ikke har: en ukjent type avvises, og assistenten får listen. En stikkontakt eller bryter må ligge innenfor 600 mm fra en veggflate, som ved et klikk, ellers avvises kallet, og ingenting plasseres. Standardhøyder er i millimeter: 300 for stikkontakter, 1100 for brytere; en takenhet henger fra taket.

## Endre og list dem opp

Velg en enhet for å endre merking, kurs, last (watt) og monteringshøyde. Velg flere for å legge dem alle på samme kurs samtidig. Trykk {{key:Delete}} for å fjerne én; en slettet lampe fjernes fra brytene sine.

I {{ui:Tabeller}} velger du **Elektriske enheter** for alle enheter med etasje, kurs, last, høyde og lampene hver bryter slår på, eller **Kurser** for enhetene på hver kurs, samlet last og strøm. Begge finnes også på tegningssettets tabellark: se [Fasader, snitt og ark](topic:sheets).

:::note
Monteringshøyder og laster er standardverdier for planlegging (en stikkontakt 16" opp og 200 W, en bryter på 48", en takslampe 60 W), ikke en prosjektering: elektrikeren eller ingeniøren dimensjonerer kursene og kontrollerer regelverket.
:::

:::tip
Symbolene er de samme som CadCraft-tillegget Elektro tegner på installasjonsplaner, så en plan fra begge appene leses likt.
:::
