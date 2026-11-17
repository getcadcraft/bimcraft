---
title: Leidingen en kanalen
summary: Teken leiding- en kanaaltrajecten op de plattegrond via hun hartlijnen; de bochten, T-stukken, verlopen en overgangen worden voor u gemaakt, de trajecten horen bij systemen met verbonden aansluitpunten in het IFC-bestand, en ze verschijnen in plattegronden, staten en de opmeting.
keywords: leiding, leidingen, leidingwerk, kanaal, kanalen, kanaalwerk, hvac, mep, mechanisch, bocht, T-stuk, verloop, overgang, fitting, fittingen, afsluiter, afsluiters, schuifafsluiter, kogelafsluiter, doorgangsafsluiter, terugslagafsluiter, stijgleiding, helling, afvoer, sanitair, riool, ontluchting, koud water, warm water, koelwater, verwarming, gas, brandbeveiliging, toevoerlucht, retourlucht, afvoerlucht, systeem, systemen, aansluitpunt, aansluitpunten, aansluiting, aansluitingen, sanitair toestel, sanitaire toestellen, wastafel, toilet, closet, fonteintje, keukenspoelbak, douchebak, wasbak, sanitaire aansluitwaarden, uhc, dfu, riolen dimensioneren, afvoerdimensionering, gebouwafvoer, aftakking, hoofdafvoer, luchtdebiet, cfm, wrijving, gelijke wrijving, dimensionering, staat, opmeting, nbr, nbr 5648, nbr 5688, nbr 8160, lijmbaar pvc, riool, dn
from: 85140bc5
---

## Wat u gaat doen

Teken de leidingen en kanalen van een gebouw zoals u wanden tekent: klik op de hoekpunten van de hartlijn van een traject op de hoogte die u instelt. BimCraft maakt de fittingen, plaatst elk onderdeel in zijn systeem en verbindt ze, zodat andere programma's het traject lezen als één verbonden systeem.

## Een leiding tekenen

1. Zet {{ui:Tekenen}} aan, open {{ui:Build}} en kies {{ui:Leiding}}.
2. Kies in de balk het **systeem** (koud water, warm water, sanitaire afvoer, gas…). Dat zet een gebruikelijk materiaal: koper voor water, PVC voor afvoeren en ontluchtingen, staal voor verwarming, koelwater, gas en brandbeveiliging. Wijzig het **materiaal**, de **klasse** en de **maat** als dat nodig is. Maten en wanden komen uit openbare normen: stalen leiding ASME B36.10M, koperen buis ASTM B88, PVC ASTM D1785 en PEX ASTM F876. Braziliaanse projecten kunnen **PVC-waterleiding (NBR 5648)** gebruiken, de lijmbare PVC voor koud water, en **PVC-afvoerleiding (NBR 5688)**, serie normaal of versterkt, voor afvoeren en ontluchtingen: hun maten worden aangeduid met DN (DN 25, DN 100). Zodra u een van die kiest, blijft een ander systeem bij de Braziliaanse leidingen (PVC-afvoerleiding voor een sanitaire afvoer na PVC-waterleiding).
3. Stel **Hoogte** in: de hoogte van de hartlijn van de leiding boven het niveau.
4. Klik waar de leiding begint, daarna op elk hoekpunt. Dubbelklik, of druk op {{key:Enter}}, bij het laatste punt. {{key:Backspace}} neemt het laatste hoekpunt terug; {{key:Esc}} laat het traject vallen.

De leiding klikt vast zoals wanden dat doen, en ook aan andere trajecten: begin op het uiteinde van een leiding om erop verder te gaan, of eindig op de lijn van een leiding om er een aftakking van te maken. Een nieuw traject krijgt de hoogte van de leiding waar het op vastklikt.

Een traject dat begint of eindigt op een aansluitpunt van een stuk apparatuur, krijgt diens maat en systeem en blijft eraan vastzitten: zie [MEP-apparatuur met aansluitpunten](topic:mep-equipment) en [Leidingen en kanalen aansluiten op apparatuur](topic:mep-connections).

## Stel de loodgieterijnorm van het project in

