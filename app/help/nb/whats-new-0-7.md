---
title: Nytt i 0.7 (tidligere)
summary: BimCraft legger til vegger over flere nivåer og Kopier dette nivået, vegger fra PDF-er og skanninger, dine egne veggoppbygninger, rikere familier, MEP-utstyr med porter, kollisjonssett og åpninger og rørspoler, dokumenter per ressurs, COBie og sensoravlesninger, himmel, sol, dagslys på et rutenett og varme- og kjøleberegninger, skanningsregistrering, en direktevisning og stråleføring på grafikkortet, STEP og USD, bibliotekvarianter, og mer for AI-assistenter.
keywords: nytt i 0.7, tidligere utgave, utgivelsesnotater, endringslogg, endringer, 0.7, versjon, nye funksjoner, vegger over nivåer, kopier dette nivået, pdf, skanning, spor, vegger fra planer, veggoppbygninger, lag, kjerne, membran, referansemål, materialbibliotek, visningsenheter, visningsstil, rammeverk, bjelkelag, familier, parametere, plansymbol, hotspots, gjenta, detaljeringsnivå, nestede familier, CSV-størrelser, per element, utstyr, porter, tilkoblinger, klaringer, åpninger, spoler, spoleark, feltsveis, kanalkappeliste, dokumenter, cobie, sensorer, mqtt, live-feed, vertikal himmelkomponent, solvarme, dagslysrutenett, oppvarming, kjøling, laster, u-verdi, registrer skanninger, icp, e57, direktevisning, stråleføring, webgpu, støyreduksjon, fysisk himmel, lysblanding, renderkø, din maskin, step, usd, prosjektpakke, utvikle en masse, varianter, assistenter, add-on-API, anlegg, elektro, designkontroller
from: ef226539
---

Dette er det som endret seg i BimCraft 0.7, sammenlignet med 0.6. Listen er gruppert etter område, med det viktigste først.

## Nytt

### Tegn en bygning

