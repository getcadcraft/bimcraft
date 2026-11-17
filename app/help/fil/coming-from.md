---
title: Galing sa ibang BIM at drawing program
summary: Paano nagmamapa sa BimCraft ang mga nakasanayan mula sa desktop BIM authoring at pagtingin ng DWG, at ang mga pagkakaibang nakakalito sa mga tao.
keywords: switching, migrate, familiar, desktop bim, family, parameters, project browser, properties palette, view cube, xref, layer manager, differences, compare, lumipat, pagkakaiba
from: 2de629af
---

Kung kilala mo ang Revit, karamihan ng BimCraft ay magiging pamilyar sa mga salita at hindi pamilyar sa saklaw. Ang pinakamahalagang pagkakaiba: **binabasa at sinusuri ng build na ito ang mga model at ine-edit lang ang IFC data. Hindi pa ito nag-a-author gaya ng Revit.** Hindi ka makakaguhit ng pader, makakalagay ng family, makakagawa ng view o sheet, o makakapag-save ng project file. Ang magagawa mo ay magbukas ng halos anumang building file sa kahit anong computer na may browser, makita kung ano ang nasa loob nito, suriin ang buong project folder, at itama ang data sa isang IFC model.

## Mga nakasanayan, nakamapa

| Kung sanay ka sa | Sa BimCraft |
|---|---|
| Pagbubukas ng `.rvt` sa Revit para makita ang model | Binubuksan ng BimCraft ang `.rvt` bilang file card: release, impormasyon ng project, link, preview. Para sa 3D model, i-export ang IFC at buksan iyon. [Basahin ang project o family file](topic:read-rvt-file) |
| Pagtingin kung aling release ang pinagsave ng file bago ito buksan | Sinasabi ng card sa itaas na "saved in Revit …", nang hindi ina-upgrade o ginagalaw ang file |
| Ang Project Browser | Walang browser ng view at sheet. Ang IFC model ay may listahan ng {{ui:Storeys}} at {{ui:Elements}}; ang drawing ay may sheet tab |
| Ang Properties palette | Ang {{ui:Properties}} panel sa kanan, para sa element na na-click mo. IFC property set sa halip na parameter group |
| Instance at type parameter | Instance property set, at mga set na may markang "(type)". Ang pagbabago ng type ay nalalapat sa bawat element ng type, gaya ng sa Revit. [Baguhin ang property ng type para sa bawat element ng isang type](topic:type-vs-instance) |
| Edit Type | Walang dialog: i-click ang value sa isang set na "(type)" at mag-type |
| Pagpili ng maraming element, filter, Select All Instances | Isang element sa isang pagkakataon. Hindi pa ito nagagawa |
| Ang view cube at ang navigation wheel | Isang view cube sa kanang-ibabang sulok, apat na button ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}) at malayang orbit. Walang navigation wheel |
| Shift at middle-drag para mag-orbit, middle-drag para mag-pan | Left-drag para mag-orbit, right-drag (o {{key:Shift}} at drag) para mag-pan, nag-zoom ang wheel. Ang menu style na {{ui:BIM ribbon}} ay lumilipat sa middle-drag pan at {{key:Shift}} kasama ang middle button para mag-orbit. [Menu, key at mouse](topic:menus-keys-and-mouse) |
| Floor plan, section, section box | Isang {{ui:Section}} plane sa isang pagkakataon ({{key:X}}); walang section box o 2D plan. [Hiwain ang IFC model gamit ang section plane](topic:section-plane) |
| Hide sa view, isolate, visibility/graphics | {{ui:Storeys}} na naka-on at naka-off, {{ui:Spaces}} at {{ui:Edges}}. Wala pang per-element na pagtatago |
| Mga room | IFC space, nakatago sa simula. I-click ang {{ui:Spaces}} |
| Save, Save As, mag-synchronize sa central | Dina-download ng {{ui:Save as IFC}} ang bagong IFC file. Hindi nagbabago ang orihinal. Walang central, walang worksharing |
| Undo gamit ang {{key:Mod+Z}} | Gumagana sa mga IFC edit hanggang mag-save ka. [Baguhin ang IFC property at mag-save ng na-edit na kopya](topic:edit-ifc-properties) |
| Manage Links | Buksan ang project folder: bawat link ay sinusuri at minamarkahan ng **In this folder**, **Same name found**, **Library file** o **Not in this folder**. [Buksan ang buong project folder](topic:open-project-folder) |
| Audit, o pagbubukas ng file para tingnan kung sira | Sinusuri ng folder report ang bawat kopya at backup kung putol, sa loob ng ilang segundo. [Suriin ang folder para sa mga sirang kopya](topic:check-folder-health) |
| Pagpili ng tamang file mula sa magulong folder | Nagmumungkahi ang {{ui:Start here}} box ng isa, kasama ang mga dahilan |

