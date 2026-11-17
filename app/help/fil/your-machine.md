---
title: Ano ang ginagamit ng iyong makina sa pag-render
summary: Ipinapakita ng Settings › Rendering ang graphics, processor core at memory na pinapayagan ng browser na ito para sa app, at ang level na nagtatakda kung saan magsisimula ang rendering.
keywords: iyong makina, graphics card, gpu, webgpu, webgl, processor, cpu, cores, threads, memory, ram, shared memory, isolation, tier, level, bilis, mabagal, bilis ng rendering, laptop
from: 360f2375
---

Buksan ang {{ui:Settings}} ({{key:Mod+,}}), manatili sa sarili ng tab ng app na ito, at mag-scroll sa {{ui:Rendering}}. Inililista ng {{ui:Your machine}} ang pinapayagan ng browser na ito para sa app na gamitin sa rendering. Walang bagay dito na umaalis sa iyong computer.

| Row | Ano ang ibig sabihin |
|---|---|
| {{ui:Graphics}} | Ang graphics card na iniuulat ng browser. Ang "WebGPU" ay nangangahulugang kaya nitong gawin ang rendering work; ang "WebGL 2 only" ay nangangahulugang walang WebGPU: ang live view at mga high-quality na larawan ay gumagamit ng graphics card sa pamamagitan ng WebGL 2 (mga larawan gamit ang mas lumang WebGL path tracer, kulang sa mga extra na nangangailangan ng WebGPU); ang software stand-in ay nangangahulugang sa processor tumatakbo ang lahat |
| {{ui:Processor}} | Ilang processor core ang iniuulat ng browser |
| {{ui:Memory}} | Tinatayang dami ng memory ng computer, kapag sinasabi ito ng browser. May ilang browser na hindi ito sinasabi |
| {{ui:Shared memory}} | Kung pinapayagan ang pahina na magbahagi ng memory sa pagitan ng mga worker nito. Kapag on, kaya ng bawat core na magtrabaho sa iisang kopya ng eksena; kapag off, kailangan ng bawat isa ng sariling kopya, kaya kasya ang malaking eksena sa mas kaunting core nang sabay-sabay |
| {{ui:Fast processor code}} | Kung tumatakbo ang browser sa mas mabilis na WebAssembly code. Kapag wala ito, mas mabagal na fallback ang ginagamit |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} o {{ui:Processor only}}, kasama ang dahilan sa ilalim nito |

## Ang level

Ang level ay kung saan magsisimula ang rendering, upang manatiling mabilis ang laptop na may built-in na graphics chip o walang graphics card. Ang built-in o phone na graphics chip, o 4 GB o mas mababa na memory, ay hindi kailanman nakakakuha ng {{ui:Graphics card, high}}.

:::note
Magkakaiba ang mga browser. Ang parehong computer ay maaaring magpakita ng WebGPU sa isang browser at "WebGL 2 only" sa iba. Sa Linux, karamihan ng browser ay wala pang WebGPU.
:::
