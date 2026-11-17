---
title: Pogledajte što se troši kroz pedeset godina
summary: Prozori, vrata, završne obrade i krov iz modela, njihov vijek trajanja, godine u kojima se svaki zamjenjuje te trošak po godini i njegova sadašnja vrijednost kad upišete trošak po jedinici.
keywords: životni ciklus, lifecycle, vijek trajanja, zamjena, održavanje, trošak, sadašnja vrijednost, diskont, inflacija, 50 godina, prozori, boja, krov, završne obrade, cijeli životni vijek
from: 1b849545
---

Odjeljak {{ui:Pogled na životni ciklus}} lijevog okna navodi što model sadrži, što se troši i kada se zamjenjuje tijekom razdoblja studije (u početku 50 godina). Ništa u modelu se ne mijenja.

## Kako čitati

Svaki dio prikazuje svoju količinu (izmjerenu iz modela: površina prozora, vanjska i unutarnja vrata, završna obrada vanjskog zida, unutarnja boja, završna obrada poda i stropa, tlocrtna površina krova, stubište), **vijek u godinama** i **trošak po jedinici**. Dio se zamjenjuje nakon svog vijeka, nakon dvostrukog vijeka i tako dalje, dok je to prije kraja studije. Tako se prozor s vijekom od 30 godina u studiji od 50 godina zamjenjuje jednom, u 30. godini. Vijekovi trajanja su tipične planske vrijednosti: promijenite ih prema vlastitim proizvodima i klimi. Trošak se ne pretpostavlja; upišite ga da vidite novac po godini, ukupni iznos i njegovu sadašnju vrijednost. Dodajte diskontnu stopu i stopu inflacije ako ih želite.

{{ui:Spremi raspored (CSV)}} zapisuje sastavne dijelove i godine. Cijevi, zračni kanali, ožičenje i oprema također su navedeni (vidi niže).

## Cijevi, zračni kanali, ožičenje i oprema

- **Cijevi i zračni kanali** su metri svake nacrtane dionice. **Oprema** (pumpe, ventilatori, ventili, terminali, svjetiljke, utičnice, sklopke, razvodne ploče i ostalo što kartica Imovina prati) broji se po vrsti, a svaka vrsta ima planski vijek. Stavka čiji je vlastiti *vijek trajanja* postavljen na kartici Imovina ima vlastiti redak s tim vijekom. Ako ima datum ugradnje, počinje od svoje dobi: pumpa stara 16 godina s vijekom od 10 godina dospijeva odmah, pa zatim svakih deset godina.
- **Ožičenje** je **procjena**: udaljenost u tlocrtu od ploče duž uređaja svakog strujnog kruga, od najbližeg, pomnožena s 1.25 zbog vođenja. Model ne crta kabel, pa to provjerite prema vlastitom predmjeru.
- Vijekovi su planske vrijednosti za pregled, a ne izvor.

## Ugljik po zamjeni

Označite {{ui:Uključi ugrađeni ugljik svake zamjene}}. Novi prozor, vrata, stubište, krov, cijev ili komad opreme računa se s ugljikom koji nose elementi iste vrste u samom modelu (faktori kartice Ugljik, po jedinici). Dio bez elementa ili faktora, kao što su boja, završne obrade i ožičenje, prikazuje crticu i navodi se. Kraj vijeka starog dijela i rad na zamjeni se ne računaju.
