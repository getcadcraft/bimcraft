---
title: Lêers wat BimCraft oopmaak en stoor
summary: Elke formaat wat BimCraft oopmaak, wat dit behou, wat dit stoor, waar gestoorde lêers gaan, en wat tussen blaaiers en vanlyn verskil.
keywords: formate, oopmaak, stoor, uitvoer, aflaai, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, oplaai, privaatheid, lêergrootte
from: a1f0161b
---

BimCraft lees lêers op jou rekenaar, in die blaaiertablad. **Niks word opgelaai** na CadCraft of enigiemand anders nie. Wanneer jy stoor, gee BimCraft die blaaier 'n nuwe lêer om af te laai; dit skryf nooit oor 'n lêer wat jy oopgemaak het nie.

## Wat dit oopmaak

| Formaat | Ekstensies | Wat jy kry |
|---|---|---|
| IFC | `.ifc` | Die model in 3D, verdiepings, elementtellings en elke element se eienskappe. Name, etikette en enkele eienskapwaardes kan verander word. |
| Projek- en familielêers | `.rvt` `.rfa` `.rte` `.rft` | 'n Lêerkaart: vrystelling, bouweergawe, werkdeling, projekinligting, familieparameters, gekoppelde lêers en die voorskou-prent. Geen 3D nie. |
| DWG | `.dwg` | Die tekening in 2D: modelruimte, elke blad, lae, gekoppelde tekeninge, beelde en drukaansig. Modelruimte ook in 3D. Formate vanaf AutoCAD 2000 tot 2018 is die wat nagegaan is. |
| DXF | `.dxf` | Dieselfde as DWG. |
| STEP | `.step` `.stp` | 'n Onderdeel, 'n stuk toerusting of 'n verskaffer se model (AP203, AP214, AP242) in 3D: elke soliede liggaam word een element ('n boubestanddeel-proxy) van 'n klein IFC-model op een verdieping, gelees as driehoeke op sy ware grootte, 'n samestelling met elke onderdeel waar die lêer dit plaas. Dit werk daarna soos enige IFC: eienskappe, snitte, meet, stoor as IFC. Kleure en die samestellingsboom word nie gelees nie. |
| Puntwolke | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Die skandering in die 3D-aansig, langs 'n model of op sy eie: sien [Wys 'n puntwolk langs die model](topic:point-clouds). |
| Projekbundel | `.ccbundle.zip` | Die model met sy aansigte, uitlegte en eienskapgroepe: sien [Maak 'n projekbundel oop](topic:open-project-bundle). |
| 'n Vouer | enige | 'n Verslag van elke model, tekening en projekbundel daarin. Enige IFC, model, tekening of bundel in die verslag open met 'n klik. |

[Wat BimCraft uit elke formaat lees](topic:file-formats) gee meer besonderhede.

BimCraft bepaal wat 'n lêer is deur na sy eerste grepe sowel as sy naam te kyk, dus open 'n projeklêer met 'n ongewone ekstensie steeds as 'n lêerkaart.

### Nie oopgemaak nie

- `.ifczip` en `.ifcxml`: BimCraft sê ".ifczip word nog nie ondersteun nie. Stoor of voer die model uit as 'n gewone .ifc-lêer." Pak die `.ifczip` uit (dit bevat 'n gewone `.ifc`) of voer weer uit as gewone IFC.
- DGN-tekeninge word in 'n vouerverslag gelys, maar open nie.
- PDF, beelde en kantoorlêers open nie op hul eie nie. Beelde word as prente binne 'n DWG gebruik, en {{ui:Bou}} › {{ui:Uit 'n tekening…}} verander die bladsye van 'n PDF of 'n skandering in mure: sien [Mure uit 'n stel planne](topic:walls-from-plans).

## Wat dit stoor

| Jy klik | Jy kry | Waar |
|---|---|---|
| {{ui:Stoor as IFC}} | 'n Nuwe IFC-lêer met jou wysigings, genoem "*oorspronklike naam* (edited).ifc" | Jou blaaier se aflaaivouer |
| {{ui:Laai CSV af}} in die toerustingskedule | 'n CSV van die items in die lys, genoem "*tekeningnaam* equipment.csv" | Jou blaaier se aflaaivouer |

Ander dinge word gestoor waar hulle gemaak word, elk in sy eie onderwerp: {{ui:USD}} ([Voer die model uit as USD](topic:usd)), die .glb {{ui:Vir weergawe}}, weergegee prente, blaaie en planne as PDF, skedules en lyste as CSV, BCF-kwessies, die COBie-sigblad, familielêers, en geregistreerde skanderings as LAS of E57. BimCraft stoor nie DWG, DXF of projeklêers nie, en dit verander nooit die lêers wat jy oopgemaak het nie.

:::chromium
Chrome en Edge stoor aflaaie na die vouer wat in hul instellings gestel is, gewoonlik Aflaaie. Om elke keer gevra te word waar om te stoor, skakel "Vra waar om elke lêer te stoor voor dit afgelaai word" aan in die blaaier se aflaai-instellings.
:::

:::firefox
Firefox stoor na die Aflaaie-vouer, tensy jy dit in sy instellings op "Altyd vra waar om lêers te stoor" gestel het.
:::

:::safari
Safari stoor na Downloads, tensy jy 'n ander vouer kies onder **Safari > Settings > General > File download location**.
:::

## Stoor 'n tweede keer

Elke stoor laai die hele model af met **elke wysiging sedert jy dit oopgemaak het**, nie net die wysigings ná die laaste stoor nie. Die {{ui:Veranderinge}}-lys begin na elke stoor weer leeg, dus kan jy nie verby 'n stoor ontdoen nie. Om van die oorspronklike weer te begin, maak die oorspronklike lêer weer oop.

## Groot lêers en geheue

- **IFC**-lêers word heeltemal in die blaaierblad se geheue gelees, en die 3D-geometrie neem bo-op meer geheue. 'n Model van 'n paar honderd megagrepe kan te veel vir 'n skootrekenaar wees. Bo 1.5 miljoen driehoeke word rante afgeskakel om geheue te spaar ("Edges are off for very large models").
- **Projeklêers** word nie heeltemal gelees nie. BimCraft lees net die klein dele wat dit nodig het, sowat 40 KB tot 100 KB, hoe groot die lêer ook al is. 'n 500 MB sentrale model op 'n netwerkskyf open dus in 'n oogwink.
- **DWG- en DXF-lêers** word heeltemal gelees. 'n Baie groot tekening wys "This drawing is very large; only part of it is shown."
- **Vouers** tot 20,000 lêers open. Slegs die paar kilogrepe wat elke modelkaart nodig het, word gelees.

Sien [Blaaiers, toestelle en geheue](topic:platforms) vir meer.

## Aanlyn en vanlyn

Oopmaak van lêers het nooit internet nodig nie. Een leser laai die eerste keer van die webwerf af wanneer jy dit nodig het: die IFC-enjin, die eerste keer wat jy 'n IFC-model oopmaak ("Starting the IFC engine…"). Die DWG- en DXF-lesers is deel van die program.

:::offline
Jy is vanlyn. As die program se knoppie {{ui:Vanlyn gereed}} sê, open elke formaat soos gewoonlik. As nie, kan 'n IFC-model nie oopmaak nie, tensy een reeds in hierdie blaaiertablad oopgemaak is: koppel eers weer aan. Sien [Aanlyn en vanlyn](topic:online-offline).
:::

Om BimCraft sonder 'n verbinding te gebruik, klik {{ui:Stoor vir vanlyn}} in die programbalk terwyl jy aanlyn is, en wag vir {{ui:Vanlyn gereed}}. Die gestoorde kopie is sowat 33 MB. Dit sluit die IFC-enjin in, so IFC-modelle open ook vanlyn. [Werk vanlyn](common:offline) verduidelik gestoorde kopieë in die algemeen.

## Wolkstoring

Wolkstoring is nog nie beskikbaar nie. Stoor jou gewysigde kopieë op jou eie rekenaar of jou kantoor se lêerbediener, soos enige ander lêer. Sien [Jou lêers](common:your-files).
