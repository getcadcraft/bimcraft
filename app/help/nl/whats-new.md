---
title: Wat is er nieuw in 0.9
summary: Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen aan rasterlijnen, niveaus onder het maaiveld, rastermaten en Meten op de plattegrond, dubbele weergaven met werkstijlen en pententabellen, Rapporteren als, Collada- en Google Earth-export, Scan naar BIM, wind- en aardbevingsanalyse, add-ons voor harsprinten.
keywords: wat is er nieuw, 0.9, uitgavenotities, wandvormen, rechthoek, veelhoek, boog, lijnen kiezen, omtrek overtrekken, verschuiving, verbinding, kader uitrekken, uitlijnen en vergrendelen, wand splitsen, opening, weer samenvoegen, vergrendelen op raster, groeien vanaf, meten vanaf, niveau eronder toevoegen, kelder, niveaugereedschap, rastermaten, meten op de plattegrond, werkstijl, dubbele weergave, eigen kopie, gekoppelde weergave, pententabel, afdrukken zoals getoond, rapporteren als, typ een schaal, svg importeren, plaatsen in plattegrond, plaatsen in model, collada, dae, kmz, google earth, scan naar bim, windbelasting, aardbeving, eindige elementen, documentenpaneel, harsprinten, wat is er nieuw, uitgavenotities, wijzigingslog, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, evacuatie, personen, wachtrijen, akoestiek, nagalm, impulsrespons, overstroming, wind, aardbeving, gevaar, levenscyclus, levensduur, ids, tags, staten, verplaatsen, uitlijnen, verdelen, afbeelding, achtergrond, scan naar wanden, terrein uit civilcraft, paneeltekeningen, constructie, zon, pv, splitsen, vrf, fan coil, leidingdimensionering, kabelgoot, verlichtingssterkte, beton, aardbeving, scan vergelijken, epsg, projectie, documenten, sjabloon, koolstof, kosten, energyplus, renderengine, openen in, usd, glb, unreal, ongedaan maken, add-ons, pcf, symbolen, planten, overtrekken, pennen, lint, projectbrowser, indeling
from: 5624fe88
---

Dit is wat er in BimCraft 0.9 is veranderd, vergeleken met 0.8.1. De twee grote thema's zijn een echt wandgereedschap en weergaven die zich gedragen zoals mensen uit de grote BIM-programma's verwachten. Daaromheen komen Collada-export, assistenten die elektrische apparaten kunnen plaatsen, Scan naar BIM, en wind-, aardbevings- en eindige-elementenwerk in het tabblad {{ui:Analyse}}.

## Nieuw

### Wanden

- **Hele vormen tekenen.** Open in {{ui:Tekenen}} {{ui:Vormen}} (of kies een vorm in de lijst Vorm van de rij Wand) voor een rechthoek, een gedraaide rechthoek, een veelhoek van 3 tot 64 zijden, een boog op het middelpunt, een tangentiële boog, wanden op gekozen lijnen, of wanden rond een gesloten gebied waarin u klikt. Een rechthoek is vier wanden met vier aangesloten hoeken en één stap ongedaan maken. Zie [Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen](topic:wall-tools).
- **Instellen voor het tekenen, achteraf wijzigen.** De rij Wand heeft {{ui:Verschuiving}} en {{ui:Aansluiten}} (haal het vinkje weg om vrijstaande wanden te tekenen). Gebruik daarna {{ui:Verschuiving}}, {{ui:Kaderuitrekken}} en {{ui:Uitlijnen en vergrendelen}} op getekende wanden. Een verplaatste of uitgerekte wand behoudt zijn deuren, ramen en maten. Elk recept is één stap ongedaan maken.
- **Wanden splitsen.** {{ui:Splitsen}}, {{ui:Opening}}, {{ui:Vrije uiteinden}}, {{ui:Segment verwijderen}} en {{ui:Weer samenvoegen}} snijden een wand op een klik of waar een andere wand hem kruist. Een snede door een deur wordt geweigerd. Zie [Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen](topic:wall-tools).
- **Wanden vergrendelen aan rasterlijnen.** Kies een wand langs een rasterlijn en vink {{ui:Vergrendelen op raster}} aan in {{ui:Eigenschappen}}. Met het rastergereedschap aan, typt u een afstand in {{ui:Verplaatsen met}} voor een gekozen lijn, en de vergrendelde wanden volgen in één stap ongedaan te maken.
- **Één wand vormgeven.** In {{ui:Eigenschappen}} van één wand kunt u zijn bovenkant of onderkant vastzetten aan een dak, vloer of plafond, zijn gevelomtrek bewerken, hem laten hellen, of een wandopening zonder deur of raam snijden. Zie [Een wand vormgeven](topic:wall-shape).
- **Lengte zegt welk einde standhoudt.** {{ui:Groeien vanaf}} bepaalt of het begin, het einde of het midden blijft staan wanneer u de lengte wijzigt.
- **Lengte en de maat op de plattegrond komen overeen.** {{ui:Meten vanaf}} (hartlijn, binnenvlak of buitenvlak) stuurt zowel het veld Lengte als de wandmaten van de plattegrond aan. Het begint op de hartlijn, dus de wandmaten van de plattegrond lezen nu de hartlijn waar ze eerder het buitenvlak lazen. Wijzig het in de rij Wand, in {{ui:Eigenschappen}} of in {{ui:Instellingen}} › {{ui:BimCraft}} › {{ui:Wanden}}.

