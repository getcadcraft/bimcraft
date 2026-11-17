---
title: Ipakita at itago ang mga palapag, space at edge
summary: I-off ang mga palapag para makita ang loob ng building, ipakita ang mga kuwarto at space, at i-on o i-off ang mga edge line.
keywords: palapag, levels, sahig, itago, isolate, kuwarto, spaces, ifcspace, edges, visibility, section
from: b838dcc0
---

## Ano ang gagawin mo

Tingnan ang loob ng IFC model sa pamamagitan ng pag-off ng mga palapag sa itaas ng kailangan mo, saka ipakita ang mga kuwarto at space, at i-off ang mga edge line para mas malinis tingnan.

## Mga hakbang: tingnan ang isang sahig

1. Magbukas ng IFC model. Tingnan ang [Magbukas ng IFC model at tumingin-tingin sa 3D](topic:open-ifc-model).
2. Hanapin ang listahan ng {{ui:Mga palapag}} sa kaliwa. Ang pinakamataas na palapag ang nauuna, gaya ng pagbabasa ng section mula sa bubong pababa.
3. I-untick ang bubong at bawat palapag sa itaas ng sahig na gusto mo.
4. I-click ang {{ui:Itaas}} para tumingin pababa sa sahig na iyon.
5. I-tick ulit ang mga palapag para ibalik ang mga ito.

## Ano ang dapat mong makita

Biglang nawawala ang bawat palapag na iyong i-untick, kasama ang lahat ng nasa loob nito. Ipinapakita lang ng listahan ang mga palapag na may nakikitang laman. Ang mga elementong hindi nakatalaga sa anumang palapag ay pinagsama bilang **Not on a storey** sa ibaba; kadalasang doon napupunta ang mga elemento ng site at ilang furniture.

## Mga hakbang: ipakita ang mga kuwarto at space

1. I-click ang {{ui:Mga space}} sa toolbar sa itaas ng model. Mananatiling pinindot ang button.
2. Tingnan ang model: lumalabas ang mga kuwarto at space bilang maputlang, malinaw na volume.
3. I-click ang isang space para basahin ang properties nito, gaya ng pangalan, numero at lawak, sa kanan.
4. I-click ulit ang {{ui:Mga space}} para itago sila.

Nakatago ang mga space kapag bumubukas ang model, dahil tatakpan nila kung hindi ang mga pader at sahig.

## Mga hakbang: edge

1. I-click ang {{ui:Edges}} para i-off ang manipis na edge line.
2. I-click ulit para ibalik ang mga ito.

Sa napakalaking model (higit sa 1.5 milyong triangle), naka-gray ang button at may tip na "Naka-off ang edges para sa napakalaking model". Nakakatipid ito ng memorya.

## Mga karaniwang pagkakamali

- **Pag-untick ng palapag pero nakikita pa rin ang bahagi nito.** Kabilang ang elemento sa palapag na itinalaga rito ng nag-export na program. Ang matangkad na pader o hagdan ay kadalasang kabilang lamang sa base nitong palapag, kaya nananatili ito kapag nakatago ang palapag sa itaas, o nawawala kasama ng palapag sa ibaba.
- **Pagtatago ng mga palapag para makita ang loob.** Mas mabilis madalas ang section box: tingnan ang [Gupitin ang IFC model gamit ang section plane](topic:section-plane#a-section-box). Puwede ka ring mag-untick ng mga hilera sa {{ui:Model tree}} (tingnan ang [Hanapin ang daan mo gamit ang model tree](topic:model-tree)).
- **Pag-click sa space sa likod ng pader.** Pinipili ng pag-click ang pinakamalapit na nakikitang surface. Itago ang palapag sa itaas, o lumipat sa {{ui:Itaas}}, saka mag-click.
- **Kakaiba ang mga pangalan ng palapag.** Ipinapakita ng BimCraft ang mga pangalan ng palapag na naka-save sa file. Kung "Level 1" o numero ang nakasulat, iyon ang isinulat ng exporter.
