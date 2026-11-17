---
title: Tingnan ang DWG o DXF drawing
summary: Buksan ang DWG o DXF, gumalaw sa model space at sa mga sheet, basahin ang coordinates, at tingnan kung ano ang hindi pa naiguguhit.
keywords: dynamic blocks, visibility states, dwg, dxf, cad, drawing, 2d, view, viewer, pan, zoom, model space, paper space, layout, coordinates, buksan ang dwg
from: 4db3122a
---

## Ano ang gagawin mo

Magbukas ng CAD drawing, tingnan ito sa 3D o 2D, gumalaw dito, lumipat sa pagitan ng model space at mga sheet nito, at basahin ang coordinates. Ipinapakita ng BimCraft ang DWG at DXF na drawing; hindi nito ine-edit o sine-save ang mga ito. Para baguhin ang isa, i-click ang {{ui:I-edit sa CadCraft}} at magbubukas ang drawing sa drafting app ng CadCraft, sa bagong tab.

## Mga hakbang

1. I-click ang {{ui:Pumili ng file}}, o i-drop ang drawing sa pahina.
2. Pumili ng `.dwg` o `.dxf` na file.
3. Maghintay habang sinasabi ng status line na "Binabasa ang drawing…". Ang malalaking drawing ay tumatagal ng ilang segundo. Pagkatapos, sasabihin nito kung gaano katagal ang pagbasa, ang "nire-render…" habang iginuguhit ang unang larawan, at kung gaano iyon katagal.
4. Bumubukas ang drawing sa 3D, ang pinakamabilis na paraan para ipakita ang malaking drawing (tingnan ang [Tingnan ang DWG o DXF drawing sa 3D](topic:dwg-in-3d)). I-click ang {{ui:Model}} para sa flat na 2D view. Para laging magbukas sa 2D ang mga drawing, itakda ang {{ui:Mga setting}} › {{ui:BimCraft}} › **Nagbubukas ang mga drawing sa** sa {{ui:Model (2D)}}. Ang drawing na walang laman sa model space, o browser na hindi kayang magpakita ng 3D, ay bumubukas sa 2D.
5. Tingnan ang mga tab sa itaas ng drawing: ang {{ui:Model}} muna, saka isang tab bawat sheet, ayon sa sariling pagkakasunod ng drawing.
6. I-click ang isang sheet tab para makita ang sheet na iyon: ang papel, kasama ang model na ipinapakita sa pamamagitan ng viewport nito.
7. I-click ang {{ui:Model}} para bumalik sa model space.
8. Ilagay ang pointer sa ibabaw ng drawing at basahin ang X at Y coordinates sa sulok.

## Ano ang dapat mong makita

- Ang drawing, naka-fit sa window. Sumusunod ang mga kulay sa drawing; ang puting linya (color 7) ay iginuguhit sa tinta ng theme, at ang maputlang kulay ay pinapadilim sa light theme para manatiling nababasa.
- Ang panel na {{ui:Drawing}} sa kaliwa: file, laki, format (halimbawa "AutoCAD 2018 (AC1032)"), units, bilang ng entity at layer, bilang ng sheet, at mga naka-link na drawing at equipment kapag mayroon.
- Ang listahan ng {{ui:Layers}} sa kaliwa.
- Sa kanan: kung paano gumalaw, mga naka-link na drawing at larawan, at **Hindi pa naiguguhit**.

## Paggalaw

:::mouse
| Para sa | Gawin ito |
|---|---|
| Pan | I-drag gamit ang kahit anong mouse button |
| Zoom | I-scroll ang wheel; nananatili ang punto sa ilalim ng pointer |
| Fit | I-double-click, pindutin ang {{key:F}}, o i-click ang {{ui:Fit}} |
:::

:::mac mouse
Sa trackpad, ang pag-scroll gamit ang dalawang daliri ay **mag-zoom**, hindi nagpa-pan. Nag-zoom din ang pinch. Para mag-pan, i-click at i-drag.
:::

:::touch
I-drag gamit ang isang daliri para mag-pan. Hindi pa ginagawa ang pinch zoom para sa mga drawing: i-tap ang {{ui:Fit}} para makita ang buong sheet, at gumamit ng mouse o trackpad para mag-zoom palapit.
:::

## Dynamic blocks

Iginuguhit ang dynamic block ayon sa pagpapakita nito sa drawing: bawat nakalagay na block ay nasa visibility state na sinave ng drawing ("Plan" o "Front", "Single bowl" o "Double bowl"). Sa kanan, inililista ng **Dynamic blocks** ang bawat nakalagay sa model space: ilan ang nakalagay, ang mga state na ipinapakita nila, at bawat state na mayroon ang block. Sa {{ui:3D}}, i-click ang nakalagay na block para makita ang **Dynamic block**, **State shown** at **Other states** sa Properties. Hindi nagpapalit ng state ang BimCraft.

## Hindi pa naiguguhit

Ang ilang uri ng object ay hindi pa naiguguhit sa build na ito. Binibilang sila sa ilalim ng **Hindi pa naiguguhit** sa kanan ("Nilalaktawan muna ang mga bahaging ito ng drawing, hindi hinuhulaan."), para alam mong may kulang. Iginuguhit ang lines, polylines, arcs, circles, ellipses, splines, hatches at solid fills, text at multiline text, blocks na may attributes, dimensions, leaders at multileaders, tables, images at viewports. Ang 3D faces, polyface meshes at polygon meshes ay iginuguhit bilang mga gilid na nakikita mula sa itaas; lumipat sa {{ui:3D}} para makita sila bilang surface.

Hindi bumubukas ang binary DXF: sinasabi ito ng BimCraft. I-save ulit ito bilang ASCII DXF, o bilang DWG, mula sa program na gumawa nito.

## Mga karaniwang pagkakamali

- **Mukhang walang laman ang drawing.** Maaaring naka-off o frozen ang ilang layer sa mismong drawing; nagsisimula silang naka-untick sa {{ui:Layers}}. I-click ang {{ui:Lahat naka-on}}. Kung sinasabi ng status na "*name* ay walang laman na drawing: walang lines, text o blocks.", wala talagang laman ito.
- **Mukhang walang laman ang sheet na may frame.** Maaaring umaasa ang sheet sa mga naka-link na drawing. Tingnan ang [Hanapin ang mga naka-link na drawing at larawan](topic:dwg-linked-files).
- **Medyo iba ang itsura ng text.** Gumuguhit ang BimCraft ng text sa makitid na sans-serif na font, hindi sa mga font ng drawing, kaya maaaring medyo mas malapad o mas makitid ang text kaysa sa program na gumawa nito.
- **"*name* could not be read. It may be damaged, or saved in a format the reader does not handle yet."** Ang bracket sa dulo ay nagpapakita ng format code ng file. I-save ito mula sa program na gumawa nito bilang mas lumang DWG o bilang DXF, at subukan ulit.
- **Inaasahan mong magsukat, gumuhit o mag-edit.** Tumitingin lang ang BimCraft sa mga drawing. I-click ang {{ui:I-edit sa CadCraft}} para buksan ang parehong file sa drafting app ng CadCraft, na nag-e-edit nito at nagse-save ng kopya bilang DWG o DXF. Hindi nababago ang orihinal mong file, at nananatili sa BimCraft ang mga naka-link na drawing. Lumalabas lang ang button kung saan bukas sa iyo ang CadCraft.

## Susunod

- [Tingnan ang DWG o DXF drawing sa 3D](topic:dwg-in-3d)
- [Magtrabaho sa layers at sheets](topic:dwg-layers-sheets)
- [Suriin ang drawing sa print view](topic:print-view)
