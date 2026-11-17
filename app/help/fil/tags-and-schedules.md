---
title: I-tag ang mga elemento at mag-schedule ayon sa tag
summary: Gumawa ng sarili mong mga tag (pangalan, uri, pinapayagang values, aling mga class), i-tag ang maraming elemento nang sabay, at gumawa ng mga schedule na ang mga column, filter at grupo ay binabasa ang mga tag. Naka-save ang mga tag sa IFC.
keywords: tags, tag, pag-tag, custom properties, parameters, shared parameters, property set, pset, schedule, filter, group by, tapos, fire rating, bulk edit, csv
from: 9cc7c90d
---

## Ano ang gagawin mo

Ang tag ay sarili mong property, gaya ng *Tapos* o *Fire rating*. Tinutukoy mo ito minsan para sa project, itinatakda sa maraming elemento nang sabay, at mababasa ito ng bawat schedule sa BimCraft: ang tag schedule dito, {{ui:Dami}}, Find, Color by property at [Mga dokumento mula sa model](topic:documents-from-the-model).

## Mga hakbang

1. Magbukas ng IFC model, o magsimula ng bagong building.
2. Sa kaliwang panel, sa ilalim ng {{ui:Dami}}, buksan ang {{ui:Mga Tag}}.
3. I-click ang {{ui:Magdagdag ng tag}}. Bigyan ito ng pangalan, piliin ang uri nito, at kung gusto mo, ilista ang mga pinapayagang value (may kuwit) at ang mga class na para dito (`IfcDoor`, `IfcWall` …). I-click ang {{ui:Idagdag ang tag}}.
4. Piliin ang mga elemento sa model (nakakatulong ang Find: pumili ng bawat pinto nang sabay).
5. Sa ilalim ng {{ui:I-tag ang pinili}}, pumili o mag-type ng value para sa bawat tag na gusto mong itakda, iwan ang iba gaya ng mga ito, at i-click ang {{ui:Ilapat sa … piniling elemento}}.
6. Sa ilalim ng {{ui:Iskedyul ng tag}}, i-tick ang mga column, magdagdag ng filter, pumili ng {{ui:Pagpangkatin ayon sa}}, saka {{ui:I-download ang CSV}}.

## Ano ang dapat mong makita

- Isang hakbang sa change list para sa bawat definition na na-save at bawat tagging; binabawi ito ng {{ui:I-undo}}.
- Ang mga elemento ng class na hindi para sa tag ay hindi kasama sa tag na iyon, at sinasabi ng status line kung ilan sila.
- Naglilista ang tag schedule ng isang hilera bawat elemento, nakagrupo ayon sa field na pinili mo; i-click ang unang cell ng hilera para piliin ang elementong iyon.
- Inililista ng {{ui:Dami}} ang mga tag sa ilalim ng `CadCraft_Tags`, kaya maaari mong i-total doon ang mga lawak o bilang ayon sa tag.

## Mga uri

Pareho ang listahan ng uri sa family parameters: Haba (millimeters), Anggulo (degrees), Numero, Buong numero, Oo / Hindi, Pen (1–16), Teksto, Materyal at Fill. Ang value na hindi tumutugma sa uri nito, o wala sa mga pinapayagang value, ay tinatanggihan na may mensahe, at walang nagbabago.

## Mahalagang malaman

- Plain IFC ang lahat, kaya nababasa ng ibang program ang mga value: nasa property set na `CadCraft_TagDefs` sa project ang mga definition, at nasa property set na `CadCraft_Tags` sa bawat elemento ang mga value (isang property bawat tag). Isinusulat ang mga haba sa length unit ng file.
- Ang `IfcWall` sa mga class ng tag ay tumatanggap din ng standard-case at elemented na pader.
- Kapag pinalitan mo ng pangalan ang isang tag, papalitan din ang mga value nito sa bawat elemento sa iisang hakbang. Kapag tinanggal mo ang tag, tanggal lang ang definition nito: nananatili sa mga elemento bilang plain property ang mga value na naitakda na. Burahin muna ang mga ito (piliin ang {{ui:I-clear}}) para matanggal sila.
- Hindi pa nagagawa ang mga tag sa CadCraft drafting app (block attributes).
