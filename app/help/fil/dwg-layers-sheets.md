---
title: Magtrabaho sa mga layer at sheet
summary: I-on at i-off ang mga layer ng drawing, lumipat sa pagitan ng model space at mga sheet, at unawain kung paano ipinapakita ng mga sheet ang model sa pamamagitan ng kanilang mga viewport.
keywords: layers, layer on off, freeze, thaw, sheets, layouts, paper space, tabs, viewports, layer manager, la
from: a9a16b53
---

## Ano ang gagawin mo

Linisin ang view ng isang magulong drawing sa pamamagitan ng pag-off sa mga layer, pagkatapos tingnan ang mga sheet ng drawing isa-isa.

## Mga hakbang: mga layer

1. Magbukas ng DWG o DXF drawing.
2. Hanapin ang listahan ng {{ui:Layers}} sa kaliwa. Bawat layer ay may checkbox, color swatch at pangalan.
3. I-untick ang isang layer para itago ang lahat ng nasa loob nito.
4. I-click ang {{ui:All off}} para itago ang bawat layer.
5. I-tick lang ang mga layer na gusto mong makita.
6. I-click ang {{ui:All on}} para ipakitang muli ang lahat.

## Ano ang dapat mong makita

Nawawala at muling lumilitaw ang mga layer nang sabay, sa {{ui:Model}} at sa bawat sheet. Ang mga layer na naka-off o frozen sa mismong drawing ay nagsisimulang naka-untick.

## Mga hakbang: mga sheet

1. Tingnan ang hanay ng mga tab sa itaas ng drawing: {{ui:Model}}, pagkatapos ang bawat sheet ayon sa pangalan.
2. I-click ang isang sheet tab.
3. Tingnan ang sheet: nasa mas madilim na desk ang papel, at ipinapakita ng bawat viewport ang bahagi nito ng model sa sarili nitong scale at anggulo.
4. I-zoom sa isang viewport para basahin ang detalye. Ang sheet ang iniiz-zoom mo, hindi ang viewport, kaya sabay na gumagalaw ang buong sheet.
5. I-click ang {{ui:Fit}} o i-double-click para makita muli ang buong sheet.

## Paano gumagana ang mga sheet dito

Ang sheet (isang layout, o paper space) ay may hawak na title block at mga viewport na tumitingin sa model space. Ginugupit ng BimCraft ang bawat viewport sa gilid nito, sa sarili nitong scale at twist, at itinatago ang mga layer na frozen sa viewport na iyon. Ang unang viewport ng bawat sheet ay ang sheet mismo at hindi iginuguhit nang dalawang beses.

## Mga karaniwang pagkakamali

- **Inaasahang mase-save ang mga pagbabago sa layer.** Nakaaapekto lang sa view ang mga setting ng layer, hanggang sa magbukas ka ng ibang file.
- **Inaasahang may kontrol sa layer bawat viewport.** Ang listahan ng {{ui:Layers}} ay nagpapalit ng layer sa lahat ng dako. Ang mga layer na na-freeze sa isang viewport ng drawing ay nananatiling frozen doon.
- **Hinahanap ang layer search o layer states.** Hindi pa ito nagagawa. Nasa pagkakasunod ng drawing ang listahan.
- **Inaasahang magtrabaho sa loob ng viewport.** Walang maia-activate: ipinapakita lang ng BimCraft ang sheet. Gamitin ang {{ui:Model}} para tingnan nang direkta ang model space.
