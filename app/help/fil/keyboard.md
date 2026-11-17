---
title: Mga key at mouse
summary: Bawat key, mouse, trackpad at touch na aksyon sa BimCraft, pinagsama-sama ayon sa kung ano ang tinitingnan mo.
keywords: keyboard, shortcut, hotkey, mga key, mouse, trackpad, touch, orbit, pan, zoom, itago, isolate, transparent, undo, redo, kopyahin, paste, duplicate, i-save, fit, print view, escape, mga setting, draw, pader, pinto, bintana, plano
from: 5c6eedce
---

BimCraft ay may kaunting shortcut. Karamihan ng gawain ay ginagawa gamit ang mouse at ang mga panel. Ang mga shortcut na isinulat gamit ang {{key:Mod}} ay gumagamit ng Command sa Mac at Ctrl sa iba pa. Tingnan ang [Mga key, mouse at trackpad](common:keys) para sa kung paano isinusulat ang mga key sa help na ito.

## Saanman

| Key | Ginagawa nito |
|---|---|
| {{key:Ctrl+Shift+F}} | Ikutin ang mga screen mode: normal, full screen, full screen na nakatago ang mga bar. Ctrl sa bawat platform, kasama ang Mac |
| {{key:Esc}} | Lumabas sa full screen |
| {{key:Mod+,}} | Buksan ang {{ui:Mga setting}}. Tingnan ang [Mga setting ng BimCraft](topic:settings) |
| {{key:Tab}} | Lumipat sa pagitan ng mga button, checkbox at value. Maaabot ang bawat control gamit ang keyboard |

## 3D view (mga IFC model)

| Key o aksyon | Ginagawa nito |
|---|---|
| {{key:F}} | I-fit ang buong model, three-quarter view (katulad ng {{ui:Fit}}) |
| {{key:Esc}} | I-clear ang pagpili, o huminto sa paglalagay o pag-paste |
| Click | Piliin ang elementong nasa ilalim ng pointer; i-click ang walang laman na background para i-clear |
| {{key:Mod}}+click o {{key:Shift}}+click | Idagdag ang elemento sa pagpili, o alisin ito |
| {{key:H}} | Itago ang mga piniling elemento. Tingnan ang [Itago, i-isolate at gawing transparent ang mga elemento](topic:hide-and-isolate) |
| {{key:I}} | Ipakita lang ang mga piniling elemento (isolate) |
| {{key:T}} | Ipakita ang mga piniling elemento, at transparent ang lahat ng iba pa |
| {{key:Shift+H}} | Ipakita muli ang bawat elemento |
| {{ui:Walk}} | Pagkatapos, {{key:W}} {{key:A}} {{key:S}} {{key:D}} o mga arrow para mag-walk, {{key:Shift}} para tumakbo, i-drag para tumingin sa paligid, {{key:Esc}} para huminto. Tingnan ang [Mag-walk sa model](topic:walk) |
| {{key:M}} | Sukatin ang distansya at lugar ng face. Tingnan ang [Sukatin ang distansya, lugar ng face at lokasyon sa 3D](topic:measure) |
| I-drag gamit ang kaliwang button | Orbit |
| I-drag gamit ang kanang button | Pan |
| {{key:Shift}} o {{key:Mod}} at i-drag gamit ang kaliwang button | Pan (maginhawa sa trackpad) |
| I-scroll ang wheel, o i-drag gamit ang gitnang button | Zoom |
| Two-finger scroll o pinch sa trackpad | Zoom |
| Isang daliri (touch) | Orbit; ang tap ay pumipili |
| Dalawang daliri (touch) | Pinch para mag-zoom, galaw nang sabay para mag-pan |

| {{key:X}} | Section plane na naka-on at naka-off. Tingnan ang [Hiwain ang IFC model gamit ang section plane](topic:section-plane) |
| {{key:Shift+X}} | Section box sa paligid ng mga piniling elemento, kasama ang room na nakatakda sa Settings |

Walang key para sa {{ui:Itaas}}, {{ui:Harap}} at {{ui:Side}}; gamitin ang mga button.

## Edit

Nasa toolbar din ang parehong command: {{ui:I-undo}}, {{ui:I-redo}}, {{ui:Kopyahin}}, {{ui:I-paste}} at ang menu na {{ui:Higit pa}}, na nagpapakita ng bawat key. Gumagana ang mga ito sa 3D view ng IFC model, hindi kapag nagta-type ka sa field. Tingnan ang [Kopyahin, i-paste at i-duplicate ang mga library item](topic:copy-paste).

| Key | Ginagawa nito |
|---|---|
| {{key:Mod+Z}} | I-undo ang huling pagbabago |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | I-redo ang binawi ng Undo |
| {{key:Mod+C}} | Kopyahin ang mga piniling elemento (ang kanilang pangalan at property ay napupunta rin sa clipboard bilang text) |
| {{key:Mod+X}} | I-cut ang mga piniling elemento: kopyahin, tapos burahin |
| {{key:Mod+V}} | I-paste ang kinopya mo: sumusunod ito sa pointer, i-click kung saan ito pupunta |
| {{key:Mod+Shift+V}} | I-paste sa mismong lugar: kung saan galing ang cut, o sa tabi ng orihinal pagkatapos ng copy |
| {{key:Mod+D}} | Duplicate: kopyahin ang mga piniling elemento at simulan ang pag-paste ng mga ito |
| {{key:Delete}} | Burahin ang mga piniling elemento, kasama ang kanilang mga parte at opening. Tingnan ang [Burahin, i-cut, kopyahin at i-paste ang mga building element](topic:edit-elements) |
| {{key:Mod+A}} | Piliin ang bawat elementong nakikita |
| {{key:Esc}} | Huwag piliin ang kahit alin |

