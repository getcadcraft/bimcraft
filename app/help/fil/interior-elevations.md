---
title: Interior elevations
summary: Gumawa ng isang sheet na nagpapakita ng apat na pader ng silid mula sa loob, kasama ang dimension at tag, at i-save ito bilang PDF.
keywords: interior elevation, silid, pader, cabinet, kitchen, elevation, sheet, PDF, dimension, tag, espasyo, A-501
from: 1e3a70a8
---

## Ano ang gagawin mo

Pumili ng silid at kumuha ng isang sheet na nagpapakita ng apat na pader nito gaya ng makikita mo kapag nakatayo ka sa loob. Ginawa ito para sa mga kitchen, banyo at anumang silid kung saan kailangan mong makita ang mga cabinet, pinto at bintana sa bawat pader.

## Gumawa ng sheet

1. Piliin ang silid. Sa plano na naka-on ang {{ui:Draw}}, i-click ang loob ng silid. Sa 3D view o sa model tree, piliin ang space (isang IfcSpace).
2. Sa **Properties**, i-click ang {{ui:Interior elevations…}}.
3. Bumukas ang dialog na may sheet.
4. I-click ang {{ui:I-download ang PDF}} para i-save ito. Ang pangalan ng file ay "<file> — Interior elevations — <room>.pdf" at ito ay vector PDF.
5. I-click ang {{ui:Isara}} kapag tapos ka na.

## Ano ang makikita sa sheet

Apat ang view sa sheet, dalawa-dalawa, sa iisang scale: ang pinakamalaking standard scale na kasya. Ito ay **Pader sa hilaga**, **Pader sa silangan**, **Pader sa timog** at **Pader sa kanluran**. Ang title block ay may sheet number na A-501, ang title na "Interior elevations — " kasama ang room number at pangalan, ang project at ang petsa.

Bawat view ay hinati sa gitna ng silid at tinitingnan ang pader sa gilid na iyon. Ang mga side wall, at anumang nakabukas sa mga ito gaya ng bintana, ay lumalabas bilang grey cut poché sa paligid ng view. Humihinto ang view lampas lang sa face ng pader, kaya walang makikitang nasa likod ng pader.

Ang bawat view ay may:

- ang lapad ng silid sa ilalim nito, mula sa inside face hanggang sa inside face;
- ang taas ng silid sa tabi nito, mula sahig hanggang sa level sa itaas;
- isang square tag sa bawat pinto at isang hexagon tag sa bawat bintana sa pader na iyon, kasama ang mark nito (D1, W1 at iba pa);
- isang circle tag na may item number sa bawat library item na nakalagay sa harap ng pader na iyon: mga cabinet, fixture at equipment.

:::note
Ginagawa ang mga view mula sa model sa bawat pagbukas mo ng dialog, kaya palagi silang tumutugma dito. Ilipat ang isang cabinet, tapos buksan muli ang dialog.
:::

## Sa sarili mong mga sheet

Ang bawat pader ng bawat silid ay view din na maaari mong ilagay sa sheet na gagawin mo: sa project browser, i-click ang {{ui:Bagong sheet}}, tapos sa ilalim ng **Interior elevations**, idagdag ang "101 Kitchen — Pader sa hilaga" at ang iba pa. May kasama itong parehong dimension at tag.

## Hindi pa nagagawa

Interior elevations sa nabuong drawing set (galing ang mga ito sa **Properties** ng silid o sa sarili mong mga sheet), mga silid na hindi halos parihaba (ang view ay mukhang parisukat sa bawat gilid ng box ng silid), drafting, note o sarili mong dimension dito, at pagpili kung aling mga pader ang ipapakita. Tingnan ang [Hindi pa nagagawa](topic:not-built-yet).