### Niveaus, rasters en meten

- **Een niveau eronder toevoegen.** {{ui:Een niveau eronder toevoegen}} in het paneel {{ui:Niveaus}} voegt een niveau onder het laagste toe, even hoog als dat, op een negatieve hoogte (Niveau -1, Niveau -2). Niets anders verschuift. {{ui:Niveaus toevoegen…}} accepteert nu negatieve hoogtes. Als u LEVEL, LEVELS, STOREY of STOREYS op de opdrachtregel typt, opent {{ui:Niveaus toevoegen…}}, en er is een knop {{ui:Niveaus}} in de menu's en lint-tabbladen. Zie [Terreinen, gebouwen en niveaus](topic:site-building-and-levels).
- **Rastermaten op de plattegrond.** Zet het gereedschap {{ui:Raster}} aan en vink {{ui:Maten}} aan om de afstand tussen naburige lijnen en de totale grootte voorbij de bolletjes op de plattegrond van elk niveau te tekenen. Zie [Een raster bematen](topic:grid-dimensions).
- **Meten op de plattegrond.** {{ui:Meten}} in de groep {{ui:Tekenen}} geeft een afstand met de X- en Y-verschillen tussen twee klikken. Er wordt niets in het model opgeslagen. Zie [Meten op de plattegrond](topic:measure-on-the-plan).
- **Meerdere kolommen tegelijk wijzigen.** Kies kolommen samen met een wand, en de keuze toont elke soort met {{ui:Alleen deze behouden}}. Eén klik houdt de kolommen en toont hun gedeelde velden.
- **Eén weergave-eenheid overal.** Coördinaten, metingen, doorsneden, schaal van bladen, de lasten en resultaten van het kadertabblad en de tekst van Problemen volgen de eenheid die u kiest. Exports blijven SI.

### Weergaven, bladen en afdrukken

