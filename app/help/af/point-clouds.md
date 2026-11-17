---
title: Wys 'n puntwolk langs die model
summary: Maak 'n laserskandering (LAS, LAZ, E57, PLY, PCD, PTX, PTS of XYZ) in die 3D-aansig op sy eie of saam met 'n IFC-model oop, kleur dit, sny 'n dun snit daardeur, meet na sy punte, en gee dit aan die tekenprogram om as-gebou-lyne na te trek.
keywords: puntwolk, laserskandering, skandering, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-gebou, as built, opmeting, registrasie, snit, plansnit, vasvang, meet, naspoor, skandering na bim
from: d0a3e740
---

## Wat jy gaan doen

Kyk na 'n laserskandering van 'n gebou langs sy model: kontroleer dat wat gebou is by die ontwerp pas, meet tussen geskandeerde punte, en sny 'n dun snit om mure, deure en kolomme uit te lees.

## Stappe

1. Maak die wolk oop: {{ui:Oop}} 'n `.las`-, `.laz`-, `.e57`-, `.ply`-, `.pcd`-, `.ptx`-, `.pts`- of `.xyz`-lêer, of laat dit op die bladsy val (sien die onderwerp oor puntwolkformate vir wat elkeen bring, en wat om uit 'n skanderer se eie sagteware uit te voer). Met 'n model oop, voeg die wolk by die model in die 3D-aansig; om 'n wolk oop te maak, sluit jy nooit die model of sy ongestoorde veranderinge nie. Sonder 'n model maak die wolk op sy eie oop.
2. Die wolkbalk verskyn onder die nutsbalk. Dit sê hoeveel punte wys en hoeveel die lêer het.
3. Kies {{ui:Kleur volgens}}: die lêer se eie kleure (wanneer die skanderer dit gestoor het), {{ui:Hoogte}}, {{ui:Intensiteit}}, {{ui:Klas}} (LiDAR-klasse soos grond, plantegroei en gebou) of {{ui:Een kleur}}. {{ui:Grootte}} maak die punte groter of kleiner.
4. Klik {{ui:Plan}} onder {{ui:Snit}} om net 'n dun band 1.2 m bo die laagste punt te hou, van bo gesien: mure, deuropeninge en kolomme lees soos 'n vloerplan. {{ui:Voor}} en {{ui:Syaansig}} sny regop bande vir aansigte en snitte. Skuif die band met {{ui:Op}}, en verander {{ui:Dikte}} (meter). {{ui:Af}} wys die hele wolk weer.
5. Klik {{ui:Meet}} in die nutsbalk. Die aanwyser vaslok op die wolk se punte (die etiket sê "puntwolk"), sodat jy van muur tot muur in die snit kan meet, of van 'n modelelement na die skandering. 'n Modelhoek of -rand binne bereik wen steeds.
6. Met {{ui:Meet}} › {{ui:Ligging}} gee 'n wolkpunt sy breedtegraad en lengtegraad uit die wolk se eie koördinaatstelsel, wanneer die lêer een noem.
7. {{ui:Verberg}} verberg die wolk vir 'n oomblik; {{ui:Verwyder}} haal dit uit. {{ui:Wys}} › {{ui:Puntwolk}} verberg of wys die balk.

## Waar die wolk heen gaan

{{ui:Plaas}} in die balk sê hoe die wolk met die model in lyn is:

- **Modelkoördinate**: die wolk se getalle is die model s'n eie ('n skandering wat na die ontwerp se koördinate geregistreer is).
- **Kaartkoördinate**: die model het 'n kaartomskakeling (IfcMapConversion) en die wolk is in dieselfde geprojekteerde stelsel: die wolk word daardeur geplaas. As die twee verskillende stelsels noem, sê die statuslyn dit.
- **Gesentreer op die model**: wanneer nie een van die twee die wolk naby die model plaas nie, gaan sy middel op die model se middel en sy laagste punt op die model se vloer. Kies 'n ander keuse om dit te oorskry.

As die lêer nie sy eenhede sê nie, lees BimCraft meter en bied {{ui:Eenhede}} in die balk aan.

## Trek die as-gebou-lyne na

Klik {{ui:Natrek in CadCraft}} om die wolk in 'n nuwe oortjie aan die tekenprogram te gee. Dit maak daar oop onder die tekening, waar 'n plansnit en voorwerpvangs jou toelaat om die mure oor die skandering te teken. Sien die CadCraft-onderwerp oor puntwolke.

## Hoeveel punte

'n Skandering kan honderde miljoene punte hou. BimCraft lees elke punt een keer en hou 'n gelyke aandeel daarvan om te teken: {{ui:Wys}} in die balk stel hoeveel (1, 2, 5 of 10 miljoen). Meer punte benodig meer geheue en 'n vinniger grafiekkaart. Tellings per LiDAR-klas is van elke punt in die lêer.

:::note
Lêers word op hierdie rekenaar gelees; niks word opgelaai nie. LAS 1.0–1.4 en LAZ word gelees (LAZ-lêers tot 1 GB, in geheue gehou terwyl hulle gelees word); E57-lêers tot 6 miljoen punte en 512 MB vir nou (groter skanderings: voer LAS of LAZ uit); PLY, PCD en PTX volledig; tekswolke is `x y z`, met kleur (`r g b`) en intensiteitskolomme wanneer hulle daar is.
:::

## Verskeie skanderings

Skanderings wat van verskillende posisies geneem is, kan in een raamwerk geregistreer, met ICP verfyn, en as een LAS of E57 uitgevoer word: sien [Registreer verskeie skanderings tot een](topic:register-scans).
