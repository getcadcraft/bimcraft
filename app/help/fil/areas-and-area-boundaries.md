---
title: Mga lawak at hangganan ng lawak
summary: Sukatin ang gross building area o rentable area sa loob ng mga linya ng hangganan na iginuhit mo o kinuha mula sa mga pader, at ilista ang mga lawak sa isang schedule.
keywords: area, lawak, area boundary, hangganan ng lawak, area scheme, gross building area, gross floor area, GFA, rentable, area plan, schedule of areas, pumili ng pader, hindi nakapaloob
from: c79f96d2
---

## Ano ang gagawin mo

Iguhit ang mga hangganan ng isang area scheme, maglagay ng mga lawak sa loob ng mga ito, at basahin ang mga kabuuan.

## Nasaan ang mga tool

- Ribbon layout: {{ui:Architecture}} › **Room & Area** › {{ui:Area}} at {{ui:Area Boundary}}.
- Classic layout: ang Draw bar › menu na {{ui:Rooms}}.

## Mga hakbang

1. Piliin ang {{ui:Area Boundary}}. Sa row, piliin ang {{ui:Scheme}}: Gross building o Rentable. May sariling hangganan ang bawat scheme.
2. Piliin kung paano gagawin ang mga linya sa {{ui:Make by}}:
   - **Draw**: i-click ang punto pagkatapos ng punto.
   - **Pumili ng mga pader: center line**: i-click ang isang pader, at ang center line nito ang magiging hangganan.
   - **Pumili ng mga pader: ang napiling face**: i-click ang pader sa panig na gusto mo; ang face na iyon ang magiging hangganan. Para sa gross building area, i-click ang labas ng mga panlabas na pader.
3. Piliin ang {{ui:Area}}. Piliin ang parehong scheme, i-type ang pangalan, numero o uri kung gusto mo, at i-click sa loob ng mga hangganan.
4. Agad na sinusukat ang lawak. Piliin ito para baguhin ang pangalan, numero o uri nito sa Properties.

## Ano ang sumusunod sa ano

- Ang hangganang ginawa sa pamamagitan ng pagpili ng pader ay sumusunod sa pader na iyon: ilipat ang pader at muling susukatin ang lawak sa parehong hakbang.
- Nananatili kung saan mo ito iginuhit ang hangganang iginuhit mo.
- Nagtatagpo rin ang mga face ng mga pader na nagkakatagpo sa sulok, kaya apat na napiling pader ang nagsasara ng isang lawak nang walang puwang.
- Lumalabas sa plan ang mga hangganan ng lawak habang nasa kamay mo ang isang room o area tool, para hindi magulo ang plan sa iba pang oras.

## Kung hindi nagsasara ang mga hangganan

Nailalagay pa rin ang lawak. Nakasulat dito ang **Hindi nakapaloob** at walang sinusukat hanggang magsara ang mga hangganan sa paligid nito. Payo lang ito: walang tinatanggihan.

## Ang schedule

Kaliwang panel › {{ui:Schedules}} › **Mga lawak**: scheme, numero, pangalan, uri, level, area at perimeter, kasama ang kabuuan. Ang click sa isang row ay pumipili ng lawak. Ang {{ui:Download CSV}} ay nagbibigay ng parehong talaan.

## Sa IFC

Ang lawak ay isang IfcSpace na walang body: PredefinedType GFA para sa gross building scheme, USERDEFINED na may ObjectType Rentable para sa rentable. May GrossFloorArea at GrossPerimeter ito at walang net area, kaya hindi ito napagkakamalang silid. Ang hangganan ay isang IfcVirtualElement.

## Hindi pa nagagawa

- Mga sariling scheme (Gross building at Rentable lang).
- Mga fill ng kulay ayon sa uri ng lawak.
- Mga patakarang naglalagay ng hangganan para sa iyo, gaya ng "hanggang sa linya ng salamin".

Tingnan din ang [Mga silid at room separator](topic:rooms-and-separators), [Mga tag ng silid at lawak](topic:room-and-area-tags).
