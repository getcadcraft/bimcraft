---
title: Assetgegevens en een onderhoudsregistratie in het model bewaren
summary: Gebruik het opgeleverde IFC-model voor het beheer van het gebouw: fabrikant, model, serienummer, garantie en levensduur van apparatuur en voorzieningen, en een registratie van het uitgevoerde onderhoud, alles geschreven in het IFC.
keywords: oplevering, oplevercertificaat, gebruiksvergunning, as-built, opleveringspakket, assets, assetregister, facility management, fm, beheer, onderhoud, service, garantie, serienummer, barcode, fabrikant, model, levensduur, cobie, digital twin, verlopen, vervalt, werkorder
from: b84ac492
---

Het tabblad {{ui:Assets}} in het rechterpaneel maakt van het geopende IFC-model een registratie van de apparatuur van het gebouw. Alles wordt in het IFC zelf geschreven, in de eigen eigenschapssets en taken van IFC, zodat het volgende programma dat het bestand opent het ook leest. Er wordt niets geüpload en er is geen server nodig: sla het IFC op om het te bewaren.

## Wat er in staat

- Apparatuur en voorzieningen: meubilair, sanitair, verlichtingsarmaturen, apparaten, luchtdoorlaten, kleppen, pompen, ventilatoren, ketels, tanks, stopcontacten, schakelborden, liften en andere zulke elementen, en bibliotheekitems met apparatuurgegevens.
- Elk ander element dat u **volgt**: kies het in het model (een deur, een wand, een pomp die als gewoon object is getekend) en klik op {{ui:Track picked}}.
- Alles wat al assetgegevens of een onderhoudstaak heeft, hier geschreven of door een ander programma.

Wat verlopen is, komt eerst, daarna wat binnen 30 dagen vervalt. Filter op naam, tag, fabrikant, model of serienummer, op niveau, of vink {{ui:Only overdue or due within 30 days}} aan.

## Assetgegevens

Klik op een asset in de lijst (of kies hem in het model) om zijn gegevens te openen: fabrikant, model, modelreferentie, serienummer, barcode, de dag waarop hij is geïnstalleerd, het garantienummer en de begin- en einddatum ervan, en zijn levensduur in jaren. {{ui:Save the data}} schrijft ze in één stap ({{key:Mod+Z}} maakt het ongedaan). Laat een vak leeg om die waarde te verwijderen.

## Documenten

Onder de gegevens toont {{ui:Documents}} de handleidingen, garanties, foto's, certificaten en tekeningen die aan de asset zijn gekoppeld. Kies het soort, geef een titel (of laat die leeg: dan wordt de bestandsnaam gebruikt) en typ waar het staat:

- een **webadres** (`https://…`): het krijgt een link Openen die in een nieuw tabblad opent;
- of een **bestandsnaam of pad** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, een netwerkmap): bewaar de bestanden naast het IFC, in dezelfde map of daaronder, zodat de namen blijven werken wanneer u de map overdraagt. BimCraft toont de naam; open het bestand vanuit de map.

De bestanden zelf worden nooit geüpload of in het IFC gekopieerd: alleen de koppeling wordt geschreven. Een webadres met een wachtwoord erin, en elke koppeling die geen webadres of bestand is (zoals `javascript:`), wordt geweigerd. {{ui:Remove}} haalt een document van de asset af (één stap; {{key:Mod+Z}} maakt het ongedaan).

Documenten die een ander programma aan het element heeft gehecht, worden ook getoond. Documenten op het **type** van het element verschijnen bij elk element van dat type en zeggen dat; wijzig die waar het type is gemaakt.

In het IFC is elk document een IFC-documentverwijzing die aan het element is gekoppeld, met zijn soort vastgelegd op die koppeling, in IFC4 en IFC2X3 gelijk.

## De onderhoudsregistratie

Onder de documenten: {{ui:Record work done}}: de dag waarop het werk is gedaan, het werk, wie het deed, wanneer het weer nodig is en opmerkingen. Elke invoer is één stap; {{ui:Edit}} en {{ui:Delete}} wijzigen haar later. De volgende vervaldatum van de nieuwste invoer bepaalt of de asset verlopen is of binnenkort vervalt.