De eerste lijst in de leidingbalk is de **loodgieterijnorm** van het model: **US (IPC, inch)** of **Brazilië (ABNT, DN)**. Die wordt in het model opgeslagen, zodat iedereen die het bestand opent de trajecten op dezelfde manier begint. Bij **US** begint een nieuw traject in koper (water) of PVC Schedule 40 (afvoeren), in inch, met de helling van de International Plumbing Code. Bij **Brazilië** begint koud water als PVC soldável DN 25, begint sanitaire en regenafvoer en ontluchting als PVC esgoto DN 100 met de helling van NBR 8160, en begint warm water in koper. Het geldt ook voor een traject dat begint op een connector van een toestel of op een aansluiting van apparatuur. Al getekende leidingen behouden hun materiaal en hun eigen tabellen; de materiaallijst blijft open, zodat u in een US-model bewust nog één Braziliaans traject kunt tekenen. Een bestand zonder keuze gedraagt zich zoals voorheen: een nieuw traject volgt het materiaal dat in gebruik is.

## Een kanaal tekenen

1. Kies {{ui:Kanaal}}. Kies het systeem (toevoer, retour, afvoer of buitenlucht) en de vorm: rond, rechthoekig of platovaal.
2. Typ de breedte en de hoogte (de breedte van een rond kanaal is de diameter), en **Hoogte** voor de hoogte van de hartlijn.
3. Om het op het luchtdebiet te dimensioneren, typ het **Luchtdebiet** en de **Wrijving** en klik op {{ui:Maat bepalen}}. Het kanaal wordt bepaald op gelijke wrijving, de methode uit het hoofdstuk over kanaalontwerp van het ASHRAE Handbook, en naar boven afgerond op een op voorraad zijnde maat, zodat de wrijving op of onder de ingetypte norm uitkomt. Zonder ingetypte norm wordt 0.08 in. waterkolom per 100 ft (0.8 Pa/m) gebruikt. Een rechthoekig kanaal houdt de hoogte die u typte en krijgt een breedte; BimCraft zegt dat wanneer de zijden meer dan 4 op 1 zijn.
4. Klik de hoekpunten zoals bij een leiding.

## Sanitaire toestellen

{{ui:Build}} › {{ui:Familie plaatsen}} biedt vijf toestellen om mee te beginnen, elk met een afvoer en een aansluiting op koud water: een **Toilet**, een **Fonteintje**, een **Keukenspoelbak**, een **Douchebak** en een **Wasbak**. Hun voorkant is naar u toe gericht terwijl u ze plaatst, en hun achterkant staat tegen de wand. Hun afvoeren zitten op de kleinste toestelafvoer van NBR 8160 (DN 100 voor het toilet, DN 50 voor de keukenspoelbak, DN 40 voor de andere); water is DN 20. Wijzig hun maten of bewerk ze, zoals elke familie: zie [Families en hun maten](topic:families).

Een familie zegt welk toestel het is onder {{ui:Sanitair toestel}} op het tabblad {{ui:Aansluitingen}} van de familie-editor. Haar afvoer wordt dan geteld in aansluitwaarden: 6 UHC voor een toilet, 1 voor een fonteintje, 3 voor een keukenspoelbak of een wasbak, 2 voor een douchebak (NBR 8160), of de drainage fixture units van IPC Table 709.1.

## Vanaf de connector van een toestel

Elementen die zijn geplaatst uit een familie met connectoren (de afvoer en de kraan van een wastafel, de hals van een luchtuitlaat: zie [Een familie bewerken](topic:family-editor)) tonen hun vrije connectoren als punten zolang {{ui:Leiding}} of {{ui:Kanaal}} aan staat, en de aanwijzer klikt erop vast.

- **Begin op een connector**: het traject krijgt zijn systeem en maat (de leiding van het materiaal in de balk op of net boven de maat van de connector; een rond kanaal van zijn diameter). Wanneer de connector naar beneden of naar boven wijst, zoals een afvoer onder een wastafel, gaat het traject eerst recht omlaag of omhoog naar de hoogte in **Hoogte**, en dan verder langs uw klikken.
- **Eindig op een connector**: het traject gaat omlaag of omhoog naar de connector en eindigt daar.

Het traject is in het IFC-bestand verbonden met het element, zodat andere programma's het toestel zien als onderdeel van zijn systeem. Een element dat later wordt geplaatst met een connector op het uiteinde van een traject, is er ook mee verbonden. Een traject dat van een connector wordt weggehaald, is er niet langer mee verbonden.

## De fittingen, voor u gemaakt

