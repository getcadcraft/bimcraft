---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: BimCraft voegt mensen toe die door het gebouw lopen, ruimteakoestiek die u kunt horen, afspeelfuncties voor overstroming, wind en aardbeving, een levenscyclusweergave van vijftig jaar, controles met een IDS, tags en staten, Verplaatsen, Uitlijnen en Verdelen, afbeeldingen onder de plattegrond, wanden uit een scan, paneeltekeningen, zonne-energie, split- en VRF-systemen, dimensionering van leidingen en kabels, controles van beton en aardbeving, elke kaartprojectie, een keuze van renderengine en ongedaan maken in Studio; 0.8.1 herstelt de grijze gereedschappen van de lintindeling.
keywords: wat is er nieuw, release notes, wijzigingslog, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, evacuatie, mensen, wachtrijen, akoestiek, nagalm, impulsrespons, overstroming, wind, aardbeving, gevaar, levenscyclus, levensduur, ids, tags, staten, verplaatsen, uitlijnen, verdelen, afbeelding, achtergrond, scan naar wanden, terrein uit civilcraft, paneeltekeningen, spanten, zonne-energie, pv, split, vrf, fan coil, leidingdimensionering, kabelgoot, verlichtingssterkte, beton, aardbeving, scan vergelijken, epsg, projectie, documenten, sjabloon, koolstof, kosten, energyplus, renderengine, openen in, usd, glb, unreal, ongedaan maken, add-ons, pcf, symbolen, planten, overtrekken, pennen, lint, projectbrowser, indeling
from: 87b03056
---

Dit is wat er is veranderd in BimCraft 0.8 (2026-11-01) en 0.8.1 (2026-11-02), vergeleken met 0.7. BimCraft kan nu vragen over een gebouw beantwoorden en het testen, met mensen, geluid, water, wind en aardbevingen, en het met meer gereedschappen tekenen; 0.8.1 is een herstelversie.

## Nieuw

### Het gebouw testen

- **Mensen in het gebouw.** Het gedeelte {{ui:Mensen in het gebouw}} van het linkerpaneel laat een evacuatie of de gewone aankomsten van een dag door uw ruimten, deuren en trappen lopen. U ziet de wachtrijen waar het gebouw smaller wordt, de langste loopafstand naar een uitgang vanuit elke ruimte en hoe lang de laatste persoon erover doet. Vink {{ui:Dicht}} aan bij een deur om te zien wat er verandert, en vink {{ui:Toon de mensen in de 3D-weergave}} aan om de lopers te volgen. De bevindingen gaan naar Problemen. Een grof menigtemodel voor ontwerpbeslissingen, geen brandveiligheidscertificaat. Zie [Mensen door het gebouw laten lopen](topic:people-in-the-building).
- **Ruimteakoestiek, en horen wat het doet.** Het gedeelte {{ui:Ruimteakoestiek}} geeft de nagalmtijd van elke ruimte per octaafband (Sabine en Eyring), op basis van de grootte en de afwerkingen die u kiest, en met een doel van uzelf vertelt het hoeveel absorptie nodig is om daaraan te voldoen. {{ui:In deze ruimte afspelen}} speelt een stem, een klap, getokkelde noten of uw eigen geluidsbestand af via een impulsrespons die voor de ruimte is berekend. De absorptiewaarden zijn typische gepubliceerde waarden die u kunt vervangen. Zie [Ruimteakoestiek](topic:room-acoustics).
- **Afspelen van overstroming, wind en aardbeving.** {{ui:Gevarenweergave}} laat water door de ruimten stijgen, winddruk op elke verdieping zien en een aardbeving die de verdiepingen doet schudden, op een plattegrond of een gevel met een tijdschuifbalk. Eenvoudige modellen met hun uitgangspunten op het paneel; geen controle op de bouwregelgeving. Zie [Een overstroming, wind of aardbeving afspelen](topic:hazard-playback).
- **Wat in vijftig jaar slijt.** {{ui:Levenscyclusweergave}} somt de ramen, deuren, afwerkingen en het dak op, elk met een levensduur, de jaren waarin ze worden vervangen en, wanneer u een kosten per eenheid invoert, de kosten per jaar en de contante waarde daarvan. {{ui:De planning opslaan (CSV)}} schrijft dit weg. De levensduren zijn planningscijfers. Zie [Zien wat er in vijftig jaar slijt](topic:life-cycle-view).
- **Controles van beton en aardbeving.** De blokken {{ui:Betonnen staven}} en {{ui:Seismische belastingen}} van het tabblad {{ui:Analyse}} controleren betonnen balken en kolommen volgens ACI 318-19 en maken equivalente horizontale krachten volgens ASCE 7-22 op stijve vloeren, met verdiepingsdrift. Ter controle door een ingenieur. Zie [Betonnen staven controleren en seismische belastingen maken](topic:concrete-and-seismic).

