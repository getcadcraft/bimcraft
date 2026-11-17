---
title: Klipp en IFC-modell med ett sektionsplan
summary: Skär 3D-modellen uppifrån, framifrån eller från sidan, eller behåll bara det som finns inne i en sektionsbox eller en volym av flera lådor med lutande ytor, för att se inuti. Flytta snittet genom att dra eller skriva, vänd det, och välj vad snittet visar.
keywords: sektion, sektionsplan, sektionsbox, handtag, dra, marginal, markeringsbox, klippbox, snitt, urklippning, skiva, planritning, golvplan, fasad, inuti, interiör, vänd, förskjutning, sektionsvolym, trappstegad sektion, L-formad, luta, lutande snitt, sneddplan, extra plan
from: 6315e71a
---

## Vad du gör

Skär genom en IFC-modell med ett plan för att se inuti den: uppifrån för en planritning, eller framifrån eller från sidan för en sektion genom byggnaden.

## Steg

1. Öppna en IFC-modell. Se [Öppna en IFC-modell och titta runt i 3D](topic:open-ifc-model).
2. Klicka på {{ui:Section}} i verktygsfältet, eller tryck på {{key:X}}. Modellen skärs halvvägs upp, och ett fält visas under verktygsfältet.
3. Välj varifrån du ska skära: {{ui:Top}}, {{ui:Front}} eller {{ui:Side}}. Framsida och Sida vrider också vyn så att du ser snittet.
4. Flytta snittet: dra skjutreglaget **Förskjutning**, eller skriv ett avstånd i meter i rutan och tryck på {{key:Enter}}. Du kan skriva millimeter också, till exempel `1200 mm`.
5. Klicka på {{ui:Flip}} för att behålla andra sidan av snittet.
6. Klicka på ett element på snittet för att se dess egenskaper.
7. Klicka på {{ui:Off}}, klicka på {{ui:Section}} igen, eller tryck på {{key:X}} för att ta bort snittet.

## En sektionsbox

Klicka på {{ui:Box}} i samma fält för att bara behålla det som finns inuti en låda. Vart och ett av {{ui:X}}, {{ui:Y}} och {{ui:Z}} har två skjutreglage: var lådan börjar och var den slutar, i meter från modellens kant. Värdena visas bredvid dem.

- {{ui:Box round the pick}} anpassar lådan runt de element du valt och zoomar till dem. Den lämnar 300 mm marginal på varje sida; ändra det i {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Room round the pick}}.
- Med element valda gör {{ui:Show}} › {{ui:Section box round the pick}} eller {{key:Shift+X}} samma sak i ett steg, även när inget snitt är på.
- **Handtag** på lådan flyttar den med pekaren: dra en kvadrat i mitten av en yta för att flytta den ytan, en i mitten av en kant för att flytta de två ytor som möts där, eller en i ett hörn för att flytta de tre. Skjutreglagen följer med. I {{ui:Top}} flyttar ett hörn lådan i planen, i {{ui:Front}} eller {{ui:Side}} i fasad.
- {{ui:Whole model}} öppnar lådan för hela modellen igen.
- {{ui:Top}}, {{ui:Front}} eller {{ui:Side}} går tillbaka till ett plan.

## En volym av flera lådor, lutande ytor och extra plan

En låda är inte alltid den form du behöver: en trappstegad sektion, en L-formad flygel, eller ett snitt längs en vägg som inte är rät mot rutnätet.

