---
title: Mga iskedyul, dimension at PDF ng plano
summary: Mga iskedyul ng pinto, bintana, pader at kuwarto na nagbabago habang gumuguhit ka, mga dimension sa plano, at ang plano ng isang level na isine-save bilang PDF sa standard na scale.
keywords: iskedyul, schedule, door schedule, window schedule, wall schedule, room schedule, dami, quantities, takeoff, area, csv, spreadsheet, dimensions, dimension, print, pdf, plot, scale, 1/4", 1:50, sheet
from: d97cd16e
---

## Ano ang gagawin mo

Tingnan kung ano ang kabuuan ng gusaling iginuhit mo, habang gumuguhit ka: ilang pinto at bintana ng bawat size, gaano karaming pader ng bawat uri, gaano kalaki ang bawat kuwarto. Maglagay ng dimension sa plano at i-save ito bilang PDF para i-print o ipadala.

## Mga iskedyul

Kapag nakabukas ang {{ui:Draw}}, ipinapakita ng **{{ui:Mga Iskedyul}}** sa kaliwang panel ang isang table sa bawat pagkakataon:

- **Mga Pinto** at **Mga Bintana**: bawat isa ayon sa marka nito (D1, D2 … at W1 …, ibinibigay habang inilalagay mo ang mga ito), ang type nito, width, height (at sill), level at ang pader kung nasaan ito.
- **Mga pader ayon sa type**: para sa bawat wall type, ilang pader, kapal nila, kabuuang haba at side area nila bilang **Gross area**, **Deductions** at **Net area**, may kabuuan.
- **Mga Silid**: numero, pangalan, level, area at perimeter, may kabuuang area.
- **Mga Sahig**: bawat sahig kasama ang level, uri at kapal nito, at ang gross area, deductions at net area nito.
- **Mga Finish**: bawat finish layer ng mga wall type (ayon sa material at side ng pader) at ang mga kisame, kasama ang bilang ng face at gross, deductions at net.
- **Mga wall type: takeoff data**: ang inilagay nang isang beses sa bawat wall type (unit, mortar, rate), kasama ang bilang ng pader, haba at net area nila, at ang rate na pinarami sa sinukat na dami. Tingnan ang [Wall assemblies](topic:wall-assemblies).

- **Mga finish ayon sa silid**, **Mga finish ayon sa pader**, **Mga finish ayon sa zone** at **Dami ng finish**: ano ang tumatakip sa bawat kuwarto, may area, bilang ng tile kasama ang mga putol at volume ng substrate. Tingnan ang [Room finishes and finish schedules](topic:room-finishes).
- Ang sarili mong **set-up**: iskedyul na pinagpangkat, binuo at sinave sa isang pangalan. Tingnan ang [Lay out, save and export a schedule](topic:schedule-layouts).

Nagbabago ang mga table sa bawat pag-edit. I-click ang isang row, o isang figure lamang, para piliin ang mga elementong pinagmulan nito. Ang **I-download ang CSV** ay nagsa-save ng table, para mabuksan sa spreadsheet; ang **Download Excel** at **Copy for Google Sheets** ay nasa ilalim nito. Ang **Room finishes** at **Specification** ([Write the specification from the model](topic:specification)) ay nabubuksan mula sa parehong lugar.

## Area at volume ng bawat layer

Piliin ang **Layers: area and volume** sa listahan ng {{ui:Mga Iskedyul}}. May isang row ito para sa bawat layer ng bawat wall, floor, roof at ceiling type na ginagamit: ang elemento, ang type at LOD nito, ang layer (binibilang mula sa labas na side ng pader, mula sa itaas ng sahig, roof o kisame), ang material at function nito, ang kapal nito, ilang elemento, ang **net area** at ang **volume**.