## Hoe het in het IFC wordt bewaard

- Fabrikant en model in `Pset_ManufacturerTypeInformation`, serienummer, barcode en de installatiedag in `Pset_ManufacturerOccurrence`, de garantie in `Pset_Warranty`, de levensduur in `Pset_ServiceLife`, op het element zelf. Wanneer het type van het element al een fabrikant of model heeft, wordt dat getoond tot u uw eigen invult.
- Elke onderhoudsinvoer is een IFC-**taak** van de soort onderhoud, gekoppeld aan het element, met haar datums (in IFC4 ook als de eigen tijden van de taak) en een set `CadCraft_Maintenance` met de dag, wie het deed en de volgende vervaldag.
- Waarden die een ander element deelt, worden eerst gekopieerd: een wijziging van de ene asset verandert nooit zijn buren.
- In oudere IFC2X3-bestanden worden de datums als tekst geschreven (JJJJ-MM-DD); die versie vraagt daar om een aparte datumregistratie, die BimCraft niet schrijft.

## Sensormetingen

Open {{ui:Sensor values}} en {{ui:Open readings (CSV)…}} om metingen binnen te halen die zijn geëxporteerd uit een gebouwbeheersysteem, een datalogger of een spreadsheet:

- De **eerste kolom is de tijd**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` of Unix-seconden. Een tijd zonder zone wordt gelezen in de tijdzone van uw computer. Datums met de dag eerst, zoals `23/10/2026`, worden niet gelezen (ze zijn dubbelzinnig); exporteer ISO-datums.
- **Elke andere kolom is één sensor**, met als kop de **tag**, **naam** of **GlobalId** van zijn asset. Een kop die bij geen enkele asset past, of bij meer dan één, wordt vermeld en weggelaten. Komma's, puntkomma's of tabs scheiden de kolommen; bij puntkomma's of tabs wordt ook een decimale komma (`21,5`) gelezen.
- Tijden of waarden die niet gelezen kunnen worden (een woord, een eenheid die in de cel is getypt), worden geteld en weggelaten, nooit geraden.

De laatste meting verschijnt in de kolom {{ui:Reading}} van de lijst en in het blok {{ui:Sensor}} van de asset, met een **grafiek** van elke meting (op een telefoon wachten grafieken tot u op {{ui:Show the chart}} tikt). Stel een **ondergrens en bovengrens** en een eenheid in op een asset en klik op {{ui:Save the limits}}: een meting erbuiten markeert de asset. Vink {{ui:Show on the model}} aan om elke asset te kleuren naar zijn meting — blauw onder de ondergrens, groen binnen de grenzen, rood boven de bovengrens, en voor assets zonder grenzen één blauwe schaal van de laagste tot de hoogste meting — met de meting als label (tot 60 labels, gemarkeerde eerst).

**Metingen blijven in dit browsertabblad**: ze worden niet in het IFC opgeslagen en nergens naartoe gestuurd; open de CSV de volgende keer opnieuw. De **grenzen worden in het IFC opgeslagen** (een set `CadCraft_Sensor` op het element: Low, High, Unit), zodat de volgende persoon die het bestand opent dezelfde markeringen ziet.

## Live metingen

{{ui:Live feed}} leest waarden zodra ze zich voordoen, **rechtstreeks van deze browser naar uw eigen systeem**. Niets gaat via onze server en niets wordt ergens opgeslagen behalve in uw browsertabblad. Niets maakt verbinding wanneer een bestand opent: alleen {{ui:Connect}} doet dat.

- **MQTT over WebSockets**: het adres van de WebSocket-listener van uw broker (`wss://broker.example.com:8884/mqtt`), en een of meer onderwerpen met `{tag}` waar de tag van de asset komt, bijvoorbeeld `site/{tag}/temperature` (BimCraft abonneert zich op `site/+/temperature` en leest de tag uit het onderwerp van elk bericht). Onderwerpen zonder `{tag}` noemen de sensor zelf. Een bericht is een gewoon getal (`21.5`) of JSON zoals `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (stel {{ui:Value field in JSON}} in als uw veld anders heet).
- **Een adres vragen (HTTP)**: een webadres dat uw gebouwbeheersysteem of een klein script van u beantwoordt, elke zoveel seconden gevraagd (minimaal 5). Het kan antwoorden met JSON gesleuteld op tag (`{"AHU-1": 21.5}`), een JSON-lijst (`[{"tag": "AHU-1", "value": 21.5}]`), of een CSV met metingen zoals die hierboven. Antwoordt het niet, dan wacht BimCraft twee keer zo lang voordat het opnieuw vraagt, tot vijf minuten.

