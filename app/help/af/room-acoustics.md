---
title: Kontroleer 'n vertrek se nagalm en luister daarna
summary: Nagalmtyd per oktaafband vir elke vertrek (Sabine en Eyring) uit sy grootte en afwerkings, 'n teiken van jou eie, en 'n stem, 'n klap of musiek wat deur 'n berekende impulsrespons van die vertrek gespeel word.
keywords: akoestiek, nagalm, nagalmtyd, rt60, sabine, eyring, absorpsie, eggo, klank, luister, impulsrespons, spraak, klaskamer, kantoor, tapyt, plafonteël, geraas
from: 16996cbb
---

Die {{ui:Vertrekakoestiek}}-afdeling van die linkerpaneel bereken hoe lank klank in elke vertrek nasing. Dit lees elke vertrek se vloeroppervlakte, hoogte, mure, deure en vensters uit die oop IFC-model. Niks in die model word verander nie.

## Kies die afwerkings

Waar die model sê wat op 'n oppervlak is, lees die vertrek dit: die binnelaag van elke muurtipe (gips, pleister, baksteen, beton en blokwerk is bekend), die vloer se soort (hout of beton) en of 'n plafon met teëls bedek is. Die etiket langs elke keuse sê of dit uit die model, 'n verstek of jou eie keuse is; kies 'n ander afwerking om dit te oorskryf. Enigiets wat die model nie sê nie, bly by die verstek. Die koëffisiënte is **tipiese gepubliseerde waardes**; vervang dit met 'n produk se toetsdata wanneer jy dit het. Tik 'n **teiken** (die langste middelfrekwensie-nagalm wat jy wil hê) en enige vertrek daarbo is 'n waarskuwing, met die absorpsie wat dit sal laat daal.

## Lees die tabel

Nagalm word gegee vir 125 Hz tot 4 kHz. Sabine pas vir lewendige vertrekke en Eyring vir dooie vertrekke; die lyn wat *Gebruik* merk, neem Eyring waar die gemiddelde absorpsie oor 0.2 is. Die lug se absorpsie is ingesluit (dit verkort die hoë bande in groot vertrekke). Dit is 'n statistiese model: dit veronderstel dat klank eweredig versprei, so lang of plat vertrekke en baie klein vertrekke is 'n ruwe riglyn, en meubels, mense en oop deure word nie getel nie.

## Luister

Met {{ui:Speel dit in hierdie vertrek}} word 'n stem (hier gemaak), 'n klap, getokkelde note of **jou eie klanklêer** (dit bly op jou rekenaar) gespeel deur 'n impulsrespons wat vir die vertrek bereken is: die direkte klank, die eerste weerkaatsings van 'n boks van daardie grootte, en 'n stert wat in elke band teen die vertrek se eie nagalmtyd uitsterf. Met {{ui:Speel dit droog}} word dieselfde klank teen dieselfde vlak sonder die vertrek gespeel. Jy kan die impulsrespons of die klank in die vertrek as WAV-lêers stoor. Dit klink soos 'n vertrek van daardie grootte en afwerking, nie soos enige werklike vertrek nie.

## Mense en meubels

Tik die getal **mense in hierdie vertrek** om hul absorpsie by te voeg. Meubels wat die model bevat (sofas, beddens, stoele, tafels, klerekaste, gevind volgens naam) voeg hul eie by. Die syfers is ruwe beplanningswaardes, afgerond; vervang dit met metings vir 'n vertrek wat saak maak.

## Klankbron en luisteraar

Onder {{ui:Klankbron en luisteraar}}, druk {{ui:Plaas die klankbron}} of {{ui:Plaas die luisteraar}} en klik op die vertrek se plan. Die klank wat jy speel, word dan vanaf daar gehoor: die direkte klank kom aan na die afstand, en die nagalmende deel is op die vlak vir daardie afstand. Maak albei leeg om terug te keer na die afstandboks.

## Ongelyke absorpsie en vertrekmodusse

Onder {{ui:Ongelyke absorpsie (boksvormige kamer)}}, tik die vertrek as 'n boks en kies sy vloer-, plafon- en muurafwerkings. Die tabel voeg Fitzroy en Arau-Puchades by Sabine en Eyring: hulle hanteer die drie pare teenoorstaande oppervlaktes apart, sodat 'n vertrek met tapyt en 'n harde plafon nie te kort gelees word nie. Wanneer die pare baie verskil, sê 'n nota watter een om te vertrou. Onder die tabel lys **Vertrekmodusse** die laagste staande golwe van die boks en die frekwensie waaronder die vertrek afsonderlike modusse het in plaas van 'n gelyke klankveld. Dit is voorspellings vir 'n boksvertrek, 'n ontwerphulpmiddel en nie 'n meting nie.

## Eenhede

Vertrekoppervlaktes, hoogtes, volumes en afstande word in die {{ui:Eenhede}} wat jy gekies het, gewys (vierkante en kubieke voet, duim, millimeter, sentimeter of meter). Die berekening self bly in SI; net die vertoning verander. Tye (sekondes), frekwensies en vlakke bly onveranderd.