- Ang area ay ang net area ng mga elemento ng type na iyon, sinukat nang eksakto gaya ng sa Mga pader ayon sa type, Mga Sahig at Mga Finish, ayon sa measurement method ng proyekto. Sinusukat ang roof sa slope; walang measurement method na may patakaran para sa mga roof.
- Ang volume ay ang area na pinarami sa sariling kapal ng layer.
- Ang sahig, roof o kisame na walang type ay isang row: isang layer na sarili nitong kapal.
- Nakalista ang air cavity kasama ang area nito at hindi isinasama sa kabuuang volume. May area at walang volume ang membrane.

I-click ang isang row para piliin ang mga elemento nito. Ang **I-download ang CSV** ay nagsa-save ng table.

## Paano sinusukat ang mga area

Ang bawat area ay tatlong numerong nagdadagdag: ang gross na binawasan ng deductions ay ang net. Nakasulat ang patakaran sa ibabaw ng bawat isa sa mga table na ito, at iisang patakaran ito: ang mga iskedyul, ang dami na sinave sa IFC file at ang takeoff na ipinasa sa TakeoffCraft ay pawang gumagamit nito.

- **Pader**: ang gross ay isang mukha ng pader, ang haba nito sa centre line na pinarami sa taas nito (ang aktuwal na mukha para sa pader na may hugis na tuktok o ibaba). Bawat pinto, bintana at iba pang opening ay binabawas, width na pinarami sa height, bawat opening nang isang beses.
- **Sahig o kisame**: ang gross ay ang area sa loob ng outline nito. Bawat opening at cut-out sa loob nito ay binabawas nang isang beses.
- **Finish ng pader**: bawat finish layer ng wall type ay tumatakip sa isang mukha ng pader, sinusukat gaya ng pader, na may parehong opening na binabawas. Ang finish ay isang layer ng pader: nakalista ito sa ilalim ng Mga Finish at hindi idinadagdag sa area ng pader, kaya hindi kailanman nabibilang nang dalawang beses ang pader na may pinto.

Iyon ang **CadCraft default**: binabawas ang bawat opening, anuman ang size nito; ang haba ng pader ay nasa centre line; hindi sinusukat ang reveal. Ito ang ginagamit ng bawat proyekto hanggang pumili ka ng ibang method.

## Pumili ng measurement method

Sa itaas ng iskedyul, inililista ng **Measurement method** ang mga method na kasama ng BimCraft, at ang **Load a method file** ay kumukuha ng sarili ng opisina mo. Nakasave sa IFC file ang pagpili, bilang isang hakbang ng undo, at tatlong bagay ang sumusunod dito nang sabay: ang mga iskedyul, ang net na dami na sinave sa file, at ang takeoff na ipinasa sa TakeoffCraft. Ang patakarang nasa ibabaw ng bawat table ay nagsisimula na sa method, sa source nito, sa petsa nang nabasa ang source at sa mga salitang **Unchecked by a quantity surveyor**.

Maliit na file ng mga katotohanan ang method, hindi program code. Para sa bawat dami, sinasabi nito:

- **ang pinakamaliit na opening na binabawas**: halimbawa, ang opening na 0.5 m² o mas maliit ay nananatili sa area ng pader;
- **paano sinusukat ang mga junction ng pader**: sa centre line; o sa pader na nagtatapos sa kabila, sinusukat hanggang sa mukha ng pader na iyon; o sa bawat dulo ng pader na nagkikita sa ibang pader, sinusukat hanggang sa malapit na mukha;
- **kung sinusukat ang reveal** para sa finish (ang mga return ng finish papasok sa mga opening), bilang area o, kapag mababaw, bilang haba. Ang lalim ng reveal ay kinukuha bilang kalahati ng kapal ng pader;
- **ano ang sinasabi nito tungkol sa masonry**: paano ito sinusukat, at anumang waste o mortar allowance na nakasaad dito.

Ang mga method na kasama ng BimCraft:

