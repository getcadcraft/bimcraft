---
title: Väggformer, delning, förskjutning, töjning och lås
summary: Rita väggar som en rektangel, polygon, båge, på valda linjer eller runt en kontur; dela dem, ta bort en bit, förskjut, töj med en låda, rada upp dem och lås dem till varandra, till ett mått eller till en rutnätslinje. Varje ändring håller väggarna sammanfogade och är ett ångra-steg.
keywords: byt typ, ändra typ, typbyte, vad som flyttades, lod, utvecklingsnivå, sammanfogningsstil, gering, stötfog, kapad, väggskarvar, nästa, går igenom, tillåt inte sammanfogning, tillåt sammanfogning, lagerprioritet, kärna, prioritet, korsning, rektangel, roterad rektangel, polygon, inskriven, omskriven, båge, centrum, mittpunkt, tangentbåge, välj linjer, flik, spåra, kontur, trollstav, dela, dela med mellanrum, mellanrum, ta bort segment, sammanfoga igen, förskjutning, kopia, lådtöjning, markeringsram, töj, rada upp, lås, hänglås, villkor, lås mått, redigera mått, rutnät, lås till rutnät, flytta rutnätslinje, placeringsförskjutning, fri från sammanfogning, fristående, växa från, mät från, mittlinje, insida, utsida, koppla bort, alt
from: 5b7d2f75
---

## Vad du gör

Gör och ändra väggar med recepten i väggverktyget. Varje recept slutar på samma sätt som när du ritar en vägg genom sina hörn: hörnen sammanfogas av sig själva, sammanfogningarna sparas i filen, och hela ändringen är ett steg i **Ändringar** som {{ui:Ångra}} tar tillbaka. Väggarna behåller sin identitet: en vägg du delar, förskjuter eller töjer är fortfarande samma vägg, med sina dörrar, fönster och mått.

## Rita en rektangel, polygon eller båge

Med {{ui:Rita}} på öppnar du {{ui:Former}} i gruppen Rita (eller väljer en form i väggraden **Form**-listan). Väggraden visar väggtypen, ritningsreferensen, utsidan och överkanten, som för verktyget {{ui:Vägg}}. Klicka sedan, eller skriv in punkterna (x,y · @dx,dy · @längd<vinkel · en längd längs pekaren):

- **Rektangel**: två motsatta hörn. Fyra väggar, fyra hörnsammanfogningar, ett steg.
- **Roterad rektangel**: där första sidan börjar och slutar (det anger dess vridning och längd), sedan ett tredje klick för den andra sidan.
- **Polygon**: mittpunkten, sedan ett hörn (**Inskriven**) eller mitten av en sida (**Omskriven**). Ange först **Sidor** (3 till 64).
- **Båge, centrum**: centrum, start (det anger radien), slut. **Varv**: den kortare vägen, moturs eller medurs. En svep över tre fjärdedelar av en cirkel ritas som två väggar.
- **Tangentbåge**: klicka på slutet av en vägg, sedan där bågen slutar. Bågen lämnar väggens slut i väggens egen riktning.

En sluten form får sin utsida utåt. Ritad på **Utsida** eller **Insida** är den yta du klickar på den yta som står kvar.

## Väggar på linjer du redan har

- **Välj linjer**: klicka på en linje så läggs en vägg på den. Tryck på {{key:Tab}} (eller håll ned {{key:Shift}} när du klickar) för att ta hela kedjan av linjer som är sammanfogade ände mot ände. Linjerna är den här vyns ritlinjer, spårningsreferensen och rutnätslinjerna.
- **Spåra kontur**: klicka inuti ett område som är slutet av dessa linjer eller av väggar. Väggarna går runt den minsta ytan kring klicket.

## Ställ in före ritning: förskjutning och sammanfogning

Väggraden har två fält till, som används av verktyget {{ui:Vägg}} och formerna:

