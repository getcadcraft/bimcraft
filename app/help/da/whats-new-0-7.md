---
title: Nyt i 0.7 (tidligere)
summary: BimCraft tilføjer vægge over flere niveauer og Kopiér dette niveau, vægge fra PDF'er og skanninger, egne vægopbygninger, rigere familier, MEP-udstyr med porte, kollisionssæt, åbninger og rørspoler, dokumenter til aktiver, COBie og sensoraflæsninger, himmel, sol, dagslys på et gitter og varme- og køleberegninger, skanningsregistrering, en live-visning og stisporing på grafikkortet, STEP og USD, bibliotekvarianter og mere til AI-assistenter.
keywords: nyt i 0.7, tidligere udgivelse, udgivelsesnoter, ændringslog, ændringer, 0.7, version, nye funktioner, vægge over niveauer, kopiér dette niveau, pdf, skanning, optegn, vægge fra planer, vægopbygninger, lag, kerne, membran, referencemål, materialebibliotek, visningsenheder, visningsstil, skelet, bjælker, familier, parametre, plansymbol, hotspots, gentag, detaljeniveau, indlejrede familier, csv-størrelser, pr. element, udstyr, porte, forbindelser, frihøjder, åbninger, spoler, spoleark, svejsning på stedet, kanalskæreliste, dokumenter, cobie, sensorer, mqtt, live-feed, lodret himmelkomponent, solvarme, dagslysgitter, varme, køling, laster, u-værdi, registrér scanninger, icp, e57, live-visning, stisporing, webgpu, denoise, fysisk himmel, lysblanding, render-kø, din maskine, step, usd, projektpakke, udvikl en masse, varianter, assistenter, add-on-api, anlæg, el, dimensioneringskontrol
from: a638080d
---

Dette er, hvad der ændrede sig i BimCraft 0.7 i forhold til 0.6. Listen er grupperet efter område, med det vigtigste først.

## Nyt

### Tegn en bygning

