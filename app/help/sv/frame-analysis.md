---
title: Analysera stommen
summary: Krafter, reaktioner och nedböjningar för modellens balkar, pelare och stag under lastfall och kombinationer du anger, sparade i IFC. Ett analysstöd, inte en normkontroll.
keywords: analys, enheter, fot och tum, visningsenhet, konstruktionsanalys, dimensioneringskontroller, utnyttjande, valsad, svetsad, AISC 360, EN 1993-1-1, stomanalys, analytisk modell, styvhetsmetoden, laster, lastfall, kombination, egen vikt, egentyngd, nyttig last, reaktioner, böjmoment, tvärkraft, normalkraft, nedböjning, deformerad form, upplag, ledad, fast, frigörelse, rapport, pdf, csv, craftscript, frame3d, balkar, pelare, stänger
from: b93b58c4
---

Fliken {{ui:Analys}} till höger hittar krafterna i den öppna modellens balkar, pelare och stag, reaktionerna vid pelarfötterna och hur mycket stängerna böjer sig, för de laster du anger.

:::warning
Det är ett **analysstöd, inte en normkontroll**. Analysen tillämpar ingen dimensioneringsnorm: den dimensionerar inte stänger och kontrollerar inga kapaciteter, och den väljer inte lastfaktorer. En ingenjör kontrollerar den analytiska modellen, dess laster och upplag, och avgör vad siffrorna betyder. Blocket {{ui:Dimensioneringskontroller}} under den kontrollerar valsade stålprofiler i I-form enligt AISC 360 eller EN 1993-1-1, och är ett stöd tills en ingenjör har granskat det: se [Dimensioneringskontroller](topic:frame-analysis#design-checks).
:::

## Kör den

1. Öppna en IFC-modell och fliken {{ui:Analys}}.
2. Markera en eller flera balkar, pelare eller stag i vyn, välj ett {{ui:Fall}}, en {{ui:Last}} och en {{ui:Riktning}}, skriv värdet och tryck på {{ui:Lägg till last}}: kN/m för en last utspridd längs en stång, kN för en punktlast.
3. Tryck på {{ui:Kör analys}}.

Tabellen listar varje stångs största normalkraft, tvärkrafter, böjmoment, vridning och nedböjning; klicka på en stångs namn för att markera den i vyn. Under den visas reaktionerna. {{ui:På modellen}} ritar den deformerade formen, eller en åtgärd som ett diagram bredvid varje stång. Resultaten blir gamla när modellen ändras: kör den igen.

Varje last och inställning är en ändring i listan {{ui:Ändringar}}: {{ui:Ångra}} tar tillbaka den, och {{ui:Spara som IFC}} behåller dem i filen (projektets egenskapsuppsättning `CadCraft_Analysis`), så att lasterna finns kvar nästa gång modellen öppnas här.

## Så görs den analytiska modellen

- Varje IfcBeam, IfcColumn och IfcMember vars form är en enda rak extrudering blir en stång på sin tvärsnittstyngdpunkts linje. Dess tvärsnittsegenskaper kommer från profilen: I-, U-, L- och T-profiler, rektanglar och rör, cirklar och runda rör, eller valfri sluten kontur (då är vridstyvhetskonstanten en uppskattning, och det sägs i rapporten). Allt annat utelämnas och räknas.
- I en modell slutar balkar vid en pelares yta och sitter under golvet. Varje stångände förs längs sin egen linje till axeln på den stång den ansluts till, när axeln ligger nära (inom ungefär profilernas storlek), och den stången delas där. Rapporten säger hur många ändar som flyttats.
- **Pelarfötter** som inget går under är upplag: fast inspända (startpunkten) eller ledade (hålls på plats och mot vridning, men fria att vrida sig).
- **Balkändar** är styva eller ledade enligt regeln {{ui:Balkändar utan förbindelse}}; **stag** (IfcMember) är ledade i båda ändar. Markera en stång för att ge dess ändar, eller en pelarfot, en egen regel.
- Material efter namn: betong (E = 30 GPa), trä (E = 11 GPa), annars stål (E = 200 GPa).

Om stommen kan röra sig utan att böja något, en mekanism, stannar körningen och säger var och åt vilket håll.

## Lastfall, kombinationer, tecken och rapporten

Analysen startar med **Dead** (egen vikt), **Live** och **Dead + live**; lägg till lastfall och kombinationer med de faktorer din dimensioneringsnorm kräver. N > 0 är drag; My > 0 ger stångens lokala −z-sida dragspänning (en balk som böjer sig nedåt under tyngdkraften har My > 0). {{ui:Rapport (PDF)}} och {{ui:Rapport (CSV)}} innehåller antaganden, profiler, lastfall, reaktioner med deras summor, stångkrafter, förskjutningar och en envelopp. {{ui:Exportera som CraftScript}} skriver stommen för PartCraft:s Script-arbetsyta, där biblioteksfunktionen `frame3d` löser den i läsbar kod.

Metoden är styvhetsmetoden (direkta styvhetsmetoden), linjär och första ordningen om du inte bockar för Andra ordningen (P-Delta). Den är kontrollerad mot läroboksfall.

**Andra ordningen (P-Delta).** Bocka för *Andra ordningen (P-Delta)* bredvid Kör: varje kombination löses på nytt med stångarnas normalkrafter verkande på den deformerade stommen (varje stång delas i 4 delar, så att böjningen av en stång mellan dess ändar också räknas), tills normalkrafterna stabiliseras. Resultatraden anger antal varv och hur mycket svajningen ökade; momenten, nedböjningarna, dimensioneringskontrollerna och rapporten använder sedan dessa resultat. Ovanför stommens elastiska kritiska last stannar körningen och säger det. Den är elastisk med små rotationer, endast böjning, utan styvhetsreduktion eller fiktiva laster (inte AISC:s direkta analysmetod i sig); bjälklag, väggar och styva golv förblir första ordningen.

**Golvtryck på bjälklag.** För betongbjälklag (analysen läser ett bjälklag som plattor när dess material är betong) har blocket Laster {{ui:Tryck på alla bjälklag}}: skriv kN/m², välj lastfallet ovan och tryck på {{ui:Lägg till på bjälklag}}. Trycket fördelas nedåt på alla bjälklag analysen hittade och listas med en länk Ta bort. Det är ett tryck för alla bjälklag, inte ett per bjälklag, och det är ingen normlast: skriv in det värde din ingenjör ger dig.

**Egenfrekvenser (finita element).** Blocket {{ui:Finita element: egenfrekvenser}} under resultaten hittar de lägsta egensvängningsformerna för samma modell med finita elementmotorn: balkar med deras ändfrigöringar, bjälklag och väggar som plana fyrnodsskal, styva golv och upplag. Välj hur många svängningsformer (3, 6, 10 eller 20) och bjälklagselementet (fyrnodsskalet för tjocka eller tunna bjälklag, eller elementet för tunna bjälklag) och tryck på {{ui:Hitta frekvenserna}}. Tabellen ger varje svängningsforms frekvens i Hz, dess period i sekunder och dess effektiva modala massa i X, Y och Z som andel av den massa som kan röra sig. {{ui:Visa på modellen}} ritar valfri svängningsform på samma sätt som den deformerade formen ritas. Massan är materialets densitet gånger volymen: laster ger ingen massa, och ett material utan densitet har ingen. Rapporten (PDF, CSV) innehåller tabellen. Den är elastisk och gäller endast små rörelser, och ingen seismisk eller vindlast tas fram här ur någon norm. Ingen normkontroll; din ingenjör granskar resultaten.

**Responsspektrum, tidshistorik och pushover.** Tre block till sitter under frekvenserna och använder samma finita elementmodell. Massan för alla tre är materialets densitet plus de nedåtriktade lasterna för de lastfall du bockar för, var och en multiplicerad med en faktor du skriver in (till exempel Dead med 1 och Live med den andel du räknar som massa).

{{ui:Responsspektrum}} läser av varje svängningsform från ett spektrum du anger (en tabell med period och acceleration, eller ASCE 7-formen från SDS, SD1 och TL; knappen {{ui:Använd värdena från blocket Seismisk}} kopierar dem från blocket Seismisk). Svängningsformerna kombineras med CQC, SRSS, tiprocentsregeln eller en absolut summa, och X-, Y- och Z-riktningarna sätts sedan ihop (100 % + 30 % eller SRSS). Det ger bottenskjuvkraften, våningsdriften, stångändarnas krafter och en svängningsformstabell som varnar när de använda svängningsformerna bär mindre än 90 % av massan. Du kan skala resultaten med en faktor eller upp till en bottenskjuvkraft du skriver in; blocket beräknar aldrig den bottenskjuvkraften själv. Resultaten har inget tecken.

{{ui:Tidshistorik}} kör en markaccelerationen med modal superposition (exakt för registrets räta linjer mellan punkterna) eller med direkt integration (Newmarks medelaccelerationsmetod med Rayleigh-dämpning). Indatan är en påhittad sinus eller puls (alltid märkt som syntetisk), ett register du klistrar in, eller en textfil du öppnar (tid och acceleration, en acceleration per rad med ett steg, eller en PEER-liknande fil med en DT=-rubrik; i g eller m/s²). Den ger takets förskjutning och bottenskjuvkraften mot tiden, driften för varje våning och omhöljet av stångändarnas krafter. Modeller med ett mycket långt register behåller det bara för sessionen.

{{ui:Pushover}} trycker taket i sidled i små steg (med ett mönster likt första svängningsformen, eller jämnt), med plastiska leder i ändarna av stänger som har I-form. En led ger efter vid det plastiska momentet, som sjunker när normalkraften ökar (beräknat från den ritade formen, med kälrundningar bortsett). Förhårdnad är valfri, P-delta är valfri, och en tyngdkraftskombination kan tillämpas först. Den ger kapacitetskurvan (bottenskjuvkraft mot takets förskjutning), den första leden och varje leds tillstånd och plastiska rotation. {{ui:Kör den olinjära tidshistoriken}} kör samma leder under blocket Tidshistoriks register på små modeller. Leder bildas bara i stångändar (lägg en nod där en led ska bildas mitt i ett spann); en stång frigjord i båda ändar får ingen, och flytning och knäckning av stag modelleras inte. Bjälklag och väggar förblir elastiska, och inga acceptanskriterier ges. Ingen normkontroll; din ingenjör granskar resultaten. Inställningarna sparas med modellen, och rapporten innehåller tabellerna.

Finns inte ännu: knäckning, en korrigering för saknad massa för responsspektrumet, skalning av register, acceptanskriterier för leder (dynamisk respons finns, se ovan), areallaster utöver det enda trycket på alla bjälklag, stångförskjutningar, stag som bara tar drag, väggar och bjälklag i stommen, normkontroller av svetsade profiler och av andra tvärsnitt än valsade I-profiler. Se [Finns inte ännu](topic:not-built-yet).

## Enheter

Längder följer den enhet du väljer i verktygsfältet ({{ui:Enheter}}), precis som i resten av BimCraft: lastpositionerna du skriver in och ser ({{ui:Från}}, {{ui:Till}}, {{ui:Vid}}), punkterna för nodlaster och reaktioner, våningshöjderna i {{ui:Seismisk}}, samt kolumnerna för nedböjning och drift (fot och tum visar dessa små längder i decimala tum). Ändra enheten när som helst; fliken ritas om. Krafter hålls i kN och kN·m, och rapporten (PDF, CSV) och CraftScript-filen hålls i millimeter med enheten angiven. Profilmått, armeringsdiametrar och täckskikt i blocket {{ui:Betong}} hålls i millimeter, eftersom de heter så.

## Dimensioneringskontroller

Blocket {{ui:Dimensioneringskontroller}} (samma som DetailCraft:s) tar en {{ui:Dimensioneringsnorm}}, ASCE 7 + AISC 360 eller EN 1990 + EN 1993-1-1, och en {{ui:Stålkvalitet}}. Ge varje lastfall dess slag (egen vikt, nyttig last, vind …) och {{ui:Gör kombinationer}} skriver normens lastkombinationer av dina lastfall; analysen kör dem sedan som vilken kombination som helst.

{{ui:Kontrollera stänger}} kontrollerar sedan varje **valsad stålprofil i I-form** med DetailCraft:s kontroller (drag, tryck med knäckning, böjning med sidodrillknäckning, skjuvning, böjning med normalkraft, nedböjning; klausulerna finns i rapporten) och visar hur stor del av sin kapacitet den använder, färgad i modellen. Den är ett **stöd tills en ingenjör har granskat den**.

**Vilka stänger som kontrolleras.** En IFC-profil säger inte om en stålprofil i I-form är valsad eller svetsad, så BimCraft kallar den valsad bara när dess profilnamn (annars elementets typnamn) är en storlek ur AISC:s W- eller S-tabeller eller ur EN 10365:s IPE-, HEA- eller HEB-tabeller (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **och** höjd, bredd, liv och fläns i filen stämmer med den storleken inom 1 %. Varje annan I-profil (en plattbalk, en storlek under ett annat namn, en ändrad storlek) behandlas som svetsad och kommer tillbaka **inte kontrollerad**, liksom rör, vinkeljärn, U-profiler och andra tvärsnitt, slanka delar och vridning. Kontrollera dessa stänger med en ingenjör.
