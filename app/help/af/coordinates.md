---
title: Koördinate in BimCraft
summary: Waar jy werk: die wyser se posisie in die plan en die 3D-aansig, die vlak waarop jy is, die projekoorsprong en die terrein se opmetingspunt.
keywords: koördinate, waar is ek, posisie, wyser, aflesing, x y z, vlak, verdieping, projekoorsprong, oorsprong, basispunt, opmetingspunt, terrein, kaartkoördinate, ooswaardes, noordwaardes, georeferensie, eenhede, ligging
from: 84df5245
---

## Wat jy sal doen

Sien in 'n oogopslag waar jy in 'n model is: op watter vlak jy teken, hoe ver die wyser van die projekoorsprong af is, en waar die terrein se opmetingspunt is.

## Waar die getalle wys

- **Oor die 3D-aansig** (onder regs, langs die aansigkubus): beweeg die wyser oor die model. Die blokkie wys die vlak waarop die punt is en hoe hoog dit bo daardie vlak se vloer is, daarna sy **X, Y en Z**. Oor leë ruimte lees dit die punt op die vloer van die laagste vlak.
- **Op die plan** (onder regs, terwyl {{ui:Teken}} aan is): die vlak wat die plan wys en die hoogte van sy vloer, en die wyser se **X en Y** terwyl dit oor die plan is.
- Wanneer die lêer 'n kaartomskakeling het (dit is met kaartkoördinate uitgevoer), voeg albei blokkies die **ooswaardes en noordwaardes** op die kaartrooster by, in die {{ui:Eenhede}} wat jy gekies het (altyd met die eenheid langs hulle geskryf; voet en duim wys as desimale voet). 'n Tekening (DWG of DXF) hou sy eie eenhede: sy wyseraflesing noem hulle, en dit word nooit omgeskakel nie.

Elke X, Y en Z word gemeet vanaf die **projekoorsprong**, in die {{ui:Eenhede}} wat op die nutsbalk gekies is (voet en duim, duim, desimale voet, millimeter, sentimeter of meter). Positiewe Y wys na die model se noorde, wat nie altyd ware noord is nie. Kaart-ooswaardes en noordwaardes volg dieselfde keuse (voet en duim wys as desimale voet). Wanneer die kaartstelsel se eie eenheid anders is as die een wat jy gekies het, word dit ná die getalle in hakies genoem, byvoorbeeld *(US survey feet)*, sodat 'n landmeter kan sien waarin die stelsel self geskryf is.

## Die twee merkers

- **Projekoorsprong** ('n rooi sirkel met 'n kruis): die punt 0, 0, 0 waarvandaan elke koördinaat in die model gemeet word.
- **Opmetingspunt** ('n blou sirkel met 'n driehoek): die terrein se verwysingspunt, die punt waarvoor sy breedtegraad, lengtegraad en hoogte, of sy kaartkoördinate, gegee word. Wys in die 3D-aansig daarna om te lees waar dit is.

Wanneer die terrein op die projekoorsprong sit, soos in 'n nuwe gebou wat hier geteken is, wys een merker albei. Klik die kruisknoppie in enige blokkie om die merkers te verberg of te wys. BimCraft onthou jou keuse in hierdie blaaier.

## Wat jy behoort te sien

- Die getalle verander soos die wyser beweeg, en die plan se blokkie noem die vlak wat jy in die vlaklys gekies het.
- Die merkers bly staan terwyl jy wentel, pan en zoem.

:::tip
Om 'n punt se breedtegraad en lengtegraad te lees, gebruik {{ui:Meet}} › {{ui:Ligging}}: sien [Meet afstande, oppervlakke en liggings in 3D](topic:measure).
:::

:::touch
Op 'n aanraakskerm wys die 3D-blokkie niks totdat jy 'n muis of pen gebruik nie: 'n vinger beweeg die aansig in plaas daarvan.
:::
