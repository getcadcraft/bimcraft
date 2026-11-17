---
title: Ändra en typegenskap för varje element av en typ
summary: Skilj typegenskaper från instansegenskaper, ändra ett värde på typen så att varje element följer med, och kontrollera att ett enskilt elements egen ändring förblir dess egen.
keywords: typ, instans, typegenskaper, familjetyp, delad, kopiera vid skrivning, alla element, massredigering, tillverkare, modell
from: bffd8789
---

## Vad du gör

Ange tillverkaren för en dörrtyp så att varje dörr av den typen visar den, och ge sedan en dörr en egen brandklass utan att röra de andra. Detta visar skillnaden mellan typegenskaper och instansegenskaper i BimCraft.

## Typ eller instans?

- En **instans**-egenskap hör till ett enda element: dess tagg, dess märkning, dess rum, dess egna brandklass.
- En **typ**-egenskap hör till den typ som många element delar: tillverkare, modell, bredd på en dörrtyp.

I panelen {{ui:Egenskaper}} har uppsättningar som kommer från typen " (type)" efter sitt namn och raden "Typegenskap: en ändring här gäller för alla element av den här typen." Alla andra uppsättningar hör till elementet självt. **Typ** i det första blocket visar typens namn.

## Steg: ändra typen

1. Öppna en IFC-modell och klicka på en dörr.
2. Notera dess **Typ** i det första blocket i panelen {{ui:Egenskaper}}, till exempel "Single-Flush 900 x 2100".
3. Bläddra till en uppsättning vars namn slutar med "(type)".
4. Klicka på värdet du vill ändra, till exempel **Tillverkare**.
5. Skriv det nya värdet och tryck på {{key:Enter}}.
6. Titta i listan {{ui:Ändringar}}: posten slutar med "(type)".
7. Klicka på en annan dörr av samma typ.
8. Kontrollera samma värde: det visar det nya värdet också.

## Steg: ändra endast ett element

1. Klicka på en dörr.
2. Öppna en uppsättning utan "(type)" i namnet, till exempel `Pset_DoorCommon`.
3. Klicka på ett värde, till exempel **FireRating**, skriv ett nytt värde och tryck på {{key:Enter}}.
4. Klicka på dörren bredvid, av samma typ.
5. Kontrollera samma värde: det visar fortfarande det gamla värdet.

Även om exportören delade den egenskapsuppsättningen mellan båda dörrarna gav BimCraft den första dörren en egen kopia innan den ändrades. Se [Varför din ändring bara påverkar ett element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Spara

1. Klicka på {{ui:Spara som IFC}} eller tryck på {{key:Mod+S}}.
2. Öppna den sparade kopian i BimCraft, eller i valfri IFC-visare, för att kontrollera båda ändringarna.

## Vanliga misstag

- **Inte alla modeller har typer.** Vissa exportörer skriver inga typobjekt, eller lägger allt på instansen. Då finns inga "(type)"-uppsättningar, och varje element måste ändras var för sig.
- **Samma värde finns i en typuppsättning och en instansuppsättning.** Vissa exportörer skriver en parameter på båda ställena. Andra program kan läsa vilket som helst; ändra båda om de ska stämma överens.
- **Man förväntar sig att kunna välja "alla dörrar av den här typen" och redigera dem tillsammans.** Det finns inget flervalsläge i den här versionen. En typegenskap är sättet att ändra många element på en gång.
