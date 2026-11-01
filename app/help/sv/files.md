---
title: Filer som BimCraft öppnar och sparar
summary: Varje format BimCraft öppnar, vad det behåller, vad det sparar, vart sparade filer tar vägen och vad som skiljer mellan webbläsare och när du är offline.
keywords: format, öppna, spara, exportera, ladda ner, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, ladda upp, integritet, filstorlek
from: a1f0161b
---

BimCraft läser filer på din dator, i webbläsarfliken. **Ingenting laddas upp** till CadCraft eller någon annan. När du sparar ger BimCraft webbläsaren en ny fil att ladda ner; den skriver aldrig över en fil du öppnat.

## Det den öppnar

| Format | Filändelser | Det du får |
|---|---|---|
| IFC | `.ifc` | Modellen i 3D, våningsplan, antal element och varje elements egenskaper. Namn, taggar och enskilda egenskapsvärden kan ändras. |
| Projekt- och familjefiler | `.rvt` `.rfa` `.rte` `.rft` | Ett filkort: version, bygge, samarbete i delad modell, projektinformation, familjeparametrar, länkade filer och förhandsbilden. Ingen 3D. |
| DWG | `.dwg` | Ritningen i 2D: modellrummet, varje blad, lager, länkade ritningar, bilder och utskriftsvy. Modellrummet även i 3D. Format från AutoCAD 2000 till 2018 är de som testats. |
| DXF | `.dxf` | Samma som DWG. |
| STEP | `.step` `.stp` | En del, en utrustning eller en leverantörsmodell (AP203, AP214, AP242) i 3D: varje solid blir ett element (ett byggnadselement utan typ) i en liten IFC-modell på ett våningsplan, läst som trianglar i verklig storlek, en sammanställning med varje del där filen placerar den. Därifrån fungerar den som vilken IFC som helst: egenskaper, sektioner, mätning, spara som IFC. Färger och sammanställningsträdet läses inte. |
| Punktmoln | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Skanningen i 3D-vyn, bredvid en modell eller för sig: se [Visa ett punktmoln bredvid modellen](topic:point-clouds). |
| Projektpaket | `.ccbundle.zip` | Modellen med sina vyer, layouter och egenskapsgrupper: se [Öppna ett projektpaket](topic:open-project-bundle). |
| En mapp | valfri | En rapport över varje modell, ritning och projektpaket i den. Varje IFC, modell, ritning eller paket i rapporten öppnas med ett klick. |

[Vad BimCraft läser från varje format](topic:file-formats) går in på detaljerna.

BimCraft avgör vad en fil är genom att titta på dess första byte och inte bara på namnet, så en projektfil med ovanlig filändelse öppnas ändå som ett filkort.

### Öppnas inte

- `.ifczip` och `.ifcxml`: BimCraft säger ".ifczip stöds inte ännu. Spara eller exportera modellen som en vanlig .ifc-fil." Packa upp `.ifczip` (den innehåller en vanlig `.ifc`) eller exportera igen som vanlig IFC.
- DGN-ritningar listas i en mapprapport men öppnas inte.
- PDF, bilder och kontorsfiler öppnas inte på egen hand. Bilder används som bilder i en DWG, och {{ui:Bygg}} › {{ui:Från en ritning…}} gör om sidorna i en PDF eller en skanning till väggar: se [Väggar från en uppsättning planer](topic:walls-from-plans).

## Det den sparar

| Du klickar på | Du får | Var |
|---|---|---|
| {{ui:Spara som IFC}} | En ny IFC-fil med dina ändringar, med namnet "*originalnamn* (edited).ifc" | Webbläsarens nedladdningsmapp |
| {{ui:Ladda ner CSV}} i utrustningsförteckningen | En CSV med posterna i listan, med namnet "*ritningens namn* equipment.csv" | Webbläsarens nedladdningsmapp |

Andra saker sparas där de skapas, var och en i sitt eget ämne: {{ui:USD}} ([Exportera modellen som USD](topic:usd)), .glb-filen {{ui:För rendering}}, renderade bilder, blad och planer som PDF, förteckningar och listor som CSV, BCF-ärenden, COBie-kalkylbladet, familjefiler och passade skanningar som LAS eller E57. BimCraft sparar inte DWG-, DXF- eller projektfiler, och ändrar aldrig filerna du öppnade.

:::chromium
Chrome och Edge sparar nedladdningar i mappen som anges i deras inställningar, vanligtvis Hämtade filer. För att bli tillfrågad var varje fil ska sparas slår du på "Fråga var varje fil ska sparas innan den hämtas" i webbläsarens nedladdningsinställningar.
:::

:::firefox
Firefox sparar i mappen Hämtade filer om du inte ställer in "Fråga alltid var filer ska sparas" i inställningarna.
:::

:::safari
Safari sparar i Hämtade filer om du inte väljer en annan mapp under **Safari > Inställningar > Allmänt > Plats för nedladdade filer**.
:::

## Spara en andra gång

Varje sparning laddar ner hela modellen med **varje ändring sedan du öppnade den**, inte bara ändringarna efter senaste sparningen. Listan {{ui:Ändringar}} börjar om tom efter varje sparning, så du kan inte ångra bakom en sparning. För att börja om från originalet öppnar du originalfilen igen.

## Stora filer och minne

- **IFC**-filer läses helt in i flikens minne, och 3D-geometrin tar mer minne ovanpå det. En modell på några hundra megabyte kan bli för mycket för en bärbar dator. Över 1,5 miljoner trianglar stängs kanter av för att spara minne ("Kanter är av för mycket stora modeller").
- **Projektfiler** läses inte i sin helhet. BimCraft läser bara de små delar den behöver, cirka 40 KB till 100 KB oavsett hur stor filen är, så en central modell på 500 MB på en nätverksenhet öppnas på ett ögonblick.
- **DWG- och DXF**-filer läses helt. En mycket stor ritning visar "Den här ritningen är mycket stor; bara en del visas."
- **Mappar** med upp till 20 000 filer öppnas. Bara de få kilobyte som varje modellkort behöver läses.

Se [Webbläsare, enheter och minne](topic:platforms) för mer.

## Online och offline

Att öppna filer kräver aldrig internet. En läsare laddas från webbplatsen första gången du behöver den: IFC-motorn, första gången du öppnar en IFC-modell ("Startar IFC-motorn…"). DWG- och DXF-läsarna är en del av appen.

:::offline
Du är offline. Om knappen i appfältet säger {{ui:Redo för offline}} öppnas alla format som vanligt. Om inte kan en IFC-modell inte öppnas om inte en redan öppnats i den här fliken: anslut först igen. Se [Online och offline](topic:online-offline).
:::

För att använda BimCraft utan uppkoppling klickar du på {{ui:Spara för offline}} i appfältet medan du är online och väntar på {{ui:Redo för offline}}. Den sparade kopian är cirka 33 MB; den innehåller IFC-motorn, så IFC-modeller öppnas även offline. [Arbeta offline](common:offline) förklarar sparade kopior i allmänhet.

## Molnlagring

Molnlagring finns inte ännu. Spara dina redigerade kopior på din egen dator eller kontorets filserver, som vilken annan fil som helst. Se [Dina filer](common:your-files).
