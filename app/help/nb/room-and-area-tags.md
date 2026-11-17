---
title: Rom- og arealetiketter
summary: Sett en etikett med nummer, navn og areal på et rom eller et areal. Etiketten følger det og får størrelse etter høyden på papiret.
keywords: etikett, rometikett, arealetikett, merk rom, merk areal, merk alle, merk alle umerkede, merkelapp, teksthøyde, papirhøyde, merknad
from: 67059d8a
---

## Formål

Merk rom og areal ett om gangen eller alle på en gang, og flytt en etikett dit den leses godt.

## Hvor verktøyene finnes

- Båndoppsett: {{ui:Arkitektur}} › **Rom og areal** › {{ui:Merk rom}} og {{ui:Merk areal}}.
- Klassisk oppsett: verktøylinjen Tegn › {{ui:Rom}}-menyen.
- Et valgt rom eller areal: Egenskaper › {{ui:Legg til en etikett}}.

## Trinn

1. Velg {{ui:Merk rom}} og klikk i et rom, der etiketten skal stå.
2. Eller trykk {{ui:Merk alle umerkede}} på raden: alle rom på denne etasjen som ikke har en etikett, får en, midt i rommet. Det er ett steg i angre.
3. For å flytte en etikett, velg den med Velg og dra den. Egenskaper har {{ui:Flytt den tilbake til midten}}.
4. {{ui:Merk areal}} fungerer likt for arealer.

## Hva en etikett gjør

- Den viser nummer, navn og areal, i de valgte visningsenhetene.
- Den følger rommet sitt: gi rommet nytt navn, eller flytt en vegg, så endres etikettens ord og plass i samme steg.
- Den får størrelse på papiret: {{ui:Teksthøyde på papir}} er i millimeter (2,5 til å starte med). Ved visningsmålestokk 1:50 er en 2,5 mm etikett 125 mm høy i modellen; ved 1:100 er den 250 mm.
- Et rom med etikett viser etiketten i stedet for den vanlige merkelappen.
- Når rommet eller arealet er borte, går etiketten med det. Angre henter begge tilbake.

## I IFC

En etikett er en IfcAnnotation (ObjectType ROOMTAG eller AREATAG) med teksten som en tekstliteral, og GlobalId for det den nevner. Teksten i filen gir arealet i kvadratmeter.

## Ikke bygget ennå

- Egne etikettformer, og en pekerlinje.
- Etiketter på dører, vinduer og vegger er et eget verktøy (se etikettstilene for arkene).

Se også [Rom og romskillere](topic:rooms-and-separators).
