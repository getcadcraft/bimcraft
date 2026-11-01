---
title: Pagsisimula sa BimCraft
summary: Ano ang ginagawa ng BimCraft ngayon, paano buksan ang unang model mo, tingnan ito sa 3D, baguhin ang isang value at mag-save ng kopya.
keywords: pagsisimula, unang takbo, buksan, ifc, rvt, dwg, mabilis na simula, panimula, viewer, bim
from: fc2dea19
---

Ang BimCraft ang building-model app ng pamilya ng CadCraft. Sa build na ito, **nagbubukas, nagbabasa at nag-i-inspect** ng mga building file, at **nag-e-edit ng data sa mga IFC model**. Hindi pa ito gumuguhit o nagmo-model ng bagong element. Isipin ito bilang model viewer at checker na nagpapahintulot ding itama ang mga pangalan, tag at property value sa isang IFC file.

Ano ang binubuksan nito:

| File | Ano ang makukuha mo |
|---|---|
| IFC (`.ifc`) | Ang buong model sa 3D: orbit, mga palapag, property ng element, at pag-edit ng mga pangalan at property value |
| Project at family file (`.rvt`, `.rfa`, `.rte`, `.rft`) | Isang file card: ang release na pinag-savan dito, impormasyon ng project, larawan ng preview at mga naka-link na file. Walang 3D. |
| DWG at DXF | Ang drawing sa 2D: model space at bawat sheet, mga layer, naka-link na drawing, print view, at isang equipment schedule para sa mga naka-tag na foodservice drawing |
| Isang project folder | Ulat ng bawat model sa folder: mga backup, link, sirang kopya, at mungkahi kung aling file ang uumpisahan |

Lahat ay nangyayari sa browser mo, sa computer mo. **Walang ina-upload.** Tingnan ang [Mga file na binubuksan at sine-save ng BimCraft](topic:files) para sa mga detalye.

## Buksan ang BimCraft

1. Buksan ang BimCraft sa kasalukuyang browser. Gumagana ang Chrome, Edge, Firefox at Safari; nakalista sa [Mga browser, device at memory](topic:platforms) ang mga pagkakaiba.
2. Maghintay sa walang laman na screen na nagsasabing "Magbukas ng building model."

:::note
Tumatakbo ang BimCraft sa browser, at sa desktop sa loob ng CadCraft Studio, kasama ng iba pang app. Hindi pa available ang cloud saving: nagbubukas ka ng file mula sa computer mo at nagse-save ng kopya pabalik doon.
:::

## Buksan ang unang model mo

Ang pinakamabilis na paraan para makita ang ginagawa ng BimCraft ay isang IFC file.

1. I-click ang {{ui:Pumili ng file}} sa gitna ng screen.
2. Pumili ng `.ifc` na file sa {{pick:mac=Finder|windows=File Explorer|linux=file manager mo}} at kumpirmahin.
3. Maghintay habang ang status line sa ibaba ng screen ay nagsasabing "Sinisimulan ang IFC engine…", at pagkatapos ay "Binubuo ang geometry".

Dapat mong makita ang model sa 3D sa gitna, isang {{ui:File}} panel at listahan ng {{ui:Mga palapag}} sa kaliwa, at isang walang lamang {{ui:Properties}} panel sa kanan. Nagtatapos ang status line sa "Nabuksan" at sa bilang ng mga element.

:::tip
Maaari mo ring i-drag ang file mula sa {{pick:mac=Finder|windows=File Explorer|linux=file manager mo}} diretso sa page. Nagpapakita ang screen ng "I-drop para buksan" habang nagda-drag ka.
:::

:::offline
Nagla-load ang IFC engine mula sa site sa unang pagbukas mo ng IFC model, maliban kung na-save ang BimCraft para sa offline na paggamit. Hindi kailangan ng DWG at DXF drawing, project file at folder ng anumang dagdag: bahagi ng app ang kanilang mga reader. Kung sinasabi ng button sa app bar ang {{ui:Handa offline}}, bubukas ang lahat offline. Kung hindi, hindi bubukas ang mga IFC model hanggang kumonekta ka muli, maliban kung may nabuksan nang isa sa tab na ito. Tingnan ang [Online at offline](topic:online-offline).
:::

:::online
Pupunta sa lugar na walang koneksyon? I-click ang {{ui:I-save para sa offline}} sa app bar at maghintay para sa {{ui:Handa offline}}. Kasama sa naka-save na kopya (mga 11 MB) ang IFC engine. Tingnan ang [Pagtatrabaho offline](common:offline).
:::

## Tumingin-tingin

:::mouse
1. I-drag gamit ang kaliwang button ng mouse para umikot sa paligid ng model.
2. I-scroll ang wheel para mag-zoom.
3. I-drag gamit ang kanang button ng mouse para mag-pan. Sa Mac trackpad, pindutin nang matagal ang {{key:Shift}} at i-drag.
4. Pindutin ang {{key:F}} o i-click ang {{ui:Fit}} para makita muli ang buong model.
:::

:::touch
1. I-drag gamit ang isang daliri para umikot.
2. Kurutin gamit ang dalawang daliri para mag-zoom, at igalaw nang sabay ang dalawang daliri para mag-pan.
3. I-tap ang {{ui:Fit}} para makita muli ang buong model.
:::

## Gawin ang isang tunay na bagay: itama ang isang tag

1. I-click ang isang pader, pinto o anumang element sa model. Magiging asul ito, at lalabas sa kanan ang mga property nito.
2. Sa {{ui:Properties}} panel, i-click ang value sa tabi ng **Tag**.
3. I-type ang bagong tag at pindutin ang {{key:Enter}}.
4. Tingnan ang seksyong {{ui:Mga pagbabago}} na nagbukas sa kaliwa: nakalista ang pagbabago mo kasama ang luma at bagong value.

## I-save ang isang kopya

1. I-click ang {{ui:I-save bilang IFC}} sa seksyong {{ui:Mga pagbabago}}, o pindutin ang {{key:Mod+S}}.
2. Hanapin ang bagong file sa downloads folder mo. Pinangalanan ito ayon sa orihinal na may idinagdag na " (edited)", halimbawa `Clinic (edited).ifc`.

Hindi kailanman nababago ang orihinal mong file. [Baguhin ang IFC property at i-save ang na-edit na kopya](topic:edit-ifc-properties) ang nagpapaliwanag ng pag-edit nang buo.

## Susunod na puntahan

- [Ang screen ng BimCraft](topic:workspace): bawat panel ayon sa pangalan.
- [Galing sa ibang BIM at drawing program](topic:coming-from): ano ang maaaring kakaiba kung sanay ka sa Revit.
- [Buksan ang buong project folder](topic:open-project-folder): ituro sa BimCraft ang project folder at hayaan itong ayusin ang mga file.
- [Tingnan ang DWG o DXF drawing](topic:view-dwg): sheet, layer at print view.
