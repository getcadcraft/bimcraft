---
title: Ihambing ang scan sa model at sa 4D schedule
summary: Hatulan ang bawat element ng model laban sa bukas na point cloud (natapos na, bahagya, kulang, hindi naabot), tingnan ang porsyento ng natapos, kulayan ang model ayon dito, at kapag may nakalagay na 4D schedule, ilista kung ano ang nahuhuli o nauuna sa 4D day.
keywords: scan, point cloud, progress, percent complete, built, missing, behind schedule, ahead of schedule, 4D, site progress, deviation, as-built, laser scan, drone, compare, ihambing, progreso
from: 6fdc9003
---

Magbukas ng IFC, magbukas ng point cloud sa tabi nito (tingnan ang [Point cloud](topic:point-clouds)), at ilagay ito sa model. Lalabas ang seksyong {{ui:Compare the scan with the model}} sa kanang panel habang bukas ang isang cloud.

## Ano ang ginagawa nito

Pindutin ang {{ui:Compare}}. Hinahatulan ang bawat element ng model batay sa surface nito, dahil iyon ang nakikita ng scanner. Hinahati sa mga cell na humigit-kumulang 20 cm ang anim na mukha ng box nito; binibilang ang isang cell kapag may scan point sa loob ng iyong {{ui:Tolerance}} (50 mm sa simula) mula sa mukha. Ang pinakamagandang malaking mukha ang binibilang, kaya hindi napaparusahan ang isang pader na na-scan mula sa isang gilid dahil sa kabilang gilid nito.

- **Built**: hindi bababa sa 40 % ng surface ang nakita.
- **Partly**: 10 % hanggang 40 %.
- **Missing**: mas mababa pa roon, pero naabot ng scan ang element (may mga punto sa loob ng 1.5 m mula rito).
- **Not reached**: hindi kailanman napuntahan ng scan, kaya walang sinasabi tungkol dito.

Para sa mga element na built at partly built, ibinibigay din nito ang average na offset ng mga scan point mula sa surface ng model, at sinasabi kung ang element ay nasa lugar (sa loob ng tolerance), malapit (sa loob ng tatlong beses) o off (mas malayo pa). Ang nakikita lang nito ay mga offset hanggang limang beses ng tolerance: ang element na naitayo nang mas malayo sa lugar nito kaysa roon ay mababasa bilang missing.

Ibinibigay ng buod ang porsyento ng natapos sa mga element na naaabot ng scan, ayon sa bilang at ayon sa volume. Hiwalay na binibilang ang mga partly built na element at hindi idinadagdag sa mga built.

## Laban sa 4D schedule

Kapag may nakalagay na 4D schedule (tingnan ang [4D schedule](topic:4d-schedule)), gumagamit din ang resulta ng araw na itinakda mo sa 4D slider: ang mga element na dapat na sa araw na iyon pero hindi ipinapakita ng scan bilang built ay **behind the schedule**; ang mga element na hindi pa dapat at built na ay **ahead**. Nakalista sa {{ui:Problems}} ang mga behind-schedule na element, at maaaring i-filter sa mga ito ang talahanayan. Kapag walang schedule, walang sinasabi tungkol sa behind o ahead.

## Ang talahanayan at ang model

I-click ang isang row para piliin ang element. Pinipintahan ng {{ui:Colour the model}} ang mga element ng berde (built), amber (partly), pula (missing) o gray (not reached); ibinabalik ito ng {{ui:Own colours}}. Isinusulat ng {{ui:Save CSV}} ang talahanayan. Minamarkahan ng {{ui:Mark the matching elements as field-verified}} bilang field-verified (LOD 500, method scan) ang bawat element na nakita bilang built at nasa loob ng tolerance, sa isang hakbang na maaari mong i-undo. Tingnan ang [Markahan ang mga element bilang checked o field-verified](topic:verification).

:::warning
Ikinukumpara nito ang box ng bawat element sa mga scan point sa loob ng isang tolerance. **Hindi ito survey, quantity take-off, o batayan ng bayad.** Ang element na nakatago sa likod ng na-scan na element (pader sa likod ng lining, slab sa ilalim ng floor finish) ay nagbabahagi ng surface nito at maaaring mabasa bilang built; ang curved o sloping na element ay may box na mas malaki kaysa sa katawan nito at maaaring mabasa bilang partly o missing. Tingnan ang listahan bago kumilos ayon dito. Hindi bahagi nito ang mga permit comment at progress note: nananatili sila sa mga column na pinanatili mo.
:::

Maaaring patakbuhin ng isang assistant ang parehong paghahambing gamit ang tool na {{ui:Compare the scan with the model}}; hindi nito binabago ang model.
