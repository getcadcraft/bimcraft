---
title: Vanaf ander BIM- en tekenprogramme
summary: Hoe gewoontes van desktop-BIM-outeur en DWG-besigtiging na BimCraft oorgaan, en die verskille wat mense laat struikel.
keywords: oorskakel, migreer, bekend, desktop bim, familie, parameters, projekblaaier, eienskappepaneel, aansigkubus, xref, laagbestuurder, verskille, vergelyk
from: 2de629af
---

As jy Revit ken, sal die meeste van BimCraft in woorde bekend voel en in omvang onbekend. Die belangrikste verskil: **hierdie bou lees en inspekteer modelle en wysig IFC-data. Dit outeur nog nie soos Revit nie.** Jy kan nie mure teken, families plaas, aansigte of blaaie maak, of 'n projeklêer stoor nie. Wat jy wel kan doen, is om feitlik enige gebou-lêer op enige rekenaar met 'n blaaier oop te maak, te sien wat daarin is, 'n hele projekvouer na te gaan, en die data in 'n IFC-model reg te stel.

## Gewoontes gekarteer

| As jy gewoond is aan | In BimCraft |
|---|---|
| 'n `.rvt` in Revit oopmaak om die model te sien | BimCraft maak die `.rvt` oop as 'n lêerkaart: uitgawe, projekinligting, skakels, voorskou. Vir die 3D-model, voer IFC uit en maak dit oop. [Lees 'n projek- of familielêer](topic:read-rvt-file) |
| Nagaan in watter uitgawe 'n lêer gestoor is voor dit oopgemaak word | Die kaart sê "gestoor in Revit …" bo-aan, sonder om die lêer op te gradeer of aan te raak |
| Die Projekblaaier | Geen blaaier van aansigte en blaaie nie. 'n IFC-model het {{ui:Verdiepings}}- en {{ui:Elemente}}-lyste; 'n tekening het blad-oortjies |
| Die Eienskappe-paneel | Die {{ui:Eienskappe}}-paneel aan die regterkant, vir die element wat jy geklik het. IFC-eienskapstelle in plaas van parametergroepe |
| Instansie- en tipe-parameters | Instansie-eienskapstelle, en stelle gemerk "(tipe)". 'n Tipe-verandering pas op elke element van die tipe toe, soos in Revit. [Verander 'n tipe-eienskap vir elke element van 'n tipe](topic:type-vs-instance) |
| Wysig Tipe | Geen dialoog nie: klik op 'n waarde in 'n "(tipe)"-stel en tik |
| Baie elemente kies, filters, Kies alle instansies | Een element op 'n slag. Nog nie gebou nie |
| Die aansigkubus en die navigasiewiel | 'n Aansigkubus in die onderste regterhoek, vier knoppies ({{ui:Pas}}, {{ui:Bo}}, {{ui:Voor}}, {{ui:Syaansig}}) en vrye draai. Geen navigasiewiel nie |
| Shift en middel-sleep om te draai, middel-sleep om te pan | Links-sleep draai, regs-sleep (of {{key:Shift}} en sleep) pan, wiel zoem. Die {{ui:BIM-lint}}-kieslysstyl skakel oor na middel-sleep-pan en {{key:Shift}} met die middelknoppie om te draai. [Kieslyse, sleutels en muis](topic:menus-keys-and-mouse) |
| Verdiepingsplanne, snitte, snitbokse | Een {{ui:Snit}}-vlak op 'n slag ({{key:X}}); geen snitboks of 2D-planne nie. [Sny 'n IFC-model met 'n snitvlak](topic:section-plane) |
| Versteek in aansig, isoleer, sigbaarheid/grafika | {{ui:Verdiepings}} aan en af, {{ui:Ruimtes}} en {{ui:Rante}}. Nog geen versteek per element nie |
| Kamers | IFC-ruimtes, aanvanklik versteek. Klik op {{ui:Ruimtes}} |
| Stoor, Stoor as, sinkroniseer met sentraal | {{ui:Stoor as IFC}} laai 'n nuwe IFC-lêer af. Die oorspronklike verander nooit nie. Geen sentraal, geen gedeelde werk nie |
| Ontdoen met {{key:Mod+Z}} | Werk op IFC-wysigings tot jy stoor. [Verander IFC-eienskappe en stoor 'n gewysigde afskrif](topic:edit-ifc-properties) |
| Bestuur skakels | Maak die projekvouer oop: elke skakel word nagegaan en gemerk **In hierdie vouer**, **Dieselfde naam gevind**, **Biblioteeklêer** of **Nie in hierdie vouer nie**. [Maak 'n hele projekvouer oop](topic:open-project-folder) |
| Oudit, of 'n lêer oopmaak om te sien of dit korrup is | Die vouerverslag gaan elke afskrif en rugsteun na vir afgesnyde lêers, in sekondes. [Gaan 'n vouer na vir beskadigde afskrifte](topic:check-folder-health) |
| Die regte lêer uit 'n deurmekaar vouer kies | Die {{ui:Begin hier}}-blokkie stel een voor, met redes |

As jy meestal modelle oopmaak om dit na te gaan, soos in 'n modelnagaan- of IFC-besigtigingsprogram, kies die {{ui:Besigtiger}}-kieslysstyl: die besigtigings- en nagaangereedskap kom eerste, en die bougereedskap wag in een kieslys. Sien [Kieslyse, sleutels en muis](topic:menus-keys-and-mouse).

## Vanaf DWG-lêers besigtig

As jy DWG's in AutoCAD of 'n DWG-besigtiger oopmaak:

| As jy gewoond is aan | In BimCraft |
|---|---|
| Model- en uitlegoortjies onder | Oortjies bo die tekening: {{ui:Model}} en een per blad |
| ZOOM Extents, dubbel-klik die wiel | Dubbel-klik, {{key:F}} of {{ui:Pas}} |
| Pan met die middelknoppie | Sleep met enige knoppie |
| Die laagbestuurder | Die {{ui:Lae}}-lys: merk om te wys, ontmerk om te versteek, {{ui:Alles aan}} en {{ui:Alles af}} |
| Die xref-bestuurder | **Gekoppelde tekeninge** aan die regterkant, met **Gewys** of **Nie gevind nie**, en {{ui:Voeg gekoppelde tekeninge by…}} |
| Drukvoorskou | {{ui:Druikaansig}} of {{key:P}}: swart op wit met lynwydtes. Dit druk nie |
| Dataonttrekking van blokeienskappe | Die {{ui:Toerusting}}-oortjie vir getekende voedseldiensttekeninge, met {{ui:Laai CSV af}} |
| Meet, teken, wysig, stoor as | Nie in BimCraft nie. Die CadCraft-tekenprogram teken en wysig |

## Verskille wat mense laat struikel

- **Dit loop in die blaaier, en die blaaier is versigtig met jou lêers.** BimCraft kan net lêers en vouers lees wat jy aan dit gee, deur hulle te kies of in te sleep. Dit kan nie 'n lêer op eie stoom oopmaak nie, en dit kan nie oor een skryf nie. Elke stoor is 'n aflaai.
- **Niks word opgelaai nie.** Die woord "oplaai" in sommige blaaiers se vouerdialoë is die blaaier se eie woordkeuse. Die lêers bly op jou rekenaar.
- **IFC is die modelformaat.** 'n Projeklêer open as 'n kaart omdat sy 3D-inhoud nie gedokumenteer is nie. Behandel IFC as die manier waarop modelle na BimCraft kom.
- **Wysigings is kopieer-by-skryf.** As jy een element se waarde verander, verander dit nooit sy bure nie, selfs wanneer die uitvoerder daardie waarde tussen hulle gedeel het. Tipe-eienskappe is die bewuste uitsondering.
- **Geen projek, geen aansigte.** BimCraft wys een lêer op 'n slag en onthou niks daarvan nadat jy die oortjie toemaak nie, behalwe die name van onlangse vouers in Chrome en Edge.
- **Mac-sleutels.** Waar Revit se Windows-kortpaaie Ctrl gebruik, gebruik BimCraft se kortpaaie {{key:Mod}}: Command op 'n Mac.
- **Jou muisgewoontes.** Draai is die linkerknoppie, nie Shift en die middelknoppie nie, tensy jy die {{ui:BIM-lint}}-kieslysstyl kies of die knoppies self stel in [Kieslyse, sleutels en muis](topic:menus-keys-and-mouse).

Sien [Wat nog nie gebou is nie](topic:not-built-yet) vir wat om vandag te gebruik.
