---
title: Adunarea cantităților, listarea elementelor și programarea spațiilor
summary: Numărați elemente și adunați lungimile, ariile, volumele sau orice proprietate numerică, grupate după orice proprietate; listați câte un rând pe element; sau faceți un tabel centralizator al spațiilor cu ariile și volumele lor. Fiecare se descarcă ca CSV.
keywords: cantitate, cantități, antemăsurătoare, totaluri, sumă, tabel centralizator, listă de cantități, boq, qto, csv, grupare după, numărare, lungime, arie, volum, spații, încăperi, tabel centralizator al încăperilor, tabel centralizator al ariilor, listă de elemente
from: e2e7210c
---

## Ce urmează să faceți

Obțineți totaluri dintr-un model: lungimile pereților pe nivel, numărul de uși pe tip, volumul planșeelor pe material, costul fiecărei zone.

## Pași

1. Deschideți un model IFC.
2. Deschideți {{ui:Totaluri de cantități}} în panoul din stânga.
3. La {{ui:Numărare}}, alegeți {{ui:Toate elementele}} sau doar cele alese.
4. Sub {{ui:Grupare după}}, alegeți o proprietate, cum ar fi {{ui:Clasă}}. Faceți clic pe {{ui:Adăugare grup}} ca să împărțiți mai departe, până la trei, de exemplu după {{ui:Nivel}}.
5. Sub {{ui:Însumare}}, bifați numerele de adunat. Seturile de cantități ale modelului sunt bifate de la început.
6. Faceți clic pe {{ui:Descărcare CSV}} ca să deschideți tabelul într-o foaie de calcul.

## Ce ar trebui să vedeți

- Un rând pe grup, cu câte elemente are și fiecare total, plus un rând de total.
- Elementele fără valoare sunt numărate, dar nu adaugă nimic. Când se întâmplă asta, CSV-ul adaugă o coloană „lăsate afară” lângă total, ca să vedeți câte sunt.
- Numerele sunt în unitățile fișierului, așa cum sunt stocate în fișier, adesea milimetri pentru lungimi.

## Un rând pe element sau spațiile

Schimbați {{ui:Afișare}}:

- **Un rând pe element**: fiecare element pe rândul său, cu proprietățile sub {{ui:Coloane}} și numerele sub {{ui:Însumare}}. CSV-ul începe cu GlobalId-ul fiecărui element. Faceți clic pe prima valoare dintr-un rând ca să alegeți acel element.
- **Spații**: fiecare încăpere cu numărul, numele, nivelul, aria și volumul ei, plus totalurile lor. Ariile și volumele vin din cantitățile spațiului, așa cum le declară fișierul. Când fișierul nu are niciuna, ele se măsoară din forma spațiului în m² și m³ și se afișează cursiv; CSV-ul spune care este care.

## Continuare

- [Căutarea elementelor după clasă, nume sau proprietate](topic:find)
- [Colorarea elementelor după o proprietate](topic:color-by-property)

## Infrastructură (IFC 4.3)

Alegeți **Infrastructură (IFC 4.3)** în lista de vizualizări ca să vedeți drumurile, căile ferate, podurile și lucrările maritime, totalizate pe clasă și tip, cu lungimea, aria și volumul declarate de fișierul însuși. O cantitate pe care fișierul nu o declară rămâne necompletată, niciodată calculată. **Trimiteți cantitățile de infrastructură către TakeoffCraft** salvează un fișier `.quantities.json` pe care TakeoffCraft îl deschide ca cantități tipizate.
