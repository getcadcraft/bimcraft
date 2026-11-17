---
title: Arbeta med lager och blad
summary: Slå av och på ritningslager, växla mellan modellrum och blad, och förstå hur blad visar modellen genom sina vyportar.
keywords: lager, lager på av, frys, tina, blad, layouter, pappersrum, flikar, vyportar, lagerhanterare, la
from: a9a16b53
---

## Vad du ska göra

Städa upp vyn av en rörig ritning genom att stänga av lager, och titta sedan på ritningens blad ett i taget.

## Steg: lager

1. Öppna en DWG- eller DXF-ritning.
2. Hitta listan {{ui:Lager}} till vänster. Varje lager har en kryssruta, en färgruta och sitt namn.
3. Avmarkera ett lager för att dölja allt på det.
4. Klicka på {{ui:Alla av}} för att dölja alla lager.
5. Markera bara de lager du vill se.
6. Klicka på {{ui:Alla på}} för att visa allt igen.

## Vad du ska se

Lager försvinner och återkommer direkt, på {{ui:Modell}} och på varje blad. Lager som är av eller frysta i själva ritningen börjar avmarkerade.

## Steg: blad

1. Titta på raden med flikar ovanför ritningen: {{ui:Modell}}, sedan varje blad med namn.
2. Klicka på en bladflik.
3. Titta på bladet: papperet ligger på ett mörkare skrivbord, och varje vyport visar sin del av modellen i sin egen skala och vinkel.
4. Zooma in på en vyport för att läsa detaljer. Du zoomar bladet, inte vyporten, så hela bladet rör sig tillsammans.
5. Klicka på {{ui:Anpassa}} eller dubbelklicka för att se hela bladet igen.

## Så fungerar blad här

Ett blad (en layout, eller pappersrum) innehåller ett ritningshuvud och vyportar som tittar in i modellrummet. BimCraft ritar varje vyport avklippt vid sin kant, i sin egen skala och vridning, och döljer de lager som är frysta i den vyporten. Bladets första vyport är själva bladet och ritas inte två gånger.

## Vanliga misstag

- **Att förvänta sig att lagerändringar sparas.** Lagerinställningar påverkar bara vyn, tills du öppnar en annan fil.
- **Att förvänta sig lagerstyrning per vyport.** Listan {{ui:Lager}} växlar ett lager överallt. Lager som ritningen fryst i en vyport förblir frysta där.
- **Att leta efter lagersökning eller lagertillstånd.** Finns inte ännu. Listan följer ritningens ordning.
- **Att förvänta sig att arbeta inuti en vyport.** Det finns inget att aktivera: BimCraft visar bara bladet. Använd {{ui:Modell}} för att titta på modellrummet direkt.
