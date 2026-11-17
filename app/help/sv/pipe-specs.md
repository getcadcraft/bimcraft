---
title: Rörspecifikationer, ventiler, spjäll och tillverkares familjer
summary: Skapa egna rörspecifikationer (dimensionstabeller med material, skarv och grovhet) som sparas i modellfilen; placera ventiler, ett filter och spjäll på ledningar; och ta in en tillverkares ventil- eller utrustningsmodell som familj med anslutningsportar.
keywords: rörspec, rörspecifikationer, rörspecifikation, rörklass, eget rör, dimensionstabell, rör, hygienrör, rostfritt, schema, ytterdiameter, väggtjocklek, innerdiameter, grovhet, tryckklass, csv, json, importera, exportera, kalkylblad, standard, bpe, din, en 10357, en 10255, ventil, ventiler, spjällventil, injusteringsventil, reglerventil, smutsfilter, spjäll, volymspjäll, brandspjäll, oem, tillverkare, leverantör, familj, familjer, portar, anslutning, step, obj, gltf, ifc, radiator, konvektor, panelvärmare, luftbehandlingsaggregat, diffusor, galler
from: bc2f7c4e
---

## Det här gör du

Rita rör i din egen specifikation i stället för de inbyggda tabellerna för stål, koppar och plast, placera ventiler och spjäll på ledningarna, och placera en tillverkares modell med portar som rören ansluts till.

:::note
Ett hjälpmedel för ritning och samordning. En rörspec innehåller de siffror du skriver eller importerar: kontrollera varje tabell mot projektets standard. Inbyggda ventiler, filter och spjäll är schematiska former som dimensioneras efter ledningen, inte efter en tillverkares eller en ventilstandards längd.
:::

## Ställ in en rörspec

1. Slå på {{ui:Rita}}, öppna {{ui:Bygge}} och välj {{ui:Rörspecifikationer}}. Samma knapp finns på verktygsfältet för Rörverktyget.
2. Välj {{ui:Ny}}, eller börja från en fil, ett klistrat innehåll eller en startspec (se nedan).
3. Skriv specens namn, standarden eller referensen den följer, materialet och ände- eller skarvtypen.
4. Skriv en rad per storlek: storlekens namn, ytterdiametern och väggtjockleken, i millimeter. Skriv innerdiametern i stället för väggtjockleken om det är det du har: den andra fylls i. DN, tryckklass och vikt är valfria.
5. Valfritt: grovheten i millimeter (tryckfallsberäkningen använder den), en isoleringstjocklek som nya ledningar börjar med, böjradien som faktor av ytterdiametern, om specen har T-stycken och reducerare, och en egen färg i 3D.
6. Bocka för de tjänster vars nya ledningar ska börja i den här specen, till exempel kylvatten.
7. Välj {{ui:Spara i modellen}}.

Specerna sparas i modellfilen. Alla som öppnar filen har dem, och {{ui:Ångra}} tar tillbaka en ändring.

En spec, eller en av dess storlekar, kan inte tas bort medan en ledning är ritad i den. Om du ändrar en storlekens siffror ritas om ledningarna i den storleken.

## Använd en spec i en annan modell

- {{ui:Exportera .json}} sparar den valda specen som en liten fil; {{ui:Exportera alla}} sparar alla specer i modellen. {{ui:Importera en fil}} läser in dem igen.
- {{ui:Exportera .csv}} sparar dimensionstabellen för ett kalkylblad. {{ui:Importera en fil}} läser också en `.csv`.
- {{ui:Klistra in rader}} tar en tabell kopierad från ett kalkylblad. Den första raden anger kolumnerna: `Size`, `OD` och `Wall` (eller `ID`), och valfritt `DN`, `Pressure`, `Weight`. En rad per storlek. Siffrorna är millimeter om du inte väljer tum eller en cell anger sin enhet (`0.065 in`).

## Startspecer

{{ui:Lägg till en startspec}} lägger till en av dessa i din modell som en kopia du kan redigera:

| Startspec | Storlekar |
|---|---|
| ASME BPE-rör | 1/4" till 6" |
| EN 10357 serie A-rör (DIN 11850 rad 2) | DN10 till DN200 |
| EN 10255 stålrör, mellanserie | DN15 till DN150 |
| EN 10255 stålrör, tung serie | DN15 till DN125 |

