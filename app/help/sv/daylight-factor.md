---
title: Uppskatta dagsljuset i varje rum
summary: Medeldagsljusfaktorn för varje rum utifrån dess fönster, dess innerytor och den himmel varje fönster ser, med himmelsvinkeln mätt i modellen. En uppskattning i ett tidigt designskede, inte en simulering eller en kontroll mot regler.
keywords: dagsljus, dagsljusfaktor, medeldagsljusfaktor, adf, vertikal himmelskomponent, vsc, solvärmetillskott, sol, g-värde, rutnät, delat flöde, himmelskomponent, internt reflekterad komponent, naturligt ljus, fönster, glasning, himmelsvinkel, hinder, överskuggning, balkong, överhäng, reflektans, transmittans, tidig design, analys, rum, utrymmen
from: 5f300a78
---

Fliken {{ui:Dagsljus}} i den högra panelen räknar ut varje rums **medeldagsljusfaktor**: hur stor andel av ljuset från en mulen himmel utanför som i genomsnitt når rummet, i procent. Den läser öppen IFC-modells rum (utrymmen) och fönster. Ingenting ändras i modellen och inget laddas upp.

:::warning
Allt i den här fliken är **ett designstöd, inte en beräkning för efterlevnad av krav**. Det är uppskattningar i ett tidigt designskede enligt publicerade metoder, **inte en simulering** och **inte en kontroll mot byggregler eller en standard**. BS EN 17037, LEED, BREEAM och energiregler kräver en dagsljussimulering med platsens klimat. Använd ett dagsljussimuleringsprogram för sådant.
:::

## Så räknar du ut det

1. Öppna en IFC-modell som har rum (utrymmen) och fönster. Modeller som ritas här har ett rum inuti varje sluten uppsättning väggar.
2. Öppna fliken {{ui:Dagsljus}} och klicka på {{ui:Beräkna}}.
3. Varje rum visar sin dagsljusfaktor och ett band: under 2 %, 2–5 %, 5 % eller mer. Klicka på ett rum för att se dess ytor och varje fönsters area och himmelsvinkel. Rummet och dess fönster markeras i modellen.

Ändrar du en indata följer talen direkt. Efter att du ändrat modellen, klicka på {{ui:Beräkna igen}}. {{ui:CSV}} sparar varje rum med dess tal och de indata som användes.

## Formeln

Medeldagsljusfaktor (%) = T × Ag × θ × M ÷ (A × (1 − R²)), summerat över rummets fönster (Littlefairs formel, använd i BRE 209, BS 8206-2 och CIBSE LG10):

- **T**, glasets ljustransmittans (0,7 att börja med: använd tillverkarens värde).
- **Ag**, den glasade arean: varje fönsters area (dess totala bredd × höjd, annars dess storlek i modellen) × den **glasade andelen** (0,75 att börja med: resten är karm).
- **θ**, den vinkel av himmel fönstret ser, i grader (nedan).
- **M**, underhållsfaktorn för smuts på glaset (1 att börja med).
- **A**, varje inneryta i rummet: golv, väggar, tak och fönster, tagna från rummets egen form.
- **R**, deras medelreflektans, viktad efter area: golv 0,2, väggar 0,5, tak 0,7 att börja med. Glas räknas som 0,1.

## Så mäts himmelsvinkeln

För varje fönster skär BimCraft modellen med ett lodrätt plan vinkelrätt mot fönstret, från glasets utsida, och tittar rakt upp från horisonten. Allt snittet träffar framför fönstret (en byggnad mitt emot, en balkong eller ett överhäng ovanför, takfoten) döljer en del av de 90°. θ är det som återstår. Själva fönstret och väggen det sitter i räknas inte med. Det görs på fem ställen över fönstrets bredd och tar medelvärdet, så att en tunn pelare framför mitten tar sin andel och inte hela himlen.

En byggnad 8,5 m över fönstrets mitt och 9,9 m bort döljer 40,65° (vinkeln vars tangens är 8,5 ÷ 9,9), och lämnar θ = 49,35°.

## Vertikal himmelskomponent för varje fönster

