---
title: De scène naar een game-engine sturen
summary: Studio kan de scène in een Unreal Engine-project schrijven en die bij elke verzending gelijk houden; uw eigen bewerkingen staan in een laag die CadCraft nooit schrijft. De plug-in die het opent is nog niet uitgebracht.
keywords: unreal, unreal engine, game-engine, koppeling, verzenden, usd-stage, project, live, cine camera, filmrenderwachtrij
from: 154d55ef
---

In CadCraft Studio kan de lijst Engine een **koppeling** bevatten naar een Unreal Engine-project. Alleen één richting: van CadCraft naar Unreal.

## De scène verzenden

1. Kies het Unreal-item in de lijst Engine. De eerste keer vraagt Studio u de map van uw project te kiezen (de map met het `.uproject`-bestand); die wordt onthouden.
2. Klik op {{ui:Verzenden}}. Studio schrijft `CadCraft/<file name>/` in het project: de scène als USD-bestand, het instellingenbestand, lichtprofielen en twee kleine lagenbestanden.
3. Wijzig het model, sla op en verstuur opnieuw. Alleen de scène en het instellingenbestand worden vervangen.

## Uw eigen bewerkingen blijven behouden

De stage die Unreal opent is een kleine hoofdlaag die eenmalig wordt gemaakt, met twee lagen eronder: **de uwe** bovenaan (`<name>.user.usda`, eerst leeg, nooit door CadCraft herschreven) en de scène van CadCraft eronder. Bewerkingen die u in uw eigen laag opslaat, blijven behouden wanneer de scène opnieuw wordt verzonden. Lampen en andere actoren die u in het Unreal-level plaatst, staan buiten de stage en worden ook niet aangeraakt.

## Zonder Studio

In de browser, of op een computer waar Studio Unreal niet vindt, kiest u **Unreal-projectmap (.zip)** in de lijst Engine en klikt u op {{ui:Renderen}}. Dit slaat dezelfde map op als zip: pak hem uit in de map `CadCraft` van uw project. Laat **Stagebestanden opnemen** de eerste keer aan; zet het uit voor latere opslagen, zodat de zip alleen de scène en het instellingenbestand bevat en uw eigen laag nooit wordt vervangen.

:::note
De Unreal-plug-in die de stage opent, de zon, lampen, camera's en belichting toepast, elke verzending volgt en een camera rendert, is **nog niet uitgebracht** en is nog niet in Unreal uitgevoerd. Tot die tijd zet Verzenden de bestanden in het project, en de eigen USD-hulpmiddelen van Unreal kunnen ze openen. Windows is het eerste systeem; macOS volgt.
:::
