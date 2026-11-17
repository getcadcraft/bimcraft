---
title: Pype en lugkanale
summary: Teken pyp- en lugkanaallope op die plan volgens hul middellyne; die elmboë, T-stukke, reduseerstukke en oorgange word vir jou gemaak, die lope behoort aan stelsels met verbonde poorte in die IFC-lêer, en hulle verskyn in planne, skedules en die hoeveelheidsopname.
keywords: pyp, pype, pypwerk, loodgieterswerk, lugkanaal, lugkanale, lugkanaalwerk, hvac, mep, meganies, elmboog, T-stuk, reduseerstuk, oorgang, passtuk, passtukke, klep, kleppe, hekklep, balklep, globe-klep, terugslagklep, stygpyp, helling, afvoer, sanitêr, storm, ontlugting, koue water, warm water, verhitting, gas, brandbeskerming, toevoerlug, terugvoerlug, uitlaatlug, buitelug, stelsel, stelsels, poort, poorte, verbinder, verbinders, toestel, toestelle, loodgieterstoestel, wasbak, stortbak, waterkloset, vanbak, kombuisbak, wastub, toestel-eenhede, UHC, DFU, afvoere bepaal, afvoergrootte, hoofafvoer, aftakking, riool, hoofriool, lugvloei, cfm, wrywing, gelyke wrywing, dimensionering, skedule, hoeveelheidsopname, NBR, NBR 5648, NBR 5688, NBR 8160, PVC (oplosmiddellasbaar), DN
from: 85140bc5
---

## Wat jy gaan doen

Teken die pyp en lugkanale van 'n gebou soos jy mure teken: klik op die hoeke van 'n loop se middellyn op die hoogte wat jy stel. BimCraft maak die passtukke, plaas elke deel in sy stelsel en koppel hulle, sodat ander programme die loop as een verbonde stelsel lees.

## Teken 'n pyp

