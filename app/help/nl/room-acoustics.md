---
title: De nagalm van een ruimte controleren en ernaar luisteren
summary: Nagalmtijd per octaafband voor elke ruimte (Sabine en Eyring) op basis van de grootte en de afwerkingen, een doelwaarde naar keuze, en een stem, een klap of muziek die wordt afgespeeld via een berekende impulsresponsie van de ruimte.
keywords: akoestiek, nagalm, nagalmtijd, rt60, sabine, eyring, absorptie, echo, geluid, luisteren, impulsresponsie, spraak, klaslokaal, kantoor, tapijt, plafondtegel, geluidsoverlast
from: 16996cbb
---

De sectie {{ui:Ruimteakoestiek}} in het linkerpaneel berekent hoe lang geluid in elke ruimte nagalmt. Het leest de vloeroppervlakte, de hoogte, de wanden, deuren en ramen van elke ruimte uit het geopende IFC-model. Er wordt niets in het model gewijzigd.

## Kies de afwerkingen

Waar het model aangeeft wat op een oppervlak zit, leest de ruimte dat af: de binnenlaag van het wandtype van elke wand (gips, stucwerk, baksteen, beton en blokwerk zijn bekend), de soort vloer (hout of beton) en of een plafond betegeld is. Het label naast elke keuze geeft aan of die uit het model komt, een standaardwaarde is of door u is gekozen. Kies een andere afwerking om die te overschrijven. Wat het model niet vermeldt, blijft op de standaardwaarde staan. De coëfficiënten zijn **gangbare gepubliceerde waarden**; vervang ze door de testgegevens van een product zodra u die heeft. Typ een **doel** (de langste middenfrequente nagalmtijd die u wilt) en elke ruimte die daarboven uitkomt, krijgt een waarschuwing, met de absorptie die de tijd omlaag brengt.

## De tabel lezen

Nagalm wordt gegeven voor 125 Hz tot 4 kHz. Sabine past bij levendige ruimten en Eyring bij dode ruimten. De regel met *Gebruikt* kiest Eyring wanneer de gemiddelde absorptie boven 0.2 ligt. De absorptie van de lucht is inbegrepen; die verkort de hoge banden in grote ruimten. Het is een statistisch model: het gaat ervan uit dat geluid zich gelijkmatig verspreidt. Lange of platte ruimten en zeer kleine ruimten geven daarom slechts een ruwe indicatie, en meubels, personen en open deuren worden niet meegerekend.

## Luisteren

{{ui:In deze ruimte afspelen}} speelt een stem (hier gemaakt), een klap, getokkelde noten of **uw eigen geluidsbestand** (dat op uw computer blijft) af, via een impulsresponsie die voor de ruimte is berekend: het directe geluid, de eerste reflecties van een doos van die grootte, en een staart die uitsterft met de eigen nagalmtijd van de ruimte in elke band. {{ui:Droog afspelen}} speelt hetzelfde geluid op hetzelfde niveau af, zonder de ruimte. U kunt de impulsresponsie of het geluid in de ruimte opslaan als WAV-bestanden. Het klinkt als een ruimte van die grootte en afwerking, niet als een echte ruimte.

## Personen en meubels

Typ het aantal **personen in deze ruimte** om hun absorptie toe te voegen. Meubels die het model bevat (banken, bedden, stoelen, tafels, kasten, herkend aan de naam) voegen hun eigen absorptie toe. De cijfers zijn ruwe planningswaarden, afgerond. Vervang ze door metingen voor een ruimte die ertoe doet.

## Bron en luisteraar

Onder {{ui:Bron en luisteraar}} drukt u op {{ui:Bron plaatsen}} of {{ui:Luisteraar plaatsen}} en klikt u op de plattegrond van de ruimte. Het geluid dat u afspeelt, klinkt dan vanaf die plek: het directe geluid komt aan na de afstand, en het nagalmende deel heeft het niveau dat bij die afstand hoort. Wis beide om terug te gaan naar het afstandsvak.

## Ongelijke absorptie en ruimtemodi

Typ onder {{ui:Ongelijke absorptie (kamer als doos)}} de ruimte als doos en kies de vloer-, plafond- en wandafwerkingen. De tabel voegt Fitzroy en Arau-Puchades toe aan Sabine en Eyring. Zij behandelen de drie paren tegenoverliggende vlakken apart, zodat een ruimte met tapijt en een hard plafond niet te kort wordt gelezen. Wanneer de paren sterk verschillen, zegt een opmerking welk paar u kunt vertrouwen. Onder de tabel toont **Ruimtemodi** de laagste staande golven van de doos en de frequentie waaronder de ruimte afzonderlijke modi heeft in plaats van een gelijkmatig geluidsveld. Dit zijn voorspellingen voor een dooskamer, een ontwerphulpmiddel en geen meting.

## Eenheden

Ruimteoppervlakten, hoogten, volumes en afstanden worden getoond in de {{ui:Eenheden}} die u koos (vierkante en kubieke voet, inch, millimeter, centimeter of meter). De berekening zelf blijft in SI; alleen de weergave verandert. Tijden (seconden), frequenties en niveaus blijven gelijk.
