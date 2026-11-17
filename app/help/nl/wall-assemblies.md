---
title: Wandopbouwen en referentiematen
summary: Bouw eigen wandtypen laag voor laag met een expliciete kern, houd een materiaalbibliotheek voor het project bij en bemaat tot vlakken en hartlijnen die gekoppeld blijven wanneer de wand verandert.
keywords: lod, ontwikkelingsniveau, lod 200, lod 300, generiek, wandopbouw, wandtype, lagen, kern, kernvlak, kernhartlijn, spouw, luchtspouw, membraan, windfolie, materiaalbibliotheek, materialen, dikte, referentiemaat, maatvoering, associatief, locatielijn, gevelbekleding, stijl, gipsplaat
from: 4ea8fbf5
---

## Wat u gaat doen

Maak een wandtype dat past bij de wand die u gaat bouwen: gevelbekleding, beplating, een kern van 5½ inch met stijlen en gipsplaat, of baksteen, een luchtspouw en een houtskeletwand. Markeer welke lagen de kern zijn, zodat een maat of een locatielijn de kern kan vasthouden terwijl de afwerking eromheen verandert. Bemaat daarna wanden tot de vlakken en hartlijnen die u bedoelt.

## Een wandtype maken

1. Start een gebouw of open een IFC-model, zet {{ui:Tekenen}} aan en kies het gereedschap {{ui:Wand}}.
2. Kies een startpunt in {{ui:Wandtype}} en open {{ui:Wandopbouwen…}}. Een startpunt opent als kopie; geef het nieuwe type een naam.
3. Lagen lopen van de buitenkant bovenaan de lijst naar de binnenkant onderaan. Kies het materiaal van elke laag, typ de dikte (projecteenheden, of expliciete waarden zoals `12.7 mm` of `1/2"`), kies de functie (afwerking, ondergrond, constructie, isolatie, membraan) en vink de lagen **Kern** aan. De kern moet één doorlopende groep zijn.
4. {{ui:Laag toevoegen}} voegt een laag toe, {{ui:Spouw toevoegen}} voegt een luchtspouw toe met de ventilatie (niet opgegeven, niet geventileerd, geventileerd), {{ui:Membraan toevoegen}} voegt een laag toe zonder nominale dikte, zoals windfolie. De pijlen verplaatsen een laag naar buiten of naar binnen.
5. Het voorbeeld tekent de lagen op schaal met de kern onderstreept, genummerd zoals de rijen, en bemaat elke laag, de kern en het totaal. {{ui:Type opslaan}}.

Het nieuwe type staat in de lijst van het gereedschap Wand en in **Eigenschappen** van een geselecteerde wand. Een type dat u bewerkt en opslaat, wijzigt elke wand die het gebruikt; {{ui:Type dupliceren}} maakt een apart type en geeft het alleen aan de geselecteerde wanden. Elke opslag is één stap ongedaan maken, samen met de wanden die erdoor verschuiven, de deuren en ramen erin en de maten die ervan afhangen.

Een spouw voegt breedte toe. Een membraan voegt niets toe: het blijft in het type zodat een staat het later kan vinden, en het telt niet mee in de dikte van de wand of de kern. Een spouw of membraan wordt nooit als massief materiaal geteld. In een bestand dat is opgeslagen als IFC2X3 blijft een membraan in het record van het type, maar wordt het weggelaten uit de fysieke materiaallagen.

## Een type labelen met zijn ontwikkelingsniveau (LOD)

Een type kan aangeven hoe uitgewerkt het is. In de editor biedt **Ontwikkelingsniveau (LOD)** de vaste schaal 100, 200, 300, 350, 400 en 500, of **Niet ingesteld**. Een generieke wand ("Wall 230 generic") is LOD 100 of 200; een specifieke opbouw met de echte lagen ("230 clay brick, plastered both sides") is LOD 300 of hoger. U stelt het label zelf in: BimCraft berekent het niet, en de startpunt-types hebben geen label.