| Waar | Wat BimCraft maakt |
|---|---|
| Een traject buigt | Een bocht. Stalen leiding met de lange straal van ASME B16.9 (1.5 × de maat), andere leiding op één buitendiameter, rond kanaal op 1.5 diameter, rechthoekig kanaal op één breedte (of één hoogte bij een bocht omhoog of omlaag) |
| Een traject eindigt op de lijn van een ander traject | Een T-stuk; het andere traject wordt daar gesplitst |
| Twee trajecten van verschillende maat komen uit op elkaar | Een verloop (leidingen) of een overgang (kanalen) |
| Twee trajecten van dezelfde maat komen onder een hoek uit op elkaar | Een bocht |

Wanneer u een traject wijzigt, verplaatst of verwijdert, wordt elke fitting op die verdieping opnieuw gemaakt. Als een been te kort is voor de fittingen aan zijn uiteinden, zegt BimCraft dat en verandert het niets: verplaats het hoekpunt verder weg.

:::note
De fittingen en afsluiters zijn generiek: getekend op basis van de maat van de leiding of het kanaal, niet van een catalogus van een fabrikant. Mof-, pers- en gegroefde fittingen, afsluiterbehuizingen en apparatuur hebben de eigen maten van de fabrikant; controleer ze bij uw leverancier voordat u bestelt.
:::

## Stijgleidingen

Typ tijdens het tekenen een nieuwe hoogte in **Hoogte** en druk op {{key:Enter}}: het traject gaat recht omhoog of omlaag bij het laatste hoekpunt, met een bocht aan elk uiteinde. Een stijgleiding kan omhoog tot in het niveau erboven. Elk niveau toont de onderdelen van een traject die binnen zijn bereik vallen, met **UP** of **DN** bij de stijgleiding.

## Afvoeren en hun helling

Sanitaire en regenafvoeren beginnen met de kleinste helling die de International Plumbing Code toestaat voor hun maat: 1/4 in. per voet tot 2-1/2 in., 1/8 in. per voet van 3 tot 6 in., 1/16 in. per voet vanaf 8 in. Braziliaanse PVC-afvoerleiding begint met de helling van NBR 8160: 2 % tot DN 75, 1 % vanaf DN 100. Typ een andere helling in de balk of in Eigenschappen: `1/4"/ft`, `2 %` of `1:50`. Het traject valt vanaf zijn eerste punt, dus teken afvoeren in de richting waarin ze stromen. De plattegrond toont de val en een pijl. Eigenschappen waarschuwt wanneer een afvoer vlakker is dan het minimum van de code.

## Riolen dimensioneren op sanitaire aansluitwaarden

Kies een sanitaire afvoer: **Aansluitwaarden** in Eigenschappen zegt hoeveel ze afvoert en de kleinste maat die ze nodig heeft. Elk sanitair toestel waarvan de afvoerconnector op het traject zit, telt mee, en ook elke afvoer die erin uitmondt: teken afvoeren in de richting waarin ze stromen, elk eindigend op de afvoer waarin ze uitmondt.

- Afvoeren in Braziliaanse PVC-afvoerleiding tellen **UHC** en volgen NBR 8160; de andere tellen **DFU** en volgen de International Plumbing Code.
- **Afvoer**: een **Aftakking** wordt gedimensioneerd met de tabel van de code voor sanitaire aftakkingen; een **Gebouwafvoer** met de tabel per helling, dus de **Helling** is belangrijk.
- Een afvoer is nooit kleiner dan de sanitaire afvoeren die ze bedient (een toilet heeft DN 100 nodig, of 3 in.), en ook niet kleiner dan een afvoer die erin uitmondt. Onder NBR 8160 is een gebouwafvoer minstens DN 100.

{{ui:Rioleringen dimensioneren}} maakt elke sanitaire afvoer van het model die te klein is voor zijn aansluitwaarden de maat die hij nodig heeft, als één stap die u ongedaan kunt maken. Een afvoer die groter is getekend dan nodig, blijft zoals hij is. Wanneer een afvoer meer afvoert dan de grootste maat van zijn leiding bij zijn helling kan verwerken, zegt BimCraft dat: geef hem een steilere helling of een andere leiding.

:::note
De tabellen zijn die van horizontale afvoeren. Stapels, ontluchtingen en regenafvoeren worden hier niet gedimensioneerd: controleer ze, en het hele ontwerp, tegen de code die voor het project geldt.
:::

## Afsluiters

