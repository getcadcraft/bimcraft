---
title: Dölj, isolera och gör genomskinliga element
summary: Markera flera element, dölj dem, visa bara dem eller visa dem med allt annat genomskinligt, och ta sedan tillbaka allt.
keywords: dölj, isolera, genomskinlig, transparent, spöke, röntgen, visa alla, visa igen, markera flera, flerval, ctrl-klick, shift-klick, synlighet
from: 97e98b8c
---

## Vad du gör

Rensa vyn ned till det du tittar på: dölj element som är i vägen, visa bara de du valde, eller håll allt annat på skärmen som en svag kontur så att du ändå vet var du är.

## Steg

1. Öppna en IFC-modell. Se [Öppna en IFC-modell och titta runt i 3D](topic:open-ifc-model).
2. Klicka på ett element för att välja det. För att välja fler, håll ned {{key:Mod}} eller {{key:Shift}} och klicka på varje. Om du klickar på ett redan valt element på det sättet tas det bort ur markeringen igen.
3. Öppna {{ui:Visa}} i verktygsfältet och välj vad som ska göras, eller tryck på dess tangent:
   - {{ui:Dölj}} ({{key:H}}) döljer de valda elementen.
   - {{ui:Isolera}} ({{key:I}}) visar bara de valda elementen.
   - {{ui:Genomskinlig}} ({{key:T}}) visar de valda elementen som de är och allt annat genomskinligt.
4. Klicka på {{ui:Visa alla}} i samma meny, eller tryck på {{key:Shift+H}}, för att visa alla element igen.
5. För att i stället skära bort allt runt de valda elementen, klicka på {{ui:Sektionsbox runt markeringen}} i samma meny, eller tryck på {{key:Shift+X}}. Se [Skär en IFC-modell med ett sektionsplan](topic:section-plane).

## Vad du ska se

- Med flera element valda säger {{ui:Egenskaper}} hur många som är valda och listar dem per klass. Klicka på ett enda för att se dess egenskaper.
- Dolda element kan inte väljas: ett klick träffar det som ligger bakom dem.
- Genomskinliga element kan inte heller väljas, så du kan klicka rakt igenom väggar till det du isolerade.
- Kanter döljs med sitt element och blir svaga tillsammans med det.
- Dölj, isolera och genomskinlighet står kvar medan du redigerar, placerar biblioteksobjekt eller skär modellen med ett sektionsplan. Att öppna en annan modell visar allt igen.

## Vanliga misstag

- **Menyalternativen är gråa.** Inget är valt. Klicka först på ett element; peka på ett alternativ för att se varför det inte kan användas.
- **Isolera visade en vägg som jag hade dolt.** Isolera visar exakt det du valde, dolt eller inte.
- **En hel våning saknas.** Det är listan {{ui:Våningsplan}}, inte {{ui:Visa alla}}: bocka i våningen igen.

## Nästa

- [Visa och dölj våningsplan, utrymmen och kanter](topic:storeys-and-spaces)
- [Skär en IFC-modell med ett sektionsplan](topic:section-plane)
