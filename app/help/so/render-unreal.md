---
title: Dir muuqaalka injinka ciyaarta
summary: Studio wuxuu muuqaalka ku qori karaa mashruuc Unreal Engine wuxuuna ku ilaaliyaa isku-waafaqsan dir kasta; tafatirkaaga wuxuu ku jiraa layer aan CadCraft weligeed ku qorin. Plug-inka furaya weli lama sii deyn.
keywords: unreal, unreal engine, injinka ciyaarta, xidhiidh, dir, usd stage, mashruuc, toos ah, cine camera, movie render queue
from: 154d55ef
---

CadCraft Studio-da liiska Injinka wuxuu hayn karaa **xidhiidh** mashruuca Unreal Engine. Hal jihood oo keliya: CadCraft-ka ilaa Unreal.

## Dir muuqaalka

1. Dooro galka Unreal ee liiska Injinka. Markii ugu horreysay, Studio wuxuu kaa weydiinayaa inaad dooratid folder-ka mashruucaaga (kan leh faylka `.uproject`); wuu xasuustaa.
2. Guji {{ui:Send}}. Studio wuxuu qoraa `CadCraft/<file name>/` mashruuca gudihiisa: muuqaalka sidii fayl USD, fayl dejinta, profile-yada iftiinka, iyo laba fayl layer oo yar.
3. Beddel moodelka, kaydi oo dir mar kale. Waxa kaliya ee la beddelo waa muuqaalka iyo fayl dejinta.

## Tafatirkaaga way ammaan tahay

Stage-ka uu Unreal furo waa root layer yar oo la sameeyay hal mar, iyo laba layer oo hoostiisa ku jira: **kaaga** korka ku jira (`<name>.user.usda`, madhan markii hore, CadCraft weligeed ma dib u qorto) iyo muuqaalka CadCraft ee hoose. Tafatirka aad ku kaydiso layer-kaaga wuu sii joogaa markii muuqaalka mar kale la diro. Nalalka iyo actors-ka kale ee aad ku dhejiso heerka Unreal waa ka baxsan stage-ka, sidaas darteed iyaguna lama taaban.

## Studio la'aantood

Browser-ka, ama kombiyuutar aan Studio uu Unreal ka helin, dooro **Unreal project folder (.zip)** liiska Injinka oo guji {{ui:Render}}. Wuxuu kaydiyaa isla folder-ka sidii zip: fur mashruucaaga folder-ka `CadCraft` gudihiisa. Ku hay **Ku dar faylasha stage-ka** shidan markii ugu horreysay; ka demi kaydinta soo socota, si zip-ku kaliya muuqaalka iyo fayl dejinta ugu jiraan, layer-kaagana aan waligiis la beddelin.

:::note
Plug-inka Unreal ee furaya stage-ka, codsada iftiinka, nalalka, kameradaha iyo exposure-ka, raacaya dir kasta, iyo kamarad kasta oo rendarka ah, **weli lama sii deynin** oo weli lama socodsiin Unreal. Ilaa markaas, Send wuxuu faylasha geliyaa mashruuca, qalabka USD ee Unreal ayaa furi kara. Windows ayaa ah nidaamka ugu horreeya; macOS ayaa raaca.
:::
