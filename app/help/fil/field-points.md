---
title: Mga punto para sa setting out, at mga as-built check
summary: Bilangan ang mga lugar na ise-set out ng crew mula sa model — gitna ng column, dulo ng pader, anchor bolt, sleeve, anumang element na pipiliin mo — isulat ang mga ito para sa total station, pagkatapos basahin pabalik ang as-built na mga punto ng crew at tingnan kung ano ang lumihis.
keywords: layout points, setting out, set out, stake out, staking, total station, survey, point file, csv, txt, pnezd, penzd, xyz, northing, easting, elevation, as built, as-built, check, tolerance, paglihis, anchor bolts, gitna ng column, dulo ng pader, sleeves, survey coordinates, map conversion
from: acea9606
---

Ginagawa ng tab na {{ui:Points}} sa kanan ang mga punto na ise-set out ng crew sa site mula sa bukas na model, at sinusuri ang mga punto na sinusukat nila pagkatapos.

## Gumawa ng mga punto

1. Buksan ang IFC model at ang tab na {{ui:Points}}.
2. Lagyan ng tsek kung ano ang ise-set out: **column centres** (ang paanan ng centre line ng bawat column), **wall ends** (dalawang dulo ng axis ng bawat pader, sa base nito), **anchor bolts**, **sleeves** (mga element na ang pangalan o type ay nagsasabing sleeve), at ang **picked elements** (bawat isa sa punto ng pagkakalagay nito — piliin muna sila sa view).
3. Piliin ang unang numero at prefix, ang mga coordinate, ang mga unit, ang mga column at ang file:
   - **Model**: ang sariling coordinate ng file. **Survey grid**: ang map grid ng georeference ng model (ipinapakita lamang kapag may map conversion ang IFC), sa metro o sa unit na pipiliin mo.
   - Mga column **PNEZD** (point, northing, easting, elevation, description), **PENZD** o **XYZ**; **CSV** (kuwit) o **TXT** (tab).
4. Pindutin ang {{ui:Make points}}: ipinapakita ng listahan ang mga ito at minamarkahan ng asul ng view. Isinusulat ng {{ui:Download the points}} ang file.

Nakaayos ang mga punto nang nakapirmi — ayon sa uri, pagkatapos sa mga row sa buong plan — kaya ang paggawa muli mula sa parehong model ay nagbibigay ng parehong numero. Ang file ay ang binubuksan ng CivilCraft at isinusulat ng EXPORTPOINTS ng CadCraft: isang punto sa bawat linya, tatlong decimal, at paglalarawan sa quotes kapag may kuwit ito.

## I-check ang as-built na mga punto

Kapag ibinalik ng crew ang sinukat nila, pumili ng **tolerance** sa milimetro at kung paano ipapares ang mga punto — ayon sa **point number** (iningatan nila ang iyong numero) o ang **nearest shot** — at pindutin ang {{ui:Read as-built points…}}. Basahin ang file sa parehong unit at coordinate na isinulat mo.

Ang bawat design point ay **within** ang tolerance, **outside** ito, **not measured**, at ang anumang shot na walang humiling ay **extra**. Ibinibigay ng table ang mga pagkakaiba sa unit na pipiliin mo sa toolbar, na ang feet ay ipinapakita bilang decimal na inch (as built minus design: east, north, height, at distansya sa plan); minamarkahan ng view ang bawat punto ng berde o pula na may linyang papunta sa shot, at kulay abo kapag hindi ito nasukat. Isinusulat ng {{ui:Report (CSV)}} ang buong paghahambing.

Walang binabago ang model dito. Hindi pa ginagawa: pag-set out mula sa gilid ng slab, grid intersection o openings na ginawa para sa iyo, at pagpapadala ng mga punto direkta sa instrumento — gamitin ang file.
