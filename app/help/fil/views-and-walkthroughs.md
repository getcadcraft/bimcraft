---
title: I-save ang mga view at walkthrough
summary: Panatilihin ang mga camera view ng model ayon sa pangalan, bumalik sa mga ito, i-play ang mga ito nang sunod-sunod, at mag-record ng lakad sa loob ng gusali para i-play ulit.
keywords: views, saved views, camera, cameras, viewpoint, scene, scenes, tour, presentation, walkthrough, walk through, fly through, i-record, i-play, path, animation
from: 3af19a36
---

{{ui:Views}} sa toolbar ay nagpapanatili ng mga camera ng 3D view sa file ng model, para ikaw at sinumang ipadala mo rito ay dumiretso sa mga ito.

## I-save ang view

1. Itakda ang 3D view: i-orbit, i-zoom, itago ang ayaw mo.
2. I-click ang {{ui:Views}}, i-type ang pangalan (o itira ang iminumungkahi) at i-click ang {{ui:I-save ang view}} o pindutin ang {{key:Enter}}.

Ang pag-save gamit ang pangalang nasa listahan na ay ina-update ang view na iyon. I-click ang pangalan ng view para bumalik dito; maayos na gumagalaw doon ang camera.

Nagpapalit ng pagkakasunod ang mga arrow, nagpapalit ng pangalan ang lapis, at nagbubura ang bin. Bawat pagbabago ay isang hakbang, kaya ang {{key:Ctrl+Z}} ang nag-u-undo nito.

## I-play ang mga view

Ang {{ui:Patakbuhin ang mga view}} ay lumilipat mula sa isang view patungo sa susunod ayon sa pagkakasunod sa listahan, at huminto ng sandali sa bawat isa. Ang {{key:Esc}} o {{ui:Itigil}} ang nagtatapos dito.

## Mag-record ng walkthrough

1. I-on ang [Walk](topic:walk) at magsimulang maglakad sa loob ng gusali.
2. Sa {{ui:Views}}, i-click ang {{ui:Mag-record ng lakad}}.
3. Maglakad gamit ang {{key:W}} {{key:A}} {{key:S}} {{key:D}} at tumingin sa paligid gamit ang mouse.
4. I-click ang {{ui:Itigil ang pag-record}}. Sine-save ang lakad bilang "Walk 1", kasama ang haba nito.

I-click ang isang lakad para i-play ito ayon sa paglakad mo rito. Ang {{key:Esc}} ang humihinto dito.

## I-render ang walkthrough bilang video

I-click ang film icon sa tabi ng lakad. Gumuguhit ang video dialog ng bawat frame ng lakad gamit ang mga setting ng Render na pinili mo noong huli, sa laki, frame rate at kalidad na pipiliin mo rito. I-save ito bilang WebM o MP4 video, o bilang ZIP na may isang larawan bawat frame. Tumatagal ang frame gaya ng pagtagal ng mga larawan, kaya magsimula sa {{ui:Mabilis}}.

## Mag-narrate ng walkthrough

I-click ang speech-bubble icon sa tabi ng lakad. Magsulat ng isang linya para sa bawat sinasabi, at simulan ang linya sa oras kung kailan ito magsisimula (`12`, `0:12` o `1:02.5`). Ang linyang walang oras ay sumusunod sa linya sa itaas, pagkatapos ng oras na kailangan para sabihin ito. Pumili ng wika, ayon sa wika ng kliyente kung sila ang manonood. Ang {{ui:Preview}} ay nagpe-play ng mga salita gamit ang sariling boses ng computer na ito at ipinapakita ang mga ito bilang subtitles; nangyayari rin ito tuwing tumatakbo ang lakad. Ang {{ui:I-save kasama ng walk}} ay pinapanatili ang narration sa IFC kasama ng lakad.

Ang sarili mong konektadong assistant ay makakasulat ng narration para sa iyo: hilingin dito na tingnan ang lakad at ang mga naka-save na view, at ilalagay nito ang mga linya sa wikang tinukoy mo, bilang isang undo step.

Walang sariling tunog ang na-render na video, dahil hindi kayang i-record ng browser ang sarili nitong boses. I-save ang subtitles (`.srt` o `.vtt`) at idagdag ang mga ito sa video sa iyong video player o editor. Nakadepende sa computer kung aling mga boses ang mapipili mo; ang wikang walang naka-install na boses ay nakakakuha pa rin ng subtitles.

## Sa file

Naka-imbak ang mga view at lakad sa IFC bilang property set na `CadCraft_Views` sa project: plain IFC na binabalewala ng ibang programa. Nasa coordinates ng unang model ang mga ito, kaya tugma pa rin ang mga ito pagkatapos i-reload ang model o magdagdag ng isa pang model.

:::tip
Para mag-render ng larawan mula sa naka-save na view, pumunta sa view, saka i-click ang [Render](topic:render).
:::
