---
title: Nyheder i 0.7
summary: BimCraft tilføjer vægge gennem flere niveauer og Kopiér dette niveau, vægge fra PDF-filer og scanninger, egne vægopbygninger, rigere familier, MEP-udstyr med porte, kollisionssæt, åbninger og rørspoler, dokumenter til aktiver, COBie og sensoraflæsninger, himmel, sol, dagslys på et gitter og varme- og køleeffekt, scanningsregistrering, en live-visning og stisporing på grafikkortet, STEP og USD, biblioteksvarianter og mere til AI-assistenter.
keywords: nyheder, hvad er nyt, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, vægge gennem niveauer, kopiér dette niveau, pdf, scanning, stisporing, vægge fra planer, vægopbygninger, lag, kerne, membran, referencemål, materialebibliotek, skærmenheder, visningsstil, skelet, bjælker, familier, parametre, plansymbol, hotspots, gentag, detaljeniveau, indlejrede familier, csv-størrelser, pr. element, udstyr, porte, tilslutninger, forbindelser, frihøjder, åbninger, rørspoler, spoolark, svejsning på stedet, kanalskæreliste, dokumenter, cobie, sensorer, mqtt, live-feed, lodret himmelkomponent, solvarme, dagslysgitter, varme, køling, belastninger, u-værdi, registrér scanninger, icp, e57, live-visning, stisporing, webgpu, denoise, fysisk himmel, lysblanding, renderkø, din maskine, step, usd, projektpakke, udvikl en masse, varianter, assistenter, add-on api, anlæg, el, designkontrol
from: 5c27b80a
---

Dette er, hvad der er ændret i BimCraft 0.7 sammenlignet med 0.6. Listen er grupperet efter område, med det vigtigste først.

## Nyt

### Tegn en bygning