1. Skakel {{ui:Teken}} aan, maak {{ui:Bou}} oop en kies {{ui:Pyp}}.
2. Kies in die balk die **stelsel** (koue water, warm water, sanitêre afvoer, gas…). Dit stel 'n gewone materiaal: koper vir water, PVC vir afvoere en ontlugting, staal vir verhitting, verkoelde water, gas en brandbeskerming. Verander die **materiaal**, **klas** en **grootte** as jy nodig het. Groottes en wande kom uit openbare standaarde: staalpyp ASME B36.10M, koperbuis ASTM B88, PVC ASTM D1785 en PEX ASTM F876. Brasiliaanse projekte kan **PVC-waterpyp (NBR 5648)** gebruik, die oplosmiddellasbare PVC vir koue water, en **PVC-afvoerpyp (NBR 5688)**, reeks normaal of versterk, vir afvoere en ontlugting: hul groottes word volgens DN benoem (DN 25, DN 100). Sodra jy een van hulle kies, hou die keuse van 'n ander stelsel by die Brasiliaanse pype (PVC-afvoerpyp vir 'n sanitêre afvoer ná PVC-waterpyp).
3. Stel **By**: die hoogte van die pyp se middellyn bo die vlak.
4. Klik waar die pyp begin, dan op elke hoek. Dubbelklik, of druk {{key:Enter}}, by die laaste punt. {{key:Backspace}} neem die laaste hoek terug; {{key:Esc}} laat die loop vaar.

Die pyp kap vas soos mure, en aan ander lope: begin op 'n pyp se einde om daarvandaan voort te gaan, of eindig op 'n pyp se lyn om daarvan af te takk. 'n Nuwe loop neem die hoogte van die pyp waaraan dit vaskap.

'n Loop wat by 'n toerustingstuk se poort begin of eindig, neem sy grootte en stelsel aan en bly daaraan vas: sien [MEP-toerusting met poorte](topic:mep-equipment) en [Koppel pype en lugkanale aan toerusting](topic:mep-connections).

## Stel die projek se loodgieterstandaard

Die eerste lys in die pypbalk is die model se **loodgieterstandaard**: **VSA (IPC, duim)** of **Brasilië (ABNT, DN)**. Dit word in die model gestoor, sodat almal wat die lêer oopmaak, lope op dieselfde manier begin. Onder **VSA** begin 'n nuwe loop in koper (water) of PVC Skedule 40 (afvoere), in duim, met die helling van die International Plumbing Code. Onder **Brasilië** begin koue water as PVC (oplosmiddellasbaar) DN 25, sanitêre en storm-afvoere en ontlugtings as PVC-riool DN 100 met die helling van NBR 8160, en warm water in koper. Dit geld ook vir 'n loop wat op 'n toestel se verbinder of 'n toerustingpoort begin. Pype wat reeds geteken is, hou hul materiaal en hul eie tabelle; die materiaallys bly oop, so jy kan steeds een Brasiliaanse loop in 'n VSA-model opsetlik teken. 'n Lêer sonder keuse gedra hom soos voorheen: 'n nuwe loop volg die materiaal wat in gebruik is.

## Teken 'n lugkanaal

1. Kies {{ui:Lugkanaal}}. Kies die stelsel (toevoer, terugvoer, uitlaat of buitelug) en die vorm: rond, reghoekig of plat ovaal.
2. Tik die breedte en hoogte ('n ronde lugkanaal se breedte is sy middellyn), en **By** vir die middellyn se hoogte.
3. Om dit volgens die lugvloei te dimensioneer, tik die **Lugvloei** en die **Wrywing**-tempo en klik {{ui:Bepaal grootte}}. Die lugkanaal word volgens gelyke wrywing gedimensioneer, die metode in die lugkanaal-ontwerphoofstuk van die ASHRAE Handbook, en opgerond na 'n voorraadgrootte, sodat die wrywing op of onder die tempo kom wat jy getik het. Sonder 'n getikte tempo gebruik dit 0,08 in. water per 100 ft (0,8 Pa/m). 'n Reghoekige lugkanaal behou die hoogte wat jy getik het en kry 'n breedte; BimCraft sê so wanneer sy sye meer as 4 tot 1 is.
4. Klik die hoeke soos vir 'n pyp.

## Loodgieterstoestelle

{{ui:Bou}} › {{ui:Plaas familie}} bied vyf toestelle om mee te begin, elk met 'n afvoer en 'n koue-water-verbinder: 'n **Waterkloset**, 'n **Vanbak**, 'n **Kombuisbak**, 'n **Stortbak** en 'n **Wastub**. Hul voorkant wys na jou toe wanneer jy hulle plaas, en hul agterkant staan teen die muur. Hul afvoere is by die kleinste toestelafvoer van NBR 8160 (DN 100 vir die waterkloset, DN 50 vir die kombuisbak, DN 40 vir die ander); water is DN 20. Verander hul groottes, of wysig hulle, soos enige gesin: sien [Gesinne en hul groottes](topic:families).

'n Gesin sê watter toestel dit is onder {{ui:Loodgieterstoestel}} op die {{ui:Verbindings}}-oortjie van die gesinredigeerder. Sy afvoer word dan in toestel-eenhede getel: 6 UHC vir 'n waterkloset, 1 vir 'n vanbak, 3 vir 'n kombuisbak of 'n wastub, 2 vir 'n stortbak (NBR 8160), of die afvoertoestel-eenhede van IPC Tabel 709.1.

## Vanaf 'n toestel se verbinder

Elemente wat met verbinders uit 'n gesin geplaas word ('n bak se afvoer en kraan, 'n lugterminaal se hals: sien [Wysig 'n gesin](topic:family-editor)) wys hul vrye verbinders as punte terwyl {{ui:Pyp}} of {{ui:Lugkanaal}} aan is, en die aanwyser kap daarop vas.

- **Begin op 'n verbinder**: die loop neem sy stelsel en grootte aan (die pyp van die balk se materiaal by of net bo die verbinder se grootte; 'n ronde lugkanaal van sy middellyn). Wanneer die verbinder af of op wys, soos 'n afvoer onder 'n bak, gaan die loop eers reguit af of op na die hoogte in **By**, en dan voort volgens jou klikke.
- **Eindig op 'n verbinder**: die loop gaan af of op daarheen en eindig daar.

Die loop is in die IFC-lêer aan die element gekoppel, sodat ander programme die toestel as deel van sy stelsel sien. 'n Element wat later geplaas word met 'n verbinder aan die einde van 'n loop, is ook daaraan gekoppel. 'n Loop wat weg van 'n verbinder beweeg word, is nie meer daaraan gekoppel nie.

## Die passtukke, vir jou gemaak

