---
title: Ruimteafwerkingen en afwerkingsstaten
summary: Leg vast wat de vloer, de wanden en het plafond van elke ruimte bedekt, voeg zones toe zoals een betegelde spatwand, en krijg afwerkingsstaten per ruimte, wand en zone, met oppervlakken, tegeltellingen inclusief snijtegels en ondergrondvolumes.
keywords: afwerking, afwerkingen, afwerkingsstaat, ruimteafwerkingen, vloerafwerking, wandafwerking, plafondafwerking, plint, tegel, tegels, snijtegels, tegelaantal, verlies, ondergrond, dekvloer, ondergrondplaat, stucwerk, zone, spatwand, wandband, natte ruimte, interieur, hoeveelheden
from: 8c30498c
---

## Wat u gaat doen

Vertel BimCraft één keer waarmee elke ruimte is afgewerkt. De afwerkingsstaten geven dan de oppervlakken, de te bestellen tegels en de ondergrondvolumes, en ze veranderen mee met het model.

## Stappen

1. Zet {{ui:Tekenen}} aan, open **Staten** in het linkerpaneel en klik op **Ruimteafwerkingen**.
2. Klik onder **Afwerkingstypen** op **Een afwerkingstype toevoegen**. Geef het een naam, een soort (Tegel, Plaat, Laag of Paneel) en een dikte. Voor een tegel geeft u de lengte en breedte van de tegel, de voeg en een verliestoeslag in procenten. Ligt er iets onder de afwerking (een dekvloer, een ondergrondplaat, een stuclaag), noem het dan onder **Ondergrond** en geef de dikte.
3. Kies onder **Ruimten** de vloer-, wand- en plafondafwerking van elke ruimte. Typ een plintnaam en de hoogte als de ruimte er een heeft.
4. Klik onder **Zones** op **Zone toevoegen** voor een deel van een ruimte dat een andere afwerking krijgt:
   - een **wand**zone is een band tussen twee hoogten boven de vloer (een betegelde spatwand van 0 tot 1200, een wandband). Hij zit op elke wand van de ruimte, of u kiest wanden van die ruimte in het model en klikt op de knop **Aan** om hem daartoe te beperken;
   - een **vloer**- of **plafond**zone is een oppervlak dat u typt. Het wordt van de eigen afwerking van de ruimte afgetrokken.
5. Klik op **Opslaan**. Dat is één stap in Ongedaan maken. Lengtes typt u in de eenheden van het project.

## De staten

Vier onderdelen worden aan de lijst Staten toegevoegd:

- **Afwerkingen per ruimte**: elke ruimte met zijn vloer-, wand- en plafondafwerking, hun oppervlakken, en de plint met zijn lengte.
- **Afwerkingen per wand**: elk stuk wand aan de kant van een ruimte en het deel ervan dat een afwerking bedekt, met de lengte, het bruto oppervlak, de aftrekposten, het netto oppervlak en, voor tegels, hele tegels, snijtegels en te bestellen tegels.
- **Afwerkingen per zone**: elke zone met zijn afwerking, netto oppervlak, tegels en ondergrondvolume.
- **Afwerkingshoeveelheden**: één rij per afwerking: netto oppervlak, hele en snijtegels, te bestellen tegels, de ondergrond en het volume ervan, en het eigen volume van de afwerking.

Groepeer, totaliseer, sla op en exporteer ze zoals elke staat: zie [Een staat indelen, opslaan en exporteren](topic:schedule-layouts). Klik op een getal om te selecteren waar het vandaan komt: de aftrekposten van een wand selecteren de bijbehorende deuren en ramen.

## Hoe afwerkingen worden gemeten

- **Wanden**: elk stuk wand aan de kant van de ruimte, de lengte langs de ruimte maal de hoogte die de afwerking bedekt, minus het deel van elke deur en elk raam binnen die hoogte. Een wand die lager is dan de ruimte wordt afgewerkt tot zijn eigen bovenkant. De meetmethode van het project bepaalt welke openingen te klein zijn om af te trekken ([Staten](topic:plan-schedules-and-pdf)).
- **Vloeren en plafonds**: de ruimte binnen de wandvlakken, minus de eilanden erin.
- **Plinten**: de wandlengte van de ruimte, minus de breedte van de deuren.
- **Tegels**: gelegd als een raster vanaf één hoek van het oppervlak, met één voeg tussen de tegels. Een tegel die volledig op het oppervlak ligt, is een hele tegel. Een tegel die er gedeeltelijk op ligt (aan een rand, rond een opening) is een snijtegel. Te bestellen tegels zijn hele plus snijtegels, plus de verliestoeslag, naar boven afgerond. Elke snijtegel telt als een nieuwe tegel: restanten worden niet hergebruikt.
- **Ondergrondvolume**: het netto oppervlak maal de dikte van de ondergrond.
- Een telling met **≈** wordt berekend uit het oppervlak in plaats van tegel voor tegel uitgelegd: een oppervlak met een getypte zone eruit, of een zeer groot oppervlak.

## Goed om te weten

- De afwerkingen worden bewaard in het gebouwbestand (eigenschapsset `CadCraft_Finishes` op het project). Elke ruimte met een afwerking krijgt ook de standaard IFC-eigenschapsset `Pset_SpaceCoveringRequirements`, zodat andere programma's de namen lezen.
- De tegelindeling begint bij een hoek. Een indeling die op de ruimte is gecentreerd, een patroon (visgraat, staandverband) en hergebruik van restanten worden niet berekend.
- Een gebogen wand en een ruimtegrens die geen wand is (een ruimtescheider), staan vermeld als **Andere begrenzing**, met hun lengte en zonder openingen.
- Het eerder aanwezige item **Afwerkingen** somt de afwerkingslagen van de wandtypen op. **Lagen: oppervlak en volume** somt elke laag van elk gelaagd type op. De ruimteafwerkingen hier worden bovenop die lagen op de ruimte toegepast.
- Een assistent kan afwerkingen voor u instellen met `finishes_set`: zie [Laat een AI-assistent met uw model werken](topic:assistants).
