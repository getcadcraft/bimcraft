---
title: Pypspesifikasies, kleppe, dempers en vervaardigers se gesinne
summary: Stel jou eie pypspesifikasies op (groottetabelle met materiaal, verbinding en ruheid), wat in die modellêer bewaar word; plaas kleppe, 'n vuilvanger en dempers op pyplope; en bring 'n vervaardiger se klep- of toerustingmodel in as 'n gesin met verbindingspoorte.
keywords: pypspesifikasie, pypspesifikasies, pypspesifikasie, pypklas, pasgemaakte pyp, groottetabel, buis, higiëniese buis, vlekvry, skedule, buitediameter, wanddikte, binnediameter, ruheid, drukgradering, csv, json, invoer, uitvoer, sigblad, standaard, bpe, din, en 10357, en 10255, klep, kleppe, vlinderklep, balanseerklep, beheerklep, vuilvanger, demper, volumedemper, brandklep, oem, vervaardiger, maker, gesin, gesinne, poorte, verbinding, step, obj, gltf, ifc, radiator, konvektor, paneelverwarmer, lughanteerder, diffusor, rooster
from: bc2f7c4e
---

## Wat jy gaan doen

Teken pyp in jou eie spesifikasie in plaas van die ingeboude staal-, koper- en plastiektabelle, plaas kleppe en dempers op die lope, en plaas 'n vervaardiger se model met poorte waaraan die pype koppel.

:::note
'n Hulpmiddel vir tekening en koördinasie. 'n Pypspesifikasie hou die getalle wat jy tik of invoer: kontroleer elke tabel teen jou projekstandaard. Ingeboude kleppe, vuilvangers en dempers is skematiese vorms wat uit die lengte van die loop bepaal is, nie 'n vervaardiger se of 'n klepstandaard se lengte nie.
:::

## Stel 'n pypspesifikasie op

1. Skakel {{ui:Teken}} aan, maak {{ui:Bou}} oop en kies {{ui:Pypspesifikasies}}. Dieselfde knoppie is op die Pyp-gereedskap se balk.
2. Kies {{ui:Nuut}}, of begin uit 'n lêer, 'n plak of 'n beginspesifikasie (hieronder).
3. Tik die naam, die standaard of verwysing wat dit volg, die materiaal en die eind- of verbindingstipe.
4. Tik een ry per grootte: die grootte se naam, die buitediameter en die wand, in millimeter. Tik die binnediameter in plaas van die wand as dit is wat jy het: die ander word ingevul. DN, drukgradering en gewig is opsioneel.
5. Opsioneel: die ruheid in millimeter (die drukverliesberekening gebruik dit), 'n isolasiedikte waarmee nuwe lope begin, die elmboogradius as 'n faktor van die buitediameter, of die spesifikasie T-stukke en reduseerstukke het, en 'n eie kleur in 3D.
6. Merk die dienste waarvan nuwe lope in hierdie spesifikasie moet begin, byvoorbeeld koue water.
7. Kies {{ui:Stoor in die model}}.

Die spesifikasies word in die modellêer gestoor. Enigiemand wat die lêer oopmaak, het hulle, en {{ui:Ontdoen}} neem 'n verandering terug.

'n Spesifikasie, of een van sy groottes, kan nie geskrap word solank 'n loop daarin geteken is nie. Die verandering van 'n grootte se getalle teken die lope in daardie grootte weer.

## Hergebruik 'n spesifikasie in 'n ander model

- {{ui:Voer .json uit}} stoor die gekose spesifikasie as 'n klein lêer; {{ui:Voer alles uit}} stoor elke spesifikasie van die model. {{ui:Voer 'n lêer in}} lees hulle weer.
- {{ui:Voer .csv uit}} stoor die groottetabel vir 'n sigblad. {{ui:Voer 'n lêer in}} lees ook 'n `.csv`.
- {{ui:Plak rye}} neem 'n tabel wat uit 'n sigblad gekopieer is. Die eerste ry noem die kolomme: `Size`, `OD` en `Wall` (of `ID`), en opsioneel `DN`, `Pressure`, `Weight`. Een ry per grootte. Getalle is millimeter tensy jy duim kies of 'n sel sy eenheid skryf (`0.065 in`).

## Beginspesifikasies

