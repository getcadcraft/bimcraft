---
title: Flet to personers rettelser af én model
summary: Lad git, Fossil eller Mercurial flette to redigerede kopier af den samme IFC-model objekt for objekt, så to personer kan tegne på samme bygning og samle arbejdet.
keywords: flet, merge, git, fossil, mercurial, versionskontrol, konflikt, tre-vejs, cadcraft merge, gitattributes, ifc, globalid, team, to kopier, grene
from: 50733df8
---

To personer tager en kopi af den samme bygning, den ene tegner østfløjen og den anden vestfløjen, og senere skal kopierne blive til én. Har de rørt ved forskellige objekter, kan et program gøre det i stedet for en person.

## Hvad der gør det muligt

Hver væg, dør, niveau, rum og egenskabssæt i en IFC-fil har et GlobalId, der aldrig ændrer sig. Flettningen slår objekter op via dette id og ikke via det nummer, filen giver dem (`#123`), fordi numrene ændrer sig, når et program gemmer. De dele, der hænger på et objekt, og som ikke har et id af egen (placeringer, former, enheder), sammenlignes ud fra deres indhold.

Begge kopier skal være samme IFC-version (2x3, 4 eller 4.3). Flettningen bevarer din fil, som den er, med sin rækkefølge og sine numre, og tilføjer det, der er nyt, så en git diff af flettningen kun viser det, flettningen ændrede.

## Opsæt den

Git har brug for to linjer én gang pr. repository:

```
# .gitattributes
*.ifc merge=cadcraft

# én gang, på hver computer
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Uden git kører du `cadcraft merge <base> <ours> <theirs>`. Fossil og Mercurial tager de samme tre filer i deres egen indstilling for flette-værktøj. Intet uploades; alt kører på din computer.

## Reglerne

- En attribut, der kun er ændret på den ene side, tages med. Den samme ændring på begge sider tages med én gang.
- Den samme attribut ændret på to måder (det samme niveau omdøbt på to måder) er en **konflikt**: din side bliver, og rapporten lister begge. Åbn resultatet og ret det manuelt.
- En liste over ting (væggene på et niveau, egenskaberne i et sæt) flettes som et sæt: det, en af siderne tilføjede, beholdes, og det, en af siderne fjernede, fjernes. To personer, der hver tilføjer vægge til samme niveau, giver ikke en konflikt.
- Et objekt tilføjet på en af siderne beholdes med sin form og sine egenskaber. Fjernet på den ene side og urørt på den anden: fjernet. Fjernet på den ene side og ændret på den anden: fjernet og rapporteret.
- Filens tidsstempel og forfatter samt hvert objekts ejerhistorik bliver din.

Geometri flettes som helhed: en væggens form kommer fra den ene side og blandes aldrig punkt for punkt. Zippede IFC- og IFCX-filer flettes ikke. Efter en flettning åbner du resultatet i BimCraft og kigger på panelet Problemer, før du gemmer.
