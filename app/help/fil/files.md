---
title: Mga file na binubuksan at sine-save ng BimCraft
summary: Bawat format na binubuksan ng BimCraft, ano ang itinatago nito, ano ang sine-save nito, saan napupunta ang mga na-save na file, at ano ang nagbabago sa pagitan ng mga browser at kapag offline ka.
keywords: format, buksan, i-save, export, download, ifc, rvt, rfa, rte, rft, dwg, dxf, step, stp, csv, upload, privacy, laki ng file
from: a1f0161b
---

Nagbabasa ang BimCraft ng mga file sa computer mo, sa browser tab. **Walang ina-upload** sa CadCraft o kaninuman. Kapag nag-save ka, nagbibigay ang BimCraft sa browser ng bagong file na idodownload; hindi nito kailanman isinusulat sa ibabaw ng file na binuksan mo.

## Ang mga binubuksan nito

| Format | Mga extension | Ano ang makukuha mo |
|---|---|---|
| IFC | `.ifc` | Ang model sa 3D, mga palapag, bilang ng element at ang property ng bawat element. Mapapalitan ang mga pangalan, tag at iisang property value. |
| Project at family file | `.rvt` `.rfa` `.rte` `.rft` | Isang file card: release, build, worksharing, impormasyon ng project, family parameter, naka-link na file at larawan ng preview. Walang 3D. |
| DWG | `.dwg` | Ang drawing sa 2D: model space, bawat sheet, layer, naka-link na drawing, larawan at print view. Model space din sa 3D. Ang mga format mula AutoCAD 2000 hanggang 2018 ang nasuri. |
| DXF | `.dxf` | Pareho ng DWG. |
| STEP | `.step` `.stp` | Isang piyesa, isang kagamitan o model ng supplier (AP203, AP214, AP242) sa 3D: bawat solid ay nagiging isang element (building element proxy) ng maliit na IFC model sa isang palapag, binabasa bilang mga triangle sa totoong laki, isang assembly na may bawat piyesa kung saan ito inilagay ng file. Mula roon, gumagana ito gaya ng anumang IFC: mga property, section, measure, i-save bilang IFC. Hindi binabasa ang mga kulay at ang assembly tree. |
| Point cloud | `.las` `.laz` `.e57` `.ply` `.pcd` `.ptx` `.pts` `.xyz` | Ang scan sa 3D view, katabi ng model o mag-isa: tingnan ang [Ipakita ang point cloud katabi ng model](topic:point-clouds). |
| Project bundle | `.ccbundle.zip` | Ang model kasama ang mga view, layout at property group nito: tingnan ang [Buksan ang project bundle](topic:open-project-bundle). |
| Isang folder | alinman | Ulat ng bawat model, drawing at project bundle sa loob nito. Anumang IFC, model, drawing o bundle sa ulat ay bubukas sa isang click. |

[Ano ang binabasa ng BimCraft mula sa bawat format](topic:file-formats) ay mas detalyado.

Tinutukoy ng BimCraft kung ano ang file sa pamamagitan ng unang bytes nito at pati pangalan nito, kaya ang project file na may kakaibang extension ay bubukas pa rin bilang file card.

### Hindi nabubuksan

- `.ifczip` at `.ifcxml`: sinasabi ng BimCraft na "Hindi pa suportado ang .ifczip. I-save o i-export ang model bilang simpleng .ifc file." I-unzip ang `.ifczip` (naglalaman ito ng simpleng `.ifc`) o i-export muli bilang simpleng IFC.
- Nakalista sa ulat ng folder ang mga DGN drawing pero hindi sila nabubuksan.
- Hindi nabubuksan nang mag-isa ang PDF, larawan at office file. Ginagamit ang mga larawan bilang larawan sa loob ng DWG, at ginagawang pader ng {{ui:Build}} › {{ui:Mula sa drawing…}} ang mga pahina ng PDF o scan: tingnan ang [Mga pader mula sa set ng plano](topic:walls-from-plans).

## Ano ang sine-save nito

| Ang i-click mo | Ang makukuha mo | Saan |
|---|---|---|
| {{ui:I-save bilang IFC}} | Bagong IFC file na may mga edit mo, pinangalanang "*original name* (edited).ifc" | Ang downloads folder ng browser mo |
| {{ui:I-download ang CSV}} sa iskedyul ng equipment | Isang CSV ng mga item sa listahan, pinangalanang "*drawing name* equipment.csv" | Ang downloads folder ng browser mo |