| Waar | Wat BimCraft maak |
|---|---|
| 'n Loop draai | 'n Elmboog. Staalpyp by die lang radius van ASME B16.9 (1,5 × die grootte), ander pyp by een buitediameter, ronde lugkanaal by 1,5 middellyne, reghoekige lugkanaal by een breedte (of een hoogte vir 'n draai op of af) |
| 'n Loop eindig op 'n ander loop se lyn | 'n T-stuk; die ander loop word daar gesplits |
| Twee lope ontmoet punt-tot-punt op verskillende groottes | 'n Reduseerstuk (pype) of 'n oorgang (lugkanale) |
| Twee lope van een grootte ontmoet punt-tot-punt in 'n hoek | 'n Elmboog |

Wanneer jy 'n loop verander, skuif of skrap, word elke passtuk op daardie vlak weer gemaak. As 'n been te kort is vir die passtukke aan sy punte, sê BimCraft so en verander niks nie: skuif die hoek verder weg.

:::note
Die passtukke en kleppe is generies: getrek uit die pyp- of lugkanaalgrootte, nie uit 'n vervaardiger se katalogus nie. Steekkoppel-, drukkoppel- en gegroefde passtukke, klepliggame en toerusting het vervaardigers se eie groottes; kontroleer dit by jou verskaffer voordat jy bestel.
:::

## Stygpype

Tik terwyl jy teken 'n nuwe hoogte in **By** en druk {{key:Enter}}: die loop gaan reguit op of af by die laaste hoek, met 'n elmboog aan elke punt. 'n Stygpyp kan opgaan in die vlak daarbo. Elke vlak wys die dele van 'n loop wat sy aansigreeks bereik, met **UP** of **DN** by die stygpyp.

## Afvoere en hul helling

Sanitêre en storm-afvoere begin by die kleinste helling wat die International Plumbing Code vir hul grootte toelaat: 1/4 duim per voet tot 2-1/2 duim, 1/8 duim per voet vanaf 3 tot 6 duim, 1/16 duim per voet vanaf 8 duim. Brasiliaanse PVC-afvoerpyp begin by die helling van NBR 8160: 2 % tot DN 75, 1 % vanaf DN 100. Tik 'n ander helling in die balk of in Eienskappe: `1/4"/ft`, `2 %` of `1:50`. Die loop val vanaf sy eerste punt, so teken afvoere in die rigting waarin hulle vloei. Die plan wys die val en 'n pyl. Eienskappe waarsku wanneer 'n afvoer platter is as die kode se minimum.

## Dimensioneer die afvoere volgens toestel-eenhede

Kies 'n sanitêre afvoer: **Toestel-eenhede** in Eienskappe sê hoeveel dit dra en die kleinste grootte wat hulle nodig het. Elke loodgieterstoestel wie se afvoerverbinder op die loop is, tel mee, en so ook elke afvoer wat daarin vloei: teken afvoere in die rigting waarin hulle vloei, elkeen eindig op die afvoer waarin dit vloei.

- Afvoere in Brasiliaanse PVC-afvoerpyp tel **UHC** en volg NBR 8160; die ander tel **DFU** en volg die International Plumbing Code.
- **Afvoer**: 'n **Aftakking** word volgens die kode se tabel vir toestelaftakkings gedimensioneer; 'n **Hoofafvoer** volgens sy tabel volgens helling, so sy **Helling** maak saak.
- 'n Afvoer is nooit kleiner as die toestelafvoere wat dit bedien nie ('n waterkloset benodig DN 100, of 3 duim), of as 'n afvoer wat daarin vloei nie. Onder NBR 8160 is 'n hoofafvoer ten minste DN 100.

{{ui:Bepaal die grootte van die afvoere}} maak elke sanitêre afvoer van die model wat te klein is vir sy toestel-eenhede die grootte wat dit nodig het, as een stap wat jy kan ontdoen. 'n Afvoer wat groter as nodig geteken is, word gelaat soos dit is. Wanneer 'n afvoer meer dra as wat die grootste grootte van sy pyp by sy helling kan, sê BimCraft so: gee dit 'n steiler helling of 'n ander pyp.

:::note
Die tabelle is dié van horisontale afvoere. Stapelpype, ontlugtings en storm-afvoere word hier nie gedimensioneer nie: kontroleer hulle, en die hele ontwerp, teen die kode wat op die projek van toepassing is.
:::

