---
title: Pogledajte šta se troši tokom pedeset godina
summary: Prozori, vrata, završne obrade i krov koje model sadrži, njihov vek trajanja, godine zamene, trošak po godini i sadašnja vrednost kada upišete cenu po jedinici.
keywords: životni ciklus, vek trajanja, zamena, održavanje, trošak, sadašnja vrednost, diskont, inflacija, 50 godina, prozori, boja, krov, završne obrade, ceo životni vek
from: 1b849545
---

Odeljak {{ui:Prikaz životnog ciklusa}} u levom panelu navodi šta model sadrži što se troši i kada se menja tokom perioda studije (u početku 50 godina). Ništa u modelu se ne menja.

## Čitanje

Svaki deo prikazuje svoju količinu (izmerenu iz modela: površina prozora, spoljna i unutrašnja vrata, završna obrada spoljnog zida, unutrašnja boja, završna obrada poda i plafona, tlocrtna površina krova, stepenice), **vek u godinama** i **cenu po jedinici**. Deo se menja kada istekne njegov vek, zatim posle dvostrukog veka i tako dalje, dok je to pre kraja studije. Zato se prozor sa vekom od 30 godina u studiji od 50 godina menja jednom, u 30. godini. Vekovi trajanja su tipične planske vrednosti: promenite ih na svoje proizvode i klimu. Trošak se ne pretpostavlja; upišite ga da vidite novac po godinama, ukupan iznos i njegovu sadašnju vrednost. Dodajte stopu diskonta i stopu inflacije ako ih želite.

{{ui:Sačuvaj raspored (CSV)}} upisuje komponente i godine. Cevi, kanali, instalacije i oprema su takođe navedeni (vidi dole).

## Cevi, kanali, instalacije i oprema

- **Cevi i kanali** su metri svake nacrtane deonice. **Oprema** (pumpe, ventilatori, ventili, priključci, armature, izlazi, prekidači, table i ostalo što prati kartica Sredstva) broji se po vrsti, a svaka vrsta ima plansku vrednost veka. Stavka čiji je sopstveni *vek trajanja* postavljen na kartici Sredstva je zaseban red sa tim vekom. Ako ima datum ugradnje, počinje od svoje starosti: pumpa stara 16 godina sa vekom od 10 godina dospeva odmah, pa zatim na svakih deset godina.
- **Instalacije** su **procena**: planska udaljenost od table duž uređaja svakog kola, od najbližeg, pomnožena sa 1,25 zbog vođenja. Model ne crta kabl, zato je proverite prema sopstvenom predmeru.
- Vekovi su planske vrednosti za pregled, a ne izvor.

## Ugljenik po zameni

Štiklirajte {{ui:Uključi ugrađeni ugljenik svake zamene}}. Novi prozor, vrata, stepenice, krov, cev ili oprema računaju se po ugljeniku koji nose elementi modela iste vrste (faktori iz kartice Ugljenik, po jedinici). Deo bez elementa ili faktora, kao što su boja, završne obrade i instalacije, prikazuje crticu i navodi se. Kraj veka starog dela i rad na njegovoj zameni se ne računaju.
