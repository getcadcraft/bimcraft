---
title: Spojite dve izmene jednog modela od dve osobe
summary: Dozvolite da git, Fossil ili Mercurial spoje dve izmenjene kopije istog IFC modela objekat po objekat, tako da dve osobe mogu da crtaju na jednoj zgradi i spoje rad.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, sukob, trostrano, cadcraft spajanje, gitattributes, ifc, globalid, tim, dve kopije, grane
from: 50733df8
---

Dve osobe uzmu kopiju iste zgrade, jedna crta istočno krilo, a druga zapadno, i kasnije kopije treba da postanu jedna. Ako su dirale različite objekte, program to može da uradi umesto čoveka.

## Šta to omogućava

Svaki zid, vrata, nivo, prostorija i skup svojstava u IFC datoteci ima GlobalId koji se nikad ne menja. Spajanje traži objekte po tom identifikatoru, a ne po broju koji im datoteka daje (`#123`), jer se brojevi menjaju kad program sačuva. Delovi vezani za objekat koji nemaju sopstveni identifikator (postavljanja, oblici, jedinice) upoređuju se po sadržaju.

Obe kopije moraju biti iste IFC verzije (2x3, 4 ili 4.3). Spajanje zadržava vašu datoteku onakvu kakva je, njen redosled i njene brojeve, i dodaje ono što je novo, pa git razlika spajanja pokazuje samo ono što je spajanje promenilo.

## Podešavanje

Git treba dva reda, jednom po repozitorijumu:

```
# .gitattributes
*.ifc merge=cadcraft

# one time, on each computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita, pokrenite `cadcraft merge <base> <ours> <theirs>`. Fossil i Mercurial uzimaju ista tri fajla u svom podešavanju alata za spajanje. Ništa se ne šalje; sve se izvršava na vašem računaru.

## Pravila

- Atribut promenjen samo sa jedne strane se uzima. Ista promena sa obe strane se uzima jednom.
- Isti atribut promenjen na dva načina (isti nivo preimenovan na dva načina) je **sukob**: vaša strana ostaje, a izveštaj navodi obe. Otvorite rezultat i ispravite ga ručno.
- Spisak stvari (zidovi nivoa, svojstva skupa) spaja se kao skup: zadržava se ono što je dodala bilo koja strana, a uklanja se ono što je bilo koja strana uklonila. Dve osobe koje svaka dodaju zidove istom nivou nemaju sukob.
- Objekat dodat sa bilo koje strane se zadržava, sa svojim oblikom i svojstvima. Uklonjen sa jedne strane, a nepromenjen sa druge: uklonjen. Uklonjen sa jedne strane, a promenjen sa druge: uklonjen i prijavljen.
- Vremenska oznaka i autor datoteke, kao i vlasnička istorija svakog objekta, ostaju vaši.

Geometrija se spaja kao celina: oblik zida dolazi sa jedne strane, nikad mešan tačku po tačku. Zipovane IFC i IFCX datoteke se ne spajaju. Posle spajanja otvorite rezultat u BimCraft-u i pogledajte panel Problemi pre čuvanja.
