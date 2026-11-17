---
title: Nytt i 0.7 (tidigare)
summary: BimCraft lägger till väggar över flera nivåer och Kopiera den här nivån, väggar från PDF:er och skanningar, egna väggsammansättningar, rikare familjer, utrustning för rör, kanaler och VVS med anslutningar, kollisionsuppsättningar, öppningar och rörspolar, dokument per tillgång, COBie och sensoravläsningar, himmel, sol, dagsljus på ett rutnät och värme- och kyllaster, skanningsregistrering, en live-vy och strålföljning på grafikkortet, STEP och USD, biblioteksvarianter och mer för AI-assistenter.
keywords: nytt i 0.7, tidigare version, versionsnoter, ändringslogg, ändringar, 0.7, version, nya funktioner, väggar över nivåer, kopiera den här nivån, pdf, skanning, spåra, väggar från planer, väggsammansättningar, skikt, kärna, membran, referensmått, materialbibliotek, visningsenheter, vystil, stomme, bjälkar, familjer, parametrar, planssymbol, hotspots, upprepa, detaljnivå, kapslade familjer, csv-storlekar, per element, utrustning, anslutningar, kopplingar, fria avstånd, öppningar, rörspolar, rörspolblad, fältsvets, kanalkapplista, dokument, cobie, sensorer, mqtt, live-flöde, vertikal himmelskomponent, solvärme, dagsljusrutnät, värme, kyla, laster, u-värde, registrera skanningar, icp, e57, live-vy, strålföljning, webgpu, brusreducering, fysisk himmel, ljusblandning, renderingskö, din maskin, step, usd, projektpaket, bearbeta en massa, varianter, assistenter, tilläggs-API, anläggning, el, designkontroller
from: ef226539
---

Det här är vad som ändrades i BimCraft 0.7, jämfört med 0.6. Listan är grupperad efter område, med det viktigaste först.

## Nytt

### Rita en byggnad

