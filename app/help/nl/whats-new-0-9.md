---
title: Wat is er nieuw in 0.9 (eerder)
summary: Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen op raster, niveaus onder het maaiveld, rastermaten en Meten op de plattegrond, dubbele weergaven met werkstijlen en pennentabellen, Rapporteren als, Collada- en Google Earth-export, Scan to BIM, wind- en seismische analyse, add-ons voor harsprinten.
keywords: wat is er nieuw 0.9, eerdere uitgave, wat is er nieuw, 0.9, release notes, wandvormen, rechthoek, veelhoek, boog, lijnen kiezen, contour overtrekken, verschuiven, aansluiten, kaderuitrekken, uitlijnen en vergrendelen, wand splitsen, opening, weer samenvoegen, vergrendelen op raster, groeien vanaf, meten vanaf, niveau eronder toevoegen, kelder, niveaucommando, rastermaten, meten op de plattegrond, werkstijl, dubbele weergave, eigen kopie, gekoppelde weergave, pennentabel, afdrukken zoals getoond, rapporteren als, schaal typen, SVG importeren, plaatsen in plattegrond, plaatsen in model, collada, dae, kmz, google earth, scan naar BIM, windbelasting, seismisch, eindige elementen, documentenpaneel, harsprinten, changelog, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, evacuatie, mensen, wachtrijen, akoestiek, nagalm, impulsrespons, overstroming, wind, aardbeving, gevaar, levenscyclus, levensduur, ids, tags, staten, verplaatsen, uitlijnen, verdelen, afbeelding, achtergrond, scan naar wanden, terrein uit civilcraft, paneeltekeningen, houtskelet, zonne-energie, pv, splitsen, vrf, fan coil, leidingdimensionering, kabelgoot, verlichtingssterkte, beton, seismisch, scan vergelijken, epsg, projectie, documenten, sjabloon, co2, kosten, energyplus, renderengine, openen in, usd, glb, unreal, ongedaan maken, add-ons, pcf, symbolen, planten, overtrekken, pennen, lint, projectbrowser, indeling
from: 816df7f8
---

Dit is wat er in BimCraft 0.9 is veranderd, vergeleken met 0.8.1. De twee grote thema's zijn een echt wandgereedschap en weergaven die zich gedragen zoals mensen die van de grote BIM-programma's komen verwachten. Daaromheen komen Collada-export, assistenten die elektrische apparaten kunnen plaatsen, Scan to BIM, en wind-, seismische en eindige-elementenwerk in het tabblad {{ui:Analyse}}.

## Nieuw

### Wanden

- **Hele vormen tekenen.** Kies in {{ui:Tekenen}} {{ui:Vormen}} (of kies een vorm in de lijst Vorm van de rij Wand) voor een rechthoek, een gedraaide rechthoek, een veelhoek van 3 tot 64 zijden, een boog op middelpunt, een raakboog, wanden op gekozen lijnen, of wanden rond een gesloten gebied waarin u klikt. Een rechthoek bestaat uit vier wanden met vier aaneengesloten hoeken en één stap ongedaan maken. Zie [Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen](topic:wall-tools).
- **Vooraf instellen, achteraf wijzigen.** De rij Wand heeft {{ui:Verschuiving}} en {{ui:Aansluiten}} (schakel uit om vrijstaande wanden te tekenen). Daarna gebruikt u {{ui:Verschuiving}}, {{ui:Kaderuitrekken}} en {{ui:Uitlijnen en vergrendelen}} op getekende wanden. Een verplaatste of uitgerekte wand behoudt zijn deuren, ramen en maten. Elk recept is één stap ongedaan maken.
- **Wanden doorsnijden.** {{ui:Splitsen}}, {{ui:Opening}}, {{ui:Vrije uiteinden}}, {{ui:Segment verwijderen}} en {{ui:Weer samenvoegen}} snijden een wand door bij een klik of waar een andere wand hem kruist. Een snede door een deur wordt geweigerd. Zie [Wandvormen, splitsen, verschuiven, uitrekken en vergrendelen](topic:wall-tools).
- **Wanden op rasterlijnen vergrendelen.** Selecteer een wand langs een rasterlijn en vink {{ui:Vergrendelen op raster}} aan in {{ui:Eigenschappen}}. Met het gereedschap {{ui:Raster}} aan typt u een afstand in {{ui:Verplaatsen met}} voor een gekozen lijn, en de vergrendelde wanden volgen in één stap ongedaan maken.
- **Eén wand vormgeven.** In {{ui:Eigenschappen}} van één wand kunt u de bovenkant of onderkant aan een dak, vloer of plafond koppelen, de contour in aanzicht bewerken, hem laten hellen, of een wandopening maken zonder deur of raam. Zie [Wandvorm](topic:wall-shape).
- **De lengte laat zien welk uiteinde blijft.** {{ui:Groeien vanaf}} bepaalt of het begin, het einde of het midden blijft staan wanneer u de lengte wijzigt.
- **Lengte en de maat op de plattegrond kloppen.** {{ui:Meten vanaf}} (hartlijn, binnenvlak of buitenvlak) stuurt zowel het veld Lengte als de wandmaten op de plattegrond aan. Het begint op de hartlijn, dus de wandmaten op de plattegrond geven nu de hartlijn aan waar ze voorheen het buitenvlak aangaven. Wijzig het in de rij Wand, in {{ui:Eigenschappen}} of in {{ui:Instellingen}} › BimCraft › {{ui:Wanden}}.

