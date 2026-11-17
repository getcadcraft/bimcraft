---
title: Mga shaft at opening sa mga sahig
summary: Ang shaft ay iisang outline na pumuputol sa bawat sahig, kisame at bubong sa pagitan ng dalawang level. Ang vertical opening ay pumuputol sa isa sa mga ito. Pinuputol ng Wall Opening ang isang pader.
keywords: shaft, lift shaft, elevator shaft, stair opening, riser, vertical opening, floor opening, ceiling opening, roof opening, skylight opening, butas sa sahig, wall opening, IfcOpeningElement, bawas, net area
from: 8e9e1641
---

## Ano ang gagawin mo

Pumutol ng lift shaft sa isang gusali gamit ang iisang sketch, pumutol ng butas sa isang sahig, at basahin kung ano ang nabawas sa mga lugar.

## Nasaan ang mga tool

- Mga layout ng ribbon: {{ui:Architecture}} › **Opening** › {{ui:Shaft}}, {{ui:Vertical Opening}} at {{ui:Wall Opening}}.
- Classic layout: ang Draw bar › menu na {{ui:Mga silid}} (Shaft, Vertical Opening) at › menu na {{ui:Mga pader}} (Wall opening).

## Shaft

1. Buksan ang floor plan ng level kung saan magsisimula ang shaft. Piliin ang {{ui:Shaft}}.
2. Sa row, piliin ang {{ui:Base level}} at ang {{ui:Top level}}, at ang offset kung magsisimula o magtatapos ito sa itaas o ibaba ng mga ito.
3. I-click ang mga corner ng outline. I-click muli ang unang corner, i-double-click o pindutin ang Enter para tapusin.
4. Pinuputol ang bawat sahig, kisame at bubong sa pagitan ng dalawang taas. Sinasabi ng status line kung ilan.

Iisang bagay ang shaft. Piliin ang outline nito sa alinmang level na dinadaanan nito: ang **Properties** nito ay may pangalan, mga level at offset, kung ano ang pinuputol nito, at ang lugar na nabawas. Kapag binago mo ito, susundin ito ng bawat opening. Kapag binura mo ito, mawawala ang bawat opening. Bawat isa ay isang undo step.

Tuloy-tuloy ang pagputol nito: ang sahig na ginawa mamaya sa pagitan ng mga level nito ay pinuputol nang hindi hinihingi, at ang sahig na binura mo ay pinakakawalan.

Hindi pinuputol ang sahig na kinatatayuan ng shaft (ang top nito ay ang base). Bigyan ng negatibong offset ang base para putulin din ito. Bigyan ng positibong offset ang top para dumaan sa bubong.

## Vertical opening

1. Piliin ang {{ui:Vertical Opening}}. Sa row, piliin kung ano ang puputulin: ang sahig, ang kisame o ang bubong.
2. I-click ang mga corner ng outline at tapusin gaya ng nasa itaas.
3. Pinuputol ang sahig, kisame o bubong ng level na ito sa ilalim ng outline. Iisang elemento lamang ang kabilang dito: kapag binura mo ang sahig, mawawala rin ang opening.

## Wall opening

Ang {{ui:Wall Opening}} ang tool ng [Hubugin ang pader](topic:wall-shape): i-click ang pader sa plan, o dalawang corner sa mukha nito sa 3D.

## Mga dami

Ayon sa panuntunan ng pagsukat para sa mga sahig, ang net area ng elemento ay ang gross area nito na bawas ang nabawas dito. Ang shaft o vertical opening ay bawas sa bawat sahig at kisame na pinuputol nito; ipinapakita ng mga iskedyul na Floors and Finishes at ng IFC quantities ang parehong numero. Sa bubong, ang bawas ay ang lawak ng ibabaw ng bubong: ang plan area na hinati sa cosine ng pitch.

Ang outline na nakabitin lampas sa gilid ay nagbabawas lamang ng bahaging nasa elemento.

## Kung walang napuputol

Nagagawa pa rin ang shaft na walang nakaharang dito, at sinasabi nito iyon: puputulin nito ang anumang itatayo roon mamaya. Kailangan ng vertical opening ng isang bagay sa ilalim nito; kapag walang laman doon, sinasabi ng status line iyon at walang nagagawa.

## Sa IFC

Bawat hiwa ay isang IfcOpeningElement na may IfcRelVoidsElement papunta sa elementong pinuputol nito, kaya ipinapakita ng anumang IFC program ang butas. Pinuputol ang bubong face by face. Ang mismong shaft ay isang IfcGroup ng mga opening nito.

## Hindi pa nagagawa

- Mga curved na outline.
- Mga pader ng shaft: iguhit ang mga ito gamit ang tool na Pader.
- Pag-edit ng outline sa pamamagitan ng pag-drag sa mga corner nito (baguhin sa Properties, o burahin at i-sketch muli).
- Ang sariling Properties ng iginuhit na sahig ay nagpapakita lamang ng lugar nito na bawas ang sarili nitong opening; kasama sa mga iskedyul at IFC quantities ang sa shaft.

Tingnan din ang [Mga room at room separator](topic:rooms-and-separators).
