---
title: Staten, maten en een pdf van de plattegrond
summary: Deur-, raam-, wand- en ruimtestaten die meeveranderen terwijl u tekent, maten op de plattegrond, en de plattegrond van een niveau opgeslagen als pdf op een standaardschaal.
keywords: staat, deurstaat, raamstaat, wandstaat, ruimtestaat, hoeveelheden, takeoff, oppervlakte, csv, rekenblad, maten, maat, afdrukken, pdf, plotten, schaal, 1/4", 1:50, blad
from: d97cd16e
---

## Wat u gaat doen

Zie wat het gebouw dat u tekent oplevert terwijl u tekent: hoeveel deuren en ramen van elke maat, hoeveel wand van elk type, hoe groot elke ruimte is. Zet maten op de plattegrond en sla hem op als pdf om af te drukken of te versturen.

## Staten

Met {{ui:Tekenen}} aan toont **Staten** in het linkerpaneel één tabel tegelijk:

- **Deuren** en **Ramen**: elk op zijn merk (D1, D2 … en W1 …, gegeven terwijl u ze plaatst), zijn type, breedte, hoogte (en dorpel), niveau en de wand waarin hij zit.
- **Wanden per type**: voor elk wandtype het aantal wanden, hun dikte, hun totale lengte en hun zijoppervlak als **Bruto oppervlakte**, **Aftrekkingen** en **Netto oppervlakte**, met een totaal.
- **Ruimten**: nummer, naam, niveau, oppervlakte en omtrek, met het totale oppervlak.
- **Vloeren**: elke vloer met zijn niveau, soort en dikte, en zijn bruto oppervlakte, aftrekkingen en netto oppervlakte.
- **Afwerkingen**: elke afwerkingslaag van de wandtypen (per materiaal en zijde van de wand) en de plafonds, met het aantal vlakken en bruto, aftrekkingen en netto.
- **Wandtypen: opmeetgegevens**: wat eenmaal op elk wandtype is ingevoerd (eenheid, mortel, tarief), met het aantal wanden, hun lengte en netto oppervlakte, en het tarief maal de gemeten hoeveelheid. Zie [Wandopbouw](topic:wall-assemblies).
- **Afwerkingen per ruimte**, **Afwerkingen per wand**, **Afwerkingen per zone** en **Afwerkingshoeveelheden**: wat elke ruimte bedekt, met oppervlakten, tegelaantallen inclusief snijverlies en ondergrondvolumes. Zie [Ruimteafwerkingen en afwerkingsstaten](topic:room-finishes).
- Uw eigen **opzetten**: een staat die u hebt gegroepeerd, getotaliseerd en onder een naam hebt opgeslagen. Zie [Een staat indelen, opslaan en exporteren](topic:schedule-layouts).

De tabellen veranderen bij elke bewerking. Klik op een rij, of op één getal, om de elementen te kiezen waaruit het komt. **CSV downloaden** slaat de tabel op om in een rekenblad te openen; **Excel downloaden** en **Kopiëren voor Google Sheets** staan eronder. **Ruimteafwerkingen** en **Specificatie** ([De specificatie uit het model schrijven](topic:specification)) openen vanaf dezelfde plek.

## Oppervlakte en volume per laag

Kies **Lagen: oppervlakte en volume** in de lijst Staten. Die heeft één rij voor elke laag van elk wand-, vloer-, dak- en plafondtype in gebruik: het element, het type en zijn LOD, de laag (geteld vanaf de buitenzijde van een wand, vanaf de bovenkant van een vloer, dak of plafond), zijn materiaal en functie, zijn dikte, hoeveel elementen er zijn, de **netto oppervlakte** en het **volume**.

- Het oppervlak is de netto oppervlakte van de elementen van dat type, precies gemeten zoals in Wanden per type, Vloeren en Afwerkingen, volgens de meetmethode van het project. Een dak wordt op de helling gemeten; geen meetmethode heeft een regel voor daken.
- Het volume is dat oppervlak maal de eigen dikte van de laag.
- Een vloer, dak of plafond zonder type is één rij: één laag van zijn eigen dikte.
- Een luchtspouw staat met haar oppervlak vermeld en telt niet mee in het totale volume. Een membraan heeft een oppervlak en geen volume.

Klik op een rij om zijn elementen te kiezen. **CSV downloaden** slaat de tabel op.

## Hoe oppervlakten worden gemeten

Elk oppervlak bestaat uit drie getallen die optellen: bruto min aftrekkingen is netto. De regel staat boven elk van deze tabellen, en het is één regel: de staten, de hoeveelheden die in het IFC-bestand worden opgeslagen en de opmeting die naar TakeoffCraft gaat, gebruiken allemaal dezelfde.

