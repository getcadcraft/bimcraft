---
title: Maak IFC5 alpha (IFCX)-lêers oop en voer dit uit
summary: 'n Laboratoriumopsie vir die IFC5 alpha-lêerformaat (.ifcx): maak 'n lêer met sy lae oop, sien wat die lees nie kon nagaan nie, en voer die oop modelle uit. Die formaat verander steeds, so lees eers.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lae, skema, laboratorium, hoeveelhede, qto, uitvoer, invoer
from: cffe1669
---

IFC5 alpha (lêers met die uitbreiding {{ui:.ifcx}}) is die lêerformaat wat buildingSMART steeds ontwerp. Dit is nie finaal nie: die lêers, en ons lees daarvan, kan verander. Daarom is dit 'n laboratoriumopsie en kom lees eerste.

## Skakel dit aan

1. Kies {{ui:Instellings}}, dan die {{ui:IFC5 alpha (IFCX)}}-afdeling van die BimCraft-oortjie.
2. Merk {{ui:IFC5 alpha (IFCX) – die formaat verander steeds; lees eers}} aan.

Dit is standaard af. Solank dit af is, word 'n .ifcx-lêer geweier met 'n sin wat hierheen wys. {{ui:Maak IFC5 alpha (.ifcx) oop…}} en die uitvoerknoppie {{ui:IFC5 alfa}} verskyn wanneer dit aan is.

## Oopmaak

- Kies 'n .ifcx-lêer met {{ui:Maak 'n lêer of vouer oop}} (dit vervang die oop model, na die gewone vraag oor wysigings), of
- kies {{ui:Maak IFC5 alpha (.ifcx) oop…}} en kies verskeie lêers saam: die lêer, sy lae, en die skemalêers wat dit invoer. Met 'n model reeds oop, word die lêer **langs dit bygevoeg**; die x in die modellys verwyder dit weer, wat die ontdoen is.

'n IFCX-lêer lys nodusse (’n pad, sy kinders, wat dit erf, sy eienskappe). Verskeie lêers kan dieselfde nodus beskryf: 'n latere lêer (’n laag) oorskryf die eienskappe van 'n vroeëre een, en 'n nul-kind verwyder 'n kind. BimCraft stel hulle saam en teken dan die resultaat as 'n klein IFC4-model: projek, terrein, gebou, verdiepings en elemente met name, klasse, eienskappe, hoeveelhede, kleure en meshes.

Niks word van die netwerk afgehaal nie. Die skemalêers wat 'n lêer invoer (byvoorbeeld `ifc@v5a.ifcx`) word slegs gebruik as jy hulle saam met die lêer gekies het; andersins sê die verslag so en word die eienskappe sonder 'n tipekontrole gelees.

### Die verslag

Na oopmaak lys 'n verslag wat die lees gevind het: data wat nie by sy skema pas nie, skemalêers wat nie gegee is nie, eienskappe wat hier geen IFC-betekenis het nie. Eienskappe sonder 'n koppeling word **behou** in die model, nie gelaat val nie, en word weer geskryf by uitvoer.

## Wat word wat

| In die IFCX-lêer | In BimCraft |
|---|---|
| 'n Nodus met 'n IFC-klas (projek, terrein, gebou, verdieping, muur …) | Die ooreenstemmende IFC4-element; 'n klas wat hierdie lees nie ken nie, word 'n gebouelement-proxy |
| Die naam wat die nodus onder sy ouer het | Die elementnaam |
| Eienskappe met 'n hoeveelheidssoort (Lengte, Oppervlakte, Volume, Massa …) | 'n IFC4-hoeveelheidstel genaamd `Qto_IFCX` (IFC4-hoeveelhede bly IFC4 `Qto_*`-stelle) |
| Ander eienskapseienskappe | 'n Eienskapstel genaamd `Pset_IFCX` |
| Mesh- en transformasie-eienskappe | Die element se driehoeke en plasing; onsigbare meshes word nie geteken nie |
| Kleur, ondoursigtigheid, materiaal, klassifikasie | Oppervlakstyl, materiaal en klassifikasie van die element |

Eenhede word as meter geneem, met Z na bo: die alfa sê eenhede sal later gedokumenteer word.

## Uitvoer

Kies {{ui:IFC5 alfa}} op die werkbalk, lees die nota, dan {{ui:Voer .ifcx uit}}. Die lêer het ons eie kop (outeur CadCraft, weergawe ifcx_alpha) en sê in homself dat dit die alfa-formaat is. Elke model word in sy eie lêerkoördinate geskryf, in meter, met name, klasse, eienskapstelle, hoeveelhede (as eienskappe met hul soort), kleure en driehoeke. Lae en erfenis word plat geskryf. Kontroleer die lêer in die program waarheen jy dit stuur.

## Beperkings

- Geboë meetkunde (kurwes, oppervlaktes) word nie gelees nie: slegs driehoekmeshes.
- Deure en vensters wat in 'n muur geneste is, word op die verdieping geplaas; die muur waarvandaan hulle kom, word nie gekoppel nie.
- IFC4 `Qto_*`-stelnaamme word behou as eienskapsgroepe van ons eie (`cadcraft::qto::…`); die standaard alfa-skema het slegs 'n paar hoeveelheidsnaamme.
- Die formaat kan onder ons verander; 'n lêer wat vandag gemaak is, lees dalk môre nie.
