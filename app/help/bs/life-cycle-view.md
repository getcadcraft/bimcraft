---
title: Pogledajte šta se troši tokom pedeset godina
summary: Prozori, vrata, završni slojevi i krov koje model sadrži, njihov vijek trajanja, godine u kojima se svaki zamjenjuje, te trošak po godini i njegova sadašnja vrijednost kada upišete trošak po jedinici.
keywords: životni ciklus, lifecycle, vijek trajanja, zamjena, održavanje, trošak, sadašnja vrijednost, diskont, inflacija, 50 godina, prozori, boja, krov, završni slojevi, ukupni životni vijek
from: 1b849545
---

Odjeljak {{ui:Pregled životnog ciklusa}} lijevog panela navodi šta model sadrži što se troši i kada se zamjenjuje tokom perioda studije (u početku 50 godina). Ništa u modelu se ne mijenja.

## Čitanje podataka

Svaki dio prikazuje svoju količinu (izmjerenu iz modela: površina prozora, vanjska i unutrašnja vrata, vanjski završni sloj zida, unutrašnja boja, završni sloj poda i plafona, tlocrtna površina krova, stepenice), **vijek u godinama** i **trošak po jedinici**. Dio se zamjenjuje po isteku svog vijeka, pa dvostrukog vijeka i tako dalje, dok je to prije kraja studije. Tako se prozor s vijekom od 30 godina u studiji od 50 godina zamjenjuje jednom, u 30. godini. Vijekovi trajanja su tipične planske vrijednosti: promijenite ih prema svojim proizvodima i klimi. Trošak nije pretpostavljen; upišite ga da vidite novac po godinama, ukupan iznos i njegovu sadašnju vrijednost. Dodajte diskontnu stopu i stopu inflacije ako ih želite.

{{ui:Spasi raspored (CSV)}} upisuje komponente i godine. Cijevi, kanali, ožičenje i oprema također su navedeni (vidi dolje).

## Cijevi, kanali, ožičenje i oprema

- **Cijevi i kanali** su metri svake nacrtane dionice. **Oprema** (pumpe, ventilatori, ventili, priključci, armature, izlazi, prekidači, razvodne table i ostalo što kartica Imovina prati) broji se po vrsti, pri čemu svaka vrsta ima planski vijek. Stavka čiji je vlastiti *vijek trajanja* postavljen na kartici Imovina ima svoj red s tim vijekom, a ako ima datum ugradnje, počinje od svoje starosti: pumpa stara 16 godina s vijekom od 10 godina je na redu odmah, pa zatim svakih deset godina.
- **Ožičenje** je **procjena**: plansko rastojanje od razvodne table duž uređaja svakog strujnog kruga, od najbližeg, pomnoženo s 1.25 za trasiranje. Model ne crta kabl, pa to provjerite prema vlastitom predmjeru.
- Vijekovi su planske vrijednosti za pregled, a ne izvor.

## Ugljik po zamjeni

Označite {{ui:Uključi ugrađeni ugljik svake zamjene}}. Novi prozor, vrata, stepenice, krov, cijev ili komad opreme računa se prema ugljiku koji nose elementi modela te vrste (faktori kartice Ugljik, po jedinici). Dio bez elementa ili faktora, kao što su boja, završni slojevi i ožičenje, prikazuje crticu i navodi se. Kraj životnog vijeka starog dijela i rad na njegovoj zamjeni se ne računaju.