### Controleren en rapporteren

- **Controleren met een IDS.** Laad het `.ids`-bestand dat een opdrachtgever u heeft gegeven en zie in Problemen elk element dat er niet aan voldoet, voordat u het IFC levert. Open {{ui:Controleren met een IDS}} onder {{ui:Modelcontroles}}. Zie [Een model controleren aan de hand van de IDS van een opdrachtgever](topic:check-against-ids).
- **Tags en staten.** Definieer uw eigen tags, stel ze in bij veel elementen tegelijk en maak staten waarvan de kolommen, filters en groepen ze lezen; de tags worden bewaard in het IFC. Zie [Tags en staten](topic:tags-and-schedules).
- **Documenten uit het model.** {{ui:Documenten uit het model}} vult een specificatiesjabloon in met het geopende IFC en slaat het op als PDF, Word-document of Markdown. Zie [Documenten uit het model](topic:documents-from-the-model).
- **Een scan vergelijken met het model.** Met een puntenwolk open beoordeelt {{ui:Vergelijken}} elk element als gebouwd, deels gebouwd, ontbrekend of niet bereikt, en toont het percentage gebouwd. Zie [Een scan vergelijken met het model](topic:compare-scan-with-model).
- **Koolstof en kosten.** Het paneel Koolstof telt de ingebedde koolstof op uit een factorentabel die u kunt bewerken, en het paneel Kosten verdeelt prijzen over de 4D-planning. De factoren die bij BimCraft horen zijn generiek en gemarkeerd als ongecontroleerd. Zie [Ingebedde koolstof en kosten](topic:embodied-carbon-and-5d-cost).
- **Elke kaartprojectie.** {{ui:Meten}} › {{ui:Coördinatenstelsel…}} neemt een EPSG-nummer, een UTM-zone, een naam of uw eigen projectiedefinitie. Zie [Georefereren met elke projectie](topic:georeference-any-projection).

### Tekenen en bewerken

