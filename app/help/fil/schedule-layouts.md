---
title: Ayusin, i-save at i-export ang iskedyul
summary: I-group ang isang iskedyul, bigyan ito ng subtotal at total, magdagdag ng column na binabasa mula sa property, i-save ito bilang set-up sa file, at i-export bilang spreadsheet workbook (.xlsx), bilang tekstong maipe-paste sa online sheet, o bilang CSV. Pinupunan ng office standard ang hindi sinasabi ng iskedyul.
keywords: ayos ng iskedyul, i-group ayon sa, subtotal, total, heading, office standard, default policies, set-up, iskedyul ng pinto kada palapag, fire rating, ironmongery, xlsx, workbook, online sheet, paste, csv, export, spreadsheet, elemento, piliin mula sa iskedyul, figure
from: 95dfd801
---

## Ang gagawin mo

Gawing iskedyul na ibinibigay ng iyong opisina ang simpleng iskedyul: naka-group ayon sa level, type o silid, may subtotal at total, may mga column na kailangan mo, sa sarili nitong pangalan. Pagkatapos, ipadala ito sa spreadsheet. Alam pa rin ng bawat row at bawat figure kung saang elemento ito galing.

## Mga hakbang

1. I-on ang {{ui:Draw}} at buksan ang **Mga iskedyul** sa kaliwang panel. Pumili ng iskedyul, halimbawa **Doors**.
2. Sa itaas ng table, piliin ang **I-group ayon sa** (isang column ng iskedyul, gaya ng Level o Type, o **Walang grouping**) at ang **Totals** (**Walang total**, **Isang total**, o **Mga subtotal at isang total**). Iniiwan ng **Ayon sa set** ang pagpili sa naka-save na set-up o sa office standard.
3. Para magdagdag ng column na binabasa mula sa mga elemento, i-type ang pangalan ng property o tag sa ilalim ng table (halimbawa `FireRating`, `Pset_DoorCommon.FireRating` o ang pangalan ng tag gaya ng `Ironmongery`) at i-click ang **Magdagdag ng column**. Unang binabasa ng BimCraft ang sariling property set ng elemento, saka ang sa type nito. Kapag walang halaga pa ang elemento, sinasabi nito iyon; kusang napupunan ang column kapag may naitakdang halaga.
4. I-type ang pangalan (halimbawa "Door schedule by floor") at i-click ang **I-save bilang set-up**. Nakatago ang set-up sa building file at idinudugtong sa listahan ng Mga iskedyul sa ilalim ng pangalan nito. Sumusunod ito sa bawat pagbabago ng model. Inaalis ito ng **Alisin ang set-up na ito**. Parehong isang hakbang ang mga ito sa Undo.

## I-click ang figure para piliin kung saan ito galing

I-click ang alinmang row, o alinmang figure, para piliin sa plano at sa 3D ang mga elementong nasa likod nito:

- ang row ay pumipili sa mga elemento ng row na iyon;
- ang subtotal o total ay pumipili sa lahat ng idinadagdag nito; ang heading ng group ay pumipili sa buong group nito;
- ang figure na may sariling elemento ay pumipili sa mga iyon: ang **Deductions** ng isang wall type ay pumipili sa mga pinto at bintana nito, ang wall area ng isang silid ay pumipili sa mga pader nito.

Gumagana rin ito sa dokumentong ginawa mula sa model: sa preview, i-click ang figure ng isang iskedyul.

## Export

- Ang **I-download ang Excel** ay nagse-save ng .xlsx workbook. Ang haba, lawak, volume at bilang ay tunay na numero sa unit na ipinapakita ng column (ang feet at inches ay nananatiling teksto). May ikalawang sheet, ang **Elements**, na naglilista para sa bawat linya ng GlobalId ng mga elementong nasa likod nito.
- Ang **Kopyahin para sa Google Sheets** ay naglalagay ng iskedyul sa clipboard bilang tab-separated text. Sa Google Sheet, i-click ang cell A1 at i-paste. Ang **Buksan ang bagong Google Sheet** ay nagbubukas ng `sheets.new`, ang sariling address ng Google para sa bakanteng sheet, sa sarili mong Google account. Hindi nag-sa-sign in ang BimCraft sa Google at walang ipinapadalang anuman doon: ang paste ay sa iyo.
- Ang **I-download ang CSV** ay nagse-save ng table gaya ng nakaayos sa screen.

## Ang office standard

Maaaring sabihin ng isang opisina nang isang beses kung paano naayos ang mga iskedyul nito. I-on ang add-on na **Default Policies** ([Default Policies](topic:default-policies)) at itakda, sa **Mga setting › Global › Default Policies › Ayos ng iskedyul (ang office standard)**:

| Policy | Ang ginagawa nito |
|---|---|
| I-group ang mga iskedyul ayon sa | Level, Type, Room o walang grouping, para sa bawat iskedyul na may ganoong column |
| Totals sa mga iskedyul | Walang total, isang total sa dulo, o subtotal sa ilalim ng bawat group at isang total |
| Pamagat ng iskedyul | Isang pattern, halimbawa `{project}: {schedule}` |
| Mga heading ng column | Gaya ng nakasulat, IN CAPITALS o With Capitals |

Nalalapat ang standard sa bawat iskedyul, kahit sino pa ang nag-set up nito: ang mga simpleng iskedyul sa panel, isang naka-save na set-up, iskedyul na itinakda ng assistant, ang mga export, at ang mga iskedyul sa dokumento. Ang set-up na nagsasaad ng sarili nitong grouping, totals o pamagat ay pinananatili ang mga ito; pinupunan ng standard ang natitira. Ipinapakita ng panel kung aling bahagi ang itinakda ng office standard. Naglalakbay ang mga policy kasama ng iba pa sa Default Policies file.

## Magandang malaman

- Pinangalanan ng set-up ang pinagmulan nitong iskedyul at mga column nito; wala itong hawak na numero. Binabasa ang mga numero mula sa model sa bawat pagkakataon.
- Ang mga listahang hindi row ng mga elemento (ang mga wall assembly at ang material legend) ay walang layout at walang export dito.
- Maaaring gawin ng isang assistant ang lahat ng ito para sa iyo: tingnan ang [Hayaang makipagtulungan ang AI assistant sa iyong model](topic:assistants).
