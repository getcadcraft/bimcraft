---
title: Buksan ang .pln at .pla na project file
summary: Ano ang ginagawa ng BimCraft sa mga .pln, .pla, .tpl at .bpn na file ngayon, at kung paano mag-export ng IFC at DWG mula sa mga ito para mabuksan dito ang model at mga drawing.
keywords: pln, pla, tpl, bpn, file ng project, archive, template, backup, ifc export, dwg export, translator, zone, layout
from: 41fb921d
---

## Ano ang gagawin mo

Ipasok sa BimCraft ang project na na-save bilang `.pln` (project), `.pla` (archive kasama ang library nito), `.tpl` (template) o `.bpn` (backup). Sariling file ito ng Archicad.

## Ano ang nabubuksan ngayon

- **Hindi pa nabubuksan ang mismong project file.** Hindi pa nailalathala ang format nito, at hindi pa ito binabasa ng BimCraft. Kapag may binuksan ka, sasabihin ito ng BimCraft at ituturo ka rito.
- **Tinitingnan ng BimCraft ang unang bytes ng file.** Ang mga Archicad project mula version 17 pataas ay nagsisimula sa parehong maikling signature, kaya masasabi ng BimCraft nang sigurado na Archicad project ang file. Ang file na may pangalang Archicad pero hindi nagsisimula nang ganoon ay malamang na napalitan ang pangalan, sira, o mula sa mas lumang version. Hindi nalalaman ng signature kung project, archive o template ang file.
- **Ganap na nabubuksan ang IFC export**: ang model sa 3D, mga storey, zone bilang space, element data, property set at classification, kasama ang bawat tool ng BimCraft.
- **Nabubuksan ang DWG export** sa 2D view, kasama ang mga layer at layout nito, at sa {{ui:3D}}. Para i-edit ito, gamitin ang {{ui:I-edit sa CadCraft}}.

O dalhin ang buong project bilang isang zip, kasama ang mga view, layout at property group nito: tingnan ang [Buksan ang project bundle](topic:open-project-bundle).

## I-export ang IFC (ang model)

1. Buksan ang project sa Archicad.
2. Piliin ang **File > Save As**, at piliin ang **IFC** bilang file type.
3. Pumili ng IFC translator (ang tawag ng Archicad sa set ng mga setting ng IFC export). Angkop sa BimCraft ang **IFC4 Reference View** o **IFC2X3 Coordination View 2.0**. Nabubuksan din ang IFC4X3.
4. Piliin kung ano ang i-export: ang buong project, o ang mga elemento lang na nakikita sa mga storey na tinitingnan mo.
5. I-save, pagkatapos i-click ang {{ui:Pumili ng file}} sa BimCraft at piliin ang `.ifc` file.

Suriin ang mga ito sa settings ng translator bago mag-export:

- **Zones**: i-export ang mga ito para dumating bilang space ang mga kuwarto. I-click ang {{ui:Mga space}} sa BimCraft para makita ang mga ito.
- **Properties at classifications**: i-export ang mga ito para lumabas sa {{ui:Properties}} at magamit sa {{ui:Find}}, {{ui:Color}} at {{ui:Kabuuang dami}}.
- **Plain `.ifc`**, hindi `.ifczip` o `.ifcxml`. Plain `.ifc` lang ang nabubuksan ng BimCraft.

## I-export ang DWG (ang mga drawing)

1. Buksan ang plan, section o layout na gusto mo.
2. Piliin ang **File > Save As**, at piliin ang **DWG** bilang file type.
3. Pumili ng DXF-DWG translator, at i-save.
4. Para sa buong set ng sheet, i-save ang mga layout mula sa Layout Book, o i-publish ang mga ito bilang DWG.
5. Buksan ang `.dwg` sa BimCraft. Kasama nitong nabubuksan ang mga drawing na naka-link sa export kapag nasa parehong folder; tingnan ang [Mga naka-link na drawing at picture](topic:dwg-linked-files).

## Troubleshooting

- **"… ay isang Archicad project: sinasabi ito ng unang bytes nito."** I-export ang IFC o DWG gaya ng nasa itaas, at buksan ang file na iyon.
- **"… ay may pangalang Archicad pero hindi nagsisimula nang ganoon."** Tingnan kung saan galing ang file: maaaring ibang uri ito ng file na may bagong pangalan (subukang buksan ito sa tunay nitong extension), kopyang hindi natapos, o project mula sa version bago ang 17. Buksan ito sa Archicad kung kaya mo, pagkatapos mag-export ng IFC o DWG.
- **Walang kuwarto ang model na lumabas.** Hindi na-export ang mga zone. I-on ang mga ito sa IFC translator at mag-export ulit.
- **Hindi pinuputol ang mga opening.** Sinasabi ito ng BimCraft sa ilalim ng **Hindi pa naiguhit** sa {{ui:File}} panel. Mag-export ulit; kung nanatili pa rin, buksan ang model sa program na gumawa nito at tingnan doon ang mga opening.
- **Iba ang itsura ng text sa DWG.** Maaaring nagtatago ang export ng mga font na wala sa BimCraft; gumuguhit ang BimCraft ng text sa simpleng sans-serif na font.

Tingnan din ang [Ilagay ang project file sa 3D sa pamamagitan ng IFC](topic:rvt-to-ifc) at [Ano ang binabasa ng BimCraft mula sa bawat format](topic:file-formats).
