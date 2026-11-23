---
title: Dalhin ang sarili mong object at family file sa Library
summary: Basahin ang family file (.rfa) at mga IFC, DWG, DXF, glTF o OBJ na file sa tab na Library, ilagay ang mga ito gaya ng anumang item ng library, at itago sa Mga object ko, isang pribadong listahan na ikaw lang ang makakakita.
keywords: rfa, family, mga family, family library, sariling object, mga object ko, pribadong object, pribadong library, mag-import ng object, manufacturer content, bim objects, ifc object, gltf, obj, dwg block, itago, palitan, migrate
from: 886261f8
---

## Ano ang gagawin mo

Dalhin sa BimCraft ang mga object na mayroon ka na: isang family library mula sa Revit, IFC o DWG download ng manufacturer, o mesh mula sa ibang modeler. Binabasa mo ang file sa tab na {{ui:Library}}, inilalagay ang object sa model mo bilang tamang IFC element, at, kung gusto mo itong gamitin muli sa susunod, itinatago mo ito sa {{ui:My objects}}.

## Mga hakbang

1. Buksan ang IFC model, o magsimula ng bagong gusali.
2. I-click ang tab na {{ui:Library}} sa tabi ng {{ui:Properties}}.
3. I-click ang {{ui:Files…}}, pagkatapos ang {{ui:Choose a file…}}. Pumili ng isang file o ilan nang sabay: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` o `.csv`. O i-click ang {{ui:Choose a folder…}} para basahin ang buong folder at ang mga folder sa loob nito (hanggang 200 file nang sabay).
4. I-click ang isang card para makita kung ano ang nabasa: ang preview ng plano, ang pangalan, maker at model, ang mga sukat at mga tala.
5. I-click ang {{ui:Place in plan}} o {{ui:Place in model}} para ilagay ito.
6. Para magamit ulit ito sa ibang proyekto, i-click ang {{ui:Keep in my objects}}. Kapag ilang file ang nabasa, ang Itago lahat sa mga object ko ay nagtatago ng lahat nang sabay.
7. Mamaya, i-click ang {{ui:My objects}} sa tab ng Library para mahanap ang mga ito. Inilalagay, pinapalitan at ina-update ang mga ito gaya ng anumang item ng library.

Binabasa ang mga file sa tab na ito. Walang ina-upload hanggang piliin mo ang {{ui:Keep in my objects}}.

## Ano ang nababasa mula sa bawat uri ng file

| File | Ano ang makukuha mo |
|---|---|
| IFC | Bawat element type bilang object na may totoong 3D shape, IFC class at property sets |
| glTF, GLB, OBJ | Isang object na may totoong 3D shape bilang mesh. Itakda muna ang units at kung aling direksyon ang pataas. |
| DWG, DXF | Bawat block bilang object na may plan drawing at attributes |
| Family file (`.rfa`) | Pangalan ng family, category, maker, model, parameters at mga type nito. **Hindi ang 3D shape nito:** kinakatawan ito ng isang kahon na may Width, Depth at Height ng family. |
| CSV | Isang object bawat row: pangalan, sukat at data, iginuguhit bilang kahon |

## Family file at ang 3D shape nito

Ang 3D shape sa loob ng `.rfa` file ay nakaimbak sa format na hindi dokumentado, kaya binabasa ng BimCraft ang data ng family at hindi hinuhulaan ang geometry nito. Ganito ang sinasabi ng card: "Hindi nabasa ang geometry mula sa family na ito; kahon ang pumapalit."

Para maidala ang family na may totoong shape, i-export ito mula sa program na gumawa nito (Revit):

1. Buksan ang family, o isang proyekto kung saan nakalagay ang family.
2. Piliin ang **File > Export > IFC**. Tingnan ang [ang mga export setting na pinakamahusay na gumagana rito](topic:rvt-to-ifc).
3. Sa BimCraft, basahin ang `.ifc` file gamit ang {{ui:Files…}}. Bawat family type ay darating bilang sariling object, na may shape at property sets nito.

Maraming manufacturer ang nag-aalok ng IFC o DWG download sa tabi ng family file. Direktang nababasa ang mga iyon.

## Family types

Ang family na may ilang type ay darating bilang isang item na may pagpipiliang {{ui:Variant}}, isang variant bawat type. Bawat variant ay may mga halagang nag-iiba sa pagitan ng mga type, at sariling kahon kapag may Width at Depth ang type. Ang family na may isang type ay simpleng item na pinunan ng mga halaga ng type na iyon.

May ilang family na nag-iingat ng mga type nila sa type catalog: isang `.txt` file na may parehong pangalan sa tabi ng family file. Piliin ang dalawa nang sabay, o piliin ang folder, at ang mga row ng catalog ang magiging mga variant.

## Data ng family sa totoong shape

Kung may family file at IFC, glTF o OBJ file na may parehong pangalan ang isang folder (`Chair.rfa` at `Chair.ifc`), piliin ang dalawa nang sabay o piliin ang folder. Gagawa ang BimCraft ng isang item: ang family file ang nagbibigay ng pangalan, maker, model, parameters at types, at ang kabilang file ang nagbibigay ng totoong 3D shape. Sinasabi ng mga tala kung saang file galing ang shape. Iisang shape ang ginagamit para sa bawat type.

Kapag may larawang naka-save sa family file, ipinapakita ng mga detalye ng item ang larawang iyon sa ilalim ng plan drawing. Ipinapakita lang doon ang larawan; hindi ito itinatago kasama ng item.

## Mga object ko

Ang {{ui:My objects}} ay sarili mong pribadong listahan sa Library. Ikaw lang ang makakakita ng laman nito: wala ito sa public library, wala sa search, at hindi ito ipinapakita sa team mo. Sumusunod ito sa account mo, kaya nasa ibang computer din ang parehong mga object kapag nag-sign in ka sa library.

- Kailangan kang naka-sign in sa library para magtago ng object. Tingnan ang [mag-sign in sa library](topic:library-credits).
- Ang pagtatago ng object ay nagpapadala ng object na iyon lang sa account mo. Hanggang noon, nasa computer mo ito.
- Inaalis ng {{ui:Remove from my objects}} ang object sa listahan. Mananatili ang mga kopyang nailagay na sa mga drawing.
- Para ibahagi ang object sa lahat, i-upload ito sa public library sa halip, sa ilalim ng lisensyang pipiliin mo.

:::note
Sinusubukan pa ang My objects at maaaring hindi pa ito bukas para sa account mo. Kung nawawala ang source, o may nakasulat na "My objects is not open for this account yet", maaari ka pa ring magbasa at maglagay ng sarili mong file gamit ang {{ui:Files…}}; naka-save ang mga ito sa loob ng model mo.
:::

## Mga karaniwang pagkakamali

- **Pag-asa sa totoong shape ng family mula sa `.rfa`.** Data lang ang nababasa. I-export ang IFC para sa shape.
- **Dalawang item kung saan inaasahan mo ang isa.** Ang family at ang shape file nito ay pinagdurugtong lang kapag eksaktong magkapareho ang mga pangalan, maliban sa dulo, at nasa parehong folder.
- **Dumarating na libu-libong beses ang laki ng mesh, o nakahiga.** Itakda ang {{ui:Units of the file}} at {{ui:Up axis of a mesh}} sa ilalim ng {{ui:Files…}} bago pumili ng file.
- **"No family data" sa isang file.** Isa itong proyekto (`.rvt` na na-save sa ibang dulo) o family template, hindi family. Tingnan ang [Basahin ang project o family file](topic:read-rvt-file).
- **Pag-iimbak ng content na hindi mo puwedeng itago.** Hindi pinapayagan ng ilang bayad na library ang kopya sa labas ng sarili nilang serbisyo. Suriin ang mga tuntunin ng content na hindi mo ginawa.