### Niveaus, rasters en meten

- **Een niveau eronder toevoegen.** {{ui:Een niveau eronder toevoegen}} in het paneel {{ui:Niveaus}} voegt een niveau onder het laagste toe, even hoog als dat, op een negatieve hoogte (Niveau -1, Niveau -2). Niets anders verschuift. {{ui:Niveaus toevoegen…}} accepteert nu negatieve hoogten. Typ LEVEL, LEVELS, STOREY of STOREYS op de opdrachtregel om {{ui:Niveaus toevoegen…}} te openen, en er is een knop {{ui:Niveaus}} in de menu's en lintstabbladen. Zie [Terreinen, gebouwen en niveaus](topic:site-building-and-levels).
- **Rastermaten op de plattegrond.** Met het gereedschap {{ui:Raster}} aan vinkt u {{ui:Maten}} aan om de afstand tussen naburige lijnen en de totale maat voorbij de bolletjes op de plattegrond van elk niveau te tekenen. Zie [Een raster bematen](topic:grid-dimensions).
- **Meten op de plattegrond.** {{ui:Meten}} in de groep {{ui:Tekenen}} geeft een afstand met de X- en Y-verschillen tussen twee klikken. Er wordt niets in het model opgeslagen. Zie [Meten op de plattegrond](topic:measure-on-the-plan).
- **Meerdere kolommen tegelijk wijzigen.** Kies kolommen samen met een wand, dan toont de keuze elke soort met {{ui:Alleen deze behouden}}. Eén klik behoudt de kolommen en toont hun gedeelde velden.
- **Eén weergave-eenheid overal.** Coördinaten, metingen, doorsneden, bladschalen, de belastingen en resultaten van het tabblad Frame en de tekst van Problemen volgen de eenheid die u kiest. Exports blijven SI.

### Weergaven, bladen en afdrukken