Elke meting gaat naar de asset wier tag, naam of GlobalId erin wordt genoemd, precies zoals een CSV-kolom dat zou doen; namen die bij geen enkele asset passen, worden vermeld. De metingen voegen zich bij de {{ui:Sensor values}}: de lijst, de grafieken, de grenzen en de kleuren op het model werken hetzelfde.

**Uw wachtwoord of token** wordt voor één verbinding ingetypt: het wordt aan de verbinding gegeven en het vak wordt leeggemaakt; het wordt nooit in deze browser of in het IFC opgeslagen. Een token gaat als standaard `Authorization: Bearer`-kop, en er worden geen cookies verstuurd.

{{ui:Keep these settings in the IFC}} schrijft het adres, de onderwerpen, het waardeveld en hoe vaak er gevraagd wordt in het model (een set `CadCraft_Feed` op het project; er is geen veld voor een wachtwoord), zodat de volgende persoon die het bestand opent alleen zijn eigen login intypt en op {{ui:Connect}} klikt. Zet geen wachtwoord of sleutel in het adres zelf: een adres met een gebruikersnaam en wachtwoord erin wordt geweigerd.

:::note
**Wat uw broker of adres nodig heeft.** Een browserpagina kan alleen praten met een server die dat toestaat:
- De pagina is beveiligd (https), dus de browser verbindt alleen met `wss://`- en `https://`-adressen — behalve op uw eigen computer (`localhost`), waar `ws://` en `http://` werken om te testen.
- Een HTTP-adres moet verzoeken van deze pagina toestaan (CORS: de kop `Access-Control-Allow-Origin`, en `Authorization` tussen de toegestane koppen als u een token gebruikt).
- De meeste brokers (Mosquitto, EMQX, HiveMQ en andere) bieden een WebSocket-listener; die staat vaak uit tot u hem aanzet. BimCraft spreekt MQTT 3.1.1.
:::

Er zijn **geen meldingen** wanneer BimCraft gesloten is: grenzen markeren een asset zolang het model open is met een feed verbonden. Een gebouw dag en nacht in de gaten houden vraagt om een server, die BimCraft niet draait.

## COBie-spreadsheet

**COBie** is de opleverspreadsheet die veel eigenaren en beheerteams vragen (gepubliceerd door de National BIM Standard in de VS; BS 1192-4 in het VK). Open {{ui:COBie spreadsheet}} in het tabblad:

- {{ui:Save as COBie (.xlsx)}} schrijft de COBie 2.4-bladen — Contact, Facility, Floor, Space, Type, Component, System, Job, Document en Attribute — uit het model en de assetgegevens: het gebouw, zijn niveaus en ruimten (oppervlakten uit de hoeveelheden van het model), elke asset als component met zijn serienummer, installatiedag, garantiebegin, tag en barcode, zijn type met fabrikant, model, levensduur en garantielengte, de systemen waartoe hij behoort, de onderhoudsregistratie als taken en de gekoppelde documenten. Elk component draagt de IFC-GlobalId van het element. Typ uw e-mailadres voor de kolom "created by" van COBie, of laat die leeg (dan staat er n/a). Waarden die het model niet heeft, staan op **n/a**; de categoriekolommen bevatten de IFC-klasse, geen OmniClass-code.
- {{ui:Read a COBie spreadsheet…}} leest er een terug, van BimCraft of van een ander programma, en **toont eerst elke wijziging**: welke asset, welke waarde, van wat naar wat, en nieuwe documenten. {{ui:Apply}} schrijft ze allemaal in één stap ({{key:Mod+Z}} maakt het ongedaan). Rijen worden gekoppeld op GlobalId, daarna op de naam van het component. Rijen die in het model nergens bij passen, worden vermeld, niet toegevoegd.

