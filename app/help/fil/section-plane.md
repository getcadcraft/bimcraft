---
title: Hiwain ang IFC model gamit ang section plane
summary: Hiwain ang 3D model mula sa itaas, harap o gilid, o panatilihin lamang ang nasa loob ng section box o ng volume ng ilang box na may mga nakahilig na mukha, para makita ang loob; ilipat ang hiwa sa pamamagitan ng pag-drag o pag-type, i-flip ito, at piliin kung ano ang ipinapakita ng hiwa.
keywords: section, section plane, section box, grips, drag, margin, selection box, clip box, cut, clipping, slice, plan cut, floor plan, elevation, loob, interior, flip, offset, section volume, stepped section, L-shaped, tilt, sloping cut, oblique plane, extra plane
from: 6315e71a
---

## Ang gagawin mo

Hiwain ang IFC model gamit ang isang plane para makita ang loob nito: mula sa itaas para sa plano, o mula sa harap o gilid para sa section ng gusali.

## Mga hakbang

1. Magbukas ng IFC model. Tingnan ang [Magbukas ng IFC model at tumingin-tingin sa 3D](topic:open-ifc-model).
2. I-click ang {{ui:Section}} sa toolbar, o pindutin ang {{key:X}}. Hinihiwa ang model sa kalahating taas, at may lalabas na bar sa ilalim ng toolbar.
3. Piliin kung saan hihiwain: {{ui:Itaas}}, {{ui:Harap}} o {{ui:Side}}. Ang Harap at Side ay ini-on rin ang view para tingnan ang hiwa.
4. Ilipat ang hiwa: i-drag ang slider na **Offset**, o i-type ang distansya sa metro sa kahon at pindutin ang {{key:Enter}}. Maaari ka ring mag-type sa millimeters, halimbawa `1200 mm`.
5. I-click ang {{ui:I-flip}} para panatilihin ang kabilang panig ng hiwa.
6. I-click ang isang elemento sa hiwa para makita ang mga property nito.
7. I-click ang {{ui:Naka-off}}, i-click muli ang {{ui:Section}}, o pindutin ang {{key:X}} para alisin ang hiwa.

## Section box

I-click ang {{ui:Box}} sa parehong bar para panatilihin lamang ang nasa loob ng isang box. Ang bawat isa sa {{ui:X}}, {{ui:Y}} at {{ui:Z}} ay may dalawang slider: kung saan nagsisimula at nagtatapos ang box, sa metro mula sa gilid ng model. Nakikita ang mga halaga sa tabi nila.

- Ang {{ui:Kahon sa paligid ng pinili}} ay kinakasya ang box sa paligid ng mga elementong pinili mo at nag-zoom sa mga iyon. Nag-iiwan ito ng 300 mm na espasyo sa bawat gilid; baguhin iyon sa {{ui:Mga setting}} › {{ui:BimCraft}} › {{ui:Espasyo sa paligid ng pinili}}.
- Kapag may mga elementong napili, ang {{ui:Ipakita}} › {{ui:Section box sa paligid ng pinili}} o {{key:Shift+X}} ay gumagawa ng pareho sa isang hakbang, kahit walang hiwa na naka-on.
- Ang **Grips** sa box ay ginagalaw ito gamit ang pointer: i-drag ang parisukat sa gitna ng isang mukha para ilipat ang mukhang iyon, ang nasa gitna ng gilid para ilipat ang dalawang mukhang nagtatagpo roon, o ang nasa sulok para ilipat ang tatlo. Sumusunod ang mga slider. Sa {{ui:Itaas}}, inililipat ng sulok ang box sa plano; sa {{ui:Harap}} o {{ui:Side}}, sa elevation.
- Ibinabalik ng {{ui:Buong model}} ang box sa buong model.
- Ang {{ui:Itaas}}, {{ui:Harap}} o {{ui:Side}} ay bumabalik sa iisang plane.

## Volume ng ilang box, mga nakahilig na mukha at dagdag na plane

Hindi palaging box ang hugis na kailangan mo: isang stepped section, isang L-shaped na pakpak, o hiwa sa kahabaan ng pader na hindi nakahanay sa grid.

1. Sa {{ui:Box}}, i-click ang {{ui:Magdagdag ng box}}. Ang hiwa ay nagpapanatili na ngayon ng nasa loob ng **alinman** sa mga box, kaya ang dalawang box ay bumubuo ng stepped o L-shaped na volume. Ang listahan sa tabi nito ay nagsasabi kung aling box ang binabago ng mga slider ({{ui:Box 1}}, {{ui:Box 2}}…); inaalis ng {{ui:Alisin ang box na ito}} ang napiling box. Hanggang 8 box ang kayang hawakan ng isang volume.
2. Buksan ang {{ui:Tilt at mga plane}} para hubugin ang napiling box:
   - Pumili ng {{ui:Face}} at i-type kung gaano ito nakahilig sa bawat direksyon, sa degrees (hanggang 80). Umiikot ang mukha sa gitna nito; nananatili sa kinalalagyan ng mga slider ang iba pang mukha. Ibinabalik ito ng {{ui:Tuwid}}.
   - Pinuputol ng {{ui:Magdagdag ng plane}} ang box ng isa pang plane. Ang {{ui:Faces}} ay ang direksyon ng nakaharap na bahaging inalis, sa degrees mula X patungong Y; ang {{ui:Slope}} ay kung gaano ito umiikot pataas (0 para sa patayong plane, 90 para sa patag); ang {{ui:Offset}} ay kung gaano kalayo ang plane mula sa gitna ng box, sa metro. Inaalis ito ng ×. Hanggang 6 na dagdag na plane ang kayang hawakan ng isang box.
