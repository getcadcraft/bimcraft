---
title: Maglagay ng larawan sa ilalim ng plano
summary: Maglagay ng PNG, JPEG o WebP na larawan (scanned plano, sketch, litrato ng site, aerial) sa ilalim ng plano ng isang level o sa vertical plane, i-scale ito gamit ang dalawang punto, ilipat, pihitin, palabuin at i-lock, makita ito sa 3D at sa plano PDF, at panatilihin itong kasama ng model sa isang bundle.
keywords: larawan, picture, image, background, PNG, JPEG, WebP, scan, sketch, litrato, aerial, site plan, scale, opacity, lock, underlay, trace
from: e3c78d1f
---

## Maglagay ng larawan

I-on ang {{ui:Draw}}, pumunta sa level, at piliin ang {{ui:Picture}} sa menu na {{ui:Build}}. Pagkatapos piliin ang {{ui:Insert picture…}} at pumili ng PNG, JPEG o WebP na file. Binabasa ito sa browser mo at hindi kailanman ina-upload. Lumalabas ito sa ilalim ng plano, kasya sa view, at sinasabi ng toolbar na hindi pa ito na-scale. Nasa ibabaw nito ang lahat ng iginuhit mo.

## Itakda ang scale

Piliin ang {{ui:Scale}}, i-click ang dalawang punto sa larawan na alam mo ang totoong distansya (dalawang dulo ng pader sa scanned na plano, dimensyon na nakaprint sa sketch), pagkatapos i-type ang distansya at pindutin ang {{key:Enter}}. Lumalaki o lumiliit ang larawan sa paligid ng unang punto na na-click mo. Kinakansela ito ng {{key:Esc}}.

## I-paste ang kinopyang area

Sa MarkupCraft, kinokopya ng {{ui:Copy area}} ang bahagi ng PDF sheet bilang larawan. Pagbalik sa BimCraft, habang nakikita ang plano ng level, pindutin ang {{key:Ctrl+V}} (o ang {{ui:Paste}} sa menu na {{ui:Edit}}): ang area ay lumalapag sa plano bilang larawan, nakasentro kung nasaan ang pointer (o sa gitna ng view). Kapag may drawing scale ang sheet, papasok ito sa totoong laki nito, kaya tugma ang haba ng pader dito sa mga pader mo. Kung wala, papasok ito sa laki ng papel at magsisimula ang {{ui:Scale}}, para maki-click mo ang dalawang punto at ma-type ang distansya nila. Ang area na kinopya bilang overlay ay magsisimula sa opacity na kinopyahan dito. Isa itong undo step at nananatili tulad ng ibang larawan.

Kinukuha ng {{ui:Paste}} ang alinman sa huli mong kinopya: isang kinopyang area, o isang bagay na kinopya mo sa BimCraft. Pinapaste rin ng {{key:Ctrl+V}} ang anumang iba pang PNG, JPEG o WebP na larawan sa clipboard mo, na inilalagay gaya ng {{ui:Insert picture…}} at hindi pa na-scale. Naaalala ang kinopyang area nang anim na oras.

## Ilipat, pihitin, palabuin, i-lock

Ang {{ui:Move}} ay kumukuha ng base point sa larawan at pagkatapos ng lugar kung saan ito dapat pumunta. Ang {{ui:Turn}} ay kumukuha ng anggulo sa degrees, sa paligid ng gitna ng larawan. Pinapalabo ng {{ui:Opacity}} ito para tumingkad ang mga linya mo. Pinipigilan ng {{ui:Lock}} itong gumalaw habang gumuguhit ka; nagpapahintulot pa rin ang naka-lock na larawan na baguhin ang opacity nito at itago ito. Isang undo step ang bawat pagbabago.

## Maraming larawan, maraming level

Nabibilang ang larawan sa level kung saan ito inilagay, at lumalabas ito sa plano ng level na iyon at sa ceiling plan. I-click ang larawan para magtrabaho rito, o piliin ito sa listahan. Pinapatay ng {{ui:Hide}} ito nang hindi inaalis; inaalis ito ng {{ui:Remove}} (o ng {{key:Delete}}) sa model.

## Mga larawan sa 3D view

