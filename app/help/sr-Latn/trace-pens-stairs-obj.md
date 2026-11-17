---
title: Prati nivo, postavi olovke po prikazu, skiciraj stepenice i otvori OBJ
summary: Prikaži drugi nivo isprekidano ispod osnove i poravnaj ga, dodeli zidovima, vratima i prozorima sopstvenu olovku u jednom prikazu, nacrtaj liniju hoda za dobijanje stepenica i otvori OBJ mrežu.
keywords: referenca praćenja, senka, podloga, olovka, debljina linije, vrsta linije, zamena, stepenice, skica, podest, OBJ, mreža, uvoz, Wavefront
from: 333ebbde
---

## Praćenje nivoa

Izaberi {{ui:Prati}} u meniju {{ui:Verzija}}, pa prikaz sa spiska: osnovu drugog nivoa, osnovu plafona nivoa ili detalj (iseče se po svom okviru). Njegovi zidovi, stubovi i podovi prikazuju se isprekidano ispod osnove na kojoj crtaš. Pomeri ga klikom na osnovnu tačku na referenci, pa na mesto gde ta tačka treba da ide, ili upiši X, Y i ugao (okreće se oko sopstvenog centra). {{ui:Resetuj}} ga vraća, a {{ui:Sakrij}} ga uklanja. To je samo referenca: ništa je ne bira, ne štampa se i ne čuva se u IFC-u. BimCraft je pamti za svaki nivo u ovom pregledaču.

## Olovke po prikazu

Izaberi {{ui:Olovke}}. Reci čemu olovka služi: svi zidovi, sva vrata, svi prozori, vrsta izabranog elementa ili izabrani elementi. Izaberi debljinu, liniju (puna, isprekidana, tačkasta) i boju, pa {{ui:Primeni}}. Promena važi samo za osnovu ovog nivoa. Izbor ima prednost nad vrstom, a vrsta nad celom kategorijom. {{ui:Izbriši sve}} ih uklanja. Čuvaju se u ovom pregledaču. Označi **Boje olovaka u 3D** da se boje olovaka oslikaju na modelu u 3D prikazu (debljina ili isprekidanost pripadaju liniji, pa se u 3D vidi samo boja); isključi je da se vratiš. {{ui:Štampaj}} ih crta na PDF-u osnove: debljina se skalira sa ekrana (podrazumevana olovka za zid od 1.75 piksela je 0.5 mm), isprekidane linije ostaju isprekidane, a boja se štampa u svojoj vrednosti za temu papira.

## Stepenice iz skice

Izaberi {{ui:Skiciraj stepenice}} i klikni uglove linije hoda, počevši od donjeg stepenika. Jedna linija je prave stepenice, dve linije koje se sastaju pod pravim uglom su L, a tri linije (gore, preko, nazad) su U. Pritisni {{key:L}} da nacrtaš podest: klikni njegove uglove i pritisni {{key:Enter}}, a njegova kraća stranica određuje širinu stepenica. Pritisni {{key:Enter}} da postaviš stepenice. Svako gazište se računa iz dužine tvoje linije i broja stepenika koje visina zahteva. Posle toga su to obične stepenice: menjaj ih u Svojstvima, a otvor za stepenište i rukohvati prate.

Označi **Napravi od toga porodicu** u redu alata (ili pritisni {{key:F}}) pre {{key:Enter}} da postaviš stepenice kao porodicu (prave, L ili U stepenice). Ulaze kao jedan element i otvaraju se u uređivaču porodice sa širinom, gazištem, ukupnom visinom, gazištima u svakom kraku i razmakom U-a kao parametrima, pa možeš dodati dimenzije, simbol u osnovi ili vruće tačke. Stepenice i visina stepenika prate ove parametre. Nema rukohvate ni otvor za stepenište: to pripada običnim stepenicama.

## Otvaranje OBJ-a

Otvori `.obj` datoteku kao i svaku drugu. OBJ nema jedinice, pa BimCraft čita metre sa Y naviše, kako ga piše većina programa. Svaki objekat ili grupa postaje jedan element mreže na jednom nivou, pa ga možeš pregledati, meriti, preseći, postaviti u model i sačuvati kao IFC. Linije, krive i površi se izostavljaju, a statusna linija to kaže.

Objekat koji je tačno prava prizma (zatvorena mreža sa dve paralelne, jednake krajnje strane i ravnim bočnim stranama normalnim na njih: ploča, stub, blok zida, lim sa rupama) čuva se u IFC-u kao IFC-ov sopstveni izvučeni solid, sa svojim obrisom i dubinom, a ne kao spisak trouglova. Drugi programi ga čitaju kao pravi solid, ostaje mali, a njegova dubina i obris mogu se kasnije menjati. Statusna linija kaže koliko je objekata sačuvano na taj način. Sve što nije tačno prizma (suženi oblik, mreža sa jednim pomerenim temenom, mreža sa procepom) ostaje kao trouglovi. STEP datoteka se čita na isti način.
