---
title: Lêers wat BimCraft oopmaak en stoor
summary: Elke formaat wat BimCraft oopmaak, wat dit behou, wat dit stoor, waar gestoorde lêers heen gaan, en wat tussen blaaiers en aflyn verander.
keywords: formate, oopmaak, stoor, uitvoer, aflaai, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, oplaai, privaatheid, lêergrootte
from: a7275dbf
---

BimCraft lees lêers op jou rekenaar, in die blaaier-oortjie. **Niks word opgelaai** na CadCraft of enigiemand anders nie. Wanneer jy stoor, gee BimCraft vir die blaaier 'n nuwe lêer om af te laai; dit skryf nooit oor 'n lêer wat jy oopgemaak het nie.

## Wat dit oopmaak

| Formaat | Uitbreidings | Wat jy kry |
|---|---|---|
| IFC | `.ifc` | Die model in 3D, verdiepings, elementtellings en elke element se eienskappe. Name, etikette en enkele eienskapwaardes kan verander word. |
| Projek- en familielêers | `.rvt` `.rfa` `.rte` `.rft` | 'n Lêerkaart: vrystelling, bou, werkdeling, projekinligting, familieparameters, gekoppelde lêers en die voorskou-prent. Geen 3D nie. |
| DWG | `.dwg` | Die tekening in 2D: modelruimte, elke blad, lae, gekoppelde tekeninge, beelde en drukaansig. Modelruimte ook in 3D. Formate van AutoCAD 2000 tot 2018 is die wat nagegaan is. |
| DXF | `.dxf` | Dieselfde as DWG. |
| STEP | `.step` `.stp` | 'n Onderdeel, 'n stuk toerusting of 'n verskaffer se model (AP203, AP214, AP242) in 3D: elke soliede liggaam word een element (a building element proxy) van 'n klein IFC-model op een verdieping, gelees as driehoeke op hul ware grootte, 'n samestelling met elke onderdeel waar die lêer dit plaas. Daarna werk dit soos enige IFC: eienskappe, snitte, meet, stoor as IFC. Kleure en die samestellingsboom word nie gelees nie. |
| Puntwolke | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Die skandering in die 3D-aansig, langs 'n model of op sy eie: sien [Wys 'n puntwolk langs die model](topic:point-clouds). |
| Projekbundel | `.ccbundle.zip` | Die model met sy aansigte, uitlegte en eiendomsgroepe: sien [Maak 'n projekbundel oop](topic:open-project-bundle). |
| 'n Vouer | enige | 'n Verslag van elke model, tekening en projekbundel daarin. Enige IFC, model, tekening of bundel in die verslag open met 'n klik. |

[Wat BimCraft uit elke formaat lees](topic:file-formats) gaan in detail.

BimCraft besluit wat 'n lêer is deur na sy eerste grepe te kyk sowel as na die naam, so 'n projeklêer met 'n ongewone uitbreiding open steeds as 'n lêerkaart.

### Nie oopgemaak nie

- `.ifczip` en `.ifcxml`: BimCraft sê ".ifczip word nog nie ondersteun nie. Stoor of voer die model uit as 'n gewone .ifc-lêer." Pak die `.ifczip` uit (dit bevat 'n gewone `.ifc`) of voer weer uit as gewone IFC.
- DGN-tekeninge word in 'n vouerverslag gelys, maar open nie.
- PDF, beelde en kantoorlêers open nie op hul eie nie. Beelde word as prente binne 'n DWG gebruik, en {{ui:Bou}} › {{ui:Uit 'n tekening…}} verander die bladsye van 'n PDF of 'n skandering in mure: sien [Mure uit 'n stel planne](topic:walls-from-plans).

## Wat dit stoor

| Jy klik | Jy kry | Waar |
|---|---|---|
| {{ui:Stoor as IFC}} | 'n Nuwe IFC-lêer met jou wysigings, genoem "*oorspronklike naam* (edited).ifc" | Jou blaaier se aflaaigids |
| {{ui:Laai CSV af}} in die toerustingskedule | 'n CSV van die items in die lys, genoem "*tekeningnaam* equipment.csv" | Jou blaaier se aflaaigids |

Ander dinge word gestoor waar hulle gemaak word, elk in sy eie onderwerp: {{ui:USD}} ([Voer die model uit as USD](topic:usd)), {{ui:Collada}} (.dae en die Google Earth .kmz: [Voer die model uit as Collada of vir Google Earth](topic:collada)), die .glb {{ui:Vir weergawe}}, weergegee prente, blaaie en planne as PDF, skedules en lyste as CSV, BCF-kwessies, die COBie-sigblad, familielêers, en geregistreerde skanderings as LAS of E57. BimCraft stoor nie DWG-, DXF- of projeklêers nie, en dit verander nooit die lêers wat jy oopgemaak het nie.

:::chromium
Chrome en Edge stoor aflaaie in die gids wat in hul instellings gestel is, gewoonlik Aflaaie. Om gevra te word waar elke lêer gestoor moet word, skakel "Vra waar om elke lêer te stoor voor aflaai" aan in die blaaier se aflaai-instellings.
:::

:::firefox
Firefox stoor na die Aflaaie-gids tensy jy dit in sy instellings op "Vra altyd waar lêers gestoor moet word" gestel het.
:::

:::safari
Safari stoor na Aflaaie tensy jy 'n ander gids kies onder **Safari > Instellings > Algemeen > Lêeraflaailokasie**.
:::

## Stoor 'n tweede keer

Elke stoor laai die hele model af met **elke wysiging sedert jy dit oopgemaak het**, nie net die wysigings wat na die vorige stoor gemaak is nie. Die {{ui:Veranderinge}}-lys begin weer leeg na elke stoor, so jy kan nie verder as 'n stoor ontdoen nie. Om van die oorspronklike weer te begin, maak die oorspronklike lêer weer oop.

## Groot lêers en geheue

- **IFC**-lêers word heeltemal in die oortjie se geheue gelees, en die 3D-geometrie neem bo-op meer geheue. 'n Model van 'n paar honderd megabyte kan te veel wees vir 'n skootrekenaar. Bo 1.5 miljoen driehoeke word rante afgeskakel om geheue te spaar ("Rante is af vir baie groot modelle").
- **Projeklêers** word nie volledig gelees nie. BimCraft lees net die klein dele wat dit nodig het, ongeveer 40 KB tot 100 KB, hoe groot die lêer ook al is, so 'n sentrale model van 500 MB op 'n netwerkaandrywer open in 'n oomblik.
- **DWG**- en **DXF**-lêers word heeltemal gelees. 'n Baie groot tekening wys "Hierdie tekening is baie groot; slegs 'n deel daarvan word gewys."
- **Vouers** tot 20,000 lêers open. Net die paar kilobyte wat elke modelkaart nodig het, word gelees.

Sien [Blaaiers, toestelle en geheue](topic:platforms) vir meer.

## Aanlyn en aflyn

Oopmaak van lêers het nooit die internet nodig nie. Een leser laai die eerste keer van die webwerf as jy dit nodig het: die IFC-enjin, die eerste keer as jy 'n IFC-model oopmaak ("Begin die IFC-enjin…"). Die DWG- en DXF-lesers is deel van die program.

:::offline
Jy is aflyn. As die app-balk se knoppie {{ui:Vanlyn gereed}} sê, open elke formaat soos gewoonlik. As nie, kan 'n IFC-model nie oopgemaak word nie, tensy een reeds in hierdie oortjie oopgemaak is: koppel eers weer aan. Sien [Aanlyn en aflyn](topic:online-offline).
:::

Om BimCraft sonder 'n verbinding te gebruik, klik {{ui:Stoor vir vanlyn}} in die app-balk terwyl jy aanlyn is en wag vir {{ui:Vanlyn gereed}}. Die gestoorde kopie is ongeveer 33 MB; dit sluit die IFC-enjin in, so IFC-modelle open ook aflyn. [Werk aflyn](common:offline) verduidelik gestoorde kopieë in die algemeen.

## Stoor in die wolk

Stoor in die wolk is nog nie beskikbaar nie. Stoor jou gewysigde kopieë op jou eie rekenaar of jou kantoor se lêerbediener, soos enige ander lêer. Sien [Jou lêers](common:your-files).
