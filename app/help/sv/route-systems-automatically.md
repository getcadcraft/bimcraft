---
title: Dra kanaler, avlopp, vatten- och köldmedierör automatiskt
summary: I krockkontrollen hittar BimCraft en väg runt den öppna modellen för kanaler, självfallsdränering, kallt och varmt vatten samt split- eller multi-split-köldmedierör, och ritar sträckorna med deras kopplingsdelar i ett ångra-steg. Ett ritningshjälpmedel: dimensioner, lutningar och kontroller kommer från tabellerna i programmet och de siffror du skriver in; inget här säger att en konstruktion uppfyller en byggnorm.
keywords: autodra, dra kanaler, dra rör, dränering, sanitet, självfall, stam, ventil, vattenlås, vatten, varmvatten, returslinga, cirkulation, köldmedium, split, multi-split, VRF, ekvivalent längd, grenkit, y-rör
from: 5841d513
---

## Vad du gör

Låt BimCraft lägga ut ett nät av sträckor mellan kopplingar som redan finns i modellen, runt väggar och balkar, och kontrollera det mot siffror du kan se.

## Steg

1. Öppna modellen och krockkontrollen. Under **Dra kanaler automatiskt** väljer du en luftbehandlingsenhet och dess terminaler, eller under **Dra andra system automatiskt** väljer du ett system.
2. **Sanitet, självfall.** Skriv in utloppets position och, om du har dem, stampositionerna. Bocka i **Dra alla våningar i ett svep** för att ta med varje våning som har armaturer: varje vånings avlopp möter stammen på sin egen nivå, och stammen går från ovanför den högsta kranen ned till sin fot. Tryck på {{ui:Dra}}.
3. **Vattenlås till ventilation.** Panelen listar avståndet från varje vattenlås till dess ventilation. Skriv in det längsta din kod tillåter i **Längst från ett vattenlås till dess ventilation**; varje armatur över det listas som ej klar, med millimeterna över. Bocka i **Ventilera genom stammen** när armaturerna saknar en egen ventilationsstump: avståndet mäts då till stammen. BimCraft levererar ingen kodtabell för detta: du skriver in talet.
4. **Kallt och varmt vatten.** Välj källan, skriv in trycket vid källan och det tryck du behöver vid en armatur. Bocka i **Varmvatten**, välj värmarens varma anslutning, och bocka i **Returslinga** för att avsluta en returledning vid värmarens anslutning **varmretur**, eller vid någon annan anslutning du väljer (den slutar då 150 mm kort, öppen, för att du ska koppla den).
5. **Split, multi-split och VRF.** Välj utomhusenheten, bocka i inomhusenheterna och skriv in varje enhets kapacitet. Skriv in gränserna från din tillverkares data. Skriv in den **ekvivalenta längden** för en böj och för ett grenkit (tillverkarens värden), så kontrolleras den längsta och totala längden mot ekvivalenta längder.
6. Tryck på {{ui:Dra}}. Panelen säger hur många sträckor den ritade och vad den inte kunde göra och varför. {{ui:Ångra}} tar tillbaka allt i ett steg.

## Vad du bör se

Rör med knän, T-stycken och reducerare; avlopp som faller minst den minsta lutningen för sin dimension; ventilationsstumpar vid armaturerna; köldmedieledningar som ett vätske- och gaspar som vänder på samma sätt i varje hörn, med ett grenkit markerat där en gren lämnar huvudledningen.

## Bra att veta

- Där ett avlopp möter ett annat avlopp ritar modellen ett T-stycke. Planen anger dessa platser som 45-graders y-kopplingar, så att du kan ändra kopplingsdelen.
- Varmvatten använder armaturens egen varma anslutning när dess familj har en, och en anslutning 100 mm bredvid den kalla när den inte har det.
- Köldmedieledningarna börjar mellan de två portarna på varje enhet. När en enhets två portar står för nära för en böj hålls paret centrerat mellan dem.
- Vattennätet använder efterfrågekurvan och friktionsvärdena som visas i beräkningarna; ersätt dem med din kods innan du litar på trycken.
- Stora hus kan ta en halv minut eller mer, mest för varmvattennätet.
- Det här är ett ritningshjälpmedel. En kvalificerad person kontrollerar dimensioner, lutningar, ventilation och tryck mot den kod som gäller.

## Nästa

[Kontrollera krockar](topic:clash-check) · [Kontrollera rör och kanaler mot stommen](topic:mep-against-structure) · [Anslutningar mellan rör och utrustning](topic:mep-connections)
