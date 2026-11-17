---
title: Kontroller en mappe for skadede kopier, manglende lenker og rester
summary: Bruk mapperapporten til å finne avkuttede modellfiler, velge den nyeste hele sikkerhetskopien, se hvilke lenker som mangler, og finne lås- og midlertidige filer.
keywords: helsesjekk, skadet, korrupt, ufullstendig, avkuttet, sikkerhetskopi, manglende lenker, xref mangler, revisjon, rester, låsefiler, dwl, bak, overlevering
from: 3025a539
---

## Hva du gjør

Kontroller en prosjektmappe før du leverer den fra deg eller begynner å jobbe i den: er hver modell komplett, hvilken sikkerhetskopi er den siste gode, og finnes alle de lenkede filene?

## Trinn: skadede kopier

1. Åpne prosjektmappen. Se [Åpne en hel prosjektmappe](topic:open-project-folder).
2. Les notatene under mappenavnet. «2 filer er ufullstendige eller kan ikke leses. Se modellene nedenfor.» betyr at det er noe å se på.
3. I **Modeller** ser du på kolonnen **Status**. **Komplett** er greit. En gul «1 ufullstendig» betyr at én kopi er dårlig, men en annen er god. En rød **Ufullstendig** betyr at ingen god kopi ble funnet.
4. Åpne **Alle … kopier** under en modell med problem. Den lister hovedfilen og hver nummererte sikkerhetskopi, nyeste først, med størrelse, dato og status.
5. Les notatet over listen, for eksempel «Tower.rvt er ufullstendig (183.2 MB, skal være minst 214.0 MB). Kortet viser den nyeste komplette kopien, Tower.0012.rvt (3. mars 2025).»
6. Klikk på kopien du vil åpne. Bare komplette kopier kan klikkes.

## Hva helsesjekken gjør

Hver kopi av hver modell får en rask kontroll av headeren, 512 byte hver, så selv en mappe med store modeller kontrolleres på sekunder. En fil hvis egen indeks peker forbi slutten, ble kuttet av mens den ble kopiert, lastet opp eller synkronisert. En skyfil som fortsatt er «kun online» ser likt ut.

Kortet for hver modell leses fra hovedfilen når den er god, og fra den nyeste gode sikkerhetskopien når den ikke er det.

## Trinn: manglende lenker

1. Se etter notatet «*n* lenkede filer er ikke i denne mappen.» under mappenavnet.
2. Scroll til **Lenkede og refererte filer**. Manglende lenker listes først.
3. Les kolonnen **Hvor** for hver lenke:
   - **I denne mappen**: funnet på stien modellen lagret.
   - **Samme navn funnet**: en fil med samme navn ligger et annet sted i mappen. Kontroller at det er riktig.
   - **Biblioteksfil**: en tabell for nøkkelnotater eller monteringskoder. Disse følger med programmet på hver maskin, så de forventes ikke i mappen.
   - **Ikke i denne mappen**: ikke funnet noe sted i mappen.
4. Les **Brukes av** for å se hvilke modeller som lenker til hver fil.

BimCraft leter etter hver lenke først etter relativ sti, deretter etter slutten av den lagrede stien (slik at `\\server\jobs\Tower\Cad\X-Refs\site.dwg` finnes som `X-Refs/site.dwg` når du valgte mappen `Cad`), og deretter etter filnavn hvor som helst i mappen.

## Trinn: rester

1. Scroll til **Satt til side** nederst i rapporten.
2. Les de tre linjene som kan vises:
   - Vedlikeholdsmapper (`*_backup`, `*_log`, `Revit_temp`): leses ikke.
   - Rester etter lås, logg og sikkerhetskopi: filer som `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Disse er etterlatt av programmer som krasjet, eller som var åpne da mappen ble kopiert. De er vanligvis trygge å slette når ingen har filene åpne.
   - Andre filer: alt annet BimCraft ikke leser.

## Vanlige feil

- **Å slette den skadede hovedfilen før en god sikkerhetskopi er lagret.** Kopier den nyeste hele sikkerhetskopien først, og håndter deretter den skadede filen.
- **Å stole blindt på «Samme navn funnet».** To ulike tegninger kan ha samme navn. Åpne begge hvis du er i tvil.
- **Å tro at en manglende biblioteksfil er et problem.** Tabeller for nøkkelnotater og monteringskoder ligger hos programmet på hver maskin.
- **Antall filer er ulikt i ulike nettlesere.** I Firefox og Safari leverer {{ui:Åpne en mappe}} hver fil, også de inne i vedlikeholdsmapper, så antallet (og grensen på 20 000 filer) teller dem med. Å dra mappen inn hopper over dem, slik Chrome og Edge gjør. Rapporten er ellers den samme.
