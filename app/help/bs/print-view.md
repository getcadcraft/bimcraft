---
title: Provjera crteža u prikazu za štampu
summary: Prebacite DWG ili DXF u prikaz za štampu da ga vidite crno na bijelom, s debljinama linija i bez slojeva koji se nikad ne štampaju.
keywords: štampa, štampanje, pregled, pregled štampe, debljine linija, debljina linije, monohromatski, crno-bijelo, defpoints, bez štampe
from: 1a59c23e
---

## Šta ćete uraditi

Vidjeti kako će list izgledati na papiru prije nego što ga odštampate iz programa u kojem je nastao: crno na bijelom, linije u stvarnoj debljini, i bez slojeva koji su postavljeni da se ne štampaju.

## Koraci

1. Otvorite DWG ili DXF crtež.
2. Kliknite karticu lista iznad crteža.
3. Kliknite {{ui:Prikaz za štampu}} na kraju kartica ili pritisnite {{key:P}}.
4. Uvećajte detalj da uporedite debele i tanke linije.
5. Ponovo kliknite {{ui:Prikaz za štampu}} ili pritisnite {{key:P}} da se vratite na normalne boje.

## Šta treba da vidite

- Bijeli papir na sivoj podlozi, svaka linija i tekst crni, bez obzira na temu.
- Debljine linija: na listu se svaka debljina crta u svojoj stvarnoj širini na papiru, pa je linija od 0,5 mm dvostruko deblja od linije od 0,25 mm na bilo kom uvećanju. Linija se nikad ne crta tanje od svoje debljine na ekranu.
- Slojevi postavljeni da se ne štampaju i sloj DEFPOINTS su skriveni.
- Dugme {{ui:Prikaz za štampu}} ostaje pritisnuto. Prikaz za štampu ostaje uključen kad mijenjate listove ili otvorite drugi crtež, dok ga ne isključite.

U {{ui:Model}}, prikaz za štampu koristi samo debljine na ekranu (tanke linije jedan piksel, deblje malo šire), jer prostor modela nema veličinu papira.

## Česte greške

- **Očekivanje da će se štampati.** Prikaz za štampu je pregled. Štampanje i izvoz u PDF još nisu ugrađeni u BimCraft; štampajte iz programa u kojem je crtež nastao.
- **Očekivanje stilova štampe.** Tabele olovaka i boje stilova štampe se ne čitaju. Sve je obično crno.
- **Pritisak na P dok kucate.** {{key:F}} i {{key:P}} ne rade dok kucate u polju, ili dok je prikazana specifikacija opreme.