- **Werkstijl.** {{ui:Instellingen}} › {{ui:BimCraft}} › {{ui:Werkstijl}} kiest of elke weergave eigen annotaties en pententabellen heeft, of ze deelt. Zie [Werkstijl, gedupliceerde weergaven, pennen op papier, Rapporteren als en sjablonen](topic:working-style).
- **Een weergave dupliceren.** Plattegronden, plafondplattegronden, aanduidingen, gevels en doorsneden kunnen worden gedupliceerd als {{ui:Eigen kopie}} of {{ui:Gekoppeld}}; {{ui:Eigen kopie maken}} maakt een gekoppelde onafhankelijk. Zie [Werkstijl, gedupliceerde weergaven, pennen op papier, Rapporteren als en sjablonen](topic:working-style).
- **Afdrukken zoals getoond, of via een pententabel.** Penoverschrijvingen worden met de weergave in de IFC bewaard, en bladen en PDF's tekenen ze zoals het scherm dat doet. Hetzelfde onderwerp behandelt pententabellen.
- **Rapporteren als.** {{ui:Rapporteren als}} in {{ui:Eigenschappen}} schrijft een vloer die als weg is getekend, een wand als paneel of een dak als helling naar de IFC als de klasse die u kiest, en telt het zo in staten, Hoeveelheden, Zoeken, Kleur op en Problemen.
- **Bewerken in gevels en doorsneden.** Teken en verplaats wanden, openingen, niveaus, maten en notities rechtstreeks in een gevel of doorsnede, met uw eigen bladformaten en titelblokken. Zie [Bewerken in gevels en doorsneden](topic:edit-in-elevations).
- **Bladen.** Elk blad kan liggend of staand zijn. Een vak {{ui:Typ een schaal}} staat naast de schaallijst op elke geplaatste weergave (1:64, 2:1, 1/4" = 1'). U kunt een geplaatste tekening slepen of met de pijltjestoetsen verschuiven, en {{ui:Formaten…}} › {{ui:SVG importeren…}} maakt van uw eigen bladontwerp een titelblok met velden die per blad worden getypt.
- **Bibliotheekcredits op een blad.** Een tekenset met bibliotheekitems krijgt een staat met bibliotheekcredits die u op elk blad kunt plaatsen. Zie [Bibliotheekcredits](topic:library-credits).

### Bibliotheek: plaatsen

- **Plaatsen volgt de weergave.** In de plattegrondweergave toont de Bibliotheek {{ui:Plaatsen in plattegrond}}; in 3D toont ze {{ui:Plaatsen in model}}; in Splitsen toont ze een gesplitste knop met {{ui:Plaatsen in plattegrond}} als hoofdactie. Beide manieren schrijven hetzelfde IFC-element. U kunt ook een bibliotheekkaart naar de plattegrond of de 3D-weergave slepen; met een pen of vinger houdt u ingedrukt en sleept u daarna. Zie [Plaatsen vanuit de bibliotheek](topic:place-from-library).

### Bestanden en assistenten

- **Collada en Google Earth.** {{ui:Collada}} op de werkbalk (menu Bestand in de menustijlen) schrijft een .dae, of een .kmz die op de kaart op de plek van het model wordt geplaatst. Zie [Het model exporteren als Collada of voor Google Earth](topic:collada).
- **Assistenten kunnen elektrische apparaten plaatsen.** Uw verbonden assistent heeft nieuwe gereedschappen om apparaten toe te voegen, weer te geven, te wijzigen en te verwijderen, en om lampen in te stellen. Assistenten blijven uit tot u ze aanzet in {{ui:Instellingen}}. Zie [Laat een AI-assistent met uw model werken](topic:assistants).
- **Scan naar BIM (add-on).** Standaard uit en vereist de add-on Puntenwolken. Hij stelt vloeren, wanden, deuren en ramen voor uit een scan, met de gemeten afwijking voor elk; accepteren is één stap ongedaan maken.

### Analyse

- **Wind- en aardbevingsgegevens van de locatie.** In het tabblad {{ui:Analyse}}: windbelastingen volgens ASCE 7-10 of 7-16 voor een stijf, gesloten gebouw, met een kracht op elke verdieping als belastinggevallen, en aardbevingsgegevens van de locatie met een USGS-opzoeking en het ontwerpspectrum.
- **Constructieve vervolgstappen en eindige elementen.** Betoncontroles volgens ACI 318-19, equivalente horizontale krachten volgens ASCE 7-22, verdiepingsdrift, vloeren en wanden als platen, en belastingcombinaties volgens ASCE 7 en EN 1990. Onze eigen eindige-elementenengine doet schalen, tetraëders en modale analyse. Zie [Betonnen staven controleren en aardbevingsbelastingen maken](topic:concrete-and-seismic) en [Raamanalyse](topic:frame-analysis).

### Andere add-ons en documenten

- **Binnenverlichting (add-on).** Plaatst lichtarmaturen en schrijft de lux als getallen in de plattegrond van elk niveau, met een schatting van verblinding en een afdrukbaar rapport.
- **Documentenpaneel.** {{ui:Bestand}} › {{ui:Documenten…}} heeft uitchecken en inchecken met een vergrendelbestand, revisieletters, vrijgavestatussen en geschiedenis.
- **Regio's en staal.** Zuid-Afrikaanse tekening- en bouwvoorschriftenpakketten in de add-on Regelgeving, en 976 Britse staalmaten in de gedeelde doorsnedetabel.
- **Gratis add-ons voor harsprinten.** Slicer, steunen en raft, belichtingstest, en de bestandsformaten GOO, SL1, Chitubox en Anycubic, allemaal standaard uit.

## In elke app

- Een knop of regelaar waar u met de muis overheen gaat, toont een Bootstrap-tooltip.
- De starttip op een leeg tekengebied heeft een sluitknop; BimCraft onthoudt dat hij gesloten is.
- Een tabbalk van een paneel die niet past, scrolt nu in plaats van te worden afgesneden.
- Met een document open leest de titel van het browsertabblad "<document> - BimCraft | CadCraft".
- In {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Indeling}} zijn de indelingen een keuzelijst met keuzes van twee regels.
- De taallijst in {{ui:Instellingen}} biedt meer talen dan in 0.8; talen anders dan Engels zijn machineconcepten.