- **Förskjutning**: väggarna ritas så långt från linjen du klickar: + åt dess vänstra sida, − åt dess högra, sett i ritriktningen.
- **Sammanfoga**: avmarkera den för att rita fristående väggar. Deras ändar får **Tillåt inte sammanfogning** och förblir fria vart de än går (se [Ändra en vägg](topic:change-a-wall-or-door)).

## Dela, ta bort en del, sammanfoga igen

Öppna {{ui:Väggar}} i gruppen Redigera.

- **Dela**: klicka på en vägg där den ska skäras, eller skriv avståndet från dess start. Nära en vägg som korsar den snäpper snittet till där de möts. De två delarna har samma typ och förblir sammanfogade ände mot ände. **Mellanrum** lämnar ett utrymme med den längden centrerat på snittet. **Fria ändar** ger snittändarna Tillåt inte sammanfogning i stället (Inställningar › BimCraft › {{ui:Väggar}} › **När en vägg delas** anger vilken som är ibockad från början). En dörr eller ett fönster följer med den del den står i; ett snitt genom en dörr eller ett fönster avvisas.
- **Ta bort segment**: klicka där delen börjar och där den slutar. En dörr i delen följer med den.
- **Sammanfoga igen**: klicka på de två delarna av en vägg (i linje, samma typ). De blir en vägg igen, den första du klickade på, med dörrarna från båda.

## Sammanfogningsstil, tillåt inte sammanfogning, lagerprioritet

Öppna {{ui:Väggar}} i gruppen Redigera.

- **Sammanfogningsstil**: klicka på ett hörn där två raka väggar slutar. Varje klick går till nästa stil: **Gering** (båda ändarna skärs längs linjen från inner- till ytterhörnet, vilket varje hörn börjar med), **Stöt** (en vägg går igenom till den andra väggens yttre yta, som stannar mot dess sida) och **Kapad** (som stöt, och väggen som går igenom slutar rakt; i en rät vinkel ser den ut som stöt). **Nästa**, eller {{key:Tab}}, gör den andra väggen till den som går igenom. **Stil**-listan i raden visar hörnet du klickade senast. Samma två val finns i **Egenskaper** för en vägg: **Sammanfogningsstil vid start / vid slut** och **Går igenom**. Varje ändring är ett steg i **Ändringar**. Planen, 3D-kroppen, rummen och mängderna följer med.
- Vid ett T går alltid väggen vars sida möts igenom. Där två väggar korsas anger ett klick (eller **Kontinuerlig där den korsar** i Egenskaper) vilken av de två som är kontinuerlig; det avgör vilken väggs skikt som ritas genom korsningen.
- Stilen hör till sammanfogningen: den stannar kvar när väggarna flyttas och försvinner bara när sammanfogningen gör det (väggen tas bort, delas vid den änden, eller änden får Tillåt inte sammanfogning). Ett hörn med en krökt vägg, eller där tre eller fler väggar möts, behåller geringen. Ett hörn skarpare än ungefär 30 grader, eller flackare än ungefär 150, faller också tillbaka till geringen.
- **Tillåt inte sammanfogning**: klicka nära en väggände. Den änden görs fri: den sammanfogas med ingenting, vart väggen än går, tills du klickar på den igen. Fria ändar markeras med ett kryss medan verktyget är på. Samma omkopplare är **Sammanfoga vid start / Sammanfoga vid slut** i Egenskaper.
- **Lagerprioritet**: där väggar med skikt möts skär det starkare skiktet det svagare, så att kärnor sammanfogas med kärnor och ett ytskikt stannar mot det starkare skiktet. Varje skikt har en prioritet från 0 till 999; som standard kommer den från skiktets funktion (konstruktion 800, underlag 600, isolering 400, membran 300, yta 200, en luftspalt 100). {{ui:Lagerprioritet}} öppnar väggsammansättningen, där kolumnen **Prioritet** anger skiktets eget tal. Skikt med lika prioritet stannar mot varandra, och en linje ritas bara mellan olika material. Du ser det på planer med detaljnivå **Medel** eller **Fin**, vid hörn, T-sammanfogningar och korsningar av två raka väggar; Inställningar › BimCraft › {{ui:Väggar}} › **Rensa väggskikt där väggar möts** stänger av det. Det ändrar bara det som ritas inne i väggarna: väggarnas konturer och mängder står kvar som sammanfogningsstilen ger dem.

