---
title: Markahan ang mga elemento bilang nasuri o na-verify sa field
summary: Ang elementong nabasa mula sa PDF o scan ay hindi pa na-verify hangga't hindi mo ito sinusuri. Markahan ang mga elemento bilang nasuri, o bilang na-verify sa field (LOD 500) kasama kung sino ang nagsukat, kailan at paano, at mag-hand over ng as-built model na nagsasabi kung alin ang alin.
keywords: hindi pa na-verify, na-verify, nasuri, na-verify sa field, as built, as-built, lod 500, close-out, handover, sinukat sa site, tape, laser, scan, survey, umiiral na gusali, alteration, markahan bilang nasuri, verification, stage 7
from: df35d908
---

## Ano ang gagawin mo

Subaybayan kung ano sa model ang talagang tiningnan ng isang tao. Ang elemento ay may isa sa tatlong marka, o wala:

- **Hindi pa na-verify**: nakilala ito ng programa mula sa PDF, scanned drawing, traced drawing o point cloud scan. Wala pang nag-check.
- **Nasuri**: inihambing ito ng isang tao sa drawing na pinanggalingan nito.
- **Na-verify sa field (LOD 500)**: sinukat ito ng isang tao sa site. Kasama nito ang sino, kailan at paano.
- **Walang marka**: iginuhit ng isang tao. Walang claim ang model tungkol dito.

## Mga hakbang

1. Pumili ng isang elemento o marami (mga pader, pinto, bintana, silid, anumang elemento).
2. Sa {{ui:Properties}}, buksan ang {{ui:Beripikasyon}}.
3. I-type kung sino ang nag-check o nagsukat. Ang petsa ay ngayon, maliban kung babaguhin mo.
4. I-click ang {{ui:Markahan bilang nasuri}}. Para sa sukat sa site, piliin kung paano ito sinukat (tape measure, laser distance meter, scan, survey) at i-click ang {{ui:Markahan bilang na-verify sa field (LOD 500)}}.
5. Ang {{ui:Markahan bilang hindi pa na-verify}} at {{ui:Alisin ang mark}} ay bumabalik. Bawat click ay isang hakbang na maaari mong i-undo, para sa buong pinili.

Para mabilis markahan ang isang pinili: {{ui:Mga tool}} › {{ui:Markahan bilang nasuri}} (naka-type: `MARKCHECKED`) minamarkahan ito bilang nasuri mo, ngayon.

## Ano ang dapat mong makita

- Sa plano, ang hindi pa na-verify na elemento ay may dashed box at "?"; ang na-verify sa field ay may tick. I-untick ang {{ui:Ipakita ang verification marks sa plano}} sa seksyong {{ui:Audit}} para itago sila.
- Ang {{ui:Mga Iskedyul}} › {{ui:Beripikasyon}} ay naglilista ng bawat minarkahang elemento kasama ang level, estado, sino, kailan, paano at saan ito galing.
- Inililista ng audit ang mga hindi pa na-verify na elemento, at binibilang ang na-verify sa field bilang LOD 500. Tingnan ang [I-audit ang model](topic:audit-the-model).

## Mula sa scan

Kapag ikinumpara mo ang scan sa model, ang {{ui:Markahan ang mga tumutugmang elemento bilang na-verify sa field}} ay nagmamarka ng bawat elementong nakita ng scan bilang naitayo sa loob ng tolerance, na may method na "scan" at ang tolerance sa note. Tingnan ang [Ikumpara ang scan sa model](topic:compare-scan-with-model).

:::warning
Ang paghahambing na iyon ay itinutugma ang box ng bawat elemento sa scan points. Hindi ito survey. Gamitin ito para sa mga elementong tiningnan mo rin.
:::

## Ang as-built model at ang handover package

{{ui:Buuin ang handover package}} sa tab na {{ui:Mga Asset}} ay naglalagay ng as-built model sa zip, kasama ang:

- isang pahayag sa project kung ilang elemento ang na-verify sa field, nasuri, hindi pa na-verify at walang marka;
- `as-built/verified-elements.csv`: bawat elemento at silid, kasama ang estado, sino, kailan at paano;
- `as-built/as-built-drawings.pdf`: ang drawing set gaya ng kasalukuyan;
- ang drawing changelog, kapag may inilabas nang set ang model.

Tingnan ang [Mga asset at maintenance](topic:assets-and-maintenance).

## Paano ito itinatago sa IFC

Bawat minarkahang elemento ay may dalang property set na `CadCraft_Verification`: State, By, On, Method, Source, Note, at LevelOfDevelopment (`LOD 500` habang na-verify sa field). Plain text properties ang mga ito, kaya nakikita ng ibang programa, at magagamit ang mga ito ng Find, Color by property at mga tag schedule. Ang as-built statement ay ang property set na `CadCraft_AsBuilt` sa project. Ang elementong walang set ay hindi sinukat sa site.

## Susunod

- [Mga pader mula sa set ng plano](topic:walls-from-plans)
- [I-audit ang model](topic:audit-the-model)