Het label verschijnt naast de naam van het type in de typelijst van het gereedschap Wand, in de Eigenschappen van een wand en in de lijst van [Type wisselen](topic:wall-tools). Het rapport na een wissel zegt of het niveau omhoog of omlaag ging. Om het te zien in de staat **Wanden per type** en de CSV daarvan, zet u het vinkje bij **Het LOD van elk wandtype in de wandstaat tonen** aan in Instellingen › BimCraft › Wanden: er wordt een laatste kolom, LOD, toegevoegd. Het wordt met het type in het IFC-bestand opgeslagen (in de propertyset `CadCraft_WallType` van het type, als eigenschap `LOD` en in het record van het type), dus het is er wanneer u het bestand weer opent. Het label geldt voorlopig alleen voor wandtypen, niet voor afzonderlijke elementen of andere soorten elementen.

## Generieke wanden voor de schetsfase

De typelijst van het gereedschap Wand begint met twee **generieke** wanden: **Generic wall 200 mm (exterior)** en **Generic wall 100 mm (interior)**. Elk is één laag van het generieke materiaal, gelabeld als LOD 200. Gebruik ze als u weet waar de wanden komen, maar nog niet waar ze van zijn gemaakt.

Een wand waarvan het type gelabeld is als **LOD 100** of **LOD 200** wordt in elke plattegrond getekend als **één gearceerde band**, op elk detailniveau: zonder lagen en zonder laglijnen. Dat geldt voor de generieke wanden en voor elk eigen type dat u als LOD 100 of 200 labelt. De wand zelf is volledig: hij heeft zijn dikte, zijn deuren en ramen, zijn ruimten en zijn hoeveelheden.

Om hem uit te werken, wisselt u zijn type (Bewerken › Wanden › **Type wisselen**, of Type in Eigenschappen). De wand wordt nooit opnieuw getekend: dezelfde wand krijgt het nieuwe type, en het rapport zegt wat er is verschoven. Een type gelabeld als LOD 300 of hoger wordt getekend met zijn lagen zoals voorheen.

Om elke wand op zijn lagen te tekenen, ongeacht het label: Instellingen › BimCraft › Wanden, zet het vinkje bij **Wanden van een LOD 100- of LOD 200-type tekenen als één gearceerde band** uit.

De startpunt-deuren en -ramen zijn ook generieke soorten (een maat en een manier van openen, geen product). Met **Het LOD van elk wandtype in de wandstaat tonen** aan, tonen de staten Deuren en Ramen LOD 200 voor hen.

## Een type zijn hoeveelheidsgegevens geven

In de editor voor het wandtype neemt **Hoeveelheidsgegevens** op wat een calculator over de wand moet weten, één keer voor het type: de **eenheid** waaruit het is opgebouwd (een baksteen of blok: naam, lengte, hoogte en breedte), de **mortel** (naam en voegdikte) en een **tarief** met zijn valutacode (drie letters, zoals USD, EUR of ZAR) en waarvoor het geldt: per vierkante meter of vierkante voet netto wandoppervlak, per meter of voet wandlengte, of per wand. Alles is optioneel.

Het wordt met het type in het bestand opgeslagen. Elke wand van het type rapporteert het dan: {{ui:Staten}} › **Wandtypen: hoeveelheidsgegevens** toont de eenheid, de mortel, het tarief en het tarief maal de gemeten hoeveelheid, en de opmaak die naar TakeoffCraft gaat draagt het op de post van dat wandtype. Wijzig het op het type en elke wand volgt.

Drie extra velden zijn voor het tellen van stenen of blokken en mortel:

- **Verlies op eenheden, %** wordt bij het aantal eenheden opgeteld. Laat het leeg om het cijfer van de meetmethode van het project te gebruiken, of geen als die methode er geen heeft. Vul 0 in om geen verlies te hebben, wat de methode ook zegt.
- **Extra mortel, %** is voor vingergaten of perforaties die mortel opnemen. Het wordt bij het mortelvolume opgeteld. Laat het leeg voor geen.
- **Lagen opgebouwd uit deze eenheid**: vink elke laag aan die een blad van deze baksteen of dit blok is. Een spouwmuur heeft er twee. Als er geen is aangevinkt, worden de kernlagen geteld.

