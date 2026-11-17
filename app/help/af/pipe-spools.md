---
title: Staalpyp-spoele en spoelblaaie
summary: Sny 'n staal-stomplaspyploop in spoele op 'n langste lengte en by die veldlasse wat jy plaas, nommer hulle, en laai 'n spoelblad per spoel af (3D-aansig, snylengtes, passtukke, lasse, materiaallys) as PDF en CSV; lugkanale kry 'n snitlys van reguit stukke.
keywords: spoel, spoele, spoelblad, isometries, vervaardiging, voorvervaardiging, veldlas, werklas, stomplas, snylengte, snitlys, materiaallys, bom, staalpyp, skedule 40, lynnommer, lugkanaal-snitlys, lugkanaalstukke
from: 539f51de
---

## Wat jy gaan doen

Verander 'n staalpyploop in die stukke wat 'n werkswinkel aanmekaar las en 'n passer insit: spoele wat nie langer is as 'n lengte wat jy kies nie, verdeel waar jy veldlasse plaas, elk met sy eie blad.

Slegs **staal-stomplaspyp** word in spoele gesny (pypgroottes ASME B36.10M, elmboë by die ASME B16.9 lang radius). Koper-, PVC- en PEX-verbindings is nie stomplasse nie, so hulle lope het geen spoele nie.

## Sny 'n loop in spoele

1. Kies 'n staalpyploop. Merk in Eienskappe **Sny in spoele** aan.
2. **Langste spoel**: die meeste middellynlengte wat een spoel mag hê (6 m, ongeveer 20 ft, om mee te begin).
3. **Lynnommer**: deel van elke spoel se nommer. 'n Nuwe gespoelde loop kry die volgende vrye nommer van sy stelsel.

Die spoele word langs die loop vanaf sy eerste punt genommer: `CHW-12-S01`, `CHW-12-S02` … (die stelsel, die lynnommer, die spoel). 'n Spoel groei stuk vir stuk; die stuk wat dit te lank sou maak, begin die volgende een, en 'n reguit lengte wat langer is as 'n spoel, word gesny waar die spoel vol is.

## Plaas veldlasse

1. Open {{ui:Bou}} en kies {{ui:Veldlas}}.
2. Klik op 'n gespoelde pyp waar die veldlas kom. Binne 'n reguit lengte word die pyp daar gesny; binne 'n passtuk of 'n klep beweeg die las na die nabyste verbinding.

Eienskappe lys die loop se veldlasse, elk met {{ui:Verwyder}}. Elke verandering is een stap van {{ui:Ontdoen}}.

## Spoelblaaie

In Eienskappe van 'n gespoelde loop:

- {{ui:Spoelblaaie (PDF)}}: een bladsy per spoel. Links, die spoel in 'n 30°-isometriese aansig: sy reguit lengtes genommer, werklasse as kolletjies, veldlasse gemerk FW, en die plan se noord. Regs, die spoel se nommer, grootte, skedule en lengte, dan sy **snylengtes**, **passtukke**, **lasse** ('n werkstomplas by elke verbinding binne die spoel, 'n veldlas waar dit by die volgende spoel aansluit) en sy **materiaallys** met die pyp se gewig (ASME B36.10M-gewig met gladde einde).
- {{ui:Spoellys (CSV)}}: dieselfde, 'n blok per spoel.

:::note
Snylengtes is van eind tot eind soos getekend: geen worteltoelae of lastoelae word afgetrek nie. Elmboë is by die B16.9 lang radius; T-stukke, reduseerstukke en klepte is generies, bepaal uit die pyp, nie uit B16.9 of 'n vervaardiger nie, en die blad sê so. Passtukgewigte word nie gegee nie. 'n Hulpmiddel vir tekening en koördinasie, deur 'n ingenieur bepaal.
:::

## In die IFC-lêer

Elke deel van 'n gespoelde loop dra **CadCraft_Spool** met sy SpoolId, die loop, die spoel se nommer in die loop, en waar dit langs die loop begin en eindig. Die loop hou sy reëls (langste spoel, veldlasse, lynnommer) in sy eie stel, sodat die spoele dieselfde terugkom wanneer die lêer weer oopgemaak word.

## Lugkanale: 'n snitlys

Open {{ui:Bou}} en klik {{ui:Lugkanaal-snitlys}}: 'n CSV van die reguit lugkanaalstukke volgens stelsel, vorm en grootte, elke reguit lengte gesny in stukke van die **Stuklengte** in die Lugkanaal-balk (1500 mm, ongeveer 5 ft, om mee te begin) en wat oorbly. Slegs lengtes: geen naatte, diktes of verbinders nie.