3. Kung saan humihiwa ang volume sa mga solid, pinupunan ang mga mukha ng hiwa gaya ng dati, pati na sa lugar kung saan nagtatagpo ang dalawang box sa isang step.

:::tip
Kung mawala ang outline at walang matira, walang naiiwan sa loob ng box ang mga tilt o plane; sinasabi ito ng bar. Ibalik nang kaunti ang tilt ng isang mukha o baguhin ang offset ng isang plane.
:::

## Gusaling nakaharap sa site nito

Maraming model ang naglalagay ng gusali sa anggulo sa mga axis ng file (true north, shared coordinates). Kapag nasa anggulo ang mga pader, ang bagong section ay nagsisimulang nakahanay sa gusali: ang {{ui:Harap}}, {{ui:Side}} at ang box ay tumatakbo ayon sa sarili nitong mga pader, at naka-on ang {{ui:Naka-square sa gusali}} sa section bar. I-click ito para sa mga axis ng model, at muli para bumalik (sinasabi ng status line kung gaano kalaki ang pagkakaikot ng gusali). Gamit ang **Mga setting › BimCraft › Gusaling naka-turn sa site nito › Ayon sa pagkakalagay sa site**, ang mga section at view ay nagsisimula sa mga axis ng model sa halip. Tingnan ang [Mga setting](topic:settings).

## Ang dapat mong makita

- Ang **Itaas** ay nagpapanatili ng nasa ilalim ng hiwa, kaya tinitingnan mo pababa sa mga silid. Ang offset ay sinusukat paitaas mula sa ilalim ng model.
- Ang **Harap** ay nagpapanatili ng nasa likod ng hiwa, tinitingnan mula sa harap; ang **Side** ay nagpapanatili ng nasa kabila ng hiwa, tinitingnan mula sa gilid. Ang offset ay sinusukat mula sa harap o gilid ng model.
- Ang manipis na kulay na outline ay nagpapakita kung nasaan ang plane.
- Kung saan humihiwa ang plane sa pader, slab o ibang solid, pinupunan ang mukha ng hiwa ng madilim na kulay, gaya ng iginuhit na section. Ang {{ui:Fill}} sa bar ay nagpapatay at nagpapaandar nito.
- Ang view cube sa kanang-ibabang sulok ay umiikot sa model para tingnan ang hiwa mula sa anumang panig.
- Ang pagpili sa pamamagitan ng pag-click ay pumipili ng nakikita mo: ang anumang naalis na ay hindi mapipili.

## Mga karaniwang pagkakamali

- **Walang nagbago.** Maaaring nasa itaas ng bubong o nasa labas ng model ang hiwa. I-drag ang slider, o i-type ang mas maliit na offset.
- **Bumalik ang offset.** Ang distansyang lampas sa model ay inililipat sa dulo nito, at sinasabi ito ng status line.
- **Ipinapakita ng isang issue ang bahagi lamang ng volume ko.** Ang issue (BCF) ay nagpapanatili ng isang box na may mga nakahilig na mukha at plane nito: ang unang box ng volume. Sinasabi ito ng status line kapag ginawa mo ang issue.
- **Guwang ang hiwa.** Naka-off ang {{ui:Fill}} sa bar: i-click ito para punan ang mga mukha ng hiwa ng mga pader, slab at ibang solid.
- **Batik-batik o may nawawalang piraso ang punong hiwa.** Nangangailangan ng saradong solid ang pagpuno; ang elementong hindi sarado ang hugis sa file (isang manipis na sheet, dahon ng puno) ay hindi pinupunan sa halip na pinipinturahan. Ang elementong binubuo ng mga bahaging magkaibang kulay (isang frame at ang salamin nito) ay napupuno kapag nagdikit ang mga bahagi nito.
- **Nasaan ang section bar?** Nasa itaas ito ng 3D view na hinihiwa nito: sa 3D na kalahati sa {{ui:I-split}}, at sa ilalim ng drawing bar sa {{ui:Plan}} lamang. Sa maikling view, nagsa-scroll ito.

## Susunod

- [Ipakita at itago ang mga storey, space at edge](topic:storeys-and-spaces)
- [Tingnan ang DWG o DXF drawing sa 3D](topic:dwg-in-3d) — ang mga drawing sa 3D ay may parehong section plane
