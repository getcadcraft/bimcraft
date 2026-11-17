---
title: Mga elevation, section at sheet
summary: Gumuhit ng section line sa plan, saka buksan ang Sheets para sa print-ready na set na gawa sa model: mga plano ng bawat level, ang apat na elevation, building section, iskedyul at wall framing, may title block at scale, bilang iisang PDF.
keywords: sheets, set ng drawing, construction documents, print, plot, pdf, elevation, elevations, north elevation, section, building section, section line, cut, nakatagong linya, title block, numero ng sheet, scale, 1/4" = 1'-0", 1:50, 1:100, papel, 11x17, 24x36, A3, A1, set para sa permit
from: 91ed0cde
---

## Ano ang gagawin mo

Gumawa ng set ng drawing mula sa model: ang plano ng bawat level, ang north, east, south at west elevation, isang building section para sa bawat section line, ang mga iskedyul ng door, window, room at lumber, at isang elevation ng bawat framed wall. Muling iginuguhit ang set mula sa model sa bawat pagbukas mo nito, kaya laging tugma ito sa itinayo mo.

## Gumuhit ng section line

1. Sa isang level, buksan ang {{ui:Build}} at piliin ang {{ui:Section line}}.
2. I-click kung saan magsisimula at magtatapos ang linya. Ang maikling linya sa gitna nito ay nagpapakita ng gilid na tinitingnan ng section: ang kaliwa ng linya, mula sa unang click patungo sa ikalawa.
3. Lalabas ang linya sa plan kasama ang mga dulo nito at ang letra nito (A, pagkatapos B, at iba pa).

Pumili ng linya para baguhin ito sa **Properties**: ang letra nito, **Baligtarin ang view** para tingnan sa kabilang direksyon, at **Tumingin hanggang** para itigil ang view sa itinakdang layo sa likod ng hiwa (0 ang nagpapakita ng lahat ng nasa likod nito). Pindutin ang {{key:Delete}} para alisin ito.

## Buksan ang mga sheet

1. I-click ang {{ui:Sheets}} sa model bar (katabi ng {{ui:I-print}}).
2. Nakalista sa kaliwa ang mga sheet: **A-101** at pataas para sa mga plano, **A-201** para sa mga elevation, **A-301** para sa mga section, **A-401** para sa mga iskedyul at **S-101** para sa wall framing. I-click ang isa para makita ito.
3. Piliin ang **Papel**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 o A1. Pinananatili ng papel ang karaniwang pangalan nito, at nakasulat ang laki nito sa {{ui:Units}} na pinili mo, halimbawa *Letter · 8.5 × 11 in* o *A3 · 297 × 420 mm*.
4. I-click ang {{ui:I-download ang set bilang PDF}}: isang pahina bawat sheet.

## Mga standard note mula sa regulation pack

Sa isang sheet, pinapayagan ka ng {{ui:Mga standard note}} na maglagay ng mga note mula sa regulation pack (ayon sa disiplina) sa kanang column ng sheet. Pinapanatili ng bawat note ang pack at clause na pinanggalingan nito, at sinasabi ng naka-print na sheet kapag hindi pa beripikado ang pack. Panimulang punto lamang ang mga note: ang taong responsable sa drawing ang nagpapasya kung ano ang sinasabi ng mga ito. Kailangan nila ang Building regulations add-on.

## Ano ang nasa mga sheet

- **Mga plano** ay nagpapakita ng mga pader, door, window, room kasama ang kanilang lawak, dimension at section line, sa pinakamalaking karaniwang scale na kasya: 1/4" = 1'-0" o mas maliit (1:50 o mas maliit sa millimeter).
- **Mga elevation** ay iginuhit mula sa 3D model na tinanggal ang mga nakatagong linya, dalawa sa bawat sheet, lahat sa parehong scale, na may ground line sa ilalim. Ipinapakita ang bubong, pundasyon at lupa gaya ng pagkaka-model sa mga ito.
- **Mga section** ay pinupunan ang nadadaanan ng hiwa (mga pader, sahig, bubong) at iginuguhit ang nakikita sa likod nito.
- **May dalang note ang mga elevation at section:** isang marka para sa bawat level na may pangalan at taas nito sa kanan, ang taas sa pagitan ng mga level sa kaliwa, at sa elevation, ang lapad ng gusali sa ilalim nito at tag (D1, W1) sa bawat door at window sa pader na nakaharap sa iyo. Para sa sariling pader ng isang room, tingnan ang [Mga interior elevation](topic:interior-elevations).
- **Mga iskedyul** ay ang parehong talahanayan ng {{ui:Mga Iskedyul}} sa model bar.
- **Framing** ay nagpapakita ng mga stud, plate, header at sill ng bawat framed wall gaya ng nakikita mula sa labas nito, para mailatag ito ng crew. Tingnan ang [Framing ng mga pader, sahig at bubong](topic:framing).

Bawat sheet ay may title block na may numero nito, pamagat nito, pangalan ng file at petsa.

:::tip
Galing sa model ang mga sheet: para baguhin ang drawing, baguhin ang model at buksan muli ang {{ui:Sheets}}.
:::

:::note
Mga linya at fill lamang ang ipinapakita ng mga elevation at section: hindi pa nagagawa ang mga dimension, level mark at note sa mga ito.
:::