- **Verplaatsen, Uitlijnen en Verdelen.** Onder {{ui:Build}}; {{key:Shift+M}} start Verplaatsen (gewone {{key:M}} is nog steeds Meten). Verplaatsen kopieert onderweg met {{key:C}}, elke stap is één ongedaan maken, en het gaat mee in een Live TeamWork-sessie. Zie [Verplaatsen, kopiëren, uitlijnen en verdelen](topic:move-align-distribute).
- **Afbeeldingen onder de plattegrond.** {{ui:Build}} › {{ui:Afbeelding}} plaatst een PNG, JPEG of WebP onder de plattegrond van een niveau of op een verticaal vlak. Stel de schaal in met twee punten, en verplaats, draai, vervaag en vergrendel hem. Een gebied dat in MarkupCraft is gekopieerd, wordt geplakt op de schaal van het blad. Zie [Een afbeelding onder de plattegrond plaatsen](topic:pictures-as-backgrounds).
- **Wanden uit een scan.** Met een scan open komen wanden, deuren en ruimten als voorstellen die u één voor één behoudt of verwerpt, in één stap ongedaan maken. Alleen wanden in twee loodrechte richtingen worden gevonden. Zie [Een scan omzetten in wanden](topic:scan-to-walls).
- **Overtrekken, pennen en trap schetsen.** {{ui:Overtrekken}} toont een ander niveau gestippeld onder de plattegrond, {{ui:Pennen}} geeft wanden, deuren en ramen hun eigen lijndikte in één weergave, en {{ui:Trap schetsen}} zet een looplijn om in een trap. Een Wavefront OBJ-mesh wordt geopend. Zie [Een niveau overtrekken, pennen en een trap uit een schets](topic:trace-pens-stairs-obj).
- **Gebouwen rond een adres.** De gebouwen en het perceel die Adres naar terrein van CivilCraft heeft gevonden, komen als suggesties binnen; u vinkt aan welke u wilt toevoegen. Zie [Starten vanaf het terrein van CivilCraft](topic:site-from-civilcraft).
- **Paneeltekeningen.** {{ui:Build}} › {{ui:Paneeltekeningen}} omlijst wanden, vloeren en daken in hout of lichtgewicht staal en slaat een snijlijst op als CSV en werkplaatstekeningen als PDF. Startwaarden, geen constructief ontwerp. Zie [Paneeltekeningen](topic:panel-drawings).
- **Symboolpalet en planten.** {{ui:Build}} › {{ui:Symboolpalet}} zoekt elektrische en sanitaire symbolen op naam; de bron {{ui:Planten}} van de {{ui:Bibliotheek}} somt ongeveer 400 planten met plattegrondsymbolen op. Zie [Symboolpalet](topic:symbol-palette) en [Een plant plaatsen](topic:plant-list).

### Leidingen, kanalen en energie

- **Split, VRF en fan coils.** Binnen- en buitenunits met hun aansluitingen, en leidingsets gedimensioneerd op basis van een tabel met typische voorbeeldwaarden die u kunt wijzigen. Zie [Split, VRF en fan coils](topic:split-vrf-fan-coils).
- **Berekeningen.** Het paneel Berekeningen controleert de dimensionering van toevoerleidingen en kanalen op drukverlies, leidt kabels door kabelgoten en buizen en toont hun vulling, en berekent de verlichtingssterkte uit IES- of EULUMDAT-bestanden. Standaardwaarden zijn aangegeven; vul de waarden van uw voorschriften in. Zie [Berekeningen voor leidingen, kanalen, kabels en licht](topic:mep-calculations).
- **PCF-bestanden.** De **PCF exporteren** van het leidinggereedschap schrijft de leidingen weg voor programma's voor leidingspanning en isometrieën, en een PCF-bestand dat wordt teruggelezen tekent zijn leiding. Zie [Bestanden met leidingcomponenten](topic:piping-pcf).
- **Zonne-energie (PV).** Plaats rijen panelen op daken of op de grond, laat ze schaduw werpen vanuit het model, schat de jaarlijkse energie, controleer strings en maak gegevens voor een eenlijnsschema. De startmodule en verliezen zijn generiek. Zie [Zonne-energie (PV)](topic:solar-pv).
- **EnergyPlus-bestand.** Het paneel Controleren met EnergyPlus schrijft het model als IDF om in uw eigen EnergyPlus uit te voeren. Uitvoeren in de browser vereist een build die u zelf host en waarvan u het adres invoert; BimCraft bevat die niet. Zie [Verwarmen en koelen controleren met EnergyPlus](topic:check-with-energyplus).

### Afbeeldingen en bestanden

- **Kies de renderengine.** {{ui:Renderen}} heeft een keuze {{ui:Engine}}. Onze twee ingebouwde engines (Snel en Padtracer) blijven de standaard. **Openen in** slaat de scène op als een USD- of glTF-bestand, en een Unreal-projectmap als een .zip; in CadCraft Studio kan een add-on een engine toevoegen. De Unreal-plug-in die het project opent, is niet uitgebracht. Zie [Kiezen welk programma de afbeelding tekent](topic:render-engines).
- **Ongedaan maken in Studio.** Binnen CadCraft Studio meldt BimCraft aan Studio elke voltooide stap, zodat Studio uw laatste stap ongedaan kan maken in het venster dat u als laatste gebruikte. Zie [Ongedaan maken over apps heen](topic:undo-across-apps).
- **Add-ons in uw bestand.** Een IFC registreert welke add-ons erin hebben geschreven, en biedt de add-ons aan die u mist wanneer u het opent. Zie [Add-ons in uw bestand](topic:add-ons-in-your-file).

