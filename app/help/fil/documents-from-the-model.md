---
title: Mga dokumento mula sa model
summary: Isulat minsan ang specification o paglalarawan bilang template, na may mga field para sa quantities, properties at tags, at punan ito mula sa bukas na IFC bilang PDF o Word document.
keywords: dokumento, document, documents, specification, spec, paglalarawan, description, template, markdown, report, word, docx, pdf, dami, quantities, schedule, trade, door schedule, finishes, documentcad
from: 2b0c9156
---

## Ano ang gagawin mo

Ang template ay teksto sa Markdown na may mga field sa double braces. Pinupunan ng BimCraft ang mga field mula sa bukas na model (bilang, quantities ayon sa uri, properties, ang iyong [tags](topic:tags-and-schedules)) at sine-save ang resulta bilang PDF, Word document (.docx) o Markdown.

## Mga hakbang

1. Magbukas ng IFC model.
2. Sa kaliwang panel, sa ilalim ng {{ui:Quantities}}, buksan ang {{ui:Documents from the model}}.
3. Pumili ng template: {{ui:Doors and hardware}} o {{ui:Walls, linings and finishes}}, o {{ui:Load a template (.md)…}} para sa sarili mo.
4. Kung binabasa ng template ang mga tag na hindi pa dine-define ng model, i-click ang {{ui:Add this template’s tags}}, saka i-tag ang mga element sa ilalim ng {{ui:Tags}}.
5. Baguhin ang teksto kung gusto mo at i-click ang {{ui:Show the document}}.
6. I-click ang {{ui:PDF}} (pumili muna ng A4 o Letter) o {{ui:Word (.docx)}}.

## Ano ang dapat mong makita

- Ang napunang dokumento sa ilalim ng mga button, kasama ang mga table nito.
- Listahan ng babala kapag hindi mabasa ang isang field (tag na hindi defined, property na wala sa model, block na hindi nagsara); ang ganitong field ay lumalabas bilang `[?…]`.
- Mga PDF page na may title ng dokumento at "Page 1 of 3" sa ibaba ng bawat page; ang mahahabang table ay nagpapatuloy kasama ang kanilang header row.

## Mga field

| Field | Ibinibigay |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | ang pangalan at paglalarawan ng project, ang pangalan ng file, ang petsa ngayon |
| `{{count IfcDoor}}` | ilang pinto |
| `{{sum IfcWall NetSideArea}}` | kabuuan, kasama ang unit nito |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetika (`+ - * /` at bracket) sa mga term sa square bracket: `[sum …]`, `[count …]`, at sa loob ng each ang `[qty Width]`. Itinatakda ng `round n` ang decimals, nagdaragdag ang `unit` ng unit. Ang hindi nito mabasa, o paghahati sa zero, ay lumalabas bilang `[?…]` at nagbababala |
| `{{qty IfcWall NetSideArea by Type}}` | isang table: isang row kada uri na may bilang at kabuuan nito, at isang row ng kabuuan |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | isang table, isang row kada element |
| `{{tag Finish}}` | sa loop, ang value ng element; sa labas, ang bawat value na ginamit (Oak, Paint) |
| `{{tags}}` | ang tag definitions bilang table |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | ang teksto minsan kada element; ang bahagi pagkatapos ng `{{else}}` kapag walang element |
| `{{#group IfcWall by Type}} … {{/group}}` | ang teksto minsan kada uri, kasama ang `{{value}}`, `{{count}}`, `{{sum Length}}` at isang simpleng `{{#each}}` sa loob |

Sa loob ng `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (ang IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (ang sariling value ng element, kasama ang unit nito).

Maaaring maraming klase (`IfcDoor|IfcWindow`) o bawat element (`*`). Paliitin ang alinman sa mga ito gamit ang `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Ang mga pagsusuri ay `=`, `!=`, `~` (naglalaman), `>`, `<`, `>=`, `<=`, `has` at `hasnot`; pagsamahin ang marami gamit ang `and`; maglagay ng value na may spaces sa "quotes". Inaayos ng `sort Name` ang loop.

## Mga schedule at specification sa dokumento

`{{schedule doors}}` ay nagpi-print ng model schedule bilang table, sa iyong office layout: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, o ang pangalan ng set-up na na-save mo sa Schedules. Nagpi-print ang `{{specification}}` ng specification ng project. Ginagamit ito ng mga template na **Mga working drawing schedule** at **Specification**. Sa preview, i-click ang figure ng ganitong schedule para piliin ang mga element na pinanggalingan nito. Tingnan ang [Ayusin, i-save at i-export ang schedule](topic:schedule-layouts) at [Isulat ang specification mula sa model](topic:specification).

## Good to know

- Ang field ay pangalan ng built-in (Name, Type, Storey, Class, Material, Mark), tag (`tag:Fire rating`, o ang pangalan nito), property (`Pset_WallCommon.FireRating`), o pangalan lamang ng property (`NetSideArea`, `Width`): ang bare na pangalan ay bumabasa sa sariling set ng bawat element, na nauuna ang quantity sets, kaya ang `Width` sa pinto ay lapad ng pinto, hindi kapal ng pader. Sa loob ng `where`, ang bare na pangalan ay bumabasa sa set na mayroon ang karamihan sa mga napiling element.
- Ang quantities ay ang sinasabi ng quantity sets ng file (isinusulat ito ng BimCraft para sa mga iginuhit nito); galing sa unit settings ng file ang mga unit.
- Nananatiling nasa Ingles ang mga salita ng field (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) sa lahat ng wika. Nasa Ingles ang mga halimbawang template.
- Hindi nagiging formatting ang teksto mula sa model: ang pangalang may `*` o `|` ay lumalabas gaya ng pagkakasulat nito.
- I-save ang template na binago mo gamit ang {{ui:Keep in this browser}} (nasa browser na ito lamang) o {{ui:Download the template}}.
- Gumagamit ang teksto ng PDF ng karaniwang PDF font: ang karakter na labas sa Western European text ay lumalabas bilang "?" at sinasabi ng status line kung ilan.
- Nakatira ang mga template kada trade sa Library (kind Document template). Sa Documents from the model, piliin ang From the Library…, pumili ng isa, at papasok ang teksto nito at ang mga tag na binabasa nito; i-edit ito gaya ng gusto mo. Ang pag-publish ng sarili mong template sa Library ay parehong upload gaya ng ibang item. Hindi pa nagagawa: mga kalkulasyong lampas sa bilang at kabuuan.