1. Kies {{ui:Afsluiter}} en de soort: schuif-, kogel-, doorgangs- of terugslagafsluiter.
2. Klik op een leiding waar hij komt. De leiding wordt rond de afsluiter doorgesneden en de afsluiter is aan beide kanten verbonden.

Eigenschappen van het traject somt zijn afsluiters op, elk met {{ui:Verwijderen}}.

Meer soorten afsluiters, een vuilvanger, spjelden op kanalen, uw eigen leidingspecificaties en families van fabrikanten: zie [Leidingspecificaties, afsluiters, spjelden en families van fabrikanten](topic:pipe-specs).

## Een traject wijzigen

Kies elk deel van een traject, in de plattegrond of in de 3D-weergave. In Eigenschappen:

- **Systeem**, **Materiaal**, **Klasse** en **Maat** (leidingen), of **Vorm**, **Breedte**, **Hoogte** (kanalen).
- **Hoogte boven het niveau** verplaatst het hele traject omhoog of omlaag.
- **Isolatie**: de dikte, bewaard voor de controle van de vrije ruimte en de lijst met doorbrekingen (er wordt niets voor getekend): zie [Leidingen en kanalen controleren tegen de constructie](topic:mep-against-structure).
- Stalen leiding: **In spools snijden**: zie [Stalen leidingspools en spoolbladen](topic:pipe-spools).
- **Helling** (leidingen).
- **Debiet** met {{ui:Maat bepalen}}: voor water de kleinste maat die het water op 8 ft/s (2.4 m/s) houdt, of 5 ft/s (1.5 m/s) voor warm water; op 3 m/s voor de Braziliaanse PVC-waterleiding (NBR 5626). Voor kanalen de snelheid en wrijvingsnorm van het kanaal zoals getekend. Sanitaire afvoeren worden in plaats daarvan gedimensioneerd op hun aansluitwaarden: zie hieronder **Riolen dimensioneren op sanitaire aansluitwaarden**.

Elke wijziging is één stap van {{ui:Ongedaan maken}}. {{key:Delete}} verwijdert het hele traject.

## Plattegronden

- Leidingen kleiner dan 150 mm (ongeveer 6 in.) worden als één lijn op hun hartlijn getekend; grotere leidingen en alle kanalen als twee lijnen op hun breedte.
- Elk systeem heeft zijn eigen kleur; de pdf van de plattegrond drukt ze in zwart af.
- Elk traject krijgt een label met zijn maat en systeem (bijvoorbeeld `2" CW` of `16×10 SA`).
- Het aanzichtbereik van een plattegrond bepaalt welke trajecten erin staan, en {{ui:Getoond in deze plattegrond}} kan **Leidingen** of **Kanalen** weglaten: zie [Aanzichten, aanzichtbereiken en uw eigen bladen](topic:views-and-sheets).

## Staten en de opmeting

Het paneel {{ui:Staten}} voegt **Leidingen** toe (per systeem, materiaal en maat, met hun lengten), **Kanalen** (per systeem, vorm en maat, met lengten en het buitenoppervlak) en **Fittingen en afsluiters** (per soort en maat, geteld). Klik op een rij om te kiezen wat die toont; {{ui:CSV downloaden}} downloadt haar.

{{ui:Opmeten}} neemt de trajecten mee naar TakeoffCraft: leiding en kanaal per maat, als trajecten getekend op de plattegrond (hellende afvoeren gemeten langs hun helling), en fittingen en afsluiters geteld waar ze staan: zie [De hoeveelheden van het model naar TakeoffCraft sturen](topic:takeoff). Stijgleidingen blijven buiten dat blad, omdat een plattegrond ze niet kan meten; de staat Leidingen geeft hun lengte.

## In het IFC-bestand

Elk traject is een samenstelling die zijn onderdelen bevat: leiding- en kanaalsegmenten, fittingen en afsluiters, elk met zijn type, materiaal, een kleur voor zijn systeem en zijn aansluitpunten. Elkaar rakende aansluitpunten zijn verbonden, en elk onderdeel hoort bij zijn distributiesysteem (IFC2X3-bestanden krijgen hetzelfde als stromingssegmenten, fittingen en regelaars in een systeem). Andere programma's die IFC-systemen lezen, zien per systeem één verbonden traject. De eigen definitie van het traject blijft erbij, zodat BimCraft het op dezelfde manier opnieuw maakt wanneer u het wijzigt.
