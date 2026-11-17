---
title: Families en hun maten
summary: Deuren, ramen en meubels komen in families. Elke maat van een familie is één type in het IFC-bestand, zodat de typenlijst in BimCraft kort blijft terwijl andere programma's gewone typen lezen.
keywords: familie, families, type, typen, maat, maten, deurtype, raamtype, meubilair, tafel, plank, kast, nieuwe maat, dupliceren, familie plaatsen, familiebestand, ccfamily, ifc-bibliotheek, projectbibliotheek, groep, zichtbaarheid, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Wat een familie is

Een familie is één soort ding in verschillende maten: een enkele draaideur die 32, 36 en 42 inch breed komt, of een tafel die lang of kort komt. In BimCraft ziet u de familie één keer, met haar maten eronder, in plaats van een lange lijst met typen.

IFC kent geen families. In het bestand is elke maat een gewoon type (een deurtype, een raamtype, een meubeltype…), en de familie is een groep die haar maten opsomt. Andere BIM-programma's lezen de typen en de groep zoals ze zijn; BimCraft leest de familie er weer uit.

## Waar u ze vindt

- De groep **Families** van de projectbrowser somt de families in dit model op, met hoeveel maten elk heeft en hoeveel er geplaatst zijn. Eronder staan de **Startfamilies**: de deuren en ramen van de gereedschappen Deur en Raam, en een tafel, een plankenstel en een onderkast.
- {{ui:Build}} › {{ui:Families…}} toont dezelfde lijst in een venster.
- Klik op een familie om haar te openen: haar maten, de waarden van elke maat, en hoeveel elementen elke maat gebruiken.

## Deuren en ramen

Het gereedschap Deur en Raam toont de families van die soort, met een **maatlijst** ernaast. Kies een maat, of typ **W** en **H**: een breedte en hoogte die nog geen maat heeft, wordt een nieuwe maat van de familie wanneer u de deur plaatst. Deuren van dezelfde maat delen één type.

In {{ui:Eigenschappen}} tonen een gekozen deur of raam hun **Familie** en **Maat**. Kies een andere maat uit de lijst, of typ een nieuwe breedte of hoogte. {{ui:De familie openen}} opent de familie waartoe het behoort.

Elk kozijn van een deur of raam volgt de dikte van de eigen wand, zoals voorheen bij families. Het type van de maat houdt de deur ook getekend in een wand van 140 mm, voor programma's die typen lezen.

## Nieuwe maat van deze familie

1. Open de familie.
2. Typ onder **Nieuwe maat van deze familie** de waarden (Breedte, Hoogte en de andere parameters van de familie) en, als u wilt, een naam. Zonder naam krijgt de maat een naam op basis van zijn waarden.
3. Klik op {{ui:Maat maken}}.

Twee maten kunnen niet dezelfde waarden hebben. **Hernoemen** wijzigt de naam van een maat; **Verwijderen** haalt een maat weg die niemand gebruikt; **Selecteren** kiest de elementen van die maat.

## Meubels plaatsen

1. {{ui:Build}} › {{ui:Familie plaatsen}}, of {{ui:Plaatsen}} in het venster van een familie.
2. Kies in de balk de familie en haar maat.
3. Klik op het plan om het op de verdieping te plaatsen. Druk op {{key:R}} om het 90° te draaien voordat u klikt. {{key:Esc}} stopt.

De **Eigenschappen** van een geplaatst stuk tonen zijn maat, waar het staat en hoe ver het gedraaid is; {{key:Delete}} verwijdert het. Elk stuk van één maat deelt de vorm van die maat, dus als u de familie wijzigt, veranderen ze allemaal.

## Maten uit een tabel

{{ui:Maten uit een tabel…}} in het venster van een familie leest een CSV-bestand (komma, puntkomma of tab). De eerste rij noemt de kolommen: de naam of het label van een parameter, en eventueel `Name`. Lengtes zijn in millimeter, tenzij u een eenheid schrijft (`1.2 m`, `36 in`). Kolommen voor Ja / Nee nemen `yes`, `no`, `true`, `false`, `1` of `0`, en een parameter zonder kolom houdt zijn standaardwaarde. Elke rij wordt een maat, in één stap die u ongedaan kunt maken; een maat die er al is, wordt overgeslagen. Eén rij die niet te lezen is, of die de familie niet kan tekenen, weigert de hele tabel en noemt zijn regel. Maximaal 200 rijen en 1 MB. {{ui:De maten als tabel opslaan}} schrijft dezelfde tabel weer weg.

