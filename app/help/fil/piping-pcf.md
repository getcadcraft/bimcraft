---
title: Ipadala ang pipe sa stress o isometric program, at basahin ulit (PCF)
summary: Isulat ang mga pipe run ng model bilang PCF piping component file, o basahin ang PCF file mula sa pipe-stress o isometric program at iguhit ang pipe nito bilang mga run.
keywords: pcf, piping component file, pipe stress, isometric, isometrics, export, import, piping, plant, steel pipe, ilipat ang trabaho, ibang software
from: 24f91355
---

## Ano ang gagawin mo

Ang PCF ay plain-text na file na binabasa at isinusulat ng pipe-stress at isometric na program. Nakalista rito ang mga component ng bawat pipeline kasama ang mga end point at bore nito.

## Export

1. Piliin ang Tubo tool. Ipinapakita ng options row ang **Export PCF**.
2. I-click ito. Isinusulat ang bawat pipe run sa model: tuwid na pipe, elbow (liko na 90 degree, kung hindi ay bend), tee kasama ang branch point nila, reducer at valve.
3. Millimetre ang gamit ng file. Ang bore ay nominal diameter sa millimetre. Ang centre point ng elbow ay ang sulok nito, kung saan nagtatagpo ang dalawang binti nito.

Ang PCF ay isinusulat para sa steel butt-weld pipe. Isinusulat din ang run na ibang material, gamit ang steel component key, at nakatala ito sa panel na Problema.

## Import

1. Piliin ang Tubo tool at i-click ang **Import PCF…**, pagkatapos piliin ang file.
2. Ang tuwid na pipe hanggang sa elbow, bend, valve at flange ay nagiging isang run sa kasalukuyang level. Ang pagbabago ng size ay nagsisimula ng bagong run. Ang branch ng tee ay nagiging sarili nitong run na nagsisimula sa centre ng tee.
3. Ang model mismo ang naglalagay ng sarili nitong fitting. Hindi kinokopya ang reducer at tee: lumalabas ang mga ito kung saan nagtatagpo ang mga run ng magkaibang size, o isang branch.

:::note
Binabasa bilang taas mula sa kasalukuyang level ang mga taas sa file. Ang mga load, restraint at mismong stress analysis ay wala sa PCF file at hindi naipapasa.
:::

## Suriin kung ano ang naipasa

- Dapat tumugma sa pinagmulan ang kabuuang haba ng pipe bawat pipeline.
- Inililista ng panel na Problema, isang beses bawat isa, ang elbow na ang centre point ay hindi magkapareho ang layo sa magkabilang dulo, pipe na walang haba, at bore na hindi standard size.

## Piping na nasa IFC file na

Kapag bukas ang IFC file, isinusulat din ng **Export PCF** ang sarili nitong pipe segment, fitting at valve, katabi ng mga run na iginuhit mo. Nakukuha ng segment ang mga dulo nito mula sa mga port nito, o mula sa mga dulo ng katawan nito. Hindi kasama ang fitting na walang port at sinasabi ito ng panel na Problema. Puwedeng mag-export mula sa IFC lamang kapag walang iginuhit na run ang model.

Sa import, hindi iginuguhit ang mga support, olet, flange, gasket at cap sa file. Inililista ng panel na Problema kung ilan sa bawat isa ang naiwan, para walang mawala nang hindi namamalayan.