- **Een wand**: bruto is één zijvlak van de wand, zijn lengte langs de hartlijn maal zijn hoogte (het werkelijke vlak voor een wand met een gevormde bovenkant of voet). Elke deur, elk raam en elke andere opening wordt afgetrokken, breedte maal hoogte, elke opening één keer.
- **Een vloer of een plafond**: bruto is het oppervlak binnen de omtrek. Elke opening en uitsparing erin wordt één keer afgetrokken.
- **Een wandafwerking**: elke afwerkingslaag van het wandtype bedekt één zijvlak van de wand, gemeten zoals de wand, met dezelfde afgetrokken openingen. Een afwerking is een laag van de wand: ze staat vermeld onder Afwerkingen en wordt niet bij het wandoppervlak opgeteld, zodat een wand met een deur nooit dubbel wordt geteld.

Dat is de **CadCraft-standaard**: elke opening wordt afgetrokken, wat haar grootte ook is; wandlengten zijn langs de hartlijn; aanslagen worden niet gemeten. Het is wat elk project gebruikt totdat u een andere methode kiest.

## Een meetmethode kiezen

Boven de staat somt **Meetmethode** de methoden op die bij BimCraft horen, en **Een methodebestand laden** neemt die van het eigen kantoor. De keuze wordt in het IFC-bestand opgeslagen, als één stap van ongedaan maken, en drie dingen volgen haar tegelijk: de staten, de netto hoeveelheden die in het bestand worden opgeslagen, en de opmeting die naar TakeoffCraft gaat. De regel boven elke tabel begint dan met de methode, haar bron, de datum waarop de bron is gelezen, en de woorden **Niet gecontroleerd door een hoeveelheidsmeter**.

Een methode is een klein bestand met feiten, geen programmacode. Voor elke hoeveelheid zegt ze:

- **de kleinste opening die wordt afgetrokken**: bijvoorbeeld een opening van 0.5 m² of minder blijft in het wandoppervlak;
- **hoe wandaansluitingen worden gemeten**: langs de hartlijn; of bij een wand die tegen een andere eindigt, tot het vlak van die wand; of bij elk wanduiteinde dat op een andere wand stuit, tot het nabije vlak;
- **of aanslagen worden gemeten** voor een afwerking (de omslagen van de afwerking in de openingen), als oppervlak of, als ze ondiep zijn, als lengte. De diepte van een aanslag wordt genomen als de helft van de wanddikte;
- **wat ze zegt over metselwerk**: hoe het wordt gemeten, en eventuele verlies- of mortelmarges die ze vermeldt.

De methoden die bij BimCraft horen:

| Methode | Wanden: kleinste opening die wordt afgetrokken | Wandafwerkingen | Plafonds | Metselwerk |
|---|---|---|---|---|
| CadCraft-standaard | elke opening | elke opening | elke uitsparing | geen toeslagen |
| RICS NRM 2 (Verenigd Koninkrijk), 2e editie 2021 | 0.5 m² of kleiner blijft staan | 1 m² of kleiner blijft staan | 1 m² of kleiner blijft staan | op oppervlak; geen percentages vermeld |
| AAQS Standard Method for Africa 2015 | 0.5 m² of kleiner blijft staan | 0.5 m² of kleiner blijft staan | 0.5 m² of kleiner blijft staan | op oppervlak; netto gemeten, 0% verlies |
| IS 1200 (India), 1976, metselwerk | 0.1 m² of kleiner blijft staan | standaard (zie hieronder) | standaard | op volume |
| BIA Technical Note 10 (Verenigde Staten), 2009 | elke opening | standaard | standaard | 5% verlies op stenen, 15% op mortel |

Lees deze beperkingen voordat u op een methode vertrouwt:

- **Geen hoeveelheidsmeter heeft er één gecontroleerd.** Elk is gemaakt door de genoemde bron te lezen en de getallen op te schrijven met de clausule waaruit ze komen. Bent u een hoeveelheidsmeter en kunt u er één controleren, dan horen de makers van de app dat graag.
- Waar een regel niet uit de bron kon worden gelezen, zegt de methode voor die regel **niet bevestigd** en wordt de CadCraft-standaard gebruikt. Geen enkele methode die bij BimCraft hoort, heeft een bevestigde regel voor wandaansluitingen, aanslagen of vloeren; die worden onder alle methoden dus op de standaardmanier gemeten.
- IS 1200 trekt openingen in pleisterwerk af in drie klassen. Een methodebestand kan nog geen klassen bevatten, dus wandafwerkingen gebruiken onder die methode de standaard, en de regel zegt dat.
- De South African Standard System of Measuring Building Work staat **niet** in de lijst: de tekst ervan kon niet worden gelezen. De AAQS-methode voor Afrika zegt dat ze is gebaseerd op de editie 1991 van dat systeem, maar het is een ander document.
- BIA Technical Note 10 is een branchenota voor begrotingen, geen standaardmethode van meten.
- Een opening die precies de kleinste maat heeft, volgt de eigen woorden van de methode ("niet groter dan", "kleiner dan"). Maten binnen 2 delen op 10 000 daarvan tellen als precies die maat.
- Onder een methode volgen het netto zijoppervlak van een wand en het netto oppervlak van een vloer of plafond in het bestand de methode, en de hoeveelheidsset noemt die. De bruto oppervlakten en de volumes in het bestand blijven zoals getekend.