| Method | Pader: pinakamaliit na opening na binabawas | Finish ng pader | Kisame | Masonry |
|---|---|---|---|---|
| CadCraft default | bawat opening | bawat opening | bawat cut-out | walang allowance |
| RICS NRM 2 (United Kingdom), 2nd edition 2021 | 0.5 m² o mas maliit ay nananatili | 1 m² o mas maliit ay nananatili | 1 m² o mas maliit ay nananatili | ayon sa area; walang nakasaad na porsyento |
| AAQS Standard Method for Africa 2015 | 0.5 m² o mas maliit ay nananatili | 0.5 m² o mas maliit ay nananatili | 0.5 m² o mas maliit ay nananatili | ayon sa area; sinusukat na net, 0% waste |
| IS 1200 (India), 1976, brickwork | 0.1 m² o mas maliit ay nananatili | default (tingnan sa ibaba) | default | ayon sa volume |
| BIA Technical Note 10 (United States), 2009 | bawat opening | default | default | 5% waste sa mga unit, 15% sa mortar |

Basahin ang mga limitasyong ito bago ka umasa sa isang method:

- **Walang quantity surveyor ang nagsuri ng alinman sa mga ito.** Ginawa ang bawat isa sa pagbasa ng nakapangalang source at pagtatala ng mga numero nito kasama ang clause na pinagmulan ng mga ito. Kung ikaw ay quantity surveyor at makakasuri ng isa, gustong makarinig ng mga gumawa ng app mula sa iyo.
- Kapag hindi mabasa ang patakaran mula sa source, sinasabi ng method na **not confirmed** para dito at ginagamit ang CadCraft default. Walang method na kasama ng BimCraft ang may kumpirmadong patakaran para sa mga junction ng pader, reveal o sahig, kaya sinusukat ang mga iyon sa default na paraan sa ilalim ng lahat ng ito.
- Binabawas ng IS 1200 ang mga opening sa plaster sa tatlong banda. Hindi pa kayang maglaman ng banda ang method file, kaya ang mga finish ng pader ay gumagamit ng default sa ilalim ng method na iyon, at sinasabi ito ng patakaran.
- Wala sa mga ito ang South African Standard System of Measuring Building Work: hindi mabasa ang teksto nito. Sinasabi ng AAQS method para sa Africa na ginawa ito batay sa 1991 edition ng sistemang iyon, ngunit magkaibang dokumento ito.
- Ang BIA Technical Note 10 ay isang industry estimating note, hindi standard na method ng pagsukat.
- Ang opening na eksaktong pinakamaliit na size ay sumusunod sa mismong salita ng method ("not exceeding", "less than"). Ang mga size na nasa loob ng 2 bahagi sa 10 000 nito ay binibilang na eksakto rito.
- Sa ilalim ng method, ang net side area ng pader at net area ng sahig o kisame sa file ay sumusunod sa method, at pinapangalanan ito ng quantity set. Nananatili gaya ng iginuhit ang gross area at volume sa file.

Ang **Notes on this method**, sa ilalim ng picker, ay nagsasabi kung ano ang iniiwang bukas ng bawat source. Dinadala ka ng **Open the source** sa dokumento.

### Ang sariling method ng opisina mo

JSON sa format na `cadcraft-measurement-method` ang method file. Pinapangalanan ng bawat value dito ang clause na pinagmulan nito; tinatanggihan ang value na walang clause. Sinusuri ang file kapag ini-load mo, pinapangalanan ang maling field, at walang gagamitin mula sa file na hindi pumasa. Kapag napili na, nakasave ang file sa loob ng proyekto, kaya magbubukas ang proyekto nang pareho sa ibang computer. Simpleng pangalan mo ang id nito (maaaring hindi ito ang id ng method na kasama ng app).

## Ladrilyo, block at mortar