- **Werkstijl.** {{ui:Instellingen}} › BimCraft › {{ui:Werkstijl}} kiest tussen elke weergave met eigen aanwijzingen en pennentabellen, of ze delen. Zie [Werkstijl, gedupliceerde weergaven, pennen op papier, Rapporteren als en sjablonen](topic:working-style).
- **Een weergave dupliceren.** Plattegronden, plafondplattegronden, aanwijzingen, gevels en doorsneden kunnen worden gedupliceerd als {{ui:Eigen kopie}} of {{ui:Gekoppeld}}; {{ui:Eigen kopie maken}} maakt een gekoppelde weergave onafhankelijk. Zie [Werkstijl, gedupliceerde weergaven, pennen op papier, Rapporteren als en sjablonen](topic:working-style).
- **Afdrukken zoals getoond, of via een pennentabel.** Pennenoverschrijvingen worden met de weergave in de IFC bewaard, en bladen en PDF's tekenen ze zoals het scherm doet. Hetzelfde onderwerp behandelt pennentabellen.
- **Rapporteren als.** {{ui:Rapporteren als}} in {{ui:Eigenschappen}} schrijft een vloer die als weg is getekend, een wand als paneel of een dak als helling naar de IFC als de klasse die u kiest, en telt het zo mee in staten, Hoeveelheden, Zoeken, Kleur op en Problemen.
- **Bewerken in gevels en doorsneden.** Teken en verplaats wanden, openingen, niveaus, maten en notities direct in een gevel of doorsnede, met uw eigen bladformaten en titelblokken. Zie [Bewerken in gevels en doorsneden](topic:edit-in-elevations).
- **Bladen.** Elk blad kan liggend of staand zijn. Een vak {{ui:Typ een schaal}} staat naast de schaallijst op elke geplaatste weergave (1:64, 2:1, 1/4" = 1'). U kunt een geplaatste tekening slepen of met de pijltjestoetsen verschuiven, en {{ui:Formaten…}} › {{ui:SVG importeren…}} maakt van uw eigen bladontwerp een titelblok met velden die per blad worden ingevuld.
- **Bibliotheekcredits op een blad.** Een tekenset met bibliotheekitems krijgt een staat Bibliotheekcredits die u op elk blad kunt plaatsen. Zie [Bibliotheekcredits](topic:library-credits).

### Bibliotheek: plaatsen

- **Plaatsen volgt de weergave.** In de plattegrondweergave toont de bibliotheek {{ui:In plattegrond plaatsen}}; in 3D toont ze {{ui:In model plaatsen}}; in {{ui:Splitsen}} toont ze een gesplitste knop met {{ui:In plattegrond plaatsen}} als hoofdactie. Beide manieren schrijven hetzelfde IFC-element. U kunt ook een bibliotheekkaart naar de plattegrond of de 3D-weergave slepen; met een pen of vinger houdt u ingedrukt en sleept u daarna. Zie [Plaatsen vanuit de bibliotheek](topic:place-from-library).

### Bestanden en assistenten

- **Collada en Google Earth.** {{ui:Collada}} op de werkbalk (menu Bestand in de menustijlen) schrijft een .dae, of een .kmz op de plaats waar het model op de kaart staat. Zie [Het model exporteren als Collada of voor Google Earth](topic:collada).
- **Assistenten kunnen elektrische apparaten plaatsen.** Uw verbonden assistent heeft nieuwe hulpmiddelen om apparaten toe te voegen, weer te geven, te wijzigen en te verwijderen, en om lampen in te stellen. Assistenten blijven uit totdat u ze aanzet in {{ui:Instellingen}}. Zie [Een AI-assistent met uw model laten werken](topic:assistants).
- **Scan to BIM (add-on).** Standaard uit, en het vereist de add-on Puntenwolken. Het stelt vloeren, wanden, deuren en ramen voor uit een scan, met de gemeten afwijking voor elk; accepteren is één stap ongedaan maken.

### Analyse

- **Wind- en seismische terreingegevens.** In het tabblad {{ui:Analyse}}: windbelastingen volgens ASCE 7-10 of 7-16 voor een stijf, omsloten gebouw, met een kracht op elke verdieping als belastinggevallen, en seismische terreingegevens met een USGS-opzoeking en het ontwerpspectrum.
- **Constructieve vervolgstappen en eindige elementen.** Betoncontroles volgens ACI 318-19, equivalente horizontale krachten volgens ASCE 7-22, verdiepingsdrift, vloeren en wanden als platen, en belastingcombinaties volgens ASCE 7 en EN 1990. Onze eigen eindige-elementenengine doet schalen, tetraëders en modale analyse. Zie [Betonnen staven controleren en seismische belastingen maken](topic:concrete-and-seismic) en [Raamanalyse](topic:frame-analysis).

### Andere add-ons en documenten

- **Binnenverlichting (add-on).** Plaatst armaturen en schrijft de lux als getallen in de plattegrond van elk niveau, met een schatting van verblinding en een afdrukbaar rapport.
- **Paneel Documenten.** {{ui:Bestand}} › {{ui:Documenten…}} heeft uit- en inchecken met een vergrendelbestand, revisieletters, uitgiftestatussen en een geschiedenis.
- **Regio's en staal.** Zuid-Afrikaanse tekenings- en bouwregelgevingpakketten in de add-on Voorschriften, en 976 Britse staalprofielen in de gedeelde doorsnedetabel.
- **Gratis add-ons voor harsprinten.** Slicer, steunen en raft, belichtingstest, en de bestandsformaten GOO, SL1, Chitubox en Anycubic, allemaal standaard uit.

## In elke app

- Wanneer u een knop of bediening aanwijst, verschijnt een Bootstrap-tooltip.
- De startaanwijzing op een lege tekenruimte heeft een sluitknop; BimCraft onthoudt dat ze is gesloten.
- Een tabbalk van een paneel die niet past, scrolt nu, in plaats van afgesneden te worden.
- Met een document open luidt het tabblad van de browser "<document> - BimCraft | CadCraft".
- In {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Indeling}} zijn de indelingen een keuzelijst met tweeregelige opties.
- De taallijst in {{ui:Instellingen}} biedt meer talen dan in 0.8; talen anders dan Engels zijn machinale concepten.

