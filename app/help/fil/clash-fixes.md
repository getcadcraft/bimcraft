---
title: "Ayusin ang mga clash gamit ang fix ng bawat disiplina"
summary: "Mula sa mga resulta ng clash, ang Magmungkahi ng fixes ay naglilista para sa bawat clash ng gagawin ng bawat disiplina — ducts na inililihis sa ilalim ng beam, tubong inilipat sa gilid, column na inilipat, butas sa beam — bawat isa ay sinubukan sa kopya ng model kasama ang mga trade-off nito, para tanggapin o tanggihan mo. Ang mga tinanggap na fix ay ipinapasok bilang isang undo step."
keywords: "clash, clash fix, lutasin ang clash, ayusin ang clash, koordinasyon, magmungkahi ng fixes, reroute, detour, offset, duct, tubo, tray, beam, column, opening, sleeve, trade-off, disiplina, istruktura, mechanical, plumbing, electrical, arkitektura, assistant"
from: f7bafdd9
---

## Ano ang gagawin mo

Gawing desisyon ang listahan ng clash. Bawat disiplina (istruktura, mechanical, plumbing, electrical, arkitektura) ay nagmumungkahi ng fix para sa sarili nitong mga element lamang, bawat mungkahi ay sinusuri sa kopya ng model, at ikaw ang pumipili.

## Mga hakbang

1. Patakbuhin muna ang clash check. Tingnan ang [Suriin ang mga clash](topic:clash-check) at [Suriin ang mga tubo at duct laban sa istruktura](topic:mep-against-structure).
2. Sa ilalim ng mga resulta, i-click ang {{ui:Propose fixes}}. Magbubukas ang panel na **Proposed fixes** sa tabi ng model.
3. Para sa bawat clash, makikita mo ang mungkahi ng bawat disiplina, ang pinakamahusay muna. Sinasabi ng bawat linya kung ano ang ginagawa nito at ang mga trade-off nito: kung nilulutas nito ang clash, ilang bagong clash ang nagagawa nito, aling mga patakaran ang nalalabag, gaano karaming run ang idinadagdag o gaano kalayo ang nagagalaw, ilang fitting, at cost score.
4. I-click ang {{ui:Show}} para makita ang mga element sa 3D. I-click ang {{ui:Accept}} sa fix na gusto mo (isa bawat clash), o ang {{ui:Reject}}.
5. Ang linyang nasa ibaba ay nagsasabi kung ano ang ginagawa ng lahat ng tinanggap mong fix nang magkakasama: ilang clash ang nalulutas, ilan ang natitira, at kung may bagong clash.
6. I-click ang {{ui:Apply accepted fixes (one undo step)}}. Muling tatakbo ang clash check. Binabawi ng {{ui:Undo}} ang lahat nang sabay-sabay.

## Ano ang maaaring gawin ng bawat disiplina

- **Mechanical** (ducts, heating at cooling pipes): mag-detour sa itaas o ilalim sa gilid na tinatamaan, itaas o ibaba ang buong run, ilipat sa gilid, o gawing mas patag ang rectangular duct na may parehong lawak.
- **Plumbing** (tubig, drains, gas, fire): ang parehong galaw, maliban na ang gravity drain ay hindi kailanman binibigyan ng detour; maaari lang itong ilipat bilang buo, pinananatili ang pagbaba nito.
- **Electrical** (trays at conduit): ang parehong galaw; dapat mapanatili ng tray ang 150 mm na malinis na espasyo sa itaas nito para mailagay ang cable.
- **Structure**: ilipat ang column (hanggang 300 mm), o ang butas sa web ng beam o sa slab para sa run na dumaraan. Sinasabi ng bawat structural fix na pipirmahan ito ng structural engineer.
- **Architecture**: sleeve sa pader para sa run na dumaraan, o ilipat ang pader na alam na hindi nagdadala ng load.

## Ano ang dapat mong makita

- Minamarkahan ang mga fix na lumalabag sa patakaran: mas malapit sa 25 mm na agwat sa anumang iba, nasa ilalim ng 2,100 mm na headroom line, butas sa web na mas malaki sa 40% ng lalim ng beam o masyadong malapit sa dulo nito, o beam na mababago ang span.
- Ang mga fix na kayang gawin ng BimCraft ay ina-apply sa model: mga run na iginuhit mo gamit ang Pipe at Duct tools at mga column na iginuhit mo. Ang iba ay may markang **Advice only**: ang pagtanggap sa kanila ay nagdaragdag ng issue sa Issues tab sa halip.

## Mahalagang malaman

- Galing sa mga built-in na patakaran ng app ang mga fix; walang AI na ginagamit para dito.
- Kung ikokonekta mo ang isang assistant (tingnan ang [Hayaan ang AI assistant na makatrabaho ang model mo](topic:assistants)), mababasa nito ang mga clash at makakadagdag ng sarili nitong mungkahi para sa isang disiplina sa bukas na panel. Sinusuri ang mga ito sa parehong paraan, minarkahan ng pangalan ng assistant, at walang babaguhin hangga't hindi mo tinatanggap at ina-apply.
- Sinusuri ang kopya gamit ang mga kahon sa paligid ng bawat element at bawat binti ng run, kaya ang nakahilig na run ay maaaring magpakita ng clash na hindi makikita ng clash check. Patakbuhin muli ang clash check pagkatapos mag-apply: ito ang huling hatol.
- Ang mga limitasyon (hanggang saan maaaring gumalaw ang run, gaano kataas makakaakyat ang detour, ang agwat) ay mga default na nakasulat sa panel.

## Susunod

- [Issues at BCF files](topic:issues-bcf)
- [Gumuhit ng pipe at duct run](topic:pipes-and-ducts)