## Opgelost

- **Verplaatsen werkt op trappen,** en op hellingen, leuningen, dakvlakken, vrijstaande apparaten, afbeeldingen en paden.
- **Een wand slepen scheeft de kamer niet meer.** De middelste greep verplaatst de wand haaks op zichzelf, en zijn hoeken schuiven langs de aangesloten wanden. Houd {{key:Mod}} ingedrukt voor het oude vrije verplaatsen; {{ui:Haaks maken}} zet 90 graden terug.
- **Een wijziging van dikte of type op een aangesloten knooppunt** houdt nu de hoek gesloten bij een L, een T, een knooppunt van drie wanden en naast een gebogen wand.
- **Een groep ruimten verplaatsen of kopiëren** houdt aangesloten wanden buiten de groep aangesloten.
- **Opnieuw doen behoudt de identiteit van een wandmaat.**
- **Een wand kiezen met Tekenen uit** geeft geen fout meer in Eigenschappen.
- **Renderen valt terug op WebGL** wanneer de GPU niet kan starten, in plaats van te stoppen.
- **De EnergyPlus-controle kan weer worden ingeschakeld.**
- **Documenten opent als een gecentreerd dialoogvenster.** {{key:Esc}}, de X of een klik op de verduisterde pagina sluit het.
- **De knoppen {{ui:Plattegrond}}, {{ui:Splitsen}} en {{ui:3D}} tonen** zodra een model is geopend, niet alleen nadat Tekenen eenmaal was aangezet.

## Eerlijke grenzen

- Niets is op echte hardware afgedrukt. De harssteunen zijn nieuw en nog niet bewezen.
- Wind-, aardbevings-, beton- en eindige-elementenresultaten zijn controlemiddelen voor een ingenieur, gecontroleerd tegen gesloten formules, niet tegen een echt gebouw.
- Scan naar BIM is getest op een synthetisch gebouw, niet op een echte scan, en vindt alleen rechthoekige ruimten.
- Collada is hier niet in Blender of Google Earth geopend.
- De verlichtingsschatting is gecontroleerd tegen onze eigen tracering, niet tegen andere verlichtingsprogramma's.
- De Zuid-Afrikaanse getallen zijn niet geverifieerd.
- Wandaansluitstijlen (stomp, verstek, haaks afsnijden) en laagprioriteit zijn niet gebouwd; hoeken worden met verstek gemaakt.
- Talen anders dan Engels zijn machineconcepten.

Al het andere staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Eerdere wijzigingen staan in de notities van 0.8 en 0.8.1 verderop op deze pagina.

## Eerder: 0.8 en 0.8.1

Dit is wat er in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) is veranderd, vergeleken met 0.7. BimCraft kan nu vragen over een gebouw beantwoorden en het testen, met mensen, geluid, water, wind en aardbevingen, en het tekenen met meer gereedschappen; 0.8.1 is een herstelversie.

### Nieuw

**Het gebouw testen**

