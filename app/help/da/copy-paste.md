---
title: "Kopiér, sæt ind og duplikér biblioteksemner"
summary: "Kopiér et placeret biblioteksemne og sæt det ind, hvor du klikker, på samme sted ved siden af originalen eller i en anden model; kopiér andre elementers egenskaber som tekst; fortryd og gentag."
keywords: kopiér, sæt ind, duplikér, udklipsholder, sæt ind på samme sted, klip, slet, vælg alle, fortryd, gentag, redigeringsmenu, mere, biblioteksemne, placering, array
from: 6ac15931
---

## Hvad du gør

Læg flere kopier af et element, du allerede har placeret: et ekstra arbejdsbord eller en række vaske. Dette emne handler om **placerede biblioteksemner**, de elementer BimCraft har skrevet ind i modellen. Et af dem kan sættes ind i enhver model, også i en anden fane. Vægge, døre og alle andre elementer kopieres, klippes, indsættes og slettes på samme måde inden for deres egen model: se [Slet, klip, kopiér og sæt ind bygningselementer](topic:edit-elements).

Kommandoerne findes i værktøjslinjen over modellen: {{ui:Fortryd}}, {{ui:Gentag}}, {{ui:Kopiér}}, {{ui:Sæt ind}} og {{ui:Mere}}, samt en menu med {{ui:Klip}}, {{ui:Kopiér}}, {{ui:Sæt ind}}, {{ui:Sæt ind på samme sted}}, {{ui:Duplikér}}, {{ui:Slet}}, {{ui:Vælg alle}} og {{ui:Fravælg alle}}. En kommando, der ikke kan bruges lige nu, er gråtonet; peg på den for at læse hvorfor, eller klik på den, så forklarer statuslinjen det.

## Trin

1. Åbn en IFC-model med et biblioteksemne i, eller placér et først. Se [Placér udstyr og inventar fra biblioteket](topic:place-from-library).
2. Klik på elementet i 3D-visningen. Dets egenskaber viser en boks **Biblioteksemne**.
3. Klik på {{ui:Kopiér}} eller tryk på {{key:Mod+C}}.
4. Klik på {{ui:Sæt ind}} eller tryk på {{key:Mod+V}}. Placeringslinjen åbnes, og en gennemsigtig boks følger markøren, drejet som originalen.
5. Tryk på {{key:R}} for at dreje den 90°, {{key:Tab}} for at fastgøre dens bagside til en væg, eller skriv X og Y i placeringslinjen.
6. Klik, hvor kopien skal stå. Hvert klik placerer endnu en kopi; tryk på {{key:Esc}} for at stoppe.
7. Klik på {{ui:Gem som IFC}} for at downloade den redigerede kopi af modellen.

## Sæt ind på samme sted

{{ui:Mere}}, {{ui:Sæt ind på samme sted}} eller {{key:Mod+Shift+V}} sætter ind uden at klikke, ved samme X og Y og drejet på samme måde:

- **Ind i samme model, på samme etage**: To elementer på præcis samme sted ville ikke være til nytte, så kopien placeres lige ved siden af originalen, med en afstand på elementets bredde plus 100 mm langs elementets egen bredde. Brug sæt ind på samme sted igen fra den nye kopi for at lave en række.
- **Til en anden etage eller ind i en anden model**: præcis samme X, Y og drejning. BimCraft bruger etagen med samme navn; findes der ingen, bruges den nærmeste i højden. Statuslinjen angiver, hvilken der blev brugt.

## Duplikér

{{ui:Mere}}, {{ui:Duplikér}} eller {{key:Mod+D}} kopierer det valgte element og begynder straks at sætte det ind: ét trin i stedet for to.

## Ind i en anden model eller fane

Det, du kopierer, gemmes i denne browser, så du kan åbne en anden IFC-model eller BimCraft i en anden fane og sætte ind der. Den anden model har brug for selve biblioteksemnet: BimCraft har det, når elementet er blevet placeret, byttet eller opdateret i denne fane. Et element, der blev placeret i en tidligere session, kan kun sættes ind igen i sin egen model; i en anden model placeres det fra fanen {{ui:Bibliotek}}.

## Hvad du skal se

- Kopien i modellen, valgt, med det samme biblioteksemne, licens, udstyrsdata, mængde og note som originalen, og det **næste ledige elementnummer**. Ændr nummeret i Egenskaber under `CadCraft_Placement`.
- »Placeret: *element* (element *n*)« i ændringslisten. {{key:Mod+Z}} tager den tilbage; {{key:Mod+Y}} sætter den på plads igen.

## Godt at vide

- Kopier deler originalens type, så de bruger ét sæt geometri, ligesom når det samme element placeres to gange.
- {{ui:Fortryd}} og {{ui:Gentag}} dækker alle ændringer: redigerede værdier, placeringer, indsætninger, udskiftninger og opdateringer. Gentag sætter en placering tilbage præcis samme sted; en ny ændring fjerner det, der kunne gentages.
- I 2D-visningen af en tegning er der intet at vælge, så der er intet at kopiere. Brug {{ui:Rediger i CadCraft}} for at ændre tegningen, når den vises.

## Typiske fejl

- **{{ui:Sæt ind}} siger, at elementerne kommer fra en anden model.** Det sidste, du kopierede, var et bygningselement eller flere elementer: de sættes kun ind i deres egen model. Vælg ét placeret biblioteksemne, og kopiér det.
- **{{ui:Sæt ind}} siger, at kopien kommer fra en anden model uden sit biblioteksemne.** Placér elementet fra fanen {{ui:Bibliotek}} én gang i denne fane, og kopiér og sæt det derefter ind.
- **{{key:Mod+C}} kopierer sidetekst i stedet.** Der var markeret tekst på siden. Klik først på modellen.

## Se også

- [Taster og mus](topic:keyboard#edit)
- [BimCraft-indstillinger](topic:settings)
