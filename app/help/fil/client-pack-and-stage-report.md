---
title: "Client pack, stage report, at paghahambing ng mga opsyon"
summary: "Gumawa ng client pack o stage report mula sa model, kasama ang mga massing option na pinaghahambing ayon sa lawak at cost, floor area, mga drawing kasama ang kanilang revision, at kasaysayan ng issue. Pinananatili ng bawat figure ang mga element na nasa likod nito."
keywords: "client pack, presentation, stage report, report, paghahambing ng opsyon, opsyon, ihambing ang mga opsyon, lawak at cost, cost bawat opsyon, walang rate, massing, floor area, listahan ng drawing, kasaysayan ng issue, figure, naka-link na figure"
from: f6679bf5
---

## Ano ang gagawin mo

Gumawa ng client pack o stage report mula sa model sa kasalukuyang estado nito, at ihambing nang magkatabi ang mga naka-save na massing option ayon sa lawak at cost.

## Mga hakbang

1. Sa kaliwang panel, buksan ang **Client pack and stage report**.
2. Piliin ang **Open in Documents** sa tabi ng Client pack o Stage report. Lalabas ang dokumento sa Documents mula sa model, kung saan mo mababago ang teksto nito.
3. Sa preview, i-click ang isang figure para mapili ang mga element na nasa likod nito.
4. Piliin ang **Build the pack**. Isang zip ang sine-save: ang dokumento bilang PDF, larawan ng 3D view, at `figures.csv`, na naglilista ng bawat figure kasama ang GlobalIds ng mga element nito.

## Ang mga field

Magagamit mo ang mga ito sa alinmang dokumento.

| Field | Ano ang inilalabas nito |
|---|---|
| `{{stage}}` | Ang yugto ng proyekto mula sa drawing details. |
| `{{options}}` | Ang mga naka-save na massing option, magkatabi: mga palapag, taas, footprint, gross floor area, envelope at cost. |
| `{{areas}}` | Lawak ng sahig kada level, mula sa mga kuwarto. |
| `{{sheets}}` | Ang mga sheet kasama ang revision na kinatatayuan ng bawat isa at kung kailan ito huling inilabas. |
| `{{issues}}` | Kasaysayan ng issue at changelog ng drawing. |
| `{{changes}}` | Ano ang nagbago mula sa huling issue, sheet kada sheet. |

## Paano kinukwentahan ang mga opsyon

Ang cost ay galing lamang sa price table ng proyekto mo (Energy/Cost, 5D cost). Walang tinatantiya para sa iyo.

- Pinepresyuhan lang ng price row ang isang opsyon kapag ang mga klase nito ay nagbabanggit ng `IfcBuildingElementProxy`.
- Pinepresyuhan ang lawak ng sahig ng isang row na ang mga salita ay tumutukoy sa gamit ng opsyon, gaya ng office. Kapag wala, ginagamit ang row na may mga salitang gross floor area o building mass. Ang row na sa m² ay gumagamit ng gross floor area. Ang row na sa m³ ay gumagamit ng volume.
- Pinepresyuhan ang envelope (perimeter na beses taas) ng row na may salitang envelope o facade.
- Ang opsyong walang katugmang row ay nagpapakita ng **Walang rate**. Ipinapakita lang ang kabuuan kapag may rate ang bawat bahaging hinihingi.

## Mahalagang malaman

- Panatilihin ang mga opsyon gamit ang **Keep as an option** sa massing list ng room program. Tingnan ang Massing options.
- Hindi makakapili ng element ang PDF. Sa labas ng BimCraft, dala ng `figures.csv` ang link ng bawat figure sa mga element nito.

## Hindi pa naitatayo

- Hindi nailalagay sa loob ng dokumento ang mga sheet at iginuhit na view. Larawan lamang ng 3D view ang nasa pack.