## Opgelost

- **Verplaatsen werkt op trappen,** en op hellingen, leuningen, dakvlakken, vrijstaande apparaten, afbeeldingen en paden.
- **Een wand slepen scheeft de ruimte niet meer.** De middelste greep verplaatst de wand vierkant ten opzichte van zichzelf, en de hoeken glijden langs de aaneengesloten wanden. Houd {{key:Mod}} ingedrukt voor het oude vrije verplaatsen; {{ui:Haaks maken}} brengt 90 graden terug.
- **Een dikte- of typewijziging op een aangesloten knooppunt** houdt nu de hoek gesloten bij een L, een T, een knooppunt van drie wanden en naast een gebogen wand.
- **Een groep ruimten verplaatsen of kopiëren** houdt aangesloten wanden buiten de groep aangesloten.
- **Opnieuw behoudt de identiteit van een wandmaat.**
- **Een wand kiezen met {{ui:Tekenen}} uit** geeft niet langer een fout in {{ui:Eigenschappen}}.
- **Renderen valt terug op WebGL** als de GPU niet kan starten, in plaats van te stoppen.
- **De EnergyPlus-controle kan weer worden ingeschakeld.**
- **Documenten opent als gecentreerd dialoogvenster.** {{key:Esc}}, het kruisje of een klik op de verduisterde pagina sluit het.
- **De knoppen {{ui:Plattegrond}}, {{ui:Splitsen}} en {{ui:3D}} verschijnen** zodra een model open is, niet pas nadat Tekenen eenmaal aan is gezet.

## Eerlijke beperkingen

- Niets is op echte hardware afgedrukt. De harssteunen zijn nieuw en nog niet bewezen.
- Wind-, seismische, beton- en eindige-elementresultaten zijn controlehulpmiddelen voor een ingenieur, getoetst aan gesloten formules, niet aan een echt gebouw.
- Scan to BIM is getest op een synthetisch gebouw, niet op een echte scan, en vindt alleen rechtlijnige ruimten.
- Collada is hier niet geopend in Blender of Google Earth.
- De verlichtingsschatting is getoetst aan onze eigen berekening, niet aan andere verlichtingsprogramma's.
- De Zuid-Afrikaanse getallen zijn niet geverifieerd.
- Wandverbindingsstijlen (stomp, verstek, vierkant afwerken) en laagprioriteit zijn niet gebouwd; hoeken zijn verstek.
- Talen anders dan Engels zijn machinale concepten.

Al het overige staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Eerdere wijzigingen staan in de notities over 0.8 en 0.8.1 verderop op deze pagina.

## Eerder: 0.8 en 0.8.1

Dit is wat er in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02) is veranderd, vergeleken met 0.7. BimCraft kan nu vragen over een gebouw beantwoorden en het testen, met mensen, geluid, water, wind en aardbevingen, en het tekent het met meer hulpmiddelen; 0.8.1 is een herstelversie.

### Nieuw

**Het gebouw testen**

