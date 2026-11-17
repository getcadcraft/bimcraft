---
title: De live weergave
summary: Een paneel naast het model dat het toont in de realtime look, met zon, schaduwen en weerkaatst licht, en dat elke wijziging volgt; loop erdoorheen en stel het tijdstip van de dag en de maand in.
keywords: live weergave, realtime, real-time render, wandeling, lopen, doorlopen, eerste persoon, presentatie, klant, tweede scherm, tweede venster, monitor, tijdstip van de dag, zon, seizoen, maand, schaduwen, ambient occlusion, reflecties, weerkaatst licht, globale verlichting, webgpu, webgl
from: ea5c02bf
---

De live weergave toont het model in de realtime look: de lucht en de zon op de plaats en datum van uw locatie, de schaduwen van de zon, de verf en materialen die u aan de elementen hebt gegeven, lampen, en licht dat van muren en vloeren wordt weerkaatst. Ze volgt wat u doet: draait u de 3D-weergave, dan draait zij mee; wijzigt u het model, dan toont zij de wijziging even later. Er wordt niets geüpload.

Ze tekent dezelfde scène, verf, lampen en zon als [Een afbeelding renderen](topic:render); voor een afgewerkte afbeelding gebruikt u dat.

## Openen

1. Open een model en kies {{ui:Live weergave}} in de werkbalk. Het paneel opent zich over de app, rechtsonder.
2. Sleep de titelbalk om het te verplaatsen; trek aan de hoek om het groter te maken.
3. {{ui:Live weergave in een nieuw venster}} (de knop ernaast) of {{ui:Nieuw venster}} in het paneel verplaatst het naar een eigen venster, voor een tweede scherm. Als uw browser pop-upvensters blokkeert, opent het als paneel.
4. {{ui:Sluiten}} sluit het.

## De bediening

| Bediening | Wat het doet |
|---|---|
| {{ui:De weergave volgen}} | Aan: de live weergave kijkt waar de 3D-weergave naar kijkt. Lopen zet het uit |
| {{ui:Lopen}} | Loop door het model (hieronder) |
| {{ui:Zwaartekracht}} | Tijdens het lopen: op vloeren staan en trappen beklimmen. Uit: vliegen |
| {{ui:Tijd}} | Het uur van de dag. De zon beweegt terwijl u sleept |
| {{ui:Maand}} | De maand, zodat u de zon in winter en zomer kunt zien |
| {{ui:Kwaliteit}} | {{ui:Voor deze computer}}, of {{ui:Laag}}, {{ui:Middel}} of {{ui:Hoog}} |

De regel onderaan zegt wat de weergave tekent (WebGPU of WebGL 2), de kwaliteit en het weerkaatste licht.

## Door het model lopen

1. Draai de 3D-weergave naar de plek waar u wilt staan en kies {{ui:Lopen}}. U staat op de vloer onder het oogpunt van de weergave, 1.6 m lang.
2. Klik in de live weergave en gebruik daarna {{key:W}} {{key:A}} {{key:S}} {{key:D}} of de pijltjestoetsen. Houd {{key:Shift}} ingedrukt om te rennen. Sleep om rond te kijken.
3. Stappen tot 40 cm worden beklommen (trappen); alles hoger is een muur. Muren houden u tegen en u glijdt langs ze.
4. Met {{ui:Zwaartekracht}} uit vliegt u: {{key:E}} gaat omhoog, {{key:Q}} omlaag.
5. {{key:Esc}} stopt het lopen.

## Weerkaatst licht

Licht dat van een zonbeschenen muur op de vloer terugkaatst, en de donkerdere binnenkant van een ruimte, worden op de achtergrond berekend op elke processorkern. Terwijl het rekent, zegt de onderste regel {{ui:Weerkaatst licht: 40 %}}; als het klaar is, neemt de weergave het over. Na een wijziging begint het opnieuw.

:::note
Dit is een benadering voor een live weergave, geen gerenderde afbeelding: kleine details tussen de punten krijgen het weerkaatste licht van de punten in hun buurt.
:::

:::note
Browsers verschillen. Waar de browser WebGPU heeft, gebruikt de live weergave dat; elders gebruikt zij WebGL 2 en ziet het er hetzelfde uit. Met geen van beide meldt het paneel dat.
:::
