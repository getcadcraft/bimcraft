---
title: Mga silid at room separator
summary: Piliin ang isang silid para pangalanan at lagyan ng numero, at basahin ang lawak, perimeter at volume nito. Gumuhit ng room separator kung saan nagtatagpo ang dalawang silid na walang pader sa pagitan.
keywords: room, rooms, room separator, linya ng paghihiwalay, space, IfcSpace, pangalan, numero, lawak, perimeter, volume, open plan, hatiin ang silid, kusina at sala, hindi nakapaloob
from: d4c1d66b
---

## Ang gagawin mo

Pangalanan ang mga silid na binubuo ng mga pader, at hatiin ang isang bukas na silid sa dalawa nang walang pader.

## Nasaan ang mga tool

- Ribbon layout: {{ui:Architecture}} › **Silid at Lawak** › {{ui:Room}} at {{ui:Room Separator}}.
- Classic layout: ang Draw bar › menu na {{ui:Rooms}}.
- Anumang istilo ng menu: ang mga command ay pinangalanang Room at Room Separator; hahanapin sila ng command palette.

## Mga hakbang

1. Gumuhit ng mga pader. Ang bawat saradong loop ng pader ay silid na talaga: ginagawa ito ng BimCraft, binibigyan ng numero at ibinibigay ang lawak nito habang gumuguhit ka.
2. Piliin ang {{ui:Room}}. Ilipat ang pointer sa plano: sisindi ang silid sa ilalim ng pointer kasama ang lawak, perimeter at volume nito.
3. Para mabilis na pangalanan ang mga silid, i-type muna ang {{ui:Pangalan}} at {{ui:Numero}} sa row, saka i-click sa loob ng silid. Tataas ng isa ang numero para sa susunod na silid (101, 102; A-09, A-10).
4. O i-click lang ang isang silid: mapipili ito, at ang Properties ay may pangalan, numero, lawak, perimeter, volume at tag nito.
5. Para hatiin ang isang bukas na silid, piliin ang {{ui:Room Separator}} at i-click ang dalawang punto: pader hanggang pader, o pader hanggang sa ibang separator. Magpatuloy sa pag-click para sa isang kadena; ang Enter, Esc o double-click ang magtatapos dito.

## Ang ginagawa ng separator

- Naglilimita ito ng mga silid na parang pader na walang kapal. Eksaktong nagdaragdag ang lawak ng dalawang silid sa silid na dating iyon.
- Pinananatili ng silid na naglalaman ng gitna ng lumang silid ang pangalan at numero nito. Bago ang isa pa.
- Ang separator na nagtatapos sa bukas, hindi nakadikit sa anuman sa isang dulo, ay walang hinahati. Pahabain ito at magkakaroon ng epekto.
- Hindi pinapansin ang bahagi ng separator na nasa loob ng pader, kaya maaari kang mag-snap sa mga center line ng pader.
- Pumili ng separator at pindutin ang Delete para alisin ito: magiging isa ulit ang dalawang silid. Ibinabalik ito ng Undo.

## Kapag walang silid kung saan ka nag-click

Sinasabi ito ng status line: hindi nagsasara ang mga pader doon. Isara ang puwang, o gumuhit ng separator sa ibabaw nito. Walang tinatanggihan; wala lang pang saradong silid.

## Sa IFC

Ang silid ay IfcSpace na may numero nito (Name), pangalan (LongName) at Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Ang volume ay ang lawak pinarami ng taas hanggang sa level sa itaas.

Ang room separator ay IfcVirtualElement, ang entity na ginagamit ng IFC para sa hangganang hindi naitayo. May linya ito at walang body, kaya walang nakikitang pader ang ibang programa at walang binibilang para dito.

## Hindi pa nagagawa

- Kurbadang separator.
- Silid na sumusunod sa sloped ceiling: laging lawak pinarami ng taas ng level ang volume.
- Hindi isinusulat ang space boundary relation (IfcRelSpaceBoundary), alinman sa pader o separator.

Tingnan din ang [Mga tag ng silid at lawak](topic:room-and-area-tags), [Mga lawak at hangganan ng lawak](topic:areas-and-area-boundaries).
