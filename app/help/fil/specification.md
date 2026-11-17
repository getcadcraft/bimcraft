---
title: Isulat ang specification mula sa model
summary: Isang seksyon ng specification para sa bawat wall, door, window, floor at finish type na ginagamit, na may mga datos na binabasa mula sa model at sarili mong teksto, na ginagawang PDF o Word document.
keywords: specification, spec, working drawings, stage 5, construction documents, seksyon, uri ng pader, uri ng door, uri ng window, finish, classification, uniclass, omniclass, masterformat, dokumento, pdf, word, docx, mga iskedyul
from: a6acc6d4
---

## Ano ang gagawin mo

Kumuha ng specification na sumusunod sa model: isang seksyon para sa bawat type na tunay na nasa gusali, bawat isa ay may build-up at dami nitong binabasa mula sa model, at ang tekstong isinulat mo para dito.

## Mga hakbang

1. I-on ang {{ui:Draw}}, buksan ang **Mga Iskedyul** sa kaliwang panel at i-click ang **Specification**.
2. Ipinapakita ng dialog ang isang seksyon para sa bawat wall type, door type, window type, floor at room finish na ginagamit. Sa ilalim ng bawat heading ay ang mga **facts** nito, na binabasa mula sa model: kapal, mga layer isa-isa, level of development, mga laki, ilan at gaano karami. Ang seksyong may classification code sa mga elemento nito ay nagpapakita ng code sa heading nito.
3. Isulat ang tekstong specification mo sa kahon sa ilalim ng seksyon. Ipinapakita ng **Select its elements** kung ano ang tungkol sa seksyon.
4. I-click ang **Save**. Isa itong hakbang sa Undo, at nananatili ang teksto sa building file.
5. Buksan ang **Mga dokumento mula sa model**, piliin ang template na **Specification** at i-click ang **Preview**, saka i-save bilang PDF, Word o Markdown. Tingnan ang [Mga dokumento mula sa model](topic:documents-from-the-model).

## Ang mga iskedyul ng working drawing bilang dokumento

Ang template na **Working drawing schedules** ay nagpi-print ng door, window at finish schedule nang direkta mula sa model, sa layout ng iyong opisina. Sa sarili mong template, isulat ang `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}`, o ang pangalan ng naka-save na set-up, halimbawa `{{schedule Door schedule by floor}}`. Ang `{{specification}}` ay nagpi-print ng specification.

## Dapat malaman

- Ang mga datos ay sa model. Nagbabago ang mga ito kapag nagbago ang model; ang teksto mo ay hindi.
- Hindi nagsusulat ang BimCraft ng anumang clause ng anumang pamantayan o teksto ng manufacturer. Ang seksyong walang teksto ay nagpi-print ng "Wala pang nasusulat na teksto ng specification."
- Nananatili ang tekstong isinulat para sa type na wala na sa model at nakalista sa ilalim ng "Teksto para sa mga type na wala na sa model".
- Para baguhin ang generic na type para sa tiyak na build-up, tingnan ang [Mga tool ng pader](topic:wall-tools) (Palitan ang type).
