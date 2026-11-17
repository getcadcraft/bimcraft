---
title: Tekenadvies: ongebruikelijke maten worden gemaakt, met een waarschuwing
summary: BimCraft maakt wat u vraagt. Een maat die buiten het gebruikelijke valt, wordt een waarschuwing in Problemen; het houdt u nooit tegen bij het tekenen of opslaan.
keywords: advies, waarschuwing, problemen, geweigerd, tekent niet, te klein, te smal, minimum, limiet, trapbreedte, optrede, trede, kolom, helling, deurmaat, rasterlijn, niveauhoogte, dakkapel, wenteltrap, plateauhelling, korte wand, geen blokkades
from: 20090130
---

## Wat u gaat doen

Teken een maat die niet de gebruikelijke is, en zie waar BimCraft u daarover informeert.

## Stappen

1. Teken of wijzig het element zoals u wilt: bijvoorbeeld een trap van 400 mm breed.
2. BimCraft maakt het zoals gevraagd.
3. Open {{ui:Problemen}} in de bovenbalk. Onder **Tekenadvies** staat een waarschuwing die het element benoemt, de maat die u opgaf en het gebruikelijke bereik.
4. Klik op de waarschuwing om het element te selecteren. Wijzig de maat als het een vergissing was, of laat hem staan: een waarschuwing kan worden geaccepteerd, met of zonder reden.

## Wat advies is

Deze maten werden vroeger geweigerd. Ze worden nu gemaakt, elk met een waarschuwing:

- **Trappen**: smaller dan 500 mm of breder dan 5 m; optredes buiten 100 tot 300 mm; treden buiten 150 tot 600 mm.
- **Wenteltrappen**: een spil buiten 40 tot 400 mm; treden minder dan 100 mm diep op de loopijn.
- **Kolommen**: minder dan 50 mm breed of minder dan 300 mm hoog.
- **Hellingen**: minder dan 300 mm breed.
- **Deuren en ramen**: minder dan 100 mm breed of hoog.
- **Rasterlijnen**: minder dan 100 mm lang.
- **Wanden**: een wand die korter dan 50 mm overblijft, bijvoorbeeld door bijsnijden.
- **Niveaus**: minder dan 1 m of meer dan 100 m hoog (nieuw gebouw, gesplitste niveaus, de hoogte van een niveau).
- **Dakkapellen**: buiten 600 mm tot 12 m breed, een voorwand buiten 300 mm tot 4 m, een overstek van meer dan 1 m, wanden buiten 50 tot 400 mm.
- **Bouwplateaus**: zijhellingen buiten 1:1 tot 10:1.

## Wat nog steeds geweigerd wordt

Alleen wat niet gebouwd of gevonden kan worden, elk met een bericht dat zegt waarom:

- Een maat onder 10 mm (een wand onder 1 mm): er valt niets te bouwen.
- Een dakkapel die niet breder is dan twee keer zijn wanddikte: zijn twee zijwanden zouden samenkomen.
- Een bouwplateau met zijhellingen steiler dan 0.1:1 (dat is een keermuur) of vlakker dan 100:1 (de grading zou eindeloos doorlopen).
- Iets dat niet past waar u het plaatste, een omtrek die zichzelf kruist, of een element dat niet meer in het model staat.

## Goed om te weten

- Het advies wordt uit het model berekend, dus het is er ook weer wanneer u het bestand later opent, en het verdwijnt zodra de maat in orde is.
- Modelcontroles, regelgevingspakketten en IDS-controles tonen ook alleen wat ze vinden. Niets in {{ui:Problemen}} houdt u tegen bij het tekenen of opslaan.
- De gebruikelijke bereiken zijn algemene praktijk, geen bouwvoorschrift. Voor een voorschrift voegt u de add-on Bouwregelgeving toe en kiest u uw plaats.

## Volgende

- [Een model controleren op veelvoorkomende problemen](topic:model-checks)
- [Trappen en leuningen](topic:stairs-and-railings)
