---
title: Van 'n projeklêer na BimCraft deur IFC
summary: Die IFC-uitvoerinstellings wat die beste in BimCraft oopmaak (weergawe, eiendomstelle, basishoeveelhede, vertrekke, gekoppelde modelle, koördinate), hoe om die resultaat oop te maak, en wat die uitvoer behou.
keywords: uitvoer, ifc-uitvoer, rvt na ifc, omskakel, 3d, geometrie, ifc2x3, ifc4, koördinasie-aansig, verwysingsaansig, ontwerpoordragaansig, eiendomstelle, basishoeveelhede, vertrekke, ruimtes, gekoppelde lêers, gedeelde koördinate, opmetingspunt, projekbasispunt, instellings
from: 3efd5fc9
---

## Wat jy sal doen

Draai 'n projeklêer om in 'n IFC-lêer wat jy in BimCraft kan wentel, inspekteer, nagaan en wysig. BimCraft lees nog nie die 3D-model binne 'n `.rvt`-lêer nie, so die uitvoer gebeur in die program wat die lêer gemaak het (Revit); BimCraft maak die resultaat oop.

## Stappe

1. Maak die projek oop in die program wat dit gemaak het. BimCraft se kaart noem die uitgawe waarin dit gestoor is.
2. Maak 'n 3D-aansig oop wat wys wat jy wil uitvoer.
3. Kies **Lêer > Uitvoer > IFC**.
4. In die uitvoerdialoog kies 'n opstelling (of **Wysig opstelling…**) met die instellings hieronder.
5. Kies 'n vouer en lêernaam, en voer uit.
6. In BimCraft klik {{ui:Kies 'n lêer}} en kies die nuwe `.ifc`-lêer. Gekoppelde modelle wat as hul eie lêers uitgevoer is, maak oop in dieselfde toneel met {{ui:Voeg 'n model by}}.

## Die instellings wat hier die beste oopmaak

| Instelling in die uitvoerder | Kies | Waarom |
|---|---|---|
| IFC-weergawe | **IFC4 Reference View** vir kyk, nagaan en hoeveelhede opneem; **IFC2X3 Coordination View 2.0** wanneer ander IFC2X3 nodig het | Albei maak volledig oop. **IFC4 Design Transfer View** maak ook oop, met meer presiese vorms, maar die lêer is groter en stadiger. |
| Lêertipe | **IFC** (gewoon) | BimCraft maak nie `.ifczip` of `.ifcxml` oop nie. |
| Fase / sigbare elemente | Die fase wat jy bedoel, en **Voer slegs elemente uit wat in aansig sigbaar is** wanneer jy die 3D-aansig daarvoor opstel | Laat weg wat jy opsetlik weggesteek het. |
| Eiendomstelle | **Voer Revit-eiendomstelle uit** en **Voer IFC-algemene eiendomstelle uit** | Hulle word die eiendomstelle wat BimCraft in {{ui:Eienskappe}} wys, en wat {{ui:Soek}}, {{ui:Kleur}} en {{ui:Modelkontroles}} gebruik. |
| Basishoeveelhede | **Voer basishoeveelhede uit** | {{ui:Hoeveelheidstotale}} en skedules gebruik hulle (lengtes, oppervlaktes, volumes) in plaas van raai. |
| Vertrekke en oppervlaktes | **Voer vertrekke in 3D-aansigte uit** (of die Vertrekke / Ruimtes-opsie) | Vertrekke kom as ruimtes aan: klik {{ui:Ruimtes}} om hulle te sien. |
| Gekoppelde lêers | **Voer gekoppelde lêers uit as aparte IFC's** | Elke skakel word sy eie lêer; maak hulle saam oop met {{ui:Voeg 'n model by}} en hulle lyn op. |
| Koördinaatbasis | **Gedeelde koördinate** (of die opmetingspunt) | Die lêer dra dan sy plek op die kaart (IfcMapConversion), so Meet › Ligging, kaartlae op die grond en puntwolke wat volgens kaartkoördinate geplaas is, werk. Die projekbasispunt hou die model naby die oorsprong, maar sonder sy kaartplek. |
| Verdeel mure en kolomme volgens vlak | Aan, wanneer jy hoeveelhede per verdieping opneem | Elke verdieping se deel is sy eie element. |

## Wat jy behoort te sien

Die model in 3D, met verdiepings uit die projek se vlakke en die projekinligting in die {{ui:Lêer}}-paneel. **Uitgevoer vanaf** noem die uitvoerder.

## Wat die uitvoer behou, en wat nie

- **Behou**: geometrie, verdiepings, elementsoorte, name, tipes, die meeste parameters (as eiendomstelle), basishoeveelhede wanneer gevra, vertrekke as ruimtes, en die kaartplek met gedeelde koördinate.
- **Nie behou nie**: aansigte, blaaie, aantekeninge, families as wysigbare families, werkstelle en ontwerpopsies. 'n IFC-lêer is 'n momentopname van die model se elemente, nie die projek nie. Vir die blaaie, voer DWG uit en maak dit oop in die 2D-aansig.

## Algemene foute

- **Parameters ontbreek in BimCraft.** Skakel die eiendomstelopsies hierbo aan en voer weer uit.
- **Vertrekke ontbreek.** Skakel die vertrekopsie aan, klik dan {{ui:Ruimtes}}.
- **Stoor as `.ifczip`.** Kies gewone IFC, of ontpak die `.ifczip`.
- **Geen kaartplek nie.** Voer uit met gedeelde koördinate; kontroleer dat die projek se opmetingspunt gestel is.
- **Verwag dat wysigings terugvloei.** Wysigings wat jy in BimCraft stoor, gaan in 'n nuwe IFC-lêer, nie in die projeklêer nie.
