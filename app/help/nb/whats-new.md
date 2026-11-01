---
title: Nytt i 0.7
summary: BimCraft legger til vegger over flere nivåer og Kopier dette nivået, vegger fra PDF-er og skanninger, egne veggoppbygninger, rikere familier, MEP-utstyr med porter, kollisjonssett, åpninger og rørspoler, dokumenter på eiendeler, COBie og sensoravlesninger, himmel, sol, dagslys på et rutenett og varme- og kjølelaster, skanneregistrering, direktevisning og stråleføring på grafikkortet, STEP og USD, bibliotekvarianter og mer for AI-assistenter.
keywords: nytt, hva er nytt, versjonsnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, vegger gjennom nivåer, kopier dette nivået, pdf, skanning, spor, vegger fra planer, veggoppbygninger, lag, kjerne, membran, referansemål, materialbibliotek, skjermenheter, visningsstil, bindingsverk, bjelkelag, familier, parametere, plansymbol, varmepunkter, gjenta, detaljnivå, nestede familier, csv-størrelser, per element, utstyr, porter, tilkoblinger, klaringer, åpninger, spoler, spoolark, feltsveis, kanalkappeliste, dokumenter, cobie, sensorer, mqtt, direktestrøm, vertikal himmelkomponent, solvarme, dagslysrutenett, oppvarming, kjøling, laster, u-verdi, registrer skanninger, icp, e57, direktevisning, stråleføring, webgpu, støyfjerning, fysisk himmel, lysblanding, renderingskø, din maskin, step, usd, prosjektpakke, utvikle en masse, varianter, assistenter, tillegg-api, anlegg, elektro, dimensjoneringskontroller
from: 5c27b80a
---

Dette er hva som er endret i BimCraft 0.7, sammenlignet med 0.6. Listen er gruppert etter område, med det viktigste først.

## Nytt

### Tegn en bygning