{{ui:Beräkna}} mäter också, för varje fönster, hur mycket av hela himlen det ser: samma lodräta snitt, vridet mot varje riktning över fönstrets front (var 2°, från den ena sidan till den andra). Så en byggnad åt ena sidan, ett fenster eller en djup nisch tar sin andel. Utifrån det räknar BimCraft ut den **vertikala himmelskomponenten (VSC)**: hur mycket av det mulna himmelsljuset som når glaset, som andel av vad ett öppet, plant tak skulle få. Ett fönster med inget framför sig får **39,6 %**, det högsta ett lodrätt fönster kan få. En lång byggnad som reser sig 25° över fönstret ger ungefär **27 %**, den siffra som brittisk vägledning (BRE 209) använder som tumregel. Varje fönster i ett rums detaljvy visar sin VSC och sin **hindervinkel** (hur högt saker reser sig rakt framför det).

Himlen är den standardiserade mulna CIE-himlen, som är tre gånger ljusare rakt upp än vid horisonten. Snittet är exakt: inget samplas.

## Solen genom fönstren ett visst datum

Öppna {{ui:Sol genom fönstren ett visst datum}} och välj ett datum. BimCraft följer solen under dagen i kvartstimmar och summerar, för varje fönster, värmen solen släpper in genom glaset:

- **direkt sol**, när den står framför fönstret och inget i modellen skymmer den (samma exakta snitt, vridet mot solen: en balkong som skuggar den höga sommarsolen vid middagstid släpper in den låga vintersolen)
- **himmelsljuset** på glaset, minus det fönstret inte kan se
- ljuset **från marken** (dess reflektans: 0,2 att börja med)
- allt genom glasets **g-värde** (andelen av solens energi det släpper igenom: 0,6 att börja med; använd tillverkarens värde) och dess glasade andel.

Varje rum visar dagens summa i kWh och sin topp i watt med tidpunkt. Ett rums detaljvy ritar dagen som ett diagram. Himlen är klar enligt Hottels modell (Duffie & Beckman, *Solar Engineering of Thermal Processes*), med sommar- eller vintervärden för platsen och årstiden samt platsens höjd. Solens läge är från NOAA. Platsens latitud och longitud kommer från IFC:ns plats, och norr från modellens sanna norr. Om modellen saknar plats skriver du in latitud och longitud. Tider är normaltid (ingen sommartid) i den tidszon du anger, annars den som longituden antyder.

Det som utelämnas: moln (det är en klar dag), att glaset släpper in mindre vid låga vinklar, att karmar skuggar glaset, persienner, och vad väggarna och taket tar upp. Kylberäkningen i samma flik använder toppvärdet.

## Dagsljusfaktorn på ett rutnät

Öppna {{ui:Dagsljusfaktor på ett rutnät}} och {{ui:Beräkna rutnätet}}. BimCraft lägger ett rutnät över varje rums golv på arbetsplanets höjd (0,85 m att börja med), en halv meter in från väggarna, och räknar ut dagsljusfaktorn i varje punkt med BRE:s metod för delat flöde:

- **himmelskomponenten**: den mulna himlen sedd från punkten genom varje fönsters öppning, minus karmarna.
- **den externt reflekterade komponenten**: vad punkten ser av byggnader utanför genom fönstret, som lyser med en tiondel av himlen bakom dem (ändra hindrets ljusstyrka om de är mycket ljusare eller mörkare).
- **den internt reflekterade komponenten**: ljuset som studsar runt i rummet, från rummets ytor och reflektanser, fönstrens area och hur stor del av den som ligger utanför (BRE-formeln, med glasets transmittans i stället för det klara glas den utgick från).

Varje rum visar sitt medelvärde, sin lägsta punkt och hur stor del som får 2 % eller mer. Ett rums detaljvy ritar dess plan med varje punkt färgad efter dess dagsljusfaktor och fönstren i rött. För att det ska gå snabbt på vilken dator som helst får ett rum högst **400 punkter**. I ett stort rum växer avståndet så att det får plats. Skriv in ett avstånd för att välja ett eget.

## Det som utelämnas

- Takfönster (glas som ligger plant eller lutar) visas men räknas inte. Formlerna här gäller fönster i väggar.
- Fönster utan rum bakom sig (en hall utan utrymme, till exempel) visas separat.
- Fönsterinfattningar (öppningen tas på glasets utsida), bländning, soltimmar och klimatbaserat dagsljus. För BS EN 17037, LEED eller BREEAM använd ett dagsljussimuleringsprogram.
- Banden kommer från äldre brittisk vägledning (BS 8206-2) och visas som en riktlinje, aldrig som godkänt eller underkänt.
