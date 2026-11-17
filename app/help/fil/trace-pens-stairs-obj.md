---
title: I-trace ang isang level, itakda ang pens bawat view, gumuhit ng stair mula sa sketch, magbukas ng OBJ
summary: Ipakita ang ibang level na naka-dashed sa ilalim ng plano at ihanay ito, bigyan ang mga pader, pinto at bintana ng sariling pen sa isang view, gumuhit ng walking line para makakuha ng stair, at magbukas ng Wavefront OBJ mesh.
keywords: trace reference, ghost, underlay, pen, kapal ng linya, uri ng linya, override, stair, sketch, landing, OBJ, mesh, import, Wavefront
from: 333ebbde
---

## I-trace ang isang level

Piliin ang {{ui:Trace}} sa menu na {{ui:Build}}, saka isang view sa listahan: plano ng ibang level, ceiling plan ng isang level o callout (hiwa sa crop nito). Ipapakita ang mga pader, column at floor nito na naka-dashed sa ilalim ng planong iginuguhit mo. Ilipat ito sa pag-click ng base point sa reference at saka kung saan dapat pumunta ang puntong iyon, o mag-type ng X, Y at anggulo (umiikot ito sa sarili nitong sentro). Ibinabalik ito ng {{ui:Reset}}, inaalis ito ng {{ui:Hide}}. Reference lang ito: walang pumipili rito, hindi ito naiprint, at hindi ito naka-save sa IFC. Tinatandaan ito ng BimCraft para sa bawat level sa browser na ito.

## Pens bawat view

Piliin ang {{ui:Pens}}. Sabihin kung para saan ang pen: lahat ng pader, lahat ng pinto, lahat ng bintana, ang uri ng napiling element, o ang mga napiling element. Pumili ng kapal, linya (solid, dashed, dotted) at kulay, saka {{ui:Apply}}. Para lang sa plano ng level na ito ang pagbabago. Mas nananaig ang pick kaysa sa type, at mas nananaig ang type kaysa sa buong kategorya. Inaalis ang mga ito ng {{ui:Clear all}}. Naka-save ang mga ito sa browser na ito. Lagyan ng tsek ang **Pen colours in 3D** para ipinta ang mga kulay na pen sa model sa 3D view (ang kapal o dash ay sa linya, kaya kulay lang ang makikita roon); alisan ng tsek para bumalik. Iginuguhit ng {{ui:Print}} ang mga ito sa PDF ng plano: sumusukat ang kapal ayon sa screen (ang default na wall pen na 1.75 pixels ay 0.5 mm), nananatiling dash ang mga dash, at naiprint ang kulay sa halaga nito ayon sa paper theme.

## Stair mula sa sketch

Piliin ang {{ui:Sketch stair}} at i-click ang mga sulok ng walking line, simula sa pinakamababang hakbang. Ang isang linya ay tuwid na stair, ang dalawang linyang nagtatagpo sa tamang anggulo ay L, at ang tatlong linya (pataas, pahalang, pabalik) ay U. Pindutin ang {{key:L}} para gumuhit ng landing: i-click ang mga sulok nito at pindutin ang {{key:Enter}}, at ang maikling gilid nito ang magtatakda ng lapad ng stair. Pindutin ang {{key:Enter}} para ilagay ang stair. Kinukwenta ang bawat tread mula sa haba ng iyong linya at sa bilang ng riser na kailangan ng taas. Pagkatapos nito, ordinaryong stair na ito: baguhin sa Properties, at susunod ang stairwell at handrails.

Lagyan ng tsek ang **Make it a family** sa row ng tool (o pindutin ang {{key:F}}) bago ang {{key:Enter}} para ilagay ang stair bilang family sa halip (tuwid, L o U na stair). Pumapasok ito bilang isang element at nagbubukas sa family editor na may lapad, tread, kabuuang taas, mga tread sa bawat flight at ang puwang ng U bilang mga parameter, kaya maaari kang magdagdag ng sukat, plan symbol o hotspot. Sumusunod dito ang mga hakbang at ang taas ng riser. Walang handrails o stairwell ito: nabibilang ang mga iyon sa ordinaryong stair.

## Magbukas ng OBJ

Buksan ang `.obj` file gaya ng anumang file. Walang units ang OBJ, kaya binabasa ng BimCraft ang metro na may Y pataas, gaya ng karaniwang pagsulat ng karamihan sa mga program. Bawat object o group ay nagiging isang mesh element sa iisang level, at maaari mo na itong tingnan, sukatin, hiwain bilang section, ilagay sa isang model, at i-save bilang IFC. Hindi kasama ang mga linya, kurba at surface, at sinasabi ito ng status line.

Ang object na eksaktong straight prism (saradong mesh na may dalawang magkatulad at magkaparehong dulong mukha at mga patag na gilid na patayo sa mga ito: slab, poste, wall block, plato na may butas) ay sine-save sa IFC bilang sariling extruded solid ng IFC na may outline at lalim, hindi bilang listahan ng triangle. Binabasa ito ng ibang program bilang tunay na solid, maliit ang laki nito, at maaaring baguhin ang lalim at outline nito sa hinaharap. Sinasabi ng status line kung ilang object ang naipasok nang ganoon. Anumang hindi eksaktong prism (hugis na patulis, mesh na may isang vertex na nagalaw, mesh na may puwang) ay nananatiling triangle. Binabasa rin sa ganitong paraan ang STEP file.
