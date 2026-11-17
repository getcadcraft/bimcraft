---
title: Chora picha kwa programu nyingine
summary: Kifuatilia njia chetu kinachora picha ya Tengeneza picha; programu nyingine inaweza kuchora tu kupitia programu-jalizi ya injini ya kutoa picha katika CadCraft Studio. Kinachobebwa, na kwa nini baadhi ya programu hazitolewi kamwe.
keywords: tengeneza picha, injini, programu ya nje, injini ya programu-jalizi, studio, usuli, foleni, usd, gltf, inachorwa na, blender, gpl
from: 652b413c
---

Picha katika {{ui:Render}} inachorwa na **injini zetu wenyewe**: Haraka na Kifuatilia njia, kwenye kivinjari na katika CadCraft Studio. Programu nyingine inaweza kuchora picha pekee pale **programu-jalizi ya injini ya kutoa picha** inapoileta: tazama [Ongeza injini ya kutoa picha kwa programu-jalizi](topic:render-engine-addons). Ili kupeleka tukio kwenye programu nyingine na kuendelea kufanya kazi huko, tumia [Fungua tukio kwenye programu nyingine](topic:render-open-in) au [Tuma tukio kwenye injini ya michezo](topic:render-unreal).

## Chora picha kwa injini ya programu-jalizi

1. Washa programu-jalizi kwenye Mipangilio › Programu-jalizi. Injini yake inaonekana kwenye orodha ya Injini ya {{ui:Render}}.
2. Ichague. Mipangilio yake yenyewe inaonekana chini ya orodha ya Injini.
3. Bofya {{ui:Render}}. Katika Studio, mara ya kwanza programu-jalizi inapoendesha programu, Studio inakuuliza kwenye kidirisha chake. Maendeleo yanaonyeshwa wakati inachora; {{ui:Stop}} inaimaliza. Picha inaonekana ikiwa na alama ya injini iliyoichora.

Injini iliyoandikwa kwa JavaScript pia inaendeshwa kwenye kivinjari. Injini inayoendesha programu kwenye kompyuta hii inaendeshwa Studio pekee; kwenye kivinjari inaonekana kama faili la kuhifadhi.

## Kinachobebwa

Injini inapokea **kifurushi**: modeli kama faili la USD (na faili la glTF inapoliomba), na faili la mipangilio lenye thamani kamili za nyenzo, jua na anga, kila taa iliyowashwa pamoja na nguvu na wasifu wake wa mwanga, kamera na mfiduo. Kila programu huweka mwanga, toni na sampuli kwa njia yake, kwa hiyo picha zinafanana kwa kamera, jua, taa na mfiduo, lakini si pikseli kwa pikseli.

## Programu ambazo CadCraft haziendeshi kamwe

CadCraft haianzishi kamwe programu chini ya leseni ya GNU GPL, wala haiorodheshi kamwe kama injini au lengo la Fungua kwenye. Blender ni mojawapo, kwa hiyo haimo kwenye orodha ya Injini. Faili la USD au glTF lililohifadhiwa kutoka {{ui:Render}} bado linafunguka humo kama katika programu yoyote inayosoma faili hizo.

:::note
Kamera za panorama na stereo, na picha ya anga (rangi za anga zinatumika badala yake), hazibebwi kwenda programu nyingine. Chochote kinachofanywa kwenye programu nyingine hakirudi kwenye modeli.
:::
