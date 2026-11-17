---
title: Vad din maskin renderar med
summary: Inställningar › Rendering visar grafiken, processorkärnorna och minnet som webbläsaren här låter appen använda, samt nivån som avgör var renderingen börjar.
keywords: din maskin, grafikkort, gpu, webgpu, webgl, processor, cpu, kärnor, trådar, minne, ram, delat minne, isolering, nivå, hastighet, långsam, renderingshastighet, bärbar dator
from: 360f2375
---

Öppna {{ui:Settings}} ({{key:Mod+,}}), stanna på appens egen flik och scrolla till {{ui:Rendering}}. {{ui:Your machine}} listar vad webbläsaren här låter appen använda för rendering. Ingenting i den lämnar din dator.

| Rad | Vad det betyder |
|---|---|
| {{ui:Graphics}} | Grafikkortet som webbläsaren rapporterar. "WebGPU" betyder att det kan göra renderingsarbetet; "WebGL 2 only" betyder att det inte finns WebGPU: livevyn och bilder i hög kvalitet använder grafikkortet via WebGL 2 (bilder med den äldre WebGL-sökvägen, utan de extra funktioner som kräver WebGPU); en programvaruersättning betyder att allt körs på processorn |
| {{ui:Processor}} | Hur många processorkärnor webbläsaren rapporterar |
| {{ui:Memory}} | Ungefär hur mycket minne datorn har, när webbläsaren säger det. Vissa webbläsare gör inte det |
| {{ui:Shared memory}} | Om sidan får dela minne mellan sina arbetare. På: varje kärna kan arbeta på en kopia av en scen; av: varje behöver en egen kopia, så en stor scen får plats på färre kärnor samtidigt |
| {{ui:Fast processor code}} | Om webbläsaren kör den snabbare WebAssembly-koden. Utan den används en långsammare reservkod |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} eller {{ui:Processor only}}, med skälet under |

## Nivån

Nivån är där renderingen börjar, så att en bärbar dator med inbyggt grafikchip eller utan grafikkort ändå känns responsiv. Ett inbyggt eller mobilt grafikchip, eller 4 GB minne eller mindre, får aldrig {{ui:Graphics card, high}}.

:::note
Webbläsare skiljer sig åt. Samma dator kan visa WebGPU i en webbläsare och "WebGL 2 only" i en annan. På Linux saknar de flesta webbläsare WebGPU ännu.
:::