Nakatayo rin ang bawat larawan sa 3D view bilang flat na plane: ang larawan sa plano ay nakahiga sa level nito, ang larawan sa vertical plane ay nakatayo sa ibabaw ng section line nito. Iginuguhit ito sa ibabaw ng model nang hindi natatakpan ito, at tinatago ng model ang bahagi ng larawang nasa likod nito. Ang nagsasapawang larawan ay inaayos ayon sa distansya. Gumagana nang pareho ang Opacity, Hide, Lock at Remove, at ang {{ui:Show in 3D}} ay pinapatay ang lahat ng plane sa 3D view lang. Hanggang 8 larawan lang ang puwede sa isang level, para mabilis ang mga view.

## Larawan sa vertical plane

Sa ilalim ng {{ui:Place on}}, piliin ang {{ui:A vertical plane (section line)}}, pagkatapos {{ui:Insert picture…}}. I-click ang dalawang dulo ng linya sa plano (kumakapit ang dulo ng mukha ng pader), o pumili ng pinangalanang section line ng level sa {{ui:Over a section line}} at hindi na kailangan ng click. Nakatayo ang larawan sa level sa ibabaw ng linyang iyon, kasing lapad ng linya. Itakda ang {{ui:Width}}, ang lugar nito {{ui:Along the line}} at ang {{ui:Height above level}} sa pamamagitan ng pag-type; pinipihit ito ng {{ui:Turn}} sa sarili nitong plane. Hindi iginuguhit sa ilalim ng plano ang vertical na larawan; ipinapakita ng plano ang linya nito habang ginagawa mo ito. Walang interactive na 2D section window ang BimCraft: iginuguhit ang mga section at elevation sa mga sheet, at hindi pa naipiprint ang mga larawan sa mga sheet view na iyon.

## Pag-print

Ang {{ui:Print view}} sa isang plano ay isinusulat ang mga larawan ng level sa PDF sa ilalim ng drawing, sa tamang scale, pihit at opacity nito, na nakaclip sa sheet; nananatiling wala ang nakatagong larawan. Diretsong inilalagay ang JPEG; ang ibang larawan ay ibinababa muna sa 200 dpi sa sheet.

## Kasama ng model

Hindi isinusulat ang bytes ng larawan sa teksto ng IFC. Tinutukoy ng model ang bawat isa sa pangalan (isang IfcDocumentReference gaya ng pictures/<id>.png) at dinadala ang bytes sa project bundle. Gamitin ang {{ui:Save as bundle…}} (o ang {{ui:Save as IFC}} at piliin ito): makakakuha ka ng isang .ccbundle na file na may model at mga larawan nito; maliit ang IFC, at mabilis ang mga pag-edit. Buksan ang .ccbundle at bumabalik ang mga larawan.

Ang plain na .ifc ay hindi kayang humawak ng larawan nang hindi nagiging malaki. Kapag nag-save ka ng isa, sinasabi ng BimCraft kung ilang larawan ang nakatago sa labas nito at nag-aalok ng bundle, o ng plain IFC na nagbabaon ng mga larawan hanggang 512 KB at iniiwan ang iba. Ang plain na .ifc na binuksan nang walang bundle nito ay nagpapakitang nawawala ang mga larawang iyon at inililista ng Problema ang mga ito; buksan ang .ccbundle kung saan sila na-save. Nabubuksan pa rin ang mga file na na-save ng unang bersyon, na nasa loob ng IFC ang larawan, at inililipat ng bundle save ang mga larawan nila palabas. Pinapanatili ang larawan gaya ng dati hanggang 6 MB; ang mas malaki ay pinapaliit muna, at sinasabihan ka. Binubuksan ng ibang program ang model at binabalewala ang mga larawan. Ang larawang hindi mo pa na-scale ay nakalista sa Problema bilang tala.

## Sa mga section at elevation sheet

Ang larawan sa vertical plane (piliin ang {{ui:Patayo}} sa panel ng larawan at i-click ang dalawang dulo ng linya, o ilagay ito sa ibabaw ng pinangalanang section line) ay iniprint sa mga sheet view na direktang nakaharap dito. Ipinapakita ng section ang larawang nakatayo sa cut line nito, o ang inilagay sa ibabaw ng section line na iyon sa pangalan. Ipinapakita ng elevation ang bawat vertical na larawang nakaharap ang plane nito rito. Iginuguhit ang larawan sa ilalim ng mga linya ng view, sa scale ng view, nakaclip sa view, at pinapanatili ang opacity nito. Buksan ang {{ui:Sheet…}} para makita ito; dala ng sheet PDF ang larawan bilang image. Kapag tiningnan mula sa likod, naka-mirror ang larawan, gaya ng sa 3D. Hindi kasama ang mga nakatagong larawan.