1. I {{ui:Box}} klickar du på {{ui:Add a box}}. Snittet behåller nu det som finns inuti **någon** av lådorna, så två lådor ger en trappstegad eller L-formad volym. Listan bredvid anger vilken låda skjutreglagen ändrar ({{ui:Box 1}}, {{ui:Box 2}}…); {{ui:Remove this box}} tar bort den valda. En volym rymmer högst 8 lådor.
2. Öppna {{ui:Tilt and planes}} för att forma den valda lådan:
   - Välj en {{ui:Face}} och skriv hur långt den lutar åt varje håll, i grader (upp till 80). Ytan vrids kring sin mitt; de andra ytorna står kvar där skjutreglagen placerar dem. {{ui:Square}} återställer den.
   - {{ui:Add a plane}} skär lådan med ytterligare ett plan. {{ui:Faces}} är den riktning den bortskurna sidan vetter, i grader från X mot Y; {{ui:Slope}} är hur mycket den vrids uppåt (0 för ett lodrätt plan, 90 för ett plant); {{ui:Offset}} är hur långt planet ligger från lådans mitt, i meter. × tar bort det. En låda tar upp till 6 extra plan.
3. Där volymen skär genom massiva kroppar fylls snittytorna som tidigare, även där två lådor möts i ett steg.

:::tip
Om konturen försvinner och inget återstår, lämnar lutningarna eller planen inget kvar inuti den lådan; fältet säger det. Luta en yta tillbaka eller ändra ett plans förskjutning.
:::

## En byggnad vriden på sin tomt

Många modeller placerar byggnaden i en vinkel mot filens axlar (verkligt norr, delade koordinater). När väggarna går i en vinkel startar ett nytt snitt rätt mot byggnaden: {{ui:Front}}, {{ui:Side}} och lådan följer dess egna väggar, och {{ui:Square to the building}} i snittfältet är på. Klicka på den för modellens axlar, och igen för att gå tillbaka (statusraden säger hur mycket byggnaden är vriden). Med **Inställningar › BimCraft › En byggnad vriden på sin tomt › Som placerad på tomten** startar snitt och vyer i stället på modellens axlar. Se [Inställningar](topic:settings).

## Vad du ska se

- **Ovan** behåller det som ligger under snittet, så att du tittar ner i rummen. Förskjutningen mäts uppåt från modellens botten.
- **Framsida** behåller det som ligger bakom snittet, sett framifrån; **Sida** behåller det som ligger bortom det, sett från sidan. Förskjutningen mäts från modellens framsida eller sida.
- En tunn färgad kontur visar var planet är.
- Där planet skär genom en vägg, ett bjälklag eller en annan massiv kropp fylls snittytan i en mörk färg, som en ritad sektion. {{ui:Fill}} i fältet slår av och på detta.
- ViewCube i det nedre högra hörnet vrider modellen så att du ser snittet från vilken sida som helst.
- Klick väljer det du kan se: det som är bortskuret kan inte väljas.

## Vanliga misstag

- **Inget ändrades.** Snittet kan ligga ovanför taket eller utanför modellen. Dra skjutreglaget, eller skriv en mindre förskjutning.
- **Förskjutningen hoppade tillbaka.** Ett avstånd bortom modellen flyttas till dess ände, och statusraden säger det.
- **Ett ärende visar bara en del av min volym.** Ett ärende (BCF) behåller en låda med dess lutande ytor och plan: den första lådan i en volym. Statusraden säger det när du skapar ärendet.
- **Snittet är ihåligt.** {{ui:Fill}} i fältet är av: klicka på det för att fylla snittytorna av väggar, bjälklag och andra massiva kroppar.
- **Ett ifyllt snitt ser fläckigt ut eller saknar en bit.** Fyllning kräver slutna solider; ett element vars form i filen inte är sluten (ett enskilt blad, trädlöv) lämnas ofylld i stället för att målas över. Ett element som består av delar i olika färger (en ram och dess glas) fylls när dess delar sluter sig intill varandra.
- **Var är sektionsfältet?** Det sitter överst i 3D-vyn det skär: i 3D-halvan i {{ui:Split}}, och under ritfältet i {{ui:Plan}} ensam. I en låg vy rullar det.

## Nästa

- [Visa och dölj våningsplan, rum och kanter](topic:storeys-and-spaces)
- [Se en DWG- eller DXF-ritning i 3D](topic:dwg-in-3d) — ritningar i 3D har samma sektionsplan
