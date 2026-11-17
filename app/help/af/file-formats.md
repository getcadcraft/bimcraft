---
title: Wat BimCraft uit elke formaat lees
summary: Presies wat BimCraft lees uit IFC-, projek- en familielêers, DWG en DXF, en wat dit alleen laat.
keywords: formate, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, weergawes, verenigbaarheid, wat gelees word
from: 9b8dfb4f
---

## IFC

| Lees | Besonderhede |
|---|---|
| Geometrie | Elke element met 'n vorm, gekleur soos die lêer sê. Vertrekke en ruimtes word deurskynend geteken en eers verborge |
| Verdiepings | Gebouverdiepings in hoogte-volgorde, en watter elemente op elkeen staan. Elemente op geen verdieping word as "Nie op 'n verdieping nie" gegroepeer |
| Elementtellings | Hoeveel elemente van elke soort (mure, deure, vloere…), gewys in {{ui:Elements}} |
| Projekfeite | Projeknaam, lang naam en fase; skema; die uitvoerende program, outeur en uitvoerdatum uit die lêerkop |
| Elementdata | Naam, tipe, objektipe, etiket, beskrywing, GlobalId; elke eienskapstel en hoeveelheidstel op die element en op sy tipe |

Wysigbaar: naam, objektipe, etiket, beskrywing, en enkele eienskapwaardes. Gestoor as 'n nuwe IFC-lêer. Skemas IFC2X3, IFC4 en IFC4X3 open, gelees deur BimCraft se eie IFC-enjin; alles wat dit nog nie kan teken nie, word onder **Nog nie geteken nie** in die {{ui:File}}-paneel gelys. Die model word na die oorsprong geskuif wanneer dit oopmaak, so 'n model wat ver daarvandaan geplaas is, wys tog in die middel van die skerm. `.ifczip` en `.ifcxml` maak nie oop nie.

## Projek- en familielêers

`.rvt`-projekte, `.rte`-projeksjablone, `.rfa`-families en `.rft`-familiesjablone.

| Lees | Besonderhede |
|---|---|
| Lêerinligting | Vrystelling en bou, werkdeling, pad van die sentrale model, pad laas gestoor, gebruikersnaam, lokaal, dokument-GUID |
| Projekinligting | Die projek se eie velde (naam, nommer, kliënt, adres, status…), sonder nuwe-projek-verstekwaardes |
| Familie-inligting | Familienaam, kategorie, vrystelling, laaste opdatering, en sy parameters per groep |
| Skakels | Die lys van gekoppelde modelle, CAD-skakels, beelde en sleuteltabelle waarna die lêer wys |
| Voorskouprent | Die miniatuur wat in die lêer gestoor is |

Nie gelees nie: die 3D-model, elemente, aansigte, blaaie en skedules. Hulle word in 'n ongedokumenteerde formaat gestoor. BimCraft lees slegs 'n paar tiene kilogrepe uit elke lêer, so lêergrootte maak feitlik geen verskil nie.

## .pln-, .pla-, .tpl- en .bpn-projeklêers

Nog nie gelees nie: BimCraft sê dit wanneer jy een oopmaak. Voer IFC uit vir die model en DWG vir die tekeninge; sien [Maak .pln- en .pla-projeklêers oop](topic:pln-project-files).

## DWG en DXF

| Lees | Besonderhede |
|---|---|
| Ruimtes | Modelruimte en elke blad (uitleg), in oortjie-volgorde |
| Aansigvensters | Elke blad se aansigvensters, met hulle skaal, draai en bevrore lae |
| Lae | Naam, kleur, aan/af, bevries, plotvlag en lynwydte |
| Voorwerpe | Lyne, polilyne, boë, sirkels, ellipse, splines, arseringe en soliede liggame, teks en veelreëlteks, blokke en eienskappe, afmetings, leiers en veelleiers, tabelle, punte, beelde |
| Gekoppelde tekeninge | Geteken waar hulle ingevoeg is, wanneer hulle lêers gevind word |
| Beelde | Geteken uit die prentlêers wanneer dit gevind word (PNG, JPEG, GIF, BMP, WebP; nie TIFF nie) |
| Toerustingetikette | Voedselbedryf-itemetikette (`KCL-ITEM`-eienskappe), vir die toerustingskedule |

Alles anders word onder **Nog nie geteken nie** getel, nooit geraai nie. DWG-formate van AutoCAD 2000 tot 2018 is die wat nagegaan is (R13- en R14-lêers word ook aanvaar, maar geen was in die toetsstel nie; ouer DWG's maak nie oop nie); die {{ui:Drawing}}-paneel wys die formaatkode (soos AC1032). DXF-lêers van elke weergawe maak oop, R12 ingesluit. Albei word deur BimCraft se eie lesers gelees, in hierdie oortjie. Niks word terug na DWG of DXF gestoor nie.

## In 'n vouer

| Soort | Uitbreidings | In die verslag |
|---|---|---|
| Modelle | `.rvt` `.rfa` `.rte` `.rft` | Gegroepeer met genommerde rugsteunkopieë, gesondheidsgekontroleer, kaart gelees, skakels nagegaan |
| IFC | `.ifc` | Gelys; maak oop in 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Gelys met die modelle wat hulle skakel; DWG en DXF maak oop in 2D, DGN nie |
| Oorskiet | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Gelys onder **Opsy gesit** |
| Onderhoudsvouers | `*_backup`, `*_log`, `Revit_temp`, versteekte vouers | Gelys onder **Opsy gesit**, nie gelees nie |

Sien [Vouerverslag: rolle, statusse en skakels](topic:folder-roles).