- **Mensen in het gebouw.** Het gedeelte {{ui:Mensen in het gebouw}} van het linkerpaneel laat een evacuatie of de normale aankomst van een dag door uw ruimten, deuren en trappen lopen. U ziet de wachtrijen waar het gebouw versmalt, de langste loopafstand naar een uitgang vanuit elke ruimte, en hoe lang de laatste persoon erover doet. Vink {{ui:Dicht}} aan op een deur om te zien wat er verandert, en vink {{ui:Toon de mensen in de 3D-weergave}} aan om de lopers te volgen. De bevindingen gaan naar Problemen. Een grof menigtemodel voor ontwerpbeslissingen, geen brandveiligheidscertificaat. Zie [Mensen door het gebouw laten lopen](topic:people-in-the-building).
- **Ruimteakoestiek, en horen wat het doet.** Het gedeelte {{ui:Ruimteakoestiek}} geeft voor elke ruimte de nagalmtijd per octaafband (Sabine en Eyring), uit de grootte en de afwerkingen die u kiest, en met een eigen doel zegt het hoeveel absorptie nodig is om daaraan te voldoen. {{ui:In deze ruimte afspelen}} speelt een stem, een klap, getokkelde noten of uw eigen geluidsbestand af, via een impulsrespons die voor de ruimte is berekend. De absorptiegetallen zijn gangbare gepubliceerde waarden die u kunt vervangen. Zie [Ruimteakoestiek](topic:room-acoustics).
- **Overstroming, wind en aardbeving afspelen.** {{ui:Gevarenweergave}} laat water door de ruimten stijgen, winddruk op elke verdieping zien, en een aardbeving die de verdiepingen laat schudden, op een plattegrond of een gevel met een tijdschuif. Eenvoudige modellen met hun aannames op het paneel; geen voorschriftencontrole. Zie [Een overstroming, wind of aardbeving afspelen](topic:hazard-playback).
- **Wat in vijftig jaar slijt.** {{ui:Levenscyclusweergave}} somt de ramen, deuren, afwerkingen en het dak op, elk met een levensduur, de jaren waarin ze worden vervangen, en, als u een kosten per eenheid typt, de kosten per jaar en hun contante waarde. {{ui:De planning opslaan (CSV)}} schrijft die weg. De levensduren zijn planningsgetallen. Zie [Zien wat in vijftig jaar slijt](topic:life-cycle-view).
- **Beton- en seismische controles.** De blokken {{ui:Betonnen staven}} en {{ui:Seismische belastingen}} van het tabblad {{ui:Analyse}} controleren betonnen balken en kolommen volgens ACI 318-19 en berekenen equivalente horizontale krachten volgens ASCE 7-22 op stijve vloeren, met verdiepingsdrift. Voor een ingenieur om te controleren. Zie [Betonnen staven controleren en seismische belastingen maken](topic:concrete-and-seismic).

**Controleren en rapporteren**

- **Controleren met een IDS.** Laad het `.ids`-bestand dat een opdrachtgever u gaf en zie in Problemen elk element dat er niet aan voldoet, voordat u de IFC oplevert. Open {{ui:Controleren met een IDS}} onder {{ui:Modelcontroles}}. Zie [Een model controleren aan de IDS van een opdrachtgever](topic:check-against-ids).
- **Tags en staten.** Definieer uw eigen tags, stel ze in op veel elementen tegelijk, en maak staten waarvan de kolommen, filters en groepen ze lezen; de tags worden in de IFC bewaard. Zie [Tags en staten](topic:tags-and-schedules).
- **Documenten uit het model.** {{ui:Documenten uit het model}} vult een specificatiesjabloon uit de geopende IFC in en slaat het op als PDF, Word-document of Markdown. Zie [Documenten uit het model](topic:documents-from-the-model).
- **Een scan vergelijken met het model.** Met een geopende puntenwolk beoordeelt {{ui:Vergelijken}} elk element als gebouwd, deels gebouwd, ontbrekend of niet bereikt, en toont het percentage gebouwd. Zie [Een scan met het model vergelijken](topic:compare-scan-with-model).
- **CO2 en kosten.** Het paneel CO2 telt de belichaamde CO2 op uit een factorentabel die u kunt bewerken, en het paneel Kosten verdeelt prijzen over de 4D-planning. De factoren die bij BimCraft komen zijn generiek en als ongecontroleerd gemarkeerd. Zie [Belichaamde CO2 en kosten](topic:embodied-carbon-and-5d-cost).
- **Elke kaartprojectie.** {{ui:Meten}} › {{ui:Coördinatenstelsel…}} neemt een EPSG-nummer, een UTM-zone, een naam of uw eigen projectiedefinitie. Zie [Georeferentie met elke projectie](topic:georeference-any-projection).

**Tekenen en bewerken**

