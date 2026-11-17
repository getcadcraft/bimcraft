---
title: Hvað tölvan þín notar við myndgerð
summary: Stillingar › Myndgerð sýnir grafíkina, örgjörvakjarna og minni sem þessi vafri leyfir forritinu að nota, og það stig sem ákvarðar hvar myndgerð hefst.
keywords: tölvan þín, skjákort, gpu, webgpu, webgl, örgjörvi, cpu, kjarnar, þræðir, minni, vinnsluminni, sameiginlegt minni, einangrun, þrep, stig, hraði, hægur, myndgerðarhraði, fartölva
from: 360f2375
---

Opnaðu {{ui:Stillingar}} ({{key:Mod+,}}), vertu áfram á eigin flipa þessa forrits og skrunaðu að {{ui:Myndgerð}}. {{ui:Þín tölva}} sýnir hvað þessi vafri leyfir forritinu að nota til myndgerðar. Ekkert í henni fer úr tölvunni þinni.

| Lína | Hvað það merkir |
|---|---|
| {{ui:Grafík}} | Skjákortið sem vafrinn gefur upp. „WebGPU“ merkir að það getur unnið myndgerðina; „WebGL 2 only“ merkir að WebGPU er ekki til: lifandi sýnin og myndir í háum gæðum nota skjákortið í gegnum WebGL 2 (myndir með eldri WebGL-geislarekjara, án aukahlutanna sem þurfa WebGPU); hugbúnaðarstaðgengill merkir að allt keyrir á örgjörvanum |
| {{ui:Örgjörvi}} | Hversu marga örgjörvakjarna vafrinn gefur upp |
| {{ui:Minni}} | Um það bil hversu mikið minni tölvan hefur, þegar vafrinn segir frá því. Sumir vafrar gera það ekki |
| {{ui:Sameiginlegt minni}} | Hvort síðan megi deila minni milli vinnuþráa sinna. Ef kveikt er á því getur hver kjarni unnið á einu afriti af senu; ef slökkt er á því þarf hver sitt eigið afrit, þannig að stór sena kemst fyrir á færri kjörnum í einu |
| {{ui:Hraður örgjörvakóði}} | Hvort vafrinn keyri hraðari WebAssembly-kóðann. Án hans er notuð hægari varaleið |
| {{ui:Hæð}} | {{ui:Skjákort, hátt}}, {{ui:Skjákort, grunn}} eða {{ui:Aðeins örgjörvi}}, með ástæðunni undir því |

## Stigið

Stigið ákvarðar hvar myndgerð hefst, svo að fartölva með innbyggðum grafíkkubbi eða án skjákorts í heild haldist viðbragðsfljót. Innbyggður grafíkkubbur eða símakubbur, eða 4 GB minni eða minna, fær aldrei {{ui:Skjákort, hátt}}.

:::note
Vafrar eru ólíkir. Sama tölva getur sýnt „WebGPU“ í einum vafra og „WebGL 2 only“ í öðrum. Á Linux hafa flestir vafrar ekki WebGPU enn.
:::
