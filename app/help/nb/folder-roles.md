---
title: Mapperapport: roller, statuser og lenker
summary: Hver etikett i mapperapporten, hva den betyr, og hvordan forslaget «Start her» velges.
keywords: mapperapport, roller, status, komplett, ufullstendig, ulesbar, lenket, bakgrunn, startfil, sentral, familie, bare sikkerhetskopier, start her, lenkestatus
from: b35bdd10
---

## Kopistatus

Hver kopi av en modell, både hovedfilen og nummererte sikkerhetskopier, får en sjekk av hodet.

| Etikett | Betydning |
|---|---|
| **Komplett** | Filens hode og indeks passer inne i filen |
| **Ufullstendig** | Filen er kortere enn sin egen indeks sier: den ble kuttet av under kopiering, opplasting eller synkronisering, eller den er en skyfil som fortsatt er «bare på nett» |
| **Ulesbar** | Filen er ikke en gyldig sammensatt fil, eller den kunne ikke leses |

I kolonnen **Status** viser en modell **Komplett**, en gul «*n* ufullstendige» når minst én kopi er dårlig men en annen er god, eller rød **Ufullstendig** når ingen kopi er god.

## Sikkerhetskopier

Filer som heter `Name.0001.rvt`, `Name.0002.rvt` og så videre er nummererte sikkerhetskopier av `Name.rvt`. De grupperes under sin modell, nyeste først, i **Alle … kopier**. Kortet leses fra hovedfilen når den er komplett, ellers fra den nyeste komplette sikkerhetskopien («nyeste komplette»).

## Roller

Vises i kursiv under en modells navn.

| Rolle | Betydning |
|---|---|
| Lenket av *annen modell*: bakgrunn | En annen modell i mappen lenker til denne, så det er mest sannsynlig noen andres bakgrunn, for eksempel en konsulents modell |
| Startfil eller ufilnavngitt fil | Et navn som Blank, Template, Default, Untitled eller Project1: et utgangspunkt, eller en fil som aldri ble ordentlig navngitt |
| Sentralmodell | En arbeidsdelt sentralmodell. Arbeidet skjer i en lokal kopi, ikke her |
| Familie (en del) | En `.rfa`- eller `.rft`-fil: en komponent, ikke prosjektet |
| Bare sikkerhetskopier | Hovedfilen er borte, og bare nummererte sikkerhetskopier gjenstår |

## Hvordan «Start her» velges

BimCraft bruker resonnementet en erfaren bruker ville brukt:

1. Kandidatene er lesbare prosjektfiler (`.rvt`, `.rte`) som ikke er lenket av en annen modell og ikke er startfiler.
2. Sentralmodeller og modeller med bare sikkerhetskopier teller bare når ingenting bedre finnes.
3. Av kandidatene vinner den som sist ble lagret.

Boksen lister sine grunner, og den advarer når en fil som ser ut som det åpenbare valget er skadet, når andre modeller er bakgrunn, og når valget er en sentralmodell. Dette er et kvalifisert gjett; sjekk med den som sist jobbet med prosjektet.

## Lenkestatus

| Etikett | Betydning |
|---|---|
| **I denne mappen** | Funnet på den lagrede relative banen, eller på slutten av den lagrede fulle banen inne i mappen |
| **Samme navn funnet** | Ikke på sin bane, men en fil med samme navn er i mappen. Sjekk at det er den riktige |
| **Biblioteksfil** | En tabell over nøkkelnotater eller monteringskoder. Disse følger med programmet på hver datamaskin |
| **Ikke i denne mappen** | Ikke funnet noe sted i mappen |

Kolonnen **Funne lenker** i **Modeller** viser hvor mange av en modells lenker som ble funnet, av dem som var ventet i mappen (biblioteksfiler telles ikke).

## Satt til side

| Linje | Betydning |
|---|---|
| Revit-hjelpemapper (leses ikke) | `*_backup`, `*_log` og `Revit_temp`-mapper, pluss skjulte mapper og `__MACOSX` |
| Rester etter lås, logg og sikkerhetskopi | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` og `.slog`-filer |
| Andre filer | Alt annet (de første 40 er navngitt) |
