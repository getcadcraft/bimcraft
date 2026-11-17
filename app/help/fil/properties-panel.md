---
title: Mga field ng Properties panel
summary: Ano ang ibig sabihin ng bawat field sa Properties panel at sa File, Drawing at Folder panel, at alin sa mga ito ang maaari mong baguhin.
keywords: properties, fields, attributes, globalid, guid, copy, copy value, copy all, csv, clipboard, serial number, tag, object type, line, express id, property set, pset, quantities, schema, file panel
from: fe55b435
---

## Isang IFC element

Sa itaas ng {{ui:Properties}} panel ay makikita ang uri ng elemento nang walang prefix na "Ifc" (halimbawa "Door", "WallStandardCase", "FurnishingElement") at ang pangalan nito, o "Unnamed".

| Field | Ibig sabihin | Maaaring i-edit |
|---|---|---|
| Name | Pangalan ng elemento, kadalasan ang family at type name mula sa exporter | Oo |
| Type | Pangalan ng type ng elemento, kapag mayroon | Hindi |
| Object type | Libreng text na paglalarawan ng type, na pinupunan ng ilang exporter | Oo |
| Tag | Tag o marka ng elemento; maraming exporter ang nagsusulat dito ng element ID | Oo |
| Description | Libreng text | Oo |
| GlobalId | Permanenteng 22-character na IFC identifier ng elemento, pareho sa bawat export ng parehong elemento | Hindi |
| Line | Numero ng linya ng elemento (`#1234`) sa IFC file na ito. Nagbabago ito sa pagitan ng mga export | Hindi |

Sa ibaba ay ang **property sets**, nakaayos ayon sa pangalan:

- Bumubukas at nagsasara ang bawat set kapag i-click ang pangalan nito. Bukas ang unang tatlo.
- Ang set na may markang "(type)" ay kabilang sa type ng elemento: "Type property: ang pagbabago dito ay nalalapat sa bawat elemento ng type na ito."
- Read-only ang mga quantity set (haba, lawak, volume, bilang, timbang).
- Ipinapakita nang read-only ang mga list at enumerated value.
- Ipinapakita bilang **Oo** o **Hindi** ang mga Yes/No na value.
- Nirounding sa apat na decimal ang mga numero para sa display. Ang mga haba (property ng haba o haba ng quantity) ay ipinapakita sa {{ui:Units}} na pinili sa toolbar, kasama ang unit sa tabi nito, at maaari kang mag-type ng bagong value sa unit na iyon o sa ibang unit mark (2.4 m, 8'-0"): isinusulat ng BimCraft pabalik ang sariling numero ng file. Ipinapakita ang ibang numero gaya ng pagkakasulat sa file.
- Ang walang laman na value ay ipinapakitang *walang laman*. Ang na-edit na value ay naka-bold na may asul na bar sa tabi nito.

## Kopyahin ang value

Bawat value sa {{ui:Properties}} ay may maliit na copy button sa tabi nito: i-click ito para ilagay sa clipboard ang value na iyon nang eksakto gaya ng ipinapakita, halimbawa ang GlobalId, serial number o anumang property set value. Hindi kailanman nagsisimula ng pag-edit ang pagkopya.

Sa itaas, kinokopya ng {{ui:Kopyahin lahat}} ang bawat value ng elemento bilang text, set bawat set, at kinokopya ng {{ui:Kopyahin bilang CSV}} ang mga ito bilang mga row ng group, property at value para i-paste sa spreadsheet; pinananatili ang mga walang laman na value para may row ang bawat field. Pareho ang gawi nito para sa elemento ng ibang bukas na model; kapag higit sa isang model ang bukas, may Model column na pangalan ng file ang simula ng CSV.

## Ang File panel (IFC)

| Field | Ibig sabihin |
|---|---|
| File, Laki | Ang file na binuksan mo |
| Schema | Bersyon ng IFC, gaya ng IFC2X3 o IFC4 |
| Project | Pangalan ng project at mahabang pangalan nito |
| Phase | Phase ng project, kung isinulat ito ng exporter |
| Exported from | Ang program na nag-export, mula sa file header |
| Author | Ang author sa file header |
| Exported | Petsa at oras sa file header |
| Elements | Ilang elementong may shape ang nakaguhit |
| Triangles | Ilang triangle ang bumubuo sa mga shape nila; sukatan kung gaano kabigat ang model |

## Ang File panel (project at family file)

| Field | Ibig sabihin |
|---|---|
| Kind | Project, Project template, Family o Family template |
| Saved in | Ang release na huling nag-save ng file |
| Build | Ang eksaktong build ng release na iyon |
| Read | Gaano karami ng file ang nabasa ng BimCraft, mula sa laki nito |

## Ang Drawing panel (DWG at DXF)

| Field | Ibig sabihin |
|---|---|
| Format | Ang release kung saan na-save ang drawing, kasama ang format code nito, gaya ng AC1032 |
| Units | Ang insertion units ng drawing, kapag nakatakda |
| Entities | Ilang object ang nabasa |
| Layers | Ilang layer |
| Sheets | Ilang sheet (layout), o Wala |
| Linked drawings | Ilan sa mga naka-link na drawing ang natagpuan at na-load |
| Equipment | Ilang tagged na equipment item ang nasa mga sheet |

## Ang Folder panel

| Field | Ibig sabihin |
|---|---|
| Folder, Files, Laki | Ang folder na binuksan mo, ilang file ang laman nito at kabuuang laki nito |
| Models | Project at family file, bawat isa ay binibilang ang backup nito nang isang beses |
| CAD drawings, IFC models | Ilan ng bawat isa |
| Problems | Ilang kopya ng model ang hindi kumpleto o hindi mabasa, o Wala |
