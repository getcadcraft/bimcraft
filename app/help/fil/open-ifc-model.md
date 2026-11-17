---
title: Magbukas ng IFC model at tumingin-tingin sa 3D
summary: Magbukas ng IFC file, mag-orbit, mag-pan at mag-zoom, at gamitin ang Fit, Itaas, Harap at Side para makahanap ng direksyon.
keywords: ifc, 3d, orbit, pan, zoom, fit, tanaw mula sa itaas, tanaw mula sa harap, tanaw mula sa gilid, navigate, viewcube, camera
from: 68b460dd
---

## Ano ang gagawin mo

Magbukas ng IFC model, gumalaw dito sa 3D, at pumunta sa mga karaniwang view. Mga limang minuto.

Kailangan mo ng `.ifc` na file. Karamihan sa BIM program ay nagluluwas nito; sa Revit, ito ay **File > Export > IFC**. Tingnan ang [Ilagay sa 3D ang project file sa pamamagitan ng IFC](topic:rvt-to-ifc).

## Mga hakbang

1. I-click ang {{ui:Pumili ng file}} (o ang drop area sa kaliwang itaas).
2. Piliin ang iyong `.ifc` na file at kumpirmahin.
3. Hintayin matapos ang status line. Ipinapakita nito ang "Sinisimulan ang IFC engine…" sa unang pagkakataon, pagkatapos ang "Binabasa ang model…" at "Ginagawa ang geometry: … sa … na element".
4. Tingnan ang model: bumubukas ito sa three-quarter view, akma sa screen.
5. I-click ang {{ui:Itaas}} sa toolbar sa itaas ng model para tumingin nang diretso pababa.
6. I-click ang {{ui:Harap}} para tingnan ang harap, pagkatapos ang {{ui:Side}} para tumingin mula sa gilid.
7. I-click ang {{ui:Fit}}, o pindutin ang {{key:F}}, para bumalik sa three-quarter view ng buong model.

## Ang dapat mong makita

- Ang model sa gitna, na may manipis na madilim na gilid para sa itsura ng drawing.
- Ang {{ui:File}} panel sa kaliwa: pangalan ng file, laki, IFC schema (halimbawa IFC2X3 o IFC4), pangalan ng project, phase, program kung saan ito in-export, author, petsa ng export, at bilang ng element at triangle.
- Ang listahan ng {{ui:Mga palapag}} at {{ui:Mga element}} sa ilalim nito.
- Ang status line: "Binuksan *pangalan ng file*: *n* na element sa *s* s".

## Paggalaw sa paligid

:::mouse
| Para sa | Gawin ito |
|---|---|
| Orbit | I-drag gamit ang kaliwang button |
| Pan | I-drag gamit ang kanang button, o hawakan ang {{key:Shift}} (o {{key:Mod}}) at i-drag gamit ang kaliwang button |
| Zoom | I-scroll ang wheel, o i-drag gamit ang gitnang button |
| Tingnan lahat | Pindutin ang {{key:F}} o i-click ang {{ui:Fit}} |
:::

:::mac mouse
Sa trackpad: i-drag gamit ang isang daliri para mag-orbit; hawakan ang {{key:Shift}} o {{key:Mod}} at i-drag para mag-pan; i-scroll gamit ang dalawang daliri o i-pinch para mag-zoom. Ang dalawang-daliring click ay right-click, at maaari kang mag-drag gamit ito para mag-pan, pero mas madali ang {{key:Shift}} at drag.
:::

:::touch
| Para sa | Gawin ito |
|---|---|
| Orbit | I-drag gamit ang isang daliri |
| Zoom | I-pinch gamit ang dalawang daliri |
| Pan | Ilipat nang sabay ang dalawang daliri |
| Tingnan lahat | I-tap ang {{ui:Fit}} |
:::

Laging umiikot ang orbit sa punto sa gitna ng model. Gumagalaw ang pan sa puntong iyon, kaya pagkatapos ng mahabang pan ay maaaring hindi na nasa gitna ang orbit: i-click ang {{ui:Fit}} para i-reset ito.

## Shaded, edges o wireframe

Tatlong maliit na button sa ibabaw ng view cube ang pumipili kung paano iginuguhit ang model: {{ui:Shaded}}, {{ui:Shaded with edges}} (ang default) at {{ui:Wireframe}}. Mga command din ang mga ito (View sa mga menu at sa listahan ng Customize), kaya maaari silang magkaroon ng sarili nilang key. Ang {{ui:Plan}}, {{ui:I-split}} at {{ui:3D}} ay nasa hilera ng {{ui:View}} sa toolbar.

## Karaniwang pagkakamali

- **Pag-asa sa mga pinangalanang view.** Apat na nakapirming view ang BimCraft ({{ui:Fit}}, {{ui:Itaas}}, {{ui:Harap}}, {{ui:Side}}), ang view cube sa kanang-ibabang sulok, at malayang orbit. Hindi nito sine-save ang mga view.
- **Naghahanap ng plano at section.** Walang 2D plano o section box sa build na ito. Gupitin ang model gamit ang isang {{ui:Section}} plane ([Gupitin ang IFC model gamit ang section plane](topic:section-plane)), o i-off ang mga palapag: [Ipakita at itago ang mga palapag, space at gilid](topic:storeys-and-spaces).
- **Pagbubukas ng project file at pag-asa ng 3D.** Bumubukas ang project file bilang file card. I-export muna ang IFC.
- **Pagbubukas ng `.ifczip`.** I-unzip ito, o i-export ang simpleng `.ifc`.
- **Napakalaking model na nagpapabagal o nagpapa-crash sa tab.** Tingnan ang [Mga browser, device at memory](topic:platforms).

## Susunod

[Pumili ng element at basahin ang properties nito](topic:inspect-element).