- **Vegger over flere nivåer.** Veggverktøyets høyde-liste tilbyr **Opp til** et hvilket som helst nivå lenger opp, slik Egenskaper gjør for en valgt vegg. Planene for nivåene imellom viser veggen lysere, rom der lukker seg mot den, og dører og vinduer kan plasseres i den fra disse planene. **Går gjennom** i Egenskaper navngir nivåene den passerer. Se [Endre en vegg, dør eller vindu](topic:change-a-wall-or-door#change-a-wall).
- **Kopier dette nivået.** {{ui:Kopier dette nivået…}} i Nivåer-panelet tegner et nivås vegger med dørene og vinduene sine, og gulvene og himlingene sine, på nytt på et annet nivå eller et nytt nivå over, i ett angretrinn. Rom dukker opp av seg selv. Se [Tegn vegger](topic:draw-walls#levels).
- **Vegger fra en PDF eller en skanning.** {{ui:Bygg}} › {{ui:Fra en tegning…}} tar nå en PDF (linjetegning, eller en skanning inne i den) eller en innskannet plan (PNG, JPEG, TIFF, mange sider). Hver side blir veggene, dørene, vinduene og rommene til ett nivå, med siden beholdt under planen. Sporingen bruker ikke nettverk og ingen trent modell, og resultatet er det linjene ga: kontroller hvert nivå mot siden. Se [Vegger fra et sett med planer](topic:walls-from-plans).
- **Dine egne veggoppbygninger.** {{ui:Veggoppbygninger…}} bygger en veggtype lag for lag, med en kjerne, luftspalter og membraner, og en forhåndsvisning med mål. {{ui:Materialbibliotek…}} holder prosjektets materialer i IFC-filen. {{ui:Merknad}} › {{ui:Referansemål}} måler til flater og kjernelinjer og følger veggene når de endres. Fra en bidragsyter i fellesskapet, Doc (drsurfbum). Se [Veggoppbygninger og referansemål](topic:wall-assemblies).
- **Visningsenheter og visningskontroller.** {{ui:Enheter}} på verktøylinjen viser lengder i fot og tommer, tommer, desimalfot, millimeter, centimeter eller meter, i mål, tabeller, koordinater, målinger og snitt. {{ui:Plan}}, {{ui:Delt}} og {{ui:3D}} står i verktøylinjen. Delingen kan dras (eller flyttes fra tastaturet). {{ui:Skygget}}, {{ui:Kanter}} og {{ui:Trådramme}} står ved siden av visningskuben. Takstigning, vindskier og takbunn endrer det valgte taket med en gang. Fra en bidragsyter i fellesskapet, Joel (yisraelk). Se [Tegn vegger](topic:draw-walls#levels).
- **Gulvbjelker etter spenn.** {{ui:Rammeverk}} kan legge ut konstruerte bjelker (foreløpig) så vel som sagtømmer. Den velger den minste oppførte serien og høyden som når spennet, 16" eller 24" senteravstand, i begge retninger. De går inn i IFC-filen og kutteliste. Et forslag fra en produsents publiserte tabell, ikke prosjektering. Også fra Joel. Se [Rammeverk for vegger, gulv og tak](topic:framing).
- **Flere elektriske enheter.** {{ui:Elektro}} legger til data-, telefon- og lyd-bilde-uttak, en velgerbryter, en tidsbryter, en termostat, røyk- og varmedetektorer, en manuell brannalarm og en sirene, en vifte, en energimåler og en underordnet tavle. Hver har sin egen IFC-klasse. Se [Elektroplanen](topic:electrical-plan).

### Familier

- **Familier gjør mer.** Parametere kan være hele tall, tekst, et materiale, en penn eller et fyll. En familie kan tegne sitt eget plansymbol, gjenta et volum, merke deler for grovere detaljeringsnivåer, holde andre familier (et ben i et bord), og ha hotspots du drar, også på et plassert element i planen. Størrelser kommer fra en CSV-tabell, og parametere merket **Per element** lar to dører av samme størrelse være ulike. Se [Rediger en familie](topic:family-editor#plan-symbol) og [Familier og deres størrelser](topic:families#sizes-from-a-table).

### Rør, kanaler og utstyr

- **Utstyr med porter.** {{ui:Bygg}} › {{ui:Utstyr}} plasserer en generisk luftbehandlingsenhet, innlinjevifte, pumpe, kjel, varmtvannsbereder, terminalenhet, diffusor, rist eller tank, dimensjonert etter verdiene du skriver inn, med rør- og kanaltilkoblingene sine som porter. Hvert lagres som sin IFC-klasse med IFC-porter. Se [MEP-utstyr med porter](topic:mep-equipment).
- **Tilkoblede løp.** Et rør eller en kanal som starter på en port, tar størrelse og system fra den og holder seg fast til den: flytter du pumpen, følger røret med. {{ui:Kontroller tilkoblinger}} lister åpne porter, løse ender, størrelses- og systemavvik, og løp ingenting forsyner. Se [Koble rør og kanaler til utstyr](topic:mep-connections).
- **Rør og kanaler mot konstruksjonen.** {{ui:Kollisjonskontroll}} har ferdige sett, og {{ui:Rør og kanaler × konstruksjon}} i ett klikk. {{ui:Kontroller klaringer}} bruker hvert løps isolasjon pluss et gap du skriver inn. {{ui:Nødvendige åpninger}} lister hvor løp går gjennom vegger og dekker, som CSV og BCF-saker. Ingenting kuttes. Se [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure).
- **Stålrørspoler.** Et stålløp kuttes i nummererte poler ved en lengste lengde og ved {{ui:Feltsveis}}-er du plasserer. {{ui:Spoleark (PDF)}} gir en side per spole med dens isometriske visning, kuttelengder, fittings, sveiser og materialliste. {{ui:Kanalkappeliste}} lister rette kanalstykker. Se [Stålrørspoler og spoleark](topic:pipe-spools).

Dette er tegne- og koordineringshjelpemidler, dimensjonert av en ingeniør: ingen strømninger, trykk eller balansering.

### Drift av bygningen

- **Dokumenter per ressurs.** Fanen {{ui:Ressurser}} knytter bruksanvisninger, garantier, bilder og tegninger til en ressurs med et filnavn ved siden av IFC-filen, eller en webadresse. Bare lenken går inn i IFC-filen. Se [Dokumenter](topic:assets-and-maintenance#documents).
- **COBie-regneark.** {{ui:Lagre som COBie (.xlsx)}} skriver COBie 2.4-overleveringsarbeidboken. En COBie-arbeidsbok som leses tilbake, lister hver endring før én {{ui:Bruk}}. Den har ikke vært gjennom en COBie-validator ennå. Se [COBie-regneark](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoravlesninger og direktedata.** Åpne en CSV med avlesninger, eller {{ui:Koble til}} direkte fra nettleseren til din egen MQTT-megler, eller en adresse bygningssystemet ditt svarer på. Hver ressurs viser sin siste avlesning og et diagram, er farget på modellen, og flagges utenfor grensene som er lagret i IFC-filen. Avlesninger blir i fanen. Passord lagres aldri. Se [Sensoravlesninger](topic:assets-and-maintenance#sensor-readings) og [Direkte avlesninger](topic:assets-and-maintenance#live-readings).

### Dagslys og energi

- **Himmel og sol ved hvert vindu.** Fanen {{ui:Dagslys}} gir hvert vindu sin vertikale himmelkomponent og obstruksjonsvinkel, følger solen gjennom en dato med {{ui:Sol gjennom vinduene på en dato}}, og beregner {{ui:Dagslysfaktor på et rutenett}} over hvert rom, tegnet på planen. Se [Vertikal himmelkomponent for hvert vindu](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Varme- og kjøleberegninger.** {{ui:Varme- og kjølelaster}} beregner hvert rom sitt varmetap, oppvarming over et år fra gradddager, og kjøletoppen, ut fra det som avgrenser det i modellen og hvert elements U-verdi. En U-verdi skrevet inn der lagres i IFC-filen. Se [Beregn varme- og kjøleberegninger](topic:heating-and-cooling-loads).

Begge er designhjelpemidler etter publiserte metoder, ikke samsvarsberegninger, og hvert panel sier det.

### Skanninger

- **Registrer flere skanninger.** {{ui:Registrer skanninger…}} (i startpanelet, eller i {{ui:Vis}}) plasserer skanninger i én ramme etter valgte punktpar eller skrevne målpunkter. Den forbedrer dem med ICP, først punkt til punkt og så punkt til plan. Registreringen lagres som en liten prosjektfil, og den registrerte skyen skrives som én LAS- eller E57-fil. Se [Registrer flere skanninger til én](topic:register-scans).

### Bilder og direktevisningen

- **Direktevisningen.** {{ui:Direktevisning}} på verktøylinjen viser modellen i sanntidsutseende ved siden av 3D-visningen. Den følger den og hver endring, med Gå, tidspunkt på døgnet og måned. {{ui:Direktevisning i et nytt vindu}} setter den på en annen skjerm. Se [Direktevisningen](topic:live-view).
- **Stråleføring på grafikkortet.** Med WebGPU kjører {{ui:Render}} › {{ui:Høy kvalitet (stråleført)}} CadCrafts egen strålefører på grafikkortet. Den kan stoppe og {{ui:Fortsett}}, og støyreduseres til slutt. Uten WebGPU bruker den WebGL-stråleføreren som før. Se [Høy kvalitet](topic:render#high-quality).
- **Mer i renderdialogen** (på grafikkortet, så den trenger WebGPU): en fysisk himmel og himmelbilder, IES-lysprofiler, et kamera med f-tall, dybdeskarphet, topunktsperspektiv, hvitbalanse og 360°-paneler, en gradering for det ferdige bildet, lysblanding og renderelementer etter renderingen, tåke, røyk og kaustikk, lagring som 16-bit PNG, EXR eller en renderfil, og en renderkø. Se [Himler og lysprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) og [Renderkøen](topic:render#the-render-queue).
- **Din maskin.** {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Maskinen din}} viser grafikken, prosessorkjernene og minnet denne nettleseren lar appen bruke, og nivået rendering starter på. Se [Hva maskinen din rendrer med](topic:your-machine).

### Filer og andre apper

- **STEP-filer åpnes.** En `.step`- eller `.stp`-del, et stykke utstyr eller en leverandørs modell (AP203, AP214, AP242) åpnes som en liten IFC-modell. Hvert volum er et element du kan inspisere, snitte, måle og lagre som IFC. Farger og delnavnene fra sammenstillingen leses ikke ennå. Se [Filer BimCraft åpner og lagrer](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} på verktøylinjen skriver de åpne modellene som `.usda`, `.usdc` eller `.usdz`, ordnet etter område, bygning, etasje og fagområde, med hvert elements IFC-klasse, GlobalId og egenskaper. Se [Eksporter modellen som USD](topic:usd).
- **En masse fra CivilCraft.** En bygningsmasse sendt fra CivilCrafts områdevisning viser sine studietall i Egenskaper. {{ui:Utvikle denne massen}} bygger vegger på hvert nivå og et gulv av den i ett angretrinn. Se [Utvikle en bygningsmasse fra en områdestudie](topic:develop-a-mass).
- **Bibliotekselementer med varianter.** Et element som kommer i flere varianter, har et {{ui:Variant}}-valg i fanen {{ui:Bibliotek}}. Det plasserte elementet beholder sin variant i IFC-filen, {{ui:Bytt element…}} lister de andre variantene, og kopier og oppdateringer beholder den. Se [Plasser og bytt et bibliotekselement som har varianter](topic:library-variants).
- **Prosjektpakker i en mappe.** {{ui:Åpne en mappe}} lister `.ccbundle.zip`-filer under {{ui:Prosjektpakker}}, og hver layout i en pakke har **Åpne i …**: PDF-en til MarkupCraft, DWG-en til CadCraft, i en ny fane. Se [Åpne en layout](topic:open-project-bundle#open-a-layout).

### Assistenter og tillegg

- **Mer for AI-assistenter.** En assistent kan nå gi nytt navn til elementer og sette egenskapsverdier, flytte og slette elementer, endre vegger, dører og vinduer, eksportere USD, og rendere et bilde eller kjøre renderkøen. Hver endring er ett angretrinn. Se [La en AI-assistent jobbe med modellen din](topic:assistants).
- **Tillegg kan bygge i modellen.** Tillegs-API 1.1 lar et tillegg gjøre en endring i modellen som ett angretrinn (den reiser med Live TeamWork), lese modellen, og lese rør- og kanalløp, porter, utstyr og spoler.
- **Anleggstillegget** (avslått til du slår det på i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Tillegg}}): rørspesifikasjoner sjekket mot løpene, isometriske tegninger av et løp som SVG og DXF med en materialliste, generisk prosessutstyr med dyser plassert i modellen, en ruter mellom to porter, og en sjekk av anleggets layout. Et tegnehjelpemiddel, ikke en ingeniørgodkjenning. Teksten er bare på engelsk.

## Endret

- **Et første hus på en bærbar.** På en skjerm i bærbar størrelse starter BimCraft med bare planen. Tegnelinjen er et smalt panel med planen tilpasset ved siden av. Plan og 3D-visning kommer tilbake i syne når tegningen forlater dem. 3D-visningen rammer hele huset i en smal rute, og dører og vinduer velges før målelinjer.
- **Lagring av et bilde.** **Lagre PNG** i renderdialogen er nå {{ui:Lagre}}, med {{ui:Lagre som}} ved siden av for de andre formatene. Se [Lagre bildet](topic:render#save-the-picture).
- **Analysefanen** har en blokk {{ui:Designkontroller}}. Den lager lastekombinasjonene i ASCE 7 eller EN 1990 for dine tilfeller, og sjekker hver valset stål-I-profil (en W-, S-, IPE-, HEA- eller HEB-størrelse etter profilnavnet og størrelsen) etter AISC 360 eller EN 1993-1-1, og viser hvor mye av kapasiteten den bruker. Et hjelpemiddel til en ingeniør har gjennomgått det. Sveisede profiler og andre tverrsnitt sier «ikke sjekket». Se [Designkontroller](topic:frame-analysis#design-checks).

## Rettet

- Gjør om etter et steg som lagde en ny familiestørrelse, feilet («ingen størrelse»). Hvert steg lager nå de samme IFC-GlobalId-ene igjen ved gjør om, så gjør om virker for familier og alle andre endringer.
- Når to personer lagret den samme familien (i en Live TeamWork-økt eller to vinduer), erstattet den andre lagringen den første endringen stille. Den avviser nå, og sier hvordan du ser deres endring og gjør din igjen.
- En modell i amerikanske målefot ble lest som 0,3048 m per fot i stedet for 0,3048006096 m, noe som flyttet hver georeferert IFC i amerikanske fot på kartet.
- Familieeditoren: å lukke den flytter ikke lenger tastaturfokus til siden, Lagre forblir synlig på en telefon, og feltene gjør ikke at en telefon zoomer inn.

## I alle apper

- **Enheter.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Enheter}} har én liste hver for lengde, areal, volum, vinkel og helning, med de nøyaktige størrelsene enhetenes definisjoner gir (den amerikanske målefoten er en egen enhet). Slå av enhetene du aldri bruker, så forsvinner de fra enhetslistene. Merk én med stjerne, så starter nytt arbeid i den. En fil beholder alltid sin egen enhet. I BimCraft følger {{ui:Enheter}}-listen på verktøylinjen bryterne, stjernen angir visningsenhetene til du velger dem på verktøylinjen (ditt tidligere valg beholdes), og lengdefeltene i tegneverktøyene tar et hvilket som helst enhetsmerke, for eksempel `3.5 m` eller `10 US ft`. Se [Enheter, skrevne verdier og enhetslistene](common:unit-lists).
- **En tettere layout, og paneler som ryddes bort.** {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Layouttetthet}} › {{ui:Kompakt}} får plass til mer på skjermen. Berøringsskjermer og telefoner beholder sine store knapper. Hvert sidepanel har en smal tittellinje: dra den for å feste eller løsne panelet, slipp den på en annen panels linje for å dele én ramme som faner, fest den for å skli bort til kanten, eller skjul den og hent den tilbake fra kanten. Se [Ordne panelene](common:arrange-panels#make-the-layout-denser).
- **Dialoger kan flyttes.** Dra en dialog etter tittellinjen, ut av veien for tegningen. Den kommer tilbake der du slapp den. Dobbeltklikk tittellinjen for å sentrere den igjen. Se [Flytt en dialog](common:arrange-panels#move-a-dialog).
- **Oppskrifter for AI-assistenter.** Ti ferdige forespørsler til din egen assistent (rydde en tegning, plotte et sett, sjekke tegninger, stille spørsmål til en modell, summere en mengdeuttak, prøve en delvariant …), hver med verktøyene den kaller og tillatelsene den trenger, og hver spilt av våre tester. Appene inneholder ingen AI. Se [Oppskrifter for AI-assistenter](common:assistants-recipes).
- **Språk.** **Português (Portugal)** er nytt i {{ui:Innstillinger}} › {{ui:Generelt}} › {{ui:Språk}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nå alle ordene i appene, som utkast som ikke er gjennomgått av en morsmålstaler. Hjelpeemner er på engelsk, noen på spansk.
- **CadCraft Studio** sier hvorfor en oppdateringssjekk feilet (ingen fil for ditt system ennå, ingen nettverk, en ugyldig signatur), i stedet for bare «Ferdig». Og den slutter å vise frem et Hva er nytt-kort du lukket, til det finnes en nyere utgivelse.

## Ikke i denne versjonen ennå

- **0.7 er ikke kodesignert.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi sertifikatvalideringen ikke er kommet gjennom ennå. Sjekk SHA-256 ved siden av hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installasjonsprogrammet, velg {{ui:Mer info}}, og deretter {{ui:Kjør likevel}}. På en Mac, første gang, høyreklikk CadCraft Studio og velg {{ui:Åpne}}. CadCraft Studio finnes ikke i en appbutikk ennå, og det finnes ikke en iPad- eller iPhone-versjon ennå.
- Vinkel- og helningslistene i {{ui:Enheter}} lagres, men ingen felt leser dem ennå.
- Stråleføring på grafikkortet, tilleggene i renderdialogen og renderkøen krever WebGPU (uten det bruker høy kvalitet WebGL-stråleføreren). Direktevisningen bruker WebGPU der nettleseren har det, ellers WebGL 2. Det er bare testet her på en programvarestandin for grafikk, ikke ennå på ekte grafikkort. Direktevisningen har ingen spredning eller deling i BimCraft (ModelCraft har det).
- Å rendre en innspilt gjennomgang som video er ikke bygget inn i BimCraft.
- Designkontroller: et I-profil der IFC-profilnavnet ikke er en W-, S-, IPE-, HEA- eller HEB-størrelse (eller der størrelsen avviker fra den), tas som sveiset og kommer tilbake som «ikke sjekket». Det samme gjelder rør, vinkeljern, kanaler, slanke deler og torsjon. Ingen ingeniør har gjennomgått kontrollene ennå.
- Tegnede elementer kan ikke kopieres ett og ett, dreies, speiles eller arrayes (et helt nivå kan kopieres), og det finnes ingen delt vegg, tekstverktøy eller gardinvegg. En vegg som møter en vegg fra et lavere nivå på et øvre nivå, kuttes ikke inn i den veggens 3D-kropp, og tabeller lister en åpning på et øvre nivå under sin egen veggs nivå.
- Familier: et bibliotek av familier som deles mellom prosjekter, er ikke bygget. Familier og kopierte nivåer er ikke åpnet i andre BIM-programmer ennå.
- MEP: utstyr er generisk (uten produsentdata). Tees og reduksjoner på stålspoler er generiske, ikke fra ASME B16.9-tabellen. Porter på bibliotekselementer plassert fra fanen {{ui:Bibliotek}} skrives ikke inn i IFC-filen. Ingenting er gjennomgått av en ingeniør.
- Anleggstillegget kan ikke tegne et ruter-løp inn i modellen, nummerere spoler på sine isometriske tegninger, eller sjekke layouten til utstyr plassert fra biblioteket ennå.
- Anlegg fra CivilCrafts anleggsbibliotek kan ikke plasseres fra BimCrafts fane {{ui:Bibliotek}} ennå.
- Energi: ingen timesimulering, ingen ISO 52016-1-metode og ingen klimafiler. Ressurser: ingen hostet tvilling som beholder avlesninger eller sender varsler mens BimCraft er lukket.
- Skanningsregistrering er prøvd på testskanninger, ikke ennå på et ekte skannersett. E57-filer åpnes fortsatt til 6 millioner punkter og 512 MB.
- Prosjektpakker åpnes bare i BimCraft (de andre appene tar en layout gjennom **Åpne i …**). Pakker og to-programsettet er testet mot standins, ikke ennå med Archicad eller Revit selv.
