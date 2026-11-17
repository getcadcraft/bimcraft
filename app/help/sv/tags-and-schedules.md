---
title: Tagga element och gör förteckningar efter tagg
summary: Definiera egna taggar (ett namn, en typ, tillåtna värden, vilka klasser), tagga många element på en gång och gör förteckningar vars kolumner, filter och grupper läser taggarna. Taggarna sparas i IFC-filen.
keywords: taggar, tagg, taggning, egna egenskaper, parametrar, delade parametrar, egenskapsuppsättning, pset, förteckning, filter, gruppera efter, ytbehandling, brandklass, massredigering, csv
from: 9cc7c90d
---

## Vad du gör

En tagg är en egen egenskap, till exempel *Ytbehandling* eller *Brandklass*. Du definierar den en gång för projektet, sätter den på många element samtidigt, och varje förteckning i BimCraft kan läsa den: taggförteckningen här, {{ui:Mängder}}, Sök, Färg efter egenskap och [Dokument från modellen](topic:documents-from-the-model).

## Steg

1. Öppna en IFC-modell, eller starta en ny byggnad.
2. I den vänstra panelen, under {{ui:Mängder}}, öppna {{ui:Taggar}}.
3. Klicka på {{ui:Lägg till en tagg}}. Ge den ett namn och välj dess typ. Om du vill, lista de tillåtna värdena (med kommatecken) och klasserna den är för (`IfcDoor`, `IfcWall` …). Klicka på {{ui:Lägg till taggen}}.
4. Markera elementen i modellen (Sök hjälper till: välj alla dörrar på en gång).
5. Under {{ui:Tagga markeringen}}, välj eller skriv ett värde för varje tagg du vill sätta, lämna de andra som de är, och klicka på {{ui:Verkställ på … markerade element}}.
6. Under {{ui:Taggförteckning}}, bocka i kolumnerna, lägg till filter, välj {{ui:Gruppera efter}} och klicka sedan på {{ui:Ladda ner CSV}}.

## Vad du bör se

- Ett steg i ändringslistan för varje sparad definition och varje taggning. {{ui:Ångra}} tar tillbaka det.
- Element av en klass som en tagg inte är för utelämnas från den taggen, och statusraden säger hur många.
- Taggförteckningen listar en rad per element, grupperad efter fältet du valde. Klicka på en rads första cell för att välja det elementet.
- {{ui:Mängder}} listar taggarna under `CadCraft_Tags`, så att du kan summera areor eller antal per tagg där.

## Typer

Typerna är samma lista som familjeparametrar: Längd (millimeter), Vinkel (grader), Tal, Heltal, Ja / Nej, Penna (1–16), Text, Material och Fyllning. Ett värde som inte passar sin typ, eller inte är ett av de tillåtna värdena, avvisas med ett meddelande, och inget ändras.

## Bra att veta

- Allt är vanlig IFC, så andra program läser värdena. Definitionerna finns i egenskapsuppsättningen `CadCraft_TagDefs` på projektet, och värdena i egenskapsuppsättningen `CadCraft_Tags` på varje element (en egenskap per tagg). Längder skrivs i filens längdenhet.
- `IfcWall` i en taggs klasser omfattar även IfcWallStandardCase och elementväggar.
- Att byta namn på en tagg byter namn på dess värden på varje element i samma steg. Att ta bort en tagg tar bara bort dess definition: värden som redan satts finns kvar på elementen som vanliga egenskaper. Töm dem först (välj {{ui:Rensa}}) för att ta bort dem.
- Taggar i CadCraft-ritappen (blockattribut) finns inte ännu.
