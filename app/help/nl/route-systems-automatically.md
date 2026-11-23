---
title: Kanalen, afvoeren, water- en koudemiddelleidingen automatisch routeren
summary: Bij de botsingscontrole zoekt BimCraft een weg om het open model heen voor kanalen, afvoer op zwaartekracht, koud en warm water en gesplitste of multi-split koudemiddelleidingen, en tekent de leidingen met hun fittingen in één stap ongedaan maken. Een tekenhulp: maten, hellingen en controles komen uit de tabellen in het programma en de getallen die u invoert; niets hier zegt dat een ontwerp aan een voorschrift voldoet.
keywords: automatisch routeren, autoroute, kanalen routeren, leidingen routeren, afvoer, sanitair, zwaartekracht, stapel, ontluchting, sifon, water, warm water, retourlus, circulatie, koudemiddel, split, multi-split, VRF, equivalente lengte, aftakset, Y-stuk, wye
from: 5841d513
---

## Wat u gaat doen

Laat BimCraft een netwerk van leidingen aanleggen tussen aansluitingen die al in het model staan, om wanden en balken heen, en controleer het daarna met getallen die u kunt zien.

## Stappen

1. Open het model en de botsingscontrole. Kies onder **Kanalen automatisch routeren** een luchtbehandelingskast met zijn eindpunten, of onder **Andere systemen automatisch routeren** een systeem.
2. **Sanitaire afvoer op zwaartekracht.** Typ de positie van de uitloop en, als u die hebt, de posities van de stapels. Vink **Elke verdieping in één keer routeren** aan om elke verdieping met toestellen mee te nemen: de afvoeren van elke verdieping sluiten op hun eigen niveau op de stapel aan, en de stapel loopt van boven het hoogste tappunt tot aan zijn voet. Druk op {{ui:Routeren}}.
3. **Sifon naar ontluchting.** Het paneel toont de afstand van elke sifon tot zijn ontluchting. Typ bij **Grootste afstand van een sifon tot zijn ontluchting** het maximum dat uw voorschrift toestaat; elk toestel dat daarboven ligt, wordt als niet gedaan vermeld, met de mm erboven. Vink **Ontluchten via de stapel** aan als de toestellen geen eigen ontluchtingsstomp hebben: de afstand wordt dan tot de stapel gemeten. BimCraft heeft hiervoor geen voorschriftentabel: u typt het getal.
4. **Koud en warm water.** Kies de bron, typ de druk bij de bron en de druk die u bij een toestel nodig hebt. Vink **Warm water** aan, kies de warmwateraansluiting van de verwarmer, en vink **Retourlus** aan om een retourleiding te eindigen op de aansluiting **hot-return** van de verwarmer, of op een andere aansluiting die u kiest (die eindigt 150 mm kort, open, zodat u hem zelf kunt aansluiten).
5. **Gesplitst, multi-split en VRF.** Kies de buitenunit, vink de binnenunits aan en typ de capaciteit van elk. Typ de grenzen uit de gegevens van uw fabrikant. Typ de **equivalente lengte** van een bocht en van een aftakset (de waarden van de fabrikant), en de langste en de totale lengte worden gecontroleerd op equivalente lengtes.
6. Druk op {{ui:Routeren}}. Het paneel zegt hoeveel leidingen er zijn getekend, en wat niet kon en waarom. {{ui:Ongedaan maken}} haalt alles in één stap terug.

## Wat u zou moeten zien

Leidingen met bochten, T-stukken en verlopen; afvoeren die minstens de kleinste helling voor hun maat hebben; ontluchtingsstompen bij de toestellen; koudemiddelleidingen als een vloeistof- en gaspaar dat bij elke bocht op dezelfde manier draait, met een aftakset gemarkeerd waar een tak van de hoofdleiding vertrekt.

## Goed om te weten

- Waar een afvoer op een andere afvoer aansluit, tekent het model een T-stuk. Het plan noemt die plaatsen 45-graden Y-aansluitingen (wye), zodat u de fitting kunt wijzigen.
- Warm water gebruikt de eigen warmwateraansluiting van het toestel als de familie er een heeft, en anders een aansluiting 100 mm naast de koude.
- De koudemiddelleidingen beginnen tussen de twee poorten van elke unit. Als de twee poorten van een unit te dicht bij elkaar staan voor een bocht, blijft het paar in het midden tussen hen.
- Het waternetwerk gebruikt de vraagcurve en wrijvingsgetallen die in de berekeningen staan; vervang ze door die van uw voorschrift voordat u op de drukken vertrouwt.
- Grote woningen kunnen een halve minuut of langer nodig hebben, vooral voor het warmwaternetwerk.
- Dit is een tekenhulp. Een bevoegd persoon controleert maten, hellingen, ontluchtingen en drukken tegen het voorschrift dat van toepassing is.

## Volgende

[Controleren op botsingen](topic:clash-check) · [Leidingen en kanalen tegen de constructie controleren](topic:mep-against-structure) · [Verbindingen tussen leidingen en apparatuur](topic:mep-connections)
