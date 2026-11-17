---
title: Dërgo modelin te një program renderimi
summary: Ruaj atë që shfaq pamja 3D si model glTF (.glb) me materialet, teksturat dhe llambat e tij, për programet e renderimit dhe vizualizimit që lexojnë glTF.
keywords: glb, gltf, format transmetimi gl, eksporto, renderim, render, vizualizim, kohë reale, archviz, materiale, tekstura, drita, llamba, asset, asset i personalizuar
from: e62d57dc
---

{{ui:Renderim}} te shiriti i veglave ruan atë që shfaq pamja 3D si një skedar të vetëm **.glb** (glTF 2.0, formati i hapur nga Khronos Group). Programet e renderimit që lexojnë glTF e hapin me materialet dhe llambat e modelit; Twinmotion i liston glTF dhe GLB midis skedarëve të gjeometrisë që importon dhe i mban dritat e tyre (dokumentacioni i Epic, "Importing geometry in Twinmotion"): përdor {{ui:Renderim}} dhe importo .glb aty. Asgjë nuk ngarkohet: skedari krijohet në këtë kompjuter.

## Ruaje

1. Hap modelin IFC dhe përgatit pamjen 3D: fshih katet, elementët ose modelet e lidhura që nuk do, dhe [lyej materialet](topic:paint-materials) që dëshiron të shohësh.
2. Kliko {{ui:Renderim}} (ose shkruaj `GLB`).
3. Skedari shkarkohet si "<emri i modelit>.glb". Shiriti i gjendjes thotë sa trekëndësha, materiale dhe llamba mban.

## Çfarë mban skedari

- **Gjeometria** e çdo elementi që shfaq pamja 3D, në metra, me Y lart (boshtet e vetë glTF). Një objekt për çdo kat dhe material, i emërtuar "Level 1 — Brick, red", kështu që mund të zgjedhësh një material në programin e renderimit dhe ta zëvendësosh me të vetin.
- **Materialet:** çdo ngjyrë me pamjen që zgjodhe për të te [Renderimi](topic:render) (mat, saten, i lëmuar, metal, qelq…), dhe çdo material biblioteke i lyer me ngjyrën, ashpërsinë dhe **teksturën** e tij (fotografia e tij është në skedar, e shkallëzuar në madhësinë e vet reale: një tullë është madhësia e një tullave). Qelqi është transparent.
- **Llambat:** çdo armaturë drite e ndezur te Renderim › Llambat, si dritë pike ose reflektor me ndriçimin e saj (lumenët e kthyer në kandela), ngjyrën dhe këndin e rrezes.
- **Ku ndodhet terreni:** gjerësia dhe gjatësia gjeografike e terrenit shkruhen në skedar për referencë. Programet e renderimit kanë diellin e tyre: shkruaje vendin aty.

## Çfarë lë jashtë

- Prerja (elementët e plotë hyjnë) dhe elementët e shfaqur transparent (lihen jashtë).
- Objekte element për element (në vend të kësaj një objekt për çdo kat dhe material), vetitë IFC, hartat e relievit, pamjet e ruajtura dhe ecjet e regjistruara.
- Skajet dhe sfondi.

## Enscape dhe renderuesit e tjerë me shtojcë

Enscape funksionon brenda një programi tjetër dizajni dhe nuk ka skedar për hapjen e një projekti të tërë. Dy mënyra:

- Hap **IFC**-në e modelit (Skedari › Ruaj) në programin ku funksionon Enscape; shumica e tyre lexojnë IFC. Ngjyrat vijnë me të; materialet e bibliotekës vijnë si ngjyrat e tyre.
- Shto një **pjesë të vogël** (mobilje, një armaturë) si asset të personalizuar: izolo fillimisht, pastaj kliko {{ui:Për Enscape (.gltf)}}. Biblioteka e asset-eve të personalizuara të Enscape liston skedarë .gltf, .obj dhe .fbx, jo .glb, kështu që ky buton ruan të njëjtën skenë si një **.gltf** të vetëmjaftueshëm (të dhënat binare dhe fotografitë janë brenda skedarit; nuk ka asgjë tjetër për të kopjuar bashkë me të). Enscape këshillon asete të vogla (nën rreth 20,000 trekëndësha).

:::note
Në CadCraft Studio i njëjti skedar glTF (dhe një skedar USD) mund të ruhet edhe nga {{ui:Renderim}} › Motori › **glTF file** / **USD file**, ose të hapet direkt në një program në këtë kompjuter: shih [Hap skenën në një program tjetër](topic:render-open-in). Një shtojcë ose lidhje e drejtpërdrejtë për Enscape ose Twinmotion nuk është ndërtuar. Formatet FBX dhe Datasmith nuk kanë specifikim të publikuar, kështu që BimCraft nuk i shkruan; glTF është rruga e hapur.
:::