- **Väggar över flera nivåer.** Höjdlistan i verktyget {{ui:Vägg}} erbjuder **Upp till** vilken nivå som helst längre upp, precis som Egenskaper gör för en vald vägg. Planerna för nivåerna mitt emellan visar väggen ljusare, rum där sluter sig mot den, och dörrar och fönster kan placeras i den från dessa planer; **Går igenom** i Egenskaper anger vilka nivåer den passerar. Se [Ändra en vägg, dörr eller fönster](topic:change-a-wall-or-door#change-a-wall).
- **Kopiera den här nivån.** {{ui:Kopiera den här nivån…}} i nivåpanelen ritar en nivås väggar med deras dörrar och fönster, och dess golv och undertak igen på en annan nivå eller på en ny nivå ovanpå, i ett ångra-steg; rum visas av sig själva. Se [Rita väggar](topic:draw-walls#levels).
- **Väggar från en PDF eller en skanning.** {{ui:Bygge}} › {{ui:Från en ritning…}} tar nu emot en PDF (linjearbete eller en skanning inne i den) eller en skannad plan (PNG, JPEG, TIFF, många sidor): varje sida blir väggarna, dörrarna, fönstren och rummen på en nivå, med sidan kvar under sin plan. Spårningen använder inget nätverk och ingen tränad modell, och resultatet är vad linjerna gav: kontrollera varje nivå mot dess sida. Se [Väggar från en uppsättning planer](topic:walls-from-plans).
- **Egna väggsammansättningar.** {{ui:Väggsammansättningar…}} bygger en väggtyp skikt för skikt, med en kärna, luftspalter och membran, och en förhandsvisning med mått; {{ui:Materialbibliotek…}} behåller projektets material i IFC; {{ui:Annotera}} › {{ui:Referensmått}} mäter till ytor och kärnlinjer och följer väggarna när de ändras. Från en bidragsgivare i gemenskapen, Doc (drsurfbum). Se [Väggsammansättningar och referensmått](topic:wall-assemblies).
- **Visningsenheter och vykontroller.** {{ui:Enheter}} i verktygsfältet visar längder i fot och tum, tum, decimalfot, millimeter, centimeter eller meter, i mått, förteckningar, koordinater, mätningar och sektioner. {{ui:Plan}}, {{ui:Dela}} och {{ui:3D}} finns i verktygsfältet, delningen kan dras (eller flyttas från tangentbordet), {{ui:Skuggad}}, {{ui:Kanter}} och {{ui:Trådmodell}} finns bredvid vykuben, och takets lutning, vindskiva och underkant ändrar det valda taket på en gång. Från en bidragsgivare i gemenskapen, Joel (yisraelk). Se [Rita väggar](topic:draw-walls#levels).
- **Golvbjälkar efter spännvidd.** {{ui:Stomme}} kan lägga ut konstruerade bjälkar (preliminärt) liksom sågat virke, och väljer den minsta listade serien och höjden som når spännvidden, 16" eller 24" c/c, i båda riktningarna; de hamnar i IFC och kapplistan. Ett förslag från en tillverkares publicerade tabell, inte konstruktionsberäkning. Också från Joel. Se [Stomme för väggar, golv och tak](topic:framing).
- **Fler elektriska enheter.** {{ui:El}} lägger till uttag för data, telefon och ljud och bild, en väljarbrytare, en timer, en termostat, rök- och värmedetektorer, en manuell brandlarmsknapp och en siren, en fläkt, en energimätare och en underpanel, var och en med sin egen IFC-klass. Se [Elplanen](topic:electrical-plan).

### Familjer

- **Familjer gör mer.** Parametrar kan vara heltal, text, ett material, en penna eller en fyllning; en familj kan rita sin egen planssymbol, upprepa en solid, markera delar för grövre detaljnivåer, innehålla andra familjer (ett ben i ett bord), och ha hotspots som du drar, även på ett placerat element i planen. Storlekar kommer från en CSV-tabell, och parametrar markerade **Per element** låter två dörrar i samma storlek skilja sig åt. Se [Redigera en familj](topic:family-editor#plan-symbol) och [Familjer och deras storlekar](topic:families#sizes-from-a-table).

### Rör, kanaler och utrustning

- **Utrustning med anslutningar.** {{ui:Bygge}} › {{ui:Utrustning}} placerar en generisk luftbehandlingsenhet, kanalfläkt, pump, panna, varmvattenberedare, terminalenhet, don, galler eller tank, dimensionerad efter de värden du skriver in, med sina rör- och kanalanslutningar som anslutningar. Var och en sparas med sin IFC-klass och IFC-portar. Se [MEP-utrustning med portar](topic:mep-equipment).
- **Sammanhängande sträckor.** Ett rör eller en kanal som startar på en anslutning får dess storlek och system och sitter fast i den: flytta pumpen så följer dess rör med. {{ui:Kontrollera anslutningar}} listar öppna anslutningar, lösa ändar, storlek- och systemavvikelser och sträckor som ingen matar. Se [Anslut rör och kanaler till utrustning](topic:mep-connections).
- **Rör och kanaler mot stommen.** {{ui:Kollisionskontroll}} har färdiga uppsättningar och {{ui:Rör och kanaler × stomme}} med ett klick; {{ui:Kontrollera fria avstånd}} använder varje sträckas isolering plus ett gap som du skriver in; {{ui:Håltagningar som behövs}} listar var sträckor går genom väggar och bjälklag, som CSV och BCF-ärenden. Inget skärs. Se [Kontrollera rör och kanaler mot stommen](topic:mep-against-structure).
- **Stålrörsspolar.** En stålsträcka skärs i numrerade spolar vid en längsta längd och vid {{ui:Montagesvets}} som du placerar; {{ui:Rörspolblad (PDF)}} ger en sida per spole med dess isometriska vy, skärlängder, rördelar, svetsar och stycklista, och {{ui:Kanalkapplista}} listar raka kanaldelar. Se [Stålrörsspolar och rörspolblad](topic:pipe-spools).

Det här är ritnings- och samordningshjälpmedel, dimensionerade av en ingenjör: inga flöden, tryck eller injustering.

### Driften av byggnaden

- **Dokument per tillgång.** Fliken {{ui:Tillgångar}} kopplar bruksanvisningar, garantier, foton och ritningar till en tillgång via ett filnamn bredvid IFC-filen eller en webbadress; bara länken läggs i IFC. Se [Dokument](topic:assets-and-maintenance#documents).
- **COBie-kalkylblad.** {{ui:Spara som COBie (.xlsx)}} skriver COBie 2.4-överlämningsarbetsboken, och en COBie-arbetsbok som läses tillbaka listar varje ändring innan ett enda {{ui:Verkställ}}. Den har ännu inte genomgått någon COBie-validerare. Se [COBie-kalkylblad](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoravläsningar och live-flöden.** Öppna en CSV med avläsningar, eller {{ui:Anslut}} direkt från webbläsaren till din egen MQTT-broker eller en adress som ditt byggnadssystem svarar på: varje tillgång visar sin senaste avläsning och en graf, färgas i modellen, och flaggas utanför gränserna som sparats i IFC. Avläsningarna stannar i fliken; lösenord sparas aldrig. Se [Sensoravläsningar](topic:assets-and-maintenance#sensor-readings) och [Live-avläsningar](topic:assets-and-maintenance#live-readings).

### Dagsljus och energi

- **Himmel och sol vid varje fönster.** Fliken {{ui:Dagsljus}} ger varje fönster dess vertikala himmelskomponent och obstruktionsvinkel, följer solen genom ett datum med {{ui:Sol genom fönstren ett visst datum}}, och räknar ut {{ui:Dagsljusfaktor på ett rutnät}} över varje rum, ritad på dess plan. Se [Vertikal himmelskomponent för varje fönster](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Värme- och kyllaster.** {{ui:Värme- och kyllaster}} räknar ut varje rums värmeförlust, dess uppvärmning under ett år från gradagar och dess kyltopp, utifrån vad som begränsar det i modellen och varje elements U-värde; ett U-värde som skrivs in där skrivs in i IFC. Se [Beräkna värme- och kyllaster](topic:heating-and-cooling-loads).

Båda är konstruktionshjälpmedel enligt publicerade metoder, inte underlag för regelefterlevnad, och varje panel säger det.

### Skanningar

- **Registrera flera skanningar.** {{ui:Passa in skanningar…}} (i startpanelen, eller i {{ui:Visa}}) placerar skanningar i en ram genom valda punktpar eller skrivna målpunkter, förfinar dem med ICP punkt till punkt och sedan punkt till plan, sparar registreringen som en liten projektfil och skriver det registrerade molnet som en LAS- eller E57-fil. Se [Registrera flera skanningar till en](topic:register-scans).

### Bilder och live-vyn

- **Live-vyn.** {{ui:Liveabild}} i verktygsfältet visar modellen i realtidsutseende bredvid 3D-vyn, följer den och varje ändring, med {{ui:Vandra}}, tid på dygnet och månaden; {{ui:Liveabild i ett nytt fönster}} placerar den på en andra skärm. Se [Live-vyn](topic:live-view).
- **Strålföljning på grafikkortet.** Med WebGPU kör {{ui:Rendera}} › {{ui:Hög kvalitet (strålföljning)}} CadCraft:s egna strålföljare på grafikkortet, kan stoppas och {{ui:Återuppta}}, och brusreduceras i slutet; utan WebGPU använder den WebGL-strålföljaren som förut. Se [Hög kvalitet](topic:render#high-quality).
- **Mer i renderingsdialogen** (på grafikkortet, så det kräver WebGPU): en fysisk himmel och himmelsbilder, IES-ljusprofiler, en kamera med bländartal, skärpedjup, tvåpunktsperspektiv, vitbalans och 360°-panoramor, en gradering för den färdiga bilden, ljusblandning och renderingselement efter renderingen, dimma, rök och kaustik, sparande som 16-bitars PNG, EXR eller en renderingsfil, och en renderingskö. Se [Himmel och ljusprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) och [Renderingskön](topic:render#the-render-queue).
- **Din maskin.** {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Din maskin}} visar grafiken, processorkärnorna och minnet som webbläsaren låter appen använda, och nivån rendering startar på. Se [Vad din maskin renderar med](topic:your-machine).

### Filer och andra appar

- **STEP-filer öppnas.** En `.step`- eller `.stp`-del, utrustning eller leverantörens modell (AP203, AP214, AP242) öppnas som en liten IFC-modell, där varje solid är ett element du kan granska, sektionera, mäta och spara som IFC. Färger och sammanställningens delnamn läses inte ännu. Se [Filer som BimCraft öppnar och sparar](topic:files#what-it-opens).
- **USD-export.** {{ui:USD}} i verktygsfältet skriver de öppna modellerna som `.usda`, `.usdc` eller `.usdz`, ordnade efter tomt, byggnad, våningsplan och disciplin, med varje elements IFC-klass, GlobalId och egenskaper. Se [Exportera modellen som USD](topic:usd).
- **En massa från CivilCraft.** En byggnadsmassa som skickas från CivilCraft:s platsvy visar sina studienummer i Egenskaper, och {{ui:Bearbeta den här massan}} bygger väggar på varje nivå och ett golv av den i ett ångra-steg. Se [Bearbeta en byggnadsmassa från en platsstudie](topic:develop-a-mass).
- **Biblioteksobjekt med varianter.** Ett objekt som finns i flera varianter har ett val {{ui:Variant}} i fliken {{ui:Bibliotek}}; det placerade elementet behåller sin variant i IFC, {{ui:Byt objekt…}} listar de andra varianterna, och kopior och uppdateringar behåller den. Se [Placera och byt ett biblioteksobjekt som har varianter](topic:library-variants).
- **Projektpaket i en mapp.** {{ui:Öppna en mapp}} listar `.ccbundle.zip`-filer under {{ui:Projektpaket}}, och varje layout i ett paket har **Öppna i …**: PDF-filen till MarkupCraft, DWG-filen till CadCraft, i en ny flik. Se [Öppna en layout](topic:open-project-bundle#open-a-layout).

### Assistenter och tillägg

- **Mer för AI-assistenter.** En assistent kan nu byta namn på element och sätta egenskapsvärden, flytta och ta bort element, ändra väggar, dörrar och fönster, exportera USD, och rendera en bild eller köra renderingskön; varje ändring är ett ångra-steg. Se [Låt en AI-assistent arbeta med din modell](topic:assistants).
- **Tillägg kan bygga i modellen.** Tilläggs-API 1.1 låter ett tillägg göra en ändring i modellen som ett ångra-steg (den följer med i Live TeamWork), läsa modellen, och läsa rör- och kanalsträckor, portar, utrustning och spolar.
- **Plant-tillägget** (avstängt tills du slår på det i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Tillägg}}): rörspecifikationer kontrollerade mot sträckorna, isometriska ritningar av en sträcka som SVG och DXF med en stycklista, generisk processutrustning med munstycken placerad i modellen, en router mellan två portar, och en kontroll av fabrikens layout. Ett ritningshjälpmedel, inte ett tekniskt godkännande; dess texter finns bara på engelska.

## Ändrat

- **Ett första hus på en bärbar dator.** På en skärm i bärbar datorstorlek startar BimCraft med enbart planen, Rita-raden är en smal panel med planen anpassad bredvid, planen och 3D-vyn kommer tillbaka i sikte när ritningen lämnar dem, 3D-vyn ramar in hela huset i en smal ruta, och dörrar och fönster väljs före måttlinjer.
- **Spara en bild.** **Spara PNG** i renderingsdialogen är nu {{ui:Spara}}, med {{ui:Spara som}} bredvid för de andra formaten. Se [Spara bilden](topic:render#save-the-picture).
- **Fliken Analys** har ett block {{ui:Dimensioneringskontroller}}: det gör lastkombinationerna enligt ASCE 7 eller EN 1990 för dina fall och kontrollerar varje valsad I-profil (en W-, S-, IPE-, HEA- eller HEB-dimension efter dess profilnamn och storlek) enligt AISC 360 eller EN 1993-1-1, och visar hur stor del av dess kapacitet den använder. Ett hjälpmedel tills en ingenjör har granskat det; svetsade profiler och andra sektioner säger ”inte kontrollerad”. Se [Designkontroller](topic:frame-analysis#design-checks).

## Åtgärdat

- Gör om efter ett steg som skapade en ny familjestorlek misslyckades (”ingen storlek”). Varje steg skapar nu samma IFC GlobalIds igen vid ett gör om, så gör om fungerar för familjer och alla andra ändringar.
- När två personer sparade samma familj (i en Live TeamWork-session eller i två fönster) ersatte den andra sparningen tyst den första personens ändring. Nu vägrar den och säger hur man ser deras ändring och gör sin egen igen.
- En modell i US survey feet lästes som 0.3048 m per fot i stället för 0.3048006096 m, vilket flyttade varje georefererad IFC i US-fot på kartan.
- Familjeredigeraren: när den stängs flyttas tangentbordsfokus inte längre till sidan, dess {{ui:Spara}} förblir synlig på en telefon, och dess fält får inte längre telefonen att zooma in.

## I alla appar

- **Enheter.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Enheter}} har en lista var för längd, area, volym, vinkel och lutning, med de exakta storlekarna som enheternas definitioner ger (US survey foot är en egen enhet). Stäng av de enheter du aldrig använder så lämnar de enhetslistorna; markera en med stjärna och nytt arbete börjar i den. En fil behåller alltid sin egen enhet. I BimCraft följer listan {{ui:Enheter}} i verktygsfältet omkopplarna, stjärnan anger visningsenheterna tills du väljer dem i verktygsfältet (ditt tidigare val behålls), och ritverktygens längdrutor tar vilken enhets beteckning som helst, till exempel `3.5 m` eller `10 US ft`. Se [Enheter, skrivna värden och enhetslistorna](common:unit-lists).
- **En tätare layout och paneler som städar undan sig.** {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Layouttäthet}} › {{ui:Kompakt}} får plats med mer på skärmen (pekskärmar och telefoner behåller sina stora knappar). Varje sidopanel har en smal namnlist: dra den för att docka eller flyta panelen, släpp den på en annan panels list för att dela en ram som flikar, fäst den för att glida undan mot kanten, eller dölj den och hämta tillbaka den från kanten. Se [Ordna panelerna](common:arrange-panels#make-the-layout-denser).
- **Dialogrutor flyttas.** Dra en dialogruta i dess namnlist ur vägen för ritningen; den kommer tillbaka dit du lämnade den. Dubbelklicka på namnlisten för att centrera den igen. Se [Flytta en dialogruta](common:arrange-panels#move-a-dialog).
- **Recept för AI-assistenter.** Tio genomarbetade uppdrag till din egen assistent (städa en ritning, plotta en uppsättning, kontrollera ritningar, ställa frågor om en modell, summera en mängdavtagning, prova en delvariant…), var och en med de verktyg den anropar och de behörigheter den behöver, och var och en spelas upp av våra tester. Apparna innehåller ingen AI. Se [Recept för AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** är nytt i {{ui:Inställningar}} › {{ui:Allmänt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** och **Bahasa Indonesia** har nu varje ord i apparna, som utkast som ännu inte granskats av en modersmålstalare. Hjälpämnena är på engelska, med några på spanska.
- **CadCraft Studio** säger varför en uppdateringskontroll misslyckades (ingen fil för ditt system ännu, inget nätverk, en felaktig signatur) i stället för bara ”Klar”, och slutar visa upp ett kort med ”Nytt” som du stängt förrän det finns en nyare version.

## Finns inte i den här versionen ännu

- **0.7 är inte kodsignerad.** Signering, och paketet för Microsoft Store, flyttades till 0.8 eftersom certifikatvalideringen ännu inte har kommit. Kontrollera SHA-256 bredvid varje fil på getcadcraft.com/download. På Windows, om SmartScreen stoppar installationsprogrammet, välj {{ui:Mer info}}, sedan {{ui:Kör ändå}}. På en Mac, första gången, högerklicka på CadCraft Studio och välj {{ui:Öppen}}. CadCraft Studio finns inte i någon appbutik ännu, och det finns ingen iPad- eller iPhone-version ännu.
- Vinkel- och lutningslistorna i {{ui:Enheter}} sparas, men ingen ruta läser dem ännu.
- Strålföljning på grafikkortet, extrafunktionerna i renderingsdialogen och renderingskön kräver WebGPU (utan det använder hög kvalitet WebGL-strålföljaren); live-vyn använder WebGPU där webbläsaren har det, annars WebGL 2. De har bara testats här mot ett programvarubaserat grafikstöd, ännu inte på riktiga grafikkort. Live-vyn har ingen spridning eller delning i BimCraft (ModelCraft:s har dem).
- Rendering av en inspelad genomgång som video finns inte i BimCraft ännu.
- Dimensioneringskontroller: en I-profil vars IFC-profilnamn inte är en W-, S-, IPE-, HEA- eller HEB-dimension (eller vars storlek avviker från den) räknas som svetsad och returneras som ”inte kontrollerad”, liksom rör, vinkelprofiler, U-profiler, smala delar och vridning. Ingen ingenjör har ännu granskat kontrollerna.
- Ritade element kan inte kopieras ett i taget, vridas, speglas eller ställas upp i matris (en hel nivå kan kopieras), och det finns ingen delad vägg, textverktyg eller gardinvägg. En vägg som möter en vägg från en lägre nivå på en övre nivå skärs inte in i den väggens 3D-kropp, och förteckningar listar en öppning på övre nivå under sin väggs egen nivå.
- Familjer: ett bibliotek av familjer som delas mellan projekt finns inte ännu. Familjer och kopierade nivåer har ännu inte öppnats i andra BIM-program.
- MEP: utrustningen är generisk (inga tillverkardata); T-stycken och reducerar på stålspolar är generiska, inte från tabellen ASME B16.9; portar på biblioteksobjekt som placerats från fliken {{ui:Bibliotek}} skrivs inte in i IFC; ingenting är granskat av en ingenjör.
- Plant-tillägget kan ännu inte rita en dragen sträcka i modellen, numrera spolar på sina isometrier eller kontrollera layouten för utrustning som placerats från biblioteket.
- Anläggningar från CivilCraft:s anläggningsbibliotek kan ännu inte placeras från BimCraft:s flik {{ui:Bibliotek}}.
- Energi: ingen timsimulering, ingen ISO 52016-1-metod och inga klimatfiler. Tillgångar: ingen värdad tvilling som behåller avläsningar eller skickar larm medan BimCraft är stängt.
- Skanningsregistrering har provats på testskanningar, ännu inte på en riktig skannerns uppsättning skanningar; E57-filer öppnas fortfarande upp till 6 miljoner punkter och 512 MB.
- Projektpaket öppnas bara i BimCraft (de andra apparna tar emot en layout via **Öppna i …**), och paketen och tvåprogramspaketet har testats mot ersättningar, ännu inte med Archicad eller Revit själva.

Allt annat finns i [Vad som inte finns ännu](topic:not-built-yet).
