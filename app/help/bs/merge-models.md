---
title: Spoji dvije izmjene jednog modela
summary: Pusti git, Fossil ili Mercurial da spoje dvije izmijenjene kopije istog IFC modela objekat po objekat, tako da dvije osobe mogu crtati na istoj zgradi i spojiti rad.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, konflikt, trosmjerno, cadcraft merge, gitattributes, ifc, globalid, tim, dvije kopije, grane
from: 50733df8
---

Dvije osobe uzmu kopiju iste zgrade, jedna crta istočno krilo, a druga zapadno, pa kasnije kopije treba spojiti u jednu. Ako su dirali različite objekte, program to može uraditi umjesto čovjeka.

## Šta to omogućava

Svaki zid, vrata, nivo, prostorija i skup svojstava u IFC fajlu ima GlobalId koji se nikad ne mijenja. Spajanje traži objekte po tom identifikatoru, a ne po broju koji im fajl daje (`#123`), jer se brojevi mijenjaju kad program snima. Dijelovi koji vise o objektu i nemaju vlastiti identifikator (postavljanja, oblici, jedinice) upoređuju se po onome što sadrže.

Obje kopije moraju biti iste IFC verzije (2x3, 4 ili 4.3). Spajanje zadržava tvoj fajl onakav kakav jeste, njegov redoslijed i brojeve, i dodaje ono što je novo, pa git diff spajanja pokazuje samo ono što je spajanje promijenilo.

## Podešavanje

Git treba dvije linije jednom po repozitorijumu:

```
# .gitattributes
*.ifc merge=cadcraft

# jednom, na svakom računaru
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita pokreni `cadcraft merge <base> <ours> <theirs>`. Fossil i Mercurial uzimaju ista tri fajla u svom podešavanju alata za spajanje. Ništa se ne šalje; sve se izvršava na tvom računaru.

## Pravila

- Atribut promijenjen samo s jedne strane se uzima. Ista promjena s obje strane uzima se jednom.
- Isti atribut promijenjen na dva načina (isti nivo preimenovan na dva načina) je **konflikt**: tvoja strana ostaje, a izvještaj navodi obje. Otvori rezultat i popravi ga ručno.
- Spisak stvari (zidovi nivoa, svojstva skupa) spaja se kao skup: ono što je dodala bilo koja strana se zadržava, a ono što je uklonila bilo koja strana se uklanja. Dvije osobe koje svaka dodaju zidove istom nivou nemaju konflikt.
- Objekat dodan s bilo koje strane se zadržava, s oblikom i svojstvima. Uklonjen s jedne i netaknut s druge: uklonjen. Uklonjen s jedne i promijenjen s druge: uklonjen, i prijavljen.
- Vremenska oznaka i autor fajla, i istorija vlasnika svakog objekta, ostaju tvoji.

Geometrija se spaja cijela: oblik zida dolazi s jedne strane, nikad se ne miješa tačku po tačku. Zip-ovani IFC i IFCX fajlovi se ne spajaju. Poslije spajanja otvori rezultat u BimCraftu i pogledaj panel Problema prije snimanja.
