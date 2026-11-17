---
title: Provjera crteža u pogledu ispisa
summary: Prebacite DWG ili DXF u pogled ispisa da ga vidite crno na bijelom s debljinama linija i bez slojeva koji se nikad ne ispisuju.
keywords: ispis, plotanje, pregled, pregled plotanja, debljine linija, debljina linije, monokromatski, crno-bijelo, defpoints, bez plotanja
from: 1a59c23e
---

## Što ćete raditi

Vidjeti kako će list izgledati na papiru prije ispisa iz programa koji ga je napravio: crno na bijelom, debljine linija u njihovoj stvarnoj širini i bez slojeva postavljenih da se ne ispisuju.

## Koraci

1. Otvorite DWG ili DXF crtež.
2. Kliknite karticu lista iznad crteža.
3. Kliknite {{ui:Pogled ispisa}} na kraju kartica ili pritisnite {{key:P}}.
4. Zumirajte na detalj da usporedite teške i lagane linije.
5. Ponovo kliknite {{ui:Pogled ispisa}} ili pritisnite {{key:P}} da se vratite na uobičajene boje.

## Što biste trebali vidjeti

- Bijeli papir na sivoj podlozi, svaka linija i tekst crni, bez obzira na temu.
- Debljine linija: na listu se svaka debljina crta u svojoj stvarnoj širini na papiru, pa je linija od 0.5 mm dvostruko deblja od linije od 0.25 mm pri bilo kojem zumu. Linija se nikad ne crta tanje od svoje debljine na zaslonu.
- Slojevi postavljeni da se ne ispisuju i sloj DEFPOINTS su skriveni.
- Gumb {{ui:Pogled ispisa}} ostaje pritisnut. Pogled ispisa ostaje uključen kad mijenjate listove ili otvarate drugi crtež, dok ga ne isključite.

U {{ui:Model}}, pogled ispisa koristi samo debljine na zaslonu (tanke linije jedan piksel, deblje malo šire), jer prostor modela nema veličinu papira.

## Česte pogreške

- **Očekivati da se ispisuje.** Pogled ispisa je pregled. Ispis i izvoz u PDF još nisu ugrađeni u BimCraft; ispisujte iz programa koji je napravio crtež.
- **Očekivati stilove plotanja.** Tablice olovaka i boje stilova plotanja se ne čitaju. Sve je obično crno.
- **Pritisnuti P dok tipkate.** {{key:F}} i {{key:P}} ne rade dok tipkate u polju ili dok je prikazana tablica opreme.
