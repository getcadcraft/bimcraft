---
title: Waxa BimCraft ka akhriyo qaab kasta
summary: Waxa dhab ah oo BimCraft ka akhriyo faylalka IFC, mashruuca iyo qoysaska, DWG iyo DXF, iyo waxa uu u tago.
keywords: qaababka, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, noocyada, isku-habayn, waxa la akhriyo
from: 9b8dfb4f
---

## IFC

| Akhri | Faahfaahin |
|---|---|
| Geometry | Element kasta oo leh qaab, midab sida faylku sheegayo. Qolalka iyo meelaha waa la sawiraa si daahsan, oo markii hore waa la qariyaa |
| Storeys | Dabaqyada dhismaha sida kor loo kala dhigo, iyo elementiyada ku jira dabaq kasta. Elementiyada aan dabaq lahayn waa la kooxeeyaa "Not on a storey" |
| Element counts | Inta elementi nooc kasta (darbiyada, albaabbada, dabaqyada…), oo lagu muujiyo {{ui:Walxaha}} |
| Project facts | Magaca mashruuca, magaca dheer iyo marxaladda; schema; barnaamijka soo dhoofiyay, qoraalka iyo taariikhda soo dhoofinta madaxa faylka |
| Element data | Magaca, nooca, nooca object, calaamadda, sharaxaadda, GlobalId; dhammaan kooxaha sifooyinka iyo tirooyinka elementiga iyo nooceeda |

Wax la beddeli karo: magaca, nooca object, calaamadda, sharaxaadda, iyo qiyamka sifo keliya. Waxa lagu kaydiyaa fayl IFC cusub. Schema-yada IFC2X3, IFC4 iyo IFC4X3 way furmaan, BimCraft-ka injineriyadiisa IFC-ga ayaa akhrisa; wax kasta oo weli sawiri waynaan karin waxa lagu liistaa hoosta **Weli lama sawirin** panel-ka {{ui:Faylka}}. Moodeelka waxa loo raraa asalka markii uu furmo, sidaas darteed moodeel meel fog ku yaal wali dhexda shaashadda ayuu ka muuqdaa. `.ifczip` iyo `.ifcxml` ma furmaan.

## Mashruuca iyo faylasha qoysaska

`.rvt` mashruucyo, `.rte` template-yada mashruuca, `.rfa` qoysaska, `.rft` template-yada qoysaska.

| Akhri | Faahfaahin |
|---|---|
| File information | Release iyo build, worksharing, jidka moodeelka dhexe, jidka la kaydiyay ugu dambeeyay, magaca isticmaalaha, locale, GUID-ka dokumentiga |
| Project information | Goobaha mashruuca laftiisa (magac, lambar, macmiil, cinwaan, xaalad…), iyada oo aan lagu darin defaults-ka mashruuca cusub |
| Family information | Magaca qoyska, qaybta, release, cusboonaysiinta ugu dambeysay, iyo parameters-keeda kooxo ahaan |
| Links | Liiska moodeelada la xidhay, CAD links, sawirrada iyo miisaska furayaasha faylku u tilmaamo |
| Preview picture | Thumbnail-ka ku kaydsan faylka |

Lama akhriyo: moodeelka 3D, elementiyada, aragtiyada, xaashiyada iyo jadwallada. Waxay ku kaydsan yihiin qaab aan dukumentiyo lahayn. BimCraft wuxuu akhriyaa dhowr tobaan kiloBytes ah oo keliya faylkasta, sidaas darteed cabbirka faylka wax badan ma muhiimo.

## .pln, .pla, .tpl iyo .bpn faylasha mashruuca

Weli lama akhriyo: BimCraft wuu sheegaa markii aad furto. Soo dhoofi IFC moodeelka iyo DWG sawiradaha; eeg [Fur faylasha mashruuca .pln iyo .pla](topic:pln-project-files).

## DWG iyo DXF

| Akhri | Faahfaahin |
|---|---|
| Spaces | Model space iyo xaashi kasta (layout), sida tab-kooda u kala horreeyo |
| Viewports | Viewports-ka xaashi kasta, oo leh miisaankooda, leffkooda iyo layers-ka la xiray |
| Layers | Magac, midab, on/off, frozen, plot flag iyo culeyska khadka |
| Objects | Xariiqyo, polylines, arcs, goobo, ellipses, splines, hatches iyo solids, qoraal iyo qoraal badan, blocks iyo attributes, cabbirro, leaders iyo multileaders, miisaska, dhibcaha, sawirro |
| Linked drawings | Waa la sawiraa meesha la geliyay, marka faylashooda la helo |
| Images | Waa la sawiraa faylasha sawirka marka la helo (PNG, JPEG, GIF, BMP, WebP; ma aha TIFF) |
| Equipment tags | Calaamadaha alaabta cunto-bixinta (`KCL-ITEM` attributes), jadwalka qalabka |

Wax kale waa lagu tiriyaa **Weli lama sawirin**, mar la male-awaalin. DWG-yada AutoCAD 2000 ilaa 2018 ayaa la hubiyay (R13 iyo R14 waa la aqbalaa, laakiin midna kuma jirin tijaabada; DWG-yada hore ma furmaan); panel-ka {{ui:Naqshadda}} wuxuu muujiyaa koodka qaabka (sida AC1032). DXF-yada nooc kasta way furmaan, R12 oo ku jirta. Labaduba waxa akhriya akhristayaasha BimCraft ee u gaarka ah, tab-kan. Waxba lama kaydiyo DWG ama DXF.

## Galka

| Nooca | Kordhinta | Warbixinta |
|---|---|---|
| Models | `.rvt` `.rfa` `.rte` `.rft` | Waa la kooxeeyaa nuqullada lambaraysan, waa la hubiyaa caafimaadka, kaarka waa la akhriyaa, xiriirrada waa la hubiyaa |
| IFC | `.ifc` | Waa la liistaa; wuxuu furmaa 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Waa la liistaa, oo leh moodeelada ay xidhaan; DWG iyo DXF waxay furmaan 2D, DGN ma furmo |
| Leftovers | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Waxay ku jiraan **Dhig dhinac** |
| Housekeeping folders | `*_backup`, `*_log`, `Revit_temp`, galalka qarsoon | Waxay ku jiraan **Dhig dhinac**, lama akhrin |

Eeg [Warbixinta galka: doorarka, xaaladaha iyo xiriirrada](topic:folder-roles).
