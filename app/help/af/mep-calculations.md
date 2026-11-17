---
title: Dimensioneer pype en lugkanale, kontroleer kabelvulling en beligting
summary: Kontroleer toevoerpyp- en lugkanaalgroottes met drukval, lei kabels deur kabelladders en kabelpype en sien hul vulling, en bereken beligtingssterkte in vertrekke uit IES- of EULUMDAT-lêers. Standaardwaardes is gemerk; tik die waardes van die kode wat van krag is.
keywords: dimensionering, pypdimensionering, lugkanaaldimensionering, drukval, toestelenhede, aanvraag, hunter, hazen-williams, snelheid, wrywing, gelyke wrywing, ventilatordruk, demper, kritieke pad, kabelladder, kabelpyp, vulling, kabelskedule, ies, ldt, eulumdat, fotometrie, beligtingssterkte, lux, eenvormigheid, beligtingsberekening, kragdigtheid, mep, berekeninge, probleme
from: 9cb90815
---

## Wat jy gaan doen

Teken die pype, lugkanale, kabelladders en kabelpype soos gewoonlik, maak dan die **Berekeninge**-paneel oop. Elke oortjie lees die model, wys 'n tabel, en lys wat verkeerd is as Probleme in die ⚠-paneel. Wanneer 'n grootte 'n Probleem sou regmaak, verander **Pas groottes toe** die lope in een ontdoen-stap.

Dit is tekenhulpmiddels. Elke standaardwaarde is op die skerm gemerk, en geen daarvan is 'n kodetabel nie: tik die getalle uit die standaard waarvolgens jy ontwerp, en laat die resultaat nasien deur die ingenieur wat daarvoor instaan.

## Pype

1. Kies die **stelsel**-sleutel (koue water is `cw`, warm water `hw`).
2. Stel die hoogste snelheid en, as jy die druk wil laat nagaan, die druk by die bron en die laagste druk wat 'n toestel nodig het.
3. Klik {{ui:Kontroleer}}.

Elke pyp dra die aanvraag van die toestel-eenhede onder dit. Die aanvraag kom uit 'n kurwe van toestel-eenhede teen vloei, soos Hunter dit beskryf het. **Die ingeboude kurwe is 'n voorbeeld, nie 'n kodetabel nie**; die Probleme sê so totdat jy jou eie intik. Wrywing is Hazen–Williams, passtukke is verliskoëffisiënte, en 'n styging kos 9.8 kPa per meter. 'n Toestel se eenhede kom van sy soort, of van die getal wat jy met die assistentgereedskap `loads_set` stel.

## Lugkanale

Stel die stelsel, die wrywingstempo (gelyke wrywing) of 'n snelheid, en enige verlies van 'n spoel, filter of geraasdemper. Eindpunte kry hul lugvloei uit `loads_set` op die verspreider. Die tabel wys snelheid en wrywing per stuk, die **ventilatordruk** by die kritieke pad, en die druk wat elke ander eindpunt se demper moet opneem. Passtukverliese gebruik afgeronde standaardkoëffisiënte, nie 'n passtukdatabasis nie.

## Kabelladders en kabelpype

Teken hulle met die Lugkanaal-gereedskap: die stelsels **Kabelladder** en **Kabelpyp** word as kabeldraers gestoor, sodat ander programme hulle as ladders en pype lees. Plak in die Kabels-oortjie die kabellys (merker, buitedeursnee in mm, aantal, van, na). `van` en `na` is die merker van 'n stuk toerusting of 'n punt `x,y,z` in millimeter. Kabels volg die kortste deurlopende roete deur die ladders en pype; elke lope wys sy vulling teen die perke wat jy tik, en die skedule stoor as CSV met 'n lengte wat 'n speling-persentasie en die eindpunte insluit.

## Beligting

Gee elke armatuur sy IES (LM-63)- of EULUMDAT-lêer met die assistentgereedskap `photometry_set`. Tik die teikens, die rooster se afstand en die werkvlakhoogte. Die resultaat is net **direkte** beligtingssterkte: geen onderlinge weerkaatsing en geen skaduwees nie, dus is dit 'n onderste grens in 'n vertrek.

## Brandsproeiers

Die **Brandsproeiers**-byvoeging het sy eie oortjie; sien die hulp daarvoor.
