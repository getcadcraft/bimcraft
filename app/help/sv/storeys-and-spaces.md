---
title: Visa och dölj våningsplan, utrymmen och kanter
summary: Stäng av våningsplan för att se in i en byggnad, visa rum och utrymmen, och slå av och på kantlinjerna.
keywords: våningsplan, nivåer, golv, dölj, isolera, rum, utrymmen, ifcspace, kanter, synlighet, sektion
from: b838dcc0
---

## Vad du gör

Titta in i en IFC-modell genom att stänga av våningsplanen ovanför den du är intresserad av, visa sedan rummen och utrymmena, och slå av kantlinjerna för en renare bild.

## Steg: titta på ett golv

1. Öppna en IFC-modell. Se [Öppna en IFC-modell och titta runt i 3D](topic:open-ifc-model).
2. Hitta listan {{ui:Våningsplan}} till vänster. Det översta våningsplanet står först, likt att läsa en sektion uppifrån och ner.
3. Avmarkera taket och alla våningsplan ovanför golvet du vill se.
4. Klicka på {{ui:Ovan}} för att titta ner på golvet.
5. Markera våningsplanen igen för att få tillbaka dem.

## Vad du bör se

Varje våningsplan du avmarkerar försvinner direkt, med allt som finns på det. Listan visar bara våningsplan som har något synligt i sig. Element som inte är tilldelade något våningsplan samlas som **Inte på ett våningsplan** längst ner; tomtelement och vissa möbler hamnar ofta där.

## Steg: visa rum och utrymmen

1. Klicka på {{ui:Utrymmen}} i verktygsfältet ovanför modellen. Knappen förblir intryckt.
2. Titta på modellen: rum och utrymmen visas som bleka, genomskinliga volymer.
3. Klicka på ett utrymme för att läsa dess egenskaper, till exempel namn, nummer och area, till höger.
4. Klicka på {{ui:Utrymmen}} igen för att dölja dem.

Utrymmen är dolda när en modell öppnas, eftersom de annars skulle täcka väggarna och golven.

## Steg: kanter

1. Klicka på {{ui:Kanter}} för att stänga av de tunna kantlinjerna.
2. Klicka igen för att slå på dem.

På mycket stora modeller (över 1.5 miljoner trianglar) är knappen nedtonad med tipset ”Kanter är av för mycket stora modeller”. Det sparar minne.

## Vanliga misstag

- **Att avmarkera ett våningsplan och ändå se delar av det.** Ett element tillhör det våningsplan som exportprogrammet tilldelade det. En hög vägg eller en trappa tillhör ofta bara sitt bottenplan, så den finns kvar när våningsplanet ovanför döljs, eller försvinner med våningsplanet under.
- **Att dölja våningsplan för att se in.** En sektionsbox är ofta snabbare: se [Skär en IFC-modell med ett sektionsplan](topic:section-plane#a-section-box). Du kan också avmarkera rader i {{ui:Modellträd}} (se [Hitta rätt med modellträdet](topic:model-tree)).
- **Att klicka på ett utrymme genom en vägg.** Klick väljer den närmaste synliga ytan. Dölj våningsplanet ovanför, eller byt till {{ui:Ovan}}, och klicka sedan.
- **Våningsplanens namn ser konstiga ut.** BimCraft visar de våningsplansnamn som är sparade i filen. Om de säger "Level 1" eller ett tal är det vad exportören skrev.
