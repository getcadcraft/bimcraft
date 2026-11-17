---
title: Tingnan ang DWG o DXF drawing sa 3D
summary: Ilipat ang model space ng drawing sa 3D para makita ang elevations, kapal, 3D faces, meshes at blocks, umikot dito, i-click ang isang bagay para makita ang properties nito, at tingnan kung ano ang hindi pa naiguguhit.
keywords: 3d, dwg, dxf, drawing, model space, orbit, section, cut, clipping, pick, select, properties, attributes, handle, elevation, kapal, extrusion, 3dface, polyface, mesh, 3d polyline, blocks, views, perspective, parallel, extents, acis, solids
from: a0c6cd17
---

## Ano ang gagawin mo

Tingnan ang model space ng drawing sa 3D. Nasa totoo nilang taas ang mga linya at polyline, ang mga bagay na may kapal ay tumatayo bilang mga pader, at ang 3D faces, meshes at 3D blocks ay lumalabas bilang mga surface na maaari mong ikutan. Nananatiling 2D ang mga sheet.

## Mga hakbang

1. Magbukas ng DWG o DXF. Tingnan ang [Tingnan ang DWG o DXF drawing](topic:view-dwg). Nagbubukas ito sa 3D maliban kung ang {{ui:Settings}} › {{ui:BimCraft}} › **Drawings open in** ay nagsasabing {{ui:Model (2D)}}.
2. Mula sa 2D, i-click ang {{ui:3D}} sa bar sa itaas ng drawing, o pindutin ang {{key:3}}.
3. Maghintay ng sandali sa unang pagkakataon: sinasabi ng status line na "Ginagawa ang drawing sa 3D…", pagkatapos kung ilang linya at face ang ipinapakita nito.
4. I-orbit, i-pan at i-zoom (tingnan ang talahanayan sa ibaba).
5. I-click ang isang view sa ikalawang bar: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} o {{ui:Right}}.
6. I-click ang {{ui:Perspective}} para lumipat sa pagitan ng perspective at parallel na view.
7. I-click ang {{ui:Extents}} o pindutin ang {{key:F}} para makita muli ang buong drawing.
8. I-click muli ang {{ui:3D}}, pindutin ang {{key:3}}, o i-click ang {{ui:Model}} o isang sheet tab para bumalik sa 2D.

## Ano ang dapat mong makita

- Model space sa 3D, Z pataas, sa sariling kulay ng drawing. Mas maliwanag nang kaunti ang mga face kaysa sa kanilang mga gilid.
- Ang mga layer na pinatay mo sa {{ui:Layers}} ay nawawala rin sa 3D view.
- Sa kanan: ang bilang ng linya at face, ang laki ng drawing sa X, Y at Z, at ang **Sa 2D view lang** at **Hindi pa naiguguhit**.

## Putulin gamit ang section plane

I-click ang {{ui:Section}} sa 3D bar, o pindutin ang {{key:X}}. Gumagana ang bar sa ilalim nito gaya ng sa IFC models (tingnan ang [Putulin ang IFC model gamit ang section plane](topic:section-plane)): putulin mula sa {{ui:Top}}, {{ui:Front}} o {{ui:Side}}, i-drag o i-type ang offset — sa sariling units ng drawing dito — at {{ui:Flip}} para panatilihin ang kabilang panig. Ang bahaging pinutol ng eroplano ay hindi maaaring piliin. Ang pagbalik sa 2D ay nag-aalis ng hiwa.

## Tingnan ang properties ng isang bagay

I-click ang isang bagay sa 3D view. Nagiging pick color ito, at ipinapakita ng {{ui:Properties}} ang sinasabi ng file tungkol dito: ang uri nito, layer, kulay, linetype at handle, pagkatapos ang sarili nitong data, gaya ng simula, dulo at haba ng isang linya, sentro at radius ng bilog, mga sulok ng isang 3D face, o ang block, insertion point, scale, rotation at attribute values ng isang block reference.

