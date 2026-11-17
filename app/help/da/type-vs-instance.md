---
title: Ændr en typeegenskab for hvert element af en type
summary: Skeln typeegenskaber fra instansegenskaber, ændr en værdi på typen, så hvert element følger med, og kontrollér, at et enkelt elements egen redigering forbliver dens egen.
keywords: type, instans, typeegenskaber, familietype, delt, kopi ved skrivning, alle elementer, massered, producent, model
from: bffd8789
---

## Hvad du laver

Angiv producenten på en dørtype, så hver dør af den type viser den, og giv derefter én dør sin egen brandklassificering uden at røre de andre. Det viser forskellen på type- og instansegenskaber i BimCraft.

## Type eller instans?

- En **instansegenskab** hører til ét element: dets mærke, dets markering, dets rum, dets egen brandklassificering.
- En **typeegenskab** hører til den type, mange elementer deler: producent, model, bredden på en dørtype.

I {{ui:Properties}}-panelet har sæt, der kommer fra typen, » (type)« efter deres navn, og linjen »Type property: a change here applies to every element of this type.« Alle andre sæt hører til selve elementet. **Type** i den første blok viser typens navn.

## Trin: ændr typen

1. Åbn en IFC-model, og klik på en dør.
2. Notér dens **Type** i den første blok i {{ui:Properties}}-panelet, fx »Single-Flush 900 x 2100«.
3. Rul til et sæt, hvis navn ender på »(type)«.
4. Klik på den værdi, du vil ændre, fx **Manufacturer**.
5. Skriv den nye værdi, og tryk på {{key:Enter}}.
6. Se på listen {{ui:Changes}}: posten ender med »(type)«.
7. Klik på en anden dør af samme type.
8. Kontrollér den samme værdi: den viser også den nye værdi.

## Trin: ændr kun ét element

1. Klik på én dør.
2. Åbn et sæt uden »(type)« i sit navn, fx `Pset_DoorCommon`.
3. Klik på en værdi, fx **FireRating**, skriv en ny værdi, og tryk på {{key:Enter}}.
4. Klik på den næste dør, af samme type.
5. Kontrollér den samme værdi: den viser stadig den gamle værdi.

Selv hvis eksportøren delte det egenskabssæt mellem begge døre, gav BimCraft den første dør sin egen kopi, før den ændrede den. Se [Hvorfor din redigering kun ændrer ét element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Gem

1. Klik på {{ui:Save as IFC}} eller tryk på {{key:Mod+S}}.
2. Åbn den gemte kopi i BimCraft eller i en IFC-fremviser for at kontrollere begge ændringer.

## Typiske fejl

- **Ikke alle modeller har typer.** Nogle eksportører skriver ingen typeobjekter, eller de lægger alt på instansen. Så findes der ingen »(type)«-sæt, og hvert element skal ændres for sig.
- **Den samme værdi optræder i et typesæt og i et instanssæt.** Nogle eksportører skriver en parameter begge steder. Andre programmer læser måske den ene eller den anden; ændr begge, hvis de skal stemme overens.
- **At forvente at kunne vælge »alle døre af denne type« og redigere dem sammen.** Der er ingen multivalg i denne version. En typeegenskab er måden at ændre mange elementer på én gang.