- **Mensen in het gebouw.** De sectie {{ui:Mensen in het gebouw}} van het linkerpaneel laat een evacuatie of de aankomst op een gewone dag door uw ruimten, deuren en trappen lopen. U ziet de wachtrijen waar het gebouw smaller wordt, de langste wandeling naar een uitgang vanuit elke ruimte, en hoe lang de laatste persoon erover doet. Vink {{ui:Dicht}} op een deur aan om te zien wat er verandert, en vink {{ui:Toon de mensen in de 3D-weergave}} aan om de wandelaars te zien. De bevindingen gaan naar Problemen. Een grof menigtemodel voor ontwerpbeslissingen, geen brandveiligheidscertificaat. Zie [Mensen door het gebouw laten lopen](topic:people-in-the-building).
- **Ruimteakoestiek, en horen.** De sectie {{ui:Ruimteakoestiek}} geeft de nagalmtijd van elke ruimte per octaafband (Sabine en Eyring) uit haar grootte en de afwerkingen die u kiest, en met een eigen doel zegt hij hoeveel absorptie zou voldoen. {{ui:In deze ruimte afspelen}} speelt een stem, een klap, getokkelde noten of uw eigen geluidsbestand af, via een impulsrespons die voor de ruimte is berekend. De absorptiewaarden zijn typische gepubliceerde waarden die u kunt vervangen. Zie [Ruimteakoestiek](topic:room-acoustics).
- **Overstroming, wind en aardbevingen afspelen.** {{ui:Gevarenweergave}} speelt water dat door de ruimten stijgt, winddruk op elke verdieping, en een aardbeving die de verdiepingen doet schudden, op een plattegrond of een gevel met een tijdschuif. Eenvoudige modellen met hun aannames op het paneel; geen code-controle. Zie [Een overstroming, wind of aardbeving afspelen](topic:hazard-playback).
- **Wat in vijftig jaar slijt.** {{ui:Levenscyclusweergave}} toont de ramen, deuren, afwerkingen en het dak met elk een levensduur, de jaren waarin ze worden vervangen en, wanneer u een kosten per eenheid typt, de kosten per jaar en de contante waarde ervan. {{ui:De planning opslaan (CSV)}} schrijft het uit. De levensduren zijn planningscijfers. Zie [Zien wat in vijftig jaar slijt](topic:life-cycle-view).
- **Betonnen en aardbevingscontroles.** De blokken {{ui:Betonnen staven}} en {{ui:Seismische belastingen}} van het tabblad {{ui:Analyse}} controleren betonnen balken en kolommen volgens ACI 318-19 en maken equivalente horizontale krachten volgens ASCE 7-22 op stijve vloeren, met verdiepingsdrift. Voor een ingenieur om na te kijken. Zie [Betonnen staven controleren en aardbevingsbelastingen maken](topic:concrete-and-seismic).

**Controleren en rapporteren**

- **Controleren tegen een IDS.** Laad het `.ids`-bestand dat een opdrachtgever u heeft gegeven en zie elk element dat er niet aan voldoet in Problemen, voordat u de IFC levert. Open {{ui:Controleren met een IDS}} onder {{ui:Modelcontroles}}. Zie [Een model tegen een IDS van de opdrachtgever controleren](topic:check-against-ids).
- **Labels en staten.** Definieer uw eigen labels, zet ze op veel elementen tegelijk en maak staten waarvan de kolommen, filters en groepen ze lezen; de labels worden in de IFC bewaard. Zie [Labels en staten](topic:tags-and-schedules).
- **Documenten uit het model.** {{ui:Documenten uit het model}} vult een specificatiesjabloon in uit het geopende IFC en slaat het op als PDF, Word-document of Markdown. Zie [Documenten uit het model](topic:documents-from-the-model).
- **Een scan met het model vergelijken.** Met een puntenwolk open, beoordeelt {{ui:Vergelijken}} elk element als gebouwd, deels gebouwd, ontbrekend of niet bereikt, en toont het percentage gebouwd. Zie [Een scan met het model vergelijken](topic:compare-scan-with-model).
- **Koolstof en kosten.** Het paneel Koolstof telt de ingebedde koolstof op uit een factortabel die u kunt bewerken, en het paneel Kosten spreidt prijzen over het 4D-schema. De factoren die bij BimCraft komen, zijn algemeen en als niet-gecontroleerd gemarkeerd. Zie [Ingebedde koolstof en kosten](topic:embodied-carbon-and-5d-cost).
- **Elke kaartprojectie.** {{ui:Meten}} › {{ui:Coördinatenstelsel…}} neemt een EPSG-nummer, een UTM-zone, een naam of uw eigen projectiedefinitie. Zie [Georefereren met elke projectie](topic:georeference-any-projection).

**Tekenen en bewerken**