- Buong napipili ang block reference, pati ang mga block na nakapugad dito.
- Ang click na ilang pixel mula sa linya ay pumipili sa linya.
- Pindutin nang matagal ang {{key:Mod}} at i-click para pumili ng mas maraming bagay, o para alisin ang isa; saka binibilang ng {{ui:Properties}} ang mga ito ayon sa uri.
- Ang {{key:Esc}}, o click sa bakanteng espasyo, ay nag-aalis ng pagpili.
- Hindi maaaring piliin ang mga bagay sa mga layer na pinatay mo.

## Paggalaw sa paligid

:::mouse
| Para sa | Gawin ito |
|---|---|
| Orbit | I-drag gamit ang middle button, o gamit ang left button |
| Pan | I-drag gamit ang right button, o pindutin nang matagal ang {{key:Shift}} at i-drag |
| Zoom | I-scroll ang wheel; nagza-zoom ito patungo sa nasa ilalim ng pointer |
| Tingnan ang lahat | {{ui:Extents}} o {{key:F}} |
| Tumingin mula sa gilid | I-click ang face, edge o corner ng view cube sa kanang-ibabang sulok |
:::

Maaaring palitan ang view cube ng axis icon, o itago, sa {{ui:Settings}}. Tingnan ang [Mga setting ng BimCraft](topic:settings).

:::mac mouse
Sa trackpad, mag-swipe gamit ang dalawang daliri para mag-orbit, pindutin nang matagal ang {{key:Shift}} at mag-swipe para mag-pan, at mag-pinch para mag-zoom.
:::

:::touch
I-drag gamit ang isang daliri para mag-orbit. I-pinch gamit ang dalawang daliri para mag-zoom, at ilapit ang mga ito nang magkasama para mag-pan.
:::

## Ano ang iginuguhit sa 3D

| Sa drawing | Sa 3D |
|---|---|
| Linya, 3D polylines | Sa totoo nilang taas |
| Polylines, bilog, arko, ellipse | Sa sarili nilang eroplano, sa kanilang elevation, nakahilig kapag nakahilig ang drawing |
| Kapal sa linya, polylines, bilog at arko | Mga pader na may taas na iyon; sarado sa itaas at ibaba ang mga bilog |
| 3D faces, polyface meshes, polygon meshes | Mga shaded na surface na may nakikitang gilid |
| Blocks | Nakalagay, nakaikot at naka-scale sa 3D, kasama ang nakapugad na blocks |
| Hatches | Ang kanilang mga outline |
| Payak na 2D linework | Patag, kung saan ito iginuhit |

## Sa 2D view lang

Ang text, multiline text at nakikitang attribute ng mga block ay iginuguhit sa 3D, sa sarili nilang eroplano at sa sarili nilang taas, at napipili sa pamamagitan ng click. Ipinapakita ng malalapad na polylines ang lapad nila bilang patag na banda. Ang multileaders, larawan at hatch pattern ay binibilang sa ilalim ng **Sa 2D view lang**: tingnan ang mga ito sa {{ui:Model}} tab o sa mga sheet.

## Hindi pa naiguguhit

Ang solids at surfaces na nakaimbak bilang ACIS bodies (3D solids, bodies, regions at surfaces) at subdivision meshes ay nakalista sa ilalim ng **Hindi pa naiguguhit** kasama kung ilan sila. Nilalaktawan ang mga ito, hindi hinuhulaan.

## Mga karaniwang pagkakamali

- **Mukhang patag ang lahat.** 2D ang drawing: walang taas ang mga linya nito. I-click ang {{ui:Front}} para suriin; ang patag na drawing ay lumalabas bilang isang linya.
- **Walang lumalabas sa solid model.** Ang solids na ginawa gamit ang solid modeler ay ACIS bodies, nakalista sa ilalim ng **Hindi pa naiguguhit**. I-export ang model bilang IFC o bilang 3D faces mula sa programang gumawa nito.
- **Isang maliit na kumpol sa gitna ang drawing.** May bagay na malayo sa model space, gaya ng lumang kopya ng plan, na nagpapalaki sa extents. I-zoom in gamit ang wheel sa bahaging gusto mong tingnan.

## Susunod

- [Magtrabaho sa mga layer at sheet](topic:dwg-layers-sheets)
- [Putulin ang IFC model gamit ang section plane](topic:section-plane)
