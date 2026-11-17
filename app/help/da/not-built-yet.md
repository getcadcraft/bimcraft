---
title: Hvad der ikke er lavet endnu
summary: Hvad denne BimCraft-version ikke gør endnu, og hvad du i dag kan bruge i stedet.
keywords: manglende, begrænsninger, ikke understøttet, køreplan, oprettelse, modellering, snit, mål, kollision, bcf, sky, desktop, eksport
from: 87777dcc
---

BimCraft er i dag en læser, kontrolværktøj og IFC-dataeditor, der er begyndt at tegne bygninger: vægge, døre og vinduer, rum, gulve, lofter og tage (se [Tegn vægge](topic:draw-walls), [Døre og vinduer](topic:doors-and-windows) og [Rum, gulve, lofter og tage](topic:floors-and-roofs)). Dette er den ærlige liste over det, den ikke gør endnu, og hvad du skal gøre i stedet.

## Modellering og oprettelse

| Ikke endnu | I stedet, i dag |
|---|---|
| Tegning af bjælker; søjler af stålprofiler | Brug dit oprettelsesprogram, og åbn dets IFC-eksport her. Rektangulære og runde søjler placeres her (se [Gitter og søjler](topic:grids-and-columns)); lige, L-, U-, vindeltrin- og spiraltrapper samt gelændere tegnes her (se [Trapper og gelændere](topic:stairs-and-railings)) |
| Et vindue i en kviste-front; kviste på tagplaner tegnet i hånden; buede tage; en renderet tagbeklædning med tekstur | Tagplaner tegnet efter deres hjørner, og et fald for hver væg: se [Tage: et fald for hver væg, gavle, skurtage og tagplaner](topic:roofs) |
| Ændring af vægge, døre eller vinduer, som et andet program har lavet | Dit oprettelsesprogram; tegneværktøjerne ændrer kun det, de selv har tegnet |
| Vægprofiler med udhæng eller huller; vægåbninger, der ikke er rektangler; tilføjelse eller fjernelse af en vægs profilpunkter i 3D-visningen | Profil, fastgørelse, skråning og åbninger virker i Egenskaber, i facader og snit, på vægens facadevisning og med greb i 3D, for lige og buede vægge: se [Form en væg: fastgørelse, profil, skråning og åbninger](topic:wall-shape) |
| På buede vægge: {{ui:Beskær / forlæng}} og {{ui:Hjørne}}, rammeværk, automatiske mål i planen, fangst langs buen (den fanger i dens ender og midten af buen) | Tegn væggen lige til det, eller brug lige segmenter. Buede vægge står i [Tegn vægge](topic:draw-walls) |
| Træk i et placeret biblioteksemne i 3D-visningen | Træk det i planen, eller skriv X, Y og Rotation i {{ui:Egenskaber}}: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library) |
| Placering af planter fra CivilCraft's plantebibliotek i Landscape-arbejdsområdet | Plant dem i CivilCraft, eller placér træer og buske fra bibliotekets omgivelser: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library) |
| I add-on'en Plant (slået fra, indtil du slår den til): tegning af en rørføring ind i modellen, rørnumre (spool-numre) på dens isometrier, en layoutkontrol af udstyr placeret fra biblioteket | Tegn føringen med {{ui:Rør}} (se [Rør og kanaler](topic:pipes-and-ducts)); layoutkontrollen læser add-on'ens egen udstyrsliste |
| Drejning, spejling eller array af enkelte tegnede vægge, døre og vinduer (vægge flyttes og kopieres med Flyt, Forskyd og boksstrækning: se [Vægformer, deling, forskydning, strækning og låsning](topic:wall-tools)); en samlingsstil (stød, lige afslutning) i hjørner med en buet væg eller tre vægge eller flere (se [Vægformer, deling, forskydning, strækning og låsning](topic:wall-tools)); et tekstværktøj; gardinvægge | Kopiér alt på en etage med {{ui:Kopiér dette niveau…}} (se [Tegn vægge](topic:draw-walls#levels)); ellers tegnes de igen |
| Vægopbygningslag tegnet i planen og snittet; mål i snit og facader; referencemål til døre, vinduer og andre komponenter; opbygninger og membraner i lister og mængder; et materialebibliotek delt mellem projekter; lagprioritet i snit, facader og 3D og i knudepunkter med tre vægge eller flere (i planen rettes hjørner, T-samlinger og krydsninger af to vægge med lagprioritet: se [Vægformer, deling, forskydning, strækning og låsning](topic:wall-tools)); indpakkede eller variable lag; redigering af opbygningen af en væg, som et andet program har lavet | Lagene ligger i vægtypen og dens forhåndsvisning ({{ui:Vægopbygninger…}}); vægge måles som én indhylling: se [Vægopbygninger og referencemål](topic:wall-assemblies) |
| Ændring af et elements form eller størrelse (andet end vægge, døre og vinduer tegnet her, og elementer placeret fra en familie) | Dit oprettelsesprogram. Slet, klip, kopiér og sæt ind virker her: se [Slet, klip, kopiér og sæt ind bygningselementer](topic:edit-elements) |
| Sletning af etager, zoner, bygninger eller grunden | Slet elementerne i dem |
| Indsætning af bygningselementer i en anden model | Kopiér og sæt ind inden for én model; placerede biblioteksemner kan indsættes i en hvilken som helst model |
| Tilføjelse af nye egenskaber eller egenskabssæt | Udfyld eksisterende værdier her, eller tilføj parameteren i dit oprettelsesprogram og eksportér igen |
| Redigering af mængder, lister og opregninger | Dit oprettelsesprogram |
| Gemning af projektfiler fra andre programmer | BimCraft gemmer IFC (og sine egne familiefiler: se [Familier og deres størrelser](topic:families)) |
| Familier: et bibliotek af familier placeret fra planen og delt mellem projekter (Bibliotek), et hotspot trukket i 3D-visningen af et placeret element (de trækkes i familieeditorens forhåndsvisning og i planen), detaljeniveauer valgt pr. visning (ét niveau for projektet; ark vælger efter skala), en omdrejning på et lodret plan inde i en anden familie, drejet en kvart omgang, egne plansymboler for døre og vinduer (de tegner deres startfamilies) | Familier med typede parametre, formler, eget plansymbol, hotspots, gentagelser, detaljeniveauer, familier i familier, størrelser fra en tabel og parametre pr. element laves her: se [Redigér en familie](topic:family-editor) og [Familier og deres størrelser](topic:families). Duplikér en familie for at starte fra en |
| Redigering af andre programmers typer som familier; omdannelse af et biblioteksemne til en familie | Andre programmers typer vises, grupperes efter et gæt, og deres elementer kan vælges. Biblioteksemner placeres, som de er |
| Producenters beslag, ventiler og udstyr (kapaciteter, vægte, producenters tilslutningsstørrelser); ASME B16.9-længder for T-stykker og reduktioner på stålspoler; trykfald gennem beslag, flow og balancering; sprinklere; kabelbakker; dimensionering af stammer og udluftninger efter armaturenheder; at trække i en føringens hjørner; udskæring af åbninger i vægge og dæk; at slippe en føringens ende, der er fastgjort til en port (undtagen ved at slette udstyret); porte på biblioteksemner placeret fra Bibliotek-panelet; beslagvægte; kanalsømme, målere og forbindelser | Rør- og kanalføringer med generiske standardbeslag, systemer, planer, lister og mængdeudtrækket tegnes her: se [Rør og kanaler](topic:pipes-and-ducts). Generisk udstyr med porte, tilsluttede føringer og tilslutningskontrollen: [MEP-udstyr med porte](topic:mep-equipment), [Tilslut rør og kanaler til udstyr](topic:mep-connections). Kollisionssæt, frihøjder og åbningslisten: [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure). Stålspoler og spoolplader, kanalens tilskæringsliste: [Stålrørspoler og spoolplader](topic:pipe-spools). Hent producenters emner ind fra dit MEP-program som IFC |
| Dimensioneringskontrol efter norm af svejste I-profiler, af I-profiler, hvis IFC-profil ikke er navngivet som valset W-, S-, IPE-, HEA- eller HEB-profil, og af rør, vinkeljern og U-profiler (de kommer tilbage som ikke kontrolleret); knæk eller dynamisk respons (egenfrekvenser findes i blokken Finite elementer) (anden orden er kun P-Delta: elastisk, bøjning, ingen stivhedsreduktion); vægge og dæk i analysen; laster lavet af arealer (undtagen ét tryk på hver betondæk) | Fanen {{ui:Analyse}} giver kræfter, reaktioner og nedbøjninger for bjælker, søjler og afstivninger ved førsteordens analyse og kontrollerer valsede I-profiler, en hjælp, indtil en ingeniør har gennemgået den: se [Analysér rammeværket](topic:frame-analysis#design-checks) |

## Visning af modeller

| Ikke endnu | I stedet, i dag |
|---|---|
| 3D fra projektfiler | Eksportér IFC og åbn den. Se [Få en projektfil ind i 3D via IFC](topic:rvt-to-ifc) |
| Indvendige facader i det genererede tegningssæt (de bygges ud fra et rums Egenskaber og på dine egne ark); egne mål på facader og snit (kotemærker, højder, bredde og dør- og vindues-mærker tegnes; noter skrives i visningen: se [Redigér i facader og snit](topic:edit-in-elevations)); tegning af vægge i en facade (de tegnes i et snits plan); teamskabeloner via Studio | Tegningssættet laves ud fra modellen: se [Facader, snit og ark](topic:sheets). For enhver IFC-model: ét {{ui:Snit}}-plan eller en snitboks; se [Skær en IFC-model med et snitplan](topic:section-plane) |
| Henvisningsudsnit, detaljeudsnit, tegneudsnit og signaturforklaringer; tegnelinjer og skravering tegnet i en visning; beskæring af en facade eller et snit; visningsskabeloner for facader, snit, loftsplaner og 3D-visninger; loftsplaner i det genererede tegningssæt; et helt sæt egne ark i én PDF | Planer og loftsplaner har visningsområder, et beskæringsområde, en skala og et underlag (planer også skabeloner), og dine egne ark tager planer, loftsplaner, facader, snit og lister, hver gemt som en PDF: se [Visninger, visningsområder og egne ark](topic:views-and-sheets) |
| Flytning af en placeret lampe op i loftet bagefter; skrå eller trinvise lofter; loftsmønstre ud over de fem gitre; en lampes eget symbol i loftsplanen | Placér den med **Montering: Ved loftet**; loftsplanen tegner et armatur ud fra sin egen form: se [Placér udstyr og møbler fra biblioteket](topic:place-from-library) |
| Deling af søgesæt med andre, sæt inde i IFC-filen | Sæt bliver i denne browser; se [Find elementer efter klasse, navn eller egenskab](topic:find) |
| Måling af vinkler eller langs en sti med flere punkter | Mål hver del med {{ui:Mål}}: se [Mål afstande, fladearealer og placeringer i 3D](topic:measure) |
| Teksturer i den levende 3D-visning | Malede materialer viser deres farve i visningen og deres tekstur i renderede billeder: se [Render et billede af modellen](topic:render) |
| Blødt frihøjdekollisionstjek mellem to vilkårlige sæt, kollisionsgrupper, gemning af kollisionsresultater | Kør {{ui:Kollisionskontrol}} og lav emner af dem, der betyder noget: se [Tjek for kollisioner](topic:clash-check). Rør og kanaler mod konstruktionen har {{ui:Kontrollér frihøjder}}: se [Kontrollér rør og kanaler mod konstruktionen](topic:mep-against-structure) |
| Gemning af flere modeller som ét sæt, eller redigering af to modeller samtidig | Redigér én model ad gangen; hver gemmer sin egen fil |
| Tildeling af emner, forfaldsdatoer, etiketter, flere synspunkter pr. emne, redigering af et emne | Ét synspunkt pr. emne; se [Emner og BCF-filer](topic:issues-bcf) |
| `.ifczip` og `.ifcxml` | Pak op, eller eksportér almindelig `.ifc` |
| Kortlag for en model uden kortkonvertering, eller i en tegnings visninger | Eksportér modellen med dens koordinater: se [Et kort på jorden under modellen](topic:map-layers) |
| E57-scanninger over 6 millioner punkter eller 512 MB; scannerproducenters egne filer (RCP, RCS, FLS, LGS, TZF, ZFS); punktskyer i en tegnings 3D-visning; gemning af en skys placering sammen med modellen | Eksportér scanningen som LAS eller LAZ, og åbn den ved siden af en IFC-model: se [Punktskyformater](topic:point-cloud-formats) og [Vis en punktsky ved siden af modellen](topic:point-clouds) |
| Registrering af scanninger: finde målpunkter (kugler, skakbrætter) i en scanning af sig selv, løse alle scanninger samlet (bundle-justering), skala, registrering mod en model | Vælg matchende punkter, eller skriv målkoordinater, og forfin derefter én scanning ad gangen med ICP: se [Registrér flere scanninger til én](topic:register-scans) |
| Åbning af projektfilerne `.pln`, `.pla`, `.tpl` og `.bpn` | Eksportér IFC og DWG fra dem, eller en projektpakke: se [Åbn .pln- og .pla-projektfiler](topic:pln-project-files) og [Åbn en projektpakke](topic:open-project-bundle) |
| Åbning af listen {{ui:Elementer}} for at vælge efter type | Klik på en types gruppe i {{ui:Modeltræ}}: se [Find vej med modeltræet](topic:model-tree) |
| Skrivning af en kommentar eller titel på et emne i VR, stemmenoter, flytning af et snitplan i hånden i VR, en snitboks i VR | Placér emnet i VR, og tilføj dets ord i fanen Emner; sæt et snitplan eller en snitboks i 3D-visningen, før du går ind: se [Gennemgå modellen i et VR-headset](topic:vr-review) |
| At se personer ved skrivebordet i VR (kun personer i VR vises), optagelse af en VR-gang | Bed dem om at deltage i VR, eller følg med i 3D-visningen |
| Dagslyssimulering (klimabaseret dagslys, blænding, soltimer), tagvinduer i dagslysfaktoren, kontrol mod BS EN 17037 eller grønne byggeordninger; ISO 52016-1-energimetoden, timebaseret energisimulering, termisk masse og broer, klimafiler | Designhjælpemidler: den gennemsnitlige dagslysfaktor, hvert vindues lodrette himmelkomponent, solen gennem vinduerne på en dato og dagslysfaktoren på et gitter ([Vurdér dagslyset i hvert rum](topic:daylight-factor)); varmetab, et gradedagsår og en kølespids pr. rum ([Vurdér varme- og kølebelastninger](topic:heating-and-cooling-loads)). Brug et simuleringsprogram til overholdelse |
| En hostet bygningstvilling: aflæsninger gemt og alarmer sendt på e-mail, mens BimCraft er lukket, vedligeholdelsesmails; MQTT 5; læsning af COBie-jobs tilbage | Aflæsninger fra en CSV eller direkte fra din egen broker eller adresse, mens modellen er åben; grænseværdier, der markerer aktiver; dokumenter, COBie ud og ind: se [Hold aktivdata og en vedligeholdelsesjournal i modellen](topic:assets-and-maintenance) |
| Et plugin eller live-forbindelse til Enscape, Twinmotion eller andre visualiseringsprogrammer; FBX- eller Datasmith-filer; ét objekt pr. element, gemte visninger og gennemgange i .glb | Gem en .glb til renderingsprogrammer, der læser glTF, en USD-fil (ét objekt pr. element, med dens IFC-data: se [Eksportér modellen som USD](topic:usd)), eller IFC til dem, der kører inde i et andet designprogram: se [Send modellen til et renderingsprogram](topic:model-for-rendering) og [Åbn scenen i et andet program](topic:render-open-in) |
| Et andet program tegner renderingsbilledet uden et render-motor-tilvalg (CadCraft kører aldrig et program under GNU GPL-licensen); panorama- eller stereokameraer og et himmelbillede gennem et andet program; Unreal Engine-plugin'et (filerne skrives, men plugin'et der åbner dem er ikke udgivet) | Vores egne Fast- og Path tracer-motorer; et tilvalgs motor ([tegn billedet med et andet program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappefil fra Motor-listen, til at tage med til ethvert program |
| I den levende visning: sprede planter og sten, dele panoramaer, en rundvisning, en offline-fremviser eller en video | ModelCraft's levende visning har dem; her: renderede billeder og 360°-panoramaer: se [Den levende visning](topic:live-view) og [Render et billede af modellen](topic:render) |

## Tegninger

| Ikke endnu | I stedet, i dag |
|---|---|
| Redigering, måling eller gemning af DWG og DXF | CadCraft-tegneappen ({{ui:Rediger i CadCraft}} på 2D-visningen) |
| Udskrivning eller eksport til PDF | Udskriv fra det program, der lavede tegningen; tjek den først med {{ui:Udskriftsvisning}} |
| Plotstile og pen-tabeller | {{ui:Udskriftsvisning}} viser almindelig sort med linjetykkelser |
| DWG-filer ældre end R13 og binær DXF (BimCraft siger det, når du åbner en) | Gem tegningen igen som en nyere DWG eller som ASCII-DXF |
| Tegninger, der er linket inde i linkede tegninger | Åbn dem direkte |
| TIFF-billeder | Gem en PNG- eller JPEG-kopi med samme navn, og tilføj den |
| DGN-tegninger | Vises kun i mappe-rapporter |
| Objekter opført under **Ikke tegnet endnu** | Vis tegningen i det program, der lavede den |
| ACIS-legemer, solider, områder og flader, og subdivision-net i 3D | Eksportér IFC eller 3D-flader fra det program, der lavede tegningen |
| Billeder, flere henvisningslinjer og ark i en tegnings 3D-visning | Se dem på fanen {{ui:Model}} og arkene |
| Valg af objekter i en tegnings 2D-visning | Skift til {{ui:3D}} og klik på objektet der: se [Se en DWG- eller DXF-tegning i 3D](topic:dwg-in-3d) |
| Udstyrslister fra tegninger uden `KCL-ITEM`-tags | Ikke tilgængelig |
| Udstyrsliste som XLSX eller PDF | {{ui:Download CSV}} og åbn den i et regneark |

## Filer og platforme

| Ikke endnu | I stedet, i dag |
|---|---|
| Skylagring | Gem kopier på din computer eller på kontorets server. Skylagring er ikke tilgængelig endnu |
| Huske mapper i Firefox og Safari | Vælg mappen igen, eller træk den ind |
| Fortryd efter gemning | Åbn den oprindelige fil igen for at starte forfra |
| Udfyldning af den manglende del af en afbrudt projektfil | Kopiér originalen igen; i en mappe læser BimCraft den nyeste komplette backup |
| Genåbning af de filer, du havde åbne | Ikke-gemte ændringer tilbydes igen som "Gendan dit arbejde?", når du vender tilbage; åbn filerne igen fra listen over seneste |
