---
title: Flyt, kopiér, justér og fordel bygningselementer
summary: Flyt vægge, gulve, søjler og placerede elementer efter et basispunkt og et andet punkt eller en indtastet afstand, kopiér dem undervejs, og justér eller fordel dem jævnt, på planen eller ud fra et valg i 3D.
keywords: flyt, kopiér, justér, fordel, afstand, forskydning, basispunkt, vægge, søjler, gulve, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Hvad du gør

Flyt en væg, en søjle, et gulv eller et placeret biblioteksemne til et nyt sted, lav kopier af det, eller stil flere op på linje, uden at tegne dem om.

## Navne og taster

Kommandoerne hedder {{ui:Flyt}}, {{ui:Justér}} og {{ui:Fordel}}, og du kan skrive `MOVE`, `ALIGN` og `DISTRIBUTE` i kommandolinjen, som i tegneappen CadCraft. En forskel: i BimCraft er {{key:M}} Mål, så Flyt har sin egen tast, {{key:Shift+M}}. Værktøjerne findes i menuen {{ui:Build}}.

## Flyt

1. Vælg det, der skal flyttes, på planen eller i 3D-visningen. Vægge, gulve, søjler og placerede biblioteksemner kan alle være i ét valg.
2. Tryk {{key:Shift+M}} eller vælg {{ui:Flyt}}.
3. Klik på et basispunkt og derefter et andet punkt. Eller skriv, efter basispunktet, en afstand og tryk {{key:Enter}}: den går den vej, markøren peger fra basispunktet. Du kan også skrive `dx,dy` (eller `@dx,dy`) eller `længde<vinkel`.
4. Tryk {{key:C}} for at tænde {{ui:Kopiér}}: hver flytning laver så en kopi og er klar til den næste. Tryk {{key:Esc}} for at stoppe.

Begge punkter kan også klikkes i 3D-visningen: med Flyt tændt møder markøren etagens gulvhøjde, så et klik der er et punkt på planen. Hold {{key:Shift}} nede, mens du klikker, for i stedet at vælge et andet element. Brug en plan-, Top-, Front- eller Side-visning efter behag: punkterne ligger altid på den etage.

En væg tager sine døre og vinduer med sig. Et tegnet gulv tager sine åbninger med. Rum, gulve og lofter, der følger væggene, opdateres. Vægge, der var forbundet med den flyttede væg, bliver, hvor de er.

Hver flytning er én ændring: ét {{key:Mod+Z}} fortryder den, og den sendes til alle i en Live TeamWork-session. Et placeret biblioteksemne kan ikke kopieres på denne måde; brug {{ui:Rediger}} › {{ui:Kopiér}} og {{ui:Sæt ind}}.

## Justér

Vælg to eller flere elementer, vælg {{ui:Justér}}, og vælg derefter en side (venstre, centrum, højre, top, midte eller bund) og hvad der skal justeres efter: det valgte sæt, det først valgte, det sidst valgte eller et punkt, du klikker på. Tryk {{ui:Justér}} i linjen.

## Fordel

Vælg tre eller flere elementer, vælg {{ui:Fordel}}, og vælg derefter en retning (på tværs eller ned) og afstanden: lige store mellemrum mellem dem eller lige store centre. De to i enderne bliver, hvor de er.

Vægge, som Justér eller Fordel flytter, beholder deres samlinger, ligesom ved Flyt: en væg, der er forbundet med en flyttet væg, glider med enden langs sin egen linje for at forblive forbundet; skillevægge, der støder op til den, følger med; og to forbundne vægge, som begge flyttes, beholder deres hjørne, hvor deres nye linjer mødes. Rum forbliver lukkede. Det er ét trin i **Ændringer**.
