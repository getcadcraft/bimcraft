---
title: Ilakad ang mga tao sa gusali
summary: Paglikas o karaniwang pagdating ng mga tao sa iyong mga silid, pinto at hagdan, na may pila kung saan lumiliit ang gusali, ang pinakamahabang lakad papunta sa labasan mula sa bawat silid, at ang mga natuklasan bilang Problema. Magaspang na crowd model para sa mga desisyon sa disenyo, hindi sertipiko ng fire safety.
keywords: tao, evacuation, egress, escape, exit, travel distance, pila, crowd, flow, lapad ng pinto, hagdan, arrivals, bottleneck, simulation, occupants, pedestrian, what if, nakaharang na pinto
from: 84aa8920
---

Ang seksyong {{ui:People in the building}} ng kaliwang panel ay naglalakad ng mga tao sa mga silid, pinto at hagdan ng bukas na IFC model. Walang nababago sa model at walang ina-upload.

:::warning
Ito ay **isang design aid, hindi fire-safety certificate**. Hindi nito alam ang apoy, usok, pagkataranta, pagkakaiba sa kakayahang gumalaw, o ang hinihingi sa iyo ng code. Ikaw ang may hangganan: ang pinakamahabang lakad papunta sa labasan at ang oras na available ay mga numerong ita-type mo, at wala sa mga ito ang ipinapalagay.
:::

## Patakbuhin ito

1. Magbukas ng model na may saradong silid at pinto. Ang pinto na may silid sa isang gilid lang ay labasan; ang pinto sa pagitan ng dalawang silid ay nagdurugtong sa mga ito; ang hagdan ay nagdurugtong sa mga silid sa mga dulo nito.
2. Pumili ng **Paglikas** (lahat ay lalakad papunta sa labasan), **Pagdating** (lahat ay papasok at lalakad papunta sa isang silid) o **Palitan** (aalis ang mga tao sa mga silid habang kasing dami ang papasok), at ang floor area bawat tao. Ang mga silid na pinangalanang tulad ng koridor, hagdan, lobby o banyo ay walang tao.
3. I-click ang {{ui:Run}}. Makukuha mo ang oras kung kailan lumabas ang huling tao (at kung kailan lumabas ang kalahati at siyam sa sampu), ang pila sa bawat pinto at hagdan, ang silid na may pinakamahabang lakad, at isang plano na nagpapatakbo sa takbo.

## Mga what-if

Lagyan ng tik ang {{ui:Shut}} sa isang pinto sa talahanayan at patakbuhin ulit: maghahanap ang mga tao ng ibang daan, o ililista ang mga silid na walang labasan bilang error. Ang pinto na dalawang beses ang lapad ay mas mabilis na nagbabakante sa isang silid; ipinapakita ng talahanayan kung nasaan ang mga pila.

## Paano ito gumagana

Ang bawat silid ay isang grid, kaya lumilibot ang mga tao sa mga sulok, hindi dumadaan sa pader. Bumabagal ang bilis habang napupuno ang silid (S = 1.4 (1 − 0.266 D) m/s, D sa tao bawat m²). Nakadaraan sa pinto ang 1.3 tao kada segundo sa bawat metro ng lapad nito, bawas 150 mm sa bawat gilid; ang hagdan ay 1.0 at mas mabagal na paglakad. Naghihintay ang mga tao sa pilang first-come. Inuulit ng run number ang eksaktong parehong takbo.

Maaaring patakbuhin ng assistant ang parehong bagay: humiling ng paglikas, o ng pinakamahabang lakad papunta sa labasan mula sa bawat silid.

## Mga tao sa bawat silid

Buksan ang {{ui:People in each room}} para mag-type ng numero para sa anumang silid. Ang blangkong kahon ay gumagamit ng figure ng floor area (nakikita sa kulay abo); ang 0 ay nagbabakante sa silid. Ginagamit ang mga numero mo sa takbo at nananatili sa browser na ito.

## Counter-flow sa mga pinto

Sa **Palitan**, nagkikita sa parehong pinto ang mga lumalabas at ang mga pumapasok. Kapag dumaan sa pinto ang isang taong papunta sa kabilang direksyon malapit sa likod ng huling tao, pinapanatili nito ang bahagi ng rate nito (0.8 dito; isang palagay, dahil magkakaiba ang nailathalang halaga), at binibilang ng talahanayan ang mga pagbabago ng direksyon. Ang pinto na madalas magbago ng direksyon ay nakalista sa Problema bilang tala.

## Mga hagdan at landing

Bawat landing ng hagdan ay nagkakaroon ng isang segundo para liko ng naglalakad (isang palagay). Walang anuman ang tuwid na hagdan; ang L o U na hagdan ay may isa. Nagmumula pa rin sa lapad ng flight nito ang rate ng hagdan.

## Sa 3D view

Lagyan ng tik ang {{ui:Show the people in the 3D view}} at lilitaw ang mga naglalakad bilang mga figure sa model, may kulay ayon sa ginagawa nila, at gumagalaw habang pinapatakbo mo ang takbo. Walang idinadagdag sa model.
