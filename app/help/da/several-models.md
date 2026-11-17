---
title: Vis flere IFC-modeller sammen
summary: Tilføj flere IFC-filer til scenen, fx arkitektur, konstruktion og installationer, se dem i de samme koordinater, flyt én, skjul én, og vælg hvilken du redigerer.
keywords: føderér, føderation, fødereret model, flere modeller, flere filer, kombiner, overlæg, koordinering, fag, konstruktion, mep, installationer, forskydning, flyt model, aktiv model, tilføj en model
from: df0efbbf
---

## Hvad du skal gøre

Se modeller fra forskellige fag samlet ét sted: arkitektens model med konstruktions- og installationsmodellerne i. Hver forbliver sin egen fil; BimCraft viser dem blot sammen.

## Trin

1. Åbn den første IFC-model som sædvanligt.
2. Under {{ui:Modeller}} til venstre klikker du på {{ui:Tilføj en model…}} og vælger en eller flere IFC-filer. Hver vises på listen og i 3D-visningen.
3. Fjern markeringen i en model for at skjule den; sæt flueben igen for at vise den.
4. Hvis en model kommer på det forkerte sted (et andet opmålingspunkt), klikker du på {{ui:Flyt}} under den, skriver hvor langt den skal flyttes langs X, Y og Z i meter, og klikker på {{ui:Anvend}}.
5. Modellen med prikken er den, du redigerer. Klik på en anden models prik for at redigere den.
6. Klik på × ved siden af en model for at fjerne den fra scenen.

## Åbn teamets modeller

Når den åbne model er en skyfil i et teamprojekt, vises {{ui:Åbn teamets modeller}} under listen. Den åbner projektets andre IFC-modeller ved siden af denne, hver flyttet med den forskydning, projektet har sat. Modeller, der er skjult for dig, holdes ude og tælles; en model, som projektet har drejet, åbnes uden drejning og tælles også; filer, der ikke er IFC (fx en DWG), springes over og nævnes i statuslinjen. En model, der allerede er åben, åbnes aldrig to gange. Knappen er skjult for en fil, der ikke er i et teamprojekt.

## Hvad du bør se

- Hver model i den første models koordinater, som dens fil placerer den. Modeller eksporteret fra samme projekt flugter uden at blive flyttet.
- Når du vælger et element i en model, du ikke redigerer, vises dets egenskaber skrivebeskyttet, med {{ui:Rediger den model}} til at skifte.
- {{ui:Modeltræ}}, {{ui:Etager}}, {{ui:Farve}}, listen {{ui:Ændringer}}, placering af biblioteksemner og {{ui:Gem som IFC}} virker alle på den model, du redigerer. Skjul, isolér, gennemsigtig og {{ui:Vælg alle}} virker på tværs af alle modeller.
- {{ui:Gem som IFC}} downloader den model, du redigerer, med kun dens ændringer.

## Typiske fejl

- **En model er langt væk eller mangler.** Dens fil bruger andre koordinater. Brug {{ui:Tilpas}} til at finde den, og flyt den derefter på plads med {{ui:Flyt}}.
- **Slet eller Kopiér er gråt på et valgt element.** Det hører til en anden model: skift til den først.
- **Åbning af en fil med Vælg en fil erstattede alt.** Det starter en ny scene. Brug {{ui:Tilføj en model…}} til at føje filer til den, du har.

## Næste

- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [Farv elementer efter en egenskab](topic:color-by-property)