- **Verplaatsen, Uitlijnen en Verdelen.** Onder {{ui:Build}}; {{key:Shift+M}} start Verplaatsen (gewoon {{key:M}} is nog steeds Meten). Verplaatsen kopieert onderweg met {{key:C}}, elke stap is één keer ongedaan maken, en het reist mee in een Live TeamWork-sessie. Zie [Verplaatsen, kopiëren, uitlijnen en verdelen](topic:move-align-distribute).
- **Afbeeldingen onder de plattegrond.** {{ui:Build}} › {{ui:Afbeelding}} plaatst een PNG, JPEG of WebP onder de plattegrond van een niveau of op een verticaal vlak. Stel de schaal in met twee punten, en verplaats, draai, vervaag en vergrendel hem. Een gebied dat in MarkupCraft is gekopieerd, wordt in de schaal van zijn blad geplakt. Zie [Een afbeelding onder de plattegrond zetten](topic:pictures-as-backgrounds).
- **Wanden uit een scan.** Met een geopende scan komen wanden, deuren en ruimten als voorstellen die u één voor één behoudt of afwijst, in één stap ongedaan maken. Alleen wanden in twee loodrechte richtingen worden gevonden. Zie [Een scan omzetten in wanden](topic:scan-to-walls).
- **Overtrekken, pennen en trap schetsen.** {{ui:Overtrekken}} toont een ander niveau gestreept onder de plattegrond, {{ui:Pennen}} geeft wanden, deuren en ramen hun eigen lijndikte in één weergave, en {{ui:Trap schetsen}} zet een looplijn om in een trap. Een Wavefront OBJ-mesh wordt geopend. Zie [Een niveau overtrekken, pennen en een trap uit een schets](topic:trace-pens-stairs-obj).
- **Gebouwen rond een adres.** De gebouwen en het perceel die de functie Adres naar terrein van CivilCraft vond, komen als suggesties binnen; u vinkt aan welke u toevoegt. Zie [Starten vanaf het terrein van CivilCraft](topic:site-from-civilcraft).
- **Paneeltekeningen.** {{ui:Build}} › {{ui:Paneeltekeningen}} maakt het houtskelet van wanden, vloeren en daken in hout of licht staal, en slaat een snijlijst op als CSV en werkplaatstekeningen als PDF. Startwaarden, geen constructief ontwerp. Zie [Paneeltekeningen](topic:panel-drawings).
- **Symboolpalet en planten.** {{ui:Build}} › {{ui:Symboolpalet}} vindt elektrische en sanitaire symbolen op naam; de bron {{ui:Planten}} van de {{ui:Bibliotheek}} somt ongeveer 400 planten met plattegrondsymbolen op. Zie [Symboolpalet](topic:symbol-palette) en [Een plant plaatsen](topic:plant-list).

**Leidingen, kanalen en energie**

- **Gesplitst, VRF en fancoils.** Binnen- en buitenunits met hun aansluitingen, en koudemiddelleidingsets gedimensioneerd uit een tabel met typische voorbeeldwaarden die u kunt wijzigen. Zie [Gesplitst, VRF en fancoils](topic:split-vrf-fan-coils).
- **Berekeningen.** Het paneel Berekeningen controleert de dimensies van toevoerleidingen en kanalen met drukverlies, leidt kabels door kabelbanen en buizen en toont hun vulling, en berekent verlichtingssterkte uit IES- of EULUMDAT-bestanden. Standaardwaarden zijn gelabeld; typ de waarden van uw voorschrift. Zie [Berekeningen voor leidingen, kanalen, kabels en licht](topic:mep-calculations).
- **PCF-bestanden.** Het leidingsgereedschap met **PCF exporteren** schrijft de leidingtrajecten voor programma's voor leidingspanning en isometrie, en een teruggelezen PCF-bestand tekent zijn leiding. Zie [PCF-componentbestanden voor leidingen](topic:piping-pcf).
- **Zonne-PV.** Plaats arrays op daken of op de grond, beschaduw ze uit het model, schat de jaarlijkse energie, controleer strings en maak gegevens voor een eendraadschema. De startmodule en verliezen zijn generiek. Zie [Zonne-PV](topic:solar-pv).
- **EnergyPlus-bestand.** Het paneel Controleren met EnergyPlus schrijft het model als IDF om in uw eigen EnergyPlus te draaien. Draaien in de browser vereist een build die u zelf host en waarvan u het adres typt; BimCraft levert die niet mee. Zie [Verwarming en koeling controleren met EnergyPlus](topic:check-with-energyplus).

**Afbeeldingen en bestanden**

