---
title: "Suriin ang mga clash"
summary: "Hanapin kung saan nagbabanggaan ang mga element ng isang set at ng isa pa — ducts sa beams, pader sa slabs — sa isang model o sa maraming model, may tolerance, at gawing issue ang bawat clash."
keywords: "clash, clash detection, clash check, hard clash, interference, banggaan, koordinasyon, overlap, tolerance, mep, istruktura"
from: 9cb12346
---

## Ano ang gagawin mo

Hanapin ang mga lugar kung saan nagbabanggaan ang dalawang set ng element, halimbawa ang lahat sa services model laban sa structure, pagkatapos ay tingnan ang bawat isa at panatilihin bilang issue ang mga mahalaga.

## Mga hakbang

1. Magbukas ng IFC model, at idagdag ang iba gamit ang {{ui:Add a model…}} kung maghahambing ka sa maraming model. Tingnan ang [Tingnan ang ilang IFC model nang magkakasama](topic:several-models).
2. Buksan ang {{ui:Clash check}} sa kaliwang panel.
3. Sa {{ui:Check}} at {{ui:Against}}, pumili ng dalawang set: ang mga element na napili mo, isang klase (sa bawat bukas na model), isang naka-save na search set (tingnan ang [Hanapin ang mga element ayon sa klase, pangalan o property](topic:find)), o lahat.
4. Itakda kung gaano karaming overlap ang ii-ignore, sa metro. Ang 0.01 ay nag-iignore sa mga element na nagdidikit lang.
5. I-click ang {{ui:Run}}. Tatakbo ang check sa background; pinipigilan ito ng {{ui:Cancel}}.
6. I-click ang isang resulta para makita ito: napipili at naipapakita ang dalawang element, ang iba ay see-through, at nag-zoom ang view sa kanila.
7. I-click ang {{ui:Make an issue of it}} sa ilalim ng isang resulta para isulat ito sa {{ui:Issues}} tab. Tingnan ang [Issues at BCF files](topic:issues-bcf).

## Ano ang dapat mong makita

- Nakalista ang mga clash kasama ang pangalan ng dalawang element (at ang kanilang file, kapag maraming model ang bukas) at kung gaano kalalim ang overlap, ang pinakamalalim muna.
- Ang mga mukhang nagdidikit lang, gaya ng pader na nakatayo sa slab o pinto sa kanyang butas, ay hindi clash.

## Mahalagang malaman

- Ito ay pangunahing hard-clash check: mga element na nagsasalubong ang mga surface. Hindi pa natutuklasan ang element na ganap na nakabaon sa loob ng iba (tubong nakatago sa pader).
- Ang lalim ay kung gaano nagsasapawan ang mga bounds ng dalawang element sa pinakamaliit: gabay lamang, hindi eksaktong sukat.

## Susunod

- [Sukatin ang distansya, lawak ng mukha at lokasyon sa 3D](topic:measure)
- [Itago, ihiwalay at gawing see-through ang mga element](topic:hide-and-isolate)
