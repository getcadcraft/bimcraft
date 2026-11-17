---
title: Ontwikkelingsniveau (LOD) en mijlpaalcontroles
summary: Geef elementen een ontwikkelingsniveau, zie waar dat vandaan komt, controleer het model tegen het LOD dat een mijlpaal vraagt, en los ontbrekende tags en naamloze ruimten op. Elke controle geeft advies; niets wordt geblokkeerd.
keywords: lod, ontwikkelingsniveau, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mijlpaal, mijlpaaltabel, modelcontroles, ontbrekende tags, naamloze ruimten, vroeg generiek, ifc-klasse, classificatie
from: 2091c79b
---

## Wat u gaat doen

Geef aan hoe ver elk element is ontwikkeld, en controleer daarna het hele model tegen wat een projectmijlpaal vraagt.

## Stappen

1. Kies een element (of meerdere) en open {{ui:Eigenschappen}}. Zoek {{ui:Ontwikkelingsniveau}}.
2. Kies een niveau uit de lijst. Elk niveau heeft een naam naar wat het betekent, en elk niveau omvat de niveaus eronder. Eén stap ongedaan maken geldt voor de hele selectie.
3. Lees waar het niveau vandaan komt: dit element, het type ervan, of een ter plaatse geverifieerde markering.
4. Om het model te controleren, opent u links {{ui:Modelcontroles}} en daarna {{ui:LOD-mijlpalen}}. Kies de mijlpaal en de tabel (de starttabel, of uw eigen CSV- of JSON-bestand dat u laadt via {{ui:Belasting}}).
5. Klik op {{ui:Model controleren}}. De totalen en een regel per tabelrij tonen wat het vereiste niveau heeft bereikt en wat niet; de bevindingen verschijnen ook in de lijst met problemen.
6. Klik onder {{ui:Ontbrekende tags en naamloze ruimten}} op {{ui:Zoeken}}, pas de voorstellen aan als u wilt, en klik op {{ui:Toepassen}}.

## Wat u zou moeten zien

- Het niveau dat u op het element hebt gekozen, met de IFC-klasse en de classificatiecodes ernaast.
- Totalen en rijen voor de mijlpaal. Een tabel verandert nooit wat een niveau betekent: de schaal is vast, een tabel geeft alleen aan welk niveau een mijlpaal nodig heeft.
- "Vroeg generiek blijven": advies om elementen in een vroege mijlpaal generiek te houden. Het is alleen advies.

## Handig om te weten

- Hier wordt niets geblokkeerd. Een model onder het niveau dat een mijlpaal vraagt, wordt vermeld, niet geweigerd.
- De drie onderdelen van een niveau (geometrie, informatie, documentatie) kunnen elk worden ingesteld; een markering toont voldaan, onder of niet vermeld.
