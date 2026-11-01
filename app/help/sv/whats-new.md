---
title: Nyheter i 0.7
summary: BimCraft lägger till väggar över flera nivåer och Kopiera den här nivån, väggar från PDF:er och skanningar, egna väggsammansättningar, rikare familjer, MEP-utrustning med anslutningar, kollisionsmängder och håltagningar och rörspolar, dokument per tillgång, COBie och sensoravläsningar, himmel, sol, dagsljus på ett rutnät och värme- och kyllaster, registrering av skanningar, en liveabild och strålföljning på grafikkortet, STEP och USD, biblioteksvarianter och mer för AI-assistenter.
keywords: nyheter, vad är nytt, versionsinformation, ändringslogg, ändringar, 0.7, version, nya funktioner, väggar över nivåer, kopiera den här nivån, pdf, skanning, spåra, väggar från planer, väggsammansättningar, lager, kärna, membran, referensmått, materialbibliotek, visningsenheter, visningsstil, stomme, bjälkar, familjer, parametrar, plansymbol, hotspots, upprepa, detaljnivå, kapslade familjer, csv-storlekar, per element, utrustning, anslutningar, anslutningar, fria avstånd, öppningar, rörspolar, spolblad, montagesvets, kanalkapplista, dokument, cobie, sensorer, mqtt, liveflöde, vertikal himmelskomponent, solvärme, dagsljusrutnät, värme, kyla, laster, u-värde, registrera skanningar, icp, e57, liveabild, strålföljning, webgpu, brusreducering, fysisk himmel, ljusblandning, renderingskö, din maskin, step, usd, projektpaket, bearbeta en massa, varianter, assistenter, tilläggs-api, anläggning, el, dimensioneringskontroller
from: 5c27b80a
---

Detta är vad som ändrats i BimCraft 0.7 jämfört med 0.6. Listan är grupperad efter område, med det viktigaste först.

## Nytt

### Rita en byggnad