Kapag may napiling text sa page, kinokopya ng {{key:Mod+C}} ang text na iyon gaya ng dati.

## View ng plano (Draw)

Gumagana ang mga ito habang naka-on ang {{ui:Draw}} at hindi ka nagta-type sa field. Tingnan ang [Mag-draw ng pader](topic:draw-walls) at [Mga pinto at bintana](topic:doors-and-windows).

| Key o aksyon | Ginagawa nito |
|---|---|
| {{key:V}} | {{ui:Piliin}} |
| {{key:W}} | {{ui:Pader}} |
| {{key:D}} | {{ui:Pinto}} |
| {{key:N}} | {{ui:Bintana}} |
| {{key:H}} | Kapag {{ui:Pinto}} o {{ui:Bintana}}: ang hinge ay nasa kabilang dulo |
| {{key:Shift}} habang gumuguguhit ng pader | Panatilihin ito sa 0°, 90°, 180° o 270° |
| Mga digit at ang foot at inch mark (`'` at `"`) | Simulan mag-type ng haba sa {{ui:Haba}} box; ginagamit ito ng {{key:Enter}} |
| {{key:Enter}}, {{key:Esc}}, right-click o double-click | Tapusin ang pader na iginuguhit mo; ang {{key:Esc}} ulit ay bumabalik sa {{ui:Piliin}} |
| {{key:Delete}} | Burahin ang mga piniling pader, pinto at bintana; magdudugtong muli ang mga natirang pader |
| {{key:F}} habang nasa plano ang pointer | I-fit ang plano |
| I-scroll ang wheel | Zoom sa paligid ng pointer |
| I-drag gamit ang gitnang o kanang button, o {{key:Space}} at i-drag | Pan; kapag naka-on ang {{ui:Piliin}}, pan din ang simpleng drag |
| I-drag ang pinto o bintana gamit ang {{ui:Piliin}} | Ilipat ito sa kahabaan ng pader nito, o papunta sa ibang pader |
| Dalawang daliri (touch) | Pinch para mag-zoom, galaw nang sabay para mag-pan |

## Paglalagay at pag-paste ng library item

| Key | Ginagawa nito |
|---|---|
| {{key:R}} | Paikutin ang item ng 90° |
| {{key:Tab}} | I-on at i-off ang wall snap: ang likod ng item ay dumidikit sa pinakamalapit na pader |
| {{key:Enter}} sa **X, Y (mm)** | Ilagay sa na-type na posisyon |
| {{key:Esc}} | Huminto sa paglalagay o pag-paste |

## Pag-edit ng IFC value

| Key | Ginagawa nito |
|---|---|
| {{key:Enter}} | Panatilihin ang value na na-type mo |
| {{key:Esc}} | Kanselahin at ibalik ang lumang value |
| I-click sa ibang lugar | Panatilihin ang value na na-type mo |
| {{key:Mod+Z}} | I-undo ang huling pagbabago. Gumagana lang habang may hindi pa naka-save na pagbabago at hindi ka nagta-type sa field |
| {{key:Mod+Y}} | I-redo ang binawi ng Undo |
| {{key:Mod+S}} | I-save bilang IFC. Gumagana lang habang may hindi pa naka-save na pagbabago; kung hindi, bubukas ang sariling save command ng browser |

Para mag-edit gamit lang ang keyboard: pindutin ang {{key:Tab}} hanggang may ma-highlight na value, tapos pindutin ang {{key:Enter}} para simulan mag-type.

## 2D drawing (DWG at DXF)

| Key o aksyon | Ginagawa nito |
|---|---|
| {{key:F}} | I-fit ang drawing o ang sheet |
| {{key:P}} | I-on at i-off ang print view |
| Double-click | {{ui:Fit}} |
| I-drag gamit ang anumang button | Pan |
| I-scroll ang wheel | Zoom sa pointer |
| Two-finger scroll o pinch sa trackpad | Zoom sa pointer. Hindi nagpa-pan ang two-finger scroll |
| Isang daliri (touch) | Pan. Hindi pa nagagawa ang pinch zoom para sa drawing |

## Mga drawing sa 3D

| Key o aksyon | Ginagawa nito |
|---|---|
| {{key:3}} | I-on at i-off ang 3D (pati sa 2D view) |
| {{key:F}} | Extents: ang buong drawing |
| I-drag gamit ang gitnang o kaliwang button | Orbit |
| I-drag gamit ang kanang button, o {{key:Shift}} at i-drag | Pan |
| I-scroll ang wheel | Zoom papunta sa nasa ilalim ng pointer |
| Two-finger swipe sa trackpad | Orbit; kapag may {{key:Shift}}, pan |
| Pinch sa trackpad | Zoom |
| Isang daliri (touch) | Orbit |
| Dalawang daliri (touch) | Pinch para mag-zoom, galaw nang sabay para mag-pan |

Walang epekto ang {{key:F}}, {{key:P}} at {{key:3}} habang nagta-type ka sa field, habang nakikita ang equipment schedule, o kapag hawak mo ang {{key:Mod}} o {{key:Alt}}.

## Mga file

| Aksyon | Ginagawa nito |
|---|---|
| I-drag ang file papunta sa page | Buksan ito |
| I-drag ang folder papunta sa page | Buksan ito bilang project folder, nang walang permission prompt |
