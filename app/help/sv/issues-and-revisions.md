---
title: Utgåvor, revisioner och ändringslogg för ritningar
summary: Registrera varje uppsättning blad du lämnar ut, se vad som ändrats sedan dess på varje blad och element, och håll platsinstruktioner, verkstadsritningar och länkade modeller kopplade till den utgåva de hör till.
keywords: utgåva, utfärdad uppsättning, inlämnad uppsättning, inlämning, revision, revisioner, vad som ändrats, sedan utgåva, ändringslogg, ritningens ändringslogg, ritningsregister, följebrev, platsinstruktion, verkstadsritning, länkad modell, anbud, byggnation, ögonblicksbild, jämför
from: 4c732832
---

## Vad du gör

Registrera en utgåva: vilka blad som gick ut, vilket datum, för vilket syfte, var och en med sin revision. Senare kan du fråga vad som ändrats sedan den utgåvan. Håll platsinstruktioner och returnerade verkstadsritningar kopplade till utgåvan.

## Steg

1. Öppna **Utgåvor och revisioner** i den vänstra panelen.
2. Välj **Registrera en utgåva**. Revisionen föreslås (A, sedan B; en numrerad som P1 räknas upp). Välj vad utgåvan avser, vem den går till, datumet och bladen. När ditt projektskede är satt följer syftet med det. När paketet för bygglovet har en lista över stödjande dokument bockas de blad som är kopplade till listan av åt dig.
3. Lämna **Spara även en kopia av modellen som utfärdad** ibockad för att behålla modellen exakt som den gick ut. Kopian laddas ner; dess namn, storlek och SHA-256 sparas med utgåvan.
4. Välj **Registrera den här utgåvan**. Ett blad som ändrats sedan det senast utfärdades får den nya revisionen. Ett blad som inte ändrats behåller sin revision. Varje blads ritningshuvud visar sin revision.
5. För att se vad som ändrats väljer du **Ändringar sedan** bredvid en utgåva. Varje blad visar Samma eller Ändrad, med de element som lagts till, ändrats och tagits bort på bladet. Klicka på ett antal för att markera de elementen.
6. Välj **Lägg till en post** för en platsinstruktion, en verkstadsritning, en markeringsuppsättning, en länkad modell eller en anteckning. Välj den utgåva den hör till. En fil du väljer registreras med sitt namn, sin storlek och sin SHA-256; filen ligger kvar där den är.
7. **Ritningens ändringslogg** visar en rad för varje blad och en kolumn för varje utgåva. **Ladda ner ändringsloggen (CSV)** sparar den med utgåvorna och posterna.
8. **Spara utgåvehistoriken** skriver en fil `.issues.json`. MarkupCraft, TakeoffCraft och DetailCraft läser den med **Läs en utgåvehistorik**.

## Bra att veta

- Historiken sparas inne i IFC-filen (egenskapsuppsättningen `CadCraft_Issues` på projektet). Andra program ignorerar den.
- Ett blad räknas som ändrat när dess egen uppsättning ändrats, eller när ett element det visar ändrats: en plan visar sin nivå, en fasad eller sektion hela modellen, och en dörr- eller fönsterförteckning sina dörrar eller fönster.
- Ett element räknas som ändrat när en egenskap, dess position, storlek eller form ändrats.
- För att se exakt vilken egenskap som ändrats öppnar du den sparade kopian av den utfärdade modellen med **Jämför versioner**.
- Att ta bort en utgåva behåller dess poster, utan utgåva. Varje steg kan ångras med ett enda Ångra.
- En modell med fler än 60 000 element sparar ingen post för varje element i utgåvan. Blad jämförs fortfarande.

## Finns inte ännu

- Blad sparas inte som PDF med utgåvan.
- Ett revisionsmoln ritas inte på BimCrafts egna blad. Registrera moln i MarkupCraft mot utgåvan.
