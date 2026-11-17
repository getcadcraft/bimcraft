---
title: Bubong: pitch para sa bawat pader, gable, shed at roof plane
summary: Itakda ang bawat pader sa ilalim ng bubong bilang pitched, gable end o none, gamitin ang hip, gable at shed presets, itaas ang bubong gamit ang plate height, magdagdag ng fascia at soffit, at gumuhit ng hiwalay na roof plane kung saan hindi bagay ang awtomatikong bubong.
keywords: baguhin ang bubong, i-edit ang bubong, napiling bubong, roof properties, undo roof, roof, pitch, bawat pader, gable, gable end, shed, lean-to, hip, valley, ridge, plate height, heel, fascia, soffit, eave, rake, overhang, roof plane, porch roof, dormer, gable dormer, shed dormer
from: 096084a7
---

## Ang gagawin mo

Hubugin ang bubong mula sa mga pader sa ilalim nito. Bawat pader ay may sariling setting, kaya ang isang bubong ay maaaring hip sa harap, gable sa mga dulo, at humihinto nang patag sa mas matangkad na pader sa likod. Para sa porch o anumang mukha na hindi kayang gawin ng awtomatikong bubong, gumuhit ng roof plane sa pamamagitan ng mga sulok nito.

## Maglagay ng bubong

1. Sa level na may mga pader na sumusuporta sa bubong, i-click ang {{ui:Roof}}.
2. I-type ang **Pitch** (`6/12`, o degrees gaya ng `30`) at ang **Overhang**.
3. Pumili ng preset: **Hip roof**, **Gable sa maiikling gilid**, **Gable sa mahahabang gilid**, o **Shed** (ang gilid na pinakamalapit sa pointer ang mababang eave; ang ibang gilid ay gable end).
4. Iwanang naka-tsek ang **Fascia at soffit** para sa nakakahong eave na may fascia board, o alisan ng tsek para sa hubad na gilid ng bubong.
5. Pumindot sa loob ng gusali: lumalabas sa plano ang eave, ridge, hip at valley. I-click.

Gumagana ang anumang outline: L, T, U at plus na hugis, anggulong sulok, at mga notch. Natutukoy ang hip, ridge at valley kung saan nagtatagpo ang mga roof plane.

## Isang pader sa bawat pagkakataon

Piliin ang bubong (sa level sa ibabaw ng mga pader, i-click sa loob ng outline nito) at tingnan ang ilalim ng **Bawat pader** sa **Properties**. Kapag tumuro ka sa isang row, namamarkahan ang pader na iyon sa plano.

- **Pitched**: may nakahilig na roof plane sa ibabaw ng pader. I-type ang sarili nitong pitch sa tabi nito, halimbawa `12/12` para sa matarik na dulo sa bubong na `6/12`.
- **Gable end**: humihinto ang bubong sa patayong dulo sa ibabaw ng pader na iyon, pinupuno ang pader hanggang sa bubong, at lumalampas ang bubong dito ayon sa **Gable overhang**.
- **None (tumitigil nang patag)**: humihinto ang bubong sa pader na iyon nang walang overhang at walang gable wall, para sa bubong na nakatapat sa mas matangkad na pader.

Itinatakda ng listahang **Mga dulo** sa itaas ang bawat pader nang sabay-sabay; lumalabas ang **Itakda kada pader** kapag hindi na tumutugma ang mga pader sa isang preset.

## Baguhin ang bubong na nailagay mo na

Piliin ang bubong at ipinapakita ng **Properties** ang parehong setting ng Roof tool: **Pitch**, **Overhang**, **Gable overhang**, **Plate height**, **Fascia height**, **Boxed eaves** at **Thickness**. Agad lumilitaw ang bawat pagbabago sa plano at sa 3D, may kaparehong tsek ng tool (tinatanggihan ang pitch na 80 degrees o higit pa, at gayundin ang setting na hindi makagawa ng bubong). I-type ang value at pindutin ang {{key:Enter}}, o umalis sa kahon.

