---
title: Een scan vergelijken met het model en de 4D-planning
summary: Beoordeel elk element van het model tegen een geopende puntenwolk (gebouwd, deels, ontbrekend, niet bereikt), zie het percentage gebouwd, kleur het model erop in, en laat bij een geladen 4D-planning zien wat er achter of voor ligt op de 4D-dag.
keywords: scan, puntenwolk, voortgang, percentage voltooid, gebouwd, ontbrekend, achter op schema, voor op schema, 4D, voortgang op de bouwplaats, afwijking, as-built, laserscan, drone, vergelijken
from: 6fdc9003
---

Open een IFC, open er naast een puntenwolk (zie [Puntenwolken](topic:point-clouds)) en plaats die op het model. De sectie {{ui:Scan vergelijken met het model}} verschijnt in het rechterpaneel zolang een wolk geopend is.

## Wat het doet

Druk op {{ui:Vergelijken}}. Elk element van het model wordt beoordeeld op zijn oppervlak, omdat dat is wat een scanner ziet. De zes vlakken van zijn doos worden in cellen van ongeveer 20 cm verdeeld; een cel telt mee wanneer een scanpunt binnen uw {{ui:Tolerantie}} (in het begin 50 mm) van het vlak ligt. Het beste grote vlak telt, dus een wand die van één kant is gescand, wordt niet benadeeld voor de andere kant.

- **Gebouwd**: minstens 40 % van het oppervlak is gezien.
- **Deels**: 10 % tot 40 %.
- **Ontbrekend**: minder dan dat, maar de scan bereikt het element (punten binnen 1.5 m ervan).
- **Niet bereikt**: de scan is er nooit geweest, dus er wordt niets over gezegd.

Voor gebouwde en deels gebouwde elementen geeft het ook de gemiddelde afwijking van de scanpunten ten opzichte van het oppervlak van het model, en zegt het of het element op zijn plaats staat (binnen de tolerantie), dichtbij (binnen drie keer) of afwijkend (verder). Het ziet alleen afwijkingen tot vijf keer de tolerantie: een element dat verder van zijn plaats is gebouwd dan dat, wordt als ontbrekend weergegeven.

De samenvatting geeft het percentage gebouwd onder de elementen die de scan bereikt, op aantal en op volume. Deels gebouwde elementen worden apart geteld en niet bij de gebouwde elementen opgeteld.

## Tegen de 4D-planning

Met een geladen 4D-planning (zie [4D-planning](topic:4d-schedule)) gebruikt het resultaat ook de dag die u op de 4D-schuifregelaar hebt ingesteld: elementen die tegen die dag gepland zijn en die de scan niet als gebouwd toont, zijn **achter op schema**; elementen die nog niet aan de beurt zijn en wel gebouwd zijn, zijn **voor op schema**. Elementen achter op schema worden vermeld in {{ui:Problemen}}, en de tabel kan erop worden gefilterd. Zonder planning wordt niets gezegd over achter of voor op schema.

## De tabel en het model

Klik op een rij om het element te selecteren. {{ui:Model inkleuren}} kleurt elementen groen (gebouwd), oker (deels), rood (ontbrekend) of grijs (niet bereikt); {{ui:Eigen kleuren}} zet ze terug. {{ui:CSV opslaan}} schrijft de tabel weg. Met {{ui:Overeenkomende elementen als veldgecontroleerd markeren}} worden alle elementen die als gebouwd en binnen de tolerantie zijn gezien, als veldgecontroleerd gemarkeerd (LOD 500, methode scan), in één stap die u ongedaan kunt maken. Zie [Elementen markeren als gecontroleerd of veldgecontroleerd](topic:verification).

:::warning
Dit vergelijkt de doos van elk element met scanpunten binnen een tolerantie. Het is **geen opmeting, geen hoeveelheidsopmeting en geen basis voor betaling**. Een element dat verborgen zit achter een gescand element (een wand achter een bekleding, een vloer onder een vloerafwerking) deelt het oppervlak en kan als gebouwd worden gelezen; een gebogen of hellend element heeft een doos die groter is dan het lichaam ervan en kan als deels of ontbrekend worden gelezen. Bekijk de lijst voordat u erop handelt. Vergunningsopmerkingen en voortgangsnotities horen hier niet bij: ze blijven in de kolommen waarin u ze bewaart.
:::

Een assistent kan dezelfde vergelijking uitvoeren met het hulpmiddel {{ui:Scan vergelijken met het model}}; het wijzigt niets in het model.
