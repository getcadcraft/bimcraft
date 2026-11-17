---
title: Fungua tukio kwenye programu nyingine
summary: Hifadhi tukio kama faili la USD au glTF kwa programu yoyote inayovisoma, au lifungue kutoka Studio kwenye programu iliyo kwenye kompyuta hii.
keywords: fungua kwenye, usd, gltf, glb, hamisha, programu ya kutoa picha, archviz, studio, usdview, tuma, kukabidhi, kifurushi, folda ya unreal
from: 0a6559ee
---

Chagua kipengele cha **Fungua kwenye** kwenye orodha ya Injini ya {{ui:Render}} ili kupeleka tukio kwenye programu nyingine. Hakuna kinachorudi kwenye modeli.

## Faili kwa programu yoyote

- **Faili la USD** linahifadhi tukio kama `.usdc` (au `.usdz` modeli inapobeba picha): [faili lilelile kama lile la Hifadhi kama USD](topic:usd), lenye nyenzo, taa na kamera. Linahifadhi urudiaji wa vitu (instancing) na thamani kamili za nyenzo. Vitoa picha vingi, injini za michezo na vionyeshi husoma USD.
- **Faili la glTF (.glb)** linahifadhi faili jepesi la glTF 2.0 lenye nyenzo, tekstua na taa; tazama [Tuma modeli kwa programu ya kutoa picha](topic:model-for-rendering) kuona kinachobebwa na kinachoachwa.
- **Folda ya mradi wa Unreal (.zip)** inahifadhi folda ambayo [Tuma tukio kwenye injini ya michezo](topic:render-unreal) huandika, kwa mradi kwenye kompyuta yoyote.

Zote tatu zinafanya kazi kwenye kivinjari na katika Studio.

## Katika Studio: fungua kwenye programu

Studio inaorodhesha programu inazopata kwenye kompyuta hii zinazoweza kufungua tukio: usdview ikiwa iko kwenye njia yako ya utafutaji, na programu ya kompyuta yenyewe kwa aina hiyo ya faili. Chagua moja, chagua USD au glTF pale inaposoma zote mbili, kisha bofya {{ui:Render}}. Studio inaandika kifurushi kwenye folda mpya chini ya Documents (`CadCraft hand-off`; hakuna kinachofutwa, kila tuma linapata folda yake), kisha inaanzisha programu juu yake, na inaonyesha faili ziko wapi.

| Programu | Inasoma vizuri zaidi |
|---|---|
| usdview | USD |
| Programu ya kompyuta yenyewe | Chochote kompyuta ilicho nacho kwa aina ya faili |

Studio huanzisha programu kutoka orodha hii iliyowekwa pekee; haiendeshi chochote ambacho ukurasa unakiomba kwa jina, na haianzishi kamwe programu chini ya leseni ya GNU GPL (tazama [Chora picha kwa programu nyingine](topic:render-other-program#programs-cadcraft-never-runs)). Programu yoyote inayosoma USD au glTF inafungua faili kutoka sehemu ya **Faili kwa programu yoyote** hapo juu.

:::note
Twinmotion, Enscape na programu nyingine za taswira hazimo kwenye orodha: CadCraft haijakaguliwa nazo na haitoi madai kuzihusu. Faili la glTF au USD kutoka hapa ndiyo njia ya kuingia; tazama vidokezo kuhusu [vitoa picha vya programu-jalizi](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
