---
title: Bashko redaktimet e dy personave mbi një model
summary: Lër git, Fossil ose Mercurial të bashkojnë dy kopje të redaktuara të të njëjtit model IFC objekt pas objekti, që dy persona të vizatojnë mbi një ndërtesë të vetme dhe të bashkojnë punën.
keywords: bashkim, git, fossil, mercurial, kontroll versionesh, konflikt, tre-anësh, cadcraft merge, gitattributes, ifc, globalid, ekip, dy kopje, degë
from: 50733df8
---

Dy persona marrin një kopje të së njëjtës ndërtesë; njëri vizaton krahun lindor dhe tjetri atë perëndimor, dhe më vonë kopjet duhet të bëhen një. Nëse kanë prekur objekte të ndryshme, një program mund ta bëjë këtë në vend të një personi.

## Çfarë e bën të funksionojë

Çdo mur, derë, nivel, dhomë dhe grup vetish në një skedar IFC ka një GlobalId që nuk ndryshon kurrë. Bashkimi kërkon objektet sipas këtij id-je, jo sipas numrit që u jep skedari (`#123`), sepse numrat ndryshojnë kur një program ruan. Pjesët që varen nga një objekt dhe nuk kanë id të tyren (vendosjet, format, njësitë) krahasohen sipas asaj që përmbajnë.

Të dy kopjet duhet të jenë e njëjta version IFC (2x3, 4 ose 4.3). Bashkimi e mban skedarin tënd siç është, me renditjen dhe numrat e tij, dhe shton atë që është e re, kështu që një git diff i bashkimit shfaq vetëm atë që ndryshoi bashkimi.

## Konfiguroje

Git ka nevojë për dy rreshta një herë për çdo depo:

```
# .gitattributes
*.ifc merge=cadcraft

# një herë, në çdo kompjuter
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Pa git, ekzekuto `cadcraft merge <base> <ours> <theirs>`. Fossil dhe Mercurial marrin të njëjtat tre skedarë te cilësimi i vet i veglës së bashkimit. Asgjë nuk ngarkohet; gjithçka ekzekutohet në kompjuterin tënd.

## Rregullat

- Një atribut i ndryshuar vetëm në njërën anë merret. I njëjti ndryshim në të dyja anët merret një herë.
- I njëjti atribut i ndryshuar në dy mënyra (i njëjti nivel i riemërtuar në dy mënyra) është një **konflikt**: ana jote mbetet dhe raporti i liston të dyja. Hap rezultatin dhe korrigjoje me dorë.
- Një listë sendesh (muret e një niveli, vetitë e një grupi) bashkohet si grup: ajo që shtoi cilado anë mbahet dhe ajo që hoqi cilado anë hiqet. Dy persona që shtojnë secili mure në të njëjtin nivel nuk bien në konflikt.
- Një objekt i shtuar në cilëndo anë mbahet, me formën dhe vetitë e tij. I hequr në një anë dhe i paprekur në tjetrën: hiqet. I hequr në një anë dhe i ndryshuar në tjetrën: hiqet, dhe raportohet.
- Vulën kohore dhe autorin e skedarit, si dhe historinë e pronarit të çdo objekti, i mban ti.

Gjeometria bashkohet e tërë: forma e një muri vjen nga njëra anë, kurrë e përzier pikë për pikë. Skedarët IFC dhe IFCX të ngjeshur (zip) nuk bashkohen. Pas një bashkimi, hap rezultatin në BimCraft dhe shiko panelin e Problemeve para se ta ruash.
