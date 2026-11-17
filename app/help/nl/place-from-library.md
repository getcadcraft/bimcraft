---
title: Apparatuur en meubilair uit de bibliotheek plaatsen
summary: Zoek een item in de Bibliotheek, in een bestand of in de geopende tekening, plaats het op een verdieping van een IFC-model met een vage voorvertoning, draai het, klik het vast aan een wand en sla op.
keywords: verplaatsen, draaien, slepen, bibliotheek, librarycraft, plaatsen, invoegen, apparatuur, meubilair, blok, familie, item, catalogus, inhoud, kcl, csv, gltf, obj, rfa, dwg, ifc-type
from: 3dad5d4b
---

## Wat u gaat doen

Zet een bibliotheekitem in een IFC-model: een spoelbak, een werktafel, een stoel. BimCraft schrijft het als een correct IFC-element met een type, zodat elke kopie van hetzelfde item één set geometrie deelt, en de gegevens, het itemnummer en de licentie ervan meekomen.

## Stappen

1. Open een IFC-model.
2. Klik op het tabblad {{ui:Bibliotheek}} naast {{ui:Eigenschappen}} rechts, of op {{ui:Bibliotheek}} in de werkbalk boven het model.
3. Kies een bron:
   - **Ingebouwde symbolen**: generieke loodgieterij-plansymbolen die bij BimCraft zitten, onder Apache-2.0, en offline beschikbaar. Controleer hun afmetingen voordat u bouwt. Voor elektrische plansymbolen en IFC-elektrische apparaten gebruikt u **Build › Elektrisch**.
   - **Bibliotheek**: de CadCraft-bibliotheek op deze site. Openbare items hebben geen aanmelding nodig.
   - **Dit bestand**: de blokken van een geopende DWG- of DXF-tekening. Een dynamisch blok met zichtbaarheidsstanden wordt per stand aangeboden, genoemd "Spoelbak: Dubbele kom", en elk getekend met alleen de objecten van die stand.
   - **Bestanden…**: een DWG-, DXF-, IFC-, glTF/GLB-, OBJ-, RFA- of CSV-bestand op uw computer. Het wordt in dit tabblad gelezen; er wordt niets geüpload.
   - **Andere feeds**: een andere bibliotheek die hetzelfde feedformaat gebruikt. Voeg het adres één keer toe; het wordt in deze browser bewaard.
4. Zoek of kies een categorie, en klik daarna op een kaart. De kaart toont een voorbeeld van de plattegrond, de naam, de fabrikant en het model, de licentie en de versie.
5. Klik op {{ui:In plattegrond plaatsen}} (in de weergave Plattegrond) of {{ui:In model plaatsen}} (in de 3D-weergave). In {{ui:Splitsen}}, waar de plattegrond en de 3D-weergave allebei zichtbaar zijn, is de knop een splitsknop: de hoofdactie is {{ui:In plattegrond plaatsen}}, en de pijl aan het rechteruiteinde opent een menu met {{ui:In model plaatsen}}. Of sleep de kaart, of de afbeelding in de details van het item, naar de plattegrond of de 3D-weergave: het item wordt geplaatst waar u loslaat. Met een pen of een vinger houdt u de kaart even ingedrukt en sleept u dan.
6. Kies de verdieping in de plaatsbalk. In de 3D-weergave worden verdiepingen erboven verborgen terwijl u plaatst, en draait de weergave naar boven; in de plattegrond toont de plattegrond die verdieping al. Kiezen van {{ui:In model plaatsen}} vanuit de plattegrond alleen brengt de 3D-weergave ernaast tevoorschijn.
7. Beweeg de aanwijzer over het model: een doorzichtige doos toont waar het item komt.
8. Druk op {{key:R}} om het 90° te draaien. Druk op {{key:Tab}} (of {{ui:Wandsnap}}) om de achterkant ervan tegen de dichtstbijzijnde wand te zetten, naar de kamer gericht.
9. Klik om te plaatsen. Of typ de positie in **X, Y (mm)**, bijvoorbeeld `1200, 3400`, en druk op {{key:Enter}}.

Een lamp of iets anders dat van boven hangt: stel **Bevestiging** in op **Aan het plafond**. De bovenkant van het item zit dan aan de onderkant van het plafond boven de plek (of op de hoogte van het niveau waar geen plafond is). Met een plafondplattegrond op de plattegrondweergave begint **Bevestiging** op **Aan het plafond**.
10. Beantwoord de ene vraag: het **itemnummer** (het eerstvolgende vrije nummer wordt ingevuld), de hoeveelheid en een notitie. Druk op {{key:Enter}}.
11. Plaats meer, of druk op {{key:Esc}} om te stoppen.
12. Klik op {{ui:Opslaan als IFC}} om de bewerkte kopie te downloaden.

## Plattegrond of model

De plaatsknop van de Bibliotheek volgt de weergave waarin u bent, en verandert zodra u de weergave wijzigt (de knoppen {{ui:Plattegrond}}, {{ui:Splitsen}} en {{ui:3D}}, het toetsenbord, het openen van een bestand). Plattegrond toont één knop, {{ui:In plattegrond plaatsen}}; 3D toont één knop, {{ui:In model plaatsen}}; Splitsen toont de splitsknop, met {{ui:In plattegrond plaatsen}} als hoofdactie en {{ui:In model plaatsen}} in het menu. Beide manieren gebruiken dezelfde plaatsbalk en schrijven hetzelfde IFC-element: de aanwijzer werkt in de plattegrond voor de ene en in de 3D-weergave voor de andere. Druk op elk moment op {{key:Esc}} om te stoppen.