- **Väggar över flera nivåer.** Väggverktygets höjdlista erbjuder **Upp till** valfri nivå högre upp, precis som Egenskaper gör för en vald vägg. Planerna för nivåerna mellan visar väggen ljusare, rum där ansluter mot den, och dörrar och fönster kan placeras i den från dessa planer; **Går genom** i Egenskaper anger vilka nivåer den passerar. Se [Ändra en vägg, dörr eller ett fönster](topic:change-a-wall-or-door#change-a-wall).
- **Kopiera den här nivån.** {{ui:Kopiera den här nivån…}} i nivåpanelen ritar en nivås väggar med dess dörrar och fönster, dess golv och innertak igen på en annan nivå eller på en ny nivå ovanpå, i ett enda steg för ångra; rum visas av sig själva. Se [Rita väggar](topic:draw-walls#levels).
- **Väggar från en PDF eller skanning.** {{ui:Bygge}} › {{ui:Från en ritning…}} tar nu emot en PDF (linjeverk eller en skanning i den) eller en skannad plan (PNG, JPEG, TIFF, många sidor): varje sida blir väggar, dörrar, fönster och rum på en nivå, med sidan kvar under sin plan. Spårningen använder inget nätverk och ingen tränad modell, och resultatet blir det linjerna gav: kontrollera varje nivå mot dess sida. Se [Väggar från en uppsättning planer](topic:walls-from-plans).
- **Egna väggsammansättningar.** {{ui:Väggsammansättningar…}} bygger en väggtyp lager för lager, med kärna, luftspalter och membran, och en förhandsvisning med mått; {{ui:Materialbibliotek…}} håller projektets material i IFC; {{ui:Annotera}} › {{ui:Referensmått}} mäter till ytor och kärnlinjer och följer med väggarna när de ändras. Från en bidragsgivare i gemenskapen, Doc (drsurfbum). Se [Väggsammansättningar och referensmått](topic:wall-assemblies).
- **Visningsenheter och vyreglage.** {{ui:Enheter}} i verktygsfältet visar längder i fot och tum, tum, decimalfot, millimeter, centimeter eller meter, i mått, scheman, koordinater, mätningar och snitt. {{ui:Plan}}, {{ui:Delad}} och {{ui:3D}} finns i verktygsfältet, delningen kan dras (eller flyttas från tangentbordet), {{ui:Skuggad}}, {{ui:Kanter}} och {{ui:Trådmodell}} sitter bredvid ViewCube, och takets lutning, taksmyg och takfot ändrar det valda taket direkt. Från en bidragsgivare i gemenskapen, Joel (yisraelk). Se [Rita väggar](topic:draw-walls#levels).
- **Golvbjälkar efter spann.** {{ui:Stomme}} kan lägga ut konstruerade bjälkar (preliminärt) liksom sågat virke, och väljer den minsta listade serien och höjden som når spannet, med 16" eller 24" c/c, i båda riktningar; de hamnar i IFC och kapplistan. Ett förslag från en tillverkares publicerade tabell, inte en konstruktion. Även från Joel. Se [Stomme för väggar, golv och tak](topic:framing).
- **Fler elektriska enheter.** {{ui:El}} lägger till uttag för data, telefon och ljud-bild, en väljarbrytare, en timer, en termostat, rök- och värmedetektorer, en larmknapp och en siren, en fläkt, en energimätare och en undercentral, var och en med sin egen IFC-klass. Se [Elplanen](topic:electrical-plan).

### Familjer

- **Familjer gör mer.** Parametrar kan vara heltal, text, ett material, en penna eller en fyllning; en familj kan rita sin egen planymbol, upprepa en solid, markera delar för grövre detaljnivåer, innehålla andra familjer (ett ben i ett bord) och ha hotspots som du drar, även på ett placerat element i planen. Storlekar hämtas från en CSV-tabell, och parametrar markerade **Per element** låter två dörrar av samma storlek skilja sig. Se [Redigera en familj](topic:family-editor#plan-symbol) och [Familjer och deras storlekar](topic:families#sizes-from-a-table).

### Rör, kanaler och utrustning

- **Utrustning med anslutningar.** {{ui:Bygge}} › {{ui:Utrustning}} placerar en generisk luftbehandlingsapparat, injusterad fläkt, pump, panna, varmvattenberedare, terminalenhet, don, galler eller tank, dimensionerad efter de värden du skriver, med sina rör- och kanalkopplingar som anslutningar. Varje sparas som sin IFC-klass med IFC-anslutningar. Se [MEP-utrustning med anslutningar](topic:mep-equipment).
- **Anslutna sträckor.** Ett rör eller en kanal som startar på en anslutning tar sin storlek och system och sitter fast i den: flytta pumpen så följer dess rör med. {{ui:Kontrollera anslutningar}} listar öppna anslutningar, lösa ändar, storlek- och systemfel och sträckor utan försörjning. Se [Anslut rör och kanaler till utrustning](topic:mep-connections).
- **Rör och kanaler mot stommen.** {{ui:Kollisionskontroll}} har färdiga uppsättningar och {{ui:Rör och kanaler × stomme}} med ett klick; {{ui:Kontrollera fria avstånd}} använder varje sträckas isolering plus ett gap som du skriver; {{ui:Håltagningar som behövs}} listar var sträckor går genom väggar och bjälklag, som CSV och BCF-ärenden. Inget skärs bort. Se [Kontrollera rör och kanaler mot stommen](topic:mep-against-structure).
- **Stålrörsspolar.** En stålsträcka delas i numrerade spolar vid en längsta längd och vid {{ui:Montagesvets}} som du placerar; {{ui:Rörspolblad (PDF)}} ger en sida per spole med dess isometriska vy, kapplängder, kopplingsdelar, svetsar och stycklista, och {{ui:Kanalkapplista}} listar raka kanalbitar. Se [Stålrörsspolar och spolblad](topic:pipe-spools).

Detta är ritnings- och samordningshjälp, dimensionerad av en ingenjör: inga flöden, tryck eller injustering.

### Driften av byggnaden

- **Dokument per tillgång.** Fliken {{ui:Tillgångar}} kopplar manualer, garantier, foton och ritningar till en tillgång via ett filnamn bredvid IFC eller en webbadress; endast länken hamnar i IFC. Se [Dokument](topic:assets-and-maintenance#documents).
- **COBie-kalkylblad.** {{ui:Spara som COBie (.xlsx)}} skriver COBie 2.4-överlämningsarbetsboken, och en COBie-arbetsbok som läses in listar varje ändring innan en enda {{ui:Verkställ}}. Den har ännu inte gåtts igenom av en COBie-validerare. Se [COBie-kalkylblad](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoravläsningar och liveflöden.** Öppna en CSV med avläsningar, eller {{ui:Anslut}} direkt från webbläsaren till din egen MQTT-broker eller en adress som ditt byggnadssystem svarar på: varje tillgång visar sin senaste avläsning och en graf, färgas i modellen och flaggas när den ligger utanför gränserna som sparats i IFC. Avläsningarna stannar i fliken; lösenord sparas aldrig. Se [Sensoravläsningar](topic:assets-and-maintenance#sensor-readings) och [Liveavläsningar](topic:assets-and-maintenance#live-readings).

### Dagsljus och energi

- **Himmel och sol vid varje fönster.** Fliken {{ui:Dagsljus}} ger varje fönster dess vertikala himmelskomponent och hindervinkel, följer solen genom ett datum med {{ui:Sol genom fönstren ett visst datum}}, och räknar ut {{ui:Dagsljusfaktor på ett rutnät}} över varje rum, ritad på dess plan. Se [Vertikal himmelskomponent för varje fönster](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Värme- och kyllaster.** {{ui:Värme- och kyllaster}} räknar ut varje rums värmeförlust, dess uppvärmning under ett år från gradtimmar och dess kyltopp, utifrån det som avgränsar det i modellen och varje elements U-värde; ett U-värde som skrivs in där sparas i IFC. Se [Uppskatta värme- och kyllaster](topic:heating-and-cooling-loads).

Båda är designhjälp enligt publicerade metoder, inte beräkningar för regelefterlevnad, och varje panel säger det.

### Skanningar

- **Registrera flera skanningar.** {{ui:Passa in skanningar…}} (i startpanelen, eller i {{ui:Visa}}) placerar skanningar i en gemensam ram med valda punktpar eller inskrivna målpunkter, förfinar dem med ICP punkt till punkt och sedan punkt till plan, sparar registreringen som en liten projektfil och skriver det registrerade punktmolnet som en LAS- eller E57-fil. Se [Registrera flera skanningar till en](topic:register-scans).

### Bilder och liveabild

- **Liveabilden.** {{ui:Liveabild}} i verktygsfältet visar modellen i realtidsutseende bredvid 3D-vyn, följer den och varje ändring, med Vandring, tid på dygnet och månaden; {{ui:Liveabild i ett nytt fönster}} placerar den på en andra skärm. Se [Liveabilden](topic:live-view).
- **Strålföljning på grafikkortet.** Med WebGPU kör {{ui:Rendera}} › {{ui:Hög kvalitet (strålföljning)}} CadCraft:s egen strålföljare på grafikkortet, kan stoppas och {{ui:Återuppta}}, och brusreduceras i slutet; utan WebGPU används WebGL-strålföljaren som tidigare. Se [Hög kvalitet](topic:render#high-quality).
- **Mer i renderingsdialogen** (på grafikkortet, så den kräver WebGPU): en fysisk himmel och himmelsbilder, IES-ljusprofiler, en kamera med bländartal, skärpedjup, tvåpunktsperspektiv, vitbalans och 360°-panoramor, en gradering för den färdiga bilden, ljusblandning och renderingselement efter renderingen, dimma, rök och kaustik, sparande som 16-bitars PNG, EXR eller en renderingsfil, och en renderingskö. Se [Himlar och ljusprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) och [Renderingskön](topic:render#the-render-queue).
- **Din maskin.** {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Din maskin}} visar grafiken, processorkärnorna och minnet som den här webbläsaren låter appen använda, och nivån rendering startar på. Se [Vad din maskin renderar med](topic:your-machine).

### Filer och andra appar

- **STEP-filer öppnas.** En `.step`- eller `.stp`-del, utrustning eller leverantörsmodell (AP203, AP214, AP242) öppnas som en liten IFC-modell, där varje solid är ett element du kan granska, snitta, mäta och spara som IFC. Färger och delnamnen i sammanställningen läses ännu inte. Se [Filer som BimCraft öppnar och sparar](topic:files#what-it-opens).
- **USD-export.** {{ui:USD}} i verktygsfältet skriver de öppna modellerna som `.usda`, `.usdc` eller `.usdz`, uppdelade efter plats, byggnad, våningsplan och disciplin, med varje elements IFC-klass, GlobalId och egenskaper. Se [Exportera modellen som USD](topic:usd).
- **En massa från CivilCraft.** En byggnadsmassa som skickats från CivilCraft:s platsvy visar sina studievärden i Egenskaper, och {{ui:Bearbeta den här massan}} bygger väggar på varje nivå och ett golv av den i ett enda steg för ångra. Se [Bearbeta en byggnadsmassa från en platsstudie](topic:develop-a-mass).
- **Biblioteksobjekt med varianter.** Ett objekt som finns i flera varianter har ett val {{ui:Variant}} i fliken {{ui:Bibliotek}}; det placerade elementet behåller sin variant i IFC, {{ui:Byt objekt…}} listar de andra varianterna, och kopior och uppdateringar behåller den. Se [Placera och byt ett biblioteksobjekt med varianter](topic:library-variants).
- **Projektpaket i en mapp.** {{ui:Öppna en mapp}} listar `.ccbundle.zip`-filer under {{ui:Projektpaket}}, och varje layout i ett paket har **Öppna i …**: PDF:en till MarkupCraft, DWG:n till CadCraft, i en ny flik. Se [Öppna en layout](topic:open-project-bundle#open-a-layout).

### Assistenter och tillägg

- **Mer för AI-assistenter.** En assistent kan nu byta namn på element och sätta egenskapsvärden, flytta och ta bort element, ändra väggar, dörrar och fönster, exportera USD, och rendera en bild eller köra renderingskön; varje ändring är ett steg för ångra. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Tillägg kan bygga i modellen.** Tilläggs-API 1.1 låter ett tillägg göra en ändring i modellen som ett enda steg för ångra (den följer med i Live TeamWork), läsa modellen, och läsa rör- och kanalsträckor, anslutningar, utrustning och spolar.
- **Tillägget Plant** (avstängt tills du slår på det i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Tillägg}}): rörspecifikationer kontrollerade mot sträckorna, isometriska ritningar av en sträcka som SVG och DXF med en stycklista, generisk processutrustning med munstycken placerade i modellen, en router mellan två anslutningar, och en kontroll av en anläggnings layout. Ett ritningshjälpmedel, inte ett tekniskt godkännande; dess texter finns bara på engelska.

## Ändrat

- **Ett första hus på en bärbar dator.** På en skärm i bärbar-datorstorlek startar BimCraft med endast planen, Ritfältet är en smal panel med planen anpassad bredvid, planen och 3D-vyn kommer tillbaka i sikte när ritningen lämnar dem, 3D-vyn ramar in hela huset i en smal ruta, och dörrar och fönster väljs före måttlinjer.
- **Spara en bild.** **Spara PNG** i renderingsdialogen är nu {{ui:Spara}}, med {{ui:Spara som}} bredvid för de andra formaten. Se [Spara bilden](topic:render#save-the-picture).
- **Fliken Analys** har ett block {{ui:Dimensioneringskontroller}}: det skapar lastkombinationer enligt ASCE 7 eller EN 1990 för dina lastfall och kontrollerar varje valsad stålprofil i I-form (en W-, S-, IPE-, HEA- eller HEB-storlek efter dess profilnamn och storlek) enligt AISC 360 eller EN 1993-1-1, och visar hur stor del av dess kapacitet den använder. Ett hjälpmedel tills en ingenjör har granskat det; svetsade profiler och andra sektioner står "ej kontrollerad". Se [Dimensioneringskontroller](topic:frame-analysis#design-checks).

## Åtgärdat

- Göra om efter ett steg som skapade en ny familjestorlek misslyckades ("ingen storlek"). Varje steg skapar nu samma IFC-GlobalId:n igen vid omgörning, så omgörning fungerar för familjer och alla andra ändringar.
- När två personer sparade samma familj (i en Live TeamWork-session eller i två fönster) ersatte den andra sparningen tyst den första personens ändring. Nu vägrar den och säger hur du ser deras ändring och gör din igen.
- En modell i US survey feet lästes som 0,3048 m per fot i stället för 0,3048006096 m, vilket flyttade varje georefererad IFC i US-fot på kartan.
- Familjeredigeraren: att stänga den tar inte längre tangentbordsfokus till sidan, dess Spara syns på en telefon, och dess fält får inte längre telefonen att zooma in.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekar som enheternas definitioner ger (US survey foot är en egen enhet). Stäng av de enheter du aldrig använder så lämnar de enhetslistorna; markera en med stjärna så börjar nytt arbete i den. En fil behåller alltid sin egen enhet. I BimCraft följer listan {{ui:Enheter}} i verktygsfältet kopplarna, stjärnan anger visningsenheterna tills du väljer dem i verktygsfältet (ditt tidigare val behålls), och ritverktygens längdrutor tar emot valfri enhetsbeteckning, till exempel `3.5 m` eller `10 US ft`. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som städas undan.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får in mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller frigöra panelen, släpp den på en annan panels list för att dela en ram som flikar, fäst den för att skjuta undan den mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i namnlisten ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade begäranden till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en detaljvariant …), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en körd igenom våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu alla ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena finns på engelska, med några på spanska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara "Klar", och slutar återkalla ett Nyheter-kort som du stängt tills det finns en nyare version.

## Ännu inte i den här versionen

- **0.7 är inte kodsignerad.** Signering och Microsoft Store-paketet flyttades till 0.8 eftersom certifikatvalideringen ännu inte har kommit. Kontrollera SHA-256-värdet bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj **Mer information** och sedan **Kör ändå**. På en Mac, första gången, högerklicka på CadCraft Studio och välj **Öppna**. CadCraft Studio finns ännu inte i någon appbutik, och det finns ingen iPad- eller iPhone-version ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ännu ingen ruta läser dem.
- Strålföljning på grafikkortet, tilläggen i renderingsdialogen och renderingskön kräver WebGPU (utan det använder hög kvalitet WebGL-strålföljaren); liveabilden använder WebGPU där webbläsaren har det, annars WebGL 2. De har bara testats här på en programvarubaserad grafikersättning, ännu inte på riktiga grafikkort. Liveabilden saknar spridning och delning i BimCraft (ModelCraft har dem).
- Att rendera en inspelad genomgång som video ingår inte i BimCraft.
- Dimensioneringskontroller: en I-profil vars IFC-profilnamn inte är en W-, S-, IPE-, HEA- eller HEB-storlek (eller vars storlek skiljer sig från den) behandlas som svetsad och får "ej kontrollerad", liksom rör, vinkeljärn, U-profiler, slanka delar och vridning. Ingen ingenjör har ännu granskat kontrollerna.
- Ritade element kan inte kopieras ett och ett, vridas, speglas eller ordnas i matris (en hel nivå kan kopieras), och det finns ingen delad vägg, inget textverktyg eller ingen gardinvägg. En vägg som möter en vägg från en lägre nivå på en övre nivå skärs inte in i den väggens 3D-kropp, och scheman listar en öppning på övre nivå under sin egen väggs nivå.
- Familjer: ett bibliotek med familjer som delas mellan projekt är inte byggt. Familjer och kopierade nivåer har ännu inte öppnats i andra BIM-program.
- MEP: utrustningen är generisk (inga tillverkares data); T-stycken och reducerare på stålspolar är generiska, inte från tabellen i ASME B16.9; anslutningar på biblioteksobjekt som placerats från fliken {{ui:Bibliotek}} skrivs inte in i IFC; ingenting är granskat av en ingenjör.
- Tillägget Plant kan ännu inte rita en dragen sträcka i modellen, numrera spolar på sina isometriska vyer eller kontrollera layouten för utrustning som placerats från biblioteket.
- Anläggningar från CivilCraft:s anläggningsbibliotek kan ännu inte placeras från fliken {{ui:Bibliotek}} i BimCraft.
- Energi: ingen timvis simulering, ingen ISO 52016-1-metod och inga klimatfiler. Tillgångar: ingen värdbaserad tvilling som behåller avläsningar eller skickar larm medan BimCraft är stängt.
- Skanningsregistrering har prövats på testskanningar, ännu inte på en riktig skanners skanningsuppsättning; E57-filer öppnas fortfarande upp till 6 miljoner punkter och 512 MB.
- Projektpaket öppnas bara i BimCraft (de andra apparna tar emot en layout via **Öppna i …**), och paketen och tvåprogramspaketet har testats mot ersättare, ännu inte med Archicad eller Revit själva.

Allt annat finns i [Vad som ännu inte är byggt](topic:not-built-yet).
