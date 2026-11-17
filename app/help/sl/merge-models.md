---
title: Združitev dveh urejanj istega modela
summary: Naj git, Fossil ali Mercurial združita dve urejeni kopiji istega modela IFC predmet za predmetom, tako da lahko dve osebi rišeta na eni stavbi in združita delo.
keywords: združitev, git, fossil, mercurial, nadzor različic, konflikt, tristransko, cadcraft merge, gitattributes, ifc, globalid, ekipa, dve kopiji, veje
from: 50733df8
---

Dve osebi vzameta kopijo iste stavbe; ena riše vzhodno krilo, druga zahodno, kasneje pa morata kopiji spet združiti v eno. Če sta spremenili različne predmete, lahko to namesto človeka opravi program.

## Kako deluje

Vsak zid, vrata, etaža, prostor in nabor lastnosti v datoteki IFC ima GlobalId, ki se nikoli ne spremeni. Združitev išče predmete po tem identifikatorju, ne po številki, ki jo datoteka dodeli (`#123`), ker se številke ob shranjevanju programa spremenijo. Deli, ki visijo na predmetu in nimajo lastnega identifikatorja (postavitve, oblike, enote), se primerjajo po vsebini.

Obe kopiji morata biti iste različice IFC (2x3, 4 ali 4.3). Združitev ohrani vašo datoteko, njen vrstni red in njene številke ter doda, kar je novo, zato git diff združitve kaže samo, kar je združitev spremenila.

## Nastavitev

Git potrebuje dve vrstici enkrat za vsak repozitorij:

```
# .gitattributes
*.ifc merge=cadcraft

# enkrat, na vsakem računalniku
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Brez gita zaženite `cadcraft merge <base> <ours> <theirs>`. Fossil in Mercurial sprejmeta enake tri datoteke v svoji nastavitvi orodja za združevanje. Nič se ne naloži; vse teče na vašem računalniku.

## Pravila

- Atribut, spremenjen samo na eni strani, se vzame. Ista sprememba na obeh straneh se vzame enkrat.
- Isti atribut, spremenjen na dva načina (ista etaža preimenovana na dva načina), je **konflikt**: vaša stran ostane, poročilo pa navede obe. Odprite rezultat in ga popravite ročno.
- Seznam stvari (zidovi etaže, lastnosti nabora) se združi kot množica: ohrani se, kar je dodala katera koli stran, odstrani se, kar je odstranila katera koli stran. Dve osebi, ki vsaka doda zidove isti etaži, nista v konfliktu.
- Predmet, dodan na katerikoli strani, ostane, s svojo obliko in lastnostmi. Odstranjen na eni strani in nespremenjen na drugi: odstranjen. Odstranjen na eni strani in spremenjen na drugi: odstranjen in prijavljen.
- Časovni žig in avtor datoteke ter zgodovina lastnika vsakega predmeta ostanejo vaši.

Geometrija se združi kot celota: oblika zidu pride z ene strani, nikoli ni zmešana točko za točko. Stisnjene datoteke IFC in IFCX se ne združujejo. Po združitvi odprite rezultat v BimCraftu in pred shranjevanjem preglejte podokno Težave.
