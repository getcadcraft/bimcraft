---
title: Merk elemente as nagegaan of veldgeverifieer
summary: 'n Element wat uit 'n PDF of 'n skandering gelees word, is ongeverifieer totdat jy dit nagaan. Merk elemente as nagegaan, of as veldgeverifieer (LOD 500) met wie dit gemeet het, wanneer en hoe, en lewer 'n as-gebou-model wat sê watter is watter.
keywords: ongeverifieer, geverifieer, nagegaan, veldgeverifieer, as gebou, as-gebou, lod 500, afsluiting, oorhandiging, op terrein gemeet, meetband, laser, skandering, opmeting, bestaande gebou, verandering, merk as nagegaan, verifikasie, fase 7
from: df35d908
---

## Wat jy sal doen

Hou by wat in die model iemand werklik nagekyk het. 'n Element het een van drie merke, of geen:

- **Ongeverifieer**: die program het dit uit 'n PDF, 'n geskandeerde tekening, 'n nagetekende tekening of 'n puntwolk-skandering herken. Niemand het dit nog nagegaan nie.
- **Nagegaan**: 'n persoon het dit vergelyk met die tekening waaruit dit gekom het.
- **Veldgeverifieer (LOD 500)**: 'n persoon het dit op terrein gemeet. Wie, wanneer en hoe word saam daarmee bewaar.
- **Geen merk**: deur 'n persoon geteken. Die model maak geen bewering daaroor nie.

## Stappe

1. Kies een element of baie (mure, deure, vensters, vertrekke, enige element).
2. Open in {{ui:Eienskappe}} die {{ui:Verifikasie}}.
3. Tik wie dit nagegaan of gemeet het. Die datum is vandag, tensy jy dit verander.
4. Klik {{ui:Merk as nagegaan}}. Vir 'n terreinmeting kies hoe dit gemeet is (meetband, laserafstandmeter, skandering, opmeting) en klik {{ui:Merk as veldgeverifieer (LOD 500)}}.
5. {{ui:Merk as nie geverifieer nie}} en {{ui:Haal die merk af}} gaan terug. Elke klik is een stap wat jy kan ontdoen, vir die hele keuse.

Om 'n keuse vinnig te merk: {{ui:Gereedskap}} › {{ui:Merk as nagegaan}} (getik: `MARKCHECKED`) merk dit as deur jou nagegaan, vandag.

## Wat jy behoort te sien

- In die plan het 'n ongeverifieerde element 'n stippelkassie en 'n "?"; 'n veldgeverifieerde een het 'n merkie. Ontmerk {{ui:Wys verifikasiemerke in die plan}} in die {{ui:Oudit}}-afdeling om hulle te versteek.
- {{ui:Skedules}} › {{ui:Verifikasie}} lys elke gemerkte element met sy vlak, toestand, wie, wanneer, hoe en waar dit vandaan kom.
- Die oudit lys ongeverifieerde elemente en tel 'n veldgeverifieerde element as LOD 500. Sien [Oudit die model](topic:audit-the-model).

## Uit 'n skandering

Wanneer jy 'n skandering met die model vergelyk, merk {{ui:Merk die ooreenstemmende elemente as veldgeverifieer}} elke element wat die skandering as gebou gesien het binne die toleransie, met die metode "scan" en die toleransie in die notas. Sien [Vergelyk 'n skandering met die model](topic:compare-scan-with-model).

:::warning
Daardie vergelyking pas elke element se boks by skanderingpunte. Dit is nie 'n opmeting nie. Gebruik dit vir elemente wat jy ook self nagekyk het.
:::

## Die as-gebou-model en die oorhandigingspakket

{{ui:Bou die oorhandigingspakket}} op die {{ui:Bates}}-oortjie sit die as-gebou-model in die zip, met:

- 'n stelling op die projek van hoeveel elemente veldgeverifieer, nagegaan, ongeverifieer en ongemerk is;
- `as-built/verified-elements.csv`: elke element en vertrek met sy toestand, wie, wanneer en hoe;
- `as-built/as-built-drawings.pdf`: die tekenstel soos dit nou is;
- die tekening-wysigingslys, wanneer die model uitgereikte stelle het.

Sien [Bates en onderhoud](topic:assets-and-maintenance).

## Hoe dit in die IFC bewaar word

Elke gemerkte element dra die eienskapstel `CadCraft_Verification`: State, By, On, Method, Source, Note, en LevelOfDevelopment (`LOD 500` terwyl dit veldgeverifieer is). Hulle is gewone teks-eienskappe, sodat ander programme hulle kan lys, en Vind, Kleur volgens eienskap en merkerskedules hulle kan gebruik. Die as-gebou-stelling is die eienskapstel `CadCraft_AsBuilt` op die projek. 'n Element sonder die stel is nie op terrein gemeet nie.

## Volgende

- [Mure uit 'n stel planne](topic:walls-from-plans)
- [Oudit die model](topic:audit-the-model)
