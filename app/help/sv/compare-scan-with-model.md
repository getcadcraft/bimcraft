---
title: Jämför en skanning med modellen och 4D-schemat
summary: Bedöm varje element i modellen mot ett öppet punktmoln (byggt, delvis, saknas, inte nått), se procent byggt, färglägg modellen efter det, och med ett 4D-schema inläst lista vad som ligger efter eller före på 4D-dagen.
keywords: skanning, punktmoln, framsteg, procent klart, byggt, saknas, efter schemat, före schemat, 4D, byggplatsens framsteg, avvikelse, som byggt, laserskanning, drönare, jämför
from: 6fdc9003
---

Öppna en IFC-modell, öppna ett punktmoln bredvid den (se [Punktmoln](topic:point-clouds)) och placera det på modellen. Avsnittet {{ui:Jämför skanningen med modellen}} visas i högerpanelen när ett moln är öppet.

## Vad det gör

Tryck på {{ui:Jämför}}. Varje element i modellen bedöms efter sin yta, eftersom det är vad en skanner ser. De sex sidorna på dess låda delas i celler om cirka 20 cm; en cell räknas när en skanningspunkt ligger inom din {{ui:Tolerans}} (50 mm till att börja med) från ytan. Den bästa stora ytan räknas, så att en vägg som skannats från ena sidan inte straffas för sin andra sida.

- **Byggt**: minst 40 % av ytan syns.
- **Delvis**: 10 % till 40 %.
- **Saknas**: mindre än så, men skanningen når elementet (punkter inom 1,5 m från det).
- **Inte nått**: skanningen har aldrig varit där, så ingenting sägs om det.

För byggda och delvis byggda element anges också skanningspunkternas medelavstånd från modellens yta, och om elementet står på plats (inom toleransen), nära (inom tre gånger) eller avvikande (längre bort). Den ser bara avstånd upp till fem gånger toleransen: ett element som byggts längre från sin plats än så visas som saknas.

Sammanfattningen anger procent byggt bland de element skanningen når, efter antal och efter volym. Delvis byggda element räknas separat och läggs inte till de byggda.

## Mot 4D-schemat

Med ett 4D-schema inläst (se [4D-schema](topic:4d-schedule)) använder resultatet också dagen du har ställt in på 4D-reglaget: element som ska vara klara vid den dagen och som skanningen inte visar som byggda är **efter schemat**; element som ännu inte ska vara klara men som är byggda är **före**. Element efter schemat listas i {{ui:Problem}}, och tabellen kan filtreras till dem. Utan schema sägs ingenting om efter eller före.

## Tabellen och modellen

Klicka på en rad för att markera elementet. {{ui:Färglägg modellen}} målar elementen grönt (byggt), gult (delvis), rött (saknas) eller grått (inte nått); {{ui:Egna färger}} återställer dem. {{ui:Spara CSV}} skriver tabellen. {{ui:Markera matchande element som fältverifierade}} markerar varje element som syns som byggt och inom toleransen som fältverifierat (LOD 500, metod skanning), i ett steg som kan ångras. Se [Markera element som kontrollerade eller fältverifierade](topic:verification).

:::warning
Detta jämför lådan kring varje element med skanningspunkter inom en tolerans. Det är **inte en mätning, en mängdavtagning eller underlag för betalning**. Ett element som döljs bakom ett skannat (en vägg bakom en beklädnad, ett bjälklag under ett golvskikt) delar sin yta och kan läsas som byggt; ett krökt eller lutande element har en låda som är större än dess kropp och kan läsas som delvis eller saknas. Titta på listan innan du agerar på den. Lovkommentarer och framstegsanteckningar ingår inte: de stannar i de kolumner du behåller dem i.
:::

En assistent kan köra samma jämförelse med verktyget {{ui:Jämför skanningen med modellen}}; den ändrar ingenting i modellen.
