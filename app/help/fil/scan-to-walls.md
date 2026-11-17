---
title: Mga pader at pinto mula sa phone o laser scan
summary: Gawing mga iminumungkahing pader, pinto at silid ang scan ng isang kuwarto, na tatanggapin mo nang isa-isa.
keywords: scan, phone scan, lidar, point cloud, pader mula sa scan, pinto mula sa scan, room scan, ply, e57, las, obj, mungkahi
from: a4ef0f10
---

## Ano ang ginagawa nito

Kapag bukas ang isang scan (point cloud gaya ng PLY, E57 o LAS, o mesh gaya ng OBJ), hinihiwa ito ng BimCraft sa taas ng plano, pinapaharap sa gusali, at naghahanap ng mahaba at manipis na takbo ng mga punto: iyon ang mga pader. Ang puwang na kasing-lapad ng pinto sa pagitan ng dalawang takbo sa iisang linya ay nagiging isang pader na may pinto. Ang mga pader na nagsasara ng isang espasyo ay bumubuo ng silid.

Walang iginuguhit hangga't hindi mo tinatanggap. Ang mga pader at pinto ay dumarating bilang listahan ng mga mungkahi (mga pagbabago sa Suggest mode): panatilihin ang tama, tanggihan ang iba, at ang lahat ng pinanatili mo ay iginuguhit sa isang undo step. Lumilitaw nang kusa ang mga silid.

## Ano ang tinitingnan nito

Ang mga pader na hindi nagsasara, mga takbo ng pader na mas maikli kaysa kapal ng pader, at puwang na kasing-laki ng pinto na walang pader sa paligid ay iniuulat bilang Problems na may posisyon, para matingnan mo ang scan doon.

## Hindi pa beripikado hangga't hindi nasusuri

Ang mga pader, pinto at silid na tinanggap mo mula sa scan ay minamarkahang hindi pa beripikado: isang may-tuldok na kahon at isang "?" sa plano hanggang sa markahan mo silang nasuri na. Tingnan ang [Markahan ang mga elemento bilang nasuri o na-verify sa field](topic:verification).

## Ang hindi nito kayang gawin

- Nakikita nito ang mga pader na tumatakbo sa dalawang patayong direksyon. Hindi nakikita ang dayagonal o kurbadang pader.
- Isang storey sa bawat pagkakataon. Hindi nakikita ang mga bintana (ang bintana ay puwang lamang kapag nasa taas ng sill ang hiwa).
- Nasubukan na ito sa mga nabuong room scan at mesh, pero hindi pa sa mga scan mula sa tunay na phone. Hindi pa alam kung gaano ito kahusay sa tunay na scan (pag-anod sa mahabang paglalakad, muwebles na nakasandal sa pader, salamin, mga bukas na pinto); ang pag-aayos nito sa tunay na scan ang susunod na hakbang. Suriin ang bawat mungkahi laban sa scan bago mo ito tanggapin.