**Opmerkingen bij deze methode**, onder de keuzelijst, zegt wat elke bron open laat. **De bron openen** gaat naar het document.

### De eigen methode van uw kantoor

Een methodebestand is JSON in het formaat `cadcraft-measurement-method`. Elke waarde erin noemt de clausule waaruit ze komt; een waarde zonder clausule wordt geweigerd. Het bestand wordt gecontroleerd bij het laden: een verkeerd veld wordt benoemd, en niets uit een bestand dat niet slaagt, wordt gebruikt. Eenmaal gekozen, wordt het bestand in het project opgeslagen, zodat het project op een andere computer hetzelfde opent. Het id is een gewone naam van uzelf (het mag niet het id zijn van een methode die bij de app hoort).

## Stenen, blokken en mortel

**Wandtypen: opmeetgegevens** telt de eenheden en de mortel van elk wandtype waarvan de eenheid een lengte en een hoogte heeft (zie [Een type zijn opmeetgegevens geven](topic:wall-assemblies#give-a-type-its-takeoff-data)). Dit zijn de formules, precies zoals ze worden berekend:

- **Eenheden per oppervlak van één blad** = 1 / ((steenlengte + voeg) × (steenhoogte + voeg)). Een baksteen van 215 × 65 mm met een voeg van 10 mm: 1 / (225 × 75 mm) = 59.26 per m².
- **Stenen in de breedte van één blad** = (bladdikte + voeg) / (steenbreedte + voeg), naar een heel getal afgerond, minimaal 1. Een blad van 102.5 mm van stenen van 102.5 mm is 1; een wand van 215 mm van dezelfde stenen is 2.
- **Eenheden** = eenheden per oppervlak × stenen in de breedte × het netto oppervlak van het wandvlak, opgeteld over de metselbladen van het type.
- **Eenheden te bestellen** = eenheden × (1 + verlies % / 100), naar boven afgerond op een hele eenheid. Het verlies is het percentage dat op het type is ingevoerd; zonder invoer het percentage van de methode, als ze er een vermeldt; anders 0%.
- **Mortel** = netto oppervlak × bladdikte, minus het volume van de stenen (eenheden × lengte × hoogte × breedte), dan plus het extra percentage dat op het type is ingevoerd voor kepen of gaten, dan plus de toeslag van de methode als ze er een vermeldt. Dit vereist de steenbreedte.

Wat wordt aangenomen: elk metselblad van een type is gebouwd van de ene eenheid van dat type; een blad dat dikker is dan één steenbreedte telt als dat aantal steenbreedten, elk als een blad dat in de lengte is gelegd, zodat gesneden stenen, sluitstenen en speciale vormen niet apart worden geteld; waar geen laag is aangevinkt als gebouwd van de eenheid, worden de kernlagen als bladen genomen, en de notitie boven de tabel zegt dat. **Hoeveelheid** is het tarief maal waar het tarief per geldt, wat nu ook een eenheid te bestellen kan zijn, 1000 eenheden te bestellen of een m³ mortel.

Merken zijn de IFC-label van de elementen: wijzig er een in **Eigenschappen** (Label), en de staat volgt. Voor elk IFC-model, getekend of niet, telt [Hoeveelheden optellen, elementen weergeven en ruimten staten](topic:quantity-totals) elke eigenschap op.

## Maten

De plattegrond toont de lengte van elke getekende wand langs zijn buitenvlak (een binnenwand: langs één vlak) en, voor een wand met deuren of ramen, een keten van de hoeken tot elke opening. {{ui:Maten}} in de modelbalk verbergt ze en toont ze weer.

## De plattegrond opslaan als pdf

1. Toon het niveau dat u wilt en stel de eenheden in het paneel **Niveaus** in.
2. Klik op {{ui:Afdrukken}} in de modelbalk.
3. BimCraft slaat "<file> — <level>.pdf" op: de plattegrond in zwart-wit op de grootste standaardschaal die op de pagina past (1/4" = 1'-0", 1/8" = 1'-0" … op Letter in voet en inch; 1:50, 1:100 … op A4 in millimeter), met de muren gevuld, deuren, ramen, ruimtenamen en oppervlakten, maten, en een titelstrook met het niveau, het bestand, de snijhoogte, de datum en de schaal.

De pdf is getekend als lijnen en tekst, dus blijft hij scherp op elk zoomniveau en is de tekst doorzoekbaar.

## Goed om te weten

- De staten geven weer wat de tekenhulpmiddelen hebben gemaakt. Deuren en ramen uit een ander programma verschijnen in plaats daarvan onder Hoeveelheidstotalen.
- Om het werk te prijzen, geeft u de hoeveelheden aan TakeoffCraft: zie [Hoeveelheden naar TakeoffCraft](topic:takeoff). De csv-download blijft beschikbaar voor een rekenblad.
