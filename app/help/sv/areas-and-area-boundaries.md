---
title: Areor och areagränser
summary: Mät bruttoarea eller uthyrbar area inom gränslinjer du ritar eller hämtar från väggarna, och lista areorna i en förteckning.
keywords: area, areor, areagräns, areaschema, bruttoarea, GFA, uthyrbar, areaplan, areaförteckning, välj väggar, inte omsluten
from: c79f96d2
---

## Vad du gör

Rita gränserna för ett areaschema, placera areor inom dem och läs av summorna.

## Var verktygen finns

- Bandlayouter: {{ui:Architecture}} › **Rum och area** › {{ui:Area}} och {{ui:Area Boundary}}.
- Klassisk layout: ritfältet › menyn {{ui:Rooms}}.

## Steg

1. Välj {{ui:Area Boundary}}. På raden väljer du {{ui:Scheme}}: Bruttoarea eller Uthyrbar. Varje schema har egna gränser.
2. Välj hur linjerna skapas i {{ui:Make by}}:
   - **Draw** (Rita): klicka punkt efter punkt.
   - **Pick walls: centre line** (Välj väggar: mittlinje): klicka på en vägg, så blir dess mittlinje en gräns.
   - **Pick walls: the face clicked** (Välj väggar: den klickade sidan): klicka på en vägg på den sida du vill ha; den sidan blir gränsen. För bruttoarea klickar du på utsidan av ytterväggarna.
3. Välj {{ui:Area}}. Välj samma schema, skriv ett namn, nummer eller en typ om du vill, och klicka inuti gränserna.
4. Arean mäts direkt. Markera den för att ändra dess namn, nummer eller typ i Egenskaper.

## Vad som följer vad

- En gräns som gjorts genom att välja en vägg följer den väggen: flyttar du väggen mäts arean om i samma steg.
- En gräns du ritat står kvar där du ritade den.
- Väggarnas sidor som möts i ett hörn möts även där, så fyra valda väggar sluter en area utan luckor.
- Areagränser visas i planen medan ett rum- eller areaverktyg är i handen, så att de inte stör planen i övrigt.

## Om gränserna inte sluter sig

Arean placeras ändå. Den säger **Ej omsluten** och mäter ingenting förrän gränserna sluter sig runt den. Detta är ett råd: inget blockeras.

## Förteckningen

Vänster panel › {{ui:Schedules}} › **Areor**: schema, nummer, namn, typ, våningsplan, area och omkrets, med en summa. Ett klick på en rad markerar arean. {{ui:Download CSV}} ger samma tabell.

## I IFC

En area är en IfcSpace utan kropp: PredefinedType GFA för bruttoschemat, USERDEFINED med ObjectType Rentable för uthyrbart. Den bär GrossFloorArea och GrossPerimeter, och ingen nettoarea, så att den inte förväxlas med ett rum. En gräns är en IfcVirtualElement.

## Finns inte ännu

- Egna scheman (bara Bruttoarea och Uthyrbar).
- Färgfyllning efter areatyp.
- Regler som placerar gränsen åt dig, till exempel "till glaskanten".

Se även [Rum och rumsavskiljare](topic:rooms-and-separators), [Rum- och areataggar](topic:room-and-area-tags).