- **Verplaatsen, Uitlijnen en Verdelen.** Onder {{ui:Bouwen}}; {{key:Shift+M}} start Verplaatsen (gewoon {{key:M}} is nog steeds Meten). Verplaatsen kopieert terwijl u gaat met {{key:C}}, elke stap is één keer ongedaan maken, en het reist mee in een Live TeamWork-sessie. Zie [Verplaatsen, kopiëren, uitlijnen en verdelen](topic:move-align-distribute).
- **Afbeeldingen onder de plattegrond.** {{ui:Bouwen}} › {{ui:Afbeelding}} plaatst een PNG, JPEG of WebP onder de plattegrond van een niveau of op een verticaal vlak. Stel de schaal in met twee punten, en verplaats, draai, vervaag en vergrendel hem. Een gebied dat in MarkupCraft is gekopieerd, wordt in de schaal van zijn blad geplakt. Zie [Een afbeelding onder de plattegrond zetten](topic:pictures-as-backgrounds).
- **Wanden uit een scan.** Met een scan open, komen wanden, deuren en ruimten als voorstellen die u één voor één behoudt of afwijst, in één stap ongedaan maken. Alleen wanden in twee loodrechte richtingen worden gevonden. Zie [Een scan in wanden omzetten](topic:scan-to-walls).
- **Overtrekken, pennen en een trap uit een schets.** {{ui:Overtrekken}} toont een andere verdieping gestippeld onder de plattegrond, {{ui:Pennen}} geeft wanden, deuren en ramen hun eigen lijndikte in één weergave, en {{ui:Trap schetsen}} maakt van een loopgang een trap. Een Wavefront OBJ-mesh opent. Zie [Een niveau overtrekken, pennen en een trap uit een schets](topic:trace-pens-stairs-obj).
- **Gebouwen rond een adres.** De gebouwen en het perceel die de Adres naar terrein van CivilCraft heeft gevonden, komen als suggesties; u vinkt de aan die u wilt toevoegen. Zie [Starten vanaf het terrein van CivilCraft](topic:site-from-civilcraft).
- **Paneeltekeningen.** {{ui:Bouwen}} › {{ui:Paneeltekeningen}} construeert wanden, vloeren en daken in hout of lichtgewicht staal en slaat een snijlijst op als CSV en werktekeningen als PDF. Startwaarden, geen constructief ontwerp. Zie [Paneeltekeningen](topic:panel-drawings).
- **Symboolpalet en planten.** {{ui:Bouwen}} › {{ui:Symboolpalet}} zoekt elektrische en sanitaire symbolen op naam; de bron {{ui:Planten}} van de {{ui:Bibliotheek}} toont ongeveer 400 planten met plansymbolen. Zie [Symboolpalet](topic:symbol-palette) en [Een plant plaatsen](topic:plant-list).

**Leidingen, kanalen en energie**

- **Split, VRF en fan coils.** Binnen- en buitenunits met hun aansluitingen, en koelmiddelleidingen gedimensioneerd uit een tabel met typische voorbeeldwaarden die u kunt wijzigen. Zie [Split, VRF en fan coils](topic:split-vrf-fan-coils).
- **Berekeningen.** Het paneel Berekeningen controleert toevoerleidingen en kanaalmaten met drukverlies, leidt kabels door kabelgoten en leidingen en toont hun vulling, en berekent verlichtingssterkte uit IES- of EULUMDAT-bestanden. Standaarden zijn aangegeven; typ de waarden van uw voorschrift. Zie [Leiding-, kanaal-, kabel- en lichtberekeningen](topic:mep-calculations).
- **PCF-bestanden.** De {{ui:Export PCF}} van het leidingsgereedschap schrijft de runs voor leidingspanningsprogramma's en isometrieprogramma's, en een teruggelezen PCF-bestand tekent zijn leiding. Zie [Bestanden met leidingcomponenten](topic:piping-pcf).
- **Zonnepanelen (PV).** Plaats rijen op daken of op de grond, schaduw ze uit het model, schat de jaarlijkse energie, controleer strings en maak gegevens voor een eenlijnsschema. De startmodule en verliezen zijn algemeen. Zie [Zonnepanelen (PV)](topic:solar-pv).
- **EnergyPlus-bestand.** Het paneel Controleren met EnergyPlus schrijft het model als een IDF om in uw eigen EnergyPlus te draaien. Draaien in de browser vereist een build die u zelf host en waarvan u het adres typt; BimCraft levert hem niet mee. Zie [Verwarming en koeling controleren met EnergyPlus](topic:check-with-energyplus).

**Afbeeldingen en bestanden**

