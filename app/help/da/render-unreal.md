---
title: Send scenen til en spilmotor
summary: Studio kan skrive scenen ind i et Unreal Engine-projekt og holde den opdateret ved hver afsendelse; dine egne redigeringer ligger i et lag, som CadCraft aldrig skriver. Plug-in'et, der åbner den, er endnu ikke udgivet.
keywords: unreal, unreal engine, spilmotor, link, send, usd stage, projekt, live, cine camera, movie render queue
from: 154d55ef
---

I CadCraft Studio kan motorlisten indeholde et **link** til et Unreal Engine-projekt. Kun én vej: fra CadCraft til Unreal.

## Send scenen

1. Vælg Unreal-punktet i motorlisten. Første gang beder Studio dig om at vælge dit projekts mappe (den med `.uproject`-filen); den husker den.
2. Klik på {{ui:Send}}. Studio skriver `CadCraft/<filnavn>/` inde i projektet: scenen som en USD-fil, indstillingsfilen, lysprofiler og to små lagfiler.
3. Ændr modellen, gem og send igen. Kun scenen og indstillingsfilen erstattes.

## Dine egne redigeringer er i sikkerhed

Stagen, Unreal åbner, er en lille rodfil, lavet én gang, med to lag under sig: **dit** øverst (`<name>.user.usda`, tomt i starten, aldrig omskrevet af CadCraft) og CadCraft-scenen nedenunder. Redigeringer, du gemmer i dit eget lag, bliver, når scenen sendes igen. Lys og andre aktører, du placerer i Unreal-niveauet, ligger uden for stagen og berøres heller ikke.

## Uden Studio

I browseren, eller på en computer hvor Studio ikke finder Unreal, vælg **Unreal-projektmappe (.zip)** i motorlisten og klik på {{ui:Render}}. Den gemmer den samme mappe som en zip: pak den ud i dit projekts `CadCraft`-mappe. Lad **Medtag stage-filer** være slået til første gang; slå den fra ved senere gemninger, så zip'en kun indeholder scenen og indstillingsfilen, og dit eget lag aldrig erstattes.

:::note
Unreal-plug-in'et, der åbner stagen, anvender solen, lamper, kameraer og eksponering, følger hver afsendelse og renderer et kamera, er **endnu ikke udgivet** og er ikke kørt i Unreal. Indtil da lægger Send filerne i projektet, og Unreals egne USD-værktøjer kan åbne dem. Windows er første system; macOS kommer efter.
:::
