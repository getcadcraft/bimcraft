---
title: Spara vyer och guidade genomgångar
summary: Behåll kameravyer av modellen efter namn, gå tillbaka till dem, spela upp dem efter varandra, och spela in en vandring genom byggnaden för uppspelning.
keywords: vyer, sparade vyer, kamera, kameror, synvinkel, scen, scener, rundtur, presentation, guidad genomgång, genomgång, flygning, spela in, spela upp, bana, animation
from: 3af19a36
---

{{ui:Vyer}} på verktygsfältet behåller kameror för 3D-vyn i modellens fil, så att du och alla du skickar den till kan gå rakt tillbaka till dem.

## Spara en vy

1. Ställ in 3D-vyn: rotera, zooma, dölj det du inte vill ha.
2. Klicka på {{ui:Vyer}}, skriv ett namn (eller behåll det som föreslås) och klicka på {{ui:Spara vy}} eller tryck på {{key:Enter}}.

Sparar du med ett namn som redan finns i listan uppdateras den vyn. Klicka på en vys namn för att gå tillbaka till den; kameran rör sig dit mjukt.

Pilarna ändrar ordningen, pennan byter namn, papperskorgen tar bort. Varje ändring är ett steg, så {{key:Ctrl+Z}} ångrar den.

## Spela upp vyerna

{{ui:Spela upp vyerna}} går från en vy till nästa i listans ordning och stannar en stund vid varje. {{key:Esc}} eller {{ui:Stoppa}} avslutar det.

## Spela in en guidad genomgång

1. Slå på [Vandring](topic:walk) och börja gå inne i byggnaden.
2. I {{ui:Vyer}} klickar du på {{ui:Spela in en vandring}}.
3. Gå med {{key:W}} {{key:A}} {{key:S}} {{key:D}} och titta omkring med musen.
4. Klicka på {{ui:Stoppa inspelningen}}. Vandringen sparas som "Walk 1", med sin längd.

Klicka på en vandring för att spela upp den så som du gick den. {{key:Esc}} stoppar den.

## Rendera en guidad genomgång som video

Klicka på filmikonen bredvid en vandring. Videodialogen ritar varje bildruta i vandringen med de renderingsinställningar du valde senast, i den storlek, bildfrekvens och kvalitet du väljer här. Spara den som en WebM- eller MP4-video, eller som en ZIP med en bild per bildruta. Bildrutor tar lika lång tid som bilder gör, så börja med {{ui:Snabb}}.

## Berätta över en guidad genomgång

Klicka på pratbubbleikonen bredvid en vandring. Skriv en rad för varje sak som sägs, och börja en rad med den tid den börjar (`12`, `0:12` eller `1:02.5`); en rad utan tid följer raden ovanför, efter den tid det tar att säga den. Välj språk, gärna på den klient som ska titta, om det är de som ska se den. {{ui:Förhandsvisning}} spelar upp orden med den här datorns egna röst och visar dem som undertexter; samma sak sker varje gång vandringen spelas upp. {{ui:Spara med den guidade genomgången}} behåller berättelsen i IFC-filen tillsammans med vandringen.

Din egen anslutna assistent kan skriva berättelsen åt dig: be den titta på vandringen och de sparade vyerna, så sätter den raderna på det språk du anger, som ett steg att ångra.

Den renderade videon har inget eget ljud, eftersom en webbläsare inte kan spela in sin egen röst. Spara undertexterna (`.srt` eller `.vtt`) och lägg till dem i videon i din videospelare eller ditt redigeringsprogram. Vilka röster du kan välja beror på datorn: ett språk utan installerad röst får ändå undertexterna.

## I filen

Vyer och vandringar sparas i IFC som egenskapsuppsättningen `CadCraft_Views` på projektet: vanlig IFC som andra program ignorerar. De ligger i den första modellens koordinater, så de passar fortfarande efter att modellen har laddats om eller en annan modell lagts till.

:::tip
För att rendera en bild från en sparad vy, gå till vyn och klicka sedan på [Rendera](topic:render).
:::
