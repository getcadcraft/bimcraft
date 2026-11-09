---
title: Mga file na binubuksan at sine-save ng BimCraft
summary: Bawat format na binubuksan ng BimCraft, ano ang pinapanatili nito, ano ang sine-save nito, saan napupunta ang mga naka-save na file, at ano ang nagbabago sa pagitan ng mga browser at kapag offline ka.
keywords: mga format, buksan, i-save, i-export, i-download, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, i-upload, privacy, laki ng file
from: a7275dbf
---

Binabasa ng BimCraft ang mga file sa iyong computer, sa browser tab. **Walang ina-upload** sa CadCraft o kaninuman. Kapag nag-save ka, nagbibigay ang BimCraft sa browser ng bagong file na idadownload; hindi ito kailanman nag-o-overwrite sa file na binuksan mo.

## Ano ang nabubuksan

| Format | Extensions | Ano ang makukuha mo |
|---|---|---|
| IFC | `.ifc` | Ang model sa 3D, mga palapag, bilang ng element at ang mga property ng bawat element. Maaaring baguhin ang mga pangalan, tag at iisang halaga ng property. |
| Project at family file | `.rvt` `.rfa` `.rte` `.rft` | Isang file card: release, build, worksharing, impormasyon ng proyekto, family parameters, naka-link na file at ang preview na larawan. Walang 3D. |
| DWG | `.dwg` | Ang drawing sa 2D: model space, bawat sheet, layer, naka-link na drawing, larawan at print view. Model space din sa 3D. Ang mga format mula AutoCAD 2000 hanggang 2018 ang nasuri. |
| DXF | `.dxf` | Kapareho ng DWG. |
| STEP | `.step` `.stp` | Isang piyesa, kagamitan o model ng supplier (AP203, AP214, AP242) sa 3D: bawat solid ay nagiging isang element (building element proxy) ng maliit na IFC model sa isang palapag, binabasa bilang mga triangle sa totoong laki nito, at isang assembly na may bawat piyesa kung saan ito inilagay ng file. Mula roon, gumagana ito tulad ng anumang IFC: mga property, section, measure, I-save bilang IFC. Hindi binabasa ang mga kulay at ang assembly tree. |
| Point cloud | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Ang scan sa 3D view, katabi ng model o mag-isa: tingnan ang [Ipakita ang point cloud katabi ng model](topic:point-clouds). |
| Project bundle | `.ccbundle.zip` | Ang model kasama ang mga view, layout at property group nito: tingnan ang [Buksan ang project bundle](topic:open-project-bundle). |
| Isang folder | anuman | Isang ulat ng bawat model, drawing at project bundle sa loob nito. Anumang IFC, model, drawing o bundle sa ulat ay nabubuksan sa isang click. |

Ipinapaliwanag nang detalyado ang [Ano ang binabasa ng BimCraft sa bawat format](topic:file-formats).

Tinutukoy ng BimCraft kung ano ang file sa pamamagitan ng pagtingin sa unang bytes nito at sa pangalan nito, kaya nabubuksan pa rin bilang file card ang project file na may kakaibang extension.

### Hindi nabubuksan

- `.ifczip` at `.ifcxml`: Sinasabi ng BimCraft na ".ifczip ay hindi pa suportado. I-save o i-export ang model bilang simpleng .ifc na file." I-unzip ang `.ifczip` (naglalaman ito ng simpleng `.ifc`) o i-export muli bilang simpleng IFC.
- Nakalista sa ulat ng folder ang mga DGN drawing ngunit hindi ito nabubuksan.
- Hindi nabubuksan nang mag-isa ang PDF, larawan at office file. Ginagamit ang mga larawan bilang picture sa loob ng DWG, at ang {{ui:Build}} › {{ui:Mula sa drawing…}} ay ginagawang pader ang mga pahina ng PDF o scan: tingnan ang [Mga pader mula sa set ng plano](topic:walls-from-plans).

## Ano ang sine-save

| Ika-click mo | Makukuha mo | Saan |
|---|---|---|
| {{ui:I-save bilang IFC}} | Bagong IFC na file na may iyong mga edit, pinangalanang "*orihinal na pangalan* (edited).ifc" | Downloads folder ng iyong browser |
| {{ui:I-download ang CSV}} sa equipment schedule | CSV ng mga item sa listahan, pinangalanang "*pangalan ng drawing* equipment.csv" | Downloads folder ng iyong browser |