Kung karamihan ay binubuksan mo ang mga model para suriin, gaya sa program na pang-check o pang-view ng IFC model, piliin ang {{ui:Viewer}} menu style: nauuna ang mga tool sa pag-view at pagsusuri, at nasa iisang menu ang mga tool sa pagbuo. Tingnan ang [Menu, key at mouse](topic:menus-keys-and-mouse).

## Mula sa pagtingin ng DWG file

Kung nagbubukas ka ng DWG sa AutoCAD o DWG viewer:

| Kung sanay ka sa | Sa BimCraft |
|---|---|
| Model at layout tab sa ibaba | Mga tab sa itaas ng drawing: {{ui:Model}} at isa para sa bawat sheet |
| ZOOM Extents, double-click ang wheel | I-double-click, {{key:F}} o {{ui:Fit}} |
| Mag-pan gamit ang middle button | I-drag gamit ang kahit anong button |
| Ang layer manager | Ang listahan ng {{ui:Layers}}: lagyan ng tsek para ipakita, alisin ang tsek para itago, {{ui:All on}} at {{ui:All off}} |
| Ang xref manager | **Linked drawings** sa kanan, na may **Shown** o **Not found**, at {{ui:Add linked drawings…}} |
| Plot preview | {{ui:Print view}} o {{key:P}}: itim sa puti na may line weight. Hindi ito nagpi-print |
| Pagkuha ng data ng block attribute | Ang {{ui:Equipment}} tab para sa mga tagged na foodservice drawing, kasama ang {{ui:Download CSV}} |
| Measure, draw, edit, save as | Wala sa BimCraft. Ang CadCraft drafting app ang nagdo-drawing at nag-e-edit |

## Mga pagkakaibang nakakalito sa mga tao

- **Tumatakbo ito sa browser, at maingat ang browser sa iyong mga file.** Mababasa lang ng BimCraft ang mga file at folder na ibibigay mo rito, sa pamamagitan ng pagpili o pag-drag. Hindi ito makakabukas ng file nang mag-isa, at hindi ito makakapag-save sa ibabaw ng isa. Bawat save ay download.
- **Walang ina-upload.** Ang salitang "upload" sa ilang folder dialog ng browser ay sariling salita ng browser. Nananatili sa iyong computer ang mga file.
- **IFC ang format ng model.** Lumalabas bilang card ang project file dahil hindi dokumentado ang 3D content nito. Ituring ang IFC bilang paraan ng paglipat ng mga model papasok sa BimCraft.
- **Copy-on-write ang mga edit.** Ang pagbabago ng value ng isang element ay hindi nagbabago sa mga kapitbahay nito, kahit ibinahagi ng exporter ang value na iyon sa kanila. Ang mga type property ang sadyang pagbubukod.
- **Walang project, walang view.** Iisang file sa isang pagkakataon ang ipinapakita ng BimCraft, at wala itong natatandaan tungkol dito pagkatapos mong isara ang tab, maliban sa mga pangalan ng kamakailang folder sa Chrome at Edge.
- **Mga key sa Mac.** Kung saan gumagamit ang shortcut ng Revit sa Windows ng Ctrl, ang shortcut ng BimCraft ay gumagamit ng {{key:Mod}}: Command sa Mac.
- **Mga nakasanayan mo sa mouse.** Ang orbit ay nasa kaliwang button, hindi Shift at middle button, maliban kung pipiliin mo ang {{ui:BIM ribbon}} menu style o itatakda mo ang mga button sa sarili mo sa [Menu, key at mouse](topic:menus-keys-and-mouse).

Tingnan ang [Ano ang hindi pa nagagawa](topic:not-built-yet) para sa mga gamitin ngayon bilang kapalit.
