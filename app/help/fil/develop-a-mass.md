---
title: Paunlarin ang building mass mula sa site study
summary: Kunin ang building mass na pinag-aralan sa site view ng CivilCraft at paunlarin ito sa mga palapag, pader at sahig, habang nananatili ang lugar ng site sa mapa.
keywords: mass, building mass, massing, site study, paunlarin, CivilCraft, ibigay, levels, walls, floors, footprint, georeference, IFC
from: 557b94d1
---

Ang site view ng CivilCraft ay maaaring gumuhit ng mga building mass sa isang parcel at subukan ang mga ito laban sa lupa, sa mga limit na i-type mo, at sa araw. Binubuksan ng **Paunlarin sa BimCraft** doon ang BimCraft sa bagong tab kasama ang mga mass; sine-save ng **Mga mass bilang IFC** ang mga ito bilang file na binubuksan mo rito sa karaniwang paraan. Sa alinmang paraan, ang bawat mass ay dumarating bilang isang site, isang building na may isang level kada palapag, at isang block (ang mismong mass) na dala ang mga numero nito.

## Paunlarin ang mass

1. Pumili ng mass sa 3D view. Ipinapakita ng Properties ang gamit nito, mga palapag at taas ng palapag, footprint, gross floor area, kung paano ito nakapuwesto sa dalisdis, at ang parcel nito.
2. I-click ang **Paunlarin ang mass na ito**.

Sa isang undo step, ang bawat level ng gusaling iyon ay nagkakaroon ng pader sa paligid ng footprint (ang footprint ay ang panlabas na mukha ng pader; bawat pader ay umaabot hanggang sa level sa itaas, at ang pinakataas ay isang palapag ang taas), at isang sahig sa ilalim ng buong gusali. Pinapalitan ang block, at pinapanatili ng gusali ang mga numero ng study sa property set na `CadCraft_SiteMass`, na minarkahang developed. Walang bubong: nakadepende ang bubong sa disenyo.

## Ang lugar ng site

Ang file mula sa CivilCraft ay nakasulat sa sariling length unit ng project, at kapag may coordinate system ang project ng CivilCraft, dinadala ito bilang map conversion ng project. Hindi ginagalaw ng pagpapaunlad ng mass ang bagay na iyon, kaya nananatili ang gusali kung nasaan ito ayon sa mapa.