Tabellerna visar ytterdiametrar och väggtjocklekar som två eller fler publicerade leverantörssidor anger för standarden och är överens om. De är inte hämtade från själva standarderna. Storlekar som bara en sida angav är utelämnade. Varje startspec visar sina källsidor och är markerad ”kontrollera mot projektets standard”. Ingen grovhet, tryckklass eller vikt anges.

## Rita en ledning i en spec

1. Välj {{ui:Rör}}. En tjänst som du bockat för i en spec börjar i den. För alla andra ledningar väljer du specen i materiallistan: specerna visas efter de inbyggda materialen som ”Spec: namn”.
2. Storlekslistan innehåller nu bara specens storlekar. Välj en och rita ledningen.

För att flytta en ledning till en spec senare väljer du den och ändrar **Material** i {{ui:Egenskaper}}. Dess storlek blir specens närmaste storlek efter ytterdiameter.

I IFC-filen har röret specens namn, standard, material, skarv och dimensioner (`CadCraft_PipeSpec` och `Pset_PipeSegmentTypeCommon`, på röret och på dess typ).

Dimensionerings- och tryckfallsberäkningarna läser specens innerdiameter. När specen har en grovhet beräknas en lednings friktion med den (Darcy-Weisbach); utan den används beräkningens vanliga standardvärde.

## Ventiler, filter och spjäll

1. Välj {{ui:Ventil}} och välj typ i verktygsfältet: spjällventil, kulventil, backventil, klotventil, injusteringsventil eller reglerventil, eller ett filter, för rör; ett volymspjäll eller ett brandspjäll, för kanaler.
2. Klicka på ledningen där den ska sitta. Ledningen delas runt den och båda sidorna förblir anslutna. Den tar ledningens storlek och flyttas med ledningen.

{{ui:Egenskaper}} för ledningen listar var och en med {{ui:Ta bort}}; ledningen sluts igen.

Beräkningen av tryckfall räknar bara en förlustfaktor för spjällventiler, kulventiler, klotventiler och backventiler. De andra typerna, spjäll och tillverkares familjer ger ingen förlust där: ta höjd för dem i din egen kontroll. De räknas i förteckningen **Kopplingsdelar och ventiler** och i mängdavtagningen, och skrivs till IFC som ventiler, ett filter (smutsfiltret) och spjäll med två anslutna portar.

## En tillverkares modell som familj

1. Öppna {{ui:Bygge}} och välj {{ui:Familjer}}, och sedan {{ui:Importera en modell}}. IFC-, STEP-, OBJ-, STL-, glTF- och biblioteksobjektfiler läses. För OBJ och STL ställer du in filens enheter och upp-axel först.
2. Skriv namnet, tillverkaren och modellnumret i portdialogrutan.
3. Välj om den ska sitta **På en ledning** (en ventil, ett filter eller ett spjäll) eller vara **Utrustning**, och vad den skrivs som.
4. Ge den dess portar. Varje har ett namn, rör eller kanal, tjänsten, storleken i millimeter (ett rörs ytterdiameter), nominell storlek enligt din spec, ändtypen, sin position och vilket håll den vetter. {{ui:På en yta}} lägger en port i mitten av en yta på modellens låda. Den lilla vyn uppifrån visar portarna.
5. Välj {{ui:Spara familjen i modellen}}.

En familj som ska sitta på en ledning behöver exakt två portar som vetter bort från varandra på en och samma linje. Välj den i listan för Ventilverktyget och klicka på en ledning: den placeras med sin egen längd och rören ansluts till dess portar.

En familj sträcks aldrig. Om dess portar inte har ledningens storlek får du veta det när du placerar den, och {{ui:Kontrollera anslutningar}} listar den.

En utrustningsfamilj placeras med {{ui:Utrustning}}, typ **Tillverkarens familj**. Rör och kanaler snäpper till dess portar.

{{ui:Ladda ner som biblioteksobjekt}} sparar en familj med dess portar som en fil du kan skicka till biblioteket.

## Radiatorer och konvektorer

{{ui:Utrustning}} har också **Radiator** och **Konvektor / panelvärmare**: generiska kroppar med en framledning och en returledning för värmevatten. Se [MEP-utrustning med portar](topic:mep-equipment).
