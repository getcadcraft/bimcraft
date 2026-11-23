---
title: Låt en AI-assistent arbeta med din modell
summary: Slå på assistenter i Inställningar så att en assistent på din dator kan hitta element, läsa deras egenskaper, isolera dem i vyn och rita väggar, dörrar, fönster, golv, nivåer och rutnät, via CadCraft Studio. Av tills du slår på den.
keywords: ai, assistent, mcp, skript, automation, studio, hitta element, isolera, egenskaper, behörigheter, koppla från, aktivitet, rita väggar, lägg till dörrar, lägg till fönster, nivåer, rutnät, golv, ångra, spara, kommandorad, cli, utan fönster, använd med AI-assistenter
from: 66d72742
---

## Vad du lär dig

Hur du låter en AI-assistent (vilken assistent som helst som talar MCP) titta in i IFC-modellen du har öppen och rita i den, vad den kan och inte kan göra, och hur du stoppar den.

## Vad en assistent kan göra i BimCraft

| Den begär att | Vad som händer | Behöver |
|---|---|---|
| Hitta element | Den får en lista över element efter klass, våning, namn eller egenskapsvärde, så som **Hitta** gör | Läsa |
| Läsa egenskaper | Den får ett elements attribut, typ, egenskapsuppsättningar och mängder, så som **Egenskaper** visar dem | Läsa |
| Beskriva modellen, lista väggar | Den får nivåerna, väggar, dörrar, fönster, rum, golv, rutnät och pelare, samt varje väggs ändar, typ och höjd | Läsa |
| Isolera, göra genomskinligt, dölja eller visa | 3D-vyn ändras som om du hade använt menyn {{ui:Visa}} | Ändra vyn och rita |
| Rita väggar, dörrar, fönster, golv, nivåer eller rutnätslinjer | Modellen ändras som om du hade använt verktygen under {{ui:Rita}}: väggar sitter ihop, och rum, golv och tak följer med | Ändra vyn och rita |
| Ändra ett namn eller ett egenskapsvärde | Ett elements Namn, Beskrivning, Objekttyp eller Tagg, eller ett egenskapsvärde. Ett värde som det delar med andra element kopieras först åt det; ett värde för dess typ ändras bara när assistenten säger det, eftersom varje element av den typen följer med | Ändra vyn och rita |
| Flytta, ta bort, ändra väggar, dörrar och fönster | Element flyttas eller tas bort tillsammans med det de sitter i; väggar ritade med verktygen under {{ui:Rita}} ändras efter sina ändar eller typ, dörrar och fönster efter sin plats, storlek eller typ, och rum och sammanfogningar följer med | Ändra vyn och rita |
| Ställa in, ordna och läsa ett schema | "En dörrförteckning per våning, med brandklass och beslag": assistenten namnger schemat, dess kolumner (en egenskap eller tagg blir en kolumn) och dess gruppering; BimCraft fyller i det från modellen och lägger upp det, och det som assistenten inte angett tas från kontorsstandarden. Uppsättningen läggs till i din lista över scheman. Varje rad som kommer tillbaka anger sina element, så att den kan markera dem | Läsa för att läsa; Ändra vyn och rita för att spara en uppsättning |
| Exportera ett schema | CSV, Excel eller tabbseparerad text att klistra in i Google Sheets (ingenting skickas till Google) | Exportera |
| Läsa och ange rumsytskikt | Ytskiktstyperna, varje rums golv-, vägg- och takytskikt, zoner; ytor, antal plattor och volymer för underlag kommer sedan från ytskiktsscheman | Läsa; Ändra vyn och rita för att ange |
| Markera element, ångra sina egna steg | Element väljs i vyn; dess senaste steg tas tillbaka | Ändra vyn och rita |
| Spara | En ny IFC-fil med alla ändringar, så som {{ui:Spara som IFC}} gör den (originalet ändras aldrig) | Spara |
| Exportera USD | De öppna modellerna som OpenUSD (.usda, .usdc eller .usdz), så som {{ui:USD}} i verktygsfältet skriver dem | Exportera |
| Rendera en bild, köra renderingskön | En bild av 3D-vyn, så som dialogrutan {{ui:Rendera}} gör den med dina renderingsinställningar om den inte begär andra, eller bilder i hög kvalitet som läggs i dialogrutans kö och renderas en efter en (kön kräver WebGPU). Ingenting i modellen ändras ([Rendera en bild](topic:render)) | Exportera |

Varje ändring en assistent gör är ett steg i **Ändringar**, med namnet ”Assistent: …” (till exempel ”Assistent: lägg till 4 väggar”), så tar {{key:Mod+Z}} tillbaka hela dess åtgärd, och du kan se vems steg det var. I fönstret kan den inte öppna filer: du öppnar modellen, och den arbetar med den som är öppen.

## Slå på den

Assistenter når BimCraft via CadCraft Studio på din dator; den vanliga webbläsaren har ingen väg in.

1. Öppna {{ui:Inställningar}} och välj fliken **BimCraft**.
2. Under **Assistenter**, bocka i **Låt AI-assistenter och skript använda BimCraft**.
3. **Läsa** är ibockat för dig. Bocka i **Ändra vyn och rita** också om assistenten får isolera och dölja element och rita, och **Spara** om den får spara modellen som en ny fil.
4. Anslut assistenten i Studio (Studio visar adressen och inställningarna att klistra in i den).

## När en assistent är ansluten

En anteckning överst i den högra panelen säger vilken assistent som är ansluten och vad den kan göra. Klicka på {{ui:Koppla från}} för att avsluta dess session direkt; den måste ansluta igen för att fortsätta.

**Aktivitet**, under **Assistenter** i Inställningar, listar varje anrop som assistenten gjorde, nyaste först, med uppgift om det lyckades.

:::tip
Fråga med vanliga ord, till exempel "isolera de yttre väggarna på Nivå 1", "vilka dörrar saknar brandklass?" eller "rita ett rum på 6 gånger 4 meter på Nivå 1 med en dörr i södra väggen". Assistenten hittar elementen och visar dem i din vy, eller ritar dem.
:::

## Utan fönster: skript och kommandoraden

Samma ritverktyg fungerar på IFC-filer i mappar du anger, utan att något fönster är öppet: CadCrafts MCP-server och kommandorad kan starta en ny byggnad eller öppna en IFC-fil, beskriva den, lägga till väggar, dörrar, fönster, golv, nivåer och rutnät, ångra och spara den som en ny `.ifc`-fil. Fyra fler verktyg passar skript: `ifc_batch` kör upp till 200 redigeringssteg som ett (allt eller inget: ett ångra tar tillbaka hela batchen, och ett avvisat steg ångrar resten och anger vilket steg det var); `ifc_describe` listar nivåerna och varje vägg med dess dörrar och fönster; `ifc_render_png` skriver en platt skuggad kontrollbild av modellen (utan material, texturer eller skuggor) utan fönster; `usd_export` skriver `.usda`, `.usdc` eller `.usdz`. På kommandoraden kör `cadcraft bim script.json --from model.ifc -o out.ifc` ett skript med steg, och `--usd`, `--png` och `--plan` skriver en USD-fil, en bild eller en plan från samma körning. Du bestämmer vilka mappar den får använda och om den får ändra eller spara något.

## Stäng av den

Bocka ur **Låt AI-assistenter och skript använda BimCraft**. Varje assistent kopplas från direkt, och inställningen sparas till nästa gång.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): genomarbetade exempel, vart och ett med de verktyg det anropar.
- [Hitta element efter klass, namn eller egenskap](topic:find)
- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
- [BimCraft-inställningar](topic:settings)
