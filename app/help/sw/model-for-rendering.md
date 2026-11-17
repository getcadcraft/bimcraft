---
title: Tuma modeli kwa programu ya kutengeneza picha
summary: Hifadhi kile mwonekano wa 3D unachoonyesha kama modeli ya glTF (.glb) pamoja na nyenzo, maumbo na taa zake, kwa programu za kutengeneza picha na taswira zinazosoma glTF.
keywords: glb, gltf, gl transmission format, hamisha, kutengeneza picha, render, taswira, wakati halisi, archviz, nyenzo, maumbo, taa, mali, mali maalum
from: e62d57dc
---

{{ui:For rendering}} kwenye upau wa zana huhifadhi kile mwonekano wa 3D unachoonyesha kama faili moja ya **.glb** (glTF 2.0, muundo huria kutoka Khronos Group). Programu za kutengeneza picha zinazosoma glTF hufungua pamoja na nyenzo na taa za modeli; Twinmotion inaorodhesha glTF na GLB miongoni mwa faili za jiometri inazoingiza na huhifadhi taa zake (nyaraka za Epic, "Importing geometry in Twinmotion"): tumia {{ui:For rendering}} kisha ingiza .glb hapo. Hakuna kinachopakiwa: faili inatengenezwa kwenye kompyuta hii.

## Ihifadhi

1. Fungua modeli ya IFC na uweke mwonekano wa 3D: ficha ghorofa, vipengele au modeli zilizounganishwa usivyotaka, na [paka nyenzo](topic:paint-materials) unazotaka kuona.
2. Bofya {{ui:For rendering}} (au andika `GLB`).
3. Faili inapakuliwa kama "<jina la modeli>.glb". Upau wa hali unasema pembetatu ngapi, nyenzo ngapi na taa ngapi inazo.

## Faili inachobeba

- **Jiometri** ya kila kipengele ambacho mwonekano wa 3D unaonyesha, kwa mita, na Y kwenda juu (shoka za glTF zenyewe). Kitu kimoja kwa kila ghorofa na nyenzo, kinachoitwa "Level 1 — Brick, red", ili uweze kuchagua nyenzo katika programu ya kutengeneza picha na kuibadilisha kwa yake.
- **Nyenzo:** kila rangi yenye mwonekano uliouchagua kwake katika [Render](topic:render) (matte, satin, glossy, metal, glass…), na kila nyenzo ya maktaba iliyopakwa yenye rangi yake, ukali wa uso na **umbile** (picha yake iko kwenye faili, imepimwa kwa ukubwa wake halisi: tofali ni ukubwa wa tofali). Kioo kinaonekana kupitia.
- **Taa:** kila kifaa cha taa kilichowashwa katika Render › Lamps, kama taa ya nukta au ya boriti yenye mwangaza wake (lumens zimegeuzwa kuwa candela), rangi yake na pembe ya mwanga.
- **Mahali eneo lilipo:** latitudo na longitudo ya eneo la mradi zimeandikwa kwenye faili kwa kumbukumbu. Programu za kutengeneza picha zina jua lao: andika mahali humo.

## Kinachoachwa

- Sehemu iliyokatwa ya sehemu ya mkato (vipengele vyote vinaingia) na vipengele vinavyoonyeshwa kwa uwazi (vinaachwa).
- Vitu vya kila kipengele kivyake (kitu kimoja kwa kila ghorofa na nyenzo badala yake), sifa za IFC, ramani za bump, mionekano iliyohifadhiwa na matembezi yaliyorekodiwa.
- Kingo na mandhari ya nyuma.

## Enscape na programu-jalizi nyingine za kutengeneza picha

Enscape huendesha ndani ya programu nyingine ya usanifu na haina faili ya kufungua mradi mzima. Njia mbili:

- Fungua **IFC** ya modeli (Faili › Hifadhi) katika programu ambayo Enscape inaendesha; nyingi zinasoma IFC. Rangi zinakuja; nyenzo za maktaba zinakuja kama rangi zake.
- Leta **sehemu ndogo** (samani, kifaa) kama mali maalum: itenge kwanza, kisha bofya {{ui:For Enscape (.gltf)}}. Maktaba ya mali maalum ya Enscape huorodhesha faili za .gltf, .obj na .fbx, si .glb, kwa hiyo kitufe hiki huhifadhi onyesho lile lile kama faili moja **.gltf** inayojitosheleza (data ya binary na picha ziko ndani ya faili; hakuna kingine cha kunakili nacho). Enscape inashauri mali ndogo (chini ya takriban pembetatu 20,000).

:::note
Katika CadCraft Studio faili hiyo hiyo ya glTF (na faili ya USD) pia inaweza kuhifadhiwa kutoka {{ui:Render}} › Engine › **glTF file** / **USD file**, au kufunguliwa moja kwa moja katika programu kwenye kompyuta hii: tazama [Fungua tukio katika programu nyingine](topic:render-open-in). Programu-jalizi au kiungo cha moja kwa moja cha Enscape au Twinmotion hakijajengwa. Miundo ya FBX na Datasmith haina vipimo vilivyochapishwa, kwa hiyo BimCraft haiiandiki; glTF ndiyo njia huria.
:::
