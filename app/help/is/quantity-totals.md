---
title: Leggja saman magn, skrá hluti og skipuleggja rými
summary: Telja hluti og leggja saman lengdir þeirra, flatarmál, rúmmál eða hvaða talnaeiginleika sem er, hópað eftir hvaða eiginleika sem er; skrá eina röð fyrir hvern hlut; eða skipuleggja rýmin með flatarmáli og rúmmáli. Hvert þeirra sækist sem CSV.
keywords: magn, magnskrá, magntaka, summur, samtala, listi, qto, csv, hópa eftir, fjöldi, lengd, flatarmál, rúmmál, rými, herbergi, rýmalisti, flatarmálslisti, hlutalisti
from: e2e7210c
---

## Hvað þú gerir

Fáðu samtölur úr líkani: veggjalengdir eftir hæð, hurðafjölda eftir tegund, rúmmál platna eftir efni, kostnað hvers svæðis.

## Skref

1. Opnaðu IFC-líkan.
2. Opnaðu {{ui:Magnsummur}} í vinstra spjaldinu.
3. Undir {{ui:Fjöldi}}, veldu {{ui:Sérhver hlutur}} eða aðeins þá völdu.
4. Undir {{ui:Hópa eftir}}, veldu eiginleika, til dæmis {{ui:Flokkur}}. Smelltu á {{ui:Bæta við hópi}} til að skipta frekar, allt að þremur, til dæmis eftir {{ui:Hæð}}.
5. Undir {{ui:Leggja saman}}, hakaðu við tölurnar sem á að leggja saman. Magnsett líkansins eru hökuð við í byrjun.
6. Smelltu á {{ui:Sækja CSV}} til að opna töfluna í töflureikni.

## Það sem þú átt að sjá

- Ein röð fyrir hvern hóp með fjölda hluta og hverja samtölu, og samtöluröð.
- Hlutir án gildis eru taldir en leggja ekkert við. Þegar það gerist bætir CSV-skráin dálki „sleppt“ við hliðina á samtölunni svo þú sjáir hversu margir það eru.
- Tölur eru í einingum skráarinnar eins og hún geymir þær, oft millimetrar fyrir lengdir.

## Ein röð fyrir hvern hlut, eða rýmin

Breyttu {{ui:Sýna}}:

- **Ein röð fyrir hvern hlut**: hver hlutur á sinni röð, með eiginleikunum undir {{ui:Dálkar}} og tölunum undir {{ui:Leggja saman}}. CSV-skráin byrjar á GlobalId hvers hlutar. Smelltu á fyrsta gildið í röð til að velja þann hlut.
- **Rými**: hvert herbergi með númeri sínu, nafni, hæð, flatarmáli og rúmmáli, og samtölum þeirra. Flatarmál og rúmmál koma úr magnsettum rýmisins eins og skráin segir þau. Þegar skráin hefur engin eru þau mæld út frá lögun rýmisins í m² og m³ og sýnd í skáletri; CSV-skráin segir hvað er hvað.

## Næst

- [Finna hluti eftir flokki, nafni eða eiginleika](topic:find)
- [Lita hluti eftir eiginleika](topic:color-by-property)

## Innviðir (IFC 4.3)

Veldu **Innviðir (IFC 4.3)** í listanum yfir sýnir til að sjá vegi, járnbrautir, brýr og sjávarmannvirki samlagt eftir flokki og gerð, með lengd, flatarmáli og rúmmáli sem skráin sjálf tilgreinir. Magn sem skráin tilgreinir ekki er skilið eftir autt, aldrei reiknað út. **Senda innviðamagn í TakeoffCraft** vistar skrá `.quantities.json` sem TakeoffCraft opnar sem gerðarbundið magn.
