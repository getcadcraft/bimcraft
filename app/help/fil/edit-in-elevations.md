---
title: I-edit sa elevations at sections, laki ng sheet, title blocks at pagpapalit ng pangalan
summary: Ilipat ang mga pader, pinto, bintana at level, at gumuhit ng mga pader, opening, level, dimension at tala nang direkta sa isang elevation o section; panatilihin ang sarili mong laki ng sheet at title block bilang data, at palitan ang pangalan ng mga family, laki at elemento mula sa project browser.
keywords: bagong level sa elevation, dimension sa elevation, i-edit sa elevation, i-edit sa section, elevation view, section view, ilipat ang pader sa elevation, window sill, taas ng level, i-drag ang level, gumuhit ng pader sa section, tala sa elevation, annotation, laki ng sheet, custom sheet size, paper size, title block, template ng title block, sheet format, border, fields, client, drawn by, revision, palitan ang pangalan ng family, palitan ang pangalan ng type, palitan ang pangalan ng elemento, project browser
from: 8726cf83
---

## Ano ang gagawin mo

Baguhin ang gusali kung saan mo ito nakikita mula sa gilid, itakda ang mga sheet na ginagamit ng opisina mo, at bigyan ng pangalang gusto mo ang mga family, laki at elemento.

## I-edit sa isang elevation o section

1. I-on ang {{ui:Draw}}. Sa {{ui:Project browser}}, buksan ang {{ui:Elevations}} o {{ui:Sections}}.
2. I-click ang pencil button na {{ui:Edit in this view}} sa isang row. Bumubukas ang view gaya ng pagguhit dito ng mga sheet, kasama ang mga maaari mong baguhin sa ibabaw.
3. Gamit ang {{ui:Select and move}}:
   - i-drag ang isang pader na nakaharap sa view kasunod nito;
   - i-drag ang pinto o bintana sa kahabaan ng pader nito, at ang bintana pataas o pababa para palitan ang sill nito;
   - i-drag ang linya ng isang level pataas o pababa para palitan ang taas nito;
   - i-drag ang isang tala.
4. {{ui:Door}} at {{ui:Window}}: i-click sa isang pader kung saan ito pupunta (ang bintana ay nasa taas na iyong i-click).
5. {{ui:Wall}} (sa sections): i-click kung saan ito magsisimula at kung saan magtatapos sa eroplano ng section; iginuguhit ito sa level sa ilalim ng unang click mo, hanggang sa susunod na level.
6. {{ui:Note}}: i-click at magsulat. Nakatago ang mga tala sa file at iginuguhit sa bawat sheet na nagpapakita ng view.
7. {{ui:Level}}: i-click sa taas kung saan pupunta ang bagong level. Kasing-taas ito ng agwat hanggang sa level sa itaas (3000 mm sa pinakataas); i-drag ang linya nito para palitan ang taas. Hindi tinatanggap ang ikalawang level na wala pang 50 mm mula sa isa pa.
8. {{ui:Dimension}}: i-click kung saan ito magsisimula at kung saan magtatapos. Sumasalo ang mga click sa mga gilid ng pader, pinto, bintana at level, at pahalang o patayo ang dimension, depende sa direksyon ng galaw mo. Nakatago ito sa file at iginuguhit, kasama ang haba nito, sa bawat sheet na nagpapakita ng view. I-click ito gamit ang {{ui:Select and move}} para piliin ito.
9. Binubura ng {{ui:Delete}} o ng Delete key ang napiling pader, pinto, bintana, dimension o tala. Binabawi ng Ctrl+Z ang huling pagbabago habang bukas ang panel. Bumabalik ang Esc sa {{ui:Select and move}}.

Ang bawat pagbabago ay kapareho ng pagbabagong ginagawa ng plan, isang undo step: sumusunod dito ang plan, ang 3D view at ang mga sheet.

## Laki ng sheet at title blocks

1. Magbukas ng sheet ({{ui:New sheet}}, o isa sa sarili mo sa ilalim ng {{ui:Sheets}}). Sa tabi ng {{ui:Paper}} ay ang {{ui:Title block}} at {{ui:Formats…}}.
2. Nakalista sa {{ui:Paper}} ang bawat karaniwang laki (Letter hanggang Arch E, A4 hanggang A0) at ang sarili mo.
3. {{ui:Title block}}: {{ui:Strip (bottom)}}, {{ui:Column (right)}} na may karaniwang fields, o sarili mo. Ipinapakita sa ilalim ng pangalan ng sheet ang fields ng napili mo: i-type ang client, sino ang gumuhit, at ang revision.
4. Ginagawa ng {{ui:Formats…}} ang sarili mo: laki ng sheet (pangalan, lapad, taas, border) at title block (kung saan ito pupunta, lapad nito, mga field nito, isa bawat linya; tapusin ang field sa * para gawin itong malaki).
5. Sine-save ng {{ui:Export}} ang mga ito bilang library file, at idinadagdag ng {{ui:Import…}} ang isa sa ibang model. Nakatago ang mga ito sa model, kaya dinadala ng template ang mga ito.

## Palitan ang pangalan ng family, laki at elemento

1. Sa {{ui:Project browser}}, buksan ang {{ui:Families}}.
2. Ang lapis sa tabi ng family ay nagpapalit ng pangalan nito; kinukuha ng type ng bawat laki ang bagong pangalan.
3. Buksan ang mga laki ng family para palitan ang pangalan ng laki, o ng elementong inilagay mula rito (hanggang 40 sa bawat laki ang nakalista).

Ang bawat pagpapalit ng pangalan ay isang undo step.
