---
title: Buksan ang buong project folder
summary: Ituro sa BimCraft ang isang project folder para makita nang sabay-sabay ang bawat model, backup at link nito, at hayaang imungkahi ng kahong Start here kung aling file ang bubuksan.
keywords: folder, directory, project folder, network drive, server, start here, aling file, backup, link, xref, kamakailang folder, i-drag ang folder
from: 16fbdce2
---

## Ang gagawin mo

Buksan ang buong project folder, gaya ng ibinigay sa iyo para sa isang gawain, at hayaang ayusin ito ng BimCraft: anong mga model ang nandoon, alin ang mga backup, ano ang naka-link sa ano, aling file ang sira, at aling file ang malamang na gusto mong buksan.

Ilang kilobyte lang ng bawat model card ang binabasa, kaya ayos lang ang folder sa network drive o sa synced na cloud folder.

## Mga hakbang

:::chromium
1. I-click ang {{ui:Open a folder}} sa kaliwa (o sa gitna ng walang lamang screen).
2. Piliin ang project folder sa window na bumukas at i-click ang **Select** (o **Upload** o **Open**, depende sa system mo).
3. I-click ang **View files** kapag tinanong ng browser ang "Let site view files?". Pinapahintulutan lang nitong basahin ng tab ang folder; walang ina-upload.
4. Maghintay habang nagbibilang ang status line: "Inililista ang folder: … file", pagkatapos "Sinusuri ang mga Revit file: … sa …".
:::

:::firefox
1. I-click ang {{ui:Open a folder}} sa kaliwa (o sa gitna ng walang lamang screen).
2. Piliin ang project folder sa window na bumukas at kumpirmahin. Maaaring itanong ng Firefox kung papayagan ang page na basahin ang mga file ng folder; nananatili pa rin ang mga ito sa computer mo.
3. Maghintay habang sinasabi ng status line ang "Binabasa ang folder: … file", pagkatapos "Sinusuri ang mga Revit file: … sa …".
:::

:::safari
1. I-click ang {{ui:Open a folder}} sa kaliwa (o sa gitna ng walang lamang screen).
2. Piliin ang project folder sa window na bumukas at i-click ang **Upload**. Kahit iyon ang nakasulat, walang umaalis sa Mac mo: ibinibigay lang ang mga file sa tab.
3. Maghintay habang sinasabi ng status line ang "Binabasa ang folder: … file", pagkatapos "Sinusuri ang mga Revit file: … sa …".
:::

Maaari mo ring **i-drag ang folder** mula sa {{pick:mac=Finder|windows=File Explorer|linux=ang file manager mo}} papunta sa page. Ang na-drag na folder ay nagbubukas nang walang permission prompt sa anumang browser.

## Ano ang dapat mong makita

Pinupuno ng folder report ang gitna:

- Ang pangalan ng folder, bilang ng mga model, CAD drawing, IFC model at file, at kabuuang laki.
- Pula o dilaw na tala kung may hindi kumpletong file o may naka-link na file na wala sa folder.
- Ang kahong {{ui:Start here}}: ang file na iminumungkahi ng BimCraft na buksan, kasama ang mga dahilan.
- **Models**: isang hilera bawat model, kasama ang mga backup nito na nakapangkat sa ilalim.
- **Linked and referenced files**, **IFC models**, **CAD drawings** at **Set aside**, kapag may laman ang folder.

Sa kaliwa, binubuod ng panel na {{ui:Folder}} ang lahat; sinasabi ng **Problema** na "Wala" kapag maayos ang bawat kopya.

## Gamitin ang kahong Start here

Pinangangalanan ng kahon ang isang file at sinasabi kung bakit, halimbawa:

- "Pinakabagong na-save na gawa sa folder na ito (Mar 3, 2025)."
- "*Consultant.rvt* ay naka-link sa ibang model, kaya background ito, hindi ang file na ie-edit."
- "*Tower.rvt* mukhang halatang pagpipilian, pero sira ito; ang huling maayos na kopya nito ay mula sa …"
- "Ito ay central model: sa Revit, buksan ito gamit ang "Create New Local" at magtrabaho sa local na kopya."

1. Basahin ang mga dahilan.
2. I-click ang {{ui:Open its card}} para basahin ang card ng file na iyon, o ang {{ui:Show it in the list}} para hanapin ang hilera nito sa **Models**.
3. Magtanong muna sa huling nagtrabaho sa project bago ito pagkatiwalaan. Sinasabi rin ito ng kahon: hula lang ito batay sa mga pangalan, petsa at link.

## Magbukas ng file mula sa report

1. I-click ang pangalan ng model para buksan ang card nito. Sinusuri ng card ang bawat link laban sa folder.
2. I-click ang {{ui:Back to}} at ang pangalan ng folder sa itaas ng card (o ang {{ui:Back to the folder}} sa kaliwa) para bumalik.
3. I-click ang anumang IFC file sa ilalim ng **IFC models** para buksan ito sa 3D.
4. I-click ang anumang DWG o DXF sa ilalim ng **CAD drawings** para buksan ito sa 2D. Awtomatikong hinahanap sa folder ang mga naka-link nitong drawing at larawan.

## Buksan muli ang folder sa susunod na pagkakataon

:::chromium
Ang mga folder na binuksan mo gamit ang {{ui:Open a folder}} o sa pamamagitan ng pag-drag ay nakalista sa ilalim ng {{ui:Recent folders}} sa kaliwa. I-click ang {{ui:Reopen}} at ang pangalan ng folder para buksan ito muli nang hindi pinipili. Pagkatapos i-restart ang browser, magtatanong muli ang Chrome o Edge nang isang beses; piliin ang "Allow on every visit" para hindi na ito magtanong. Nasa browser na ito lang nakalagay ang listahan, hindi kailanman ipinapadala kahit saan. I-click ang × para kalimutan ang isang folder.
:::

:::firefox safari
Hindi naaalala ng browser na ito ang mga folder sa pagitan ng mga pagbisita. Piliin ulit ang folder gamit ang {{ui:Open a folder}}, o i-drag ito.
:::

## Mga karaniwang pagkakamali

- **Pagpili ng sobrang laking folder.** Kapag lampas sa 20,000 file: "This folder has more than 20,000 files. Pick a smaller folder, such as one project." Ang folder na ito ay may higit sa 20,000 file. Pumili ng mas maliit na folder, gaya ng isang project. Piliin ang project folder, hindi ang buong drive.
- **Pagpili sa magulang ng ilang project.** Pumipili na ngayon ang kahong {{ui:Start here}} sa iba't ibang project. Pumili ng isang project lang.
- **Mukhang hindi pinapansin ang mga folder ng Revit.** Ang mga folder na `*_backup`, `*_log` at `Revit_temp` ay pang-housekeeping at nakalista sa ilalim ng **Set aside**, hindi binabasa.
- **Inaasahang bubukas sa 3D ang model mula sa card nito.** Card lang ang project file. Buksan ang IFC export nito.
- **Mga telepono at tablet.** Maraming mobile browser ang hindi makapamili ng folder. Gumamit ng computer.

Tingnan ang [Suriin ang folder para sa mga sirang kopya, nawawalang link at mga naiwang file](topic:check-folder-health) at [Folder report: mga tungkulin, status at link](topic:folder-roles).
