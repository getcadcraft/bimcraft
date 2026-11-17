---
title: Mula sa project file patungong BimCraft sa pamamagitan ng IFC
summary: Ang mga setting ng IFC export na pinakamahusay na nabubuksan sa BimCraft (version, property set, base quantity, room, linked model, coordinates), kung paano buksan ang resulta, at kung ano ang napapanatili ng export.
keywords: export, ifc export, rvt to ifc, i-convert, 3d, geometry, ifc2x3, ifc4, coordination view, reference view, design transfer view, property sets, base quantities, rooms, spaces, linked file, shared coordinates, survey point, project base point, mga setting
from: 3efd5fc9
---

## Ang gagawin mo

I-convert ang isang project file tungo sa IFC file na maaari mong i-orbit, siyasatin, suriin at i-edit sa BimCraft. Hindi pa nababasa ng BimCraft ang 3D model sa loob ng `.rvt` file, kaya ang export ay nangyayari sa programang gumawa ng file (Revit); binubuksan ng BimCraft ang resulta.

## Mga hakbang

1. Buksan ang proyekto sa programang gumawa nito. Pinangalanan ng card ng BimCraft ang release kung saan ito na-save.
2. Magbukas ng 3D view na nagpapakita ng gusto mong i-export.
3. Piliin ang **File > I-export > IFC**.
4. Sa export dialog, pumili ng setup (o **Modify setup…**) na may mga setting sa ibaba.
5. Pumili ng folder at pangalan ng file, at i-export.
6. Sa BimCraft, i-click ang {{ui:Pumili ng file}} at piliin ang bagong `.ifc` file. Ang mga linked model na na-export bilang sarili nilang file ay mabubuksan sa parehong eksena gamit ang {{ui:Magdagdag ng model}}.

## Ang mga setting na pinakamahusay na nabubuksan dito

| Setting sa exporter | Piliin | Bakit |
|---|---|---|
| IFC version | **IFC4 Reference View** para sa pagtingin, pagsusuri at takeoff; **IFC2X3 Coordination View 2.0** kapag kailangan ng iba ang IFC2X3 | Parehong ganap na nabubuksan. Nabubuksan din ang **IFC4 Design Transfer View**, na may mas eksaktong hugis, pero mas malaki ang file at mas mabagal. |
| File type | **IFC** (plain) | Hindi nagbubukas ang BimCraft ng `.ifczip` o `.ifcxml`. |
| Phase / visible elements | Ang phase na ibig mo, at **Export only elements visible in view** kapag inayos mo ang 3D view para dito | Hindi isinasama ang mga itinago mo nang sinadya. |
| Property sets | **Export Revit property sets** at **Export IFC common property sets** | Sila ang magiging property set na ipinapakita ng BimCraft sa {{ui:Properties}}, at ginagamit ng {{ui:Find}}, {{ui:Color}} at {{ui:Model checks}}. |
| Base quantities | **Export base quantities** | Ginagamit ng {{ui:Quantity totals}} at ng mga schedule ang mga ito (haba, lawak, volume) sa halip na hulaan. |
| Rooms and areas | **Export rooms in 3D views** (o ang opsyong Rooms / Spaces) | Darating ang mga silid bilang space: i-click ang {{ui:Spaces}} para makita ang mga ito. |
| Linked files | **Export linked files as separate IFCs** | Bawat link ay nagiging sarili nitong file; buksan silang magkasama gamit ang {{ui:Magdagdag ng model}} at magkakahanay sila. |
| Coordinate base | **Shared coordinates** (o ang survey point) | Dala na ng file ang lugar nito sa mapa (IfcMapConversion), kaya gumagana ang Measure › Location, mga map layer sa lupa at mga point cloud na inilagay ayon sa map coordinates. Pinananatiling malapit sa origin ng project base point ang model, pero wala ang lugar nito sa mapa. |
| Split walls and columns by level | On, kapag kumukuha ka ng dami ayon sa storey | Ang bahagi ng bawat storey ay sariling elemento. |

## Ang dapat mong makita

Ang model sa 3D, kasama ang mga storey mula sa mga level ng proyekto at ang impormasyon ng proyekto sa panel na {{ui:File}}. Ipinapakita ng **Exported from** ang exporter.

## Ang napapanatili ng export, at ang hindi

- **Napapanatili**: geometry, storey, uri ng elemento, pangalan, type, karamihan ng parameter (bilang property set), base quantity kapag hiniling, mga silid bilang space, at ang lugar sa mapa kapag shared coordinates.
- **Hindi napapanatili**: view, sheet, annotation, family bilang editable na family, workset at design option. Ang IFC file ay snapshot ng mga elemento ng model, hindi ng proyekto. Para sa mga sheet, i-export ang DWG at buksan ito sa 2D view.

## Mga karaniwang pagkakamali

- **Nawawala ang mga parameter sa BimCraft.** I-on ang mga opsyon sa property set sa itaas at i-export muli.
- **Nawawala ang mga silid.** I-on ang opsyon ng mga silid, saka i-click ang {{ui:Spaces}}.
- **Pag-save bilang `.ifczip`.** Pumili ng plain IFC, o i-unzip ang `.ifczip`.
- **Walang lugar sa mapa.** I-export gamit ang shared coordinates; tiyaking nakatakda ang survey point ng proyekto.
- **Pag-asang babalik sa proyekto ang mga edit.** Ang mga edit na sine-save mo sa BimCraft ay napupunta sa bagong IFC file, hindi sa project file.
