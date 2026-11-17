---
title: Vælg hvilket program der tegner billedet
summary: Motorvalget i dialogen Render: vores egne to motorer, andre programmer i CadCraft Studio, og hvad webben gør i stedet.
keywords: render, motor, renderer, renderingsmotor, plug-in, plugin, studio, eksternt program, tegnet af, kø, add-on-motor
from: 44a1ef5e
---

{{ui:Render}} har et **Motor**-valg over {{ui:Mode}}. Vores egne to motorer er altid der og virker overalt; add-ons kan tilføje flere, og i CadCraft Studio indeholder listen også de programmer, der overtager scenen.

| Motor | Hvad den gør | Hvor |
|---|---|---|
| Indbygget: Hurtig | Det hurtige stillbillede: dagslys, bløde skygger, glas- og metaludseende, på få sekunder | Browseren og Studio |
| Indbygget: Path tracer | Lys, der kastes mellem flader, på dit grafikkort eller din processor, renderingskøen og de andre computere på dit netværk | Browseren og Studio |
| En add-on-motor | Den tegner og returnerer billedet: se [Tegn billedet med et andet program](topic:render-other-program) | Browseren (en motor skrevet i JavaScript) eller Studio (en motor, der kører et program) |
| Et program, der overtager scenen | Studio lægger scenen i sin mappe og holder den opdateret | Studio |
| Åbn i … | Gemmer scenen og åbner den i et program; intet kommer tilbage: se [Åbn scenen i et andet program](topic:render-open-in) | Webben gemmer filen |

## Sådan virker valget

- Valg af Hurtig eller Path tracer ændrer {{ui:Mode}} med det, og omvendt. Intet andet i dialogen ændrer sig for dem, der aldrig bruger en anden motor.
- En motor, der ikke er tilgængelig, bliver på listen med årsagen (»ikke fundet«, »kræver en nyere version«); du kan ikke vælge den. I browseren viser en motor, der kun kører i Studio, »gemmer en fil«: {{ui:Render}} gemmer så scenen og dens indstillinger i en fil, som du tager med til det program.
- Valget gemmes sammen med filens renderingsindstillinger, og den motor, du valgte sidst, er startmotoren for filer, der ikke har et valg af egen.
- Et billede fra et andet program siger, hvilket program der tegnede det og dets version, både i dialogen og i renderingskøen. Løfterne på siden [Render](topic:render) dækker kun **vores egne** motorer: et andet program belyser, justerer tonerne og sampler på sin egen måde, så to billeder af én scene er ens i kamera, sol, lamper og eksponering, men ikke pixel for pixel.

## Hvad hver motor får

Scenen går til et andet program som en **pakke**: modellen som en USD-fil (den samme fil, som [Gem som USD](topic:usd) skriver), og en indstillingsfil, der indeholder det, en USD-importør ikke kan stoles på med: de præcise materialeværdier, lamperne der er tændt med deres effekt og lysprofiler, solen, himlen, eksponeringen og kameraet, som dialogen ville tegne det. Intet uploades nogen steder.

## Renderingskøen

Et billede til et andet program kan vente i [renderingskøen](topic:render#the-render-queue) ligesom vores egne; dets job husker, hvilken motor det er til.
