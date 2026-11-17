---
title: Kontrollér en mappe for beskadigede kopier, manglende links og rester
summary: Brug mappe­rapporten til at finde afskårne modelfiler, vælge den nyeste hele backup, se hvilke links der mangler, og finde lås- og midlertidige filer.
keywords: sundhedstjek, beskadiget, korrupt, ufuldstændig, afkortet, backup, manglende links, xref mangler, revision, rester, låsefiler, dwl, bak, aflevering
from: 3025a539
---

## Hvad du skal gøre

Kontrollér en projektmappe, før du afleverer den eller begynder at arbejde i den: er hver model komplet, hvilken backup er den sidste gode, og findes alle de linkede filer?

## Trin: beskadigede kopier

1. Åbn projektmappen. Se [Åbn en hel projektmappe](topic:open-project-folder).
2. Læs noterne under mappenavnet. »2 filer er ufuldstændige eller ulæselige. Se modellerne nedenfor.« betyder, at der er noget at kigge på.
3. Under **Modeller** kig på kolonnen **Status**. **Komplet** er i orden. En gul »1 ufuldstændig« betyder, at én kopi er beskadiget, men en anden er i orden. En rød **Ufuldstændig** betyder, at ingen intakt kopi blev fundet.
4. Åbn **Alle … kopier** under en model med et problem. Den lister hovedfilen og hver nummereret backup, nyeste først, med størrelse, dato og status.
5. Læs noten over listen, fx »Tower.rvt er ufuldstændig (183.2 MB, skal mindst være 214.0 MB). Kortet viser den nyeste komplette kopi, Tower.0012.rvt (3. mar. 2025).«
6. Klik på den kopi, du vil åbne. Kun komplette kopier kan klikkes.

## Hvad sundhedstjekket gør

Hver kopi af hver model får et hurtigt tjek af sin header, 512 bytes hver, så selv en mappe med store modeller tjekkes på få sekunder. En fil, hvis eget indeks peger forbi dens ende, blev afskåret, mens den blev kopieret, uploadet eller synkroniseret. En cloud-drev-fil, der stadig er »kun online«, ser ens ud.

Kortet for hver model læses fra hovedfilen, når den er i orden, og fra den nyeste intakte backup, når den ikke er.

## Trin: manglende links

1. Kig efter noten »*n* linkede filer er ikke i denne mappe.« under mappenavnet.
2. Scroll til **Linkede og refererede filer**. Manglende links listes først.
3. Læs kolonnen **Hvor** for hvert link:
   - **I denne mappe**: fundet på den sti, modellen gemte.
   - **Samme navn fundet**: en fil med samme navn findes et andet sted i mappen. Tjek, at det er den rigtige.
   - **Biblioteksfil**: en nøgleordstabel eller en samlekodetabel. Disse følger med programmet på hver computer, så de forventes ikke i mappen.
   - **Ikke i denne mappe**: ikke fundet nogen steder i mappen.
4. Læs **Brugt af** for at se, hvilke modeller der linker til hver fil.

BimCraft leder efter hvert link først via dets relative sti, derefter via slutningen af dets gemte sti (så `\\server\jobs\Tower\Cad\X-Refs\site.dwg` findes som `X-Refs/site.dwg`, når du valgte mappen `Cad`), og til sidst via filnavnet hvor som helst i mappen.

## Trin: rester

1. Scroll til **Sat til side** i slutningen af rapporten.
2. Læs de tre linjer, der kan dukke op:
   - Husholdningsmapper (`*_backup`, `*_log`, `Revit_temp`): læses ikke.
   - Lås-, log- og backup-rester: filer som `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. De er efterladt af programmer, der gik ned, eller som var åbne, da mappen blev kopieret. De er normalt sikre at slette, når ingen har filerne åbne.
   - Andre filer: alt andet, BimCraft ikke læser.

## Almindelige fejl

- **At slette den beskadigede hovedfil, før du har gemt en god backup.** Kopiér den nyeste komplette backup først, og tag derefter fat i den beskadigede fil.
- **At stole blindt på »Samme navn fundet«.** To forskellige tegninger kan have samme navn. Åbn begge, hvis du er i tvivl.
- **At tro, at en manglende biblioteksfil er et problem.** Nøgleord- og samlekodetabeller bor hos programmet på hver computer.
- **At antallet af filer er forskelligt mellem browsere.** I Firefox og Safari giver {{ui:Åbn en mappe}} alle filer, også dem i husholdningsmapper, så antallet (og grænsen på 20.000 filer) inkluderer dem. Trækker du mappen ind, springes de over, som i Chrome og Edge. Rapporten er ellers den samme.
