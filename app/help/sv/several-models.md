---
title: Se flera IFC-modeller tillsammans
summary: Lägg till fler IFC-filer i scenen, till exempel arkitektur, konstruktion och installationer, se dem i samma koordinater, flytta en, dölj en och välj vilken du redigerar.
keywords: federera, federering, federerad modell, flera modeller, flera filer, kombinera, överlagring, samordning, disciplin, konstruktion, installationer, tekniska installationer, förskjutning, flytta modell, aktiv modell, lägg till en modell
from: df0efbbf
---

## Vad du gör

Titta på modeller från olika discipliner på ett ställe: arkitektens modell tillsammans med konstruktions- och installationsmodellerna. Var och en förblir sin egen fil; BimCraft visar dem bara tillsammans.

## Steg

1. Öppna den första IFC-modellen som vanligt.
2. Klicka på {{ui:Lägg till en modell…}} i {{ui:Modeller}} till vänster och välj en eller flera IFC-filer. Var och en visas i listan och i 3D-vyn.
3. Avmarkera en modell för att dölja den; markera den för att visa den igen.
4. Om en modell kommer in på fel plats (en annan mätpunkt), klicka på {{ui:Flytta}} under den, skriv hur långt den ska flyttas längs X, Y och Z i meter och klicka på {{ui:Verkställ}}.
5. Modellen med punkten är den du redigerar. Klicka på en annan modells punkt för att redigera den.
6. Klicka på × bredvid en modell för att ta bort den från scenen.

## Öppna teamets modeller

När den öppna modellen är en molnfil i ett teamprojekt visas {{ui:Öppna teamets modeller}} under listan. Den öppnar projektets andra IFC-modeller bredvid denna, var och en flyttad med den förskjutning projektet angett. Modeller som är dolda för dig stannar utanför och räknas; en modell som projektet vrider öppnas ovriden och räknas också; filer som inte är IFC (en DWG till exempel) hoppas över och nämns i statusraden. En modell som redan är öppen öppnas aldrig två gånger. Knappen är dold för en fil som inte finns i ett teamprojekt.

## Vad du bör se

- Varje modell i den första modellens koordinater, så som dess fil placerar den. Modeller exporterade från samma projekt linjerar utan att flyttas.
- Om du markerar ett element i en modell du inte redigerar visas dess egenskaper skrivskyddade, med {{ui:Redigera den modellen}} för att växla.
- {{ui:Modellträd}}, {{ui:Våningsplan}}, {{ui:Färg}}, listan {{ui:Ändringar}}, placering av biblioteksobjekt och {{ui:Spara som IFC}} fungerar alla på modellen du redigerar. Dölj, isolera, genomskinlig och {{ui:Markera allt}} fungerar över alla modeller.
- {{ui:Spara som IFC}} laddar ner modellen du redigerar, med enbart dess ändringar.

## Vanliga misstag

- **En modell ligger långt bort eller saknas.** Dess fil använder andra koordinater. Använd {{ui:Anpassa}} för att hitta den och {{ui:Flytta}} den sedan på plats.
- **Ta bort eller Kopiera är nedtonat på ett markerat element.** Det tillhör en annan modell: växla till den först.
- **Att öppna en fil med Välj en fil ersatte allt.** Det startar en ny scen. Använd {{ui:Lägg till en modell…}} för att lägga till filer i den du har.

## Nästa

- [Dölj, isolera och genomskinliga element](topic:hide-and-isolate)
- [Färglägg element efter en egenskap](topic:color-by-property)
