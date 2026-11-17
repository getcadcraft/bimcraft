---
title: Mag-link ng ibang model para sa coordination
summary: Ipakita ang ibang IFC model sa tabi ng sa iyo sa pamamagitan ng reference (hindi kailanman pinagsasama), ilagay ito ayon sa shared coordinates, map coordinates o dalawang punto, mag-snap dito habang gumuguhit, at i-reload ito kapag nagbago ang file nito.
keywords: link, linked model, reference, xref, coordination, federation, structure, MEP, consultant, shared coordinates, survey, map coordinates, reload, unload, document reference, IfcDocumentReference
from: 3e0f1eab
---

## Ano ang gagawin mo

Gumuhit laban sa model ng consultant (ang structure, ang services, ang umiiral na gusali) nang hindi kinokopya ang anuman sa sarili mong file.

Ang **linked model** ay ipinapakita sa 3D view at hinihiwa sa iyong mga plano, pero hindi ito kailanman binabago at hindi kailanman sine-save sa iyong model. Tanging ang link ang itinatago ng iyong model: ang pangalan ng file at kung saan ito pupunta.

## Mag-link ng model

1. Sa seksyong {{ui:Mga naka-link na model}} ng kaliwang panel, i-click ang {{ui:Mag-link ng model…}} at piliin ang IFC file. Agad itong lumalabas, at ang row nito ay nagsasabing **Ipinapakita**.
2. Piliin kung saan ito ilalagay sa {{ui:Paglalagay}}:
   - **Shared coordinates** (para sa simula): ang mga coordinate nito ay sa iyo, gaya ng kapag parehong itinakda ang dalawang model mula sa iisang origin.
   - **Map coordinates**: pinapantay ng map coordinates ng dalawang file ang mga ito (kailangan ng parehong map conversion; sinasabi ng BimCraft kapag wala ang isa).
   - **Ayon sa dalawang punto…**: i-click ang isang punto sa naka-link na model, saka kung saan ito pupunta sa iyo; saka ang pangalawang pares. Inililipat at iniikot ang link (sa paligid ng vertical) para magkasya.
3. Ang bawat pagbabago sa link at paglalagay ay isang hakbang: {{key:Mod+Z}} ang nagbabalik nito.

## Gamitin ito

- Ipinapakita ng mga plano ang naka-link na model na hiwa sa cut height ng level bilang manipis na linya, at ang {{ui:Pader}} na tool at ang iba pang drawing tool ay nagsa-snap sa mga sulok at gilid nito.
- Pumili ng mga elemento nito sa 3D view para basahin ang mga property nila; hindi kailanman ang naka-link na model ang iyong ine-edit, kaya naka-off ang radio button nito sa {{ui:Mga model}}.
- **Nagbago ang file?** Kapag kayang bantayan ng browser ang file (file na binuksan sa pamamagitan ng file picker nito, o sa Studio), awtomatikong ni-reload ng BimCraft ang link ilang segundo matapos muling i-save ang file, at sinasabi nito iyon. Kung hindi, i-click ang {{ui:I-reload}}.
- Itinatago ng {{ui:I-unload}} ang link at pinalalaya ang memory; nananatili ang link sa iyong model. Ipinapakita ulit ito ng {{ui:I-load…}} (ikaw ang pipili ng file: hindi mabubuksan ng browser ang file sa pamamagitan lamang ng pangalan nito).
- Inaalis ng × ang link sa iyong model.

## Dapat mong makita

- Sa iyong IFC file: isang IfcDocumentReference para sa bawat link (ang pangalan ng file), nakaugnay sa project, at kung saan ito pupunta sa property set ng project na CadCraft_Links. Kapag muling binuksan ang iyong model, nakalista ang mga link nito bilang **Hindi pa naka-load** hanggang sa i-load mo ang mga ito.

:::note
Maaaring gamitin ng Clash check, Compare at Find ang naka-load na link gaya ng ibang bukas na model: tingnan ang [Sabay-sabay na tingnan ang maraming IFC model](topic:several-models).
:::
