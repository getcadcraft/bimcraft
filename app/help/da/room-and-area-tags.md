---
title: Rum- og arealtags
summary: Sæt en tag med nummer, navn og areal på et rum eller et areal. Tagget følger med, og dets størrelse bestemmes af dets højde på papir.
keywords: tag, rumtag, arealtag, tag rum, tag areal, tag alle, tag alle utaggede, etiket, teksthøjde, papirhøjde, notering
from: 67059d8a
---

## Hvad du skal gøre

Tag rum og arealer ét ad gangen eller alle på én gang, og flyt et tag der, hvor det læses godt.

## Hvor værktøjerne er

- Båndlayouts: {{ui:Architecture}} › **Rum og areal** › {{ui:Tag Room}} og {{ui:Tag Area}}.
- Klassisk layout: værktøjslinjen {{ui:Draw}} › menuen {{ui:Rooms}}.
- Et valgt rum eller areal: {{ui:Properties}} › {{ui:Add a tag}}.

## Trin

1. Vælg {{ui:Tag Room}} og klik i et rum, der hvor tagget skal stå.
2. Eller tryk {{ui:Tag all untagged}} i rækken: hvert rum på denne etage, der ikke har et tag, får et, midt i rummet. Det er ét trin i Fortryd.
3. For at flytte et tag vælges det med Vælg og trækkes. Egenskaber har {{ui:Put it back in the middle}}.
4. {{ui:Tag Area}} fungerer på samme måde for arealer.

## Hvad et tag gør

- Det viser nummer, navn og areal, i dine visningsenheder.
- Det følger sit rum: omdøb rummet, flyt en væg, og tagets tekst og plads ændrer sig i samme trin.
- Det er dimensioneret på papir: {{ui:Text height on paper}} er i millimeter (2.5 til at starte med). Ved en visningsskala på 1:50 er et 2.5 mm tag 125 mm højt i modellen; ved 1:100 er det 250 mm.
- Et rum med et tag viser tagget i stedet for sin almindelige etiket.
- Når dets rum eller areal er væk, forsvinder tagget med det. Fortryd bringer begge tilbage.

## I IFC

Et tag er en IfcAnnotation (ObjectType ROOMTAG eller AREATAG) med sin tekst som en tekstliteral og GlobalId for det, det navngiver. Teksten i filen angiver arealet i kvadratmeter.

## Ikke lavet endnu

- Egne tagformer og en henvisningslinje.
- Tags på døre, vinduer og vægge er et særskilt værktøj (se tagstilene for arkene).

Se også [Rum og rumseparatorer](topic:rooms-and-separators).