Binibilang ng **Mga wall type: takeoff data** ang mga unit at mortar ng bawat wall type na may haba at taas ang unit nito (tingnan ang [Give a type its takeoff data](topic:wall-assemblies#give-a-type-its-takeoff-data)). Ito ang mga formula, eksaktong gaya ng kinukuwenta:

- **Units kada area ng isang leaf** = 1 / ((unit length + joint) × (unit height + joint)). Ang ladrilyong 215 × 65 mm na may 10 mm na joint: 1 / (225 × 75 mm) = 59.26 kada m².
- **Unit width sa kabila ng isang leaf** = (kapal ng leaf + joint) / (unit width + joint), binibilog sa buong numero, hindi bababa sa 1. Ang leaf na 102.5 mm ng ladrilyong 102.5 mm ay 1; ang pader na 215 mm ng parehong ladrilyo ay 2.
- **Units** = units kada area × unit width sa kabila × net area ng mukha ng pader, idinagdag sa lahat ng masonry leaf ng type.
- **Units na oorderin** = units × (1 + waste % / 100), binibilog pataas sa buong unit. Ang waste ay ang inilagay sa type; kung wala, ang sa method, kung may nakasaad; kung hindi, 0%.
- **Mortar** = net area × kapal ng leaf, binawasan ng volume ng mga unit (units × length × height × width), pagkatapos dagdag ang karagdagang porsyentong inilagay sa type para sa frog o perforation, pagkatapos dagdag ang allowance ng method kung may nakasaad. Kailangan nito ang unit width.

Ang ipinapalagay: bawat masonry leaf ng type ay gawa sa iisang unit ng type; ang leaf na mas makapal sa isang unit width ay binibilang bilang ganoon karaming unit width, bawat isa ay parang leaf na nakahiga nang pahaba, kaya hindi hiwalay na binibilang ang mga putol na unit, closer at espesyal na hugis; kung walang layer na minarkahang gawa sa unit, ang core layer ang kinukuhang leaf, at sinasabi ito ng nota sa itaas ng table. Ang **Amount** ay ang rate na pinarami sa kung ano ang per ng rate, na maaari na ring maging unit na oorderin, 1000 units na oorderin o m³ ng mortar.

Ang mga marka ay IFC tag ng mga elemento: baguhin ang isa sa **Properties** (Tag) at susunod ang iskedyul. Para sa bawat IFC model, iginuhit man o hindi, ang [Add up quantities, list elements and schedule spaces](topic:quantity-totals) ay nagdadagdag ng anumang property.

## Mga dimension

Ipinapakita ng plano ang haba ng bawat iginuhit na pader sa kahabaan ng labas nitong mukha (ang panloob na pader: sa kahabaan ng isang mukha) at, para sa pader na may pinto o bintana, isang chain mula sa mga sulok papunta sa bawat opening. Itinatago at muling ipinapakita ng {{ui:Mga dimension}} sa model bar ang mga ito.

## I-save ang plano bilang PDF

1. Ipakita ang level na gusto mo at itakda ang units sa panel na **Levels**.
2. I-click ang {{ui:I-print}} sa model bar.
3. Sine-save ng BimCraft ang "<file> — <level>.pdf": ang plano sa itim at puti sa pinakamalaking standard scale na kasya sa pahina (1/4" = 1'-0", 1/8" = 1'-0" … sa Letter sa feet at inches; 1:50, 1:100 … sa A4 sa millimeter), na may napunong pader, pinto, bintana, pangalan at area ng kuwarto, dimension, at title strip na may level, file, cut height, petsa at scale.

Iginuhit bilang mga linya at teksto ang PDF, kaya nananatiling malinaw ito sa anumang zoom at maaaring hanapin ang teksto nito.

## Dapat mong malaman

- Inililista ng mga iskedyul ang ginawa ng mga drawing tool. Ang pinto at bintana mula sa ibang programa ay ipinapakita sa halip sa Quantity totals.
- Para ma-presyuhan ang trabaho, ipasa ang mga dami sa TakeoffCraft: tingnan ang [Quantities to TakeoffCraft](topic:takeoff). Nananatili ang CSV download para sa spreadsheet.