Ang ibang bagay ay sine-save kung saan sila ginawa, bawat isa sa sariling topic: {{ui:USD}} ([I-export ang model bilang USD](topic:usd)), {{ui:Collada}} ([I-export ang model bilang Collada o para sa Google Earth](topic:collada)), ang .glb na {{ui:Para sa rendering}}, mga rendered na larawan, sheet at plano bilang PDF, mga schedule at listahan bilang CSV, mga BCF issue, ang COBie spreadsheet, mga family file, at mga nairehistrong scan bilang LAS o E57. Hindi nagse-save ang BimCraft ng DWG, DXF o project file, at hindi nito kailanman binabago ang mga file na binuksan mo.

:::chromium
Sine-save ng Chrome at Edge ang mga download sa folder na nakatakda sa kanilang mga setting, karaniwang Downloads. Para tanungin kung saan i-save sa bawat pagkakataon, i-on ang "Ask where to save each file before downloading" sa download settings ng browser.
:::

:::firefox
Sine-save ng Firefox sa Downloads folder maliban kung itinakda mo ito sa "Always ask you where to save files" sa mga setting nito.
:::

:::safari
Sine-save ng Safari sa Downloads maliban kung pipili ka ng ibang folder sa ilalim ng **Safari > Settings > General > File download location**.
:::

## Pag-save sa pangalawang beses

Bawat save ay nagda-download ng buong model kasama ang **bawat edit mula nang buksan mo ito**, hindi lang ang mga edit pagkatapos ng huling save. Nagsisimulang walang laman muli ang listahan ng {{ui:Mga pagbabago}} pagkatapos ng bawat save, kaya hindi ka na makaka-undo lampas sa isang save. Para magsimula muli mula sa orihinal, buksan muli ang orihinal na file.

## Malalaking file at memory

- Ang mga **IFC** file ay binabasa nang buo sa memory ng tab, at ang 3D geometry ay kumukuha pa ng karagdagang memory. Ang model na ilang daang megabyte ay maaaring sobra na para sa laptop. Kapag lumampas sa 1.5 milyong triangle, naka-off ang mga edge para makatipid ng memory ("Naka-off ang mga edge para sa napakalaking model").
- Hindi binabasa nang buo ang **mga project file**. Binabasa lang ng BimCraft ang maliliit na bahaging kailangan nito, mga 40 KB hanggang 100 KB anuman ang laki ng file, kaya ang 500 MB na central model sa network drive ay nabubuksan sa sandali lang.
- Binabasa nang buo ang mga file na **DWG at DXF**. Ang napakalaking drawing ay nagpapakita ng "Napakalaki ng drawing na ito; bahagi lang nito ang ipinapakita."
- Nabubuksan ang **mga folder** hanggang 20,000 file. Kaunting kilobyte lang na kailangan ng bawat model card ang binabasa.

Tingnan ang [Mga browser, device at memory](topic:platforms) para sa karagdagang detalye.

## Online at offline

Hindi kailangan ng internet ang pagbubukas ng mga file. Isang reader lang ang nilo-load mula sa site sa unang pagkakataong kailangan mo ito: ang IFC engine, sa unang beses na magbukas ka ng IFC model ("Sinisimulan ang IFC engine…"). Bahagi ng app ang DWG at DXF reader.

:::offline
Offline ka. Kung sinasabi ng button sa app bar ang {{ui:Handa offline}}, normal na nabubuksan ang bawat format. Kung hindi, hindi mabubuksan ang IFC model maliban kung may nabuksan na sa tab na ito: kumonekta muli muna. Tingnan ang [Online at offline](topic:online-offline).
:::

Para magamit ang BimCraft nang walang koneksyon, i-click ang {{ui:I-save para sa offline}} sa app bar habang online ka at maghintay sa {{ui:Handa offline}}. Mga 33 MB ang naka-save na kopya; kasama rito ang IFC engine, kaya nabubuksan din offline ang mga IFC model. Ipinapaliwanag ng [Pagtatrabaho offline](common:offline) ang mga naka-save na kopya sa pangkalahatan.

## Pag-save sa cloud

Hindi pa available ang pag-save sa cloud. I-save ang mga na-edit mong kopya sa sarili mong computer o sa file server ng opisina mo, gaya ng anumang file. Tingnan ang [Ang iyong mga file](common:your-files).
