---
title: Slå sammen to personers endringer i én modell
summary: La git, Fossil eller Mercurial slå sammen to redigerte kopier av samme IFC-modell objekt for objekt, slik at to personer kan tegne på samme bygning og samle arbeidet.
keywords: sammenslåing, merge, git, fossil, mercurial, versjonskontroll, konflikt, tre-veis, cadcraft merge, gitattributes, ifc, globalid, team, to kopier, grener
from: 50733df8
---

To personer tar en kopi av samme bygning, den ene tegner østfløyen og den andre vestfløyen, og senere må kopiene bli én. Hvis de rørte ved forskjellige objekter, kan et program gjøre det i stedet for en person.

## Hva som gjør det mulig

Hver vegg, dør, etasje, rom og egenskapssett i en IFC-fil har en GlobalId som aldri endres. Sammenslåingen finner objekter via den id-en, ikke via tallet filen gir dem (`#123`), fordi tallene endres når et program lagrer. Delene som henger på et objekt og ikke har egen id (plasseringer, former, enheter), sammenlignes etter innholdet.

Begge kopiene må være samme IFC-versjon (2x3, 4 eller 4.3). Sammenslåingen beholder filen din slik den er, med sin rekkefølge og sine tall, og legger til det som er nytt, så en git-diff av sammenslåingen viser bare det sammenslåingen endret.

## Sett det opp

Git trenger to linjer, én gang per depot:

```
# .gitattributes
*.ifc merge=cadcraft

# én gang, på hver maskin
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uten git kjører du `cadcraft merge <base> <ours> <theirs>`. Fossil og Mercurial tar de samme tre filene i sin egen innstilling for sammenslåingsverktøy. Ingenting lastes opp; alt kjører på datamaskinen din.

## Reglene

- En egenskap som er endret på bare én side, tas med. Den samme endringen på begge sider tas med én gang.
- Den samme egenskapen endret på to måter (samme etasje gitt to navn) er en **konflikt**: din side beholdes og rapporten lister begge. Åpne resultatet og rett det for hånd.
- En liste over ting (veggene i en etasje, egenskapene i et sett) slås sammen som et sett: det både sidene har lagt til, beholdes, og det som begge sider har fjernet, fjernes. To personer som hver legger til vegger i samme etasje, får ingen konflikt.
- Et objekt lagt til på en av sidene beholdes med sin form og sine egenskaper. Fjernet på den ene siden og urørt på den andre: fjernet. Fjernet på den ene siden og endret på den andre: fjernet, og rapportert.
- Filens tidsstempel og forfatter, og hvert objekts eierhistorikk, forblir dine.

Geometri slås sammen som helhet: en veggs form kommer fra én side, aldri blandet punkt for punkt. Zippede IFC- og IFCX-filer slås ikke sammen. Etter en sammenslåing åpner du resultatet i BimCraft og ser på Problemer-panelet før du lagrer.
