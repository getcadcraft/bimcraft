---
title: Millega sinu masin renderdab
summary: Sätted › Renderdamine näitab graafikat, protsessori tuumi ja mälu, mida see brauser rakendusele lubab, ning taset, mis määrab, kust renderdamine algab.
keywords: sinu masin, graafikakaart, gpu, webgpu, webgl, protsessor, cpu, tuumad, lõimed, mälu, ram, jagatud mälu, isolatsioon, aste, tase, kiirus, aeglane, renderdamise kiirus, sülearvuti
from: 360f2375
---

Ava {{ui:Sätted}} ({{key:Mod+,}}), jää selle rakenduse enda vahekaardile ja keri {{ui:Renderdamine}}ni. {{ui:Sinu masin}} loetleb, mida see brauser rakendusele renderdamiseks lubab. Selles pole midagi, mis lahkuks sinu arvutist.

| Rida | Mida see tähendab |
|---|---|
| {{ui:Graafika}} | Graafikakaart, mida brauser näitab. "WebGPU" tähendab, et see saab renderdamistööd teha; "WebGL 2 only" tähendab, et WebGPU-d pole: reaalajas vaade ja kõrgekvaliteedilised pildid kasutavad graafikakaarti WebGL 2 kaudu (pildid vanema WebGL-i teekonnajälgijaga, ilma WebGPU-d vajavate lisadeta); tarkvaraline asendaja tähendab, et kõik töötab protsessoril |
| {{ui:Protsessor}} | Mitu protsessori tuuma brauser näitab |
| {{ui:Mälu}} | Umbes, kui palju mälu arvutil on, kui brauser seda ütleb. Mõni brauser ei ütle |
| {{ui:Jagatud mälu}} | Kas leht võib oma töötajate vahel mälu jagada. Kui see on sees, saab iga tuum töötada ühe stseeni koopiaga; kui väljas, vajab iga tuum oma koopiat, nii et suur stseen mahub vähematele tuumadele korraga |
| {{ui:Kiire protsessori kood}} | Kas brauser käivitab kiirema WebAssembly koodi. Ilma selleta kasutatakse aeglasemat varukoodi |
| {{ui:Tasand}} | {{ui:Graafikakaart, kõrge}}, {{ui:Graafikakaart, põhiline}} või {{ui:Ainult protsessor}}, põhjusega selle all |

## Tasand

Tasand on koht, kust renderdamine algab, et sülearvuti sisseehitatud graafikakiibiga või ilma graafikakaardita arvuti jääks reageerivaks. Sisseehitatud või telefoni graafikakiip või 4 GB või vähem mälu ei saa kunagi {{ui:Graafikakaart, kõrge}} taset.

:::note
Brauserid erinevad. Sama arvuti võib ühes brauseris näidata WebGPU-d ja teises "WebGL 2 only". Linuxis pole enamikul brauseritel veel WebGPU-d.
:::
