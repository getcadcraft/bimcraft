---
title: Länka andra modeller för samordning
summary: Visa en annan IFC-modell bredvid din genom en länk (den slås aldrig ihop), placera den efter gemensamma koordinater, kartkoordinater eller två punkter, fånga dess hörn när du ritar och läs in den igen när dess fil ändras.
keywords: länk, länkad modell, referens, xref, samordning, federering, konstruktion, VVS, konsult, gemensamma koordinater, mätning, kartkoordinater, läs in igen, ta bort från minnet, dokumentreferens, IfcDocumentReference
from: 3e0f1eab
---

## Vad du gör

Rita mot en konsults modell (konstruktionen, installationerna, den befintliga byggnaden) utan att kopiera något till din egen fil.

En **länkad modell** visas i 3D-vyn och skärs på dina plan, men den ändras aldrig och sparas aldrig in i din modell. Din modell behåller bara länken: filens namn och var den ska placeras.

## Länka en modell

1. I den vänstra panelens avsnitt {{ui:Länkade modeller}} klickar du på {{ui:Länka en modell…}} och väljer IFC-filen. Den visas direkt, och dess rad säger **Visas**.
2. Välj var den ska placeras under {{ui:Placering}}:
   - **Gemensamma koordinater** (för att börja): dess koordinater är dina, som när båda modellerna har satts ut från samma nollpunkt.
   - **Kartkoordinater**: båda filernas kartkoordinater placerar dem rätt. Båda behöver en kartkonvertering; BimCraft säger till när en saknar den.
   - **Med två punkter…**: klicka på en punkt i den länkade modellen och sedan på var den ska hamna i din. Gör sedan ett andra par. Länken flyttas och vrids (kring vertikalen) så att den passar.
3. Varje länk och varje ändring av placeringen är ett steg: {{key:Mod+Z}} tar tillbaka den.

## Arbeta med den

- Planen visar den länkade modellen skuren på nivåns skärhöjd som tunna linjer. Verktyget {{ui:Vägg}} och de andra ritverktygen fångar dess hörn och kanter.
- Välj dess element i 3D-vyn för att läsa deras egenskaper. En länkad modell är aldrig den du redigerar, så dess radioknapp i {{ui:Modeller}} är av.
- **Har filen ändrats?** När webbläsaren kan bevaka filen (en fil som öppnats via dess filväljare, eller i Studio) läser BimCraft in länken av sig själv några sekunder efter att filen sparats igen, och säger till om det. Annars klickar du på {{ui:Läs in igen}}.
- {{ui:Ta bort från minnet}} döljer den och frigör minnet. Länken finns kvar i din modell. {{ui:Läs in…}} visar den igen (du väljer filen, eftersom en webbläsare inte kan öppna en fil enbart med dess namn).
- × tar bort länken från din modell.

## Vad du bör se

- I din IFC-fil: en IfcDocumentReference för varje länk (filens namn), kopplad till projektet, och var den placeras i projektets egenskapsuppsättning CadCraft_Links. När du öppnar din modell igen listas dess länkar som **Ej inläst** tills du läser in dem.

:::note
Kollisionskontroller, Jämför och Sök kan använda en inläst länk precis som vilken annan öppen modell som helst: se [Se flera IFC-modeller tillsammans](topic:several-models).
:::
