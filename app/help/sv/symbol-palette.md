---
title: Symbolpaletten
summary: Hitta el- och VVS-symboler efter namn eller bild, stjärnmärk de du använder och placera dem på planen med ett klick.
keywords: symbolpalett, symbolknapp i verktygsfältet, väggen följer, symboler, elsymboler, VVS-symboler, VVS-plan, vattenklosett, toalett, handfat, diskbänk, badkar, dusch, golvbrunn, rengöringslucka, slangkran, varmvattenberedare, ventil, skiberventil, kallvatten, varmvatten, avlopp, ventilation, linjestil, favoriter, sök
from: 67f20bc0
---

## Vad du gör

Öppna en panel som listar el-symbolerna och VVS-planens symboler med deras bilder och namn, hitta den du vill ha och placera den på planen. Inget här kräver internet: symbolerna levereras med appen.

## Öppna den och placera en symbol

1. Öppna en modell och öppna {{ui:Bygge}} › {{ui:Symbolpalett}} (skrivet kommando: SYMBOLS). Samma knapp finns i verktygsmenyn på Rita-fältet och som **Symboler** i gruppen Bibliotek i verktygsfältet.
2. Välj en uppsättning: **Elektriska** eller **VVS**, eller **Alla uppsättningar**. Skriv i sökrutan för att begränsa listan. Du kan söka efter namn eller förkortning (WC, CW, HB).
3. Klicka på en symbol. Planen är redo att placera den.
   - En **elektrisk** symbol startar elverktyget med den enheten vald, så allt som står under [Elplanen](topic:electrical-plan) gäller: klicka på planen, ett steg i Ångra.
   - En **VVS**-symbol startar verktyget för planens symboler. Klicka på planen. En armatur som sitter på en vägg (en toalett, ett handfat, ett badkar, en diskbänk, en slangkran) fäster mot närmaste väggyta med ryggen mot väggen. Brunnar, ventiler, varmvattenberedaren och linjestilar placeras där du klickar.
4. Tryck på {{key:R}} för att vrida symbolen 90 grader ({{key:Shift}}+{{key:R}} vrider åt andra hållet), eller skriv en vinkel i **Rotation** i alternativfältet. Tryck på {{key:Esc}} för att avbryta.

En armatur eller slangkran som fästes mot en väggyta minns den väggen: när väggen flyttas följer symbolen med (samma yta, samma avstånd längs väggen) i samma ångra-steg. Om du tar bort väggen står symbolen kvar där den var, och **Problem** listar ”tappade sin vägg”. Flytta den eller ta bort den. Symboler som placerats bort från väggar är inte knutna till något.

Varje symbol du placerar är ett steg som går att ångra. En placerad symbol är en planannotation i IFC-filen med sin tagg (WC1, WC2, ...). Markera den för att ändra dess tagg eller vridning i **Egenskaper**, eller tryck på {{key:Delete}}.

## Vad VVS-uppsättningen har

Armaturer (vattenklosett, urinal, handfat, badkar, dusch, köksdiskbänk, enkel diskbänk), en golvbrunn, golv- och väggrengöringsluckor, en slangkran, en väggvattenpost, en varmvattenberedare, ventiler (skiber-, glob-, kul-, back-, fjäril- och tryckreducerande) och linjestilar med sina förkortningar: kallvatten (CW), varmvatten (HW), varmvattenretur (HWR), avlopp (W), ventilation (V), dagvatten (SD) och gas (G). Ritningarna skalas med planen, så de behåller sin storlek på det utskrivna bladet. En linjestil är ett kort stycke för att visa stilen på planen. Rita de verkliga rördragningarna med rörverktygen.

:::note
Dessa är vanliga VVS-konventioner för planritningar, ritade av oss; inte certifierade enligt ISO 4067-1 eller ASME Y32.4. De har jämförts med offentliga ritningsförklaringar och utbildningsmaterial (listan finns i uppsättningens källnot, som anger var vi stämmer överens och var vi skiljer oss), inte kopierats från någon produkt, och de är fria att använda (Apache-2.0). Ritningsuppsättningar skiljer sig åt, så kontrollera teckenförklaringen i ditt eget projekt. De är planens symboler, inte en VVS-konstruktion: de dimensionerar inte rör och kontrollerar inte bestämmelser.
:::

## Favoriter och tangentbord

- Klicka på stjärnan på en symbol (eller tryck på {{key:F}} på den) för att behålla den som favorit. Favoriter listas först och finns kvar i den här webbläsaren. **Endast favoriter** visar bara dem.
- {{key:Down}} från sökrutan flyttar in till symbolerna. Piltangenterna, {{key:Home}} och {{key:End}} flyttar mellan dem. {{key:Enter}} väljer den fokuserade symbolen, och {{key:Esc}} stänger paletten.
- På en telefon är paletten ett ark längst ner på skärmen. Den flyttar sig åt sidan när du väljer en symbol, så att du ser planen. Öppna den igen från Bygge-menyn eller knappen **Palett** i alternativfältet.

:::tip
Om en fil använder en symboluppsättning som den här versionen inte har, visar planen en ruta där symbolen var, och **Problem** listar den.
:::

## Länka ett placerat element till en symbol

En ljusarmatur från biblioteket är ett 3D-element, men en elektrisk layout visar den som sin symbol. Du placerar den **en gång** och länkar den:

1. Välj Bygge › **Symbollänk** (eller skriv SYMBOLLINK). Ett avsnitt Symbollänk öppnas i den vänstra panelen.
2. Välj de placerade elementen i planen eller i 3D. Avsnittet säger hur många som är valda och vad de är länkade till.
3. Välj **Symbolen** (från vilken symboluppsättning som helst: Elektriska, VVS) och välj **Länka**.

Elementet är fortfarande ett element, och varje förteckning räknar det en gång:

- **3D** visar alltid dess kropp.
- En **plan** visar sin planform, som förut.
- En plan där **Den här vyn visar länkade element som** är satt till **Deras symbol (en installationslayout)** visar symbolen på dess plats. Ett klick på symbolen väljer elementet. Valet sparas i filen för den vyn (en nivås golvplan, dess takplan eller en hänvisning).

**Vrid symbolen 90°** vrider symbolen mot sitt element. **Ta bort länken** tar bort länken; elementet står kvar. Förteckningen **Länkade symboler** listar varje länkat element en gång, med dess nivå och rummet det står i.

Finns inte ännu: vilken plan en vy på ett blad visar är valet av nivåns plan. Enheter placerade med elverktyget är symboler i varje plan, som förut.
