---
title: Roosters en kolomme
summary: Lê roosterlyne uit met genommerde en letter-merkers, volgens afstand of een-een, teken mure en kolomme langs hulle, en sien hulle op planne, aansigte en snitte.
keywords: rooster, roosters, roosterlyn, kolomrooster, as, asse, merker, roosterlyn, konstruksierooster, 1 2 3, A B C, kolom, kolomme, pilaar, paal, vasvang, IfcGrid, IfcColumn
from: bf99a8f7
---

## Wat jy gaan doen

Lê 'n gebou op 'n rooster uit, en teken dan mure en plaas kolomme langs sy lyne.

## Plaas 'n hele rooster

1. Skakel {{ui:Teken}} aan, kies dan {{ui:Bou}} › {{ui:Rooster}}.
2. Klik op {{ui:Plaas 'n rooster…}}. Sê hoeveel **genommerde lyne** (1, 2, 3…) en **letterlyne** (A, B, C…) jy wil hê en hoe ver uitmekaar. Tik een afstand, of verskeie wat met kommas geskei is vir ongelyke baaie (byvoorbeeld `20', 24', 20'`). {{ui:Verby die laaste lyne}} is hoe ver elke lyn verby die buitenste lyne van die ander soort loop, en {{ui:Gedraai (grade)}} draai die hele rooster.
3. Klik op {{ui:Plaas dit}}, en klik dan waar die eerste kruising (1 / A) moet wees. Die voorskou volg die wyser.

Genommerde lyne loop op na bo oor die plan en is oor die plan verspreid; letterlyne loop oor die plan en is op na bo verspreid. Letters slaan I en O oor, soos op tekeninge, sodat hulle nooit as 1 en 0 gelees word nie.

## Teken roosterlyne een-een

Met {{ui:Rooster}} aan, klik waar 'n lyn begin en waar dit eindig. Dit kry die volgende etiket van die lyne waarlangs dit loop (na 3 kom 4; na B kom C). Druk {{key:Esc}} om te stop.

## Verander 'n roosterlyn

Met {{ui:Rooster}} aan, klik op 'n lyn om dit te kies. Tik 'n nuwe {{ui:Etiket}} en druk {{key:Enter}}, of klik op {{ui:Skrap hierdie lyn}} (of druk {{key:Delete}}). {{ui:Merkers}} plaas die merkers aan albei ente, by die begin of einde van elke lyn, of nêrens nie. Elke verandering is een stap: {{key:Mod+Z}} neem dit terug.

## Teken langs die rooster

Die {{ui:Muur}}-hulpmiddel, die {{ui:Kolom}}-hulpmiddel en die ander tekenhulpmiddels vaspen aan roosterlyne en waar hulle kruis (die vasmerk is 'n klein sirkel met 'n kruis).

**Kolomme:** kies {{ui:Bou}} › {{ui:Kolom}}, kies die vorm (reghoekig of rond), die grootte, en of die kolom **tot die verdieping bo** loop of tot 'n vaste hoogte, en klik dan. {{ui:By elke roosterkruising}} plaas 'n kolom by elke kruising wat nog geen het nie. Klik op 'n kolom om die vorm, grootte of hoogte daarvan in {{ui:Eienskappe}} te verander; {{key:Delete}} verwyder dit. Kolomme wat tot die verdieping bo loop, volg dit wanneer die hoogte daarvan verander.

## Wat jy behoort te sien

- Die rooster op die plan van elke verdieping, met 'n merker en sy etiket aan die ente van elke lyn.
- Roosterlyne op die tekenstel: op die planne, en op aansigte en snitte waar 'n lyn van kant gesien word, met sy merker bo die gebou. Sien [Aansigte, snitte en blaaie](topic:sheets).
- In die IFC-lêer: een rooster vir die gebou (IfcGrid, sy genommerde lyne in een lys en sy letterlyne in die ander), en kolomme as IfcColumn met hul grootte, hoogte en hoeveelhede. Ander BIM-programme wys albei.

:::note
'n Rooster wat uit 'n lêer van 'n ander program gekom het, word gewys, en die hulpmiddels vaspen daaraan, maar die lyne daarvan kan hier nie verander word nie.
:::
