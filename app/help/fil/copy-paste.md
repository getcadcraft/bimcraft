---
title: Kopyahin, i-paste at i-duplicate ang mga library item
summary: Kopyahin ang nailagay na library item at i-paste ito kung saan ka mag-click, sa mismong lugar sa tabi ng orihinal, o sa ibang model; kopyahin ang properties ng ibang element bilang text; i-undo at i-redo.
keywords: kopyahin, copy, paste, duplicate, clipboard, i-paste sa mismong lugar, cut, burahin, piliin lahat, i-undo, i-redo, menu ng edit, higit pa, library item, placement, ulitin, array
from: 6ac15931
---

## Ano ang gagawin mo

Maglagay ng mas maraming kopya ng item na nailagay mo na: pangalawang work table, isang hilera ng lababo. Ang topic na ito ay tungkol sa **mga nailagay na library item**, ang mga element na isinulat ng BimCraft sa model: ang isa sa mga ito ay maaaring i-paste sa anumang model, kahit sa ibang tab. Ang mga pader, pinto at iba pang element ay kinokopya, ginugupit, ipinapaste at binubura nang pareho sa loob ng sarili nilang model: tingnan ang [Burahin, i-cut, kopyahin at i-paste ang mga building element](topic:edit-elements).

Nasa toolbar sa itaas ng model ang mga command: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} at {{ui:More}}, isang menu na may {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} at {{ui:Select none}}. Naka-grey ang command na hindi makakilos sa ngayon; ituro ito para mabasa kung bakit, o i-click ito at sasabihin ng status line kung bakit.

## Mga hakbang

1. Magbukas ng IFC model na may library item sa loob, o maglagay muna ng isa. Tingnan ang [Maglagay ng equipment at furniture mula sa library](topic:place-from-library).
2. I-click ang item sa 3D view. Ipinapakita ng properties nito ang isang kahon na **Library item**.
3. I-click ang {{ui:Copy}} o pindutin ang {{key:Mod+C}}.
4. I-click ang {{ui:Paste}} o pindutin ang {{key:Mod+V}}. Bubukas ang placing bar at may transparent na kahon na sumusunod sa pointer, naka-ikot na gaya ng orihinal.
5. Pindutin ang {{key:R}} para paikutin ito ng 90°, {{key:Tab}} para idikit ang likod nito sa pader, o i-type ang X at Y sa placing bar.
6. I-click kung saan pupunta ang kopya. Bawat click ay naglalagay ng isa pang kopya; pindutin ang {{key:Esc}} para tumigil.
7. I-click ang {{ui:Save as IFC}} para i-download ang na-edit na kopya ng model.

## I-paste sa mismong lugar

{{ui:More}}, {{ui:Paste in place}} o {{key:Mod+Shift+V}} ay nagpe-paste nang walang click, sa parehong X at Y at naka-ikot nang pareho:

- **Sa parehong model, sa parehong palapag**: hindi silbi ang dalawang item sa iisang eksaktong lugar, kaya ang kopya ay nasa tabi mismo ng orihinal, isang lapad ng item at 100 mm pa sa kahabaan ng sariling lapad ng item. I-paste sa mismong lugar ulit mula sa bagong kopya para makagawa ng hilera.
- **Sa ibang palapag o sa ibang model**: eksaktong parehong X, Y at ikot. Gumagamit ang BimCraft ng palapag na may parehong pangalan; kung wala, ang pinakamalapit na taas. Sinasabi ng status line kung alin.

## I-duplicate

{{ui:More}}, {{ui:Duplicate}} o {{key:Mod+D}} ay kinokopya ang napiling item at agad sinisimulang i-paste ito: isang hakbang sa halip na dalawa.

## Sa ibang model o sa ibang tab

Nananatili sa browser na ito ang kinopya mo, kaya maaari kang magbukas ng ibang IFC model, o ng BimCraft sa ibang tab, at mag-paste doon. Kailangan ng ibang model ang mismong library item: mayroon nito ang BimCraft kapag nailagay, napalitan o na-update ang item sa tab na ito. Ang item na nailagay sa naunang session ay maaaring i-paste ulit sa sarili nitong model lamang; sa ibang model, ilagay ito mula sa tab na {{ui:Library}}.

## Ano ang dapat mong makita

- Ang kopya sa model, napili, na may parehong library item, license, equipment data, quantity at note ng orihinal, at ang **susunod na bakanteng item number**. Baguhin ang number sa Properties, sa ilalim ng `CadCraft_Placement`.
- "Placed: *item* (item *n*)" sa listahan ng pagbabago. Binabawi ito ng {{key:Mod+Z}}; ibinabalik ito ng {{key:Mod+Y}}.

## Good to know

- Ang mga kopya ay nagbabahagi ng type ng orihinal, kaya lahat sila ay gumagamit ng iisang set ng geometry, gaya ng kapag naglagay ka ng parehong item nang dalawang beses.
- Sakop ng {{ui:Undo}} at {{ui:Redo}} ang bawat pagbabago: mga value na inedit mo, mga placement, paste, pagpapalit at update. Ibinabalik ng redo ang placement sa parehong lugar; ang bagong pagbabago ay nagbubura sa mga maaaring i-redo.
- Sa 2D view ng drawing ay walang maipipili, kaya walang makokopya. Gamitin ang {{ui:Edit in CadCraft}} para baguhin ang drawing, kapag lumabas ito.

## Mga karaniwang pagkakamali

- **Sinasabi ng {{ui:Paste}} na galing sa ibang model ang mga element.** Ang huling kinopya mo ay isang building element, o ilang element: ang mga ito ay napi-paste lamang sa sarili nilang model. Pumili ng isang nailagay na library item at kopyahin ito.
- **Sinasabi ng {{ui:Paste}} na galing sa ibang model ang kopya nang walang library item nito.** Ilagay ang item mula sa tab na {{ui:Library}} nang isang beses sa tab na ito, saka kopyahin at i-paste.
- **Ang {{key:Mod+C}} ay kumokopya ng text ng pahina sa halip.** May napiling text sa pahina. I-click muna ang model.

## Kaugnay

- [Mga key at mouse](topic:keyboard#edit)
- [Mga setting ng BimCraft](topic:settings)