Een kaart slepen heeft geen eigen toets: de splitsknop of de gewone knop doet hetzelfde, met het toetsenbord.

## Een geplaatst item verplaatsen of draaien

In {{ui:Tekenen}} kiest u het item in de plattegrond. Een vierkante greep verschijnt op zijn invoegpunt, en een ronde greep ernaast.

- Sleep het item, of zijn vierkante greep, om het te verplaatsen. Het klikt vast zoals het hulpmiddel Wand (wanduiteinden en vlakken); {{key:Shift}} houdt het haaks op de plek waar het stond.
- Sleep de ronde greep om het in stappen van 15° te draaien. Houd {{key:Shift}} ingedrukt voor stappen van 1°.
- Druk op {{key:R}} om het 90° te draaien.
- In **Eigenschappen** (ook in de 3D-weergave) typt u **X**, **Y** en **Rotatie (°)**, of klikt u op **90° draaien**.

Elke verplaatsing is één stap van ongedaan maken en reist mee in Live TeamWork. Het item behoudt zijn itemnummer, zijn bibliotheekgegevens en zijn hoogte boven het niveau. Nog niet beschikbaar: slepen in de 3D-weergave.

## Wat u zou moeten zien

- Het item in het model, geselecteerd, met zijn eigenschappen rechts: een vak **Bibliotheekitem** met zijn licentie en bronvermelding, en de sets `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` en, voor items uit getagde tekeningen, `CadCraft_SourceAttributes`.
- "Geplaatst: *item* (item *n*)" in de wijzigingenlijst. {{key:Mod+Z}} maakt het ongedaan.
- De statusregel: "*Item* als item *n* geplaatst."

## Goed om te weten

- Sommige items komen in meerdere maten of opties: de kaart toont dan een keuze **Variant**, en de variant die u kiest, wordt geplaatst. Zie [Een bibliotheekitem met varianten plaatsen en verwisselen](topic:library-variants).
- Een item zonder 3D-lichaam (een 2D-symbool) wordt met een plaatsvervangende doos geplaatst; u geeft de hoogte op wanneer daarnaar wordt gevraagd.
- Meer van hetzelfde: kies een geplaatst item en gebruik {{ui:Kopiëren}} en {{ui:Plakken}}, of {{key:Mod+D}}. Zie [Bibliotheekitems kopiëren, plakken en dupliceren](topic:copy-paste).
- Om elke plaatsing met wandsnap aan te laten beginnen, zet u **Start met wandsnap aan** aan in de [BimCraft-instellingen](topic:settings).
- Lengten worden omgerekend naar de eigen eenheden van het model, wat die ook zijn.
- **Entourage** (bomen, struiken, mensen, auto's) zit ook in de bibliotheek: zoek naar "tree", "person" of "car". Die worden door CadCraft getekend (CC0) en behouden hun kleuren wanneer ze worden geplaatst (een stam bruin, bladeren groen, de ramen van een auto doorzichtig), in BimCraft en in andere BIM-programma's. Ze verschijnen in [gerenderde afbeeldingen](topic:render).
- In een IFC2X3-bestand wordt het lichaam geschreven als een gefacetteerd volume; in IFC4 als een getrianguleerde vlakkenset. Beide openen in andere IFC-hulpmiddelen.
- Een tekening (DWG of DXF) kan hier niet worden opgeslagen, dus items worden alleen in IFC-modellen geplaatst. Gebruik **Dit bestand** op een tekening om te zien wat de blokken zouden worden.

## Items in uw taal

Een item kan zijn naam, beschrijving en type in andere talen hebben. Wanneer die er zijn in de taal waarop BimCraft is ingesteld (Instellingen › Algemeen › Taal), toont de pagina van het item die, met de naam die de fabrikant eronder gaf, en **Plaatsen** schrijft de naam in uw taal in het model, zodat de staat {{ui:Apparatuur}} het zo vermeldt. Het item blijft hetzelfde item: controleren op updates en verwisselen gaan op het item zelf, nooit op de naam. Items zonder vertaling behouden hun eigen woorden.

## Veelvoorkomende fouten

- **De plaatsknop ontbreekt.** Er is geen IFC-model geopend. Open er eerst een.
- **De vage voorvertoning volgt de aanwijzer niet.** De aanwijzer staat buiten het gebied van het model, of het vlak van de verdieping is niet in beeld. Klik op {{ui:Boven}}.
- **{{ui:Wandsnap}} zegt dat er geen wanden zijn.** De verdieping heeft geen wanden in de IFC (sommige exports zetten wanden op een andere verdieping). Kies die verdieping, of typ X en Y.
- **De items van een bestand zijn de verkeerde grootte.** Het bestand heeft geen eenheden, of vermeldt de verkeerde. Kies in {{ui:Bestanden…}} de eenheden en lees het opnieuw in.

:::tip
Hetzelfde item twee keer plaatsen deelt één IFC-type, dus een model met veertig stoelen slaat de stoel één keer op.
:::
