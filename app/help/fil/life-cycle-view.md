---
title: Tingnan kung ano ang masisira sa loob ng limampung taon
summary: Ang mga bintana, pinto, finish at bubong na taglay ng model, ang kanilang service life, ang taon ng bawat pagpapalit, at ang gastos kada taon at ang present value nito kapag nag-type ka ng cost kada unit.
keywords: life cycle, lifecycle, service life, pagpapalit, maintenance, cost, present value, discount, inflation, 50 taon, bintana, pintura, bubong, finish, whole life
from: 1b849545
---

Ipinapakita ng seksyong {{ui:Life-cycle view}} sa kaliwang panel ang mga bahagi ng model na nasisira at kung kailan ito pinapalitan sa loob ng study period (50 taon sa umpisa). Walang binabago sa model.

## Basahin ito

Ipinapakita ng bawat bahagi ang quantity nito (sinusukat mula sa model: lawak ng bintana, panlabas at panloob na pinto, finish ng panlabas na pader, pintura sa loob, finish ng sahig at kisame, footprint ng bubong, hagdan), isang **buhay sa taon** at isang **gastos kada unit**. Pinapalitan ang bahagi kapag umabot na sa buhay nito, dalawang beses ang buhay nito, at iba pa, basta bago pa matapos ang study. Kaya ang bintanang 30 taon sa 50-taong study ay napapalitan nang isang beses, sa taon 30. Typical planning figures ang service life: baguhin ang mga ito ayon sa iyong mga produkto at klima. Walang gastos na ipinapalagay; mag-type ng isa para makita ang pera kada taon, ang kabuuan, at ang present value nito. Magdagdag ng discount rate at inflation rate kung gusto mo.

{{ui:Save the schedule (CSV)}} ay sumusulat ng mga component at ng mga taon. Kasama rin sa listahan ang mga pipe, duct, wiring at equipment (tingnan sa ibaba).

## Mga pipe, duct, wiring at equipment

- **Mga pipe at duct** ay ang metro ng bawat iginuhit na ruta. **Equipment** (mga pump, fan, valve, terminal, fixture, outlet, switch, board at iba pang sinusubaybayan ng Assets tab) ay binibilang ayon sa uri, bawat uri ay may planning life. Ang item na may sariling *service life* na nakatakda sa Assets tab ay may sariling linya na may life na iyon, at kung may install date ito, magsisimula ito sa edad nito: ang pump na 16 na taong gulang na may 10-taong life ay dapat palitan ngayon, at pagkatapos tuwing sampung taon.
- Ang **wiring** ay **estimate**: ang plan distance mula sa board, sa mga device ng bawat circuit, mula sa pinakamalapit, na pinarami ng 1.25 para sa routing. Walang cable na iginuhit ang model, kaya i-check ito laban sa sarili mong take-off.
- Ang mga life ay planning figures na dapat suriin, hindi source.

## Carbon kada pagpapalit

Lagyan ng tsek ang {{ui:Isama ang embodied carbon ng bawat pagpapalit}}. Ang bagong bintana, pinto, hagdan, bubong, pipe o piraso ng equipment ay binibilang sa carbon na dala ng mga elemento ng model na ganoong uri (ang mga factor ng Carbon tab, bawat unit). Ang bahaging walang elemento o factor, gaya ng pintura, finish at wiring, ay nagpapakita ng dash at nakalista. Hindi binibilang ang end of life ng lumang bahagi at ang trabaho ng pagpapalit nito.