Isang undo step ang bawat pagbabago. Ang maraming pagbabago sa iisang kahon, isa-isa (i-type ang `6/12`, saka `7/12`, saka `8/12`), ay nagsasama sa isang step, kaya isang {{key:Ctrl}}+{{key:Z}} ang nagbabalik sa dating bubong bago ang serye; ang pagbabago sa ibang kahon ay nagsisimula ng bagong step.

## Plate height, fascia at soffit

- **Plate height** ay kung saan nagtatagpo ang mga roof plane sa labas ng mga pader, sinusukat mula sa sahig ng level. Iwanang blangko para umupo ang bubong sa ibabaw ng mga pader; mag-type ng mas malaking value para sa itinaas na heel.
- **Fascia height** ay ang board sa kahabaan ng eave at pataas sa rake. I-type ang `0` kung wala.
- **Boxed eaves** ay naglalagay ng level na soffit sa ilalim ng bawat eave, mula sa pader hanggang sa likod ng fascia.

Nagtatagpo ang bawat plane sa pader nito sa plate height, kaya ang mga pader na magkaiba ang pitch ay nananatili sa iisang plate line, at nagtatapos ang kanilang mga eave sa magkakaibang taas, gaya ng pagkakabuo nito sa frame.

## Gumuhit ng roof plane

1. Sa level kung saan nakapatong ang plane, buksan ang {{ui:Build}} at piliin ang {{ui:Roof plane}}.
2. I-type ang **Pitch** at, kung hindi ito ang tuktok ng mga pader, ang **Eave height**.
3. I-click ang mga sulok. Ang unang gilid na iginuhit mo ay ang eave; ang plane ay tumataas mula dito patungo sa natitirang hugis.
4. I-click muli ang unang sulok, mag-double-click, o pindutin ang {{key:Enter}} para tapusin. Inaalis ng {{key:Esc}} ang mga sulok.

Hindi sumusunod sa mga pader ang roof plane. Piliin ito sa level sa itaas (i-click sa loob nito) para baguhin ang pitch, eave height o thickness nito, o pindutin ang {{key:Delete}} para alisin.

## Magdagdag ng dormer

1. Ipakita ang level kung nasaan ang bubong.
2. Buksan ang {{ui:Build}} at piliin ang {{ui:Dormer}}.
3. Sa options row, piliin ang **Uri ng dormer** (**Gable** o **Shed**) at itakda ang **Lapad**, **Front wall** (taas ng front wall mula sa tuktok ng bubong hanggang sa eave ng dormer), **Pitch** at **Overhang**.
4. I-click sa mukha ng bubong kung saan dapat ang gitna ng harap ng dormer.

Ginagawa ng BimCraft ang front wall, dalawang cheek wall at bubong ng dormer, at pinapatakbo ito pabalik hanggang magtagpo sa bubong. Ang gable dormer ay may dalawang plane na nagtatagpo sa isang ridge. Ang shed dormer ay may isang plane na dapat mas patag kaysa sa bubong. Inaalis ang bubong sa ilalim ng dormer. Sumusunod ang dormer sa bubong kapag gumalaw ang mga pader.

Piliin ito para baguhin ang uri, lapad, front wall, pitch o overhang nito sa **Properties**. Inaalis ito ng {{key:Delete}} at muling sinasara ang bubong. Dapat itong magkasya sa iisang mukha ng bubong, malayo sa hip, valley at ridge, at tanging ang mga bubong na ginawa gamit ang {{ui:Roof}} tool ang tumatanggap ng dormer, hindi ang mga roof plane na iginuhit nang kamay. Hindi pa naitatayo: ang bintana sa harap ng dormer, at ang mga dormer sa roof plane na iginuhit nang kamay.

## Ano ang sine-save

Ang mga bubong ay IFC roof na binubuo ng isang roof slab bawat plane, mga gable wall, isang fascia member at isang soffit covering. Dala ng bubong ang haba ng ridge, hip, valley, eave at rake nito, at ang mga area nito, para sa takeoffs. Ang roof plane ay IFC roof na may isang slab.

:::tip
Binabawi ng Undo ang anumang pagbabago sa bubong sa isang step, pati ang preset na nagbabago sa bawat pader.
:::
