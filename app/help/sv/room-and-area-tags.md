---
title: Rum- och areataggar
summary: Sätt en tagg med numret, namnet och arean på ett rum eller en area. Taggen följer med, och storleken styrs av dess höjd på papper.
keywords: tagg, rumstagg, areatagg, tagga rum, tagga area, tagga alla, tagga alla otaggade, etikett, textens höjd, pappershöjd, annotation
from: 67059d8a
---

## Vad du gör

Tagga rum och areor ett i taget eller alla på en gång, och flytta en tagg dit den läses bra.

## Var verktygen finns

- Menyflikslayouter: {{ui:Architecture}} › **Rum & area** › {{ui:Tag Room}} och {{ui:Tag Area}}.
- Klassisk layout: ritverktygsfältet › menyn {{ui:Rooms}}.
- Ett valt rum eller en vald area: Egenskaper › {{ui:Add a tag}}.

## Steg

1. Välj {{ui:Tag Room}} och klicka i ett rum, där taggen ska sitta.
2. Eller tryck på {{ui:Tag all untagged}} på raden: varje rum på den här nivån som saknar tagg får en, i mitten. Det är ett steg i Ångra.
3. För att flytta en tagg väljer du den med Välj och drar den. Egenskaper har {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} fungerar på samma sätt för areor.

## Vad en tagg gör

- Den visar numret, namnet och arean, i dina visningsenheter.
- Den följer sitt rum: byter du namn på rummet eller flyttar en vägg, ändras taggens text och plats i samma steg.
- Den är storlekssatt på papper: {{ui:Text height on paper}} anges i millimeter (2.5 till att börja med). Vid vyskalan 1:50 blir en 2.5 mm tagg 125 mm hög i modellen; vid 1:100 blir den 250 mm.
- Ett rum med tagg visar taggen i stället för sin vanliga etikett.
- När dess rum eller area tas bort, försvinner taggen med det. Ångra återställer båda.

## I IFC

En tagg är en IfcAnnotation (ObjectType ROOMTAG eller AREATAG) med sin text som textliteral, och GlobalId för det den anger. Texten i filen anger arean i kvadratmeter.

## Finns inte ännu

- Egna taggformer och en hänvisningslinje.
- Taggar på dörrar, fönster och väggar är ett separat verktyg (se taggstilarna för bladen).

Se även [Rum och rumsavskiljare](topic:rooms-and-separators).