- **Kies de renderengine.** {{ui:Renderen}} heeft een keuze {{ui:Engine}}. Onze twee ingebouwde engines (Snel en Padtracer) blijven de standaard. {{ui:Openen in}} slaat de scène op als een USD- of glTF-bestand, en een Unreal-projectmap als een .zip; in CadCraft Studio kan een add-on een engine toevoegen. De Unreal-plug-in die het project opent, is niet uitgebracht. Zie [Kiezen welk programma de afbeelding tekent](topic:render-engines).
- **Ongedaan maken in Studio.** In CadCraft Studio vertelt BimCraft Studio elke voltooide stap, zodat Studio uw laatste stap kan ongedaan maken in welk venster u het laatst gebruikte. Zie [Ongedaan maken over apps heen](topic:undo-across-apps).
- **Add-ons in uw bestand.** Een IFC registreert welke add-ons erin hebben geschreven, en biedt de add-ons aan die u mist wanneer u het opent. Zie [Add-ons in uw bestand](topic:add-ons-in-your-file).

**In elke app**

- **Verbind uw AI.** Uw eigen assistent kan BimCraft aansturen via de verbinding van Studio en vragen over het model beantwoorden, zoals welke ruimten onder een bepaald oppervlak liggen. Studio heeft geen eigen AI. Zie [Laat een AI-assistent met uw model werken](topic:assistants).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Afbreken, 2 rijen of 1 rij; Afbreken blijft de standaard.
- **Invoerapparaten.** Instellingen voor trackpad, pen, 3D-muis, controller en MIDI worden door alle apps gedeeld.
- **Problemen en Live.** Het waarschuwingenpaneel en Live-sessies werken als voorheen, met de nieuwe controles hierboven die Problemen voeden.
- **Talen.** 54 talen, waarvan tien nieuw. Die anders dan Engels zijn machineconcepten die nog niet door een moedertaalspreker zijn nagekeken; help-onderwerpen zijn meestal Engels.

### Opgelost in 0.8.1

- **Lint + indeling van de Projectbrowser.** Invoegen › Cad importeren, Invoegen › Afbeelding en Beheren › Projecteenheden zeiden "Nog niet gebouwd in BimCraft". Afbeelding opent nu het gereedschap Afbeelding, Cad importeren opent {{ui:Bouwen}} › {{ui:Vanuit een tekening…}} (DWG, DXF, PDF of een scan), en Projecteenheden opent {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}. Verplaatsen en Uitlijnen draaien de gereedschappen Verplaatsen en Uitlijnen, Niveau opent {{ui:Niveaus toevoegen…}}, Fasen opent de sectie Renovatiefasen, en Materialen opent de materiaalbibliotheek.
- **Sectie DWG-klassen.** Die werd als het verkeerde type gelezen; opgelost in BimCraft en de andere apps die DWG lezen.
- **Taal tijdens het draaien.** Studio en de verpakte edities kunnen nu van taal wisselen zonder opnieuw te starten. Dit is nog niet op elk platform getest; laat ons weten als de taal niet verandert.
- **Archicad-bundelscript.** `archicad_bundle.py`, een apart downloadbestand, vindt nu het pad van Archicad, bewaakt de map tot 20 seconden en probeert het opnieuw naast de bundel.

### Nog niet in deze versie

- **Veiligheids- en ontwerphulpmiddelen.** Mensen in het gebouw heeft geen loopafstandslimiet uit een bouwvoorschrift (u typt de limiet) en is niet met de hand op een echte plattegrond gecontroleerd. De akoestiek-, levenscyclus- en gevarencijfers zijn planningswaarden, geen code-controle.
- **Klimaatscenario's en EnergyPlus.** Geen ingebouwde klimaatscenario's: u kunt een scenariobestand laden voor de overstromingsberekening. De EnergyPlus-berekening in de browser maakt geen deel uit van deze uitgave.
- **Lintindeling.** Materiaalhoeveelheden blijft "Nog niet gebouwd" omdat BimCraft geen materiaalhoeveelheidslijst heeft, en 54 andere grijze lintgereedschappen hebben nog geen BimCraft-gereedschap erachter.
- **Ondertekening en platforms.** De Windows-installers en het macOS-.dmg zijn niet ondertekend, dus SmartScreen toont {{ui:Meer informatie}}, daarna {{ui:Toch uitvoeren}}, en macOS vraagt om met de rechtermuisknop te klikken en daarna {{ui:Openen}}. De iPad- en iPhone-versie is niet opnieuw gebouwd voor 0.8.1.
- **Testen op echte pagina's.** Enkele oudere BimCraft-browsertests slagen nog steeds niet op onze testpagina, zoals vóór 0.8.1.

Al het andere staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
