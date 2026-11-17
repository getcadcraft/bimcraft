---
title: Iguhit sa totoong laki, i-annotate ayon sa scale
summary: Palaging iginuguhit sa totoong laki ang gusali. Ang teksto, dimension, tag, pangalan ng silid, grid bubble at simbolo ay sinusukat sa papel, sa millimetro gaya ng pagkaka-print, at nananatili ang laking iyon kapag nagbago ang scale ng drawing mula 1:100 patungong 1:50.
keywords: annotation scale, annotative, laki ng teksto, taas ng teksto, taas sa papel, laki ng teksto ng dimension, laki ng tag, laki ng pangalan ng silid, grid bubble, laki ng simbolo, scale ng drawing, 1:50, 1:100, pamantayan ng opisina, lettering, iguhit sa 1:1, totoong laki, teksto ng sheet
from: 94118788
---

## Ano ang gagawin mo

Itakda kung gaano kataas ang lettering ng iyong mga drawing sa papel, minsan para sa buong gusali. Hindi mo kailanman i-scale ang model at hindi mo kailanman papalakihin o paliliitin ang teksto para sa isang scale: kinukuwenta ng BimCraft ang laki mula sa taas sa papel at sa scale ng drawing.

## Paano ito gumagana

- Totoong laki ang model. Ang pader na 10 m ang haba ay 10 000 mm ang haba sa lahat ng scale.
- Ang annotation ay may **taas sa papel**: ang taas ng malaking titik sa nakalimbag na sheet, sa millimetro.
- Sa scale na 1:100, ang teksto na 2.5 mm ay 250 mm ang taas sa model; sa 1:50 ito ay 125 mm. Sa papel ay 2.5 mm pareho ang dalawa.
- Ang mga plan symbol (electrical, plumbing) ay iginuguhit sa millimetro ng papel at sumusunod sa parehong patakaran.

## Mga hakbang

1. Buksan ang project browser. Sa ilalim ng {{ui:Sheets}}, i-click ang {{ui:Annotation sizes…}}.
2. I-type ang taas sa millimetro para sa mga uri na gusto mong itakda: {{ui:Notes and labels}}, {{ui:Dimension text}}, {{ui:Tags and level names}}, {{ui:Room names}}, {{ui:Grid bubble letters}}, {{ui:View titles on sheets}} at {{ui:Schedule text}}. Ang walang lamang kahon ay nananatili sa sariling laki ng BimCraft, na ipinapakitang kulay abo.
3. I-click ang {{ui:Save}}. Isang hakbang ito na maaari mong i-undo.

Ang bawat sheet, ang drawing set, ang plan PDF, at ang mga elevation at section ay gumagamit ng mga sukat na iyon mula noon. Ang agwat sa pagitan ng linya ng dimension at ng teksto nito, ang laki ng grid bubble, at ang taas ng row ng schedule ay lumalaki kasabay ng teksto nila.

## Plan na may sariling scale

Bigyan ng scale ang plan sa view range nito ({{ui:Scale}}; tingnan ang [Views and sheets](topic:views-and-sheets)). Pagkatapos:

- sa screen, ang mga pangalan ng silid, tag, teksto ng dimension, at grid bubble ay iginuguhit sa naka-print nilang laki laban sa model, kaya ang nakikita mo ay ang ipapakita ng sheet;
- ang mga plan symbol at ang kanilang tag ay sinusukat para sa scale na iyon. Palitan ang scale mula 1:100 patungong 1:50 at kalahati ang laki nila sa model, at pareho sila sa papel.

Ang plan na walang sariling scale ay nananatili sa nakapirmi nitong screen text, at ang mga simbolo nito ay sinusukat para sa 1:50 (1/4" = 1'-0" sa feet at inches), gaya ng dati.

## Mga sukat ng opisina mo

Kapag naka-on ang add-on na Default Policies, itakda ang taas ng opisina sa Settings › Global › Default Policies › {{ui:Annotation sizes on paper}}. Kukunin ng bagong gusali ang mga ito kapag na-click ang Gumawa. Sa gusaling nasimulan mo na, may {{ui:Use my office's sizes}} ang dialog. Tingnan ang [Default Policies](topic:default-policies).

## Mga sukat ng regulation pack

Maaaring magbigay ang regulation pack ng taas ng teksto na kailangan ng lugar nito (ang add-on na Building regulations, mga convention sa drawing). Lagyan ng tsek ang pack sa Settings › Building regulations, pagkatapos sa dialog i-click ang {{ui:Use a regulation pack's sizes}}: mapupuno ang mga kahon, at susuriin mo ang mga ito at i-save. Ang sukat na ibinibigay ng pack sa points ay font size, at iko-convert ito sa taas ng malaking titik, kaya suriin ito. Walang maitatakda hangga't hindi mo ito sine-save.

## Ano ang dapat mong makita

- Ang parehong taas ng teksto sa millimetro sa sheet na 1:100 at sa sheet na 1:50, habang ang plan mismo ay doble ang laki sa 1:50.
- Kasama ng gusali ang mga sukat: nakasave ang mga ito sa IFC file nito.

## Mabuting malaman

- Ang sariling sukat ng BimCraft ay ang mga ginagamit ng mga sheet nito noon pa (mga 1.5 mm na malaking titik para sa teksto ng dimension). Hindi ito pamantayan sa drafting: itakda ang sa opisina mo.
- Dapat nasa pagitan ng 0.5 at 50 mm ang taas.
- Hindi bahagi nito ang lettering ng title block at ang mga keynote legend: nananatili ang sarili nilang laki.