## Byt typ på många väggar

Att gå från skissplaner till arbetsritningar är oftast en typändring: en generisk vägg blir den specifika uppbyggnaden. Du ritar inget om.

1. Välj väggarna (en, eller flera med {{key:Ctrl}} eller {{key:Shift}}).
2. I Egenskaper trycker du på **Byt typ…** under **Väggtyp** (eller öppnar {{ui:Väggar}} i gruppen Redigera och väljer {{ui:Byt typ}}, som öppnar samma lista). Listan öppnas inne i Egenskaper, i de valda väggarnas eget block. Det är inte en dialogruta och den täcker inget: planen, 3D-vyn och valet fungerar medan den är öppen, och den följer de väggar du väljer.
3. Listan visar varje väggtyp med dess tjocklek och LOD-märkning, till exempel "Vägg 230 generisk, LOD 200" och "230 lertegel, putsad på båda sidor, LOD 300". De typer som de valda väggarna har nu är markerade. Skriv i **Sök** för att begränsa den: ett namn, en tjocklek eller `lod 300`.
4. Klicka på en typ. Varje vald vägg byts till den i ett steg, så att ett {{ui:Ångra}} tar tillbaka hela bytet. Det lilla x:et stänger listan.

Varje vägg behåller sin placeringslinje. En vägg på sin mittlinje växer åt båda sidor; en vägg vars placeringslinje är en yta behåller den ytan och växer åt andra hållet, och de väggar som är sammanfogade med den följer med i hörnen. Väggar som är låsta till en bytt vägg följer den också. Dörrar och fönster står kvar i sina väggar och skärs på nytt för den nya tjockleken.

Efter bytet visar listan **Vad som flyttades**: hur många väggar som ändrades och till vad, tjockleken och LOD före och efter, väggarna som flyttades sidledes för att behålla sin placeringslinje, de sammanfogade väggar som följde med, dörrarna och fönstren som fick nytt värd, och varje rum vars yta ändrades med ytan före och efter. Statusfältet säger samma sak på en rad. Rapporten bara informerar; den stoppar aldrig ett byte. Att välja en typ i **Egenskaper › Väggtyp** gör samma byte och ger samma rapport.

Två saker stoppar ett byte, och då ändras ingenting alls: en dörr eller ett fönster som inte längre skulle få plats i sin vägg (en vägg blir kortare där ett hörn följer med; gör dörren smalare eller flytta den bort från hörnet först), och ett lås som bytet skulle bryta (en vägg låst till en rutnätslinje med sin mittlinje medan dess placeringslinje är en yta; lås upp den eller sätt tillbaka dess placeringslinje på mittlinjen).

En assistent kopplad till BimCraft kan göra samma byte (verktygen `wall_types_list` och `walls_swap_type`) och får tillbaka samma rapport.

LOD-märkningen på en typ anges i redigeraren för väggsammansättningar: se [Väggsammansättningar](topic:wall-assemblies).

## Förskjutning och lådtöjning

- **Förskjutning**: klicka på en vägg, sedan på sidan att flytta den till, eller skriv avståndet. Väggen flyttas vinkelrätt mot sig själv och väggarna sammanfogade med den töjs. Bocka för **Kopiera** för en parallell kopia i stället (den är inte sammanfogad med originalet).
- **Lådtöjning**: klicka på två hörn i en låda, sedan en punkt att flytta från och en punkt att flytta till. Varje väggände inuti lådan flyttas; en vägg helt inuti flyttas och väggarna som stöter mot den följer med; väggar som korsar lådan töjs.

