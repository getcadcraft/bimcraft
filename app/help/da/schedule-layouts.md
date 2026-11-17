---
title: Layout, gem og eksportér en liste
summary: Gruppér en liste, giv den delsummer og totaler, tilføj en kolonne læst fra en egenskab, gem den som en opsætning i filen, og eksportér den som en regnearksmappe (.xlsx), som tekst til at indsætte i et online regneark, eller som CSV. Kontorstandarden udfylder det, en liste ikke angiver.
keywords: listelayout, gruppér efter, delsum, total, overskrifter, kontorstandard, standardpolitikker, opsætning, dørliste efter etage, brandklasse, beslag, xlsx, arbejdsbog, online regneark, indsæt, csv, eksport, regneark, elementer, vælg fra liste, figur
from: 95dfd801
---

## Hvad du skal gøre

Lav en almindelig liste om til den, dit kontor udsender: grupperet efter etage, type eller rum, med delsummer og en total, med de kolonner du har brug for, under sit eget navn. Send den derefter til et regneark. Hver række og hvert tal kender stadig de elementer, det stammer fra.

## Trin

1. Slå {{ui:Draw}} til og åbn **Lister** i venstre panel. Vælg en liste, for eksempel **Døre**.
2. Over tabellen vælges **Gruppér efter** (en kolonne i listen, såsom Etage eller Type, eller **Ingen gruppering**) og **Totaler** (**Ingen totaler**, **Én total** eller **Delsummer og en total**). **Som angivet** lader valget være op til den gemte opsætning eller kontorstandarden.
3. For at tilføje en kolonne, der læses fra elementerne, skrives et egenskabs- eller tagnavn under tabellen (for eksempel `FireRating`, `Pset_DoorCommon.FireRating` eller navnet på et tag såsom `Ironmongery`) og klikkes **Tilføj kolonne**. BimCraft læser elementets egne egenskabssæt først, derefter dets typens. Når intet element har en værdi endnu, siger det det; kolonnen udfyldes af sig selv, når en værdi er sat.
4. Skriv et navn (for eksempel "Dørliste pr. etage") og klik **Gem som opsætning**. Opsætningen gemmes i bygningsfilen og føjes til listen under **Lister** med sit navn. Den følger hver ændring i modellen. **Fjern denne opsætning** tager den ud igen. Begge er ét trin i Fortryd.

## Klik på et tal for at vælge det, det stammer fra

Klik på en række eller et enkelt tal for at vælge de elementer bag det i planen og i 3D:

- en række vælger elementerne i den række;
- en delsum eller en total vælger alt, den lægger sammen, og en gruppeoverskrift vælger sin gruppe;
- et tal med egne elementer vælger dem: **Fradrag** for en vægtype vælger dens døre og vinduer, og en rums vægareal vælger dens vægge.

Det samme virker i et dokument lavet ud fra modellen: i forhåndsvisningen klikkes på et tal i en liste.

## Eksport

- **Download Excel** gemmer en .xlsx-arbejdsbog. Længder, arealer, volumener og antal er rigtige tal i den enhed kolonnen viser (fod og tommer forbliver tekst). Et andet ark, **Elements**, lister for hver linje GlobalId'erne for de elementer, den står for.
- **Kopiér til Google Sheets** lægger listen på din udklipsholder som tabulatorsepareret tekst. I et Google Sheet klikkes på celle A1 og indsættes. **Åbn et nyt Google Sheet** åbner `sheets.new`, Googles egen adresse for et tomt regneark, i din egen Google-konto. BimCraft logger ikke ind i Google og sender intet dertil: indsættelsen er din.
- **Download CSV** gemmer tabellen, som den er vist på skærmen.

## Kontorstandarden

Et kontor kan sige én gang, hvordan dets lister er layoutet. Slå tilføjelsen **Standardpolitikker** til ([Standardpolitikker](topic:default-policies)) og sæt, under **Indstillinger › Globalt › Standardpolitikker › Listelayout (kontorstandarden)**:

| Politik | Hvad den gør |
|---|---|
| Gruppér lister efter | Etage, Type, Rum eller ingen gruppering, for hver liste med en sådan kolonne |
| Totaler i lister | Ingen totaler, én total til sidst, eller en delsum under hver gruppe og en total |
| Listetitel | Et mønster, for eksempel `{project}: {schedule}` |
| Kolonneoverskrifter | Som skrevet, MED STORE BOGSTAVER eller Med Store Begyndelsesbogstaver |

Standarden gælder for alle lister, uanset hvem der opsætter dem: de almindelige lister i panelet, en gemt opsætning, en liste en assistent opsætter, eksporterne og listerne i et dokument. En opsætning, der angiver sin egen gruppering, sine totaler eller sin titel, beholder dem; standarden udfylder resten. Panelet siger, hvilke dele kontorstandarden har sat. Politikkerne følger med i filen Standardpolitikker sammen med de andre.

## Godt at vide

- En opsætning angiver sin kildeliste og sine kolonner; den indeholder ingen tal. Tallene læses fra modellen hver gang.
- Lister, der ikke er rækker af elementer (vægsammensætningerne og materialeforklaringen), har ingen layout og ingen eksport her.
- En assistent kan gøre alt dette for dig: se [Lad en AI-assistent arbejde med din model](topic:assistants).
