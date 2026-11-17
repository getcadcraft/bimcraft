---
title: Mapperapport: roller, status og links
summary: Hver etiket i mapperapporten, hvad den betyder, og hvordan forslaget Start her vælges.
keywords: mapperapport, roller, status, komplet, ufuldstændig, ulæselig, linket, baggrund, startfil, central, familie, kun sikkerhedskopier, start her, linkstatus
from: b35bdd10
---

## Kopistatus

Hver kopi af en model, både hovedfilen og de nummererede sikkerhedskopier, får en tjek af headeren.

| Etiket | Betydning |
|---|---|
| **Komplet** | Filens header og indeks passer inden i filen |
| **Ufuldstændig** | Filen er kortere, end dens eget indeks siger: den blev afskåret under kopiering, upload eller synkronisering, eller det er en skyfil, der stadig er »kun online« |
| **Ulæselig** | Filen er ikke en gyldig sammensat fil, eller den kunne ikke læses |

I kolonnen **Status** viser en model **Komplet**, en gul »*n* ufuldstændige«, når mindst én kopi er dårlig, men en anden er sund, eller rødt **Ufuldstændig**, når ingen kopi er sund.

## Sikkerhedskopier

Filer med navnene `Navn.0001.rvt`, `Navn.0002.rvt` og så videre er nummererede sikkerhedskopier af `Navn.rvt`. De grupperes under deres model, nyeste først, i **Alle … kopier**. Kortet læses fra hovedfilen, når den er komplet, ellers fra den nyeste komplette sikkerhedskopi (»nyeste komplette«).

## Roller

Vises i kursiv under en models navn.

| Rolle | Betydning |
|---|---|
| Linket af *anden model*: baggrund | En anden model i mappen linker til denne, så den er højst sandsynligt en andens baggrund, for eksempel en konsulents model |
| Startfil eller unavngiven fil | Et navn som Blank, Template, Default, Untitled eller Project1: et udgangspunkt, eller en fil, der aldrig har fået et ordentligt navn |
| Central model | En central model med flere brugere. Arbejdet sker i en lokal kopi, ikke her |
| Familie (en del) | En `.rfa`- eller `.rft`-fil: en komponent, ikke projektet |
| Kun sikkerhedskopier | Hovedfilen er væk, og kun nummererede sikkerhedskopier er tilbage |

## Sådan vælges Start her

BimCraft anvender den ræsonnement, en erfaren bruger ville:

1. Kandidater er læsbare projektfiler (`.rvt`, `.rte`), der ikke er linket af en anden model og ikke er startfiler.
2. Centrale modeller og modeller med kun sikkerhedskopier tæller kun, når intet bedre findes.
3. Blandt kandidaterne vinder den, der sidst blev gemt.

Feltet lister sine grunde og advarer, når en fil, der ligner det oplagte valg, er beskadiget, når andre modeller er baggrund, og når valget er en central model. Det er et kvalificeret bud; kontrollér med den, der sidst arbejdede på projektet.

## Linkstatus

| Etiket | Betydning |
|---|---|
| **I denne mappe** | Fundet på den gemte relative sti, eller i enden af den gemte fulde sti inde i mappen |
| **Samme navn fundet** | Ikke på sin sti, men en fil med samme navn ligger i mappen. Kontrollér, at det er den rigtige |
| **Biblioteksfil** | En keynote- eller samlekodetabel. Disse følger med programmet på hver computer |
| **Ikke i denne mappe** | Ikke fundet nogen steder i mappen |

Kolonnen **Fundne links** i **Modeller** viser, hvor mange af en models links der blev fundet, ud af dem der forventes i mappen (biblioteksfiler tælles ikke med).

## Sat til side

| Linje | Betydning |
|---|---|
| Revit-vedligeholdelsesmapper (læses ikke) | `*_backup`-, `*_log`- og `Revit_temp`-mapper, samt skjulte mapper og `__MACOSX` |
| Rester efter låse, logfiler og sikkerhedskopier | `.dwl`-, `.dwl2`-, `.bak`-, `.err`-, `.log`-, `.tmp`-, `.sv$`-, `.ac$`-, `.lck`- og `.slog`-filer |
| Andre filer | Alt andet (de første 40 nævnes ved navn) |
