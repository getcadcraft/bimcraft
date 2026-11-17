---
title: Gå igenom en modell
summary: Gå igenom en IFC-modell i ögonhöjd med tangentbordet, med gravitationen som håller dig på golvet och väggar som stoppar dig.
keywords: gå, genomgång, förstapersonsvy, flyga, navigera, ögonhöjd, gravitation, kollision, wasd, inuti, rundtur
from: 0a22854a
---

## Vad du gör

Se en modell som någon som står i den: gå längs en korridor, in i ett rum, upp för en trappa.

## Steg

1. Öppna en IFC-modell och klicka på {{ui:Vandra}} i verktygsfältet.
2. Klicka på golvet där du vill stå. Du står där med ögonen på {{ui:Ögonhöjd}} (1.6 m från början, visas och skrivs in i den {{ui:Enheter}} du valde: 5'-3" i fot och tum, 1600 i millimeter; ett bart tal gäller den enheten, eller skriv en enhet som 1.8 m), och tittar åt det håll vyn tittade.
3. Flytta dig med {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltangenterna. Håll ned {{key:Shift}} för att gå snabbare. Dra i vyn för att titta runt.
4. Tryck på {{key:Esc}} eller klicka på {{ui:Klar}} för att stoppa. Vyn stannar där du var, redo att kretsa runt.

## Det här ser du

- **Gravitation** håller dig på golvet under dig och tar dig upp för steg och trappor. Stäng av den för att sväva: {{key:E}} eller {{key:PageUp}} stiger, {{key:Q}} eller {{key:PageDown}} sjunker.
- **Stopp vid väggar** stannar dig precis innan väggar, dörrar och allt annat i vägen, och låter dig glida längs dem. Stäng av den för att gå igenom.
- Dolda och genomskinliga element, och det en sektion skär bort, stoppar dig inte och du kan inte stå på dem.

## Vanliga misstag

- **Ingenting händer när jag trycker på W.** Tangenterna går till en ruta du skriver i: klicka i vyn först.
- **Jag föll en lång bit.** Det fanns inget golv under platsen (en öppning, eller golvet är dolt). Stäng av gravitationen, eller börja på ett golv.

## Nästa

- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
- [Skär en IFC-modell med ett sektionsplan](topic:section-plane)
