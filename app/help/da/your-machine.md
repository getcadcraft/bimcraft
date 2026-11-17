---
title: Hvad din maskine renderer med
summary: Indstillinger › Rendering viser de grafikkort, processorkerner og den hukommelse, denne browser lader appen bruge, og det niveau, der angiver, hvor rendering starter.
keywords: din maskine, grafikkort, gpu, webgpu, webgl, processor, cpu, kerner, tråde, hukommelse, ram, delt hukommelse, isolering, niveau, lagdeling, hastighed, langsom, renderingshastighed, bærbar
from: 360f2375
---

Åbn {{ui:Indstillinger}} ({{key:Mod+,}}), bliv på appens egen fane, og rul til {{ui:Rendering}}. {{ui:Din maskine}} viser, hvad denne browser lader appen bruge til rendering. Intet deraf forlader din computer.

| Række | Hvad det betyder |
|---|---|
| {{ui:Grafik}} | Grafikkortet, som browseren rapporterer. "WebGPU" betyder, at det kan udføre renderingsarbejdet; "WebGL 2 only" betyder, at der ikke er WebGPU: den live visning og billeder i høj kvalitet bruger grafikkortet gennem WebGL 2 (billeder med den ældre WebGL-stisporer uden de ekstra funktioner, der kræver WebGPU); en softwareerstatning betyder, at alt kører på processoren |
| {{ui:Processor}} | Hvor mange processorkerner browseren rapporterer |
| {{ui:Hukommelse}} | Cirka hvor meget hukommelse computeren har, når browseren oplyser det. Nogle browsere gør ikke |
| {{ui:Delt hukommelse}} | Om siden må dele hukommelse mellem sine workers. Når den er til, kan hver kerne arbejde på én kopi af en scene; når den er fra, skal hver have sin egen kopi, så en stor scene kun kan være på færre kerner ad gangen |
| {{ui:Hurtig processorkode}} | Om browseren kører den hurtigere WebAssembly-kode. Uden den bruges en langsommere reserve |
| {{ui:Niveau}} | {{ui:Grafikkort, højt}}, {{ui:Grafikkort, basis}} eller {{ui:Kun processor}}, med årsagen under det |

## Niveauet

Niveauet er, hvor rendering starter, så en bærbar med en indbygget grafikchip eller uden grafikkort overhovedet forbliver responsiv. En indbygget grafikchip eller en telefons grafikchip, eller 4 GB hukommelse eller mindre, får aldrig {{ui:Grafikkort, højt}}.

:::note
Browsere er forskellige. Den samme computer kan vise WebGPU i én browser og "WebGL 2 only" i en anden. På Linux har de fleste browsere endnu ikke WebGPU.
:::
