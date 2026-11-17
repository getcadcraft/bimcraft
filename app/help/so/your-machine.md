---
title: Waxa kumbiyuutarkaagu ku rendarayo
summary: Dejinta › Rendarka wuxuu muujinayaa garaafyada, core-yada processor-ka iyo xusuusta uu browser-kan u ogolaado app-ka, iyo heerka uu rendarku ku bilowdo.
keywords: kumbiyuutarkaaga, kaarka garaafyada, gpu, webgpu, webgl, processor, cpu, cores, threads, xusuusta, ram, xusuus la wadaago, isolation, darajada, heerka, xawaaraha, gaabis, xawaaraha rendarka, laptop
from: 360f2375
---

Fur {{ui:Settings}} ({{key:Mod+,}}), ku sii dhig tab-ka app-kan gaarka ah oo hoos u dhaadhac {{ui:Rendering}}. {{ui:Your machine}} wuxuu liistaa waxa browser-kan u ogolaado app-ka si uu u rendaro. Waxba ka mid ah ma ka bixi kombiyuutarkaaga.

| Safka | Macnaha |
|---|---|
| {{ui:Graphics}} | Kaarka garaafyada ee browser-ku sheego. "WebGPU" macnaheedu waa wuu samayn karaa shaqada rendarka; "WebGL 2 only" macnaheedu waa ma jiro WebGPU: aragta toosan iyo sawirada tayada sare waxay isticmaalaan kaarka garaafyada iyada oo loo marayo WebGL 2 (sawirada habka WebGL path tracer-ka ee hore, iyada oo aan lahayn waxyaabaha u baahan WebGPU); beddelka software-ka macnaheedu waa wax kasta waxay ku socdaan processor-ka |
| {{ui:Processor}} | Inta core-ka processor-ka ee browser-ku sheego |
| {{ui:Memory}} | Qiyaas xusuusta kombiyuutarka, marka browser-ku sheego. Browser-radaan ma sheegaan |
| {{ui:Shared memory}} | Haddii bogga uu ogolaado inuu xusuus la wadaago workers-keeda. Marka shaqeynayso, core kasta wuxuu ka shaqayn karaa hal nuqul oo jaanta ah; marka damaysan, mid kasta wuxuu u baahan yahay nuqul u gaar ah, sidaas darteed jaan weyn wuxuu ku habboonaanayaa core yar oo isku mar ah |
| {{ui:Fast processor code}} | Haddii browser-ku socodsiiyo koodka WebAssembly ee degdega ah. Aan lahayn, wuxuu isticmaalaa wax kale oo gaabis ah |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} ama {{ui:Processor only}}, iyo sababta hoosteeda |

## Heerka

Heerka waa meesha rendarku ku bilowdo, si kombiyuutar leh chip garaafyo oo dhismaha ku jira ama aan kaarka garaafyo lahayn uu u dhaqmo si degdeg ah. Chip garaafyo oo dhismaha ku jira ama taleefan, ama 4 GB xusuus ama ka yar, waligood ma helaan {{ui:Graphics card, high}}.

:::note
Browser-yadu way kala duwan yihiin. Isla kombiyuutarka wuxuu muujin karaa WebGPU browser-ka hal, iyo "WebGL 2 only" browser-ka kale. Linux-ka inta badan browser-yada weli ma leeyihiin WebGPU.
:::