Ang iba pa ay sine-save kung saan ginawa ang mga ito, bawat isa sa sariling topic: {{ui:USD}} ([I-export ang model bilang USD](topic:usd)), ang .glb ng {{ui:Para sa rendering}}, mga rendered na larawan, sheet at plano bilang PDF, iskedyul at listahan bilang CSV, BCF issue, ang COBie spreadsheet, family file, at mga naka-register na scan bilang LAS o E57. Hindi nagse-save ang BimCraft ng DWG, DXF o project file, at hindi nito kailanman binabago ang mga file na binuksan mo.

:::chromium
Sine-save ng Chrome at Edge ang mga download sa folder na nakatakda sa kanilang settings, kadalasan ang Downloads. Para tanungin kung saan i-save ang bawat file bago mag-download, i-on ang "Ask where to save each file before downloading" sa download settings ng browser.
:::

:::firefox
Sine-save ng Firefox sa Downloads folder maliban kung itinakda mo ang "Always ask you where to save files" sa settings nito.
:::

:::safari
Sine-save ng Safari sa Downloads maliban kung pipili ka ng ibang folder sa ilalim ng **Safari > Settings > General > File download location**.
:::

## Pag-save nang pangalawang beses

Bawat save ay nagda-download ng buong model na may **bawat edit mula nang buksan mo ito**, hindi lang ang mga edit pagkatapos ng huling save. Nagsisimulang muli nang walang laman ang listahan ng {{ui:Mga pagbabago}} pagkatapos ng bawat save, kaya hindi ka makaka-undo nang lampas sa isang save. Para magsimula ulit mula sa orihinal, buksan muli ang orihinal na file.

## Malalaking file at memory

- Ang **IFC** na file ay binabasa nang buo sa memory ng tab, at mas maraming memory pa ang kinukuha ng 3D geometry. Ang model na ilang daang megabyte ay maaaring sobra na para sa laptop. Lampas sa 1.5 milyong triangle, naka-off ang mga edge para makatipid ng memory ("Naka-off ang mga edge para sa napakalaking model").
- Ang **project file** ay hindi binabasa nang buo. Binabasa lang ng BimCraft ang maliliit na bahagi na kailangan nito, mga 40 KB hanggang 100 KB gaano man kalaki ang file, kaya ang 500 MB na central model sa network drive ay bumubukas sa isang kisap-mata.
- Ang **DWG at DXF** na file ay binabasa nang buo. Ang napakalaking drawing ay nagpapakita ng "Napakalaki ng drawing na ito; bahagi lang nito ang ipinapakita."
- Ang mga **folder** na hanggang 20,000 file ay nabubuksan. Ilang kilobyte lang ng bawat model card ang binabasa.

Tingnan ang [Mga browser, device at memory](topic:platforms) para sa iba pa.

## Online at offline

Hindi kailanman kailangan ng internet para magbukas ng file. Isang reader ang nagla-load mula sa site sa unang pagkakataong kailanganin mo ito: ang IFC engine, sa unang pagbubukas mo ng IFC model ("Sinisimulan ang IFC engine…"). Bahagi ng app ang mga DWG at DXF reader.

:::offline
Offline ka. Kung sinasabi ng button sa app bar ang {{ui:Handa offline}}, bubukas ang bawat format gaya ng dati. Kung hindi, hindi mabubuksan ang IFC model maliban kung may nabuksan nang isa sa tab na ito: kumonekta muli muna. Tingnan ang [Online at offline](topic:online-offline).
:::

Para magamit ang BimCraft nang walang koneksyon, i-click ang {{ui:I-save para sa offline}} sa app bar habang online ka at maghintay para sa {{ui:Handa offline}}. Mga 33 MB ang naka-save na kopya; kasama rito ang IFC engine, kaya bumubukas din offline ang mga IFC model. Ipinapaliwanag ng [Pagtatrabaho offline](common:offline) ang mga naka-save na kopya sa pangkalahatan.

## Pag-save sa cloud

Hindi pa available ang cloud saving. I-save ang mga na-edit mong kopya sa sarili mong computer o file server ng opisina mo, gaya ng anumang file. Tingnan ang [Ang mga file mo](common:your-files).
