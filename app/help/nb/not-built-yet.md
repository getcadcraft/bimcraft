---
title: Hva som ikke er bygget ennå
summary: Hva denne BimCraft-versjonen ikke gjør ennå, og hva du kan bruke i stedet i dag.
keywords: mangler, begrensninger, ikke støttet, veikart, forfatting, modellering, snitt, mål, kollisjon, bcf, sky, skrivebord, eksport
from: 87777dcc
---

BimCraft i dag er en leser, kontrollør og IFC-dataredigerer som har begynt å tegne bygninger: vegger, dører og vinduer, rom, gulv, himlinger og tak (se [Tegn vegger](topic:draw-walls), [Dører og vinduer](topic:doors-and-windows) og [Rom, gulv, himlinger og tak](topic:floors-and-roofs)). Dette er den ærlige listen over det den ikke gjør ennå, med hva du kan gjøre i stedet.

## Modellering og redigering

| Ikke ennå | I stedet, i dag |
|---|---|
| Tegning av bjelker; søyler av stålprofiler | Bruk modelleringsprogrammet ditt og åpne IFC-eksporten fra det her. Rektangulære og runde søyler plasseres her (se [Akser og søyler](topic:grids-and-columns)); rette, L-, U-, vinkel- og spiraltrapper og rekkverk tegnes her (se [Trapper og rekkverk](topic:stairs-and-railings)) |
| Et vindu i en takkvists front; takkvister på takplan tegnet for hånd; buede tak; en gjengitt takbelegging med tekstur | Takplan tegnet etter hjørnene, og en takvinkel for hver vegg: se [Tak: en takvinkel for hver vegg, gavler, pulttak og takplan](topic:roofs) |
| Endre vegger, dører eller vinduer som et annet program har laget | Modelleringsprogrammet ditt; tegneverktøyene endrer bare det de har tegnet |
| Veggprofiler med utstikk eller hull; veggåpninger som ikke er rektangler; legge til eller fjerne veggens profilpunkter i 3D-visningen | Profil, feste, skråstilling og åpninger virker i {{ui:Egenskaper}}, i fasader og snitt, på veggens flatevisning og med håndtak i 3D, for rette og buede vegger: se [Form en vegg: feste, profil, skråstilling og åpninger](topic:wall-shape) |
| På buede vegger: {{ui:Trim / forleng}} og {{ui:Hjørne}}, innramming, automatiske måltilsettinger i planen, feste langs buen (den fester seg til endene og midten av buen) | Tegn veggen rett for disse, eller bruk rette segmenter. Buede vegger står i [Tegn vegger](topic:draw-walls) |
| Dra et plassert bibliotekselement i 3D-visningen | Dra det i planen, eller skriv X, Y og rotasjon i {{ui:Egenskaper}}: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library) |
| Plassere planter fra plantebiblioteket i arbeidsområdet Landskap i CivilCraft | Plant dem i CivilCraft, eller plasser trær og busker fra bibliotekets omgivelseselementer: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library) |
| I Plant-tillegget (slått av til du slår det på): tegne en trase med rør inn i modellen, spolenumre på isometriene, en oppsettskontroll av utstyr plassert fra biblioteket | Tegn traseen med {{ui:Rør}} (se [Rør og kanaler](topic:pipes-and-ducts)); oppsettskontrollen leser tilleggets egen utstyrstabell |
| Dreie, speile eller lage matrise av enkelte tegnede vegger, dører og vinduer (vegger flyttes og kopieres med Flytt, Forskyv og Boksstrekk: se [Veggformer, deling, forskyvning, strekk og lås](topic:wall-tools)); en sammenføyningstype (stump, kantet) i hjørner med en buet vegg eller tre vegger eller flere (se [Veggformer, deling, forskyvning, strekk og lås](topic:wall-tools)); et tekstverktøy; gardinvegger | Kopier alt på et nivå med {{ui:Kopier dette nivået…}} (se [Tegn vegger](topic:draw-walls#levels)); ellers tegn dem på nytt |
| Lag i veggoppbygninger tegnet i planen og snittet; måltilsettinger i snitt og fasader; referansemål til dører, vinduer og andre komponenter; oppbygninger og membraner i lister og mengder; et materialbibliotek delt mellom prosjekter; lagprioritet i snitt, fasader og 3D og i knutepunkter med tre vegger eller flere (i planen ryddes hjørner, T-forbindelser og kryssinger mellom to vegger med lagprioritet: se [Veggformer, deling, forskyvning, strekk og lås](topic:wall-tools)); innpakkede eller variable lag; redigering av oppbygningen til en vegg et annet program har laget | Lagene ligger i veggens type og forhåndsvisning ({{ui:Veggoppbygninger…}}); vegger måles som én kappe: se [Veggoppbygninger og referansemål](topic:wall-assemblies) |
| Endre et elements form eller størrelse (annet enn vegger, dører og vinduer tegnet her, og elementer plassert fra en familie) | Modelleringsprogrammet ditt. Slett, klipp ut, kopier og lim inn virker her: se [Slett, klipp ut, kopier og lim inn bygningselementer](topic:edit-elements) |
| Slette etasjer, rom, bygninger eller tomten | Slett elementene i dem |
| Lime inn bygningselementer i en annen modell | Kopier og lim inn i samme modell; plasserte bibliotekselementer kan limes inn i en hvilken som helst modell |
| Legge til nye egenskaper eller egenskapssett | Fyll inn eksisterende verdier her, eller legg til parameteren i modelleringsprogrammet og eksporter på nytt |
| Redigere mengder, lister, opplistinger | Modelleringsprogrammet ditt |
| Lagre prosjektfiler fra andre programmer | BimCraft lagrer IFC (og sine egne familiefiler: se [Familier og størrelsene deres](topic:families)) |
| Familier: et bibliotek med familier plassert fra planen og delt mellom prosjekter (Bibliotek), et aktivt punkt dratt i 3D-visningen av et plassert element (de dras i familieredigerens forhåndsvisning og i planen), detaljnivåer valgt per visning (ett nivå for prosjektet; ark velger etter målestokk), en roterende skisse rundt akse på et loddrett plan inne i en annen familie og dreid en kvart omdreining, dør- og vindussymboler i planen med egne symboler (de tegner startfamiliens) | Lag familier med typede parametere, formler, en egen planymbol, aktive punkter, gjentak, detaljnivåer, familier inne i familier, størrelser fra en tabell og parametere per element: se [Rediger en familie](topic:family-editor) og [Familier og størrelsene deres](topic:families). Dupliser en familie for å starte fra en |
| Redigere andre programmers typer som familier; gjøre et bibliotekselement om til en familie | Andre programmers typer listes, gruppert etter en antagelse, og deres elementer velges. Bibliotekselementer plasseres slik de er |
| Produsenters fittings, ventiler og utstyr (kapasiteter, vekter, produsentenes tilkoblingsstørrelser); lengder på T-stykker og reduksjoner etter ASME B16.9 på stålspoler; trykktap gjennom fittings, strømning og balansering; sprinklere; kabelbaner; dimensjonering av stammer og lufteledninger etter sanitærenheter; dra hjørnene på en trase; kutte åpninger i vegger og dekker; løse endepunktet til en trase som er festet til en port (unntatt ved å slette utstyret); porter på bibliotekselementer plassert fra Bibliotek-panelet; vekter på fittings; skjøter, platetykkelser og koblinger for kanaler | Rør- og kanaltraseer med generiske standardfittings, systemer, planer, lister og mengdeuttaket tegnes her: se [Rør og kanaler](topic:pipes-and-ducts). Generisk utstyr med porter, tilkoblede traseer og tilkoblingskontrollen: [MEP-utstyr med porter](topic:mep-equipment) og [Koble rør og kanaler til utstyr](topic:mep-connections). Kollisjonssett, klaringer og liste over åpninger: [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure). Stålspoler og spolark, kanalenes kappeliste: [Stålrørspoler og spolark](topic:pipe-spools). Hent produsentenes produkter fra ditt MEP-program som IFC |
| Dimensjoneringskontroller av sveisede I-profiler, av I-profiler der IFC-profilen ikke er oppgitt som en valset W-, S-, IPE-, HEA- eller HEB-størrelse, og av rør, vinkeljern og U-profiler (de kommer tilbake som ikke kontrollert); knekking eller dynamisk respons (egenfrekvenser finnes i blokken Endelige elementer) (annen orden er bare P-Delta: elastisk, bøyning, ingen stivhetsreduksjon); vegger og dekker i analysen; laster laget av arealer (unntatt ett trykk på hvert betongdekke) | Fanen {{ui:Analyse}} gir krefter, reaksjoner og nedbøyninger for bjelker, søyler og avstivninger ved førsteordens analyse, og kontrollerer valsede I-profiler: et hjelpemiddel inntil en ingeniør har gjennomgått det. Se [Analyser bæresystemet](topic:frame-analysis#design-checks) |

## Visning av modeller

| Ikke ennå | I stedet, i dag |
|---|---|
| 3D fra prosjektfiler | Eksporter IFC og åpne den. Se [Få en prosjektfil inn i 3D via IFC](topic:rvt-to-ifc) |
| Innvendige fasader i det genererte tegningssettet (fra et rom sin {{ui:Egenskaper}} og på egne ark bygges de); egne måltilsettinger på fasader og snitt (nivåmerker, høyder, bredde og dør-/vindusmerker tegnes; merknader skrives i visningen: se [Rediger i fasader og snitt](topic:edit-in-elevations)); tegning av vegger i en fasade (de tegnes i snittplanet); lagmaler for team gjennom Studio | Tegningssettet laget fra modellen: se [Fasader, snitt og ark](topic:sheets). For enhver IFC-modell: ett {{ui:Snitt}}-plan, eller en snittboks; se [Kutt en IFC-modell med et snittplan](topic:section-plane) |
| Henvisningsvisninger, detaljvisninger, tegnevisninger og tegnforklaringer; tegnelinjer og skravur tegnet i en visning; beskjæring av en fasade eller et snitt; visningsmaler for fasader, snitt, takplaner og 3D-visninger; takplaner i det genererte tegningssettet; et helt sett egne ark i én PDF | Planer og takplaner har visningsområder, et beskjæringsområde, en målestokk og et underlag (planer har også maler), og dine egne ark tar planer, takplaner, fasader, snitt og lister, hver lagret som PDF: se [Visninger, visningsområder og egne ark](topic:views-and-sheets) |
| Flytte en plassert lampe opp i taket i etterkant; skrå eller trinnede himlinger; himlingsmønstre annet enn de fem rutenettene; en lampes eget symbol i takplanen | Plasser den med **Montering: I taket**; takplanen tegner et armatur ut fra sin egen form: se [Plasser utstyr og møbler fra biblioteket](topic:place-from-library) |
| Dele søkesett med andre, sett inne i IFC-filen | Settene blir i denne nettleseren; se [Finn elementer etter klasse, navn eller egenskap](topic:find) |
| Måle vinkler, eller langs en bane med flere punkter | Mål hver del med {{ui:Mål}}: se [Mål avstander, flateareal og plassering i 3D](topic:measure) |
| Teksturer i den levende 3D-visningen | Malte materialer viser sin farge i visningen og sin tekstur i gjengitte bilder: se [Gjengi et bilde av modellen](topic:render) |
| Klaringskollisjoner (myke) mellom to vilkårlige sett, kollisjonsgrupper, lagring av kollisjonsresultater | Kjør {{ui:Kollisjonskontroll}} og lag saker av de som betyr noe: se [Kontroller for kollisjoner](topic:clash-check). Rør og kanaler mot konstruksjonen har {{ui:Kontroller klaringer}}: se [Kontroller rør og kanaler mot konstruksjonen](topic:mep-against-structure) |
| Lagre flere modeller som ett sett, eller redigere to modeller samtidig | Rediger én modell om gangen; hver lagrer sin egen fil |
| Tildele saker, forfallsdatoer, etiketter, flere synspunkter per sak, redigere en sak | Ett synspunkt per sak; se [Saker og BCF-filer](topic:issues-bcf) |
| `.ifczip` og `.ifcxml` | Pakk ut, eller eksporter vanlig `.ifc` |
| Kartlag for en modell uten kartkonvertering, eller i en tegnings visninger | Eksporter modellen med sine koordinater: se [Et kart på bakken under modellen](topic:map-layers) |
| E57-skanninger over 6 millioner punkter eller 512 MB; skannerprodusentenes egne filer (RCP, RCS, FLS, LGS, TZF, ZFS); punktskyer i en tegnings 3D-visning; lagring av en skys plassering sammen med modellen | Eksporter skanningen som LAS eller LAZ og åpne den ved siden av en IFC-modell: se [Punktskyformater](topic:point-cloud-formats) og [Vis en punktsky ved siden av modellen](topic:point-clouds) |
| Registrere skanninger: finne målpunkter (kuler, sjakkbrett) i en skanning av seg selv, løse alle skanninger samlet (bundle adjustment), skala, registrering mot en modell | Velg tilsvarende punkter eller skriv inn koordinater for målpunkter, og finjuster én skanning om gangen med ICP: se [Registrer flere skanninger til én](topic:register-scans) |
| Åpne prosjektfiler `.pln`, `.pla`, `.tpl` og `.bpn` | Eksporter IFC og DWG fra dem, eller en prosjektpakke: se [Åpne .pln- og .pla-prosjektfiler](topic:pln-project-files) og [Åpne en prosjektpakke](topic:open-project-bundle) |
| Åpne listen {{ui:Elementer}} for å velge etter type | Klikk typens gruppe i {{ui:Modelltre}}: se [Finn frem med modelltreet](topic:model-tree) |
| Skrive en kommentar eller tittel på en sak i VR, talenotater, flytte et snittplan for hånd i VR, en snittboks i VR | Plasser saken i VR, og legg deretter til ordene i fanen Saker; sett et snittplan eller en boks i 3D-visningen før du går inn: se [Gjennomgå modellen med VR-hodesett](topic:vr-review) |
| Se folk ved pulten i VR (bare folk i VR vises), ta opp en VR-gjennomgang | Be dem bli med i VR, eller følg med i 3D-visningen |
| Dagslyssimulering (klimabasert dagslys, blending, soltimer), takvinduer i dagslysfaktoren, kontroller mot BS EN 17037 eller grønne byggeordninger; energimetoden ISO 52016-1, timevis energisimulering, termisk masse og kuldebroer, klimafiler | Hjelpemidler for prosjektering: gjennomsnittlig dagslysfaktor, hvert vindus vertikale himmelkomponent, solen gjennom vinduene på en dato og dagslysfaktoren på et rutenett ([Anslå dagslyset i hvert rom](topic:daylight-factor)); varmetap, et graddagsår og en kjøletopp per rom ([Anslå varme- og kjølelaster](topic:heating-and-cooling-loads)). Bruk et simuleringsprogram for samsvar |
| En bygningstvilling på server: målinger lagret og varsler sendt på e-post mens BimCraft er lukket, e-post om forfalt vedlikehold; MQTT 5; lese COBie-oppgavene tilbake | Målinger fra en CSV-fil eller direkte fra din egen MQTT-mekler eller adresse mens modellen er åpen, grenser som markerer eiendeler, dokumenter, COBie ut og inn: se [Hold eiendelsdata og et vedlikeholdsregister i modellen](topic:assets-and-maintenance) |
| Et tillegg eller direkte kobling til Enscape, Twinmotion eller andre visualiseringsprogrammer; FBX- eller Datasmith-filer; ett objekt per element, lagrede visninger og gjennomganger i .glb | Lagre en .glb for gjengivelsesprogrammer som leser glTF, en USD-fil (ett objekt per element, med sine IFC-data: se [Eksporter modellen som USD](topic:usd)), eller IFC for dem som kjører inne i et annet designprogram: se [Send modellen til et gjengivelsesprogram](topic:model-for-rendering) og [Åpne scenen i et annet program](topic:render-open-in) |
| Et annet program som tegner renderbildet uten et render-motortillegg (CadCraft kjører aldri et program under GNU GPL-lisensen); panorama- eller stereokameraer og et himmelbilde gjennom et annet program; Unreal Engine-tillegget (filene skrives, tillegget som åpner dem er ikke utgitt) | Våre egne motorer Fast og Path tracer; et tillegs motor ([tegn bildet med et annet program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappefil fra motorlisten, som du kan ta med til et hvilket som helst program |
| I den levende visningen: spre ut planter og stein, dele panoramaer, en omvisning, en frakoblet viser eller en video | Den levende visningen i ModelCraft har dem; her gjelder gjengitte bilder og 360°-panoramaer: se [Den levende visningen](topic:live-view) og [Gjengi et bilde av modellen](topic:render) |

## Tegninger

| Ikke ennå | I stedet, i dag |
|---|---|
| Redigere, måle eller lagre DWG og DXF | Tegneappen CadCraft ({{ui:Rediger i CadCraft}} i 2D-visningen) |
| Skrive ut eller eksportere PDF | Skriv ut fra programmet som laget tegningen; kontroller den først med {{ui:Utskriftsvisning}} |
| Plottstiler og pennetabeller | {{ui:Utskriftsvisning}} viser ren svart med linjevekter |
| DWG-filer eldre enn R13, og binær DXF (BimCraft sier fra når du åpner en) | Lagre tegningen på nytt som nyere DWG, eller som ASCII-DXF |
| Tegninger koblet inne i koblede tegninger | Åpne dem direkte |
| TIFF-bilder | Lagre en PNG- eller JPEG-kopi med samme navn og legg den til |
| DGN-tegninger | Listes bare i mappeoversikter |
| Objekter oppført under **Ikke tegnet ennå** | Vis tegningen i programmet som laget den |
| ACIS-volumlegemer, legemer, regioner og flater, og underinndelte nett i 3D | Eksporter IFC eller 3D-flater fra programmet som laget tegningen |
| Bilder, flerhjelpelinjer og ark i en tegnings 3D-visning | Se dem på fanen {{ui:Modell}} og på arkene |
| Plukke objekter i en tegnings 2D-visning | Bytt til {{ui:3D}} og klikk objektet der: se [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d) |
| Utstyrslister fra tegninger uten `KCL-ITEM`-merker | Ikke tilgjengelig |
| Utstyrsliste som XLSX eller PDF | {{ui:Last ned CSV}} og åpne den i et regneark |

## Filer og plattformer

| Ikke ennå | I stedet, i dag |
|---|---|
| Skylagring | Lagre kopier på datamaskinen eller kontorserveren. Skylagring er ikke tilgjengelig ennå |
| Husker mapper i Firefox og Safari | Velg mappen på nytt, eller dra den inn |
| Angre etter lagring | Åpne originalfilen på nytt for å starte på nytt |
| Fylle inn den manglende delen av en avkuttet prosjektfil | Kopier originalen på nytt; i en mappe leser BimCraft den nyeste komplette sikkerhetskopien |
| Åpne filene du hadde åpne på nytt | Ulagrede endringer tilbys tilbake som «Gjenopprett arbeidet ditt?» når du kommer tilbake; åpne filene på nytt fra listen over nylige |