### In elke app

- **Uw AI verbinden.** Uw eigen assistent kan BimCraft aansturen via de verbinding van Studio en vragen over het model beantwoorden, zoals welke ruimten onder een bepaald oppervlak liggen. Studio heeft zelf geen AI. Zie [Een AI-assistent laten werken met uw model](topic:assistants).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Omslaan, 2 rijen of 1 rij; Omslaan blijft de standaard.
- **Invoerapparaten.** Instellingen voor trackpad, pen, 3D-muis, controller en MIDI worden door alle apps gedeeld.
- **Problemen en Live.** Het waarschuwingenpaneel en Live-sessies werken als voorheen, met de nieuwe controles hierboven die in Problemen komen.
- **Talen.** 54 talen, waarvan tien nieuw. Die andere dan Engels zijn machinevertalingen die nog niet door een moedertaalspreker zijn gelezen; helponderwerpen zijn meestal in het Engels.

## Opgelost in 0.8.1

- **Lintindeling + Projectbrowser.** Invoegen › CAD importeren, Invoegen › Afbeelding en Beheren › Projecteenheden meldden "Nog niet beschikbaar in BimCraft". Afbeelding opent nu het gereedschap Afbeelding, CAD importeren opent {{ui:Build}} › {{ui:Vanuit een tekening…}} (DWG, DXF, PDF of een scan), en Projecteenheden opent {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}. Verplaatsen en Uitlijnen voeren de gereedschappen Verplaatsen en Uitlijnen uit, Niveau opent {{ui:Niveaus toevoegen…}}, Fasen opent het gedeelte Renovatiefasen en Materialen opent de materiaalbibliotheek.
- **Gedeelte DWG-klassen.** Het werd als het verkeerde type gelezen; opgelost in BimCraft en de andere apps die DWG lezen.
- **Taal tijdens uitvoering.** Studio en de verpakte edities kunnen nu van taal wisselen zonder herstart. Dit is nog niet op elk platform getest; laat het ons weten als de taal niet verandert.
- **Archicad-bundelscript.** `archicad_bundle.py`, een afzonderlijke download, vindt nu het pad van Archicad, bewaakt de map tot 20 seconden en probeert opnieuw naast de bundel.

## Nog niet in deze versie

- **Veiligheids- en ontwerphulpmiddelen.** Mensen in het gebouw heeft geen limiet voor de loopafstand uit een bouwregelgeving (u typt de limiet zelf in) en is niet met de hand gecontroleerd op een echte plattegrond. De akoestiek-, levenscyclus- en gevarencijfers zijn planningswaarden, geen controle op de regelgeving.
- **Klimaatscenario's en EnergyPlus.** Geen ingebouwde klimaatscenario's: u kunt een scenariobestand laden voor de overstromingsberekening. De EnergyPlus-berekening in de browser maakt geen deel uit van deze release.
- **Lintindeling.** Materiaalopmeting blijft "Nog niet beschikbaar", omdat BimCraft geen materiaalhoeveelheidslijst heeft, en 54 andere grijze lintgereedschappen hebben nog geen BimCraft-gereedschap achter zich.
- **Ondertekening en platforms.** Windows-installatiebestanden en het macOS .dmg zijn niet ondertekend, dus SmartScreen toont {{ui:Meer informatie}}, daarna {{ui:Toch uitvoeren}}, en macOS vereist klikken met de rechtermuisknop en daarna {{ui:Open}}. De iPad- en iPhone-build is niet opnieuw gebouwd voor 0.8.1.
- **Tests op echte pagina's.** Sommige oudere browsertests van BimCraft falen nog op onze testpagina, zoals ze vóór 0.8.1 deden.

Al het overige staat in [Wat is nog niet beschikbaar](topic:not-built-yet). Eerdere wijzigingen staan in [Wat is er nieuw in 0.7](topic:whats-new-0-7).
