---
title: Låt en AI-assistent arbeta med din modell
summary: Slå på assistenter i Inställningar så att en assistent på din dator kan hitta element, läsa deras egenskaper, isolera dem i vyn och rita väggar, dörrar, fönster, golv, nivåer och rutnät, via CadCraft Studio. Av tills du slår på den.
keywords: ai, assistent, mcp, skript, automation, studio, hitta element, isolera, egenskaper, behörigheter, koppla från, aktivitet, rita väggar, lägg till dörrar, lägg till fönster, nivåer, rutnät, golv, ångra, spara, kommandorad, cli, headless, använd med AI-assistenter
from: c5ee595b
---

## Vad du kommer att lära dig

Hur du låter en AI-assistent (vilken assistent som helst som talar MCP) titta in i IFC-modellen du har öppen och rita i den, vad den kan och inte kan göra, och hur du stoppar den.

## Vad en assistent kan göra i BimCraft

| Den begär | Vad som händer | Kräver |
|---|---|---|
| Hitta element | Den får en lista med element efter klass, våning, namn eller egenskapsvärde, som **Find** gör | Läsa |
| Läsa egenskaper | Den får ett elements attribut, typ, egenskapsuppsättningar och kvantiteter, som **Properties** visar dem | Läsa |
| Beskriva modellen, lista väggar | Den får nivåerna, väggarna, dörrarna, fönstren, rummen, golven, rutnäten och pelarna, samt varje väggs ändar, typ och höjd | Läsa |
| Isolera, göra genomskinlig, dölja eller visa | 3D-vyn ändras som om du använt menyn {{ui:Show}} | Ändra vyn och rita |
| Rita väggar, dörrar, fönster, golv, nivåer eller rutnätslinjer | Modellen ändras som om du använt verktygen under {{ui:Draw}}: väggar sammanfogas, rum, golv och tak följer med | Ändra vyn och rita |
| Ändra ett namn eller ett egenskapsvärde | Ett elements Name, Description, Object type eller Tag, eller ett egenskapsvärde. Ett värde som elementet delar med andra kopieras först för det; ett värde på dess typ ändras bara när assistenten säger det, eftersom varje element av typen följer med | Ändra vyn och rita |
| Flytta, ta bort, ändra väggar, dörrar och fönster | Element flyttas eller tas bort med det de sitter i; väggar ritade med verktygen under {{ui:Draw}} ändras genom sina ändar eller typ, dörrar och fönster genom sin plats, storlek eller typ, och rum och sammanfogningar följer med | Ändra vyn och rita |
| Ställa upp, ordna och läsa en förteckning | "En dörrförteckning per våning, med brandklass och beslag": assistenten anger förteckningens namn, dess kolumner (en egenskap eller tagg blir en kolumn) och dess gruppering; BimCraft fyller i den från modellen och lägger upp den, och tar det assistenten inte angett från kontorsstandarden. Uppsättningen går med i din lista över Schedules. Varje rad den får tillbaka anger sina element, så att den kan markera dem | Läsa för att läsa; Ändra vyn och rita för att spara en uppsättning |
| Exportera en förteckning | CSV, Excel eller tabbseparerad text att klistra in i Google Sheets (inget skickas till Google) | Exportera |
| Läsa och ange rumsytskikt | Ytskiktstyperna, varje rums golv-, vägg- och takskikt, zoner; areor, kakelantal och underlagsvolymer kommer sedan från ytskiktsförteckningarna | Läsa; Ändra vyn och rita för att ange |
| Markera element, ångra sina egna steg | Element väljs i vyn; dess sista steg tas tillbaka | Ändra vyn och rita |
| Spara | En ny IFC-fil med varje ändring, så som {{ui:Save as IFC}} gör den (originalet ändras aldrig) | Spara |
| Exportera USD | De öppna modellerna som OpenUSD (.usda, .usdc eller .usdz), så som {{ui:USD}} i verktygsfältet skriver dem | Exportera |
| Rendera en bild, köra renderingskön | En bild av 3D-vyn, så som dialogen {{ui:Render}} gör den med dina Render-inställningar om den inte begär andra, eller bilder i hög kvalitet som läggs i dialogens kö och renderas en i taget (kön kräver WebGPU). Ingenting i modellen ändras ([Rendera en bild](topic:render)) | Exportera |

Varje ändring en assistent gör är ett steg i **Ändringar**, med namnet "Assistent: …" (till exempel "Assistent: lägg till 4 väggar"), så att {{key:Mod+Z}} tar tillbaka hela dess åtgärd, och du ser vems steg det var. I fönstret kan den inte öppna filer: du öppnar modellen; den arbetar med den som är öppen.

## Slå på den

Assistenter når BimCraft via CadCraft Studio på din dator; den vanliga webbläsaren har ingen väg in.

1. Öppna {{ui:Settings}} och välj fliken **BimCraft**.
2. Under **Assistenter** markerar du **Låt AI-assistenter och skript använda BimCraft**.
3. **Läsa** är markerat för dig. Markera **Ändra vyn och rita** också om assistenten får isolera och dölja element och rita, och **Spara** om den får spara modellen som en ny fil.
4. Anslut assistenten i Studio (Studio visar adressen och inställningarna som ska klistras in i den).

## Medan en assistent är ansluten

En anteckning överst i högerpanelen säger vilken assistent som är ansluten och vad den kan göra. Klicka på {{ui:Disconnect}} för att avsluta dess session direkt; den måste ansluta igen för att fortsätta.

**Aktivitet**, under **Assistenter** i Inställningar, listar varje anrop som assistenten gjort, nyast först, och om det lyckades.

:::tip
Fråga med vanliga ord, till exempel "isolera de yttre väggarna på Nivå 1", "vilka dörrar saknar brandklass?" eller "rita ett rum på 6 gånger 4 meter på Nivå 1 med en dörr i södra väggen". Assistenten hittar elementen och visar dem i din vy, eller ritar dem.
:::

## Utan fönster: skript och kommandoraden

Samma ritverktyg fungerar på IFC-filer i mappar du namnger, utan att något fönster är öppet: CadCraft:s MCP-server och kommandorad kan starta en ny byggnad eller öppna en IFC-fil, beskriva den, lägga till väggar, dörrar, fönster, golv, nivåer och rutnät, ångra och spara den som en ny `.ifc`-fil. Du avgör vilka mappar den får använda och om den får ändra eller spara något.

## Stäng av den

Avmarkera **Låt AI-assistenter och skript använda BimCraft**. Varje assistent kopplas från direkt, och inställningen behålls till nästa gång.

## Se även

- [Recept för AI-assistenter](common:assistants-recipes): exempel, vart och ett med de verktyg det anropar.
- [Hitta element efter klass, namn eller egenskap](topic:find)
- [Dölj, isolera och gör element genomskinliga](topic:hide-and-isolate)
- [BimCraft-inställningar](topic:settings)
