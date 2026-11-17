---
title: Golv i valfri form, öppningar och ramper
summary: Rita ett golv eller bjälklag efter dess kontur (en balkong, en konsol, ett vilplan), skär ut öppningar i det och rita ramper med deras vilplan.
keywords: golv, bjälklag, kontur, balkong, konsol, vilplan, däck, golvöppning, hål, schakt, tomrum, ramp, lutning, tillgänglighetsramp, rullstolsramp, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Vad du gör

Gör golv som inte följer rum, till exempel en balkong utanför väggarna, och rita ramper mellan nivåer.

## Rita ett golv efter dess kontur

1. Slå på {{ui:Rita}}, välj nivån och klicka sedan på {{ui:Bygge}} › {{ui:Golv efter kontur}}.
2. På raden under verktygen väljer du slag (betongbjälklag eller trägolv), användning (golv eller vilplan), tjocklek och hur högt dess översida ligger över nivån (0 = i nivå med nivåns golv; ett negativt värde sänker det).
3. Klicka på hörnen. Verktyget fångar mot väggar, rutnätslinjer och deras korsningar; håll {{key:Shift}} för att hålla en kant rätvinklig. Längden på varje kant och arean visas under tiden. {{key:Backspace}} tar tillbaka det senaste hörnet.
4. Klicka på det första hörnet igen, dubbelklicka eller tryck på {{key:Enter}} för att avsluta.

## Skär ut en öppning

Klicka på golvet (i 3D-vyn eller på dess kontur i planen), klicka sedan på {{ui:Lägg till en öppning}} under {{ui:Egenskaper}} och klicka på öppningens hörn inuti golvet, och avsluta som ovan. Golvets {{ui:Egenskaper}} listar dess öppningar, var och en med {{ui:Ta bort}}, samt dess area utan dem.

## Rita en ramp

1. Välj {{ui:Bygge}} › {{ui:Ramp}}. Ställ in dess bredd och om den går **till nivån ovanför** eller **uppåt en höjd** du skriver.
2. Välj hur den ställs in: **efter lutning** (1:12 till att börja med; rampen är så lång som höjden kräver) eller **efter längd** (ditt andra klick anger längden, och lutningen följer).
3. Klicka på rampens fot (mitten av dess understa kant) och klicka sedan på vägen upp. Förhandsvisningen visar dess längd, dess lutningssektioner och dess lutning.

En höjd på mer än 30 tum (760 mm) delas i lutningssektioner med ett 5 fot (1525 mm) vilplan mellan dem. Dessa är vanliga planeringsvärden, inte din byggnorm: kontrollera reglerna där du bygger. En ramp brantare än 1:12 flaggas under sina {{ui:Egenskaper}}.

## Vad du ska se

- Varje golv, öppning och ramp är ett steg: {{key:Mod+Z}} tar tillbaka det.
- I planen: ett ritat golvs kontur (en öppning ritas korsad) och en rampens kontur, lutningssektioner, vilplan och en pil uppåt med dess lutning.
- Egenskaper för ett ritat golv (slag, användning, tjocklek, översida, area, öppningar) och för en ramp (bredd, översida, höjd, lutning eller längd); {{key:Delete}} tar bort endera.
- En ramp till nivån ovanför följer den nivån när dess höjd ändras.
- I IFC-filen: ett ritat golv är ett bjälklag (IfcSlab, ett golv eller ett vilplan) med sina öppningar utskurna (IfcOpeningElement); en ramp är en IfcRamp uppbyggd av lutande sektioner (IfcRampFlight) och vilplansbjälklag, med sin lutning och bredd.

:::note
Golv ritade så här står kvar där du ritade dem. Golv gjorda med {{ui:Golv}} följer rummen när väggarna flyttas: se [Rum, golv, innertak och tak](topic:floors-and-roofs).
:::
