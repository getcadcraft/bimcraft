---
title: BimCraft-instellings
summary: Kies of kamers en ruimtes wys, of rande getrek word en in watter aansig 'n model oopmaak, en begin plaas met muur-snap aan.
keywords: instellings, voorkeure, opsies, ruimtes, vertrekke, ifcspace, rande, lyne, werkverrigting, groot model, oopaansig, kamera, bo-aansig, muur-snap, snap
from: 4416e64f
---

Maak {{ui:Instellings}} oop met die rat in die programbalk of {{key:Mod+,}}. Die eerste oortjie, {{ui:BimCraft}}, bevat die instellings wat by hierdie program hoort; {{ui:Algemeen}} bevat die instellings wat elke CadCraft-program deel (tema, werkbalk, paneele). BimCraft se instellings bestaan net in die program: jy verander hulle hier, en hierdie blaaier onthou hulle. {{ui:Stel BimCraft-instellings terug}} onderaan die dialoog stel hulle, en die gedeelde instellings, terug na die begin.

## Menu's, sleutels en muis

Die menustyl (BimCraft se eie werkbalk, 'n huisontwerp-menubalk, 'n BIM-lint of 'n tekenopdragreël), jou eie sleutels en menu's, en wat die wiel en die muisknoppies doen. Sien [Menu's, sleutels en muis](topic:menus-keys-and-mouse).

## Wanneer 'n model oopmaak

- **Wys vertrekke en ruimtes** (af by die begin): vertrekke en ruimtes is deursigtige bokse wat die mure agter hulle kan verberg, so hulle begin versteek. Die {{ui:Ruimtes}}-knoppie bo die model skakel hulle steeds aan en af vir die oop model.
- **Rande**: {{ui:Rande aan}} (die begin) teken die randlyne wat die tekenvoorkoms gee. {{ui:Slegs klein modelle}} teken hulle net vir modelle onder 300,000 driehoeke, wat groot modelle vinniger laat draai. {{ui:Rande af}} begin elke model sonder hulle. Die {{ui:Rande}}-knoppie skakel hulle steeds vir die oop model. Bo 1.5 miljoen driehoeke is rande altyd af.

## Tekeninge maak oop in

Hoe 'n DWG- of DXF-tekening eers wys: {{ui:3D (vinnigste)}} (die begin) teken selfs 'n groot tekening vinnig, of {{ui:Model (2D)}} maak die plat modelruimte-aansig oop. Die oortjies bo die tekening skakel enige tyd tussen {{ui:Model}}, die blaaie en {{ui:3D}}. 'n Tekening met niks in die modelruimte nie, of 'n blaaier wat 3D nie kan wys nie, maak altyd in 2D oop.

## Oopaansig

Die kamera waarmee 'n model oopmaak: {{ui:Pas}} (die begin, die hele model vanuit 'n hoek), {{ui:Bo}}, {{ui:Voor}} of {{ui:Syaansig}}. Die knoppies bo die model verander die aansig enige tyd.

**'n Gebou wat op sy terrein gedraai is**: baie modelle kom met die gebou in 'n hoek met die lêer se asse (op opmeting- of gedeelde koördinate). {{ui:Reghoekig met die gebou}} (die begin) wys so 'n gebou reghoekig: {{ui:Pas}}, {{ui:Bo}}, {{ui:Voor}}, {{ui:Syaansig}}, die vlakke van die aansigkubus en elke nuwe snit volg sy mure, en die kompas van die aansigkubus wys steeds na die model se noorde. {{ui:Soos geplaas op die terrein}} behou die lêer se asse. 'n Gebou waarvan die mure langs die asse loop, lyk albei manier dieselfde.

## Biblioteekitems plaas

**Begin met muur-snap aan** (af by die begin): wanneer die plasing of plak van 'n biblioteekitem begin, snap die agterkant na die naaste muur, na die vertrek toe gerig. {{key:Tab}} of {{ui:Muur-snap}} in die plasbalk skakel dit vir die oomblik af. 'n Verdieping sonder mure begin sonder dit.

## Snitboks

{{ui:Ruimte rondom die keuse}} is hoeveel ruimte {{ui:Snitboks rondom die keuse}} aan elke kant van die gekose elemente los, in millimeter: 300 by die begin, tot 5000. Sien [Sny 'n IFC-model met 'n snitvlak](topic:section-plane).

## Ligging

{{ui:Breedte- en lengtegraad in}} kies die stelsel waarin {{ui:Meet}} › {{ui:Ligging}} breedte- en lengtegrade gee: WGS 84 (EPSG:4326, die begin, soos GPS en webkaarte gebruik), {{ui:Die lêer se eie datum}}, of een van ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 en CGCS2000. Die lêer se eie kaartstelsel en datum word ook altyd gewys. Sien [Meet afstande, vlakoppervlaktes en liggings in 3D](topic:measure).

## Hoekwyser

Wat in die onderregterhoek van die 3D-aansigte staan ('n IFC-model, en 'n tekening wat na 3D geskakel is): {{ui:Aansigkubus}} (die begin), {{ui:Asikoon}} ('n klein X, Y en Z) of {{ui:Geen}}. Dit verander dadelik. Die 2D-tekeningaansig wys nooit een nie.

Op die aansigkubus, klik 'n vlak, 'n rand of 'n hoek om van daardie kant af te kyk, sleep die kubus om te wentel, sleep die ring om rond te draai, en klik die huis vir die beginaansig.

## Jou naam op kwessies

As jy aangemeld is, dra kwessies jou rekening se naam en BimCraft vra vir niks: hierdie deel wys {{ui:Van jou rekening (<name>)}}. {{ui:Gebruik 'n ander naam}} maak 'n blokkie oop vir 'n ander naam, wat wen totdat jy {{ui:Gebruik my rekeningnaam}} kies. As jy afgemeld is, vra die kwesvorm soos voorheen vir 'n naam. Sien [Kwessies en BCF-lêers](topic:issues-bcf).

## Assistente

**Laat KI-assistente en skripte BimCraft gebruik** (af by die begin) laat 'n assistent op jou rekenaar die oop model bereik deur CadCraft Studio: **Lees** vind elemente en lees hulle eienskappe, **Verander die aansig** isoleer, verberg en wys hulle. **Aktiwiteit** lys sy oproepe. Sien [Laat 'n KI-assistent met jou model werk](topic:assistants).

:::note
Die ander instellings geld wanneer 'n model oopmaak of plasing begin. 'n Model wat reeds oop is, behou sy voorkoms totdat jy die werkbalkknoppies gebruik of dit weer oopmaak.
:::

## Verwant

- [Kopieer, plak en dupliseer biblioteekitems](topic:copy-paste)
- [Plaas toerusting en meubels uit die biblioteek](topic:place-from-library)
- [Die BimCraft-skerm](topic:workspace)
- [Laat 'n KI-assistent met jou model werk](topic:assistants)
