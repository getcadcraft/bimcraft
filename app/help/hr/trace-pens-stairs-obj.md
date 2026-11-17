---
title: Ucrtajte etažu, postavite pera po prikazu, skicirajte stubište i otvorite OBJ
summary: Prikažite drugu etažu crtkano ispod tlocrta i poravnajte je, dajte zidovima, vratima i prozorima vlastito pero u jednom prikazu, nacrtajte liniju hoda za dobivanje stubišta i otvorite mrežu Wavefront OBJ.
keywords: referentni prikaz, prozirna kopija, podloga, pero, debljina linije, tip linije, nadjačavanje, stubište, skica, podest, OBJ, mreža, uvoz, Wavefront
from: 333ebbde
---

## Ucrtavanje etaže

Odaberite {{ui:Ucrtavanje}} u izborniku {{ui:Izgradnja}}, zatim prikaz s popisa: tlocrt druge etaže, tlocrt stropa etaže ili detalj (izrezan na svoj okvir). Njezini zidovi, stupovi i ploče prikazuju se crtkano ispod tlocrta koji crtate. Pomaknete je klikom na referentnu baznu točku, a zatim na mjesto gdje ta točka treba biti, ili upišite X, Y i kut (zakreće se oko vlastitog središta). {{ui:Vrati zadano}} je vraća, a {{ui:Sakrij}} uklanja. To je samo referenca: ništa je ne može odabrati, ne ispisuje se i ne sprema u IFC. BimCraft je pamti za svaku etažu u ovom pregledniku.

## Pera po prikazu

Odaberite {{ui:Pera}}. Recite čemu pero služi: svi zidovi, sva vrata, svi prozori, vrsta odabranog elementa ili odabrani elementi. Odaberite debljinu, vrstu linije (puna, crtkana, točkasta) i boju, zatim {{ui:Primijeni}}. Promjena vrijedi samo za tlocrt ove etaže. Odabir ima prednost nad vrstom, a vrsta nad cijelom kategorijom. {{ui:Očisti sve}} ih uklanja. Čuvaju se u ovom pregledniku. Označite **Boje pera u 3D** da se pera boja prikažu na modelu u 3D prikazu (debljina ili crtica pripadaju liniji, pa se tamo vidi samo boja); odznačite da se vratite. {{ui:Ispis}} crta ih na PDF-u tlocrta: debljina se skalira prema zaslonu (zadano pero zida od 1.75 piksela je 0.5 mm), crtice ostaju crtice, a boja se ispisuje u vrijednosti papirne teme.

## Stubište iz skice

Odaberite {{ui:Skiciraj stubište}} i kliknite kutove linije hoda, počevši od donjeg stupnja. Jedna linija je ravno stubište, dvije linije koje se spajaju pod pravim kutom čine L, a tri linije (gore, poprijeko, natrag) čine U. Pritisnite {{key:L}} za crtanje podesta: kliknite njegove kutove i pritisnite {{key:Enter}}; njegova kraća stranica postavlja širinu stubišta. Pritisnite {{key:Enter}} za postavljanje stubišta. Svako gazište izračuna se iz duljine vaše linije i broja čela stuba koje visina zahtijeva. Nakon toga stubište je obično: promijenite ga u **Svojstvima**, a stubišna jezgra i rukohvati prate ga.

Označite **Napravi obitelj** u retku alata (ili pritisnite {{key:F}}) prije {{key:Enter}} da stubište postavite kao obitelj (ravno, L ili U stubište). Ulazi kao jedan element i otvara se u uređivaču obitelji sa širinom, gazištem, ukupnom visinom, gazištima u svakom kraku i razmakom U-oblika kao parametrima, pa možete dodavati veličine, simbol u tlocrtu ili hotspotove. Koraci i visina čela proizlaze iz njih. Nema rukohvate ni stubišnu jezgru: to pripada običnom stubištu.

## Otvaranje OBJ-a

Otvorite datoteku `.obj` kao i svaku drugu. OBJ nema jedinica, pa BimCraft čita metre s Y prema gore, kako ih većina programa zapisuje. Svaki objekt ili grupa postaje jedan element mreže na jednoj etaži; zatim ga možete pregledati, mjeriti, presjecati, staviti u model i spremiti kao IFC. Linije, krivulje i površine se izostavljaju, a statusna linija to kaže.

Objekt koji je točno ravna prizma (zatvorena mreža s dvije paralelne, identične krajnje plohe i ravnim bočnim stranama okomitim na njih: ploča, stup, zidni blok, pločasti element s rupama) sprema se u IFC kao vlastito IFC-ovo izvučeno tijelo s obrisom i dubinom, a ne kao popis trokuta. Drugi programi ga čitaju kao pravo tijelo, ostaje malen, a dubina i obris mogu se kasnije uređivati. Statusna linija kaže koliko je objekata tako sačuvano. Sve što nije točno prizma (stožasti oblik, mreža s jednim pomaknutim vrhom, mreža s prazninom) ostaje kao trokuti. STEP datoteka čita se na isti način.
