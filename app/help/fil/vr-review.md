---
title: Suriin ang model sa VR headset
summary: Lakaran ang IFC model sa full size gamit ang VR headset: tumalon, lumingon, sumukat, hiwain ito, maglagay ng BCF issues na may larawan, tingnan ito bilang table-top model, at makilala ang iba sa live na session.
keywords: vr, virtual reality, headset, webxr, xr, immersive, quest, oculus, vive, index, pico, walk through, walkthrough, teleport, design review, coordination, review, measure, section, cut, issue, issues, bcf, table top, scale model, presence, avatars, live, magkasama
from: 8994b36d
---

{{ui:VR}} sa toolbar ay naglalagay sa iyo sa loob ng model gamit ang VR headset, sa full size. Nakatayo ka kung nasaan ang camera ng 3D view, sa sahig sa ilalim nito, nakaharap sa parehong direksyon. Ipinapakita ng headset ang ipinapakita ng 3D view: nananatiling nakatago ang mga nakatagong palapag, elemento at model, at kasama ang mga pininturahang material. Walang ina-upload: iginuguhit ito ng browser sa computer na ito (o sa browser ng headset).

## Ang kailangan mo

- Headset na kayang paandarin ng browser (WebXR): ang sariling browser ng standalone na headset, o Chrome o Edge sa PC na may nakakabit na headset.
- Isang IFC model na bukas, sa secure na pahina (https), gaya ng nasa site na ito.

Kapag walang headset, naka-grey out ang {{ui:VR}} at sinasabi kung bakit.

## Simula

1. Itakda ang 3D view kung saan mo gustong magsimula: sa isang silid, o sa labas na nakatingin sa gusali.
2. I-click ang {{ui:VR}} sa toolbar.
3. Isuot ang headset.

Nasa likod ng kaliwang kamay mo ang menu. Ituro ito gamit ang kanang controller at hilahin ang trigger para pumili ng button. (Kung isang kamay lang, lumulutang ang menu sa harap ng pinagsimulan mo.)

## Gumalaw

- **Tumalon:** sa {{ui:Ilipat}}, ituro ang isang sahig at hilahin ang trigger; mapupunta ka roon. O itulak pasulong ang stick para mag-aim, at bitawan para tumalon. Sa sahig, slab at lupa lang ka maaaring lumapag (mga ibabaw na nakaharap pataas), hindi kailanman sa pader.
- **Lumingon:** itulak ang stick pakaliwa o pakanan: lumilingon ka ng 30° bawat beses.
- **Maglakad:** sa iyong play area, maglakad lang.

## Sumukat

Piliin ang {{ui:Measure}}, saka hilahin ang trigger sa dalawang punto. Ipinapakita ang distansya sa pagitan nila, sa metro. Ang punto malapit sa sulok ay sumasandal sa sulok.

## Hiwain ito

Piliin ang {{ui:Section}} at hilahin ang trigger sa isang ibabaw:

- sa pader (o anumang hindi sahig): tinatanggal ang lahat sa pagitan mo at ng ibabaw na iyon, para makita mo ang loob. Pinakamahusay ito mula sa labas, o sa kabila ng silid;
- sa sahig, mula sa itaas: plan cut na 1.2 m sa ibabaw ng sahig na iyon, para makita ang mas mababang bahagi ng mga pader.

Ang {{ui:Clear}} ang nag-aalis ng hiwa at mga sukat. Kung may [section plane](topic:section-plane) na humihiwa sa model kapag nagsimula ka, magsisimula ang headset kasama nito.

## Maglagay ng issue

Piliin ang {{ui:Issue}} at hilahin ang trigger kung nasaan ang problema. Isang may numerong pin ang nagmamarka dito, at ang issue ay mapupunta sa tab na {{ui:Issues}} bilang BCF topic, kasama ang larawan ng nakita mo at ang camera kung saan ka nakatayo, sa sariling coordinates ng model. I-save ang mga ito kasama ng iba mong [issues](topic:issues-bcf) bilang BCF file; magbubukas ang ibang coordination tool sa parehong view.

Magdagdag ng komento sa issue pagkatapos mong umalis sa VR, sa tab na Issues: hindi pa ginagawa ang pag-type sa loob ng headset.

## Tingnan bilang table-top model

Ang {{ui:Table top}} ay nagpapaliit sa model para magkasya sa mesa sa harap mo; maglakad sa palibot nito, o paikutin ito gamit ang stick. Ibinabalik ka ng {{ui:Full size}} kung nasaan ka dati.

## Kasama ang iba, live

Sa isang [live session](topic:work-live), nakikita ng lahat sa VR ang iba bilang isang ulo at dalawang kamay sa sarili nilang kulay, kasama ang kanilang pangalan, at isang tuldok kung saan sila nakaturo. Ang mga pagbabagong ginagawa ng sinuman ay umaabot sa headset mo sa loob ng saglit. Ang mga taong nasa desk ay hindi pa nakikita sa headset.

## Umalis

Piliin ang {{ui:Umalis sa VR}} (o tanggalin ang headset at tapusin doon). Lumilipat ang 3D view sa screen sa kinaroroonan ng iyong ulo.

:::note
Nasubukan gamit ang headset emulator, hindi pa sa bawat headset. Maaaring mautal ang headset sa malaking model: itago muna ang mga palapag o model na hindi mo kailangan ([hide and isolate](topic:hide-and-isolate)).
:::
