---
title: Filer som BimCraft öppnar och sparar
summary: Varje format som BimCraft öppnar, vad det behåller, vad det sparar, var sparade filer hamnar och vad som ändras mellan webbläsare och när du är offline.
keywords: format, öppna, spara, exportera, ladda ner, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, ladda upp, integritet, filstorlek
from: a7275dbf
---

BimCraft läser filer på datorn, i webbläsarfliken. **Inget laddas upp** till CadCraft eller någon annan. När du sparar ger BimCraft webbläsaren en ny fil att ladda ner; den skriver aldrig över en fil du har öppnat.

## Vad den öppnar

| Format | Filändelser | Vad du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, våningsplan, antal element och alla elements egenskaper. Namn, taggar och enskilda egenskapsvärden kan ändras. |
| Projekt- och familjefiler | `.rvt` `.rfa` `.rte` `.rft` | Ett filkort: version, build, samarbete, projektinformation, familjeparametrar, länkade filer och förhandsvisningsbilden. Ingen 3D. |
| DWG | `.dwg` | Ritningen i 2D: modellrummet, varje blad, lager, länkade ritningar, bilder och utskriftsvyn. Modellrummet i 3D också. Format från AutoCAD 2000 till 2018 är de som har kontrollerats. |
| DXF | `.dxf` | Samma som DWG. |
| STEP | `.step` `.stp` | En del, en utrustning eller en leverantörs modell (AP203, AP214, AP242) i 3D: varje solid blir ett element (ett proxyelement för byggnadsdelar) i en liten IFC-modell på en våning, läses som trianglar i sin verkliga storlek, och en sammanställning med varje del där filen placerar den. Den fungerar därefter som vilken IFC som helst: egenskaper, sektioner, mätning, spara som IFC. Färger och sammanställningsträdet läses inte. |
| Punktmoln | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanningen i 3D-vyn, bredvid en modell eller för sig: se [Visa ett punktmoln bredvid modellen](topic:point-clouds). |
| Projektpaket | `.ccbundle.zip` | Modellen med dess vyer, layouter och egenskapsgrupper: se [Öppna ett projektpaket](topic:open-project-bundle). |
| En mapp | valfri | En rapport över varje modell, ritning och projektpaket i mappen. Varje IFC, modell, ritning eller paket i rapporten öppnas med ett klick. |

[Vad BimCraft läser från varje format](topic:file-formats) går in på detaljer.

BimCraft avgör vad en fil är genom att titta på dess första byte och inte bara på namnet, så en projektfil med ovanlig filändelse öppnas ändå som ett filkort.

### Öppnas inte

- `.ifczip` och `.ifcxml`: BimCraft säger ".ifczip stöds inte ännu. Spara eller exportera modellen som en vanlig .ifc-fil." Packa upp `.ifczip` (den innehåller en vanlig `.ifc`) eller exportera igen som vanlig IFC.
- DGN-ritningar visas i en mappbaserad rapport men öppnas inte.
- PDF, bilder och kontorsfiler öppnas inte på egen hand. Bilder används som bilder i en DWG, och {{ui:Bygge}} › {{ui:Från en ritning…}} gör om sidorna i en PDF eller en skanning till väggar: se [Väggar från en ritningsuppsättning](topic:walls-from-plans).

## Vad den sparar

| Du klickar på | Du får | Var |
|---|---|---|
| {{ui:Spara som IFC}} | En ny IFC-fil med dina ändringar, namngiven "*ursprungligt namn* (edited).ifc" | Webbläsarens nedladdningsmapp |
| {{ui:Ladda ner CSV}} i utrustningsförteckningen | En CSV-fil med objekten i listan, namngiven "*ritningens namn* equipment.csv" | Webbläsarens nedladdningsmapp |

Annat sparas där det skapas, var och en i sitt eget ämne: {{ui:USD}} ([Exportera modellen som USD](topic:usd)), {{ui:Collada}} ([Exportera modellen som Collada eller för Google Earth](topic:collada): .dae och Google Earths .kmz), .glb-filen {{ui:För rendering}}, renderade bilder, blad och planer som PDF, förteckningar och listor som CSV, BCF-ärenden, COBie-kalkylbladet, familjefiler och registrerade skanningar som LAS eller E57. BimCraft sparar inte DWG-, DXF- eller projektfiler, och ändrar aldrig de filer du har öppnat.

:::chromium
Chrome och Edge sparar nerladdningar i mappen som anges i deras inställningar, vanligtvis Hämtade filer. För att bli tillfrågad var varje fil ska sparas varje gång, aktivera "Fråga var varje fil ska sparas innan den laddas ner" i webbläsarens nedladdningsinställningar.
:::

:::firefox
Firefox sparar i mappen Hämtade filer om du inte har ställt in "Fråga alltid var filer ska sparas" i inställningarna.
:::

:::safari
Safari sparar i Hämtade filer om du inte väljer en annan mapp under **Safari > Inställningar > Allmänt > Plats för filnedladdning**.
:::

## Att spara en andra gång

Varje sparning laddar ner hela modellen med **varje ändring sedan du öppnade den**, inte bara ändringarna efter den senaste sparningen. Listan {{ui:Ändringar}} börjar tom igen efter varje sparning, så du kan inte ångra längre än till en sparning. Vill du börja om från originalet öppnar du originalfilen igen.

## Stora filer och minne

- **IFC**-filer läses helt in i fliken minne, och 3D-geometrin tar mer minne utöver det. En modell på några hundra megabyte kan vara för mycket för en bärbar dator. Över 1.5 million trianglar stängs kanterna av för att spara minne ("Kanterna är av för mycket stora modeller").
- **Projektfiler** läses inte i sin helhet. BimCraft läser bara de små delar den behöver, cirka 40 KB till 100 KB oavsett hur stor filen är, så en 500 MB stor central modell på en nätverksenhet öppnas på ett ögonblick.
- **DWG- och DXF-filer** läses helt in. En mycket stor ritning visar "Den här ritningen är mycket stor; endast en del visas."
- **Mappar** med upp till 20,000 filer öppnas. Bara de få kilobyte som varje modellkort behöver läses.

Se [Webbläsare, enheter och minne](topic:platforms) för mer.

## Online och offline

Att öppna filer kräver aldrig internet. En läsare laddas från webbplatsen första gången du behöver den: IFC-motorn, första gången du öppnar en IFC-modell ("Startar IFC-motorn…"). DWG- och DXF-läsarna ingår i appen.

:::offline
Du är offline. Om appfältets knapp säger {{ui:Redo för offline}} öppnas alla format som vanligt. Om inte går det inte att öppna en IFC-modell om ingen redan har öppnats i den här fliken: anslut igen först. Se [Online och offline](topic:online-offline).
:::

För att använda BimCraft utan anslutning klickar du på {{ui:Spara för offline}} i appfältet medan du är online och väntar på {{ui:Redo för offline}}. Den sparade kopian är cirka 33 MB; den innehåller IFC-motorn, så IFC-modeller öppnas offline också. [Arbeta offline](common:offline) förklarar sparade kopior i allmänhet.

## Molnlagring

Molnlagring finns inte ännu. Spara dina redigerade kopior på din egen dator eller på ditt kontors filserver, som vilken annan fil som helst. Se [Dina filer](common:your-files).
