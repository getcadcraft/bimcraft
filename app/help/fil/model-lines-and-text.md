---
title: Model linya at model text: iginuhit sa model, sa work plane
summary: Ang model linya ay isang linya, polyline o arko na nasa model at lumalabas sa bawat view na nakakakita nito. Ang model text ay 3D na lettering na may tunay na lalim. Pareho silang iginuguhit sa work plane.
keywords: model line, model text, 3D text, lettering, palatandaan, signage, linya sa 3D, arko, polyline, work plane, extruded text, font, lalim, detail line, drafting line, annotation, IfcAnnotation
from: fc9cccb5
---

## Ano ang gagawin mo

Gumuhit ng mga linya at lettering na bahagi ng model, hindi ng iisang view lang.

## Mga hakbang

1. Itakda muna ang work plane (tingnan ang **Ang work plane**). Ang level plane ay iginuguhit sa plano; ang patayong plane ay sa Work Plane Viewer.
2. Para sa linya, piliin ang **Model Linya** sa menu na **Build** at piliin ang **Linya**, **Polyline** o **Arko (tatlong punto)**:
   - ang linya ay dalawang click;
   - ang polyline ay isang click sa bawat punto, pagkatapos ay Enter o double-click. Ang click sa unang punto ay nagsasara nito;
   - ang arko ay tatlong click: simula, isang puntong dadaanan nito, at dulo.
3. Para sa text, piliin ang **Model Teksto**. I-type ang mga salita, itakda ang taas ng capital at ang lalim, pagkatapos i-click kung saan magsisimula ang text (ang kaliwang dulo ng baseline nito).
4. Piliin ang linya o text para makita ito sa **Properties**. Maaaring baguhin doon ang mga salita, taas at lalim ng text. Inaalis ito ng Burahin.

## Saan sila lumalabas

- Lumalabas ang model linya sa plano ng level nito, sa 3D view, sa elevation at section panel, at sa Work Plane Viewer kapag nasa work plane ito. Ang drafting linya (Annotate, Linya) ay sa iisang view lang.
- Ang model text ay solid na geometry: lumalabas ito kung saan lumalabas ang model: sa plano, sa 3D, sa elevation at section, at sa mga sheet.
- Hindi pa naiguguhit sa mga naprintang sheet ang model linya. Ang model text ay naiguguhit.

## Ang font

Ginagamit ng model text ang parehong font ng mga sheet at PDF: Liberation Sans, sa ilalim ng SIL Open Font License. Kapag wala sa font ang isang letra, iginuguhit ito bilang tandang pananong at sinasabi sa iyo kung alin. Iisa ang font at iisa ang weight. Ang mga letra ay pinaghihiwalay ayon sa sariling lapad ng font, nang walang kerning.

## Sa IFC file

- Ang model linya ay IfcAnnotation na may object type na ModelLine. Ang hugis nito ay 3D curve: polyline, o trimmed circle para sa arko.
- Ang model text ay IfcBuildingElementProxy na may object type na ModelText. Ang hugis nito ay isang extruded solid para sa bawat piraso ng letra, kasama ang mga butas ng mga letrang gaya ng O at B. Ang mga quantity nito ay face area at volume (face area na pinarami ng lalim).

## Mabuting malaman

- Anumang laki ay ginagawa ayon sa hiling mo. Tanging linyang walang haba, arkong ang tatlong punto ay nasa iisang linya, o text na walang letra ang tinatanggihan, dahil walang gagawin.
- Ang bawat linya, at bawat text o pagbabago rito, ay isang hakbang ng I-undo.