{{ui:Voeg 'n beginspesifikasie by}} voeg een van hierdie by jou model as 'n kopie wat jy kan wysig:

| Beginspesifikasie | Groottes |
|---|---|
| ASME BPE-buis | 1/4" tot 6" |
| EN 10357 reeks A-buis (DIN 11850 ry 2) | DN10 tot DN200 |
| EN 10255 staalbuis, mediumreeks | DN15 tot DN150 |
| EN 10255 staalbuis, swaarreeks | DN15 tot DN125 |

Hierdie tabelle is die buitediameters en wande wat twee of meer gepubliseerde verskafferbladsye vir die standaard druk en waarin hulle saamstem. Hulle is nie uit die standaarde self geneem nie. Groottes wat net een bladsy gegee het, is weggelaat. Elke beginspesifikasie wys sy bronbladsye en is gemerk "kontroleer teen jou projekstandaard". Geen ruheid, drukgradering of gewig word gegee nie.

## Teken 'n loop in 'n spesifikasie

1. Kies {{ui:Pyp}}. 'n Diens wat jy in 'n spesifikasie gemerk het, begin daarin. Vir enige ander loop, kies die spesifikasie in die materiaallys: spesifikasies word na die ingeboude materiale gelys as "Spesifikasie: naam".
2. Die grootte-lys bevat nou net daardie spesifikasie se groottes. Kies een en teken die loop.

Om 'n loop later in 'n spesifikasie te skuif, kies dit en verander **Materiaal** in Eienskappe. Die grootte word die spesifikasie se naaste grootte volgens buitediameter.

In die IFC-lêer dra die pyp die spesifikasie se naam, standaard, materiaal, verbinding en afmetings (`CadCraft_PipeSpec` en `Pset_PipeSegmentTypeCommon`, op die pyp en op sy tipe).

Die dimensionering- en drukverliesberekeninge lees die spesifikasie se binnediameter. As die spesifikasie 'n ruheid het, word 'n loop se wrywing daarmee bereken (Darcy-Weisbach); sonder een word die berekening se gewone verstek gebruik.

## Klep, vuilvanger en dempers

1. Kies {{ui:Klep}} en kies die soort in die balk: skuif-, bal-, vlinder-, globe-, terugslag-, balanseer- of beheerklep, of 'n vuilvanger, vir pype; 'n volumedemper of 'n brandklep vir lugkanale.
2. Klik op die loop waar dit gaan. Die loop word rondom dit gesny en albei kante bly gekoppel. Dit neem die loop se grootte aan en beweeg saam met die loop.

Eienskappe van die loop lys elkeen met {{ui:Verwyder}}; die loop sluit weer toe.

Die drukverliesberekening tel 'n passtukverlies vir skuif-, bal-, globe- en terugslagkleppe alleen. Die ander soorte, dempers en vervaardigersgesinne voeg daar geen verlies by nie: maak voorsiening daarvoor in jou eie kontrole. Hulle word in die **Passtukke en kleppe**-skedule en in die hoeveelheidsopname getel, en na IFC geskryf as kleppe, 'n filter (die vuilvanger) en dempers met twee gekoppelde poorte.

## 'n Vervaardiger se model as 'n gesin

1. Maak {{ui:Bou}} oop en kies {{ui:Gesinne}}, en dan {{ui:Voer 'n model in}}. IFC-, STEP-, OBJ-, STL-, glTF- en Biblioteek-itemlêers word gelees. Vir OBJ en STL, stel eers die lêer se eenhede en op-as.
2. Tik in die poortedialoog die naam, vervaardiger en modelnommer.
3. Kies of dit **Op 'n lope** ('n klep, vuilvanger of demper) is of **Toerusting** is, en wat dit as geskryf word.
4. Gee dit sy poorte. Elkeen het 'n naam, pyp of lugkanaal, die diens, die grootte in millimeter ('n pyp se buitediameter), die nominale grootte soos jou spesifikasie dit noem, die eindtipe, sy posisie en die rigting waarin dit wys. {{ui:Op 'n vlak}} plaas 'n poort in die middel van 'n vlak van die model se boks. Die klein boaansig wys die poorte.
5. Kies {{ui:Stoor die gesin in die model}}.

'n Gesin wat op 'n lope gaan, het presies twee poorte nodig wat van mekaar af wys, op een lyn. Kies dit in die Klep-gereedskap se lys en klik op 'n loop: dit word op sy eie lengte geplaas en die pype koppel aan sy poorte.

'n Gesin word nooit gerek nie. As sy poorte nie die loop se grootte is nie, word jy gewaarsku wanneer jy dit plaas, en {{ui:Kontroleer verbindings}} lys dit.

'n Toerustingsgesin word met {{ui:Toerusting}} geplaas, soort **Vervaardiger se gesin**. Pype en lugkanale kap vas aan sy poorte.

{{ui:Laai af as 'n Biblioteek-item}} stoor 'n gesin met sy poorte as 'n lêer wat jy by die Biblioteek kan indien.

## Radiators en konvektors

{{ui:Toerusting}} het ook **Radiator** en **Konvektor / paneelverwarmer**: generiese liggame met 'n vloei- en 'n terugvloeiverbinding vir verwarmingswater. Sien [MEP-toerusting met poorte](topic:mep-equipment).
