---
title: Mga grid at haligi
summary: Ilatag ang mga grid line na may numbered at lettered na bubble, ayon sa spacing o isa-isa, gumuhit ng mga pader at haligi sa kahabaan nito, at makita ang mga ito sa plano, elevation at section.
keywords: grid, mga grid, grid line, column grid, axis, axes, bubble, gridline, structural grid, 1 2 3, A B C, haligi, mga haligi, pillar, post, snap, IfcGrid, IfcColumn
from: bf99a8f7
---

## Ang gagawin mo

Ilatag ang isang gusali sa grid, pagkatapos gumuhit ng mga pader at maglagay ng mga haligi sa kahabaan ng mga linya nito.

## Maglagay ng buong grid

1. I-on ang {{ui:Draw}}, pagkatapos piliin ang {{ui:Build}} › {{ui:Grid}}.
2. I-click ang {{ui:Maglagay ng grid…}}. Sabihin kung ilang **numbered lines** (1, 2, 3…) at **lettered lines** (A, B, C…) ang gusto mo, at gaano kalayo ang pagitan ng mga ito. Mag-type ng isang spacing, o ilang spacing na hiwalay ng kuwit para sa hindi pantay na bay (halimbawa `20', 24', 20'`). Ang {{ui:Lampas sa huling linya}} ang layo ng bawat linya lampas sa mga panlabas na linya ng kabilang uri, at ang {{ui:Naka-ikot (degrees)}} ang nag-iikot sa buong grid.
3. I-click ang {{ui:Ilagay}}, pagkatapos i-click kung saan pupunta ang unang salubungan (1 / A). Sumusunod ang preview sa pointer.

Tumatakbo pataas sa plano ang numbered lines at nakalatag sa kabuuan nito; tumatakbo sa kabuuan ng plano ang lettered lines at nakalatag pataas. Nilalaktawan ang I at O sa mga letra, gaya ng sa mga drawing, kaya hindi sila mababasa bilang 1 at 0.

## Gumuhit ng grid line isa-isa

Kapag naka-on ang {{ui:Grid}}, i-click kung saan magsisimula at magtatapos ang isang linya. Makukuha nito ang susunod na label ng mga linyang tinatakbuhan nito (pagkatapos ng 3 ay 4; pagkatapos ng B ay C). Pindutin ang {{key:Esc}} para huminto.

## Baguhin ang isang grid line

Kapag naka-on ang {{ui:Grid}}, i-click ang isang linya para piliin ito. Mag-type ng bagong {{ui:Label}} at pindutin ang {{key:Enter}}, o i-click ang {{ui:Burahin ang linyang ito}} (o pindutin ang {{key:Delete}}). Inilalagay ng {{ui:Mga bubble}} ang mga bubble sa magkabilang dulo, sa simula o dulo ng bawat linya, o sa wala. Ang bawat pagbabago ay isang hakbang: {{key:Mod+Z}} ang magbabawi nito.

## Gumuhit sa kahabaan ng grid

Ang tool na {{ui:Pader}}, ang tool na {{ui:Haligi}} at ang iba pang drawing tool ay kumakabit (snap) sa mga grid line at sa lugar ng pagsasalubong nila (ang snap mark ay maliit na bilog na may krus).

**Mga haligi:** piliin ang {{ui:Build}} › {{ui:Haligi}}, piliin ang hugis (parihaba o bilog), ang laki, at kung ang haligi ay tatakbo **hanggang sa level sa itaas** o hanggang sa nakapirming taas, pagkatapos i-click. Naglalagay ang {{ui:Sa bawat salubungan ng grid}} ng haligi sa bawat salubungan na wala pang haligi. I-click ang haligi para baguhin ang hugis, laki o taas nito sa {{ui:Properties}}; tinatanggal ito ng {{key:Delete}}. Ang mga haligi na tumatakbo hanggang sa level sa itaas ay sumusunod dito kapag nagbago ang taas nito.

## Ano ang dapat mong makita

- Ang grid sa plano ng bawat level, may bubble at label nito sa dulo ng bawat linya.
- Mga grid line sa drawing set: sa mga plano, at sa elevation at section kung saan nakikita ang linya nang patayo sa tingin, na may bubble nito sa ibabaw ng gusali. Tingnan ang [Mga elevation, section at sheet](topic:sheets).
- Sa IFC file: isang grid para sa gusali (IfcGrid, ang mga numbered line nito sa isang listahan at ang mga lettered line sa isa pa), at ang mga haligi bilang IfcColumn na may laki, taas at quantity nila. Ipinapakita ng ibang BIM program ang dalawa.

:::note
Ang grid na galing sa file ng ibang program ay ipinapakita, at kumakabit dito ang mga tool, pero hindi mababago rito ang mga linya nito.
:::
