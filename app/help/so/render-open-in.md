---
title: Muuqaalka ku fur barnaamij kale
summary: Kaydi muuqaalka fayl USD ama glTF barnaamij kasta oo akhrisa, ama ka fur Studio barnaamij ku jira kombiyuutarkan.
keywords: ku fur, usd, gltf, glb, dhoofin, barnaamijka rendarka, archviz, studio, usdview, dir, gudbin, xirmo, folder-ka unreal
from: 0a6559ee
---

Dooro **Ku fur …** oo ku jira liiska Injinka ee {{ui:Render}} si aad muuqaalka u gudbiso barnaamij kale. Waxba ma soo noqdo moodelka.

## Fayl loo furo barnaamij kasta

- **USD file** wuxuu muuqaalka kaydiyaa sidii `.usdc` (ama `.usdz` marka moodelku sawiro leeyahay): [isla fayl sida Save as USD](topic:usd), oo leh agabka, nalalka iyo kameradaha. Wuu ilaaliyaa instancing-ka iyo qiimaha saxda ah ee agabka. Inta badan rendarrada, injinada ciyaarta iyo muuqaal-akhristayaasha waxay akhriyaan USD.
- **glTF file (.glb)** wuxuu kaydiyaa fayl glTF 2.0 oo fudud, oo leh agabka, texture-yada iyo nalalka; eeg [Dir moodelka barnaamijka rendarka](topic:model-for-rendering) waxa uu ku jiro iyo waxa uu ka reebayo.

- **Unreal project folder (.zip)** wuxuu kaydiyaa folder-ka [Dir muuqaalka injinka ciyaarta](topic:render-unreal) qoro, mashruuc kasta oo kombiyuutar kasta.

Saddexdaas oo dhammaantood waxay shaqeeyaan browser-ka iyo Studio.

## Studio: ku fur barnaamij

Studio wuxuu liistaa barnaamijyada uu ka helo kombiyuutarkan ee furi kara muuqaalka: usdview haddii uu ku jiro search path-kaaga, iyo barnaamijka kombiyuutarka u gaarka ah nooca faylka. Dooro mid, dooro USD ama glTF meesha ay labaduba akhriyaan, kadibna guji {{ui:Render}}. Studio wuxuu xirmada ku qoraa folder cusub oo ku jira Documents (`CadCraft hand-off`; wax lama dhex-qorayo, dir kasta folder gaar ah ayuu helaa), wuxuuna barnaamijka ku bilaabaa, kadibna wuxuu sheegaa meesha faylasha ku yaallaan.

| Barnaamij | Akhriska ugu fiican |
|---|---|
| usdview | USD |
| Barnaamijka kombiyuutarka | Waxa kombiyuutarku u haysto nooca faylka |

Studio wuxuu bilaabaa kaliya barnaamijyada liiska go'an; ma socodsiiyo wax bogga magacooda ku weydiiyo. Weligiisna ma bilaabo barnaamij ku shaqeeya shatiga GNU GPL (eeg [Sawirka barnaamij kale ku sameey](topic:render-other-program#programs-cadcraft-never-runs)). Barnaamij kasta oo akhrin kara USD ama glTF wuxuu furaa faylka ka **Fayl loo furo barnaamij kasta** kor ku xusan.

:::note
Twinmotion, Enscape iyo barnaamijyada muuqaalka kale ma ku jiraan liiska. CadCraft ma hubin iyaga, sidaas darteed ma sheegi karo wax ku saabsan iyaga. Fayl glTF ama USD oo halkan ka yimid waa jidka lagu galo; eeg qoraallada ku saabsan [injinada rendarka ee plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
