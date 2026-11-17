---
title: Trappe en leunings
summary: Teken reguit, L-, U- en waaiertrappe wat hul optrede en trede uit die vloer-tot-vloer-hoogte bepaal, met handleunings en balusters, en die trapgat in die vloer hierbo uitgesny; teken beskermleunings langs dekke en rondom openinge.
keywords: spiraal, ronde trap, trap, trappe, trapstel, optrede, trede, landing, waaiertrap, L-trap, U-trap, keerlus, handleuning, beskermleuning, beskerming, leuning, baluster, spyl, newelpaal, paal, trapgat, hoofruimte, dek, balkon
from: 16e5ace4
---

## Wat jy gaan doen

Voeg trappe tussen vlakke by en leunings waar mense dit nodig het. 'n Trap bereken sy eie trappe uit die hoogte tussen die vlakke, hou hulle binne die gewone residensiële perke, plaas handleunings op sy oop kante en sny sy trapgat in die vloer hierbo uit.

## Teken 'n trap

1. Op die vlak waar die trap begin, maak {{ui:Build}} oop en kies {{ui:Stair}}.
2. Kies die soort — **Reguit**, **L met 'n landing**, **U met 'n landing** of **L met waaiertrappe** — na watter kant dit **draai**, sy **breedte** en waar sy **handleunings** moet gaan.
3. Klik waar die trap begin: die middel van die voorste rand van die onderste trede.
4. Beweeg die wyser in die rigting waarin die trap opgaan; die trappe volg dit, met die aantal optrede en trede. Dit spring vas aan die mure en aan 15°-stappe; hou {{key:Shift}} vas om dit vierkantig te hou.
5. Klik. {{key:Esc}} begin weer.

## Teken 'n spiraaltrap

1. Maak {{ui:Build}} oop, kies {{ui:Stair}}, kies dan **Spiraal** as die soort.
2. Stel **Draai**, na watter kant dit opwaarts draai (links is linksom).
3. Klik op die middel van sy paal.
4. Klik in die rigting waarheen die onderste trede wys.

Dit begin 30" wyd (die trede, van die paal tot by die buitekant), met 'n 4½"-paal. Die optrede word bereken uit die vloer-tot-vloer-hoogte, hoogstens 9½" by verstek. Trede is 7½" diep op die loopllyn, 12" uit die paal. Die handleuning loop aan die buitekant.

In **Eienskappe** voeg 'n spiraaltrap **Middelpaal** by, sy deursnee. Die **Trede**-veld word op die loopllyn gemeet. Die kontroles daarvan is benoemde verstekwaardes vir spiraaltrappe: 26" vrye breedte, ten minste 6¾" trede op die loopllyn, optrede hoogstens 9½" en handleunings 34"–38". Dit is nie ingenieurswerk nie; die bouowerheid besluit.

## Hoe die trappe bereken word

Die hoogte tussen die vlak se vloer en die vlak hierbo word verdeel in gelyke optrede van hoogstens 7¾", en elke trede is 10" diep (albei kan in **Eienskappe** verander word). 'n Landing tel as een trap; waaiertrappe is drie trappe wat om die binnehoek gewaaier is. Verander 'n vlak se hoogte, en elke trap daarop word weer bereken.

:::warning
7¾" optrede, 10" trede, 36" breedte, 6'-8" hoofruimte en 34"–38" handleunings is benoemde standaarde na die gewone residensiële kode, nie ingenieurswerk nie. **Eienskappe** sê watter daarvan nagekom word; jou bouowerheid besluit wat van toepassing is.
:::

## Verander 'n trap

Kies dit (klik daarop op die plan of in die 3D-aansig) en verander in **Eienskappe**: sy soort en draai, breedte, hoogste optrede, tredediepte, handleunings en hul hoogte, en **Sny die vloer hierbo** vir die trapgat. Die optrede en trede wat dit uiteindelik gekry het, word onderaan gewys.

## Die trapgat

Wanneer die vlak hierbo 'n vloer het, sny die trap dit waar die trappe minder as 6'-8" hoofruimte sou hê. Die sny beweeg saam met die trap en verdwyn wanneer die trap geskrap word.

## Teken 'n leuning

1. Maak {{ui:Build}} oop en kies {{ui:Railing}}.
2. Kies **Beskermleuning** (36" hoog) of **Handleuning** en sy hoogte.
3. Klik langs die rand — 'n dek, 'n balkon, rondom 'n trapgat — en dubbelklik of druk {{key:Enter}} om klaar te maak.

Leunings kry pale aan hul punte en hoeke en balusters met gapings onder 4". Kies een om sy soort, hoogte of hoe ver bo die vloer dit begin te verander.

## Teken 'n heining

Kies **Heining** in dieselfde leuninghulpmiddel, stel sy hoogte (1800 mm om mee te begin), klik langs die lyn van die heining en druk {{key:Enter}}.

- Die heining kry 'n paal aan elke punt en elke hoek, en 'n paal ten hoogste elke 2,4 m tussen hulle. 'n Paneelheining het 'n paneel tussen pale; 'n latheining het twee latte. Hierdie groottes is gewone keuses, nie 'n kodevereiste nie: plaaslike regsreëls beperk die hoogte van 'n heining.
- Dit is een element in die model ('n IfcRailing met die naam Fence) met 'n eienskapstel {{ui:CadCraft_Fence}}: styl, hoogte, pale, panele, latte, hekke, lengte en paneelarea. Een ontdoen-stap.
- Nie hier geteken nie: hekke (die generator in CivilCraft lê hulle uit), vulstokke, terrein (die heining staan op die vlak), en die kies van 'n enkele paal.

## Wat gestoor word

'n Trap word gestoor as 'n IFC-trap wat uit trapstelle (met hul optrede, trede, optreedhoogte en tredelengte), landings, waaiertrappe en handleunings bestaan; die trapgat is 'n opening in die vloerplaat hierbo. Leunings is IFC-leunings met hul lengte en hul aantal balusters en pale.
