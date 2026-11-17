---
title: Inställningar för BimCraft
summary: Välj om rum och utrymmen visas, om kanter ritas och i vilken vy en modell öppnas, och börja placera med väggfångst på.
keywords: inställningar, alternativ, utrymmen, rum, ifcspace, kanter, linjer, prestanda, stor modell, öppningsvy, kamera, vy uppifrån, väggfångst, fångst
from: 4416e64f
---

Öppna {{ui:Inställningar}} med kugghjulet i appfältet eller {{key:Mod+,}}. Den första fliken, {{ui:BimCraft}}, innehåller inställningarna som hör till den här appen; {{ui:Allmänt}} innehåller dem som alla CadCraft-appar delar (tema, verktygsfält, paneler). BimCraft-inställningarna finns bara i appen: du ändrar dem här, och den här webbläsaren kommer ihåg dem. {{ui:Återställ BimCraft-inställningar}} längst ner i dialogrutan återställer dem, och de delade, till startläget.

## Menyer, tangenter och mus

Menystilen (BimCraft:s egna verktygsfält, en menyrad för hemdesign, en BIM-menyflik eller en ritningskommandorad), dina egna tangenter och menyer, och vad hjulet och musknapparna gör. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).

## När en modell öppnas

- **Visa rum och utrymmen** (av från början): rum och utrymmen är genomskinliga lådor som kan dölja väggarna bakom dem, så de börjar dolda. Knappen {{ui:Utrymmen}} ovanför modellen slår fortfarande på och av dem för den öppna modellen.
- **Kanter**: {{ui:Kanter på}} (startläget) ritar kantlinjerna som ger ritningsutseendet. {{ui:Bara små modeller}} ritar dem bara för modeller under 300,000 trianglar, vilket gör stora modeller snabbare att vrida. {{ui:Kanter av}} startar varje modell utan dem. Knappen {{ui:Kanter}} slår fortfarande av och på dem för den öppna modellen. Över 1.5 million trianglar är kanterna alltid av.

## Ritningar öppnas i

Hur en DWG- eller DXF-ritning visas först: {{ui:3D (snabbast)}} (startläget) ritar även en stor ritning snabbt, eller {{ui:Modell (2D)}} öppnar den platta modellrumsvyn. Flikarna ovanför ritningen växlar mellan {{ui:Modell}}, bladen och {{ui:3D}} när som helst. En ritning med inget i modellrummet, eller en webbläsare som inte kan visa 3D, öppnas alltid i 2D.

## Startvy

Kameran en modell öppnas med: {{ui:Anpassa}} (startläget, hela modellen från ett hörn), {{ui:Ovan}}, {{ui:Framsida}} eller {{ui:Sida}}. Knapparna ovanför modellen ändrar vyn när som helst.

**En byggnad vriden på sin tomt**: många modeller kommer med byggnaden i en vinkel mot filens axlar (vid mätning eller delade koordinater). {{ui:Rät mot byggnaden}} (startläget) visar en sådan byggnad rätvinklig: {{ui:Anpassa}}, {{ui:Ovan}}, {{ui:Framsida}}, {{ui:Sida}}, sidorna på {{ui:ViewCube}} och varje ny sektion följer dess väggar, och ViewCube:ns kompass pekar fortfarande mot modellens norr. {{ui:Som placerad på tomten}} behåller filens axlar. En byggnad vars väggar löper längs axlarna ser likadan ut i båda fallen.

## Placera biblioteksobjekt

**Börja med {{ui:Väggfångst}} på** (av från början): när du börjar placera eller klistra in ett biblioteksobjekt fångas dess baksida mot närmaste vägg, med framsidan mot rummet. {{key:Tab}} eller {{ui:Väggfångst}} i placeringsfältet stänger av den för tillfället. En våning utan väggar börjar utan den.

## Snittlåda

{{ui:Marginal runt markeringen}} är hur mycket utrymme {{ui:Sektionsbox runt markeringen}} lämnar på alla sidor om de markerade elementen, i millimeter: 300 från början, upp till 5000. Se [Skär en IFC-modell med ett sektionsplan](topic:section-plane).

## Plats

{{ui:Latitud och longitud i}} väljer systemet som {{ui:Mät}} › {{ui:Plats}} anger latitud och longitud i: WGS 84 (EPSG:4326, startläget, som GPS och webbkartor använder), {{ui:Filens eget datum}} eller något av ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 och CGCS2000. Filens egna kartsystem och datum visas alltid också. Se [Mät avstånd, ytor och platser i 3D](topic:measure).

## Hörnindikator

Det som sitter i det nedre högra hörnet av 3D-vyerna (en IFC-modell, och en ritning som växlats till 3D): {{ui:ViewCube}} (startläget), {{ui:Axelikon}} (ett litet X, Y och Z) eller {{ui:Inga}}. Ändringen sker direkt. 2D-ritningsvyn visar aldrig någon.

På ViewCube klickar du på en sida, en kant eller ett hörn för att titta från den sidan, drar kuben för att kretsa runt, drar ringen för att vrida runt och klickar på huset för startvyn.

## Ditt namn på ärenden

När du är inloggad får ärenden ditt kontos namn och BimCraft frågar inte efter något: den här delen visar {{ui:Från ditt konto (<name>)}}. {{ui:Använd ett annat namn}} öppnar en ruta för ett annat namn, som gäller tills du väljer {{ui:Använd mitt kontonamn}}. Utloggad frågar ärendeformuläret efter ett namn som förut. Se [Ärenden och BCF-filer](topic:issues-bcf).

## Assistenter

**Låt AI-assistenter och skript använda BimCraft** (av från början) låter en assistent på din dator nå den öppna modellen via CadCraft Studio: **Läs** hittar element och läser deras egenskaper, **Ändra vyn** isolerar, döljer och visar dem. **Aktivitet** listar dess anrop. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).

:::note
De andra inställningarna gäller när en modell öppnas eller när placeringen börjar. En modell som redan är öppen behåller sitt utseende tills du använder knapparna i verktygsfältet eller öppnar den igen.
:::

## Relaterat

- [Kopiera, klistra in och duplicera biblioteksobjekt](topic:copy-paste)
- [Placera utrustning och möbler från biblioteket](topic:place-from-library)
- [BimCraft-skärmen](topic:workspace)
- [Låt en AI-assistent arbeta med din modell](topic:assistants)