Het tarief kan ook per eenheid om te bestellen, per 1000 eenheden om te bestellen of per m³ mortel zijn. Als de eenheid een lengte en een hoogte heeft, toont **Wandtypen: hoeveelheidsgegevens** de eenheden per m² (of ft²) van één blad, de eenheden om te bestellen en het mortelvolume; de formules staan in [Stenen, blokken en mortel](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). Een type heeft één eenheid: twee bladen van verschillende eenheden (een baksteen als buitenblad en een blok als binnenblad) kunnen nog niet op één type worden geteld.

## De kern stilhouden

Stel in **Eigenschappen** de **Locatielijn** van een wand in op een kernvlak of de kernhartlijn. Wanneer u later een afwerking toevoegt of dikker maakt, blijft die lijn waar hij is en groeit de wand eromheen; wanden die er op een hoek op aansluiten volgen, zodat rechte hoeken gesloten blijven.

## Materialen van het project

{{ui:Materiaalbibliotheek…}} toont de materialen van het project: naam, categorie, de dikte waarmee een laag begint, weergavekleur, het afsnijpatroon en notities. De bibliotheek wordt met het project in de IFC opgeslagen. Wanneer u een materiaal voor een laag kiest, krijgt die laag de standaarddikte van het materiaal, die u daarna kunt wijzigen; het later bewerken van de bibliotheek verandert nooit wanden die u al hebt getekend. U kunt ook een materiaal maken vanuit de materiaallijst van de laag met {{ui:+ Nieuw materiaal…}}.

## Referentiematen

{{ui:Annoteren}} › {{ui:Referentiemaat}}: kies horizontaal, verticaal of uitgelijnd, en een referentie: het buiten- of binnenafwerkingsvlak, het buiten- of binnenkernvlak, de hartlijn van de wand of de kernhartlijn. Kies de eerste wand, wijzig de referentie als u wilt, kies de tweede en klik dan waar de maatlijn komt. Twee referenties op één wand meten de totale of de kerndikte. {{ui:Referentiematen…}} toont de maten van de weergave, ook die waarvan een wand is verdwenen, met Eigenschappen, Referenties opnieuw koppelen en Verwijderen.

### De hele plattegrond bematen volgens regels

{{ui:Annoteren}} › {{ui:Maatvoering van de plattegrond…}} bemaat de buitenkant van de vloerplan die u bekijkt: de totale maat in elke richting, een rij maten langs elke buitenrand (wandeinden, wanden die op de rand aansluiten, en de deuren en ramen erin), met de rijen buiten het gebouw geplaatst. Vink aan wat u wilt, lees het aantal, en klik dan op {{ui:De maten toevoegen}}. Het zijn gewone referentiematen, dus ze volgen de wanden wanneer die verschuiven, en u kunt elk ervan kiezen, verplaatsen of verwijderen; de hele set is één stap ongedaan maken, en opnieuw uitvoeren maakt er geen dubbele aan.

Het bemaat alleen de buitenkant: ruimten binnen het gebouw, gebogen wanden en wanden die niet haaks op de plattegrond staan, worden aan de handgereedschappen overgelaten, en rasterlijnen zijn geen wanden, dus maten tussen rasters worden hier niet gemaakt. Uw verbonden assistent kan hetzelfde doen met `plan_dimension`.

De maat is aan de wanden gekoppeld, niet aan een plek op het scherm: wanneer een wand verschuift of zijn type verandert, volgt de waarde. Als een wand wordt verwijderd, zegt de maat dat hij niet is opgelost en toont hij geen getal, totdat u hem opnieuw koppelt of de stap ongedaan maakt. Het lengtevak neemt ook plancoördinaten zoals `10',12'` voor een maatlijn op een exacte plek.

Maten zijn voor wanden die BimCraft heeft getekend, in plattegronden. Nog niet beschikbaar: maten in doorsneden en gevels, tot deuren, ramen en andere onderdelen, en wandlagen getekend in de plattegrond en de doorsnede; zie [Wat nog niet beschikbaar is](topic:not-built-yet).

## Zie ook

[Wanden tekenen](topic:draw-walls), [Een wand, deur of raam wijzigen](topic:change-a-wall-or-door), [Eigenschappen](topic:properties-panel).
