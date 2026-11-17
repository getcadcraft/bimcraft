---
title: Units sa import: may sinasabi ang file tungkol sa units nito, o tatanungin ka muna
summary: Kapag may sinasabi ang file na dinadala mo tungkol sa units nito, ginagamit ng BimCraft ang mga iyon at sinasabi ito. Kapag wala, tinatanong ka muna ng BimCraft bago maglagay ng kahit ano, at inaalala nito ang sagot mo para sa file na iyon.
keywords: units, import, buksan, OBJ, STL, DWG, DXF, IFC, point cloud, library item, milimetro, metro, pulgada, talampakan, scale, maling laki, masyadong malaki, masyadong maliit, 1000 beses, tanong, naaalala
from: f044e9bc
---

## Ano ang gagawin mo

Mag-import ng file at tiyaking tama ang laki nito pagpasok.

## Mga hakbang

1. Buksan o idagdag ang file gaya ng dati: {{ui:Bukas}}, ang {{ui:Mga file}} ng Library, {{ui:Mga point cloud}}, o Build › Mula sa drawing.
2. Kung sinasabi ng file ang units nito, walang tatanungin. Sinasabi ng status line kung anong units ang sinasabi ng file.
3. Kung hindi, lalabas ang dialog na nagtatanong ng **Units ng** file. Piliin kung ano ang isang unit sa file, at i-click ang {{ui:Gamitin ang mga unit na ito}}. Walang inilalagay bago ka sumagot.
4. Ang {{ui:Kanselahin}} (o {{key:Esc}}) ay walang ipapasok.

## Aling file ang nagsasabi ng units

- **IFC**: sinasabi ang length unit nito, at sinasabi ng "Nabuksan" kung alin. Ang IFC na walang sinasabi ay tinatanong bago ito buksan; ang sagot mo ay isusulat sa model, kaya sinasabi na ng file ito kapag na-save mo.
- **DWG at DXF**: ang insertion units ng drawing. Ang drawing na wala nito ay tinatanong (mga file ng Library, Build › Mula sa drawing, terrain mula sa contours).
- **Listahan ng points** para sa terrain: walang sinasabing units. Tinatanong ka.
- **Point clouds**: ang LAS at LAZ na may coordinate system, E57, PTX at PLY ay sinasabi ang sa kanila. Ang iba ay tinatanong.
- **OBJ at STL**: hindi kailanman nagsasabi ng units. Tinatanong ka.
- **glTF at GLB**: metro, ayon sa sariling patakaran ng format.
- **Mga larawan**: walang sariling laki. Ang larawan ay ina-fit sa view, at itinatakda mo ang laki nito gamit ang Scale sa dalawang punto. Ang laking ibinigay mo ay naaalala para sa file na iyon: kapag inilagay ulit, papasok ito sa laking iyon at sasabihin ito ng status line.
- **Ang Point clouds add-on**: nagtatanong kapag gumawa ka ng cloud na walang sinasabing unit ang file, at nilalagyan ng label ang mga numero ng cloud ng unit na dala nito.

## Good to know

- Naaalala ang sagot para sa file na iyon (pangalan, laki at petsa nito) sa computer na ito, sa lahat ng CadCraft app. Sa susunod na papasok ang parehong file, hindi ka na tatanungin, at sasabihin ng status line na ginamit ang naaalalang units.
- Para tanungin ulit: ang command palette ({{key:Mod+K}}) › **Tanungin ulit para sa units ng mga na-import na file**.
- Ang listahan ng units na mayroon na ang import (ang Units ng Library, ang Units ng cloud bar, Drawing units sa From a drawing) ay nagbabago pa rin sa units pagkatapos. Ang listahan ng Units ng terrain tool ay ngayon ang panimulang tanong lamang.
