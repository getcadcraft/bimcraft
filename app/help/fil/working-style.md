---
title: Working style, mga na-duplicate na view, pen sa papel, Report as at mga template
summary: Piliin kung paano kikilos ang BimCraft sa paraan mo ng pagtatrabaho, i-duplicate ang anumang view bilang sariling kopya o naka-link, panatilihin ang pen override sa file at mag-print gaya ng nakikita o sa pamamagitan ng pen table, iulat ang element bilang ibang IFC class, at magsimula ng mga project mula sa sarili mong template.
keywords: working style, i-duplicate ang view, duplicate, kopyahin ang view, dependent view, linked view, sariling kopya, kopya ng view, pen overrides, pens, line weights, mag-print gaya ng nakikita, pen table, plot style, ctb, monochrome, grayscale, report as, ifc class, i-reclassify, predefined type, generic model, slab bilang road, wall bilang panel, roof bilang ramp, project template, template, bagong mula sa template, save as template, office standard
from: 231d98b0
---

## Ano ang gagawin mo

I-set up ang BimCraft para sa paraan mo ng pagtatrabaho, i-duplicate ang mga view, i-print ang mga ito ayon sa inaasahan mo, bilangin ang mga element ayon sa tunay nilang uri, at simulan ang bawat project mula sa template ng opisina mo.

## Pumili ng working style

1. Buksan ang {{ui:Settings}} at ang tab na {{ui:BimCraft}}. Hanapin ang {{ui:Working style}}.
2. Pumili ng isa:
   - {{ui:Each view its own}} (ang unang pagpipilian): kinokopya ng na-duplicate na view ang mga annotation nito at nananatili ang mga ito sa view na iyon; nagpi-print ang mga sheet gaya ng nakikita sa screen.
   - {{ui:Shared annotations and pen tables}}: nagbabahagi ng annotation ang mga na-duplicate na view; dumadaan sa pen table ang pag-print.
3. Sa ibaba ng pagpipilian ay ang apat na bagay na itinatakda nito. Baguhin ang alinman nang mag-isa; magiging {{ui:Custom}} ang nakasulat na style.

Nakatago ang working style sa browser na ito, gaya ng layout ng workspace. Dinadala ito ng template sa mga bagong model.

## I-duplicate ang view

1. Sa {{ui:Project browser}}, bawat floor plan, ceiling plan, callout, elevation at section ay may {{ui:Duplicate}} button (dalawang sheet).
2. Pangalanan ang kopya at piliin kung paano ito kikilos:
   - {{ui:Own copy}}: kinokopya ang drafting, dimension, crop, nakatagong element at pen nito at nananatiling kanya. Walang nagbabago sa isa kapag ine-edit ang alinman sa dalawang view, kaya nananatili sa dating anyo ang view sa na-issue na sheet.
   - {{ui:Linked}}: ipinapakita nito ang parehong view na may iisang set ng annotation at settings.
3. Nakalista ang kopya sa ilalim ng {{ui:Duplicated views}}. I-click ito para buksan; sinasabi ng bar sa itaas ng plan na kopya ito, na may {{ui:Up}} pabalik sa view nito.
4. Ang slider button nito ay nagbubukas ng settings nito: ang pangalan, {{ui:View range}} (may sariling view range ang own copy), {{ui:Make own copy}} para sa linked, at {{ui:Delete}}.

Ang mga kopya ng elevation at section ay napupunta sa sarili mong sheet, gaya ng mga view na pinanggalingan nila. Isang hakbang lang sa undo ang pag-duplicate, at nananatili ang mga kopya sa IFC kasama ng mga callout.

## Mga pen na nakatali sa view, at naka-print gaya ng nakikita

1. I-on ang {{ui:Draw}} at piliin ang {{ui:Pens}}.
2. Ang {{ui:For}} ngayon ay naglilista ng bawat kategorya: mga pader, pinto at bintana, slab, bubong, column, hagdan, muwebles at ang iba pa, at drafting at dimension.
3. Itinatago ng {{ui:Apply}} ang pen sa IFC kasama ng view na nakikita: plan, ceiling plan, callout o na-duplicate na view. Ang mga pen na ginawa bago ang 0.9 ay nasa browser; inililipat ito ng {{ui:Keep these in the file}}.
4. Iginuguhit ng mga sheet at ng PDF ang bawat pen gaya ng nakikita sa screen.

Para mag-print sa pamamagitan ng pen table, itakda ang {{ui:Print}} sa row ng Pens sa {{ui:Through a pen table}}, tapos pumili ng table (kulay, monochrome, grayscale) o {{ui:Edit pen table…}}: bawat kulay ay nakukuha ang kulay, kapal at screening na ipi-print nito. Plot style file ng CadCraft ang table, kaya tinatanggap ng {{ui:Import…}} ang table na ginawa sa CadCraft app at ibinabalik ito ng {{ui:Export}}. Pinapanatili ng model ang pagpili nito; kapag wala, ang working style ang nagpapasya.

## Iulat ang element bilang ibang class

Slab na iginuhit bilang kalsada, pader na ginamit bilang panel, bubong na hinubog bilang ramp: panatilihin ang tool na ginamit mo sa pagguhit at iulat ito bilang kung ano talaga ito.

1. Piliin ang element at buksan ang {{ui:Properties}}. Buksan ang {{ui:Report as}}.
2. Mag-type sa search box para hanapin ang class na angkop sa hugis, piliin ito at ang predefined type nito. Para sa sarili mong uri, piliin ang USERDEFINED at bigyan ito ng pangalan.
3. {{ui:Apply}} (isang hakbang sa undo). Iniuulat ulit ng {{ui:Clear}} ang element bilang ginuhit.

Ine-edit mo pa rin ito gamit ang tool na ginamit sa pagguhit. Isinusulat ng na-save na IFC ang element bilang iniulat na class, kaya binibilang ito ng ibang programa, ng takeoff ng {{ui:Quantities}}, ng Find, Color by, model checks at ng {{ui:Problems}} bilang ganoon. Hindi isinasama ng mga schedule ang pader na iniulat bilang panel sa walls schedule, at inililista ng {{ui:Elements by reported class}} ang bawat isa. Gumagana ito sa IFC4 at IFC2X3 na file; ang listahan ay nag-aalok lamang ng mga class na tugma sa bersyon ng IFC ng file. Ang pinto, bintana, hagdan, kuwarto at level ay nananatili sa sarili nilang class.

## I-save ang project bilang template, at magsimula mula rito

1. Habang bukas ang project, i-click ang {{ui:Save as template}} sa tabi ng {{ui:Save}}.
2. Pangalanan ito. Lagyan ng tsek ang {{ui:Also download the template file}} para ibahagi ito bilang IFC file, at ang {{ui:Start new models from it}} para gawin itong default mo.
3. Pinapanatili ng template ang mga level, view template at view setting, mga na-duplicate na view at callout, drafting, pen at pen table, tag, family at type, sheet, laki ng sheet, title block at ang working style. Hindi isinasama ang mga pader, sahig, pinto at ang iba pang model element.
4. I-click ang {{ui:New building}} at piliin ito sa ilalim ng {{ui:Start from}}, o piliin ang {{ui:A template file…}} para sa template na ipinadala sa iyo. Nakakakuha ang bagong project ng sarili nitong pangalan at sariling project identity; ang iba ay ayon sa pagkakalagay sa template.

:::note
Nakatago ang mga template sa browser na ito. Hindi pa tapos ang team template na ibinabahagi sa pamamagitan ng CadCraft Studio: ipadala na lang ang template file.
:::
