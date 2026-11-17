---
title: Kontrollera en mapp för skadade kopior, saknade länkar och rester
summary: Använd mappens rapport för att hitta avklippta modellfiler, välja den senaste kompletta säkerhetskopian, se vilka länkar som saknas och hitta lås- och temporära filer.
keywords: hälsokontroll, skadad, korrupt, ofullständig, avklippt, säkerhetskopia, saknade länkar, xref saknas, granskning, rester, låsfiler, dwl, bak, överlämning
from: 3025a539
---

## Vad du gör

Kontrollera en projektmapp innan du lämnar över den eller börjar arbeta i den: är varje modell komplett, vilken säkerhetskopia är den senaste fungerande och finns alla länkade filer?

## Steg: skadade kopior

1. Öppna projektmappen. Se [Öppna en hel projektmapp](topic:open-project-folder).
2. Läs noterna under mappnamnet. "2 files are incomplete or unreadable. See the models below." betyder att det finns något att titta på.
3. Under **Modeller**, titta på kolumnen **Status**. **Komplett** är bra. En gul "1 ofullständig" betyder att en kopia är trasig men en annan är felfri. En röd **Ofullständig** betyder att ingen felfri kopia hittades.
4. Öppna **Alla … kopior** under en modell med problem. Den listar huvudfilen och varje numrerad säkerhetskopia, nyast först, med storlek, datum och status.
5. Läs noten ovanför listan, till exempel "Tower.rvt is incomplete (183.2 MB, should be at least 214.0 MB). The card shows the newest complete copy, Tower.0012.rvt (Mar 3, 2025)." Kortet visar den senaste kompletta kopian.
6. Klicka på kopian du vill öppna. Endast kompletta kopior kan klickas.

## Vad hälsokontrollen gör

Varje kopia av varje modell får en snabb kontroll av sin header, 512 byte var, så även en mapp med stora modeller kontrolleras på några sekunder. En fil vars eget index pekar förbi dess slut har klippts av när den kopierades, laddades upp eller synkades. En molnenhetsfil som ännu är "online only" ser likadan ut.

Kortet för varje modell läses från huvudfilen när den är felfri, och från den senaste felfria säkerhetskopian när den inte är det.

## Steg: saknade länkar

1. Leta efter noten "*n* linked files are not in this folder." under mappnamnet.
2. Scrolla till **Länkade och refererade filer**. Saknade länkar visas först.
3. Läs kolumnen **Where** för varje länk:
   - **In this folder**: hittad på den sökväg som modellen sparade.
   - **Same name found**: en fil med samma namn finns på en annan plats i mappen. Kontrollera att det är rätt fil.
   - **Library file**: en tabell med nyckelnoteringar eller monteringskoder. Dessa följer med programmet på varje dator, så de förväntas inte finnas i mappen.
   - **Not in this folder**: hittades inte någonstans i mappen.
4. Läs **Used by** för att se vilka modeller som länkar till varje fil.

BimCraft letar efter varje länk först med dess relativa sökväg, sedan med slutet av dess sparade sökväg (så att `\\server\jobs\Tower\Cad\X-Refs\site.dwg` hittas som `X-Refs/site.dwg` när du valde mappen `Cad`), och sedan med filnamnet var som helst i mappen.

## Steg: rester

1. Scrolla till **Lagt åt sidan** längst ned i rapporten.
2. Läs de tre rader som kan visas:
   - Underhållsmappar (`*_backup`, `*_log`, `Revit_temp`): läses inte.
   - Rester av lås-, logg- och säkerhetskopior: filer som `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp` och `.sv$`. De lämnas kvar av program som kraschade eller var öppna när mappen kopierades. Det är oftast säkert att ta bort dem när ingen har filerna öppna.
   - Övriga filer: allt annat som BimCraft inte läser.

## Vanliga misstag

- **Att ta bort den skadade huvudfilen innan du har sparat en felfri säkerhetskopia.** Kopiera den senaste kompletta säkerhetskopian först och hantera sedan den skadade filen.
- **Att lita blint på "Same name found".** Två olika ritningar kan ha samma namn. Öppna båda om du är osäker.
- **Att tro att en saknad biblioteksfil är ett problem.** Tabeller med nyckelnoteringar och monteringskoder finns hos programmet på varje dator.
- **Att filantalet skiljer sig mellan webbläsare.** I Firefox och Safari lämnar {{ui:Open a folder}} över varje fil, även de i underhållsmappar, så antalet (och gränsen på 20 000 filer) inkluderar dem. Att dra in mappen hoppar över dem, precis som i Chrome och Edge. Rapporten är i övrigt densamma.
