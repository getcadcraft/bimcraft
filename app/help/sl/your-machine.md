---
title: S čim vaš računalnik upodablja
summary: Nastavitve › Upodabljanje prikažejo grafiko, jedra procesorja in pomnilnik, ki jih ta brskalnik dovoli aplikaciji, ter raven, ki določa, kje se upodabljanje začne.
keywords: vaš računalnik, grafična kartica, gpu, webgpu, webgl, procesor, cpu, jedra, niti, pomnilnik, ram, skupni pomnilnik, izolacija, raven, hitrost, počasno, hitrost upodabljanja, prenosnik
from: 360f2375
---

Odprite {{ui:Nastavitve}} ({{key:Mod+,}}), ostanite na zavihku te aplikacije in se pomaknite do {{ui:Upodabljanje}}. {{ui:Vaš računalnik}} našteje, kaj ta brskalnik dovoli aplikaciji za upodabljanje. Nič od tega ne zapusti vašega računalnika.

| Vrstica | Kaj pomeni |
|---|---|
| {{ui:Grafika}} | Grafična kartica, ki jo poroča brskalnik. „WebGPU“ pomeni, da lahko opravi delo upodabljanja; „WebGL 2 only“ pomeni, da WebGPU ni: živi pogled in visokokakovostne slike uporabljajo grafično kartico prek WebGL 2 (slike s starejšo potjo sledilnika (path tracer) WebGL, brez dodatkov, ki potrebujejo WebGPU); programski nadomestek pomeni, da vse teče na procesorju |
| {{ui:Procesor}} | Koliko jeder procesorja brskalnik poroča |
| {{ui:Pomnilnik}} | Približno, koliko pomnilnika ima računalnik, kadar to brskalnik pove. Nekateri brskalniki tega ne povejo |
| {{ui:Skupni pomnilnik}} | Ali sme stran deliti pomnilnik med svojimi delavci. Če je vklopljen, lahko vsako jedro dela na eni kopiji prizora; če je izklopljen, vsako potrebuje svojo kopijo, zato se velik prizor naenkrat prilega na manj jeder |
| {{ui:Hitra procesorska koda}} | Ali brskalnik zažene hitrejšo kodo WebAssembly. Brez nje se uporabi počasnejši nadomestek |
| {{ui:Nivo}} | {{ui:Grafična kartica, visoka}}, {{ui:Grafična kartica, osnovna}} ali {{ui:Samo procesor}}, z razlogom pod tem |

## Nivo

Nivo je mesto, kjer se upodabljanje začne, da prenosnik z vgrajenim grafičnim čipom ali brez grafične kartice ostane odziven. Vgrajen grafični čip ali grafični čip telefona, ali 4 GB pomnilnika ali manj, nikoli ne dobi {{ui:Grafična kartica, visoka}}.

:::note
Brskalniki se razlikujejo. Isti računalnik lahko v enem brskalniku pokaže WebGPU, v drugem pa „WebGL 2 only“. Na Linuxu večina brskalnikov še nima WebGPU.
:::
