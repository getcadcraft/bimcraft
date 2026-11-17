---
title: Podloga sprata, olovke po pogledu, stepenište iz skice, otvaranje OBJ-a
summary: Prikažite drugi sprat isprekidano ispod osnove i poravnajte ga, dajte zidovima, vratima i prozorima vlastitu olovku u jednom pogledu, nacrtajte liniju hoda da dobijete stepenište, i otvorite Wavefront OBJ mrežu.
keywords: referentna podloga, prozirni prikaz, podloga, olovka, debljina linije, vrsta linije, nadjačavanje, stepenište, skica, podest, OBJ, mreža, uvoz, Wavefront
from: 333ebbde
---

## Podloga za sprat

Odaberite {{ui:Trace}} u meniju {{ui:Build}}, pa pogled na listi: osnovu drugog sprata, osnovu plafona sprata ili oznaku presjeka (isječenu na svoj kadar). Njeni zidovi, stupovi i podovi prikazuju se isprekidano ispod osnove koju crtate. Pomjerite je kliknuvši početnu tačku na referenci, pa mjesto gdje ta tačka treba biti, ili upišite X, Y i ugao (rotira se oko svog centra). {{ui:Reset}} je vraća, {{ui:Hide}} uklanja. Ona je samo referenca: ništa je ne bira, ne štampa se i ne čuva se u IFC-u. BimCraft je pamti za svaki sprat u ovom pretraživaču.

## Olovke po pogledu

Odaberite {{ui:Pens}}. Recite čemu olovka služi: svi zidovi, sva vrata, svi prozori, vrsta odabranog elementa ili odabrani elementi. Odaberite debljinu, liniju (puna, isprekidana, tačkasta) i boju, pa {{ui:Apply}}. Promjena važi samo za osnovu ovog sprata. Odabir nadjačava vrstu, a vrsta nadjačava cijelu kategoriju. {{ui:Clear all}} ih uklanja. Čuvaju se u ovom pretraživaču. Označite **Pen colours in 3D** da obojite olovke boje na modelu u 3D pogledu (debljina ili isprekidanost pripadaju liniji, pa se tamo vidi samo boja); odznačite da se vratite. {{ui:Print}} ih crta na PDF-u osnove: debljina se skalira s ekrana (podrazumijevana olovka zida od 1.75 piksela je 0.5 mm), isprekidane linije ostaju isprekidane, a boja se štampa u vrijednosti svoje teme papira.

## Stepenište iz skice

Odaberite {{ui:Sketch stair}} i kliknite uglove linije hoda, prvi stepenik prvi. Jedna linija je ravno stepenište, dvije linije koje se spajaju pod pravim uglom su L, a tri linije (gore, preko, nazad) su U. Pritisnite {{key:L}} da nacrtate podest: kliknite njegove uglove i pritisnite {{key:Enter}}, a njegova kraća stranica određuje širinu stepeništa. Pritisnite {{key:Enter}} da postavite stepenište. Svaki gaz se računa iz dužine vaše linije i broja uspona koji visina traži. Nakon toga, to je obično stepenište: mijenjate ga u {{ui:Properties}}, a stepenišni prostor i rukohvati slijede ga.

Označite **Make it a family** u traci alata (ili pritisnite {{key:F}}) prije {{key:Enter}} da postavite stepenište kao porodicu (ravno, L ili U stepenište). Ono ulazi kao jedan element i otvara se u uređivaču porodica sa svojom širinom, gazom, ukupnom visinom, gazovima u svakom kraku i razmakom U-a kao parametrima, pa možete dodati veličine, simbol u osnovi ili hotspotove. Stepenice i visina uspona slijede iz njih. Nema rukohvate ni stepenišni prostor: oni pripadaju običnom stepeništu.

## Otvaranje OBJ-a

Otvorite `.obj` datoteku kao i bilo koju drugu. OBJ nema jedinice, pa BimCraft čita metre s Y osom prema gore, kako ih većina programa zapisuje. Svaki objekat ili grupa postaje jedan element mreže na jednom nivou, a zatim ga možete pregledati, mjeriti, presijecati, postaviti u model i sačuvati kao IFC. Linije, krive i površine se izostavljaju, a statusna linija to kaže.

Objekat koji je tačno ravna prizma (zatvorena mreža sa dvije paralelne, identične krajnje površine i ravnim stranama upravnim na njih: ploča, stub, blok zida, lim s rupama) čuva se u IFC-u kao IFC-ovo vlastito ekstrudirano tijelo sa svojim obrisom i dubinom, a ne kao lista trouglova. Drugi programi ga čitaju kao pravo tijelo, ostaje mali, a dubina i obris se kasnije mogu mijenjati. Statusna linija kaže koliko je objekata sačuvano na taj način. Sve što nije tačno prizma (suženi oblik, mreža s jednim pomjerenim vrhom, mreža sa prazninom) ostaje kao trouglovi. Datoteka STEP se čita na isti način.
