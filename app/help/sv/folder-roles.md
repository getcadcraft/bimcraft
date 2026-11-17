---
title: "Mapprapport: roller, status och länkar"
summary: Varje etikett i mapprapporten, vad den betyder och hur förslaget Börja här väljs.
keywords: mapprapport, roller, status, komplett, ofullständig, oläsbar, länkad, bakgrund, startfil, central, familj, endast säkerhetskopior, börja här, länkstatus
from: b35bdd10
---

## Kopiestatus

Varje kopia av en modell, huvudfilen och numrerade säkerhetskopior likaväl, får en kontroll av sitt huvud.

| Etikett | Betydelse |
|---|---|
| **Komplett** | Filens huvud och index ryms inuti filen |
| **Ofullständig** | Filen är kortare än sitt eget index säger: den klipptes av vid kopiering, uppladdning eller synkning, eller så är det en molnfil som fortfarande är "endast online" |
| **Oläsbar** | Filen är inte en giltig sammansatt fil, eller så kunde den inte läsas |

I kolumnen **Status** visar en modell **Komplett**, en gul "*n* ofullständiga" när minst en kopia är skadad men en annan är hel, eller röd **Ofullständig** när ingen kopia är hel.

## Säkerhetskopior

Filer med namn som `Name.0001.rvt`, `Name.0002.rvt` och så vidare är numrerade säkerhetskopior av `Name.rvt`. De grupperas under sin modell, nyast först, i **Alla … kopior**. Kortet läses från huvudfilen när den är komplett, annars från den senaste kompletta säkerhetskopian ("senaste komplett").

## Roller

Visas i kursiv under en modells namn.

| Roll | Betydelse |
|---|---|
| Länkad av *annan modell*: bakgrund | En annan modell i mappen länkar till den här, så den är troligen någon annans bakgrund, till exempel en konsults modell |
| Startfil eller namnlös fil | Ett namn som Blank, Template, Default, Untitled eller Project1: en utgångspunkt, eller en fil som aldrig fick ett ordentligt namn |
| Centralmodell | En delad centralmodell (workshared). Arbetet sker i en lokal kopia, inte här |
| Familj (en del) | En `.rfa`- eller `.rft`-fil: en komponent, inte projektet |
| Endast säkerhetskopior | Huvudfilen är borta och bara numrerade säkerhetskopior finns kvar |

## Så väljs Börja här

BimCraft tillämpar det resonemang en erfaren användare skulle göra:

1. Kandidater är läsbara projektfiler (`.rvt`, `.rte`) som inte länkas av en annan modell och inte är startfiler.
2. Centralmodeller och modeller med endast säkerhetskopior räknas bara när inget bättre finns.
3. Av kandidaterna vinner den som sparades senast.

Rutan listar sina skäl och varnar när en fil som ser ut som det uppenbara valet är skadad, när andra modeller är bakgrund och när valet är en centralmodell. Det är en bästa gissning; kontrollera med den som senast arbetade med projektet.

## Länkstatus

| Etikett | Betydelse |
|---|---|
| **I den här mappen** | Hittad på den sparade relativa sökvägen, eller i slutet av den sparade fullständiga sökvägen i mappen |
| **Samma namn hittat** | Inte på sin sökväg, men en fil med samma namn finns i mappen. Kontrollera att det är rätt |
| **Biblioteksfil** | En nyckeltabell eller en tabell med monteringskoder. De följer med programmet på varje dator |
| **Inte i den här mappen** | Hittades inte någonstans i mappen |

Kolumnen **Hittade länkar** i **Modeller** visar hur många av en modells länkar som hittats, av dem som förväntas i mappen (biblioteksfiler räknas inte).

## Sorterat bort

| Rad | Betydelse |
|---|---|
| Revit-underhållsmappar (lästes inte) | `*_backup`, `*_log` och `Revit_temp`, samt dolda mappar och `__MACOSX` |
| Lås-, logg- och säkerhetskopieringsrester | Filer med ändelserna `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` och `.slog` |
| Övriga filer | Allt annat (de första 40 namnges) |
