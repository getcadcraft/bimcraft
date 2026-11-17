---
title: Kies het programma dat de afbeelding tekent
summary: De keuze Engine in het dialoogvenster Renderen: onze eigen twee engines, andere programma's in CadCraft Studio, en wat het web in plaats daarvan doet.
keywords: render, engine, renderer, renderengine, plug-in, plugin, studio, extern programma, getekend door, wachtrij, add-on-engine
from: 44a1ef5e
---

{{ui:Renderen}} heeft een keuze **Engine** boven Modus. Onze eigen twee engines zijn altijd beschikbaar en werken overal; add-ons kunnen er meer toevoegen, en in CadCraft Studio bevat de lijst ook de programma's die de scène overnemen.

| Engine | Wat het doet | Waar |
|---|---|---|
| Ingebouwd: Snel | Het snelle beeld: daglicht, zachte schaduwen, glas- en metaallooks, in seconden | De browser en Studio |
| Ingebouwd: Padtracer | Licht dat tussen oppervlakken weerkaatst, op uw videokaart of processor, de renderwachtrij en de andere computers in uw netwerk | De browser en Studio |
| De engine van een add-on | Hij tekent het beeld en geeft het terug: zie [De afbeelding tekenen met een ander programma](topic:render-other-program) | De browser (een engine geschreven in JavaScript) of Studio (een engine die een programma uitvoert) |
| Een programma dat de scène overneemt | Studio zet de scène in de eigen map en houdt die gelijk | Studio |
| Openen in … | Slaat de scène op en opent die in een programma; er komt niets terug: zie [De scène openen in een ander programma](topic:render-open-in) | Het web slaat het bestand op |

## Hoe de keuze werkt

- Als u Snel of de Padtracer kiest, verandert de Modus mee, en omgekeerd. Verder verandert er niets aan het dialoogvenster voor wie nooit een andere engine gebruikt.
- Een engine die niet beschikbaar is, blijft in de lijst staan met de reden ("not found", "needs a newer version"); u kunt hem niet kiezen. In de browser toont een engine die alleen in Studio werkt "saves a file": {{ui:Renderen}} slaat dan de scène en de instellingen op in een bestand dat u naar dat programma brengt.
- De keuze wordt opgeslagen met de renderinstellingen van het bestand, en de engine die u het laatst koos, is de startengine voor bestanden die geen eigen keuze hebben.
- Een afbeelding van een ander programma vermeldt welk programma hem heeft getekend en welke versie, in het dialoogvenster en in de renderwachtrij. De beloften op de pagina [Renderen](topic:render) gelden alleen voor **onze eigen** engines: een ander programma verlicht, tint en bemonstert op zijn eigen manier, dus twee afbeeldingen van één scène lijken qua camera, zon, lampen en belichting op elkaar, maar niet pixel voor pixel.

## Wat elke engine krijgt

De scène gaat naar een ander programma als een **pakket**: het model als USD-bestand (hetzelfde bestand dat [Opslaan als USD](topic:usd) schrijft), en een instellingenbestand met wat een USD-importeur niet betrouwbaar kan overnemen: de exacte materiaalwaarden, de lampen die aan staan met hun vermogen en lichtprofielen, de zon, de lucht, de belichting en de camera zoals het dialoogvenster die zou tekenen. Er wordt niets ergens naartoe geüpload.

## De renderwachtrij

Een afbeelding voor een ander programma kan wachten in [de renderwachtrij](topic:render#the-render-queue), net als onze eigen; de taak onthoudt voor welke engine hij is.
