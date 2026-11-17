---
title: Vad som inte finns ännu
summary: Vad den här BimCraft-versionen inte gör ännu, och vad du ska använda i stället idag.
keywords: saknas, begränsningar, stöds inte, färdplan, skapande, modellering, sektioner, mät, kollision, bcf, moln, skrivbord, export
from: 87777dcc
---

BimCraft är idag en läsare, kontrollant och IFC-dataredigerare som har börjat rita byggnader: väggar, dörrar och fönster, rum, golv, undertak och tak (se [Rita väggar](topic:draw-walls), [Dörrar och fönster](topic:doors-and-windows) och [Rum, golv, undertak och tak](topic:floors-and-roofs)). Detta är den ärliga listan över vad den ännu inte gör, med vad du ska göra i stället.

## Modellering och skapande

| Finns inte ännu | I stället, idag |
|---|---|
| Rita balkar; pelare av stålprofiler | Använd ditt skapandeprogram och dess IFC-export här. Rektangulära och runda pelare placeras här (se [Rutnät och pelare](topic:grids-and-columns)); raka, L-formade, U-formade, vändtrappor och spiraltrappor samt räcken ritas här (se [Trappor och räcken](topic:stairs-and-railings)) |
| Ett fönster i en kvists front; kvistar på takplan ritade för hand; krökta tak; en renderad takbeklädnad med textur | Takplan ritade efter sina hörn, och en lutning för varje vägg: se [Tak: en lutning för varje vägg, gavlar, pulpettak och takplan](topic:roofs) |
| Ändra väggar, dörrar eller fönster som ett annat program har skapat | Ditt skapandeprogram; ritverktygen ändrar endast det de ritat |
| Väggprofiler med överhäng eller hål; väggöppningar som inte är rektanglar; lägga till eller ta bort en väggs profilpunkter i 3D-vyn | Profil, fäst, lutning och öppningar fungerar i Egenskaper, i fasader och sektioner, på väggens ytvy och med handtag i 3D, för raka och krökta väggar: se [Forma en vägg: fäst, profil, lutning och öppningar](topic:wall-shape) |
| På krökta väggar: {{ui:Trimma / förläng}} och {{ui:Hörn}}, inramning, automatiska måttsättningar i planen, fångst längs bågen (den fångar sina ändar och bågens mitt) | Rita väggen rak för dessa, eller använd raka segment. Krökta väggar finns i [Rita väggar](topic:draw-walls) |
| Dra ett placerat biblioteksobjekt i 3D-vyn | Dra det i planen, eller skriv X, Y och Rotation i {{ui:Egenskaper}}: se [Placera utrustning och möbler från biblioteket](topic:place-from-library) |
| Placera växter från växtbiblioteket i CivilCraft-arbetsytan Landskap | Plantera dem i CivilCraft, eller placera träd och buskar från bibliotekets entourage: se [Placera utrustning och möbler från biblioteket](topic:place-from-library) |
| I tillägget Plant (avstängt tills du slår på det): ritning av en dragen ledning i modellen, spolnummer på dess isometriska ritningar, en layoutkontroll av utrustning placerad från biblioteket | Rita ledningen med {{ui:Rör}} (se [Rör och kanaler](topic:pipes-and-ducts)); layoutkontrollen läser tilläggets egna utrustningstabell |
| Vrida, spegla eller ordna i matris enstaka ritade väggar, dörrar och fönster (väggar flyttas och kopieras med Flytta, Förskjut och Lådsträckning: se [Väggformer, dela, förskjut, töj och lås](topic:wall-tools)); en sammanfogningsstil (stumt, kantat) vid hörn med en krökt vägg eller med tre väggar eller fler (se [Väggformer, dela, förskjut, töj och lås](topic:wall-tools)); ett textverktyg; gardinväggar | Kopiera allt på en nivå med {{ui:Kopiera den här nivån…}} (se [Rita väggar](topic:draw-walls#levels)); annars ritar du dem på nytt |
| Lager i väggsammansättningen som ritas i planen och sektionen; måttsättningar i sektioner och fasader; referensmått till dörrar, fönster och andra komponenter; sammansättningar och membran i scheman och mängder; ett materialbibliotek delat mellan projekt; lagerprioritet i sektioner, fasader och 3D och vid noder med tre väggar eller fler (i planen rensas hörn, T-förband och korsningar av två väggar med lagerprioritet: se [Väggformer, dela, förskjut, töj och lås](topic:wall-tools)); inslagna eller variabla lager; redigering av sammansättningen av en vägg som ett annat program har skapat | Lagren finns i väggens typ och dess förhandsvisning ({{ui:Väggsammansättningar…}}); väggar mäts som ett enda klimatskal: se [Väggsammansättningar och referensmått](topic:wall-assemblies) |
| Ändra ett elements form eller storlek (annat än väggar, dörrar och fönster som ritats här, och element placerade från en familj) | Ditt skapandeprogram. Ta bort, kopiera, klipp ut och klistra in fungerar här: se [Ta bort, klipp ut, kopiera och klistra in byggnadselement](topic:edit-elements) |
| Ta bort våningsplan, utrymmen, byggnader eller tomten | Ta bort elementen i dem |
| Klistra in byggnadselement i en annan modell | Kopiera och klistra in inom en modell; placerade biblioteksobjekt klistras in i vilken modell som helst |
| Lägga till nya egenskaper eller egenskapsuppsättningar | Fyll i befintliga värden här, eller lägg till parametern i ditt skapandeprogram och exportera igen |
| Redigera mängder, listor, uppräkningar | Ditt skapandeprogram |
| Spara projektfiler från andra program | BimCraft sparar IFC (och sina egna familjefiler: se [Familjer och deras storlekar](topic:families)) |
| Familjer: ett bibliotek av familjer som placeras från planen och delas mellan projekt (Bibliotek), ett hotspot dragen i 3D-vyn av ett placerat element (de dras i familjeredigerarens förhandsvisning och i planen), detaljnivåer valda per vy (en nivå för projektet; blad väljer efter skala), en revolvering på ett lodrätt plan inne i en annan familj vriden ett kvarts varv, dörr- och fönstersymboler i planen med egna symboler (de ritar sin startpunkts) | Familjer med typade parametrar, formler, en egen planssymbol, hotspots, upprepningar, detaljnivåer, familjer inuti familjer, storlekar från en tabell och parametrar per element görs här: se [Redigera en familj](topic:family-editor) och [Familjer och deras storlekar](topic:families). Duplicera en familj för att börja från en |
| Redigera andra programs typer som familjer; göra ett biblioteksobjekt till en familj | Andra programs typer listas, grupperas efter en gissning, och deras element väljs. Biblioteksobjekt placeras som de är |
| Tillverkares kopplingar, ventiler och utrustning (kapacitet, vikter, tillverkares anslutningsstorlekar); ASME B16.9 böj- och reducerlängder på stålspolar; tryckförluster i kopplingar, flöden och balansering; sprinklers; kabelstegar; dimensionering av stammar och ventiler efter fixture units; dra ett rörs hörn; släppa ett rörs ände som är fäst vid en port (utom genom att ta bort utrustningen); portar på biblioteksobjekt placerade från bibliotekspanelen; kopplingars vikter; kanalskarvar, tjocklekar och kopplingar | Rör- och kanalsträckor med generiska standardkopplingar, system, planer, scheman och mängdavtagningen ritas här: se [Rör och kanaler](topic:pipes-and-ducts). Generisk utrustning med portar, anslutna sträckor och kontrollen Anslutningar: [MEP-utrustning med portar](topic:mep-equipment) och [Anslut rör och kanaler till utrustning](topic:mep-connections). Kollisionsuppsättningar, fria avstånd och öppningslistan: [Kontrollera rör och kanaler mot konstruktionen](topic:mep-against-structure). Stålspolar och spolplåtar, kanalens kapplista: [Stålrörsspolar och spolplåtar](topic:pipe-spools). Ta med tillverkarnas delar från ditt MEP-program som IFC |
| Konstruktionskontroller av svetsade I-profiler, av I-profiler vars IFC-profil inte är namngiven som en valsad W-, S-, IPE-, HEA- eller HEB-storlek, och av rör, vinkelstål och U-profiler (de visas som ej kontrollerade); knäckning eller dynamisk respons (egenfrekvenser finns i blocket Finita element) (andra ordningen är endast P-Delta: elastisk, böjning, ingen styvhetsreduktion); väggar och bjälklag i analysen; laster gjorda av areor (utom ett tryck på varje betongbjälklag) | Fliken {{ui:Analys}} ger krafter, reaktioner och nedböjningar för balkar, pelare och stag genom förstaordningsanalys och kontrollerar valsade I-profiler, ett hjälpmedel tills en ingenjör har granskat det: se [Analysera stommen](topic:frame-analysis#design-checks) |

## Visa modeller

| Finns inte ännu | I stället, idag |
|---|---|
| 3D från projektfiler | Exportera IFC och öppna den. Se [Få en projektfil i 3D via IFC](topic:rvt-to-ifc) |
| Interiörfasader i den genererade ritningsuppsättningen (de byggs från ett rums Egenskaper och på dina egna blad); egna måttsättningar på fasader och sektioner (nivåmärken, höjder, bredd och dörr- och fönstermärkning ritas; anteckningar skrivs i vyn: se [Redigera i fasader och sektioner](topic:edit-in-elevations)); rita väggar i en fasad (de ritas i ett sektionsplans plan); teammallar via Studio | Ritningsuppsättningen av modellen: se [Fasader, sektioner och blad](topic:sheets). För valfri IFC-modell: ett {{ui:Sektion}}-plan, eller en sektionslåda; se [Skär en IFC-modell med ett sektionsplan](topic:section-plane) |
| Anropsvyer, detaljvyer, ritvyer och teckenförklaringar; ritlinjer och skraffering ritade i en vy; beskärning av en fasad eller sektion; vymallar för fasader, sektioner, takplaner och 3D-vyer; takplaner i den genererade ritningsuppsättningen; en hel uppsättning egna blad i en PDF | Planer och takplaner har vyområden, ett beskärningsområde, en skala och ett underlag (planer även mallar), och dina egna blad tar planer, takplaner, fasader, sektioner och scheman, var och en sparad som en PDF: se [Vyer, vyområden och egna blad](topic:views-and-sheets) |
| Flytta en placerad lampa upp i taket i efterhand; sluttande eller trappade tak; takmönster andra än de fem rutnäten; en lampas egna symbol i takplanen | Placera den med **Montering: Vid taket**; takplanen ritar en armatur från dess egna form: se [Placera utrustning och möbler från biblioteket](topic:place-from-library) |
| Dela sökuppsättningar med andra, uppsättningar inne i IFC-filen | Uppsättningar stannar i den här webbläsaren; se [Hitta element efter klass, namn eller egenskap](topic:find) |
| Mäta vinklar, eller längs en väg av flera punkter | Mät varje del med {{ui:Mät}}: se [Mät avstånd, ytareor och lägen i 3D](topic:measure) |
| Texturer i den levande 3D-vyn | Målade material visar sin färg i vyn och sin textur i renderade bilder: se [Rendera en bild av modellen](topic:render) |
| Mjuka kollisioner (fria avstånd) mellan två valfria uppsättningar, kollisionsgrupper, sparande av kollisionsresultat | Kör {{ui:Kollisionskontroll}} och gör ärenden av de som betyder något: se [Kontrollera kollisioner](topic:clash-check). Rör och kanaler mot konstruktionen har {{ui:Kontrollera fria avstånd}}: se [Kontrollera rör och kanaler mot konstruktionen](topic:mep-against-structure) |
| Spara flera modeller som en uppsättning, eller redigera två modeller samtidigt | Redigera en modell i taget; var och en sparar sin egen fil |
| Tilldela ärenden, förfallodatum, etiketter, flera vyer per ärende, redigera ett ärende | En vy per ärende; se [Ärenden och BCF-filer](topic:issues-bcf) |
| `.ifczip` och `.ifcxml` | Packa upp eller exportera vanlig `.ifc` |
| Kartlager för en modell utan kartkonvertering, eller i en ritnings vyer | Exportera modellen med dess koordinater: se [En karta på marken under modellen](topic:map-layers) |
| E57-skanningar över 6 miljoner punkter eller 512 MB; skannertillverkarnas egna filer (RCP, RCS, FLS, LGS, TZF, ZFS); punktmoln i en ritnings 3D-vy; sparande av ett molns plats tillsammans med modellen | Exportera skanningen som LAS eller LAZ och öppna den bredvid en IFC-modell: se [Punktmolnsformat](topic:point-cloud-formats) och [Visa ett punktmoln bredvid modellen](topic:point-clouds) |
| Registrering av skanningar: hitta målpunkter (sfärer, schackrutor) i en skanning av sig själv, lösa alla skanningar tillsammans (bundle adjustment), skala, registrering mot en modell | Välj matchande punkter eller skriv målkoordinater, och förfina sedan en skanning i taget med ICP: se [Registrera flera skanningar till en](topic:register-scans) |
| Öppna projektfilerna `.pln`, `.pla`, `.tpl` och `.bpn` | Exportera IFC och DWG från dem, eller ett projektpaket: se [Öppna .pln- och .pla-projektfiler](topic:pln-project-files) och [Öppna ett projektpaket](topic:open-project-bundle) |
| Öppna listan {{ui:Element}} för att välja efter typ | Klicka på en typs grupp i {{ui:Modellträd}}: se [Hitta rätt med modellträdet](topic:model-tree) |
| Skriva en kommentar eller en rubrik på ett ärende i VR, röstanteckningar, flytta ett sektionsplan för hand i VR, en sektionslåda i VR | Placera ärendet i VR, lägg sedan till dess ord i fliken Ärenden; ställ in ett sektionsplan eller en låda i 3D-vyn innan du går in: se [Granska modellen i ett VR-headset](topic:vr-review) |
| Se folk vid skrivbordet i VR (endast personer i VR syns), spela in en VR-promenad | Be dem ansluta i VR, eller följ med i 3D-vyn |
| Dagsljussimulering (klimatbaserat dagsljus, bländning, soltimmar), takfönster i dagsljusfaktorn, kontroller mot BS EN 17037 eller gröna byggnadsmetoder; ISO 52016-1-energimetoden, timvis energisimulering, termisk massa och köldbryggor, klimatfiler | Designhjälpmedel: medeldagsljusfaktorn, varje fönsters vertikala himmelskomponent, solen genom fönstren ett datum och dagsljusfaktorn på ett rutnät ([Uppskatta dagsljuset i varje rum](topic:daylight-factor)); värmeförlust, ett graddagsår och en kyltopp per rum ([Uppskatta värme- och kylbelastningar](topic:heating-and-cooling-loads)). Använd ett simuleringsprogram för efterlevnad |
| En värdbaserad byggnadstvilling: avläsningar sparade och larm skickade via e-post medan BimCraft är stängt, underhållspåminnelser via e-post; MQTT 5; läsa tillbaka COBies jobb | Avläsningar från en CSV eller direkt från din egen broker eller adress medan modellen är öppen, gränser som flaggar tillgångar, dokument, COBie ut och in: se [Håll tillgångsdata och en underhållslogg i modellen](topic:assets-and-maintenance) |
| Ett insticksprogram eller en levande länk för Enscape, Twinmotion eller andra visualiseringsprogram; FBX- eller Datasmith-filer; ett objekt per element, sparade vyer och promenader i .glb | Spara en .glb för renderingsprogram som läser glTF, en USD-fil (ett objekt per element, med sina IFC-data: se [Exportera modellen som USD](topic:usd)), eller IFC för dem som körs i ett annat designprogram: se [Skicka modellen till ett renderingsprogram](topic:model-for-rendering) och [Öppna scenen i ett annat program](topic:render-open-in) |
| Ett annat program som ritar renderingsbilden utan ett renderingsmotor-tillägg (CadCraft kör aldrig ett program under GNU GPL-licensen); panorama- eller stereokameror och en himmelsbild via ett annat program; insticksprogrammet för Unreal Engine (filerna skrivs, men insticksprogrammet som öppnar dem är inte släppt) | Våra egna Fast- och Path-tracer-motorer; ett tilläggs motor ([rita bilden med ett annat program](topic:render-other-program)); en USD-, glTF- eller Unreal-mappfil från listan Motor att ta med till vilket program som helst |
| I den levande vyn: sprida ut växter och stenar, dela panoramor, en rundvandring, en offline-visare eller en video | ModelCrafts levande vy har dem; här: renderade bilder och 360°-panoramor: se [Den levande vyn](topic:live-view) och [Rendera en bild av modellen](topic:render) |

## Ritningar

| Finns inte ännu | I stället, idag |
|---|---|
| Redigera, mäta eller spara DWG och DXF | CadCraft-ritappen ({{ui:Redigera i CadCraft}} på 2D-vyn) |
| Skriva ut eller exportera PDF | Skriv ut från programmet som gjorde ritningen; kontrollera först med {{ui:Utskriftsvy}} |
| Plottstilar och pennatabeller | {{ui:Utskriftsvy}} visar vanlig svart med linjetjocklekar |
| DWG-filer äldre än R13, och binär DXF (BimCraft säger det när du öppnar en) | Spara ritningen igen som en nyare DWG, eller som ASCII-DXF |
| Ritningar länkade inne i länkade ritningar | Öppna dem direkt |
| TIFF-bilder | Spara en PNG- eller JPEG-kopia med samma namn och lägg till den |
| DGN-ritningar | Visas endast i mapprapporter |
| Objekt listade under **Ännu inte ritade** | Visa ritningen i programmet som gjorde den |
| ACIS-solider, kroppar, regioner och ytor, och delningsnät i 3D | Exportera IFC eller 3D-ytor från programmet som gjorde ritningen |
| Bilder, flerhänvisningar och blad i en ritnings 3D-vy | Se dem på fliken {{ui:Modell}} och bladen |
| Peka ut objekt i en ritnings 2D-vy | Byt till {{ui:3D}} och klicka på objektet där: se [Visa en DWG- eller DXF-ritning i 3D](topic:dwg-in-3d) |
| Utrustningsscheman från ritningar utan `KCL-ITEM`-taggar | Inte tillgängligt |
| Utrustningsschema som XLSX eller PDF | {{ui:Ladda ner CSV}} och öppna den i ett kalkylblad |

## Filer och plattformar

| Finns inte ännu | I stället, idag |
|---|---|
| Molnsparande | Spara kopior på din dator eller din kontorsserver. Molnsparande finns inte ännu |
| Att komma ihåg mappar i Firefox och Safari | Välj mappen igen, eller dra den dit |
| Ångra efter sparning | Öppna originalfilen igen för att börja om |
| Fylla i den saknade delen av en avklippt projektfil | Kopiera originalet igen; i en mapp läser BimCraft den senaste kompletta säkerhetskopian |
| Att öppna filerna du hade öppna | Osparade ändringar erbjuds tillbaka som "Återställ ditt arbete?" när du kommer tillbaka; öppna filerna igen från listan Senaste |
