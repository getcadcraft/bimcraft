---
title: Komma igång med BimCraft
summary: Vad BimCraft gör i dag, hur du öppnar din första modell, tittar på den i 3D, ändrar ett värde och sparar en kopia.
keywords: start, första gången, öppna, ifc, rvt, dwg, snabbstart, introduktion, visningsprogram, bim
from: fc2dea19
---

BimCraft är byggnadsmodellappen i CadCraft-familjen. I den här versionen **öppnar, läser och granskar** den byggnadsfiler, och den **redigerar data i IFC-modeller**. Den ritar eller modellerar inga nya element ännu. Tänk på den som ett modellvisningsprogram och en kontrollant som också låter dig rätta namn, taggar och egenskapsvärden i en IFC-fil.

Det den öppnar:

| Fil | Det du får |
|---|---|
| IFC (`.ifc`) | Hela modellen i 3D: rotera, våningsplan, elementegenskaper och redigering av namn och egenskapsvärden |
| Projekt- och familjefiler (`.rvt`, `.rfa`, `.rte`, `.rft`) | Ett filkort: versionen den sparades i, projektinformation, förhandsbilden och länkade filer. Ingen 3D. |
| DWG och DXF | Ritningen i 2D: modellrummet och varje blad, lager, länkade ritningar, utskriftsvy och en utrustningsförteckning för taggade storköksritningar |
| En projektmapp | En rapport över varje modell i mappen: säkerhetskopior, länkar, skadade kopior och ett förslag på vilken fil du ska börja med |

Allt sker i din webbläsare, på din dator. **Ingenting laddas upp.** Se [Filer som BimCraft öppnar och sparar](topic:files) för detaljer.

## Öppna BimCraft

1. Öppna BimCraft i en aktuell webbläsare. Chrome, Edge, Firefox och Safari fungerar alla; [Webbläsare, enheter och minne](topic:platforms) listar skillnaderna.
2. Vänta på den tomma skärmen som säger "Öppna en byggnadsmodell."

:::note
BimCraft körs i webbläsaren, och på skrivbordet i CadCraft Studio, tillsammans med de andra apparna. Molnlagring finns inte ännu: du öppnar filer från din dator och sparar kopior tillbaka dit.
:::

## Öppna din första modell

Det snabbaste sättet att se vad BimCraft gör är en IFC-fil.

1. Klicka på {{ui:Välj en fil}} mitt på skärmen.
2. Välj en `.ifc`-fil i {{pick:mac=Finder|windows=Utforskaren|linux=filhanteraren}} och bekräfta.
3. Vänta medan statusraden längst ned på skärmen säger "Startar IFC-motorn…" och sedan "Bygger geometri".

Du ska se modellen i 3D i mitten, en panel {{ui:Fil}} och en lista {{ui:Våningsplan}} till vänster, och en tom panel {{ui:Egenskaper}} till höger. Statusraden slutar med "Öppnade" och antalet element.

:::tip
Du kan också dra en fil från {{pick:mac=Finder|windows=Utforskaren|linux=filhanteraren}} direkt till sidan. Skärmen visar "Släpp för att öppna" medan du drar.
:::

:::offline
IFC-motorn laddas från webbplatsen första gången du öppnar en IFC-modell, om inte BimCraft sparats för offlineanvändning. DWG- och DXF-ritningar, projektfiler och mappar behöver inget extra: deras läsare är en del av appen. Om knappen i appfältet säger {{ui:Redo för offline}} öppnas allt offline. Om inte öppnas inte IFC-modeller förrän du återansluter, om inte en redan öppnats i den här fliken. Se [Online och offline](topic:online-offline).
:::

:::online
Ska du någonstans utan uppkoppling? Klicka på {{ui:Spara för offline}} i appfältet och vänta på {{ui:Redo för offline}}. Den sparade kopian (cirka 11 MB) innehåller IFC-motorn. Se [Arbeta offline](common:offline).
:::

## Titta runt

:::mouse
1. Dra med vänster musknapp för att rotera runt modellen.
2. Rulla hjulet för att zooma.
3. Dra med höger musknapp för att panorera. På en Mac-styrplatta håller du i stället ned {{key:Shift}} och drar.
4. Tryck på {{key:F}} eller klicka på {{ui:Anpassa}} för att se hela modellen igen.
:::

:::touch
1. Dra med ett finger för att rotera.
2. Nyp med två fingrar för att zooma, och flytta två fingrar tillsammans för att panorera.
3. Tryck på {{ui:Anpassa}} för att se hela modellen igen.
:::

## Gör en riktig sak: rätta en tagg

1. Klicka på en vägg, en dörr eller något annat element i modellen. Det blir blått och dess egenskaper visas till höger.
2. Klicka på värdet bredvid **Tagg** i panelen {{ui:Egenskaper}}.
3. Skriv den nya taggen och tryck på {{key:Enter}}.
4. Titta på avsnittet {{ui:Ändringar}} som öppnades till vänster: din ändring finns i listan med gammalt och nytt värde.

## Spara en kopia

1. Klicka på {{ui:Spara som IFC}} i avsnittet {{ui:Ändringar}}, eller tryck på {{key:Mod+S}}.
2. Hitta den nya filen i din nedladdningsmapp. Den får originalets namn med " (edited)" tillagt, till exempel `Clinic (edited).ifc`.

Din originalfil ändras aldrig. [Ändra IFC-egenskaper och spara en redigerad kopia](topic:edit-ifc-properties) förklarar redigeringen i sin helhet.

## Vart du går härnäst

- [BimCraft-skärmen](topic:workspace): varje panel vid namn.
- [Om du kommer från andra BIM- och ritprogram](topic:coming-from): vad som känns annorlunda om du är van vid Revit.
- [Öppna en hel projektmapp](topic:open-project-folder): peka BimCraft på en projektmapp och låt det sortera filerna.
- [Visa en DWG- eller DXF-ritning](topic:view-dwg): blad, lager och utskriftsvy.