## Kleppe

1. Kies {{ui:Klep}} en die soort: skuif, bal, globe of terugslag.
2. Klik op 'n pyp waar dit gaan. Die pyp word rondom gesny en die klep word aan albei kante gekoppel.

Eienskappe van die loop lys sy kleppe, elk met {{ui:Verwyder}}.

Meer klepsoorte, 'n vuilvanger, dempers op lugkanale, jou eie pypspesifikasies en vervaardigersgesinne: sien [Pypspesifikasies, kleppe, dempers en vervaardigersgesinne](topic:pipe-specs).

## Verander 'n loop

Kies enige deel van 'n loop, in die plan of die 3D-aansig. In Eienskappe:

- **Stelsel**, **Materiaal**, **Klas** en **Grootte** (pype), of **Vorm**, **Breedte**, **Hoogte** (lugkanale).
- **Hoogte bo die vlak** skuif die hele loop op of af.
- **Isolasie**: die dikte daarvan, behou vir die duidelikheidskontrole en die openingslys (niks word daarvoor geteken nie): sien [Kontroleer pype en lugkanale teen die struktuur](topic:mep-against-structure).
- Staalpyp: **Sny in spoele**: sien [Staalpyp-spoele en spoelblaaie](topic:pipe-spools).
- **Helling** (pype).
- **Vloei** met {{ui:Bepaal grootte}}: vir water, die kleinste grootte wat die water by 8 ft/s (2,4 m/s) hou, of 5 ft/s (1,5 m/s) vir warm water; by 3 m/s vir die Brasiliaanse PVC-waterpyp (NBR 5626). Vir lugkanale, die snelheid en wrywingstempo van die lugkanaal soos geteken. Sanitêre afvoere word eerder volgens hul toestel-eenhede gedimensioneer: sien **Dimensioneer die afvoere volgens toestel-eenhede** hierbo.

Elke verandering is een stap van {{ui:Ontdoen}}. {{key:Delete}} verwyder die hele loop.

## Planne

- Pype kleiner as 150 mm (ongeveer 6 duim) word as een lyn op hul middellyn geteken, groter pype en alle lugkanale as twee lyne op hul breedte.
- Elke stelsel het sy eie kleur; die plan-PDF druk hulle in swart.
- Elke loop word benoem met sy grootte en stelsel (byvoorbeeld `2" CW` of `16×10 SA`).
- 'n Plan se aansigreeks bepaal watter lope hy wys, en {{ui:Getoon in hierdie plan}} kan **Pype** of **Lugkanale** weglaat: sien [Aansigte, aansigreekse en jou eie blaaie](topic:views-and-sheets).

## Skedules en die hoeveelheidsopname

Die {{ui:Skedules}}-paneel voeg **Pype** (volgens stelsel, materiaal en grootte, met hul lengtes), **Lugkanale** (volgens stelsel, vorm en grootte, met lengtes en die buitenoppervlakte) en **Passtukke en kleppe** (volgens soort en grootte, getel) by. Klik op 'n ry om te kies wat dit lys; {{ui:Laai CSV af}} laai dit af.

{{ui:Hoeveelheidsopname}} neem die lope na TakeoffCraft: pyp en lugkanaal volgens grootte as lope wat op die plan geteken is (helling-afvoere word langs hul helling gemeet), passtukke en kleppe getel waar hulle is: sien [Stuur die model se hoeveelhede na TakeoffCraft](topic:takeoff). Stygpype word uit daardie blad gelaat, omdat 'n plan hulle nie kan meet nie; die Pype-skedule het hul lengte.

## In die IFC-lêer

Elke loop is 'n samestelling wat sy dele hou: pyp- en lugkanaalsegmente, passtukke en kleppe, elk met sy tipe, materiaal, 'n kleur vir sy stelsel en sy poorte. Rakende poorte is gekoppel, en elke deel behoort aan sy verspreidingstelsel (IFC2X3-lêers kry dieselfde as vloeisegmente, passtukke en beheerders in 'n stelsel). Ander programme wat IFC-stelsels lees, sien een verbonde loop per stelsel. Die loop se eie definisie word saam met hom gehou, sodat BimCraft hom op dieselfde manier weer maak wanneer jy hom verander.
