---
title: Tangenter och mus
summary: Alla tangent-, mus-, pekplatte- och touchåtgärder i BimCraft, grupperade efter vad du tittar på.
keywords: tangentbord, genvägar, snabbtangenter, tangenter, mus, pekplatta, touch, kretsa, panorera, zooma, dölj, isolera, genomskinlig, ångra, gör om, kopiera, klistra in, duplicera, spara, anpassa, utskriftsvy, escape, inställningar, rita, vägg, dörr, fönster, plan
from: 5c6eedce
---

BimCraft har få genvägar. Det mesta görs med musen och panelerna. Genvägar skrivna med {{key:Mod}} använder Command på en Mac och Ctrl på andra system. Se [Tangenter, möss och pekplattor](common:keys) för hur tangenter skrivs i den här hjälpen.

## Överallt

| Tangent | Vad den gör |
|---|---|
| {{key:Ctrl+Shift+F}} | Växla mellan skärmlägena: normalt, helskärm, helskärm med menyraderna dolda. Ctrl på alla plattformar, även på en Mac |
| {{key:Esc}} | Avslutar helskärm |
| {{key:Mod+,}} | Öppnar {{ui:Inställningar}}. Se [BimCraft-inställningar](topic:settings) |
| {{key:Tab}} | Flyttar mellan knappar, kryssrutor och värden. Alla kontroller kan nås från tangentbordet |

## 3D-vy (IFC-modeller)

