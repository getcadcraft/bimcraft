---
title: Botsingen oplossen met de voorstellen van elke discipline
summary: Bij de botsingsresultaten toont Oplossingen voorstellen bij elke botsing wat elke discipline eraan kan doen — een kanaal omleiden onder een balk, een leiding opzij zetten, een kolom verplaatsen, een opening in een balk — elk getest op een kopie van het model, met de afwegingen, zodat u kunt accepteren of afwijzen. Geaccepteerde oplossingen gaan erin als één stap ongedaan maken.
keywords: clash, clashoplossing, botsingen oplossen, botsingen afhandelen, coördinatie, oplossingen voorstellen, omleiden, omweg, offset, kanaal, leiding, kabelgoot, balk, kolom, opening, mantelbuis, afweging, discipline, constructie, mechanisch, sanitair, elektra, architectuur, assistent
from: f7bafdd9
---

## Wat u gaat doen

Zet een lijst botsingen om in beslissingen. Elke discipline (constructie, mechanisch, sanitair, elektra, architectuur) stelt oplossingen voor alleen voor de eigen elementen. Elk voorstel wordt op een kopie van het model gecontroleerd, en u kiest.

## Stappen

1. Voer eerst de botsingscontrole uit. Zie [Botsingen controleren](topic:clash-check) en [Leidingen en kanalen tegen de constructie controleren](topic:mep-against-structure).
2. Klik onder de resultaten op {{ui:Oplossingen voorstellen}}. Het paneel **Voorgestelde oplossingen** opent naast het model.
3. Bij elke botsing ziet u de voorstellen van elke discipline, de beste eerst. Elke regel zegt wat het doet en welke afwegingen het heeft: of het de botsing oplost, hoeveel nieuwe botsingen het maakt, welke regels het breekt, hoeveel traject het toevoegt of hoe ver het verplaatst, hoeveel fittingen het gebruikt en een kostenscore.
4. Klik op {{ui:Show}} om de elementen in 3D te zien. Klik op {{ui:Accept}} bij de oplossing die u wilt (één per botsing), of op {{ui:Reject}}, dat is Afwijzen.
5. De regel onderaan zegt wat al uw geaccepteerde oplossingen samen doen: hoeveel botsingen worden opgelost, hoeveel er nog over zijn en of er iets nieuws botst.
6. Klik op {{ui:Geaccepteerde oplossingen toepassen (één stap ongedaan maken)}}. De botsingscontrole draait opnieuw. {{ui:Undo}} neemt ze allemaal in één keer terug.

## Wat elke discipline mag doen

- **Mechanisch** (kanalen, verwarmings- en koelleidingen): aan de kant die raakt omheen of eronder omleiden, het hele traject omhoog of omlaag brengen, opzij verplaatsen, of een rechthoekig kanaal platter maken met hetzelfde oppervlak.
- **Sanitair** (water, afvoer, gas, brand): dezelfde zetten, behalve dat een zwaartekrachtafvoer nooit een omweg krijgt; ze kan alleen als geheel worden verplaatst, met behoud van haar val.
- **Elektra** (kabelgoten en leidingen): dezelfde zetten; een goot moet 150 mm vrij houden erboven om kabel te leggen.
- **Constructie**: een kolom verplaatsen (tot 300 mm), of een opening in het lijf van een balk of in een vloer voor het traject dat erdoor gaat. Elke constructieve oplossing zegt dat de constructeur ze moet goedkeuren.
- **Architectuur**: een mantelbuis in een muur voor het traject dat erdoor gaat, of een muur verplaatsen waarvan bekend is dat hij geen last draagt.

## Wat u moet zien

- Oplossingen die een regel breken, worden gemarkeerd: dichter dan de speling van 25 mm bij iets anders, onder de vrije hoogte van 2,100 mm, een lijfopening groter dan 40% van de balkhoogte of te dicht bij de uiteinden, en een balk die zijn overspanning zou veranderen.
- Oplossingen die BimCraft kan maken, worden in het model toegepast: trajecten die u met de gereedschappen Leiding en Kanaal hebt getekend, en kolommen die u hebt getekend. De andere zeggen **Alleen advies**: accepteren voegt dan een issue toe in het tabblad Issues.

## Goed om te weten

- De oplossingen komen uit ingebouwde regels in de app; er wordt geen AI voor gebruikt.
- Als u een assistent verbindt (zie [Een AI-assistent laten werken met uw model](topic:assistants)), kan die de botsingen lezen en eigen voorstellen voor één discipline aan het open paneel toevoegen. Ze worden op dezelfde manier gecontroleerd, gemarkeerd met de naam van de assistent, en er verandert niets tot u accepteert en toepast.
- De kopie wordt gecontroleerd met kaders rond elk element en elk deel van een traject. Een schuin traject kan daardoor een botsing tonen die de botsingscontrole niet zou tonen. Voer de botsingscontrole opnieuw uit na het toepassen: die is het laatste woord.
- De grenzen (hoe ver een traject mag verschuiven, hoe hoog een omweg mag klimmen, de speling) zijn de standaardwaarden die in het paneel staan.

## Volgende

- [Issues en BCF-bestanden](topic:issues-bcf)
- [Leiding- en kanaaltrajecten tekenen](topic:pipes-and-ducts)
