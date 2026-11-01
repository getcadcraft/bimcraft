---
title: Kuanza na BimCraft
summary: BimCraft inafanya nini leo, jinsi ya kufungua modeli yako ya kwanza, kuitazama kwa 3D, kubadilisha thamani moja na kuhifadhi nakala.
keywords: anza, mara ya kwanza, fungua, ifc, rvt, dwg, mwongozo wa haraka, utangulizi, kitazamaji, bim
from: fc2dea19
---

BimCraft ni programu ya modeli za majengo ya familia ya CadCraft. Katika toleo hili **hufungua, husoma na kukagua** faili za majengo, na **huhariri data ya modeli za IFC**. Bado haichori wala kutengeneza vipengele vipya. Ifikirie kama kitazamaji na kikagua modeli kinachokuwezesha pia kusahihisha majina, lebo na thamani za sifa kwenye faili la IFC.

Inachofungua:

| Faili | Utakachopata |
|---|---|
| IFC (`.ifc`) | Modeli kamili katika 3D: kuzungusha, ghorofa, sifa za vipengele, na kuhariri majina na thamani za sifa |
| Faili za mradi na familia (`.rvt`, `.rfa`, `.rte`, `.rft`) | Kadi ya faili: toleo lililohifadhiwa, taarifa za mradi, picha ya hakikisho na faili zilizounganishwa. Hakuna 3D. |
| DWG na DXF | Mchoro katika 2D: nafasi ya modeli na kila karatasi, tabaka, michoro iliyounganishwa, mwonekano wa kuchapisha, na jedwali la vifaa kwa michoro ya huduma za chakula yenye lebo |
| Folda ya mradi | Ripoti ya kila modeli kwenye folda: nakala rudufu, viunganishi, nakala zilizoharibika, na pendekezo la faili la kuanzia nalo |

Kila kitu hufanyika kwenye kivinjari chako, kwenye kompyuta yako. **Hakuna kinachopakiwa.** Angalia [Faili BimCraft hufungua na kuhifadhi](topic:files) kwa maelezo kamili.

## Fungua BimCraft

1. Fungua BimCraft kwenye kivinjari cha kisasa. Chrome, Edge, Firefox na Safari vyote vinafanya kazi; [Vivinjari, vifaa na kumbukumbu](topic:platforms) inaorodhesha tofauti.
2. Subiri skrini tupu inayosema "Open a building model."

:::note
BimCraft huendeshwa kwenye kivinjari, na kwenye kompyuta ya mezani ndani ya CadCraft Studio, pamoja na programu nyingine. Kuhifadhi kwenye wingu bado hakupatikani: unafungua faili kutoka kwenye kompyuta yako na kurudisha nakala zake huko.
:::

## Fungua modeli yako ya kwanza

Njia ya haraka zaidi ya kuona BimCraft inachofanya ni faili la IFC.

1. Bofya {{ui:Chagua faili}} katikati ya skrini.
2. Chagua faili la `.ifc` katika {{pick:mac=Finder|windows=File Explorer|linux=kidhibiti faili chako}} kisha uthibitishe.
3. Subiri huku mstari wa hali chini ya skrini ukisema "Starting the IFC engine…", kisha "Building geometry".

Unapaswa kuona modeli katika 3D katikati, paneli ya {{ui:Faili}} na orodha ya {{ui:Ghorofa}} upande wa kushoto, na paneli tupu ya {{ui:Sifa}} upande wa kulia. Mstari wa hali huishia kwa "Opened" na idadi ya vipengele.

:::tip
Unaweza pia kuburuta faili kutoka {{pick:mac=Finder|windows=File Explorer|linux=kidhibiti faili chako}} moja kwa moja hadi kwenye ukurasa. Skrini inaonyesha "Drop to open" unapoburuta.
:::

:::offline
Injini ya IFC hupakia kutoka tovuti mara ya kwanza unapofungua modeli ya IFC, isipokuwa BimCraft ilihifadhiwa kwa matumizi ya nje ya mtandao. Michoro ya DWG na DXF, faili za mradi na folda hazihitaji kitu cha ziada: visomaji vyake ni sehemu ya programu. Ikiwa kitufe cha upau wa programu kinasema {{ui:Tayari kwa matumizi ya nje ya mtandao}}, kila kitu hufunguka nje ya mtandao. Kisipoandika hivyo, modeli za IFC hazitafunguka hadi uunganishe tena, isipokuwa moja tayari imefunguliwa kwenye kichupo hiki. Angalia [Mtandaoni na nje ya mtandao](topic:online-offline).
:::

:::online
Unaenda mahali pasipo muunganisho? Bofya {{ui:Hifadhi kwa matumizi ya nje ya mtandao}} kwenye upau wa programu na usubiri {{ui:Tayari kwa matumizi ya nje ya mtandao}}. Nakala iliyohifadhiwa (takriban MB 11) inajumuisha injini ya IFC. Angalia [Kufanya kazi nje ya mtandao](common:offline).
:::

## Tazama kote

:::mouse
1. Buruta kwa kitufe cha kushoto cha kipanya ili kuzunguka modeli.
2. Sogeza gurudumu ili kuza.
3. Buruta kwa kitufe cha kulia cha kipanya ili kusogeza. Kwenye trackpad ya Mac, shikilia {{key:Shift}} kisha uburute badala yake.
4. Bonyeza {{key:F}} au bofya {{ui:Inafaa}} ili kuona modeli nzima tena.
:::

:::touch
1. Buruta kwa kidole kimoja ili kuzunguka.
2. Bana kwa vidole viwili ili kuza, na sogeza vidole viwili pamoja ili kusogeza.
3. Gusa {{ui:Inafaa}} ili kuona modeli nzima tena.
:::

## Fanya jambo moja halisi: rekebisha lebo

1. Bofya ukuta, mlango au kipengele chochote kwenye modeli. Kinageuka buluu, na sifa zake zinaonekana upande wa kulia.
2. Kwenye paneli ya {{ui:Sifa}}, bofya thamani iliyo karibu na **Lebo**.
3. Andika lebo mpya kisha ubonyeze {{key:Enter}}.
4. Angalia sehemu ya {{ui:Mabadiliko}} iliyofunguka upande wa kushoto: mabadiliko yako yameorodheshwa pamoja na thamani ya zamani na mpya.

## Hifadhi nakala

1. Bofya {{ui:Hifadhi kama IFC}} kwenye sehemu ya {{ui:Mabadiliko}}, au bonyeza {{key:Mod+S}}.
2. Tafuta faili jipya kwenye folda yako ya upakuaji. Limepewa jina la asili pamoja na " (edited)", kwa mfano `Clinic (edited).ifc`.

Faili lako la asili halibadilishwi kamwe. [Badilisha sifa za IFC na uhifadhi nakala iliyohaririwa](topic:edit-ifc-properties) inaeleza kuhariri kwa undani.

## Unakoweza kwenda baadaye

- [Skrini ya BimCraft](topic:workspace): kila paneli kwa jina lake.
- [Kutoka programu nyingine za BIM na za michoro](topic:coming-from): kinachohisi tofauti ukiwa umezoea Revit.
- [Fungua folda nzima ya mradi](topic:open-project-folder): elekeza BimCraft kwenye folda ya mradi na uiache ipange faili.
- [Tazama mchoro wa DWG au DXF](topic:view-dwg): karatasi, tabaka na mwonekano wa kuchapisha.