- **Vegger gjennom flere nivåer.** Høydelisten i veggverktøyet tilbyr **Opp til** alle nivåer høyere opp, slik Egenskaper gjør for en valgt vegg. Planene for nivåene imellom viser veggen lysere, rom der lukker seg mot den, og dører og vinduer kan plasseres i den fra disse planene; **Går gjennom** i Egenskaper viser nivåene den passerer. Se [Endre en vegg, dør eller et vindu](topic:change-a-wall-or-door#change-a-wall).
- **Kopier dette nivået.** {{ui:Kopier dette nivået…}} i Nivåer-panelet tegner et nivås vegger med dører og vinduer, gulv og himlinger på nytt på et annet nivå eller et nytt nivå på toppen, i ett angrer-steg; rom vises av seg selv. Se [Tegn vegger](topic:draw-walls#levels).
- **Vegger fra en PDF eller en skanning.** {{ui:Bygg}} › {{ui:Fra en tegning…}} tar nå imot en PDF (linjetegning eller en skanning inni den) eller en skannet plan (PNG, JPEG, TIFF, mange sider): hver side blir veggene, dørene, vinduene og rommene på et nivå, med siden beholdt under planen. Sporingen bruker ingen nettverkstilkobling og ingen trenet modell, og resultatet er det linjene ga: kontroller hvert nivå mot siden. Se [Vegger fra et sett med planer](topic:walls-from-plans).
- **Egne veggoppbygninger.** {{ui:Veggoppbygninger…}} bygger en vegg­type lag for lag, med kjerne, luftspalter og membraner, og en forhåndsvisning med mål; {{ui:Materialbibliotek…}} beholder prosjektets materialer i IFC; {{ui:Merknad}} › {{ui:Referansemål}} måler til flater og kjernelinjer og følger veggene når de endres. Fra en bidragsyter i fellesskapet, Doc (drsurfbum). Se [Veggoppbygninger og referansemål](topic:wall-assemblies).
- **Enhetsvisning og visningskontroller.** {{ui:Enheter}} på verktøylinjen viser lengder i fot og tommer, tommer, desimalfot, millimeter, centimeter eller meter, i mål, lister, koordinater, målinger og snitt. {{ui:Plan}}, {{ui:Delt}} og {{ui:3D}} står på verktøylinjen, delingen kan dras (eller flyttes med tastaturet), {{ui:Skygget}}, {{ui:Kanter}} og {{ui:Trådramme}} står ved siden av ViewCube, og takvinkel, takkant og undertak endrer det valgte taket med en gang. Fra en bidragsyter i fellesskapet, Joel (yisraelk). Se [Tegn vegger](topic:draw-walls#levels).
- **Gulvbjelkelag etter spenn.** {{ui:Bindingsverk}} kan legge ut konstruerte bjelkelag (foreløpige) så vel som sagtømmer, og velger den minste oppgitte serien og høyden som når spennet, 16" eller 24" senter–senter, i begge retninger; de går inn i IFC og kappelisten. Et forslag fra en produsents publiserte tabell, ikke konstruksjonsberegning. Også fra Joel. Se [Bindingsverk for vegger, gulv og tak](topic:framing).
- **Flere elektriske enheter.** {{ui:Elektro}} legger til uttak for data, telefon og lyd-bilde, en velgerbryter, en tidsbryter, en termostat, røyk- og varmedetektorer, en manuell brannalarm og en sirene, en vifte, en energimåler og et underpanel, hver med sin egen IFC-klasse. Se [Elektroplanen](topic:electrical-plan).

### Familier

- **Familiene gjør mer.** Parametere kan være hele tall, tekst, et materiale, en penn eller et fyll; en familie kan tegne sitt eget plansymbol, gjenta et volumlegeme, merke deler for grovere detaljnivåer, inneholde andre familier (et ben på et bord), og ha varmepunkter du drar, også på et plassert element i planen. Størrelser hentes fra en CSV-tabell, og parametere merket **Per element** lar to dører av samme størrelse være forskjellige. Se [Rediger en familie](topic:family-editor#plan-symbol) og [Familier og deres størrelser](topic:families#sizes-from-a-table).

### Rør, kanaler og utstyr

- **Utstyr med porter.** {{ui:Bygg}} › {{ui:Utstyr}} plasserer en generisk luftbehandlingsenhet, innlinjevifte, pumpe, kjel, varmtvannsbereder, terminalenhet, diffusor, rist eller tank, dimensjonert etter verdiene du skriver inn, med rør- og kanaltilkoblingene som porter. Hver lagres med sin IFC-klasse og IFC-porter. Se [MEP-utstyr med porter](topic:mep-equipment).
- **Tilkoblede løp.** Et rør eller en kanal som starter på en port tar over størrelsen og systemet og er festet til den: flytt pumpen, så følger røret etter. {{ui:Kontroller tilkoblinger}} lister åpne porter, løse ender, størrelses- og systemavvik, og løp som ikke får tilførsel. Se [Koble rør og kanaler til utstyr](topic:mep-connections).
- **Rør og kanaler mot konstruksjonen.** {{ui:Kollisjonskontroll}} har ferdige sett, og {{ui:Rør og kanaler × konstruksjon}} i ett klikk; {{ui:Kontroller klaringer}} bruker hvert løps isolasjon pluss et gap du skriver inn; {{ui:Nødvendige åpninger}} lister der løp går gjennom vegger og dekker, som CSV og BCF-saker. Ingenting kuttes. Se [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure).
- **Stålrørspoler.** Et stålløp kuttes i nummererte spoler med en lengste lengde og ved {{ui:Feltsveis}}er du plasserer; {{ui:Spoolark (PDF)}} gir en side per spole med dens isometriske visning, kuttelengder, fittings, sveiser og stykkliste, og {{ui:Kanalkappeliste}} lister rette kanalstykker. Se [Stålrørspoler og spoolark](topic:pipe-spools).

Dette er tegne- og koordineringshjelpemidler, dimensjonert av en ingeniør: ingen strømninger, trykk eller balansering.

### Drift av bygningen

- **Dokumenter per eiendel.** Fanen {{ui:Eiendeler}} kobler håndbøker, garantier, bilder og tegninger til en eiendel med et filnavn ved siden av IFC-filen eller en nettadresse; bare lenken går inn i IFC. Se [Dokumenter](topic:assets-and-maintenance#documents).
- **COBie-regneark.** {{ui:Lagre som COBie (.xlsx)}} skriver COBie 2.4-overleveringsarbeidsboken, og en COBie-arbeidsbok som leses inn lister hver endring før ett {{ui:Bruk}}. Den har ikke vært gjennom en COBie-validator ennå. Se [COBie-regneark](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoravlesninger og direktestrømmer.** Åpne en CSV med avlesninger, eller {{ui:Koble til}} direkte fra nettleseren til din egen MQTT-tjener eller en adresse bygningssystemet ditt svarer på: hver eiendel viser sin siste avlesning og et diagram, er farget på modellen, og markeres når den er utenfor grensene lagret i IFC. Avlesningene blir i fanen; passord lagres aldri. Se [Sensoravlesninger](topic:assets-and-maintenance#sensor-readings) og [Direkteavlesninger](topic:assets-and-maintenance#live-readings).

### Dagslys og energi

- **Himmel og sol ved hvert vindu.** Fanen {{ui:Dagslys}} gir hvert vindu dets vertikale himmelkomponent og hindringsvinkel, følger solen gjennom en dato med {{ui:Sol gjennom vinduene på en dato}}, og beregner {{ui:Dagslysfaktor på et rutenett}} over hvert rom, tegnet på rommets plan. Se [Vertikal himmelkomponent for hvert vindu](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Varme- og kjølelaster.** {{ui:Varme- og kjølelaster}} beregner hvert rom sitt varmetap, oppvarmingen over et år fra gradddager og sin kjøletopp, ut fra det som avgrenser det i modellen og hvert elements U-verdi; en U-verdi som skrives inn der, skrives inn i IFC. Se [Beregn varme- og kjølelaster](topic:heating-and-cooling-loads).

Begge er beregningshjelpemidler etter publiserte metoder, ikke samsvarsberegninger, og hvert panel sier det.

### Skanninger

- **Registrer flere skanninger.** {{ui:Registrer skanninger…}} (på startpanelet, eller i {{ui:Vis}}) plasserer skanninger i ett koordinatsystem ved valgte punktpar eller skrevne målpunkter, forfiner dem med ICP fra punkt til punkt og deretter fra punkt til plan, lagrer registreringen som en liten prosjektfil og skriver den registrerte skyen som én LAS- eller E57-fil. Se [Registrer flere skanninger til én](topic:register-scans).

### Bilder og direktevisning

- **Direktevisningen.** {{ui:Direktevisning}} på verktøylinjen viser modellen i sanntidsutseende ved siden av 3D-visningen, følger den og hver endring, med {{ui:Gjennomgang}}, tiden på døgnet og måneden; {{ui:Direktevisning i et nytt vindu}} setter den på en andre skjerm. Se [Direktevisningen](topic:live-view).
- **Stråleføring på grafikkortet.** Med WebGPU kjører {{ui:Render}} › {{ui:Høy kvalitet (stråleført)}} CadCraft sin egen strålefører på grafikkortet, kan stoppes og {{ui:Fortsett}}, og støyfjernes til slutt; uten WebGPU bruker den WebGL-stråleføreren som før. Se [Høy kvalitet](topic:render#high-quality).
- **Mer i renderingsdialogen** (på grafikkortet, så den krever WebGPU): en fysisk himmel og himmelbilder, IES-lysprofiler, et kamera med f-tall, dybdeskarphet, topunktsperspektiv, hvitbalanse og 360°-panoramaer, en gradering for det ferdige bildet, lysblanding og renderelementer etter renderingen, tåke, røyk og kaustikk, lagring som 16-bit PNG, EXR eller en renderingsfil, og en renderingskø. Se [Himler og lysprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) og [Renderingskøen](topic:render#the-render-queue).
- **Din maskin.** {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Maskinen din}} viser grafikken, prosessorkjernene og minnet denne nettleseren lar appen bruke, og nivået rendering starter på. Se [Hva maskinen din rendrer med](topic:your-machine).

### Filer og andre apper

- **STEP-filer åpnes.** En `.step`- eller `.stp`-del, et stykke utstyr eller en leverandørs modell (AP203, AP214, AP242) åpnes som en liten IFC-modell, der hvert volumlegeme er et element du kan inspisere, snitte, måle og lagre som IFC. Farger og delnavnene i sammenstillingen leses ikke ennå. Se [Filer BimCraft åpner og lagrer](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} på verktøylinjen skriver de åpne modellene som `.usda`, `.usdc` eller `.usdz`, ordnet etter område, bygning, etasje og fag, med hvert elements IFC-klasse, GlobalId og egenskaper. Se [Eksporter modellen som USD](topic:usd).
- **En masse fra CivilCraft.** En bygningsmasse sendt fra CivilCrafts områdevisning viser sine studietall i Egenskaper, og {{ui:Utvikle denne massen}} bygger vegger på hvert nivå og et gulv fra den i ett angrer-steg. Se [Utvikle en bygningsmasse fra en områdestudie](topic:develop-a-mass).
- **Bibliotekselementer med varianter.** Et element som kommer i flere varianter har et valg {{ui:Variant}} i fanen {{ui:Bibliotek}}; det plasserte elementet beholder sin variant i IFC, {{ui:Bytt element…}} lister de andre variantene, og kopier og oppdateringer beholder den. Se [Plasser og bytt et bibliotekselement med varianter](topic:library-variants).
- **Prosjektpakker i en mappe.** {{ui:Åpne en mappe}} lister `.ccbundle.zip`-filer under {{ui:Prosjektpakker}}, og hvert oppsett i en pakke har **Åpne i …**: PDF-en til MarkupCraft, DWG-en til CadCraft, i en ny fane. Se [Åpne et oppsett](topic:open-project-bundle#open-a-layout).

### Assistenter og tillegg

- **Mer for AI-assistenter.** En assistent kan nå gi nytt navn til elementer og sette egenskapsverdier, flytte og slette elementer, endre vegger, dører og vinduer, eksportere USD, og rendere et bilde eller kjøre renderingskøen; hver endring er ett angrer-steg. Se [La en AI-assistent arbeide med modellen](topic:assistants).
- **Tillegg kan bygge i modellen.** Tillegg-API 1.1 lar et tillegg gjøre en endring i modellen som ett angrer-steg (den følger med i Live TeamWork), lese modellen, og lese rør- og kanalløp, porter, utstyr og spoler.
- **Plant-tillegget** (av til du slår det på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Tillegg}}): rørspesifikasjoner sjekket mot løpene, isometriske tegninger av et løp som SVG og DXF med en stykkliste, generisk prosessutstyr med dyser plassert i modellen, en ruter mellom to porter, og en kontroll av anleggets layout. Et tegnehjelpemiddel, ikke en ingeniørgodkjenning; teksten er bare på engelsk.

## Endret

- **Et første hus på en bærbar.** På en skjerm av bærbar størrelse starter BimCraft med planen alene, tegnelinjen er et smalt panel med planen tilpasset ved siden av, plan og 3D-visning kommer tilbake når tegningen forlater dem, 3D-visningen rammer hele huset i en smal rute, og dører og vinduer velges før målelinjer.
- **Lagre et bilde.** **Lagre PNG** i renderingsdialogen er nå {{ui:Lagre}}, med {{ui:Lagre som}} ved siden av for de andre formatene. Se [Lagre bildet](topic:render#save-the-picture).
- **Analysefanen** har en blokk {{ui:Dimensjoneringskontroller}}: den lager lastekombinasjonene etter ASCE 7 eller EN 1990 for dine tilfeller, og kontrollerer hver valsede stål-I-profil (en W-, S-, IPE-, HEA- eller HEB-størrelse etter profilnavn og størrelse) etter AISC 360 eller EN 1993-1-1, og viser hvor stor del av kapasiteten den bruker. En hjelp inntil en ingeniør har gjennomgått den; sveiste profiler og andre seksjoner sier «ikke kontrollert». Se [Dimensjoneringskontroller](topic:frame-analysis#design-checks).

## Rettet

- Gjør om etter et steg som lagde en ny familiestørrelse, mislyktes («ingen størrelse»). Hvert steg lager nå de samme IFC-GlobalId-ene igjen ved gjør om, så gjør om fungerer for familier og alle andre endringer.
- Når to personer lagret samme familie (i en Live TeamWork-økt eller to vinduer), erstattet det andre lagringen stille den første personens endring. Nå avvises den, og det sies hvordan man ser den andres endring og gjør sin egen på nytt.
- En modell i US survey feet ble lest som 0,3048 m per fot i stedet for 0,3048006096 m, noe som flyttet hver georeferert IFC i US-fot på kartet.
- Familieredigereren: å lukke den flytter ikke lenger tastaturfokus til siden, lagre-knappen står synlig på en telefon, og feltene får ikke telefonen til å zoome inn.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetenes definisjoner gir (US survey foot er sin egen enhet). Slå av enhetene du aldri bruker, og de forsvinner fra enhetslistene; merk én med stjerne, og nytt arbeid starter i den. En fil beholder alltid sin egen enhet. I BimCraft følger listen {{ui:Enheter}} på verktøylinjen bryterne, stjernen setter visningsenhetene til du velger dem på verktøylinjen (ditt tidligere valg beholdes), og lengdefeltene i tegneverktøyene tar en hvilken som helst enhets merke, som `3.5 m` eller `10 US ft`. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **En tettere layout og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen (berøringsskjermer og telefoner beholder de store knappene). Hvert sidepanel har en tynn tittellinje: dra den for å feste eller løsne panelet, slipp det på et annet panels linje for å dele en ramme som faner, fest det slik at det glir bort til kanten, eller skjul det og hent det tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialogene kan flyttes.** Dra en dialog etter tittellinjen ut av veien for tegningen; den kommer tilbake der du slapp den. Dobbeltklikk på tittellinjen for å sentrere den igjen. Se [Flytt en dialog](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti utarbeidede forespørsler til din egen assistent (rydd en tegning, plott et sett, kontroller tegninger, still spørsmål til en modell, summer en mengdeuttak, prøv en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver spilt av på nytt i våre tester. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Den, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå hvert ord i appene, som utkast som ennå ikke er gjennomgått av en morsmålsbruker. Hjelpeemnene er på engelsk, med noen få på spansk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk mislyktes (ingen fil for ditt system ennå, ingen nettverkstilkobling, en ugyldig signatur) i stedet for bare «Ferdig», og slutter å vise et Nytt-kort du lukket før det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering, og Microsoft Store-pakken, er flyttet til 0.8 fordi sertifikatvalideringen ikke har kommet gjennom ennå. Kontroller SHA-256 ved hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, og deretter {{ui:Kjør likevel}}. På en Mac, første gang, høyreklikk CadCraft Studio og velg {{ui:Åpen}}. CadCraft Studio finnes ikke i en appbutikk ennå, og det finnes ingen iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen felt leser dem ennå.
- Stråleføring på grafikkortet, tilleggene i renderingsdialogen og renderingskøen krever WebGPU (uten den bruker høy kvalitet WebGL-stråleføreren); direktevisningen bruker WebGPU der nettleseren har det, ellers WebGL 2. De er bare testet her på en programvarebasert erstatning for grafikkort, ikke ennå på ekte grafikkort. Direktevisningen har ingen spredning eller deling i BimCraft (ModelCraft har det).
- Å rendere en innspilt gjennomgang som video er ikke innebygd i BimCraft.
- Dimensjoneringskontroller: en I-profil der IFC-profilnavnet ikke er en W-, S-, IPE-, HEA- eller HEB-størrelse (eller der størrelsen avviker fra den), regnes som sveiset og blir «ikke kontrollert», det samme gjelder rør, vinkler, kanaler, slanke deler og torsjon. Ingen ingeniør har gjennomgått kontrollene ennå.
- Tegnede elementer kan ikke kopieres enkeltvis, vris, speiles eller settes i matrise (et helt nivå kan kopieres), og det finnes ingen delt vegg, tekstverktøy eller gardinvegg. En vegg som møter en vegg fra et lavere nivå på et øvre nivå, kuttes ikke inn i den veggens 3D-volum, og lister viser en åpning på øvre nivå under veggens eget nivå.
- Familier: et bibliotek med familier delt mellom prosjekter er ikke bygget. Familier og kopierte nivåer er ikke ennå åpnet i andre BIM-programmer.
- MEP: utstyret er generisk (uten produsentdata); T-stykker og reduksjoner på stålspoler er generiske, ikke fra ASME B16.9-tabellen; porter på bibliotekselementer plassert fra fanen {{ui:Bibliotek}} skrives ikke inn i IFC; ingenting er gjennomgått av en ingeniør.
- Plant-tillegget kan ennå ikke tegne et ruteet løp inn i modellen, nummerere spoler på sine isometrier eller kontrollere layouten til utstyr plassert fra biblioteket.
- Anlegg fra CivilCrafts anleggsbibliotek kan ikke plasseres fra fanen {{ui:Bibliotek}} i BimCraft ennå.
- Energi: ingen timesimulering, ingen ISO 52016-1-metode og ingen klimafiler. Eiendeler: ingen vertsbasert tvilling som beholder avlesninger eller sender varsler når BimCraft er lukket.
- Skanneregistrering er prøvd på testskanninger, ikke ennå på et ekte skannersett; E57-filer åpnes fortsatt med opptil 6 millioner punkter og 512 MB.
- Prosjektpakker åpnes bare i BimCraft (de andre appene tar et oppsett via **Åpne i …**), og pakker og toprogramspakken er testet mot erstatninger, ikke ennå med Archicad eller Revit selv.

Alt annet er i [Hva som ikke er bygget ennå](topic:not-built-yet).
