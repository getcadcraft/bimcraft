---
title: Paketat e tipeve: ndani llojet e mureve si skedarë të hapur
summary: Ruani llojet e mureve me shtresat, materialet, etiketat dhe kodet e klasifikimit, dhe familjet, si një skedar të hapur (JSON i thjeshtë ose IFC), dhe shtojini te një projekt tjetër. Llojet e mureve të një skedari IFC nga një program tjetër gjithashtu mund të lexohen.
keywords: paketë tipesh, tipe, lloj muri, ndaj, eksporto, importo, bibliotekë, format i hapur, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiale, shtresa, shabllon, standard zyre, familje
from: e4c91331
---

## Çfarë do të bëni

Merrni llojet tuaja të mureve nga një projekt në tjetrin, ose ua jepni dikujt që punon në një program tjetër. Një paketë tipesh mban çdo lloj muri me shtresat, trashësitë, materialet, bërthamën, zbrazëtitë, prioritetin e shtresave, nivelin e zhvillimit, të dhënat e llogaritjes së sasive dhe kodet e klasifikimit, si dhe çdo familje që shtoni. Është një skedar i hapur: tekst JSON i thjeshtë që çdo kush mund ta lexojë, ose një skedar IFC. Asgjë në të nuk është e lidhur me një firmë, një vend ose një llogari.

## Ruani llojet nga një projekt

1. Hapni **Të dhënat** te shiriti i modelit dhe zgjidhni {{ui:Paketat e tipeve}}.
2. Nën {{ui:Ruaj llojet nga ky projekt}}, vendosni shenjë te llojet e mureve që do të përfshini. Llojet e vetë projektit janë të shënuara; një lloj fillestar mund të shtohet dhe hyn si kopje. Vendosni shenjë te familjet nëse doni t'i përfshini.
3. Shkruani një {{ui:Emri i paketës}}.
4. {{ui:Ruaj si paketë (.json)}} shkarkon një skedar `.cctypes.json`. {{ui:Ruaj si IFC (.ifc)}} shkarkon një skedar IFC që mban vetëm tipe: çdo lloj muri si një IfcWallType me grupin e tij të shtresave të materialit, materialet dhe klasifikimin, për çdo program BIM.

## Shtoni tipe te një projekt

1. Në të njëjtën dritare, zgjidhni {{ui:Hap një paketë ose skedar IFC…}} dhe zgjidhni një paketë `.json` ose një skedar `.ifc`.
2. Dritarja liston atë që përmban skedari: çdo lloj muri me trashësinë e vet, numrin e shtresave dhe kodet, materialet dhe familjet.
3. Zgjidhni çfarë ndodh me {{ui:Një lloj që ky projekt ka tashmë}}: **Mbaj atë të projektit**, **Shto atë të paketës si kopje** (merr një emër të ri që mbaron me "(2)"), ose **Zëvendëso (vetëm kur asnjë mur nuk e përdor)**.
4. {{ui:Shto në projekt}}. Dritarja liston çfarë u shtua, u kopjua, u zëvendësua ose u mbajt. Është një hap i vetëm zhbërjeje.

Llojet e reja janë te lista e tipeve të veglës së murit menjëherë.

## Llojet e dyshemesë, çatisë dhe tavanit

Lista e tipeve për t'u ruajtur mban gjithashtu llojet e dyshemesë, të çatisë dhe të tavanit të projektit dhe fillestarët e tyre (të shënuara Floor, Roof, Ceiling). Një paketë mund t'i mbajë të katër llojet; çdo lloj e emëron klasën e vet IFC (IfcWallType, IfcSlabType, IfcCoveringType). Një lloj dyshemeje, çatie ose tavani që e përdorin elementët nuk zëvendësohet nga një paketë: ndryshojeni te redaktuesi i tipeve.

## Një lloj si element Biblioteke

Zgjidhni saktësisht një lloj dhe zgjidhni **Ruaj si element Biblioteke…**. Ruan një skedar `.cctype.json`: një element Biblioteke të llojit Tipe që mban atë lloj të vetëm (shtresat, materialet, LOD dhe kodet e klasifikimit). Ngarkojeni në Bibliotekë për ta ndarë. **Hap një paketë ose skedar IFC** lexon gjithashtu një element të tillë dhe shton llojin e tij te projekti si një paketë.

## Gjëra të dobishme

- Një skedar IFC nga një program tjetër mund të hapet edhe këtu. Çdo lloj muri i tij që ka shtresa materiali lexohet: emri, materialet dhe trashësitë e shtresave, dhe çdo zbrazëtirë janë të skedarit. Cilat shtresa janë bërthama dhe çfarë bën secila shtresë (përfundim, strukturë, izolim) supozohet, lloji shënohet **(supozuar)**, dhe duhet ta kontrolloni te redaktuesi i llojit të murit. Një lloj muri pa shtresa lihet jashtë dhe emërohet.
- Një material që projekti e ka tashmë mbahet siç është. Një material i ri, emri i të cilit është zënë, merr "(paketë)" pas emrit.
- Një lloj që e përdorin muret nuk zëvendësohet kurrë nga një paketë. Ndryshojeni te redaktuesi i llojit të murit, që muret e tij të zhvendosen siç duhet.
- Një kod i vendosur në një mur nuk udhëton: i takon atij muri. Një kod i vendosur te lloji udhëton.
- Një skedar me një fushë që formati nuk e ka, një shtresë me material që mungon, ose çdo gjë që nuk është tekst i thjeshtë, refuzohet, dhe mesazhi thotë ku dhe pse.
- Nuk është ndërtuar ende: llojet e dyshemesë, çatisë dhe tavanit (nuk kanë tipe në këtë version: secili ka trashësinë e vet), llojet e dyerve dhe dritareve të ndryshme nga familjet, dhe shtrihjet ose ngjyrat nga skedari i një programi tjetër.
