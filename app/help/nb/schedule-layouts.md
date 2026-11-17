---
title: Oppsett, lagring og eksport av en tabell
summary: Grupper en tabell, gi den delsummer og summer, legg til en kolonne lest fra en egenskap, lagre den som et oppsett i filen, og eksporter den som et regneark (.xlsx), som tekst du limer inn i et nettark, eller som CSV. Kontorstandarden fyller inn det tabellen ikke sier.
keywords: oppsett av tabell, grupper etter, delsum, sum, overskrifter, kontorstandard, standardregler, oppsett, dørtabell etter etasje, brannklasse, beslag, xlsx, arbeidsbok, nettark, lim inn, csv, eksport, regneark, elementer, velg fra tabell, tall
from: 95dfd801
---

## Formål

Gjør en vanlig tabell om til den kontoret utsteder: gruppert etter nivå, type eller rom, med delsummer og en sum, med kolonnene du trenger, under sitt eget navn. Send den så til et regneark. Hver rad og hvert tall vet fortsatt hvilke elementer det kom fra.

## Trinn

1. Slå på {{ui:Tegn}} og åpne **Tabeller** i venstre panel. Velg en tabell, for eksempel **Dører**.
2. Over tabellen velg **Grupper etter** (en kolonne i tabellen, som Nivå eller Type, eller **Ingen gruppering**) og **Summer** (**Ingen summer**, **Én sum**, eller **Delsummer og en sum**). **Som angitt** lar valget ligge til det lagrede oppsettet eller til kontorstandarden.
3. For å legge til en kolonne som leses fra elementene, skriv et egenskaps- eller merkenavn under tabellen (for eksempel `FireRating`, `Pset_DoorCommon.FireRating` eller navnet på en etikett, som `Beslag`), og klikk **Legg til kolonne**. BimCraft leser elementets egne egenskapssett først, deretter typens. Når ingen elementer har en verdi ennå, sier den det; kolonnen fylles av seg selv når en verdi settes.
4. Skriv et navn (for eksempel «Dørtabell etter etasje») og klikk **Lagre som oppsett**. Oppsettet lagres i bygningsfilen og kommer inn i tabellistan under navnet. Det følger hver endring i modellen. **Fjern dette oppsettet** tar det bort igjen. Begge er ett steg i angre.

## Klikk et tall for å velge det det kom fra

Klikk på en rad, eller på et enkelt tall, for å velge elementene bak det i planen og i 3D:

- en rad velger elementene i den raden;
- en delsum eller en sum velger alt den summerer, og en gruppeoverskrift velger sin gruppe;
- et tall med egne elementer velger dem: **Fradrag** for en veggtype velger dens dører og vinduer, og veggarealet for et rom velger veggene.

Det samme virker i et dokument laget fra modellen: klikk på et tall i en tabell i forhåndsvisningen.

## Eksport

- **Last ned Excel** lagrer en .xlsx-arbeidsbok. Lengder, arealer, volumer og antall er ekte tall i enheten kolonnen viser (fot og tommer forblir tekst). Et andre ark, **Elementer**, lister for hver linje GlobalId-ene til elementene bak den.
- **Kopier for Google Sheets** legger tabellen på utklippstavlen som tabulatorseparert tekst. I et Google Sheets-ark klikk celle A1 og lim inn. **Åpne et nytt Google Sheets-ark** åpner `sheets.new`, Googles egen adresse for et tomt ark, i den Google-kontoen du bruker. BimCraft logger ikke inn hos Google og sender ingenting dit: innlimingen gjøres manuelt.
- **Last ned CSV** lagrer tabellen slik den er satt opp på skjermen.

## Kontorstandarden

Et kontor kan si én gang hvordan tabellene skal settes opp. Slå på tillegget **Standardregler** ([Standardregler](topic:default-policies)) og sett, under **Innstillinger › Global › Standardregler › Tabelloppsett (kontorstandarden)**:

| Regel | Hva den gjør |
|---|---|
| Gruppér tabeller etter | Nivå, Type, Rom eller ingen gruppering, for hver tabell som har en slik kolonne |
| Summer i tabeller | Ingen summer, én sum til slutt, eller en delsum under hver gruppe og en sum |
| Tabelltittel | Et mønster, for eksempel `{project}: {schedule}` |
| Kolonneoverskrifter | Som skrevet, I STORE BOKSTAVER eller Med stor forbokstav |

Standarden gjelder alle tabeller, uansett hvem som setter dem opp: de vanlige tabellene i panelet, et lagret oppsett, en tabell en assistent setter opp, eksportene og tabellene i et dokument. Et oppsett som angir sin egen gruppering, sine egne summer eller tittel, beholder dem; standarden fyller inn resten. Panelet viser hvilke deler kontorstandarden satte. Reglene følger med Standardregler-filen sammen med de andre.

## Greit å vite

- Et oppsett navngir kildetabellen og kolonnene sine; det holder ingen tall. Tallene leses fra modellen hver gang.
- Lister som ikke er rader av elementer (veggkonstruksjonene og materialforklaringen) har ingen oppsett og ingen eksport her.
- En assistent kan gjøre alt dette: se [La en KI-assistent arbeide med modellen](topic:assistants).
