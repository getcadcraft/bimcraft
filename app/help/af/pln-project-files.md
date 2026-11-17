---
title: Maak .pln- en .pla-projeklêers oop
summary: Wat BimCraft vandag met .pln-, .pla-, .tpl- en .bpn-lêers doen, en hoe jy IFC en DWG daaruit uitvoer sodat die model en tekeninge hier oopmaak.
keywords: pln, pla, tpl, bpn, projeklêer, argief, sjabloon, rugsteun, ifc-uitvoer, dwg-uitvoer, vertaler, sones, blaaie
from: 41fb921d
---

## Wat jy gaan doen

Kry 'n projek wat as `.pln` (projek), `.pla` (argief met sy biblioteek), `.tpl` (sjabloon) of `.bpn` (rugsteun) gestoor is, in BimCraft. Dit is Archicad se eie lêers.

## Wat vandag oopmaak

- **Die projeklêers self maak nog nie oop nie.** Hul formaat is nie gepubliseer nie, en BimCraft lees dit nog nie. Wanneer jy een oopmaak, sê BimCraft dit en verwys na hierdie bladsy.
- **BimCraft kontroleer die lêer se eerste grepe.** Archicad-projekte vanaf weergawe 17 begin met dieselfde kort handtekening, so BimCraft kan met sekerheid sê dat 'n lêer 'n Archicad-projek is. 'n Lêer met 'n Archicad-naam wat nie so begin nie, is waarskynlik hernoem, beskadig of kom uit 'n ouer weergawe. Die handtekening onderskei nie tussen 'n projek, 'n argief en 'n sjabloon nie.
- **'n IFC-uitvoer maak volledig oop**: die model in 3D, verdiepings, sones as ruimtes, elementdata, eiendomstelle en klassifikasies, met elke BimCraft-instrument.
- **'n DWG-uitvoer maak oop** in die 2D-aansig, met sy lae en uitlegte, en in {{ui:3D}}. Om dit te wysig, gebruik {{ui:Wysig in CadCraft}}.

Of bring die hele projek as een zip, met sy aansigte, uitlegte en eienskapgroepe: sien [Maak 'n projekbundel oop](topic:open-project-bundle).

## Voer IFC uit (die model)

1. Maak die projek in Archicad oop.
2. Kies **Lêer > Stoor as**, en kies **IFC** as die lêertipe.
3. Kies 'n IFC-vertaler (Archicad se naam vir 'n stel IFC-uitvoerinstellings). Een vir **IFC4 Reference View** of **IFC2X3 Coordination View 2.0** pas by BimCraft. IFC4X3 maak ook oop.
4. Kies wat uitgevoer moet word: die hele projek, of net die elemente wat sigbaar is op die verdiepings waarna jy kyk.
5. Stoor, klik dan {{ui:Kies 'n lêer}} in BimCraft en kies die `.ifc`-lêer.

Kontroleer hierdie in die vertaler se instellings voordat jy uitvoer:

- **Sones**: voer dit uit, sodat kamers as ruimtes aankom. Klik {{ui:Ruimtes}} in BimCraft om dit te sien.
- **Eiendomme en klassifikasies**: voer dit uit, sodat hulle in {{ui:Eienskappe}} wys en in {{ui:Soek}}, {{ui:Kleur}} en {{ui:Hoeveelheidstotale}} gebruik kan word.
- **Gewone `.ifc`**, nie `.ifczip` of `.ifcxml` nie. BimCraft maak net gewone `.ifc` oop.

## Voer DWG uit (die tekeninge)

1. Maak die plan, snit of uitleg oop wat jy wil hê.
2. Kies **Lêer > Stoor as**, en kies **DWG** as die lêertipe.
3. Kies 'n DXF-DWG-vertaler, en stoor.
4. Vir 'n hele stel blaaie, stoor die uitlegte vanaf die Uitlegboek, of publiseer hulle as DWG.
5. Maak die `.dwg` in BimCraft oop. Tekeninge wat deur die uitvoer gekoppel is, maak saam daarmee oop wanneer hulle in dieselfde gids is; sien [Gekoppelde tekeninge en prente](topic:dwg-linked-files).

## Probleemoplossing

- **"… is an Archicad project: its first bytes say so."** Voer IFC of DWG soos hierbo uit, en maak daardie lêer oop.
- **"… is named like an Archicad file but does not start like one."** Kyk waar die lêer vandaan kom: dit kan 'n ander soort lêer met 'n nuwe naam wees (probeer om dit onder sy regte uitbreiding oop te maak), 'n kopie wat nie klaar geword het nie, of 'n projek uit 'n weergawe voor 17. Maak dit in Archicad oop as jy kan, en voer dan IFC of DWG uit.
- **Die model maak sonder kamers oop.** Sones is nie uitgevoer nie. Skakel hulle aan in die IFC-vertaler en voer weer uit.
- **Openings word nie uitgesny nie.** BimCraft sê dit onder **Nog nie geteken nie** in die {{ui:Lêer}}-paneel. Voer weer uit; as dit bly, maak die model oop in die program wat dit gemaak het en kontroleer die openings daar.
- **Teks op die DWG lyk anders.** Die uitvoer kan lettertipes behou wat BimCraft nie het nie; BimCraft teken teks in 'n eenvoudige sans-serif-lettertipe.

Sien ook [Kry 'n projeklêer in 3D deur IFC](topic:rvt-to-ifc) en [Wat BimCraft uit elke formaat lees](topic:file-formats).
