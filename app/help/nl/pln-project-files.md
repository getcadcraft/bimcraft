---
title: Projectbestanden .pln en .pla openen
summary: Wat BimCraft vandaag met .pln-, .pla-, .tpl- en .bpn-bestanden doet, en hoe u er IFC en DWG uit exporteert zodat het model en de tekeningen hier openen.
keywords: pln, pla, tpl, bpn, projectbestand, archief, sjabloon, back-up, ifc-export, dwg-export, vertaler, zones, indelingen
from: 41fb921d
---

## Wat u gaat doen

Krijg een project opgeslagen als `.pln` (project), `.pla` (archief met de bibliotheek), `.tpl` (sjabloon) of `.bpn` (back-up) in BimCraft. Dit zijn de eigen bestanden van Archicad.

## Wat vandaag opent

- **De projectbestanden zelf openen nog niet.** Hun indeling is niet gepubliceerd en BimCraft leest die nog niet. Wanneer u er een opent, meldt BimCraft dat en verwijst het naar deze pagina.
- **BimCraft controleert de eerste bytes van het bestand.** Archicad-projecten vanaf versie 17 beginnen met dezelfde korte signatuur, dus BimCraft kan met zekerheid zeggen dat een bestand een Archicad-project is. Een bestand met een Archicad-naam dat niet zo begint, is waarschijnlijk hernoemd, beschadigd of afkomstig van een oudere versie. De signatuur onderscheidt een project, een archief en een sjabloon niet van elkaar.
- **Een IFC-export opent volledig**: het model in 3D, verdiepingen, zones als ruimten, elementgegevens, eigenschapssets en classificaties, met elke BimCraft-functie.
- **Een DWG-export opent** in de 2D-weergave, met de lagen en indelingen, en in {{ui:3D}}. Om het te bewerken, gebruikt u {{ui:Bewerken in CadCraft}}.

Of breng het hele project binnen als één zip-bestand, met de weergaven, indelingen en eigenschapsgroepen: zie [Een projectbundel openen](topic:open-project-bundle).

## IFC exporteren (het model)

1. Open het project in Archicad.
2. Kies **File > Save As** en kies **IFC** als bestandstype.
3. Kies een IFC-vertaler (Archicads naam voor een set IFC-exportinstellingen). Een van **IFC4 Reference View** of **IFC2X3 Coordination View 2.0** past bij BimCraft. IFC4X3 opent ook.
4. Kies wat u exporteert: het hele project, of alleen de elementen die zichtbaar zijn op de verdiepingen die u bekijkt.
5. Sla op, klik daarna in BimCraft op {{ui:Een bestand kiezen}} en kies het `.ifc`-bestand.

Controleer deze instellingen van de vertaler voordat u exporteert:

- **Zones**: exporteer ze, zodat kamers als ruimten binnenkomen. Klik in BimCraft op {{ui:Ruimten}} om ze te zien.
- **Eigenschappen en classificaties**: exporteer ze, zodat ze in {{ui:Eigenschappen}} verschijnen en gebruikt kunnen worden in {{ui:Zoeken}}, {{ui:Kleur}} en {{ui:Hoeveelheidstotalen}}.
- **Gewoon `.ifc`**, niet `.ifczip` of `.ifcxml`. BimCraft opent alleen gewone `.ifc`.

## DWG exporteren (de tekeningen)

1. Open de plattegrond, doorsnede of indeling die u wilt.
2. Kies **File > Save As** en kies **DWG** als bestandstype.
3. Kies een DXF-DWG-vertaler en sla op.
4. Voor een hele set bladen slaat u de indelingen op uit het Layout Book, of publiceert u ze als DWG.
5. Open de `.dwg` in BimCraft. Tekeningen die de export koppelt, openen mee wanneer ze in dezelfde map staan; zie [Gekoppelde tekeningen en afbeeldingen](topic:dwg-linked-files).

## Problemen oplossen

- **"… is an Archicad project: its first bytes say so."** Exporteer IFC of DWG zoals hierboven, en open dat bestand.
- **"… is named like an Archicad file but does not start like one."** Controleer waar het bestand vandaan komt: het kan een ander soort bestand zijn met een nieuwe naam (probeer het te openen onder de echte extensie), een kopie die niet klaar is, of een project van een versie vóór 17. Open het in Archicad als u kunt, en exporteer daarna IFC of DWG.
- **Het model opent zonder kamers.** De zones zijn niet geëxporteerd. Zet ze aan in de IFC-vertaler en exporteer opnieuw.
- **Openingen zijn niet uitgesneden.** BimCraft meldt dit onder **Nog niet getekend** in het paneel {{ui:Bestand}}. Exporteer opnieuw; blijft het zo, open het model dan in het programma waarin het is gemaakt en controleer de openingen daar.
- **Tekst op de DWG ziet er anders uit.** De export kan lettertypen bewaren die BimCraft niet heeft; BimCraft tekent tekst in een eenvoudig schreefloos lettertype.

Zie ook [Een projectbestand via IFC in 3D krijgen](topic:rvt-to-ifc) en [Wat BimCraft uit elk formaat leest](topic:file-formats).