- **Vægge gennem flere niveauer.** Væg-værktøjets højdeliste tilbyder **Op til** ethvert niveau længere op, ligesom Egenskaber gør for en valgt væg. Planerne for de mellemliggende niveauer viser væggen lysere, rum dér slutter op til den, og døre og vinduer kan placeres i den fra disse planer. **Løber gennem** i Egenskaber angiver de niveauer, den passerer. Se [Ændr en væg, dør eller et vindue](topic:change-a-wall-or-door#change-a-wall).
- **Kopiér dette niveau.** {{ui:Kopiér dette niveau…}} i panelet Niveauer tegner et niveaus vægge med deres døre og vinduer, og dets gulve og lofter igen på et andet niveau eller på et nyt ovenpå, i ét fortryd-trin. Rum kommer af sig selv. Se [Tegn vægge](topic:draw-walls#levels).
- **Vægge fra en PDF eller scanning.** {{ui:Build}} › {{ui:Fra en tegning…}} tager nu imod en PDF (linjetegning eller en scanning i den) eller en skannet plan (PNG, JPEG, TIFF, mange sider). Hver side bliver til væggene, dørene, vinduerne og rummene på et niveau, med siden bevaret under sin plan. Sporingen bruger hverken netværk eller en trænet model, og resultatet er det, linjerne gav: kontrollér hvert niveau mod sin side. Se [Vægge fra et sæt planer](topic:walls-from-plans).
- **Egne vægopbygninger.** {{ui:Vægopbygninger…}} bygger en vægtype lag for lag med en kerne, luftspalter og membraner og en forhåndsvisning med mål. {{ui:Materialebibliotek…}} gemmer projektets materialer i IFC'en. {{ui:Notér}} › {{ui:Referencemål}} måler til flader og kernelinjer og følger væggene, når de ændres. Fra en bidragyder i fællesskabet, Doc (drsurfbum). Se [Vægopbygninger og referencemål](topic:wall-assemblies).
- **Skærmenheder og visningsstyring.** {{ui:Enheder}} på værktøjslinjen viser længder i fod og tommer, tommer, decimalfod, millimeter, centimeter eller meter i mål, lister, koordinater, målinger og snit. {{ui:Plan}}, {{ui:Delt}} og {{ui:3D}} sidder på værktøjslinjen, delingen kan trækkes (eller flyttes fra tastaturet), og {{ui:Skygget}}, {{ui:Kanter}} og {{ui:Trådmodel}} sidder ved siden af ViewCube. Tagets hældning, vindskede og underside ændrer det valgte tag med det samme. Fra en bidragyder i fællesskabet, Joel (yisraelk). Se [Tegn vægge](topic:draw-walls#levels).
- **Gulvbjælker efter spænd.** {{ui:Skelet}} kan lægge konstruerede bjælker (foreløbige) ud, såvel som savet træ, og vælger den mindste listede serie og højde, der når spændet, 16" eller 24" centerafstand, i begge retninger. De kommer med i IFC og skæreliste. Et forslag fra en producents offentliggjorte tabel, ikke ingeniørarbejde. Også fra Joel. Se [Skelet til vægge, gulve og tage](topic:framing).
- **Flere elektriske apparater.** {{ui:El}} tilføjer data-, telefon- og lyd-/billedstikkontakter, en vælgerafbryder, en timer, en termostat, røg- og varmedetektorer, en manuel alarm og en sirene, en ventilator, en energimåler og en underfordeling, hver med sin egen IFC-klasse. Se [Den elektriske plan](topic:electrical-plan).

### Familier

- **Familier kan mere.** Parametre kan være hele tal, tekst, et materiale, en pen eller en udfyldning. En familie kan tegne sit eget plansymbol, gentage et massivt legeme, markere dele til grovere detaljeniveauer, rumme andre familier (et ben i et bord) og have hotspots, du kan trække, også på et placeret element i planen. Størrelser hentes fra en CSV-tabel, og parametre markeret **Pr. element** lader to døre af samme størrelse være forskellige. Se [Redigér en familie](topic:family-editor#plan-symbol) og [Familier og deres størrelser](topic:families#sizes-from-a-table).

### Rør, kanaler og udstyr

- **Udstyr med porte.** {{ui:Build}} › {{ui:Udstyr}} placerer en generisk luftbehandlingsenhed, en rørventilator, en pumpe, en kedel, en varmtvandsbeholder, en terminalenhed, en diffusor, et gitter eller en tank, dimensioneret efter de værdier, du skriver ind, med dets rør- og kanaltilslutninger som porte. Hvert stykke gemmes som sin IFC-klasse med IFC-porte. Se [MEP-udstyr med porte](topic:mep-equipment).
- **Sammenkædede strækninger.** Et rør eller en kanal, der starter ved en port, får sin størrelse og sit system og bliver siddende fast på den: flyt pumpen, og dens rør følger med. {{ui:Kontrollér forbindelser}} lister åbne porte, løse ender, uoverensstemmelser i størrelse og system og strækninger, som intet forsyner. Se [Tilslut rør og kanaler til udstyr](topic:mep-connections).
- **Rør og kanaler mod konstruktionen.** {{ui:Kollisionskontrol}} har færdige sæt, og {{ui:Rør og kanaler × konstruktion}} kan køres med ét klik. {{ui:Kontrollér frihøjder}} bruger hver stræknings isolering plus et mellemrum, du skriver ind. {{ui:Nødvendige åbninger}} lister, hvor strækninger går gennem vægge og dæk, som CSV og BCF-emner. Intet bliver skåret. Se [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure).
- **Stålrørsspoler.** En stålstrækning skæres i nummererede spoler ved en største længde og ved {{ui:Svejsning på stedet}}-punkter, du placerer. {{ui:Spoolark (PDF)}} giver en side pr. spole med dens isometriske visning, skærelængder, rørdele, svejsninger og stykliste, og {{ui:Kanalskæreliste}} lister lige kanaldele. Se [Stålrørsspoler og spoolark](topic:pipe-spools).

Disse er tegne- og koordineringshjælpemidler, dimensioneret af en ingeniør: ingen flow, tryk eller afbalancering.

### Drift af bygningen

- **Dokumenter pr. aktiv.** Fanen {{ui:Aktiver}} knytter manualer, garantier, fotos og tegninger til et aktiv via et filnavn ved siden af IFC-filen eller en webadresse. Kun linket kommer med i IFC'en. Se [Dokumenter](topic:assets-and-maintenance#documents).
- **COBie-regneark.** {{ui:Gem som COBie (.xlsx)}} skriver COBie 2.4-overdragelsesarbejdsbogen, og en COBie-arbejdsbog, der læses ind igen, lister alle ændringer, inden du klikker {{ui:Anvend}} én gang. Den er endnu ikke blevet kontrolleret med en COBie-validator. Se [COBie-regneark](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoraflæsninger og live-feeds.** Åbn en CSV-fil med aflæsninger, eller {{ui:Opret forbindelse}} direkte fra browseren til din egen MQTT-broker eller en adresse, dit bygningssystem svarer på. Hvert aktiv viser sin seneste aflæsning og en graf, farvelægges på modellen og markeres, når det er uden for grænserne, der er gemt i IFC'en. Aflæsninger bliver i fanen, og adgangskoder gemmes aldrig. Se [Sensoraflæsninger](topic:assets-and-maintenance#sensor-readings) og [Live-aflæsninger](topic:assets-and-maintenance#live-readings).

### Dagslys og energi

- **Himmel og sol ved hvert vindue.** Fanen {{ui:Dagslys}} giver hvert vindue dets lodrette himmelkomponent og forhindringsvinkel, følger solen gennem en dato med {{ui:Sol gennem vinduerne på en dato}} og beregner {{ui:Dagslysfaktor på et gitter}} på tværs af hvert rum, tegnet på dets plan. Se [Lodret himmelkomponent for hvert vindue](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Varme- og køleeffekt.** {{ui:Varme- og køleeffekt}} beregner hvert rums varmetab, dets årlige varmebehov ud fra graddage og dets kølespidsbelastning, ud fra det, der afgrænser rummet i modellen, og hvert elements U-værdi. En U-værdi, der skrives ind der, gemmes i IFC'en. Se [Beregn varme- og køleeffekt](topic:heating-and-cooling-loads).

Begge er designhjælpemidler efter offentliggjorte metoder, ikke overensstemmelsesberegninger, og hvert panel siger det.

### Scanninger

- **Registrér flere scanninger.** {{ui:Registrér scanninger…}} (på startpanelet eller under {{ui:Vis}}) placerer scanninger i ét koordinatsystem ved valgte punktpar eller indtastede mål. De forfines med ICP, først punkt til punkt og derefter punkt til plan. Registreringen gemmes som en lille projektfil, og den registrerede punktsky skrives som én LAS- eller E57-fil. Se [Registrér flere scanninger til én](topic:register-scans).

### Billeder og live-visning

- **Live-visningen.** {{ui:Live-visning}} på værktøjslinjen viser modellen i realtidsudseende ved siden af 3D-visningen. Den følger modellen og alle ændringer, med {{ui:Rundtur}}, tidspunkt på dagen og måned. {{ui:Live-visning i et nyt vindue}} lægger den på en anden skærm. Se [Live-visningen](topic:live-view).
- **Stisporing på grafikkortet.** Med WebGPU kører {{ui:Render}} › {{ui:Høj kvalitet (stisporet)}} CadCraft's egen stisporer på grafikkortet. Den kan stoppes og {{ui:Genoptag}}, og den støjfjernes til sidst. Uden WebGPU bruger den WebGL-stisporeren som før. Se [Høj kvalitet](topic:render#high-quality).
- **Flere muligheder i renderdialogen** (på grafikkortet, så den kræver WebGPU): en fysisk himmel og himmelbilleder, IES-lysprofiler, et kamera med f-tal, skarphedsdybde, perspektiv med to forsvindingspunkter, hvidbalance og 360°-panoramaer, en gradering af det færdige billede, lysblanding og renderelementer efter renderingen, tåge, røg og kaustik, gemning som 16-bit PNG, EXR eller en renderfil, og en renderkø. Se [Himmel og lysprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) og [Renderkøen](topic:render#the-render-queue).
- **Din maskine.** {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Din maskine}} viser den grafik, processorkerner og hukommelse, denne browser lader appen bruge, og det kvalitetsniveau, rendering starter på. Se [Hvad din maskine renderer med](topic:your-machine).

### Filer og andre apps

- **STEP-filer åbnes.** En `.step`- eller `.stp`-del, et stykke udstyr eller en leverandørs model (AP203, AP214, AP242) åbnes som en lille IFC-model. Hvert massivt legeme bliver et element, du kan inspicere, lave snit i, måle og gemme som IFC. Farver og samlingens delnavne læses endnu ikke. Se [Filer BimCraft åbner og gemmer](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} på værktøjslinjen skriver de åbne modeller som `.usda`, `.usdc` eller `.usdz`, opbygget efter byggegrund, bygning, etage og fag, med hvert elements IFC-klasse, GlobalId og egenskaber. Se [Eksportér modellen som USD](topic:usd).
- **En masse fra CivilCraft.** En bygningsmasse, der sendes fra CivilCraft's byggepladsvisning, viser sine undersøgelsestal i Egenskaber. {{ui:Udvikl denne masse}} bygger vægge på hvert niveau og et gulv ud fra den i ét fortryd-trin. Se [Udvikl en bygningsmasse fra et byggepladsstudie](topic:develop-a-mass).
- **Biblioteksemner med varianter.** Et emne, der findes i flere varianter, har et valg {{ui:Variant}} på fanen {{ui:Bibliotek}}. Det placerede element beholder sin variant i IFC'en, {{ui:Byt emne…}} lister de andre varianter, og kopier og opdateringer beholder den. Se [Placér og byt et biblioteksemne, der har varianter](topic:library-variants).
- **Projektpakker i en mappe.** {{ui:Åbn en mappe}} lister `.ccbundle.zip`-filer under {{ui:Projektpakker}}. Hvert layout i en pakke har **Åbn i …**: PDF'en til MarkupCraft, DWG'en til CadCraft, i en ny fane. Se [Åbn et layout](topic:open-project-bundle#open-a-layout).

### Assistenter og add-ons

- **Flere muligheder for AI-assistenter.** En assistent kan nu omdøbe elementer og sætte egenskabsværdier, flytte og slette elementer, ændre vægge, døre og vinduer, eksportere USD og rendere et billede eller køre renderkøen. Hver ændring er ét fortryd-trin. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Add-ons kan bygge i modellen.** Add-on API 1.1 lader en add-on lave en ændring i modellen som ét fortryd-trin (den følger med i Live TeamWork), læse modellen og læse rør- og kanalstrækninger, porte, udstyr og spoler.
- **Plant-add-on'en** (slået fra, indtil du slår den til i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Add-ons}}): rørspecifikationer kontrolleret mod strækningerne, isometriske tegninger af en strækning som SVG og DXF med stykliste, generisk procesudstyr med studse placeret i modellen, en router mellem to porte og en kontrol af fabrikkens layout. Et tegnehjælpemiddel, ikke en ingeniørgodkendelse. Teksterne er kun på engelsk.

## Ændret

- **Et første hus på en bærbar.** På en skærm i bærbar-størrelse starter BimCraft med kun planen. {{ui:Tegn}}-linjen er et smalt panel med planen tilpasset ved siden af. Planen og 3D-visningen vender tilbage i synsfeltet, når tegningen forlader dem. 3D-visningen indrammer hele huset i en smal rude, og døre og vinduer vælges før målelinjer.
- **Gem et billede.** **Gem PNG** i renderdialogen er nu {{ui:Gem}}, med {{ui:Gem som}} ved siden af til de andre formater. Se [Gem billedet](topic:render#save-the-picture).
- **Fanen Analyse** har en blok {{ui:Dimensioneringskontrol}}. Den laver lastkombinationerne efter ASCE 7 eller EN 1990 for dine tilfælde og kontrollerer hvert valset stålprofil i I-form (en W-, S-, IPE-, HEA- eller HEB-størrelse ud fra dens profilnavn og størrelse) efter AISC 360 eller EN 1993-1-1. Den viser, hvor stor en del af sin kapacitet profilet bruger. Et hjælpemiddel, indtil en ingeniør har gennemgået det. Svejste profiler og andre tværsnit står »ikke kontrolleret«. Se [Dimensioneringskontrol](topic:frame-analysis#design-checks).

## Rettet

- Gentag efter et trin, der lavede en ny familiestørrelse, fejlede (»ingen størrelse«). Hvert trin laver nu de samme IFC GlobalIds igen ved gentagelse, så gentag virker for familier og alle andre ændringer.
- Når to personer gemte den samme familie (i en Live TeamWork-session eller to vinduer), erstattede den anden gemning uden varsel den første persons ændring. Nu afvises den, og den viser, hvordan du ser deres ændring og får din ændring lagt ind igen.
- En model i US survey feet blev læst som 0.3048 m pr. fod i stedet for 0.3048006096 m, hvilket flyttede hver georefereret IFC i US-fod på kortet.
- Familieeditoren: lukning flytter ikke længere tastaturfokus til siden, dens Gem bliver synlig på en telefon, og dens felter får ikke længere en telefon til at zoome ind.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (US survey foot er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forlader enhedslisterne. Sæt en stjerne ved én, og nyt arbejde starter i den. En fil beholder altid sin egen enhed. I BimCraft følger listen {{ui:Enheder}} på værktøjslinjen afbryderne. Stjernen sætter visningsenhederne, indtil du vælger dem på værktøjslinjen (dit tidligere valg bevares). Tegneværktøjernes længdefelter tager enhver enheds mærke, fx `3.5 m` eller `10 US ft`. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler, der ryddes væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} passer mere på skærmen (berøringsskærme og telefoner beholder deres store knapper). Hvert sidepanel har en smal titellinje: træk den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør den for at glide væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialoger kan flyttes.** Træk en dialogboks i dens titellinje, væk fra tegningen. Den vender tilbage dér, du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialogboks](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti færdige forespørgsler til din egen assistent (ryd op i en tegning, plot et sæt, kontrollér tegninger, stil spørgsmål om en model, summér et mængdeudtræk, prøv en delvariant …), hver med de værktøjer, den kalder, og de tilladelser, den har brug for. Hver afspilles af vores tests. Appene indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er ny i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Den, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu hvert ord i appene som kladder, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk, med nogle få på spansk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol fejlede (ingen fil til dit system endnu, intet netværk, en ugyldig signatur), i stedet for blot »Færdig«. Den holder også op med at vise et Nyheder-kort, du har lukket, før der kommer en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken er flyttet til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Kontrollér SHA-256-værdien ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}}, og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åben}}. CadCraft Studio er endnu ikke i en app store, og der findes endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen boks læser dem endnu.
- Stisporing på grafikkortet, ekstrafunktionerne i renderdialogen og renderkøen kræver WebGPU (uden det bruger høj kvalitet WebGL-stisporeren). Live-visningen bruger WebGPU, hvor browseren har det, ellers WebGL 2. De er kun testet her på en softwaregrafik-erstatning, endnu ikke på rigtige grafikkort. Live-visningen har ingen spredning eller deling i BimCraft (ModelCraft's har dem).
- Rendering af en optaget rundtur som video er ikke lavet endnu i BimCraft.
- Dimensioneringskontrol: en I-profil, hvis IFC-profilnavn ikke er en W-, S-, IPE-, HEA- eller HEB-størrelse (eller hvis størrelse afviger fra den), behandles som svejst og kommer tilbage som »ikke kontrolleret«. Det samme gælder rør, vinkeljern, U-profiler, slanke dele og torsion. Ingen ingeniør har endnu gennemgået kontrollerne.
- Tegnede elementer kan ikke kopieres enkeltvis, drejes, spejles eller arrayes (et helt niveau kan kopieres). Der findes ingen delt væg, tekstværktøj eller gardinvæg. En væg, der møder en væg fra et lavere niveau på et højere niveau, skæres ikke ind i væggens 3D-legeme, og lister opfører en åbning på et højere niveau under niveauet for sin egen væg.
- Familier: et bibliotek af familier, der deles mellem projekter, er ikke lavet endnu. Familier og kopierede niveauer er endnu ikke åbnet i andre BIM-programmer.
- MEP: udstyr er generisk (uden producentdata). T-stykker og reduktioner på stålrørsspoler er generiske, ikke fra ASME B16.9-tabellen. Porte på biblioteksemner, der placeres fra fanen {{ui:Bibliotek}}, skrives ikke ind i IFC'en. Intet er gennemgået af en ingeniør.
- Plant-add-on'en kan endnu ikke tegne en rutet strækning ind i modellen, nummerere spoler på sine isometriske tegninger eller kontrollere layoutet af udstyr, der er placeret fra biblioteket.
- Anlæg fra CivilCraft's anlægsbibliotek kan endnu ikke placeres fra BimCraft's fane {{ui:Bibliotek}}.
- Energi: ingen timesimulering, ingen ISO 52016-1-metode og ingen klimafiler. Aktiver: ingen hostet digital tvilling, der gemmer aflæsninger eller sender advarsler, mens BimCraft er lukket.
- Scanningsregistrering er afprøvet på testscanninger, endnu ikke på et rigtigt scannersæt. E57-filer åbnes stadig med op til 6 millioner punkter og 512 MB.
- Projektpakker åbnes kun i BimCraft (de andre apps modtager et layout via **Åbn i …**). Pakker og to-programs-sættet er testet mod erstatninger, endnu ikke med Archicad eller Revit selv.

Alt andet findes i [Hvad der ikke er lavet endnu](topic:not-built-yet).