- **Vægge over flere niveauer.** Væg-værktøjets højdeliste tilbyder **Op til** ethvert niveau længere oppe, ligesom Egenskaber gør for en valgt væg. Planerne for niveauerne imellem viser væggen lysere, rum der lukker sig mod den, og døre og vinduer kan placeres i den fra disse planer. **Løber igennem** i Egenskaber navngiver de niveauer, den passerer. Se [Ændr en væg, dør eller et vindue](topic:change-a-wall-or-door#change-a-wall).
- **Kopiér dette niveau.** {{ui:Kopiér dette niveau…}} i panelet {{ui:Niveauer}} tegner et niveaus vægge med deres døre og vinduer, og dets gulve og lofter igen, på et andet niveau eller på et nyt ovenpå, i ét fortrydelsestrin. Rum dukker op af sig selv. Se [Tegn vægge](topic:draw-walls#levels).
- **Vægge fra en PDF eller en skanning.** {{ui:Build}} › {{ui:Fra en tegning…}} tager nu en PDF (linjetegning, eller en skanning inde i den) eller en skannet plan (PNG, JPEG, TIFF, flere sider). Hver side bliver til vægge, døre, vinduer og rum på et niveau, med siden liggende under sin plan. Optegningen bruger ingen netværk og ingen trænet model, og resultatet er, hvad linjerne gav: kontrollér hvert niveau mod sin side. Se [Vægge fra et sæt planer](topic:walls-from-plans).
- **Egne vægopbygninger.** {{ui:Vægopbygninger…}} bygger en vægtype lag for lag, med en kerne, luftspalter og membraner, og med en målsat forhåndsvisning. {{ui:Materialebibliotek…}} gemmer projektets materialer i IFC'en. {{ui:Notér}} › {{ui:Referencemål}} måler til flader og kernelinjer og følger væggene, når de ændres. Fra en bidragyder i fællesskabet, Doc (drsurfbum). Se [Vægopbygninger og referencemål](topic:wall-assemblies).
- **Visningsenheder og visningskontrol.** {{ui:Enheder}} på værktøjslinjen viser længder i fod og tommer, tommer, decimalfod, millimeter, centimeter eller meter, i målsætninger, lister, koordinater, målinger og snit. {{ui:Plan}}, {{ui:Del}} og {{ui:3D}} står på værktøjslinjen, og delingen kan trækkes (eller flyttes fra tastaturet). {{ui:Skygget}}, {{ui:Kanter}} og {{ui:Trådmodel}} står ved siden af view cube'en, og tagets hældning, udhæng og underside ændrer det valgte tag med det samme. Fra en bidragyder i fællesskabet, Joel (yisraelk). Se [Tegn vægge](topic:draw-walls#levels).
- **Gulvbjælker efter spænd.** {{ui:Skelet}} kan lægge engineerede bjælker ud (foreløbige) og også savet konstruktionstræ. Det vælger den mindste listede serie og højde, der når spændet, 16" eller 24" center-til-center, i begge retninger. De kommer i IFC'en og kapsellisten. Et forslag fra en producents offentliggjorte tabel, ikke en konstruktionsberegning. Også fra Joel. Se [Skelet til vægge, gulve og tage](topic:framing).
- **Flere el-enheder.** {{ui:El}} tilføjer data-, telefon- og audio-video-udtag, en vælgerafbryder, en timer, en termostat, røg- og varmedetektorer, en udløserknap og en sirene, en ventilator, en energimåler og et underfordelingstavle, hver med sin egen IFC-klasse. Se [El-planen](topic:electrical-plan).

### Familier

- **Familier gør mere.** Parametre kan være hele tal, tekst, et materiale, en pen eller en udfyldning. En familie kan tegne sit eget plansymbol, gentage et massivt legeme, markere dele til grovere detaljeniveauer, rumme andre familier (et ben i et bord) og have hotspots, du trækker i, også på et placeret element i planen. Størrelser kommer fra en CSV-tabel, og parametre markeret **Pr. element** lader to døre af samme størrelse være forskellige. Se [Redigér en familie](topic:family-editor#plan-symbol) og [Familier og deres størrelser](topic:families#sizes-from-a-table).

### Rør, kanaler og udstyr

- **Udstyr med porte.** {{ui:Build}} › {{ui:Udstyr}} placerer en generisk luftbehandlingsenhed, en rørventilator, en pumpe, en kedel, en vandvarmer, en terminalenhed, en diffusor, et gitter eller en tank, dimensioneret efter de værdier, du skriver, med dens rør- og kanalforbindelser som porte. Hver gemmes som sin IFC-klasse med IFC-porte. Se [MEP-udstyr med porte](topic:mep-equipment).
- **Forbundne strækninger.** Et rør eller en kanal startet fra en port får dens størrelse og system og sidder fast i den: flyttes pumpen, følger dens rør med. {{ui:Kontrollér forbindelser}} lister åbne porte, løse ender, uoverensstemmelser i størrelse og system samt strækninger, der intet forsyner. Se [Forbind rør og kanaler til udstyr](topic:mep-connections).
- **Rør og kanaler mod konstruktionen.** {{ui:Kollisionskontrol}} har færdige sæt, og {{ui:Rør og kanaler × konstruktion}} gøres med ét klik. {{ui:Kontrollér frihøjder}} bruger hver strækning isolering plus et mellemrum, du skriver. {{ui:Nødvendige åbninger}} lister, hvor strækninger går gennem vægge og dæk, som CSV og BCF-emner. Intet skæres. Se [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure).
- **Stålrørsspoler.** En stålstrækning skæres i nummererede spoler ved en længste længde og ved {{ui:Svejsning på stedet}}, du placerer. {{ui:Spoleark (PDF)}} giver en side pr. spole med dens isometriske visning, skærelængder, fittings, svejsninger og stykliste, og {{ui:Kanalskæreliste}} lister lige kanalstykker. Se [Stålrørsspoler og spoleark](topic:pipe-spools).

Dette er tegne- og koordineringshjælpemidler, dimensioneret af en ingeniør: ingen flows, tryk eller afbalancering.

### Drift af bygningen

- **Dokumenter pr. aktiv.** Fanen {{ui:Aktiver}} knytter manualer, garantier, billeder og tegninger til et aktiv via et filnavn ved siden af IFC'en eller en webadresse. Kun linket gemmes i IFC'en. Se [Dokumenter](topic:assets-and-maintenance#documents).
- **COBie-regneark.** {{ui:Gem som COBie (.xlsx)}} skriver COBie 2.4-overdragelsesarbejdsbogen, og en COBie-arbejdsbog, der læses tilbage, lister hver ændring, før der trykkes én gang på {{ui:Anvend}}. Den er endnu ikke gennemgået af en COBie-validator. Se [COBie-regneark](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensoraflæsninger og live-feeds.** Åbn en CSV med aflæsninger, eller {{ui:Opret forbindelse}} direkte fra browseren til din egen MQTT-broker eller en adresse, dit bygningssystem svarer på. Hvert aktiv viser sin seneste aflæsning og en graf, farves på modellen og markeres, når det er uden for de grænser, der er gemt i IFC'en. Aflæsningerne bliver i fanen; adgangskoder gemmes aldrig. Se [Sensoraflæsninger](topic:assets-and-maintenance#sensor-readings) og [Live-aflæsninger](topic:assets-and-maintenance#live-readings).

### Dagslys og energi

- **Himmel og sol ved hvert vindue.** Fanen {{ui:Dagslys}} giver hvert vindue dets lodrette himmelkomponent og obstruktionsvinkel, følger solen gennem en dato med {{ui:Sol gennem vinduerne på en dato}}, og beregner {{ui:Dagslysfaktor på et gitter}} hen over hvert rum, tegnet på dets plan. Se [Lodret himmelkomponent for hvert vindue](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Varme- og køleeffekt.** {{ui:Varme- og køleeffekt}} beregner hvert rums varmetab, dets opvarmning over et år ud fra graddage og dets kølespids, ud fra det, der afgrænser det i modellen, og hvert elements U-værdi. En U-værdi, der skrives der, gemmes i IFC'en. Se [Estimér varme- og køleeffekt](topic:heating-and-cooling-loads).

Begge er designhjælpemidler efter offentliggjorte metoder, ikke overensstemmelsesberegninger, og hvert panel siger det.

### Skanninger

- **Registrér flere skanninger.** {{ui:Registrér scanninger…}} (på startpanelet eller i {{ui:Vis}}) placerer skanninger i én ramme ud fra valgte punktpar eller skrevne mål, forfiner dem med ICP, først punkt til punkt og derefter punkt til plan, gemmer registreringen som en lille projektfil og skriver den registrerede punktsky som én LAS- eller E57-fil. Se [Registrér flere skanninger til én](topic:register-scans).

### Billeder og live-visningen

- **Live-visningen.** {{ui:Live-visning}} på værktøjslinjen viser modellen i det realtidsagtige udseende ved siden af 3D-visningen. Den følger den og hver ændring, med Gå, tidspunkt på dagen og måned. {{ui:Live-visning i et nyt vindue}} sætter den på en anden skærm. Se [Live-visningen](topic:live-view).
- **Stisporing på grafikkortet.** Med WebGPU kører {{ui:Render}} › {{ui:Høj kvalitet (stisporet)}} CadCraft's egen stisporer på grafikkortet, kan stoppe og {{ui:Genoptag}}, og støjreduceres til sidst. Uden WebGPU bruger den WebGL-stisporeren som før. Se [Høj kvalitet](topic:render#high-quality).
- **Mere i Render-dialogen** (på grafikkortet, så den kræver WebGPU): en fysisk himmel og himmelbilleder, IES-lysprofiler, et kamera med f-tal, dybdeskarphed, to-punktsperspektiv, hvidbalance og 360°-panoramaer, en gradering af det færdige billede, lysblanding og render-elementer efter renderingen, tåge, røg og kaustik, gemning som 16-bit PNG, EXR eller en render-fil og en render-kø. Se [Himmel og lysprofiler på grafikkortet](topic:render#skies-and-light-profiles-on-the-graphics-card) og [Render-køen](topic:render#the-render-queue).
- **Din maskine.** {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Din maskine}} viser grafikken, processorkernerne og hukommelsen, denne browser lader appen bruge, og det niveau rendering starter på. Se [Hvad din maskine renderer med](topic:your-machine).

### Filer og andre apps

- **STEP-filer åbnes.** En `.step`- eller `.stp`-del, et stykke udstyr eller en leverandørs model (AP203, AP214, AP242) åbnes som en lille IFC-model, hvor hvert legeme er et element, du kan inspicere, snitte, måle og gemme som IFC. Farver og delenavne i samlingen læses endnu ikke. Se [Filer BimCraft åbner og gemmer](topic:files#what-it-opens).
- **USD-eksport.** {{ui:USD}} på værktøjslinjen skriver de åbne modeller som `.usda`, `.usdc` eller `.usdz`, opdelt i område, bygning, etage og fagområde, med hvert elements IFC-klasse, GlobalId og egenskaber. Se [Eksportér modellen som USD](topic:usd).
- **En masse fra CivilCraft.** En bygningsmasse sendt fra CivilCraft's områdevisning viser sine studietal i Egenskaber, og {{ui:Udvikl denne masse}} bygger vægge på hvert niveau og et gulv ud af den i ét fortrydelsestrin. Se [Udvikl en bygningsmasse fra en områdeundersøgelse](topic:develop-a-mass).
- **Biblioteksemner med varianter.** Et emne, der kommer i flere varianter, har et valg {{ui:Variant}} på fanen {{ui:Bibliotek}}. Det placerede element beholder sin variant i IFC'en, {{ui:Byt emne…}} lister de andre varianter, og kopier og opdateringer beholder den. Se [Placér og byt et bibliotekemne, der har varianter](topic:library-variants).
- **Projektpakker i en mappe.** {{ui:Åbn en mappe}} lister `.ccbundle.zip`-filer under {{ui:Projektpakker}}, og hvert layout i en pakke har **Åbn i …**: PDF'en til MarkupCraft, DWG'en til CadCraft, i en ny fane. Se [Åbn et layout](topic:open-project-bundle#open-a-layout).

### Assistenter og add-ons

- **Mere til AI-assistenter.** En assistent kan nu omdøbe elementer og sætte egenskabsværdier, flytte og slette elementer, ændre vægge, døre og vinduer, eksportere USD og rendere et billede eller køre render-køen. Hver ændring er ét fortrydelsestrin. Se [Lad en AI-assistent arbejde med din model](topic:assistants).
- **Add-ons kan bygge i modellen.** Add-on-API 1.1 lader et add-on lave en ændring i modellen som ét fortrydelsestrin (den følger med i Live TeamWork), læse modellen og læse rør- og kanalstrækninger, porte, udstyr og spoler.
- **Plant-add-on'en** (slået fra, indtil du tænder den i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Add-ons}}): rørspecifikationer kontrolleret mod strækningerne, isometriske tegninger af en strækning som SVG og DXF med en stykliste, generisk procesudstyr med dyser placeret i modellen, en router mellem to porte og en kontrol af fabrikslayoutet. Et tegnehjælpemiddel, ikke en teknisk godkendelse. Dens tekst er kun på engelsk.

## Ændret

- **Et første hus på en bærbar.** På en skærm i bærbarstørrelse starter BimCraft med planen alene. Tegnelinjen er et smalt panel med planen tilpasset ved siden af. Plan og 3D-visning kommer tilbage i syne, når tegningen forlader dem. 3D-visningen rammer hele huset i en smal rude, og døre og vinduer vælges før målelinjer.
- **Gem et billede.** **Gem PNG** i Render-dialogen er nu {{ui:Gem}}, med {{ui:Gem som}} ved siden af til de andre formater. Se [Gem billedet](topic:render#save-the-picture).
- **Analyse-fanen** har en blok {{ui:Dimensioneringskontrol}}. Den laver lastkombinationerne for ASCE 7 eller EN 1990 for dine tilfælde og kontrollerer hver valset stål-I-profil (en W-, S-, IPE-, HEA- eller HEB-størrelse ud fra dens profilnavn og størrelse) efter AISC 360 eller EN 1993-1-1 og viser, hvor stor en del af kapaciteten den bruger. Et hjælpemiddel, indtil en ingeniør har gennemgået det. Svejste profiler og andre tværsnit siger "ikke kontrolleret". Se [Dimensioneringskontrol](topic:frame-analysis#design-checks).

## Rettet

- Redo efter et trin, der lavede en ny familiestørrelse, fejlede ("ingen størrelse"). Hvert trin laver nu de samme IFC-GlobalId'er igen ved redo, så redo virker for familier og alle andre ændringer.
- Når to personer gemte den samme familie (i en Live TeamWork-session eller to vinduer), erstattede den anden gemning stille den første persons ændring. Nu afvises den, og den siger, hvordan man ser deres ændring og laver sin egen igen.
- En model i US survey feet blev læst som 0,3048 m pr. fod i stedet for 0,3048006096 m, hvilket flyttede hver georefereret IFC i US feet på kortet.
- Familieeditoren: lukning af den flytter ikke længere tastaturfokus til siden, dens Gem bliver synlig på en telefon, og dens felter får ikke længere en telefon til at zoome ind.

## I alle apps

- **Enheder.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Enheder}} har én liste hver for længde, areal, volumen, vinkel og hældning, med de præcise størrelser, enhedernes definitioner giver (US survey foot er sin egen enhed). Slå de enheder fra, du aldrig bruger, og de forsvinder fra enhedslisterne. Stjerner du én, starter nyt arbejde i den. En fil beholder altid sin egen enhed. I BimCraft følger listen {{ui:Enheder}} på værktøjslinjen kontakterne, stjernen sætter visningsenhederne, indtil du vælger dem på værktøjslinjen (dit tidligere valg beholdes), og længdefelterne i tegneværktøjerne tager enhver enheds mærke, fx `3.5 m` eller `10 US ft`. Se [Enheder, skrevne værdier og enhedslisterne](common:unit-lists).
- **En tættere layout og paneler, der ryger væk.** {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Layouttæthed}} › {{ui:Kompakt}} får mere på skærmen (touchskærme og telefoner beholder deres store knapper). Hvert sidepanel har en slank titellinje: træk den for at fastgøre eller frigøre panelet, slip den på et andet panels linje for at dele én ramme som faner, fastgør den for at lade den glide væk til kanten, eller skjul den og hent den tilbage fra kanten. Se [Arrangér panelerne](common:arrange-panels#make-the-layout-denser).
- **Dialoger kan flyttes.** Træk en dialog i titellinjen væk fra tegningen. Den kommer tilbage, hvor du slap den. Dobbeltklik på titellinjen for at centrere den igen. Se [Flyt en dialog](common:arrange-panels#move-a-dialog).
- **Opskrifter til AI-assistenter.** Ti gennemarbejdede anmodninger til din egen assistent (ryd en tegning op, plot et sæt, kontrollér tegninger, stil spørgsmål til en model, summér en mængdeudtrækning, prøv en delvariant …), hver med de værktøjer, den kalder, og de tilladelser, den kræver, og hver gennemspillet af vores tests. App'erne indeholder ingen AI. Se [Opskrifter til AI-assistenter](common:assistants-recipes).
- **Sprog.** **Português (Portugal)** er nyt i {{ui:Indstillinger}} › {{ui:Generelt}} › {{ui:Sprog}}. Det, **Português (Brasil)**, **Español (México)** og **Bahasa Indonesia** har nu alle ordene i app'erne, som kladder, der endnu ikke er gennemgået af en modersmålstaler. Hjælpeemnerne er på engelsk, med få på spansk.
- **CadCraft Studio** siger, hvorfor en opdateringskontrol mislykkedes (ingen fil til dit system endnu, intet netværk, en ugyldig signatur) i stedet for bare "Færdig", og holder op med at vise et Nyt-kort, du har lukket, indtil der er en nyere udgivelse.

## Ikke i denne version endnu

- **0.7 er ikke kodesigneret.** Signering og Microsoft Store-pakken flyttede til 0.8, fordi certifikatvalideringen endnu ikke er kommet igennem. Tjek SHA-256 ved siden af hver fil på getcadcraft.com/download. På Windows, hvis SmartScreen stopper installationsprogrammet, vælg {{ui:Flere oplysninger}} og derefter {{ui:Kør alligevel}}. På en Mac skal du første gang højreklikke på CadCraft Studio og vælge {{ui:Åbn}}. CadCraft Studio er endnu ikke i en app-butik, og der er endnu ingen iPad- eller iPhone-version.
- Vinkel- og hældningslisterne i {{ui:Enheder}} gemmes, men ingen felt læser dem endnu.
- Stisporing på grafikkortet, ekstrafunktionerne i Render-dialogen og render-køen kræver WebGPU (uden det bruger høj kvalitet WebGL-stisporeren). Live-visningen bruger WebGPU, hvor browseren har det, ellers WebGL 2. De er kun testet her på en softwaregrafikerstatning, ikke endnu på rigtige grafikkort. Live-visningen har ingen spredning eller deling i BimCraft (ModelCraft's har).
- Rendering af en optaget gennemgang som video er ikke indbygget i BimCraft.
- Dimensioneringskontrol: en I-profil, hvis IFC-profilnavn ikke er en W-, S-, IPE-, HEA- eller HEB-størrelse (eller hvis størrelse afviger fra den), tages som svejst og kommer tilbage som "ikke kontrolleret". Det samme gælder rør, vinkeljern, U-profiler, slanke dele og torsion. Ingen ingeniør har gennemgået kontrollerne endnu.
- Tegnede elementer kan ikke kopieres ét for ét, drejes, spejles eller arrayes (et helt niveau kan kopieres), og der findes ingen delt væg, tekstværktøj eller facadevæg. En væg, der møder en væg fra et lavere niveau på et højere niveau, skæres ikke til den væggens 3D-legeme, og skemaer lister en åbning på et højere niveau under dens egen væggs niveau.
- Familier: et bibliotek af familier, der deles mellem projekter, er ikke bygget. Familier og kopierede niveauer er endnu ikke åbnet i andre BIM-programmer.
- MEP: udstyr er generisk (ingen producentdata). T-stykker og reducering på stålspoler er generiske, ikke fra ASME B16.9-tabellen. Porte på bibliotekemner placeret fra fanen {{ui:Bibliotek}} skrives ikke ind i IFC'en. Intet er gennemgået af en ingeniør.
- Plant-add-on'en kan endnu ikke tegne en routet strækning ind i modellen, nummerere spoler på sine isometriske tegninger eller kontrollere layoutet af udstyr placeret fra biblioteket.
- Anlæg fra CivilCraft's anlægsbibliotek kan endnu ikke placeres fra BimCraft's fane {{ui:Bibliotek}}.
- Energi: ingen timesimulering, ingen ISO 52016-1-metode og ingen klimafiler. Aktiver: ingen hostet tvilling, der beholder aflæsninger eller sender alarmer, mens BimCraft er lukket.
- Skanningsregistrering er prøvet på testskanninger, endnu ikke på et rigtigt scannersæt. E57-filer åbnes stadig op til 6 millioner punkter og 512 MB.
- Projektpakker åbnes kun i BimCraft (de andre apps tager et layout via **Åbn i …**), og pakker og to-programs-kittet er testet mod erstatninger, endnu ikke med Archicad eller Revit selv.

Alt andet står i [Hvad der ikke er bygget endnu](topic:not-built-yet).
