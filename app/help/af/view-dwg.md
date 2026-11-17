---
title: Kyk na 'n DWG- of DXF-tekening
summary: Maak 'n DWG of DXF oop, beweeg rond in modelruimte en op blaaie, lees koördinate, en sien wat nog nie geteken is nie.
keywords: dinamiese blokke, sigbaarheidstoestande, dwg, dxf, cad, tekening, 2d, aansig, kyker, pan, zoem, modelruimte, papierruimte, uitleg, koördinate, maak dwg oop
from: 4db3122a
---

## Wat jy sal doen

Maak 'n CAD-tekening oop, sien dit in 3D of 2D, beweeg daarrond, wissel tussen modelruimte en sy blaaie, en lees koördinate. BimCraft wys DWG- en DXF-tekeninge; dit wysig of stoor hulle nie. Om een te verander, klik {{ui:Wysig in CadCraft}} en die tekening maak oop in die CadCraft-tekenprogram op 'n nuwe oortjie.

## Stappe

1. Klik {{ui:Kies 'n lêer}}, of sleep die tekening op die bladsy.
2. Kies 'n `.dwg`- of `.dxf`-lêer.
3. Wag terwyl die statuslyn "Die tekening word gelees…" sê. Groot tekeninge neem 'n paar sekondes. Dan sê dit hoe lank die lees geneem het, "weergee…" terwyl die eerste prent geteken word, en hoe lank dit geneem het.
4. Die tekening maak oop in 3D, die vinnigste manier om 'n groot tekening te wys (sien [Sien 'n DWG- of DXF-tekening in 3D](topic:dwg-in-3d)). Klik {{ui:Model}} vir die plat 2D-aansig. Om tekeninge altyd in 2D oop te maak, stel {{ui:Instellings}} › {{ui:BimCraft}} › **Tekeninge maak oop in** op {{ui:Model (2D)}}. 'n Tekening met niks in modelruimte nie, of 'n blaaier wat 3D nie kan wys nie, maak in 2D oop.
5. Kyk na die oortjies bo die tekening: {{ui:Model}} eerste, dan een oortjie per blad, in die tekening se eie volgorde.
6. Klik 'n bladoortjie om daardie blad te sien: die papier, met die model wat deur sy viewports gewys word.
7. Klik {{ui:Model}} om terug te gaan na modelruimte.
8. Beweeg die aanwyser oor die tekening en lees die X- en Y-koördinate in die hoek.

## Wat jy behoort te sien

- Die tekening, gepas by die venster. Kleure volg die tekening; wit lyne (kleur 7) teken in die tema se ink, en bleek kleure word op die ligte tema donkerder gemaak sodat hulle leesbaar bly.
- Die {{ui:Tekening}}-paneel links: lêer, grootte, formaat (byvoorbeeld "AutoCAD 2018 (AC1032)"), eenhede, tellings van entiteite en lae, die aantal blaaie, en gekoppelde tekeninge en toerusting wanneer daar is.
- Die {{ui:Lae}}-lys links.
- Regs: hoe om rond te beweeg, gekoppelde tekeninge en prente, en **Nog nie geteken nie**.

## Rondbeweeg

:::mouse
| Om te | Doen dit |
|---|---|
| Pan | Sleep met enige muisknoppie |
| Zoem | Rol die wiel; die punt onder die aanwyser bly staan |
| Pas | Dubbelklik, druk {{key:F}}, of klik {{ui:Pas}} |
:::

:::mac mouse
Op 'n tikkussing, met twee vingers rol, **zoem** dit; dit pan nie. Knyp zoem ook. Om te pan, klik en sleep.
:::

:::touch
Sleep met een vinger om te pan. Knypzoem vir tekeninge is nog nie gebou nie: tik {{ui:Pas}} om die hele blad te sien, en gebruik 'n muis of tikkussing om in te zoem.
:::

## Dinamiese blokke

'n Dinamiese blok word geteken soos die tekening dit wys: elke geplaaste blok in die sigbaarheidstoestand waarmee die tekening gestoor is ("Plan" of "Front", "Single bowl" of "Double bowl"). Regs lys **Dinamiese blokke** elkeen wat in modelruimte geplaas is: hoeveel geplaas is, die toestande wat hulle wys, en elke toestand wat die blok het. In {{ui:3D}} klik op 'n geplaaste blok om **Dinamiese blok**, **Toestand gewys** en **Ander toestande** in Eienskappe te sien. BimCraft verander nie toestande nie.

## Nog nie geteken nie

Sommige soorte voorwerpe word nie in hierdie bou geteken nie. Hulle word getel onder **Nog nie geteken nie** regs ("Hierdie dele van die tekening word vir die oomblik oorgeslaan, nie geraai nie."), sodat jy weet dat iets ontbreek. Lyne, polilyne, boë, sirkels, ellipse, splines, arserings en soliede vulsels, teks en meerlyn-teks, blokke met eienskappe, maatlyne, leiers en meerleiers, tabelle, prente en viewports word geteken. 3D-vlakke, polyface-mazes en poligoonmazes word geteken as hul rande van bo gesien; skakel na {{ui:3D}} om hulle as oppervlaktes te sien.

'n Binêre DXF maak nie oop nie: BimCraft sê so. Stoor dit weer as 'n ASCII-DXF, of as 'n DWG, vanaf die program wat dit gemaak het.

## Algemene foute

- **Die tekening lyk leeg.** Sommige lae is dalk af of gevries in die tekening self; hulle begin ongemerk in {{ui:Lae}}. Klik {{ui:Alles aan}}. As die status "*naam* is 'n leë tekening: dit bevat geen lyne, teks of blokke nie." sê, is daar niks in nie.
- **'n Blad wys 'n leë raam.** Die blad kan op gekoppelde tekeninge staatmaak. Sien [Vind gekoppelde tekeninge en prente](topic:dwg-linked-files).
- **Teks lyk 'n bietjie anders.** BimCraft teken teks in 'n smal sans-serif-lettertipe, nie die tekening se eie lettertipes nie, dus kan teks 'n bietjie wyer of smaller wees as in die program wat dit gemaak het.
- **"*naam* kon nie gelees word nie. Dit kan beskadig wees, of gestoor wees in 'n formaat wat die leser nog nie hanteer nie."** Die hakies aan die einde noem die lêer se formaatkode. Stoor dit vanaf die program wat dit gemaak het as 'n ouer DWG of as DXF, en probeer weer.
- **Verwag om te meet, teken of wysig.** BimCraft kyk slegs na tekeninge. Klik {{ui:Wysig in CadCraft}} om dieselfde lêer in die CadCraft-tekenprogram oop te maak, wat dit wysig en 'n kopie as DWG of DXF stoor. Jou oorspronklike lêer word nie verander nie, en gekoppelde tekeninge bly in BimCraft. Die knoppie wys net waar CadCraft vir jou oop is.

## Volgende

- [Sien 'n DWG- of DXF-tekening in 3D](topic:dwg-in-3d)
- [Werk met lae en blaaie](topic:dwg-layers-sheets)
- [Kontroleer 'n tekening in druk-aansig](topic:print-view)
