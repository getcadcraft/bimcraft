---
title: Spajanje dviju izmjena jednog modela
summary: Dopustite gitu, Fossilu ili Mercurialu da spoje dvije izmijenjene kopije istog IFC modela objekt po objekt, tako da dvije osobe mogu crtati na jednoj zgradi i spojiti svoj rad.
keywords: spajanje, git, fossil, mercurial, kontrola verzija, sukob, trosmjerno, cadcraft merge, gitattributes, ifc, globalid, tim, dvije kopije, grane
from: 50733df8
---

Dvije osobe uzmu kopiju iste zgrade: jedna crta istočno krilo, a druga zapadno. Kasnije se kopije moraju spojiti u jednu. Ako su dirale različite objekte, program to može učiniti umjesto čovjeka.

## Kako funkcionira

Svaki zid, vrata, etaža, prostorija i skup svojstava u IFC datoteci ima GlobalId koji se nikad ne mijenja. Spajanje traži objekte po tom id-u, a ne po broju koji im datoteka daje (`#123`), jer se brojevi mijenjaju kad program sprema. Dijelovi vezani uz objekt koji nemaju vlastiti id (postavljanja, oblici, jedinice) uspoređuju se po sadržaju.

Obje kopije moraju biti iste IFC verzije (2x3, 4 ili 4.3). Spajanje zadržava vašu datoteku kakva jest, njezin redoslijed i njezine brojeve, i dodaje ono što je novo, pa git razlika spajanja pokazuje samo ono što je spajanje promijenilo.

## Postavljanje

Git treba dva retka, jednom po repozitoriju:

```
# .gitattributes
*.ifc merge=cadcraft

# jednom, na svakom računalu
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gita pokrenite `cadcraft merge <base> <ours> <theirs>`. Fossil i Mercurial primaju iste tri datoteke u svojoj postavci alata za spajanje. Ništa se ne učitava: sve se izvodi na vašem računalu.

## Pravila

- Atribut promijenjen samo na jednoj strani uzima se. Ista promjena na obje strane uzima se jednom.
- Isti atribut promijenjen na dva načina (ista etaža preimenovana na dva načina) je **sukob**: vaša strana ostaje, a izvješće navodi obje. Otvorite rezultat i popravite ga ručno.
- Popis stvari (zidovi etaže, svojstva skupa) spaja se kao skup: što je jedna ili druga strana dodala, zadržava se, a što je jedna ili druga strana uklonila, uklanja se. Dvije osobe koje svaka dodaju zidove istoj etaži ne sukobljavaju se.
- Objekt dodan na jednoj strani zadržava se, s oblikom i svojstvima. Uklonjen na jednoj i netaknut na drugoj: uklonjen. Uklonjen na jednoj i promijenjen na drugoj: uklonjen, i prijavljen.
- Vremenska oznaka i autor datoteke te povijest vlasnika svakog objekta ostaju vaši.

Geometrija se spaja cijela: oblik zida dolazi s jedne strane, nikad miješan točku po točku. ZIP-ane IFC i IFCX datoteke se ne spajaju. Nakon spajanja otvorite rezultat u BimCraftu i pogledajte ploču {{ui:Problemi}} prije spremanja.
