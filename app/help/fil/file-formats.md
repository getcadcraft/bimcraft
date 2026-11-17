---
title: Ano ang binabasa ng BimCraft mula sa bawat format
summary: Eksaktong binabasa ng BimCraft mula sa IFC, project at family file, DWG at DXF, at kung ano ang iniiwan nito.
keywords: formats, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, bersyon, compatibility, ano ang binabasa
from: 9b8dfb4f
---

## IFC

| Binabasa | Mga detalye |
|---|---|
| Geometry | Bawat element na may hugis, kulay ayon sa file. Ang mga room at space ay iginuguhit na see-through at nakatago sa umpisa |
| Storeys | Mga palapag ng gusali ayon sa pagkakasunod ng elevation, at kung aling mga element ang nasa bawat isa. Ang mga element na nasa walang palapag ay pinagpapangkat bilang "Hindi nasa palapag" |
| Element counts | Ilan ang element ng bawat uri (mga pader, pinto, slab…), ipinapakita sa {{ui:Elements}} |
| Project facts | Pangalan ng proyekto, mahabang pangalan at phase; schema; ang program na nag-export, author at petsa ng export mula sa header ng file |
| Element data | Pangalan, type, object type, tag, description, GlobalId; bawat property set at quantity set sa element at sa type nito |

Maaaring i-edit: pangalan, object type, tag, description, at mga single property value. Sine-save bilang bagong IFC file. Nabubuksan ang mga schema na IFC2X3, IFC4 at IFC4X3, at binabasa ng sariling IFC engine ng BimCraft; anumang hindi pa nito kayang iguhit ay nakalista sa ilalim ng **Hindi pa iginuguhit** sa panel ng {{ui:File}}. Inililipat sa origin ang model kapag binuksan, kaya ang model na nakalagay nang malayo ay nakikita pa rin sa gitna ng screen. Hindi nabubuksan ang `.ifczip` at `.ifcxml`.

## Project at family file

`.rvt` projects, `.rte` project templates, `.rfa` families at `.rft` family templates.

| Binabasa | Mga detalye |
|---|---|
| File information | Release at build, worksharing, central model path, last saved path, user name, locale, document GUID |
| Project information | Ang sariling field ng proyekto (pangalan, numero, client, address, status…), nang walang default ng bagong proyekto |
| Family information | Pangalan ng family, kategorya, release, huling update, at mga parameter nito ayon sa grupo |
| Links | Listahan ng mga naka-link na model, CAD link, larawan at keynote table na itinuturo ng file |
| Preview picture | Ang thumbnail na naka-save sa file |

Hindi binabasa: ang 3D model, mga element, view, sheet at schedule. Nakaimbak ang mga ito sa hindi dokumentadong format. Ilang sampung kilobyte lamang mula sa bawat file ang binabasa ng BimCraft, kaya halos walang epekto ang laki ng file.

## .pln, .pla, .tpl at .bpn project file

Hindi pa nababasa: sinasabi ito ng BimCraft kapag may binuksan ka. I-export ang IFC para sa model at DWG para sa mga drawing; tingnan ang [Pagbukas ng .pln at .pla project file](topic:pln-project-files).

## DWG at DXF

| Binabasa | Mga detalye |
|---|---|
| Spaces | Model space at bawat sheet (layout), ayon sa pagkakasunod ng tab |
| Viewports | Ang mga viewport ng bawat sheet, kasama ang kanilang scale, twist at frozen na layer |
| Layers | Pangalan, kulay, on/off, frozen, plot flag at line weight |
| Objects | Lines, polylines, arcs, circles, ellipses, splines, hatches at solids, text at multiline text, blocks at attributes, dimensions, leaders at multileaders, tables, points, images |
| Linked drawings | Iginuguhit kung saan ito ipinasok, kapag nahanap ang file nito |
| Images | Iginuguhit mula sa picture file kapag nahanap (PNG, JPEG, GIF, BMP, WebP; hindi TIFF) |
| Equipment tags | Foodservice item tag (`KCL-ITEM` attributes), para sa equipment schedule |

Ang anumang iba pa ay binibilang sa ilalim ng **Hindi pa iginuguhit**, hindi hinuhulaan. Ang mga DWG format mula AutoCAD 2000 hanggang 2018 ang nasuri (tinatanggap din ang R13 at R14 na file, pero wala sa test set; hindi nabubuksan ang mas lumang DWG); ipinapakita ng panel na {{ui:Drawing}} ang format code (gaya ng AC1032). Nabubuksan ang DXF file ng bawat bersyon, kasama ang R12. Parehong binabasa ng sariling reader ng BimCraft, sa tab na ito. Walang naisusulat pabalik sa DWG o DXF.

## Sa isang folder

| Uri | Extension | Sa report |
|---|---|---|
| Mga model | `.rvt` `.rfa` `.rte` `.rft` | Naka-group kasama ang mga numbered backup, sinuri ang kalusugan, nabasa ang card, sinuri ang mga link |
| IFC | `.ifc` | Nakalista; bumubukas sa 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Nakalista kasama ang mga model na nagli-link sa kanila; nagbubukas ang DWG at DXF sa 2D, hindi ang DGN |
| Mga labi | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Nakalista sa ilalim ng **Itabi** |
| Mga housekeeping folder | `*_backup`, `*_log`, `Revit_temp`, mga nakatagong folder | Nakalista sa ilalim ng **Itabi**, hindi binabasa |

Tingnan ang [Folder report: mga role, status at link](topic:folder-roles).
