---
title: Spåra en nivå, ställ in pennor per vy, skissa en trappa, öppna en OBJ
summary: Visa en annan nivå streckad under planritningen och rikta in den, ge väggar, dörrar och fönster en egen penna i en vy, rita en gånglinje för att få en trappa, och öppna ett Wavefront OBJ-nät.
keywords: spårningsreferens, spöke, underlägg, penna, linjetjocklek, linjetyp, åsidosättning, trappa, skiss, vilplan, OBJ, nät, import, Wavefront
from: 333ebbde
---

## Spåra en nivå

Välj {{ui:Spåra}} i menyn {{ui:Bygge}}, välj sedan en vy i listan: en annan nivås planritning, en nivås takplan eller ett utsnitt (beskuret till sitt beskärningsområde). Dess väggar, pelare och golv visas streckade under planritningen du ritar på. Flytta den genom att klicka på en baspunkt i referensen och sedan där punkten ska hamna, eller skriv X, Y och en vinkel (den vrids kring sitt eget centrum). {{ui:Återställ}} lägger tillbaka den, {{ui:Dölj}} tar bort den. Den är enbart en referens: inget kan markeras i den, den skrivs inte ut och den sparas inte i IFC. BimCraft kommer ihåg den för varje nivå i den här webbläsaren.

## Pennor per vy

Välj {{ui:Pennor}}. Säg vad pennan är till för: alla väggar, alla dörrar, alla fönster, typen av det markerade elementet, eller de markerade elementen. Välj en tjocklek, en linjetyp (heldragen, streckad, prickad) och en färg, och tryck sedan på {{ui:Verkställ}}. Ändringen gäller bara den här nivåns planritning. En markering slår en typ, och en typ slår en hel kategori. {{ui:Rensa alla}} tar bort dem. De sparas i den här webbläsaren. Bocka för **Pennfärger i 3D** för att måla färgpennorna på modellen i 3D-vyn (tjocklek och streck hör till linjen, så bara färgen syns där); avbocka för att gå tillbaka. {{ui:Skriv ut}} ritar dem på planens PDF: tjockleken skalas från skärmen (standardväggpennan på 1,75 pixlar är 0,5 mm), streck förblir streck och en färg skrivs ut med sitt värde för papperstemat.

## En trappa från en skiss

Välj {{ui:Skissa trappa}} och klicka på hörnen på gånglinjen, nedersta steget först. En linje är en rak trappa, två linjer som möts i rät vinkel är en L, och tre linjer (upp, tvärs, tillbaka) är ett U. Tryck på {{key:L}} för att rita ett vilplan: klicka på dess hörn och tryck på {{key:Enter}}, och dess korta sida anger trappans bredd. Tryck på {{key:Enter}} för att placera trappan. Varje steg räknas ut från längden på din linje och antalet sättsteg som höjden kräver. Därefter är den en vanlig trappa: ändra den i Egenskaper, så följer trapphuset och räckena med.

Bocka för **Gör det till en familj** i verktygets rad (eller tryck på {{key:F}}) innan du trycker på {{key:Enter}} för att i stället placera trappan som en familj (en rak, L- eller U-trappa). Den kommer in som ett element och öppnas i familjeredigeraren med sin bredd, sitt steg, sin totala höjd, stegen i varje lopp och U:ets mellanrum som parametrar, så att du kan lägga till storlekar, en planssymbol eller hotspots. Steg och sättsteghöjd följer av dem. Den har inga räcken eller trapphål: de hör till en vanlig trappa.

## Öppna en OBJ

Öppna en `.obj`-fil som vilken annan fil som helst. En OBJ har inga enheter, så BimCraft läser meter med Y uppåt, som de flesta program skriver den. Varje objekt eller grupp blir ett nätelement på en enda nivå, och du kan sedan visa, mäta, sektionera, placera det i en modell och spara det som IFC. Linjer, kurvor och ytor utelämnas, och statusfältet säger det.

Ett objekt som är exakt ett rakt prisma (ett slutet nät med två parallella, identiska ändytor och plana sidor vinkelräta mot dem: ett bjälklag, en stolpe, ett väggblock, en plåt med hål) sparas i IFC som IFC:s egna extruderade solid med sin kontur och sitt djup, inte som en lista över trianglar. Andra program läser det som en riktig solid, det förblir litet, och dess djup och kontur kan redigeras senare. Statusfältet säger hur många objekt som behölls på det sättet. Allt som inte är exakt ett prisma (en avsmalnande form, ett nät med en flyttad hörnpunkt, ett nät med en lucka) förblir trianglar. En STEP-fil läses på samma sätt.
