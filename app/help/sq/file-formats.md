---
title: Çfarë lexon BimCraft nga secili format
summary: Saktësisht çfarë lexon BimCraft nga skedarët IFC, të projektit dhe të familjes, DWG dhe DXF, dhe çfarë lë pa prekur.
keywords: formate, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versionet, përputhshmëria, çfarë lexohet
from: 9b8dfb4f
---

## IFC

| Lexohet | Detaje |
|---|---|
| Gjeometria | Çdo element me formë, i ngjyrosur ashtu si thotë skedari. Dhomat dhe hapësirat vizatohen transparente dhe fshihen në fillim |
| Katet | Katet e ndërtesës në renditje lartësie, dhe cilat elemente qëndrojnë në secilin. Elementët në asnjë kat grupohen si "Pa kat" |
| Numërimi i elementeve | Sa elemente ka çdo lloj (mure, dyer, pllaka…), i shfaqur në {{ui:Elementet}} |
| Faktet e projektit | Emri i projektit, emri i gjatë dhe faza; skema; programi eksportues, autori dhe data e eksportit nga koka e skedarit |
| Të dhënat e elementit | Emri, tipi, lloji i objektit, etiketa, përshkrimi, GlobalId; çdo grup vetish dhe grup sasish mbi elementin dhe mbi tipin e tij |

E redaktueshme: emri, lloji i objektit, etiketa, përshkrimi dhe vlera të vetme vetish. Ruhet si skedar i ri IFC. Skemat IFC2X3, IFC4 dhe IFC4X3 hapen, lexohen nga motori IFC i vetë BimCraft; çdo gjë që nuk mund ta vizatojë ende listohet nën **Nuk vizatohet ende** në panelin {{ui:Skedari}}. Modeli zhvendoset në origjinë kur hapet, kështu që një model i vendosur larg prej saj shfaqet ende në mes të ekranit. `.ifczip` dhe `.ifcxml` nuk hapen.

## Skedarët e projektit dhe të familjes

`.rvt` projekte, `.rte` shabllone projekti, `.rfa` familje dhe `.rft` shabllone familjeje.

| Lexohet | Detaje |
|---|---|
| Informacioni i skedarit | Versioni dhe build-i, puna e përbashkët, shtegu i modelit qendror, shtegu i ruajtur i fundit, emri i përdoruesit, lokaliteti, GUID i dokumentit |
| Informacioni i projektit | Fushat e vetë projektit (emri, numri, klienti, adresa, statusi…), pa vlerat e parazgjedhura të projektit të ri |
| Informacioni i familjes | Emri i familjes, kategoria, versioni, përditësimi i fundit, dhe parametrat e saj sipas grupeve |
| Lidhjet | Lista e modeleve të lidhur, lidhjeve CAD, imazheve dhe tabelave të shënimeve kryesore ku pikon skedari |
| Figura paraprake | Miniatura e ruajtur në skedar |

Nuk lexohen: modeli 3D, elementët, pamjet, fletët dhe tabelat. Ato ruhen në një format të pa dokumentuar. BimCraft lexon vetëm disa dhjetëra kilobajt nga çdo skedar, kështu që madhësia e skedarit pothuajse nuk ka rëndësi.

## .pln, .pla, .tpl dhe .bpn skedarë projekti

Nuk lexohen ende: BimCraft e thotë këtë kur hap një të tillë. Eksporto IFC për modelin dhe DWG për vizatimet; shih [Hap skedarë projekti .pln dhe .pla](topic:pln-project-files).

## DWG dhe DXF

| Lexohet | Detaje |
|---|---|
| Hapësirat | Hapësira e modelit dhe çdo fletë (layout), sipas renditjes së skedave |
| Viewport-et | Viewport-et e çdo fletë, me shkallën, rrotullimin dhe shtresat e ngrira |
| Shtresat | Emri, ngjyra, aktive/joaktive, e ngrirë, flamuri i printimit dhe trashësia e vijës |
| Objektet | Vija, polivijat, harqet, rrathët, elipset, splines, vijëzimet dhe solidet, teksti dhe teksti shumëvijësh, blloqet dhe atributet, përmasat, udhëheqësit dhe multiudhëheqësit, tabelat, pikat, imazhet |
| Vizatime të lidhura | Vizatohen aty ku janë futur, kur skedarët e tyre gjenden |
| Imazhet | Vizatohen nga skedarët e figurave kur gjenden (PNG, JPEG, GIF, BMP, WebP; jo TIFF) |
| Etiketat e pajisjeve | Etiketat e artikujve të shërbimit ushqimor (atributet `KCL-ITEM`), për tabelën e pajisjeve |

Çdo gjë tjetër numërohet nën **Nuk vizatohet ende**, kurrë nuk merret me hamendësim. Formatet DWG nga AutoCAD 2000 deri 2018 janë ato të kontrolluara (skedarët R13 dhe R14 pranohen gjithashtu, por asnjë nuk ishte në grupin e testimit; DWG më të vjetra nuk hapen); paneli {{ui:Vizatimi}} shfaq kodin e formatit (si AC1032). Skedarët DXF të çdo versioni hapen, përfshirë R12. Të dyja lexohen nga lexuesit e vetë BimCraft, në këtë tab. Asgjë nuk ruhet përsëri në DWG ose DXF.

## Në një dosje

| Lloji | Shtesat | Në raport |
|---|---|---|
| Modelet | `.rvt` `.rfa` `.rte` `.rft` | Grupuar me kopje rezervë të numëruara, të kontrolluara për shëndetin, karta e lexuar, lidhjet e kontrolluara |
| IFC | `.ifc` | Listuar; hapet në 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Listuar me modelet që i lidhin; DWG dhe DXF hapen në 2D, DGN jo |
| Mbetjet | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Listuar nën **Vihen mënjanë** |
| Dosjet teknike | `*_backup`, `*_log`, `Revit_temp`, dosje të fshehura | Listuar nën **Vihen mënjanë**, nuk lexohen |

Shih [Raporti i dosjes: rolet, statuset dhe lidhjet](topic:folder-roles).
