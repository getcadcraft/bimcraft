---
title: Mga pader mula sa set ng plan (PDF o scan)
summary: Gawing mga pader, pinto at bintana ang mga pahina ng PDF, o isang na-scan na drawing, na may isang level para sa bawat pahina, at nananatili ang pahina sa ilalim ng bawat plan.
keywords: pdf, plans, set of plans, scan, scanned drawing, tiff, trace, pader mula sa pdf, pader mula sa scan, levels, pages, scale, doors, windows, swing, sill, underlay
from: b70d9db7
---

## Ano ang gagawin mo

Magsimula ng model mula sa mga plan na nasa papel mo: isang PDF (iginuhit bilang mga linya, o scan sa loob ng PDF) o isang scan (PNG, JPEG, TIFF na may isa o maraming pahina). Bawat pahina ay nagiging mga pader, pinto at bintana ng isang level.

## Mga hakbang

1. I-on ang {{ui:Draw}}. Piliin ang {{ui:Build}} › {{ui:From a drawing…}}, pagkatapos ang {{ui:Choose a drawing…}} at piliin ang PDF o ang scan.
2. **Mga pahina at level.** Nakalista ang bawat pahina kasama ng uri nito (**gawa sa linya**, o **larawan (tinrace)**) at ng level na pupuntahan nito: isa sa mga level mo, **bagong level sa itaas ng iba**, o **huwag isama ang pahinang ito**. Itinutugma ang mga pahina sa iyong mga level ayon sa pagkakasunod-sunod; baguhin ang alinman sa mga ito.
3. **Scale.** Para sa PDF, sabihin kung paano ito iginuhit (**1 : 100**, **1 : 50**…). Para sa iba pa, o kapag hindi mo alam, piliin ang **from a distance I know**: i-click ang dalawang dulo ng isang dimension o scale bar sa preview, pagkatapos i-type ang totoong distansya. Iisang scale ang gamit ng lahat ng pahina.
4. Piliin ang **uri ng pader** at ang **taas ng bagong level**. Iwanang naka-tsek ang **Panatilihin ang bawat pahina sa ilalim ng plan ng level nito** para makita ang bawat pahina bilang manipis na linya sa ilalim ng plan nito.
5. Sinasabi ng linya sa ilalim ng mga pagpipilian kung ilang pader, pinto at bintana ang gagawin nito, at sa ilang level. I-click ang {{ui:Make them}}.

## Paano binabasa ang isang pahina

- **Mga pader** ay nagmumula sa mga pares ng magkatapat na linya na hanggang 600 mm ang layo (ang dalawang face ng pader); kasing kapal ng puwang ang pader. Hindi isinasama ang hatching at lettering.
- **Mga pinto at bintana.** Ang puwang sa pader (500 hanggang 2600 mm) na may iginuhit na swing ng pinto sa tabi nito ay isang pinto, nakakabit sa isang dulo ng puwang at bumubukas sa gilid ng swing. Ang puwang o pader na may linya ng sill sa loob nito ay isang bintana. Ang puwang na walang alinman dito ay pinto kapag hanggang 1300 mm at bintana kapag mas malaki roon.
- **Ang scan** ay ginagawang parisukat muna kung baluktot ang pagkaka-scan (sinasabi ito ng dialog), ginagawang itim at puti, nililinis sa mga tuldok at tinatrace; ang **PDF page na larawan** ay iginuguhit muna at pagkatapos ay tinatrato sa parehong paraan. Hinahanap ng trace ang gitna ng bawat guhit at itinutugma dito ang mga tuwid na linya at arc, at hindi ito gumagamit ng network o trained na model.
- **Mga silid** ay sumusunod nang kusa mula sa mga saradong loop na nabubuo ng mga pader. Kapag may teksto ang PDF, kinukuha ng silid ang pangalan nito mula sa lettering sa loob nito (ang pinakamalaki; hindi pangalan ang dimension, scale o numero ng sheet). Walang teksto ang scan, kaya pinananatili ng mga silid nito ang mga pangalang ibinibigay ng programa.
- **Lahat ng nabasa mula sa pahina ay namarkahang hindi pa beripikado**: ang bawat pader, pinto, bintana at silid ay may dashed box at "?" sa plan hanggang suriin mo ito. Piliin ang mga nasuri mo at gamitin ang {{ui:Tools}} › {{ui:Mark as checked}}. Tingnan ang [Markahan ang mga elemento bilang nasuri o na-verify sa field](topic:verification).

## Ano ang makikita mo

- Ang mga pader, pinto, bintana at silid sa bawat level, at ang anumang bagong level, lahat ay iisang hakbang: binabawi ng {{key:Mod+Z}} ang lahat.
- Bawat pahina bilang manipis na linya sa ilalim ng plan ng level nito, nakalista sa ilalim ng {{ui:Build}} › {{ui:From a drawing…}} kasama ang {{ui:Remove}}.

:::note
Ito ang ibinigay ng mga linya, ayon sa katumpakan ng pahina. Maaaring mawala ng scan ang isang mahinang pader, pagdugtungin ang dalawang pader na magkalapit, o makakita ng pader sa isang mantsa; ang swing na hindi ipinapakita ng drawing ay ginagawang simpleng pinto ang puwang. Suriin ang bawat level laban sa pahina bago mo ito pagkatiwalaan, at ayusin ang mali gamit ang mga tool na {{ui:Wall}}, {{ui:Door}} at {{ui:Window}}.
:::
