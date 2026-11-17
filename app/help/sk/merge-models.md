---
title: Zlúčte úpravy jedného modelu od dvoch ľudí
summary: Nechajte git, Fossil alebo Mercurial zlúčiť dve upravené kópie toho istého modelu IFC objekt po objekte, aby dvaja ľudia mohli kresliť na jednej budove a spojiť svoju prácu.
keywords: zlúčiť, git, fossil, mercurial, správa verzií, konflikt, trojcestné, cadcraft merge, gitattributes, ifc, globalid, tím, dve kópie, vetvy
from: 50733df8
---

Dvaja ľudia si vezmú kópiu tej istej budovy, jeden kreslí východné krídlo a druhý západné, a neskôr sa kópie musia stať jednou. Ak sa dotkli rôznych objektov, program to môže urobiť namiesto človeka.

## Čo to umožňuje

Každá stena, dvere, podlažie, miestnosť a sada vlastností v súbore IFC má GlobalId, ktorý sa nikdy nemení. Zlúčenie hľadá objekty podľa tohto identifikátora, nie podľa čísla, ktoré mu súbor dáva (`#123`), pretože čísla sa menia, keď program ukladá. Časti pripojené k objektu, ktoré nemajú vlastný identifikátor (umiestnenia, tvary, jednotky), sa porovnávajú podľa toho, čo obsahujú.

Obe kópie musia byť rovnaká verzia IFC (2x3, 4 alebo 4.3). Zlúčenie ponechá váš súbor takým, aký je, s jeho poradím a číslami, a pridá, čo je nové, takže git diff zlúčenia ukáže iba to, čo zlúčenie zmenilo.

## Nastavenie

Git potrebuje raz na repozitár dva riadky:

```
# .gitattributes
*.ifc merge=cadcraft

# raz na každom počítači
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Bez gitu spustite `cadcraft merge <base> <ours> <theirs>`. Fossil a Mercurial prijímajú tie isté tri súbory v nastavení svojho nástroja na zlučovanie. Nič sa nenahráva; všetko beží na vašom počítači.

## Pravidlá

- Atribút zmenený iba na jednej strane sa prevezme. Rovnaká zmena na oboch stranách sa prevezme raz.
- Ten istý atribút zmenený dvoma spôsobmi (rovnaké podlažie premenované dvoma spôsobmi) je **konflikt**: vaša strana zostane a hlásenie uvedie obe. Otvorte výsledok a opravte ho ručne.
- Zoznam vecí (steny podlažia, vlastnosti sady) sa zlúči ako množina: čo pridala ktorákoľvek strana, zostane, a čo ktorákoľvek strana odstránila, sa odstráni. Dvaja ľudia, z ktorých každý pridá steny k tomu istému podlažiu, nie sú v konflikte.
- Objekt pridaný na ktorejkoľvek strane zostane aj s tvarom a vlastnosťami. Odstránený na jednej strane a nedotknutý na druhej: odstránený. Odstránený na jednej strane a zmenený na druhej: odstránený a nahlásený.
- Časová pečiatka a autor súboru a história vlastníka každého objektu zostávajú vaše.

Geometria sa zlúči celá: tvar steny pochádza z jednej strany a nikdy sa nemieša bod po bode. Komprimované súbory IFC a IFCX sa nezlučujú. Po zlúčení otvorte výsledok v programe BimCraft a pred uložením sa pozrite na panel {{ui:Problémy}}.
