---
title: Een projectbundel openen
summary: Een projectbundel is één zip met een model, de weergaven, de indelingen en de eigenschapsgroepen. Open hem, toon een weergave met de verdieping en de lagen, open een indeling en bekijk eigenschappen in de eigen groepen van het project.
keywords: bundel, projectbundel, ccbundle, zip, weergaven, weergavekaart, indelingen, indelingenboek, laagcombinatie, eigenschapsgroepen, normen, pln, sjabloon
from: b5b86e8f
---

## Wat u gaat doen

Open een **projectbundel** (`.ccbundle.zip`) en werk met het project zoals het was ingericht: de weergaven, de indelingen en de eigenschapsgroepen, bovenop het model.

Een bundel bevat:

- het model als IFC,
- de indelingen als PDF en DWG,
- een lijst van wat IFC niet meeneemt: de weergaven (elk met hun verdieping, laagcombinatie en schaal), de indelingen en de tekeningen die erop staan, eigenschapsdefinities in hun groepen, classificaties, en normen zoals lagen, pennensets, lijntypen, opvullingen, oppervlakken en composieten.

Bundels worden geschreven door een open-sourcescript dat binnen Archicad draait en Archicad zelf naar deze lijsten vraagt. BimCraft leest `.pln`- of `.tpl`-bestanden nooit rechtstreeks; zie [Open .pln- en .pla-projectbestanden](topic:pln-project-files).

## Een bundel maken

Het script is een voorvertoning: het is nog niet op elke versie van Archicad getest. Haal het op via [github.com/getcadcraft/bim-project-bundle](https://github.com/getcadcraft/bim-project-bundle). U hebt Archicad 24 of later en Python 3.8 of later nodig; verder hoeft u niets te installeren.

1. Sla `archicad_bundle.py` op in een map, bijvoorbeeld `C:\cc-bundle`.
2. Open in Archicad het project en maak een publicatieset met precies de naam **CadCraft bundle**: de 3D-weergave als IFC, elke indeling als PDF, en elke indeling opnieuw als DWG, gepubliceerd naar bestanden op schijf in één platte map.
3. Voer met het project geopend eenmalig `python archicad_bundle.py --probe --out .` uit. Het leest alleen en schrijft `probe.json`.
4. Voer `python archicad_bundle.py --out . --translator "IFC4 Reference View"` uit (gebruik de IFC-vertaler die u hebt gekozen). Archicad publiceert de set en het script schrijft `<project>.ccbundle.zip`.

Als publiceren via het script mislukt, publiceert u de set handmatig en voert u `python archicad_bundle.py --out . --no-publish --files <map>\*.ifc <map>\*.pdf <map>\*.dwg` uit. De README van de repository bevat alle opties. Als er iets niet doorkomt, open dan daar een issue en voeg `probe.json` toe.

## Een bundel openen

1. Klik op {{ui:Een bestand kiezen}}, of sleep de `.ccbundle.zip` naar BimCraft. In een map die u hebt geopend met {{ui:Een map openen}}, staan bundels vermeld onder **Projectbundels**; klik op één op naam.
2. Het model opent zoals elk IFC doet, en de sectie **Projectbundel** verschijnt links, onder de gegevens van het bestand.

Er wordt niets geüpload: de bundel wordt op uw computer gelezen, één bestand tegelijk, zodat een groot model niet twee keer wordt gekopieerd.

## Een weergave tonen

Onder **Weergaven** zijn de weergaven gegroepeerd op de mappen die ze in het project hadden. Klik op de naam van een weergave:

- **Een plattegrond** toont alleen de verdieping, van bovenaf gezien.
- **De laagcombinatie** verbergt de elementen op de lagen die die combinatie verbergt. De statusregel zegt hoeveel elementen dat verborg.
- **De schaal** staat naast de naam en in de statusregel.
- **Een 3D-weergave** toont alle verdiepingen.

Om alles weer te tonen, gebruikt u {{ui:Alles tonen}} in {{ui:Tonen}} en vinkt u elke verdieping aan.

:::note
BimCraft vindt de lagen via de laagtoewijzingen in het IFC-bestand. Als het IFC zonder die toewijzingen is geëxporteerd, verbergt een laagcombinatie niets, en zegt de statusregel 0 elementen verborgen.
:::

## Een indeling openen

Onder **Indelingen** toont elke indeling het nummer, de naam, het papierformaat en de weergaven die erop staan.

- **PDF** slaat de PDF van de indeling uit de bundel op.
- **DWG** opent de tekening van de indeling in de 2D-weergave. Klik op een weergave om terug te keren naar het model.
- **Openen in …** stuurt het bestand van de indeling naar de app die ermee werkt, in een nieuw tabblad: de PDF naar MarkupCraft, de DWG naar CadCraft. Het verschijnt alleen waar die app naast BimCraft open staat. Het bestand wordt uit de bundel gelezen terwijl het tabblad laadt, en er wordt niets geüpload.

Een indeling zonder beide zegt **Geen bestand in de bundel**.

## Eigenschappen zien in de groepen van het project

Kies een element. **Eigenschapsgroepen** toont de eigenschappen onder de groepen die het project heeft gedefinieerd, gekoppeld via de eigenschapsset en naam die de definitie voor IFC geeft, of anders op naam. De rest blijft gewoon in {{ui:Eigenschappen}}. **Eigenschapsdefinities** toont elke definitie met haar groep, type en IFC-naam.

## Normen en opmerkingen

- **Normen** telt de lagen, laagcombinaties, pennensets, lijntypen, opvullingen, oppervlakken, composieten en materialen in de bundel.
- **Opmerkingen** toont wat het script niet uit die versie van Archicad kon halen, elk veld dat BimCraft niet kon lezen, en elk bestand dat de bundel noemt maar niet bevat.

## Problemen oplossen

- **"… is een zip, maar geen projectbundel."** De zip heeft geen `manifest.json`. Pak hem uit en open het `.ifc`-bestand erin.
- **"… is een nieuwere projectbundel dan deze BimCraft kan lezen."** Werk BimCraft bij.
- **"… bevat het model niet dat het manifest noemt."** De zip is afgebroken of bewerkt. Maak de bundel opnieuw.
- **Een weergave toont elke verdieping.** De verdieping ervan staat niet in het IFC van het model (de statusregel zegt dat). Controleer of de IFC-export die verdieping bevatte.

Zie ook [Werken tussen twee BIM-programma's](topic:two-bim-programs) en [Wat BimCraft uit elk formaat leest](topic:file-formats).
