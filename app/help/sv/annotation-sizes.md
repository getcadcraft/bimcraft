---
title: Rita i full storlek, annotera efter skala
summary: Byggnaden ritas alltid i full storlek. Text, mått, taggar, rumsnamn, rutnätsbubblor och symboler dimensioneras på papper, i millimeter som de skrivs ut, och behåller den storleken när en ritnings skala ändras från 1:100 till 1:50.
keywords: annoteringsskala, annoterande, textstorlek, texthöjd, pappershöjd, måttextstorlek, taggstorlek, rumsnamnsstorlek, rutnätsbubbla, symbolstorlek, ritningsskala, 1:50, 1:100, kontorsstandard, skrift, rita i 1:1, full storlek, bladtext
from: 94118788
---

## Vad du gör

Ange hur höga bokstäverna i dina ritningar är på papper, en gång för byggnaden. Du skalar aldrig modellen och ändrar aldrig text för en skala: BimCraft räknar ut storleken från pappershöjden och ritningens skala.

## Så fungerar det

- Modellen är i full storlek. En vägg 10 m lång är 10 000 mm lång i alla skalor.
- En annotering har en **pappershöjd**: höjden på en versal på det utskrivna bladet, i millimeter.
- I skala 1:100 är en 2.5 mm text 250 mm hög i modellen; i 1:50 är den 125 mm. På papper är den 2.5 mm båda gångerna.
- Planssymboler (el, VVS) ritas i millimeter på papper och följer samma regel.

## Steg

1. Öppna projektbläddraren. Klicka på {{ui:Annotation sizes…}} under {{ui:Sheets}}.
2. Skriv en höjd i millimeter för de typer du vill ange: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} och {{ui:Schedule text}}. Ett tomt fält behåller BimCraft:s egen storlek, som visas i grått.
3. Klicka på {{ui:Save}}. Det är ett steg som du kan ångra.

Varje blad, ritningsuppsättningen, planens PDF samt fasader och sektioner använder storlekarna från och med då. Avståndet mellan en måttlinje och dess text, storleken på en rutnätsbubbla och höjden på en förteckningsrad växer med sin text.

## En plan med egen skala

Ge en plan en skala i dess vyintervall ({{ui:Scale}}; se [Vyer och blad](topic:views-and-sheets)). Då:

- på skärmen ritas rumsnamn, taggar, måttext och rutnätsbubblor i sin utskrivna storlek mot modellen, så att det du ser är vad bladet kommer att visa;
- planssymboler och deras taggar dimensioneras för den skalan. Ändrar du skalan från 1:100 till 1:50 blir de hälften så stora i modellen och lika stora på papper.

En plan utan egen skala behåller sin fasta skärmtext, och dess symboler dimensioneras för 1:50 (1/4" = 1'-0" i fot och tum), som förut.

## Kontorets storlekar

Med tillägget Default Policies på, ange kontorets höjder i Inställningar › Global › Default Policies › {{ui:Annotation sizes on paper}}. En ny byggnad tar dem när du klickar på Skapa. I en byggnad du redan påbörjat har dialogrutan {{ui:Use my office's sizes}}. Se [Default Policies](topic:default-policies).

## Ett regelpakets storlekar

Ett regelpaket kan ange de texthöjder som dess plats kräver (tillägget Building regulations, ritkonventioner). Markera paketet i Inställningar › Building regulations, klicka sedan i dialogrutan på {{ui:Use a regulation pack's sizes}}: fälten fylls i, och du kontrollerar dem och sparar. En storlek som ett paket anger i punkter är en teckenstorlek och görs om till en versalhöjd, så kontrollera den. Inget sätts förrän du sparar.

## Vad du ska se

- Samma texthöjd i millimeter på ett blad i 1:100 och på ett blad i 1:50, medan planen i sig är dubbelt så stor i 1:50.
- Storlekarna följer med byggnaden: de sparas i dess IFC-fil.

## Bra att veta

- BimCraft:s egna storlekar är de som dess blad alltid har använt (ungefär 1.5 mm versaler för måttext). De är ingen ritstandard: ange ditt kontors.
- En höjd måste vara från 0.5 till 50 mm.
- Text i titelrutan och nyckelförteckningar ingår inte: de behåller sina egna storlekar.