## Redigera ett mått och lås det

Välj ett referensmått ({{ui:Annotera}} › {{ui:Referensmått}}) och skriv dess värde i **Egenskaper**: väggen för dess andra referens flyttas vinkelrätt mot sig själv, den första referensen håller och de sammanfogade väggarna följer med. Bocka för **Lås detta mått** för att behålla värdet: när någon av väggarna flyttas senare följer den andra med. Ett låst värde kan inte skrivas över förrän du avmarkerar det.

## Rada upp och lås

**Rada upp och lås**: klicka på en väggyta (eller mittlinjen, nära mitten av väggen) eller en rutnätslinje, och sedan på väggytan som ska föras till den linjen. Väggen flyttas vinkelrätt dit. Bocka för **Lås** först för att hålla dem uppradade: en hänglås visas i planen, och när den ena väggen flyttas följer den andra. **Egenskaper** för en vägg listar dess **Lås**, var och en med **Lås upp**.

## Lås väggar till rutnätslinjer

Välj en vägg som går längs en rutnätslinje, eller vars ände ligger på en, och välj rutnätslinjen i **Egenskaper** › **Lås till rutnät**. Välj sedan rutnätslinjen med verktyget {{ui:Rutnät}} och skriv ett avstånd i **Flytta med**: linjen flyttas vinkelrätt mot sig själv och väggarna låsta till den följer med, tillsammans med sina sammanfogade väggar, i ett steg. En vägg låst till en rutnätslinje kan inte flyttas bort från den på egen hand (flytta linjen, eller lås upp väggen); en rutnätslinje som vrids så att en låst vägg inte kan stå vinkelrätt mot den avvisas. Att byta namn på linjen behåller låset; att ta bort den tar bort låset.

## Längd: vilken sida som håller och vad den mäter

- **Växa från** (Egenskaper för en vägg): **Start håller** (slutet flyttas), **Slut håller** (starten flyttas) eller **Mitten håller** (båda ändarna flyttas med hälften). Medan du skriver Längd markerar planen punkten som håller. Väggen som är sammanfogad i änden som flyttas flyttas vinkelrätt mot sig själv och behåller sin vinkel.
- **Mät från** (bredvid Mått i planen, i Egenskaper och i Inställningar › BimCraft › {{ui:Väggar}}): mittlinjen, insidan eller utsidan. Längdfältet och planens väggmått läser av samma, så de stämmer överens. Det börjar på mittlinjen.
- För att flytta en vägg fri från sina sammanfogningar (de bryts, väggen behåller sin identitet), håll ned {{key:Alt}} medan du drar i dess mittgrepp.

## Bra att veta

- Recepten är de som finns i specifikationen för väggverktyget (sidorna 4 till 9). Sammanfogningsstil och lagerprioritet är gjorda för raka väggar; lagerprioritet syns bara i planen (inte i sektioner, fasader eller 3D, där en vägg är en kropp), inte vid noder med tre väggar eller fler, och membran förs inte vidare.
- En sammanfognings stil sparas i dess post i IFC-filen (namnet på `IfcRelConnectsPathElements`, till exempel `CadCraft join L butt 1`), så andra program läser fortfarande sammanfogningen och en äldre fil öppnas med geringar.
- Låsen och sammanfogningarna sparas i IFC-filen (låsen som `CadCraft_WallHolds` på projektet, sammanfogningarna som `IfcRelConnectsPathElements`), så de finns kvar när du öppnar filen igen.
- Krökta väggar kan delas, sammanfogas igen och få en bit borttagen; de förskjuts eller låses inte.
- Se även [Rita väggar](topic:draw-walls), [Ändra en vägg, dörr eller fönster](topic:change-a-wall-or-door) och [Forma en vägg](topic:wall-shape).
