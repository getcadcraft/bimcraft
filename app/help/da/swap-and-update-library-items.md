---
title: Byt et placeret emne, og opdatér emner fra biblioteket
summary: Erstat et placeret bibliotekemne med et andet og behold dets plads og emnenummer, og tjek Bibliotek for nyere versioner af alt i modellen.
keywords: byt, erstat, substituér, opdatér, nyere version, søg efter opdateringer, bibliotek, trukket tilbage, licensændring, emnenummer
from: 8bdfe01d
---

## Hvad du skal gøre

Skift mening om et emne uden at flytte det igen, og hold bibliotekemnerne i en model opdaterede.

## Byt ét emne

1. Klik på et placeret bibliotekemne i modellen.
2. I {{ui:Egenskaber}} klikker du på {{ui:Byt emne…}} i feltet **Bibliotekemne**. Fanen {{ui:Bibliotek}} åbnes.
3. Find det nye emne, og klik på dets kort.
4. Klik på {{ui:Byt … til dette}}.

Elementet beholder sin plads, drejning, etage, emnenummer, mængde og noter. Dets type, form og emnedata ændres til det nye emne. Emner placeret på samme måde deler én type, ligesom når du placerer dem.

Et emne, der har varianter (se [Placér og byt et bibliotekemne, der har varianter](topic:library-variants)), viser sine andre varianter øverst på fanen {{ui:Bibliotek}}, når du bytter det: ét klik for hver.

Når det nye emne er en anden slags ting, for eksempel en vask i stedet for et bord, ændres elementets IFC-klasse, så den matcher (her fra inventarelement til sanitært terminal), så anden software medtager det korrekt i lister. Det forbliver det samme element med samme GlobalId, så links til det virker stadig. {{key:Mod+Z}} gendanner den gamle klasse med det gamle emne.

## Søg efter opdateringer

1. Klik på {{ui:Opdateringer}} i værktøjslinjen (eller på {{ui:Søg efter opdateringer}} i et bibliotekemnes boks).
2. Læs listen: hvert bibliotekemne i modellen med dets version i modellen, den nyeste version og en status: **Opdateret**, **Nyere version**, **Trukket tilbage** eller **Ikke fundet**. Den siger også, hvad der er ændret (geometri, data, licens eller en rettelse).
3. Klik på {{ui:Opdatér}} på en række, eller på {{ui:Opdatér alle}}.

## Hvad du skal se

- "Opdaterede *n* placeringer. Placeringer, emnenumre, mængder og noter bevares."
- "Opdateret: *emne*"-linjer i ændringslisten. {{key:Mod+Z}} fortryder hver enkelt.

## Godt at vide

- Kun emner, der kommer fra biblioteket, kan tjekkes. Emner fra filer har intet bibliotek-id.
- Når en licens er ændret, beholder kopien, du allerede har placeret, den licens, den kom med, indtil du opdaterer den.
- Et **Trukket tilbage**-emne tilbydes ikke til nye placeringer. Et emne, der er trukket tilbage af ophavsretlige grunde, kan slet ikke hentes; erstat det med {{ui:Byt emne…}}.
- En placeret variant forbliver den variant, når den nyere version af emnet stadig har den; ellers får den emnets standardvariant.
- Ved tjek sendes kun emne-id'er og versioner, aldrig din model.
