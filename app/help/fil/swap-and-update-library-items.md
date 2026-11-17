---
title: Palitan ang nailagay na item, at i-update ang mga item mula sa library
summary: Palitan ang isang nailagay na library item ng iba habang pinananatili ang puwesto at item number nito, at tingnan sa Library kung may mas bagong bersyon ang lahat ng nasa model.
keywords: palitan, swap, replace, substitute, update, bagong bersyon, tingnan ang mga update, library, binawi, pagbabago ng license, item number
from: 8bdfe01d
---

## Ano ang gagawin mo

Magbago ng isip tungkol sa isang item nang hindi ito inililipat muli, at panatilihing kasalukuyan ang mga library item sa model.

## Palitan ang isang item

1. I-click ang isang nailagay na library item sa model.
2. Sa {{ui:Properties}}, i-click ang {{ui:Palitan ang item…}} sa **Library item** box. Bubukas ang tab na {{ui:Library}}.
3. Hanapin ang bagong item at i-click ang card nito.
4. I-click ang {{ui:Palitan … ng ito}}.

Nananatili sa puwesto nito ang elemento, pati pag-ikot, palapag, item number, dami at mga tala. Nagbabago ang uri, hugis at item data nito para sa bagong item. Ang mga item na nailagay sa parehong paraan ay nagbabahagi ng iisang uri, gaya ng kapag inilagay mo sila.

Ang item na may mga variant (tingnan ang [Maglagay at magpalit ng library item na may variant](topic:library-variants)) ay nagpapakita ng iba pa nitong variant sa itaas ng tab na {{ui:Library}} kapag pinalitan mo ito: isang click lang bawat isa.

Kapag ibang uri ng bagay ang bagong item, halimbawa lababo sa halip na mesa, nagbabago ang IFC class ng elemento para tumugma (dito mula furnishing element patungong sanitary terminal), para tama itong maiiskedyul ng ibang software. Nananatili itong parehong elemento, na may parehong GlobalId, kaya gumagana pa rin ang mga link dito. Ibinabalik ng {{key:Mod+Z}} ang lumang class kasama ng lumang item.

## Tingnan ang mga update

1. I-click ang {{ui:Mga update}} sa toolbar (o ang {{ui:Tingnan ang mga update}} sa box ng library item).
2. Basahin ang listahan: bawat Library item sa model kasama ang bersyon nito sa model, ang pinakabagong bersyon, at isang status: **Napapanahon**, **Mas bagong bersyon**, **Binawi** o **Hindi nakita**. Sinasabi rin nito kung ano ang nagbago (geometry, data, license o ayos).
3. I-click ang {{ui:I-update}} sa isang hilera, o ang {{ui:I-update lahat}}.

## Ano ang dapat mong makita

- "Na-update ang *n* na placement. Nananatili ang mga puwesto, item number, dami at tala."
- Mga linyang "Na-update: *item*" sa change list. Binabawi ng {{key:Mod+Z}} ang bawat isa.

## Mahalagang malaman

- Mga item mula sa Library lang ang maaaring tingnan. Walang library id ang mga item mula sa file.
- Kapag nagbago ang license, nananatili sa license na dala nito ang kopyang nailagay mo na hanggang i-update mo ito.
- Hindi iniaalok para sa bagong paglalagay ang **Binawi** na item. Ang binawi dahil sa copyright ay hindi na mada-download; palitan ito gamit ang {{ui:Palitan ang item…}}.
- Nananatiling variant na iyon ang nailagay na variant kung mayroon pa nito ang mas bagong bersyon ng item; kung wala, kukunin nito ang default variant ng item.
- Ang pagtingin ay nagpapadala lamang ng mga item id at bersyon, hindi kailanman ang iyong model.
