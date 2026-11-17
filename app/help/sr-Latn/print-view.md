---
title: Provera crteža u prikazu za štampu
summary: Prebacite DWG ili DXF u prikaz za štampu da ga vidite crno na belom, sa debljinama linija i bez slojeva koji se nikad ne štampaju.
keywords: štampa, iscrtavanje, pregled, pregled iscrtavanja, debljine linija, debljina linije, monohromatski, crno-belo, defpoints, bez iscrtavanja
from: 1a59c23e
---

## Šta ćete uraditi

Vidite kako će list izgledati na papiru pre štampe iz programa koji ga je napravio: crno na belom, debljine linija u njihovoj pravoj širini i bez slojeva koji su podešeni da se ne štampaju.

## Koraci

1. Otvorite DWG ili DXF crtež.
2. Kliknite karticu lista iznad crteža.
3. Kliknite {{ui:Prikaz za štampu}} na kraju kartica ili pritisnite {{key:P}}.
4. Uvećajte detalj da uporedite debele i tanke linije.
5. Ponovo kliknite {{ui:Prikaz za štampu}} ili pritisnite {{key:P}} da se vratite na uobičajene boje.

## Šta treba da vidite

- Beli papir na sivoj radnoj površini, svaka linija i tekst crni, bez obzira na temu.
- Debljine linija: na listu se svaka debljina crta u svojoj pravoj širini na papiru, pa je linija od 0.5 mm dvostruko deblja od linije od 0.25 mm pri svakom uvećanju. Linija se nikad ne crta tanje od svoje debljine na ekranu.
- Slojevi podešeni da se ne štampaju i sloj DEFPOINTS su sakriveni.
- Dugme {{ui:Prikaz za štampu}} ostaje pritisnuto. Prikaz za štampu ostaje uključen kad menjate listove ili otvorite drugi crtež, dok ga ne isključite.

U {{ui:Model}}, prikaz za štampu koristi samo debljine na ekranu (tanke linije jedan piksel, deblje malo šire), jer prostor modela nema veličinu papira.

## Česte greške

- **Očekivanje da će se štampati.** Prikaz za štampu je pregled. Štampanje i izvoz u PDF još nisu ugrađeni u BimCraft; štampajte iz programa koji je napravio crtež.
- **Očekivanje stilova štampanja.** Tabele olovaka i boje stilova štampanja se ne čitaju. Sve je običnu crno.
- **Pritiskanje P dok kucate.** {{key:F}} i {{key:P}} ne rade dok kucate u polju ili dok je prikazana tabela opreme.
