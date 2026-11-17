---
title: Hitta rätt med modellträdet
summary: Bläddra i en IFC-modell efter projekt, plats, byggnad, våningsplan och utrymme, med dess element grupperade efter typ; bocka i rutor för att visa och dölja, klicka på en rad för att välja, dubbelklicka för att zooma.
keywords: modellträd, träd, struktur, rumslig struktur, bläddrare, disposition, navigator, våningsplan, nivå, golv, utrymme, rum, grupp, klass, dölj, visa, välj, markera, zooma
from: 69de4ab7
---

## Vad du ska göra

Se hur en modell är uppbyggd och nå vilket element som helst utan att leta efter det i 3D: byggnaden, dess våningsplan, utrymmena på varje våningsplan och elementen i dem, grupperade efter typ (väggar, dörrar, bjälklag…).

## Steg

1. Öppna en IFC-modell. {{ui:Modellträd}} till vänster öppnas ned till våningsplanen.
2. Klicka på pilen bredvid en rad för att öppna eller stänga den. Ett våningsplan har först sina utrymmen, sedan sina element efter typ med hur många det finns. Ett element som består av delar, till exempel en trappa, innehåller sina delar.
3. Bocka ur en rads ruta för att dölja allt i den; bocka i den för att visa det igen. En ruta med ett streck betyder att bara en del av det som finns i den visas.
4. Klicka på en rads namn för att välja det den står för: ett element, eller varje element i en grupp, ett våningsplan eller ett utrymme. {{key:Mod}}+klick lägger till dem i valet, eller tar bort dem.
5. Klicka på knappen {{ui:i}} bredvid ett våningsplan, utrymme eller en byggnad för att se dess egna egenskaper.
6. Dubbelklicka på en rad för att zooma till den.

## Vad du bör se

- När du väljer ett element i 3D-vyn öppnas trädet ned till det och markerar det.
- Dolda element är genomstrukna. Trädets rutor och {{ui:Visa}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) samverkar: se [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate).
- Element som modellen inte placerar i något våningsplan finns i en grupp längst ned, **Inte i den rumsliga strukturen**.
- En lång grupp visar 200 rader åt gången; klicka på **Visa mer** under den för resten.

## Tangenter

När en rads namn har fokus: {{key:Up}} och {{key:Down}} flyttar, {{key:Right}} öppnar, {{key:Left}} stänger eller går upp, {{key:Space}} bockar i rutan, {{key:Enter}} väljer.

## Vanliga misstag

- **Ett våningsplans ruta är ibockad men inget visas.** Listan {{ui:Våningsplan}} under trädet stänger av hela våningsplan av sig själv: bocka i den där också.
- **En rad väljer inget.** Vissa rader, till exempel ett tomt utrymme, har inga element som kan ritas; statusraden säger det.

## Nästa

- [Ta bort, klipp ut, kopiera och klistra in byggnadselement](topic:edit-elements)
- [Visa och dölj våningsplan, utrymmen och kanter](topic:storeys-and-spaces)
