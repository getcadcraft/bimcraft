---
title: Ilipat, kopyahin, i-align at ipamahagi ang mga building element
summary: Ilipat ang mga pader, sahig, column at nailagay na library item sa pamamagitan ng base point at pangalawang punto o tinipang distansya, kopyahin habang gumagawa, at i-line up o pantayin ang espasyo nila, sa plano o mula sa pagpili sa 3D.
keywords: move, copy, align, distribute, spacing, offset, base point, displacement, pader, column, sahig, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Ano ang gagawin mo

Ilipat ang pader, column, sahig o nailagay na library item sa bagong lugar, gumawa ng kopya nito, o i-line up ang ilan sa mga ito, nang hindi ito iginuguhit muli.

## Mga pangalan at key

Ang mga command ay tinatawag na {{ui:Ilipat}}, {{ui:Align}} at {{ui:Distribute}}, at maaari mong i-type ang `MOVE`, `ALIGN` at `DISTRIBUTE` sa command line, gaya sa CadCraft drafting app. Isang pagkakaiba: sa BimCraft, ang {{key:M}} ay Measure, kaya may sariling key ang Move, ang {{key:Shift+M}}. Nasa {{ui:Build}} menu ang mga tool.

## Ilipat

1. Pumili kung ano ang ililipat, sa plano o sa 3D view. Maaaring kasama sa iisang pagpili ang mga pader, sahig, column at nailagay na library item.
2. Pindutin ang {{key:Shift+M}} o piliin ang {{ui:Ilipat}}.
3. I-click ang base point, pagkatapos ang pangalawang punto. O, pagkatapos ng base point, i-type ang distansya at pindutin ang {{key:Enter}}: gagalaw ito sa direksyong tinuturo ng pointer mula sa base point. Maaari mo ring i-type ang `dx,dy` (o `@dx,dy`), o `length<angle`.
4. Pindutin ang {{key:C}} para i-on ang {{ui:Kopyahin}}: bawat galaw ay gumagawa ng kopya at handa para sa susunod. Pindutin ang {{key:Esc}} para huminto.

Maaari ring i-click sa 3D view ang parehong punto: kapag naka-on ang Ilipat, sinasalubong ng pointer ang taas ng sahig ng level, kaya ang click doon ay isang punto ng plano. Hawakan ang {{key:Shift}} habang nag-click para pumili ng ibang element sa halip. Gamitin ang plano, Itaas, Harap o Side view ayon sa gusto mo: laging nasa level na iyon ang mga punto.

Kasama ng pader na inilipat ang mga pinto at bintana nito. Kasama ng iginuhit na sahig ang mga opening nito. Ina-update ang mga kuwarto, sahig at kisame na sumusunod sa mga pader. Nananatili sa puwesto nila ang mga pader na nakadugtong sa inilipat na pader.

Ang bawat galaw ay isang pagbabago: isang {{key:Mod+Z}} ang nag-i-undo nito, at dumadaloy ito sa lahat sa isang Live TeamWork session. Hindi maaaring kopyahin nang ganito ang nailagay na library item; gamitin ang {{ui:Edit}} › {{ui:Kopyahin}} at {{ui:I-paste}}.

## Align

Pumili ng dalawa o higit pang element, piliin ang {{ui:Align}}, pagkatapos ang panig (kaliwa, sentro, kanan, itaas, gitna o ibaba) at kung ano ang iaalign: ang buong pinili, ang unang napili, ang huling napili, o puntong i-click mo. Pindutin ang {{ui:Align}} sa bar.

## Distribute

Pumili ng tatlo o higit pang element, piliin ang {{ui:Distribute}}, pagkatapos ang direksyon (across o down) at ang spacing: pantay na agwat sa pagitan nila o pantay na sentro. Nananatili sa puwesto nila ang dalawang nasa dulo.

Ang mga pader na ina-Align o ina-Distribute ay pinapanatili ang kanilang mga joint, gaya ng sa Ilipat: ang pader na nakadugtong sa inilipat na pader ay dumudulas ang dulo sa sarili nitong linya para manatiling nakadugtong, ang mga partition na nakadikit dito ay sumasama, at ang dalawang nakadugtong na pader na parehong inilipat ay pinapanatili ang sulok nila kung saan nagtatagpo ang mga bagong linya. Nananatiling sarado ang mga kuwarto. Isang hakbang ito sa **Mga Pagbabago**.
