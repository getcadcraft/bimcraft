---
title: Sakafu za umbo lolote, matundu na rampu
summary: Chora sakafu au bamba kwa mpaka wake (balkoni, kiegemeo, jukwaa la kutua), kata matundu ndani yake, na chora rampu pamoja na majukwaa yake ya kutua.
keywords: sakafu, bamba, mpaka, balkoni, kiegemeo, jukwaa la kutua, sitaha, tundu la sakafu, shimo, shimoni, utupu, rampu, mteremko, rampu inayoweza kufikiwa, rampu ya kiti cha magurudumu, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Utakachofanya

Tengeneza sakafu zisizofuata vyumba, kama balkoni nje ya kuta, na chora rampu kati ya viwango.

## Chora sakafu kwa mpaka wake

1. Washa {{ui:Draw}}, chagua kiwango, kisha {{ui:Build}} › {{ui:Floor by outline}}.
2. Kwenye safu chini ya zana, chagua aina (bamba ya zege au sakafu ya mbao), matumizi yake (sakafu au jukwaa la kutua), unene wake na mahali juu yake ilipo juu ya kiwango (0 = sawa na sakafu ya kiwango; thamani hasi inaiweka chini zaidi).
3. Bofya pembe. Zana inanasa kwenye kuta, mistari ya gridi na makutano yake; shikilia {{key:Shift}} ili kuweka ukingo wa mraba. Urefu wa kila ukingo na eneo vinaonekana unapoendelea. {{key:Backspace}} inarudisha pembe ya mwisho.
4. Bofya tena pembe ya kwanza, bofya mara mbili, au bonyeza {{key:Enter}} ili kumaliza.

## Kata tundu

Bofya sakafu (kwenye mwonekano wa 3D, au mpaka wake kwenye mpango), kisha kwenye {{ui:Properties}} bofya {{ui:Add an opening}} na ubofye pembe za tundu ndani ya sakafu, ukimaliza kama hapo juu. {{ui:Properties}} ya sakafu zinaorodhesha matundu yake, kila moja na {{ui:Delete}}, na eneo lake bila hayo.

## Chora rampu

1. Chagua {{ui:Build}} › {{ui:Ramp}}. Weka upana wake, na kama inaenda **hadi kiwango kilicho juu** au **juu kwa kupanda** unachoandika.
2. Chagua jinsi inavyowekwa: **kwa mteremko** (1:12 kuanzia; rampu ina urefu unaohitajika na kupanda) au **kwa urefu** (bofyo lako la pili huweka urefu, na mteremko unafuata).
3. Bofya mguu wa rampu (katikati ya ukingo wake wa chini), kisha bofya njia ya kupanda. Onyesho la awali linaonyesha urefu wake, ngazi zake na mteremko wake.

Kupanda kwa zaidi ya inches 30 (760 mm) kunagawanywa kuwa ngazi zenye jukwaa la kutua la feet 5 (1525 mm) kati yake. Hizi ni thamani za kawaida za kupanga, si kanuni yako: angalia kanuni za mahali unapojenga. Rampu yenye mteremko mkali zaidi ya 1:12 inaalamishwa kwenye {{ui:Properties}} yake.

## Utakachoona

- Kila sakafu, tundu na rampu ni hatua moja: {{key:Mod+Z}} inairudisha.
- Kwenye mpango, mpaka wa sakafu iliyochorwa (tundu linachorwa likiwa limevukwa), na mpaka, ngazi, majukwaa ya kutua na mshale wa juu wenye mteremko wa rampu.
- Sifa za sakafu iliyochorwa (aina, matumizi, unene, juu, eneo, matundu) na za rampu (upana, juu, kupanda, mteremko au urefu); {{key:Delete}} inaondoa yoyote kati yake.
- Rampu inayoelekea kiwango kilicho juu hufuata kiwango hicho kinapobadilika urefu wake.
- Kwenye faili ya IFC: sakafu iliyochorwa ni bamba (IfcSlab, sakafu au jukwaa la kutua) yenye matundu yake yamekatwa (IfcOpeningElement); rampu ni IfcRamp inayotengenezwa kwa ngazi zenye mteremko (IfcRampFlight) na bamba za majukwaa ya kutua, ikiwa na mteremko wake na upana wake.

:::note
Sakafu zilizochorwa kwa njia hii hubaki pale ulipozichora. Sakafu zilizotengenezwa kwa {{ui:Floor}} hufuata vyumba kuta zinapohamishwa: tazama [Vyumba, sakafu, dari na paa](topic:floors-and-roofs).
:::
