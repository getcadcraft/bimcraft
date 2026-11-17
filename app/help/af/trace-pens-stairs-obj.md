---
title: Spoor 'n vlak, stel penne per aansig, skets 'n trap, open 'n OBJ
summary: Wys 'n ander vlak gestippel onder die plan en lyn dit op, gee mure, deure en vensters elk hul eie pen in een aansig, teken 'n loopleiding om 'n trap te kry, en open 'n Wavefront OBJ-netwerk.
keywords: spoorverwysing, spook, onderlaag, pen, lynwydte, lyntipe, oorskrywing, trap, skets, landing, OBJ, netwerk, invoer, Wavefront
from: 333ebbde
---

## Spoor 'n vlak

Kies {{ui:Spoor}} in die {{ui:Bou}}-kieslys, en dan 'n aansig in die lys: 'n ander vlak se plan, 'n vlak se plafonplan of 'n uitroep (gesny na sy snit). Sy mure, kolomme en vloere wys gestippel onder die plan wat jy teken. Skuif dit deur 'n basispunt op die verwysing te klik en dan waar daardie punt moet wees, of tik X, Y en 'n hoek (dit draai om sy eie middelpunt). {{ui:Herstel}} plaas dit terug, {{ui:Verberg}} verwyder dit. Dit is net 'n verwysing: niks kies dit nie, dit word nie gedruk nie en dit word nie in die IFC gestoor nie. BimCraft onthou dit vir elke vlak in hierdie blaaier.

## Penne per aansig

Kies {{ui:Penne}}. Sê waarvoor die pen is: alle mure, alle deure, alle vensters, die tipe van die gekose element, of die gekose elemente. Kies 'n wydte, 'n lyn (vol, gestippel, kolletjies) en 'n kleur, en dan {{ui:Pas toe}}. Die verandering geld net vir hierdie vlak se plan. 'n Keuse wen van 'n tipe, en 'n tipe wen van 'n hele kategorie. {{ui:Maak alles leeg}} verwyder hulle. Hulle word in hierdie blaaier behou. Merk **Penkleure in 3D** om die kleurpenne op die model in die 3D-aansig te verf ('n wydte of 'n strepie is 'n lyn se eie, so net die kleur wys daar); ontmerk om terug te gaan. {{ui:Druk}} teken hulle op die PDF van die plan: die wydte skaal vanaf die skerm (die standaard muurpen van 1.75 pixels is 0.5 mm), strepies bly strepies, en 'n kleur druk in sy papierthema-waarde.

## 'n Trap uit 'n skets

Kies {{ui:Skets trap}} en klik die hoeke van die loopleiding, onderste trede eerste. Een lyn is 'n reguit trap, twee lyne wat in 'n regte hoek ontmoet is 'n L, en drie lyne (op, oor, terug) is 'n U. Druk {{key:L}} om 'n landing te teken: klik sy hoeke en druk {{key:Enter}}, en sy kort kant bepaal die trap se wydte. Druk {{key:Enter}} om die trap te plaas. Elke trede word uitgewerk uit die lengte van jou lyn en die aantal stygers wat die hoogte nodig het. Daarna is dit 'n gewone trap: verander dit in Eienskappe, en die trapgat en leuings volg.

Merk **Maak dit 'n familie** in die gereedskap se ry (of druk {{key:F}}) voordat jy {{key:Enter}} druk, om die trap as 'n familie te plaas ('n reguit, L- of U-trap). Dit kom in as een element en open in die familie-redigeerder met sy wydte, trede, totale hoogte, die trede in elke vlug en die gaping van 'n U as parameters, sodat jy groottes, 'n plan-simbool of hotspots kan byvoeg. Trappe en die stygerhoogte volg daaruit. Dit het geen leuings of trapgat nie: daardie hoort by 'n gewone trap.

## Open 'n OBJ

Open 'n `.obj`-lêer soos enige ander lêer. 'n OBJ het geen eenhede nie, so BimCraft lees meter met Y op, soos die meeste programme dit skryf. Elke objek of groep word een netwerkelement op 'n enkele vlak, en jy kan dit dan sien, meet, snit, in 'n model plaas en as IFC stoor. Lyne, krommes en oppervlaktes word uitgelaat, en die statuslyn sê so.

'n Objek wat presies 'n reguit prisma is (' n geslote netwerk met twee parallelle, identiese eindvlakke en plat sye wat daarop vierkant staan: 'n plaat, 'n paal, 'n muurblok, 'n plaat met gate) word in die IFC gestoor as IFC se eie uitgetrekte soliede met sy omtrek en diepte, nie as 'n lys driehoeke nie. Ander programme lees dit as 'n werklike soliede, dit bly klein, en sy diepte en omtrek kan later verander word. Die statuslyn sê hoeveel objekte op dié manier behou is. Enigiets wat nie presies 'n prisma is nie (' n taps toelopende vorm, 'n netwerk met een punt verskuif, 'n netwerk met 'n gaping) bly as driehoeke. 'n STEP-lêer word op dieselfde manier gelees.
