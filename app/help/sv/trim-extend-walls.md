---
title: Trimma, förläng och foga ihop väggar
summary: Trimma eller förläng väggar till en annan vägg, och foga ihop två väggar i den punkt där de möts, var och en som ett steg du kan ångra.
keywords: trimma, förläng, hörn, foga, möta, städa, väggände, väggvinkel, kapa, förlänga, förkorta, ändra, TR
from: a6fb2e8b
---

## Vad du gör

Städa upp väggarna du ritade: kapa en vägg som går förbi en annan, förläng en som slutar för kort, eller stäng ett öppet hörn.

## Steg

1. Slå på {{ui:Rita}} och välj nivån i planritningens nivålista.
2. **Trimma eller förläng till en vägg:** välj {{ui:Ändra}} › {{ui:Trimma / förläng}}. Klicka på väggen att trimma eller förlänga till (kanten), och klicka sedan på varje vägg du vill ändra. En vägg som går förbi kanten kapas tillbaka till den, och den del du klickar på är den som står kvar; en vägg som slutar för kort förlängs tills den möter kanten. Kanten förblir vald, så att du kan klicka på flera väggar efter varandra. Tryck på {{key:Esc}} för att välja en annan kant.
3. **Foga ihop två väggar i ett hörn:** välj {{ui:Ändra}} › {{ui:Hörn}}, klicka på första väggen och sedan på den andra. Båda går fram till punkten där de möts, och BimCraft städar hörnet. När en vägg korsar den andra står den del du klickade på kvar.
4. Tryck på {{key:Esc}} för att börja om, eller på {{key:V}} för att gå tillbaka till {{ui:Markera}}.

## Vad du bör se

- Medan du pekar på en vägg visar planritningen var den skulle hamna, redan ihopfogad med väggarna den möter, med sin nya längd.
- Varje ändring är ett steg: {{key:Mod+Z}} tar tillbaka den.
- Rum, golv, innertak, tak och det som följer väggarna skapas om, som efter varje ändring av väggarna. Ett rum som stängs av ett hörn visas med sitt nummer och sin area.
- En dörr eller ett fönster på en del som skärs av tas bort med den.

## Bra att veta

- Väggar ritas på sin mittlinje, så de trimmas och förlängs längs den: en vägg möter den andra väggens mittlinje, och fogen rensas till ett T eller ett L.
- BimCraft säger varför när det inte kan göra det: de två väggarna är parallella, väggens linje passerar bredvid den andra väggen, en dörr eller ett fönster är i vägen (flytta eller ta bort den först), eller inget skulle finnas kvar av väggen (under 1 mm). En vägg som blir kortare än 50 mm görs, med en varning i Problem: se [Ritningsråd](topic:drawing-advice).
- Endast väggar som ritats i BimCraft kan trimmas eller förlängas.

Se även [Rita väggar](topic:draw-walls) och [Ändra en vägg, dörr eller fönster](topic:change-a-wall-or-door).