| Tangent eller åtgärd | Vad den gör |
|---|---|
| {{key:F}} | Anpassar hela modellen, trekvartsvy (samma som {{ui:Anpassa}}) |
| {{key:Esc}} | Avmarkerar, eller slutar placera eller klistra in |
| Klicka | Markerar elementet under pekaren; klicka på tom bakgrund för att avmarkera |
| {{key:Mod}}+klick eller {{key:Shift}}+klick | Lägger till ett element i markeringen, eller tar bort det |
| {{key:H}} | Döljer de markerade elementen. Se [Dölj, isolera och se igenom element](topic:hide-and-isolate) |
| {{key:I}} | Visar bara de markerade elementen (isolera) |
| {{key:T}} | Visar de markerade elementen, allt annat genomskinligt |
| {{key:Shift+H}} | Visar alla element igen |
| {{ui:Vandra}} | Därefter {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piltangenterna för att gå, {{key:Shift}} springer, dra för att titta runt, {{key:Esc}} stoppar. Se [Gå igenom en modell](topic:walk) |
| {{key:M}} | Mäter avstånd och ytareor. Se [Mät avstånd, ytareor och lägen i 3D](topic:measure) |
| Dra med vänster knapp | Roterar |
| Dra med höger knapp | Panorerar |
| {{key:Shift}} eller {{key:Mod}} och dra med vänster knapp | Panorerar (bra på en pekplatta) |
| Scrolla med hjulet, eller dra med mittenknappen | Zoomar |
| Tvåfingerscroll eller nyp på en pekplatta | Zoomar |
| Ett finger (touch) | Roterar; ett tryck markerar |
| Två fingrar (touch) | Nyp för att zooma, rör ihop för att panorera |

| Tangent | Vad den gör |
|---|---|
| {{key:X}} | Sektionsplan på och av. Se [Skär en IFC-modell med ett sektionsplan](topic:section-plane) |
| {{key:Shift+X}} | Sektionsbox runt de markerade elementen, med rummet inställt i Inställningar |

Det finns inga tangenter för {{ui:Ovan}}, {{ui:Framsida}} och {{ui:Sida}}; använd knapparna.

## Redigera

Samma kommandon finns i verktygsfältet: {{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}} och menyn {{ui:Mer}}, som visar varje tangent. De fungerar i 3D-vyn för en IFC-modell, inte medan du skriver i ett fält. Se [Kopiera, klistra in och duplicera biblioteksobjekt](topic:copy-paste).

| Tangent | Vad den gör |
|---|---|
| {{key:Mod+Z}} | Ångrar den senaste ändringen |
| {{key:Mod+Y}} eller {{key:Mod+Shift+Z}} | Gör om det som Ångra tog tillbaka |
| {{key:Mod+C}} | Kopierar de markerade elementen (deras namn och egenskaper läggs också på urklippet som text) |
| {{key:Mod+X}} | Klipper ut de markerade elementen: kopierar dem och tar sedan bort dem |
| {{key:Mod+V}} | Klistrar in det du kopierat: det följer pekaren, klicka där det ska hamna |
| {{key:Mod+Shift+V}} | Klistrar in på plats: där ett urklipp kom ifrån, eller bredvid originalen efter en kopia |
| {{key:Mod+D}} | Duplicerar: kopierar de markerade elementen och börjar klistra in dem |
| {{key:Delete}} | Tar bort de markerade elementen, med deras delar och öppningar. Se [Ta bort, klipp ut, kopiera och klistra in byggelement](topic:edit-elements) |
| {{key:Mod+A}} | Markerar alla synliga element |
| {{key:Esc}} | Avmarkerar allt |

När text är markerad på sidan kopierar {{key:Mod+C}} texten som vanligt.

## Planvy (Rita)

Dessa fungerar när {{ui:Rita}} är på och du inte skriver i ett fält. Se [Rita väggar](topic:draw-walls) och [Dörrar och fönster](topic:doors-and-windows).

| Tangent eller åtgärd | Vad den gör |
|---|---|
| {{key:V}} | {{ui:Markera}} |
| {{key:W}} | {{ui:Vägg}} |
| {{key:D}} | {{ui:Dörr}} |
| {{key:N}} | {{ui:Fönster}} |
| {{key:H}} | Med {{ui:Dörr}} eller {{ui:Fönster}}: gångjärn i andra änden |
| {{key:Shift}} medan du ritar en vägg | Håller den på 0°, 90°, 180° eller 270° |
| Siffror och fot- och tumtecknen (`'` och `"`) | Börjar skriva en längd i rutan {{ui:Längd}}; {{key:Enter}} använder den |
| {{key:Enter}}, {{key:Esc}}, högerklick eller dubbelklick | Avslutar väggen du ritar; {{key:Esc}} igen går tillbaka till {{ui:Markera}} |
| {{key:Delete}} | Tar bort de markerade väggarna, dörrarna och fönstren; de kvarvarande väggarna sitter ihop igen |
| {{key:F}} med pekaren över planen | Anpassar planen |
| Scrolla med hjulet | Zoomar kring pekaren |
| Dra med mitten- eller högerknappen, eller {{key:Space}} och dra | Panorerar; med {{ui:Markera}} på panorerar även ett vanligt drag |
| Dra en dörr eller ett fönster med {{ui:Markera}} | Flyttar den längs sin vägg, eller till en annan vägg |
| Två fingrar (touch) | Nyp för att zooma, rör ihop för att panorera |

## Placera och klistra in biblioteksobjekt

| Tangent | Vad den gör |
|---|---|
| {{key:R}} | Vrider objektet 90° |
| {{key:Tab}} | Väggfångst på och av: objektets baksida går mot närmaste vägg |
| {{key:Enter}} i **X, Y (mm)** | Placerar på den inskrivna positionen |
| {{key:Esc}} | Slutar placera eller klistra in |

## Redigera IFC-värden

| Tangent | Vad den gör |
|---|---|
| {{key:Enter}} | Behåller värdet du skrev |
| {{key:Esc}} | Avbryter och återställer det gamla värdet |
| Klicka någon annanstans | Behåller värdet du skrev |
| {{key:Mod+Z}} | Ångrar den senaste ändringen. Bara medan du har osparade ändringar och inte skriver i ett fält |
| {{key:Mod+Y}} | Gör om det som Ångra tog tillbaka |
| {{key:Mod+S}} | Sparar som IFC. Bara medan du har osparade ändringar; annars öppnas webbläsarens egna sparkommando |

För att redigera enbart med tangentbordet: tryck på {{key:Tab}} tills ett värde är markerat, tryck sedan på {{key:Enter}} för att börja skriva.

## 2D-ritningar (DWG och DXF)

| Tangent eller åtgärd | Vad den gör |
|---|---|
| {{key:F}} | Anpassar ritningen eller bladet |
| {{key:P}} | Utskriftsvy på och av |
| Dubbelklick | Anpassar |
| Dra med valfri knapp | Panorerar |
| Scrolla med hjulet | Zoomar vid pekaren |
| Tvåfingerscroll eller nyp på en pekplatta | Zoomar vid pekaren. Tvåfingerscroll panorerar inte |
| Ett finger (touch) | Panorerar. Nypzoom är inte gjord för ritningar ännu |

## Ritningar i 3D

| Tangent eller åtgärd | Vad den gör |
|---|---|
| {{key:3}} | 3D på och av (även i 2D-vyn) |
| {{key:F}} | Utsträckning: hela ritningen |
| Dra med mitten- eller vänsterknappen | Roterar |
| Dra med högerknappen, eller {{key:Shift}} och dra | Panorerar |
| Scrolla med hjulet | Zoomar mot det som är under pekaren |
| Tvåfingersvep på en pekplatta | Roterar; med {{key:Shift}} panorerar |
| Nyp på en pekplatta | Zoomar |
| Ett finger (touch) | Roterar |
| Två fingrar (touch) | Nyp för att zooma, rör ihop för att panorera |

{{key:F}}, {{key:P}} och {{key:3}} gör ingenting medan du skriver i ett fält, medan utrustningsförteckningen visas, eller när du håller nere {{key:Mod}} eller {{key:Alt}}.

## Filer

| Åtgärd | Vad den gör |
|---|---|
| Dra en fil till sidan | Öppnar den |
| Dra en mapp till sidan | Öppnar den som projektmapp, utan behörighetsfråga |