Een spreadsheet wordt als onbetrouwbaar behandeld: formules worden nooit gelezen of uitgevoerd (alleen de laatst opgeslagen waarde in de cel); een waarde die een garantie laat eindigen voordat ze begint, en een documentkoppeling die geen webadres of bestandsnaam is, worden weggelaten en geteld; zeer grote werkmappen worden geweigerd. De taken van COBie zijn het geplande werk van een type: ze worden uitgeschreven maar niet teruggelezen. In de spreadsheet die BimCraft schrijft, wordt tekst die een spreadsheet voor een formule zou kunnen aanzien (beginnend met `=`, `+`, `-` of `@`) als tekst gemarkeerd.

De werkmap is in onze tests gecontroleerd met een onafhankelijke spreadsheetlezer; ze is niet door een COBie-validator gegaan. Als een ontvangend team er een gebruikt, laat ons dan weten wat die zegt.

## Opleveringsdocumenten

De papieren die bij het afgebouwde gebouw naar de eigenaar gaan, horen bij het project, niet bij één asset. Open op het tabblad {{ui:Assets}} {{ui:Handover documents}}:

1. {{ui:Add a document}}, kies het soort (oplevercertificaat, gebruiksvergunning, garantie, handleiding, as-built-tekeningen, overig), en typ de titel, de datum van afgifte, wie het heeft afgegeven en het referentienummer.
2. Geef aan waar het staat: een webadres, een bestandsnaam naast het IFC, of {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} en {{ui:Remove}} wijzigen de lijst; elk is één stap die u ongedaan kunt maken.

{{ui:Build the handover package}} downloadt één zip: een omslagpagina met elk document, dezelfde lijst als een spreadsheet, de COBie-werkmap (de documenten staan op het Document-blad, als rijen over de Facility), het model en elk bijgevoegd bestand. Een oplevercertificaat of gebruiksvergunning die nog niet in de lijst staat, wordt op de omslag genoemd; het pakket wordt toch gemaakt.

Het model in het pakket is het **as-built model**: het zegt welke elementen op de bouwplaats zijn opgemeten. Daarbij staan in de map `as-built`: de verklaring, een lijst van elk element met zijn verificatiestatus, de tekenset zoals die nu is als één PDF (de as-built-tekeningen), en het wijzigingslogboek van de tekeningen wanneer het model sets heeft uitgegeven. Zie [Elementen markeren als gecontroleerd of op de bouwplaats geverifieerd](topic:verification).

- In het IFC-bestand is elk document een IfcDocumentInformation die aan het project is gekoppeld (IfcRelAssociatesDocument), met zijn titel, referentie, datum, afgever en plaats, zodat andere programma's het tonen.
- Een bijgevoegd bestand wordt vastgelegd met naam, grootte en SHA-256. Om het bestand zelf bij het project te bewaren, gebruikt u {{ui:Save the project as a bundle}} (een .ccbundle bevat het model en de bijgevoegde bestanden; bij openen krijgt u ze terug, elk gecontroleerd tegen zijn registratie). Een gewone opslag vraagt welke u wilt.
- Een gewoon .ifc bewaart de registratie, niet het bestand: na het openen gebruikt u {{ui:Attach the file again}}. Hetzelfde bestand wordt herkend; een ander vervangt de registratie.

## CSV

{{ui:CSV}} slaat elke asset met zijn gegevens op, elke onderhoudsinvoer en elk document, elk op een eigen rij, voor een spreadsheet of een ander onderhoudsprogramma.

:::note
Nog niet beschikbaar: een gehoste dienst die metingen bewaart en waarschuwingen verstuurt terwijl BimCraft gesloten is, en het teruglezen van COBie-taken. Zie [Nog niet beschikbaar](topic:not-built-yet).
:::