## Per element instellen

Een parameter die in de editor als **Per element** is gemarkeerd (een Ja / Nee die een bovenlicht, een label of een materiaal toevoegt) hoort niet bij een maat: twee deuren van één maat kunnen verschillen. Kies het element en de **Eigenschappen** tonen deze parameters; wijzig er één en dat element wordt opnieuw getekend met zijn eigen vorm (meubels en armaturen krijgen een eigen vorm, deuren en ramen worden opnieuw in hun wanden gemaakt). Zet ze allemaal terug op hun standaardwaarden en het keert terug naar de vorm van zijn maat.

## Detailniveau

{{ui:Build}} › {{ui:Families…}} › **Detailniveau** bepaalt, voor elke familie in het model, wat in de volumes wordt opgeslagen en in de plansymbolen wordt getekend: **Fijn** houdt alles, **Middel** en **Grof** laten de onderdelen weg die de editor als fijner markeert (kleinere bestanden, snellere weergave). **Automatisch** slaat alles op en laat de schaal van de weergave van een blad kiezen: 1:50 en groter fijn, 1:100 middel, 1:200 en kleiner grof. Eén stap die u ongedaan kunt maken.

## Een familie dupliceren

U hoeft niet met niets te beginnen. {{ui:Dupliceren}} kopieert een familie met haar parameters, volumes en maten onder een nieuwe naam. Wijzig de kopie in de editor; het origineel blijft zoals het was.

## Familiebestanden

- {{ui:Het familiebestand opslaan}} slaat een `.ccfamily.json` op: de parameters, volumes en maten van de familie. Open het in een ander model met {{ui:Een familiebestand openen…}} in de groep Families.
- {{ui:Opslaan als IFC}} slaat de familie op als een klein IFC-bestand: de typen van haar maten en haar groep, aangegeven door een IFC-projectbibliotheek. Andere programma's openen het als een set typen; BimCraft opent het weer als de familie.

Een hier geopend familiebestand wordt als gegevens gelezen en gecontroleerd voordat er iets wordt geschreven. Een familie waarvan de sleutel al in het model staat, komt binnen als een aparte familie. Een familie die andere families bevat (zie Families erin, in de hulp van de editor), neemt ze mee: het bestand somt ze op, en het model houdt de exemplaren die het al heeft.

## Families in de Bibliotheek

Open {{ui:Families…}} en kies {{ui:Uit de Bibliotheek…}} om de families te zien die in de Bibliotheek zijn gedeeld. {{ui:Toevoegen aan dit project}} leest er één zoals een familiebestand: BimCraft controleert elk veld voordat er iets wordt gemaakt, de familie komt binnen als een eigen familie, en ze opent in de editor. Toevoegen is één stap die u ongedaan kunt maken. Om uw eigen families te delen, gebruikt u {{ui:Alles opslaan als bibliotheek}} en stuurt u het bestand naar de Bibliotheek (de medewerkers van de Bibliotheek publiceren een familiebestand met een opdracht, en elke familie is een eigen item met haar maten). Als de Bibliotheek niet bereikbaar is, zegt de lijst dat en verandert er niets.

## Typen van andere programma's

Typen die door andere programma's zijn gemaakt, verschijnen ook in de groep Families, gegroepeerd op een schatting: op het deel van de elementnamen vóór de eerste dubbele punt, anders op typenamen die alleen in hun cijfers verschillen. Het venster van de familie zegt welke schatting is gebruikt. Ze staan in de lijst en u kunt hun elementen selecteren, maar ze worden hier niet bewerkt: ze hebben geen familierecept.

:::note
De startdeuren en -ramen worden precies getekend zoals voorheen, vóór families. Bestanden die vóór families zijn gemaakt, openen ongewijzigd: hun deuren en ramen verschijnen onder hun familie met de maten die in gebruik zijn, en ze verplaatsen zich naar een eigen maat de eerste keer dat u ze wijzigt.
:::

Zie ook [Een familie bewerken](topic:family-editor) en [Deuren en ramen](topic:doors-and-windows).