- **Kies de renderengine.** {{ui:Renderen}} heeft een keuze {{ui:Engine}}. Onze twee ingebouwde engines (Fast en Path tracer) blijven de standaard. {{ui:Openen in}} slaat de scène op als USD- of glTF-bestand, en een Unreal-projectmap als .zip; in CadCraft Studio kan een add-on een engine toevoegen. De Unreal-plug-in die het project opent is niet uitgebracht. Zie [Kies welk programma de afbeelding tekent](topic:render-engines).
- **Studio ongedaan maken.** Binnen CadCraft Studio meldt BimCraft elke afgeronde stap aan Studio, zodat Studio uw laatste stap kan ongedaan maken in het venster dat u als laatste gebruikte. Zie [Ongedaan maken over apps heen](topic:undo-across-apps).
- **Add-ons in uw bestand.** Een IFC onthoudt welke add-ons erin hebben geschreven, en biedt de add-ons die u niet hebt aan wanneer u hem opent. Zie [Add-ons in uw bestand](topic:add-ons-in-your-file).

**In elke app**

- **Verbind uw AI.** Uw eigen assistent kan BimCraft aansturen via de verbinding van Studio en vragen over het model beantwoorden, zoals welke ruimten onder een bepaald oppervlak liggen. Studio heeft zelf geen AI. Zie [Een AI-assistent met uw model laten werken](topic:assistants).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Omslaan, 2 rijen of 1 rij; Omslaan blijft de standaard.
- **Invoerapparaten.** Instellingen voor trackpad, pen, 3D-muis, controller en MIDI worden door alle apps gedeeld.
- **Problemen en Live.** Het waarschuwingspaneel en Live-sessies werken zoals voorheen, met de nieuwe controles hierboven die Problemen voeden.
- **Talen.** 54 talen, waarvan tien nieuw. Die anders dan Engels zijn machinale concepten die nog niet door een native speaker zijn gelezen; hulponderwerpen zijn meestal in het Engels.

### Opgelost in 0.8.1

- **Lint en indeling van de projectbrowser.** Invoegen › CAD importeren, Invoegen › Afbeelding en Beheren › Projecteenheden zeiden "Nog niet beschikbaar in BimCraft". Afbeelding opent nu het hulpmiddel {{ui:Afbeelding}}, CAD importeren opent {{ui:Build}} › {{ui:Vanuit een tekening…}} (DWG, DXF, PDF of een scan), en Projecteenheden opent {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}. Verplaatsen en Uitlijnen starten de hulpmiddelen Verplaatsen en Uitlijnen, Niveau opent {{ui:Niveaus toevoegen…}}, Fasen opent het gedeelte Renovatiefasen en Materialen opent de materiaalbibliotheek.
- **Gedeelte DWG-klassen.** Het werd als het verkeerde type gelezen; opgelost in BimCraft en de andere apps die DWG lezen.
- **Taal tijdens het draaien.** Studio en de verpakte edities kunnen nu van taal wisselen zonder herstart. Dit is nog niet op elk platform getest; laat ons weten als de taal niet verandert.
- **Archicad-bundelscript.** `archicad_bundle.py`, een apart te downloaden bestand, vindt nu het pad van Archicad, bewaakt de map gedurende maximaal 20 seconden en probeert het opnieuw naast de bundel.

### Nog niet in deze versie

- **Veiligheids- en ontwerphulpmiddelen.** Mensen in het gebouw heeft geen loopafstandsgrens uit een bouwvoorschrift (u typt de grens) en is niet met de hand op een echte plattegrond gecontroleerd. De akoestiek-, levenscyclus- en gevaarscijfers zijn planningswaarden, geen voorschriftencontrole.
- **Klimaatscenario's en EnergyPlus.** Geen ingebouwde klimaatscenario's: u kunt een scenariobestand laden voor de overstromingsberekening. De EnergyPlus-berekening in de browser maakt geen deel uit van deze uitgave.
- **Lintindeling.** Materiaalopmeting blijft "Nog niet beschikbaar", omdat BimCraft geen materiaalhoeveelheidslijst heeft, en 54 andere grijze lintknoppen hebben nog geen BimCraft-hulpmiddel erachter.
- **Ondertekening en platforms.** Windows-installatiebestanden en het macOS .dmg zijn niet ondertekend, dus SmartScreen toont {{ui:Meer informatie}}, daarna {{ui:Toch uitvoeren}}, en macOS vereist rechtsklikken en dan {{ui:Open}}. De iPad- en iPhone-build is niet opnieuw gebouwd voor 0.8.1.
- **Echte paginatests.** Sommige oudere browsertests van BimCraft falen nog op onze testpagina, zoals ze deden vóór 0.8.1.

Al het overige staat in [Wat nog niet beschikbaar is](topic:not-built-yet). Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
